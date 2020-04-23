import { Component } from '@angular/core';
import { MovieRequest, ImdbError } from "imdb-api";
import { NgForm } from '@angular/forms';
// import imdb from "imdb-api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDBSearchAndReview';

  inputData = '';
  ratting = null;
  mtitle = '';
  myear = '';
  mimdbid = '';
  mtype = '';
  mratting = '';
  movie = [

  ];
  rattingFormSubmit = [

  ];
  get rattingFormSubmitlocalstoarage(): any {
    return localStorage.getItem('key');
  }

  onkeypress(event: any) {
    console.log(event);
    console.log(event.target.value);
    this.searchmovie(event.target.value);
  }

  constructor() {

  }

  searchmovie(moviewname: any) {
    return fetch('http://www.omdbapi.com/?s=' + moviewname + '&apikey=46cc96c8',).then(response => response.json())
      .then(res => this.movie = res.Search);
  }

  onSubmit(rattingForm: NgForm) {
    console.log(rattingForm.value);
    this.rattingFormSubmit.push(rattingForm.value);
    localStorage.setItem('key', rattingForm.value);
    // return ;
    // console.log(localStorage.getItem('key')?JSON.parse());
  }





  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // fetch('http://www.omdbapi.com/?s=' + this.inputData + '&apikey=46cc96c8',).then(response => response.json())
    //   .then(res => this.movie = res.Search);

    // this.rattingFormSubmitlocalstoarage.push(localStorage.getItem('key'));

    // console.log(this.rattingFormSubmitlocalstoarage);


  }




















}
