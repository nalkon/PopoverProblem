import {Component} from '@angular/core';
import {PopoverController, NavController} from 'ionic-angular';
import {PopoverPage} from '../popover-page/popover-page';
import { FiltersPage } from '../filters/filters';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private popoverController : PopoverController, private navCtrl: NavController) {

  }

  openPopover(event){
    let popover = this.popoverController.create(PopoverPage);
    popover.present();
  }

  openFiltersPage(event){
    this.navCtrl.push(FiltersPage);
  }
}
