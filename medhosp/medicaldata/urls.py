from django.conf.urls import url
from django.conf.urls.static import static
from medicaldata import views
from django.conf import settings



urlpatterns=[
    url(r'^createfeelingdata$',views.createfeelingdata), 
    url(r'^createpsydata$',views.createpsychodata) 
]