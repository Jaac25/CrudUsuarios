import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostrarRoutingModule } from './mostrar-routing.module';
import { MostrarComponent } from './mostrar.component';

@NgModule({
  declarations: [MostrarComponent],
  imports: [
    CommonModule,
    MostrarRoutingModule
  ]
})
export class MostrarModule { }
