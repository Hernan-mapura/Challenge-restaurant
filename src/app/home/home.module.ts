import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuPageModule } from '../menu/menu.module';
import { HomePageRoutingModule } from './home-routing.module';
import { PopoverComponent } from '../popover/popover.component';
import { DirectivaDirective } from '../directiva.directive';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DragDropModule,
    MenuPageModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, PopoverComponent, DirectivaDirective]
})

export class HomePageModule{

  

}
