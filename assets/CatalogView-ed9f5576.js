import{r as g,c as k,S as x,o as i,a as _,b as e,w as V,v as M,u as f,i as I,F as b,d as y,t as $,e as q,f as U,g as R,h as v,j as C,k as w,l as S,R as T,m as B,n as F,p as L,q as z,s as D,x as E}from"./index-57796af3.js";import{n as N,_ as j,P as A}from"./no-image-f268997b.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={class:"form__block"},G=e("legend",{class:"form__legend"},"Категория",-1),H={class:"form__label form__label--select"},J=e("option",{value:"0"},"Все категории",-1),K=["value"],Q={__name:"FilterCategory",props:["modelValue"],emits:["update:modelValue"],setup(o,{emit:d}){const l=o,a=g(),n=k({get(){return l.modelValue},set(s){d("update:modelValue",s)}});return x.getProductCategories().then(s=>a.value=s),(s,r)=>(i(),_("fieldset",O,[G,e("label",H,[V(e("select",{class:"form__select",name:"category","onUpdate:modelValue":r[0]||(r[0]=t=>I(n)?n.value=t:null)},[J,(i(!0),_(b,null,y(a.value,t=>(i(),_("option",{value:t.id,key:t.id},$(t.title),9,K))),128))],512),[[M,f(n)]])])]))}},W={class:"form__block"},X=e("legend",{class:"form__legend"},"Цена",-1),Y={class:"form__label form__label--price"},Z=["value"],ee=e("span",{class:"form__value"},"От",-1),te={class:"form__label form__label--price"},se=["value"],le=e("span",{class:"form__value"},"До",-1),ae={__name:"FilterPrice",props:["priceFrom","priceTo"],emits:["update:priceFrom","update:priceTo"],setup(o){return(d,l)=>(i(),_("fieldset",W,[X,e("label",Y,[e("input",{class:"form__input",type:"text",name:"min-price",autocomplete:"off",value:o.priceFrom,onInput:l[0]||(l[0]=a=>d.$emit("update:priceFrom",a.target.value))},null,40,Z),ee]),e("label",te,[e("input",{class:"form__input",type:"text",name:"max-price",autocomplete:"off",value:o.priceTo,onInput:l[1]||(l[1]=a=>d.$emit("update:priceTo",a.target.value))},null,40,se),le])]))}},oe={class:"form__block"},ne=e("legend",{class:"form__legend"},"Материал",-1),ie={class:"check-list"},re={class:"check-list__label"},ue=["value"],ce={class:"check-list__desc"},_e={__name:"FilterMaterial",props:["modelValue"],emits:["update:modelValue"],setup(o,{emit:d}){const l=o,a=g([]),n=k({get(){return l.modelValue},set(s){d("update:modelValue",s)}});return x.getMaterials().then(s=>a.value=s),(s,r)=>(i(),_("fieldset",oe,[ne,e("ul",ie,[(i(!0),_(b,null,y(a.value,t=>(i(),_("li",{key:t.id,class:"check-list__item"},[e("label",re,[V(e("input",{class:"check-list__check sr-only",type:"checkbox",name:"material",value:t.id,"onUpdate:modelValue":r[0]||(r[0]=u=>I(n)?n.value=u:null)},null,8,ue),[[q,f(n)]]),e("span",ce,[U($(t.title),1),e("span",null,"("+$(t.productsCount)+")",1)])])]))),128))])]))}},de={class:"form__block"},pe=e("legend",{class:"form__legend"},"Коллекция",-1),me={class:"check-list"},ge={class:"check-list__label"},ve=["value"],fe={class:"check-list__desc"},$e={__name:"FilterSeasons",props:["modelValue"],emits:["update:modelValue"],setup(o,{emit:d}){const l=o,a=g([]),n=k({get(){return l.modelValue},set(s){d("update:modelValue",s)}});return x.getSeasons().then(s=>a.value=s),(s,r)=>(i(),_("fieldset",de,[pe,e("ul",me,[(i(!0),_(b,null,y(a.value,t=>(i(),_("li",{key:t.id,class:"check-list__item"},[e("label",ge,[V(e("input",{class:"check-list__check sr-only",type:"checkbox",name:"collection",value:t.id,"onUpdate:modelValue":r[0]||(r[0]=u=>I(n)?n.value=u:null)},null,8,ve),[[q,f(n)]]),e("span",fe,[U($(t.title)+" ",1),e("span",null,"("+$(t.productsCount)+")",1)])])]))),128))])]))}},he={class:"filter"},ke={class:"filter__form form",action:"#",method:"get"},be={__name:"FilterForm",setup(o){const d=R(),l=g(!1),a=g(0),n=g(0),s=g(0),r=g([]),t=g([]),u=k(()=>({...a.value>0?{minPrice:a.value}:{},...n.value>0?{maxPrice:n.value}:{},...s.value>0?{categoryId:s.value}:{},...r.value.length>0?{"materialIds[]":r.value}:{},...t.value.length>0?{"seasonIds[]":t.value}:{}}));function p(){a.value=0,n.value=0,s.value=0,r.value=[],t.value=[],l.value=!1,d.replace({query:u.value})}function h(P=!0){l.value=P}return(P,c)=>(i(),_("aside",he,[e("form",ke,[v(ae,{priceFrom:a.value,"onUpdate:priceFrom":c[0]||(c[0]=m=>a.value=m),priceTo:n.value,"onUpdate:priceTo":c[1]||(c[1]=m=>n.value=m),onInput:c[2]||(c[2]=m=>h())},null,8,["priceFrom","priceTo"]),v(Q,{modelValue:s.value,"onUpdate:modelValue":c[3]||(c[3]=m=>s.value=m),onChange:c[4]||(c[4]=m=>h())},null,8,["modelValue"]),v(_e,{modelValue:r.value,"onUpdate:modelValue":c[5]||(c[5]=m=>r.value=m),onChange:c[6]||(c[6]=m=>h())},null,8,["modelValue"]),v($e,{modelValue:t.value,"onUpdate:modelValue":c[7]||(c[7]=m=>t.value=m),onChange:c[8]||(c[8]=m=>h())},null,8,["modelValue"]),e("button",{class:"filter__submit button button--primery",type:"submit",onClick:c[9]||(c[9]=C(m=>P.$router.replace({query:f(u)}),["prevent"]))}," Применить "),l.value?(i(),_("button",{key:0,class:"filter__reset button button--second",type:"button",onClick:c[10]||(c[10]=C(m=>p(),["prevent"]))}," Сбросить ")):w("",!0)])]))}},Ve={class:"catalog__item"},ye=["src","alt"],Ce={class:"catalog__item-content"},xe={class:"catalog__title"},Pe={class:"catalog__price"},Fe={__name:"CatalogItem",props:["product"],setup(o){return(d,l)=>(i(),_("li",Ve,[v(f(T),{class:"catalog__pic",to:{name:"product",params:{id:o.product.id},state:{title:o.product.title}}},{default:S(()=>[e("img",{src:o.product.colors[0].gallery?o.product.colors[0].gallery[0].file.url:f(N),alt:o.product.title},null,8,ye)]),_:1},8,["to"]),e("div",Ce,[e("h3",xe,[v(f(T),{to:{name:"product",params:{id:o.product.id},meta:{title:o.product.title}}},{default:S(()=>[U($(o.product.title),1)]),_:1},8,["to"])]),e("span",Pe,$(o.product.price)+" ₽ ",1),v(j,{colors:o.product.colors},null,8,["colors"])])]))}},we={class:"catalog__list"},Ie={__name:"CatalogList",props:["products"],setup(o){return(d,l)=>(i(),_("ul",we,[(i(!0),_(b,null,y(o.products,a=>(i(),B(Fe,{product:a,key:a.id},null,8,["product"]))),128))]))}},Ue={class:"catalog__pagination pagination"},Se={class:"pagination__item"},Te={symbol:"icon-arrow-left",size:"0 0 8 14"},qe={class:"pagination__item"},Be={symbol:"icon-arrow-right",size:"0 0 8 14"},Me={__name:"CatalogPagination",props:["page","count","perPage"],emits:["pagination"],setup(o,{emit:d}){const l=o,a=k(()=>l.page<l.count),n=k(()=>l.page>1);function s(r){let t;if(r==="next"){if(l.page===l.count)return;t=l.page+1}else if(r==="prev"){if(l.page===1)return;t=l.page-1}else t=r;d("pagination",t)}return(r,t)=>{const u=L("svg");return i(),_("ul",Ue,[e("li",Se,[e("a",{class:F(["pagination__link pagination__link--arrow",f(n)?"":"pagination__link--disabled"]),"aria-label":"Предыдущая страница",onClick:t[0]||(t[0]=C(p=>s("prev"),["prevent"]))},[V((i(),_("svg",Te,null,512)),[[u]])],2)]),(i(!0),_(b,null,y(o.count,p=>(i(),_("li",{class:"pagination__item",key:p},[e("a",{class:F(["pagination__link",{"pagination__link--current":p===o.page}])},$(p),3)]))),128)),e("li",qe,[e("a",{class:F(["pagination__link pagination__link--arrow",f(a)?"":"pagination__link--disabled"]),href:"#","aria-label":"Следующая страница",onClick:t[1]||(t[1]=C(p=>s("next"),["prevent"]))},[V((i(),_("svg",Be,null,512)),[[u]])],2)])])}}},Re={key:1,class:"content container"},Le={class:"content__top"},ze={class:"content__row"},De=e("h1",{class:"content__title"},"Каталог",-1),Ee={class:"content__info"},Ne={class:"content__catalog"},je={class:"catalog"},He={__name:"CatalogView",setup(o){const d=g(!0),l=g({}),a=g(12),n=z({page:1,pages:1,total:0}),s=D();E(()=>({params:s.params,query:s.query}),r),r();function r(){s.params.limit&&s.params.page&&(a.value=parseInt(s.params.limit),n.page=parseInt(s.params.page)),x.getProducts({page:n.page,limit:a.value},s.query).then(u=>{console.log(u),d.value=!0,l.value=u.items,Object.assign(n,u.pagination),d.value=!1})}const t=k(()=>{const u=n.total%100;let p="";return u>=10&&u<=20?p="товаров":u%10===1?p="товар":u%10>1&&u%10<5?p="товара":p="товаров",`${u} ${p}`});return(u,p)=>(i(),_(b,null,[d.value?(i(),B(A,{key:0})):w("",!0),d.value?w("",!0):(i(),_("main",Re,[e("div",Le,[e("div",ze,[De,e("span",Ee,$(f(t)),1)])]),e("div",Ne,[v(be),e("section",je,[v(Ie,{products:l.value},null,8,["products"]),v(Me,{page:n.page,count:n.pages,perPage:a.value,onPagination:p[0]||(p[0]=h=>u.$router.push({name:"products:limit",params:{limit:a.value,page:h}}))},null,8,["page","count","perPage"])])])]))],64))}};export{He as default};
