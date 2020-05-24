export interface Duty {
  id: number,
  date: string,
  quantity: number,
}

export interface Sale {
  id: number;
  candy_id: number;
  candy_name: string;
  candy_price: number;
  customer_id: number;
  customer_name: string;
  customer_phone: string;
  payment_method: "money" | "transfer" | "scheduled";
  status: "paid" | "not_paid";
}

export interface ConsolidatedDuty {
  id: number;
  date: string;
  quantity: number;
  subtotal: number;
  paid_amount: number;
  scheduled_amount: number;
  sales: Sale[];
}