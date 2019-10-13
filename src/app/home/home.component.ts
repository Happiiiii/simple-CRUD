import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
details;
  constructor(
    public router: Router,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.details = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl()
    });
  }

  submitData() {
    this.http.post(`http://5d47b117992ea9001444c9af.mockapi.io/forms`, this.details.value)
    .toPromise()
    .then((response) => {
      this.details = response;
      this.router.navigate(['viewblog']);
    }, (error) => {
      console.log(error);
    });
  }

}
