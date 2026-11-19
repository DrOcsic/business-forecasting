
(function(){
const cfg = window.FORECASTING_CONFIG || {repository:'business-forecasting',branch:'main'};
const pathParts=window.location.pathname.split('/').filter(Boolean);
const onPages=window.location.hostname.endsWith('.github.io');
let username = cfg.username || '';
let repository = cfg.repository || 'business-forecasting';
if (onPages) {username=window.location.hostname.split('.')[0];if(pathParts.length){repository=pathParts[0]}}
const githubBase=username?`https://github.com/${encodeURIComponent(username)}/${encodeURIComponent(repository)}`:'';
const branch=cfg.branch||'main';
document.querySelectorAll('[data-colab]').forEach(link=>{
 const notebook=link.dataset.colab;
 if(username){link.href=`https://colab.research.google.com/github/${encodeURIComponent(username)}/${encodeURIComponent(repository)}/blob/${encodeURIComponent(branch)}/notebooks/${encodeURIComponent(notebook)}`;link.target='_blank';link.rel='noopener noreferrer';}
 else {link.href='../notebooks/'+encodeURIComponent(notebook);link.title='Preview mode: download notebook. After GitHub Pages is published, this opens Colab.';link.innerText='Download notebook ↗';}
});
if(githubBase){document.querySelectorAll('[data-repository-link]').forEach(a=>a.href=githubBase)}
const search=document.querySelector('#module-search');
if(search){search.addEventListener('input',()=>{const term=search.value.trim().toLowerCase();let count=0;document.querySelectorAll('[data-module-card]').forEach(card=>{const good=card.textContent.toLowerCase().includes(term);card.classList.toggle('hidden',!good);if(good)count++});const hint=document.querySelector('#search-count');if(hint) hint.textContent=count?'':'No matching modules.'})}
})();
