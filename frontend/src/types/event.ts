export interface Event {
  slug: string;
  title: string;
  description: string;
  coverGradient: string;
  date: string;
  endDate?: string;
  location: string;
  type: "conference" | "webinar" | "workshop";
  registrationLink?: string;
}
