import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private LessonService: LessonService) {}
  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.LessonService.getLesson(id);
  }
  @Query((returns) => [LessonType])
  getAllLesson() {
    return this.LessonService.getAllLesson();
  }

  @Mutation((retuns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.LessonService.createLesson(createLessonInput);
  }
}
