(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/nyc.50fcef23.CSV"},13:function(e,t,a){e.exports=a.p+"static/media/seattle.1dec6aa3.CSV"},14:function(e,t,a){e.exports=a.p+"static/media/houston.c2cb2321.CSV"},16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=(a(21),a(15)),s=a(2),l=a(3),d=a(5),u=a(4),h=a(6),p=(a(22),a(1)),m=a(8),f=Object(m.range)(7,20),v=[{month:"January",startDateID:0,endDateID:30},{month:"February",startDateID:31,endDateID:58},{month:"March",startDateID:59,endDateID:89},{month:"April",startDateID:90,endDateID:119},{month:"May",startDateID:120,endDateID:150},{month:"June",startDateID:151,endDateID:180},{month:"July",startDateID:181,endDateID:211},{month:"August",startDateID:212,endDateID:242},{month:"September",startDateID:243,endDateID:272},{month:"October",startDateID:273,endDateID:303},{month:"November",startDateID:306,endDateID:333},{month:"December",startDateID:334,endDateID:364}];function D(e,t,a,n){var r=n.svgWidth,o=n.radius,c=n.endAngle,i=void 0===c?6.08:c,s=n.monthLabelInnerPortion,l=void 0===s?1.01:s,d=n.monthLabelOuterPortion,u=void 0===d?1.08:d,h=n.handleMouseOver,D=n.handleMouseOut,g=n.colorScale,b=.5/f.length,y=Object(p.g)().sort(null).value(function(e){return e.value}).endAngle(i),O=Object(p.g)().value(function(e){return e.endDateID-e.startDateID}).sort(null).endAngle(i),I=Object(p.j)(t).append("g").attr("transform","translate(".concat(r/2,",").concat(r/2,")"));f.forEach(function(t){var n=I.append("g").attr("class","hour-".concat(t)).selectAll("path").data(y(a.filter(function(e){return e.time===t})),function(e){return"".concat(e.data.date.split("/").slice(0,2).join("")).concat(t)});n.exit().remove(),n.enter().append("path").merge(n).on("mouseover",function(t){var a=Object(p.j)(this).attr("id").replace("".concat(e,"-"),"");Object(p.k)("path[id*='".concat(a,"']")).each(function(){Object(p.j)(this).attr("stroke","#000")}),h(e,a)}).on("mouseout",function(t){var a=Object(p.j)(this).attr("id").replace("".concat(e,"-"),"");Object(p.k)("path[id*='".concat(a,"']")).each(function(){Object(p.j)(this).attr("stroke","none")}),D()}).transition().ease(p.d).delay(function(e,t){return 10*t}).attrTween("d",function(e){var t=Object(m.indexOf)(f,e.data.time),a=e.index*(i/365),n=(e.index+1)*(i/365),r=Object(p.e)(a,n);return function(e){return Object(p.a)()({innerRadius:(1-(t+1)*b)*o,outerRadius:(1-t*b)*o,startAngle:a,endAngle:r(e)})}}).attr("id",function(a){return"".concat(e,"-").concat(a.data.date.split("/").slice(0,2).join("")).concat(t)}).attr("fill",function(e){return e.value?g(e.value):"#fff"})});var j=I.append("g").attr("class","hourLabels").selectAll("text").data(f,function(e){return e});j.exit().remove(),j.enter().append("text").attr("x",-1).attr("y",function(e,t){return-o*(1-b-b*t)}).attr("text-anchor","end").attr("fill","#000").attr("font-size","".concat(b*o,"px")).style("opacity",0).merge(j).transition().duration(3650).text(function(e){return"".concat(e,":00")}).style("opacity",1);var E=I.append("g").attr("class","monthLabels"),x=E.selectAll("path").data(O(v),function(e){return e.startDateID});x.exit().remove(),x.enter().append("path").merge(x).attr("id",function(t,a){return"".concat(e,"-monthArc-").concat(a)}).attr("fill","#fff").attr("d",function(e){return Object(p.a)()({innerRadius:l*o,outerRadius:u*o,startAngle:e.startAngle,endAngle:e.endAngle})}).each(function(e,t){var a=Object(p.j)(this).attr("d"),n=/L.+?A(.+?)Z/.exec(a)[1].split(","),r=/(^.+?)A/.exec(a)[1],o="L".concat(n.slice(n.length-2).join());E.append("path").transition().delay(3650*t/12).attr("d",r+o).attr("stroke","#aaa")});var M=E.selectAll("text").data(v,function(e){return e.startDateID});M.exit().remove(),M.enter().append("text").attr("x",1).attr("dy","".concat((u-l-.01)*o)).append("textPath").attr("xlink:href",function(t,a){return"#".concat(e,"-monthArc-").concat(a)}).text(function(e){return e.month}).attr("font-size","".concat((u-l)*o,"px")).style("opacity",0).merge(M).transition().delay(function(e,t){return 3650*t/12}).ease(p.d).style("opacity",1)}var g={nyc:"New York City",seattle:"Seattle",houston:"Houston"},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).svgRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.hoverId===this.props.hoverId}},{key:"componentDidMount",value:function(){D(this.props.id,this.svgRef.current,this.props.data,{colorScale:this.props.colorScale,radius:this.props.radius,svgWidth:this.props.svgWidth,handleMouseOver:this.props.handleMouseOver,handleMouseOut:this.props.handleMouseOut})}},{key:"componentDidUpdate",value:function(){D(this.props.id,this.svgRef.current,this.props.data,{colorScale:this.props.colorScale,radius:this.props.radius,containerWidth:this.props.svgWidth,handleMouseOver:this.props.handleMouseOver,handleMouseOut:this.props.handleMouseOut})}},{key:"render",value:function(){return r.a.createElement("div",{className:"solar-grid"},r.a.createElement("svg",{ref:this.svgRef,width:this.props.svgWidth,height:this.props.svgWidth}),r.a.createElement("h3",null,g[this.props.id]))}}]),t}(n.Component),y=a(7),O=a(12),I=a.n(O),j=a(13),E=a.n(j),x=a(14),M=a.n(x),w=function(e){var t=e.date,a=e.time,n=e.DBT,o=e.DPT,c=e.windspd,i=e.value,s=e.style,l=e.selectedMetric;return r.a.createElement("div",{style:s,className:"tooltip-grid"},r.a.createElement("div",{className:"solar-measure tooltip-area"},r.a.createElement("div",{style:{color:"#808080",fontSize:"".concat(.8*s.fontSize.replace("px",""),"px")}},"".concat(t.replace(/\/\d{4}$/g,"")," ").concat(a,":00")),r.a.createElement("div",{style:{fontSize:"".concat(1.5*s.fontSize.replace("px",""),"px")}},i),r.a.createElement("div",{style:{color:"#808080",fontSize:"".concat(.8*s.fontSize.replace("px",""),"px")}},"".concat(l," (Wh/m\xb2)"))),r.a.createElement("div",{className:"temp tooltip-area"},r.a.createElement("div",null,"".concat(n,"/").concat(o)),r.a.createElement("div",{style:{color:"#808080",fontSize:"".concat(.8*s.fontSize.replace("px",""),"px")}},"DBT/DPT (\xb0C)")),r.a.createElement("div",{className:"wind tooltip-area"},r.a.createElement("div",null,c),r.a.createElement("div",{style:{color:"#808080",fontSize:"".concat(.8*s.fontSize.replace("px",""),"px")}},"Wind Speed (m/s)")))},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).axisRef=r.a.createRef(),a.renderTicks=function(e){var t=Object(p.h)().domain(a.props.colorScale.domain()).range([0,a.props.legendWidth]);return e.attr("class","x-axis").attr("transform","translate(".concat((a.props.svgWidth-a.props.legendWidth)/2,",").concat((a.props.svgHeight+a.props.legendHeight)/2,")")).call(Object(p.b)(t).ticks(a.props.legendWidth/80).tickSize(-a.props.legendHeight))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){Object(p.j)(this.axisRef.current).call(this.renderTicks)}},{key:"render",value:function(){var e=this.props,t=e.legendWidth,a=e.legendHeight,n=e.svgHeight,o=e.svgWidth,c=e.colorScale,i=e.selectedMetric;return r.a.createElement("div",{className:"legend-container"},r.a.createElement("div",null,i),r.a.createElement("div",null,r.a.createElement("svg",{width:o,height:n},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"linear-gradient"},c.ticks().map(function(e,t,a){return r.a.createElement("stop",{key:e,offset:"".concat(100*t/a.length,"%"),stopColor:c(e)})}))),r.a.createElement("g",{transform:"translate(".concat((o-t)/2,",").concat((n-a)/2,")")},r.a.createElement("rect",{width:t,height:a,style:{fill:"url(#linear-gradient)"}})),r.a.createElement("g",{ref:this.axisRef}))))}}]),t}(n.Component),k=Object(p.i)(p.f).domain([1,1100]),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedMetric:"GHI",svgWidth:null,solarData:null,isLoaded:!1,tooltipData:null,hoverId:null},a.containerRef=r.a.createRef(),a.handleMouseOver=function(e,t){var n=t.slice(0,2),r=t.slice(2,4),o=t.slice(4),c=Object.keys(a.state.solarData).map(function(e){return{city:e,data:a.state.solarData[e].filter(function(e){return e.date.startsWith("".concat(n,"/").concat(r,"/"))&&e.time===parseInt(o)})}});a.setState({tooltipData:c,hoverId:t})},a.handleMouseOut=function(){a.setState({tooltipData:null,hoverId:null})},a.handleChange=function(e){a.setState({selectedMetric:e,isLoaded:!1})},a.filterSolarData=function(e,t){return e.map(function(e){return{date:e["Date (MM/DD/YYYY)"],time:parseInt(e["Time (HH:MM)"].split(":")[0]),value:parseInt(e["".concat(t," (W/m^2)")]),DBT:parseFloat(e["Dry-bulb (C)"]),DPT:parseFloat(e["Dew-point (C)"]),windspd:parseFloat(e["Wspd (m/s)"])}})},a.fetchData=function(e){Promise.all([Object(p.c)(I.a),Object(p.c)(M.a),Object(p.c)(E.a)]).then(function(t){var a=[];return t.forEach(function(t){a.push(t.filter(function(e){var t=parseInt(e["Time (HH:MM)"].split(":")[0]);return![1,2,3,4,5,6,20,21,22,23,24].includes(t)}).map(function(t){return{date:t["Date (MM/DD/YYYY)"],time:parseInt(t["Time (HH:MM)"].split(":")[0]),value:parseInt(t["".concat(e," (W/m^2)")]),DBT:parseFloat(t["Dry-bulb (C)"]),DPT:parseFloat(t["Dew-point (C)"]),windspd:parseFloat(t["Wspd (m/s)"])}}))}),a}).then(function(e){var t=Object(i.a)(e,3),n=t[0],r=t[1],o=t[2];a.setState({isLoaded:!0,solarData:{nyc:n,houston:r,seattle:o}})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({svgWidth:.8*window.innerWidth/3}),this.fetchData(this.state.selectedMetric)}},{key:"componentDidUpdate",value:function(e,t){t.selectedMetric!==this.state.selectedMetric&&this.fetchData(this.state.selectedMetric)}},{key:"render",value:function(){var e=this,t=this.state,a=t.solarData,n=t.svgWidth,o=t.selectedMetric,c=t.isLoaded,i=t.tooltipData,s=t.hoverId,l=.85*n/2;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"text"},r.a.createElement("h2",null," Solar Rhythm in NYC, Houston and Seattle"),r.a.createElement("p",null,'The "circular heatmaps" below visualize the hourly (7am-7pm) solar values in a single year for three US cities. The two important metrics represented in the visualizations are Global Horizontal Irradiance (GHI), the total amount of direct and diffuse solar radiation received on a horizontal surface, and the Direct Normal Irradiance (DNI), which is the amount of solar radiation received in a collimated beam on a surface that is always held perpendicular (or normal) to the sun. Hover over hourly segments to see other meteorological metrics such as dry bulb temperature (DBT), dew point temperature (DPT), and wind speed.'),r.a.createElement("p",null,"Data source: Typical Meteorological Year, version 3 (TMY3) data sets released by by the National Renewable Energy Laboratory (NREL).")),r.a.createElement("div",{className:"radio-container"},r.a.createElement(y.RadioGroup,{name:"fruit",selectedValue:o,onChange:this.handleChange},r.a.createElement("span",{className:"radio-label"},"Choose a metric:"),r.a.createElement("label",{className:"radio-label"},r.a.createElement(y.Radio,{value:"GHI"}),"GHI"),r.a.createElement("label",{className:"radio-label"},r.a.createElement(y.Radio,{value:"DNI"}),"DNI"))),c?r.a.createElement("div",{className:"grid-container"},Object.keys(a).map(function(t){return r.a.createElement(b,{key:t,data:a[t],svgWidth:n,radius:l,colorScale:k,id:t,handleMouseOver:e.handleMouseOver,handleMouseOut:e.handleMouseOut,hoverId:s})}),i&&i.map(function(e,t){return r.a.createElement(w,Object.assign({key:e.city,selectedMetric:o},e.data[0],{style:{position:"absolute",width:l,height:n/3,left:(n-l)/2+n*t,top:(n-l)/2,fontSize:"".concat(18*n/600,"px")}}))})):r.a.createElement("div",{className:"loader",style:{height:"".concat(n+30,"px")}},"...loading"),r.a.createElement(S,{selectedMetric:o,colorScale:k,legendHeight:20,legendWidth:300,svgHeight:100,svgWidth:350}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.7e3d1998.chunk.js.map