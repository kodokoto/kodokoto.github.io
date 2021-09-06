window.onclick = (e) => 
{
  e.preventDefault();
  scrollTo(e.target.href.split('#')[1]);
};