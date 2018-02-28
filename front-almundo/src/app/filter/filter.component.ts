import { EntityResponseType } from './../hotel/hotel.service';
import { HotelSearch } from './../model/hotelsearch.model';
import { Hotel } from './../model/hotel.model';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HotelService } from '../hotel/hotel.service';

@Component({
    selector: 'filter-comp',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {

    public nombre: string;
    public checkbox: any[];
    private hotelSearch: HotelSearch;
    @Output() result = new EventEmitter();

    constructor(private hotelService: HotelService) {
        this.hotelSearch = new HotelSearch();
        this.checkbox = [
            {
                nombre: "5",
                valor: false
            }, {
                nombre: "4",
                valor: false
            }, {
                nombre: "3",
                valor: false
            }, {
                nombre: "2",
                valor: false
            }, {
                nombre: "1",
                valor: false
            }
        ]
    }

    public buscar() {
        this.hotelSearch.name = this.nombre;
        this.hotelSearch.stars = this.buscarEstrellas();
        this.hotelService.filterQuery(this.hotelSearch).subscribe(
            result => {
                console.log(result);
               if(result.code != 200){
                   this.onSuccess(result);
               }else{
                   this.result = result.data;
               }

           },
           error => {
               console.log(<any>error);
           }
        );
    }

    private buscarEstrellas(): any[] {
        let estrellas = [];
        for (let i = 0; i < this.checkbox.length; i++) {
            let item = this.checkbox[i];
            if (item.valor) {
                estrellas.push(item.nombre);
            }
        }
        return estrellas;
    }

    getStarts(numero) {
        let array = [];
        for (let i = 0; i < numero; i++) {
            array.push('./assets/icons/filters/star.svg');
        }
        return array;
    }

    private onSuccess(data) {
        console.log(data);
        this.result.emit(data);
    }

    private onError(error) {
        console.error(error.message);
    }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.hotelService.query().subscribe(
            (res: HttpResponse<Hotel[]>) => this.onSuccess(res.body),
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

}