import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'city', 'zipcode', 'company'];
  userList: Array<any> = [];
  constructor(public api: ApiService) { }
  selectUser(data) {
    console.log(data);
    this.api.selectedUser = data;
    this.api.getUserPercentage(data.company.name);
  }
  ngOnInit() {
  }

}
