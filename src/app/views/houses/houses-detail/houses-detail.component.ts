import {Component, Input, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {House} from '../../../models/house.model.client';
import {SharedService} from '../../../services/shared.service';
import {PublicService} from '../../../services/public.service';

@Component({
  selector: 'app-houses-detail',
  templateUrl: './houses-detail.component.html',
  styleUrls: ['./houses-detail.component.css']
})
export class HousesDetailComponent implements OnInit {
  userId: String;
  houseId: String;
  user: String;
  house: House;
  role: String;

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService, private publicService: PublicService) {
    // this.house = new House('1', '1', '1', '1', '1', '1', '1', '1');
    this.user = sharedService.user;
    this.role = sharedService.role;
  }

  buy(house) {
    this.house.buyer = this.userId;
    this.houseService.updateHouse(this.houseId, this.house).subscribe(hou => {
      this.router.navigateByUrl('/user/' + this.userId + '/order');
    });
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
