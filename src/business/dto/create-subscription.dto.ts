import { IsString, IsEnum, IsOptional, IsDateString } from 'class-validator';
import { PlanType, SubscriptionStatus } from '@prisma/client';

export class CreateSubscriptionDto {
  @IsEnum(PlanType)
  plan: PlanType;

  @IsOptional()
  @IsString()
  stripeId?: string;

  @IsOptional()
  @IsDateString()
  expiresAt?: Date;
}
