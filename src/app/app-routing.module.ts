import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children:[
      {
        path: 'pages',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
      },
      {path: '', redirectTo: 'pages', pathMatch: 'full'},
    ]
  },
  {path: '**', redirectTo: 'pages'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
