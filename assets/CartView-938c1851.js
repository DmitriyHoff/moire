import{B as S,r as h,o as a,a as l,h as z,l as K,b as t,t as _,f as m,D as O,u as b,w as C,S as w,E as P,p as R,c as j,F as D,d as I,j as B,k as N,m as E}from"./index-9e1c7b37.js";import{S as L,_ as q}from"./sku-generator-89390606.js";import{n as x}from"./no-image-7601bee4.js";const U={Red:"Красный",Blue:"Синий",Green:"Зелёный",Yellow:"Жёлтый",Purple:"Фиолетовый",Pink:"Розовый",black:"Чёрный",white:"Белый"};function F(c){const e=Object.keys(U).find(o=>o.toUpperCase().trim()===c.toUpperCase().trim());return e?U[e]:c}const M={class:"cart__item product"},A=["src","alt"],G={class:"product__content"},Q={class:"product__info-wrap"},Y={class:"product__title"},H={class:"product__info product__info--color"},J={class:"product__size"},W={class:"product__code"},X={class:"product__counter form__counter"},Z={key:0,size:"16 16",symbol:"icon-delete"},tt={key:1,size:"12 12",symbol:"icon-minus"},et=["value"],st={size:"12 12",symbol:"icon-plus"},ot={class:"product__price"},nt={__name:"CartItem",props:["item"],emits:["update:cart","confirm:delete"],setup(c,{emit:e}){const o=c,u=300,k=S(),p=h(o.item.product),r=h(o.item.quantity),i=h(new L({id:p.value.id,color:o.item.color.color.id,size:o.item.size.id}).toString());let n;function v(){r.value++,$()}function y(){if(r.value>1)r.value--;else{$(!0);return}$()}function $(d=!1){clearTimeout(n),n=setTimeout(()=>{const s=k.getUser();d?w.deleteBasketProduct(o.item.id,s==null?void 0:s.accessKey).then(f=>{e("update:cart",f)}):w.changeBasketQuantity(o.item.id,r.value,s==null?void 0:s.accessKey).then(f=>{e("update:cart",f)})},u)}function T(d){var s;return d?(s=d[0])==null?void 0:s.file.url:x}return(d,s)=>{const f=P("RouterLink"),g=R("svg");return a(),l("li",M,[z(f,{class:"product__pic",to:{name:"product",params:{id:c.item.product.id}}},{default:K(()=>[t("img",{src:T(c.item.color.gallery),width:"120",height:"120",alt:c.item.title},null,8,A)]),_:1},8,["to"]),t("div",G,[t("div",Q,[t("h3",Y,_(p.value.title),1),t("p",H,[m(" Цвет: "),t("span",null,[t("i",{style:O(`background-color: ${c.item.color.color.code}`)},null,4),m(" "+_(b(F)(c.item.color.color.title)),1)])]),t("p",J,[m(" Размер: "),t("span",null,_(c.item.size.title),1)]),t("span",W," Артикул: "+_(i.value),1)]),t("div",X,[t("button",{type:"button","aria-label":"Убрать один товар",onClick:s[0]||(s[0]=V=>y())},[r.value===1?C((a(),l("svg",Z,null,512)),[[g]]):C((a(),l("svg",tt,null,512)),[[g]])]),t("input",{type:"text",value:r.value,name:"count"},null,8,et),t("button",{type:"button","aria-label":"Добавить один товар",onClick:s[1]||(s[1]=V=>v())},[C((a(),l("svg",st,null,512)),[[g]])])])]),t("div",ot,_(d.$format.currRUB(p.value.price*r.value)),1)])}}},ct={class:"content container"},it={class:"content__top"},rt={class:"cart"},at={key:0,class:"cart__form form",action:"#",method:"POST"},lt={class:"cart__field"},ut={class:"cart__list"},dt={class:"cart__block"},_t=t("p",{class:"cart__desc"},"Мы посчитаем стоимость доставки на следующем этапе",-1),mt={class:"cart__price"},pt={key:1},vt=t("h2",null,"Ой, пусто!",-1),ft=t("p",null,[m(" Ваша корзина пуста, откройте каталог "),t("br"),m("и выбирайте лучшие товары с бесплатной доставкой ")],-1),ht=t("br",null,null,-1),$t={__name:"CartView",setup(c){const e=S(),o=h(!1),u=e.getUser();u!=null&&u.accessKey&&(o.value=!0,w.getBasket(u.accessKey).then(i=>{Object.assign(e.cart,i),e.setUser(e.cart.user),o.value=!1}));const k=j(()=>e.cart.items.reduce((i,n)=>i+=n.price*n.quantity,0)),p=h([{title:"Каталог",route:{name:"main"}},{title:"Корзина",route:{path:"#"}}]);function r(i){Object.assign(e.cart,i)}return(i,n)=>(a(),l("main",ct,[t("div",it,[z(q,{links:p.value},null,8,["links"])]),t("section",rt,[!o.value&&b(e).count>0?(a(),l("form",at,[t("div",lt,[t("ul",ut,[(a(!0),l(D,null,I(b(e).cart.items,v=>(a(),E(nt,{key:v.id,item:v,"onUpdate:cart":n[0]||(n[0]=y=>r(y))},null,8,["item"]))),128))])]),t("div",dt,[_t,t("p",mt,[m(" Итого: "),t("span",null,_(i.$format.currRUB(b(k))),1)]),t("button",{class:"cart__button button button--primery",type:"submit",onClick:n[1]||(n[1]=B(()=>i.$router.push({name:"checkout"}),["prevent"]))}," Оформить заказ ")])])):o.value?N("",!0):(a(),l("div",pt,[vt,ft,ht,t("button",{class:"item__button button button--primery",onClick:n[2]||(n[2]=B(v=>i.$router.push({name:"products"}),["prevent"]))}," Начать покупки ")]))])]))}};export{$t as default};
