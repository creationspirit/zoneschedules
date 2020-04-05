import { Zone } from './zone';

export interface Schedule {
  time: Time;
  temperature: number;
  zones: Zone[];
}

export interface Time {
  hour: number;
  minute: number;
}
