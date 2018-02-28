import { HotelSearch } from './../model/hotelsearch.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../utils/app.constants';
import { createRequestOption } from '../utils/request-util';
import 'rxjs/add/operator/map';

import { Hotel } from '../model/hotel.model';

export type EntityResponseType = HttpResponse<Hotel>;


@Injectable()
export class HotelService {

    private resourceUrl = SERVER_API_URL + '/hotels';
    private filterHotelsUrl = this.resourceUrl + '/filter-hotels';

    constructor(private http: HttpClient) { }

    query(): Observable<any> {
        return this.http.get(this.resourceUrl, { observe: 'response' });
    }

    filterQuery(hotel: HotelSearch): Observable<any>{
        return this.http.post(this.filterHotelsUrl, hotel, {});
    }

    private convertArrayResponse(res: HttpResponse<Hotel[]>): HttpResponse<Hotel[]> {
        const jsonResponse: Hotel[] = res.body;
        const body: Hotel[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({ body });
    }

    /**
    * Convert a returned JSON object to Persona.
    */
    private convertItemFromServer(hotel: Hotel): Hotel {
        const copy: Hotel = Object.assign({}, hotel);
        return copy;
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        console.log(res.body);
        const body: Hotel = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

     /**
     * Convert a Persona to a JSON which can be sent to the server.
     */
    private convert(hotel: HotelSearch): HotelSearch {
        const copy: HotelSearch = Object.assign({}, hotel);
        return copy;
    }


}