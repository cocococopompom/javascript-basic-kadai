const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  window.setTimeout(() => {
   text.textContent = 'ボタンをクリックしました';
}, 2000)
});