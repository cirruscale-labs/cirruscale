import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    slug: "gpu-scheduling-harder-than-you-think",
    title: "Why GPU Scheduling Is Harder Than You Think",
    excerpt:
      "GPUs are not CPUs. Scheduling a 64-GPU training job is not as simple as finding 64 free GPU slots — it is about topology, interconnect bandwidth, and avoiding the fragmentation that silently kills your throughput.",
    coverGradient: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
    author: "Sarah Mitchell",
    authorRole: "Co-founder & CTO",
    date: "September 10, 2026",
    readTime: "8 min read",
    tags: ["Infrastructure", "GPU", "Distributed Systems"],
    body: `GPUs are not CPUs. When you run a job on a CPU cluster, you are dealing with a homogeneous sea of cores that can be sliced, diced, and reassigned in milliseconds. GPUs are different — they are specialized silicon with deep memory hierarchies, NVLink interconnects, and strict topology requirements.

Scheduling a 64-GPU training job is not as simple as finding 64 free GPU slots. It is about finding 64 GPUs with the right interconnect topology, sufficient host memory, compatible driver versions, and proximity to your training data.

At Cirruscale, we spent the first year of CloudBurst's development almost entirely on the scheduler. Here is what we learned.

The Topology Problem

Modern training jobs using model parallelism need GPUs that can talk to each other at NVLink speeds — up to 600 GB/s — not PCIe speeds of 32 GB/s. Placing half your model on a node in one availability zone and the other half in another will destroy your training throughput. Our scheduler maintains a real-time topology graph of every GPU in our fleet and uses a weighted shortest-path algorithm to find the tightest cluster of interconnected GPUs for each incoming job.

The Fragmentation Problem

After weeks of running heterogeneous workloads, GPU clusters develop a form of fragmentation. You end up with islands of free GPUs scattered across nodes that cannot be combined into a contiguous pool required by large jobs. We call this GPU island syndrome. Our background compaction process signals idle, preemptible workloads to checkpoint and migrate, consolidating free capacity without interrupting production training runs.

The Preemption Problem

When a high-priority job arrives and no GPUs are free, you have a choice: queue the job or preempt something. Preempting a 72-hour training run is catastrophic if the model has not checkpointed recently. CloudBurst integrates checkpoint-aware preemption — it sends a checkpoint signal to workloads, waits for acknowledgment, verifies the checkpoint completed successfully, and only then reclaims the GPUs. The worst-case lost work is bounded by the workload's declared checkpoint interval.

GPU scheduling at scale is a distributed systems problem wearing an infrastructure costume. Treat it accordingly.`,
  },
  {
    slug: "zero-to-ten-thousand-gpus",
    title: "From Zero to 10,000 GPUs: Scaling CloudBurst",
    excerpt:
      "Eighteen months ago CloudBurst ran on 12 GPUs in a single rack. Today it orchestrates over 10,000 GPUs across three regions. This is the unfiltered engineering story of how we got there — and what broke along the way.",
    coverGradient: "linear-gradient(135deg, #5B21B6 0%, #4C1D95 100%)",
    author: "Raj Patel",
    authorRole: "VP of Engineering",
    date: "August 28, 2026",
    readTime: "12 min read",
    tags: ["Engineering", "Scale", "Architecture"],
    body: `Eighteen months ago, CloudBurst ran on 12 GPUs in a single rack inside a co-location facility in Ashburn, Virginia. Today it orchestrates over 10,000 GPUs across three AWS regions and our own bare-metal fleet. This is the honest engineering story of how we scaled — including what broke badly enough to wake us up at 3am.

Month 1–3: The Monolith Phase

Our first architecture was a single Go binary: scheduler, API server, monitoring, and billing logic all in one process. It worked fine at 12 GPUs. We shipped fast. Then a bug in the billing logic took down the scheduler. That was the day we understood the cost of coupling.

Month 4–6: The Event Bus Migration

We broke the monolith into four services connected by a Kafka event bus: scheduler, API gateway, billing, and observability. Each service owned its data store. Deployments went from nerve-wracking to boring — which is exactly what you want. We also introduced Kubernetes at this stage, which gave us rolling deployments without downtime.

Month 7–12: The Cross-Region Problem

Expanding to a second region exposed a distributed systems truth we should have anticipated: network partitions are not edge cases, they are inevitable. Our scheduler needed a consistent view of GPU availability across regions, but the latency of cross-region consensus was adding 800ms to every scheduling decision. We switched from a Raft consensus model for the full fleet state to a hierarchical approach: each region runs its own scheduler with full authority over local GPUs, and a global coordinator handles cross-region jobs only. P95 scheduling latency dropped from 800ms to 45ms.

Month 13–18: 10,000 GPUs and Counting

The jump from 1,000 to 10,000 GPUs was less about code and more about operational discipline. We hired three SREs, wrote runbooks for every class of failure we had seen, and introduced chaos engineering with a weekly game day. Every on-call engineer now knows exactly what to do when the global coordinator goes down, when a region's Kafka cluster falls behind, or when a mass checkpoint storm saturates our object storage.

The lesson we keep re-learning: scale is not a technical problem, it is a sociotechnical one. The code matters. The team and the processes matter more.`,
  },
  {
    slug: "hidden-cost-diy-ai-infrastructure",
    title: "The Hidden Costs of DIY AI Infrastructure",
    excerpt:
      "Building your own GPU infrastructure feels cheaper until you account for the engineer-hours, the failed experiments, and the three-month delay to your first model in production. We ran the numbers.",
    coverGradient: "linear-gradient(135deg, #065F46 0%, #064E3B 100%)",
    author: "Alex Chen",
    authorRole: "Co-founder & CEO",
    date: "August 5, 2026",
    readTime: "6 min read",
    tags: ["Business", "Infrastructure", "Cost Analysis"],
    body: `Every few months an engineering leader asks me: "Why would we pay for CloudBurst when we can just buy GPUs and run them ourselves?" It is a fair question. The answer is almost always the same: the sticker price of hardware is not the real cost of AI infrastructure.

The Engineering Tax

Building a GPU cluster from bare metal is a 6–12 month engineering project, not a weekend task. You need to design the network topology, set up Infiniband or RoCE, configure CUDA-aware MPI, implement health checks that distinguish a flaky GPU from a failed node, build a scheduler, integrate monitoring, and write the runbooks. At an average fully-loaded engineering cost of $300,000 per engineer per year in a major metro, a three-engineer team spending six months on this is $450,000 — before a single GPU runs a training job.

The Utilization Reality

Owned hardware sits idle. This is not an opinion — it is what the data shows. Enterprise GPU clusters average 35–55% utilization. The other 45–65% of the time you are paying for electricity, cooling, and depreciation on hardware that is not producing value. On a managed platform you pay for what you use. The elasticity alone often makes the math work.

The Opportunity Cost

Perhaps the largest hidden cost is the delay to value. Every month your team spends wiring up infrastructure is a month your competitors are iterating on models. The companies that reach production AI fastest rarely built their infrastructure from scratch — they bought the commodity layer and invested in the differentiating layer: their data, their models, their product.

We are not saying managed infrastructure is right for every company. At very large scale — tens of thousands of GPUs running 80%+ utilized around the clock — owning hardware can make financial sense. But for the vast majority of AI teams, the real question is not "buy vs. build" — it is "what is the highest-value use of our engineers' time this quarter?"`,
  },
];
