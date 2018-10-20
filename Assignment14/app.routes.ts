import { RouterModule, Routes } from "@angular/router";

import { ThankyouComponent } from "./thankyou/thankyou.component";
import { DataDrivenComponent } from './data-driven/data-driven.component';

const MY_ROUTES: Routes = [
    { path: '', component: DataDrivenComponent },
    { path: 'thankyou', component: ThankyouComponent },
    { path: '**', redirectTo: '/' }
];


export const myRoutes = RouterModule.forRoot(MY_ROUTES);
