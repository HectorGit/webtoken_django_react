# Generated by Django 3.2.13 on 2022-07-04 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DeskUserData',
            fields=[
                ('primary_key', models.CharField(max_length=60, primary_key=True, serialize=False)),
                ('user_id', models.BigIntegerField()),
                ('hour', models.BigIntegerField()),
                ('date', models.DateField()),
                ('time_active', models.BigIntegerField()),
                ('time_total', models.BigIntegerField()),
                ('calories', models.FloatField()),
                ('timestamp', models.CharField(max_length=60)),
                ('movements', models.BigIntegerField()),
            ],
        ),
    ]
