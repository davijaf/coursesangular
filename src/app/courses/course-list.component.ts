import { Component, OnInit  } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course-service';

@Component({
    //selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    title : string = 'Course-Manager';
    name : string  = "Davi José";
    email : string  = "davijose@gmail.com";
    birthDate : string  = "December, 17, 1992";
    phoneNumber : number  = 62992775804;
    address: string = "R. 3";
    addressComplement: string = "Frei Eustáquio";
    city: string = "Anápolis";
    state: string = "Goiás";
    country: string = "Brazil";
    occupation: string = "Full Stack Developer"

    _courses: Course[] = [];

    filteredCourses: Course[] = [];

    _filterBy: string= "";

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log("Error", err)
    });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log("Error", err)
        })
    }



    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}