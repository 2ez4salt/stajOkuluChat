import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MainMenuPage} from "../main-menu/main-menu";
import {SignupPage} from "../signup/signup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  login(username){
    this.navCtrl.push(MainMenuPage,{username :username })
  }
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

}
