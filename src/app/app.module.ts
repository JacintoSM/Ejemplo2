import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonDetailPage } from '../pages/person-detail/person-detail';
import { AnimalDetailPage } from '../pages/animal-detail/animal-detail';
import { AjustesPage } from '../pages/ajustes/ajustes';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonDetailPage,
    AnimalDetailPage,
   AjustesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonDetailPage,
    AnimalDetailPage,
    AjustesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
