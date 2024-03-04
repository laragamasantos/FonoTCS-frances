# Generated by Django 5.0.2 on 2024-02-23 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FonoTCSApp', '0002_remove_user_password_user_groups_user_is_superuser_and_more'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('username', models.CharField(max_length=50)),
                ('groups', models.ManyToManyField(related_name='user_groups_app', to='auth.group')),
                ('user_permissions', models.ManyToManyField(related_name='user_permissions_app', to='auth.permission')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
