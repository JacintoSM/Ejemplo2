import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimalInterface } from '../../interfaces/animal.interface';

/**
 * Generated class for the AnimalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-detail',
  templateUrl: 'animal-detail.html',
})
export class AnimalDetailPage {
  datosAnimal: AnimalInterface;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datosAnimal = this.navParams.get('animal');
  }

  ionViewDidLoad() {
    //  console.log('ionViewDidLoad AnimalDetailPage');

  }

}
