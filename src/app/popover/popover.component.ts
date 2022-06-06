import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { MueblesService } from '../muebles.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  @Input("mueble") mueble;

  color:string = "";
  formColor:FormControl = new FormControl("");
  formTexto:FormControl = new FormControl("");

  eliminarMueble(){
    this.mueblesService.roomSelect.muebles = this.mueblesService.roomSelect.muebles.filter(mueble => mueble.id != this.mueble.id);
    this.popover.dismiss();
  }

  Aumentar(){
    
    //this.nuevoTamano.replace("","");
    //this.nuevoTamano = this.mueble.tamano.substr(1,2);
    if (this.mueble.tamano.width < 350){
      if (this.mueble.tamano.height < 350){
        this.mueble.tamano.width += 5;
        this.mueble.tamano.height += 5;
      }
    }
  }

  Reducir(){
    if (this.mueble.tamano.width > 50){
      if (this.mueble.tamano.height > 50){
        this.mueble.tamano.width -= 5;
        this.mueble.tamano.height -= 5;
      }
    }
  }

  aumentarWidth(){
    if (this.mueble.tamano.width < 1540){
      this.mueble.tamano.width += 5;
    }
  }

  aumentarHeight(){
    if (this.mueble.tamano.height < 670){
      this.mueble.tamano.height += 5;
    }
  }

  reducirWidth(){
    if (this.mueble.tamano.width > 10){
      this.mueble.tamano.width -= 5;
    }
  }

  reducirHeight(){
    if (this.mueble.tamano.height > 10){
      this.mueble.tamano.height -= 5;
    }
  }
  
  constructor(private mueblesService:MueblesService, private popover:PopoverController) {

  }

  ngOnInit() {
    this.formColor.setValue(this.mueble.color);
    this.formColor.valueChanges.subscribe(color => this.mueble.color = color);

    this.formTexto.setValue(this.mueble.text);
    this.formTexto.valueChanges.subscribe(Text => this.mueble.text = Text);
  }

}
