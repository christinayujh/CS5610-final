import {Component, OnInit} from '@angular/core';
import {House} from '../../../models/house.model.client';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-houses-order',
  templateUrl: './houses-order.component.html',
  styleUrls: ['./houses-order.component.css']
})
export class HousesOrderComponent implements OnInit {

  userId: String;
  houses: [House];
  user: String;

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) {
    this.user = sharedService.user;
  }

  delete(house) {
    house.buyer = null;
    this.houseService.deleteOrder(house._id, house).subscribe(hou => {
      this.houseService.findHouseByBuyerId(this.userId).subscribe(data => this.houses = data);
      // this.router.navigateByUrl('/user/' + this.userId + '/house');
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];

    });
    this.houseService.findHouseByBuyerId(this.userId)
      .subscribe(data => {
        console.log('in houses-order comp...');
        console.log(data);
        this.houses = data;
      });
  }

}
