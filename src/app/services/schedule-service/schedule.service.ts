import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Schedule, Time } from '../../models/schedule';
import { ZoneService } from '../zone-service/zone.service';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private readonly _schedules = new BehaviorSubject<Schedule[]>([
    {
      id: 1,
      time: {
        hour: 5,
        minute: 10
      },
      temperature: 25,
      zones: [9, 10, 11, 4, 5]
    },
    {
      id: 2,
      time: {
        hour: 18,
        minute: 30
      },
      temperature: 15,
      zones: [5, 6, 7, 10]
    },
    {
      id: 3,
      time: {
        hour: 17,
        minute: 0
      },
      temperature: 30,
      zones: [1, 2, 3]
    },
  ]);

  readonly schedules$ = this._schedules.asObservable().pipe(
    tap(schedules => schedules.sort((schedule1, schedule2) => {
      const time1 = schedule1.time;
      const time2 = schedule2.time;
      return time1.hour !== time2.hour ? time1.hour - time2.hour : time1.minute - time2.minute;
    }))
  );

  readonly schedulesWithZones$ = combineLatest([this.schedules$, this.zoneService.zones$]).pipe(
    map(([schedules, zones]) => schedules.map(schedule =>
      ({
        ...schedule,
        zones: zones.filter(zone => schedule.zones.includes(zone.id))
      }))
    )
  );

  constructor(private zoneService: ZoneService) { }

  get schedules(): Schedule[] {
    return this._schedules.getValue();
  }

  private setSchedules(val: Schedule[]) {
    this._schedules.next(val);
  }

  deleteSchedule(id: number) {
    this.setSchedules(this.schedules.filter(schedule => schedule.id !== id));
  }

  updateSchedule(id: number, newSchedule: Schedule) {
    const oldScheduleIndex = this.schedules.findIndex(schedule => schedule.id === id);
    if (oldScheduleIndex >= 0) {
      const scheduleArray = [...this.schedules];
      scheduleArray[oldScheduleIndex] = newSchedule;
      this.setSchedules(scheduleArray);
    }
  }

  addSchedule(time: Time, temperature: number, zones: number[]) {
    console.log('fdnsjk')
    this.setSchedules([...this.schedules, {
      id: this.schedules.length + 1,
      time,
      temperature,
      zones
    }]);
  }
}
