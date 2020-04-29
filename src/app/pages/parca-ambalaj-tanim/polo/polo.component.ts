import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.css']
})
export class PoloComponent implements OnInit {

  formdata
  firstname;
  lastname;


  constructor(private data: BusService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(""),
    });
  }

  mymethod() {
    this.data.sendDataToComponentFromPolo(this.formdata.controls["firstname"].value);
  }

  onClickSubmit(data) {
    alert("data kaydedildi...");

  }

}
