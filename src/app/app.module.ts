import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { NavContentComponent } from './_components/navbar/nav-content/nav-content.component';
import { MainCarouselComponent } from './_components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './_components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './_components/home/home-product-card/home-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavContentComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
