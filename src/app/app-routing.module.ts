import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitSelectionComponent } from './unit-selection/unit-selection.component';

const routes: Routes = [
  {path: 'unit-selection', component: UnitSelectionComponent },
  {path: '', pathMatch: 'full', redirectTo: 'unit-selection' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
