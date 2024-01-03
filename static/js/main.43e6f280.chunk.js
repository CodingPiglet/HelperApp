(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},16:function(e,t,n){e.exports=n(24)},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);n(14);var r=n(3),a=n(4),o=n(2),l=n(6),s=n(5),i=n(0),c=n.n(i),u=n(11),p=n.n(u);n(21),n(12),n(22);var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),r(e),a(e),o(e),l(e)}))},h=n(25),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=["Person E","Person I","Person N","Person A"],v=["Peacock","Mustard","Green","Plum","Scarlet","White"],w=["Hall","Lounge","Dining Room","Kitchen","Ballroom","Conservatory","Billiard Room","Library","Study"],y=["Rope","Candlestick","Knife","Wrench","Lead Pipe","Revolver"],E=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={cellEntry:a.props.value},a.handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(a.a)(n,[{key:"handleClick",value:function(){console.log("Initial click handler");var e=this.state;e.cellEntry=e.cellEntry+1,this.setState(e)}},{key:"render",value:function(){var e=this.props.row*this.props.num_players+this.props.player_num;return c.a.createElement("button",{style:{height:"30px",width:"80px"},onClick:this.props.onClick,id:this.props.info_type[0]+e,info_type:this.props.info_type},this.props.value)}}]),n}(c.a.Component);function k(e){var t=function(e){for(var t=[],n=0;n<e.num_players;n++)t.push(c.a.createElement("td",{key:n},c.a.createElement(E,{value:e.values[n],info_type:e.info_type,row:e.row,player_num:n,num_players:e.num_players,onClick:function(t){return e.onClick(t)}})));return t}(e);return c.a.createElement("tr",null,c.a.createElement("td",null,e.name),t)}var b=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"resetPage",value:function(){console.log("Hit the reset button")}},{key:"renderClueTableRow",value:function(e,t,n,r,a){var o=this;return c.a.createElement(k,{value:"1",values:r,onClick:function(e){return o.props.onClick(e,a)},name:t,row:e,info_type:a,num_players:n})}},{key:"renderClueSection",value:function(e,t,n,r){var a,o=[];"people"===e?a=v:"rooms"===e?a=w:"weapons"===e&&(a=y);for(var l=0;l<n;l++)o.push(c.a.createElement(c.a.Fragment,{key:l},this.renderClueTableRow(l,a[l],t,r.slice(l*t,(l+1)*t),e)));return o}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"people-rows"},c.a.createElement(h.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"People"),c.a.createElement("th",null,g[0]),c.a.createElement("th",null,g[1]),c.a.createElement("th",null,g[2]),c.a.createElement("th",null,g[3]))),c.a.createElement("tbody",null,this.renderClueSection("people",this.props.state.num_players,this.props.state.num_people,this.props.state.people)))),c.a.createElement("div",{className:"weapon-rows"},c.a.createElement(h.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Weapons"),c.a.createElement("th",null,g[0]),c.a.createElement("th",null,g[1]),c.a.createElement("th",null,g[2]),c.a.createElement("th",null,g[3]))),c.a.createElement("tbody",null,this.renderClueSection("weapons",this.props.state.num_players,this.props.state.num_weapons,this.props.state.weapons)))),c.a.createElement("div",{className:"room-rows"},c.a.createElement(h.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Rooms"),c.a.createElement("th",null,g[0]),c.a.createElement("th",null,g[1]),c.a.createElement("th",null,g[2]),c.a.createElement("th",null,g[3]))),c.a.createElement("tbody",null,this.renderClueSection("rooms",this.props.state.num_players,this.props.state.num_rooms,this.props.state.rooms)))))}}]),n}(c.a.Component);function C(){return console.log("Into state initializer"),{num_players:4,num_weapons:y.length,num_rooms:w.length,num_people:v.length,people:Array(4*v.length).fill(" "),rooms:Array(4*w.length).fill(" "),weapons:Array(4*y.length).fill(" ")}}var _=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).state=C();try{console.log("Trying to restore state");var o=JSON.parse(localStorage.getItem("curr_people")),l=JSON.parse(localStorage.getItem("curr_weapons")),s=JSON.parse(localStorage.getItem("curr_rooms"));if(console.log(o),null==o)throw new Error("Couldn't find people");if(null==l)throw new Error("Couldn't find weapons");if(null==s)throw new Error("Couldn't find rooms");a.state.people=o,a.state.weapons=l,a.state.rooms=s}catch(i){console.log("Starting from scratch")}return a}return Object(a.a)(n,[{key:"resetGame",value:function(){if(console.log("Reseting the game"),window.confirm("Reset?")){var e=C();this.setState(e)}}},{key:"handleClick",value:function(e){var t=this.state.people,n=this.state.rooms,r=this.state.weapons,a=e.target.id[0];console.log("Clicked"),console.log(e),console.log(e.target.info_type);var o=e.target.id.substring(1);console.log(o),"p"===a?"X"===t[o]?t[o]=3:" "===t[o]?t[o]="?":"?"===t[o]?t[o]="\u2713":"\u2713"===t[o]?t[o]="\u2717":t[o]=" ":"r"===a?" "===n[o]?n[o]="?":"?"===n[o]?n[o]="\u2713":"\u2713"===n[o]?n[o]="\u2717":n[o]=" ":"w"===a?" "===r[o]?r[o]="?":"?"===r[o]?r[o]="\u2713":"\u2713"===r[o]?r[o]="\u2717":r[o]=" ":console.log("Unknown update"),this.setState({people:t,rooms:n,weapons:r}),localStorage.setItem("curr_people",JSON.stringify(t)),localStorage.setItem("curr_rooms",JSON.stringify(n)),localStorage.setItem("curr_weapons",JSON.stringify(r))}},{key:"render",value:function(){var e=this,t=this.state;return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"cluesheet"},c.a.createElement("div",{className:"clueboard"},c.a.createElement(b,{state:t,onClick:function(t){return e.handleClick(t)}})),c.a.createElement("button",{name:"Reset",onClick:function(t){return e.resetGame(t)}})))}}]),n}(c.a.Component);p.a.render(c.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/HelperApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/HelperApp","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):f(t,e)}))}}(),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.43e6f280.chunk.js.map