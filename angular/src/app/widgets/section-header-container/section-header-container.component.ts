import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-section-header-container',
  templateUrl: './section-header-container.component.html',
  styleUrls: ['./section-header-container.component.scss'],
  host: { '[class]': 'class' },
})
export class SectionHeaderContainerComponent implements OnInit {
  @Input() class: string;

  constructor() {}

  ngOnInit() {}
}
