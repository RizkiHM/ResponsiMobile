import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //{
  //  path: '',
  //  redirectTo: 'folder/login',
  //  pathMatch: 'full'
  //},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canLoad: [AutoLoginGuard]
  },
  {
    path: 'fakultas',
    loadChildren: () => import('./fakultas/fakultas.module').then( m => m.FakultasPageModule)
  },
  {
    path: 'fakultas-tambah',
    loadChildren: () => import('./fakultas-tambah/fakultas-tambah.module').then( m => m.FakultasTambahPageModule)
  },
  {
    path: 'fakultas-edit',
    loadChildren: () => import('./fakultas-edit/fakultas-edit.module').then( m => m.FakultasEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
