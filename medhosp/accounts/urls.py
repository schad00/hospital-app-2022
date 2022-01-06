from django.conf.urls import url
from django.conf.urls.static import static
from accounts import views
from django.conf import settings

urlpatterns=[
    url(r'^login$',views.login),
    url(r'^logout$',views.logout),
    url(r'^send_email',views.send_email),
    url(r'^send_msg',views.send_msg),
    url(r'^savefile$',views.savefile),
    url(r'^getusers$',views.getusers),
    url(r'^adduser',views.addusers),
    url(r"^createpatient",views.createpatient),
    url(r"^finduserbyid/([0-9]+)$",views.finduserid),
    url(r"^getregisterdpatient",views.getregisterdpatient),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

