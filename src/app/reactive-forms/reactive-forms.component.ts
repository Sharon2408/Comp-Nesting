import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {


  onSubmit(form: any) {
    console.log(form.value);
  }

  
  myForm1!: FormGroup;

  username: FormControl | any;
  email: FormControl | any;
  constructor() { }

  ngOnInit(): void {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.myForm1 = new FormGroup({
      username: this.username,
       email: this.email
    });


  }

}
