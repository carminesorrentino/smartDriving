import { Component } from '@angular/core';
import { EnvService } from 'src/app/service/env.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{

  showMenu : boolean = false;
  showLog : boolean = true;

  changeView($event){
    console.log('event received in app component',$event);
    this.showMenu = true;
    this.showLog = false;
  }
  
}
