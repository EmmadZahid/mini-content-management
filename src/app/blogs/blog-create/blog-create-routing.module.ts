import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogCreateMainComponent } from './blog-create-main/blog-create-main.component';

const routes: Routes = [
  {
    path: '',
    component: BlogCreateMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogCreateRoutingModule { }
