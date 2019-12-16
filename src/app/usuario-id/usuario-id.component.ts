import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-usuario-id',
  templateUrl: './usuario-id.component.html',
  styleUrls: ['./usuario-id.component.css']
  
})
export class UsuarioIdComponent implements OnInit {

  id: number 
  user : Usuario = new Usuario(0,'','',null,'','',null)
  constructor(private UserService: UsuarioService) { }

  ngOnInit() {
  }

 
}
