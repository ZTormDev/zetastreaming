(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(30),r=c.n(i),n=(c(40),c(41),c(42),c(6)),l=c(4),o=(c(43),c.p+"static/media/tmovie.d90e12e7.png"),j=c(0);const d=[{display:"Inicio",path:"/zetastreaming"},{display:"Peliculas",path:"/zetastreaming/movie"},{display:"Series",path:"/zetastreaming/tv"}];var m=()=>{const{pathname:e}=Object(l.g)(),t=Object(s.useRef)(null),c=d.findIndex((t=>t.path===e));return Object(s.useEffect)((()=>{const e=()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),Object(j.jsx)("div",{ref:t,className:"header",children:Object(j.jsxs)("div",{className:"header__wrap container",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:o,alt:""}),Object(j.jsx)(n.b,{to:"/zetastreaming",children:"ZETA STREAMING"})]}),Object(j.jsx)("ul",{className:"header__nav",children:d.map(((e,t)=>Object(j.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(j.jsx)(n.b,{to:e.path,children:e.display})},t)))})]})})},b=(c(50),c.p+"static/media/footer-bg.67e95f05.jpg");const h=()=>{window.open("https://twitter.com/itsztorm","_blank")},O=()=>{window.open("https://github.com/ZTormDev","_blank")};var u=()=>Object(j.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(b,")")},children:Object(j.jsxs)("div",{className:"footer__content container",children:[Object(j.jsx)("div",{className:"footer__content__logo",children:Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:o,alt:""}),Object(j.jsx)(n.b,{to:"/zetastreaming",children:"ZETA STREAMING"})]})}),Object(j.jsxs)("div",{className:"footer__content__menus",children:[Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(n.b,{to:"/zetastreaming",children:"Inicio"}),Object(j.jsx)(n.b,{to:"/zetastreaming/movie",children:"Peliculas"}),Object(j.jsx)(n.b,{to:"/zetastreaming/tv",children:"Series"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(n.b,{to:"/zetastreaming",onClick:h,children:"Sigueme en Twitter"}),Object(j.jsx)(n.b,{to:"/zetastreaming",onClick:O,children:"Sigueme en GitHub"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(n.b,{to:"/zetastreaming",children:"Tienes que ver"}),Object(j.jsx)(n.b,{to:"/zetastreaming",children:"Lanzamientos Recientes"})]})]})]})});c(51);const g=e=>Object(j.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?()=>e.onClick():null,children:e.children}),v=e=>Object(j.jsx)(g,{className:"btn-outline ".concat(e.className),onClick:e.onClick?()=>e.onClick():null,children:e.children});var p=g,x=c(85),_=c(83),y=c(86),N=c(84);c(52);const f=e=>{const t=Object(s.useRef)(null);return Object(j.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(j.jsx)("div",{className:"modal__content__close",onClick:()=>{t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(j.jsx)("i",{className:"bx bx-x"})})]})};var w=e=>{const[t,c]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{c(e.active)}),[e.active]),Object(j.jsx)("div",{id:e.id,className:"modal ".concat(t?"active":""),children:e.children})},k=c(33),S=c.n(k),z=c(34),C=c.n(z);var E={baseUrl:"https://api.themoviedb.org/3/",apiKey:"a6960f7d344cbd7240a620d7c9a590c1",originalImage:e=>"https://image.tmdb.org/t/p/original/".concat(e),w500Image:e=>"https://image.tmdb.org/t/p/w500/".concat(e)};const I=S.a.create({baseURL:E.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:e=>C.a.stringify({...e,api_key:E.apiKey})});I.interceptors.request.use((async e=>e)),I.interceptors.response.use((e=>e&&e.data?e.data:e),(e=>{throw e}));var L=I;const T={movie:"movie",tv:"tv"},V={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},M={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"};var A={getMoviesList:(e,t)=>{const c="movie/"+V[e]+"?language=es-ES";return L.get(c,t)},getTvList:(e,t)=>{const c="tv/"+M[e]+"?language=es-ES";return L.get(c,t)},getVideos:(e,t)=>{const c=T[e]+"/"+t+"/videos";return L.get(c,{params:{}})},search:(e,t)=>{const c="search/"+T[e];return L.get(c,t)},detail:(e,t,c)=>{const s=T[e]+"/"+t+"?language=es-ES";return L.get(s,c)},credits:(e,t)=>{const c=T[e]+"/"+t+"/credits";return L.get(c,{params:{}})},similar:(e,t)=>{const c=T[e]+"/"+t+"/similar";return L.get(c,{params:{}})}};c(75);const q=e=>{let t=Object(l.f)();const c=e.item,s=E.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path);return Object(j.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(s,")")},children:Object(j.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(j.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(j.jsx)("h2",{className:"title",children:c.title}),Object(j.jsx)("div",{className:"overview",children:c.overview}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)(p,{onClick:()=>t.push("/zetastreaming/movie/"+c.id),children:"Ver Ahora"}),Object(j.jsx)(v,{onClick:async()=>{const e=document.querySelector("#modal_".concat(c.id)),t=await A.getVideos(T.movie,c.id);if(t.results.length>0){const c="https://www.youtube.com/embed/"+t.results[0].key;e.querySelector(".modal__content > iframe").setAttribute("src",c)}else e.querySelector(".modal__content").innerHTML="No trailer";e.classList.toggle("active")},children:"Ver Trailer"})]})]}),Object(j.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(j.jsx)("img",{src:E.w500Image(c.poster_path),alt:""})})]})})},P=e=>{const t=e.item,c=Object(s.useRef)(null);return Object(j.jsx)(w,{active:!1,id:"modal_".concat(t.id),children:Object(j.jsx)(f,{onClose:()=>c.current.setAttribute("src",""),children:Object(j.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})};var R=()=>{x.a.use([_.a]);const[e,t]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{const e={page:1};try{const c=await A.getMoviesList(V.popular,{params:e});t(c.results.slice(1,4)),console.log(c)}catch{console.log("error")}})()}),[]),Object(j.jsxs)("div",{className:"hero-slide",children:[Object(j.jsx)(y.a,{modules:[_.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,children:e.map(((e,t)=>Object(j.jsx)(N.a,{children:t=>{let{isActive:c}=t;return Object(j.jsx)(q,{item:e,className:"".concat(c?"active":"")})}},t)))}),e.map(((e,t)=>Object(j.jsx)(P,{item:e},t)))]})};c(76),c(77);var F=e=>{const t=e.item,c="/zetastreaming/"+T[e.category]+"/"+t.id,s=E.w500Image(t.poster_path||t.backdrop_path);return Object(j.jsxs)(n.b,{to:c,children:[Object(j.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(s,")")},children:Object(j.jsx)(p,{children:Object(j.jsx)("i",{className:"bx bx-play"})})}),Object(j.jsx)("h3",{children:t.title||t.name})]})};var B=e=>{const[t,c]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{let t=null;const s={};if("similar"!==e.type)if(e.category===T.movie)t=await A.getMoviesList(e.type,{params:s});else t=await A.getTvList(e.type,{params:s});else t=await A.similar(e.category,e.id);c(t.results)})()}),[]),Object(j.jsx)("div",{className:"movie-list",children:Object(j.jsx)(y.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:t.map(((t,c)=>Object(j.jsx)(N.a,{children:Object(j.jsx)(F,{item:t,category:e.category})},c)))})})};var G=()=>Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Peliculas en Tendencia"}),Object(j.jsx)(n.b,{to:"/zetastreaming/movie",children:Object(j.jsx)(v,{className:"small",children:"Ver mas"})})]}),Object(j.jsx)(B,{category:T.movie,type:V.popular})]}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Peliculas Mejores Valoradas"}),Object(j.jsx)(n.b,{to:"/zetastreaming/movie",children:Object(j.jsx)(v,{className:"small",children:"Ver mas"})})]}),Object(j.jsx)(B,{category:T.movie,type:V.top_rated})]}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Series en Tendencia"}),Object(j.jsx)(n.b,{to:"/zetastreaming/tv",children:Object(j.jsx)(v,{className:"small",children:"Ver mas"})})]}),Object(j.jsx)(B,{category:T.tv,type:M.popular})]}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsxs)("div",{className:"section__header mb-2",children:[Object(j.jsx)("h2",{children:"Series Mejores Valoradas"}),Object(j.jsx)(n.b,{to:"/zetastreaming/tv",children:Object(j.jsx)(v,{className:"small",children:"Ver mas"})})]}),Object(j.jsx)(B,{category:T.tv,type:M.top_rated})]})]})]});c(78);var U=e=>Object(j.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(b,")")},children:Object(j.jsx)("h2",{children:e.children})});c(79),c(80);var Z=e=>Object(j.jsx)("input",{type:e.type,placeholder:"Escribe aqui para Buscar...",value:e.value,onChange:e.onChange?t=>e.onChange(t):null});const D=e=>{const t=Object(l.f)(),[c,a]=Object(s.useState)(e.keyword?e.keyword:""),i=Object(s.useCallback)((()=>{c.trim().length>0&&t.push("/zetastreaming/".concat(T[e.category],"/search/").concat(c))}),[c,e.category,t]);return Object(s.useEffect)((()=>{const e=e=>{e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),()=>{document.removeEventListener("keyup",e)}}),[c,i]),Object(j.jsxs)("div",{className:"movie-search",children:[Object(j.jsx)(Z,{type:"text",placeholder:"Enter keyword",value:c,onChange:e=>a(e.target.value)}),Object(j.jsx)(p,{className:"small",onClick:i,children:"Buscar"})]})};var H=e=>{const[t,c]=Object(s.useState)([]),[a,i]=Object(s.useState)(1),[r,n]=Object(s.useState)(0),{keyword:o}=Object(l.h)();Object(s.useEffect)((()=>{(async()=>{let t=null;if(void 0===o){const c={};if(e.category===T.movie)t=await A.getMoviesList(V.upcoming,{params:c});else t=await A.getTvList(M.popular,{params:c})}else{const c={query:o};t=await A.search(e.category,{params:c})}c(t.results),n(t.total_pages)})()}),[e.category,o]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(D,{category:e.category,keyword:o})}),Object(j.jsx)("div",{className:"movie-grid",children:t.map(((t,c)=>Object(j.jsx)(F,{category:e.category,item:t},c)))}),a<r?Object(j.jsx)("div",{className:"movie-grid__loadmore",children:Object(j.jsx)(v,{className:"small",onClick:async()=>{let s=null;if(void 0===o){const t={page:a+1};if(e.category===T.movie)s=await A.getMoviesList(V.upcoming,{params:t});else s=await A.getTvList(M.popular,{params:t})}else{const t={page:a+1,query:o};s=await A.search(e.category,{params:t})}c([...t,...s.results]),i(a+1)},children:"Cargar Mas"})}):null]})};var J=()=>{const{category:e}=Object(l.h)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(U,{children:e===T.movie?"Peliculas":"Series"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(H,{category:e})})})]})};c(81);var K=e=>{const{category:t}=Object(l.h)(),[c,a]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{const c=await A.credits(t,e.id);a(c.cast.slice(0,5))})()}),[t,e.id]),Object(j.jsx)("div",{className:"casts",children:c.map(((e,t)=>Object(j.jsxs)("div",{className:"casts__item",children:[Object(j.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(E.w500Image(e.profile_path),")")}}),Object(j.jsx)("p",{className:"casts__item__name",children:e.name})]},t)))})};var Q=()=>{const{category:e,id:t}=Object(l.h)(),{season:c,episode:a}=1,[i,r]=Object(s.useState)(null),[n,o]=Object(s.useState)(""),[d,m]=Object(s.useState)("");return Object(s.useEffect)((()=>{(async()=>{const s=await A.detail(e,t,{params:{}});r(s),window.scrollTo(0,0);const i="movie"===e?"https://vidsrc.me/embed/movie?tmdb=".concat(t,"&ds_langs=es"):"tv"===e?"https://vidsrc.me/embed/tv?tmdb=".concat(t,"&season=").concat(c,"&episode=").concat(a,"&ds_langs=es"):"",n="movie"===e?"Ver Pelicula Online":"tv"===e?"Ver Serie Online":"";o(i),m(n)})()}),[e,t]),Object(j.jsx)(j.Fragment,{children:i&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(E.originalImage(i.backdrop_path||i.poster_path),")")}}),Object(j.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(j.jsx)("div",{className:"movie-content__poster",children:Object(j.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(E.originalImage(i.poster_path||i.backdrop_path),")")}})}),Object(j.jsxs)("div",{className:"movie-content__info",children:[Object(j.jsx)("h1",{className:"title",children:i.title||i.name}),Object(j.jsx)("div",{className:"genres",children:i.genres&&i.genres.slice(0,5).map(((e,t)=>Object(j.jsx)("span",{className:"genres__item",children:e.name},t)))}),Object(j.jsx)("p",{className:"overview",children:i.overview}),Object(j.jsxs)("div",{className:"cast",children:[Object(j.jsx)("div",{className:"section__header",children:Object(j.jsx)("h2",{children:"Actores"})}),Object(j.jsx)(K,{id:i.id})]})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"titleCategory",children:d}),Object(j.jsx)("div",{className:"section mb-3 pelicula",children:Object(j.jsx)("iframe",{className:"movie-iframe",src:n,title:e,frameborder:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:""})}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsx)("div",{className:"section__header mb-2",children:Object(j.jsx)("h2",{children:"Similar"})}),Object(j.jsx)(B,{category:e,type:"similar",id:i.id})]})]})]})})};var W=()=>Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/zetastreaming/:category/search/:keyword",component:J}),Object(j.jsx)(l.a,{path:"/zetastreaming/:category/:id",component:Q}),Object(j.jsx)(l.a,{path:"/zetastreaming/:category",component:J}),Object(j.jsx)(l.a,{path:"/zetastreaming",exact:!0,component:G})]});var X=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)(l.a,{render:e=>Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{...e}),Object(j.jsx)(W,{}),Object(j.jsx)(u,{})]})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.18520374.chunk.js.map