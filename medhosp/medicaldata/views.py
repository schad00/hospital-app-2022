from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import exceptions
from medicaldata.models import *
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt 
from medicaldata.serialize import ConsentemenDataSerialize,PsychoInfodataSerialize

# Create your views here.

@csrf_exempt 
def createfeelingdata(request):
    if request.method=="POST":
        requestdata=JSONParser().parse(request)
        feeling_fileserialize=ConsentemenDataSerialize(data=requestdata)
        if feeling_fileserialize.is_valid():
            patientexist=ConsentemenData.objects.filter(id_patient=requestdata['id_patient'])
            if patientexist is not None:  
                feeling_fileserialize.save()
                return JsonResponse('fiche consentement enregistre enregistre avec succes',safe=False)
            return JsonResponse( feeling_fileserialize.errors,status=400)   
@csrf_exempt 
def createpsychodata(request):
    if request.method=="POST":
        requestdata=JSONParser().parse(request)
        psychoData=PsychoInfodataSerialize(data=requestdata)
        if psychoData.is_valid():
            psychoData.save()
            return JsonResponse("data added",safe=False)
        return JsonResponse(psychoData.errors,status=400) 
       
                
         
        
             
            
            
               
                
                
                    
                
         
                
            
            
        
