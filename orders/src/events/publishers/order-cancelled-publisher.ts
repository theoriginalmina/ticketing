import { OrderCancelledEvent, Publisher, Subjects } from "@minadaoud11/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
