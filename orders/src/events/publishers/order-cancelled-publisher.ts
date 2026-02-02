import { OrderCancellenEvent, Publisher, Subjects } from "@minadaoud11/common";

export class OrderCancelledPublisher extends Publisher<OrderCancellenEvent> {
  readonly subject = Subjects.OrderCancelled;
}
