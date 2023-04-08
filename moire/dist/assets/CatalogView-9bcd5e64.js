import{r as p,c as N,S as I,o as d,a as m,b as l,w as y,v as fe,u as $,i as z,F as P,d as S,t as x,e as Y,f as j,g as ee,h as te,j as b,k as C,l as ne,m as ge,n as oe,p as D,q as U,s as he,R as A,x as se,y as be,z as $e}from"./index-ca4a827e.js";import{_ as ke,a as ye}from"./ProductSizeSelect-1a4255f0.js";import{n as xe}from"./no-image-7601bee4.js";const Ve={class:"form__block"},we=l("legend",{class:"form__legend"},"Категория",-1),Ce={class:"form__label form__label--select"},Ne=l("option",{value:"0"},"Все категории",-1),Ie=["value"],Pe={__name:"FilterCategory",props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=p(),a=N({get(){return n.modelValue},set(s){e("update:modelValue",s)}});return I.getProductCategories().then(s=>o.value=s),(s,r)=>(d(),m("fieldset",Ve,[we,l("label",Ce,[y(l("select",{class:"form__select",name:"category","onUpdate:modelValue":r[0]||(r[0]=i=>z(a)?a.value=i:null)},[Ne,(d(!0),m(P,null,S(o.value,i=>(d(),m("option",{value:i.id,key:i.id},x(i.title),9,Ie))),128))],512),[[fe,$(a)]])])]))}};var Se=Object.defineProperty,Fe=(t,e,n)=>e in t?Se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,L=(t,e,n)=>(Fe(t,typeof e!="symbol"?e+"":e,n),n);const M={debug:!1,masked:!1,prefix:"",suffix:"",thousands:",",decimal:".",precision:2,disableNegative:!1,disabled:!1,min:null,max:null,allowBlank:!1,minimumNumberOfCharacters:0,modelModifiers:{number:!1},shouldRound:!0,focusOnRight:!1},le=["+","-"],ae=["decimal","thousands","prefix","suffix"];function w(t){return Math.max(0,Math.min(t,1e3))}function q(t,e){return t=t.padStart(e+1,"0"),e===0?t:`${t.slice(0,-e)}.${t.slice(-e)}`}function ie(t){return t=t?t.toString():"",t.replace(/\D+/g,"")||"0"}function Te(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${e}`)}function Be(t,e,n){return e?t+n+e:t}function Ue(t,e){return le.includes(t)?(console.warn(`v-money3 "${e}" property don't accept "${t}" as a value.`),!1):/\d/g.test(t)?(console.warn(`v-money3 "${e}" property don't accept "${t}" (any number) as a value.`),!1):!0}function Me(t){for(const e of ae)if(!Ue(t[e],e))return!1;return!0}function W(t){for(const e of ae){t[e]=t[e].replace(/\d+/g,"");for(const n of le)t[e]=t[e].replaceAll(n,"")}return t}function re(t){const e=t.length,n=t.indexOf(".");return e-(n+1)}function K(t){return t.replace(/^(-?)0+(?!\.)(.+)/,"$1$2")}function ue(t){return/^-?[\d]+$/g.test(t)}function ce(t){return/^-?[\d]+(\.[\d]+)$/g.test(t)}function Z(t,e,n){return e>t.length-1?t:t.substring(0,e)+n+t.substring(e+1)}function de(t,e){const n=e-re(t);if(n>=0)return t;let o=t.slice(0,n);const a=t.slice(n);if(o.charAt(o.length-1)==="."&&(o=o.slice(0,-1)),parseInt(a.charAt(0),10)>=5){for(let s=o.length-1;s>=0;s-=1){const r=o.charAt(s);if(r!=="."&&r!=="-"){const i=parseInt(r,10)+1;if(i<10)return Z(o,s,i);o=Z(o,s,"0")}}return`1${o}`}return o}function me(t,e){const n=()=>{t.setSelectionRange(e,e)};t===document.activeElement&&(n(),setTimeout(n,1))}function pe(t){return new Event(t,{bubbles:!0,cancelable:!1})}function u({debug:t=!1},...e){t&&console.log(...e)}class E{constructor(e){L(this,"number",0n),L(this,"decimal",0),this.setNumber(e)}getNumber(){return this.number}getDecimalPrecision(){return this.decimal}setNumber(e){this.decimal=0,typeof e=="bigint"?this.number=e:typeof e=="number"?this.setupString(e.toString()):this.setupString(e)}toFixed(e=0,n=!0){let o=this.toString();const a=e-this.getDecimalPrecision();return a>0?(o.includes(".")||(o+="."),o.padEnd(o.length+a,"0")):a<0?n?de(o,e):o.slice(0,a):o}toString(){let e=this.number.toString();if(this.decimal){let n=!1;return e.charAt(0)==="-"&&(e=e.substring(1),n=!0),e=e.padStart(e.length+this.decimal,"0"),e=`${e.slice(0,-this.decimal)}.${e.slice(-this.decimal)}`,e=K(e),(n?"-":"")+e}return e}lessThan(e){const[n,o]=this.adjustComparisonNumbers(e);return n<o}biggerThan(e){const[n,o]=this.adjustComparisonNumbers(e);return n>o}isEqual(e){const[n,o]=this.adjustComparisonNumbers(e);return n===o}setupString(e){if(e=K(e),ue(e))this.number=BigInt(e);else if(ce(e))this.decimal=re(e),this.number=BigInt(e.replace(".",""));else throw new Error(`BigNumber has received and invalid format for the constructor: ${e}`)}adjustComparisonNumbers(e){let n;e.constructor.name!=="BigNumber"?n=new E(e):n=e;const o=this.getDecimalPrecision()-n.getDecimalPrecision();let a=this.getNumber(),s=n.getNumber();return o>0?s=n.getNumber()*10n**BigInt(o):o<0&&(a=this.getNumber()*10n**BigInt(o*-1)),[a,s]}}function qe(t,e=M,n=""){if(u(e,"utils format() - caller",n),u(e,"utils format() - input1",t),t==null)t="";else if(typeof t=="number")e.shouldRound?t=t.toFixed(w(e.precision)):t=t.toFixed(w(e.precision)+1).slice(0,-1);else if(e.modelModifiers&&e.modelModifiers.number&&ue(t))t=Number(t).toFixed(w(e.precision));else if(!e.disableNegative&&t==="-")return t;u(e,"utils format() - input2",t);const o=e.disableNegative?"":t.indexOf("-")>=0?"-":"";let a=t.replace(e.prefix,"").replace(e.suffix,"");u(e,"utils format() - filtered",a),!e.precision&&e.thousands!=="."&&ce(a)&&(a=de(a,0),u(e,"utils format() - !opt.precision && isValidFloat()",a));const s=ie(a);u(e,"utils format() - numbers",s),u(e,"utils format() - numbersToCurrency",o+q(s,e.precision));const r=new E(o+q(s,e.precision));u(e,"utils format() - bigNumber1",r.toString()),e.max&&r.biggerThan(e.max)&&r.setNumber(e.max),e.min&&r.lessThan(e.min)&&r.setNumber(e.min);const i=r.toFixed(w(e.precision),e.shouldRound);if(u(e,"utils format() - bigNumber2",r.toFixed(w(e.precision))),/^0(\.0+)?$/g.test(i)&&e.allowBlank)return"";let[c,_]=i.split(".");const k=_!==void 0?_.length:0;c=c.padStart(e.minimumNumberOfCharacters-k,"0"),c=Te(c,e.thousands);const V=e.prefix+Be(c,_,e.decimal)+e.suffix;return u(e,"utils format() - output",V),V}function G(t,e=M,n=""){if(u(e,"utils unformat() - caller",n),u(e,"utils unformat() - input",t),!e.disableNegative&&t==="-")return u(e,"utils unformat() - return netagive symbol",t),t;const o=e.disableNegative?"":t.indexOf("-")>=0?"-":"",a=t.replace(e.prefix,"").replace(e.suffix,"");u(e,"utils unformat() - filtered",a);const s=ie(a);u(e,"utils unformat() - numbers",s);const r=new E(o+q(s,e.precision));u(e,"utils unformat() - bigNumber1",s.toString()),e.max&&r.biggerThan(e.max)&&r.setNumber(e.max),e.min&&r.lessThan(e.min)&&r.setNumber(e.min);let i=r.toFixed(w(e.precision),e.shouldRound);return e.modelModifiers&&e.modelModifiers.number&&(i=parseFloat(i)),u(e,"utils unformat() - output",i),i}const O=(t,e,n)=>{if(u(e,"directive setValue() - caller",n),!Me(e)){u(e,"directive setValue() - validateRestrictedOptions() return false. Stopping here...",t.value);return}let o=t.value.length-(t.selectionEnd||0);t.value=qe(t.value,e,n),o=Math.max(o,e.suffix.length),o=t.value.length-o,o=Math.max(o,e.prefix.length),me(t,o),t.dispatchEvent(pe("change"))},H=(t,e)=>{const n=t.currentTarget,o=t.code==="Backspace"||t.code==="Delete",a=n.value.length-(n.selectionEnd||0)===0;if(u(e,"directive onkeydown() - el.value",n.value),u(e,"directive onkeydown() - backspacePressed",o),u(e,"directive onkeydown() - isAtEndPosition",a),e.allowBlank&&o&&a&&G(n.value,e,"directive onkeydown allowBlank")===0&&(u(e,'directive onkeydown() - set el.value = ""',n.value),n.value="",n.dispatchEvent(pe("change"))),u(e,"directive onkeydown() - e.key",t.key),t.key==="+"){u(e,"directive onkeydown() - unformat el.value",n.value);let s=G(n.value,e,"directive onkeydown +");typeof s=="string"&&(s=parseFloat(s)),s<0&&(n.value=String(s*-1))}},J=(t,e)=>{const n=t.currentTarget;u(e,"directive oninput()",n.value),/^[1-9]$/.test(n.value)&&(n.value=q(n.value,w(e.precision)),u(e,"directive oninput() - is 1-9",n.value)),O(n,e,"directive oninput")},Q=(t,e)=>{const n=t.currentTarget;u(e,"directive onFocus()",n.value),e.focusOnRight&&me(n,n.value.length-e.suffix.length)},X={mounted(t,e){if(!e.value)return;const n=W({...M,...e.value});if(u(n,"directive mounted() - opt",n),t.tagName.toLocaleUpperCase()!=="INPUT"){const o=t.getElementsByTagName("input");o.length!==1||(t=o[0])}t.onkeydown=o=>{H(o,n)},t.oninput=o=>{J(o,n)},t.onfocus=o=>{Q(o,n)},u(n,"directive mounted() - el.value",t.value),O(t,n,"directive mounted")},updated(t,e){if(!e.value)return;const n=W({...M,...e.value});t.onkeydown=o=>{H(o,n)},t.oninput=o=>{J(o,n)},t.onfocus=o=>{Q(o,n)},u(n,"directive updated() - el.value",t.value),u(n,"directive updated() - opt",n),O(t,n,"directive updated")},beforeUnmount(t){t.onkeydown=null,t.oninput=null,t.onfocus=null}},Ee={class:"form__block"},Re=l("legend",{class:"form__legend"},"Цена",-1),Oe={class:"form__label form__label--price"},ze=["value"],je=l("span",{class:"form__value"},"От",-1),De={class:"form__label form__label--price"},Ae=["value"],Le=l("span",{class:"form__value"},"До",-1),We={__name:"FilterPrice",props:["priceFrom","priceTo"],emits:["update:priceFrom","update:priceTo"],setup(t){return(e,n)=>(d(),m("fieldset",Ee,[Re,l("label",Oe,[y(l("input",{"data-maska":"000 000 00#","data-maska-tokens":"0:[0-9]:optional",reversed:"",class:"form__input",type:"text",name:"min-price",autocomplete:"off",value:t.priceFrom,onInput:n[0]||(n[0]=o=>e.$emit("update:priceFrom",o.target.value))},null,40,ze),[[$(X),{precision:0,thousands:""}]]),je]),l("label",De,[y(l("input",{class:"form__input",type:"text",name:"max-price",autocomplete:"off",value:t.priceTo,onInput:n[1]||(n[1]=o=>e.$emit("update:priceTo",o.target.value))},null,40,Ae),[[$(X),{precision:0,thousands:""}]]),Le])]))}},Ke={class:"form__block"},Ze=l("legend",{class:"form__legend"},"Материал",-1),Ge={class:"check-list"},He={class:"check-list__label"},Je=["value"],Qe={class:"check-list__desc"},Xe={__name:"FilterMaterial",props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=p([]),a=N({get(){return n.modelValue},set(s){e("update:modelValue",s)}});return I.getMaterials().then(s=>o.value=s),(s,r)=>(d(),m("fieldset",Ke,[Ze,l("ul",Ge,[(d(!0),m(P,null,S(o.value,i=>(d(),m("li",{key:i.id,class:"check-list__item"},[l("label",He,[y(l("input",{class:"check-list__check sr-only",type:"checkbox",name:"material",value:i.id,"onUpdate:modelValue":r[0]||(r[0]=c=>z(a)?a.value=c:null)},null,8,Je),[[Y,$(a)]]),l("span",Qe,[j(x(i.title),1),l("span",null,"("+x(i.productsCount)+")",1)])])]))),128))])]))}},Ye={class:"form__block"},et=l("legend",{class:"form__legend"},"Коллекция",-1),tt={class:"check-list"},nt={class:"check-list__label"},ot=["value"],st={class:"check-list__desc"},lt={__name:"FilterSeasons",props:["modelValue"],emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=p([]),a=N({get(){return n.modelValue},set(s){e("update:modelValue",s)}});return I.getSeasons().then(s=>o.value=s),(s,r)=>(d(),m("fieldset",Ye,[et,l("ul",tt,[(d(!0),m(P,null,S(o.value,i=>(d(),m("li",{key:i.id,class:"check-list__item"},[l("label",nt,[y(l("input",{class:"check-list__check sr-only",type:"checkbox",name:"collection",value:i.id,"onUpdate:modelValue":r[0]||(r[0]=c=>z(a)?a.value=c:null)},null,8,ot),[[Y,$(a)]]),l("span",st,[j(x(i.title)+" ",1),l("span",null,"("+x(i.productsCount)+")",1)])])]))),128))])]))}},at={class:"filter"},it={class:"filter__form form",action:"#",method:"get"},rt={__name:"FilterForm",setup(t){var V,T,B;const e=ee(),n=te(),o=p(!1),a=p(0),s=p(0),r=p(0),i=p([]),c=p([]);a.value=((V=n.query)==null?void 0:V.minPrice)||0,s.value=((T=n.query)==null?void 0:T.maxPrice)||0,r.value=((B=n.query)==null?void 0:B.categoryId)||0,i.value=n.query["materialIds[]"]||[],c.value=n.query["seasonIds[]"]||[];const _=N(()=>({...a.value>0?{minPrice:a.value}:{},...s.value>0?{maxPrice:s.value}:{},...r.value>0?{categoryId:r.value}:{},...i.value.length>0?{"materialIds[]":i.value}:{},...c.value.length>0?{"seasonIds[]":c.value}:{}}));function k(){a.value=0,s.value=0,r.value=0,i.value=[],c.value=[],o.value=!1,e.replace({query:_.value})}return(R,v)=>(d(),m("aside",at,[l("form",it,[b(We,{priceFrom:a.value,"onUpdate:priceFrom":v[0]||(v[0]=g=>a.value=g),priceTo:s.value,"onUpdate:priceTo":v[1]||(v[1]=g=>s.value=g)},null,8,["priceFrom","priceTo"]),b(Pe,{modelValue:r.value,"onUpdate:modelValue":v[2]||(v[2]=g=>r.value=g)},null,8,["modelValue"]),b(Xe,{modelValue:i.value,"onUpdate:modelValue":v[3]||(v[3]=g=>i.value=g)},null,8,["modelValue"]),b(lt,{modelValue:c.value,"onUpdate:modelValue":v[4]||(v[4]=g=>c.value=g)},null,8,["modelValue"]),l("button",{class:"filter__submit button button--primery",type:"submit",onClick:v[5]||(v[5]=C(g=>R.$router.replace({query:$(_)}),["prevent"]))}," Применить "),Object.entries($(_)).length>0?(d(),m("button",{key:0,class:"filter__reset button button--second",type:"button",onClick:v[6]||(v[6]=C(g=>k(),["prevent"]))}," Сбросить ")):ne("",!0)])]))}},ut={class:"catalog__pics-wrapper"},ct=["src","alt","hidden"],dt=l("div",{class:"catalog__item-cartbox"},null,-1),mt={class:"form__label form__label--small form__label--select"},pt=["onClick"],_t={class:"button__text"},vt={symbol:"icon-cart",size:"19 24"},ft={class:"lds-spinner"},gt=l("div",null,null,-1),ht=l("div",null,null,-1),bt=l("div",null,null,-1),$t=l("div",null,null,-1),kt=l("div",null,null,-1),yt=l("div",null,null,-1),xt=l("div",null,null,-1),Vt=l("div",null,null,-1),wt=l("div",null,null,-1),Ct=l("div",null,null,-1),Nt=l("div",null,null,-1),It=l("div",null,null,-1),Pt=[gt,ht,bt,$t,kt,yt,xt,Vt,wt,Ct,Nt,It],St={class:"catalog__item-content"},Ft={class:"catalog__title"},Tt={class:"catalog__price"},Bt={__name:"CatalogItem",props:["product"],setup(t){const e=t,n=ee(),o=p(0),a=p(e.product.colors[0].id),s=p(),r=p(!1),i=p({}),c=p(!1),_=p(!1),k=ge();oe(()=>a.value,()=>{console.log(e.product),o.value=e.product.colors.findIndex(h=>h.id===a.value)});const V=p(!1);function T(){V.value=!0}function B(h){var f;return h?(f=h[0])==null?void 0:f.file.url:xe}function R(){var h;c.value&&n.push({name:"cart"}),r.value=!0,I.addProductToBasket({productId:e.product.id,colorId:g(a.value),sizeId:s.value,quantity:1},(h=k.getUser())==null?void 0:h.accessKey).then(f=>{console.log(f),setTimeout(()=>{Object.assign(k.cart,f),k.setUser(k.cart.user),r.value=!1,c.value=!0},1e3)})}function v(){_.value||I.getProductById(e.product.id).then(h=>{i.value=h.sizes,s.value=i.value[0].id,_.value=!0})}function g(h){return e.product.colors.find(f=>f.id===h).color.id}return(h,f)=>{const _e=se("svg");return d(),m("li",{class:"catalog__item",onMouseover:v},[b($(A),{class:"catalog__pic",to:{name:"product",params:{id:t.product.id},meta:{data:t.product.title}}},{default:D(()=>[l("div",ut,[(d(!0),m(P,null,S(t.product.colors,(F,ve)=>(d(),m("img",{key:F.id,src:B(t.product.colors[o.value].gallery),alt:t.product.title,hidden:o.value!==ve,onLoad:T},null,40,ct))),128))]),dt,l("div",{class:"catalog__size-box",onClick:f[1]||(f[1]=C(()=>{},["prevent"]))},[l("label",mt,[b(ke,{"size-list":i.value,modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=F=>s.value=F)},null,8,["size-list","modelValue"])]),l("button",{class:U(["catalog__button button button--primery",{"button--loading":r.value,"button--ok":c.value}]),onClick:C(R,["prevent"])},[l("span",_t,[y((d(),m("svg",vt,null,512)),[[_e]])])],10,pt)]),y(l("div",ft,Pt,512),[[he,!V.value]])]),_:1},8,["to"]),l("div",St,[l("h3",Ft,[b($(A),{to:{name:"product",params:{id:t.product.id},meta:{title:t.product.title}}},{default:D(()=>[j(x(t.product.title),1)]),_:1},8,["to"])]),l("span",Tt,x(h.$format.currRUB(t.product.price)),1),b(ye,{colors:t.product.colors,modelValue:a.value,"onUpdate:modelValue":f[2]||(f[2]=F=>a.value=F)},null,8,["colors","modelValue"])])],32)}}},Ut={class:"catalog__list"},Mt={__name:"CatalogList",props:["products"],setup(t){return(e,n)=>(d(),m("ul",Ut,[(d(!0),m(P,null,S(t.products,o=>(d(),be(Bt,{product:o,key:o.id},null,8,["product"]))),128))]))}},qt={class:"catalog__pagination pagination"},Et={class:"pagination__item"},Rt={symbol:"icon-arrow-left",size:"8 14"},Ot=["onClick"],zt={class:"pagination__item"},jt={symbol:"icon-arrow-right",size:"0 0 8 14"},Dt={__name:"CatalogPagination",props:["page","count","perPage"],emits:["pagination"],setup(t,{emit:e}){const n=t,o=N(()=>n.page<n.count),a=N(()=>n.page>1);function s(r){let i;if(r==="next"){if(n.page===n.count)return;i=n.page+1}else if(r==="prev"){if(n.page===1)return;i=n.page-1}else i=r;e("pagination",i)}return(r,i)=>{const c=se("svg");return d(),m("ul",qt,[l("li",Et,[l("a",{class:U(["pagination__link pagination__link--arrow",$(a)?"":"pagination__link--disabled"]),"aria-label":"Предыдущая страница",onClick:i[0]||(i[0]=C(_=>s("prev"),["prevent"]))},[y((d(),m("svg",Rt,null,512)),[[c]])],2)]),(d(!0),m(P,null,S(t.count,_=>(d(),m("li",{class:"pagination__item",key:_},[l("a",{class:U(["pagination__link",{"pagination__link--current":_===t.page}]),onClick:C(k=>s(_),["prevent"])},x(_),11,Ot)]))),128)),l("li",zt,[l("a",{class:U(["pagination__link pagination__link--arrow",$(o)?"":"pagination__link--disabled"]),href:"#","aria-label":"Следующая страница",onClick:i[1]||(i[1]=C(_=>s("next"),["prevent"]))},[y((d(),m("svg",jt,null,512)),[[c]])],2)])])}}},At={key:0,class:"content container"},Lt={class:"content__top"},Wt={class:"content__row"},Kt=l("h1",{class:"content__title"},"Каталог",-1),Zt={class:"content__info"},Gt={class:"content__catalog"},Ht={class:"catalog"},Yt={__name:"CatalogView",setup(t){const e=p(!0),n=p({}),o=p(12),a=$e({page:1,pages:1,total:0}),s=te();oe(()=>({params:s.params,query:s.query}),r),r();function r(){s.params.limit&&s.params.page&&(o.value=parseInt(s.params.limit),a.page=parseInt(s.params.page)),I.getProducts({page:a.page,limit:o.value},s.query).then(i=>{e.value=!0,n.value=i.items,Object.assign(a,i.pagination),e.value=!1})}return(i,c)=>e.value?ne("",!0):(d(),m("main",At,[l("div",Lt,[l("div",Wt,[Kt,l("span",Zt,x(i.$format.countItemsText(a.total)),1)])]),l("div",Gt,[b(rt),l("section",Ht,[b(Mt,{products:n.value},null,8,["products"]),b(Dt,{page:a.page,count:a.pages,perPage:o.value,onPagination:c[0]||(c[0]=_=>i.$router.push({name:"products:limit",params:{limit:o.value,page:_}}))},null,8,["page","count","perPage"])])])]))}};export{Yt as default};
