import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  name:string;
  surname:string;
  username:string;
  password;
  password2;
  phone:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl :  AlertController) {}
    failed = this.alertCtrl.create({
    title : 'Uyarı',
    subTitle : 'Parolalarınızın eşleştiğinnden emin olun'
  })
    failed2 = this.alertCtrl.create({
    title : 'Uyarı',
    subTitle : 'Kullanıcı aınız en az 6 harfli olmalıdır'
  })
  reset(){
    this.name ='',
      this.surname = '',
      this.username = '',
      this.password = '',
      this.password2 = '',
      this.phone = ''
  }
  signUpAction(){
    if (this.password !== this.password2) {
        this.failed.present();
        this.reset()
    }
   else if (this.username.length<=6)
        this.failed2.present()
        this.reset()
  }

}


