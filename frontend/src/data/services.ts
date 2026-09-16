import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "cloud-architecture",
    name: "Cloud Architecture Design",
    tagline: "Battle-tested architectures for AI/ML pipelines",
    description:
      "We design end-to-end cloud architectures tailored to your data volumes, team size, and cost targets — from raw data ingestion through feature engineering, training, and model serving. Every design comes with documented runbooks, cost models, and a 90-day support window.",
    deliverables: [
      "Current-state infrastructure audit",
      "Reference architecture with multi-AZ failover",
      "Cost model and ROI analysis",
      "Terraform/Pulumi IaC templates",
      "Security review and compliance checklist",
      "90-day post-delivery support",
    ],
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
    icon: "🏗",
  },
  {
    id: "mlops-infrastructure",
    name: "MLOps & AI Infrastructure",
    tagline: "From experiment to production in days, not months",
    description:
      "We build the full MLOps stack your team needs: experiment tracking, model registries, CI/CD for ML, automated retraining pipelines, and monitoring for data drift and model degradation. Fully integrated with your existing code and cloud accounts.",
    deliverables: [
      "Experiment tracking setup (MLflow / W&B)",
      "Automated retraining pipeline with triggers",
      "Model registry with approval workflows",
      "CI/CD for model training and deployment",
      "Data and model drift monitoring",
      "On-call runbook and escalation playbook",
    ],
    gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    icon: "🔁",
  },
  {
    id: "managed-cloud-ops",
    name: "Managed Cloud Operations",
    tagline: "24/7 reliability so your team ships, not firefights",
    description:
      "Our SRE team takes ownership of your cloud infrastructure — monitoring, incident response, patch management, and continuous cost optimization. We operate to an SLA of 99.99% uptime and provide a dedicated Slack channel with a 15-minute first-response guarantee.",
    deliverables: [
      "24/7 monitoring with PagerDuty integration",
      "15-minute first-response SLA",
      "Monthly cost optimization reports",
      "Quarterly security and compliance reviews",
      "Capacity planning and scaling recommendations",
      "Dedicated SRE Slack channel",
    ],
    gradient: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
    icon: "🛡",
  },
];
