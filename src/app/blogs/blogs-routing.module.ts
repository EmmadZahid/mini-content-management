import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: BlogListComponent
  },
  {
    path: 'create',
    loadChildren: () => import('../blogs/blog-create/blog-create.module').then(m => m.BlogCreateModule)
  },
  {
    path: 'detail/:id',
    component: BlogDetailComponent
  },
  {path: '', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
