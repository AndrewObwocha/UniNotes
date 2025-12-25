from enum import Enum

class MetricType(Enum):
    LATENCY = "latency"
    ERROR = "error_rate"
    THROUGHPUT = "throughput"
    SECURITY = "security"

    def __str__(self):
        return self.value