"use strict";(self.webpackChunkcounter=self.webpackChunkcounter||[]).push([[867],{676:(t,r,e)=>{function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,{Z:()=>n})},968:(t,r,e)=>{function n(t){if(Array.isArray(t))return t}e.d(r,{Z:()=>n})},692:(t,r,e)=>{function n(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,u,o=[],l=!0,a=!1;try{for(e=e.call(t);!(l=(n=e.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(t){a=!0,u=t}finally{try{l||null==e.return||e.return()}finally{if(a)throw u}}return o}}e.d(r,{Z:()=>n})},970:(t,r,e)=>{function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(r,{Z:()=>n})},738:(t,r,e)=>{e.d(r,{Z:()=>a});var n=e(968),u=e(692),o=e(961),l=e(970);function a(t,r){return(0,n.Z)(t)||(0,u.Z)(t,r)||(0,o.Z)(t,r)||(0,l.Z)()}},961:(t,r,e)=>{e.d(r,{Z:()=>u});var n=e(676);function u(t,r){if(t){if("string"==typeof t)return(0,n.Z)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.Z)(t,r):void 0}}},867:(t,r,e)=>{e.r(r),e.d(r,{Counter:()=>l});var n=e(738),u=e(950),o=e.n(u),l=function(){var t=(0,u.useState)(0),r=(0,n.Z)(t,2),e=r[0],l=r[1];return o().createElement("div",null,o().createElement("h1",null,"Counter App"),o().createElement("p",null,"Current count: ",o().createElement("strong",null,e)),o().createElement("button",{onClick:function(){return l(e+1)}},"+"),o().createElement("button",{onClick:function(){return l(e-1)}},"-"))}}}]);