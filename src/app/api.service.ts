import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userList: Array<any> = [];
  pieChart = [0, 0, 0, 0];
  selectedUser: any = {
    name: "sad",
    username: "",
    email: ""
  }
  percentage: number = 0;
  loading: boolean = true;
  constructor(private http: HttpClient) { }
  getUserList() {
    return this.http.get("http://localhost:5000/users").subscribe((val: Array<any>) => {
      this.userList = val;
      this.selectedUser = val[0];
      this.getUserPercentage(this.selectedUser.company.name);
      let reduced = val.reduce((acc, val) => {
        let geo = {
          lat: parseFloat(val.address.geo.lat),
          lng: parseFloat(val.address.geo.lng),
        };
        let obj = [
          geo.lng > 0 ? acc[0] + 1 : acc[0],
          geo.lat < 0 ? acc[1] + 1 : acc[2],
          geo.lat > 0 ? acc[2] + 1 : acc[2],
          geo.lat < 0 ? acc[3] + 1 : acc[3]
        ]

        return obj;
      }, [0, 0, 0, 0]);
      console.log(reduced);
      this.pieChart = reduced
    })
  }
  getUserPercentage(company) {
    this.loading = true;
    this.http.get('http://localhost:5000/users/percentage/'+ company).subscribe((val: {percentage: number}) => {
    this.loading = false;
    this.percentage = val.percentage;
    },(err) => {
    this.loading = false;
    })
  }
}
