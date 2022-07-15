import jwt

from datetime import datetime, timedelta

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, UserManager
from django.contrib.auth.models import PermissionsMixin
from django.core import validators
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from spacy import blank


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(
        validators=[validators.validate_email],
        unique=True,
        blank=False
    )

    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('username', )

    objects = UserManager()

    def __str__(self):
        return self.username

    @property
    def token(self):
        return self._generate_jwt_token()

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username

    def _generate_jwt_token(self):
        dt = datetime.now() + timedelta(days=60)

        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')

        return token


class Team(models.Model):
    name = models.CharField(max_length=255)
    members = models.ManyToManyField(User)


class Event(models.Model):
    sport = models.CharField(max_length=255)
    caption = models.CharField(max_length=255, blank=True, null=True, default='')
    description = models.CharField(max_length=1023, blank=True, null=True, default='')
    place = models.CharField(max_length=255, blank=True, null=True, default='')
    date = models.DateTimeField()
    stream_url = models.URLField(blank=True, null=True, default='')
    team_size = models.IntegerField(default=1, validators=[
        MinValueValidator(1),
    ])
    image_url = models.URLField(blank=True, null=True, default='')

    results = models.JSONField(blank=True, null=True, default=dict)

    participants = models.ManyToManyField(Team, blank=True, null=True)


class Feed(models.Model):
    title = models.CharField(max_length=255)
    image_url = models.URLField(blank=True, null=True, default='')
    date = models.DateTimeField(db_index=True)
    description = models.CharField(max_length=1023, blank=True, null=True, default='')
