window.googletag&&typeof googletag._gpt_js_load_2_=='function'&&googletag._gpt_js_load_2_(function(_,_m){var gQ=function(a){if(!fQ.test(a))return null;a=Number(a);return isNaN(a)?null:a},jQ=function(a,b,c,d){return hQ(a,"fullscreen",iQ(d,952,function(e,f){if(f.source===b){if(!("eventType"in e))throw Error("bad message "+JSON.stringify(e));delete e.googMsgType;c(e)}}))},mQ=function(a,b,c,d){a=new kQ(1,a,b,c,d);lQ(a);return a},nQ=function(a){var b=a.ownerDocument,c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","18");c.setAttribute("x2","28");c.setAttribute("y2","12");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","12");b.setAttribute("x2","34");b.setAttribute("y2","18");a.appendChild(b)},oQ=function(a){var b=a.ownerDocument,c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","12");c.setAttribute("x2","28");c.setAttribute("y2","18");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","18");b.setAttribute("x2","34");b.setAttribute("y2","12");a.appendChild(b)},pQ=function(a,b){a.j.maxZIndexListeners.push(b);b(_.XH(a))},qQ=function(a,b,c){return _.fh(a.context,b,c)},iQ=function(a,b,c){return _.Zg(a.context,b,c)},rQ={capture:!0},sQ=function(a,b){return new _.Qh(a.x-b.x,a.y-b.y)},tQ=function(a){var b=a.document,c=0;if(b){c=b.body;var d=b.documentElement;if(!d||!c)return 0;a=_.jw(a).height;if(_.iw(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}}return c},uQ=function(a,b){a&&(a=a.parentNode);for(var c=0;a&&20>=c;){if(b(a))return a;a=a.parentNode;c++}return null},fQ=/^(-?[0-9.]{1,30})$/,vQ=function(a,b){for(a=[a];a.length;){var c=a.shift();!1!==b(c)&&(c=_.Nf(c.children||c.childNodes||[],function(d){return 1===d.nodeType}),c.length&&a.unshift.apply(a,_.wd(c)))}},wQ=function(a){var b={};if(a){var c=/\s*:\s*/;_.Qs((a||"").split(/\s*;\s*/),function(d){if(d){var e=d.split(c);d=e[0];e=e[1];d&&e&&(b[d.toLowerCase()]=e)}})}return b},xQ=function(a,b){if("length"in a.style){a=a.style;for(var c=a.length,d=0;d<c;d++){var e=a[d];b(a[e],e,a)}}else a=wQ(a.style.cssText),_.Gk(a,b)},yQ=function(a,b){b=void 0===b?function(){return!0}:b;var c=/!\s*important/i;xQ(a,function(d,e){!c.test(d)&&b(e,d)?a.style.setProperty(e,d,"important"):c.test(d)&&!b(e,d)&&a.style.setProperty(e,d,"")})},zQ=/\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,AQ=/.*domain\.test$/,BQ=/\.prod\.google\.com(:\d+)?$/,CQ=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},DQ=function(a){if(1==a.nodeType)return _.jx(a);a=a.changedTouches?a.changedTouches[0]:a;return new _.Qh(a.clientX,a.clientY)},EQ=function(a,b){if(b instanceof _.Th){var c=b.height;b=b.width}else throw Error("missing height argument");a.style.width=_.kx(b,!0);a.style.height=_.kx(c,!0)},FQ=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;if(c)if(/^\d+px?$/.test(c))a=parseInt(c,10);else{b=a.style.left;var d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=b;a.runtimeStyle.left=d;a=+c}else a=0;return a},GQ=function(a,b){if(_.xt){var c=FQ(a,b+"Left"),d=FQ(a,b+"Right"),e=FQ(a,b+"Top");a=FQ(a,b+"Bottom");return new _.Uw(e,d,a,c)}c=_.gx(a,b+"Left");d=_.gx(a,b+"Right");e=_.gx(a,b+"Top");a=_.gx(a,b+"Bottom");return new _.Uw(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))},IQ=function(a,b,c,d,e){var f=[];_.Gk(a,function(g,h){(g=HQ(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)},HQ=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(HQ(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(IQ(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},JQ=function(){this.D="&";this.m={};this.H=0;this.j=[]},LQ=function(a,b){var c="https://pagead2.googlesyndication.com"+b,d=KQ(a)-b.length;if(0>d)return"";a.j.sort(function(m,n){return m-n});b=null;for(var e="",f=0;f<a.j.length;f++)for(var g=a.j[f],h=a.m[g],k=0;k<h.length;k++){if(!d){b=null==b?g:b;break}var l=IQ(h[k],a.D,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.D;break}b=null==b?g:b}}a="";null!=b&&(a=e+"trn="+b);return c+a},KQ=function(a){var b=1,c;for(c in a.m)b=c.length>b?c.length:b;return 3997-b-a.D.length-1},MQ=function(){this.m=_.gg(23);this.D=Math.random()};MQ.prototype.j=function(a,b,c,d){if((c?this.D:Math.random())<(d||this.m))try{if(b instanceof JQ)var e=b;else e=new JQ,_.Gk(b,function(g,h){var k=e,l=k.H++,m={};m[h]=g;g=[m];k.j.push(l);k.m[l]=g});var f=LQ(e,"/pagead/gen_204?id="+a+"&");f&&_.AC(_.q,f)}catch(g){}};var NQ={Kf:"ins.adsbygoogle-ablated-ad-slot",Mf:"body ins.adsbygoogle",Lf:"iframe[id^=aswift_],iframe[id^=google_ads_frame]",Yf:".google-auto-placed",Zf:"ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]",bg:"iframe[id^=google_ads_iframe]",fg:"div[id^=div-gpt-ad]",vg:"ins.adsbygoogle[data-ad-format=autorelaxed]",wg:"div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",eg:"div.googlepublisherpluginad",Gg:"html > ins.adsbygoogle"},OQ=function(a){var b=_.ED(_.lw(_.ew(a)))||[];return!!uQ(a,function(c){if(!_.fa(c)||1!=c.nodeType)return!1;var d=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector;return!d||0<=_.ba(b,c)||_.ag(_.ww(NQ),function(e){return d.call(c,e)})})},hQ=function(a,b,c,d){d=void 0===d?null:d;var e=function(g){try{var h=JSON.parse(g.data)}catch(k){return}!h||h.googMsgType!==b||d&&/[:|%3A]javascript\(/i.test(g.data)&&!d(h,g)||c(h,g)};_.ab(a,"message",e);var f=!1;return function(){var g=!1;f||(f=!0,g=_.Ld(a,"message",e));return g}},PQ=function(a,b,c,d,e){if(!(0>=e)&&(c.googMsgType=b,a.postMessage(JSON.stringify(c),d),a=a.frames))for(var f=0;f<a.length;++f)1<e&&PQ(a[f],b,c,d,--e)},QQ=function(a,b){return a&&a.source?a.source===b||a.source.parent===b:!1},RQ=function(a){return.05>Math.abs(_.bI(a)-1)},rS=function(a){var b={bottom:"auto",clear:"none",display:"inline","float":"none",height:"auto",left:"auto",margin:0,"margin-bottom":0,"margin-left":0,"margin-right":"0","margin-top":0,"max-height":"none","max-width":"none",opacity:1,overflow:"visible",padding:0,"padding-bottom":0,"padding-left":0,"padding-right":0,"padding-top":0,position:"static",right:"auto",top:"auto","vertical-align":"baseline",visibility:"visible",width:"auto","z-index":"auto"};_.Qs(_.t(Object,"keys").call(Object,b),function(c){var d=a.style[_.bw(c)];("undefined"!==typeof d?d:a.style[_.dx(a,c)])||_.ex(a,c,b[c])});yQ(a)},sS=function(a){var b=812==a.screen.height&&375==a.screen.width||812==a.screen.width&&375==a.screen.height||414==a.screen.width&&896==a.screen.height||896==a.screen.width&&414==a.screen.height;return null!=(a.navigator&&a.navigator.userAgent&&a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/))&&b},tS={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1,NOSCRIPT:1},uS={IMG:" ",BR:"\n"},vS=function(a,b,c,d){if(!(a.nodeName in tS))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in uS)d&&"IMG"==a.nodeName&&a.hasAttribute("alt")&&b.push(" "+a.getAttribute("alt")),b.push(uS[a.nodeName]);else for(a=a.firstChild;a;)vS(a,b,c,d),a=a.nextSibling},wS=/ \xAD /g,xS=/\xAD/g,yS=/\u200B/g,zS=/ +/g,AS=/^\s*/;var kQ=function(a,b,c,d,e){_.IB.call(this);this.slotType=a;this.I=b;this.sd=c;this.l=d;this.Ha=e;this.state=1;this.C=new _.Qf;this.j=new _.Qf;this.m=new _.Qf};_.M(kQ,_.IB);var BS=function(a){return _.cb(function(b){return b.return(a.C.promise)})},CS=function(a){return _.cb(function(b){return b.return(a.j.promise)})},DS=function(a){return _.cb(function(b){return b.return(a.m.promise)})},lQ=function(a){var b=jQ(a.I,a.sd,function(c){"adError"===c.eventType?(a.m.resolve(),a.state=0):"adReady"===c.eventType&&1===a.state?(c.slotType!==a.slotType&&a.sendGen204("err_st",{cur_st:a.state,evt:c.eventType,adp_tp:c.slotType}),a.C.resolve(),a.state=2):"adClosed"===c.eventType&&2===a.state?(a.j.resolve(c.result),a.state=3):(a.sendGen204("err_st",{cur_st:a.state,evt:c.eventType}),a.state=0)},a.l);_.yo(a,b)};kQ.prototype.sendGen204=function(a,b){b.type=a;b.slot=this.slotType;this.Ha.j("fullscreen_tag",b)};var GS=function(a,b){var c=this;this.D=a;this.j=!1;this.H=b;this.m=iQ(this.H,264,function(d){c.j&&(ES||(d=Date.now()),c.D(d),ES?FS.call(_.q,c.m):_.q.setTimeout(c.m,17))})};GS.prototype.start=function(){this.j||(this.j=!0,ES?FS.call(_.q,this.m):this.m(0))};GS.prototype.stop=function(){this.j=!1};var FS=_.q.requestAnimationFrame||_.q.webkitRequestAnimationFrame,ES=!!FS&&!/'iPhone'/.test(_.q.navigator.userAgent);var HS=function(a,b,c,d){this.H=a;this.R=b;this.J=c;this.progress=0;this.l=null;this.j=!1;this.D=[];this.C=null;this.m=new GS((0,_.Ls)(this.P,this),d)};HS.prototype.P=function(a){if(this.j)this.m.stop();else{null===this.l&&(this.l=a);this.progress=(a-this.l)/this.J;1<=this.progress&&(this.progress=1);a=this.C?this.C(this.progress):this.progress;this.D=[];for(var b=0;b<this.H.length;b++)this.D.push((this.R[b]-this.H[b])*a+this.H[b]);this.A();1==this.progress&&(this.m.stop(),this.I())}};HS.prototype.I=function(){};HS.prototype.A=function(){};HS.prototype.stop=function(){this.j=!0};var IS=function(a){return a*a*a},JS=function(a){a=1-a;return 1-a*a*a};var KS=function(a,b,c,d,e,f,g,h){HS.call(this,[b],[c],d,f);this.ra=a;this.G=e;this.o=g?g:null;this.C=h||null};_.M(KS,HS);KS.prototype.A=function(){var a={};a[this.G]=this.D[0]+"px";_.ex(this.ra,a)};KS.prototype.I=function(){this.o&&this.o()};var MS=function(a,b,c,d){_.IB.call(this);var e=this;this.j=a;this.C=b;this.l=c;this.m=d?rQ:{};_.ab(this.j,this.C,this.l,this.m);_.yo(this,function(){return void LS(e)})};_.M(MS,_.IB);var LS=function(a){a.j&&_.Ld(a.j,a.C,a.l,a.m)},NS=function(a){this.D=a;this.j=[];this.m=0};NS.prototype.add=function(a){var b=Date.now();this.j.push({time:b,coords:a});for(a=this.m;a<this.j.length;++a)if(b-this.j[a].time>=this.D)delete this.j[a];else break;this.m=a;a>=this.j.length&&(this.j=[],this.m=0)};var PS=function(a,b,c,d){_.IB.call(this);var e=this;this.l=a;this.target=b;this.N=c||b;this.ma=d||100;this.A=this.o=this.T=!1;this.I=this.j=this.m=this.C=this.G=this.P=this.J=this.R=null;this.wa=new MS(this.N,"mousedown",function(f){0==f.button&&OS(e,f)},!0);_.Un(this,this.wa);this.ya=new MS(this.N,"touchstart",function(f){return OS(e,f)},!0);_.Un(this,this.ya);this.va=new MS(this.N,"click",function(f){e.T?e.T=!1:f.stopPropagation()},!0);_.Un(this,this.va)};_.M(PS,_.IB);var QS=function(a){a=a.touches&&a.touches[0]||a;return new _.Qh(a.clientX,a.clientY)};PS.prototype.W=function(){if(this.C&&this.m&&this.j){var a=this.C,b=sQ(this.j,this.m);var c=new _.Qh(a.x+b.x,a.y+b.y);a=this.target;c instanceof _.Qh?(b=c.x,c=c.y):(b=c,c=void 0);a.style.left=_.kx(b,!1);a.style.top=_.kx(c,!1)}};PS.prototype.da=function(){};PS.prototype.L=function(){var a=this.target,b=_.ow(a);var c=DQ(a);b=DQ(b);c=new _.Qh(c.x-b.x,c.y-b.y);a=GQ(a,"margin");return sQ(c,new _.Qh(a.left,a.top))};var OS=function(a,b){a.o&&RS(a);a.o=!0;a.C=a.L();a.m=QS(b);a.j=a.m;a.I=new NS(a.ma);a.I.add(a.m);a.R=new MS(a.l,"mousemove",(0,_.Ls)(a.ea,a),!0);_.Un(a,a.R);a.J=new MS(a.l,"touchmove",(0,_.Ls)(a.ea,a),!0);_.Un(a,a.J);a.P=new MS(a.l,"mouseup",(0,_.Ls)(a.fa,a),!0);_.Un(a,a.P);a.G=new MS(a.l,"touchend",(0,_.Ls)(a.fa,a),!0);_.Un(a,a.G)};PS.prototype.ea=function(a){if(this.o)if(a.preventDefault(),this.j=QS(a),this.I.add(this.j),this.A)this.W();else{var b=this.m,c=this.j;a=b.x-c.x;b=b.y-c.y;10<=Math.sqrt(a*a+b*b)&&(this.W(),this.A=!0)}};PS.prototype.fa=function(a){this.A?(a.preventDefault(),this.j=QS(a),this.da()):this.T=!0;RS(this)};var RS=function(a){a.o=!1;a.A=!1;a.C=null;a.m=null;a.j=null;a.I=null;a.R&&LS(a.R);a.J&&LS(a.J);a.P&&LS(a.P);a.G&&LS(a.G)};var VS=function(a,b,c,d,e,f,g,h,k,l,m){_.IB.call(this);var n=this;this.P=a;this.la=b;this.T=c;this.o=d;this.ma=f||function(){};this.ha=g||function(){};this.R=h;this.Ha=k;this.ea=l;this.fa=m;_.yo(this,function(){return SS(n,!0)});this.A=_.Kd("INS",b.document);_.yo(this,function(){return n.A=null});this.m=null;HTMLElement.prototype.attachShadow&&!qQ(this.R,1013,function(){n.m=_.Kd("DIV",b.document);n.m.className="grippy-host";n.m.attachShadow({mode:"closed"}).appendChild(n.A);_.yo(n,function(){return n.m=null});return!0})&&(this.m=null);this.G=this.l=this.I=!1;this.L=0;this.j=e;this.N=!1;this.C=this.da=null;this.W=b.innerHeight;this.aa="true"===this.P.scroll_detached;this.J="true"===this.P.dismissable;this.ya="true"===this.P.draggable||"top"!=this.j;this.va=this.P.expId||"";this.na=this.P.qemId||"";a=parseInt(this.P.z_index_override,10);this.ca=isNaN(a)?null:a;this.wa=new _.WH(b);!this.J&&_.q.navigator.userAgent.match(/iPhone OS 7/)&&b.setInterval(function(){var p=n.la.innerHeight;if(2>Math.abs(p-460)||2>Math.abs(p-529))p<n.W&&2>Math.abs(_.cI(n.la)-n.L-68)&&(n.N=!0,n.l&&TS(n)),n.W=p},300);US(this,this.A)};_.M(VS,_.IB);var US=function(a,b){rS(b);_.li(b,{"background-color":"#FAFAFA",display:"block",position:"relative","z-index":1,height:"5px","box-shadow":"top"==a.j?"rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px":"rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"});if("top"==a.j){var c={position:"absolute",top:a.o.height+"px",width:"100%"},d;_.li(null!=(d=a.m)?d:b,c)}var e=_.Kd("SPAN",a.la.document);e.appendChild(WS(a));var f=function(g){g.target===e&&(g.preventDefault&&g.preventDefault(),g.stopImmediatePropagation&&g.stopImmediatePropagation(),g.stopPropagation&&g.stopPropagation())};_.ab(e,"click",f);_.yo(a,function(){return _.Ld(e,"click",f)});XS(a,e);b.className="ee";b.appendChild(e)},XS=function(a,b){var c={};a=(c.display="block",c.width="80px",c.height="45px",c[a.j]="0",c.left="0%",c.marginLeft="0px",c["pointer-events"]="none",c);c=b.getElementsByTagName("svg")[0];_.li(b,a);yQ(c)},YS=function(a){var b;return null!=(b=a.m)?b:a.A},WS=function(a){switch(a.j){case "top":var b="dropShadowBottom";var c="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";var d="0";var e="up";var f=nQ;break;case "bottom":b="dropShadowTop",c="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z",d="25",e="down",f=oQ}var g=a.la.document,h=g.createElementNS("http://www.w3.org/2000/svg","svg");h.style.setProperty("margin","0 0 0 0px","important");h.style.setProperty("position","absolute","important");h.style.setProperty(a.j,"0","important");h.style.setProperty("left","0%","important");h.style.setProperty("display","block","important");h.style.setProperty("width","80px","important");h.style.setProperty("height","30px","important");h.style.setProperty("transform","none","important");h.style.setProperty("pointer-events","initial","important");a=g.createElementNS("http://www.w3.org/2000/svg","defs");var k=g.createElementNS("http://www.w3.org/2000/svg","filter");k.setAttribute("id",b);k.setAttribute("filterUnits","userSpaceOnUse");k.setAttribute("color-interpolation-filters","sRGB");var l=g.createElementNS("http://www.w3.org/2000/svg","feComponentTransfer");l.setAttribute("in","SourceAlpha");l.setAttribute("result","TransferredAlpha");var m=g.createElementNS("http://www.w3.org/2000/svg","feFuncR");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncG");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncB");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");l.setAttribute("in","TransferredAlpha");l.setAttribute("stdDeviation","2");k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feOffset");l.setAttribute("dx","0");l.setAttribute("dy","0");l.setAttribute("result","offsetblur");k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feMerge");l.appendChild(g.createElementNS("http://www.w3.org/2000/svg","feMergeNode"));m=g.createElementNS("http://www.w3.org/2000/svg","feMergeNode");m.setAttribute("in","SourceGraphic");l.appendChild(m);k.appendChild(l);a.appendChild(k);h.appendChild(a);a=g.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",c);a.setAttribute("stroke","#FAFAFA");a.setAttribute("stroke-width","1");a.setAttribute("fill","#FAFAFA");a.style.setProperty("filter","url(#"+b+")");h.appendChild(a);b=g.createElementNS("http://www.w3.org/2000/svg","rect");b.setAttribute("x","0");b.setAttribute("y",d);b.setAttribute("width","80");b.setAttribute("height","5");b.style.setProperty("fill","#FAFAFA");h.appendChild(b);d=g.createElementNS("http://www.w3.org/2000/svg","g");d.setAttribute("class",e);d.setAttribute("stroke","#616161");d.setAttribute("stroke-width","2px");d.setAttribute("stroke-linecap","square");f(d);h.appendChild(d);return h},ZS=function(a,b){for(var c=a.A.getElementsByTagName("svg")[0].getElementsByTagName("g")[0],d;d=c.firstChild;)c.removeChild(d);switch(a.j){case "top":(b?oQ:nQ)(c);break;case "bottom":(b?nQ:oQ)(c)}},$S=function(a,b,c,d){a.Ha.j("flgr",{i:b,dc:a.l?"1":"0",fdc:c?"1":"0",ds:a.J?"1":"0",expId:a.va,sc:a.aa?"1":"0",off:d,vw:_.hl(a.la).clientWidth,req:a.T.src,tp:a.j,h:a.o.height,w:a.o.width,qemId:a.na},!0,1)},TS=function(a){if(!a.I){var b=parseInt(a.C.style[a.j],10);if(b){a.I=!0;var c=-b/.1;"bottom"==a.j&&sS(a.la)&&qQ(a.R,404,function(){return aT(a,"0px",c,"ease-out")});ZS(a,!1);b=new KS(a.C,b,0,c,a.j,a.R,function(){a.I=!1;a.l=!1;a.G=!1;bT(a);a.C.setAttribute("data-anchor-status","displayed");a.C.setAttribute("data-anchor-shown",!0);ZS(a,!1)},JS);a.fa();b.j=!1;b.m.start()}else a.l=!1,a.G=!1}},SS=function(a,b){if(!a.I&&a.C){var c=parseInt(a.C.style[a.j],10),d=-a.o.height-(b?30:0),e=(c-d)/.1;"bottom"==a.j&&sS(a.la)&&qQ(a.R,405,function(){return aT(a,"21px",e,"ease-in")});b||ZS(a,!0);c===d?(a.l=!b,a.G=b):(a.I=!0,c=new KS(a.C,c,d,e,a.j,a.R,function(){a.I=!1;a.l=!b;(a.G=b)||ZS(a,!0);b&&a.ma();a.C.setAttribute("data-anchor-status","dismissed")},IS),a.ea(),c.j=!1,c.m.start())}},eT=function(a,b){if("bottom"!==a.j&&"top"!==a.j)throw Error("unsupported reactive type");var c=function(f){f.preventDefault();a.I||(a.N=!0,a.l?TS(a):SS(a,a.J),$S(a,"c",!a.l,0))},d=a.A;_.ab(d,"click",c);_.yo(a,function(){return _.Ld(d,"click",c)});a.m&&(_.ab(a.m,"click",c),_.yo(a,function(){return a.m&&_.Ld(a.m,"click",c)}));_.ex(b,{opacity:1});var e=a.la.document;e&&(a.C=b,a.ya&&(a.da=new ("top"==a.j?cT:dT)(a,e,a.o.height,b,a.A),_.Un(a,a.da)),e={position:"fixed",left:"0px"},e[a.j]=-a.o.height-30+"px",_.ex(b,e),_.li(b,{overflow:"visible",background:"#FAFAFA"}),pQ(a.wa,function(f){var g=null==a.ca?2147483647:a.ca;_.ex(b,{zIndex:null==f?g:Math.min(f,g)})}),TS(a))},aT=function(a,b,c,d){_.ex(a.T,{transition:c/1E3+"s","transition-timing-function":d,"margin-top":b})},bT=function(a){a.ha();a.ha=function(){}},fT=function(a,b,c,d,e){PS.call(this,b,d,e);this.na=a;this.ca=c};_.M(fT,PS);fT.prototype.da=function(){var a=this.na;if(!a.I){var b=parseInt(a.C.style[a.j],10);b>=-(a.o.height/2)?(TS(a),$S(a,"d",!1,b)):(SS(a,a.J),$S(a,"d",!0,b))}};fT.prototype.W=function(){if(null!==this.C&&null!==this.m&&null!==this.j){var a=this.ha(this.C.y,sQ(this.j,this.m).y);0<a&&(a=0);a<-this.ca&&(a=-this.ca);var b={};b[this.aa()]=a+"px";_.ex(this.target,b)}};var cT=function(a,b,c,d,e){fT.call(this,a,b,c,d,e)};_.M(cT,fT);cT.prototype.L=function(){return new _.Qh(0,parseInt(this.target.style.top,10))};cT.prototype.ha=function(a,b){return b-a};cT.prototype.aa=function(){return"top"};var dT=function(a,b,c,d,e){fT.call(this,a,b,c,d,e)};_.M(dT,fT);dT.prototype.L=function(){return new _.Qh(0,parseInt(this.target.style.bottom,10))};dT.prototype.ha=function(a,b){return a-b};dT.prototype.aa=function(){return"bottom"};var gT=function(a,b,c){_.IB.call(this);var d=this;this.m=a;this.j=b;this.C=c;this.N=null;_.yo(this,function(){return d.N=null})};_.M(gT,_.IB);var hT=function(a,b,c,d){if(!a.N){a.N=[];for(var e=a.m.parentElement;e;){a.N.push(e);if(a.C===e)break;e=e.parentNode&&1===e.parentNode.nodeType?e.parentNode:null}}e=a.N.slice();!c&&a.C===e[e.length-1]&&e.pop();var f;if(d)for(c=e.length-1;0<=c;--c)(f=e[c])&&b.call(a,f,c,e);else for(c=0;c<e.length;++c)(f=e[c])&&b.call(a,f,c,e)};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var iT=function(a,b,c){null!==b&&null!==gQ(a.getAttribute("width"))&&a.setAttribute("width",b);null!==c&&null!==gQ(a.getAttribute("height"))&&a.setAttribute("height",c);null!==b&&(a.style.width=b+"px");null!==c&&(a.style.height=c+"px")};var qT=function(a,b,c,d,e,f){gT.call(this,a,b,f);var g=this;this.o=d;this.Ha=e;this.L=this.ya=this.ea=0;this.tc=!1;this.fa=0;this.va=!1;this.I=null;this.W=this.T=!1;this.G=null;this.ca=GQ(b.document.body,"padding");this.A=GQ(b.document.body,"padding");this.J=0;this.ac=this.P=!1;this.ha=!0;this.l=c;this.R=jT(this);this.da=null;this.ob=this.na=this.ma=this.Db=this.uc=this.vc=!1;this.Df=_.jw(b||window).height/2;this.yc=_.jw(b||window).height;this.Cb=tQ(b);this.aa=this.Ka=!1;kT(this);this.hc=iQ(this.o,266,function(){lT(g)});this.ic=iQ(this.o,267,function(){lT(g)});this.jc=iQ(this.o,268,function(){if(g.P&&g.C&&g.I){var h=g.I;h.L=_.cI(h.la)}h=_.cI(g.j);var k=h-g.ea;_.A(_.pB)?mT(g,k):nT(g,k);g.ob&&(0<k&&(g.L+=k),g.Ka=g.Cb-h<=g.yc,g.ea=h);lT(g)});this.kc=iQ(this.o,269,function(){oT(g)});this.nc=iQ(this.o,270,function(h){pT(g,h)});this.oc=iQ(this.o,271,function(h){if(h&&h.touches){g.G="touchmove";g.J=h.touches.length;g.W=!0;lT(g);if(!g.tc&&h.touches&&0!=h.touches.length&&h.touches[0]){h=h.touches[0].pageY;var k=h-g.ya;g.ya=h;h=k}else h=0;0<h&&(g.L+=h);_.A(_.pB)?mT(g,h):nT(g,h)}});this.rc=iQ(this.o,272,function(h){h&&h.touches&&h.touches[0]&&(g.G="touchstart",g.J=h.touches.length,g.W=!1,lT(g),g.ya=h.touches[0].pageY,h=h.target,g.tc=h&&"top"==g.l&&g.T&&g.I&&YS(g.I)&&1===h.nodeType?_.pw(YS(g.I),h):!1)});this.Za=iQ(this.o,273,function(){g.ma||(g.ma=!0,_.Ld(g.m,"load",g.Za),g.na&&!g.ac||lT(g))});_.ab(a,"load",this.Za);_.yo(this,function(){return _.Ld(a,"load",g.Za)})};_.M(qT,gT);var sT=function(a){var b=a.j;_.ab(b,"orientationchange",a.hc);_.ab(b,"resize",a.ic);_.ab(b,"scroll",a.jc);_.ab(b,"touchcancel",a.kc);_.ab(b,"touchend",a.nc);_.ab(b,"touchmove",a.oc);_.ab(b,"touchstart",a.rc);_.yo(a,function(){return rT(a)})},rT=function(a){var b=a.j;_.Ld(b,"orientationchange",a.hc);_.Ld(b,"resize",a.ic);_.Ld(b,"scroll",a.jc);_.Ld(b,"touchcancel",a.kc);_.Ld(b,"touchend",a.nc);_.Ld(b,"touchmove",a.oc);_.Ld(b,"touchstart",a.rc)};qT.prototype.Jf=function(a){var b=this.C;if(b&&!this.I){for(var c in tT)!tT.hasOwnProperty(c)||c in a||(a[c]=tT[c]);this.vc="true"===a.use_manual_view||"top"===this.l||!!_.ql(this.j).wasReactiveAdConfigReceived[2];this.uc="true"===a.use_important;if(c=a.af_l)this.na="true"===c;this.ob="true"===a.wait_for_scroll||"top"==this.l;uT(this,a);this.I=vT(this,a);a=this.R.height+5;"bottom"==this.l&&sS(this.j)&&(a+=20);this.da=new _.Th(this.R.width,a);this.Ka=this.yc>=this.Cb;a=this.C;c=this.I&&YS(this.I);a&&c&&("top"==this.l?a.appendChild(c):a.insertBefore(c,a.firstChild));sT(this);this.T=!0;b.setAttribute("data-anchor-status","ready-to-display")}};var uT=function(a,b){var c=parseInt(b.ht,10),d=0<c?c:null;b=parseInt(b.wd,10);var e=0<b?b:null;null!=d&&(a.R.height=d);null!=e&&(a.R.width=e);hT(a,function(f){iT(f,e,d)},!1,!0);iT(a.m,e,d)},vT=function(a,b){b=new VS(b,a.j,a.m,a.R,a.l,function(){if(!a.va){a.va=!0;rT(a);var c=a.C;_.nw(c);wT(a);c&&(c.style.display="none")}},function(){return void xT(a)},a.o,a.Ha,function(){_.A(_.pB)&&!a.aa&&(a.aa=!0,mT(a,null));_.HK(a.K,a.slotId)},function(){_.A(_.pB)&&a.aa&&(a.aa=!1,mT(a,null));a.vf&&_.IK(a.K,a.slotId)});_.Un(a,b);return b},kT=function(a){if(a.ha){var b=a.C;b&&(b.style.display="none");wT(a);a.ha=!1}};qT.prototype.Ab=function(){this.ac=!0;if(!this.P&&yT(this)&&(this.ma||!this.na)){var a=this.C;a&&(zT(this),hT(this,function(b){rS(b)},!0),eT(this.I,a),AT(this),this.P=!0,(a=this.m.contentWindow)&&PQ(a,"ig",{rr:"vis-aa"},"*",2))}};var AT=function(a){var b=a.C;if(b){var c=a.I,d=c.la,e=_.cI(d);10>Math.abs(e-c.L)||(d=e+10+_.hl(d).clientHeight>_.hl(d).offsetHeight,d=10>e||d,c.aa||c.N||c.I||(c.l||d?c.l&&d&&TS(c):SS(c,!1)),c.L=e);a.ha||(_.A(_.pB)?BT(a,CT(a)):a.j.document.body&&DT(a.j.document.body,CT(a)),b.style.display="block",a.ha=!0)}},zT=function(a){var b=a.C;if(b&&a.m.parentElement){EQ(b,a.da);var c=a.j.innerWidth;_.hl(a.j).scrollWidth>c?b.style.width=c:b.style.width="100%";ET(a)}},ET=function(a){hT(a,function(c){EQ(c,a.R);c.style.width="100%"},!1,!0);a.m.style.display="block";a.m.style.margin="0 auto";if(a.uc){var b=a.C;vQ(b,function(c){yQ(c,function(d){return c===b&&/display|bottom/i.test(d)?!1:!0});if("svg"===c.nodeName)return!1})}},FT=function(a){if("bottom"!==a.l&&"top"!==a.l)throw Error("Unexpected position: "+a.l);},CT=function(a){FT(a);var b=GQ(a.j.document.body,"padding");"bottom"==a.l&&(b.bottom+=a.da.height+25);return b},jT=function(a){FT(a);var b=a.j.innerWidth;a=_.Yf(_.Zf,a.m).height||+a.m.height||0;return new _.Th(b,a)},oT=function(a){a.G="touchcancel";_.q.setTimeout(iQ(a.o,274,function(){"touchcancel"===a.G&&(a.J=0,a.W=!1,lT(a))}),1E3)},pT=function(a,b){if(b&&b.touches){a.G="touchend";var c=b.touches.length;2>c?_.q.setTimeout(iQ(a.o,256,function(){"touchend"===a.G&&(a.J=c,a.W=!1,lT(a))}),1E3):(a.J=c,lT(a));a.P&&!RQ(a.j)&&SS(a.I,!0)}},nT=function(a,b){if("top"==a.l&&a.T&&a.I&&a.P&&0>b){var c=GT(a);a.fa<c&&(a.fa=Math.min(Math.floor(a.fa-b),c),a.j.document.body.style.paddingTop=a.fa+"px")}},mT=function(a,b){var c=a.ha?GT(a,a.aa):a.ca.top;if("top"===a.l&&a.j.document.body&&a.T&&a.I&&a.P&&a.A.top!==c&&0!==b){var d=_.Vw(a.A);null===b?(d.top=c,BT(a,d)):(0<b&&a.A.top>c&&(d.top=Math.max(c,a.A.top-b),BT(a,d,!1)),0>b&&a.A.top<c&&(d.top=Math.min(c,a.A.top-b),BT(a,d,!1)))}},BT=function(a,b,c,d){c=void 0===c?!0:c;var e=a.A.top-b.top,f=_.cI(a.j);f<e&&(void 0===d||!d)||(DT(a.j.document.body,b),a.A=b,c&&a.j.scrollTo(0,f-e))},wT=function(a){if(_.A(_.pB))BT(a,a.ca,!0,!0);else{a.ea=_.cI(a.j);if(a.j.document.body){var b=GQ(a.j.document.body,"padding");DT(a.j.document.body,a.ca)}"top"==a.l&&b&&0<b.top&&a.j.scrollTo(0,a.ea-b.top)}},lT=function(a){!a.T||a.va||2<=a.J&&a.W||!yT(a)?kT(a):(a.Ab(),AT(a))};qT.prototype.wa=function(){return _.tl(this.j)};var yT=function(a){if(!a.wa())return!1;var b=a.j;if(!a.P&&a.ob)switch(a.l){case "bottom":return a.L>=a.Df||a.Ka;case "top":return a.L>GT(a)}return RQ(b)},GT=function(a,b){b=void 0===b?!1:b;return _.A(_.pB)?b?a.ca.top+30:a.ca.top+30+a.da.height-5:a.da.height+30-5},DT=function(a,b){a.style.paddingTop=b.top+"px";a.style.paddingRight=b.right+"px";a.style.paddingBottom=b.bottom+"px";a.style.paddingLeft=b.left+"px"},xT=function(a){a.vc&&!a.Db&&(a.Db=!0,qQ(a.o,257,function(){var b={msg_type:"manual-send-view"},c=a.m.contentWindow;c&&c.postMessage(a.j.JSON.stringify(b),"*")}))};qT.prototype.Gf=function(a){this.m=a;ET(this)};var tT={ui:"gr",gvar:"ar",scroll_detached:"true",dismissable:"false"};var IT=function(a){this.j=null;this.D=a.match(_.rw)[3]||"";this.H=HT(a);this.m=!1},JT=function(a,b){b?a.j=new RegExp("\\b("+b.join("|").toLowerCase()+")\\b","ig"):a.j=null},MT=function(a,b,c){if(_.ag(["data-google-vignette","data-google-interstitial"],function(f){return"false"===b.getAttribute(f)||b.closest&&!!b.closest("["+f+'="false"]')}))return!1;var d=b.href,e=d&&(d.match(_.rw)[3]||null);if(!KT(a,b,d,e,c))return!1;a.m=!!e&&LT(a,e);return a.m||!c&&!OQ(b)&&/^https?:\/\//i.test(d)&&!/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)},KT=function(a,b,c,d,e){if(!c)return!1;switch(b.target){case "_top":case "_parent":break;case "":case "_self":if(e)return!1;break;default:return!1}return!d||LT(a,d)&&HT(c)==a.H?!1:!0},NT=function(a,b){if(!b||!a.j)return[];var c=[];vS(b,c,!0,!0);b=c.join("");b=b.replace(wS," ").replace(xS,"");b=b.replace(yS,"");b=b.replace(zS," ");" "!=b&&(b=b.replace(AS,""));if(!b)return[];a=b.match(a.j);b=[];for(c=0;a&&c<a.length;c++){var d=a[c].toLowerCase();0<=_.ba(b,d)||b.push(d)}return b},LT=function(a,b){return b.replace(OT,"")==a.D.replace(OT,"")},HT=function(a){a=a.match(_.rw);var b=a[6];return(a[5]||"")+(b?"?"+b:"")||"/"},OT=/^(www\.|m\.|mobile\.)*/i;var PT=function(a,b,c){gT.call(this,a,b,c);this.l=null;this.I=b.document;this.o=new _.ZH(new _.WH(b))};_.M(PT,gT);var UT=function(a){QT(a,!1);var b=a.C;b&&(hT(a,function(c){_.li(c,RT);rS(c)},!0),a.m.setAttribute("width",""),a.m.setAttribute("height",""),_.ex(a.m,RT),_.ex(a.m,ST),_.ex(b,TT),_.ex(b,{background:"transparent"}),_.li(b,{display:"none",position:"fixed"}),rS(b),rS(a.m))},QT=function(a,b){var c=a.C;c&&(b?(_.$H(a.o),_.li(c,{display:"block"}),a.I.body&&!a.l&&(a.l=_.eI(a.I,a.j)),c.setAttribute("tabindex","0"),c.setAttribute("aria-hidden","false"),a.I.body.setAttribute("aria-hidden","true")):(_.aI(a.o),_.li(c,{display:"none"}),a.l&&(a.l(),a.l=null),a.I.body.setAttribute("aria-hidden","false"),c.setAttribute("aria-hidden","true")))},TT={backgroundColor:"white",opacity:"1",position:"fixed",left:"0px",top:"0px",margin:"0px",padding:"0px",display:"none",zIndex:"2147483647"},RT={width:"100vw",height:"100vh"},ST={left:"0",position:"absolute",top:"0"};var XT=function(a,b,c,d,e){e=void 0===e?{}:e;_.IB.call(this);var f=this;this.j=a;this.T=b;this.R=c;this.Ha=d;this.ob={};this.uc=iQ(this.R,168,function(g,h){return void VT(f,g,h)});this.yc=iQ(this.R,169,function(g,h){f.Ha.j("ras::xsf",{c:h.data.substring(0,500),u:f.j.location.href.substring(0,500)},!0,.1);return!0});this.ma=[];WT(this,this.ob,e);this.ma.push(hQ(this.j,"sth",this.uc,this.yc))};_.M(XT,_.IB);var VT=function(a,b,c){try{if(!a.Za(c.origin)||a.T&&!QQ(c,a.T.contentWindow))return}catch(f){return}var d=b.msg_type,e;"string"===typeof d&&(e=a.ob[d])&&qQ(a.R,168,function(){e.call(a,b,c)})};XT.prototype.Za=function(a){return _.Kw[a]||zQ.test(a)||AQ.test(a)||BQ.test(a)};XT.prototype.H=function(){for(var a=_.w(this.ma),b=a.next();!b.done;b=a.next())b=b.value,b();this.ma.length=0;_.IB.prototype.H.call(this)};var aU=function(a,b,c,d,e,f,g,h){XT.call(this,a,b,c,e,{fullscreenApi:h});var k=this;this.G=NaN;this.va=!1;this.m=null;this.ha=!1;var l;this.wa=null!=(l=g.i_expid)?l:null;this.W=_.ge();this.ca=!0;this.Ka=!1;this.jc="true"===g["i-fvs"];this.ea=!0;this.fa=null;this.I=0;var m;this.Ab=null!=(m=g.qid)?m:null;this.C=this.A=this.o=null;this.aa=void 0;this.na=null;this.P=d;this.J=new IT(a.location.href);this.L=f;this.hc="true"===g.check_screen_change;this.Db=_.t(Number,"isNaN").call(Number,Number(g.screen_size_threshold))?0:Number(g.screen_size_threshold);this.nc="true"===g.iobs&&!!this.j.IntersectionObserver;this.vc=_.Mo(function(){return void YT(k,{tth:Date.now()-k.I},.01)});this.ya="true"===g.click_bubble;var n,p;JT(this.J,null!=(p=null==(n=g.stop_word)?void 0:n.split(";"))?p:null);this.l=h?mQ(a,b.contentWindow,c,e):null;ZT(this);this.ya||$T(this)};_.M(aU,XT);var ZT=function(a){a.l&&(BS(a.l).then(function(){var b;null==(b=a.P.C)||b.setAttribute("data-vignette-loaded","true");a.N()}),CS(a.l).then(function(){return void bU(a)}),DS(a.l).then(function(){return void a.da()}))},WT=function(a,b,c){b["i-blur"]=function(){a.ha=!0;a.aa&&(a.ea=!0)};b["i-no"]=function(d){a.ca=!1;a.na=d.i_tslv?d.i_tslv:null};c.fullscreenApi||(b["i-adframe-load"]=function(){var d;null==(d=a.P.C)||d.setAttribute("data-vignette-loaded","true");d=_.je(_.vB);0<d?setTimeout(function(){return a.N()},d):a.N()},b["i-dismiss"]=function(){bU(a)},b.i_iif=function(){a.da()})};aU.prototype.N=function(a){a=void 0===a?!1:a;if(!this.G){this.G=_.ge();$T(this);if(a){var b;null==(b=this.P.C)||b.setAttribute("data-vignette-loaded","true")}YT(this,{aflvr:!0,al:this.G-this.W},.01)}};var bU=function(a){YT(a,{dis:Date.now()-a.I,dha:Number(a.ha)},.01);if(a.ha)cU(a)?a.j.history.back():dU(a);else if(_.q.setTimeout(function(){dU(a)},1E3),a.m){var b=Date.now();a.j.addEventListener("pagehide",function(){YT(a,{pg_hid:Date.now()-b},.01)});a.aa&&(a.ea=!1);eU(a,a.m.href)}};aU.prototype.da=function(){this.Ka=!0};var gU=function(a,b){return 864E5>_.ge()-a.W&&a.ca&&!a.Ka&&!cU(a)&&!!a.G&&(a.jc||!_.ql(a.j).wasReactiveAdVisible[9])&&!NT(a.J,b).length&&RQ(a.j)&&fU(a)},hU=function(a,b,c){a=_.Kd("LINK",a.j.document);a.setAttribute("rel",c);a.setAttribute("href",b);return a},iU=function(a,b){for(b=b.target;b;){if("A"==b.nodeName){if(MT(a.J,b,b.ownerDocument!=a.j.document))return b;break}b=b.parentElement}return null};aU.prototype.kc=function(){this.ea&&(cU(this)?(YT(this,{fnv:1},.01),eU(this,this.m.href)):(this.vc(),dU(this)))};aU.prototype.H=function(){XT.prototype.H.call(this);cU(this)&&eU(this,this.m.href);this.C&&(_.Ld(this.j.document,"click",this.C),this.C=null)};var dU=function(a){a.I&&(a.va=!0,a.C&&(_.Ld(a.j.document,"click",a.C),a.C=null),a.A&&a.A.parentNode&&(a.A.parentNode.removeChild(a.A),a.A=null),a.o&&a.o.parentNode&&(a.o.parentNode.removeChild(a.o),a.o=null),QT(a.P,!1))},$T=function(a){if(!a.C){a.C=iQ(a.R,527,function(e){return jU(a,e)});var b=a.ya?{}:rQ;_.ab(a.j.document,"click",a.C,b);for(var c=a.j.frames,d=0;d<c.length;d++)try{_.ab(c[d].document,"click",a.C,b)}catch(e){}}},YT=function(a,b,c){a.Ab&&(b.qid=a.Ab);a.wa&&(b.eid=a.wa);a.fa&&(b.lnk=a.fa.substr(0,100),a.J.m||(b.inter="1"));var d=_.Vm();d&&(b.ns=String(d));b.fs=String(_.ge()-a.W);b.req=a.T.src;b.ptt=17;null!=a.l&&(b.comm=!0);a.Ha.j("ia_evt",b,!0,c)},eU=function(a,b){a=a.j.location;var c=void 0===c?_.cx:c;a:{c=void 0===c?_.cx:c;for(var d=0;d<c.length;++d){var e=c[d];if(e instanceof _.rd&&e.Te(b)){b=_.td(b);break a}}b=void 0}a.replace(_.Na(b||_.rf))};aU.prototype.oc=function(a){if(!this.I&&this.m&&!this.D)if(a=a.preventDefaultTriggered_,!a&&MT(this.J,this.m,this.m.ownerDocument!=this.j.document)&&gU(this,this.m))if(this.Cb()){var b;YT(this,{lif:_.ge(),lase:this.G,latt:!(null==(b=this.P.C)||!b.getAttribute("data-vignette-loaded")),t:17},.1);this.I=Date.now();_.ql(this.j).wasReactiveAdVisible[8]=!0;this.fa=this.m.href.substr(0,100);this.nc||(this.l?_.q.IntersectionObserver||this.l.sd.postMessage(JSON.stringify({eventType:"visible",googMsgType:"fullscreen"}),"*"):(b={},b=(b.msg_type="i-view",b),this.T.contentWindow.postMessage(JSON.stringify(b),"*")));b=this.m.href;this.A=hU(this,b,"prerender");this.o=hU(this,b,"prefetch");this.j.document.body.appendChild(this.A);this.j.document.body.appendChild(this.o);cU(this)||(this.j.location.hash="google_vignette");this.aa=iQ(this.R,526,(0,_.Ls)(this.kc,this));_.q.setTimeout(_.Ms(_.ab,this.j,"hashchange",this.aa),0);b=iQ(this.R,528,(0,_.Ls)(this.tc,this));_.ab(this.j,"pagehide",b);QT(this.P,!0)}else eU(this,this.m.href);else kU(this,this.m,a),a?this.m=null:eU(this,this.m.href)};aU.prototype.Cb=function(){return!0};var jU=function(a,b){if(b&&!b.defaultPrevented&&!a.I&&!a.D&&!a.m){var c=iU(a,b);c&&(gU(a,c)?(a.m=c,CQ(b),b.preventDefault=function(){return b&&(b.preventDefaultTriggered_=!0)},_.q.setTimeout((0,_.Ls)(a.oc,a,b),0)):kU(a,c,!1))}},cU=function(a){return-1!=a.j.location.hash.indexOf("google_vignette")};aU.prototype.tc=function(){this.va||YT(this,{ttr:Date.now()-this.I},.01);dU(this)};var kU=function(a,b,c){var d=a.j,e=_.ql(d),f=!fU(a);e={zm:Number(RQ(d)),sz:Number(f),fc:Number(a.ca),vp:Number(cU(a)),al:Number(!!a.G),fsi:Number(!!e.wasReactiveAdVisible[9]),ag:Number(864E5>_.ge()-a.W)};c&&(e.wsdojl=!0);f&&(e.rs_sz=a.L.width+"x"+a.L.height,e.cr_sz=d.innerWidth+"x"+d.innerHeight);b=NT(a.J,b);b.length&&(e.sw=b.join());a.na&&(e.ts=a.na);YT(a,e,.01)},fU=function(a){if(a.hc){var b=a.j.innerWidth/a.L.width-1;if(0>b&&Math.abs(b)>a.Db)return!1;b=a.j.innerHeight/a.L.height-1;return 0>b&&Math.abs(b)>a.Db?!1:!0}return a.L.width<a.L.height===_.tl(a.j)};var lU=function(){this.j=null};var mU=function(a,b,c,d,e,f,g){qT.call(this,c,d,2===b?"top":"bottom",new _.aJ(a),new MQ,e);this.K=f;this.slotId=g;this.vf=_.GK(this.K,this.slotId);2===b&&_.HK(this.K,this.slotId)};_.M(mU,qT);mU.prototype.wa=function(){return 0===(0,_.sl)()||qT.prototype.wa.call(this)};var nU=function(a,b,c){PT.call(this,b,a,c);UT(this)};_.M(nU,PT);var oU=function(a,b,c,d,e,f,g,h,k,l){l=void 0===l?null:l;aU.call(this,a,b,d,new nU(a,b,c),new MQ,e,f,_.A(_.nm));this.ac=g;this.rc=h;this.ic=k;this.localStorage=l;_.Un(this,this.P)};_.M(oU,aU);oU.prototype.Cb=function(){var a;if(!(a=this.ac)){var b=_.B(lU),c=this.localStorage;try{var d;(d=!c)||(b.j=_.kl(c,this.ic),d=!(b.j&&_.jl(b.j)));if(d)a=!1;else{b.j.push(Date.now());var e=JSON.stringify(b.j);c.setItem("__lsv__",e);a=c.getItem("__lsv__")==e}}catch(f){a=!1}}return a};oU.prototype.Za=function(){return!0};oU.prototype.da=function(){aU.prototype.da.call(this);this.rc()};var pU={De:mU,Le:oU};_.cO(_m,_.hO).resolve(pU);})
