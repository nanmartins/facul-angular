import { Component, OnInit } from "@angular/core";
import { interval, of } from "rxjs";

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
})

export class RXJSPageComponent implements OnInit {
  items: Array<number> =[]

  // observable = of('item 1', 'item 2')
  observable = interval(1000)

  constructor() {}

  ngOnInit() {
    this.observable.subscribe((item) => {
      this.items.push(item)
    })
  }
}
