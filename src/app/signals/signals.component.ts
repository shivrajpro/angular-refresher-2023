import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);
  actions = signal<string[]>([]);

  constructor() {
    effect(() => console.log('counter', this.counter()));
  }

  increment() {
    // const ctr = this.counter(); to read
    this.counter.update((oldVal) => oldVal + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENET'));
  }

  decrement() {
    this.counter.update((oldVal) => oldVal - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }

  reset() {
    this.counter.set(0);
  }
}
