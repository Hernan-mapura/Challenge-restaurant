import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { MueblesService } from '../muebles.service';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private Men: MenuController, private popover:PopoverController, private servicio: MueblesService) {}

  verMenu(){
    this.Men.toggle();
  }

  get rooms(){
    return this.servicio.rooms;
  }

  get muebles(){
    return this.servicio.muebles;
  }

  get roomSeleccionado(){
    return this.servicio.roomSelect;
  }

  cambiarRoom(room){
    this.servicio.roomSelect = room;
  }

  setPositionMueble(event: CdkDragEnd, mueble){
    mueble.position.x = event.source.getFreeDragPosition().x;
    mueble.position.y = event.source.getFreeDragPosition().y;
  }

  async verPopover(event:Event, mueble:any) {
    const popover = await this.popover.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      event,
      showBackdrop: false,
      componentProps: {mueble}
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}