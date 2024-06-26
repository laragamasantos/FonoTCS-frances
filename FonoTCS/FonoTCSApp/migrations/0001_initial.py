# Generated by Django 5.0.2 on 2024-02-20 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('FullName', models.CharField(max_length=500)),
                ('Email', models.EmailField(max_length=500, primary_key=True, serialize=False)),
                ('Password', models.CharField(max_length=500)),
                ('Gender', models.CharField(max_length=500)),
                ('Age', models.IntegerField()),
                ('GradYear', models.IntegerField()),
                ('HighDegree', models.CharField(max_length=500)),
                ('DegreeYear', models.IntegerField()),
            ],
        ),
    ]
