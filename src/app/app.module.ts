import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioIdComponent } from './usuario-id/usuario-id.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserIdComponent,
    UsuarioListComponent,
    UsuarioIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
