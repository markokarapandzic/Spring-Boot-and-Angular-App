import { Component, OnInit, Inject } from '@angular/core';
import { GrupaService } from '../../../services/grupa.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-grupa-dialog',
    templateUrl: './grupa-dialog.component.html',
    styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit {

    public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<GrupaDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public grupaService: GrupaService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.grupaService.addGrupa(this.data);
        this.snackBar.open('Uspešno dodat Grupa: ' + this.data.naziv, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.grupaService.updateGrupa(this.data);
        this.snackBar.open('Uspešno modifikovan Grupa: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.grupaService.deleteGrupa(this.data.id);
        this.snackBar.open('Uspešno obrisan Grupa: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }

}
