import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api-rest';
  public lista:any=[]
  constructor(private RestService:RestService){  
  }
  ngOnInit():void{
    this.cargarData();
  }
  public cargarData(){
    this.RestService.get("https://pedrojm.000webhostapp.com/youtube/listavideos.php")
    .subscribe(respuesta=>{
      console.log(respuesta)
      this.lista=respuesta;
    })
  }


}
