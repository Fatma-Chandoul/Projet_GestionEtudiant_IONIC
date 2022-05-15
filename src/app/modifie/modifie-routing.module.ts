import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiePage } from './modifie.page';

const routes: Routes = [
  {
    path: '',
    component: ModifiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifiePageRoutingModule {}
