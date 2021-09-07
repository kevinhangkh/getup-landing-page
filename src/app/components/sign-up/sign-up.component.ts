import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Review, SharedDataService } from 'src/app/services/shared-data.service';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  form: FormGroup;
  showPwd: boolean = false;
  agree: boolean = false;
  // passwordFocusOut: boolean = true;
  review: Review;
  subs: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private sd: SharedDataService) { }

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

    this.subs.push(this.sd.rev.subscribe(
      (val) => this.review = val,
      (err) => console.error(err)
    ));
    
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  onSubmit(value: any): void {
    console.log(value);
  }

  onShowPwd(): void {
    this.showPwd = !this.showPwd;
    console.log(this.showPwd);
    
  }

  onCheckAgree(): void {
    this.agree = !this.agree;
  }

  // togglePasswordFocusOut(): void {
  //   this.passwordFocusOut = !this.passwordFocusOut;
  //   console.log(this.passwordFocusOut);
    
  // }

}
