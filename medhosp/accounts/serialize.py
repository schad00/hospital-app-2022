from rest_framework import  serializers
from accounts.models import users,patients

class usersSerialize(serializers.ModelSerializer):

    class Meta:
        model=users
        fields=(        
                'id_user',
                'nom', 
                'postnom', 
                'Tel', 
                'email', 
                'password', 
                'photo', 
                'is_active', 
                'date_update',
                'role'
                               )

class patientsSerialize(serializers.ModelSerializer):
    
    class Meta:
        model=patients
        fields=( 
                'id',              
                'nom',
                'postnom',
                'prenom',
                'DateNais',
                'provenance',
                'sexe',
                'nomAccompagnant',
                'EtatCivil',
                'NiveauEtude',
                'ZoneDesante',
                'Occupation',
                'LieuNaissance',
                'DateExamen',
                'photo'
                            )
                                      
