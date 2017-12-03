import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  styles:[`input.ng-invalid{border-left:4px solid red;}
           input.ng-valid{border-left:4px solid green;}`]
})
export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl('Deepak',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email:new FormControl(),
    address:new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null,Validators.pattern('^[1-9][0-9]{5}'))
    })
  });

  mySubmitHandler(){
    console.log(this.userForm.value);
  }
}
