import { Hotel } from './../model/hotel.model';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HotelComponent   {


  @Input('entrada') hotels : any;

  currency: String;
  label: String;
  button: String;



  constructor(private hotelService: HotelService) { 
    this.currency = "ARS";
    this.label = "Precio por noche por habitación";
    this.button = "Ver hotel";
  }


  getStarts(numero){
    let array = [];
    for (let i = 0; i < numero; i++) {
      array.push('./assets/icons/filters/star.svg');
    }
    return array;
  }


}