
const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));

const buttons=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.qual-card')];
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const cat=btn.dataset.filter;
  cards.forEach(card=>{
    card.style.display=(cat==='All'||card.dataset.category===cat)?'flex':'none';
  });
}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
