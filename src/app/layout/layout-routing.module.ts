import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';


const routes: Routes = [
  {
    path:'',
    component: AppLayoutComponent,
    children:[
      {
        path: 'blogs',
        loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path: 'blog/create',
        loadChildren: () => import('../blogs/blog-create/blog-create.module').then(m => m.BlogCreateModule)
      }
    ]
  },
  {path: 'pages', redirectTo: 'blogs'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
