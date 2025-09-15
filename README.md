
<<<<<<< HEAD
# InvestAI: AI Analyst for Startup Evaluation

## Project Stage

**Current Stage:**
- Backend and frontend scaffolding complete
- API slots for all solution capabilities added
- Google AI tech stack integration in progress

## Challenge

Early-stage investors face information overload from unstructured startup data (pitch decks, founder calls, emails, news). Manual analysis is slow and inconsistent. InvestAI solves this by automating analysis and generating investor-ready insights at scale.

## Objective

Build an AI-powered analyst that reviews founder material and public data to create concise, actionable deal notes with clear benchmarks and risk assessments across sectors and geographies.

## Solution Capabilities

- **Ingest founder materials and public data:** Upload pitch decks, transcripts, updates, emails.
- **Benchmark startups:** Compare against sector peers using financial multiples, hiring data, traction signals.
- **Risk analysis:** Flag inconsistent metrics, inflated market size, unusual churn patterns.
- **Growth summary:** Summarize growth potential and generate recommendations.
- **Investor-ready recommendations:** Tailored to customizable weightages.

## Technologies Used

- **React:** Frontend UI framework for building interactive user interfaces.
- **TypeScript:** Strongly typed language for scalable frontend development.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI styling.
- **Next.js:** React framework for server-side rendering and routing.
- **Theme Toggle:** Custom component for switching between light and dark modes (true black/white backgrounds).
- **Python:** Backend language for AI logic, data processing, and API endpoints.
- **Flask:** Python web framework for building RESTful APIs.
- **MongoDB:** NoSQL database for storing startup and analysis data (integration planned).
- **Google Gemini:** Advanced AI model for natural language understanding and synthesis.
- **Vertex AI:** Managed ML platform for training, deploying, and managing models (credentials integrated).
- **Cloud Vision:** Google API for image analysis and extraction from pitch decks.
- **BigQuery:** Google data warehouse for analytics and benchmarking.
- **Firebase:** Google platform for authentication, real-time database, and hosting.
- **Agent Builder:** Google tool for building custom AI workflows and agents.
- **Markdown Docs:** Project documentation and feature guides.
- **JSON Schemas:** Data models for validation and interoperability.

## Google AI Integration

- Vertex AI credentials are stored in `backend/config.py`.
- API slots for each capability are available in `backend/api.py`.
- Stubs for Gemini, Cloud Vision, BigQuery, Firebase, Agent Builder in backend.

## Folder Structure

- `src/` - React frontend
- `backend/` - Python backend
- `docs/` - Documentation
- `schemas/` - Data models and database schemas
- `data/` - Sample and processed data

## How We Solve the Problem

1. **Automated Ingestion:** Upload and parse founder materials and public data.
2. **AI Benchmarking:** Use Google AI to compare startups to sector benchmarks.
3. **Risk Analysis:** Automated flagging of red flags using ML models.
4. **Growth & Recommendations:** Summarize and recommend using AI-driven scoring.
5. **Scalable API:** Modular endpoints for each analysis step.

## Next Steps

- Implement MongoDB integration for data storage.
- Connect Python backend to Google AI APIs.
- Build frontend forms for data upload and analysis display.
- Add authentication and user management.

## Contribution

See `docs/project_overview.md` for more details.
## Project info

**URL**: https://lovable.dev/projects/ebeae06e-28bb-4d7f-ad77-54dd2b0d153e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ebeae06e-28bb-4d7f-ad77-54dd2b0d153e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ebeae06e-28bb-4d7f-ad77-54dd2b0d153e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
=======
>>>>>>> df592486190fdaf4b6e035e6166dc61c6bb9bb59
