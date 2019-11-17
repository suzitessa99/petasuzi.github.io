// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ColorTransparencyPicker.html":'\x3cdiv class\x3d"jimu-colorTransparencyPicker"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n  \x3cspan class\x3d"trans"\x3e${nls.transparency}\x3c/span\x3e\r\n  \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\x3c/div\x3e\r\n  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"\r\n         data-dojo-attach-point\x3d"spinner" data-dojo-props\x3d"smallDelta:10,intermediateChanges:true,constraints: {min:0,max:100}"\x3e\r\n  \x3cspan \x3e%\x3c/span\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/on dojo/query dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/ColorTransparencyPicker.html dijit/form/HorizontalSlider jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),function(e,c,f,d,g,h,k,l,m,n,p,q){return e([k,l,m],{_defaultColor:"#485566",templateString:n,_MINIMUN:0,_MAXIMIUM:100,postMixInProperties:function(){this.nls=window.jimuNls.transparency},postCreate:function(){this.colorPicker=
new q({color:this._defaultColor},this.colorPicker);this.colorPicker.startup();this.slider=new p({name:"slider",value:0,minimum:this._MINIMUN,maximum:this._MAXIMIUM,discreteValues:101,intermediateChanges:!0,showButtons:!1,style:"width:140px;display: inline-block;"},this.sliderBar);this.slider.startup();this.inherited(arguments)},startup:function(){this.own(d(this.slider,"change",c.hitch(this,function(a){!1===this._isSameVal()&&this.spinner.setValue(a)})));this.own(d(this.spinner,"change",c.hitch(this,
function(a){isNaN(a)&&this.spinner.setValue(0);!1===this._isSameVal()&&this.spinner.isInRange()&&this.slider.setValue(a)})));this._stylePolyfill();this.inherited(arguments)},_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},isValid:function(){var a=this.slider.getValue();return a<this._MINIMUN||a>this._MAXIMIUM||!this.spinner.isValid()?!1:!0},getValues:function(){var a=null,b=null;(b=this.colorPicker.getColor())&&b.toHex&&(a=b.toHex());b=this.spinner.getValue()/100;return{color:a,
transparency:b}},setValues:function(a){if("object"===typeof a||"string"===typeof a)this.colorPicker.setColor(new f(a.color)),a.transparency="undefined"===typeof a.transparency?0:100*a.transparency,this.slider.setValue(a.transparency),this.spinner.setValue(a.transparency)},_stylePolyfill:function(){var a=g(".dijitSliderLeftBumper",this.domNode)[0];a&&a.parentNode&&h.setStyle(a.parentNode,"background-color","#24b5cc")}})});