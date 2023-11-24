import { Component } from '@angular/core';
import { menJeans } from 'src/app/Data/men-jeans';
import { mens_kurta } from 'src/app/Data/men-kurta';
import { womenDress } from 'src/app/Data/women-dress';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  menJeans:any;
  womenDress:any;
  menKurta:any;

  ngOnInit(){

    this.menJeans = menJeans.slice(0,5);
    this.menKurta = mens_kurta.slice(0,5);
    this.womenDress = womenDress.slice(0,5);
  }
  
}
