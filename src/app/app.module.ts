import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonalDataFormComponent} from './application-form/personal-data-form/personal-data-form.component';
import {SalaryInfoFormComponent} from './application-form/salary-info-form/salary-info-form.component';
import {ReviewPageComponent} from './application-form/review-page/review-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApplicationFormComponent} from './application-form/application-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';





@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    PersonalDataFormComponent,
    SalaryInfoFormComponent,
    ReviewPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
