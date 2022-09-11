import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logs:number=0;
  constructor() { }

  logInformation(message: string) {
    console.log(`[INFO] :: ${message} ${this.logs}`);
    this.logs++;
  }
}
