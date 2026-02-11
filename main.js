document.getElementById("calc").addEventListener("click", function () {
  const select = document.getElementById("chara");
  const img = document.getElementById("chara-img");
  const value = select.value;

  // フェードアウト
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = `images/${value}.png`;
    img.classList.remove("fade-out");
  }, 400);
});
