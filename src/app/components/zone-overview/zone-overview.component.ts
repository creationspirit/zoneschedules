import { Component, OnInit } from '@angular/core';

import { Schedule } from '../../models/schedule';

@Component({
  selector: 'app-zone-overview',
  templateUrl: './zone-overview.component.html',
  styleUrls: ['./zone-overview.component.scss']
})
export class ZoneOverviewComponent implements OnInit {

  schedules: Schedule[] = [
    {
      time: {
        hour: 5,
        minute: 10
      },
      temperature: 25,
      zones: [
        {
          id: 1,
          name: 'Zone 1',
        }
      ],
    },
    {
      time: {
        hour: 10,
        minute: 30
      },
      temperature: 15,
      zones: [
        {
          id: 1,
          name: 'Zone 1',
        },
        {
          id: 2,
          name: 'Zone 2',
        }
      ],
    },
    {
      time: {
        hour: 17,
        minute: 0
      },
      temperature: 30,
      zones: [
        {
          id: 1,
          name: 'Zone 1',
        },
        {
          id: 2,
          name: 'Zone 2',
        },
        {
          id: 3,
          name: 'Zone 3',
        }
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
