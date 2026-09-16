import { Event } from "@/types/event";

export const events: Event[] = [
  {
    slug: "cloudscale-summit-2026",
    title: "CloudScale Summit 2026",
    description:
      "Our annual flagship conference bringing together infrastructure engineers, ML practitioners, and cloud architects from across the industry. Two days of deep-dive technical talks, hands-on workshops, and hallway conversations about the future of AI infrastructure. Speakers from Cirruscale, Google DeepMind, Mistral AI, and more.",
    coverGradient: "linear-gradient(135deg, #9F1239 0%, #7F1D1D 100%)",
    date: "November 14, 2026",
    endDate: "November 15, 2026",
    location: "Moscone Center, San Francisco, CA",
    type: "conference",
    registrationLink: "#",
  },
  {
    slug: "gpu-optimization-workshop-oct-2026",
    title: "GPU Optimization Workshop",
    description:
      "A live, hands-on 2-hour virtual workshop where our engineers walk through real-world GPU utilization patterns, common scheduling mistakes, and step-by-step tuning techniques that have reduced training costs by up to 40% for our customers. Limited to 50 attendees for a live Q&A session. Free for all CloudBurst subscribers.",
    coverGradient: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
    date: "October 22, 2026",
    location: "Virtual (Zoom)",
    type: "workshop",
    registrationLink: "#",
  },
  {
    slug: "mlops-office-hours-november-2026",
    title: "MLOps Office Hours — November Edition",
    description:
      "Monthly open office hours with the Cirruscale solutions engineering team. Bring your toughest MLOps questions, architecture challenges, or cost puzzles. No slides, no pitch — just honest technical conversations. Open to everyone, customer or not.",
    coverGradient: "linear-gradient(135deg, #065F46 0%, #047857 100%)",
    date: "November 6, 2026",
    location: "Virtual (Google Meet)",
    type: "webinar",
    registrationLink: "#",
  },
];
