import { Component, Input, AfterContentChecked } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements AfterContentChecked {
  satelliteTypes: string[] = [];

  @Input() satellites: Satellite[];
  constructor() {
  }

  ngAfterContentChecked() {
    this.typesOfSatellites();
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

  typesOfSatellites(): void {
    for (const satellite of this.satellites) {
      if (!this.satelliteTypes.includes(satellite.type)) {
        this.satelliteTypes.push(satellite.type);
      }
    }
  }
}
