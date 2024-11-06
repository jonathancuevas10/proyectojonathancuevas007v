import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogeado } from 'src/app/interfaces/UsuarioLogeado';
import { CuerpoLogin } from 'src/app/interfaces/CuerpoLogin';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL_LOGIN: string = 'https://dummyjson.com/auth/login';
  public usuarioLogeado: UsuarioLogeado | null = null;
  public accessToken: string | null = null;
  //observador de cargando
  private $cargando = new BehaviorSubject<boolean>(false);
  public cargando = this.$cargando.asObservable();
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 

  }
  public iniciarSesion(nombre_usuario: string, contrasenia: string){
    this.$cargando.next(true);
    const cuerpo: CuerpoLogin = {
      username: nombre_usuario,
      password: contrasenia
    }//la url y el cuerpo y el resto 
    this.http.post<UsuarioLogeado>(this.URL_LOGIN, JSON.stringify(cuerpo),
  {
    headers:{
      'content-Type': 'application/json'
    }
  })
  .subscribe(resultado => {
    this.usuarioLogeado = resultado;
    this.accessToken = resultado.accessToken;
    this.$cargando.next(false);
    console.log(resultado);
    this.router.navigate(['/','productos']);
  });
  }

  public cerrarSesion(){
    if(this.usuarioLogeado){
      this.usuarioLogeado = null;
      this.accessToken = null;
    }
  }
}
