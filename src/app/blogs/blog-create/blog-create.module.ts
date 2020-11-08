import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BlogCreateRoutingModule } from './blog-create-routing.module';
import { BlogCreateMainComponent } from './blog-create-main/blog-create-main.component';

@NgModule({
  declarations: [
    BlogCreateMainComponent
  ],
  imports: [
    BlogCreateRoutingModule, 
    CommonModule
  ],
  providers: []
})
export class BlogCreateModule { }
