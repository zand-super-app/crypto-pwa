import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListItemComponent } from './list-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent]
})
export class ListItemComponentModule {}
