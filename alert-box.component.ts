import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {

  errorMessage: boolean = true;
  saveSearch: boolean = false;
  saveSearchName: string = '';
  showConfirmation: boolean = false;
  constructor(public dialogRef: MatDialogRef<AlertBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.hasOwnProperty('errorMessage')) {
      this.errorMessage = data.errorMessage;
    }
    if (data.hasOwnProperty('saveSearch')) {
      this.saveSearch = data.saveSearch;
    }
    if (data.hasOwnProperty('showConfirmation')) {
      this.showConfirmation = data.showConfirmation;
    }
  }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close({ status: false })
  }
  onDelete() {
    this.dialogRef.close({ status: true })
  }
  onSave() {
    this.dialogRef.close({ status: true, saveSearchName: this.saveSearchName })
  }
}
