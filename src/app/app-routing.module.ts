import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioUnoComponent } from './pages/ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './pages/ejercicio-dos/ejercicio-dos.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: 'ejercicio-uno',
    title: 'Ejercicio Uno',
    component: EjercicioUnoComponent,
  },
  {
    path: 'ejercicio-dos',
    title: 'Ejercicio Dos',
    component: EjercicioDosComponent,
    children: [
      { path: 'loggin', component: LoginComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: 'welcome' },
    ],
  },
  {
    path: '**',
    redirectTo: 'ejercicio-uno',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
