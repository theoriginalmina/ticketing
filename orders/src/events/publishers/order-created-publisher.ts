import { OrderCreatedEvent, Publisher, Subjects } from "@minadaoud11/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
