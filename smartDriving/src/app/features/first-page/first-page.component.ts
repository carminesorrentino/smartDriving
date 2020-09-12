import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {

  loginUrl = 'sd/login';
  registrazioneUrl = 'sd/registrazione';

  constructor() { }

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
