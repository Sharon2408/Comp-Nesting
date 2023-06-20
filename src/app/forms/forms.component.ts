import { Component } from '@angular/core';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  powers=['Python','Java','C++','SQL','React','Angular']
  model = new Form();
 
  onSubmit(form: any) {
    console.log(form.value);
  }
}

export class Form{   
  name!: string
   email!: string
   password!: string

}

