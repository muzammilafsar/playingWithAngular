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
  constructor(private http: HttpClient) { }
  getUserList() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((val: Array<any>) => {
      this.userList = val;
      this.selectedUser = val[0];
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
}
