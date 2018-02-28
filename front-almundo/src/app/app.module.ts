import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HotelService } from './hotel/hotel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { OnlyfrontAppRoutingModule} from './routing.module';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HotelComponent,
    data: { title: 'Hotel List' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OnlyfrontAppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
