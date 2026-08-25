(() => {
const root=document.documentElement;
const saved=localStorage.getItem("theme");
if(saved) root.dataset.theme=saved;
const button=document.querySelector(".theme-toggle");
if(!button)return;
button.addEventListener("click",()=>{
const next=root.dataset.theme==="dark"?"light":"dark";
root.dataset.theme=next;
localStorage.setItem("theme",next);
});
})();