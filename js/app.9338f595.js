(function(t){function e(e){for(var i,u,o=e[0],a=e[1],l=e[2],s=0,p=[];s<o.length;s++)u=o[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(i=!1)}i&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},r={app:0},c=[];function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/IsaacCraftingSimSite/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"07e6":function(t,e,n){"use strict";n("f867")},"912b":function(t,e){t.exports="data:image/png;base64,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"},be9c:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r={style:{display:"flex"}},c={style:{display:"flex"}},u=Object(i["d"])("div",null,null,-1);function o(t,e,n,o,a,l){var d=Object(i["h"])("pickup-recipe-vue"),s=Object(i["h"])("pickup-counter"),p=Object(i["h"])("craftable-items");return Object(i["f"])(),Object(i["c"])("div",r,[Object(i["d"])("div",null,[Object(i["d"])("div",c,[Object(i["d"])(d,{idList:t.craftingBag},null,8,["idList"]),Object(i["d"])("button",{onClick:e[1]||(e[1]=function(){return t.resetBag&&t.resetBag.apply(t,arguments)})},"Reset")]),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(t.pickupCounters,(function(e){return Object(i["f"])(),Object(i["c"])("div",{key:e,style:{display:"flex","padding-top":"30px"}},[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(e,(function(e){return Object(i["f"])(),Object(i["c"])(s,{key:e,idx:e,onAddBag:t.addBag,onCountChanged:t.countChanged,ref:t.pickupCounter},null,8,["idx","onAddBag","onCountChanged"])})),128))])})),128)),Object(i["d"])("button",{onClick:e[2]||(e[2]=function(){return t.resetAll&&t.resetAll.apply(t,arguments)})},"Reset All")]),Object(i["d"])(p,{pickupCounts:t.pickupCounts},null,8,["pickupCounts"]),u])}var a=n("2909"),l=(n("99af"),n("159b"),{style:{width:"64px",height:"32px",display:"grid","grid-template-rows":"16px 16px","grid-template-columns":"16px 16px 16px 16px"}});function d(t,e,n,r,c,u){var o=Object(i["h"])("pickup-icon");return Object(i["f"])(),Object(i["c"])("div",l,[Object(i["d"])(o,{idx:t.ids[0]},null,8,["idx"]),Object(i["d"])(o,{idx:t.ids[1]},null,8,["idx"]),Object(i["d"])(o,{idx:t.ids[2]},null,8,["idx"]),Object(i["d"])(o,{idx:t.ids[3]},null,8,["idx"]),Object(i["d"])(o,{idx:t.ids[4]},null,8,["idx"]),Object(i["d"])(o,{idx:t.ids[5]},null,8,["idx"]),Object(i["d"])(o,{idx:t.ids[6]},null,8,["idx"]),Object(i["d"])(o,{idx:t.ids[7]},null,8,["idx"])])}var s=n("b85c");n("a9e3");function p(t,e,n,r,c,u){return Object(i["f"])(),Object(i["c"])("div",{style:t.pickupIconStyle},null,4)}var f=Object(i["e"])({name:"PickupIcon",props:{idx:Number},computed:{pickupIconStyle:function(){var t,e=null!==(t=this.idx)&&void 0!==t?t:0,i=e%8,r=Math.floor(e/8),c="-".concat(16*i,"px -").concat(16*r,"px");return{backgroundImage:"url(".concat(n("912b"),")"),width:"16px",height:"16px",backgroundPosition:c}}}});f.render=p;var v=f,g=Object(i["e"])({name:"PickupRecipe",components:{PickupIcon:v},props:{idList:Array},data:function(){return{}},computed:{ids:function(){var t,e,n=[],i=Object(s["a"])(null!==(t=this.idList)&&void 0!==t?t:[]);try{for(i.s();!(e=i.n()).done;){var r=e.value;n.push(Number(r))}}catch(c){i.e(c)}finally{i.f()}while(n.length<8)n.push(0);return n}}});g.render=d;var b=g,h={style:{display:"flex"}};function A(t,e,n,r,c,u){var o=Object(i["h"])("pickup-icon");return Object(i["f"])(),Object(i["c"])("div",h,[Object(i["d"])(o,{idx:t.idx},null,8,["idx"]),Object(i["j"])(Object(i["d"])("input",{type:"number",min:"0",max:"99",style:{width:"30px"},"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.count=e}),onChange:e[2]||(e[2]=function(e){return t.countChanged(t.count)})},null,544),[[i["i"],t.count]])])}var j=Object(i["e"])({name:"PickupCounter",components:{PickupIcon:v},props:{idx:Number},data:function(){return{count:0}},emits:["addBag","countChanged"],methods:{countChanged:function(t){var e;this.$emit("countChanged",null!==(e=this.idx)&&void 0!==e?e:0,t)},add:function(){var t;this.count+=1,this.$emit("countChanged",null!==(t=this.idx)&&void 0!==t?t:0,this.count)},remove:function(){var t;this.count>0&&(this.count-=1,this.$emit("countChanged",null!==(t=this.idx)&&void 0!==t?t:0,this.count))},addBag:function(){var t;this.$emit("addBag",null!==(t=this.idx)&&void 0!==t?t:0)}}});j.render=A;var y=j,O={style:{display:"flex"}},m={style:{"overflow-y":"auto","padding-left":"20px",height:"90vh",width:"30vw",display:"flex","flex-wrap":"wrap","align-content":"flex-start"}},x={style:{"overflow-y":"auto","padding-left":"20px",height:"90vh"}};function w(t,e,n,r,c,u){var o=Object(i["h"])("pickup-recipe");return Object(i["f"])(),Object(i["c"])("div",O,[Object(i["d"])("div",m,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(t.itemRecipeMap,(function(n,r){return Object(i["f"])(),Object(i["c"])("div",{class:"item",key:r,onMouseover:function(e){return t.hoveredRecipes=n},onMouseout:e[1]||(e[1]=function(e){return t.hoveredRecipes=[]}),style:{height:"40px",width:"40px","border-style":"solid"}},[Object(i["d"])("img",{src:"/collectibles/".concat(t.items[r].img)},null,8,["src"])],40,["onMouseover"])})),128))]),Object(i["d"])("div",x,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(t.hoveredRecipes,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t,style:{"padding-top":"10px",display:"flex"}},[Object(i["d"])(o,{idList:t,style:{background:"gray"}},null,8,["idList"])])})),128))])])}var B=n("5530"),C=n("1da1"),k=(n("96cf"),n("d4ec")),D=n("bee2"),Q=n("5698"),I=[8,1,12,15,2,9,21,22,7,3,4,5,6,18,10,11,13,14,16,19,23,20,24,25,17],X=[[1,5,16],[1,5,19],[1,9,29],[1,11,6],[1,11,16],[1,19,3],[1,21,20],[1,27,27],[2,5,15],[2,5,21],[2,7,7],[2,7,9],[2,7,25],[2,9,15],[2,15,17],[2,15,25],[2,21,9],[3,1,14],[3,3,26],[3,3,28],[3,3,29],[3,5,20],[3,5,22],[3,5,25],[3,7,29],[3,13,7],[3,23,25],[3,25,24],[3,27,11],[4,3,17],[4,3,27],[4,5,15],[5,3,21],[5,7,22],[5,9,7],[5,9,28],[5,9,31],[5,13,6],[5,15,17],[5,17,13],[5,21,12],[5,27,8],[5,27,21],[5,27,25],[5,27,28],[6,1,11],[6,3,17],[6,17,9],[6,21,7],[6,21,13],[7,1,9],[7,1,18],[7,1,25],[7,13,25],[7,17,21],[7,25,12],[7,25,20],[8,7,23],[8,9,23],[9,5,14],[9,5,25],[9,11,19],[9,21,16],[10,9,21],[10,9,25],[11,7,12],[11,7,16],[11,17,13],[11,21,13],[12,9,23],[13,3,17],[13,3,27],[13,5,19],[13,17,15],[14,1,15],[14,13,15],[15,1,29],[17,15,20],[17,15,23],[17,15,26]],E=[0,1,4,5,5,5,5,1,1,3,5,8,2,5,5,2,6,10,2,4,8,2,2,4,4,2,1],H=[[34,[4,4]],[30,[3,4]],[26,[2,4]],[22,[1,4]],[18,[1,3]],[14,[1,2]],[8,[0,2]],[0,[0,1]]];function q(t,e){return t^=t>>>e[0]>>>0,t>>>=0,t^=t<<e[1]>>>0,t>>>=0,t^=t>>>e[2]>>>0,t>>>=0,t}var P=function(){function t(){Object(k["a"])(this,t),this.itemPools=[]}return Object(D["a"])(t,[{key:"loadItems",value:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){var e,n,i,r,c,u,o,a,l,d,p,f,v,g,b,h,A;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={},t.next=3,Q["a"]("/items_metadata.xml");case 3:n=t.sent,i=Object(s["a"])(n.querySelectorAll("item"));try{for(i.s();!(r=i.n()).done;)c=r.value,u=Number(c.getAttribute("id")),o=Number(c.getAttribute("quality")),u&&o&&(e[u]=o)}catch(j){i.e(j)}finally{i.f()}return t.next=8,Q["a"]("/itempools.xml");case 8:a=t.sent,l=Object(s["a"])(a.querySelectorAll("Pool"));try{for(l.s();!(d=l.n()).done;){p=d.value,f=[],v=Object(s["a"])(p.querySelectorAll("Item"));try{for(v.s();!(g=v.n()).done;)h=g.value,A=Number(h.getAttribute("Id")),f.push({id:A,weight:Number(h.getAttribute("Weight")),quality:null!==(b=e[A])&&void 0!==b?b:0})}catch(j){v.e(j)}finally{v.f()}this.itemPools.push(f)}}catch(j){l.e(j)}finally{l.f()}case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"recurseCombinations",value:function(t,e,n,i){8==e.length&&i.push(Object(a["a"])(e));for(var r=n;r<I.length;++r){var c=I[r];c in t&&t[c]>0&&(t[c]-=1,this.recurseCombinations(t,[].concat(Object(a["a"])(e),[c]),r,i),t[c]+=1)}}},{key:"getCombinations",value:function(t){var e=[];return this.recurseCombinations(t,[],0,e),e}},{key:"getPoolWeights",value:function(t){var e,n,i,r,c,u,o,a={},l=Object(s["a"])(t);try{for(l.s();!(o=l.n()).done;){var d,p=o.value;a[p]=(null!==(d=a[p])&&void 0!==d?d:0)+1}}catch(y){l.e(y)}finally{l.f()}for(var f,v=[[0,1],[1,2],[2,2],[3,10*(null!==(e=a[3])&&void 0!==e?e:0)],[4,10*(null!==(n=a[4])&&void 0!==n?n:0)],[5,10*(null!==(i=a[6])&&void 0!==i?i:0)],[8,10*(null!==(r=a[5])&&void 0!==r?r:0)],[9,10*(null!==(c=a[25])&&void 0!==c?c:0)],[12,10*(null!==(u=a[7])&&void 0!==u?u:0)]],g=0,b=0,h=[1,8,12,15];b<h.length;b++){var A,j=h[b];g+=null!==(A=a[j])&&void 0!==A?A:0}0==g&&v.push([26,10*(null!==(f=a[23])&&void 0!==f?f:0)]);return v}},{key:"getQualityBounds",value:function(t,e){var n,i=0,r=Object(s["a"])(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;i+=E[c]}}catch(l){r.e(l)}finally{r.f()}e>=3&&e<=5&&(i-=5);var u,o=Object(s["a"])(H);try{for(o.s();!(u=o.n()).done;){var a=u.value;if(i>a[0])return a[1]}}catch(l){o.e(l)}finally{o.f()}return[0,0]}},{key:"craftItem",value:function(t){if(8!=t.length)return 0;var e,n=Object(a["a"])(t).sort(),i=2004318064,r=Object(s["a"])(n);try{for(r.s();!(e=r.n()).done;){var c=e.value;i=q(i,X[c])}}catch(w){r.e(w)}finally{r.f()}var u,o=this.getPoolWeights(t),l={},d=0,p=Object(s["a"])(o);try{for(p.s();!(u=p.n()).done;){var f,v=u.value,g=this.itemPools[v[0]],b=this.getQualityBounds(t,v[0]),h=Object(s["a"])(g);try{for(h.s();!(f=h.n()).done;){var A,j=f.value;j.quality<b[0]||j.quality>b[1]||(l[j.id]=(null!==(A=l[j.id])&&void 0!==A?A:0)+j.weight*v[1],d+=j.weight*v[1])}}catch(w){h.e(w)}finally{h.f()}}}catch(w){p.e(w)}finally{p.f()}i=q(i,[1,21,20]);var y=2.3283061589829401e-10,O=i*y*d;for(var m in l){var x=l[m];if(O-=x,O<0)return+m}return 25}}]),t}(),S=new P,W=Object(i["e"])({name:"CraftableItems",components:{PickupRecipe:b},props:{pickupCounts:Object},data:function(){return{hoveredRecipes:[],items:{}}},created:function(){var t=this;S.loadItems(),Object(C["a"])(regeneratorRuntime.mark((function e(){var n,i,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q["a"]("/items.xml");case 2:n=e.sent,i=Object(s["a"])(n.querySelectorAll("passive,active,familiar"));try{for(i.s();!(r=i.n()).done;)c=r.value,t.items[Number(c.getAttribute("id"))]={name:String(c.getAttribute("name")),img:String(c.getAttribute("gfx"))}}catch(u){i.e(u)}finally{i.f()}case 5:case"end":return e.stop()}}),e)})))()},computed:{itemRecipeMap:function(){var t,e,n={},i=S.getCombinations(Object(B["a"])({},null!==(t=this.pickupCounts)&&void 0!==t?t:{})),r=Object(s["a"])(i);try{for(r.s();!(e=r.n()).done;){var c,u=e.value,o=S.craftItem(Object(a["a"])(u));if(o)n[o]=null!==(c=n[o])&&void 0!==c?c:[],n[o].push(u)}}catch(l){r.e(l)}finally{r.f()}return n}}});n("e189");W.render=w;var M=W,L=new P,T=Object(i["e"])({name:"App",components:{PickupRecipeVue:b,PickupCounter:y,CraftableItems:M},data:function(){return{craftingBag:[],pickupCounts:{},recipes:[],pickupCounters:[[1,2,3,4,5,6,7],[8,9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23,24,25]],counterElements:[]}},created:function(){L.loadItems()},methods:{addHeart:function(){this.craftingBag=[].concat(Object(a["a"])(this.craftingBag),[1])},addPenny:function(){this.craftingBag=[].concat(Object(a["a"])(this.craftingBag),[8])},resetBag:function(){this.craftingBag=[]},pickupCounter:function(t){t&&this.counterElements.push(t)},resetAll:function(){this.counterElements.forEach((function(t){t.count=0,t.countChanged(0)}))},addBag:function(t){this.craftingBag=[].concat(Object(a["a"])(this.craftingBag),[t])},craftedItem:function(t){return L.craftItem(t)},countChanged:function(t,e){t in this.pickupCounts||(this.pickupCounts[t]=0),this.pickupCounts[t]=e}}});n("07e6");T.render=o;var R=T;Object(i["b"])(R).mount("#app")},e189:function(t,e,n){"use strict";n("be9c")},f867:function(t,e,n){}});
//# sourceMappingURL=app.9338f595.js.map