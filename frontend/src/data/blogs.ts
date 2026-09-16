import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    slug: "why-we-build-backends-in-go-and-python",
    title: "Why We Build Backends in Go and Python",
    excerpt:
      "Go for performance-critical services, Python for data-heavy workflows. Here is how we decide which language to use for each project — and why having both in our toolkit makes us faster.",
    coverGradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    author: "Sarah Mitchell",
    authorRole: "Co-founder & CTO",
    date: "September 10, 2026",
    readTime: "8 min read",
    tags: ["Go", "Python", "Backend"],
    body: `At CirruScale, we build backends in two languages: Go and Python. This is not a compromise — it is a deliberate choice that lets us pick the right tool for each project.

Go for Performance-Critical Services

When a client needs an API that handles thousands of concurrent requests, a real-time event processor, or a microservice that needs to be fast and memory-efficient, we reach for Go. Its goroutine model makes concurrency natural, it compiles to a single binary (which makes Docker images tiny), and the performance is close to C without the complexity.

A Go API gateway we built for a fintech client handles 50,000 requests per second on a single instance. Try that with Django.

Python for Data and Rapid Prototyping

When the project involves data pipelines, ML model serving, scientific computing, or needs to integrate with a rich ecosystem of libraries, Python is the right choice. FastAPI gives us excellent async performance, and the library ecosystem is unmatched for data work.

We built a document processing pipeline for a legal tech client in Python that went from prototype to production in three weeks — including OCR, NLP classification, and a REST API.

The Docker Story

Both languages containerize beautifully but differently. Go services compile to static binaries — our Docker images are often under 15MB using scratch or distroless base images. Python services use multi-stage builds with slim base images, typically landing around 100-200MB.

Either way, every backend we build ships as a Docker container with a CI/CD pipeline from day one. The client pushes code, and the rest is automated.

How We Choose

The decision framework is simple: if the project is primarily about throughput, concurrency, or systems-level work, we use Go. If it is about data processing, ML integration, or rapid iteration, we use Python. Some projects use both — a Go API gateway fronting Python microservices is a pattern we use often.`,
  },
  {
    slug: "docker-to-kubernetes-migration-guide",
    title: "From Docker Compose to Kubernetes: A Practical Migration Guide",
    excerpt:
      "Your app runs great on Docker Compose locally. Now you need it in production with auto-scaling, health checks, and zero-downtime deployments. Here is the path we take for every client.",
    coverGradient: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
    author: "Raj Patel",
    authorRole: "VP of Engineering",
    date: "August 28, 2026",
    readTime: "12 min read",
    tags: ["Docker", "Kubernetes", "DevOps"],
    body: `We do this migration for clients regularly — taking applications from Docker Compose on a single server to Kubernetes on a managed cloud provider. Here is the process we have refined over 50+ migrations.

Step 1: Audit the Docker Compose File

Most Compose files we see have problems that need fixing before Kubernetes: hardcoded environment variables, volumes pointing to host paths, services that depend on startup order, and images that are not optimized. We fix these first. A clean Compose file translates more easily to Kubernetes manifests.

Step 2: Optimize the Dockerfiles

Before we move to Kubernetes, we optimize every Dockerfile. Multi-stage builds, minimal base images, proper layer caching, and no secrets baked into images. This step alone often reduces image sizes by 60-80% and build times by half.

Step 3: Create Kubernetes Manifests

We translate each Compose service into Kubernetes Deployments, Services, and ConfigMaps. We use Helm charts for templating so the same manifests work across staging and production. Every manifest includes resource requests and limits, health checks (liveness and readiness probes), and proper labels for observability.

Step 4: Set Up the CI/CD Pipeline

Every push to main triggers: lint, test, build Docker image, push to registry, deploy to staging. A manual approval step promotes to production. We use GitHub Actions for most clients but support GitLab CI and Jenkins too. The pipeline includes rollback automation — if health checks fail after deployment, it reverts automatically.

Step 5: Configure Observability

Kubernetes without observability is flying blind. We set up Prometheus for metrics, Grafana for dashboards, and Loki for log aggregation. Every client gets alerts for pod restarts, high error rates, and resource saturation. This is not optional — it is part of every deployment.

The result: your team pushes code to Git, and everything else is automated. That is the promise we deliver on.`,
  },
  {
    slug: "cloud-cost-optimization-real-numbers",
    title: "Cloud Cost Optimization: Real Numbers From Real Projects",
    excerpt:
      "Most cloud cost advice is generic. We analyzed spend data from 30 client engagements and found the patterns that actually move the needle — with specific dollar figures.",
    coverGradient: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
    author: "Alex Chen",
    authorRole: "Co-founder & CEO",
    date: "August 5, 2026",
    readTime: "6 min read",
    tags: ["Cloud", "Cost Optimization", "DevOps"],
    body: `Most cloud cost advice is generic: "right-size your instances," "use reserved capacity," "turn off idle resources." That advice is correct but incomplete. We analyzed spend data from 30 client engagements over the past two years and found the patterns that actually move the needle.

The Compute Overprovisioning Tax

The average company we audit is overprovisioned by 40-60%. Not because engineers are wasteful, but because capacity planning is hard and the cost of under-provisioning (outages) feels higher than the cost of over-provisioning (money). The fix is not manual right-sizing — it is proper Kubernetes resource requests with Horizontal Pod Autoscaling. Once you set this up correctly, your compute scales with actual demand.

The Database Spend Surprise

In 22 of 30 engagements, the managed database service was the single largest line item — often 35-45% of total cloud spend. The most impactful optimization was not switching databases. It was query optimization, connection pooling, and read replica routing. One client reduced their RDS bill by 60% just by adding pgbouncer and fixing three N+1 queries.

The Networking Blind Spot

Cross-AZ and cross-region data transfer charges are the most overlooked cost category. They do not show up as a single line item — they are spread across dozens of services. We found one client paying $18,000/month in cross-AZ transfer because their Kubernetes pods were randomly distributed across availability zones. Pinning related services to the same AZ cut that to $3,000.

The Real ROI

Across our 30 engagements, the median cost reduction was 38%, with a range of 15% to 67%. The engagements that achieved the highest savings shared a common trait: they invested in observability first. You cannot optimize what you cannot measure.`,
  },
];
