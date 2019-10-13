import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
details;
  constructor(
    public activatedroute: ActivatedRoute,
    public router: Router,
    public http: HttpClient 
  ) { 
    this.details = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl()
    });
  }

  ngOnInit() {
    this.http
    .get(`http://5d47b117992ea9001444c9af.mockapi.io/forms/${this.activatedroute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response:any) => {
      this.details.setValue({
        firstName : response.firstName,
        lastName : response.lastName
      });
    }, (error) => {
      console.log(error);
    });
  }

  updateData(){
    this.http
    .put(`http://5d47b117992ea9001444c9af.mockapi.io/forms/${this.activatedroute.snapshot.paramMap.get('id')}`,this.details.value)
    .toPromise()
    .then((response) => {
      this.router.navigate(['viewblog']);
    }, (error) => {
      console.log(error);
    });
  }

}
