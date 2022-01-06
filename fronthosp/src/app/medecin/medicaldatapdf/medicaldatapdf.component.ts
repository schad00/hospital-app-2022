import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import jsPDF from "jspdf"
import { Html2CanvasOptions } from 'jspdf';
import{med} from  '../../service/med.service'
@Component({
  selector: 'app-medicaldatapdf',
  templateUrl: './medicaldatapdf.component.html',
  styleUrls: ['./medicaldatapdf.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class MedicaldatapdfComponent implements OnInit {
  showspinner=false;
  message:String;
  isChecked:'oui'| 'Non'='Non';
  sexe: any;

  vomi=true;
  public medata:{};
  constructor(private med:med) {}

  ngOnInit() {
    this.medata=this.med.data();

    console.log(this.medata);
  }

  loadspiner(){
    this.showspinner=true;
    setTimeout(()=>{
     this.showspinner=false;
     this.message="salut chad"
    },2000)
  }

  /*downloadpdf(){
      const doc=new jsPDF('p','pt','a4');
     doc.html(this.el.nativeElement,{
       callback:(pdf)=>{
        doc.save();
       }
     });
      //doc.text("hell",15,15);
      //doc.text("schadrackkabinzo@gmail.com",100,100);
      }*/




}
