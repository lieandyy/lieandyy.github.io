(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,n,t){e.exports=t(23)},19:function(e,n,t){},20:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),a=t(8),r=t.n(a),c=(t(19),t(20),t(9)),s=t(1),l=t(4),d=t(3),h=t(10),u=function e(){Object(s.a)(this,e)};u.randomUntil=function(e){return Math.floor(Math.random()*e)},u.randomFromTo=function(e,n){return Math.floor(Math.random()*(n-e))+e};var f=u,m=function e(n,t){var i=this;Object(s.a)(this,e),this.maxLength=10,this.speed=f.randomFromTo(3,8),this.update=function(){i.x+=i.directionX*i.speed,i.y+=i.directionY*i.speed},this.draw=function(e){var n={x:i.x+i.directionX*i.length,y:i.y+i.directionY*i.length};e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(n.x,n.y),e.stroke(),i.update()},this.isCollide=function(e){var n=document.getElementsByClassName("obstacle")[0];return"undefined"!==typeof n&&n.children.length>0&&i.x>=n.offsetLeft&&i.x<=n.offsetLeft+n.offsetWidth&&i.y>=n.offsetTop&&i.y<=n.offsetTop+n.offsetHeight||(i.x<0||i.x>e.width||i.y>e.height)},this.directionX=0,this.x=f.randomUntil(n.width),this.y=t?f.randomUntil(n.height/2):0,this.length=f.randomFromTo(1,this.maxLength),this.directionX=f.randomFromTo(-1,2)/2,this.directionY=1},v=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=n.call(this,e)).getWindowSize=function(){var e=i.state,n=e.screen,t=e.rainMax;n.width=window.innerWidth,n.height=window.innerHeight,t=Math.floor(.5*n.width),i.setState({screen:n,rainMax:t})},i.initializeRain=function(){for(var e=i.state,n=e.rainMax,t=e.screen,o=i.state.rains,a=0;a<n;a++)o.push(new m(t,!0));i.setState({rains:o})},i.animate=function(){var e=i.state.screen,n=document.getElementsByClassName("rain-canvas")[0].getContext("2d");n.strokeStyle="#FFFFFF",n.clearRect(0,0,e.width,e.height);var t=i.state.rains;0===t.length&&i.initializeRain(),t.forEach((function(o,a){o.draw(n),o.isCollide(e)&&(t.splice(a,1),t.push(new m(e)),i.setState({rains:t}))}))},i.componentDidMount=function(){window.addEventListener("resize",i.getWindowSize),i.getWindowSize(),setInterval(i.animate,1e3/120)},i.render=function(){var e=i.state.screen,n=i.props.component;return o.a.createElement("div",{className:"flex-center"},o.a.createElement("canvas",{width:e.width,height:e.height,className:"rain-canvas"}),o.a.createElement("div",{className:"obstacle"},n))},i.state={screen:{width:0,height:0},rains:[],rainMax:50},i}return t}(o.a.Component);function g(){var e=Object(c.a)(["\n            border: 1px solid black;\n            padding: 5px;\n        "]);return g=function(){return e},e}var w=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).introduction=function(e){var n=h.a.div(g());return o.a.createElement(n,null,o.a.createElement("p",null,"Hi, my name is ",e||"Andy Lie"))},e.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{component:e.introduction()}))},e}return t}(o.a.Component);var p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");b?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.708baf00.chunk.js.map