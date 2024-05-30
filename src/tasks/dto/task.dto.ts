import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class createTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  description: string;
}

export interface updateTaskDto {
  title?: string;
  description?: string;
}
