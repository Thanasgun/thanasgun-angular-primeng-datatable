import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../shared/service/data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data!: any[];
  loading: boolean = true;

  constructor(private dataService: DataServiceService) {}

  async ngOnInit() {
    this.data = await this.dataService.getData();
    this.loading = false;
    console.log(this.data);
  }
}
