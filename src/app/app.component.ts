import { Component, OnInit, VERSION } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import{MustMatch} from "./mustmatch"

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  myform: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myform = this.fb.group(
      {
        name: ["", [Validators.required, Validators.pattern("^[a-zA-Z -']+")]],

        email : ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

        password: ["", Validators.required],

        confirmpassword: ["", Validators.required],

        phone : ['',[Validators.required , Validators.pattern('[6-9]\\d{9}')]],

        gender : ['', Validators.required],

        cityName : ['',Validators.required],

        terms : ['',Validators.requiredTrue]
      },
      {
        validator: MustMatch('password', 'confirmpassword')
      }
    );
  }

  get Form() {
    return this.myform.controls
  }

 numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


  submit() {
    if (this.myform.invalid) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }
  }
}
