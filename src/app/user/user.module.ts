import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormControlsComponent } from '../template-form-controls/template-form-controls.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    TemplateFormControlsComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ]
})
export class UserModule { }
