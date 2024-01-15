document.querySelectorAll('.theme-button').forEach(button => {
  button.addEventListener('click', function() {
      document.body.className = this.dataset.theme;
  });
});