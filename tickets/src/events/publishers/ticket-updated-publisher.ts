import { Publisher, Subjects, TicketUpdatedEvent } from "@minadaoud11/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
