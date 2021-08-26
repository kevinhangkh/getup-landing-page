import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  // passwordFocusOut: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: [null, Validators.compose([
          Validators.required,  
          Validators.email
        ]
          )],
        password: [null, Validators.compose([
            Validators.required, 
            Validators.minLength(8),
            CustomValidators.patternValidator(/\d/, { hasNumber: true }),
            CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
            CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
            CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=[\]{};':"|,\.<>/?\\]/, { hasSpecialCharacters: true }) 
            // Escape "-" !!! otherwise any char between + and = matches the pattern
            //  !@#$%^&*()_+\-=[\]{};':"|,\.<>/?\\
          ]
          )]
      }
    );
  }

  onSubmit(value: any): void {
    console.log(value);
  }

  // togglePasswordFocusOut(): void {
  //   this.passwordFocusOut = !this.passwordFocusOut;
  //   console.log(this.passwordFocusOut);
    
  // }

}
