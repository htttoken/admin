document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.classList.remove('hidden');
    else console.warn('No tab found with ID:', targetId);
  });
});
