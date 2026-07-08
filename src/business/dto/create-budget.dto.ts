export class CreateBudgetDto {
  category: string;
  monthlyLimit: number;
  spent?: number;
  period?: string;
}
