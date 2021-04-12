import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  

  constructor(
    
    public usuarioService: UsuarioService
  ) { }

  datosUsuarios: any;
  numbers:Array<any> = [];

  ngOnInit(): void {
    this.todosUsuarios();
    this.showArreglo();
  }

  async todosUsuarios() {
    this.datosUsuarios = await this.usuarioService.getUsuarios().toPromise();
    //console.log(this.datosUsuarios);
    
  }

  showArreglo(){
    this.numbers = Array.from({length:10},(v,k)=>k+5);
  }
}
