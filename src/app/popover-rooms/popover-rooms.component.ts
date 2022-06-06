import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MueblesService } from '../muebles.service';


@Component({
  selector: 'app-popover-rooms',
  templateUrl: './popover-rooms.component.html',
  styleUrls: ['./popover-rooms.component.scss'],
})
export class PopoverRoomsComponent implements OnInit {

  constructor(private popover:PopoverController,private servicio: MueblesService) { }

  get rooms(){
    return this.servicio.rooms;
  }

  eliminarRoom(room){
    this.servicio.rooms = this.servicio.rooms.filter(roomId => roomId.id != room.id);
    this.popover.dismiss();
  }

  ngOnInit() {}

}
