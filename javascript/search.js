// Function to perform the search
function searchWebnovels() {
    const searchInput = document.getElementById('search-bar');
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    // Clear previous results
    searchResults.innerHTML = '';
    
    if (searchTerm.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    
    // Fetch the novels.html content
    fetch('novels.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const novels = doc.querySelectorAll('.novel');
            
            let resultsFound = false;
            
            novels.forEach(novel => {
                const title = novel.querySelector('h3').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    resultsFound = true;
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <a href="${novel.getAttribute('href')}">
                            <img src="${novel.querySelector('img').getAttribute('src')}" alt="${title}">
                            <h3>${novel.querySelector('h3').textContent}</h3>
                        </a>
                    `;
                    searchResults.appendChild(resultItem);
                }
            });
            
            if (!resultsFound) {
                searchResults.innerHTML = '<p>No results found.</p>';
            }
            
            searchResults.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching novels:', error);
            searchResults.innerHTML = '<p>Error searching for novels. Please try again.</p>';
            searchResults.style.display = 'block';
        });
}

// Function to hide search results when clicking outside
function hideSearchResults(event) {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');
    if (!searchBar.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    searchInput.addEventListener('input', searchWebnovels);
    document.addEventListener('click', hideSearchResults);
});
