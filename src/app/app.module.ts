import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './404/error404.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    CourseListComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "", redirectTo: "Courses", pathMatch: "full"
      },
      {
        path: "Courses", component: CourseListComponent
      },
      {
        path: '**', component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
