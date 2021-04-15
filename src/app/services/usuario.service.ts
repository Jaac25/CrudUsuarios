import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})

//clase de UsuarioService
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsuarios() {
    return this.http.get(`${URL}/usuario/todos`)
  }

  public async crearUsuario (nombres: string, apellidos: string, documento: string, telefono: string, ciudad: string, direccion: string, correo: string, password: string) {
    const usuario = {nombres, apellidos, documento, telefono, ciudad, direccion, correo, password};
    return new Promise(resolve => {
      this.http.post(`${URL}/usuario/crear`, usuario)
      .subscribe((res: any) => {
        if(res.ok){
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }
}
