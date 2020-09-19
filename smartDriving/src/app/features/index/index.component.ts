import { Component, Output, EventEmitter } from '@angular/core';
import { EnvService } from '../../service/env.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  showLogin : boolean = false;
  showRegistrazione : boolean = false;
  selectURL : string = '';

  @Output() showMenu : EventEmitter<boolean> = new EventEmitter();

  constructor(private service : EnvService, private router : Router) { }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value == 'Login'){
      this.selectURL = '/index/login'
    }else{
      this.selectURL = '/index/registrazione'
    }
    console.log('route change in index.component.ts', this.selectURL)
  }

  checkLogin($event){
    console.log('received event in first page, value:',$event)
    this.showMenu.emit(true);
  }

}
