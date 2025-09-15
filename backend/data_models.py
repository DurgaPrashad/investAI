"""
Defines data models for startup analysis.
"""
class Startup:
    def __init__(self, name, sector, metrics):
        self.name = name
        self.sector = sector
        self.metrics = metrics

class DealNote:
    def __init__(self, startup, summary, risks, benchmarks):
        self.startup = startup
        self.summary = summary
        self.risks = risks
        self.benchmarks = benchmarks
