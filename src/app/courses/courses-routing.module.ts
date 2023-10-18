import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { courseResolver } from './guards/course.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'new',
    component: CourseFormComponent,
    resolve: { course: courseResolver },
  },
  {
    path: 'edit/:id', // :id is responsible for naming the variable in path
    component: CourseFormComponent,
    resolve: { course: courseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
