import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoxZoneComponent } from "./box-zone/box-zone.component";
import { CvHeaderComponent } from "./cv-header/cv-header.component";
import { ProfilePicComponent } from "./profile-pic/profile-pic.component";
import { BriefComponent } from "./brief/brief.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { SectionHeaderContainerComponent } from "./section-header-container/section-header-container.component";
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    BoxZoneComponent,
    CvHeaderComponent,
    ProfilePicComponent,
    BriefComponent,
    SectionHeaderComponent,
    SectionHeaderContainerComponent,
    ItemListComponent
  ],
  imports: [CommonModule],
  exports: [
    BoxZoneComponent,
    BriefComponent,
    CvHeaderComponent,
    ItemListComponent,
    ProfilePicComponent,
    SectionHeaderComponent,
    SectionHeaderContainerComponent
  ]
})
export class WidgetsModule {}
