const dialog = document.querySelector('#lightbox');
const dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.close');

document.querySelectorAll('.photo').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.full;
    dialogImage.alt = button.querySelector('img').alt;
    dialog.showModal();
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dialog.open) dialog.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
