import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor() { }
  @HostBinding('class') class = 'app-layout';

  ngOnInit(): void {
  }

}
