import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonInterface } from '../../interfaces/person.interface';






/**
 * Generated class for the PersonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-detail',
  templateUrl: 'person-detail.html',
})
export class PersonDetailPage {
datosPersona:PersonInterface;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //TODO: recuperamos el parametro que nos llega de HOMEPAGE
    this.datosPersona=this.navParams.get('persona');
    console.log("Datos: " + this.datosPersona.name);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PersonDetailPage');
    
  }

}
