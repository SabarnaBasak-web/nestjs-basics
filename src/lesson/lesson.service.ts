import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateLessonInput } from './lesson.input';
@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private LessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.LessonRepository.create({
      id: uuidv4(),
      name,
      startDate,
      endDate,
    });

    return this.LessonRepository.save(lesson);
  }

  async getLesson(id): Promise<Lesson> {
    return this.LessonRepository.findOne({ id });
  }

  async getAllLesson(): Promise<Lesson[]> {
    return this.LessonRepository.find();
  }
}
