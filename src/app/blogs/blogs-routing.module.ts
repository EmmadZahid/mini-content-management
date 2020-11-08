import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsMainComponent } from './blogs-main/blogs-main.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
