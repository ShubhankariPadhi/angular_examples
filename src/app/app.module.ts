import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import { CompanyModule } from './company/company.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompanyModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
