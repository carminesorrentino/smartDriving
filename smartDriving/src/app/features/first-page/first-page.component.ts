import { Component, EventEmitter, Output } from '@angular/core';
import { EnvService } from 'src/app/service/env.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent{

  showLogin : boolean = false;
  showRegistrazione : boolean = false;

  @Output() showMenu : EventEmitter<boolean> = new EventEmitter();

  constructor(private service : EnvService) { }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value == 'Login'){
      this.showLogin = true;
      this.showRegistrazione = false;
    }else if(ev.detail.value == 'Registrazione'){
      this.showLogin = false;
      this.showRegistrazione = true;
    }else{
      this.showLogin = false;
      this.showRegistrazione = false;
    }
  }

  checkLogin($event){
    console.log('received event in first page, value:',$event)
    this.showMenu.emit(true);
  }

}
