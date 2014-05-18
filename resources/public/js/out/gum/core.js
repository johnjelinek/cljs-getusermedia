// Compiled by ClojureScript 0.0-2202
goog.provide('gum.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('om.dom');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
gum.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"GetUserMedia Demo"], null));
gum.core.widget = (function widget(data,owner){if(typeof gum.core.t5941 !== 'undefined')
{} else
{
/**
* @constructor
*/
gum.core.t5941 = (function (owner,data,widget,meta5942){
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta5942 = meta5942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
gum.core.t5941.cljs$lang$type = true;
gum.core.t5941.cljs$lang$ctorStr = "gum.core/t5941";
gum.core.t5941.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"gum.core/t5941");
});
gum.core.t5941.prototype.om$core$IRender$ = true;
gum.core.t5941.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.video({"autoPlay": "autoplay"}));
});
gum.core.t5941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5943){var self__ = this;
var _5943__$1 = this;return self__.meta5942;
});
gum.core.t5941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5943,meta5942__$1){var self__ = this;
var _5943__$1 = this;return (new gum.core.t5941(self__.owner,self__.data,self__.widget,meta5942__$1));
});
gum.core.__GT_t5941 = (function __GT_t5941(owner__$1,data__$1,widget__$1,meta5942){return (new gum.core.t5941(owner__$1,data__$1,widget__$1,meta5942));
});
}
return (new gum.core.t5941(owner,data,widget,null));
});
om.core.root.call(null,gum.core.widget,gum.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("container")], null));
gum.core.webrtc_ready = (function webrtc_ready(){var on_success = (function (stream){var video = document.querySelector("video");(window["stream"] = stream);
return window.attachMediaStream(video,stream);
});var on_error = ((function (on_success){
return (function (err){return console.log([cljs.core.str("navigator.getUserMedia error: ")].join(''),err);
});})(on_success))
;var constraints = {"video": true, "audio": false};return navigator.getUserMedia(constraints,on_success,on_error);
});
(window["WebRTCReadyCb"] = gum.core.webrtc_ready);

//# sourceMappingURL=core.js.map