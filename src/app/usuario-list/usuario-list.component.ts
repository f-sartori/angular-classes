import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  constructor( private UsuarioService: UsuarioService) { }

  usuarios: Usuario[]

  ngOnInit() {
  }

  findAll(){
    this.UsuarioService.getAll().subscribe((userOut: Usuario[])=>{
      this.usuarios = userOut;
    })
  }
}
