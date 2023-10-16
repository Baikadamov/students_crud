import {Component} from '@angular/core';
import {MyDataService} from "../../services/my-data.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private myDataService: MyDataService, private router: Router) {
  }

  email: any;
  username: any;
  age: any;
  city: any;

  myData$: any;

  submitData() {
    let body = {
      "username": this.username,
      "email": this.email,
      "age": this.age,
      "city": this.city,
    }

    this.myDataService.postData(body)
      .subscribe(
        (response) => {
          console.log(response);
          this.username = '';
          this.email = '';
          this.age = '';
          this.city = '';
          this.router.navigate(['']);
        },
        (error) => {
          console.error(error);
          if (error.status === 400) {
            alert(error.error.err); // Display the error message from the server.
          } else {
            alert('An error occurred. Please try again later.'); // Generic error message for other errors.
          }
        }
      );
  }

}
