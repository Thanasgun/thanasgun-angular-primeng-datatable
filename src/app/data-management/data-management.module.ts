import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManagementComponent } from './data-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataManagementRoutingModule } from './data-management-routing.module';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';
import { DataServiceService } from '../shared/service';

@NgModule({
  imports: [
    CommonModule,
    DataManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    SharedModule,
  ],
  declarations: [DataManagementComponent, TableComponent, FilterComponent],
  providers: [DataServiceService],
})
export class DataManagementModule {
  constructor() {}
}
