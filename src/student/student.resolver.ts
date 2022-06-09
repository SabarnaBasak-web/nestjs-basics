import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  addStudent(@Args('addStudentDetails') addStudentDetails: CreateStudentInput) {
    return this.studentService.createStudent(addStudentDetails);
  }

  @Query((returns) => [StudentType])
  getAllStudent() {
    return this.studentService.getAllStudentDetails();
  }
}
