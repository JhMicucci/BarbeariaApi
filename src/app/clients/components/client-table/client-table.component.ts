import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientModelTable } from '../../client.models';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { DialogManagerService } from '../../../services/dialog-manager.service';
import { SERVICES_TOKEN } from '../../../services/service.token';

@Component({
  selector: 'app-client-table',
  imports: [MatTableModule],
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.scss',
  providers: [
    { provide: SERVICES_TOKEN.DIALOG, useClass: DialogManagerService },
   
  ]
})
export class ClientTableComponent implements AfterViewInit, OnChanges, OnDestroy {
  

  @Input() clients: ClientModelTable[] = []

  dataSource!: MatTableDataSource<ClientModelTable>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions']

  private dialogManagerServiceSubscriptions?: Subscription

  @Output() onConfirmDelete = new EventEmitter<ClientModelTable>()

  @Output() onRequestUpdate = new EventEmitter<ClientModelTable>()

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clients'] && this.clients) {
      this.dataSource = new MatTableDataSource<ClientModelTable>(this.clients)
      if (this.paginator) {
        this.dataSource.paginator = this.paginator
      }
    }
  }
  ngOnDestroy(): void {
    if (this.dialogManagerServiceSubscriptions) {
      this.dialogManagerServiceSubscriptions.unsubscribe()
    }
  }

  formatPhone(phone: string) {
    return `( ${phone.substring(0, 2)} ) ${phone.substring(2, 7)} - ${phone.substring(7)}`
  }

}
