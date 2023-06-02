const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const content = document.querySelector(`#content`);

tabLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // 防止點擊 a 時跳轉到 #123
    // 隱藏所有的 tab-link
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
    // 隱藏所有的 tab-content
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    // 顯示與當前選項相對應的 tab-link 與 tab-content
    const selectedTab = link.dataset.tab;
    const selectedContent = document.querySelector(`#${selectedTab}`);
    link.classList.add('active');
    selectedContent.classList.add('active');

    if (link.getAttribute('href') === '#game') {
      const gameContent = document.querySelector(`#game-content`);
      gameContent.classList.remove('active'); // 移除 active class
      setTimeout(() => {
        gameContent.classList.add('active'); // 延遲後再增加 active class
      }, 0);
    } else {
      const gameContent = document.querySelector(`#game-content`);
      gameContent.classList.remove('active');
    }

    content.classList.remove('active');
    setTimeout(() => {
      content.classList.add('active');
    }, 0);
  });
});

window.addEventListener("scroll", function () {
  var backtop = document.getElementById("back-top");
  if (window.pageYOffset > 1) {
    backtop.style.display = "block";
  } else {
    backtop.style.display = "none";
  }
});