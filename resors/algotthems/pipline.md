Gorse follows a classic Retrieval → Ranking → Re-ranking flow, but it automates the heavy lifting. Here is the pipeline in detail:

1. Data Ingestion (The Entry Point)
Before any math happens, Gorse needs three primary data streams:

Users: Profiles including tags or categories.

Items: The content/products being recommended (with tags/hidden features).

Feedback: The most critical part. This includes Positive (clicks, likes, purchases) and Negative (dislikes) interactions.

2. The Training Pipeline (Offline)
Gorse doesn't just "guess"; it builds models in the background. It periodically triggers two types of training:

Collaborative Filtering (CF)
Matrix Factorization: It breaks down the user-item interaction matrix into lower-dimensional vectors.

How it works: If User A and User B both liked "Item X," and User A liked "Item Y," Gorse assumes User B will also like "Item Y."

Auto-ML: Gorse automatically searches for the best hyperparameters (like learning rate) so you don't have to manually tune the math.

Click-Through Rate (CTR) Prediction
Deep Learning: It uses models like Factorization Machines (FM) or DeepFM.

Feature Engineering: It looks at user metadata (age, location) and item metadata (category, price) to predict the probability of a click.

3. The Recommendation Pipeline (Online)
When a user actually visits your site, Gorse runs this real-time pipeline to generate the list:

Step A: Candidate Retrieval (The Funnel)
Gorse can't rank 1,000,000 items in milliseconds, so it narrows them down to a few hundred "candidates" using:

Collaborative Filtering: Items similar users liked.

Item-based: Items similar to what the user just viewed.

User-based: Based on the user's historical clusters.

Latest/Popular: To ensure new content gets seen.

Step B: Ranking (The Precision)
The candidates from Step A are fed into the CTR Model.

Each item gets a "score" (0.0 to 1.0) representing how likely the user is to interact with it.

The list is sorted by these scores.

Step C: Re-ranking (The Final Polish)
Before the results hit the API, Gorse applies business logic:

Deduplication: Removing items the user has already seen or bought.

Explore vs. Exploit: Injecting a few random/new items to prevent the "filter bubble" and gather new data.

4. The Architecture Components
To run this pipeline, Gorse uses a distributed setup:

Master Node: Manages the status, schedules training, and hosts the dashboard.

Worker Nodes: Perform the heavy CPU/GPU lifting for model training and neighbor searching.

Server Nodes: Handle the RESTful API requests from your frontend/backend.

Database: Typically uses Redis (for caching/online metadata) and MySQL/PostgreSQL/MongoDB (for persistent storage).

Key Takeaway: The beauty of the Gorse pipeline is the Auto-ML layer. It constantly benchmarks different algorithms against your specific data to ensure the recommendation quality improves over time without manual intervention.