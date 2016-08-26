import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Doctor } from "../models";


@Injectable()
export class DoctorService {
    constructor(private _http: Http) { }

    public getById = (options: { id: number }) => {
        return this._http.get(`/api/doctor/get?id=${options.id}`)
            .map((data) => data.json());
    } 

    public getAll = () => {
        return this._http.get(`/api/doctor/get`)
            .map((data) => data.json());
    } 

    public addOrUpdate = (options: { entity: Doctor }) => {
        return this._http.post(`/api/doctor/addOrUpdate`, { doctor: options.entity })
            .map((data) => data.json());
    } 

    public remove = (options: { id: number }) => {
        return this._http.delete(`/api/doctor/get?id=${options.id}`)
            .map((data) => data.json());
    } 
}