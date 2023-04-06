import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { EjercicioUnoComponent } from './pages/ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './pages/ejercicio-dos/ejercicio-dos.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioUnoComponent,
    EjercicioDosComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
