import { PaymentCreatedEvent, Publisher, Subjects } from "@minadaoud11/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
