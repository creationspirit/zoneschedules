import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ScheduleService } from '../../services/schedule-service/schedule.service';
import { ZoneService } from '../../services/zone-service/zone.service';
import { UnitService } from '../../services/unit-service/unit.service';
import { Time } from 'src/app/models/schedule';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {
  id?: number;
  time: Time;
  temperature: number;
  zones: number[];

  constructor(
    public zoneService: ZoneService,
    public scheduleService: ScheduleService,
    public unitService: UnitService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      const selectedSchedule = this.scheduleService.schedules.find(schedule => schedule.id === this.id);
      this.time = selectedSchedule.time;
      this.temperature = selectedSchedule.temperature;
      this.zones = selectedSchedule.zones;
    } else {
      this.time = { hour: 0, minute: 0 };
      this.temperature = 0;
      this.zones = [];
    }
  }

  zoneClick(id: number, checked: boolean) {
    if (checked) {
      this.zones = [...this.zones, id];
    } else {
      const position = this.zones.indexOf(id);
      if ( position >= 0 ) {
        this.zones.splice(position, 1);
        this.zones = [...this.zones];
      }
    }
  }

  confirm() {
    if (this.id) {
      this.scheduleService.updateSchedule(this.id, {
        id: this.id,
        time: this.time,
        temperature: this.temperature,
        zones: this.zones
      });
    } else {
      this.scheduleService.addSchedule(this.time, this.temperature, this.zones);
    }
    this.location.back();
  }

  delete() {
    this.scheduleService.deleteSchedule(this.id);
    this.location.back();
  }

}
