import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{o,a,b as l,c as m,F as p,d as f,w as v,C as g,u as _,i as h,n as y,D as V}from"./index-57796af3.js";const b={},k={class:"loader-wrap"},x=l("span",{class:"loader"},null,-1),$=[x];function P(r,t){return o(),a("div",k,$)}const D=i(b,[["render",P]]),w={class:"colors"},B={class:"colors__label"},C=["value"],F={__name:"ProductColors",props:["colors","modelValue"],emits:["update:modelValue"],setup(r,{emit:t}){const d=r,e=m({get(){return d.modelValue},set(c){t("update:modelValue",c)}});return(c,n)=>(o(),a("ul",w,[(o(!0),a(p,null,f(r.colors,s=>(o(),a("li",{key:s.id,class:"colors__item"},[l("label",B,[v(l("input",{class:"colors__radio sr-only",type:"radio",name:"color-1",value:s.id,"onUpdate:modelValue":n[0]||(n[0]=u=>h(e)?e.value=u:null)},null,8,C),[[g,_(e)]]),l("span",{class:y(["colors__value",_(e)===s.id?"colors--black":""]),style:V(`background-color: ${s.color.code}; `)},null,6)])]))),128))]))}},R="/moire/assets/no-image-00277bfe.svg";export{D as P,F as _,R as n};
