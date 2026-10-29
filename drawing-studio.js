const lessonRange = document.querySelector('#lesson-step');
const previousStep = document.querySelector('#lesson-prev');
const nextStep = document.querySelector('#lesson-next');
function showLessonStep(value) {
  const step = Math.max(1, Math.min(8, Number(value)));
  lessonRange.value = step;
  lessonRange.setAttribute('aria-valuetext', `Step ${step} of 8`);
  document.querySelector('#lesson-step-label').textContent = `Step ${step} of 8`;
  const image = document.querySelector('#lesson-image');
  image.src = `../assets/studio/duck-${step}.webp`;
  image.alt = `Little duck lesson, step ${step} of 8`;
  previousStep.disabled = step === 1;
  nextStep.disabled = step === 8;
}
lessonRange.addEventListener('input', () => showLessonStep(lessonRange.value));
previousStep.addEventListener('click', () => showLessonStep(Number(lessonRange.value) - 1));
nextStep.addEventListener('click', () => showLessonStep(Number(lessonRange.value) + 1));
showLessonStep(1);
document.querySelectorAll('[data-template-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-template-filter]').forEach(other => {
    other.classList.toggle('active', other === button);
    other.setAttribute('aria-pressed', String(other === button));
  });
  let visible = 0;
  document.querySelectorAll('[data-template-category]').forEach(card => {
    card.hidden = button.dataset.templateFilter !== 'all' && button.dataset.templateFilter !== card.dataset.templateCategory;
    if (!card.hidden) visible++;
  });
  document.querySelector('#template-count').textContent = `${visible} ${visible === 1 ? 'topic' : 'topics'}`;
}));
const collectionTabs = [...document.querySelectorAll('.studio-library-tabs [role="tab"]')];
function selectCollectionTab(selected) {
  collectionTabs.forEach(tab => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
}
collectionTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectCollectionTab(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? collectionTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + collectionTabs.length) % collectionTabs.length;
    selectCollectionTab(collectionTabs[next]);
    collectionTabs[next].focus();
  });
});
