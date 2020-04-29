import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BusService } from '../bus.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-tofas',
  templateUrl: './tofas.component.html',
  styleUrls: ['./tofas.component.css']
})
export class TofasComponent implements OnInit {

  formdata
  firstname;
  lastname;


  constructor(private data: BusService) { }

  ngOnInit() {
    
    this.data.dataToTofas.subscribe(data => this.firstname = data);
    
    this.formdata = new FormGroup({

      firstname: new FormControl(this.firstname),
      lastname: new FormControl(),


    });
  }

  ngOnDestroy() {
    this.data.sendDataToComponentFromTofas(this.formdata.controls["firstname"].value);
  }


  mymethod() {
    this.data.sendDataToComponentFromTofas(this.formdata.controls["firstname"].value);
  }

  onClickSubmit(data) {
    alert("data kaydedildi...");

  }


}
