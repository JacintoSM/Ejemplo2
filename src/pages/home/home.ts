import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

// TODO: Importamos nuestra interface y la constante PERSONS
import { PERSONS } from '../../data/data.persons';
import { PersonInterface } from '../../interfaces/person.interface';
//importamos escribimos PersonDetailsPage + INTRO
import { PersonDetailPage } from '../person-detail/person-detail';
import { AnimalInterface } from '../../interfaces/animal.interface';
import { ANIMALS } from '../../data/data.animals';
import { AnimalDetailPage } from '../animal-detail/animal-detail';
import { AjustesPage } from '../ajustes/ajustes';
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // TODO: Creamos una variable (array) usando nuestra interface
  personList: PersonInterface[] = [];
  animalList: AnimalInterface[] = [];
  //TODO: creamos una variable para usar la pagina PersonDetailPage
  detallePersona: any = PersonDetailPage;
  detalleAnimal: any = AnimalDetailPage;
  paginaAjustes: any = AjustesPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    // TODO: Clonamos nuestra constante (array) en nuestra variable
    // TODO: personList
    this.personList = PERSONS.slice(0);
    this.animalList = ANIMALS.slice(0);
  }


  // TODO: Método que pinta en la consola los datos completos
  // TODO: de una persona.
  mostrarDatos(p: PersonInterface) {
    console.log("Nombre: " + p.name +
      "\nOcupación: " + p.position +
      "\nRuta foto: " + p.photo);

  }
  //TODO: abre una segunda pagina y envia con los datos de una pesona
  mostrarDetallePersona(p: PersonInterface) {
    //TODO: para movernos a la pagina PersonDetailPage usamos el metodo PUSH

    this.navCtrl.push(this.detallePersona, { 'persona': p });
  }
  mostrarDetalleAnimal(a: AnimalInterface) {
    this.navCtrl.push(this.detalleAnimal, { 'animal': a });
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Acerca de...',
      subTitle: 'Ejemplo 2 (c) Copyleft',
      buttons: ['OK']
    });
    alert.present();
  }

  aboutApp() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: `
    <img src="assets/imgs/mono.png" height="100" width="100">
    <h4 ion-text color="danger">appsforusers</h4>
    <p> This app is only available per this convertUrlToSegments.</p>
    <p>
    <br> by Jacinto Sanchez Macias
    <br><i ion-text color="primary"> (c)</i> copyleft 2018
    <br>
    </p>
    `,
      buttons: ['OK']
    });
    alert.present();
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Navegacion',
      message: 'Ir a pagina de Ajustes?',
      buttons: [
        {
          text: 'CANCEL',
          handler: () => {
            console.log('Operacion Cancelada');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(this.paginaAjustes);
            console.log('Navegacion a pagina de Ajustes');
          }
        }
      ]
    });
    confirm.present();
  }

}
