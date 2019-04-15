import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AgmMap} from '@agm/core';
import {PublicService} from '../../../../services/public.service';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  marker?: Marker;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() address: String;

  geocoder: any;
  public location: Location = {
    lat: 51.678418,
    lng: 7.809007,
    marker: {
      lat: 51.678418,
      lng: 7.809007,
      draggable: true
    },
    zoom: 5
  };

  @ViewChild(AgmMap) map: AgmMap;

  constructor(private publicService: PublicService) {
  }

  ngOnInit() {
    console.log(this.address);
    this.publicService.getCoordinate(this.address ? this.address : 'Seattle').subscribe((data: any) => {
      this.location.lat = data.results[0].geometry.location.lat;
      this.location.lng = data.results[0].geometry.location.lng;
      this.location.marker.lat = data.results[0].geometry.location.lat;
      this.location.marker.lng = data.results[0].geometry.location.lng;
      this.location.viewport = data.results[0].geometry.viewport;
    });
    // this.findLocation(this.address);
  }

}
