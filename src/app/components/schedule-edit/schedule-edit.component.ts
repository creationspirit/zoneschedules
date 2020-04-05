import { Component, OnInit } from '@angular/core';

import { ZoneService } from '../../services/zone-service/zone.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {

  constructor(public zoneService: ZoneService) { }

  ngOnInit(): void {
  }

}
