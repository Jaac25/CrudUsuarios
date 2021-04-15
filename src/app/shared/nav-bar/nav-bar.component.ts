import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public mostrarLogin = false;

  nombres: string = '';
  apellidos: string = '';
  documento: string = '';
  telefono: string = '';
  ciudad: string = '';
  direccion: string = '';
  correo: string = '';
  password: string = '';

  constructor(
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  verificarUsuario(){
    if(this.nombres == undefined || this.nombres=="" || this.apellidos == undefined 
      || this.apellidos =="" || this.telefono == undefined || this.telefono == null 
      || this.ciudad == undefined || this.ciudad == ""
      || this.documento == undefined || this.documento == ""
      || this.direccion == undefined || this.direccion == ""
      || this.correo == undefined || this.correo == ""
      || this.password == undefined || this.password == ""){
        alert('Ingresa todos los valores correctamente, por favor');
    } else{
      this.guardarLugar()
    }
  }
  async guardarLugar(){
    //alert(this.nombres+"--"+this.documento+"--"+this.apellidos+"--"+this.telefono+"--"+this.ciudad+"--"+this.direccion+"--"+this.correo+"--"+this.password);
    const lugarValido = await this.usuarioService.crearUsuario(this.nombres, this.apellidos, this.documento, this.telefono,
      this.ciudad, this.direccion, this.correo, this.password);  
    if(lugarValido){
      this.mostrarLogin = false;
      alert("Usuario guardado");
    }else{
      alert("No se guardó");
    }
  }
}
