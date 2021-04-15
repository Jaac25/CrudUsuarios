// Importa las interfaces para interactuar con el componente
import { Component, OnInit } from '@angular/core';
//Importa la clase UsuarioService del archivo typescript que está en la carpeta de servicios
import {UsuarioService} from 'src/app/services/usuario.service';

//Define los atributos del componente
@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
//Exporta la clase de MostrarComponent utilizando la interfaz OnInit para inicializar el componente
export class MostrarComponent implements OnInit {

  constructor(
    
    //crea la instancia de usuarioServide de la clase UsuarioService que está en usuario.service.ts
    public usuarioService: UsuarioService
  ) { }

  //crea variable de cualquier tipo
  datosUsuarios: any;

  //hace el llamado a la función todosUsuarios
  ngOnInit(): void {
    this.todosUsuarios();
  }

  /*Crea función asíncrona 
    el await pausa la ejecución de la fucnión asíncrona y espera el .toPromise
    llama la función getUsuarios() de la clase UsuarioService para mostrar los datos de los usuarios
  */
  async todosUsuarios() {
    this.datosUsuarios = await this.usuarioService.getUsuarios().toPromise();
    //console.log(this.datosUsuarios);
    
  }

  showArreglo(){
    //this.numbers = Array.from({length:10},(v,k)=>k+5);
  }
}
