import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() // needed as we're injecting Http service into this service
export class PublicService {

  key = 'AIzaSyDOzeEzBBf1fY_pG1_PcUUthiqmWU8Bpr0';
  urlBase = 'https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=' + this.key;

  constructor(private _http: HttpClient) {
  }

  getMap(address: String) {
    const url = this.urlBase + '&center=' + address;
    return this._http.get(url);
  }

  getCoordinate(address: String) {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.key;
    return this._http.get(url);
  }
}
