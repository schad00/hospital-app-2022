import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formsmedecin',
  templateUrl: './formsmedecin.component.html',
  styleUrls: ['./formsmedecin.component.css']
})
export class FormsmedecinComponent implements OnInit {
  initialForm : FormGroup;
  evaluationForm: FormGroup;
  examinationForm : FormGroup;
  suiviForm : FormGroup;
  referenceForm : FormGroup;

  descriptionDelta: any;
  loading = false;
  uuid :any;
  constructor(private route : ActivatedRoute,private formBuilder: FormBuilder,
   private router: Router) {

      this.initialForm = this.formBuilder.group({
        if_rape : ['oui',Validators.required],
        arrival_time : ['oui', Validators.required],
        kind_of_kit : ['Autre'],
        why_not_kit :['Indisponibilite'],
        if_lesions : ['oui']
      });
      this.evaluationForm = this.formBuilder.group({
        medical_evaluation : ['oui',Validators.required],
        kind_of_evaluation : ['Accueil', Validators.required],
        why_not_evaluated : ['Manque d\'intrants', Validators.required],
        evaluator_type :['Infirmier', Validators.required],
        type_of_rape : ['Agressions sexuelle', Validators.required],
        vih_advise : ['oui', Validators.required],
        other_informations : ['oui', Validators.required]
      });

      this.examinationForm = this.formBuilder.group({
        pregnant_test : ['oui',Validators.required],
        vih_test : ['oui', Validators.required],
        ist_test : ['oui', Validators.required],
        is_pregnant :['non', Validators.required],
        partner_ist_treatment : ['non', Validators.required],
        why_not_partner_tested : ['Il n\'est pas informe', Validators.required]
      });

      this.suiviForm = this.formBuilder.group({
        rendez_vous : ['oui',Validators.required],
        why_not_rendez_vous : ['Service deja recu', Validators.required],
        present_at_rendez_vous : ['oui', Validators.required],
        has_abandoned_drugs :['non', Validators.required]
      });

      this.referenceForm = this.formBuilder.group({
        reference : ['Prise en charge medicale', Validators.required]
      })

      this.uuid = this.route.snapshot.paramMap.get('uuid');
  }






  ngOnInit() {

  }





  submit() {
    let form = {
      ...this.initialForm.value,
      ...this.evaluationForm.value,
      ...this.examinationForm.value,
      ...this.suiviForm.value,
      ...this.referenceForm.value
    }

    /*this.consultationsService.savePatiendMedicalConsultation(form,this.uuid).subscribe(
      data =>{this.snackBar.open('Les donnes ont ete enregistree','', { duration: 2000 });
      this.router.navigateByUrl(this.user.homeLink);
    }, error=> console.log(error.error)
    )*/





  }


}
