import{c as $,r as v,x as D,o as i,a as c,b as e,F as P,d as w,u as _,p as z,k as V,f as b,t as g,y as L,z as O,w as y,v as T,i as U,A as q,q as M,h as R,B as j,S as x,j as h,l as S,n as E}from"./index-0e1dcb84.js";import{_ as F,S as H}from"./sku-generator-5716a652.js";import{_ as K,P as G}from"./ProductColors-e4da63ef.js";import{n as J}from"./no-image-7601bee4.js";import"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"item__pics pics"},W={class:"pics__wrapper"},X=["src","hidden"],Y={class:"pics__list"},Z=["src","alt","onClick"],ee={__name:"ProductGallery",props:["colors","selected","loading"],setup(m){const r=m,n=$(function(){return r.colors}),s=v(0);D(()=>r.selected,()=>{s.value=r.colors.findIndex(t=>t.id===r.selected)});function o(t){var l;return t?(l=t[0])==null?void 0:l.file.url:J}return(t,l)=>(i(),c("div",Q,[e("div",W,[(i(!0),c(P,null,w(_(n),(a,u)=>(i(),c("img",{key:a.id,width:"570",height:"570",src:o(_(n)[s.value].gallery),alt:"Название товара",ref_for:!0,ref:"img",hidden:s.value!==u},null,8,X))),128))]),e("ul",Y,[(i(!0),c(P,null,w(_(n),(a,u)=>(i(),c("li",{key:a.id,class:"pics__item"},[e("a",{href:"",class:z(["pics__link",u===s.value?"pics__link--current":""])},[e("img",{class:"pics__image",width:"98",height:"98",src:o(a.gallery),alt:a.color.title,onClick:V(k=>s.value=u,["prevent"])},null,8,Z)],2)]))),128))])]))}},te={class:"item__desc"},se={class:"tabs"},le={class:"tabs__item"},oe={class:"tabs__item"},ne=["hidden"],ae=O("<h3>Состав:</h3><p> 60% хлопок<br> 30% полиэстер<br></p><h3>Уход:</h3><p> Машинная стирка при макс. 30ºC короткий отжим<br> Гладить при макс. 110ºC<br> Не использовать машинную сушку<br> Отбеливать запрещено<br> Не подвергать химчистке<br></p>",4),ie=[ae],ce=["hidden"],re=e("h3",null,"Доставка:",-1),ue=e("p",null,[b(" 1. Курьерская доставка по Москве и Московской области – 290 ₽"),e("br"),b(" 2. Самовывоз из магазина. Список и адреса магазинов Вы можете посмотреть здесь"),e("br")],-1),de=e("h3",null,"Возврат:",-1),_e=e("br",null,null,-1),me=e("br",null,null,-1),ve=e("br",null,null,-1),pe={__name:"ProductInfo",setup(m){const r=v("about");function n(o){return r.value===o}function s(o){r.value=o}return(o,t)=>(i(),c("div",te,[e("ul",se,[e("li",le,[e("a",{class:z(["tabs__link",{"tabs__link--current":n("about")}]),onClick:t[0]||(t[0]=V(l=>s("about"),["prevent"]))}," Информация о товаре ",2)]),e("li",oe,[e("a",{class:z(["tabs__link",{"tabs__link--current":n("delivery")}]),onClick:t[1]||(t[1]=V(l=>s("delivery"),["prevent"]))}," Доставка и возврат ",2)])]),e("div",{class:"item__content",hidden:!n("about")},ie,8,ne),e("div",{class:"item__content",hidden:!n("delivery")},[re,ue,de,e("p",null,[b(" Любой возврат должен быть осуществлен в течение Возвраты в магазине БЕСПЛАТНО."),_e,b(" Вы можете вернуть товары в любой магазин. Магазин должен быть расположен в стране, в которой Вы осуществили покупку. БЕСПЛАТНЫЙ возврат в Пункт выдачи заказов."),me,b(" Для того чтобы вернуть товар в одном из наших Пунктов выдачи заказов, позвоните по телефону "+g(_(L)),1),ve])],8,ce)]))}},he=["value"],fe={__name:"ProductSizeSelect",props:["sizeList","modelValue"],emits:["update:modelValue"],setup(m,{emit:r}){const n=m,s=$({get(){return n.modelValue},set(o){r("update:modelValue",o)}});return(o,t)=>y((i(),c("select",{class:"form__select",name:"category","onUpdate:modelValue":t[0]||(t[0]=l=>U(s)?s.value=l:null)},[(i(!0),c(P,null,w(m.sizeList,l=>(i(),c("option",{value:l.id,key:l.id},g(l.title),9,he))),128))],512)),[[T,_(s)]])}},be={class:"form__counter"},ge={symbol:"icon-minus",size:"12 12"},$e={symbol:"icon-plus",size:"12 12"},ke={__name:"ProductCounter",props:["modelValue"],emits:["update:modelValue"],setup(m,{emit:r}){const n=m,s=$({get(){return n.modelValue},set(l){r("update:modelValue",l)}});function o(){s.value+=1}function t(){s.value!==1&&(s.value-=1)}return(l,a)=>{const u=M("svg");return i(),c("div",be,[e("button",{type:"button","aria-label":"Убрать один товар",onClick:t},[y((i(),c("svg",ge,null,512)),[[u]])]),y(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=k=>U(s)?s.value=k:null),name:"count"},null,512),[[q,_(s)]]),e("button",{type:"button","aria-label":"Добавить один товар",onClick:o},[y((i(),c("svg",$e,null,512)),[[u]])])])}}},ye={class:"content container"},Ve={key:0,class:"content__top"},Ce={key:2,class:"item"},Se={class:"item__info"},Pe={class:"item__code"},we={class:"item__title"},ze={class:"item__form"},Ie={class:"form",action:"#",method:"POST"},xe={class:"item__row item__row--center"},Ue={class:"item__price"},Be={class:"item__row"},Ne={class:"form__block"},Ae=e("legend",{class:"form__legend"},"Цвет",-1),De={class:"form__block"},Le=e("legend",{class:"form__legend"},"Размер",-1),Oe={class:"form__label form__label--small form__label--select"},Te=["onClick"],Fe={__name:"ProductView",emits:["loadingStart","loadingComplete"],setup(m,{emit:r}){const n=R(),s=j(),o=v(!0),t=v({}),l=v(),a=v(),u=v(1),k=$(()=>t.value&&a.value&&l.value?H.get({id:t.value.id,color:a.value,size:l.value}):""),I=v([]),C=$(function(){return t.value.colors||[]});B();async function B(){o.value=!0,r("loadingStart"),t.value=await x.getProductById(n.params.id),I.value=[{title:"Каталог",route:{name:"main"}},{title:t.value.category.title,route:{name:"products",query:{categoryId:t.value.category.id},meta:{title:t.value.category.title}}},{title:t.value.title,route:{path:"#"}}],l.value=t.value.sizes[0].id,a.value=t.value.colors[0].id,n.meta.title=t.value.title,document.title=n.meta.title,o.value=!1,r("loadingComplete")}function N(){var p;x.addProductToBasket({productId:t.value.id,colorId:A(a.value),sizeId:l.value,quantity:u.value},(p=s.getUser())==null?void 0:p.accessKey).then(d=>{console.log(d),Object.assign(s.cart,d),s.setUser(s.cart.user)})}function A(p){return C.value.find(d=>d.id===p).color.id}return(p,d)=>(i(),c("main",ye,[o.value?S("",!0):(i(),c("div",Ve,[h(F,{links:I.value},null,8,["links"])])),o.value?(i(),E(G,{key:1})):S("",!0),o.value?S("",!0):(i(),c("section",Ce,[h(ee,{colors:_(C),selected:a.value,loading:o.value},null,8,["colors","selected","loading"]),e("div",Se,[e("span",Pe,"Артикул: "+g(_(k)),1),e("h2",we,g(t.value.title),1),e("div",ze,[e("form",Ie,[e("div",xe,[h(ke,{modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=f=>u.value=f)},null,8,["modelValue"]),e("b",Ue,g(p.$format.currRUB(t.value.price*u.value)),1)]),e("div",Be,[e("fieldset",Ne,[Ae,h(K,{colors:_(C),modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=f=>a.value=f)},null,8,["colors","modelValue"])]),e("fieldset",De,[Le,e("label",Oe,[h(fe,{"size-list":t.value.sizes,modelValue:l.value,"onUpdate:modelValue":d[2]||(d[2]=f=>l.value=f)},null,8,["size-list","modelValue"])])])]),e("button",{class:"item__button button button--primery",type:"submit",onClick:V(N,["prevent"])}," В корзину ",8,Te)])])]),h(pe)]))]))}};export{Fe as default};
