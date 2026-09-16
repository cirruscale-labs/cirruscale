import { Event } from "@/types/event";

export const events: Event[] = [
  {
    slug: "clouddeploy-conf-2026",
    title: "CloudDeploy Conf 2026",
    description:
      "Our annual flagship conference bringing together backend developers, DevOps engineers, and cloud architects. Two days of deep-dive technical talks, hands-on workshops, and hallway conversations about software deployment and cloud infrastructure. Speakers from CirruScale, AWS, HashiCorp, and more.",
    coverGradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    date: "November 14, 2026",
    endDate: "November 15, 2026",
    location: "Moscone Center, San Francisco, CA",
    type: "conference",
    registrationLink: "#",
  },
  {
    slug: "kubernetes-workshop-oct-2026",
    title: "Kubernetes Production Workshop",
    description:
      "A live, hands-on 2-hour virtual workshop where our engineers walk through real-world Kubernetes deployment patterns, auto-scaling configuration, and observability setup. Learn how to go from Docker Compose to production K8s. Limited to 50 attendees for live Q&A.",
    coverGradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    date: "October 22, 2026",
    location: "Virtual (Zoom)",
    type: "workshop",
    registrationLink: "#",
  },
  {
    slug: "devops-office-hours-november-2026",
    title: "DevOps Office Hours — November Edition",
    description:
      "Monthly open office hours with the CirruScale engineering team. Bring your toughest CI/CD questions, Docker challenges, or cloud cost puzzles. No slides, no pitch — just honest technical conversations. Open to everyone, client or not.",
    coverGradient: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
    date: "November 6, 2026",
    location: "Virtual (Google Meet)",
    type: "webinar",
    registrationLink: "#",
  },
];
