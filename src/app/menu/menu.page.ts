import { Component} from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { MueblesService } from '../muebles.service';
import { PopoverRoomsComponent } from '../popover-rooms/popover-rooms.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{

  constructor(private men:MenuController, private mueblesService:MueblesService, private popoverRooms: PopoverController) { }

  boleano: Boolean = false;

  setBoleano(){
    this.boleano = !this.boleano;
  }
  

  cerrarMenu(){
    this.men.toggle();
  }

  crearRoom(){
    const index = this.mueblesService.rooms.length -1;
    const idRoom = this.mueblesService.rooms[index].id + 1;
    this.mueblesService.rooms.push({
      id: idRoom,
      nombre: "Room " + idRoom,
      muebles: []
    });
  }

  async verPopover(event:Event) {
    const popover = await this.popoverRooms.create({
      component: PopoverRoomsComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      event,
      showBackdrop: false,
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //creación de los nuevos muebles

  agregarCuadrado(){
    if(this.mueblesService.roomSelect == null) return;

    const index = this.mueblesService.roomSelect.muebles.length -1;
    const id = this.mueblesService.roomSelect.muebles[index].id+1;

    this.mueblesService.roomSelect.muebles.push({
      id,
      figura: "cuadrado",
      text: "mesa " + id,
      tamano: {width: 100, height: 100},  
      color: "rgb(222,222,222)",
      position: {x:650,y: 200},
    });
  }

  agregarRectangulo(){
    if(this.mueblesService.roomSelect == null) return;

    const index = this.mueblesService.roomSelect.muebles.length -1;
    const id = this.mueblesService.roomSelect.muebles[index].id+1;

    this.mueblesService.roomSelect.muebles.push({
      id,
      figura: "rectangulo",
      text: "mesa " + id,
      tamano: {width: 180, height: 80},  
      color: "rgb(222,222,222)",
      position: {x:650,y: 200},
    });
  }

  agregarRectangulo2(){
    if(this.mueblesService.roomSelect == null) return;

    const index = this.mueblesService.roomSelect.muebles.length -1;
    const id = this.mueblesService.roomSelect.muebles[index].id+1;

    this.mueblesService.roomSelect.muebles.push({
      id,
      figura: "rectangulo",
      text: "mesa " + id,
      tamano: {width: 80, height: 160},  
      color: "rgb(222,222,222)",
      position: {x:650,y: 200},
    });
  }
  
  agregarRombo(){
    if(this.mueblesService.roomSelect == null) return;

    const index = this.mueblesService.roomSelect.muebles.length -1;
    const id = this.mueblesService.roomSelect.muebles[index].id+1;

    this.mueblesService.roomSelect.muebles.push({
      id,
      figura: "rombo",
      text: "mesa " + id,
      tamano: {width: 100, height: 100},  
      color: "rgb(222,222,222)",
      position: {x:650,y: 200},
    });
  }

  agregarCirculo(){
    if(this.mueblesService.roomSelect == null) return;

    const index = this.mueblesService.roomSelect.muebles.length -1;
    const id = this.mueblesService.roomSelect.muebles[index].id+1;

    this.mueblesService.roomSelect.muebles.push({
      id,
      figura: "circulo",
      text: "mesa " + id,
      tamano: {width: 100, height: 100},  
      color: "rgb(222,222,222)",
      position: {x:650,y: 200},
    });
  }

  agregarPared(){
    if(this.mueblesService.roomSelect == null) return;

    const index = this.mueblesService.roomSelect.muebles.length -1;
    const id = this.mueblesService.roomSelect.muebles[index].id+1;

    this.mueblesService.roomSelect.muebles.push({
      id,
      figura: "pared",
      tamano: {width: 100, height: 100},  
      color: "rgb(115,115,115)",
      position: {x:650,y: 200},
    });
  }

  agregarTitulo(){
    if(this.mueblesService.roomSelect == null) return;

    const index = this.mueblesService.roomSelect.muebles.length -1;
    const id = this.mueblesService.roomSelect.muebles[index].id+1;

    this.mueblesService.roomSelect.muebles.push({
      id,
      figura: "texto", 
      text: "Titulo",
      position: {x:650,y: 200},
    });
  }
}
