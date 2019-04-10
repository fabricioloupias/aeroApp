import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatSnackBar} from '@angular/material';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-dialog-points',
  templateUrl: './dialog-points.component.html',
  styleUrls: ['./dialog-points.component.css']
})
export class DialogPointsComponent implements OnInit {

  pointsForm: FormGroup; 
  pointValue: number
  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.pointsForm = this.fb.group({
      amount: new FormControl()
    })
  }


  onSubmit(){
    this.pointValue = parseInt(this.pointsForm.value.amount);
    console.log(this.pointValue)

   this.userService.addPoints(this.pointValue)
      .subscribe(data => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: data.messsage,
          duration: 2000
        })
        .afterDismissed()
          .subscribe(() => {
            window.location.reload()
          })
      })
  }



}
