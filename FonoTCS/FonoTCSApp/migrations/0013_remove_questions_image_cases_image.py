# Generated by Django 5.0.2 on 2024-05-06 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FonoTCSApp', '0012_alter_questions_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='questions',
            name='image',
        ),
        migrations.AddField(
            model_name='cases',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
