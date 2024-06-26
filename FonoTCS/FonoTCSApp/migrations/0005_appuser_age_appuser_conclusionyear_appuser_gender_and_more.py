# Generated by Django 5.0.2 on 2024-04-20 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FonoTCSApp', '0004_auto_20240325_1915'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='age',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='appuser',
            name='conclusionYear',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='appuser',
            name='gender',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='appuser',
            name='highestDegree',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='appuser',
            name='isTeacher',
            field=models.BooleanField(default=False),
        ),
    ]
