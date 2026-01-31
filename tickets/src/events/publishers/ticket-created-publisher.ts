import { Publisher, Subjects, TicketCreatedEvent } from "@minadaoud11/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
