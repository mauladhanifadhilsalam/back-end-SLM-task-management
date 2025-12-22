# Monitoring Setup

SLM Project Management exposes Prometheus-compatible metrics so you can observe request throughput, latency, and resource usage.

## Metrics Endpoint

- Route: `GET /metrics`
- Format: Prometheus text exposition (scraped by Prometheus-compatible servers)
- Authentication: none (protect it via network rules, reverse proxy auth, or service mesh policies in production).

## Prometheus

### Local Quickstart
1. Download Prometheus from [prometheus.io/download](https://prometheus.io/download/).
2. Extract the archive and edit `prometheus.yml`:

   ```yaml
   global:
     scrape_interval: 15s
     evaluation_interval: 15s

   scrape_configs:
     - job_name: "slm-api"
       metrics_path: /metrics
       static_configs:
         - targets: ["localhost:3000"]

     - job_name: "prometheus"
       static_configs:
         - targets: ["localhost:9090"]
   ```

3. Start Prometheus:

   - **Windows (PowerShell)**:
     ```powershell
     .\prometheus.exe --config.file=prometheus.yml
     ```
   - **macOS/Linux**:
     ```bash
     ./prometheus --config.file=prometheus.yml
     ```

4. Open `http://localhost:9090` and query metrics such as:
   - `sum(rate(http_requests_total[1m]))` (throughput)
   - `histogram_quantile(0.95, sum by (route, le)(rate(http_request_duration_seconds_bucket[5m])))` (p95 latency)
   - `process_resident_memory_bytes` (memory usage)

### Production Notes
- Run Prometheus (or a managed equivalent) within your infrastructure. Replace `localhost:3000` with the API’s host/port.
- Secure `/metrics`:
  - Restrict inbound access (security groups, firewall rules, service mesh)
  - Or front it with an authenticated proxy
- Consider multiple scrape jobs (API, workers) if you expose metrics from other processes.

## Grafana

1. Run Grafana (Docker or cloud) and add Prometheus (`http://<prom-host>:9090`) as a data source.
2. Create dashboards using PromQL queries like:
   - `sum(rate(http_requests_total[5m]))` (`req/s`)
   - `histogram_quantile(0.99, sum by (route, le)(rate(http_request_duration_seconds_bucket[5m])))` (p99 latency)
   - `sum(rate(http_requests_total{status_code=~"5.."}[5m]))` (5xx rate)
3. Configure alerts (Grafana Alerting or Alertmanager) for latency spikes, error thresholds, or worker queue depth (once exposed).

## Load Testing & Bottlenecks

- Use k6, Artillery, autocannon, or wrk to generate load while monitoring the metrics queries above.
- Focus on:
  - `histogram_quantile(...)` for latency outliers per route
  - `sum(rate(http_requests_total{status_code=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))` for error percentages
  - `rate(process_cpu_seconds_total[1m])` and `process_resident_memory_bytes` for resource saturation
