import { Component, OnInit, Input } from '@angular/core';
import { BusService } from './bus.service';
@Component({
  selector: 'app-parca-ambalaj-tanim',
  templateUrl: './parca-ambalaj-tanim.component.html',
  styleUrls: ['./parca-ambalaj-tanim.component.css']
})
export class ParcaAmbalajTanimComponent implements OnInit {

  title = 'myApp';

  tofas_firstname
  polo_fistname

  constructor(private data: BusService) {}

  ngOnInit() {}


  ngDoCheck() {
    this.data.tofasDataToContainer.subscribe(data => this.tofas_firstname = data)
    this.data.poloDataToContainerSource.subscribe(data => this.polo_fistname = data)
  }

  public onTabSelect(e) {
    this.data.sendDataToTofas("parent datası");
  }


}
