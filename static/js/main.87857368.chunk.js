(this.webpackJsonpappkan=this.webpackJsonpappkan||[]).push([[0],{11:function(e,t,n){e.exports=n(29)},16:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(4),a=n.n(o),l=(n(16),n(3)),c=n(6),d=n.n(c),g=n(5),s=n(7),u=n(8),m=n.n(u),h=n(9),f=n.n(h),p=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)(3),c=Object(l.a)(a,2),u=c[0],h=c[1],p=Object(i.useState)(100),y=Object(l.a)(p,2),v=y[0],E=y[1];Object(i.useEffect)((function(){return k(),window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}}),[]);var k=function(){E(window.innerWidth)};return r.a.createElement("div",{id:"qr2",style:{display:"flex",flexDirection:"column",flex:1}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},r.a.createElement("div",{onClick:function(e){return h(1)},style:{margin:5,padding:10,width:10,height:10,backgroundColor:1===u?"lightgreen":"lightgrey"}}),r.a.createElement("div",{onClick:function(e){return h(2)},style:{margin:5,padding:10,width:10,height:10,backgroundColor:2===u?"lightgreen":"lightgrey"}}),r.a.createElement("div",{onClick:function(e){return h(3)},style:{margin:5,padding:10,width:10,height:10,backgroundColor:3===u?"lightgreen":"lightgrey"}}),r.a.createElement("div",{onClick:function(e){return function(){if(1===u){var e=document.getElementById("printqrcode");m()(e).then((function(e){var t=e.toDataURL("image/png"),n=document.createElement("a");n.href=t,n.download="store-qrcode.png",document.body.appendChild(n),n.click(),document.body.removeChild(n)}))}}()},style:{margin:5,padding:10,width:10,height:10,backgroundColor:3===u?"lightgreen":"lightgrey"}})),1===u&&r.a.createElement("header",{id:"printqrcode",style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",backgroundColor:"lightblue"}},r.a.createElement("p",null,n),r.a.createElement(s.QRCode,{id:"xprintqrcode",style:{display:"flex"},size:3*v/4,logoImage:d.a,value:"https://github.com/gcoro/react-qrcode-logo"})),2===u&&r.a.createElement("header",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)"}},r.a.createElement("div",null,"SCAN: ",n),r.a.createElement(f.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){if(o(e),void 0!==e&&""!==e)var t=t(e)},style:{width:"100%"},facingMode:"environment"})),3===u&&r.a.createElement("header",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",borderWidth:1,borderColor:"red"}},r.a.createElement(g.a,{url:"https://covidkan.tueng.org/link/link.html",style:{width:1*v/4}}),r.a.createElement(g.a,{url:"https://covidkan.tueng.org/link/link.html",style:{width:1*v/4}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n.p+"static/media/image_kan-256x256.904c77a7.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.87857368.chunk.js.map