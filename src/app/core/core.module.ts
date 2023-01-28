import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
//import { Error404Component } from './component/404/error404.component';
@NgModule({
    declarations: [
      NavBarComponent

    ],
    imports: [
      RouterModule
    ],
    exports: [
      NavBarComponent
    ]
})
export class CoreModule {

}