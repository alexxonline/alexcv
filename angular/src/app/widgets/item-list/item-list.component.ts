import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cv-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {
  @Input() list: Array<object>;

  constructor() {}

  ngOnInit() {}
}
