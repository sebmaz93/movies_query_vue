import{r as E,s as Y,o,c as r,a as F,d as h,b as c,F as k,e as V,t as g,f as j,g as p,w,h as f,u as m,i as L,j as T,k as O,l as X}from"./vendor.bc752e16.js";const I=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(e){if(e.ep)return;e.ep=!0;const l=i(e);fetch(e.href,l)}};I();const $=[{id:1,title:"Inception",img:"https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",genre:[{id:11,title:"sci-fi"},{id:22,title:"action"}],actors:[{id:111,name:"Leonardo"},{id:222,name:"Joseph"}],is_series:!1,release_date:2010},{id:2,title:"Troy",img:"https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/troy_2000x3000.jpg",genre:[{id:33,title:"drama"},{id:44,title:"history"}],actors:[{id:333,name:"Brad"},{id:444,name:"Eric"}],is_series:!1,release_date:2004},{id:3,title:"The Godfather",img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",genre:[{id:33,title:"drama"},{id:66,title:"crime"}],actors:[{id:555,name:"Marlon"},{id:666,name:"Al Pacino"}],is_series:!1,release_date:1972},{id:4,title:"The Prestige",img:"https://m.media-amazon.com/images/I/51wILNNX2VL._SY445_.jpg",genre:[{id:33,title:"drama"},{id:11,title:"sci-fi"}],actors:[{id:777,name:"Christian"},{id:888,name:"Hugh"}],is_series:!1,release_date:2006},{id:5,title:"Interstellar",img:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",genre:[{id:88,title:"adventure"},{id:11,title:"sci-Fi"}],actors:[{id:53423,name:"Matthew"},{id:123513,name:"Jessica"}],is_series:!1,release_date:2014},{id:6,title:"Lost",img:"https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",genre:[{id:88,title:"adventure"},{id:99,title:"fantasy"}],actors:[{id:999,name:"Jorge"},{id:3123,name:"Josh"}],is_series:!0,release_date:2004},{id:7,title:"There Were None",img:"https://m.media-amazon.com/images/M/MV5BNjIzZDg2YWUtZGEwOS00OGM5LTgwZTgtMGVhMTFiZDhjMjExXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_.jpg",genre:[{id:33,title:"drama"},{id:87,title:"mystery"}],actors:[{id:12341,name:"Maeve"},{id:1234123,name:"Charles"}],is_series:!0,release_date:2015},{id:8,title:"Inception",img:"https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",genre:[{id:11,title:"sci-fi"},{id:22,title:"action"}],actors:[{id:111,name:"Leonardo"},{id:222,name:"Joseph"}],is_series:!1,release_date:2010},{id:9,title:"Troy",img:"https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/troy_2000x3000.jpg",genre:[{id:33,title:"drama"},{id:44,title:"history"}],actors:[{id:333,name:"Brad"},{id:444,name:"Eric"}],is_series:!1,release_date:2004},{id:10,title:"The Godfather",img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",genre:[{id:33,title:"drama"},{id:66,title:"crime"}],actors:[{id:555,name:"Marlon"},{id:666,name:"Al Pacino"}],is_series:!1,release_date:1972},{id:114,title:"The Prestige",img:"https://m.media-amazon.com/images/I/51wILNNX2VL._SY445_.jpg",genre:[{id:33,title:"drama"},{id:11,title:"sci-fi"}],actors:[{id:777,name:"Christian"},{id:888,name:"Hugh"}],is_series:!1,release_date:2006},{id:115,title:"Interstellar",img:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",genre:[{id:88,title:"adventure"},{id:11,title:"sci-Fi"}],actors:[{id:53423,name:"Matthew"},{id:123513,name:"Jessica"}],is_series:!1,release_date:2014},{id:116,title:"Lost",img:"https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",genre:[{id:88,title:"adventure"},{id:99,title:"fantasy"}],actors:[{id:999,name:"Jorge"},{id:3123,name:"Josh"}],is_series:!0,release_date:2004},{id:117,title:"There Were None",img:"https://m.media-amazon.com/images/M/MV5BNjIzZDg2YWUtZGEwOS00OGM5LTgwZTgtMGVhMTFiZDhjMjExXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_.jpg",genre:[{id:33,title:"drama"},{id:87,title:"mystery"}],actors:[{id:12341,name:"Maeve"},{id:1234123,name:"Charles"}],is_series:!0,release_date:2015}],z=(a,s,i)=>{const{filters:t,page:e=1,per_page:l=8}=a.body;let n=$;t&&(n=$.filter(x=>!(t.year&&x.release_date!==t.year||t.genre&&x.genre.every(({id:u})=>u!==t.genre)||t.searchTerm&&x.title.toLowerCase().indexOf(t.searchTerm.toLowerCase())===-1||t.isSeries&&x.is_series!==t.isSeries)));const d=n.slice((e-1)*l,e*l),_=Math.ceil(n.length/l),M=e<_,N={page:e,total_pages:_,has_next_page:M,results:d,total_results:n.length};return s(i.delay(1e3),i.status(200),i.json(N))},W=[E.post("/api/movies",z)],Z=[...W],C=Y(...Z);var y=(a,s)=>{for(const[i,t]of s)a[i]=t;return a};const S={},U={class:"nav"},G=F('<h1 class="logo" data-v-7922ed49>MOVIE DB</h1><div class="nav-items" data-v-7922ed49><div class="nav-item" data-v-7922ed49>Home</div><div class="nav-item" data-v-7922ed49>Movies</div><div class="nav-item" data-v-7922ed49>About</div></div>',2),D=[G];function B(a,s){return o(),r("nav",U,D)}var J=y(S,[["render",B],["__scopeId","data-v-7922ed49"]]);const Q={class:"movie-container"},A=["src","alt"],P={class:"movie-info"},R={class:"genres","data-test-id":"movie-genres"},q=j(" Genres: "),H={class:"actors","data-test-id":"movie-actors"},K=j(" Actors: "),ee={class:"year","data-test-id":"movie-year"},te={class:"title","data-test-id":"movie-title"},ae=h({props:{movie:null},setup(a){return(s,i)=>(o(),r("div",Q,[c("img",{class:"poster",src:a.movie.img,alt:a.movie.title,"data-test-id":"movie-poster"},null,8,A),c("div",P,[c("div",R,[q,(o(!0),r(k,null,V(a.movie.genre,t=>(o(),r("h4",{key:t.id,class:"genre"},g(t.title),1))),128))]),c("div",H,[K,(o(!0),r(k,null,V(a.movie.actors,t=>(o(),r("h4",{key:t.id,class:"actor"},g(t.name),1))),128))]),c("h3",ee,"Year: "+g(a.movie.release_date),1)]),c("h3",te,g(a.movie.title),1)]))}});var se=y(ae,[["__scopeId","data-v-762b0dd9"]]);const ie=["value"],le=h({props:{modelValue:null},emits:["update:modelValue"],setup(a,{emit:s}){const i=t=>{const e=t.target;s("update:modelValue",e.value)};return(t,e)=>(o(),r("input",{"data-test-id":"search-input",type:"search",class:"search",placeholder:"search",value:a.modelValue,onInput:i},null,40,ie))}});var oe=y(le,[["__scopeId","data-v-0ef2d44c"]]);const re=["value"],ne={value:""},de=["value"],ce=h({props:{label:null,filters:null,modelValue:null},emits:["update:modelValue"],setup(a,{emit:s}){const i=t=>{const e=t.target;s("update:modelValue",Number(e.value))};return(t,e)=>(o(),r("select",{class:"filter",value:a.modelValue,"data-test-id":"filter-select",onChange:i},[c("option",ne,g(a.label),1),(o(!0),r(k,null,V(a.filters,l=>(o(),r("option",{key:l.text,value:l.value},g(l.text),9,de))),128))],40,re))}});var b=y(ce,[["__scopeId","data-v-fb5c94b0"]]);const _e={class:"wrapper"},ue={"data-test-id":"checkbox-label"},me=["value","checked"],ve=h({props:{label:null,modelValue:null},emits:["update:modelValue"],setup(a,{emit:s}){const i=t=>{const e=t.target;s("update:modelValue",e.checked)};return(t,e)=>(o(),r("div",_e,[c("label",ue,g(a.label),1),c("input",{"data-test-id":"checkbox",class:"checkbox",type:"checkbox",value:a.modelValue,checked:a.modelValue,onChange:i},null,40,me)]))}});var pe=y(ve,[["__scopeId","data-v-fcab580c"]]);const he=[{value:11,text:"sci-fi"},{value:22,text:"action"},{value:33,text:"drama"},{value:44,text:"history"},{value:66,text:"crime"},{value:87,text:"mystery"},{value:88,text:"adventure"},{value:99,text:"fantasy"}],ge=[{value:1972,text:"1972"},{value:2004,text:"2004"},{value:2006,text:"2006"},{value:2010,text:"2010"},{value:2014,text:"2014"},{value:2015,text:"2015"}],fe=[{value:4,text:"4"},{value:8,text:"8"},{value:14,text:"14"}];const ye={class:"filters"},Me={class:"search-wrapper"},xe={class:"options"},ke={class:"pagination"},Ve=["disabled"],Ne={class:"page"},be=["disabled"],je=h({props:{hasNext:null,getMovies:null},setup(a){const s=a,i=p(""),t=p(null),e=p(null),l=p(!1),n=p(1),d=p(8),_=()=>{s.getMovies({page:n.value,per_page:d.value,filters:{genre:t.value,year:e.value,searchTerm:i.value,isSeries:l.value}})},M=()=>{n.value>1&&n.value--},N=()=>{s.hasNext&&n.value++};return w([n,d],_),(x,u)=>(o(),r("div",ye,[c("div",Me,[f(oe,{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=v=>i.value=v)},null,8,["modelValue"]),c("button",{"data-test-id":"search-btn",class:"search-btn",onClick:_},"Search")]),c("div",xe,[f(b,{modelValue:t.value,"onUpdate:modelValue":u[1]||(u[1]=v=>t.value=v),label:"Genre",filters:m(he)},null,8,["modelValue","filters"]),f(b,{modelValue:e.value,"onUpdate:modelValue":u[2]||(u[2]=v=>e.value=v),label:"Year",filters:m(ge)},null,8,["modelValue","filters"]),f(b,{modelValue:d.value,"onUpdate:modelValue":u[3]||(u[3]=v=>d.value=v),label:"Per Page",filters:m(fe)},null,8,["modelValue","filters"]),f(pe,{modelValue:l.value,"onUpdate:modelValue":u[4]||(u[4]=v=>l.value=v),label:"Series"},null,8,["modelValue"])]),c("div",ke,[c("button",{disabled:n.value===1,"data-test-id":"prev-btn",onClick:M},"Prev",8,Ve),c("p",Ne,"page: "+g(n.value),1),c("button",{disabled:!a.hasNext,"data-test-id":"next-btn",onClick:N},"Next",8,be)])]))}});var Te=y(je,[["__scopeId","data-v-6e07f66f"]]);const Oe=(a,s)=>{const i=p(),t=p(),e=p(!1),l=d=>{e.value=!1,d.value=d.message,console.log(`[NETWORK:${a}:ERR]:`,d)};return{data:i,error:t,isLoading:e,fetch:async d=>{e.value=!0,console.log(`[NETWORK:${a}:REQ]:`,d);try{const _=await s(d);i.value=_.data,console.log(`[NETWORK:${a}:RES]:`,_.data),e.value=!1,console.log("data",i)}catch(_){l(_)}}}},$e=()=>"/api",Ee=L.create({baseURL:$e(),headers:{"Content-Type":"application/json;charset=UTF-8"}}),Ye=a=>Ee.post("/movies",a||{});const Fe={class:"main-container"},we={key:0,class:"loader","data-test-id":"loader"},Le={key:1},Xe={key:2,class:"movies","data-test-id":"movies-container"},Ie={key:1},ze=h({setup(a){const{data:s,error:i,isLoading:t,fetch:e}=Oe("MOVIES_GET",Ye);return(l,n)=>{var d,_;return o(),r("section",Fe,[f(Te,{"get-movies":m(e),"has-next":Boolean((d=m(s))==null?void 0:d.has_next_page)},null,8,["get-movies","has-next"]),m(t)?(o(),r("div",we,"Loading...")):m(i)?(o(),r("h2",Le,"Error")):T("",!0),!m(t)&&((_=m(s))==null?void 0:_.results)?(o(),r("div",Xe,[m(s).results.length>0?(o(!0),r(k,{key:0},V(m(s).results,M=>(o(),O(se,{key:M.id,movie:M},null,8,["movie"]))),128)):(o(),r("div",Ie,"No Movies Found."))])):T("",!0)])}}});var We=y(ze,[["__scopeId","data-v-955439d8"]]);const Ze={class:"main"},Ce=h({setup(a){return(s,i)=>(o(),r("div",Ze,[f(J),f(We)]))}});var Se=y(Ce,[["__scopeId","data-v-533673f4"]]);const Ue=h({setup(a){return(s,i)=>(o(),O(Se))}});C.start({onUnhandledRequest:"bypass"});X(Ue).mount("#app");
