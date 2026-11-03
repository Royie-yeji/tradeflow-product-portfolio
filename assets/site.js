'use strict';

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
function selectTab(tab, moveFocus = false) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (moveFocus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
  });
});

const viewer = document.getElementById('image-viewer');
document.querySelectorAll('[data-image]').forEach((button) => {
  button.addEventListener('click', () => {
    const image = document.getElementById('viewer-image');
    image.src = button.dataset.image;
    image.alt = button.dataset.caption;
    document.getElementById('viewer-caption').textContent = button.dataset.caption;
    viewer.showModal();
  });
});
document.getElementById('close-viewer')?.addEventListener('click', () => viewer.close());
viewer?.addEventListener('click', (event) => { if (event.target === viewer) viewer.close(); });

document.getElementById('copy-link')?.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(location.href.split('#')[0]);
    status.textContent = '链接已复制';
  } catch {
    status.textContent = '请复制浏览器地址栏中的链接';
  }
});
