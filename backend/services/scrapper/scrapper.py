import requests
from bs4 import BeautifulSoup
from googlesearch import search
from itertools import islice


def get_search_results(query, num_results=5):
    """Search Google and return the top URLs."""
    search_results = []
    try:
        # Use islice to limit the number of results
        for url in islice(search(query, lang="es"), num_results):
            search_results.append(url)
    except Exception as e:
        print(f"Error during search: {e}")
    return search_results


def scrape_page_content(url):
    """Scrape content from a given URL."""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'html.parser')
        paragraphs = soup.find_all('p')
        content = ' '.join([p.get_text(strip=True) for p in paragraphs])

        return content if content else "No se pudo extraer contenido relevante."

    except requests.RequestException as e:
        return f"Error al obtener el contenido de la página: {e}"


def get_relevant_content(query):
    """Main function to search and scrape content based on the query."""
    search_results = get_search_results(query)

    if not search_results:
        return "Lo siento, no pude encontrar resultados relevantes."

    extracted_content = []
    for url in search_results:
        content = scrape_page_content(url)
        extracted_content.append({
            "url": url,
            "content": content[:500]  # Limit content length for display
        })

    return extracted_content


# Example usage
if __name__ == "__main__":
    user_query = input("Escribe tu pregunta o tema: ")
    results = get_relevant_content(user_query)

    for i, result in enumerate(results):
        print(f"\nResultado {i + 1}:")
        print(f"URL: {result['url']}")
        print(f"Contenido: {result['content']}")
