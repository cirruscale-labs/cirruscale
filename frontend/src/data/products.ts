import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "cloudburst",
    name: "CloudBurst",
    tagline: "On-Demand GPU Clusters at Any Scale",
    description:
      "Provision thousands of interconnected GPUs in under 60 seconds. CloudBurst handles topology-aware scheduling, spot instance management, and real-time cost optimization so your team focuses on training — not infrastructure.",
    features: [
      "Topology-aware GPU scheduling (NVLink & InfiniBand)",
      "Auto-scaling from 1 to 10,000 GPUs",
      "Checkpoint-aware preemption for long-running jobs",
      "Spot instance savings with automatic failover",
      "Real-time cost dashboards and budget alerts",
      "CUDA, ROCm, and OpenCL support",
    ],
    gradient: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
    icon: "⚡",
  },
  {
    id: "datanexus",
    name: "DataNexus",
    tagline: "High-Throughput Storage for AI Workloads",
    description:
      "Purpose-built distributed object storage engineered for the read patterns of ML training. DataNexus delivers petabyte-scale capacity with sub-millisecond first-byte latency, cross-region replication, and a fully S3-compatible API.",
    features: [
      "Sub-millisecond first-byte latency",
      "Petabyte-scale object storage",
      "Cross-region active-active replication",
      "S3-compatible API — zero migration overhead",
      "Intelligent data tiering (hot / warm / cold)",
      "Built-in versioning and point-in-time restore",
    ],
    gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
    icon: "🗄",
  },
  {
    id: "infergrid",
    name: "InferGrid",
    tagline: "Production AI Inference at Enterprise Scale",
    description:
      "Deploy, version, and scale AI models without DevOps overhead. InferGrid auto-batches requests, routes traffic across model replicas, and gives you A/B testing and canary deployments out of the box — all behind a single REST or gRPC endpoint.",
    features: [
      "Multi-model serving with hot-swap deployments",
      "Auto-batching for maximum GPU utilization",
      "A/B testing and canary release built in",
      "REST & gRPC endpoints with OpenAPI docs",
      "Latency SLO enforcement with auto-scaling",
      "Model registry with version lineage tracking",
    ],
    gradient: "linear-gradient(135deg, #059669 0%, #0D9488 100%)",
    icon: "🧠",
  },
];
