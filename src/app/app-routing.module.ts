import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agregar', loadChildren: () => 
    import('./components/agregar/agregar.module').then(m => m.AgregarModule)
  },
  {
    path: 'usuarios', loadChildren: () => 
    import('./components/mostrar/mostrar.module').then(m => m.MostrarModule)
  },
  {path:'',pathMatch: 'full', redirectTo: 'agregar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
