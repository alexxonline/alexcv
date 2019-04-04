import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { Link } from "../link";

@Component({
  selector: "cv-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() links: Array<Link> = [];
  @Input() itemTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
    const list = this.list as Array<string>;
    if (this.links == null || list == null) return;

    this.links.forEach(lin => {
      list[lin.itemIndex] = list[lin.itemIndex].replace(
        lin.text,
        `<a href='${lin.link}' target='_blank'>${lin.text}</a>`
      );
    });
  }
}
