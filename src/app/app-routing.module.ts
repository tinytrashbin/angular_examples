import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';

const routes: Routes = [
  { path: '', component: Example1Component },
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
  { path: 'example3', component: Example3Component },
  { path: 'example4', component: Example4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
