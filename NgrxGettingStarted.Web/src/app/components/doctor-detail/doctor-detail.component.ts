import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Doctor } from "../../core";

@Component({
    template: require("./doctor-detail.component.html"),
    styles: [require("./doctor-detail.component.scss")],
    selector: "doctor-detail",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorDetailComponent { 
    @Input() public entity: Doctor = null;
}
