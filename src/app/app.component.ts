import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    tituloForm: string = 'Iniciar sesión';
    textoBoton: string = 'Enviar';
    isLogin: boolean = true;

    cambiarForm() {
      this.isLogin = !this.isLogin;
      if (this.isLogin) {
        this.tituloForm= 'Iniciar sesión';
        this.textoBoton= 'Enviar';
      } else {
        this.tituloForm= 'Crear usuario';
        this.textoBoton= 'Añadir';
      }
    }

}
