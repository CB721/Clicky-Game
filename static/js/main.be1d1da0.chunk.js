(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,name:"Mario",image:"https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"},{id:2,name:"Luigi",image:"https://upload.wikimedia.org/wikipedia/en/f/f1/LuigiNSMBW.png"},{id:3,name:"Peach",image:"https://upload.wikimedia.org/wikipedia/en/d/d5/Peach_%28Super_Mario_3D_World%29.png"},{id:4,name:"Toad",image:"https://upload.wikimedia.org/wikipedia/en/d/d1/Toad_3D_Land.png"},{id:5,name:"Donkey Kong",image:"https://upload.wikimedia.org/wikipedia/en/d/d4/Donkey_Kong_character.png"},{id:6,name:"Yoshi",image:"https://upload.wikimedia.org/wikipedia/en/d/d9/YoshiMarioParty10.png"},{id:7,name:"Bowser",image:"https://upload.wikimedia.org/wikipedia/en/1/11/BowserNSMBUD.png"},{id:8,name:"Toadette",image:"https://upload.wikimedia.org/wikipedia/en/2/21/Toadette_%28Mario%29.png"},{id:9,name:"Wario",image:"https://upload.wikimedia.org/wikipedia/en/8/81/Wario.png"},{id:10,name:"Waluigi",image:"https://upload.wikimedia.org/wikipedia/en/4/46/Waluigi.png"},{id:11,name:"Goomba",image:"https://upload.wikimedia.org/wikipedia/en/c/ce/Goomba.PNG"},{id:12,name:"Diddy Kong",image:"https://upload.wikimedia.org/wikipedia/en/b/ba/DiddyReturns.png"}]},function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),i=t.n(r),n=t(7),o=t.n(n),c=(t(15),t(1)),s=t(2),l=t(4),d=t(3),m=t(5);t(16);var p=function(e){return i.a.createElement("div",{className:"wrapper"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",{className:"brand"},i.a.createElement("a",{href:"/"},"Mario Memory")),i.a.createElement("li",{className:"title"},e.title),i.a.createElement("li",{className:"scores"},"Score: ",e.score," | Top Score: ",e.topScore))))};t(17);var u=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Mario Memory!"),i.a.createElement("h2",null,"Click on a character to earn points, but don't click on any more than once!"))};t(18),t(19);var h=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.characterSelection(e.id,e.name)}})))},g=function(e){function a(){var e,t;Object(c.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).componentWillMount=function(){t.props.shuffleArray(t.props.characters)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},this.props.characters.map(function(a){return i.a.createElement(h,{characterSelection:e.props.characterSelection,id:a.id,key:a.id,name:a.name,image:a.image})}))}}]),a}(r.Component);t(20);var f=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"bottom"},"Mario Memory!"),i.a.createElement("span",null,"Copyright \xa9 2019 Clint Brodar"))},k=t(8),w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={title:"Click an image to begin!",score:0,topScore:0,idArr:[],characters:k},t.characterSelection=function(e,a){if(t.state.idArr.indexOf(e)>-1){if(t.setState({title:"You already picked "+a+"!"}),t.state.score>t.state.topScore){var r=t.state.score;t.setState({idArr:[],score:0,topScore:r})}else t.setState({idArr:[],score:0});var i=t.shuffleArray(t.state.characters);t.setState({characters:i})}else{var n=t.shuffleArray(t.state.characters),o=t.state.idArr;o.push(e),t.setState({idArr:o,score:t.state.score+1,characters:n,title:"You Guessed Correctly!"})}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"shuffleArray",value:function(e){for(var a=e,t=a.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),i=a[t];a[t]=a[r],a[r]=i}return a}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p,{score:this.state.score,title:this.state.title,topScore:this.state.topScore}),i.a.createElement(u,null),i.a.createElement(g,{characterSelection:this.characterSelection,characters:this.state.characters,shuffleArray:this.shuffleArray}),i.a.createElement(f,null))}}]),a}(r.Component);o.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.be1d1da0.chunk.js.map