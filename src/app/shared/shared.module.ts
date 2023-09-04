import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from './service/data-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [DataServiceService],
})
export class SharedModule {}
