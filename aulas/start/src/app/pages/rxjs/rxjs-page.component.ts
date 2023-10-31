import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, interval, of, } from "rxjs";

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
})

export class RXJSPageComponent implements OnInit, OnDestroy {
  items: Array<number> =[]

  msg = ''
  subscription!: Subscription

  // observable = of('item 1', 'item 2')
  observable = interval(1000)

  constructor() {}

  ngOnInit() {
    this.subscription = this.observable.subscribe((item) => {
      this.items.push(item)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.msg = 'Unsubscribed'
  }

  // desinscrever() {
  //   this.subscription.unsubscribe()
  //   this.msg = 'Unsubscribed'
  // }
}
