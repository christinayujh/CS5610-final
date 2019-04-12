import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {
  userId: String;
  houses = [{}];
  myflag = false;

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute) {
  }

  onChange() {
    if (this.myflag) {
      this.houseService.findHousesByUser(this.userId)
        .subscribe(data => {
          console.log(data);
          this.houses = data;
        });
    } else {
      this.houseService.findHouses()
        .subscribe(data => {
          console.log(data);
          this.houses = data;
        });
    }

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];

    });
    this.onChange();

  }

}
