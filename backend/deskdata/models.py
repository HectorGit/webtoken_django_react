from django.db import models

class DeskUserData(models.Model):
    primary_key = models.CharField(max_length=60, primary_key=True) # arbitrary length
    user_id = models.BigIntegerField()
    hour = models.BigIntegerField()
    date = models.DateField()
    time_active = models.BigIntegerField()
    time_total = models.BigIntegerField()
    calories = models.FloatField()
    timestamp = models.CharField(max_length=60)
    movements = models.BigIntegerField()