import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {



  openDialog() {
    console.log("inside the service")
  }
}
