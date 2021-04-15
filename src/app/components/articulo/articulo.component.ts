//Importa las interfaces para emitir eventos personalizados
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// Importa la clase artículo del modelo
import { Articulo } from 'src/app/Modelo/articulo';

/*Maneja los componentes en angular
selector selecciona la ubicación del componente
templateUrl establece la dirección del documento html del componente
styleUrls establece la dirección del documento de estilos css del componente
*/
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})

//exporta la clase ArticuloComponent e implementa la interfaz OnInit para inicializar el componente anteriomente instanciado
export class ArticuloComponent implements OnInit {

  listo = false;

  /* recibiendo un parametro
  Propiedades de entrada y salida */

  //recibe un objeto

  //evento
  @Input() articulo: Articulo = new Articulo();

  //evento personalizado no es nativo del componente
  @Output() deleteArticulo: EventEmitter<Articulo> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  onDelete(articulo: Articulo){
    this.deleteArticulo.emit(articulo);
  }
//Función que cambia el pago y se utiliza en el dosuemnto html
  onToggle(articulo: Articulo){
    articulo.pago = !articulo.pago;
  }

}