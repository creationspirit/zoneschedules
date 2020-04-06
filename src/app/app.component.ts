import { Component, OnInit } from '@angular/core';

import { ZoneService } from './services/zone-service/zone.service';
import { UnitService } from './services/unit-service/unit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zone-schedules';

  constructor(
    private zoneService: ZoneService,
    public unitService: UnitService) {}

  ngOnInit() {
    this.zoneService.fetchZones();
  }

  onUnitChange(unit: string) {
    this.unitService.changeUnit(unit);
  }
}
