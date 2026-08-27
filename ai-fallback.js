document.addEventListener("DOMContentLoaded", () => {
  const aiFallbackBtn = document.getElementById("aiFallback");

  if (aiFallbackBtn) {
    aiFallbackBtn.addEventListener("click", () => {
      window.open("https://chat.openai.com", "_blank");
    });
  }
});
