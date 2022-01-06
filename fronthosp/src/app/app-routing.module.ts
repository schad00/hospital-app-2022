import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApsdataComponent } from './aps/apsdata/apsdata.component';
import { FeelingfileComponent } from './aps/feelingfile/feelingfile.component';
import { FormspatientComponent } from './aps/formspatient/formspatient.component';
import { BilletMedicalComponent } from './components/billet-medical/billet-medical.component';
import { CertificatComponent } from './components/certificat/certificat.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SectionComponent } from './components/section/section.component';
import { SignatureComponent } from './components/signature/signature.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsjuristeComponent } from './legal/formsjuriste/formsjuriste.component';
import { JuristeComponent } from './legal/juriste/juriste.component';
import { PdfjuristeComponent } from './legal/pdfjuriste/pdfjuriste.component';
import { FormsmedecinComponent } from './medecin/formsmedecin/formsmedecin.component';
import { MedecindataComponent } from './medecin/medecindata/medecindata.component';
import { MedicaldatapdfComponent } from './medecin/medicaldatapdf/medicaldatapdf.component';
import { FormspsychoComponent } from './psycho/formspsycho/formspsycho.component';
import { PdfpsychoComponent } from './psycho/pdfpsycho/pdfpsycho.component';
import { PsychodataComponent } from './psycho/psychodata/psychodata.component';



const routes: Routes = [

  //routes for medecin
  {path:'medecin',component:MedecindataComponent},
  {path:'medecin/formulaire/patients',component:FormsmedecinComponent},
  {path:'medecin/pdf',component:MedicaldatapdfComponent},
  // end

  //routes for psycho
  {path:'psycho',component:PsychodataComponent},
  {path:'psycho/formulaire/patiens',component:FormspsychoComponent},
  {path:'psycho/pdf',component:PdfpsychoComponent},
  // end
  {path:"accueill",component:SectionComponent},
  {path:"",redirectTo:"/accueill",pathMatch:'full'},
  //routes for legal
  {path:'juriste',component:JuristeComponent},
  {path:'juriste/formulaire/patients',component:FormsjuristeComponent},
  {path:'juriste/pdf',component:PdfjuristeComponent},
  // end
   //routes for aps
   {path:'aps/:iduser',component:ApsdataComponent},
   {path:'aps/formulaire/consentement',component:FormspatientComponent},
   {path:'aps/pdf',component:FeelingfileComponent},
   // end

   //component
  {path:'inscription',component:SignupComponent},
  {path:'billet',component:BilletMedicalComponent},
  {path:'login',component:LoginComponent},
  {path:'certificat',component:CertificatComponent},
  {path:'signature',component:SignatureComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
