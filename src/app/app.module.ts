import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MainMenuPage} from "../pages/main-menu/main-menu";
import {SocketIoModule, SocketIoConfig} from "ng-socket-io";
import {SignupPage} from "../pages/signup/signup";
const config : SocketIoConfig = { url : 'http://157.230.108.13:3003',options : {} };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainMenuPage,
    SignupPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainMenuPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
