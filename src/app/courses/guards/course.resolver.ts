import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { inject } from '@angular/core';
import { Course } from '../models/course';
import { Observable, of } from 'rxjs';

export const courseResolver: ResolveFn<Observable<Course>> = (
  route,
  state,
  service: CoursesService = inject(CoursesService)
) => {
  if (route.params?.['id']) {
    return service.loadById(route.params['id']); //this 'id' refers to :id in courses-routing
  }
  return of({ _id: '', name: '', category: '' }); //initializing fields with blank
};
