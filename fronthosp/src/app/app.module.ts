import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatStepperModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { SignatureComponent } from './components/signature/signature.component';
import { BilletMedicalComponent } from './components/billet-medical/billet-medical.component';
import { SignupComponent } from './components/signup/signup.component';
import { JuristeComponent } from './legal/juriste/juriste.component';
import { FormsjuristeComponent } from './legal/formsjuriste/formsjuriste.component';
import { PdfjuristeComponent } from './legal/pdfjuriste/pdfjuriste.component';
import { FormspatientComponent } from './aps/formspatient/formspatient.component';
import { FeelingfileComponent } from './aps/feelingfile/feelingfile.component';
import { MedicaldatapdfComponent } from './medecin/medicaldatapdf/medicaldatapdf.component';
import { FormsmedecinComponent } from './medecin/formsmedecin/formsmedecin.component';
import { FormspsychoComponent } from './psycho/formspsycho/formspsycho.component';
import { PdfpsychoComponent } from './psycho/pdfpsycho/pdfpsycho.component';
import { PsychodataComponent } from './psycho/psychodata/psychodata.component';
import { MedecindataComponent } from './medecin/medecindata/medecindata.component';
import { ApsdataComponent } from './aps/apsdata/apsdata.component';
import { SectionComponent } from './components/section/section.component';
import {sharedservice} from './service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPrintModule} from 'ngx-print';
import { CertificatComponent } from './components/certificat/certificat.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignatureComponent,
    BilletMedicalComponent,
    SignupComponent,
    JuristeComponent,
    FormsjuristeComponent,
    PdfjuristeComponent,
    FormspatientComponent,
    FeelingfileComponent,
    MedicaldatapdfComponent,
    FormsmedecinComponent,
    FormspsychoComponent,
    PdfpsychoComponent,
    PsychodataComponent,
    MedecindataComponent,
    ApsdataComponent,
    SectionComponent,
    CertificatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    ɵInternalFormsSharedModule,
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxPrintModule

  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [sharedservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
