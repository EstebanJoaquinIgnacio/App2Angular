import { Component } from '@angular/core';



/*import { Http } from '@angular/http'; //cuando voy a solicitar datos a una pagina
import 'rxjs/add/operator/map';   //agregarlo*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  /*personas: Array<{nombre: string, apellido:string, dni:string,id: string}>;
  personas = [{"nombre":"God","apellido":"Acosta","dni":"333","id":"1"},
                    {"nombre":"Joa","apellido":"Este","dni":"666","id":"2"},
                    {"nombre":"Yo","apellido":"Zoe","dni":"999","id":"3"}];*/

}
