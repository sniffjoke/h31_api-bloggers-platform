import { IsString, Length } from 'class-validator';

export class BanUserForBlogDto {
  isBanned: boolean;

  @IsString({message: 'Должно быть строковым значением'})
  @Length(20, 1000, {message: 'Минимум знаков: 20'})
  banReason: string | null;

  blogId: string

}
