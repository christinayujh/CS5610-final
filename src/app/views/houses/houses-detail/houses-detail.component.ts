import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute} from '@angular/router';
import {House} from '../../../models/house.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-houses-detail',
  templateUrl: './houses-detail.component.html',
  styleUrls: ['./houses-detail.component.css']
})
export class HousesDetailComponent implements OnInit {

  userId: String;
  houseId: String;
  house: House;
  user: String;
  role: String;

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
    this.house = new House('123', '123', '123', '123', '123', '123');
    this.user = sharedService.user;
    this.role = sharedService.role;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.houseId = params['hid'];

    });
    this.houseService.findHouseById(this.houseId)
      .subscribe(data => {
        console.log('in houses-detail comp...');
        console.log(data);
        this.house = data;
      });
  }

}
