(function(e){function t(t){for(var i,o,u=t[0],a=t[1],l=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);s&&s(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,u=1;u<n.length;u++){var a=n[u];0!==c[a]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},c={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/IsaacCraftingSimSite/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1c14":function(e,t,n){},3141:function(e,t,n){},8833:function(e,t,n){"use strict";n("1c14")},"912b":function(e,t){e.exports="data:image/png;base64,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"},9751:function(e,t,n){},b274:function(e,t,n){"use strict";n("9751")},bb5b:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),c={style:{display:"flex",flex:"1"}},r={class:"sidePanel"},o=Object(i["e"])(" Crafting Bag "),u=Object(i["f"])("div",{style:{"font-size":"70%"}}," Pickups that will have to be used ",-1),a={style:{display:"flex","padding-top":"10px","padding-bottom":"10px"}},l={class:"pickupCountersPanel"},s=Object(i["e"])(" Available Pickups "),p=Object(i["f"])("div",{style:{"font-size":"70%"}}," On the floor, or in your bag and replaceable ",-1);function d(e,t,n,d,f,b){var g=Object(i["l"])("pickup-recipe-vue"),h=Object(i["l"])("pickup-counter"),v=Object(i["l"])("craftable-items"),j=Object(i["l"])("craft-history");return Object(i["h"])(),Object(i["c"])("div",c,[Object(i["f"])("div",r,[o,u,Object(i["f"])("div",a,[Object(i["f"])("img",{src:"./collectibles/collectibles_710_bagofcrafting.png",style:{"image-rendering":"crisp-edges"},height:"64",width:"64"},null,8,["src"]),Object(i["f"])(g,{idList:e.craftingBag},null,8,["idList"]),Object(i["f"])("button",{onClick:t[1]||(t[1]=function(){return e.resetBag&&e.resetBag.apply(e,arguments)})},"Reset")]),Object(i["f"])("div",l,[s,p,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(e.pickupCounters,(function(t){return Object(i["h"])(),Object(i["c"])("div",{key:t,style:{display:"flex","padding-top":"10px"}},[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(t,(function(t){return Object(i["h"])(),Object(i["c"])(h,{key:t,idx:t,count:e.pickupCounts[t],"onUpdate:count":function(n){return e.pickupCounts[t]=n},onAddBag:e.addBag},null,8,["idx","count","onUpdate:count","onAddBag"])})),128))])})),128))]),Object(i["f"])("button",{onClick:t[2]||(t[2]=function(){return e.resetPickups&&e.resetPickups.apply(e,arguments)})},"Clear Pickups"),Object(i["f"])("button",{onClick:t[3]||(t[3]=function(){return e.clearHistory&&e.clearHistory.apply(e,arguments)})},"Clear History")]),Object(i["f"])(v,{pickupCounts:e.pickupCounts,pickupsInBag:e.craftingBag,onRecipeClicked:e.recipeClicked,selectedItem:e.selectedItem,"onUpdate:selectedItem":t[4]||(t[4]=function(t){return e.selectedItem=t})},null,8,["pickupCounts","pickupsInBag","onRecipeClicked","selectedItem"]),Object(i["f"])(j,{recipeHistory:e.recipeHistory,onUndo:e.undo,onClear:e.clearHistory},null,8,["recipeHistory","onUndo","onClear"])])}var f=n("b85c"),b=n("2909"),g=n("1da1"),h=(n("99af"),n("fb6a"),n("159b"),n("96cf"),{style:{width:"128px",height:"64px",display:"grid","grid-template-rows":"32px 32px","grid-template-columns":"32px 32px 32px 32px"}});function v(e,t,n,c,r,o){var u=Object(i["l"])("pickup-icon");return Object(i["h"])(),Object(i["c"])("div",h,[Object(i["f"])(u,{idx:e.ids[0]},null,8,["idx"]),Object(i["f"])(u,{idx:e.ids[1]},null,8,["idx"]),Object(i["f"])(u,{idx:e.ids[2]},null,8,["idx"]),Object(i["f"])(u,{idx:e.ids[3]},null,8,["idx"]),Object(i["f"])(u,{idx:e.ids[4]},null,8,["idx"]),Object(i["f"])(u,{idx:e.ids[5]},null,8,["idx"]),Object(i["f"])(u,{idx:e.ids[6]},null,8,["idx"]),Object(i["f"])(u,{idx:e.ids[7]},null,8,["idx"])])}n("a9e3");function j(e,t,n,c,r,o){return Object(i["h"])(),Object(i["c"])("div",{style:e.pickupIconStyle,onClick:t[1]||(t[1]=function(){return e.pickupClicked&&e.pickupClicked.apply(e,arguments)})},null,4)}var m=Object(i["g"])({name:"PickupIcon",props:{idx:Number},emits:["pickupClicked"],methods:{pickupClicked:function(){this.$emit("pickupClicked")}},computed:{pickupIconStyle:function(){var e,t=null!==(e=this.idx)&&void 0!==e?e:0,i=t%8,c=Math.floor(t/8),r="-".concat(32*i,"px -").concat(32*c,"px");return{imageRendering:"crisp-edges",backgroundImage:"url(".concat(n("912b"),")"),width:"32px",height:"32px",backgroundSize:"256px",backgroundPosition:r}}}});m.render=j;var O=m,y=Object(i["g"])({name:"PickupRecipe",components:{PickupIcon:O},props:{idList:Array},data:function(){return{}},computed:{ids:function(){var e,t,n=[],i=Object(f["a"])(null!==(e=this.idList)&&void 0!==e?e:[]);try{for(i.s();!(t=i.n()).done;){var c=t.value;n.push(Number(c))}}catch(r){i.e(r)}finally{i.f()}while(n.length<8)n.push(0);return n}}});y.render=v;var A=y,k=Object(i["q"])("data-v-6f118d08");Object(i["j"])("data-v-6f118d08");var w={class:"pickupIcon"};Object(i["i"])();var x=k((function(e,t,n,c,r,o){var u=Object(i["l"])("pickup-icon");return Object(i["h"])(),Object(i["c"])("div",{style:{display:"flex","flex-direction":"column","padding-left":"5px","align-items":"center"},onWheel:t[2]||(t[2]=Object(i["p"])((function(t){return e.mouseWheel(t)}),["prevent"]))},[Object(i["f"])("div",w,[Object(i["f"])(u,{idx:e.idx,onPickupClicked:e.addBag},null,8,["idx","onPickupClicked"])]),Object(i["o"])(Object(i["f"])("input",{type:"number",min:"0",max:"99",style:{width:"30px"},"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.inputCount=t})},null,512),[[i["n"],e.inputCount]])],32)})),B=Object(i["g"])({name:"PickupCounter",components:{PickupIcon:O},props:{idx:Number,count:Number},emits:["addBag","update:count"],methods:{addBag:function(){var e;this.$emit("addBag",null!==(e=this.idx)&&void 0!==e?e:0)},mouseWheel:function(e){e.deltaY>0?this.inputCount-=1:e.deltaY<0&&(this.inputCount+=1)}},computed:{inputCount:{get:function(){var e;return null!==(e=this.count)&&void 0!==e?e:0},set:function(e){e>=0&&this.$emit("update:count",e)}}}});n("8833");B.render=x,B.__scopeId="data-v-6f118d08";var C=B,I=(n("b0c0"),{style:{display:"flex",flex:"1"}}),H={class:"itemListPanel"},D={class:"shownRecipePanel"},Q={key:0},P={key:1},q={class:"shownRecipe"};function X(e,t,n,c,r,o){var u=Object(i["l"])("pickup-recipe");return Object(i["h"])(),Object(i["c"])("div",I,[Object(i["f"])("div",H,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(e.itemRecipeMap,(function(n,c){return Object(i["h"])(),Object(i["c"])("div",{class:"item",key:c,onMouseover:function(t){return e.hoveredItem=c},onMouseout:t[1]||(t[1]=function(t){return e.hoveredItem=0}),onClick:function(t){return e.selectItem(c)},style:"border-style: solid; border-color: ".concat(e.itemBorderColor(c))},[Object(i["f"])("img",{src:"./collectibles/".concat(e.items[c].img),style:{"image-rendering":"crisp-edges"},height:"64",width:"64"},null,8,["src"])],44,["onMouseover","onClick"])})),128))]),Object(i["f"])("div",D,[e.shownItem?(Object(i["h"])(),Object(i["c"])("div",Q,Object(i["m"])(e.items[e.shownItem].name),1)):Object(i["d"])("",!0),e.shownItem?(Object(i["h"])(),Object(i["c"])("div",P,[Object(i["f"])("img",{src:"./collectibles/".concat(e.items[e.shownItem].img),style:{"image-rendering":"crisp-edges"},height:"64",width:"64"},null,8,["src"])])):Object(i["d"])("",!0),(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(e.shownRecipes,(function(t){return Object(i["h"])(),Object(i["c"])("div",{class:"shownRecipeEntry",key:t},[Object(i["f"])("div",q,[Object(i["f"])(u,{idList:t,onClick:function(n){return e.recipeClicked(t,e.shownItem)}},null,8,["idList","onClick"])])])})),128))])])}var E=n("5530"),S=n("5698"),L={};function M(){return R.apply(this,arguments)}function R(){return R=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,i,c,r,o,u,a,l,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("loading items"),e.next=3,S["a"]("./items.xml");case 3:t=e.sent,n=Object(f["a"])(t.querySelectorAll("passive,active,familiar"));try{for(n.s();!(i=n.n()).done;)c=i.value,L[Number(c.getAttribute("id"))]={name:String(c.getAttribute("name")),img:String(c.getAttribute("gfx")).toLowerCase(),quality:0,description:String(c.getAttribute("description"))}}catch(p){n.e(p)}finally{n.f()}return e.next=8,S["a"]("./items_metadata.xml");case 8:r=e.sent,o=Object(f["a"])(r.querySelectorAll("item"));try{for(o.s();!(u=o.n()).done;)a=u.value,l=Number(a.getAttribute("id")),s=Number(a.getAttribute("quality")),l in L&&(L[l].quality=s)}catch(p){o.e(p)}finally{o.f()}case 11:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}var W=[8,1,12,15,2,9,21,22,7,3,4,5,6,18,10,11,13,14,16,19,23,20,24,25,17],U=[[1,5,16],[1,5,19],[1,9,29],[1,11,6],[1,11,16],[1,19,3],[1,21,20],[1,27,27],[2,5,15],[2,5,21],[2,7,7],[2,7,9],[2,7,25],[2,9,15],[2,15,17],[2,15,25],[2,21,9],[3,1,14],[3,3,26],[3,3,28],[3,3,29],[3,5,20],[3,5,22],[3,5,25],[3,7,29],[3,13,7],[3,23,25],[3,25,24],[3,27,11],[4,3,17],[4,3,27],[4,5,15],[5,3,21],[5,7,22],[5,9,7],[5,9,28],[5,9,31],[5,13,6],[5,15,17],[5,17,13],[5,21,12],[5,27,8],[5,27,21],[5,27,25],[5,27,28],[6,1,11],[6,3,17],[6,17,9],[6,21,7],[6,21,13],[7,1,9],[7,1,18],[7,1,25],[7,13,25],[7,17,21],[7,25,12],[7,25,20],[8,7,23],[8,9,23],[9,5,14],[9,5,25],[9,11,19],[9,21,16],[10,9,21],[10,9,25],[11,7,12],[11,7,16],[11,17,13],[11,21,13],[12,9,23],[13,3,17],[13,3,27],[13,5,19],[13,17,15],[14,1,15],[14,13,15],[15,1,29],[17,15,20],[17,15,23],[17,15,26]],T=[0,1,4,5,5,5,5,1,1,3,5,8,2,5,5,2,6,10,2,4,8,2,2,4,4,2,1],N=[[34,[4,4]],[30,[3,4]],[26,[2,4]],[22,[1,4]],[18,[1,3]],[14,[1,2]],[8,[0,2]],[0,[0,1]]];function K(e,t){return e^=e>>>t[0]&4294967295,e^=e<<t[1]&4294967295,e^=e>>>t[2]&4294967295,e>>>=0,e}var G=[];function J(e,t,n,i){8==t.length&&i.push(Object(b["a"])(t));for(var c=n;c<W.length;++c){var r=W[c];r in e&&e[r]>0&&(e[r]-=1,J(e,[].concat(Object(b["a"])(t),[r]),c,i),e[r]+=1)}}function F(e,t){var n=[];return J(e,t,0,n),n}function Z(){return Y.apply(this,arguments)}function Y(){return Y=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,i,c,r,o,u,a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S["a"]("./itempools.xml");case 2:t=e.sent,n=Object(f["a"])(t.querySelectorAll("Pool"));try{for(n.s();!(i=n.n()).done;){c=i.value,r=[],o=Object(f["a"])(c.querySelectorAll("Item"));try{for(o.s();!(u=o.n()).done;)a=u.value,l=Number(a.getAttribute("Id")),r.push({id:l,weight:Number(a.getAttribute("Weight")),quality:L[l].quality})}catch(s){o.e(s)}finally{o.f()}G.push(r)}}catch(s){n.e(s)}finally{n.f()}case 5:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function V(e){var t,n,i,c,r,o,u,a={},l=Object(f["a"])(e);try{for(l.s();!(u=l.n()).done;){var s,p=u.value;a[p]=(null!==(s=a[p])&&void 0!==s?s:0)+1}}catch(O){l.e(O)}finally{l.f()}for(var d,b=[[0,1],[1,2],[2,2],[3,10*(null!==(t=a[3])&&void 0!==t?t:0)],[4,10*(null!==(n=a[4])&&void 0!==n?n:0)],[5,5*(null!==(i=a[6])&&void 0!==i?i:0)],[8,10*(null!==(c=a[5])&&void 0!==c?c:0)],[9,10*(null!==(r=a[25])&&void 0!==r?r:0)],[12,10*(null!==(o=a[7])&&void 0!==o?o:0)]],g=0,h=0,v=[1,8,12,15];h<v.length;h++){var j,m=v[h];g+=null!==(j=a[m])&&void 0!==j?j:0}0==g&&b.push([26,10*(null!==(d=a[23])&&void 0!==d?d:0)]);return b}function z(e,t){var n,i=0,c=Object(f["a"])(e);try{for(c.s();!(n=c.n()).done;){var r=n.value;i+=T[r]}}catch(l){c.e(l)}finally{c.f()}t>=3&&t<=5&&(i-=5);var o,u=Object(f["a"])(N);try{for(u.s();!(o=u.n()).done;){var a=o.value;if(i>a[0])return a[1]}}catch(l){u.e(l)}finally{u.f()}return[0,0]}function _(e){if(8!=e.length)return 0;var t,n=Object(b["a"])(e).sort((function(e,t){return e-t})),i=2004318064,c=Object(f["a"])(n);try{for(c.s();!(t=c.n()).done;){var r=t.value;i=K(i,U[r])}}catch(w){c.e(w)}finally{c.f()}var o,u=V(e),a={},l=0,s=Object(f["a"])(u);try{for(s.s();!(o=s.n()).done;){var p,d=o.value,g=G[d[0]],h=z(e,d[0]),v=Object(f["a"])(g);try{for(v.s();!(p=v.n()).done;){var j,m=p.value;m.quality<h[0]||m.quality>h[1]||(a[m.id]=(null!==(j=a[m.id])&&void 0!==j?j:0)+m.weight*d[1],l+=m.weight*d[1])}}catch(w){v.e(w)}finally{v.f()}}}catch(w){s.e(w)}finally{s.f()}i=K(i,[1,21,20]);var O=2.3283061589829401e-10,y=i*O*l;for(var A in a){var k=a[A];if(y-=k,y<0)return+A}return 25}var $=Object(i["g"])({name:"CraftableItems",components:{PickupRecipe:A},props:{pickupCounts:Object,pickupsInBag:Object,selectedItem:Number},data:function(){return{hoveredItem:0}},emits:["recipeClicked","update:selectedItem"],methods:{selectItem:function(e){this.$emit("update:selectedItem",+e)},itemBorderColor:function(e){return this.selectedItem==e?"green":"lightgray"},recipeClicked:function(e,t){this.$emit("recipeClicked",e,t)}},computed:{items:function(){return L},itemRecipeMap:function(){var e,t,n,i={},c=F(Object(E["a"])({},null!==(e=this.pickupCounts)&&void 0!==e?e:{}),Object(b["a"])(null!==(t=this.pickupsInBag)&&void 0!==t?t:[])),r=Object(f["a"])(c);try{for(r.s();!(n=r.n()).done;){var o,u=n.value,a=_(Object(b["a"])(u));if(a)i[a]=null!==(o=i[a])&&void 0!==o?o:[],i[a].push(u)}}catch(l){r.e(l)}finally{r.f()}return i},shownItem:function(){return this.hoveredItem?this.hoveredItem:this.selectedItem&&this.selectedItem in this.itemRecipeMap?this.selectedItem:0},shownRecipes:function(){var e=[];if(this.itemRecipeMap&&this.shownItem in this.itemRecipeMap){var t,n=Object(f["a"])(this.itemRecipeMap[this.shownItem]);try{for(n.s();!(t=n.n()).done;){var i=t.value;e.push(i)}}catch(c){n.e(c)}finally{n.f()}}return e}}});n("b274");$.render=X;var ee=$,te=Object(i["q"])("data-v-d96887fc");Object(i["j"])("data-v-d96887fc");var ne={class:"panel"},ie=Object(i["e"])(" History "),ce={class:"recipeList"};Object(i["i"])();var re=te((function(e,t,n,c,r,o){var u=Object(i["l"])("pickup-recipe");return Object(i["h"])(),Object(i["c"])("div",ne,[ie,Object(i["f"])("div",ce,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(e.recipeHistory,(function(t){return Object(i["h"])(),Object(i["c"])("div",{key:t,class:"recipeEntry"},[Object(i["f"])("img",{src:"./collectibles/".concat(e.items[t.item].img),style:{"image-rendering":"crisp-edges"},height:"64",width:"64"},null,8,["src"]),Object(i["f"])(u,{idList:t.recipe},null,8,["idList"])])})),128))]),e.recipeHistory.length?(Object(i["h"])(),Object(i["c"])("button",{key:0,onClick:t[1]||(t[1]=function(){return e.undo&&e.undo.apply(e,arguments)})},"Undo")):Object(i["d"])("",!0)])})),oe=Object(i["g"])({components:{PickupRecipe:A},props:{recipeHistory:Object},emits:["undo","clear"],methods:{undo:function(){this.$emit("undo")},clear:function(){this.$emit("clear")}},computed:{items:function(){return L}}});n("db02");oe.render=re,oe.__scopeId="data-v-d96887fc";var ue=oe,ae=Object(i["g"])({name:"App",components:{PickupRecipeVue:A,PickupCounter:C,CraftableItems:ee,CraftHistory:ue},data:function(){return{craftingBag:[],pickupCounts:{},recipes:[],pickupCounters:[[1,2,3,4,5,6,7],[8,9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23,24,25]],recipeHistory:[],selectedItem:0}},created:function(){Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:return e.next=4,Z();case 4:case"end":return e.stop()}}),e)})))().catch((function(e){console.log(e)}))},methods:{addHeart:function(){this.craftingBag=[].concat(Object(b["a"])(this.craftingBag),[1])},addPenny:function(){this.craftingBag=[].concat(Object(b["a"])(this.craftingBag),[8])},resetBag:function(){this.craftingBag=[]},resetPickups:function(){for(var e in this.pickupCounts)this.pickupCounts[e]=0},addBag:function(e){this.craftingBag.length<8&&(this.craftingBag=[].concat(Object(b["a"])(this.craftingBag),[e]))},craftedItem:function(e){return _(e)},recipeClicked:function(e,t){this.recipeHistory.push({recipe:e,craftBag:this.craftingBag,item:t});var n,i=e.slice(this.craftingBag.length),c=Object(f["a"])(i);try{for(c.s();!(n=c.n()).done;){var r=n.value;this.pickupCounts[r]-=1}}catch(o){c.e(o)}finally{c.f()}this.craftingBag=[]},undo:function(){var e=this,t=this.recipeHistory.pop();if(t){t.craftBag.forEach((function(t){return e.addBag(t)}));var n=t.recipe.slice(t.craftBag.length);n.forEach((function(t){return e.pickupCounts[t]+=1})),this.selectedItem=t.item}},clearHistory:function(){this.recipeHistory=[]}}});n("fea4");ae.render=d;var le=ae;Object(i["b"])(le).mount("#app")},db02:function(e,t,n){"use strict";n("3141")},fea4:function(e,t,n){"use strict";n("bb5b")}});
//# sourceMappingURL=app.9cd68d8c.js.map