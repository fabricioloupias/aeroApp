import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../class/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogPointsComponent } from './dialog-points/dialog-points.component';
import { Observable } from 'rxjs';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  user: Observable<User>
  animal: string;
  name: string;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    })
  }

  ngOnInit() {
  }



  dialogPoints(){
    const dialogRef = this.dialog.open(DialogPointsComponent, {
      width: '650px',
      autoFocus: false
    });
  }

}
