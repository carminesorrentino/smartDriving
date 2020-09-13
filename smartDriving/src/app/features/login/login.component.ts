import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userLogin = {
    username: '',
    password: ''
  };

  @Output() logged : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  checkLogin(form) {
    this.userLogin.username = form.value.username;
    this.userLogin.password = form.value.password;
    console.log('checkLoginForm',this.userLogin)
    //HTTP-GET-CONTROLLO
    if(true) //if login ok
    {
      console.log('event emit')
      this.logged.emit(true);
    }else{  //caso di errore

    }
  }

  fbLogin() {
    //HTTP-GET-CONTROLLO
    if(true) //if login ok
    {
      console.log('event emit')
      this.logged.emit(true);
    }else{  //caso di errore

    }
  }

}
