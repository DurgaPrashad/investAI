
<<<<<<< HEAD


# Finxan AI: AI-Powered Startup Evaluation


## Project Overview

Finxan AI is an AI-powered analyst platform designed to help early-stage investors evaluate startups efficiently. The platform ingests founder materials and public data, benchmarks startups, flags risks, and generates actionable investment insights.


## Current Stage

- Backend and frontend scaffolding complete
- API slots for all solution capabilities added
- Google AI tech stack integration in progress

## Challenge


Early-stage investors face information overload from unstructured startup data (pitch decks, founder calls, emails, news). Manual analysis is slow and inconsistent. Finxan AI automates analysis and generates investor-ready insights at scale.

## Objective


Build an AI-powered analyst that reviews founder material and public data to create concise, actionable deal notes with clear benchmarks and risk assessments across sectors and geographies.


## Solution Capabilities

- **Ingest founder materials and public data:** Upload pitch decks, transcripts, updates, emails
- **Benchmark startups:** Compare against sector peers using financial multiples, hiring data, traction signals
- **Risk analysis:** Flag inconsistent metrics, inflated market size, unusual churn patterns
- **Growth summary:** Summarize growth potential and generate recommendations
- **Investor-ready recommendations:** Tailored to customizable weightages



## Technologies Used

- **React:** Frontend UI framework
- **JavaScript:** Scalable frontend development (converted from TypeScript)
- **Tailwind CSS:** Utility-first CSS framework for rapid UI styling
- **Next.js:** React framework for server-side rendering and routing
- **Theme Toggle:** Custom component for switching between light and dark modes
- **Python:** Backend language for AI logic, data processing, and API endpoints
- **Flask:** Python web framework for building RESTful APIs
- **MongoDB:** NoSQL database for storing startup and analysis data (integration planned)
- **Google Gemini:** Advanced AI model for natural language understanding and synthesis
- **Vertex AI:** Managed ML platform for training, deploying, and managing models
- **Cloud Vision:** Google API for image analysis and extraction from pitch decks
- **BigQuery:** Google data warehouse for analytics and benchmarking
- **Firebase:** Google platform for authentication, real-time database, and hosting
- **Agent Builder:** Google tool for building custom AI workflows and agents
- **Markdown Docs:** Project documentation and feature guides
- **JSON Schemas:** Data models for validation and interoperability



## Folder Structure

- `src/` - React frontend
- `backend/` - Python backend
- `docs/` - Documentation
- `schemas/` - Data models and database schemas



## Solution Approach

1. **Automated Ingestion:** Upload and parse founder materials and public data
2. **AI Benchmarking:** Use Google AI to compare startups to sector benchmarks
3. **Risk Analysis:** Automated flagging of red flags using ML models
4. **Growth & Recommendations:** Summarize and recommend using AI-driven scoring
5. **Scalable API:** Modular endpoints for each analysis step


## How Python Works in This Project

The Python backend powers all AI and data analysis features for Finxan AI. It is organized into modular files for each capability:

- **ingest.py:** Handles ingestion of founder materials and public data (pitch decks, transcripts, emails).
- **benchmark.py:** Benchmarks startups against sector peers using financial multiples, hiring data, and traction signals.
- **risk_analysis.py:** Flags potential risk indicators such as inconsistent metrics, inflated market size, or unusual churn patterns.
- **growth_potential.py:** Summarizes growth potential and generates investor-ready recommendations.
- **ai_integration.py:** Connects to Google AI technologies (Gemini, Vertex AI, Cloud Vision, BigQuery, Firebase, Agent Builder).
- **report_generator.py:** Generates structured deal notes and investor-ready reports.
- **api.py:** Exposes RESTful API endpoints for frontend-backend communication.

The backend is designed for scalability and modularity, allowing easy integration with new AI models, data sources, and analytics workflows. All sensitive credentials are managed via environment variables for security.



## Next Steps

- Implement MongoDB integration for data storage
- Connect Python backend to Google AI APIs
- Build frontend forms for data upload and analysis display
- Add authentication and user management



## Contribution

See `docs/project_overview.md` for more details
=======
>>>>>>> df592486190fdaf4b6e035e6166dc61c6bb9bb59
