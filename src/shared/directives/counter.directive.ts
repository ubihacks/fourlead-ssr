import { Directive, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';

import { Subject, Observable, Subscription, timer } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

@Directive({
    selector: '[counter]'
})
export class CounterDirective implements OnChanges, OnDestroy {
    @Input() counter: number;
    @Input() interval: number;
    @Output() value = new EventEmitter<number>();

    private _counterSource$ = new Subject<any>();
    private _subscription = Subscription.EMPTY;

    constructor() {

        this._subscription = this._counterSource$.pipe(
            switchMap(({ interval, count }) => {
                console.log(`Interval: ${interval}, Count: ${count}`);
                console.log(`SetSeconds(--count): ${new Date(null).setSeconds(--count)}`);
                console.log(`this.value.emit(new Date(null).setSeconds(--count)): ${this.value.emit(new Date(null).setSeconds(--count))}`);
                const timerResult = timer(0, interval).pipe(
                    take(count),
                    tap(() => this.value.emit(new Date(null).setSeconds(--count)))
                );
                console.log(`timerResult:`, timerResult);
                return timerResult;
            })
        ).subscribe();
        console.log('Subscription: ', this._subscription);
    }

    ngOnChanges() {
        console.log(`this._counterSource$.next({ count: this.counter, interval: this.interval }): ${this.counter}, ${this.interval}`);
        this._counterSource$.next({ count: this.counter, interval: this.interval });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

}
