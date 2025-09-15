"""
Utility functions for backend processing.
"""

def clean_text(text):
    """Basic text cleaning: remove extra whitespace and newlines."""
    return ' '.join(text.split())


def extract_keywords(text):
    """Extract keywords by splitting text and returning top unique words."""
    import re
    words = re.findall(r'\b\w{5,}\b', text.lower())
    freq = {}
    for w in words:
        freq[w] = freq.get(w, 0) + 1
    sorted_words = sorted(freq, key=freq.get, reverse=True)
    return sorted_words[:10]
def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file using PyPDF2."""
    try:
        from PyPDF2 import PdfReader
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        return text
    except Exception as e:
        return f"Error extracting PDF: {e}"
