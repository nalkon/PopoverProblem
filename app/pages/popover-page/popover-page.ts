import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltersPage } from '../filters/filters';



/*
  Generated class for the PopoverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/popover-page/popover-page.html',
})
export class PopoverPage {

  constructor(private navCtrl: NavController) {

  }

  openFiltersPage(){
    this.navCtrl.push(FiltersPage);
  }
}
