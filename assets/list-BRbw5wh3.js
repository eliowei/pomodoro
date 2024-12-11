import{p as Q,m as se,i as we,j as Pe,k as Z,b as I,l as ee,e as l,q as z,v as J,M as pe,I as ne,E as ae,x as Fe,y as Re,z as Se,A as Be,B as Te,C as $e,D as De,G as Ee,r as T,H as Le,J as Oe,K as Ae,L as We,N as Me,O as Ne,P as Ue,F as O,Q as G,R as Ke,S as qe,T as je,U as ze,W as He,X as Xe,Y as Ye,Z as Ge,$ as de,a0 as Je,s as Qe,d as Ze,w as E,h as et,o as L,a as m,a1 as ce,c as U,f as fe,g as K,a2 as tt,t as ve,V as j}from"./index-BrLGyxHI.js";import{u as lt}from"./list-DvURn2iV.js";import{b as me,V as X,a as nt}from"./route-block-B8kJsZ-6.js";import{V as at,m as it,u as be,a as ot,b as rt,c as he,d as ge}from"./VInput-CGYMdvuA.js";class ie{constructor(o){let{x:a,y:i,width:t,height:n}=o;this.x=a,this.y=i,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function st(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,n,r,c,v;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),n=+t[0],r=+t[5],c=+t[12],v=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),n=+t[0],r=+t[3],c=+t[4],v=+t[5];else return new ie(o);const f=a.transformOrigin,g=o.x-c-(1-n)*parseFloat(f),h=o.y-v-(1-r)*parseFloat(f.slice(f.indexOf(" ")+1)),k=n?o.width/n:e.offsetWidth+1,b=r?o.height/r:e.offsetHeight+1;return new ie({x:g,y:h,width:k,height:b})}else return new ie(o)}function ut(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const dt="cubic-bezier(0.4, 0, 0.2, 1)",ct=Q({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...se(),...we({transition:{component:Pe}})},"VCounter"),ft=Z()({name:"VCounter",functional:!0,props:ct(),setup(e,o){let{slots:a}=o;const i=I(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>l(pe,{transition:e.transition},{default:()=>[z(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[J,e.active]])]})),{}}}),vt=Q({floating:Boolean,...se()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:vt(),setup(e,o){let{slots:a}=o;return ee(()=>l(at,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),mt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=Q({appendInnerIcon:ne,bgColor:String,clearable:Boolean,clearIcon:{type:ne,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ne,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>mt.includes(e)},"onClick:clear":ae(),"onClick:appendInner":ae(),"onClick:prependInner":ae(),...se(),...Fe(),...Re(),...Se()},"VField"),Ce=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...it(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const{themeClasses:n}=Be(e),{loaderClasses:r}=Te(e),{focusClasses:c,isFocused:v,focus:f,blur:g}=be(e),{InputIcon:h}=ot(e),{roundedClasses:k}=$e(e),{rtlClasses:b}=De(),p=I(()=>e.dirty||e.active),x=I(()=>!e.singleLine&&!!(e.label||t.label)),F=Ee(),s=I(()=>e.id||`input-${F}`),u=I(()=>`${s.value}-messages`),$=T(),V=T(),H=T(),d=I(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:w,backgroundColorStyles:P}=Le(Oe(e,"bgColor")),{textColorClasses:R,textColorStyles:te}=Ae(I(()=>e.error||e.disabled?void 0:p.value&&v.value?e.color:e.baseColor));We(p,y=>{if(x.value){const C=$.value.$el,S=V.value.$el;requestAnimationFrame(()=>{const B=st(C),_=S.getBoundingClientRect(),q=_.x-B.x,W=_.y-B.y-(B.height/2-_.height/2),M=_.width/.75,N=Math.abs(M-B.width)>1?{maxWidth:je(M)}:void 0,Ve=getComputedStyle(C),ue=getComputedStyle(S),_e=parseFloat(Ve.transitionDuration)*1e3||150,Ie=parseFloat(ue.getPropertyValue("--v-field-label-scale")),ke=ue.getPropertyValue("color");C.style.visibility="visible",S.style.visibility="hidden",ut(C,{transform:`translate(${q}px, ${W}px) scale(${Ie})`,color:ke,...N},{duration:_e,easing:dt,direction:y?"normal":"reverse"}).finished.then(()=>{C.style.removeProperty("visibility"),S.style.removeProperty("visibility")})})}},{flush:"post"});const A=I(()=>({isActive:p,isFocused:v,controlRef:H,blur:g,focus:f}));function le(y){y.target!==document.activeElement&&y.preventDefault()}function D(y){var C;y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),y.stopPropagation(),(C=e["onClick:clear"])==null||C.call(e,new MouseEvent("click")))}return ee(()=>{var q,W,M;const y=e.variant==="outlined",C=!!(t["prepend-inner"]||e.prependInnerIcon),S=!!(e.clearable||t.clear),B=!!(t["append-inner"]||e.appendInnerIcon||S),_=()=>t.label?t.label({...A.value,label:e.label,props:{for:s.value}}):e.label;return l("div",G({class:["v-field",{"v-field--active":p.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!d.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":C,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!_(),[`v-field--variant-${e.variant}`]:!0},n.value,w.value,c.value,r.value,k.value,b.value,e.class],style:[P.value,e.style],onClick:le},a),[l("div",{class:"v-field__overlay"},null),l(Me,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),C&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(h,{key:"prepend-icon",name:"prependInner"},null),(q=t["prepend-inner"])==null?void 0:q.call(t,A.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&x.value&&l(Y,{key:"floating-label",ref:V,class:[R.value],floating:!0,for:s.value,style:te.value},{default:()=>[_()]}),x.value&&l(Y,{key:"label",ref:$,for:s.value},{default:()=>[_()]}),(W=t.default)==null?void 0:W.call(t,{...A.value,props:{id:s.value,class:"v-field__input","aria-describedby":u.value},focus:f,blur:g})]),S&&l(Ne,{key:"clear"},{default:()=>[z(l("div",{class:"v-field__clearable",onMousedown:N=>{N.preventDefault(),N.stopPropagation()}},[l(Ue,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...A.value,props:{onKeydown:D,onFocus:f,onBlur:g,onClick:e["onClick:clear"]}}):l(h,{name:"clear",onKeydown:D,onFocus:f,onBlur:g},null)]})]),[[J,e.dirty]])]}),B&&l("div",{key:"append",class:"v-field__append-inner"},[(M=t["append-inner"])==null?void 0:M.call(t,A.value),e.appendInnerIcon&&l(h,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",R.value],style:te.value},[y&&l(O,null,[l("div",{class:"v-field__outline__start"},null),x.value&&l("div",{class:"v-field__outline__notch"},[l(Y,{ref:V,floating:!0,for:s.value},{default:()=>[_()]})]),l("div",{class:"v-field__outline__end"},null)]),d.value&&x.value&&l(Y,{ref:V,floating:!0,for:s.value},{default:()=>[_()]})])])}),{controlRef:H}}});function ht(e){const o=Object.keys(Ce.props).filter(a=>!Ke(a)&&a!=="class"&&a!=="style");return qe(e,o)}const oe=Symbol("Forwarded refs");function re(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function gt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[oe]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,n)){const c=Reflect.get(r.value,n);return typeof c=="function"?c.bind(r.value):c}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(t,n,r){if(Reflect.has(t,n))return Reflect.set(t,n,r);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const c of a)if(c.value&&Reflect.has(c.value,n))return Reflect.set(c.value,n,r);return!1},getOwnPropertyDescriptor(t,n){var c;const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const v of a){if(!v.value)continue;const f=re(v.value,n)??("_"in v.value?re((c=v.value._)==null?void 0:c.setupState,n):void 0);if(f)return f}for(const v of a){const f=v.value&&v.value[oe];if(!f)continue;const g=f.slice();for(;g.length;){const h=g.shift(),k=re(h.value,n);if(k)return k;const b=h.value&&h.value[oe];b&&g.push(...b)}}}}})}const yt=["color","file","time","date","datetime-local","week","month"],bt=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...rt(),...xe()},"VTextField"),ye=Z()({name:"VTextField",directives:{Intersect:ze},inheritAttrs:!1,props:bt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const n=He(e,"modelValue"),{isFocused:r,focus:c,blur:v}=be(e),f=I(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),g=I(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=I(()=>["plain","underlined"].includes(e.variant));function k(d,w){var P,R;!e.autofocus||!d||(R=(P=w[0].target)==null?void 0:P.focus)==null||R.call(P)}const b=T(),p=T(),x=T(),F=I(()=>yt.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function s(){var d;x.value!==document.activeElement&&((d=x.value)==null||d.focus()),r.value||c()}function u(d){i("mousedown:control",d),d.target!==x.value&&(s(),d.preventDefault())}function $(d){s(),i("click:control",d)}function V(d){d.stopPropagation(),s(),de(()=>{n.value=null,Je(e["onClick:clear"],d)})}function H(d){var P;const w=d.target;if(n.value=w.value,(P=e.modelModifiers)!=null&&P.trim&&["text","search","password","tel","url"].includes(e.type)){const R=[w.selectionStart,w.selectionEnd];de(()=>{w.selectionStart=R[0],w.selectionEnd=R[1]})}}return ee(()=>{const d=!!(t.counter||e.counter!==!1&&e.counter!=null),w=!!(d||t.details),[P,R]=Xe(a),{modelValue:te,...A}=he.filterProps(e),le=ht(e);return l(he,G({ref:b,modelValue:n.value,"onUpdate:modelValue":D=>n.value=D,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":h.value},e.class],style:e.style},P,A,{centerAffix:!h.value,focused:r.value}),{...t,default:D=>{let{id:y,isDisabled:C,isDirty:S,isReadonly:B,isValid:_}=D;return l(Ce,G({ref:p,onMousedown:u,onClick:$,"onClick:clear":V,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},le,{id:y.value,active:F.value||S.value,dirty:S.value||e.dirty,disabled:C.value,focused:r.value,error:_.value===!1}),{...t,default:q=>{let{props:{class:W,...M}}=q;const N=z(l("input",G({ref:x,value:n.value,onInput:H,autofocus:e.autofocus,readonly:B.value,disabled:C.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:v},M,R),null),[[Ye("intersect"),{handler:k},null,{once:!0}]]);return l(O,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:W,"data-no-activator":""},[t.default(),N]):Ge(N,{class:W}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:w?D=>{var y;return l(O,null,[(y=t.details)==null?void 0:y.call(t,D),d&&l(O,null,[l("span",null,null),l(ft,{active:e.persistentCounter||r.value,value:f.value,max:g.value,disabled:e.disabled},t.counter)])])}:void 0})}),gt({},b,p,x)}}),xt={key:0},Ct={__name:"list",setup(e){const o=lt(),{addItem:a,editItem:i,delItem:t,cancelEditItem:n,confirmEditItem:r,delFinishedItem:c}=o,{items:v,finishedItems:f}=Qe(o),g=T(""),h=T(null),k=T([]),b={required:F=>!!F||"欄位必填",length:F=>F.length>=3||"必須三個字以上"},p=()=>{console.log(h.value.isValid),h.value.isValid&&(a(g.value),h.value.reset())},x=(F,s)=>{k.value[s].isValid&&r(F)};return(F,s)=>(L(),Ze(et,null,{default:E(()=>[l(nt,null,{default:E(()=>[l(X,{cols:"12"},{default:E(()=>s[1]||(s[1]=[m("h1",{class:"text-center"},"未完成",-1)])),_:1}),l(X,{cols:"12"},{default:E(()=>[l(ye,{ref_key:"inputTextField",ref:h,modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=u=>g.value=u),"append-icon":"mdi-plus",label:"新增事項",clearable:"",rules:[b.required,b.length],onKeydown:ce(p,["enter"]),"onClick:append":p},null,8,["modelValue","rules"]),l(ge,null,{default:E(()=>[s[2]||(s[2]=m("thead",null,[m("tr",null,[m("th",null,"事項"),m("th",null,"操作")])],-1)),m("tbody",null,[(L(!0),U(O,null,fe(K(v),(u,$)=>(L(),U("tr",{key:u.id},[m("td",null,[z(l(ye,{ref_for:!0,ref_key:"editTextField",ref:k,modelValue:u.model,"onUpdate:modelValue":V=>u.model=V,rules:[b.required,b.length],autofocus:"",onKeydown:ce(V=>x(u.id,$),["enter"])},null,8,["modelValue","onUpdate:modelValue","rules","onKeydown"]),[[J,u.edit]]),z(m("span",null,ve(u.text),513),[[J,!u.edit]])]),m("td",null,[u.edit?(L(),U(O,{key:0},[l(j,{icon:"mdi-check",onClick:V=>x(u.id,$)},null,8,["onClick"]),l(j,{icon:"mdi-undo",onClick:V=>K(n)(u.id)},null,8,["onClick"])],64)):(L(),U(O,{key:1},[l(j,{icon:"mdi-pencil",onClick:V=>K(i)(u.id)},null,8,["onClick"]),l(j,{icon:"mdi-delete",onClick:V=>K(t)(u.id)},null,8,["onClick"])],64))])]))),128))])]),_:1})]),_:1}),l(X,{cols:"12"},{default:E(()=>s[3]||(s[3]=[m("h1",{class:"text-center"},"已完成",-1)])),_:1}),l(X,{cols:"12"},{default:E(()=>[l(ge,null,{default:E(()=>[s[5]||(s[5]=m("thead",null,[m("tr",null,[m("th",null,"事項"),m("th",null,"操作")])],-1)),m("tbody",null,[K(f).length===0?(L(),U("tr",xt,s[4]||(s[4]=[m("td",{coolspan:"2"},"沒有項目",-1)]))):tt("",!0),(L(!0),U(O,null,fe(K(f),u=>(L(),U("tr",{key:u.id},[m("td",null,ve(u.text),1),m("td",null,[l(j,{icon:"mdi-delete",onClick:$=>K(c)(u.id)},null,8,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof me=="function"&&me(Ct);export{Ct as default};
