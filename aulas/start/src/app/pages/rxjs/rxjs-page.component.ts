import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, interval, of, map, tap, filter, range } from "rxjs";

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
  observable2 = range(1, 10)

  constructor() {}

  ngOnInit() {
    this.subscription = this.observable
    .pipe(
      map(x => x *2),
      filter(x => x <= 10),
      tap((x) => console.log(x))
    )
    .subscribe((item) => {
      this.items.push(item)
    })

    // this.observable2.subscribe((item) => {
    //   this.items.push(item)
    // })
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
