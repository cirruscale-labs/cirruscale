import { Event } from "@/types/event";
import { events } from "@/data/events";

export function getEvents(): Event[] {
  return events;
}
