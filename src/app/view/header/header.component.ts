import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SettingsDialogComponent} from '../../dialog/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input()
  categoryName: string;



  constructor(private dialog: MatDialog) {
  }


  ngOnInit() {
  }


  // окно настроек
  private showSettings() {
    const dialogRef = this.dialog.open(SettingsDialogComponent,
      {
        autoFocus: false,
        width: '500px'
      });

    // никаких действий не требуется после закрытия окна

  }

}
