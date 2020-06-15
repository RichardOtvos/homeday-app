import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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



@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    PersonalDataFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
