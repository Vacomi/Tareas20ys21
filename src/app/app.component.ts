import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session20y21';
  presionado = '0';

  activacion(btn:any){
    if(btn === '1'){
      this.presionado = '1';
    }
    if(btn === '2') {
      this.presionado = '2'
    }
  }
}
