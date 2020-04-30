import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  isLoading:boolean = false;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "",private userService:UserService,public password_reset: FormBuilder,private sharedService:SharedService) {
     
    }

  onNoClick(): void {
  }

  send(){
      this.isLoading = true;
      this.userService.resetPassword(this.email.value).then((resp)=>{
        if(resp == "OK"){
          this.sharedService.sendResetPassword(this.email.value);
          this.dialogRef.close();
        } else{
          console.log(this.form);
        }
        console.log(resp);
        this.isLoading = false;
  
      })
    
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}