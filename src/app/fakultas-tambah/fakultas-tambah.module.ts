import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FakultasTambahPageRoutingModule } from './fakultas-tambah-routing.module';

import { FakultasTambahPage } from './fakultas-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FakultasTambahPageRoutingModule
  ],
  declarations: [FakultasTambahPage]
})
export class FakultasTambahPageModule {}
