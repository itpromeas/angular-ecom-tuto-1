import { Component, Input } from '@angular/core';
import { navigation } from './navbarMenu';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent {

  category:any;
  @Input() selectedSection:any;

  ngOnInit(){
    this.category = navigation;
    //console.log("selected section ",this.category[this.selectedSection].sections);
    
  }

}
