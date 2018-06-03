import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { SmerService } from '../../services/smer.service';
import { Smer } from '../../models/Smer';
import { HttpClient } from '@angular/common/http';
import { SmerDialogComponent } from '../dialogs/smer-dialog/smer-dialog.component';

@Component({
  selector: 'app-smer',
  templateUrl: './smer.component.html',
  styleUrls: ['./smer.component.css']
})
export class SmerComponent implements OnInit {

    displayedColumns = ['id', 'naziv', 'oznaka'];
    exampleDatabase: SmerService;
    dataSource: MatTableDataSource<Smer>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public httpClient: HttpClient, public smerService: SmerService, public dialog: MatDialog) { }

    ngOnInit() {
        console.log('================================');
        this.loadData();
    }

    public loadData() {

        console.log('================================');
        this.smerService.getAllSmerovi().subscribe(data => {

            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;

            this.dataSource.sortingDataAccessor = (dataForSort, property) => {
                switch (property) {
                    case 'id': return dataForSort[property];
                    default: return dataForSort[property].toLocaleLowerCase();
                }
            };

            this.dataSource.sort = this.sort;
            console.log(this.dataSource);
        });
    }

    applyFilter(filetValue: string) {
        filetValue = filetValue.trim();
        filetValue = filetValue.toLowerCase();
        this.dataSource.filter = filetValue;
    }

    public openDialog(flag: number, id: number, naziv: string, oznaka: string) {
        const dialogRef = this.dialog.open(SmerDialogComponent, {data: {id: id, naziv: naziv, oznaka: oznaka}});
        dialogRef.componentInstance.flag = flag;
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.loadData();
            }
        });
    }
}
