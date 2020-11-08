import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';


const routes: Routes = [
  {
    path:'pages',
    component: AppLayoutComponent,
    children:[
      {
        path: 'blog',
        loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)
      }
    ]
  },
  {path: 'pages', redirectTo: 'pages/blog',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
