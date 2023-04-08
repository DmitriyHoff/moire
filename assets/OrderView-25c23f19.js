import{_ as h}from"./BreadcrumbTrail-471eeca1.js";import{t as m}from"./color-dictionary-be2850f0.js";import{z as y,m as f,h as k,r as l,S as v,o as c,a as _,b as s,j as g,f as n,t,F as b,d as B,l as T,u as $}from"./index-ca4a827e.js";const N={class:"content container"},R={class:"content__top"},S={class:"content__title"},U={key:0,class:"cart"},V={class:"cart__form form",action:"#",method:"POST"},O={class:"cart__field"},C=s("p",{class:"cart__message"}," Благодарим за выбор нашего магазина. На Вашу почту придет письмо с деталями заказа. Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки. ",-1),j={class:"dictionary"},z={class:"dictionary__item"},E=s("span",{class:"dictionary__key"}," Получатель ",-1),F={class:"dictionary__value"},I={class:"dictionary__item"},P=s("span",{class:"dictionary__key"}," Адрес доставки ",-1),q={class:"dictionary__value"},w={class:"dictionary__item"},A=s("span",{class:"dictionary__key"}," Телефон ",-1),D={class:"dictionary__value"},K={class:"dictionary__item"},L=s("span",{class:"dictionary__key"}," Email ",-1),G={class:"dictionary__value"},H={class:"dictionary__item"},J=s("span",{class:"dictionary__key"}," Способ оплаты ",-1),M={class:"dictionary__value"},Q={class:"dictionary__item"},W=s("span",{class:"dictionary__key"}," Статус заказа ",-1),X={class:"dictionary__value"},Y={class:"cart__block"},Z={class:"cart__orders"},x={class:"cart__sku"},ss={class:"cart__total-count"},ts={class:"cart__total"},es={class:"cart__order-price"},os={class:"cart__order-price"},rs={__name:"OrderView",setup(as){const e=y({}),d=f(),u=k(),i=l(!0),r=d.getUser();v.getOrderInfo(u.params.id,r.accessKey).then(o=>{console.log(r),Object.assign(e,o),console.log(o),i.value=!1});const p=l([{title:"Каталог",route:{name:"main"}},{title:"Статус заказа",route:{name:"#"}}]);return(o,cs)=>(c(),_("main",N,[s("div",R,[g(h,{links:p.value},null,8,["links"]),s("h1",S,[n(" Заказ оформлен "),s("span",null,"№ "+t(e.id),1)])]),i.value?T("",!0):(c(),_("section",U,[s("form",V,[s("div",O,[C,s("ul",j,[s("li",z,[E,s("span",F,t(e.name),1)]),s("li",I,[P,s("span",q,t(e.address),1)]),s("li",w,[A,s("span",D,t(e.phone),1)]),s("li",K,[L,s("span",G,t(e.email),1)]),s("li",H,[J,s("span",M,t(e.paymentType),1)]),s("li",Q,[W,s("span",X,[s("strong",null,t(e.status.title),1)])])])]),s("div",Y,[s("ul",Z,[(c(!0),_(b,null,B(e.basket.items,a=>(c(),_("li",{class:"cart__order",key:a.id},[s("h3",null,t(a.product.title),1),s("b",null,t(o.$format.currRUB(a.price)),1),s("p",x,[s("span",null,"Цвет: "+t($(m)(a.product.colors[0].color.title)),1),s("span",null,"Размер: "+t(a.size.title),1)]),s("span",ss,t(a.quantity)+" шт. × "+t(o.$format.currRUB(a.price)),1)]))),128))]),s("div",ts,[s("p",null,t(e.deliveryType.title)+":",1),s("p",es,t(o.$format.currRUB(e.deliveryType.price)),1),s("p",null,[n(" Итого: "),s("b",null,t(e.basket.items.length),1),n(" "+t(o.$format.countText(e.basket.items.length))+" на сумму: ",1)]),s("p",os,t(o.$format.currRUB(e.totalPrice)),1)])])])]))]))}};export{rs as default};
