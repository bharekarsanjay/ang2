import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'fb-login',
  templateUrl: 'app/components/login/login.html'
})
export class Login { 
     router: Router;

  constructor(_router:Router){
    this.router = _router;

  }
  onLogin(){
    this.router.navigate(['dashboard']); // here "About" is name not path

  }
}
