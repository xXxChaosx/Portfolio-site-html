function saveData() {
    document.querySelectorAll('input[type="checkbox"], input[type="text"]').forEach(input => {
      if (input.type === "checkbox") {
        localStorage.setItem(input.id, input.checked);
      } else {
        localStorage.setItem(input.id, input.value);
      }
    });
  }
  
  function loadData() {
    document.querySelectorAll('input[type="checkbox"], input[type="text"]').forEach(input => {
      if (input.type === "checkbox") {
        input.checked = localStorage.getItem(input.id) === "true";
      } else {
        input.value = localStorage.getItem(input.id) || "";
      }
    });
  }
  
  window.onload = function() {
    loadData();
  
    document.querySelectorAll('input[type="checkbox"], input[type="text"]').forEach(input => {
      input.addEventListener("change", saveData);
    });
  };
  
