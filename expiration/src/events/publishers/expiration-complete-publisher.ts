import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@minadaoud11/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
