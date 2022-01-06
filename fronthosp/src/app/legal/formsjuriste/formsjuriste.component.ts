import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formsjuriste',
  templateUrl: './formsjuriste.component.html',
  styleUrls: ['./formsjuriste.component.css']
})
export class FormsjuristeComponent implements OnInit {


  legalForm: FormGroup;
  decisionForm: FormGroup;
  referenceForm: FormGroup;
  uuid;

  constructor(private fb: FormBuilder,private route : ActivatedRoute) {
    this.legalForm = this.fb.group({
      has_received_advise: ['', Validators.required],
      if_received_advise_who: ['', Validators.required],
      why_not_received_advsise: ['', Validators.required],
      victim_agree_deposit: ['', Validators.required],
      why_do_not_agree_deposit: ['', Validators.required]

    });
    this.decisionForm = this.fb.group({
      juridiction_decision: ['', Validators.required],
      has_abandoned_pursuitt: ['', Validators.required],
      why_abandoned: ['', Validators.required]

    });
    this.referenceForm = this.fb.group({
      reference: ['', Validators.required]
    });

    //this.uuid = this.route.snapshot.paramMap.get('uuid');
  }

  ngOnInit() {
  }

  submit() {
    let form = {
      ...this.legalForm.value,
      ...this.decisionForm.value,
      ...this.referenceForm.value
    };

    //this.consultationService.savePatiendLegalConsultation(form,this.uuid).subscribe(
    //  data => this.notification.display('Les donnes ont ete enregistree'),error => console.log(error.error)
    //)
    console.log(form);
  }

}
