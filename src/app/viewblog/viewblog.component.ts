import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
details;
  constructor(
    public router : Router,
    public http : HttpClient,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData()
  {
    this.http
    .get('http://5d47b117992ea9001444c9af.mockapi.io/forms')
    .toPromise()
    .then((response) => {
      this.details = response;
    }, (error) => {
      console.log(error);
    });
  }

}
