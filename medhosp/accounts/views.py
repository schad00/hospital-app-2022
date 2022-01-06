from django.shortcuts import render
import smtplib
from django.core.mail import  send_mail
from email.message import EmailMessage
from django.core.files.storage import default_storage
from django.views.decorators.csrf import csrf_exempt 
from django.http.response import  BadHeaderError , JsonResponse
from django.http import HttpResponse
from rest_framework.parsers import JSONParser
from accounts.models import patients, users
from accounts.serialize import patientsSerialize, usersSerialize

#from accounts.models import users
# Create your views here.



@csrf_exempt 
def send_msg(request):
    if request.method=='POST':
        subject="hey"
        body="hello med application"
        to="0994480142@vtext.com"
        msg=EmailMessage()
        msg.set_content(body)
        msg['subject']=subject
        msg['to']=to

        user="schadrackkabinzo@gmail.com"
        msg['from']=user
        password="zwjithwckfjcpvjn"
        
        server=smtplib.SMTP("smtp.gmail.com",507)
        server.starttls()
        server.login(user,password)
        server.send_message(msg)
        server.quit()
        
@csrf_exempt 
def send_email(request):
    if request.method=='POST':      
        subject = request.POST.get('subject', 'echo')
        message = request.POST.get('message', 'salut le monde')
        from_email = request.POST.get('from_email', 'schadrackkabinzo@gmail.com')
        if subject and message and from_email:
            try:
                send_mail(subject, message, from_email, ['schadrackkabinzo@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return JsonResponse('SEND')
        else:
            # In reality we'd use a form class
            # to get proper validation errors.
            return HttpResponse('Make sure all fields are entered and valid.')  

@csrf_exempt
def login(request):
    if request.method=="POST":
        data=JSONParser().parse(request)  
        user=users.objects.filter(nom=data['nom'],password=data['password'])
        if user.exists():
                         
            user_serial=usersSerialize(user,many=True)
                #request.session['id_user']
            for us in user:
                iduser=us.id_user
            request.session['id_user']=iduser       
            return JsonResponse(user_serial.data,safe=False)
        else:
            
            return JsonResponse(False,safe=False)
        
        """serialize_user=usersSerialize(user,many=True)
        return JsonResponse(serialize_user.data,safe=False)"""      
                  
        
@csrf_exempt   
def logout(request):
    if request.method=="POST":
        if 'id_user' in request.session:
            try:
                del request.session['id_user']
            except KeyError:
                pass
            return HttpResponse("You're logged out.")
        return HttpResponse("pas de session")
    
@csrf_exempt    
def savefile(request):
    file=request.FILES['uploadedfile']
    file_name=default_storage.save(file.name,file)
    #file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)


@csrf_exempt   
def getusers(request):
    if request.method=="GET":
        user=users.objects.all()
        users_serialize=usersSerialize(user,many=True)
        return JsonResponse(users_serialize.data,safe=False)
@csrf_exempt   
def getregisterdpatient(request):
    if request.method=="GET":
        allpatients=patients.objects.all()
        patient_serialize=patientsSerialize(allpatients,many=True)
        return JsonResponse(patient_serialize.data,safe=False)    
@csrf_exempt  
def addusers(request):
    if request.method=="POST":
        data_parse=JSONParser().parse(request)
        users_serialize=usersSerialize(data=data_parse)   
        if users_serialize.is_valid():
            users_serialize.save()
            return JsonResponse("user added succefully",safe=False)
        return JsonResponse("failed to add user",safe=False)
    
@csrf_exempt    
def createpatient(request):
     if request.method=="POST":
        data_ptient=JSONParser().parse(request)
        patient_serialize=patientsSerialize(data=data_ptient)   
        if  patient_serialize.is_valid():
            patient_serialize.save()
            return JsonResponse("patient ajouter added succefully",safe=False)
        return JsonResponse("failed to add patients",safe=False)
  

@csrf_exempt      
def finduserid(request,id=0):
    if request.method=='GET':   
        userdata=users.objects.filter(id_user=id)
        
        if userdata:
                
                return JsonResponse(True,safe=False) 
        return JsonResponse("user id n existe pas",safe=False)
       
            
                
            
        
        
            

    
            

        
    


    
    

