import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent implements OnInit {
  data;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getQuiz().subscribe(data => {
      this.data = data;
    });
  }

}
