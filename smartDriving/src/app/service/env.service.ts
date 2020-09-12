import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  baseUrl = 'http://localhost:8100/'

  constructor() { }
}
