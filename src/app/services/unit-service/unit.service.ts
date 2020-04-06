import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private readonly _unit = new BehaviorSubject<string>('C');

  readonly unit$ = this._unit.asObservable();

  constructor() { }

  get unit(): string {
    return this._unit.getValue();
  }

  private setUnit(val: string) {
    this._unit.next(val);
  }

  changeUnit(unit: string) {
    this.setUnit(unit);
  }
}
