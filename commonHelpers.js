import{a as n,i as a}from"./assets/vendor-0a7943b3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();n.defaults.headers.common["x-api-key"]="live_irHtt3V8BrTGwkXWLI8iNhKiq5Mjia2e5QWJF9QV3w8S7qeRvaIuzpJtDhIIrhEx";const c="https://api.thecatapi.com/v1/";function d(){return n.get(`${c}breeds`).then(o=>o.data).catch(o=>{throw a.error({message:"Oops! Something went wrong! Try reloading the page!"}),o})}function u(o){return n.get(`${c}images/search?breed_ids=${o}`).then(r=>r.data).catch(r=>{throw a.error({message:"Oops! Something went wrong! Try reloading the page!"}),r})}d();u("snow");
//# sourceMappingURL=commonHelpers.js.map
