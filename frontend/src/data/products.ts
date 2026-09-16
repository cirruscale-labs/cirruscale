import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "backend-development",
    name: "Backend Development",
    tagline: "Production-Grade APIs & Microservices",
    description:
      "We build fast, reliable backend systems in Go and Python. REST APIs, gRPC services, event-driven microservices, background workers, and CLI tools — all written with clean architecture, comprehensive tests, and production-ready from day one.",
    features: [
      "Go and Python backend development",
      "REST API and gRPC service design",
      "Event-driven microservice architecture",
      "Database design (PostgreSQL, Redis, MongoDB)",
      "Comprehensive test coverage and CI integration",
      "Performance profiling and optimization",
    ],
    gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
    icon: "⚙️",
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    tagline: "From Git Push to Production",
    description:
      "We take your code from repository to running in the cloud. Dockerization, CI/CD pipelines, Kubernetes orchestration, and deployment on AWS, GCP, or Azure — configured for your specific needs with infrastructure as code and full observability.",
    features: [
      "Docker containerization and optimization",
      "CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)",
      "Kubernetes cluster setup and management",
      "AWS, GCP, and Azure deployment",
      "Infrastructure as Code (Terraform / Pulumi)",
      "Monitoring, logging, and alerting setup",
    ],
    gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    icon: "☁️",
  },
  {
    id: "managed-operations",
    name: "Managed Operations",
    tagline: "24/7 Reliability & Scaling",
    description:
      "We keep your infrastructure running. Ongoing monitoring, incident response, scaling, security patching, and cost optimization — so your team focuses on building features instead of firefighting production issues.",
    features: [
      "24/7 infrastructure monitoring and alerting",
      "Rapid incident response and resolution",
      "Auto-scaling and capacity planning",
      "Security patching and compliance reviews",
      "Cloud cost optimization reports",
      "Dedicated Slack channel for support",
    ],
    gradient: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
    icon: "🛡",
  },
];
