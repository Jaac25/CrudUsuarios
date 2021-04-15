import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarComponent } from './mostrar.component';
import { MostrarModule } from './mostrar.module';

const routes: Routes = [
  {path: '',component: MostrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarRoutingModule { }
