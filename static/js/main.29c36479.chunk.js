(this["webpackJsonpmusic-albums"]=this["webpackJsonpmusic-albums"]||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/loading.4e722e12.svg"},43:function(e,t,a){e.exports=a(84)},48:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setError",(function(){return w})),a.d(n,"resetError",(function(){return C}));var r={};a.r(r),a.d(r,"getAlbumById",(function(){return M})),a.d(r,"setTopAlbums",(function(){return S})),a.d(r,"getTopAlbums",(function(){return I}));var c={};a.r(c),a.d(c,"addFavorite",(function(){return V})),a.d(c,"removeFavorite",(function(){return x})),a.d(c,"setFavoriteRankings",(function(){return D})),a.d(c,"toggleFavorite",(function(){return _}));var l=a(0),i=a.n(l),o=a(17),s=a.n(o),u=(a(48),a(15)),m=a(11),v=a(20),b=a(6),d=a(26),f=a(38),E=a.n(f),p=a(39);var g=a(12);var h=a(19);var O={topAlbums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITES":return t.list;default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return e.concat([t.album]);case"REMOVE_FAVORITE":return e.filter((function(e){return e.id!==t.id}));case"UPDATE_FAVORITE_RANKS":return Object(g.a)({},t.favorites);default:return e}},favoritesMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return e.concat([t.album.id]);case"REMOVE_FAVORITE":return e.filter((function(e){return e!==t.id}));default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return Object(g.a)({},e,Object(h.a)({},t.errorType,t.error));default:return e}}},N={key:"root",whitelist:["favorites","favoritesMap"],storage:E.a},k=Object(d.a)(N,O),j={topAlbums:[],favorites:[],favoritesMap:[],error:{albums:null}},F=function(e,t){return k(e,t)},A=[p.a];var y=function(){var e=Object(b.d)(b.a.apply(void 0,A));return Object(b.e)(F,j,e)}(),R=(Object(d.b)(y),a(13)),T=a(40),B=a.n(T).a.create({baseURL:"https://itunes.apple.com/us/rss",headers:{Accept:"application/json","Content-Type":"application/json"}});function w(e,t){return{type:"SET_ERROR",error:t,errorType:e}}function C(e){return function(t,a){a().error[e]&&t(w(e,null))}}function M(e){return function(t,a){return a().topAlbums.find((function(t){return t.id.attributes["im:id"]===e}))}}function S(e){return{type:"SET_FAVORITES",list:e.map((function(e,t){return{id:e.id.attributes["im:id"],thumbnail:(a=e["im:image"][0].label,a.replace("55x55bb","500x500bb")),thumbSmall:e["im:image"][0].label,name:e["im:name"].label,artist:e["im:artist"].label,price:e["im:price"].label,category:e.category.attributes.label,releaseDate:e["im:releaseDate"].attributes.label,link:e.link.attributes.href,rights:e.rights.label,rank:t+1};var a}))}}function I(e){return function(t){return t(C("albums")),B.get("/topalbums/limit=".concat(e,"/json")).then((function(e){200===e.status&&e.data.feed?t(S(e.data.feed.entry)):t(w("albums","Failed to retrieve albums."))})).catch((function(){t(w("albums","Failed to retrieve albums."))}))}}function V(e){return{type:"ADD_FAVORITE",album:e}}function x(e){return{type:"REMOVE_FAVORITE",id:e}}function D(){return function(e,t){var a=t().topAlbums,n=a.topAlbums,r=a.favorites;n&&r.forEach((function(e){var t=n.findIndex((function(t){return e.id===t.id}));r.rank=t>-1?t+1:null}))}}function _(e,t){return function(a){a(e?x(t.id):V(t))}}var L=Object(g.a)({},r,{},c,{},n);var U=function(e){return Object(v.b)((function(e){return e}),(function(e){return Object(b.b)(L,e)}))(e)},J=a(9),P=a(10);a(73);var W=function(e){var t=e.title,a=e.active,n=e.noBackButton,r=Object(m.f)(),c=Object(l.useCallback)((function(){r.push({pathname:"/"})}),[r]),o=Object(l.useCallback)((function(){r.push({pathname:"/my-favorites"})}),[r]),s=Object(l.useCallback)((function(){r.goBack()}),[r]);return i.a.createElement("div",{className:"header"},n?null:i.a.createElement("div",{className:"back-button",onClick:s},i.a.createElement(J.a,{className:"icon",icon:P.a})),i.a.createElement("div",{className:"title"},i.a.createElement("h1",{className:"title-label"},t||"Music"),i.a.createElement(J.a,{className:"icon",icon:P.c})),i.a.createElement("div",{className:"menu"},i.a.createElement("span",{className:"route ".concat("top100"===a?"active":""),onClick:c},"Top 100"),i.a.createElement("span",{className:"route ".concat("favorites"===a?"active":""),onClick:o},"My Favorites")))},K=a(42),X=a.n(K);a(75);var $=function(e){var t=e.header,a=e.active,n=e.noBackButton;return i.a.createElement(i.a.Fragment,null,i.a.createElement(W,Object.assign({title:t},{active:a,noBackButton:n})),i.a.createElement("div",{className:"alt-content"},i.a.createElement("img",{className:"spinner-icon",src:X.a,alt:"Loading..."})))};a(76);var q=function(e){var t=e.header,a=e.message,n=e.active,r=e.noBackButton;return i.a.createElement(i.a.Fragment,null,i.a.createElement(W,Object.assign({title:t},{active:n,noBackButton:r})),i.a.createElement("div",{className:"error-content"},i.a.createElement("h2",{className:"error-title"},"Error!"),i.a.createElement("p",{className:"error-text"},a||"An error occured!")))};a(77);var z=function(e){var t=e.toggleFavorite,a=e.isFavorite,n=e.album,r=Object(m.f)(),c=Object(l.useCallback)((function(){r.push({pathname:"/album-page/".concat(n.id),state:n})}),[n,r]),o=Object(l.useCallback)((function(e){e.stopPropagation(),t(a,n)}),[a,n,t]);return i.a.createElement("div",{className:"card-container",onClick:c},i.a.createElement("img",{className:"card-image",src:n.thumbnail,alt:n.thumbSmall}),i.a.createElement("div",{className:"card-favorite ".concat(a?"active":""),onClick:o},i.a.createElement(J.a,{className:"favorite-icon",icon:P.b})),i.a.createElement("div",{className:"inline-elements"},i.a.createElement("span",{className:"card-rank"},n.rank||"X"),i.a.createElement("div",{className:"card-details"},i.a.createElement("p",{className:"card-detail primary"},n.name),i.a.createElement("p",{className:"card-detail secondary"},n.artist))))};a(78);var G=i.a.memo((function(e){var t=e.albums,a=e.isFavoritesList,n=e.toggleFavorite,r=e.favoritesMap;return i.a.createElement("div",{className:"list"},t&&t.length>0?t.map((function(e){return i.a.createElement("div",{key:"albumList-".concat(e.id)},i.a.createElement(z,Object.assign({isFavorite:a||r.includes(e.id)},{album:e,toggleFavorite:n})))})):i.a.createElement("div",{className:"altMessage"},i.a.createElement("p",null,"No Albums Found...")))}));a(79);var H=i.a.memo((function(e){var t=e.data,a=e.placeholder,n=e.onFiltered;return i.a.createElement("div",{className:"filter-container"},i.a.createElement("input",{type:"text",className:"filter-input",placeholder:a||"Search",onChange:function(e){var a=e.target,r=new RegExp(a.value.toUpperCase()),c=t.filter((function(e){return r.test(e.name.toUpperCase())}));n(c)}}),i.a.createElement(J.a,{className:"search-icon",icon:P.d}))}));var Q=U((function(e){var t=e.error,a=e.getTopAlbums,n=e.favoritesMap,r=e.toggleFavorite,c=e.topAlbums,o=Object(l.useState)(!1),s=Object(R.a)(o,2),u=s[0],m=s[1],v=Object(l.useState)(),b=Object(R.a)(v,2),d=b[0],f=b[1];return Object(l.useEffect)((function(){a(100).then((function(){return m(!0)}))}),[a,m]),t.albums?i.a.createElement(q,{noBackButton:!0,active:"top100",message:t.albums}):u?i.a.createElement(i.a.Fragment,null,i.a.createElement(W,{noBackButton:!0,active:"top100"}),i.a.createElement("div",{className:"content"},i.a.createElement(H,{placeholder:"Search Titles...",onFiltered:f,data:c}),i.a.createElement(G,Object.assign({albums:d||c},{toggleFavorite:r,favoritesMap:n})))):i.a.createElement($,{noBackButton:!0,active:"top100"})}));a(80);var Y=function(e){var t=e.thumbnail,a=e.rank;return i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{className:"album-image",src:t,alt:"Thumbnail"}),a?i.a.createElement("div",{className:"album-ranking"},a):null)};a(81);var Z=function(e){var t=e.albumData,a=e.toggleFavorite,n=e.isFavorite,r=Object(l.useCallback)((function(){window.location.href=t.link}),[t.link]),c=Object(l.useCallback)((function(){a(n,t)}),[t,n,a]);return i.a.createElement("div",{className:"album-details"},i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"light-cover",style:{backgroundImage:"url(".concat(t.thumbnail,")")}}),i.a.createElement("div",{className:"details-column"},i.a.createElement("div",{className:"album-artist"},t.artist),i.a.createElement("div",{className:"album-name"},t.name),i.a.createElement("br",null),i.a.createElement("div",{className:"album-detail"},"Music: ",t.category),i.a.createElement("div",{className:"album-detail"},"Int.Release ",t.releaseDate)),i.a.createElement("div",{className:"album-price"},t.price)),i.a.createElement("div",{className:"album-buttons"},i.a.createElement("div",{className:"album-button favorite-button",onClick:c},i.a.createElement(J.a,{className:"button-icon",icon:P.b}),i.a.createElement("span",null,n?"Remove":"Add")),i.a.createElement("div",{className:"album-button",onClick:r},"View More")))};a(82);var ee=Object(m.g)(U(i.a.memo((function(e){var t=e.error,a=e.location,n=e.match,r=e.getTopAlbums,c=e.topAlbums,o=e.getAlbumById,s=e.favoritesMap,u=e.toggleFavorite,m=Object(l.useState)((function(){return!!c.length})),v=Object(R.a)(m,2),b=v[0],d=v[1],f=Object(l.useState)((function(){return a.state||{}})),E=Object(R.a)(f,2),p=E[0],g=E[1],h=Object(l.useMemo)((function(){return s.includes(p.id)}),[p,s]);return Object(l.useEffect)((function(){if(a.state)d(!0);else{var e=n.params.id;if(c.length){var t=o(e);g(t)}else r(100).then((function(){var t=o(e);g(t),d(!0)}))}}),[c,r,o,d,a.state,n.params]),t.albums?i.a.createElement(q,Object.assign({message:t.albums},{header:"Album"})):b||a.state?i.a.createElement(i.a.Fragment,null,i.a.createElement(W,{title:"Album"}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content-row"},i.a.createElement(Y,{thumbnail:p.thumbnail,rank:p.rank}),i.a.createElement(Z,{albumData:p,isFavorite:h,toggleFavorite:u})),i.a.createElement("p",{className:"rights-text"},p.rights))):i.a.createElement($,{header:"Album"})}))));var te=U((function(e){var t=e.favorites,a=e.toggleFavorite,n=e.setFavoriteRankings;return Object(l.useEffect)((function(){n()}),[n]),i.a.createElement(i.a.Fragment,null,i.a.createElement(W,{active:"favorites"}),i.a.createElement("div",{className:"content"},i.a.createElement(G,Object.assign({isFavoritesList:!0,albums:t},{toggleFavorite:a}))))}));a(83);var ae=function(){return i.a.createElement(v.a,{store:y},i.a.createElement(u.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/"},i.a.createElement(Q,null)),i.a.createElement(m.a,{exact:!0,path:"/album-page/:id"},i.a.createElement(ee,null)),i.a.createElement(m.a,{exact:!0,path:"/my-favorites"},i.a.createElement(te,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.29c36479.chunk.js.map