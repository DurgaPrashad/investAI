"""
Configuration settings for backend services.
"""

import os

# Google Vertex AI credentials loaded from environment variables (add values in .env)
VERTEX_AI_CONFIG = {
    "client_id": os.getenv("VERTEX_AI_CLIENT_ID"),
    "project_id": os.getenv("VERTEX_AI_PROJECT_ID"),
    "auth_uri": os.getenv("VERTEX_AI_AUTH_URI"),
    "token_uri": os.getenv("VERTEX_AI_TOKEN_URI"),
    "auth_provider_x509_cert_url": os.getenv("VERTEX_AI_AUTH_PROVIDER_X509_CERT_URL"),
    "client_secret": os.getenv("VERTEX_AI_CLIENT_SECRET")
}
FIREBASE_CONFIG = {}
BIGQUERY_CONFIG = {}
