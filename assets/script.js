const links = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    // 取得點擊的連結的 href 屬性值
    const target = event.target.getAttribute('href');
    
    // 隱藏所有 tab-content 元素
    contents.forEach((content) => {
      content.classList.remove('active');
    });
    
    // 顯示目標 tab-content 元素
    document.querySelector(target).classList.add('active');
  });
});