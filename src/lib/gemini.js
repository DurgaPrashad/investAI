export async function analyzeStartup(companyName, stage, files) {
  // Use Gemini 2.0 Flash API for analysis
  const GEMINI_API_KEY = "AIzaSyBtgRmkYVpxsCuSpYdYbHJATwAy82Yt1Ds";
  const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

  // Prepare prompt with file names (simulate content for demo)
  const analysisPrompt = `
    You are an AI investment analyst. Analyze the following startup:
    Company: ${companyName}
    Stage: ${stage}
    Documents uploaded: ${files.join(", ")}
    Based on typical startup analysis, provide a comprehensive investment analysis in the following JSON format:
    {
      "summary": "2-3 sentence executive summary of the startup's value proposition and traction",
      "keyMetrics": [
        {"name": "ARR", "value": "$1.2M", "category": "Revenue"},
        {"name": "Monthly Growth", "value": "15%", "category": "Growth"},
        {"name": "CAC", "value": "$120", "category": "Marketing"},
        {"name": "LTV/CAC", "value": "3.2x", "category": "Unit Economics"}
      ],
      "riskAssessment": {
        "level": "Medium",
        "factors": ["Market competition", "Team experience", "Burn rate"]
      },
      "recommendation": {
        "decision": "Track",
        "rationale": "Strong product-market fit but needs more traction data",
        "confidence": 75
      },
      "financialMetrics": {
        "revenue": "$1.2M ARR",
        "burnRate": "$80K/month", 
        "runway": "18 months",
        "valuation": "$10M"
      }
    }
    Provide realistic, data-driven analysis for a ${stage} stage ${companyName} startup.
  `;

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: analysisPrompt
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    const analysisText = data.candidates[0].content.parts[0].text;
    // Parse JSON from the response
    const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Invalid response format");
    }
    const analysisData = JSON.parse(jsonMatch[0]);
    return {
      id: Math.random().toString(36).substring(2),
      companyName,
      stage,
      ...analysisData
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to analyze startup. Please try again.");
  }
}
