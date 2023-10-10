import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { SrilaPrabhupadaComponent } from './srila-prabhupada/srila-prabhupada.component';
import { JoinISKCONComponent } from './join-iskcon/join-iskcon.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { LiveDarshanComponent } from './live-darshan/live-darshan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DonationComponent,
    SrilaPrabhupadaComponent,
    JoinISKCONComponent,
    AboutUsComponent,
    GalleryComponent,
    TimeTableComponent,
    LiveDarshanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
