import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ProjekatService } from '../../../services/projekat.service';

@Component({
    selector: 'app-projekat-dialog',
    templateUrl: './projekat-dialog.component.html',
    styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {

    public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<ProjekatDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public projekatService: ProjekatService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.projekatService.addProjekat(this.data);
        this.snackBar.open('Uspešno dodat Projekat: ' + this.data.naziv, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.projekatService.updateProjekat(this.data);
        this.snackBar.open('Uspešno modifikovan Projekat: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.projekatService.deleteProjekat(this.data.id);
        this.snackBar.open('Uspešno obrisan Projekat: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }
}
