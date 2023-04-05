import{B as T,r as b,o as a,a as l,h as z,l as V,b as t,t as _,f as m,D,u as k,w as C,S as w,E as K,p as O,G as P,c as j,F as x,d as I,j as S,k as L,m as N}from"./index-e53e35b7.js";import{S as R,_ as q}from"./sku-generator-abe3ad90.js";import{n as F}from"./no-image-7601bee4.js";const B={Red:"Красный",Blue:"Синий",Green:"Зелёный",Yellow:"Жёлтый",Purple:"Фиолетовый",Pink:"Розовый",black:"Чёрный",white:"Белый"};function G(o){const n=Object.keys(B).find(e=>e.toUpperCase().trim()===o.toUpperCase().trim());return n?B[n]:o}const M={class:"cart__item product"},A=["src","alt"],Q={class:"product__content"},Y={class:"product__info-wrap"},H={class:"product__title"},J={class:"product__info product__info--color"},W={class:"product__size"},X={class:"product__code"},Z={class:"product__counter form__counter"},tt={key:0,size:"16 16",symbol:"icon-delete"},et={key:1,size:"12 12",symbol:"icon-minus"},st=["value"],ot={size:"12 12",symbol:"icon-plus"},nt={class:"product__price"},ct={__name:"CartItem",props:["item"],emits:["update:cart","confirm:delete"],setup(o,{emit:n}){const e=o,p=300,u=T(),v=b(e.item.product),r=b(e.item.quantity),y=b(new R({id:v.value.id,color:e.item.color.color.id,size:e.item.size.id}).toString());console.log("product",e.item);let h;function i(){r.value++,d()}function c(){if(r.value>1)r.value--;else{d(!0);return}d()}function d(f=!1){clearTimeout(h),h=setTimeout(()=>{f?w.deleteBasketProduct(e.item.id,u.user.accessKey).then(s=>{console.log("DELETE",s),n("update:cart",s)}):w.changeBasketQuantity(e.item.id,r.value,u.user.accessKey).then(s=>{console.log(s),n("update:cart",s)})},p)}function g(f){var s;return f?(s=f[0])==null?void 0:s.file.url:F}return(f,s)=>{const E=K("RouterLink"),$=O("svg");return a(),l("li",M,[z(E,{class:"product__pic",to:{name:"product",params:{id:o.item.product.id}}},{default:V(()=>[t("img",{src:g(o.item.color.gallery),width:"120",height:"120",alt:o.item.title},null,8,A)]),_:1},8,["to"]),t("div",Q,[t("div",Y,[t("h3",H,_(v.value.title),1),t("p",J,[m(" Цвет: "),t("span",null,[t("i",{style:D(`background-color: ${o.item.color.color.code}`)},null,4),m(" "+_(k(G)(o.item.color.color.title)),1)])]),t("p",W,[m(" Размер: "),t("span",null,_(o.item.size.title),1)]),t("span",X," Артикул: "+_(y.value),1)]),t("div",Z,[t("button",{type:"button","aria-label":"Убрать один товар",onClick:s[0]||(s[0]=U=>c())},[r.value===1?C((a(),l("svg",tt,null,512)),[[$]]):C((a(),l("svg",et,null,512)),[[$]])]),t("input",{type:"text",value:r.value,name:"count"},null,8,st),t("button",{type:"button","aria-label":"Добавить один товар",onClick:s[1]||(s[1]=U=>i())},[C((a(),l("svg",ot,null,512)),[[$]])])])]),t("div",nt,_(v.value.price*r.value)+"₽",1)])}}},it={class:"content container"},rt={class:"content__top"},at={class:"cart"},lt={key:0,class:"cart__form form",action:"#",method:"POST"},ut={class:"cart__field"},dt={class:"cart__list"},_t={class:"cart__block"},mt=t("p",{class:"cart__desc"},"Мы посчитаем стоимость доставки на следующем этапе",-1),pt={class:"cart__price"},vt={key:1},ht=t("h2",null,"Ой, пусто!",-1),ft=t("p",null,[m(" Ваша корзина пуста, откройте каталог "),t("br"),m("и выбирайте лучшие товары с бесплатной доставкой ")],-1),bt=t("br",null,null,-1),$t={__name:"CartView",setup(o){var h;const n=T(),{user:e,cart:p}=P(n);console.log("cart:",p.value);const u=b(!1);(h=e.value)!=null&&h.accessKey&&(u.value=!0,w.getBasket(e.value.accessKey).then(i=>{Object.assign(p,i),n.user=e,u.value=!1}));const v=j(()=>p.value.items.reduce((i,c)=>i+=c.price*c.quantity,0)),r=b([{title:"Каталог",route:{name:"main"}},{title:"Корзина",route:{path:"#"}}]);function y(i){Object.assign(n.cart,i)}return(i,c)=>(a(),l("main",it,[t("div",rt,[z(q,{links:r.value},null,8,["links"])]),t("section",at,[!u.value&&k(n).count>0?(a(),l("form",lt,[t("div",ut,[t("ul",dt,[(a(!0),l(x,null,I(k(n).cart.items,d=>(a(),N(ct,{key:d.id,item:d,"onUpdate:cart":c[0]||(c[0]=g=>y(g))},null,8,["item"]))),128))])]),t("div",_t,[mt,t("p",pt,[m(" Итого: "),t("span",null,_(k(v))+" ₽",1)]),t("button",{class:"cart__button button button--primery",type:"submit",onClick:c[1]||(c[1]=S(()=>i.$router.push({name:"checkout"}),["prevent"]))}," Оформить заказ ")])])):u.value?L("",!0):(a(),l("div",vt,[ht,ft,bt,t("button",{class:"item__button button button--primery",onClick:c[2]||(c[2]=S(d=>i.$router.push({name:"products"}),["prevent"]))}," Начать покупки ")]))])]))}};export{$t as default};
