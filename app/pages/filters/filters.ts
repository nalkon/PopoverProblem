import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyData } from '../../providers/my-data/my-data';

/*
  Generated class for the FiltersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/filters/filters.html',
})
export class FiltersPage {

  constructor(private navCtrl: NavController, private data: MyData) {

  }

}
