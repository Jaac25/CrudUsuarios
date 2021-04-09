import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio', loadChildren: () => 
    import('./components/mostrar/mostrar.module').then(m => m.MostrarModule)
  },
  {
    path: 'agregar', loadChildren: () => 
    import('./components/agregar/agregar.module').then(m => m.AgregarModule)
  },
  
  {path:'',pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
