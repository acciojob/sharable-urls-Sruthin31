// your code here
    const form = document.getElementById('infoForm');
    const urlDisplay = document.getElementById('url');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form refresh

      const name = document.getElementById('name').value.trim();
      const year = document.getElementById('year').value.trim();

      // Base URL
      let baseUrl = "https://localhost:8080/";

      // Build query string dynamically
      let params = [];

      if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
      }
      if (year) {
        params.push(`year=${encodeURIComponent(year)}`);
      }

      // Add query string if parameters exist
      if (params.length > 0) {
        baseUrl += "?" + params.join("&");
      }

      // Update <h3> text
      urlDisplay.textContent = baseUrl;
    });