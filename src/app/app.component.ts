import { Component, OnInit } from '@angular/core';

import { ZoneService } from './services/zone-service/zone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zone-schedules';

  constructor(private zoneService: ZoneService) {}

  ngOnInit() {
    this.zoneService.fetchZones();
  }
}
