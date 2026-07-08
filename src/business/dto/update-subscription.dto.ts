export class UpdateSubscriptionDto {
  plan?: string;
  status?: string;
  stripeId?: string;
  expiresAt?: Date;
}
