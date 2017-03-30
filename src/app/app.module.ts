import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';

const appRoutes: Routes = [
{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,   
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
