import { Subjects } from "./subjects";

export interface OrderCancellenEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
