import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

import { ListItemComponentModule } from '../list-item/list-item.module';

import { BalanceComponent } from './balance/balance.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ListItemComponentModule],
  declarations: [ExploreContainerComponent, BalanceComponent],
  exports: [ExploreContainerComponent, BalanceComponent]
})
export class ExploreContainerComponentModule {}
