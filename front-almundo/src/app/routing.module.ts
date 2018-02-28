import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarRoute } from './layout';
import { DEBUG_INFO_ENABLED } from './utils/app.constants';

const LAYOUT_ROUTES = [
    navbarRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true , enableTracing: DEBUG_INFO_ENABLED })
    ],
    exports: [
        RouterModule
    ]
})
export class OnlyfrontAppRoutingModule {}