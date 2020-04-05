import { Zone } from './zone';

export interface Schedule {
  id: number;
  time: Time;
  temperature: number;
  zones: number[];
}

export interface ScheduleZone {
  id: number;
  time: Time;
  temperature: number;
  zones: Zone[];
}

export interface Time {
  hour: number;
  minute: number;
}
