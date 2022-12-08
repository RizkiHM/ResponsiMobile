import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakultasEditPage } from './fakultas-edit.page';

const routes: Routes = [
  {
    path: '',
    component: FakultasEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FakultasEditPageRoutingModule {}
