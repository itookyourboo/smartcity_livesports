from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User, Team, Event


class RegistrationSerializer(serializers.ModelSerializer):
    """
    Creates a new user.
    Email, username, and password are required.
    Returns a JSON web token.
    """

    # The password must be validated and should not be read by the client
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True,
    )

    # The client should not be able to send a token along with a registration
    # request. Making `token` read-only handles that for us.
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'token',)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    """
    Authenticates an existing user.
    Email and password are required.
    Returns a JSON web token.
    """
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(max_length=128, write_only=True)

    # Ignore these fields if they are included in the request.
    username = serializers.CharField(max_length=255, read_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        """
        Validates user data.
        """
        email = data.get('email', None)
        password = data.get('password', None)

        if email is None:
            raise serializers.ValidationError(
                'An email address is required to log in.'
            )

        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

        user = authenticate(username=email, password=password)

        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        return {
            'token': user.token,
        }


class TeamShortSerializer(serializers.Serializer):
    class Meta:
        model = Team
        fields = ('id', 'name')


class UserShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class UserSerializer(serializers.ModelSerializer):
    teams = serializers.SerializerMethodField()
    events = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'teams', 'events')

    def get_teams(self, obj):
        teams = obj.team_set.all()
        return TeamShortSerializer(teams, many=True).data

    def get_events(self, obj):
        teams = obj.team_set.all()
        events = set()
        for team in teams:
            events.update(set(team.event_set.all()))
        return EventInfoSerializer(list(events), many=True).data


class EventInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name', 'date', 'place')


class TeamSerializer(serializers.ModelSerializer):
    event = serializers.PrimaryKeyRelatedField(queryset=Event.objects.all(), default=None)

    members = UserShortSerializer(many=True)
    events = serializers.SerializerMethodField()

    class Meta:
        model = Team
        fields = '__all__'

    def get_members(self, obj):
        return UserShortSerializer(obj.members, many=True).data

    def get_events(self, obj):
        events = obj.event_set.all()
        return EventInfoSerializer(events, many=True).data


class EventShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'sport', 'caption', 'place', 'date', 'image_url')


class UserEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', )


class ApplyTeamForEventSerializer(serializers.ModelSerializer):
    event = serializers.PrimaryKeyRelatedField(queryset=Event.objects.all())
    members = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = Team
        fields = ('name', 'members', 'event')


class EventSerializer(serializers.ModelSerializer):
    participants = TeamShortSerializer(many=True)

    class Meta:
        model = Event
        fields = '__all__'

    def get_participants(self, obj):
        return TeamSerializer(obj.participants, many=True).data
