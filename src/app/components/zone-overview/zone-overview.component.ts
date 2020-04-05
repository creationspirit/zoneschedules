import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScheduleService } from '../../services/schedule-service/schedule.service';
import { ZoneService } from '../../services/zone-service/zone.service';
import { ScheduleZone, Time } from '../../models/schedule';

@Component({
  selector: 'app-zone-overview',
  templateUrl: './zone-overview.component.html',
  styleUrls: ['./zone-overview.component.scss']
})
export class ZoneOverviewComponent implements OnInit {

  zoneFilter$: BehaviorSubject<string>;
  filteredSchedules$: Observable<ScheduleZone[]>;

  constructor(
    public scheduleService: ScheduleService,
    public zoneService: ZoneService
  ) {
  }

  ngOnInit(): void {
    this.zoneFilter$ = new BehaviorSubject('all');
    this.filteredSchedules$ = combineLatest([this.scheduleService.schedulesWithZones$, this.zoneFilter$]).pipe(
      map(([schedules, filter]) => {
        return filter === 'all' ? schedules : schedules.filter(schedule => schedule.zones.find(zone => zone.id === parseInt(filter, 10)));
      })
    );

  }

  filterChange(value: string) {
    this.zoneFilter$.next(value);
  }

  formatTime(time: Time): string {
    const pad = (num: number, size: number) => ('000' + num).slice(size * -1);
    return `${pad(time.hour, 2)}:${pad(time.minute, 2)}`;
  }
}
