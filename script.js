
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const menu=document.querySelector('.menu');
const links=document.querySelector('.navlinks');
if(menu&&links){
  menu.addEventListener('click',()=>{
    const open=links.dataset.open==='1';
    links.dataset.open=open?'0':'1';
    links.style.display=open?'none':'flex';
    if(!open){
      Object.assign(links.style,{
        position:'absolute',top:'70px',left:'12px',right:'12px',
        flexDirection:'column',padding:'18px',background:'#06111a',
        border:'1px solid #153247',borderRadius:'14px'
      });
    }
  });
}

const observed=[...document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger')];
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
},{threshold:.14});
observed.forEach(el=>io.observe(el));

const heroArt=document.querySelector('.hero-art img');
if(heroArt){
  window.addEventListener('mousemove',e=>{
    if(window.innerWidth<900)return;
    const x=(e.clientX/window.innerWidth-.5)*8;
    const y=(e.clientY/window.innerHeight-.5)*6;
    heroArt.style.transform=`translate(${x}px,${y}px)`;
  });
  window.addEventListener('mouseleave',()=>heroArt.style.transform='');
}
