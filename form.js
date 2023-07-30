
      // Add an event listener for form submissions
      document.getElementById('addForm').addEventListener('submit', function( {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
  
        // Save the name in localStorage.
        localStorage.setItem('name', name);
      }));
  