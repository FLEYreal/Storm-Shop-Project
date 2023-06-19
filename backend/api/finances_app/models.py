from django.db import models

class Action(models.Model):
    name = models.CharField(max_length=55, null=True)
    value = models.IntegerField(null=True)

class Viewrs(models.Model):
    date = models.DateField()
    value = models.IntegerField(null=True)  