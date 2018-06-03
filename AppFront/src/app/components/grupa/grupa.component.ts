import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { GrupaService } from '../../services/grupa.service';
import { Grupa } from '../../models/Grupa';
import { HttpClient } from '@angular/common/http';
import { GrupaDialogComponent } from '../dialogs/grupa-dialog/grupa-dialog.component';

@Component({
    selector: 'app-grupa',
    templateUrl: './grupa.component.html',
    styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit {

    displayedColumns = ['id', 'oznaka', 'smer'];
    exampleDatabase: GrupaService;
    dataSource: MatTableDataSource<Grupa>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public httpClient: HttpClient, public grupaService: GrupaService, public dialog: MatDialog) { }

    ngOnInit() {
        this.loadData();
    }

    public loadData() {

        this.grupaService.getAllGrupa().subscribe(data => {

            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;

            this.dataSource.sortingDataAccessor = (dataForSort, property) => {
                switch (property) {
                    case 'id': return dataForSort[property];
                    default: return dataForSort[property].toLocalLowerCase();
                }
            };

            this.dataSource.sort = this.sort;
            console.log(this.dataSource);
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    public openDialog(flag: number, id: number, oznaka: string, smer: string) {

        const dialogRef = this.dialog.open(GrupaDialogComponent, {
            data: { id: id,  oznaka: oznaka, smer: smer }
        });
        dialogRef.componentInstance.flag = flag;
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.loadData();
            }
        });

    }

}
