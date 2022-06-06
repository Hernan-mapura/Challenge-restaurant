import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {

  intervalo = 0;

  constructor() { }
  @Output() onPressMouse = new EventEmitter();

  @HostListener("mousedown")
  pressMouse(){
    if (this.intervalo) clearInterval(this.intervalo)
    this.intervalo = window.setInterval(()=>{
      this.onPressMouse.emit();
    },100);
  }

  @HostListener("click")
  leaveMouse(){
    clearInterval(this.intervalo);
    this.intervalo = 0;
  }
}
