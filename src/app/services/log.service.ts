import { Injectable } from '@angular/core';

@Injectable()

export class LogService {

  constructor() { }

  log(text) {
    console.log(text);
  }

}
