(ns gum.util
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]))

(defn read-all [f]
  (Util/readAll (io/reader f)))
