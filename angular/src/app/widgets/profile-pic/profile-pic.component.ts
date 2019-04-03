import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cv-profile-pic",
  templateUrl: "./profile-pic.component.html",
  styleUrls: ["./profile-pic.component.scss"]
})
export class ProfilePicComponent implements OnInit {
  @Input() src: string;
  constructor() {}

  ngOnInit() {}
}
