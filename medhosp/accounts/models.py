from django.db import models
# Create your models here.

class patients(models.Model):
    id=models.AutoField(primary_key=True)
    nom=models.CharField(max_length=200)
    postnom=models.CharField(max_length=200)
    prenom=models.CharField(max_length=200)
    DateNais=models.DateField()
    provenance=models.CharField(max_length=200)
    sexe=models.CharField(max_length=200)
    nomAccompagnant=models.CharField(max_length=200)
    EtatCivil=models.CharField(max_length=200)
    NiveauEtude=models.CharField(max_length=200)
    ZoneDesante=models.CharField(max_length=200)
    Occupation=models.CharField(max_length=200)
    LieuNaissance=models.CharField(max_length=200)
    DateExamen=models.DateField()
    photo=models.CharField(max_length=200,blank=True,null=True)
        
class users(models.Model):
    id_user=models.AutoField(primary_key=True)
    nom=models.CharField(max_length=100,null=True)
    postnom=models.CharField(max_length=100,null=True)
    Tel=models.CharField(max_length=20,null=True)
    email=models.CharField(max_length=100,null=True)
    password=models.CharField(max_length=100,null=True)
    photo=models.CharField(max_length=200,null=True)
    is_active=models.BooleanField(default=False,null=True)
    role=models.CharField(max_length=100)
    date_update=models.DateTimeField()    

