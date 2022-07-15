from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Team, Feed, Event
from .serializers import LoginSerializer, EventShortSerializer, EventSerializer, TeamSerializer, TeamShortSerializer
from .serializers import RegistrationSerializer


class RegistrationAPIView(APIView):
    """
    Registers a new user.
    """
    permission_classes = [AllowAny]
    serializer_class = RegistrationSerializer

    def post(self, request):
        """
        Creates a new User object.
        Username, email, and password are required.
        Returns a JSON web token.
        """
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {
                'token': serializer.data.get('token', None),
            },
            status=status.HTTP_201_CREATED,
        )


class LoginAPIView(APIView):
    """
    Logs in an existing user.
    """
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request):
        """
        Checks is user exists.
        Email and password are required.
        Returns a JSON web token.
        """
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class FeedAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        feeds = Feed.objects.order_by('-date').values()
        return JsonResponse(list(feeds), safe=False)


class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return EventSerializer
        return EventShortSerializer


class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return TeamSerializer
        return TeamShortSerializer

    def perform_create(self, serializer):
        event = get_object_or_404(Event, pk=self.kwargs.get('event_id'))
        serializer.save()
        event.participants.add(serializer)
        event.save()

