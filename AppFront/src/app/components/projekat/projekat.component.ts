import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjekatService } from '../../services/projekat.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Projekat } from '../../models/Projekat';
import { HttpClient } from '@angular/common/http';
import { ProjekatDialogComponent } from '../dialogs/projekat-dialog/projekat-dialog.component';

@Component({
    selector: 'app-projekat',
    templateUrl: './projekat.component.html',
    styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent implements OnInit {

    displayedColumns = ['id', 'naziv', 'oznaka', 'opis'];
    exampleDatabase: ProjekatService;
    dataSource: MatTableDataSource<Projekat>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public httpClient: HttpClient, public projekatService: ProjekatService, public dialog: MatDialog) { }

    ngOnInit() {
        this.loadData();
    }

    public loadData() {
        this.projekatService.getAllProjekat().subscribe(data => {

            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;

            this.dataSource.sortingDataAccessor = (data, property) => {
                switch (property) {
                    case 'id': return data[property];
                    default: return data[property].toLocaleLowerCase();
                }
            };
            this.dataSource.sort = this.sort;
        });

    }


    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    public openDialog(flag: number, id: number, naziv: string, oznaka: string, opis: string) {
        const dialogRef = this.dialog.open(ProjekatDialogComponent, {
            data: { id: id, naziv: naziv, oznaka: oznaka, opis: opis }
        });
        dialogRef.componentInstance.flag = flag;
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.loadData();
            }
        });
    }

}
