from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def _create_user(self, first_name=None, last_name=None, email=None, phone_number=None, password=None,
                     **extra_fields):

        if not first_name or not last_name:
            raise ValueError('username required')

        if not email:
            raise ValueError('email required')

        if not phone_number:
            raise ValueError('phone_number required')

        email = self.normalize_email(email)
        user = self.model(first_name=first_name, last_name=last_name, email=email, phone_number=phone_number,
                          **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, **extra_fields):
        extra_fields.setdefault('role', 'usr')
        extra_fields.setdefault('is_superuser', False)

        return self._create_user(**extra_fields)

    def create_superuser(self, **extra_fields):
        extra_fields.setdefault('role', 'adm')
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('role') != 'adm':
            raise ValueError('Superuser must have role=adm.')

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(**extra_fields)
