import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`, // Backtick, um über mehrere Zeilen schreiben zu können
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
