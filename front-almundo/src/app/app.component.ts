import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  /*Usa esta variable para mandar los datos del padre al hijo */
  public resultados : any;

  public capturarDatos(event){
    this.resultados = event;
  }

}
