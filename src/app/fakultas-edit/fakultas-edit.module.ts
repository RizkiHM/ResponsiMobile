import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FakultasEditPageRoutingModule } from './fakultas-edit-routing.module';

import { FakultasEditPage } from './fakultas-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FakultasEditPageRoutingModule
  ],
  declarations: [FakultasEditPage]
})
export class FakultasEditPageModule {}
