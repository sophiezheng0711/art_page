(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e){e.exports={years:[{id:2021,list:["1.png"]},{id:2020,list:["1.jpg","2.jpg","3.png","4.png","5.png","6.png","7.jpg","8.jpg","9.jpg"]},{id:2019,list:["1.jpg","2.jpeg","3.jpeg","4.jpg","5.jpg"]},{id:2018,list:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"]},{id:2017,list:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]}]}},79:function(e,t,a){e.exports=a(97)},84:function(e,t,a){},85:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=(a(84),a(16)),o=a(17),s=a(20),m=a(18),p=a(19),h=a(76),u=a(30),d=a(106),g=a(105),E=a(104),b=a(75),j=a(99),y=a(101),f=a(32),v=a(107),x=a(108),k=a(102),w=a(71),O=(a(85),a(110)),C=a(109),S=a(100),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=l.a.createElement(O.a,{id:"popover-basic",title:"Hi!"},"Welcome to my gallery and ",l.a.createElement("strong",null,"please")," explore around! Click on the thumbnails in each album to see bigger pictures!");return l.a.createElement(S.a,Object.assign({fluid:!0},this.props),"false"===this.props.button?l.a.createElement(y.a,null,l.a.createElement("h1",null,this.props.title),l.a.createElement("p",null,this.props.text)):l.a.createElement(y.a,null,l.a.createElement("h1",null,this.props.title),l.a.createElement("p",null,this.props.text),l.a.createElement(function(){return l.a.createElement(C.a,{trigger:"click",placement:"right",overlay:e},l.a.createElement(j.a,{variant:"secondary"},"Click me!"))},null)))}}]),t}(l.a.Component),I=a(103),B=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(f.a)(n)),n.handleClose=n.handleClose.bind(Object(f.a)(n)),n.state={show:!1},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{size:"lg",variant:"outline-secondary",onClick:this.handleShow},l.a.createElement("img",{src:this.props.img,style:{width:"200px",height:"200px",objectFit:"cover"},alt:""})),l.a.createElement(I.a,{show:this.state.show,onHide:this.handleClose,centered:!0,size:"lg"},l.a.createElement(I.a.Header,{closeButton:!0}),l.a.createElement(I.a.Body,null,l.a.createElement("img",{src:this.props.img,style:{width:"770px"},alt:""}))),"\xa0 \xa0")}}]),t}(l.a.Component),L=a(70),K=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(f.a)(n)),n.state={index:0,direction:null},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.direction;return l.a.createElement(v.a,{activeIndex:t,direction:a,onSelect:this.handleSelect},l.a.createElement(v.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"./img/carousel/yukina.jpg",alt:"First slide",style:{width:"700px",height:"400px",objectFit:"cover"}}),l.a.createElement(v.a.Caption,null,l.a.createElement("h1",{style:{fontFamily:'Copperplate,"Copperplate Gothic Light",fantasy',fontSize:"72px",color:"rgba(0,0,0,.8)"}},"Welcome!"))),l.a.createElement(v.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"./img/carousel/revlink.jpg",alt:"Third slide",style:{width:"700px",height:"400px",objectFit:"cover"}}),l.a.createElement(v.a.Caption,null,l.a.createElement("h1",{style:{fontFamily:'Copperplate,"Copperplate Gothic Light",fantasy',fontSize:"72px",color:"rgba(0,0,0,.8)"}},"Welcome!"))),l.a.createElement(v.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"./img/carousel/got.jpg",alt:"Third slide",style:{width:"700px",height:"400px",objectFit:"cover"}}),l.a.createElement(v.a.Caption,null,l.a.createElement("h1",{style:{fontFamily:'Copperplate,"Copperplate Gothic Light",fantasy',fontSize:"72px",color:"rgba(0,0,0,.8)"}},"Welcome!"))))}}]),t}(l.a.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e)),L.years.forEach(function(e){e.id===a.props.year&&(a.artList=e.list)}),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement(F,{title:this.props.year+" Gallery",text:this.props.text,button:"true"}),this.artList.map(function(t,a){return(a+1)%3===0?l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{key:a,img:"./img/"+e.props.year+"/"+t}),l.a.createElement("br",null),l.a.createElement("br",null)):l.a.createElement(B,{key:a,img:"./img/"+e.props.year+"/"+t})})))}}]),t}(l.a.Component),G=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(x.a.Container,{id:"left-tabs-example",defaultActiveKey:"first"},l.a.createElement(k.a,null,l.a.createElement(w.a,{sm:3},l.a.createElement(g.a,{variant:"pills",className:"flex-column"},l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{eventKey:"first"},l.a.createElement("img",{src:"./img/buttons/hua_cheng.png",alt:"First slide",style:{width:"200px",height:"70px",objectFit:"cover"}})," 2021")),l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{eventKey:"second"},l.a.createElement("img",{src:"./img/buttons/revlink.jpg",alt:"Second slide",style:{width:"200px",height:"70px",objectFit:"cover"}})," 2020")),l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{eventKey:"third"},l.a.createElement("img",{src:"./img/buttons/got.jpg",alt:"Third slide",style:{width:"200px",height:"70px",objectFit:"cover"}})," 2019")),l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{eventKey:"fourth"},l.a.createElement("img",{src:"./img/buttons/chapter_7.jpg",alt:"Fourth slide",style:{width:"200px",height:"70px",objectFit:"cover"}})," 2018")),l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{eventKey:"fifth"},l.a.createElement("img",{src:"./img/buttons/cat.jpg",alt:"Fifth slide",style:{width:"200px",height:"70px",objectFit:"cover"}})," 2017")))),l.a.createElement(w.a,{sm:9},l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Pane,{eventKey:"first"},l.a.createElement(P,{year:2021,text:"2021 collections"})),l.a.createElement(x.a.Pane,{eventKey:"second"},l.a.createElement(P,{year:2020,text:"I am a graphic designer of a game :0000"})),l.a.createElement(x.a.Pane,{eventKey:"thrid"},l.a.createElement(P,{year:2019,text:"A year of final disappointments and low efforts,  edge lords and clowns. It makes the creation of digital fan art both simple and complicated."})),l.a.createElement(x.a.Pane,{eventKey:"fourth"},l.a.createElement(P,{year:2018,text:"2018 collections"})),l.a.createElement(x.a.Pane,{eventKey:"fifth"},l.a.createElement(P,{year:2017,text:"2017 collections"}))))))}}]),t}(l.a.Component);var A=function(){return l.a.createElement("div",null,l.a.createElement(K,null),l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(G,null)))},_=a(73),z=a(74),T=a.n(z);var N=function(){return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement(F,{title:"Dante the Bear",text:"Dante the Bear is an exhilarating platform adventure with little bear Dante through the nine circles of hell. Both the art (character design) and mechanics (backend programming) are made by PhiloSophie. Trailer to Dante the Bear is included below!",button:"false"}),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(j.a,{variant:"dark",onClick:function(){window.open("https://github.com/sophiezheng0711/Dante-the-Bear")}},"Game Code Repository"))),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(T.a,{url:"https://vimeo.com/298786326"})))},W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{bg:"dark",variant:"dark"},l.a.createElement(d.a.Brand,{href:"/art_page/#/home"},"PhiloSophie"),l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{href:"/art_page/#/home"},"Home"),l.a.createElement(g.a.Link,{href:"/art_page/#/about"},"About"),l.a.createElement(g.a.Link,{href:"/art_page/#/games"},"Games")),l.a.createElement(E.a,{inline:!0},l.a.createElement(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(j.a,{variant:"outline-info"},"Search")))}}]),t}(l.a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(_.a,{bottomThreshold:50,normalStyles:{backgroundColor:"#343A47",padding:"1.5rem"},stickyStyles:{backgroundColor:"rgba(108,116,134,.8)",padding:"1.5rem"}},l.a.createElement(y.a,null,l.a.createElement("div",{style:{color:"#B0B3B9",fontFamily:'"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-seri'}},l.a.createElement("h4",{style:{color:"#FFFFFF"}},"Contact Me"),l.a.createElement("div",null,"Email: dummy@gmail.com"),"Amino: ",l.a.createElement("a",{href:"http://aminoapps.com/p/u9iut"},"http://aminoapps.com/p/u9iut"),l.a.createElement("div",null,"YouTube: dummy.u2be.com"))))}}]),t}(l.a.Component);function H(){return l.a.createElement(A,null)}function J(){return l.a.createElement(y.a,null,l.a.createElement(F,{title:"About PhiloSophie",text:"PhiloSophie is a self-taught artist specializing in  traditional and digital art. This website was created entirely by PhiloSophie, and is based on  create-react-app. PhiloSophie started attending oil painting lessons in 2016, and has kept  art as an interest since then.",button:"false"}))}function M(){return l.a.createElement(N,null)}var R=function(){return l.a.createElement(h.a,{basename:"/art_page"},l.a.createElement("div",null,l.a.createElement(W,{pathname:"/art_page/#"}),l.a.createElement(u.a,{path:"/",exact:!0,component:H}),l.a.createElement(u.a,{path:"/home",component:H}),l.a.createElement(u.a,{path:"/about",component:J}),l.a.createElement(u.a,{path:"/games",component:M}),l.a.createElement("br",null),l.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[79,1,2]]]);
//# sourceMappingURL=main.8b768a7a.chunk.js.map