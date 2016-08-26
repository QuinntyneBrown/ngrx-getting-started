import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class DoctorService {
    constructor(private _http: Http) { }

    public getAll = () => {
        return this._http.get(`/api/doctor/get`)
            .map((data) => data.json());
    } 
}