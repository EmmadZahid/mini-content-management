import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  providers: []
})
export class LayoutModule { }
