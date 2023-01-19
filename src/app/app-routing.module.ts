import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './guards/check-login.guard';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { UsersComponent } from './paginas/usuarios/users.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate:[CheckLoginGuard]},
  {path:'tarea1', component: UsersComponent, canActivate: [CheckLoginGuard]},
  {path:'tarea2', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
