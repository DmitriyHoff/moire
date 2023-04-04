import{B,r as y,o as l,a as r,h as T,l as E,b as t,t as _,f as m,D as V,u as v,w as g,S as $,E as D,p as K,G as O,c as P,F as U,d as j,j as C,k as x,m as L}from"./index-8967f466.js";import{S as N,_ as R}from"./sku-generator-b4ffe3ec.js";const w={Red:"Красный",Blue:"Синий",Green:"Зелёный",Yellow:"Жёлтый",Purple:"Фиолетовый",Pink:"Розовый",black:"Чёрный",white:"Белый"};function I(e){const n=Object.keys(w).find(c=>c.toUpperCase().trim()===e.toUpperCase().trim());return n?w[n]:e}const q={class:"cart__item product"},F=["src","alt"],G={class:"product__content"},M={class:"product__info-wrap"},A={class:"product__title"},Q={class:"product__info product__info--color"},Y={class:"product__size"},H={class:"product__code"},J={class:"product__counter form__counter"},W={key:0,size:"16 16",symbol:"icon-delete"},X={key:1,size:"12 12",symbol:"icon-minus"},Z=["value"],tt={size:"12 12",symbol:"icon-plus"},et={class:"product__price"},st={__name:"CartItem",props:["item"],emits:["update:cart","confirm:delete"],setup(e,{emit:n}){const c=e,p=300,u=B(),h=y(c.item.product),a=y(c.item.quantity);console.log("product",c.item);let f;function b(){a.value++,s()}function i(){if(a.value>1)a.value--;else{s(!0);return}s()}function s(d=!1){clearTimeout(f),f=setTimeout(()=>{d?$.deleteBasketProduct(c.item.id,u.user.accessKey).then(o=>{console.log("DELETE",o),n("update:cart",o)}):$.changeBasketQuantity(c.item.id,a.value,u.user.accessKey).then(o=>{console.log(o),n("update:cart",o)})},p)}return(d,o)=>{const z=D("RouterLink"),k=K("svg");return l(),r("li",q,[T(z,{class:"product__pic",to:{name:"product",params:{id:e.item.product.id}}},{default:E(()=>[t("img",{src:e.item.color.gallery[0].file.url,width:"120",height:"120",alt:e.item.title},null,8,F)]),_:1},8,["to"]),t("div",G,[t("div",M,[t("h3",A,_(h.value.title),1),t("p",Q,[m(" Цвет: "),t("span",null,[t("i",{style:V(`background-color: ${e.item.color.color.code}`)},null,4),m(" "+_(v(I)(e.item.color.color.title)),1)])]),t("p",Y,[m(" Размер: "),t("span",null,_(e.item.size.title),1)]),t("span",H," Артикул: "+_(new v(N)({id:e.item.product.id,color:e.item.color.color.id,size:e.item.size.id})),1)]),t("div",J,[t("button",{type:"button","aria-label":"Убрать один товар",onClick:o[0]||(o[0]=S=>i())},[a.value===1?g((l(),r("svg",W,null,512)),[[k]]):g((l(),r("svg",X,null,512)),[[k]])]),t("input",{type:"text",value:a.value,name:"count"},null,8,Z),t("button",{type:"button","aria-label":"Добавить один товар",onClick:o[1]||(o[1]=S=>b())},[g((l(),r("svg",tt,null,512)),[[k]])])])]),t("div",et,_(h.value.price*a.value)+"₽",1)])}}},ot={class:"content container"},nt={class:"content__top"},ct={class:"cart"},it={key:0,class:"cart__form form",action:"#",method:"POST"},at={class:"cart__field"},lt={class:"cart__list"},rt={class:"cart__block"},ut=t("p",{class:"cart__desc"},"Мы посчитаем стоимость доставки на следующем этапе",-1),dt={class:"cart__price"},_t={key:1},mt=t("h2",null,"Ой, пусто!",-1),pt=t("p",null,[m(" Ваша корзина пуста, откройте каталог "),t("br"),m("и выбирайте лучшие товары с бесплатной доставкой ")],-1),vt=t("br",null,null,-1),bt={__name:"CartView",setup(e){var b;const n=B(),{user:c,cart:p}=O(n);console.log("cart:",p.value);const u=y(!1);(b=c.value)!=null&&b.accessKey&&(u.value=!0,$.getBasket(c.value.accessKey).then(i=>{Object.assign(p,i),n.user=c,u.value=!1}));const h=P(()=>p.value.items.reduce((i,s)=>i+=s.price*s.quantity,0)),a=y([{title:"Каталог",route:{name:"main"}},{title:"Корзина",route:{path:"#"}}]);function f(i){Object.assign(n.cart,i)}return(i,s)=>(l(),r("main",ot,[t("div",nt,[T(R,{links:a.value},null,8,["links"])]),t("section",ct,[!u.value&&v(n).count>0?(l(),r("form",it,[t("div",at,[t("ul",lt,[(l(!0),r(U,null,j(v(n).cart.items,d=>(l(),L(st,{key:d.id,item:d,"onUpdate:cart":s[0]||(s[0]=o=>f(o))},null,8,["item"]))),128))])]),t("div",rt,[ut,t("p",dt,[m(" Итого: "),t("span",null,_(v(h))+" ₽",1)]),t("button",{class:"cart__button button button--primery",type:"submit",onClick:s[1]||(s[1]=C(()=>i.$router.push({name:"order"}),["prevent"]))}," Оформить заказ ")])])):u.value?x("",!0):(l(),r("div",_t,[mt,pt,vt,t("button",{class:"item__button button button--primery",onClick:s[2]||(s[2]=C(d=>i.$router.push({name:"products"}),["prevent"]))}," Начать покупки ")]))])]))}};export{bt as default};
