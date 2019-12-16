import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioIdComponent } from './usuario-id/usuario-id.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIdComponent } from './user-id/user-id.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'user-id', pathMatch: 'full'},
  {path: 'user-id', component: UserIdComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'usuario-id', component: UsuarioIdComponent},
  {path: 'usuario-list', component: UsuarioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
