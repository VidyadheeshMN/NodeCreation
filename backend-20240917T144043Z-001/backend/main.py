from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from graph_utils import is_dag

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. Replace * with specific domains to restrict
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, PUT, DELETE)
    allow_headers=["*"],  # Allows all headers
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    graphData = await request.json()

    nodes = graphData.get("nodes", [])
    edges = graphData.get("edges", [])

    isDag = is_dag(nodes, edges)

    return {"num_nodes": len(nodes), "num_edges": len(edges), "is_dag": isDag }
