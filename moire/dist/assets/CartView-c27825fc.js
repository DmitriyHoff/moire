import{o as s,a as e,z as n,b as t,F as _,d as i,f as l,h as u}from"./index-b26405f2.js";const d="/moire/assets/product-square-4-ef6628ce.jpg",p={class:"cart__item product"},h=n('<div class="product__pic"><img src="'+d+'" width="120" height="120" alt="Название товара"></div><h3 class="product__title">Базовая хлопковая футболка</h3><p class="product__info product__info--color"> Цвет: <span><i style="background-color:#ff9b78;"></i> Персиковый </span></p><span class="product__code"> Артикул: 1501230 </span><div class="product__counter form__counter"><button type="button" aria-label="Убрать один товар"><svg width="10" height="10" fill="currentColor"><use xlink:href="#icon-minus"></use></svg></button><input type="text" value="1" name="count"><button type="button" aria-label="Добавить один товар"><svg width="10" height="10" fill="currentColor"><use xlink:href="#icon-plus"></use></svg></button></div><b class="product__price"> 990 ₽ </b><button class="product__del button-del" type="button" aria-label="Удалить товар из корзины"><svg width="20" height="20" fill="currentColor"><use xlink:href="#icon-close"></use></svg></button>',7),b=[h],m={__name:"CartItem",props:"item",setup(o){return(c,r)=>(s(),e("li",p,b))}},f={class:"content container"},g=t("div",{class:"content__top"},null,-1),v={class:"cart"},k={class:"cart__form form",action:"#",method:"POST"},x={class:"cart__field"},y={class:"cart__list"},w=t("div",{class:"cart__block"},[t("p",{class:"cart__desc"},"Мы посчитаем стоимость доставки на следующем этапе"),t("p",{class:"cart__price"},[l("Итого: "),t("span",null,"4 070 ₽")]),t("button",{class:"cart__button button button--primery",type:"submit"},"Оформить заказ")],-1),V={__name:"CartView",setup(o){return(c,r)=>(s(),e("main",f,[g,t("section",v,[t("form",k,[t("div",x,[t("ul",y,[(s(),e(_,null,i(3,a=>u(m,{key:a})),64))])]),w])])]))}};export{V as default};
