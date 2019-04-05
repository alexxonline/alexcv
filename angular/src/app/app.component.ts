import { Component } from "@angular/core";
import { data as cvData } from "../cv-data";
import { Helpers } from './widgets/helpers';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "cv";
  data = cvData;
  helpers = Helpers;
}
