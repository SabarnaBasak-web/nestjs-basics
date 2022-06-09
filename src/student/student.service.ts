import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const lesson = this.studentRepository.create({
      id: uuidv4(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(lesson);
  }

  async getAllStudentDetails(): Promise<Student[]> {
    const response = await this.studentRepository.find();
    return response;
  }
}
