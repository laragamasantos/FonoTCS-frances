# Generated by Django 5.0.2 on 2024-05-01 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FonoTCSApp', '0006_cases_questions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questions',
            name='option_a_weight',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='questions',
            name='option_b_weight',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='questions',
            name='option_c_weight',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='questions',
            name='option_d_weight',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='questions',
            name='option_e_weight',
            field=models.FloatField(),
        ),
    ]