import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  data;

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe(data => {
      this.data = data;
    });
  }

}
