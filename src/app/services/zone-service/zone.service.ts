import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Zone } from '../../models/zone';
import AppSettings from '../../appSettings';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private readonly _zones = new BehaviorSubject<Zone[]>([]);

  readonly zones$ = this._zones.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  fetchZones(): void {
    this.http.get<Zone[]>(AppSettings.ZONES_API_ENDPOINT).subscribe(zones => this.setZones(zones));
  }

  get zones(): Zone[] {
    return this._zones.getValue();
  }

  private setZones(val: Zone[]) {
    this._zones.next(val);
  }
}
