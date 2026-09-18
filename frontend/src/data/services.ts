import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "full-stack-development",
    name: "Full-Stack Development",
    tagline: "End-to-End Software Built to Scale",
    description:
      "We build complete applications — frontend, backend, APIs, and databases. Go, Python, React, Next.js, and modern frameworks, all written with clean architecture, comprehensive tests, and production-ready from day one.",
    deliverables: [
      "Full-stack application development",
      "REST API and gRPC service design",
      "Frontend development (React, Next.js)",
      "Database design (PostgreSQL, Redis, MongoDB)",
      "Comprehensive test coverage and CI integration",
      "Performance profiling and optimization",
    ],
    gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
    icon: "⚙️",
  },
  {
    id: "containerization",
    name: "Containerization & Docker",
    tagline: "Package Your App for Any Environment",
    description:
      "We Dockerize your applications with optimized multi-stage builds, proper layer caching, and production-ready configurations. Whether it is a Go binary, a Python Flask app, or a full-stack monorepo — we create containers that are small, secure, and fast to deploy.",
    deliverables: [
      "Dockerfile creation with multi-stage builds",
      "Docker Compose for local development",
      "Image optimization (minimal base images)",
      "Container security scanning",
      "Private registry setup (ECR, GCR, ACR)",
      "Documentation and team onboarding",
    ],
    gradient: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
    icon: "🐳",
  },
  {
    id: "cicd-pipelines",
    name: "CI/CD Pipeline Setup",
    tagline: "Automate Your Path From Commit to Production",
    description:
      "We build CI/CD pipelines that test, build, and deploy your code automatically on every push. GitHub Actions, GitLab CI, or Jenkins — configured with proper staging environments, automated tests, and zero-downtime deployments.",
    deliverables: [
      "Pipeline design and implementation",
      "Automated testing integration",
      "Staging and production environment setup",
      "Blue-green or canary deployment strategies",
      "Secrets management and environment variables",
      "Pipeline monitoring and failure alerts",
    ],
    gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    icon: "🔄",
  },
  {
    id: "kubernetes-cloud",
    name: "Kubernetes & Cloud Deployment",
    tagline: "Scale Reliably on AWS, GCP, or Azure",
    description:
      "We set up and manage Kubernetes clusters on the cloud provider that is right for your project. From EKS to GKE to AKS — we handle networking, ingress, auto-scaling, monitoring, and cost optimization so your services run reliably at any scale.",
    deliverables: [
      "Kubernetes cluster provisioning (EKS, GKE, AKS)",
      "Helm charts and manifest management",
      "Ingress, TLS, and DNS configuration",
      "Horizontal Pod Autoscaling setup",
      "Observability stack (Prometheus, Grafana, Loki)",
      "Terraform IaC for full infrastructure reproducibility",
    ],
    gradient: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
    icon: "☸️",
  },
  {
    id: "managed-operations",
    name: "Managed Operations",
    tagline: "Ongoing Reliability & Scaling",
    description:
      "We keep your infrastructure running. Ongoing monitoring, incident response, scaling, security patching, and cost optimization — so your team focuses on building features instead of firefighting production issues.",
    deliverables: [
      "Infrastructure monitoring and alerting",
      "Rapid incident response and resolution",
      "Auto-scaling and capacity planning",
      "Security patching and compliance reviews",
      "Cloud cost optimization reports",
      "Dedicated Slack channel for support",
    ],
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
    icon: "🛡",
  },
  {
    id: "cloud-support",
    name: "Cloud Support",
    tagline: "Expert Guidance for Every Cloud Decision",
    description:
      "From architecture reviews to cloud migration and cost audits, we provide hands-on cloud support whenever you need it. Whether you are moving to the cloud for the first time or optimizing an existing setup, our engineers are in your corner.",
    deliverables: [
      "Cloud architecture design and review",
      "Cloud migration planning and execution",
      "Multi-cloud strategy (AWS, GCP, Azure)",
      "Cloud cost audits and optimization",
      "Security posture review and hardening",
      "On-demand engineering support hours",
    ],
    gradient: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
    icon: "☁️",
  },
  {
    id: "qa-testing",
    name: "QA & Testing",
    tagline: "Ship with Confidence, Every Time",
    description:
      "We design and implement comprehensive testing strategies — unit, integration, end-to-end, and load testing — so bugs are caught before they reach production. From test plan to automated regression suites, we make quality a built-in part of your pipeline.",
    deliverables: [
      "Test strategy design and planning",
      "Unit and integration test implementation",
      "End-to-end testing (Playwright, Cypress)",
      "Load and performance testing",
      "Automated regression suite setup",
      "QA integration into CI/CD pipelines",
    ],
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    icon: "✅",
  },
];
