import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Doctor } from "../../core";

@Component({
    template: require("./doctor-list.component.html"),
    styles: [require("./doctor-list.component.scss")],
    selector: "doctor-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorListComponent { 
    @Input() public entities: Array<Doctor> = [];
}
