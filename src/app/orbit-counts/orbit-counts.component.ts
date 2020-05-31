import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  totalSatelliteCount(): number {
    return this.satellites.length;
  }

  typeSatelliteCount(type: string): number {
    let typeCount: number = 0;
    for (const satellite of this.satellites) {
      if (type === satellite.type) {
        typeCount++;
      }
    }
    return typeCount;
  }

}
