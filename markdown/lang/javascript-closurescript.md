# clojure Script

A compiler for Clojure that targets JavaScript. It brings the power of Clojure (a functional Lisp dialect) to web development.

## SOLID Principles

### Single Responsibility Principle (SRP)

In Clojure, functions naturally follow SRP because they are pure and do one thing. However, for larger structures like namespaces, it's essential to ensure they have a single responsibility.

```clojure
;; Bad example: A namespace handling both user data management and user notifications
(ns user)

(defn save-user-data [data]
  ;; ...
  )

(defn send-notification [notification]
  ;; ...
  )

;; Good example: Splitting responsibilities into separate namespaces
(ns user-data-manager)

(defn save-user-data [data]
  ;; ...
  )

(ns user-notification)

(defn send-notification [notification]
  ;; ...
  )
```

### Open/Closed Principle (OCP)

```clojure
;; Using multi-methods to represent different shapes and their areas
(defmulti compute-area :shape)

(defmethod compute-area :rectangle [{:keys [width height]}]
  (* width height))

(defmethod compute-area :circle [{:keys [radius]}]
  (* 3.14 radius radius))
```

### Liskov Substitution Principle (LSP)

Given that Clojure is a dynamically-typed language, the LSP doesn't apply in the same way as in statically-typed languages. However, when using polymorphism (like multi-methods), it's essential to ensure that all implementations are substitutable.

### Interface Segregation Principle (ISP)

Clojure doesn't have interfaces or classes in the traditional sense. However, protocols in Clojure can be seen as a way to define interfaces. Using protocols and multi-methods, you can define clear contracts and invert dependencies.

### Dependency Inversion Principle (DIP)

#### Using Higher-Order Functions

One of the simplest ways to achieve DI in Clojure is by passing functions as arguments to other functions.

```clojure
(defn greet [formatter name]
  (formatter name))

(defn polite-formatter [name]
  (str "Hello, " name "! How are you today?"))

(defn casual-formatter [name]
  (str "Hey, " name "!"))

;; Usage
(greet polite-formatter "Alice")  ;; "Hello, Alice! How are you today?"
(greet casual-formatter "Bob")    ;; "Hey, Bob!"
```

#### Using a Configuration Map

Another common approach is to pass a configuration map that contains all the dependencies.

```clojure
(defn process-data [config data]
  ((:handler config) data))

;; Usage
(def config
  {:handler (fn [data] (map inc data))})

(process-data config [1 2 3])  ;; [2 3 4]
```

#### Using Libraries

There are libraries like [Component](https://github.com/stuartsierra/component) and [Integrant](https://github.com/weavejester/integrant) that provide more structured ways to manage dependencies, especially for larger applications.

For instance, with Component:

```clojure
(ns my-app.core
  (:require [com.stuartsierra.component :as component]))

(defrecord Database [connection-string]
  component/Lifecycle
  (start [this]
    (println "Starting database with" connection-string)
    this)
  (stop [this]
    (println "Stopping database")
    this))

(defn new-database [connection-string]
  (map->Database {:connection-string connection-string}))
```

You can then build a system map that wires together all the components and their dependencies.

## Other Principles

### DRY (Don't Repeat Yourself)

```clojure
;; Bad example: Repeated logic
(defn add-tax-for-food [price]
  (+ price (* price 0.05)))

(defn add-tax-for-electronics [price]
  (+ price (* price 0.05)))

;; Good example: Single function for repeated logic
(defn add-tax [price & [rate]]
  (+ price (* price (or rate 0.05))))
```

### KISS (Keep It Simple, Stupid)

```clojure
;; Bad example: Overcomplicated way to check even numbers
(defn is-even [num]
  (zero? (mod (if (> num 0) num (- num)) 2)))

;; Good example: Simplified approach
(defn is-even [num]
  (zero? (mod num 2)))
```

### YAGNI (You Aren't Gonna Need It)

```clojure
;; Bad example: Adding unnecessary features
(defprotocol CarActions
  (drive [this])
  (fly [this]))  ;; Cars don't fly!

;; Good example: Only implement what's needed
(defprotocol CarActions
  (drive [this]))
```

### Law of Demeter (Principle of Least Knowledge)

```clojure
;; Bad example: Accessing nested structures directly
(defn purchase [item-price {:keys [wallet]}]
  (let [{:keys [money]} wallet]
    (>= money item-price)))

;; Good example: Using destructuring to minimize knowledge
(defn purchase [item-price {:keys [wallet]}]
  (let [money (:money wallet)]
    (>= money item-price)))
```

### Separation of Concerns

```clojure
;; Bad example: Mixing data retrieval and presentation in one namespace
(ns user)

(defn fetch-user-data [] 
  ;; ...
  )

(defn render-user [user]
  ;; ...
  )

;; Good example: Separating concerns into different namespaces
(ns user-data)

(defn fetch-user-data [] 
  ;; ...
  )

(ns user-view)

(defn render-user [user]
  ;; ...
  )
```
