import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Socket} from "ng-socket-io";
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {
  nickname = this.navParams.get('username');
  messages = [];
  message;
  constructor(public navCtrl: NavController, public navParams: NavParams , public socket : Socket,public http : HttpClient) {
    this.http.get('https://talhasalt.com.tr/stajOkulu/v1/index.php/chatMessages').subscribe(value => {
      for (let index = 0; index < value.length; index++) {
        console.log(value[index])
        this.messages.push(value[index])
      }

    });
    console.log(this.messages);
    this.joinChat();
    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

  }

  sendMessage() {
    this.socket.emit('add-message', { text: this.message });
    this.message = '';
  }
  onFocus() {}
  getMessages() {
    console.log(this.messages);
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
        console.log(this.messages)
      });
    })
    return observable;
  }

  getOldMessages(){

  }
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
  }
}
