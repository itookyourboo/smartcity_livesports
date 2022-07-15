from django.urls import re_path, include, path
from rest_framework.routers import DefaultRouter

from .views import (
    RegistrationAPIView,
    LoginAPIView,
    FeedAPIView,
    EventViewSet,
    TeamViewSet
)

router = DefaultRouter()

router.register(r'events', EventViewSet, basename='events')
router.register(r'teams', TeamViewSet, basename='teams')

urlpatterns = [
    re_path(r'^registration/?$', RegistrationAPIView.as_view(), name='user_registration'),
    re_path(r'^login/?$', LoginAPIView.as_view(), name='user_login'),
    re_path(r'^feed/?$', FeedAPIView.as_view(), name='user_feed'),
    path('', include(router.urls))
]
