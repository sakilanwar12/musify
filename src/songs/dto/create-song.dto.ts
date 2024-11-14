import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  readonly artists: string[];

  @IsDateString()
  @IsNotEmpty()
  readonly relasedDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly Duration: number;
}
