import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule,FormlyFieldConfig} from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppService } from './app.service';

// export function minLengthValidationMessage(error:any,field:FormlyFieldConfig){
//   return `Should have atleast ${field.props?.minLength} characters`;
// }
// export function maxLengthValidationMessage(error:any,field:FormlyFieldConfig){
//   return `Should be less that ${field.props?.maxLength} characters`
// }
// export function minValidationMessage(error:any,field:FormlyFieldConfig){
//   // return `This should be more`
// }
// export function maxValidationMessage(error:any,field:FormlyFieldConfig){

// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(
    //   {
    //   validationMessages:[
    //     { name: 'required', message: 'This field is required' },
    //     { name: 'minLength', message: minLengthValidationMessage },
    //     { name: 'maxLength', message: maxLengthValidationMessage },
    //     { name: 'min', message: minValidationMessage },
    //     { name: 'max', message: maxValidationMessage },
    //   ]
    // }
    ),
    FormlyBootstrapModule,
    BrowserAnimationsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
