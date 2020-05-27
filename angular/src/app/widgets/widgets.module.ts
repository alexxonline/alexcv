import { BoxZoneComponent } from './box-zone/box-zone.component';
import { BriefComponent } from './brief/brief.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionHeaderContainerComponent } from './section-header-container/section-header-container.component';

@NgModule({
  declarations: [
    BoxZoneComponent,
    CvHeaderComponent,
    ProfilePicComponent,
    BriefComponent,
    SectionHeaderComponent,
    SectionHeaderContainerComponent,
    ItemListComponent,
  ],
  imports: [CommonModule],
  exports: [
    BoxZoneComponent,
    BriefComponent,
    CvHeaderComponent,
    ItemListComponent,
    ProfilePicComponent,
    SectionHeaderComponent,
    SectionHeaderContainerComponent,
  ],
})
export class WidgetsModule {}
