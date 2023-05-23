import{_ as x,U as K,D as Q,V as ue,W as ee,X as V,f as P,u as D,v as U,G as le,Y as ge,$ as de,a0 as N,C as pe,a1 as te,d as re,a2 as ve,n as ce,m as fe,a3 as me,a4 as ye,k as _e,h as Se,e as be,a5 as Ae,a6 as ae,S as ie,a7 as we,y as Le,a8 as De,a9 as xe,aa as Ie}from"./install.522a7ea3.js";var ne=function(a){x(r,a);function r(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=r.type,e}return r.prototype.getInitialData=function(e,t){return K(this.getSource(),this,{useEncodeDefaulter:!0})},r.prototype.getMarkerPosition=function(e){var t=this.coordinateSystem;if(t){var i=t.dataToPoint(t.clampData(e)),n=this.getData(),s=n.getLayout("offset"),o=n.getLayout("size"),u=t.getBaseAxis().isHorizontal()?0:1;return i[u]+=s+o/2,i}return[NaN,NaN]},r.type="series.__base_bar__",r.defaultOption={zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod"},r}(Q);Q.registerClass(ne);var X=ne,Ce=function(a){x(r,a);function r(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=r.type,e}return r.prototype.getInitialData=function(){return K(this.getSource(),this,{useEncodeDefaulter:!0,createInvertedIndices:!!this.get("realtimeSort",!0)||null})},r.prototype.getProgressive=function(){return this.get("large")?this.get("progressive"):!1},r.prototype.getProgressiveThreshold=function(){var e=this.get("progressiveThreshold"),t=this.get("largeThreshold");return t>e&&(e=t),e},r.prototype.brushSelector=function(e,t,i){return i.rect(t.getItemLayout(e))},r.type="series.bar",r.dependencies=["grid","polar"],r.defaultOption=ue(X.defaultOption,{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:"#212121"}},realtimeSort:!1}),r}(X),Pe=Ce,ke=function(){function a(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=Math.PI*2,this.clockwise=!0}return a}(),Oe=function(a){x(r,a);function r(e){var t=a.call(this,e)||this;return t.type="sausage",t}return r.prototype.getDefaultShape=function(){return new ke},r.prototype.buildPath=function(e,t){var i=t.cx,n=t.cy,s=Math.max(t.r0||0,0),o=Math.max(t.r,0),u=(o-s)*.5,h=s+u,g=t.startAngle,l=t.endAngle,v=t.clockwise,d=Math.cos(g),c=Math.sin(g),A=Math.cos(l),S=Math.sin(l),w=v?l-g<Math.PI*2:g-l<Math.PI*2;w&&(e.moveTo(d*s+i,c*s+n),e.arc(d*h+i,c*h+n,u,-Math.PI+g,g,!v)),e.arc(i,n,o,g,l,!v),e.moveTo(A*o+i,S*o+n),e.arc(A*h+i,S*h+n,u,l-Math.PI*2,l-Math.PI,!v),s!==0&&(e.arc(i,n,s,l,g,v),e.moveTo(d*s+i,S*s+n)),e.closePath()},r}(ee),Te=Oe,I=[0,0],M=Math.max,R=Math.min;function Be(a,r){var e=a.getArea&&a.getArea();if(ae(a,"cartesian2d")){var t=a.getBaseAxis();if(t.type!=="category"||!t.onBand){var i=r.getLayout("bandWidth");t.isHorizontal()?(e.x-=i,e.width+=i*2):(e.y-=i,e.height+=i*2)}}return e}var Me=function(a){x(r,a);function r(){var e=a.call(this)||this;return e.type=r.type,e._isFirstFrame=!0,e}return r.prototype.render=function(e,t,i,n){this._model=e,this._removeOnRenderedListener(i),this._updateDrawMode(e);var s=e.get("coordinateSystem");s==="cartesian2d"||s==="polar"?this._isLargeDraw?this._renderLarge(e,t,i):this._renderNormal(e,t,i,n):V("Only cartesian2d and polar supported for bar.")},r.prototype.incrementalPrepareRender=function(e){this._clear(),this._updateDrawMode(e),this._updateLargeClip(e)},r.prototype.incrementalRender=function(e,t){this._incrementalRenderLarge(e,t)},r.prototype._updateDrawMode=function(e){var t=e.pipelineContext.large;(this._isLargeDraw==null||t!==this._isLargeDraw)&&(this._isLargeDraw=t,this._clear())},r.prototype._renderNormal=function(e,t,i,n){var s=this.group,o=e.getData(),u=this._data,h=e.coordinateSystem,g=h.getBaseAxis(),l;h.type==="cartesian2d"?l=g.isHorizontal():h.type==="polar"&&(l=g.dim==="angle");var v=e.isAnimationEnabled()?e:null,d=Re(e,h);d&&this._enableRealtimeSort(d,o,i);var c=e.get("clip",!0)||d,A=Be(h,o);s.removeClipPath();var S=e.get("roundCap",!0),w=e.get("showBackground",!0),k=e.getModel("backgroundStyle"),E=k.get("borderRadius")||0,L=[],W=this._backgroundEls,G=n&&n.isInitSort,F=n&&n.type==="changeAxisOrder";function Y(p){var _=C[h.type](o,p),f=Ye(h,l,_);return f.useStyle(k.getItemStyle()),h.type==="cartesian2d"&&f.setShape("r",E),L[p]=f,f}o.diff(u).add(function(p){var _=o.getItemModel(p),f=C[h.type](o,p,_);if(w&&Y(p),!!o.hasValue(p)){var b=!1;c&&(b=z[h.type](A,f));var m=H[h.type](e,o,p,f,l,v,g.model,!1,S);$(m,o,p,_,f,e,l,h.type==="polar"),G?m.attr({shape:f}):d?Z(d,v,m,f,p,l,!1,!1):P(m,{shape:f},e,p),o.setItemGraphicEl(p,m),s.add(m),m.ignore=b}}).update(function(p,_){var f=o.getItemModel(p),b=C[h.type](o,p,f);if(w){var m=void 0;W.length===0?m=Y(_):(m=W[_],m.useStyle(k.getItemStyle()),h.type==="cartesian2d"&&m.setShape("r",E),L[p]=m);var oe=C[h.type](o,p),he=se(l,oe,h);D(m,{shape:he},v,p)}var y=u.getItemGraphicEl(_);if(!o.hasValue(p)){s.remove(y),y=null;return}var B=!1;c&&(B=z[h.type](A,b),B&&s.remove(y)),y||(y=H[h.type](e,o,p,b,l,v,g.model,!!y,S)),F||$(y,o,p,f,b,e,l,h.type==="polar"),G?y.attr({shape:b}):d?Z(d,v,y,b,p,l,!0,F):D(y,{shape:b},e,p,null),o.setItemGraphicEl(p,y),y.ignore=B,s.add(y)}).remove(function(p){var _=u.getItemGraphicEl(p);_&&U(_,e,p)}).execute();var O=this._backgroundGroup||(this._backgroundGroup=new le);O.removeAll();for(var T=0;T<L.length;++T)O.add(L[T]);s.add(O),this._backgroundEls=L,this._data=o},r.prototype._renderLarge=function(e,t,i){this._clear(),j(e,this.group),this._updateLargeClip(e)},r.prototype._incrementalRenderLarge=function(e,t){this._removeBackground(),j(t,this.group,!0)},r.prototype._updateLargeClip=function(e){var t=e.get("clip",!0)?ge(e.coordinateSystem,!1,e):null;t?this.group.setClipPath(t):this.group.removeClipPath()},r.prototype._enableRealtimeSort=function(e,t,i){var n=this;if(!!t.count()){var s=e.baseAxis;if(this._isFirstFrame)this._dispatchInitSort(t,e,i),this._isFirstFrame=!1;else{var o=function(u){var h=t.getItemGraphicEl(u);if(h){var g=h.shape;return(s.isHorizontal()?Math.abs(g.height):Math.abs(g.width))||0}else return 0};this._onRendered=function(){n._updateSortWithinSameData(t,o,s,i)},i.getZr().on("rendered",this._onRendered)}}},r.prototype._dataSort=function(e,t,i){var n=[];return e.each(e.mapDimension(t.dim),function(s,o){var u=i(o);u=u==null?NaN:u,n.push({dataIndex:o,mappedValue:u,ordinalNumber:s})}),n.sort(function(s,o){return o.mappedValue-s.mappedValue}),{ordinalNumbers:de(n,function(s){return s.ordinalNumber})}},r.prototype._isOrderChangedWithinSameData=function(e,t,i){for(var n=i.scale,s=e.mapDimension(i.dim),o=Number.MAX_VALUE,u=0,h=n.getOrdinalMeta().categories.length;u<h;++u){var g=e.rawIndexOf(s,n.getRawOrdinalNumber(u)),l=g<0?Number.MIN_VALUE:t(e.indexOfRawIndex(g));if(l>o)return!0;o=l}return!1},r.prototype._isOrderDifferentInView=function(e,t){for(var i=t.scale,n=i.getExtent(),s=Math.max(0,n[0]),o=Math.min(n[1],i.getOrdinalMeta().categories.length-1);s<=o;++s)if(e.ordinalNumbers[s]!==i.getRawOrdinalNumber(s))return!0},r.prototype._updateSortWithinSameData=function(e,t,i,n){if(!!this._isOrderChangedWithinSameData(e,t,i)){var s=this._dataSort(e,i,t);this._isOrderDifferentInView(s,i)&&(this._removeOnRenderedListener(n),n.dispatchAction({type:"changeAxisOrder",componentType:i.dim+"Axis",axisId:i.index,sortInfo:s}))}},r.prototype._dispatchInitSort=function(e,t,i){var n=t.baseAxis,s=this._dataSort(e,n,function(o){return e.get(e.mapDimension(t.otherAxis.dim),o)});i.dispatchAction({type:"changeAxisOrder",componentType:n.dim+"Axis",isInitSort:!0,axisId:n.index,sortInfo:s,animation:{duration:0}})},r.prototype.remove=function(e,t){this._clear(this._model),this._removeOnRenderedListener(t)},r.prototype.dispose=function(e,t){this._removeOnRenderedListener(t)},r.prototype._removeOnRenderedListener=function(e){this._onRendered&&(e.getZr().off("rendered",this._onRendered),this._onRendered=null)},r.prototype._clear=function(e){var t=this.group,i=this._data;e&&e.isAnimationEnabled()&&i&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],i.eachItemGraphicEl(function(n){U(n,e,N(n).dataIndex)})):t.removeAll(),this._data=null,this._isFirstFrame=!0},r.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null},r.type="bar",r}(pe),z={cartesian2d:function(a,r){var e=r.width<0?-1:1,t=r.height<0?-1:1;e<0&&(r.x+=r.width,r.width=-r.width),t<0&&(r.y+=r.height,r.height=-r.height);var i=a.x+a.width,n=a.y+a.height,s=M(r.x,a.x),o=R(r.x+r.width,i),u=M(r.y,a.y),h=R(r.y+r.height,n),g=o<s,l=h<u;return r.x=g&&s>i?o:s,r.y=l&&u>n?h:u,r.width=g?0:o-s,r.height=l?0:h-u,e<0&&(r.x+=r.width,r.width=-r.width),t<0&&(r.y+=r.height,r.height=-r.height),g||l},polar:function(a,r){var e=r.r0<=r.r?1:-1;if(e<0){var t=r.r;r.r=r.r0,r.r0=t}var i=R(r.r,a.r),n=M(r.r0,a.r0);r.r=i,r.r0=n;var s=i-n<0;if(e<0){var t=r.r;r.r=r.r0,r.r0=t}return s}},H={cartesian2d:function(a,r,e,t,i,n,s,o,u){var h=new te({shape:re({},t),z2:1});if(h.__dataIndex=e,h.name="item",n){var g=h.shape,l=i?"height":"width";g[l]=0}return h},polar:function(a,r,e,t,i,n,s,o,u){var h=t.startAngle<t.endAngle,g=!i&&u?Te:ie,l=new g({shape:ve({clockwise:h},t),z2:1});if(l.name="item",n){var v=l.shape,d=i?"r":"endAngle",c={};v[d]=i?0:t.startAngle,c[d]=t[d],(o?D:P)(l,{shape:c},n)}return l}};function Re(a,r){var e=a.get("realtimeSort",!0),t=r.getBaseAxis();if(e&&(t.type!=="category"&&V("`realtimeSort` will not work because this bar series is not based on a category axis."),r.type!=="cartesian2d"&&V("`realtimeSort` will not work because this bar series is not on cartesian2d.")),e&&t.type==="category"&&r.type==="cartesian2d")return{baseAxis:t,otherAxis:r.getOtherAxis(t)}}function Z(a,r,e,t,i,n,s,o){var u,h;n?(h={x:t.x,width:t.width},u={y:t.y,height:t.height}):(h={y:t.y,height:t.height},u={x:t.x,width:t.width}),o||(s?D:P)(e,{shape:u},r,i,null);var g=r?a.baseAxis.model:null;(s?D:P)(e,{shape:h},g,i)}var C={cartesian2d:function(a,r,e){var t=a.getItemLayout(r),i=e?Ne(e,t):0,n=t.width>0?1:-1,s=t.height>0?1:-1;return{x:t.x+n*i/2,y:t.y+s*i/2,width:t.width-n*i,height:t.height-s*i}},polar:function(a,r,e){var t=a.getItemLayout(r);return{cx:t.cx,cy:t.cy,r0:t.r0,r:t.r,startAngle:t.startAngle,endAngle:t.endAngle}}};function Ve(a){return a.startAngle!=null&&a.endAngle!=null&&a.startAngle===a.endAngle}function $(a,r,e,t,i,n,s,o){var u=r.getItemVisual(e,"style");o||a.setShape("r",t.get(["itemStyle","borderRadius"])||0),a.useStyle(u);var h=t.getShallow("cursor");if(h&&a.attr("cursor",h),!o){var g=s?i.height>0?"bottom":"top":i.width>0?"left":"right",l=ce(t);fe(a,l,{labelFetcher:n,labelDataIndex:e,defaultText:me(n.getData(),e),inheritColor:u.fill,defaultOpacity:u.opacity,defaultOutsidePosition:g});var v=a.getTextContent();ye(v,l,n.getRawValue(e),function(c){return we(r,c)})}var d=t.getModel(["emphasis"]);_e(a,d.get("focus"),d.get("blurScope")),Se(a,t),Ve(i)&&(a.style.fill="none",a.style.stroke="none",be(a.states,function(c){c.style&&(c.style.fill=c.style.stroke="none")}))}function Ne(a,r){var e=a.get(["itemStyle","borderColor"]);if(!e||e==="none")return 0;var t=a.get(["itemStyle","borderWidth"])||0,i=isNaN(r.width)?Number.MAX_VALUE:Math.abs(r.width),n=isNaN(r.height)?Number.MAX_VALUE:Math.abs(r.height);return Math.min(t,i,n)}var Ee=function(){function a(){}return a}(),q=function(a){x(r,a);function r(e){var t=a.call(this,e)||this;return t.type="largeBar",t}return r.prototype.getDefaultShape=function(){return new Ee},r.prototype.buildPath=function(e,t){for(var i=t.points,n=this.__startPoint,s=this.__baseDimIdx,o=0;o<i.length;o+=2)n[s]=i[o+s],e.moveTo(n[0],n[1]),e.lineTo(i[o],i[o+1])},r}(ee);function j(a,r,e){var t=a.getData(),i=[],n=t.getLayout("valueAxisHorizontal")?1:0;i[1-n]=t.getLayout("valueAxisStart");var s=t.getLayout("largeDataIndices"),o=t.getLayout("barWidth"),u=a.getModel("backgroundStyle"),h=a.get("showBackground",!0);if(h){var g=t.getLayout("largeBackgroundPoints"),l=[];l[1-n]=t.getLayout("backgroundStart");var v=new q({shape:{points:g},incremental:!!e,silent:!0,z2:0});v.__startPoint=l,v.__baseDimIdx=n,v.__largeDataIndices=s,v.__barWidth=o,Fe(v,u,t),r.add(v)}var d=new q({shape:{points:t.getLayout("largePoints")},incremental:!!e});d.__startPoint=i,d.__baseDimIdx=n,d.__largeDataIndices=s,d.__barWidth=o,r.add(d),Ge(d,a,t),N(d).seriesIndex=a.seriesIndex,a.get("silent")||(d.on("mousedown",J),d.on("mousemove",J))}var J=Ae(function(a){var r=this,e=We(r,a.offsetX,a.offsetY);N(r).dataIndex=e>=0?e:null},30,!1);function We(a,r,e){var t=a.__baseDimIdx,i=1-t,n=a.shape.points,s=a.__largeDataIndices,o=Math.abs(a.__barWidth/2),u=a.__startPoint[i];I[0]=r,I[1]=e;for(var h=I[t],g=I[1-t],l=h-o,v=h+o,d=0,c=n.length/2;d<c;d++){var A=d*2,S=n[A+t],w=n[A+i];if(S>=l&&S<=v&&(u<=w?g>=u&&g<=w:g>=w&&g<=u))return s[d]}return-1}function Ge(a,r,e){var t=e.getVisual("style");a.useStyle(re({},t)),a.style.fill=null,a.style.stroke=t.fill,a.style.lineWidth=e.getLayout("barWidth")}function Fe(a,r,e){var t=r.get("borderColor")||r.get("color"),i=r.getItemStyle();a.useStyle(i),a.style.fill=null,a.style.stroke=t,a.style.lineWidth=e.getLayout("barWidth")}function se(a,r,e){if(ae(e,"cartesian2d")){var t=r,i=e.getArea();return{x:a?t.x:i.x,y:a?i.y:t.y,width:a?t.width:i.width,height:a?i.height:t.height}}else{var i=e.getArea(),n=r;return{cx:i.cx,cy:i.cy,r0:a?i.r0:n.r0,r:a?i.r:n.r,startAngle:a?n.startAngle:0,endAngle:a?n.endAngle:Math.PI*2}}}function Ye(a,r,e){var t=a.type==="polar"?ie:te;return new t({shape:se(r,e,a),silent:!0,z2:0})}var Ue=Me;function ze(a){a.registerChartView(Ue),a.registerSeriesModel(Pe),a.registerLayout(a.PRIORITY.VISUAL.LAYOUT,Le(Ie,"bar")),a.registerLayout(a.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,De),a.registerProcessor(a.PRIORITY.PROCESSOR.STATISTIC,xe("bar")),a.registerAction({type:"changeAxisOrder",event:"changeAxisOrder",update:"update"},function(r,e){var t=r.componentType||"series";e.eachComponent({mainType:t,query:r},function(i){r.sortInfo&&i.axis.setCategorySortInfo(r.sortInfo)})})}export{ze as i};
