import { NgModule } from '@angular/core';

import { BlogsMainComponent } from './blogs-main/blogs-main.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BlogsMainComponent 
  ],
  imports: [
    BlogsRoutingModule, 
    CommonModule
  ],
  providers: []
})
export class BlogsModule { }
