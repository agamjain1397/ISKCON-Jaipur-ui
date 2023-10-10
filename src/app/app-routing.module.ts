import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { SrilaPrabhupadaComponent } from './srila-prabhupada/srila-prabhupada.component';
import { JoinISKCONComponent } from './join-iskcon/join-iskcon.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { LiveDarshanComponent } from './live-darshan/live-darshan.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'srila-prabhupada', component: SrilaPrabhupadaComponent },
  { path: 'join-iskcon', component: JoinISKCONComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'time-table', component: TimeTableComponent },
  { path: 'live-darshan', component: LiveDarshanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
