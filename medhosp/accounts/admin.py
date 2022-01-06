from django.contrib import admin

# Register your models here.
from accounts.models import *
from medicaldata.models import *

admin.site.register(users)
admin.site.register(patients)
admin.site.register(CertificatMed)
admin.site.register(PsychoInfodata)
