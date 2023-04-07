import{r as f,c as y,S,o as c,a as m,b as l,w as $,v as ue,u as v,i as M,F as x,d as N,t as b,e as K,f as R,g as ce,h as Q,j as h,k as V,l as B,m as O,n as de,R as D,p as X,q as I,s as me,x as pe,y as _e}from"./index-ffbe57d3.js";import{_ as fe,P as ve}from"./ProductColors-b7780fdc.js";import{n as ge}from"./no-image-7601bee4.js";const he={class:"form__block"},be=l("legend",{class:"form__legend"},"Категория",-1),$e={class:"form__label form__label--select"},ke=l("option",{value:"0"},"Все категории",-1),ye=["value"],xe={__name:"FilterCategory",props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=f(),i=y({get(){return n.modelValue},set(o){e("update:modelValue",o)}});return S.getProductCategories().then(o=>s.value=o),(o,r)=>(c(),m("fieldset",he,[be,l("label",$e,[$(l("select",{class:"form__select",name:"category","onUpdate:modelValue":r[0]||(r[0]=a=>M(i)?i.value=a:null)},[ke,(c(!0),m(x,null,N(s.value,a=>(c(),m("option",{value:a.id,key:a.id},b(a.title),9,ye))),128))],512),[[ue,v(i)]])])]))}};var we=Object.defineProperty,Ve=(t,e,n)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,j=(t,e,n)=>(Ve(t,typeof e!="symbol"?e+"":e,n),n);const P={debug:!1,masked:!1,prefix:"",suffix:"",thousands:",",decimal:".",precision:2,disableNegative:!1,disabled:!1,min:null,max:null,allowBlank:!1,minimumNumberOfCharacters:0,modelModifiers:{number:!1},shouldRound:!0,focusOnRight:!1},Y=["+","-"],ee=["decimal","thousands","prefix","suffix"];function k(t){return Math.max(0,Math.min(t,1e3))}function F(t,e){return t=t.padStart(e+1,"0"),e===0?t:`${t.slice(0,-e)}.${t.slice(-e)}`}function te(t){return t=t?t.toString():"",t.replace(/\D+/g,"")||"0"}function Ne(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${e}`)}function Ce(t,e,n){return e?t+n+e:t}function Pe(t,e){return Y.includes(t)?(console.warn(`v-money3 "${e}" property don't accept "${t}" as a value.`),!1):/\d/g.test(t)?(console.warn(`v-money3 "${e}" property don't accept "${t}" (any number) as a value.`),!1):!0}function Fe(t){for(const e of ee)if(!Pe(t[e],e))return!1;return!0}function A(t){for(const e of ee){t[e]=t[e].replace(/\d+/g,"");for(const n of Y)t[e]=t[e].replaceAll(n,"")}return t}function ne(t){const e=t.length,n=t.indexOf(".");return e-(n+1)}function L(t){return t.replace(/^(-?)0+(?!\.)(.+)/,"$1$2")}function se(t){return/^-?[\d]+$/g.test(t)}function oe(t){return/^-?[\d]+(\.[\d]+)$/g.test(t)}function z(t,e,n){return e>t.length-1?t:t.substring(0,e)+n+t.substring(e+1)}function le(t,e){const n=e-ne(t);if(n>=0)return t;let s=t.slice(0,n);const i=t.slice(n);if(s.charAt(s.length-1)==="."&&(s=s.slice(0,-1)),parseInt(i.charAt(0),10)>=5){for(let o=s.length-1;o>=0;o-=1){const r=s.charAt(o);if(r!=="."&&r!=="-"){const a=parseInt(r,10)+1;if(a<10)return z(s,o,a);s=z(s,o,"0")}}return`1${s}`}return s}function ie(t,e){const n=()=>{t.setSelectionRange(e,e)};t===document.activeElement&&(n(),setTimeout(n,1))}function ae(t){return new Event(t,{bubbles:!0,cancelable:!1})}function u({debug:t=!1},...e){t&&console.log(...e)}class T{constructor(e){j(this,"number",0n),j(this,"decimal",0),this.setNumber(e)}getNumber(){return this.number}getDecimalPrecision(){return this.decimal}setNumber(e){this.decimal=0,typeof e=="bigint"?this.number=e:typeof e=="number"?this.setupString(e.toString()):this.setupString(e)}toFixed(e=0,n=!0){let s=this.toString();const i=e-this.getDecimalPrecision();return i>0?(s.includes(".")||(s+="."),s.padEnd(s.length+i,"0")):i<0?n?le(s,e):s.slice(0,i):s}toString(){let e=this.number.toString();if(this.decimal){let n=!1;return e.charAt(0)==="-"&&(e=e.substring(1),n=!0),e=e.padStart(e.length+this.decimal,"0"),e=`${e.slice(0,-this.decimal)}.${e.slice(-this.decimal)}`,e=L(e),(n?"-":"")+e}return e}lessThan(e){const[n,s]=this.adjustComparisonNumbers(e);return n<s}biggerThan(e){const[n,s]=this.adjustComparisonNumbers(e);return n>s}isEqual(e){const[n,s]=this.adjustComparisonNumbers(e);return n===s}setupString(e){if(e=L(e),se(e))this.number=BigInt(e);else if(oe(e))this.decimal=ne(e),this.number=BigInt(e.replace(".",""));else throw new Error(`BigNumber has received and invalid format for the constructor: ${e}`)}adjustComparisonNumbers(e){let n;e.constructor.name!=="BigNumber"?n=new T(e):n=e;const s=this.getDecimalPrecision()-n.getDecimalPrecision();let i=this.getNumber(),o=n.getNumber();return s>0?o=n.getNumber()*10n**BigInt(s):s<0&&(i=this.getNumber()*10n**BigInt(s*-1)),[i,o]}}function Se(t,e=P,n=""){if(u(e,"utils format() - caller",n),u(e,"utils format() - input1",t),t==null)t="";else if(typeof t=="number")e.shouldRound?t=t.toFixed(k(e.precision)):t=t.toFixed(k(e.precision)+1).slice(0,-1);else if(e.modelModifiers&&e.modelModifiers.number&&se(t))t=Number(t).toFixed(k(e.precision));else if(!e.disableNegative&&t==="-")return t;u(e,"utils format() - input2",t);const s=e.disableNegative?"":t.indexOf("-")>=0?"-":"";let i=t.replace(e.prefix,"").replace(e.suffix,"");u(e,"utils format() - filtered",i),!e.precision&&e.thousands!=="."&&oe(i)&&(i=le(i,0),u(e,"utils format() - !opt.precision && isValidFloat()",i));const o=te(i);u(e,"utils format() - numbers",o),u(e,"utils format() - numbersToCurrency",s+F(o,e.precision));const r=new T(s+F(o,e.precision));u(e,"utils format() - bigNumber1",r.toString()),e.max&&r.biggerThan(e.max)&&r.setNumber(e.max),e.min&&r.lessThan(e.min)&&r.setNumber(e.min);const a=r.toFixed(k(e.precision),e.shouldRound);if(u(e,"utils format() - bigNumber2",r.toFixed(k(e.precision))),/^0(\.0+)?$/g.test(a)&&e.allowBlank)return"";let[d,p]=a.split(".");const C=p!==void 0?p.length:0;d=d.padStart(e.minimumNumberOfCharacters-C,"0"),d=Ne(d,e.thousands);const w=e.prefix+Ce(d,p,e.decimal)+e.suffix;return u(e,"utils format() - output",w),w}function W(t,e=P,n=""){if(u(e,"utils unformat() - caller",n),u(e,"utils unformat() - input",t),!e.disableNegative&&t==="-")return u(e,"utils unformat() - return netagive symbol",t),t;const s=e.disableNegative?"":t.indexOf("-")>=0?"-":"",i=t.replace(e.prefix,"").replace(e.suffix,"");u(e,"utils unformat() - filtered",i);const o=te(i);u(e,"utils unformat() - numbers",o);const r=new T(s+F(o,e.precision));u(e,"utils unformat() - bigNumber1",o.toString()),e.max&&r.biggerThan(e.max)&&r.setNumber(e.max),e.min&&r.lessThan(e.min)&&r.setNumber(e.min);let a=r.toFixed(k(e.precision),e.shouldRound);return e.modelModifiers&&e.modelModifiers.number&&(a=parseFloat(a)),u(e,"utils unformat() - output",a),a}const E=(t,e,n)=>{if(u(e,"directive setValue() - caller",n),!Fe(e)){u(e,"directive setValue() - validateRestrictedOptions() return false. Stopping here...",t.value);return}let s=t.value.length-(t.selectionEnd||0);t.value=Se(t.value,e,n),s=Math.max(s,e.suffix.length),s=t.value.length-s,s=Math.max(s,e.prefix.length),ie(t,s),t.dispatchEvent(ae("change"))},Z=(t,e)=>{const n=t.currentTarget,s=t.code==="Backspace"||t.code==="Delete",i=n.value.length-(n.selectionEnd||0)===0;if(u(e,"directive onkeydown() - el.value",n.value),u(e,"directive onkeydown() - backspacePressed",s),u(e,"directive onkeydown() - isAtEndPosition",i),e.allowBlank&&s&&i&&W(n.value,e,"directive onkeydown allowBlank")===0&&(u(e,'directive onkeydown() - set el.value = ""',n.value),n.value="",n.dispatchEvent(ae("change"))),u(e,"directive onkeydown() - e.key",t.key),t.key==="+"){u(e,"directive onkeydown() - unformat el.value",n.value);let o=W(n.value,e,"directive onkeydown +");typeof o=="string"&&(o=parseFloat(o)),o<0&&(n.value=String(o*-1))}},G=(t,e)=>{const n=t.currentTarget;u(e,"directive oninput()",n.value),/^[1-9]$/.test(n.value)&&(n.value=F(n.value,k(e.precision)),u(e,"directive oninput() - is 1-9",n.value)),E(n,e,"directive oninput")},H=(t,e)=>{const n=t.currentTarget;u(e,"directive onFocus()",n.value),e.focusOnRight&&ie(n,n.value.length-e.suffix.length)},J={mounted(t,e){if(!e.value)return;const n=A({...P,...e.value});if(u(n,"directive mounted() - opt",n),t.tagName.toLocaleUpperCase()!=="INPUT"){const s=t.getElementsByTagName("input");s.length!==1||(t=s[0])}t.onkeydown=s=>{Z(s,n)},t.oninput=s=>{G(s,n)},t.onfocus=s=>{H(s,n)},u(n,"directive mounted() - el.value",t.value),E(t,n,"directive mounted")},updated(t,e){if(!e.value)return;const n=A({...P,...e.value});t.onkeydown=s=>{Z(s,n)},t.oninput=s=>{G(s,n)},t.onfocus=s=>{H(s,n)},u(n,"directive updated() - el.value",t.value),u(n,"directive updated() - opt",n),E(t,n,"directive updated")},beforeUnmount(t){t.onkeydown=null,t.oninput=null,t.onfocus=null}},Te={class:"form__block"},Ie=l("legend",{class:"form__legend"},"Цена",-1),Be={class:"form__label form__label--price"},Ee=["value"],Me=l("span",{class:"form__value"},"От",-1),Re={class:"form__label form__label--price"},qe=["value"],Ue=l("span",{class:"form__value"},"До",-1),Oe={__name:"FilterPrice",props:["priceFrom","priceTo"],emits:["update:priceFrom","update:priceTo"],setup(t){return(e,n)=>(c(),m("fieldset",Te,[Ie,l("label",Be,[$(l("input",{"data-maska":"000 000 00#","data-maska-tokens":"0:[0-9]:optional",reversed:"",class:"form__input",type:"text",name:"min-price",autocomplete:"off",value:t.priceFrom,onInput:n[0]||(n[0]=s=>e.$emit("update:priceFrom",s.target.value))},null,40,Ee),[[v(J),{precision:0,thousands:""}]]),Me]),l("label",Re,[$(l("input",{class:"form__input",type:"text",name:"max-price",autocomplete:"off",value:t.priceTo,onInput:n[1]||(n[1]=s=>e.$emit("update:priceTo",s.target.value))},null,40,qe),[[v(J),{precision:0,thousands:""}]]),Ue])]))}},De={class:"form__block"},je=l("legend",{class:"form__legend"},"Материал",-1),Ae={class:"check-list"},Le={class:"check-list__label"},ze=["value"],We={class:"check-list__desc"},Ze={__name:"FilterMaterial",props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=f([]),i=y({get(){return n.modelValue},set(o){e("update:modelValue",o)}});return S.getMaterials().then(o=>s.value=o),(o,r)=>(c(),m("fieldset",De,[je,l("ul",Ae,[(c(!0),m(x,null,N(s.value,a=>(c(),m("li",{key:a.id,class:"check-list__item"},[l("label",Le,[$(l("input",{class:"check-list__check sr-only",type:"checkbox",name:"material",value:a.id,"onUpdate:modelValue":r[0]||(r[0]=d=>M(i)?i.value=d:null)},null,8,ze),[[K,v(i)]]),l("span",We,[R(b(a.title),1),l("span",null,"("+b(a.productsCount)+")",1)])])]))),128))])]))}},Ge={class:"form__block"},He=l("legend",{class:"form__legend"},"Коллекция",-1),Je={class:"check-list"},Ke={class:"check-list__label"},Qe=["value"],Xe={class:"check-list__desc"},Ye={__name:"FilterSeasons",props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=f([]),i=y({get(){return n.modelValue},set(o){e("update:modelValue",o)}});return S.getSeasons().then(o=>s.value=o),(o,r)=>(c(),m("fieldset",Ge,[He,l("ul",Je,[(c(!0),m(x,null,N(s.value,a=>(c(),m("li",{key:a.id,class:"check-list__item"},[l("label",Ke,[$(l("input",{class:"check-list__check sr-only",type:"checkbox",name:"collection",value:a.id,"onUpdate:modelValue":r[0]||(r[0]=d=>M(i)?i.value=d:null)},null,8,Qe),[[K,v(i)]]),l("span",Xe,[R(b(a.title)+" ",1),l("span",null,"("+b(a.productsCount)+")",1)])])]))),128))])]))}},et={class:"filter"},tt={class:"filter__form form",action:"#",method:"get"},nt={__name:"FilterForm",setup(t){var w,q,U;const e=ce(),n=Q(),s=f(!1),i=f(0),o=f(0),r=f(0),a=f([]),d=f([]);i.value=((w=n.query)==null?void 0:w.minPrice)||0,o.value=((q=n.query)==null?void 0:q.maxPrice)||0,r.value=((U=n.query)==null?void 0:U.categoryId)||0,a.value=n.query["materialIds[]"]||[],d.value=n.query["seasonIds[]"]||[];const p=y(()=>({...i.value>0?{minPrice:i.value}:{},...o.value>0?{maxPrice:o.value}:{},...r.value>0?{categoryId:r.value}:{},...a.value.length>0?{"materialIds[]":a.value}:{},...d.value.length>0?{"seasonIds[]":d.value}:{}}));function C(){i.value=0,o.value=0,r.value=0,a.value=[],d.value=[],s.value=!1,e.replace({query:p.value})}return(re,_)=>(c(),m("aside",et,[l("form",tt,[h(Oe,{priceFrom:i.value,"onUpdate:priceFrom":_[0]||(_[0]=g=>i.value=g),priceTo:o.value,"onUpdate:priceTo":_[1]||(_[1]=g=>o.value=g)},null,8,["priceFrom","priceTo"]),h(xe,{modelValue:r.value,"onUpdate:modelValue":_[2]||(_[2]=g=>r.value=g)},null,8,["modelValue"]),h(Ze,{modelValue:a.value,"onUpdate:modelValue":_[3]||(_[3]=g=>a.value=g)},null,8,["modelValue"]),h(Ye,{modelValue:d.value,"onUpdate:modelValue":_[4]||(_[4]=g=>d.value=g)},null,8,["modelValue"]),l("button",{class:"filter__submit button button--primery",type:"submit",onClick:_[5]||(_[5]=V(g=>re.$router.replace({query:v(p)}),["prevent"]))}," Применить "),Object.entries(v(p)).length>0?(c(),m("button",{key:0,class:"filter__reset button button--second",type:"button",onClick:_[6]||(_[6]=V(g=>C(),["prevent"]))}," Сбросить ")):B("",!0)])]))}},st={class:"catalog__item"},ot=["src","alt"],lt={class:"lds-spinner"},it=l("div",null,null,-1),at=l("div",null,null,-1),rt=l("div",null,null,-1),ut=l("div",null,null,-1),ct=l("div",null,null,-1),dt=l("div",null,null,-1),mt=l("div",null,null,-1),pt=l("div",null,null,-1),_t=l("div",null,null,-1),ft=l("div",null,null,-1),vt=l("div",null,null,-1),gt=l("div",null,null,-1),ht=[it,at,rt,ut,ct,dt,mt,pt,_t,ft,vt,gt],bt={class:"catalog__item-content"},$t={class:"catalog__title"},kt={class:"catalog__price"},yt={__name:"CatalogItem",props:["product"],setup(t){const e=f(!1);function n(){e.value=!0}return(s,i)=>(c(),m("li",st,[h(v(D),{class:"catalog__pic",to:{name:"product",params:{id:t.product.id},meta:{title:t.product.title}}},{default:O(()=>[l("img",{src:t.product.colors[0].gallery?t.product.colors[0].gallery[0].file.url:v(ge),alt:t.product.title,onLoad:n},null,40,ot),$(l("div",lt,ht,512),[[de,!e.value]])]),_:1},8,["to"]),l("div",bt,[l("h3",$t,[h(v(D),{to:{name:"product",params:{id:t.product.id},meta:{title:t.product.title}}},{default:O(()=>[R(b(t.product.title),1)]),_:1},8,["to"])]),l("span",kt,b(s.$format.currRUB(t.product.price)),1),h(fe,{colors:t.product.colors},null,8,["colors"])])]))}},xt={class:"catalog__list"},wt={__name:"CatalogList",props:["products"],setup(t){return(e,n)=>(c(),m("ul",xt,[(c(!0),m(x,null,N(t.products,s=>(c(),X(yt,{product:s,key:s.id},null,8,["product"]))),128))]))}},Vt={class:"catalog__pagination pagination"},Nt={class:"pagination__item"},Ct={symbol:"icon-arrow-left",size:"8 14"},Pt=["onClick"],Ft={class:"pagination__item"},St={symbol:"icon-arrow-right",size:"0 0 8 14"},Tt={__name:"CatalogPagination",props:["page","count","perPage"],emits:["pagination"],setup(t,{emit:e}){const n=t,s=y(()=>n.page<n.count),i=y(()=>n.page>1);function o(r){let a;if(r==="next"){if(n.page===n.count)return;a=n.page+1}else if(r==="prev"){if(n.page===1)return;a=n.page-1}else a=r;e("pagination",a)}return(r,a)=>{const d=me("svg");return c(),m("ul",Vt,[l("li",Nt,[l("a",{class:I(["pagination__link pagination__link--arrow",v(i)?"":"pagination__link--disabled"]),"aria-label":"Предыдущая страница",onClick:a[0]||(a[0]=V(p=>o("prev"),["prevent"]))},[$((c(),m("svg",Ct,null,512)),[[d]])],2)]),(c(!0),m(x,null,N(t.count,p=>(c(),m("li",{class:"pagination__item",key:p},[l("a",{class:I(["pagination__link",{"pagination__link--current":p===t.page}]),onClick:V(C=>o(p),["prevent"])},b(p),11,Pt)]))),128)),l("li",Ft,[l("a",{class:I(["pagination__link pagination__link--arrow",v(s)?"":"pagination__link--disabled"]),href:"#","aria-label":"Следующая страница",onClick:a[1]||(a[1]=V(p=>o("next"),["prevent"]))},[$((c(),m("svg",St,null,512)),[[d]])],2)])])}}},It={key:1,class:"content container"},Bt={class:"content__top"},Et={class:"content__row"},Mt=l("h1",{class:"content__title"},"Каталог",-1),Rt={class:"content__info"},qt={class:"content__catalog"},Ut={class:"catalog"},At={__name:"CatalogView",setup(t){const e=f(!0),n=f({}),s=f(12),i=pe({page:1,pages:1,total:0}),o=Q();_e(()=>({params:o.params,query:o.query}),r),r();function r(){o.params.limit&&o.params.page&&(s.value=parseInt(o.params.limit),i.page=parseInt(o.params.page)),S.getProducts({page:i.page,limit:s.value},o.query).then(a=>{e.value=!0,n.value=a.items,Object.assign(i,a.pagination),e.value=!1})}return(a,d)=>(c(),m(x,null,[e.value?(c(),X(ve,{key:0})):B("",!0),e.value?B("",!0):(c(),m("main",It,[l("div",Bt,[l("div",Et,[Mt,l("span",Rt,b(a.$format.countItemsText(i.total)),1)])]),l("div",qt,[h(nt),l("section",Ut,[h(wt,{products:n.value},null,8,["products"]),h(Tt,{page:i.page,count:i.pages,perPage:s.value,onPagination:d[0]||(d[0]=p=>a.$router.push({name:"products:limit",params:{limit:s.value,page:p}}))},null,8,["page","count","perPage"])])])]))],64))}};export{At as default};
