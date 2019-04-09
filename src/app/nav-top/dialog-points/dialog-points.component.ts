import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-dialog-points',
  templateUrl: './dialog-points.component.html',
  styleUrls: ['./dialog-points.component.css']
})
export class DialogPointsComponent implements OnInit {

  pointsForm: FormGroup; 
  pointValue: number
  constructor(private fb: FormBuilder, private userService: UserService) { }

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
        console.log(data)
      })
  }



}
