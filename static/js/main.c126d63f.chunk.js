(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/sound1.812c7504.mp3"},function(e,t,n){e.exports=n.p+"static/media/sound2.04054870.mp3"},function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=(n(15),n(1)),c=n(2),l=n(4),u=n(3),m=(n(16),n(17),n(5)),d=n.n(m),h=n(8),p=n.n(h),v=n(9),f=n.n(v),g=function(e){return r.a.createElement("button",Object.assign({className:"bg-green-700 mx-8 w-40 py-3 shadow-md rounded-md border-b-2 border-green-400 hover:border-green-500 space-y-1 text-3xl text-green-400 hover:text-green-500 focus:outline-none select-none text-center transition duration-300"},e),e.children)},y=new d.a(p.a),b=new d.a(f.a),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={duration:1500,seconds:1500,timerActive:!1,time:0},e.mouseActive=!1,e.playedTimeStamps=[],e.getTimerState=function(){var t=e.state,n=t.duration,a=t.seconds,r=t.timerActive;return a!==n||r?0===a?"Finished":r?"Going":"Paused":"Creating"},e.update=function(){var t=new Date;e.setState({time:60*t.getHours()+t.getMinutes()}),e.state.timerActive&&e.state.seconds>0&&e.setState({seconds:e.state.seconds-1})},e.startTimer=function(){e.setState({timerActive:!0})},e.pauseTimer=function(){e.setState({timerActive:!1})},e.resetTimer=function(){e.setState({timerActive:!1,seconds:e.state.duration}),document.title="Pomodoro Clock",e.playedTimeStamps=[]},e.setTimerDuration=function(t){e.setState({duration:t,seconds:t,timerActive:!1})},e.setMouseMove=function(t){var n;t.preventDefault(),e.mouseActive=!0,clearTimeout(n),n=setTimeout((function(){return e.mouseActive=!1}),5e3)},e.getFormattedTime=function(e){var t=Math.floor(e/60)+"";1===t.length&&(t="0"+t);var n=e%60+"";return 1===n.length&&(n="0"+n),t+":"+n},e.handleSound=function(t){[1,2,3].includes(t)&&!e.playedTimeStamps.includes(t)&&(e.playedTimeStamps.push(t),y.play(),console.log("Played Sound 1")),0!==t||e.playedTimeStamps.includes(0)||(e.playedTimeStamps.push(0),b.play(),console.log("Played Sound 2"))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.update(),setInterval(this.update,1e3),this.resetTimer()}},{key:"render",value:function(){var e=this,t=this.state,n=t.seconds,a=t.duration,i=t.time,o=this.getTimerState();"Creating"!==o&&(document.title="Pomodoro - "+this.getFormattedTime(n));var s=1-n/a,c=this.getFormattedTime(n),l=this.getFormattedTime(i);return this.handleSound(n),this.mouseActive||"Going"!==o?document.getElementById("root").style.cursor="auto":document.getElementById("root").style.cursor="none",r.a.createElement("div",{className:"w-full",onMouseMove:this.setMouseMove},r.a.createElement("div",{className:"flex justify-center h-20 items-center"},["Creating","Finished"].includes(o)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{onClick:function(){return e.setTimerDuration(1500)}},"25:00"),r.a.createElement(g,{onClick:function(){return e.setTimerDuration(300)}},"5:00"))),r.a.createElement("div",{className:"w-2/3 my-32 mx-auto"},r.a.createElement("div",{className:"flex w-full justify-between items-end"},r.a.createElement("h1",{className:"big-text text-green-900"},c),!!i&&r.a.createElement("h1",{className:"text-6xl text-green-700"},l)),r.a.createElement("div",{className:"w-full h-px bg-green-800"}),r.a.createElement("div",{className:"w-full h-px bg-green-800"}),r.a.createElement("div",{className:"h-2 bg-green-700",style:{width:100*s+"%"}})),r.a.createElement("div",{className:"mb-8 flex justify-center h-20 items-center"},["Creating"].includes(o)&&r.a.createElement(g,{onClick:function(){e.resetTimer(),e.startTimer()}},"Start"),"Going"===o&&r.a.createElement("div",{className:"transition duration-1000 "+(this.mouseActive?"":"opacity-0 hover:opacity-100")},r.a.createElement(g,{onClick:this.pauseTimer},"Pause")),"Paused"===o&&r.a.createElement("div",null,r.a.createElement(g,{onClick:this.startTimer},"Continue"),r.a.createElement(g,{onClick:this.resetTimer},"Reset"))))}}]),n}(a.Component),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex flex-col h-screen bg-green-600 justify-center items-center"},r.a.createElement(E,null))}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(T,null)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c126d63f.chunk.js.map