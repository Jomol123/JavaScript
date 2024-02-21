async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      const quote = data.content;

      document.getElementById('quote').textContent = `"${quote}"`;
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  }