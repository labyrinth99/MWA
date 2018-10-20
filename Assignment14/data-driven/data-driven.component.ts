import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  MinLengthValidator
} from '@angular/forms';
import { Observable } from 'rxjs';
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  name: string = '';
  email: string = '';
  textarea: string = '';

  constructor(private formBuilder: FormBuilder, private gdata: GetdataService, private router: Router) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'name': ['', [Validators.required]],
        'email': ['', [Validators.required]]
      }),
      'textarea': ['', [Validators.required, Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  onSubmit() {
    console.log(this.myForm);
    this.onNavigate();
  }

  getDataAndShow() {
    this.gdata.getMyData1().subscribe(res => {
      this.name = res['name'];
      this.email = res['email'];
    });

    this.gdata.getMyData2().subscribe(res => {
      this.textarea = res[0].body;
    });
  }



  onNavigate() {
    // Imperative Routing
    this.router.navigate(['']);
  }

}
