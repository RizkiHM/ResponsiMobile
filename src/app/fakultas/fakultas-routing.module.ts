import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakultasPage } from './fakultas.page';

const routes: Routes = [
  {
    path: '',
    component: FakultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FakultasPageRoutingModule {}
