import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FakultasPageRoutingModule } from './fakultas-routing.module';

import { FakultasPage } from './fakultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FakultasPageRoutingModule
  ],
  declarations: [FakultasPage]
})
export class FakultasPageModule {}
