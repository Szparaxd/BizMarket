import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AccountLayoutComponent } from './account-layout/account-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountOffersComponent } from './account-offers/account-offers.component';
import { CreateOfferFormComponent } from './create-offer-form/create-offer-form.component';

export const routes: Routes = [
    { path: '', component: HomeLayoutComponent, children: [
        { path: '', component: HomePageComponent },
        { path: 'account', component: AccountLayoutComponent, children: [
            {path: 'offers', component:AccountOffersComponent }
        ]},
        {
            path: 'offer-create' ,component: CreateOfferFormComponent
        }
    ]},
];
