(ns gum.core
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)

(def app-state
  (atom {:text "GetUserMedia Demo"}))

(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h1 nil (:text data))
        (dom/video #js {:autoPlay "autoplay"})))))

(om/root widget
  app-state
  {:target (gdom/getElement "container")})

(defn webrtc-ready []
  (let [on-success (fn [stream] (let [video (. js/document (querySelector "video"))]
                                 (aset js/window "stream" stream)
                                 (. js/window (attachMediaStream video stream))))
        on-error (fn [err] (. js/console (log (str "navigator.getUserMedia error: ") err)))
        constraints #js {:audio false :video true}]
    (. js/navigator (getUserMedia constraints on-success on-error))))
(aset js/window "WebRTCReadyCb" gum.core/webrtc-ready)
