(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shaker"],{"2e04":function(t,e,a){"use strict";a("36c4")},"36c4":function(t,e,a){},5091:function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),c=a("5899"),s="["+c+"]",r=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),o=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,a){var n=a("861d"),c=a("d2bb");t.exports=function(t,e,a){var s,r;return c&&"function"==typeof(s=e.constructor)&&s!==a&&n(r=s.prototype)&&r!==a.prototype&&c(t,r),t}},"7f82":function(t,e,a){},"9ab4":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));function n(t,e,a,n){var c,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(r=(s<3?c(r):s>3?c(e,a,r):c(e,a))||r);return s>3&&r&&Object.defineProperty(e,a,r),r}},"9c8f":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),c=Object(n["i"])("h1",null,"Light Saber",-1),s=Object(n["i"])("p",null,"Shake your device as fast as you can during 10s to make the light grow",-1),r=Object(n["i"])("p",null," if your device does not support shaking, alternatively, you can click on the saber handle",-1);function i(t,e,a,i,o,u){var l=Object(n["A"])("LightSaber"),b=Object(n["A"])("GameStarter"),p=Object(n["A"])("CountDown"),v=Object(n["A"])("ScoreBoard");return Object(n["r"])(),Object(n["e"])("div",null,[Object(n["i"])(l,{isSaberActive:t.gameStarted},null,8,["isSaberActive"]),Object(n["i"])(b,{isOpen:t.openStarter&&!t.gameStarted,onGameStarted:e[1]||(e[1]=function(e){t.gameStarted=!0,t.openStarter=!1})},{default:Object(n["G"])((function(){return[c,s,r]})),_:1},8,["isOpen"]),Object(n["i"])(p,{start:t.gameStarted,timer:10,onIsOver:e[2]||(e[2]=function(e){return t.gameOver()})},null,8,["start"]),t.openStarter||t.gameStarted?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])(v,{key:0}))])}var o=a("d4ec"),u=a("bee2"),l=a("262e"),b=a("2caf"),p=a("9ab4"),v=a("ce1f"),d=Object(n["I"])("data-v-3cea73b0");Object(n["v"])("data-v-3cea73b0");var f={id:"lightsaber"},O=Object(n["g"])('<span id="guard" data-v-3cea73b0><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span></span><span id="handlestart" data-v-3cea73b0><span data-v-3cea73b0></span><span data-v-3cea73b0></span></span><span id="handle" data-v-3cea73b0><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span data-v-3cea73b0></span><span class="long" data-v-3cea73b0></span><span class="long" data-v-3cea73b0></span><span class="box" data-v-3cea73b0></span></span><span class="wings" data-v-3cea73b0><span class="wing wing1" data-v-3cea73b0></span><span class="wing wing2" data-v-3cea73b0></span><span class="wing wing3" data-v-3cea73b0></span></span><span class="light" data-v-3cea73b0></span>',5);Object(n["s"])();var h=d((function(t,e,a,c,s,r){return Object(n["r"])(),Object(n["e"])("div",f,[Object(n["i"])("span",{id:"light",style:t.laserStyle},null,4),Object(n["i"])("span",{id:"generator",onClick:e[1]||(e[1]=function(){return t.shakeIt&&t.shakeIt.apply(t,arguments)})},[O])])})),j="score";function g(){var t=Object(n["y"])(0),e=function(){t.value+=1,console.log("test me :"+t.value)};Object(n["t"])(j,{score:t,incrementScore:e})}function m(){var t=Object(n["m"])(j);if(!t)throw new Error("useScore must be used with initScoreProvider");return t}var y=function(t){Object(l["a"])(a,t);var e=Object(b["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.scoreContext=Object(v["c"])((function(){var t=m(),e=t.score,a=t.incrementScore;return{score:e,incrementScore:a}})),t.isSaberActive=!1,t.laserStyle={height:"0px"},t.lastTime=new Date,t.lastX=null,t.lastY=null,t.lastZ=null,t.options={threshold:15,timeout:250},t}return Object(u["a"])(a,[{key:"created",value:function(){console.log("created light : "+this.scoreContext.score),this.start()}},{key:"unmounted",value:function(){console.log("unmountes light")}},{key:"start",value:function(){this.reset();var t="ondevicemotion"in window;t&&window.addEventListener("devicemotion",this.devicemotion,!1)}},{key:"reset",value:function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null}},{key:"devicemotion",value:function(t){var e,a,n=0,c=0,s=0,r=t.accelerationIncludingGravity?{x:t.accelerationIncludingGravity.x||0,y:t.accelerationIncludingGravity.y||0,z:t.accelerationIncludingGravity.z||0}:{x:0,y:0,z:0};if(null===this.lastX||null===this.lastY||null===this.lastZ)return this.lastX=r.x,this.lastY=r.y,void(this.lastZ=r.z);n=Math.abs(this.lastX||0-r.x),c=Math.abs(this.lastY||0-r.y),s=Math.abs(this.lastZ||0-r.z),(n>this.options.threshold&&c>this.options.threshold||n>this.options.threshold&&s>this.options.threshold||c>this.options.threshold&&s>this.options.threshold)&&(e=new Date,a=e.getTime()-this.lastTime.getTime(),a>this.options.timeout&&(this.shakeIt(),this.lastTime=new Date)),this.lastX=r.x,this.lastY=r.y,this.lastZ=r.z}},{key:"shakeIt",value:function(){if(this.isSaberActive){this.scoreContext.incrementScore(),console.log("created light : "+this.scoreContext.score);var t=document.getElementById("generator");if(t){var e=this.scoreContext.score,a=t.getBoundingClientRect().top,n=(e>100?1:e/100)*a;this.laserStyle={height:n+"px"}}}}}]),a}(v["b"]);y=Object(p["a"])([Object(v["a"])({props:{isSaberActive:Boolean}})],y);var S=y;a("9f7c");S.render=h,S.__scopeId="data-v-3cea73b0";var I=S,w=Object(n["I"])("data-v-2fe3a7c0");Object(n["v"])("data-v-2fe3a7c0");var k={key:0,class:"instruction"},x={key:1,class:"started"};Object(n["s"])();var C=w((function(t,e,a,c,s,r){var i=Object(n["A"])("CountDown");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",{class:["overlay-message",{"is-open":t.isOpen}]},["instruction"===t.state?(Object(n["r"])(),Object(n["e"])("div",k,[Object(n["z"])(t.$slots,"default"),Object(n["i"])("button",{class:"overlay-close",onClick:e[1]||(e[1]=function(e){return t.state="countdown"})},"I am ready !")])):Object(n["f"])("",!0),Object(n["i"])(i,{start:"countdown"===t.state,timer:3,onIsOver:e[2]||(e[2]=function(e){return t.gameStarted()})},null,8,["start"]),"started"===t.state?(Object(n["r"])(),Object(n["e"])("div",x,"Go !!!")):Object(n["f"])("",!0)],2),Object(n["i"])("div",{class:["overlay overlay01",{"is-open":t.isOpen}]},null,2)],64)})),A=Object(n["I"])("data-v-03b374ea");Object(n["v"])("data-v-03b374ea");var N={class:"counter"},E={class:"nums"};Object(n["s"])();var _=A((function(t,e,a,c,s,r){return Object(n["r"])(),Object(n["e"])("div",N,[Object(n["i"])("div",E,[Object(n["i"])(n["b"],{name:"rotate",onAfterEnter:e[1]||(e[1]=function(e){return t.nextCount()})},{default:A((function(){return[t.count>0?(Object(n["r"])(),Object(n["e"])("span",{class:"start",key:t.count},Object(n["C"])(t.count),1)):Object(n["f"])("",!0)]})),_:1})])])})),G=(a("a9e3"),function(t){Object(l["a"])(a,t);var e=Object(b["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.start=!1,t.timer=10,t.count=0,t}return Object(u["a"])(a,[{key:"nextCount",value:function(){this.count=this.count>0?this.count-1:0,this.count<=0&&this.$emit("isOver")}}]),a}(v["b"]));G=Object(p["a"])([Object(v["a"])({props:{start:Boolean,timer:Number},watch:{start:function(){this.start&&(this.count=this.timer)}},emits:["isOver"]})],G);var T=G;a("e74b");T.render=_,T.__scopeId="data-v-03b374ea";var D=T,Y=function(t){Object(l["a"])(a,t);var e=Object(b["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.isOpen=!1,t.state="instruction",t}return Object(u["a"])(a,[{key:"gameStarted",value:function(){this.state="started",this.$emit("gameStarted")}}]),a}(v["b"]);Y=Object(p["a"])([Object(v["a"])({components:{CountDown:D},props:{isOpen:Boolean},emits:["gameStarted"]})],Y);var R=Y;a("a7bd");R.render=C,R.__scopeId="data-v-2fe3a7c0";var X=R,z=(a("b0c0"),Object(n["I"])("data-v-9571cb0a"));Object(n["v"])("data-v-9571cb0a");var B={class:"container"},L=Object(n["i"])("li",{class:"ellipsis"},[Object(n["i"])("p",null," ● ● ● ")],-1),M={class:"item"},F=Object(n["i"])("div",{class:"avatar"},null,-1),P={class:"text"},Z=Object(n["i"])("p",null," And a few words too. ",-1),V=Object(n["i"])("div",{class:"movement"},[Object(n["i"])("span",null,"3")],-1),$={class:"rank"};Object(n["s"])();var J=z((function(t,e,a,c,s,r){return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("h1",null,"Your Score : "+Object(n["C"])(t.scoreContext.score),1),Object(n["i"])("ul",B,[L,Object(n["i"])("li",M,[F,Object(n["i"])("div",P,[Object(n["i"])("h2",null,Object(n["C"])(t.scoreContext.name),1),Z]),V,Object(n["i"])("div",$,[Object(n["i"])("span",null,Object(n["C"])(t.scoreContext.score),1)])])])],64)})),U=a("4aef"),q=function(t){Object(l["a"])(a,t);var e=Object(b["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.scoreContext=Object(v["c"])((function(){var t=m(),e=t.score,a=U["a"].getPlayer().name;return{name:a,score:e}})),t}return a}(v["b"]);q=Object(p["a"])([Object(v["a"])({})],q);var H=q;a("2e04");H.render=J,H.__scopeId="data-v-9571cb0a";var K=H,Q=function(t){Object(l["a"])(a,t);var e=Object(b["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.openStarter=!1,t.gameStarted=!1,t}return Object(u["a"])(a,[{key:"beforeCreate",value:function(){g()}},{key:"mounted",value:function(){this.openStarter=!0}},{key:"gameOver",value:function(){this.gameStarted=!1}}]),a}(v["b"]);Q=Object(p["a"])([Object(v["a"])({components:{LightSaber:I,GameStarter:X,CountDown:D,ScoreBoard:K}})],Q);var W=Q;W.render=i;e["default"]=W},"9f7c":function(t,e,a){"use strict";a("cfa9")},a7bd:function(t,e,a){"use strict";a("7f82")},a9e3:function(t,e,a){"use strict";var n=a("83ab"),c=a("da84"),s=a("94ca"),r=a("6eeb"),i=a("5135"),o=a("c6b6"),u=a("7156"),l=a("c04e"),b=a("d039"),p=a("7c73"),v=a("241c").f,d=a("06cf").f,f=a("9bf2").f,O=a("58a8").trim,h="Number",j=c[h],g=j.prototype,m=o(p(g))==h,y=function(t){var e,a,n,c,s,r,i,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=O(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+u}for(s=u.slice(2),r=s.length,i=0;i<r;i++)if(o=s.charCodeAt(i),o<48||o>c)return NaN;return parseInt(s,n)}return+u};if(s(h,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var S,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(m?b((function(){g.valueOf.call(a)})):o(a)!=h)?u(new j(y(e)),a,I):y(e)},w=n?v(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;w.length>k;k++)i(j,S=w[k])&&!i(I,S)&&f(I,S,d(j,S));I.prototype=g,g.constructor=I,r(c,h,I)}},cfa9:function(t,e,a){},e74b:function(t,e,a){"use strict";a("5091")}}]);
//# sourceMappingURL=shaker.94d30793.js.map