import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, Doctor } from "../core";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit { 
    constructor(private _store: Store<AppState>) { }

    ngOnInit() {
        
    }

    public entites: Array<Doctor> = [];
}
