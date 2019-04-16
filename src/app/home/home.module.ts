import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FilesComponent } from './files/files.component';
import { FilesAddComponent } from './files-add/files-add.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FilesComponent,
    FilesAddComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  entryComponents : [FilesAddComponent]
})
export class HomeModule { }
