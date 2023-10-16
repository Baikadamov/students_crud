import {Component} from '@angular/core';
import {MyDataService} from 'src/app/services/my-data.service';
import {Router} from '@angular/router';
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  myData$: any;
  searchText = '';
  constructor(private myDataService: MyDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.myData$ = this.myDataService.getData();
  }



  delete(user: any) {
    this.myDataService.deleteData(user)
      .subscribe((response) => {
        console.log(response);
        this.myData$ = this.myDataService.getData();
      });
  }
  updateUser(user: any) {
    this.myDataService.updateData(user)
      .subscribe((response) => {
        console.log(response);
        this.myData$ = this.myDataService.getData();
      });
  }

  onSearch() {
    // Perform the filtering operation based on the searchText
    this.myData$ = this.myDataService.getData().pipe(
      map((data: any) => {
        if (this.searchText) {
          return data.filter((user: any) =>
            user.username.toLowerCase().includes(this.searchText.toLowerCase())
          );
        } else {
          return data;
        }
      })
    );
  }



}
