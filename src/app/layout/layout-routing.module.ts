import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';


const routes: Routes = [
  {
    path:'',
    component: AppLayoutComponent,
    children:[
      {
        path: 'blog',
        loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)
      },
      {path: '', redirectTo: 'blog',  pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
