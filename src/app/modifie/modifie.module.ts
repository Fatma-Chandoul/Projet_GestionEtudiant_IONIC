import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifiePageRoutingModule } from './modifie-routing.module';

import { ModifiePage } from './modifie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifiePageRoutingModule
  ],
  declarations: [ModifiePage]
})
export class ModifiePageModule {}
