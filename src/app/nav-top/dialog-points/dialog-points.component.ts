import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
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
  pointsLoading: boolean = false
  
  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<DialogPointsComponent>) { }

  ngOnInit() {
    this.pointsForm = this.fb.group({
      amount: new FormControl()
    })
  }


  onSubmit() {
  this.pointsLoading = true
    this.pointValue = parseInt(this.pointsForm.value.amount);
    this.userService.addPoints(this.pointValue)
      .subscribe(data => {
        this.closeDialog()
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: data.message,
          duration: 2000
        })
          .afterDismissed()
          .subscribe(() => {
            window.location.reload()
          })
      })
  }

  closeDialog() {
    this.dialogRef.close()
  }



}
