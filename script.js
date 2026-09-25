
document.querySelector('[data-year]').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if(menu && nav){
  menu.addEventListener('click',()=>{
    const open = nav.dataset.open === '1';
    nav.dataset.open = open ? '0':'1';
    nav.style.display = open ? 'none':'flex';
    if(!open){
      Object.assign(nav.style,{
        position:'absolute',top:'70px',left:'12px',right:'12px',
        flexDirection:'column',padding:'18px',background:'#06111a',
        border:'1px solid #153247',borderRadius:'14px'
      });
    }
  });
}
