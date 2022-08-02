import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class componentWeatherDisplay implements OnInit {
    apiData: any = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.getAPIData().subscribe((data)=>{
            this.apiData = data;

            console.log(this.apiData);
        });
    }

    getAPIData(){
        return this.http.get('https://jsonplaceholder.typicode.com/todos'); 
    }
}
