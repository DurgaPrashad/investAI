"""
Ingests founder materials and public data (pitch decks, transcripts, emails).
"""

from .utils import extract_text_from_pdf, clean_text, extract_keywords

def ingest_founder_materials(files):
    """
    Ingests founder materials (PDFs) and returns cleaned text and keywords for each file.
    files: list of file paths
    """
    results = []
    for f in files:
        if f.lower().endswith('.pdf'):
            raw_text = extract_text_from_pdf(f)
            cleaned = clean_text(raw_text)
            keywords = extract_keywords(cleaned)
            results.append({
                'file': f,
                'text': cleaned,
                'keywords': keywords
            })
        else:
            results.append({
                'file': f,
                'text': 'Unsupported file type',
                'keywords': []
            })
    return results
