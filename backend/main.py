
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/roadmap/{team_type}")
async def get_roadmap(team_type: str):
    if team_type == "feature":
        return {
            "Q1": {"objective": "Build MVP", "outcome": "Launch beta", "metrics": {"progress": "80%"}},
            "Q2": {"objective": "Optimize scalability", "outcome": "10K users", "metrics": {"uptime": "99.9%"}}
        }
    elif team_type == "product":
        return {
            "Q1": {"objective": "Market validation", "outcome": "50 beta users", "metrics": {"NPS": "50+"}},
            "Q2": {"objective": "Revenue growth", "outcome": "$50k MRR", "metrics": {"churn_rate": "5%"}}
        }
    return {"error": "Invalid team type specified."}
