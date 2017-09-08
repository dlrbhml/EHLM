import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit {
  // @input is used to let element can be used outside this component (server-element)
  // The 'srvElement' is the Alias of element which can be used outside this component
  @Input('srvElement') element: {type: string, name: string, content: string};

  ngOnInit() {
  }
}
