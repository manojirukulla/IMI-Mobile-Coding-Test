import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl,FormControlName,NgModel } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  public firstName //= new FormControl('');
  //  public lastName//=new FormControl('');
  public person: any = { "firstName": "", "lastName": "" };
  public kids: boolean;
  public heroForm: FormGroup;
  console: any;
  //public firstName:string;

  get firstName() { return this.heroForm.get('firstame'); }

  get lastName() { return this.heroForm.get('lastName'); }


  constructor() {
     this.heroForm = new FormGroup({
      firstName: new FormControl(this.person.firstName, [
        Validators.required,
        Validators.minLength(2),
        this.forbiddenNameValidator(/^[a-zA-Z0-9]*$/) // <-- Here's how you pass in the custom validator.
      ]),
      lastName: new FormControl(this.person.lastName, [
        Validators.required,
        Validators.minLength(2),
        this.forbiddenNameValidator(/^[a-zA-Z0-9]*$/) // <-- Here's how you pass in the custom validator.
      ]),
      //power: new FormControl(this.hero.power, Validators.required)
    });

    // console.log(this.heroForm);
    // console.log(this.heroForm.get('lastName'));
  }

  ngOninit() {
    // this.heroForm = new FormGroup({
    //   firstName: new FormControl(this.person.firstName, [
    //     Validators.required,
    //     Validators.minLength(2),
    //     this.forbiddenNameValidator(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/i) // <-- Here's how you pass in the custom validator.
    //   ]),
    //   lastName: new FormControl(this.person.lastName, [
    //     Validators.required,
    //     Validators.minLength(2),
    //     this.forbiddenNameValidator(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/i) // <-- Here's how you pass in the custom validator.
    //   ]),
    //   //power: new FormControl(this.hero.power, Validators.required)
    // });

  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : { forbiddenName: { value: control.value } };
    };

  }
  log() {

    console.log(this.heroForm.get("firstName").value);
    console.log(this.heroForm.get("lastName").value);
    if(this.kids)
    {
      console.log("hasKids");
    }
    else{
      console.log("No Kids");
    }
    
  }



}
