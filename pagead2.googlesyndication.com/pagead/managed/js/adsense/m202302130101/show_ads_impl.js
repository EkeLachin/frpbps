(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var q, ba;

    function da(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ea = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ha(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ia = ha(this),
        ja = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        r = {},
        ka = {};

    function t(a, b) {
        var c = ka[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function w(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in r ? f = r : f = ia;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ja && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ea(r, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ka[d] && (a = 1E9 * Math.random() >>> 0, ka[d] = ja ? ia.Symbol(d) : "$jscp$" + a + "$" + d), ea(f, ka[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    w("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.j = f;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.j
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    w("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, r.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ia[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ea(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return la(da(this))
                }
            })
        }
        return a
    }, "es6");

    function la(a) {
        a = {
            next: a
        };
        a[t(r.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function x(a) {
        return a.raw = a
    }

    function y(a) {
        var b = "undefined" != typeof r.Symbol && t(r.Symbol, "iterator") && a[t(r.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: da(a)
        }
    }

    function ma(a) {
        if (!(a instanceof Array)) {
            a = y(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function oa(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var pa = ja && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) oa(d, e) && (a[e] = d[e])
        }
        return a
    };
    w("Object.assign", function(a) {
        return a || pa
    }, "es6");
    var qa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ra;
    if (ja && "function" == typeof Object.setPrototypeOf) ra = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                    a: !0
                },
                va = {};
            try {
                va.__proto__ = ta;
                sa = va.a;
                break a
            } catch (a) {}
            sa = !1
        }
        ra = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var wa = ra;

    function z(a, b) {
        a.prototype = qa(b.prototype);
        a.prototype.constructor = a;
        if (wa) wa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Hg = b.prototype
    }

    function za() {
        this.A = !1;
        this.l = null;
        this.v = void 0;
        this.j = 1;
        this.D = this.B = 0;
        this.m = null
    }

    function Aa(a) {
        if (a.A) throw new TypeError("Generator is already running");
        a.A = !0
    }
    za.prototype.C = function(a) {
        this.v = a
    };

    function Ba(a, b) {
        a.m = {
            exception: b,
            Zf: !0
        };
        a.j = a.B || a.D
    }
    za.prototype.return = function(a) {
        this.m = {
            return: a
        };
        this.j = this.D
    };

    function Ca(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    }

    function Da(a) {
        a.j = 3;
        a.B = 0
    }

    function Ea(a) {
        a.B = 0;
        var b = a.m.exception;
        a.m = null;
        return b
    }

    function Fa(a) {
        this.j = new za;
        this.l = a
    }

    function Ga(a, b) {
        Aa(a.j);
        var c = a.j.l;
        if (c) return Ha(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Ia(a)
    }

    function Ha(a, b, c, d) {
        try {
            var e = b.call(a.j.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.A = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.l = null, Ba(a.j, g), Ia(a)
        }
        a.j.l = null;
        d.call(a.j, f);
        return Ia(a)
    }

    function Ia(a) {
        for (; a.j.j;) try {
            var b = a.l(a.j);
            if (b) return a.j.A = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.v = void 0, Ba(a.j, c)
        }
        a.j.A = !1;
        if (a.j.m) {
            b = a.j.m;
            a.j.m = null;
            if (b.Zf) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ja(a) {
        this.next = function(b) {
            Aa(a.j);
            a.j.l ? b = Ha(a, a.j.l.next, b, a.j.C) : (a.j.C(b), b = Ia(a));
            return b
        };
        this.throw = function(b) {
            Aa(a.j);
            a.j.l ? b = Ha(a, a.j.l["throw"], b, a.j.C) : (Ba(a.j, b), b = Ia(a));
            return b
        };
        this.return = function(b) {
            return Ga(a, b)
        };
        this[t(r.Symbol, "iterator")] = function() {
            return this
        }
    }

    function Ka(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new r.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : r.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function La(a) {
        return Ka(new Ja(new Fa(a)))
    }

    function Ma() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    w("Promise", function(a) {
        function b(g) {
            this.j = 0;
            this.m = void 0;
            this.l = [];
            this.C = !1;
            var h = this.v();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.j = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.l = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.m(function() {
                    h.A()
                })
            }
            this.j.push(g)
        };
        var e = ia.setTimeout;
        c.prototype.m = function(g) {
            e(g, 0)
        };
        c.prototype.A = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.v(l)
                    }
                }
            }
            this.j = null
        };
        c.prototype.v = function(g) {
            this.m(function() {
                throw g;
            })
        };
        b.prototype.v = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.K),
                reject: g(this.A)
            }
        };
        b.prototype.K = function(g) {
            if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.N(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.I(g) : this.B(g)
            }
        };
        b.prototype.I = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.A(k);
                return
            }
            "function" == typeof h ? this.P(h, g) : this.B(g)
        };
        b.prototype.A = function(g) {
            this.D(2, g)
        };
        b.prototype.B = function(g) {
            this.D(1, g)
        };
        b.prototype.D = function(g, h) {
            if (0 != this.j) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.j);
            this.j = g;
            this.m = h;
            2 === this.j && this.L();
            this.G()
        };
        b.prototype.L = function() {
            var g = this;
            e(function() {
                if (g.H()) {
                    var h = ia.console;
                    "undefined" !== typeof h && h.error(g.m)
                }
            }, 1)
        };
        b.prototype.H =
            function() {
                if (this.C) return !1;
                var g = ia.CustomEvent,
                    h = ia.Event,
                    k = ia.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ia.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.m;
                return k(g)
            };
        b.prototype.G = function() {
            if (null != this.l) {
                for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
                this.l = null
            }
        };
        var f = new c;
        b.prototype.N = function(g) {
            var h = this.v();
            g.Zb(h.resolve, h.reject)
        };
        b.prototype.P = function(g, h) {
            var k = this.v();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(p, v) {
                return "function" == typeof p ? function(u) {
                    try {
                        l(p(u))
                    } catch (A) {
                        m(A)
                    }
                } : v
            }
            var l, m, n = new b(function(p, v) {
                l = p;
                m = v
            });
            this.Zb(k(g, l), k(h, m));
            return n
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Zb = function(g, h) {
            function k() {
                switch (l.j) {
                    case 1:
                        g(l.m);
                        break;
                    case 2:
                        h(l.m);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.j);
                }
            }
            var l = this;
            null == this.l ? f.l(k) : this.l.push(k);
            this.C = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = y(g), m = l.next(); !m.done; m = l.next()) d(m.value).Zb(h, k)
            })
        };
        b.all = function(g) {
            var h = y(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function n(u) {
                    return function(A) {
                        p[u] = A;
                        v--;
                        0 == v && l(p)
                    }
                }
                var p = [],
                    v = 0;
                do p.push(void 0), v++, d(k.value).Zb(n(p.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");

    function Na(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                Ze: f
            }
        }
        return {
            i: -1,
            Ze: void 0
        }
    }
    w("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Na(this, b, c).Ze
        }
    }, "es6");
    w("WeakMap", function(a) {
        function b(g) {
            this.j = (f += Math.random() + 1).toString();
            if (g) {
                g = y(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!oa(g, e)) {
                var k = new c;
                ea(g, e, {
                    value: k
                })
            }
            if (!oa(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.j] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && oa(g, e) ? g[e][this.j] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && oa(g, e) && oa(g[e], this.j)
        };
        b.prototype.delete = function(g) {
            return d(g) && oa(g, e) && oa(g[e], this.j) ? delete g[e][this.j] : !1
        };
        return b
    }, "es6");
    w("Map", function(a) {
        function b() {
            var h = {};
            return h.Fa = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.j;
            return la(function() {
                if (l) {
                    for (; l.head != h.j;) l = l.Fa;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.l[l];
            if (m && oa(h.l, l))
                for (h = 0; h < m.length; h++) {
                    var n = m[h];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: h,
                        ga: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                ga: void 0
            }
        }

        function e(h) {
            this.l = {};
            this.j = b();
            this.size = 0;
            if (h) {
                h = y(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(y([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = t(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done ||
                        4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = new r.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.l[l.id] = []);
            l.ga ? l.ga.value = k : (l.ga = {
                next: this.j,
                Fa: this.j.Fa,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.ga), this.j.Fa.next = l.ga, this.j.Fa = l.ga, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.ga && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.ga.Fa.next = h.ga.next, h.ga.next.Fa =
                h.ga.Fa, h.ga.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.l = {};
            this.j = this.j.Fa = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).ga
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).ga) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = t(this,
                    "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[t(r.Symbol, "iterator")] = t(e.prototype, "entries");
        var g = 0;
        return e
    }, "es6");
    w("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    w("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    w("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");

    function Oa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[t(r.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    w("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Oa(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    w("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof r.Symbol && t(r.Symbol, "iterator") && b[t(r.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    w("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Oa(this, function(b) {
                return b
            })
        }
    }, "es6");
    w("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Oa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    w("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");

    function Pa(a) {
        return a ? a : t(Array.prototype, "fill")
    }
    w("Int8Array.prototype.fill", Pa, "es6");
    w("Uint8Array.prototype.fill", Pa, "es6");
    w("Uint8ClampedArray.prototype.fill", Pa, "es6");
    w("Int16Array.prototype.fill", Pa, "es6");
    w("Uint16Array.prototype.fill", Pa, "es6");
    w("Int32Array.prototype.fill", Pa, "es6");
    w("Uint32Array.prototype.fill", Pa, "es6");
    w("Float32Array.prototype.fill", Pa, "es6");
    w("Float64Array.prototype.fill", Pa, "es6");
    w("Set", function(a) {
        function b(c) {
            this.j = new r.Map;
            if (c) {
                c = y(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        }
        if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = t(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] ==
                        c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return t(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return t(this.j, "values").call(this.j)
        };
        b.prototype.keys = t(b.prototype, "values");
        b.prototype[t(r.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    w("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) oa(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");

    function Qa(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    w("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Qa(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    w("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Qa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    w("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Qa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    w("globalThis", function(a) {
        return a || ia
    }, "es_2020");
    w("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Na(this, b, c).i
        }
    }, "es6");
    w("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    w("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    w("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Qa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    w("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Qa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? t(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    w("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) oa(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    w("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        z(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    w("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : t(Array, "from").call(Array, b);
            return r.Promise.all(b.map(function(c) {
                return r.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new r.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var B = this || self;

    function Ra(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Sa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ta(a) {
        return Object.prototype.hasOwnProperty.call(a, Ua) && a[Ua] || (a[Ua] = ++Xa)
    }
    var Ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Xa = 0;

    function Ya(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Za(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function $a(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $a = Ya : $a = Za;
        return $a.apply(null, arguments)
    }

    function ab(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function gb() {
        return Date.now()
    }

    function hb(a, b) {
        a = a.split(".");
        var c = B;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ib(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Hg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Qk = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function jb(a) {
        return a
    };
    var kb = {
        Rj: 0,
        Qj: 1,
        Pj: 2
    };

    function lb(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, lb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    ib(lb, Error);
    lb.prototype.name = "CustomError";
    var mb;

    function tb(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        lb.call(this, c + a[d])
    }
    ib(tb, lb);
    tb.prototype.name = "AssertionError";

    function ub(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function vb(a) {
        if (!wb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(xb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(yb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(zb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ab, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Bb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Hb, "&#0;"));
        return a
    }
    var xb = /&/g,
        yb = /</g,
        zb = />/g,
        Ab = /"/g,
        Bb = /'/g,
        Hb = /\x00/g,
        wb = /[\x00&<>"']/;

    function Ib(a, b) {
        return -1 != a.indexOf(b)
    }

    function Jb(a) {
        var b = Kb(),
            c = 0;
        b = ub(String(b)).split(".");
        a = ub(String(a)).split(".");
        for (var d = Math.max(b.length, a.length), e = 0; 0 == c && e < d; e++) {
            var f = b[e] || "",
                g = a[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Lb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Lb(0 == f[2].length, 0 == g[2].length) || Lb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function Lb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Mb() {
        var a = B.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function C(a) {
        return Ib(Mb(), a)
    };

    function Nb() {
        return C("Opera")
    }

    function Ob() {
        return C("Trident") || C("MSIE")
    }

    function Pb() {
        return C("Firefox") || C("FxiOS")
    }

    function Qb() {
        return C("Safari") && !(Rb() || C("Coast") || Nb() || C("Edge") || C("Edg/") || C("OPR") || Pb() || C("Silk") || C("Android"))
    }

    function Rb() {
        return (C("Chrome") || C("CriOS")) && !C("Edge") || C("Silk")
    }

    function Sb() {
        return C("Android") && !(Rb() || Pb() || Nb() || C("Silk"))
    }

    function Tb(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Kb() {
        var a = Mb();
        if (Ob()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Tb(b);
        return Nb() ? a(["Version", "Opera"]) :
            C("Edge") ? a(["Edge"]) : C("Edg/") ? a(["Edg"]) : C("Silk") ? a(["Silk"]) : Rb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ub(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Xb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Yb(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Zb(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function $b(a, b, c) {
        var d = c;
        Xb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function ac(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function bc(a, b) {
        return 0 <= Ub(a, b)
    }

    function cc(a, b) {
        b = Ub(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function dc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function ec(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function fc(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function gc(a, b, c) {
        c = c || hc;
        for (var d = 0, e = a.length, f; d < e;) {
            var g = d + (e - d >>> 1);
            var h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function ic(a, b) {
        if (!Ra(a) || !Ra(b) || a.length != b.length) return !1;
        for (var c = a.length, d = jc, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function hc(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function jc(a, b) {
        return a === b
    }

    function kc(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = kc.apply(null, fc(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    }

    function lc(a, b) {
        b = b || Math.random;
        for (var c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function mc(a) {
        mc[" "](a);
        return a
    }
    mc[" "] = function() {};

    function nc(a, b) {
        try {
            return mc(a[b]), !0
        } catch (c) {}
        return !1
    };
    var oc = Nb(),
        sc = Ob(),
        tc = C("Edge"),
        uc = C("Gecko") && !(Ib(Mb().toLowerCase(), "webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        vc = Ib(Mb().toLowerCase(), "webkit") && !C("Edge");

    function wc() {
        var a = B.document;
        return a ? a.documentMode : void 0
    }
    var xc;
    a: {
        var yc = "",
            zc = function() {
                var a = Mb();
                if (uc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (tc) return /Edge\/([\d\.]+)/.exec(a);
                if (sc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (vc) return /WebKit\/(\S+)/.exec(a);
                if (oc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();zc && (yc = zc ? zc[1] : "");
        if (sc) {
            var Ac = wc();
            if (null != Ac && Ac > parseFloat(yc)) {
                xc = String(Ac);
                break a
            }
        }
        xc = yc
    }
    var Bc = xc,
        Cc;
    if (B.document && sc) {
        var Dc = wc();
        Cc = Dc ? Dc : parseInt(Bc, 10) || void 0
    } else Cc = void 0;
    var Ec = Cc;
    Sb();
    Rb();
    Qb();
    var Fc = {},
        Gc = null;

    function Hc(a, b) {
        void 0 === b && (b = 0);
        Ic();
        b = Fc[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function Jc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Hc(b, 3)
    }

    function Kc(a) {
        var b = [];
        Lc(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Mc(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : Ib("=.", a[b - 1]) && (c = Ib("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        Lc(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function Lc(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Gc[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Ic();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Ic() {
        if (!Gc) {
            Gc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Fc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Gc[f] && (Gc[f] = e)
                }
            }
        }
    };
    var Uc = "undefined" !== typeof Uint8Array,
        Vc = !sc && "function" === typeof B.btoa;

    function Wc(a) {
        if (!Vc) return Hc(a);
        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
        b += String.fromCharCode.apply(null, a);
        return btoa(b)
    }
    var Xc = RegExp("[-_.]", "g");

    function Yc(a) {
        switch (a) {
            case "-":
                return "+";
            case "_":
                return "/";
            case ".":
                return "=";
            default:
                return ""
        }
    }

    function Zc(a) {
        return Uc && null != a && a instanceof Uint8Array
    }
    var $c, ad = {};
    var bd;

    function cd(a) {
        if (a !== ad) throw Error("illegal external caller");
    }

    function dd(a, b) {
        cd(b);
        this.O = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }

    function ed() {
        return bd || (bd = new dd(null, ad))
    }
    dd.prototype.isEmpty = function() {
        return null == this.O
    };
    var fd = "function" === typeof r.Symbol && "symbol" === typeof(0, r.Symbol)() ? (0, r.Symbol)() : void 0;

    function gd(a, b) {
        if (fd) return a[fd] |= b;
        if (void 0 !== a.za) return a.za |= b;
        Object.defineProperties(a, {
            za: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function hd(a, b) {
        var c = id(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), jd(a, c | b));
        return a
    }

    function Cd(a, b) {
        fd ? a[fd] && (a[fd] &= ~b) : void 0 !== a.za && (a.za &= ~b)
    }

    function id(a) {
        var b;
        fd ? b = a[fd] : b = a.za;
        return null == b ? 0 : b
    }

    function jd(a, b) {
        fd ? a[fd] = b : void 0 !== a.za ? a.za = b : Object.defineProperties(a, {
            za: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Dd(a) {
        gd(a, 1);
        return a
    }

    function Ed(a) {
        return !!(id(a) & 2)
    }

    function Fd(a) {
        gd(a, 16);
        return a
    }

    function Gd(a, b) {
        jd(b, (a | 0) & -51)
    }

    function Hd(a, b) {
        jd(b, (a | 18) & -41)
    };
    var Id = {};

    function Jd(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Kd;

    function Ld(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new dd(a, ad) : ed();
            else if (a.constructor !== dd)
            if (Zc(a)) {
                var d;
                c ? d = 0 == a.length ? ed() : new dd(a, ad) : d = a.length ? new dd(new Uint8Array(a), ad) : ed();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Md, Nd = [];
    jd(Nd, 23);
    Md = Object.freeze(Nd);

    function Od(a) {
        if (Ed(a.R)) throw Error("Cannot mutate an immutable Message");
    }

    function Pd(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Jd(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };

    function Qd(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof a + ": " + a);
        return a
    }

    function Rd(a) {
        return a
    }

    function Sd(a) {
        return a
    }

    function Td(a) {
        return a
    }

    function Ud(a) {
        return a
    }

    function Vd(a) {
        return a
    };

    function Wd(a) {
        var b = a.m + a.La;
        return a.va || (a.va = a.R[b] = {})
    }

    function D(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.va ? a.va[b] : void 0 : c && a.va && (c = a.va[b], null != c) ? c : a.R[b + a.La]
    }

    function E(a, b, c, d) {
        Od(a);
        return Xd(a, b, c, d)
    }

    function Xd(a, b, c, d) {
        a.v && (a.v = void 0);
        if (b >= a.m || d) return Wd(a)[b] = c, a;
        a.R[b + a.La] = c;
        (c = a.va) && b in c && delete c[b];
        return a
    }

    function Yd(a, b, c) {
        return void 0 !== fe(a, b, c, !1)
    }

    function ge(a, b, c, d, e) {
        var f = D(a, b, d);
        Array.isArray(f) || (f = Md);
        var g = id(f);
        g & 1 || Dd(f);
        if (e) g & 2 || gd(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Cd(f, 16) : (f = Dd(Array.prototype.slice.call(f)), Xd(a, b, f, d))
        }
        return f
    }

    function he(a, b) {
        return ge(a, b, 0, !1, Ed(a.R))
    }

    function ie(a, b) {
        var c = D(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && Xd(a, b, d);
        return d
    }

    function je(a, b) {
        a = D(a, b);
        return null == a ? a : !!a
    }

    function ke(a, b, c, d) {
        var e = Ed(a.R),
            f = ge(a, b, 1, d, e),
            g = id(f);
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = Dd(f.slice()), Xd(a, b, f, d));
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            gd(f, 5);
            e && (gd(f, 2), Object.freeze(f))
        }!e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f), gd(f, 5), le(a, b, f, d));
        return f
    }

    function me(a, b, c, d) {
        if (null == c) return E(a, b, Md);
        var e = id(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
            for (var f = 0; f < c.length; f++) c[f] = d(c[f]);
            jd(c, e | 5)
        }
        return E(a, b, c)
    }

    function le(a, b, c, d) {
        c = null == c ? Md : hd(c, 1);
        return E(a, b, c, d)
    }

    function ne(a, b, c, d) {
        Od(a);
        c !== d ? Xd(a, b, c) : Xd(a, b, void 0, !1);
        return a
    }

    function oe(a, b, c, d) {
        Od(a);
        (c = pe(a, c)) && c !== b && null != d && Xd(a, c, void 0, !1);
        return Xd(a, b, d)
    }

    function pe(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != D(a, e) && (0 !== c && Xd(a, c, void 0, !1), c = e)
        }
        return c
    }

    function fe(a, b, c, d) {
        var e = D(a, c, d);
        var f = !1;
        var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.nd !== Id ? f ? new b(e) : void 0 : e;
        g !== e && null != g && (Xd(a, c, g, d), gd(g.R, id(a.R) & 18));
        return g
    }

    function F(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = fe(a, b, c, d);
        if (null == b) return b;
        if (!Ed(a.R)) {
            var e = qe(b);
            e !== b && (b = e, Xd(a, c, b, d))
        }
        return b
    }

    function re(a, b, c, d, e) {
        a.l || (a.l = {});
        var f = a.l[c],
            g = ge(a, c, 3, void 0, e);
        if (!f) {
            var h = g;
            f = [];
            var k = !!(id(a.R) & 16);
            g = Ed(h);
            var l = h;
            !e && g && (h = Array.prototype.slice.call(h));
            for (var m = g, n = 0; n < h.length; n++) {
                var p = h[n];
                var v = b,
                    u = !1;
                u = void 0 === u ? !1 : u;
                p = Array.isArray(p) ? new v(p) : u ? new v : void 0;
                if (void 0 !== p) {
                    v = p.R;
                    var A = u = id(v);
                    g && (A |= 2);
                    k && (A |= 16);
                    A != u && jd(v, A);
                    v = A;
                    m = m || !!(2 & v);
                    f.push(p)
                }
            }
            a.l[c] = f;
            k = id(h);
            b = k | 33;
            b = m ? b & -9 : b | 8;
            k != b && (m = h, Object.isFrozen(m) && (m = Array.prototype.slice.call(m)), jd(m, b), h = m);
            l !==
                h && Xd(a, c, h);
            (e || d && g) && gd(f, 2);
            d && Object.freeze(f);
            return f
        }
        e || (e = Object.isFrozen(f), d && !e ? Object.freeze(f) : !d && e && (f = Array.prototype.slice.call(f), a.l[c] = f));
        return f
    }

    function se(a, b, c) {
        var d = Ed(a.R);
        b = re(a, b, c, d, d);
        a = ge(a, c, 3, void 0, d);
        if (!(d || id(a) & 8)) {
            for (d = 0; d < b.length; d++) {
                c = b[d];
                var e = qe(c);
                c !== e && (b[d] = e, a[d] = e.R)
            }
            gd(a, 8)
        }
        return b
    }

    function te(a, b, c) {
        Od(a);
        null == c && (c = void 0);
        return Xd(a, b, c)
    }

    function ue(a, b, c, d) {
        Od(a);
        null == d && (d = void 0);
        return oe(a, b, c, d)
    }

    function ve(a, b, c, d) {
        Od(a);
        var e = null == c ? Md : Dd([]);
        if (null != c) {
            for (var f = !!c.length, g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !Ed(h.R);
                e[g] = h.R
            }
            e = hd(e, (f ? 8 : 0) | 1);
            a.l || (a.l = {});
            a.l[b] = c
        } else a.l && (a.l[b] = void 0);
        return Xd(a, b, e, d)
    }

    function we(a, b, c, d) {
        Od(a);
        var e = re(a, c, b, !1, !1);
        c = null != d ? d : new c;
        b = ge(a, b, 2, void 0, !1);
        e.push(c);
        b.push(c.R);
        Ed(c.R) && Cd(b, 8);
        return a
    }

    function xe(a, b) {
        return ye(D(a, b), 0)
    }

    function ze(a, b) {
        return ye(D(a, b), 0)
    }

    function Ae(a, b) {
        return D(a, b)
    }

    function Be(a, b, c) {
        return ne(a, b, c, 0)
    }

    function Ce(a, b) {
        return ke(a, b, Vd, !1)
    }

    function De(a, b, c) {
        return ne(a, b, c, "")
    }

    function ye(a, b) {
        return null == a ? b : a
    }

    function G(a, b) {
        return ye(D(a, b), "")
    }

    function Ee(a, b, c) {
        return ye(je(a, b), void 0 === c ? !1 : c)
    }

    function Fe(a, b) {
        return ye(D(a, b), 0)
    }

    function Ge(a, b, c, d) {
        c = pe(a, d) === c ? c : -1;
        return F(a, b, c)
    }

    function He(a, b, c) {
        return ne(a, b, c, !1)
    }

    function Ie(a, b, c) {
        return ne(a, b, c, 0)
    };
    var Je;

    function Ke(a, b) {
        Je = b;
        a = new a(b);
        Je = void 0;
        return a
    };

    function Le(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (id(a) & 128)) return a = Array.prototype.slice.call(a), Pd(a), a
                    } else {
                        if (Zc(a)) return Wc(a);
                        if (a instanceof dd) {
                            var b = a.O;
                            return null == b ? "" : "string" === typeof b ? b : a.O = Wc(b)
                        }
                    }
        }
        return a
    };

    function Me(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Ne(a, b, c, void 0 !== d);
            else if (Jd(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Me(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Ne(a, b, c, d) {
        var e = id(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = Me(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Oe(a) {
        return a.nd === Id ? a.toJSON() : Le(a)
    }

    function Pe(a, b) {
        a & 128 && Pd(b)
    };

    function Ze(a, b, c) {
        c = void 0 === c ? Hd : c;
        if (null != a) {
            if (Uc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = id(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return jd(a, d | 2), a;
                a = Ne(a, Ze, d & 4 ? Hd : c, !0);
                b = id(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.nd === Id ? $e(a) : a
        }
    }

    function af(a, b, c, d, e, f, g) {
        (a = a.l && a.l[c]) ? (d = id(a), d & 2 ? d = a : (f = Zb(a, $e), Hd(d, f), Object.freeze(f), d = f), ve(b, c, d, e)) : E(b, c, Ze(d, f, g), e)
    }

    function $e(a) {
        if (Ed(a.R)) return a;
        a = bf(a, !0);
        gd(a.R, 2);
        return a
    }

    function bf(a, b) {
        var c = a.R,
            d = Fd([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.va;
        if (e) {
            d.length = c.length;
            t(d, "fill").call(d, void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (id(c) & 128) && Pd(d);
        b = b || Ed(a.R) ? Hd : Gd;
        d = Ke(a.constructor, d);
        a.ue && (d.ue = a.ue.slice());
        f = !!(id(c) & 16);
        for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++) af(a, d, h - a.La, c[h], !1, f, b);
        if (e)
            for (var k in e) af(a, d, +k, e[k], !0, f, b);
        return d
    }

    function qe(a) {
        if (!Ed(a.R)) return a;
        var b = bf(a, !1);
        b.v = a;
        return b
    };

    function H(a, b, c, d) {
        null == a && (a = Je);
        Je = void 0;
        var e = this.constructor.messageId,
            f = !1;
        if (null == a) {
            a = e ? [e] : [];
            var g = 48;
            var h = !0;
            d && (g |= 128);
            jd(a, g)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (e && e !== a[0]) throw Error();
            var k = g = gd(a, 0);
            if (h = 0 !== (16 & k))(f = 0 !== (32 & k)) || (k |= 32);
            if (d) {
                if (!(k & 128) && 0 < a.length) {
                    var l = a[a.length - 1];
                    if (Jd(l) && "g" in l) {
                        k |= 128;
                        delete l.g;
                        var m = !0,
                            n;
                        for (n in l) {
                            m = !1;
                            break
                        }
                        m && a.pop()
                    } else throw Error();
                }
            } else if (128 & k) throw Error();
            g !== k && jd(a, k)
        }
        this.La = e ? 0 : -1;
        this.l = void 0;
        this.R =
            a;
        a: {
            g = this.R.length;e = g - 1;
            if (g && (g = this.R[e], Jd(g))) {
                this.va = g;
                this.m = e - this.La;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, e + 1 - this.La), this.va = void 0) : this.m = Number.MAX_VALUE
        }
        if (!d && this.va && "g" in this.va) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !f && !0;
            d = this.m;
            var p;
            for (h = 0; h < c.length; h++) f = c[h], f < d ? (f += this.La, (e = a[f]) ? cf(e, b) : a[f] = Md) : (p || (p = Wd(this)), (e = p[f]) ? cf(e, b) : p[f] = Md)
        }
    }
    H.prototype.toJSON = function() {
        var a = this.R;
        return Kd ? a : Ne(a, Oe, Pe)
    };

    function df(a) {
        Kd = !0;
        try {
            return JSON.stringify(a.toJSON(), ef)
        } finally {
            Kd = !1
        }
    }

    function cf(a, b) {
        if (Array.isArray(a)) {
            var c = id(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && jd(a, c | d)
        }
    }
    H.prototype.nd = Id;

    function ef(a, b) {
        return Le(b)
    };

    function ff(a) {
        return null !== a && void 0 !== a
    }
    var gf = void 0;

    function hf(a, b) {
        var c = gf;
        gf = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function jf(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Ke(a, Fd(b))
            }
            return b
        }
    };

    function kf(a, b) {
        this.j = a === lf && b || "";
        this.l = mf
    }
    kf.prototype.ua = !0;
    kf.prototype.ma = function() {
        return this.j
    };

    function nf(a) {
        return a instanceof kf && a.constructor === kf && a.l === mf ? a.j : "type_error:Const"
    }

    function of (a) {
        return new kf(lf, a)
    }
    var mf = {},
        lf = {};
    var pf = of ("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function qf() {
        return !1
    }

    function rf() {
        return !0
    }

    function sf(a) {
        var b = arguments,
            c = b.length;
        return function() {
            for (var d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function tf(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function uf(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function vf(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }

    function wf(a, b) {
        var c = 0;
        return function(d) {
            B.clearTimeout(c);
            var e = arguments;
            c = B.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function xf(a, b) {
        function c() {
            e = B.setTimeout(d, 63);
            var h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        var e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var yf = {
            passive: !0
        },
        zf = uf(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                B.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function Af(a) {
        return a ? a.passive && zf() ? a : a.capture || !1 : !1
    }

    function I(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Af(d)), !0) : !1
    }

    function Bf(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Af(d)), !0) : !1
    };

    function Cf(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function Df(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ef(a) {
        var b = Ff;
        a: {
            for (var c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Gf(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Hf(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var If = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Jf(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < If.length; f++) c = If[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Kf = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Lf;

    function Mf() {
        if (void 0 === Lf) {
            var a = null,
                b = B.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: jb,
                        createScript: jb,
                        createScriptURL: jb
                    })
                } catch (c) {
                    B.console && B.console.error(c.message)
                }
                Lf = a
            } else Lf = a
        }
        return Lf
    };
    var Nf = {};

    function Of(a, b) {
        this.j = b === Nf ? a : "";
        this.ua = !0
    }
    Of.prototype.toString = function() {
        return this.j.toString()
    };
    Of.prototype.ma = function() {
        return this.j.toString()
    };

    function Pf(a) {
        return a instanceof Of && a.constructor === Of ? a.j : "type_error:SafeScript"
    };

    function Qf(a, b) {
        this.j = b === Uf ? a : ""
    }
    Qf.prototype.toString = function() {
        return this.j + ""
    };
    Qf.prototype.ua = !0;
    Qf.prototype.ma = function() {
        return this.j.toString()
    };

    function Vf(a, b) {
        a = Wf.exec(Xf(a).toString());
        var c = a[3] || "";
        return Yf(a[1] + Zf("?", a[2] || "", b) + Zf("#", c))
    }

    function Xf(a) {
        return a instanceof Qf && a.constructor === Qf ? a.j : "type_error:TrustedResourceUrl"
    }

    function $f(a, b) {
        var c = nf(a);
        if (!ag.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(bg, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof kf ? nf(d) : encodeURIComponent(String(d))
        });
        return Yf(a)
    }
    var bg = /%{(\w+)}/g,
        ag = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Wf = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Uf = {};

    function Yf(a) {
        var b = Mf();
        a = b ? b.createScriptURL(a) : a;
        return new Qf(a, Uf)
    }

    function Zf(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function cg(a, b) {
        this.j = b === dg ? a : ""
    }
    cg.prototype.toString = function() {
        return this.j.toString()
    };
    cg.prototype.ua = !0;
    cg.prototype.ma = function() {
        return this.j.toString()
    };

    function eg(a) {
        return a instanceof cg && a.constructor === cg ? a.j : "type_error:SafeUrl"
    }
    var fg = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        gg = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function hg(a) {
        if (a instanceof cg) return a;
        a = "object" == typeof a && a.ua ? a.ma() : String(a);
        gg.test(a) ? a = new cg(a, dg) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(fg) ? new cg(a, dg) : null);
        return a
    }
    var ig;
    try {
        new URL("s://g"), ig = !0
    } catch (a) {
        ig = !1
    }
    var jg = ig,
        dg = {},
        kg = new cg("about:invalid#zClosurez", dg);
    var lg = {};

    function mg(a, b) {
        this.j = b === lg ? a : "";
        this.ua = !0
    }
    mg.prototype.ma = function() {
        return this.j
    };
    mg.prototype.toString = function() {
        return this.j.toString()
    };

    function ng(a) {
        return a instanceof mg && a.constructor === mg ? a.j : "type_error:SafeStyle"
    }

    function og(a) {
        var b = "",
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                var d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(pg).join(" ") : pg(d), b += c + ":" + d + ";")
            }
        return b ? new mg(b, lg) : qg
    }
    var qg = new mg("", lg);

    function pg(a) {
        if (a instanceof cg) return 'url("' + eg(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof kf) a = nf(a);
        else {
            a = String(a);
            var b = a.replace(rg, "$1").replace(rg, "$1").replace(sg, "url");
            if (tg.test(b)) {
                if (b = !ug.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && vg(a)
                }
                a = b ? wg(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new tb("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function vg(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var tg = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        sg = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        rg = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        ug = /\/\*/;

    function wg(a) {
        return a.replace(sg, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (hg(d) || kg).ma();
            return c + f + b + f + e
        })
    };
    var xg = {};

    function yg(a, b) {
        this.j = b === xg ? a : "";
        this.ua = !0
    }
    yg.prototype.toString = function() {
        return this.j.toString()
    };
    yg.prototype.ma = function() {
        return this.j
    };

    function zg(a) {
        return a instanceof yg && a.constructor === yg ? a.j : "type_error:SafeStyleSheet"
    };
    var Ag = {};

    function Bg(a, b) {
        this.j = b === Ag ? a : "";
        this.ua = !0
    }
    Bg.prototype.ma = function() {
        return this.j.toString()
    };
    Bg.prototype.toString = function() {
        return this.j.toString()
    };

    function Cg(a) {
        return a instanceof Bg && a.constructor === Bg ? a.j : "type_error:SafeHtml"
    }

    function Dg(a) {
        return a instanceof Bg ? a : Eg(vb("object" == typeof a && a.ua ? a.ma() : String(a)))
    }

    function Fg(a, b, c) {
        var d = String(a);
        if (!Gg.test(d)) throw Error("");
        if (d.toUpperCase() in Hg) throw Error("");
        return Ig(String(a), b, c)
    }

    function Jg(a) {
        function b(e) {
            Array.isArray(e) ? e.forEach(b) : (e = Dg(e), d.push(Cg(e).toString()))
        }
        var c = Dg(Kg),
            d = [];
        a.forEach(b);
        return Eg(d.join(Cg(c).toString()))
    }

    function Lg(a) {
        return Jg(Array.prototype.slice.call(arguments))
    }

    function Eg(a) {
        var b = Mf();
        a = b ? b.createHTML(a) : a;
        return new Bg(a, Ag)
    }

    function Ig(a, b, c) {
        var d = "";
        if (b)
            for (var e in b)
                if (Object.prototype.hasOwnProperty.call(b, e)) {
                    if (!Gg.test(e)) throw Error("");
                    var f = b[e];
                    if (null != f) {
                        var g = e;
                        if (f instanceof kf) f = nf(f);
                        else if ("style" == g.toLowerCase()) {
                            if (!Sa(f)) throw Error("");
                            f instanceof mg || (f = og(f));
                            f = ng(f)
                        } else {
                            if (/^on/i.test(g)) throw Error("");
                            if (g.toLowerCase() in Mg)
                                if (f instanceof Qf) f = Xf(f).toString();
                                else if (f instanceof cg) f = eg(f);
                            else if ("string" === typeof f) f = (hg(f) || kg).ma();
                            else throw Error("");
                        }
                        f.ua && (f = f.ma());
                        g = g +
                            '="' + vb(String(f)) + '"';
                        d += " " + g
                    }
                }
        b = "<" + a + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Kf[a.toLowerCase()] ? b += ">" : (c = Lg(c), b += ">" + Cg(c).toString() + "</" + a + ">");
        return Eg(b)
    }
    var Gg = /^[a-zA-Z0-9-]+$/,
        Mg = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Hg = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Ng = Eg("<!DOCTYPE html>"),
        Kg = new Bg(B.trustedTypes && B.trustedTypes.emptyHTML || "", Ag),
        Og = Eg("<br>");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var Pg;
    try {
        new URL("s://g"), Pg = !0
    } catch (a) {
        Pg = !1
    }
    var Qg = Pg;

    function Rg(a) {
        a: if (Qg) {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        } else b: {
            b = document.createElement("a");
            try {
                b.href = a
            } catch (c) {
                b = void 0;
                break b
            }
            b = b.protocol;b = ":" === b || "" === b ? "https:" : b
        }
        if ("javascript:" !== b) return a
    };

    function Sg(a) {
        var b = void 0 === b ? Tg : b;
        a: {
            b = void 0 === b ? Tg : b;
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof Ug && d.ag("#")) {
                    b = new cg("#", dg);
                    break a
                }
            }
            b = void 0
        }
        b = b || kg;
        b = b instanceof cg ? eg(b) : Rg(b);
        void 0 !== b && (a.href = b)
    };
    var Vg = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Wg(a, b, c) {
        if (b instanceof Qf) a.href = Xf(b).toString();
        else {
            if (-1 === Vg.indexOf(c)) throw Error('TrustedResourceUrl href attribute required with rel="' + c + '"');
            b = b instanceof cg ? eg(b) : Rg(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function Xg(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function Yg(a, b) {
        a.src = Xf(b);
        Xg(a)
    };

    function Ug(a) {
        this.ag = a
    }

    function Zg(a) {
        return new Ug(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Tg = [Zg("data"), Zg("http"), Zg("https"), Zg("mailto"), Zg("ftp"), new Ug(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function $g(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new r.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Yg(g, a);
            c && "complete" !== b.document.readyState ? I(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };

    function ah(a) {
        var b, c, d, e, f, g;
        return La(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.l + "&st=") + a.sb, c = void 0, h.B = 2, Ca(h, bh(b), 4);
                case 4:
                    c = h.v;
                    Da(h);
                    break;
                case 2:
                    Ea(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Lb || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.v,
                        yf: c.bg_hash_basename,
                        xf: c.bg_binary,
                        bg: a.j + "_" + a.l,
                        Lb: d,
                        sb: a.sb,
                        rc: e,
                        Ec: f,
                        oc: g
                    }) : h.return(void 0)
            }
        })
    }

    function bh(a) {
        return new r.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    }

    function ch(a) {
        var b;
        La(function(c) {
            if (1 == c.j) return Ca(c, ah(a), 2);
            if (b = c.v) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.yf, g._bgp_ = b.xf, g._li_ = b.bg, g._jk_ = b.Lb, g._st_ = b.sb, g._rc_ = b.rc, g._dl_ = b.Ec, g._g2_ = b.oc, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = $f(pf, {
                    basename: d
                });
                $g(d)
            }
            return c.return(b)
        })
    };

    function dh(a) {
        H.call(this, a)
    }
    z(dh, H);

    function eh(a, b) {
        return De(a, 1, b)
    };

    function fh(a) {
        H.call(this, a)
    }
    z(fh, H);

    function gh(a, b) {
        return te(a, 5, b)
    }

    function hh(a, b) {
        return De(a, 3, b)
    };

    function ih(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }

    function jh(a) {
        this.j = a.l;
        this.l = a.m;
        this.v = a.v;
        this.Lb = a.Lb;
        this.win = a.U();
        this.sb = a.sb;
        this.rc = a.rc;
        this.Ec = a.Ec;
        this.oc = a.oc;
        this.m = a.j
    }

    function kh(a, b, c) {
        this.l = a;
        this.m = b;
        this.v = c;
        this.win = window;
        this.sb = "env";
        this.rc = "n";
        this.Ec = "0";
        this.oc = "1";
        this.j = !0
    }
    kh.prototype.U = function() {
        return this.win
    };
    kh.prototype.build = function() {
        return new jh(this)
    };

    function lh(a) {
        H.call(this, a, -1, mh)
    }
    z(lh, H);
    var mh = [2, 3];

    function nh(a) {
        H.call(this, a)
    }
    z(nh, H);

    function oh(a) {
        var b = new nh;
        return E(b, 1, a)
    }

    function ph(a, b) {
        return E(a, 2, b)
    }

    function qh(a, b) {
        return E(a, 3, b)
    }

    function rh(a, b) {
        return E(a, 4, b)
    }
    nh.prototype.getVersion = function() {
        return D(this, 5)
    };

    function sh(a) {
        H.call(this, a, -1, th)
    }
    z(sh, H);
    var th = [5];

    function uh(a) {
        H.call(this, a, -1, vh)
    }
    z(uh, H);
    var vh = [3];

    function wh(a) {
        H.call(this, a, -1, xh)
    }
    z(wh, H);
    var xh = [2];

    function yh(a) {
        H.call(this, a, -1, zh)
    }
    z(yh, H);

    function Ah(a) {
        return se(a, wh, 2)
    }

    function Eh(a) {
        return se(a, sh, 15)
    }
    var Fh = jf(yh),
        zh = [2, 15];
    var Gh = window;
    var Ih = {
        Yg: "google_adtest",
        eh: "google_ad_client",
        fh: "google_ad_format",
        hh: "google_ad_height",
        xh: "google_ad_width",
        lh: "google_ad_layout",
        mh: "google_ad_layout_key",
        oh: "google_ad_output",
        qh: "google_ad_region",
        th: "google_ad_slot",
        uh: "google_ad_type",
        wh: "google_ad_url",
        yh: "google_allow_expandable_ads",
        Qh: "google_analytics_domain_name",
        Rh: "google_analytics_uacct",
        fi: "google_container_id",
        si: "google_gl",
        Mi: "google_enable_ose",
        Wi: "google_full_width_responsive",
        Uj: "google_rl_filtering",
        Tj: "google_rl_mode",
        Vj: "google_rt",
        Sj: "google_rl_dest_url",
        Aj: "google_max_radlink_len",
        Fj: "google_num_radlinks",
        Gj: "google_num_radlinks_per_unit",
        bh: "google_ad_channel",
        zj: "google_max_num_ads",
        Bj: "google_max_responsive_height",
        ai: "google_color_border",
        Li: "google_enable_content_recommendations",
        ni: "google_content_recommendation_ui_type",
        li: "google_source_type",
        ki: "google_content_recommendation_rows_num",
        ji: "google_content_recommendation_columns_num",
        ii: "google_content_recommendation_ad_positions",
        oi: "google_content_recommendation_use_square_imgs",
        ci: "google_color_link",
        bi: "google_color_line",
        ei: "google_color_url",
        Zg: "google_ad_block",
        sh: "google_ad_section",
        ah: "google_ad_callback",
        Xh: "google_captcha_token",
        di: "google_color_text",
        Kh: "google_alternate_ad_url",
        kh: "google_ad_host_tier_id",
        Yh: "google_city",
        ih: "google_ad_host",
        jh: "google_ad_host_channel",
        Lh: "google_alternate_color",
        Zh: "google_color_bg",
        Ni: "google_encoding",
        Ui: "google_font_face",
        vi: "google_cust_ch",
        yi: "google_cust_job",
        xi: "google_cust_interests",
        wi: "google_cust_id",
        zi: "google_cust_u_url",
        Yi: "google_hints",
        nj: "google_image_size",
        Cj: "google_mtl",
        Ak: "google_cpm",
        hi: "google_contents",
        Ej: "google_native_settings_key",
        ri: "google_country",
        sk: "google_targeting",
        Vi: "google_font_size",
        Ci: "google_disable_video_autoplay",
        Mk: "google_video_product_type",
        Lk: "google_video_doc_id",
        Kk: "google_cust_gender",
        mk: "google_cust_lh",
        lk: "google_cust_l",
        zk: "google_tfs",
        Dj: "google_native_ad_template",
        sj: "google_kw",
        pk: "google_tag_for_child_directed_treatment",
        qk: "google_tag_for_under_age_of_consent",
        Xj: "google_region",
        ui: "google_cust_criteria",
        rh: "google_safe",
        ti: "google_ctr_threshold",
        Yj: "google_resizing_allowed",
        bk: "google_resizing_width",
        Zj: "google_resizing_height",
        Jk: "google_cust_age",
        LANGUAGE: "google_language",
        tj: "google_kw_type",
        Mj: "google_pucrd",
        Kj: "google_page_url",
        rk: "google_tag_partner",
        fk: "google_restrict_data_processing",
        Ug: "google_adbreak_test",
        gh: "google_ad_frequency_hint",
        Wg: "google_admob_interstitial_slot",
        Xg: "google_admob_rewarded_slot",
        Vg: "google_admob_ads_only",
        yj: "google_max_ad_content_rating",
        Oj: "google_ad_public_floor",
        Nj: "google_ad_private_floor",
        Ik: "google_traffic_source",
        jk: "google_shadow_mode"
    };
    var Jh = uf(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Cg(Kg);
        return !b.parentElement
    });

    function Kh(a, b) {
        if (Jh())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Cg(b)
    }
    var Lh = /^[\w+/_-]+[=]{0,2}$/;

    function Mh(a, b) {
        b = (b || B).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Lh.test(a) ? a : "" : ""
    };

    function Nh(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Oh(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Ph(a) {
        return Oh.apply(null, arguments) / arguments.length
    };

    function Qh(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Qh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Qh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Qh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Rh(a, b) {
        this.width = a;
        this.height = b
    }

    function Sh(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    q = Rh.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Th(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : B.document.createElement("div");
        return a.replace(Uh, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Eg(e + " "), Kh(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Uh = /&([^;\s<&]+);?/g;

    function Vh(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Wh(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Xh(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Yh(a) {
        return a ? new Zh($h(a)) : mb || (mb = new Zh)
    }

    function ai(a, b) {
        Cf(b, function(c, d) {
            c && "object" == typeof c && c.ua && (c = c.ma());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : bi.hasOwnProperty(d) ? a.setAttribute(bi[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var bi = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function ci(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Rh(a.clientWidth, a.clientHeight)
    }

    function di(a) {
        var b = a.scrollingElement ? a.scrollingElement : vc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return sc && a.pageYOffset != b.scrollTop ? new Qh(b.scrollLeft, b.scrollTop) : new Qh(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function ei(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function fi(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Ra(f) || Sa(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Sa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Xb(g ? ec(f) : f, e)
            }
        }
    }

    function gi(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function hi(a, b) {
        var c = gi(a, "DIV");
        sc ? (b = Lg(Og, b), Kh(c, b), c.removeChild(c.firstChild)) : Kh(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function ii(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function $h(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var ji = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ki = {
            IMG: " ",
            BR: "\n"
        };

    function li(a) {
        var b = [];
        mi(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function mi(a, b, c) {
        if (!(a.nodeName in ji))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ki) b.push(ki[a.nodeName]);
        else
            for (a = a.firstChild; a;) mi(a, b, c), a = a.nextSibling
    }

    function ni(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return oi(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && bc(e.className.split(/\s+/), c))
        })
    }

    function oi(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Zh(a) {
        this.j = a || B.document || document
    }
    q = Zh.prototype;
    q.Of = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    q.Tg = Zh.prototype.Of;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.ja = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = gi(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : ai(g, f));
        2 < e.length && fi(d, g, e, 2);
        return g
    };
    q.createElement = function(a) {
        return gi(this.j, a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function pi(a, b) {
        return hi(a.j, b)
    }
    q.U = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    q.appendChild = function(a, b) {
        a.appendChild(b)
    };
    q.append = function(a, b) {
        fi($h(a), a, arguments, 1)
    };
    q.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    q.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    q.Lf = ii;

    function qi() {
        return !ri() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
    }

    function ri() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var si = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ti(a) {
        try {
            return !!a && null != a.location.href && nc(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function ui(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? B : d;
        c = (void 0 === c ? 0 : c) ? vi(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !ti(c) || !a(c));) c = vi(c)
    }

    function vi(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    }

    function wi(a) {
        return ti(a.top) ? a.top : null
    }

    function xi(a, b) {
        var c = yi("SCRIPT", a);
        Yg(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function zi(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ai() {
        if (!r.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            r.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Bi(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Ci(a) {
        var b = [];
        Bi(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Di(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Fi = uf(function() {
        return ac(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ei) || 1E-4 > Math.random()
    });

    function Ei(a) {
        return Ib(Mb(), a)
    }
    var Gi = /^([0-9.]+)px$/,
        Hi = /^(-?[0-9.]{1,30})$/;

    function Ii(a) {
        if (!Hi.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Ji(a) {
        return /^true$/.test(a)
    }

    function Ki(a) {
        return (a = Gi.exec(a)) ? +a[1] : null
    }

    function Li() {
        var a = B.document.URL;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    var Mi = {
            zh: "allow-forms",
            Ah: "allow-modals",
            Bh: "allow-orientation-lock",
            Ch: "allow-pointer-lock",
            Dh: "allow-popups",
            Eh: "allow-popups-to-escape-sandbox",
            Fh: "allow-presentation",
            Gh: "allow-same-origin",
            Hh: "allow-scripts",
            Ih: "allow-top-navigation",
            Jh: "allow-top-navigation-by-user-activation"
        },
        Ni = uf(function() {
            return Ci(Mi)
        });

    function Oi() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
            b = Ni();
        return a.length ? Yb(b, function(c) {
            return !bc(a, c)
        }) : b
    }

    function Pi() {
        var a = yi("IFRAME"),
            b = {};
        Xb(Ni(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function Qi(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }

    function Ri(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (Qi(a, b)) return a;
            if (!(a = vi(a))) break
        }
        return null
    }
    var Si = uf(function() {
        return qi() ? 2 : ri() ? 1 : 0
    });

    function K(a, b) {
        Bi(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    var Ti = {},
        Ui = (Ti["http://googleads.g.doubleclick.net"] = !0, Ti["http://pagead2.googlesyndication.com"] = !0, Ti["https://googleads.g.doubleclick.net"] = !0, Ti["https://pagead2.googlesyndication.com"] = !0, Ti),
        Vi = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Wi = /.*domain\.test$/,
        Xi = /\.prod\.google\.com(:\d+)?$/;

    function Yi(a) {
        return Ui[a] || Vi.test(a) || Wi.test(a) || Xi.test(a)
    }
    var Zi = [];

    function $i() {
        var a = Zi;
        Zi = [];
        a = y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function aj(a, b) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (c) {
            b && b.na(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.na(784, Error("Invalid correlator, " + a));
        return a || -1
    }

    function bj(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = y(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = y(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || ii(h, b))) {
                        f = y(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        ui(function(f) {
            if (!f.parent || !ti(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h <
                g.length; h++) try {
                a: {
                    var k = g[h];
                    try {
                        var l = k.contentWindow || (k.contentDocument ? ei(k.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l = null
                }
                if (l == f) {
                    bj(f.parent, g[h], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }

    function cj(a, b) {
        bj(ei($h(a)), a, b)
    }

    function dj(a, b) {
        "complete" === a.document.readyState ? (Zi.push(b), 1 == Zi.length && (r.Promise ? r.Promise.resolve().then($i) : window.setImmediate ? setImmediate($i) : setTimeout($i, 0))) : a.addEventListener("load", b)
    }

    function ej(a, b) {
        return new r.Promise(function(c) {
            setTimeout(function() {
                return void c(b)
            }, a)
        })
    }

    function yi(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    }

    function fj(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, ti(a) && (b = a);
        return b
    };

    function gj(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    q = gj.prototype;
    q.getWidth = function() {
        return this.right - this.left
    };
    q.getHeight = function() {
        return this.bottom - this.top
    };

    function hj(a) {
        return new gj(a.top, a.right, a.bottom, a.left)
    }
    q.contains = function(a) {
        return this && a ? a instanceof gj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function ij(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function jj(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function kj(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new jj(c, e, d - c, a - e)
        }
        return null
    }

    function lj(a, b) {
        var c = kj(a, b);
        if (!c || !c.height || !c.width) return [new jj(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new jj(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new jj(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new jj(a.left, d, b.left - a.left, e));
        h < f && c.push(new jj(h, d, f - h, e));
        return c
    }
    jj.prototype.contains = function(a) {
        return a instanceof Qh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    jj.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    jj.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    jj.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var mj = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function nj(a) {
        a = void 0 === a ? B : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }

    function oj() {
        var a;
        return (a = void 0 === a ? nj() : a) && a.initialIntersection
    }

    function pj() {
        var a = oj();
        return a && Sa(a.rootBounds) ? new Rh(a.rootBounds.width, a.rootBounds.height) : null
    }

    function qj(a) {
        return (a = void 0 === a ? nj() : a) ? ti(a.master) ? a.master : null : null
    }

    function rj(a, b) {
        function c(g) {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || xi(a.document, g ? $f( of ("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                    ampVersion: g
                }) : Yf(nf( of ("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g &&
                e()
        }

        function d() {}

        function e() {}
        var f = a.ampInaboxIframes = a.ampInaboxIframes || [];
        b && (f.push(b), d = function() {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            cc(f, b);
            e()
        });
        if (a.ampInaboxInitialized) return d;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        f.google_amp_listener_added || (f.google_amp_listener_added = !0, I(a, "message", c), e = function() {
            Bf(a, "message", c)
        });
        return d
    };

    function L(a) {
        var b = Ma.apply(1, arguments);
        if (0 === b.length) return Yf(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Yf(c.join(""))
    }

    function sj(a, b) {
        var c = Xf(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Yf(c)
    };

    function tj(a, b, c) {
        if ("string" === typeof b)(b = uj(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = uj(c, d);
                f && (c.style[f] = e)
            }
    }
    var vj = {};

    function uj(a, b) {
        var c = vj[b];
        if (!c) {
            var d = Wh(b);
            c = d;
            void 0 === a.style[d] && (d = (vc ? "Webkit" : uc ? "Moz" : sc ? "ms" : null) + Xh(d), void 0 !== a.style[d] && (c = d));
            vj[b] = c
        }
        return c
    }

    function wj(a, b) {
        var c = $h(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function xj(a, b) {
        return wj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function yj(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function zj(a) {
        var b = $h(a),
            c = new Qh(0, 0);
        var d = b ? $h(b) : document;
        d = !sc || 9 <= Number(Ec) || "CSS1Compat" == Yh(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = yj(a);
        b = di(Yh(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Aj(a) {
        var b = Bj;
        if ("none" != xj(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Bj(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = vc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = yj(a), new Rh(a.right - a.left, a.bottom - a.top)) : new Rh(b, c)
    }

    function Cj(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Dj(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Cj(a, b) : 0
    }
    var Ej = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Fj(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Ej ? Ej[b] : Cj(a, b)
    };

    function Gj(a) {
        return "number" === typeof a && 0 < a
    }

    function Hj(a, b) {
        a = Ij(a);
        if (!a) return b;
        var c = b.slice(-1);
        return b + ("?" === c || "#" === c ? "" : "&") + a
    }

    function Ij(a) {
        return t(Object, "entries").call(Object, Jj(a)).map(function(b) {
            var c = y(b);
            b = c.next().value;
            c = c.next().value;
            return b + "=" + encodeURIComponent(String(c))
        }).join("&")
    }

    function Jj(a) {
        var b = {};
        Bi(a, function(c, d) {
            if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
        });
        return b
    }

    function Kj() {
        var a = void 0 === a ? Gh : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    }

    function Lj(a) {
        var b = void 0 === b ? 1 : b;
        a = qj(nj(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b
    }

    function Mj(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function Nj(a) {
        a.u_tz = -(new Date).getTimezoneOffset();
        a.u_his = Kj();
        var b;
        a.u_h = null == (b = Gh.screen) ? void 0 : b.height;
        var c;
        a.u_w = null == (c = Gh.screen) ? void 0 : c.width;
        var d;
        a.u_ah = null == (d = Gh.screen) ? void 0 : d.availHeight;
        var e;
        a.u_aw = null == (e = Gh.screen) ? void 0 : e.availWidth;
        var f;
        a.u_cd = null == (f = Gh.screen) ? void 0 : f.colorDepth
    }

    function Oj(a) {
        var b = 9 !== a.nodeType && a.id;
        a: {
            if (a && a.nodeName && a.parentElement) {
                var c = a.nodeName.toString().toLowerCase();
                for (var d = a.parentElement.childNodes, e = 0, f = 0; f < d.length; ++f) {
                    var g = d[f];
                    if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                        if (a === g) {
                            c = "." + e;
                            break a
                        }++e
                    }
                }
            }
            c = ""
        }
        return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
    }

    function Pj(a) {
        return function() {
            if (a) {
                var b = a;
                a = null;
                b.apply(null, arguments)
            }
        }
    }

    function Qj() {
        var a = void 0 === a ? Gh : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Rj(a) {
        return (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1
    }

    function Sj(a) {
        var b = Number(a.google_ad_width),
            c = Number(a.google_ad_height);
        if (!(0 < b && 0 < c)) {
            a: {
                try {
                    var d = String(a.google_ad_format);
                    if (d && d.match) {
                        var e = d.match(/(\d+)x(\d+)/i);
                        if (e) {
                            var f = parseInt(e[1], 10),
                                g = parseInt(e[2], 10);
                            if (0 < f && 0 < g) {
                                var h = {
                                    width: f,
                                    height: g
                                };
                                break a
                            }
                        }
                    }
                } catch (k) {}
                h = null
            }
            a = h;
            if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
        }
        return {
            width: b,
            height: c
        }
    };

    function Tj(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Uj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Vj(a, b) {
        this.j = a;
        this.l = b
    }

    function Wj(a, b, c) {
        this.url = a;
        this.win = b;
        this.we = !!c;
        this.depth = null
    };

    function Xj(a, b, c, d, e) {
        Yj(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    }

    function Yj(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = yi("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && cc(a.google_image_requests, f);
                Bf(f, "load", g);
                Bf(f, "error", g)
            };
            I(f, "load", g);
            I(f, "error", g)
        }
        e && (f.attributionsrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }

    function Zj(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Bi(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        ak(d, c)
    }

    function ak(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        var d = void 0 === d ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }, d && (b.mode = "cors", b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }), c.fetch(a, b)) : Xj(c, a, void 0, b, d)
    };

    function bk() {
        this.m = "&";
        this.l = {};
        this.v = 0;
        this.j = []
    }

    function ck(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function dk(a, b, c, d, e) {
        var f = [];
        Bi(a, function(g, h) {
            (g = ek(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ek(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(ek(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(dk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function fk(a, b, c) {
        a.j.push(b);
        a.l[b] = c
    }

    function gk(a, b, c, d) {
        b = b + "//" + c + d;
        var e = hk(a) - d.length;
        if (0 > e) return "";
        a.j.sort(function(m, n) {
            return m - n
        });
        d = null;
        c = "";
        for (var f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                var l = dk(h[k], a.m, ",$");
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.m;
                        break
                    }
                    d = null == d ? g : d
                }
            }
        a = "";
        null != d && (a = c + "trn=" + d);
        return b + a
    }

    function hk(a) {
        var b = 1,
            c;
        for (c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    };

    function ik() {
        this.j = Math.random()
    }

    function jk(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }

    function kk(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.j : Math.random()) < (e || .01)) try {
            if (c instanceof bk) var f = c;
            else f = new bk, Bi(c, function(h, k) {
                var l = f,
                    m = l.v++;
                fk(l, m, ck(k, h))
            });
            var g = gk(f, "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=" + b + "&");
            g && Xj(B, g)
        } catch (h) {}
    };
    var mk = null;

    function nk() {
        if (null === mk) {
            mk = "";
            try {
                var a = "";
                try {
                    a = B.top.location.hash
                } catch (c) {
                    a = B.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    mk = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return mk
    };

    function ok() {
        var a = void 0 === a ? B : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : gb()
    }

    function pk() {
        var a = void 0 === a ? B : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function qk(a, b) {
        var c = pk() || ok();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var rk = B.performance,
        sk = !!(rk && rk.mark && rk.measure && rk.clearMarks),
        tk = uf(function() {
            var a;
            if (a = sk) a = nk(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function uk(a) {
        this.l = [];
        this.m = a || B;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.j = tk() || (null != b ? b : 1 > Math.random())
    }

    function vk(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (tk() && Xb(a.l, wk), a.l.length = 0)
    }

    function wk(a) {
        a && rk && tk() && (rk.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), rk.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    uk.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new qk(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        rk && tk() && rk.mark(b);
        return a
    };
    uk.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (pk() || ok()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            rk && tk() && rk.mark(b);
            !this.j || 2048 < this.l.length || this.l.push(a)
        }
    };

    function xk(a, b) {
        if (!a.j) return b();
        var c = a.start("491", 3);
        try {
            var d = b()
        } catch (e) {
            throw wk(c), e;
        }
        a.end(c);
        return d
    };

    function yk(a, b) {
        this.v = a;
        this.j = null;
        this.A = this.na;
        this.l = void 0 === b ? null : b;
        this.m = !1
    }
    q = yk.prototype;
    q.ba = function() {
        return this.v
    };
    q.Ed = function(a) {
        this.j = a
    };
    q.Fd = function(a) {
        this.m = a
    };
    q.Ob = function(a, b, c) {
        try {
            if (this.l && this.l.j) {
                var d = this.l.start(a.toString(), 3);
                var e = b();
                this.l.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                wk(d), b = this.A(a, new Tj(h, {
                    message: zk(h)
                }), void 0, c)
            } catch (k) {
                this.na(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    q.rb = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ma.apply(0, arguments);
            return e.Ob(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    q.na = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new bk;
            f.j.push(1);
            f.l[1] = ck("context", a);
            b.error && b.meta && b.id || (b = new Tj(b, {
                message: zk(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.j.push(2);
                f.l[2] = ck("msg", g)
            }
            var h = b.meta || {};
            if (this.j) try {
                this.j(h)
            } catch (fa) {}
            if (d) try {
                d(h)
            } catch (fa) {}
            fk(f, 3, [h]);
            d = B;
            b = [];
            g = null;
            do {
                var k = d;
                if (ti(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Wj(l || "", k));
                try {
                    d = k.parent
                } catch (fa) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = B;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var n = b[m];
                    n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.we = !0)
                }
            var p = new Wj(B.location.href, B, !1);
            k = null;
            var v = b.length - 1;
            for (n = v; 0 <= n; --n) {
                var u = b[n];
                !k && Uj.test(u.url) && (k = u);
                if (u.url && !u.we) {
                    p = u;
                    break
                }
            }
            u = null;
            var A = b.length && b[v].url;
            0 != p.depth && A && (u = b[v]);
            var J = new Vj(p, u);
            if (J.l) {
                var Y = J.l.url || "";
                f.j.push(4);
                f.l[4] = ck("top", Y)
            }
            var aa = {
                url: J.j.url || ""
            };
            if (J.j.url) {
                var P = J.j.url.match(si),
                    Q = P[1],
                    U = P[3],
                    ca = P[4];
                p = "";
                Q && (p += Q + ":");
                U && (p += "//", p += U, ca && (p += ":" + ca));
                var Z = p
            } else Z = "";
            fk(f, 5, [aa, {
                url: Z
            }]);
            kk(this.v, e, f, this.m, c)
        } catch (fa) {
            try {
                kk(this.v, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: zk(fa),
                    url: J && J.j.url
                }, this.m, c)
            } catch (M) {}
        }
        return !0
    };
    q.Aa = function(a, b, c) {
        var d = this;
        b.catch(function(e) {
            e = e ? e : "unknown rejection";
            d.na(a, e instanceof Error ? e : Error(e), void 0, c || d.j || void 0)
        })
    };

    function zk(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Ak(a.stack, b));
        return b
    }

    function Ak(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (d) {
            return b
        }
    };

    function Bk(a) {
        return "string" === typeof a
    }

    function Ck(a) {
        return void 0 === a
    }

    function Dk() {
        var a = Ek;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };

    function Fk(a) {
        H.call(this, a)
    }
    z(Fk, H);

    function Gk(a) {
        H.call(this, a)
    }
    z(Gk, H);

    function Hk(a) {
        var b = new Gk;
        return E(b, 1, a)
    };

    function Ik(a) {
        H.call(this, a)
    }
    z(Ik, H);

    function Jk(a) {
        H.call(this, a)
    }
    z(Jk, H);

    function Kk(a, b) {
        return Be(a, 1, b)
    }

    function Lk(a, b) {
        return Be(a, 2, b)
    }

    function Mk(a, b) {
        return Be(a, 3, b)
    }

    function Nk(a, b) {
        return Be(a, 4, b)
    }

    function Ok(a, b) {
        return Be(a, 5, b)
    }

    function Pk(a, b) {
        return ne(a, 8, Qd(b), 0)
    }

    function Qk(a, b) {
        return ne(a, 9, Qd(b), 0)
    };

    function Rk(a) {
        H.call(this, a)
    }
    z(Rk, H);

    function Sk(a) {
        H.call(this, a, -1, Tk)
    }
    z(Sk, H);

    function Uk(a, b) {
        return me(a, 1, b, Ud)
    }

    function Vk(a, b) {
        return me(a, 12, b, Td)
    }

    function Wk() {
        var a = new Sk;
        Od(a);
        ge(a, 2, 2, !1, !1).push("irr");
        return a
    }

    function Xk(a, b) {
        return He(a, 3, b)
    }

    function Yk(a, b) {
        return He(a, 4, b)
    }

    function Zk(a, b) {
        return He(a, 5, b)
    }

    function $k(a, b) {
        return He(a, 7, b)
    }

    function al(a, b) {
        return He(a, 8, b)
    }

    function bl(a, b) {
        return Be(a, 9, b)
    }

    function cl(a, b) {
        return ve(a, 10, b)
    }

    function dl(a, b) {
        return me(a, 11, b, Rd)
    }
    var Tk = [1, 12, 2, 10, 11];

    function el(a) {
        H.call(this, a, -1, fl)
    }
    z(el, H);

    function gl(a) {
        var b = hl();
        te(a, 1, b)
    }

    function il(a, b) {
        return Be(a, 2, b)
    }

    function jl(a, b) {
        return ve(a, 3, b)
    }

    function kl(a, b) {
        return ve(a, 4, b)
    }

    function ll(a, b) {
        return we(a, 4, Gk, b)
    }

    function ml(a, b) {
        return ve(a, 5, b)
    }

    function nl(a, b) {
        return me(a, 6, b, Ud)
    }

    function ol(a, b) {
        return Be(a, 7, b)
    }
    el.prototype.D = function(a) {
        return Be(this, 8, a)
    };

    function pl(a, b) {
        te(a, 9, b)
    }

    function ql(a, b) {
        return He(a, 10, b)
    }

    function rl(a, b) {
        return He(a, 11, b)
    }

    function sl(a, b) {
        return He(a, 12, b)
    }
    var fl = [3, 4, 5, 6];

    function tl(a) {
        H.call(this, a, -1, ul)
    }
    z(tl, H);
    var ul = [2];

    function vl(a) {
        H.call(this, a)
    }
    z(vl, H);

    function wl(a) {
        H.call(this, a)
    }
    z(wl, H);

    function xl(a) {
        H.call(this, a)
    }
    z(xl, H);
    xl.prototype.getContentUrl = function() {
        return G(this, 1)
    };

    function yl(a) {
        H.call(this, a, -1, zl)
    }
    z(yl, H);
    var zl = [1];

    function Al(a) {
        H.call(this, a)
    }
    z(Al, H);

    function Bl(a) {
        H.call(this, a)
    }
    z(Bl, H);

    function Cl(a) {
        H.call(this, a)
    }
    z(Cl, H);
    var Dl = [1, 2, 3, 5, 6, 7, 8];

    function El(a) {
        H.call(this, a, -1, Fl)
    }
    z(El, H);
    var Fl = [1];

    function Gl(a) {
        H.call(this, a, -1, Hl)
    }
    z(Gl, H);
    var Hl = [2];

    function Il(a) {
        H.call(this, a)
    }
    z(Il, H);

    function Jl(a) {
        H.call(this, a)
    }
    z(Jl, H);

    function Kl(a) {
        H.call(this, a, -1, Ll)
    }
    z(Kl, H);

    function Ml(a) {
        var b = new Kl;
        return Ie(b, 1, a)
    }
    var Ll = [9];

    function Nl(a) {
        H.call(this, a, -1, Ol)
    }
    z(Nl, H);
    var Ol = [2];

    function Pl(a) {
        H.call(this, a)
    }
    z(Pl, H);

    function Ql(a, b) {
        return E(a, 1, b)
    }

    function Rl(a, b) {
        return E(a, 2, b)
    };

    function Sl(a) {
        H.call(this, a)
    }
    z(Sl, H);
    var Tl = [4, 5];

    function Ul(a) {
        H.call(this, a)
    }
    z(Ul, H);

    function Vl(a) {
        H.call(this, a)
    }
    z(Vl, H);

    function Wl(a) {
        H.call(this, a)
    }
    z(Wl, H);

    function Xl(a) {
        H.call(this, a)
    }
    z(Xl, H);

    function Yl(a) {
        H.call(this, a)
    }
    z(Yl, H);

    function Zl(a) {
        H.call(this, a)
    }
    z(Zl, H);

    function $l(a) {
        H.call(this, a)
    }
    z($l, H);
    var am = [2, 3];

    function bm(a) {
        H.call(this, a)
    }
    z(bm, H);
    var cm = [3, 4, 5, 6, 7, 8, 9];

    function dm(a) {
        H.call(this, a)
    }
    z(dm, H);
    dm.prototype.Sa = function(a) {
        return De(this, 2, a)
    };

    function em(a, b) {
        return Be(a, 3, b)
    }
    var fm = [4, 5, 6, 8, 9, 10];

    function gm(a) {
        a.Fg.apply(a, ma(Ma.apply(1, arguments).map(function(b) {
            return {
                Ng: 7,
                message: b
            }
        })))
    };

    function hm(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.Ng] = b.message.toJSON(), c)]
        })])
    };

    function im(a, b) {
        if (r.globalThis.fetch) r.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function jm(a) {
        a && "function" == typeof a.xa && a.xa()
    };

    function N() {
        this.A = this.A;
        this.C = this.C
    }
    N.prototype.A = !1;
    N.prototype.xa = function() {
        this.A || (this.A = !0, this.M())
    };

    function km(a, b) {
        a.A ? b() : (a.C || (a.C = []), a.C.push(b))
    }
    N.prototype.M = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };

    function lm(a, b, c, d, e) {
        this.B = a;
        this.A = b;
        this.C = c;
        this.m = d;
        this.v = e;
        this.j = [];
        this.l = null
    }

    function mm(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = hm(a.j);
            a.A(a.B + "?e=1", b);
            a.j = []
        }
    }
    lm.prototype.Fg = function() {
        var a = Ma.apply(0, arguments),
            b = this;
        this.v && 65536 <= hm(this.j.concat(a)).length && mm(this);
        this.j.push.apply(this.j, ma(a));
        this.j.length >= this.m && mm(this);
        this.j.length && null === this.l && (this.l = setTimeout(function() {
            mm(b)
        }, this.C))
    };

    function nm(a, b, c) {
        lm.call(this, "https://pagead2.googlesyndication.com/pagead/ping", im, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!r.globalThis.fetch)
    }
    z(nm, lm);

    function om(a) {
        var b = "gd";
        if (a.gd && a.hasOwnProperty(b)) return a.gd;
        b = new a;
        return a.gd = b
    };

    function pm(a, b, c) {
        return b[a] || c
    };

    function qm() {}
    qm.prototype.l = function() {
        return []
    };
    qm.prototype.j = function() {
        return []
    };

    function rm(a, b) {
        a.l = function(c) {
            return pm(2, b, function() {
                return []
            })(c, 1)
        };
        a.j = function() {
            return pm(3, b, function() {
                return []
            })(1)
        }
    };
    var sm, tm, um = new uk(B);
    (function(a) {
        sm = a || new ik;
        "number" !== typeof B.google_srt && (B.google_srt = Math.random());
        jk(sm, B.google_srt);
        tm = new yk(sm, um);
        tm.Fd(!0);
        "complete" == B.document.readyState ? B.google_measure_js_timing || vk(um) : um.j && I(B, "load", function() {
            B.google_measure_js_timing || vk(um)
        })
    })();

    function vm(a, b, c) {
        return tm.Ob(a, b, c)
    }

    function wm(a, b) {
        return tm.rb(a, b)
    }

    function xm(a, b, c) {
        var d = om(qm).j();
        !b.eid && d.length && (b.eid = d.toString());
        kk(sm, a, b, !0, c)
    }

    function ym(a, b) {
        return tm.na(a, b, void 0, void 0)
    };

    function zm(a, b) {
        var c = Li();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(B.document.location.protocol), "//", encodeURIComponent(B.document.location.host)].join("")
    }
    Yf(nf( of ("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));

    function Am(a, b, c, d) {
        function e(g) {
            try {
                var h = JSON.parse(g.data)
            } catch (k) {
                return
            }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        }
        d = void 0 === d ? null : d;
        I(a, "message", e);
        var f = !1;
        return function() {
            var g = !1;
            f || (f = !0, g = Bf(a, "message", e));
            return g
        }
    }

    function Bm(a, b, c, d) {
        var e = Am(a, b, sf(c, function() {
            return e()
        }), void 0 === d ? null : d);
        return e
    }

    function Cm(a, b, c, d) {
        c.googMsgType = b;
        a.postMessage(JSON.stringify(c), d)
    }

    function Dm(a, b, c, d, e) {
        if (!(0 >= e) && (Cm(a, b, c, d), a = a.frames))
            for (var f = 0; f < a.length; ++f) 1 < e && Dm(a[f], b, c, d, --e)
    };

    function Em(a, b, c, d) {
        Yi(d.origin) && "expandable-xpc-ready" == c.notify && Fm(a, b)
    }

    function Fm(a, b) {
        var c = a.ed;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Ma,
            f: a.rg,
            g: a.nf,
            h: a.Yf,
            i: void 0
        });
        B.setTimeout(wm(220, Pj(function() {
            xi(c.document, b)
        })), 0)
    };

    function Gm(a) {
        H.call(this, a, -1, Hm)
    }
    z(Gm, H);
    var Hm = [15];

    function Im(a) {
        H.call(this, a)
    }
    z(Im, H);
    Im.prototype.getCorrelator = function() {
        return ze(this, 1)
    };
    Im.prototype.setCorrelator = function(a) {
        return Be(this, 1, a)
    };

    function Jm(a) {
        H.call(this, a)
    }
    z(Jm, H);
    var Km = null,
        Lm = null;

    function Mm() {
        if (null != Km) return Km;
        Km = !1;
        try {
            var a = wi(B);
            a && -1 !== a.location.hash.indexOf("google_logging") && (Km = !0);
            B.localStorage.getItem("google_logging") && (Km = !0)
        } catch (b) {}
        return Km
    }

    function Nm() {
        if (null != Lm) return Lm;
        Lm = !1;
        try {
            var a = wi(B);
            if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || B.localStorage.getItem("auto_ads_logging")) Lm = !0
        } catch (b) {}
        return Lm
    }

    function Om(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        B.google_logging_queue || (c = !0, B.google_logging_queue = []);
        B.google_logging_queue.push([a, b]);
        c && Mm() && xi(B.document, Yf(nf( of ("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
    };
    var Pm, Qm, Rm = new uk(window);
    (function(a) {
        Pm = null != a ? a : new ik;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        jk(Pm, window.google_srt);
        Qm = new yk(Pm, Rm);
        Qm.Ed(function() {});
        Qm.Fd(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || vk(Rm) : Rm.j && I(window, "load", function() {
            window.google_measure_js_timing || vk(Rm)
        })
    })();
    var Sm = (new Date).getTime();

    function Tm(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var Um = {
        jj: 0,
        ij: 1,
        fj: 2,
        aj: 3,
        gj: 4,
        bj: 5,
        hj: 6,
        dj: 7,
        ej: 8,
        Zi: 9,
        cj: 10
    };
    var Vm = {
        lj: 0,
        mj: 1,
        kj: 2
    };

    function Wm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Xm(a) {
        a = Zb(a, function(b) {
            return new gj(b.top, b.right, b.bottom, b.left)
        });
        a = Ym(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Ym(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return $b(a.slice(1), function(b, c) {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, hj(a[0]))
    };
    var Ff = {
        Wj: 0,
        Oi: 1,
        Ri: 2,
        Pi: 3,
        Qi: 4,
        Xi: 8,
        ik: 9,
        wj: 10,
        xj: 11,
        ek: 16,
        Bi: 17,
        Ai: 24,
        uj: 25,
        Th: 26,
        Sh: 27,
        ff: 30,
        pj: 32,
        rj: 40,
        nk: 41,
        kk: 42
    };
    var Zm = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        $m = {},
        an = ($m[1] = 1, $m[2] = 1, $m[3] = 7, $m[4] = 7, $m[8] = 2, $m[27] = 3, $m[9] = 4, $m[30] = 5, $m);

    function bn() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new cn;
        this.sideRailProcessedFixedElements = new r.Set;
        this.sideRailAvailableSpace = new r.Map
    }

    function dn(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new r.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new r.Map)) : a.google_reactive_ads_global_state = new bn;
        return a.google_reactive_ads_global_state
    }

    function cn() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var en = 728 * 1.38;

    function fn(a) {
        return a != a.top ? 512 : 0
    }

    function gn(a, b) {
        return (a = hn(a)) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    }

    function jn(a) {
        var b = hn(a);
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }

    function kn(a) {
        return Math.max(0, ln(a, !0) - mn(a))
    }

    function nn(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function mn(a) {
        return nn(a).clientHeight
    }

    function hn(a) {
        return nn(a).clientWidth
    }

    function ln(a, b) {
        var c = nn(a);
        return b ? c.scrollHeight == mn(a) ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }

    function on(a, b) {
        return pn(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1
    }

    function qn(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function rn(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function sn(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function tn(a) {
        var b = {},
            c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                var d = c[a];
                if ("key" in d && "value" in d) {
                    var e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }

    function un(a, b, c, d) {
        kk(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function pn(a) {
        return 26 === a || 27 === a || 40 === a || 41 === a
    };

    function vn() {
        this.l = new wn(this);
        this.j = 0
    }
    vn.prototype.resolve = function(a) {
        xn(this);
        this.j = 1;
        this.v = a;
        yn(this.l)
    };
    vn.prototype.reject = function(a) {
        xn(this);
        this.j = 2;
        this.m = a;
        yn(this.l)
    };

    function xn(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }

    function wn(a) {
        this.j = a
    }
    wn.prototype.then = function(a, b) {
        if (this.l) throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        yn(this)
    };

    function yn(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.v);
                break;
            case 2:
                a.m && a.m(a.j.m);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function zn(a, b) {
        An(a).forEach(b, void 0)
    }

    function An(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Bn() {
        this.j = {};
        this.l = {}
    }
    q = Bn.prototype;
    q.set = function(a, b) {
        var c = Cn(a);
        this.j[c] = b;
        this.l[c] = a
    };
    q.remove = function(a) {
        a = Cn(a);
        this.j[a] = void 0;
        this.l[a] = void 0
    };
    q.get = function(a, b) {
        a = Cn(a);
        return void 0 !== this.j[a] ? this.j[a] : b
    };

    function Dn(a, b) {
        return void 0 !== a.j[Cn(b)]
    }

    function En(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Fn(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    q.Ib = function() {
        return En(this).length
    };
    q.clear = function() {
        this.j = {};
        this.l = {}
    };

    function Cn(a) {
        return a instanceof Object ? String(Ta(a)) : a + ""
    };

    function Gn(a) {
        this.j = new Bn;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    Gn.prototype.add = function(a) {
        this.j.set(a, !0)
    };
    Gn.prototype.remove = function(a) {
        this.j.remove(a)
    };
    Gn.prototype.contains = function(a) {
        return Dn(this.j, a)
    };
    var Hn = new Gn("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function In(a, b) {
        N.call(this);
        this.element = b;
        a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new r.Map;
        var c = a.get(b);
        c ? b = c : (c = new r.Map, a.set(b, c), b = c);
        this.j = b
    }
    z(In, N);
    In.prototype.M = function() {
        Jn(this);
        N.prototype.M.call(this)
    };

    function Jn(a) {
        a.j.forEach(function(b, c) {
            if (b.overrides.delete(a)) {
                b = t(Array, "from").call(Array, t(b.overrides, "values").call(b.overrides)).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Kn(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.j.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new r.Map
            };
            a.j.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    };

    function Ln(a) {
        this.O = a;
        this.j = new r.Map;
        this.m = 1;
        this.l = null
    }
    Ln.prototype.aa = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        var d = this.m++;
        this.j.set(d, a);
        b && a(this.O);
        return function() {
            c.j.delete(d)
        }
    };

    function Mn(a, b) {
        return a.aa(b, !0)
    }

    function Nn(a, b, c) {
        return Mn(a, function(d) {
            d === b && c()
        })
    }

    function On(a, b) {
        if (!1 === a.O) b();
        else {
            var c = {
                ac: null
            };
            c.ac = Nn(a, !1, function() {
                c.ac && (c.ac(), c.ac = null);
                b()
            })
        }
    }

    function Pn(a, b, c) {
        Qn(a).aa(function(d) {
            d === b && c()
        })
    }

    function O(a, b) {
        a.O = b;
        a.j.forEach(function(c) {
            c(a.O)
        })
    }

    function Rn(a, b) {
        a.l && a.l();
        a.l = b.aa(function(c) {
            return O(a, c)
        }, !0)
    }
    Ln.prototype.map = function(a) {
        var b = new Ln(a(this.O));
        this.aa(function(c) {
            return O(b, a(c))
        });
        return b
    };

    function Qn(a, b) {
        b = void 0 === b ? Sn : b;
        var c = a.O,
            d = new Ln(a.O);
        a.aa(function(e) {
            b(e, c) || (c = e, O(d, e))
        });
        return d
    }

    function Tn(a, b) {
        function c() {
            return {
                first: a.O,
                second: b.O
            }
        }
        var d = new Ln(c());
        a.aa(function() {
            return O(d, c())
        });
        b.aa(function() {
            return O(d, c())
        });
        return d
    }

    function Un() {
        function a() {
            O(d, b())
        }

        function b() {
            return c.every(function(e) {
                return e.O
            })
        }
        var c = [].concat(ma(Ma.apply(0, arguments))),
            d = new Ln(b());
        c.forEach(function(e) {
            return e.aa(a)
        });
        return Qn(d)
    }

    function Vn() {
        function a() {
            O(d, b())
        }

        function b() {
            return -1 !== t(c, "findIndex").call(c, function(e) {
                return e.O
            })
        }
        var c = [].concat(ma(Ma.apply(0, arguments))),
            d = new Ln(b());
        c.forEach(function(e) {
            return e.aa(a)
        });
        return Qn(d)
    }

    function Sn(a, b) {
        return a == b
    };

    function Wn() {
        this.j = []
    }

    function Xn(a, b) {
        Xb(a.j, function(c) {
            c(b)
        })
    }

    function Yn(a) {
        this.j = a
    }
    Yn.prototype.aa = function(a) {
        this.j.j.push(a)
    };
    Yn.prototype.map = function(a) {
        var b = new Wn;
        this.aa(function(c) {
            return Xn(b, a(c))
        });
        return new Yn(b)
    };

    function Zn() {
        var a = new Wn;
        Ma.apply(0, arguments).forEach(function(b) {
            b.aa(function(c) {
                Xn(a, c)
            })
        });
        return new Yn(a)
    };

    function $n(a) {
        var b = this;
        this.l = a;
        this.j = new Ln(null);
        this.m = new Ln(null);
        this.v = new Wn;
        this.C = function(c) {
            null == b.j.O && 1 == c.touches.length && O(b.j, c.touches[0])
        };
        this.A = function(c) {
            var d = b.j.O;
            null != d && (c = ao(d, c.changedTouches), null != c && (O(b.j, null), O(b.m, null), Xn(b.v, bo(d, c))))
        };
        this.B = function(c) {
            var d = b.j.O;
            null != d && (d = ao(d, c.changedTouches), null != d && (O(b.m, d), c.preventDefault()))
        }
    }

    function co(a) {
        return Qn(Tn(a.j, a.m).map(function(b) {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : bo(c, b)
        }))
    }

    function bo(a, b) {
        return {
            cf: b.pageX - a.pageX,
            df: b.pageY - a.pageY
        }
    }

    function ao(a, b) {
        if (null == b) return null;
        for (var c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function eo(a, b) {
        var c = this;
        this.v = a;
        this.A = b;
        this.j = new Ln(null);
        this.l = new Ln(null);
        this.m = new Wn;
        this.D = function(d) {
            O(c.j, d)
        };
        this.B = function(d) {
            var e = c.j.O;
            null != e && (O(c.j, null), O(c.l, null), Xn(c.m, fo(e, d)))
        };
        this.C = function(d) {
            null != c.j.O && (O(c.l, d), d.preventDefault())
        }
    }

    function go(a) {
        return Qn(Tn(a.j, a.l).map(function(b) {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : fo(c, b)
        }))
    }

    function fo(a, b) {
        return {
            cf: b.screenX - a.screenX,
            df: b.screenY - a.screenY
        }
    };

    function ho(a, b) {
        var c = new io(a, b);
        return function() {
            return jo(c)
        }
    }

    function io(a, b) {
        this.m = a;
        this.v = b;
        this.l = null;
        this.j = !1
    }

    function jo(a) {
        if (a.j) return !1;
        if (null == a.l) return ko(a), !0;
        var b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return ko(a), !0;
        lo(a, b);
        return !0
    }

    function lo(a, b) {
        a.j = !0;
        a.m.setTimeout(function() {
            a.j = !1;
            ko(a)
        }, b)
    }

    function ko(a) {
        a.l = (new Date).getTime();
        a.v()
    };

    function mo(a, b) {
        this.j = a;
        this.l = b
    }

    function no(a) {
        return oo(go(a.j), co(a.l))
    }

    function po(a) {
        return Zn(new Yn(a.j.m), new Yn(a.l.v))
    }

    function oo(a, b) {
        return Tn(a, b).map(function(c) {
            var d = c.second;
            return c.first || d || null
        })
    };

    function qo(a, b) {
        N.call(this);
        var c = this;
        this.win = a;
        this.element = b;
        this.j = !1;
        this.l = new Ln(new Rh(this.element.offsetWidth, this.element.offsetHeight));
        this.m = new ResizeObserver(function() {
            ro(c)
        })
    }
    z(qo, N);

    function so(a, b) {
        return new qo(a, b)
    }

    function ro(a) {
        a.win.requestAnimationFrame(function() {
            a.A || O(a.l, new Rh(a.element.offsetWidth, a.element.offsetHeight))
        })
    }
    qo.prototype.M = function() {
        this.m.disconnect();
        N.prototype.M.call(this)
    };

    function to(a, b, c) {
        this.m = a;
        this.j = b;
        this.l = c
    }

    function uo(a, b) {
        return {
            top: a.j - b,
            right: a.m + a.l,
            bottom: a.j + b,
            left: a.m
        }
    };

    function vo(a, b) {
        this.j = a;
        this.l = b
    }
    vo.prototype.getHeight = function() {
        return this.l
    };

    function wo(a) {
        return new vo(Math.round(a.j), Math.round(a.l))
    }

    function xo(a, b) {
        a = a.getBoundingClientRect();
        return new vo(a.top + rn(b), a.bottom - a.top)
    };

    function yo(a) {
        var b = this;
        this.j = a;
        this.l = [];
        this.B = !1;
        this.A = this.m = null;
        this.C = ho(a, function() {
            if (null != b.A) {
                var c = ln(b.j, !0) - b.A;
                1E3 < c && zo(b, c)
            }
        });
        this.v = null
    }
    yo.prototype.init = function(a, b) {
        var c = this;
        null == a ? (this.A = a = ln(this.j, !0), this.j.addEventListener("scroll", this.C), null != b && b(a)) : this.v = this.j.setTimeout(function() {
            c.init(void 0, b)
        }, a)
    };
    yo.prototype.xa = function() {
        null != this.v && this.j.clearTimeout(this.v);
        this.j.removeEventListener("scroll", this.C);
        this.l = [];
        this.m = null
    };
    yo.prototype.addListener = function(a) {
        this.B ? a(this.m) : this.l.push(a)
    };

    function zo(a, b) {
        a.B = !0;
        a.m = b;
        a.l.forEach(function(c) {
            c(a.m)
        });
        a.l = []
    };

    function Ao(a, b, c, d) {
        this.win = a;
        this.j = b;
        this.l = c;
        this.m = d
    }

    function Bo(a) {
        return new Ao(a, new In(a, a.document.body), new In(a, a.document.documentElement), new In(a, a.document.documentElement))
    }

    function Co(a) {
        Kn(a.m, "scroll-behavior", "auto");
        var b = Do(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        Kn(a.j, "position", "fixed");
        Kn(a.j, "top", -b.previousWindowScroll + "px");
        Kn(a.j, "width", "100%");
        Kn(a.j, "overflow-x", "hidden");
        Kn(a.j, "overflow-y", "hidden");
        Kn(a.l, "overflow-x", "hidden");
        Kn(a.l, "overflow-y", "hidden")
    }

    function Eo(a) {
        Jn(a.j);
        Jn(a.l);
        var b = Do(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        Jn(a.m)
    }

    function Do(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new r.Set
        }
    };

    function Fo(a, b) {
        return a.reduce(function(c, d) {
            return c.concat(b(d))
        }, [])
    };

    function Go(a) {
        this.j = void 0 === a ? 1 : a
    }
    Go.prototype.next = function() {
        var a = 48271 * this.j % 2147483647;
        this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
        return this.j / 2147483647
    };

    function Ho(a) {
        this.j = a.slice(0)
    }
    q = Ho.prototype;
    q.forEach = function(a) {
        var b = this;
        this.j.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    q.filter = function(a) {
        return new Ho(Yb(this.j, a))
    };

    function Io(a, b, c) {
        var d = [];
        a = y(a.j);
        for (var e = a.next(); !e.done; e = a.next()) e = e.value, b(e) ? d.push(e) : c(e);
        return new Ho(d)
    }
    q.apply = function(a) {
        return new Ho(a(Jo(this)))
    };
    q.sort = function(a) {
        return new Ho(Jo(this).sort(a))
    };
    q.get = function(a) {
        return this.j[a]
    };
    q.add = function(a) {
        var b = Jo(this);
        b.push(a);
        return new Ho(b)
    };

    function Jo(a) {
        return a.j.slice(0)
    }

    function Ko(a, b) {
        a = Jo(a);
        var c = new Go(void 0 === b ? 1 : b);
        lc(a, function() {
            return c.next()
        });
        return new Ho(a)
    };

    function Lo(a) {
        this.j = new Gn(a)
    }
    Lo.prototype.contains = function(a) {
        return this.j.contains(a)
    };

    function Mo(a, b) {
        this.j = a;
        this.l = b
    }

    function No(a) {
        return null != a.j ? a.j.value : null
    }

    function Oo(a, b) {
        null != a.j && b(a.j.value)
    }
    Mo.prototype.map = function(a) {
        return null != this.j ? (a = a(this.j.value), a instanceof Mo ? a : Po(a)) : this
    };

    function Qo(a, b) {
        null != a.j || b(a.l);
        return a
    }

    function Po(a) {
        return new Mo({
            value: a
        }, null)
    }

    function Ro(a) {
        return new Mo(null, Error(a))
    }

    function So(a) {
        try {
            return Po(a())
        } catch (b) {
            return new Mo(null, b)
        }
    };

    function To() {
        this.j = new Bn
    }
    To.prototype.set = function(a, b) {
        var c = this.j.get(a);
        c || (c = new Gn, this.j.set(a, c));
        c.add(b)
    };

    function Uo(a) {
        return !a
    };

    function Vo(a) {
        H.call(this, a, -1, Wo)
    }
    z(Vo, H);
    Vo.prototype.getId = function() {
        return D(this, 3)
    };
    var Wo = [4];

    function Xo(a, b) {
        var c = void 0 === b.Oc ? void 0 : b.Oc,
            d = void 0 === b.Qd ? void 0 : b.Qd,
            e = void 0 === b.te ? void 0 : b.te;
        b = void 0 === b.zd ? void 0 : b.zd;
        this.A = a;
        this.m = d;
        this.v = new Ho(c || []);
        this.l = b;
        this.j = e
    };

    function Yo(a) {
        var b = a.split("~").filter(function(e) {
            return 0 < e.length
        });
        a = new Bn;
        b = y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.indexOf("."); - 1 == d ? a.set(c, "") : a.set(c.substring(0, d), c.substring(d + 1))
        }
        return a
    }

    function Zo(a) {
        var b = $o(a);
        a = [];
        b = y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = String(c.yb);
            a.push(c.Ta + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
        }
        return a.join("~")
    }

    function $o(a) {
        var b = [],
            c = a.v;
        c && c.j.length && b.push({
            Ta: "a",
            yb: ap(c)
        });
        null != a.m && b.push({
            Ta: "as",
            yb: a.m
        });
        null != a.j && b.push({
            Ta: "i",
            yb: String(a.j)
        });
        null != a.l && b.push({
            Ta: "rp",
            yb: String(a.l)
        });
        b.sort(function(d, e) {
            return d.Ta.localeCompare(e.Ta)
        });
        b.unshift({
            Ta: "t",
            yb: bp(a.A)
        });
        return b
    }

    function bp(a) {
        switch (a) {
            case 0:
                return "aa";
            case 1:
                return "ma";
            default:
                throw Error("Invalid slot type" + a);
        }
    }

    function ap(a) {
        a = Jo(a).map(cp);
        a = JSON.stringify(a);
        return Di(a)
    }

    function cp(a) {
        var b = {};
        null != D(a, 7) && (b.q = D(a, 7));
        null != D(a, 2) && (b.o = D(a, 2));
        null != D(a, 5) && (b.p = D(a, 5));
        return b
    };

    function dp(a) {
        H.call(this, a)
    }
    z(dp, H);
    dp.prototype.setLocation = function(a) {
        return E(this, 1, a)
    };

    function ep() {
        var a = new dp;
        return E(a, 2, 1)
    };

    function fp(a, b) {
        this.be = a;
        this.j = b
    }
    fp.prototype.Jb = function() {
        return this.j
    };

    function gp(a) {
        var b = [].slice.call(arguments).filter(tf(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.be || []);
            d = t(Object, "assign").call(Object, d, e.Jb())
        });
        return new fp(c, d)
    }

    function hp(a) {
        switch (a) {
            case 1:
                return new fp(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new fp(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new fp(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new fp(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function ip(a) {
        return null == a ? null : new fp(null, {
            google_ml_rank: a
        })
    }

    function jp(a) {
        return null == a ? null : new fp(null, {
            google_placement_id: Zo(a)
        })
    };

    function np(a) {
        H.call(this, a)
    }
    z(np, H);

    function op(a) {
        H.call(this, a)
    }
    z(op, H);

    function pp(a) {
        H.call(this, a)
    }
    z(pp, H);

    function qp(a) {
        H.call(this, a)
    }
    z(qp, H);

    function rp(a) {
        H.call(this, a, -1, sp)
    }
    z(rp, H);
    var sp = [3];

    function tp(a) {
        H.call(this, a)
    }
    z(tp, H);

    function up(a) {
        H.call(this, a)
    }
    z(up, H);

    function vp(a) {
        H.call(this, a)
    }
    z(vp, H);

    function wp(a) {
        H.call(this, a)
    }
    z(wp, H);

    function xp(a) {
        H.call(this, a)
    }
    z(xp, H);

    function yp(a) {
        H.call(this, a)
    }
    z(yp, H);

    function zp(a) {
        H.call(this, a)
    }
    z(zp, H);
    zp.prototype.Z = function() {
        return F(this, Vo, 1)
    };
    zp.prototype.j = function() {
        return D(this, 2)
    };

    function Ap(a) {
        H.call(this, a)
    }
    z(Ap, H);

    function Bp(a) {
        H.call(this, a)
    }
    z(Bp, H);

    function Cp(a) {
        H.call(this, a)
    }
    z(Cp, H);
    Cp.prototype.getName = function() {
        return D(this, 4)
    };
    var Dp = [1, 2, 3];

    function Ep(a) {
        H.call(this, a, -1, Fp)
    }
    z(Ep, H);
    var Fp = [2, 5, 6, 11];

    function Gp(a) {
        H.call(this, a)
    }
    z(Gp, H);

    function Hp(a) {
        H.call(this, a)
    }
    z(Hp, H);

    function Ip(a) {
        H.call(this, a)
    }
    z(Ip, H);

    function Jp(a) {
        H.call(this, a)
    }
    z(Jp, H);

    function Kp(a) {
        H.call(this, a, -1, Lp)
    }
    z(Kp, H);
    var Lp = [1];

    function Mp(a) {
        H.call(this, a)
    }
    z(Mp, H);

    function Np(a) {
        H.call(this, a)
    }
    z(Np, H);

    function Op(a) {
        H.call(this, a)
    }
    z(Op, H);

    function Pp() {
        var a = new Op;
        a = E(a, 1, 1);
        var b = new Mp;
        b = E(b, 2, !0);
        a = te(a, 2, b);
        b = new Kp;
        var c = new Ip;
        c = E(c, 1, 1);
        b = we(b, 1, Ip, c);
        c = new Jp;
        c = E(c, 1, !0);
        b = te(b, 2, c);
        return te(a, 3, b)
    };

    function Qp(a) {
        H.call(this, a)
    }
    z(Qp, H);
    Qp.prototype.j = function() {
        return Fe(this, 1)
    };

    function Rp(a) {
        H.call(this, a)
    }
    z(Rp, H);

    function Sp(a) {
        H.call(this, a)
    }
    z(Sp, H);

    function Tp(a) {
        H.call(this, a)
    }
    z(Tp, H);

    function Up(a) {
        H.call(this, a)
    }
    z(Up, H);

    function Vp(a) {
        H.call(this, a, -1, Wp)
    }
    z(Vp, H);
    var Wp = [2];

    function Xp(a) {
        H.call(this, a)
    }
    z(Xp, H);

    function Yp(a) {
        H.call(this, a, -1, Zp)
    }
    z(Yp, H);
    var Zp = [1];

    function $p(a) {
        H.call(this, a)
    }
    z($p, H);

    function aq(a) {
        H.call(this, a)
    }
    z(aq, H);

    function bq(a) {
        H.call(this, a, -1, cq)
    }
    z(bq, H);
    var cq = [1];

    function dq(a) {
        H.call(this, a)
    }
    z(dq, H);

    function eq(a) {
        H.call(this, a, -1, fq)
    }
    z(eq, H);
    var fq = [3, 4];

    function gq(a) {
        H.call(this, a)
    }
    z(gq, H);

    function hq(a) {
        H.call(this, a, -1, iq)
    }
    z(hq, H);
    hq.prototype.Z = function() {
        return F(this, Vo, 1)
    };
    hq.prototype.j = function() {
        return D(this, 2)
    };
    var iq = [6, 7, 9, 10, 11];

    function jq(a) {
        H.call(this, a, -1, kq)
    }
    z(jq, H);
    var kq = [4];

    function lq(a) {
        H.call(this, a)
    }
    z(lq, H);

    function mq(a) {
        H.call(this, a, -1, nq)
    }
    z(mq, H);
    var nq = [6];

    function oq(a) {
        H.call(this, a)
    }
    z(oq, H);

    function pq(a) {
        H.call(this, a)
    }
    z(pq, H);

    function qq(a) {
        H.call(this, a)
    }
    z(qq, H);
    var rq = [1, 2];

    function sq(a) {
        H.call(this, a)
    }
    z(sq, H);

    function tq(a) {
        H.call(this, a)
    }
    z(tq, H);

    function uq(a) {
        H.call(this, a, -1, vq)
    }
    z(uq, H);
    var vq = [1];

    function wq(a) {
        H.call(this, a, -1, xq)
    }
    z(wq, H);
    var xq = [1, 4];

    function yq(a) {
        H.call(this, a, -1, zq)
    }
    z(yq, H);

    function Aq(a) {
        return F(a, op, 13)
    }

    function Bq(a) {
        return F(a, up, 15)
    }

    function Cq(a) {
        return F(a, Up, 28)
    }
    var Dq = jf(yq),
        zq = [1, 2, 5, 7];

    function Eq(a) {
        H.call(this, a)
    }
    z(Eq, H);
    var Fq = jf(Eq);

    function Gq(a) {
        try {
            var b = a.localStorage.getItem("google_ama_settings");
            return b ? Fq(b) : null
        } catch (c) {
            return null
        }
    }

    function Hq(a, b) {
        if (void 0 !== a.Xc) {
            var c = Gq(b);
            c || (c = new Eq);
            void 0 !== a.Xc && E(c, 2, a.Xc);
            E(c, 1, gb() + 864E5);
            a = df(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Gq(b)) && D(a, 1) < gb()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };

    function Iq(a, b, c, d) {
        this.v = a;
        this.l = b;
        this.m = c;
        this.j = d
    }
    Iq.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.v)
        } catch (f) {}
        if (!b.length) return [];
        a = ec(b);
        a = Jq(this, a);
        "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.m) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = Kq(a[c]),
                    e = this.m;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    Iq.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.v,
            occurrenceIndex: this.l,
            paragraphIndex: this.m,
            ignoreMode: this.j
        })
    };

    function Jq(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function Kq(a) {
        var b = [];
        zn(a.getElementsByTagName("p"), function(c) {
            100 <= Lq(c) && b.push(c)
        });
        return b
    }

    function Lq(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        zn(a.childNodes, function(c) {
            b += Lq(c)
        });
        return b
    }

    function Mq(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Nq(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Oq(a) {
        return An(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function R(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Pq(a, b) {
        this.j = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Qq(a) {
        this.j = a;
        this.defaultValue = ""
    };
    var Rq = new R(1082, !0),
        Sq = new Pq(1130, 100),
        Tq = new Pq(1126, 1E4),
        Uq = new Pq(1032, 200),
        Vq = new Qq(14),
        Wq = new R(1234),
        Xq = new Pq(1224, .01),
        Yq = new Pq(1159, 500),
        Zq = new R(1122, !0),
        $q = new R(1226),
        ar = new R(1196),
        br = new R(1160),
        cr = new R(316),
        dr = new R(334),
        er = new Pq(54),
        fr = new R(313),
        gr = new Pq(66, -1),
        hr = new Pq(65, -1),
        ir = new R(369),
        jr = new R(368),
        kr = new R(1223),
        lr = new R(1227),
        mr = new Pq(1169, 61440),
        nr = new R(1171, !0),
        or = new R(1235),
        pr = new R(1151),
        qr = new Pq(1072, .75),
        rr = new Pq(1168, 61440),
        sr = new R(290),
        tr = new R(1222),
        ur = new R(1225),
        vr = new R(1147),
        wr = new R(1210),
        xr = new Pq(506864295),
        yr = new Pq(508040914, 100),
        zr = new R(506914611),
        Ar = new Pq(506871937),
        Br = new R(483374575),
        Cr = new Qq(1166),
        Dr = new R(1E4),
        Er = new Pq(472785970, 500),
        Fr = new R(447540096, !0),
        Gr = new R(83),
        Hr = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        }(472572701),
        Ir = new R(439828594),
        Jr = new R(483962503),
        Kr = new R(506738118),
        Lr = new R(506738119),
        Mr = new R(77),
        Nr = new R(78),
        Or = new R(309),
        Pr = new R(80),
        Qr = new R(76),
        Rr = new R(1957, !0),
        Sr = new R(380025941),
        Tr = new R(84),
        Ur = new R(1973),
        Vr = new R(188),
        Wr = new R(1975),
        Xr = new R(1974),
        Yr = new R(504787204),
        Zr = new R(1162),
        $r = new R(1120),
        as = new Pq(1142, 8),
        bs = new Pq(1158),
        cs = new Pq(501545963, 1),
        ds = new Pq(1157),
        es = new R(494741144),
        fs = new Pq(1119, 300),
        gs = new Pq(1193, 100),
        hs = new R(501545960),
        is = new Pq(1103),
        js = new R(501545961),
        ks = new R(505942137, !0),
        ls = new R(45388034),
        ms = new Pq(501545962, 1),
        ns = new Pq(45388309, -1),
        os = new Pq(1114, 1),
        ps = new Pq(1116, 300),
        qs = new Pq(1108, 1E3),
        rs = new R(491815314),
        ss = new R(1121),
        ts = new R(501545959, !0),
        us = new R(500169372),
        vs = new R(45388161),
        ws = new R(471262996),
        xs = new R(504834127),
        ys = new R(500922887),
        zs = new R(472491850),
        As = new Pq(469675170, 3E4),
        Bs = new R(506619840),
        Cs = new R(506852289),
        Ds = new R(504535903),
        Es = new R(502896280),
        Fs = new R(50227136),
        Gs = new R(1928),
        Hs = new R(1941),
        Is = new R(370946349),
        Js = new R(392736476),
        Ks = new Pq(406149835),
        Ls = new R(432946749),
        Ms = new R(432938498),
        Ns = new Pq(1935),
        Os = new R(485990406);

    function Ps() {
        var a = {};
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.v = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.A = function() {}
    }

    function S(a) {
        return om(Ps).j(a.j, a.defaultValue)
    }

    function V(a) {
        return om(Ps).l(a.j, a.defaultValue)
    }

    function Qs(a) {
        return om(Ps).m(a.j, a.defaultValue)
    };

    function Rs(a, b) {
        a = (new Zh(a)).createElement("DIV");
        var c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Ss(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Nq(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Ts(a) {
        if (a && a.parentNode) {
            var b = a.parentNode;
            b.removeChild(a);
            Nq(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };

    function Us(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        if (S(fr)) {
            d = void 0 === d ? 0 : d;
            var e = Vs(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.jc(c);) b = c;
                e = {
                    anchor: b,
                    position: e.yc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Ss(a, e.anchor, e.position)
        } else Ss(a, b, c)
    }

    function Vs(a, b, c) {
        function d(f) {
            f = Ws(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Ws(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Xs(a.previousSibling, e),
                    jc: function(f) {
                        return Xs(f.previousSibling, e)
                    },
                    yc: 0
                };
            case 2:
                return {
                    init: Xs(a.lastChild, e),
                    jc: function(f) {
                        return Xs(f.previousSibling, e)
                    },
                    yc: 0
                };
            case 3:
                return {
                    init: Xs(a.nextSibling, d),
                    jc: function(f) {
                        return Xs(f.nextSibling, d)
                    },
                    yc: 3
                };
            case 1:
                return {
                    init: Xs(a.firstChild, d),
                    jc: function(f) {
                        return Xs(f.nextSibling, d)
                    },
                    yc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Ws(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Xs(a, b) {
        return a && b(a) ? a : null
    };

    function Ys(a, b) {
        try {
            return (void 0 === b ? 0 : b) ? (new Rh(a.innerWidth, a.innerHeight)).round() : ci(a || window).round()
        } catch (c) {
            return new Rh(-12245933, -12245933)
        }
    }

    function Zs(a) {
        a = void 0 === a ? B : a;
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function $s(a, b) {
        b = void 0 === b ? B : b;
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Qh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function at(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function bt() {
        this.j = [];
        this.l = -1
    }
    bt.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && t(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
    };
    bt.prototype.get = function(a) {
        return !!this.j[a]
    };

    function ct(a) {
        -1 === a.l && (a.l = $b(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.l
    };

    function dt(a, b, c) {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        var d = a.document,
            e = d.documentElement;
        if (b && c) {
            var f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    }

    function et(a, b) {
        Bi(a, function(c, d) {
            b[d] = c
        })
    }

    function ft(a) {
        var b = a.location.href;
        if (a == a.top) return {
            url: b,
            hd: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            hd: c
        }
    }

    function gt(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && ti(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function ht(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function it(a, b) {
        var c = 40 === a.google_reactive_ad_format,
            d = 16 === a.google_reactive_ad_format;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function jt(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function kt(a, b, c) {
        a = ht(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function lt(a, b) {
        b = b.parentElement;
        return b ? (a = zi(b, a)) ? a.direction : "" : ""
    }

    function mt(a, b, c) {
        if (0 === kt(a, b, c)) return !1;
        jt(b, c, "0px");
        var d = kt(a, b, c);
        jt(b, c, -1 * d + "px");
        a = kt(a, b, c);
        0 !== a && a !== d && jt(b, c, d / (a - d) * d + "px");
        return !0
    };
    var nt = RegExp("(^| )adsbygoogle($| )");

    function ot(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Wh(d.yd);
            a[e] = d.value
        }
    }

    function pt(a, b, c, d, e, f) {
        a = qt(a, e);
        a.wa.setAttribute("data-ad-format", d ? d : "auto");
        rt(a, b, c, f);
        return a
    }

    function rt(a, b, c, d) {
        var e = [];
        if (d = d && d.be) a.cb.className = d.join(" ");
        a = a.wa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function qt(a, b) {
        var c = Rs(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.xc && ot(d, b.xc);
        a = (new Zh(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Md && (d.marginTop = b.Md);
        b.Rc && (d.marginBottom = b.Rc);
        b.vb && ot(d, b.vb);
        c.appendChild(a);
        return {
            cb: c,
            wa: a
        }
    }

    function st(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Jb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function tt(a) {
        var b = Oq(a.document);
        Xb(b, function(c) {
            var d = ut(a, c),
                e;
            if (e = d) e = ht(c, a), e = !((e ? e.y : 0) < mn(a));
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), st(a, c))
        })
    }

    function ut(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (var c in Ih) a[Ih[c]] && (b[Ih[c]] = a[Ih[c]]);
        return b
    };
    var vt = x(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function wt() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? L(vt) : c;
        this.l = a;
        this.j = null;
        this.m = !1;
        this.B = Math.random();
        this.v = b;
        this.A = this.na;
        this.C = c
    }
    q = wt.prototype;
    q.Ed = function(a) {
        this.j = a
    };
    q.Fd = function(a) {
        this.m = a
    };
    q.na = function(a, b, c, d, e) {
        c = void 0 === c ? this.v : c;
        e = void 0 === e ? this.l : e;
        if ((this.m ? this.B : Math.random()) > c) return !1;
        b.error && b.meta && b.id || (b = new Tj(b, {
            context: a,
            id: e
        }));
        if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
        B.google_js_errors = B.google_js_errors || [];
        B.google_js_errors.push(b);
        B.error_rep_loaded || (xi(B.document, this.C), B.error_rep_loaded = !0);
        return !1
    };
    q.Ob = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.A(a, d, this.v, c, this.l)) throw d;
        }
    };
    q.rb = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ma.apply(0, arguments);
            return e.Ob(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    q.Aa = function(a, b, c) {
        var d = this;
        b.catch(function(e) {
            e = e ? e : "unknown rejection";
            d.na(a, e instanceof Error ? e : Error(e), void 0, c || d.j || void 0)
        })
    };

    function xt(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function yt(a, b, c, d) {
        var e = !0;
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = pk(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && xt(t(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (pk() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter =
                        f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    }

    function zt(a, b) {
        return yt(754, a, function(c, d) {
            (new wt).na(c, d)
        }, b)
    };

    function At(a, b, c) {
        return yt(a, b, void 0, c).apply()
    }

    function Bt(a, b) {
        return zt(a, b).apply()
    }

    function Ct(a) {
        if (!a) return null;
        var b = D(a, 7);
        if (D(a, 1) || a.getId() || 0 < Ce(a, 4).length) {
            b = Ce(a, 4);
            var c = D(a, 3),
                d = D(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Mq(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Mq(b[c]);
            a = (b = e) ? new Iq(b, D(a, 2), D(a, 5), Dt(D(a, 6))) : null
        } else a = b ? new Iq(b, D(a, 2), D(a, 5), Dt(D(a, 6))) : null;
        return a
    }
    var Et = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Dt(a) {
        return null == a ? a : Et[a]
    }

    function Ft(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = D(a[c], 1),
                e = D(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.yd = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Gt(a, b) {
        var c = {};
        a && (c.Md = D(a, 1), c.Rc = D(a, 2), c.clearBoth = !!je(a, 3));
        b && (c.xc = Ft(se(b, dq, 3)), c.vb = Ft(se(b, dq, 4)));
        return c
    }
    var Ht = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        It = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var Jt = {
            ta: "ama_success",
            pa: .1,
            qa: !0
        },
        Kt = {
            ta: "ama_failure",
            pa: .1,
            qa: !0
        },
        Lt = {
            ta: "ama_inf_scr",
            pa: .1,
            qa: !0
        },
        Mt = {
            ta: "ama_inf_scr",
            pa: .1,
            qa: !0
        },
        Nt = {
            ta: "ama_coverage",
            pa: .1,
            qa: !0
        },
        Ot = {
            ta: "ama_inf_scr",
            pa: 1,
            qa: !0
        },
        Pt = {
            ta: "ama_opt",
            pa: .1,
            qa: !0
        },
        Qt = {
            ta: "ama_aud_sen",
            pa: 1,
            qa: !0
        },
        Rt = {
            ta: "ama_auto_rs",
            pa: 1,
            qa: !0
        },
        St = {
            ta: "ama_auto_prose",
            pa: 1,
            qa: !0
        },
        Tt = {
            ta: "ama_improv",
            pa: .1,
            qa: !0
        };

    function Ut(a) {
        this.C = {};
        this.C.c = a;
        this.A = [];
        this.m = null;
        this.B = [];
        this.G = 0
    }
    Ut.prototype.Sa = function(a) {
        this.C.wpc = a;
        return this
    };

    function Vt(a, b) {
        for (var c = 0; c < b.length; c++) a.ra(b[c]);
        return a
    }
    Ut.prototype.ra = function(a) {
        for (var b = 0; b < this.A.length; b++)
            if (this.A[b] == a) return this;
        this.A.push(a);
        return this
    };

    function Wt(a, b) {
        a.m = a.m ? a.m : b;
        return a
    }
    Ut.prototype.v = function(a) {
        var b = Hf(this.C);
        0 < this.G && (b.t = this.G);
        b.err = this.A.join();
        b.warn = this.B.join();
        this.m && (b.excp_n = this.m.name, b.excp_m = this.m.message && this.m.message.substring(0, 512), b.excp_s = this.m.stack && Ak(this.m.stack, ""));
        b.w = 0 < a.innerWidth ? a.innerWidth : null;
        b.h = 0 < a.innerHeight ? a.innerHeight : null;
        return b
    };

    function Xt(a) {
        this.j = a
    }

    function Yt(a, b, c) {
        c = c.v(a.j);
        b.qa && (c.pvc = aj(a.j));
        0 < b.pa && (c.r = b.pa, Zt(a, b, c))
    }

    function Zt(a, b, c) {
        !b.qa || "pvc" in c || (c.pvc = aj(a.j));
        xm(b.ta, c, b.pa)
    };

    function $t(a, b, c) {
        this.j = a;
        this.m = b;
        this.l = c
    }

    function au(a, b, c) {
        var d, e = a.m,
            f = Object,
            g = f.assign,
            h = mn(a.j),
            k = null == (d = F(a.l, Np, 4)) ? void 0 : G(d, 2);
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        Zt(e, Qt, g.call(f, {}, c, {
            evt: b,
            vh: h,
            eid: k,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        }))
    };

    function bu(a) {
        this.j = a
    }
    bu.prototype.l = function(a, b, c, d) {
        return pt(d.document, a, null, null, this.j, b)
    };
    bu.prototype.m = function() {
        return null
    };

    function cu(a) {
        this.j = a
    }
    cu.prototype.l = function(a, b, c, d) {
        var e = 0 < se(this.j, eq, 9).length ? se(this.j, eq, 9)[0] : null,
            f = Gt(F(this.j, gq, 3), e);
        if (!e) return null;
        if (e = D(e, 1)) {
            d = d.document;
            var g = c.tagName;
            c = (new Zh(d)).createElement(g);
            c.style.clear = f.clearBoth ? "both" : "none";
            "A" == g && (c.style.display = "block");
            c.style.padding = "0px";
            c.style.margin = "0px";
            f.xc && ot(c.style, f.xc);
            d = (new Zh(d)).createElement("INS");
            f.vb && ot(d.style, f.vb);
            c.appendChild(d);
            f = {
                cb: c,
                wa: d
            };
            f.wa.setAttribute("data-ad-type", "text");
            f.wa.setAttribute("data-native-settings-key", e);
            rt(f, a, null, b);
            a = f
        } else a = null;
        return a
    };
    cu.prototype.m = function() {
        var a = 0 < se(this.j, eq, 9).length ? se(this.j, eq, 9)[0] : null;
        if (!a) return null;
        a = se(a, dq, 3);
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if ("height" == D(c, 1) && 0 < parseInt(D(c, 2), 10)) return parseInt(D(c, 2), 10)
        }
        return null
    };

    function du(a) {
        this.j = a
    }
    du.prototype.l = function(a, b, c, d) {
        if (!this.j) return null;
        var e = this.j.google_ad_format || null,
            f = this.j.google_ad_slot || null;
        if (c = c.style) {
            for (var g = [], h = 0; h < c.length; h++) {
                var k = c.item(h);
                "width" !== k && "height" !== k && g.push({
                    yd: k,
                    value: c.getPropertyValue(k)
                })
            }
            c = {
                vb: g
            }
        } else c = {};
        a = pt(d.document, a, f, e, c, b);
        a.wa.setAttribute("data-pub-vars", JSON.stringify(this.j));
        return a
    };
    du.prototype.m = function() {
        return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
    };
    du.prototype.Jb = function() {
        return this.j
    };

    function eu(a) {
        this.l = a
    }
    eu.prototype.j = function() {
        var a = {};
        return new fp([], (a.google_ad_type = this.l, a.google_reactive_ad_format = 26, a.google_ad_format = "fluid", a))
    };

    function fu(a, b) {
        this.v = a;
        this.m = b
    }
    fu.prototype.j = function() {
        return this.m
    };
    fu.prototype.l = function(a) {
        a = this.v.query(a.document);
        return 0 < a.length ? a[0] : null
    };

    function gu(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        l = void 0 === l ? null : l;
        m = void 0 === m ? null : m;
        n = void 0 === n ? null : n;
        p = void 0 === p ? null : p;
        this.G = a;
        this.C = b;
        this.L = c;
        this.H = d;
        this.ib = e;
        this.sc = f;
        this.Dc = g ? g : new dp;
        this.m = h;
        this.ia = k;
        this.D = l;
        this.v = m;
        if (!(a = !m)) {
            if (a = m.Z()) m = m.Z(), a = null != D(m, 5);
            a = !a
        }
        this.Ca = !a;
        this.B = n;
        this.P = p;
        this.N = [];
        this.A = !1;
        this.I = new Bn;
        this.K = this.l = null
    }

    function hu(a) {
        return a.C instanceof du ? a.C.Jb() : null
    }

    function iu(a, b, c) {
        Dn(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }
    gu.prototype.U = function() {
        return this.m
    };
    gu.prototype.j = function() {
        return this.G.j()
    };

    function ju(a, b) {
        a.A = !0;
        S(ar) && (a.l && Ts(a.l), a.l = null);
        null != b && a.N.push(b)
    }

    function ku(a) {
        return S(ar) ? (a.K || (a.K = a.G.l(a.m)), a.K) : a.G.l(a.m)
    }

    function lu(a) {
        var b = a.H;
        a = a.m.document.createElement("div");
        S(ar) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function mu(a) {
        return Rs(a.m.document, a.H || !1)
    }

    function nu(a) {
        return a.C.m(a.m)
    }

    function ou(a, b, c) {
        for (var d = [], e = 0; e < a.length; e++) {
            var f = a[e];
            var g = e,
                h = b,
                k = c,
                l = f.Z();
            if (l) {
                var m = Ct(l);
                if (m) {
                    var n = Ht[D(f, 2)];
                    var p = void 0 === n ? null : n;
                    if (null === p) f = null;
                    else {
                        n = (n = F(f, gq, 3)) ? je(n, 3) : null;
                        m = new fu(m, p);
                        p = he(f, 10).slice(0);
                        null != D(l, 5) && p.push(1);
                        var v = k ? k : {};
                        k = D(f, 12);
                        l = Yd(f, dp, 4) ? F(f, dp, 4) : null;
                        1 == D(f, 8) ? (v = v.vf || null, f = new gu(m, new bu(Gt(F(f, gq, 3), null)), v, n, 0, p, l, h, g, k, f)) : f = 2 == D(f, 8) ? new gu(m, new cu(f), v.Xf || new eu("text"), n, 1, p, l, h, g, k, f) : null
                    }
                } else f = null
            } else f = null;
            null !==
                f && d.push(f)
        }
        return d
    }

    function pu(a) {
        return a.A
    }

    function qu(a) {
        return a.Ca
    };

    function ru(a) {
        return (null == a ? 0 : a.google_ad_slot) ? Po(new Xo(1, {
            Qd: a.google_ad_slot
        })) : Ro("Missing dimension when creating placement id")
    }

    function su(a) {
        switch (a.ib) {
            case 0:
            case 1:
                var b = a.v;
                null == b ? a = null : (a = b.Z(), null == a ? a = null : (b = D(b, 2), a = null == b ? null : new Xo(0, {
                    Oc: [a],
                    zd: b
                })));
                return null != a ? Po(a) : Ro("Missing dimension when creating placement id");
            case 2:
                return a = tu(a), null != a ? Po(a) : Ro("Missing dimension when creating placement id");
            default:
                return Ro("Invalid type: " + a.ib)
        }
    }

    function tu(a) {
        if (null == a || null == a.B) return null;
        var b = F(a.B, Vo, 1),
            c = F(a.B, Vo, 2);
        if (null == b || null == c) return null;
        var d = a.P;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new Xo(0, {
            Oc: [b, c],
            te: d,
            zd: It[a]
        })
    };

    function uu(a, b, c) {
        this.W = a;
        this.l = b;
        this.ca = c;
        this.j = null
    }

    function vu(a) {
        var b = hu(a.W);
        return (b ? ru(b) : su(a.W)).map(function(c) {
            return Zo(c)
        })
    }

    function wu(a) {
        a.j = a.j || vu(a);
        return a.j
    }
    uu.prototype.Z = function() {
        return this.l
    };

    function xu(a, b) {
        if (a.W.A) throw Error("AMA:AP:AP");
        Us(b, a.Z(), a.W.j());
        ju(a.W, b)
    }
    uu.prototype.fill = function(a, b) {
        var c = this.W;
        (a = c.C.l(a, b, this.l, c.m)) && xu(this, a.cb);
        return a
    };

    function yu(a, b) {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = Ib(b, "&") ? Th(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Hn.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (yu(a, b[c])) return !0
        }
        return !1
    }

    function zu(a) {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };

    function Au() {
        this.j = {
            clearBoth: !0
        }
    }
    Au.prototype.l = function(a, b, c, d) {
        return pt(d.document, a, null, null, this.j, b)
    };
    Au.prototype.m = function(a) {
        return zu(Math.min(a.screen.width || 0, a.screen.height || 0))
    };

    function Bu(a) {
        this.l = a
    }
    Bu.prototype.j = function(a) {
        a = Math.floor(a.l);
        var b = zu(a),
            c = {};
        return new fp(["ap_container"], (c.google_reactive_ad_format = 27, c.google_responsive_auto_format = 16, c.google_max_num_ads = 1, c.google_ad_type = this.l, c.google_ad_format = a + "x" + b, c.google_ad_width = a, c.google_ad_height = b, c))
    };

    function Cu(a, b) {
        this.v = a;
        this.m = b
    }
    Cu.prototype.l = function() {
        return this.v
    };
    Cu.prototype.j = function() {
        return this.m
    };
    var Du = {
        TABLE: {
            Cb: new Lo([1, 2])
        },
        THEAD: {
            Cb: new Lo([0, 3, 1, 2])
        },
        TBODY: {
            Cb: new Lo([0, 3, 1, 2])
        },
        TR: {
            Cb: new Lo([0, 3, 1, 2])
        },
        TD: {
            Cb: new Lo([0, 3])
        }
    };

    function Eu(a, b, c, d, e, f, g) {
        this.m = a;
        this.zb = b.slice(0);
        this.j = c;
        this.Jc = d;
        this.Kc = e;
        this.v = f;
        this.l = g
    }
    Eu.prototype.U = function() {
        return this.l
    };

    function Fu(a) {
        var b = ep();
        return new gu(new Cu(a.Jc, a.Kc), new bu({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.m, a.j)
    }

    function Gu(a, b, c, d) {
        var e = c.childNodes,
            f = [];
        b = y(c.querySelectorAll(b));
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var g = Ub(e, c);
            0 > g || f.push(new Eu(a, [c], g, c, 3, li(c).trim(), d))
        }
        return f
    }

    function Hu(a, b, c) {
        for (var d = [], e = [], f = b.childNodes, g = f.length, h = 0, k = "", l = 0; l < g; l++) {
            var m = f[l];
            if (1 == m.nodeType || 3 == m.nodeType) {
                if (1 != m.nodeType) var n = null;
                else "BR" == m.tagName ? n = m : (n = c.getComputedStyle(m).getPropertyValue("display"), n = "inline" == n || "inline-block" == n ? null : m);
                n ? (d.length && k && e.push(new Eu(a, d, l - 1, n, 0, k, c)), d = [], h = l + 1, k = "") : (d.push(m), m = li(m).trim(), k += m && k ? " " + m : m)
            }
        }
        d.length && k && e.push(new Eu(a, d, h, b, 2, k, c));
        return e
    }

    function Iu(a, b) {
        return a.j - b.j
    };

    function Ju(a, b, c) {
        this.j = a;
        this.v = b.cc;
        this.A = b.je;
        this.l = b.articleStructure;
        this.m = c
    }

    function Ku(a) {
        return dc(a.A ? Hu(a.l, a.j, a.m) : [], a.v ? Gu(a.l, a.v, a.j, a.m) : []).filter(function(b) {
            var c = b.Jc.tagName;
            c ? (c = Du[c.toUpperCase()], b = null != c && c.Cb.contains(b.Kc)) : b = !1;
            return !b
        })
    };

    function Lu(a, b) {
        return Bt(function() {
            if (S(ar)) {
                for (var c = [], d = [], e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = ku(f);
                    if (g) {
                        if (!f.l && !f.A) {
                            var h = null;
                            try {
                                var k = ku(f);
                                if (k) {
                                    h = lu(f);
                                    Us(h, k, f.j());
                                    var l = h
                                } else l = null
                            } catch (aa) {
                                throw Ts(h), aa;
                            }
                            f.l = l
                        }(h = f.l) && d.push({
                            pg: f,
                            anchorElement: g,
                            Jf: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = rn(b), k = sn(b), e = 0; e < d.length; e++) h = d[e], f = h.pg, g = h.anchorElement, h = Mu(h.Jf, k, l), c.push(new uu(f, g, h));
                l = c
            } else {
                l = [];
                k = [];
                try {
                    for (var m = [], n = 0; n < a.length; n++) {
                        var p = a[n],
                            v = ku(p);
                        v && m.push({
                            Me: p,
                            anchorElement: v
                        })
                    }
                    for (p =
                        0; p < m.length; p++) {
                        v = k;
                        g = v.push;
                        var u = m[p],
                            A = u.anchorElement,
                            J = u.Me,
                            Y = lu(J);
                        try {
                            Us(Y, A, J.j()), h = Y
                        } catch (aa) {
                            throw Ts(Y), aa;
                        }
                        g.call(v, h)
                    }
                    c = rn(b);
                    d = sn(b);
                    for (g = 0; g < k.length; g++) e = Mu(k[g], d, c), f = m[g], l.push(new uu(f.Me, f.anchorElement, e))
                } finally {
                    for (c = 0; c < k.length; c++) Ts(k[c])
                }
            }
            return l
        }, b)
    }

    function Mu(a, b, c) {
        a = a.getBoundingClientRect();
        return new to(a.left + b, a.top + c, a.right - a.left)
    };

    function Nu(a, b, c) {
        this.j = a;
        this.A = b;
        this.v = c;
        this.l = !1;
        this.m = 0
    }
    Nu.prototype.next = function() {
        if (!this.l) {
            if (this.m >= this.v.length) var a = null;
            else {
                a = this.v[this.m++].zb[0];
                if (Sa(a) && 1 == a.nodeType) a = Ou(this, a, 0);
                else {
                    var b = this.j.document.createElement("div");
                    K(b, {
                        display: "none"
                    });
                    a.parentNode.insertBefore(b, a);
                    a = Ou(this, b, 3)
                }
                a = Lu([a], this.j)[0] || null
            }
            if (a) return a;
            this.l = !0
        }
        return null
    };

    function Ou(a, b, c) {
        return new gu(new Cu(b, c), new bu({}), null, !0, 2, [], null, a.j, null, null, null, a.A.l, null)
    }

    function Pu(a, b) {
        var c = Ku(b);
        c.sort(Iu);
        return new Nu(a, b, c)
    };

    function Qu(a) {
        this.l = a
    }
    Qu.prototype.j = function() {
        return this.l.next()
    };
    var Ru = {
            1: "0.5vp",
            2: "300px"
        },
        Su = {
            1: 700,
            2: 1200
        },
        Tu = {},
        Uu = (Tu[1] = {
            We: "3vp",
            Kd: "1vp",
            Ve: "0.3vp"
        }, Tu[2] = {
            We: "900px",
            Kd: "300px",
            Ve: "90px"
        }, Tu);

    function Vu(a, b, c, d, e, f) {
        this.m = a;
        this.A = b;
        this.B = c.sort(function(g, h) {
            return g.adCount - h.adCount
        });
        this.l = d;
        this.v = e;
        this.j = f
    }

    function Wu(a, b) {
        var c = {
            tc: a.m,
            ob: a.A
        };
        a = y(a.B);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.adCount <= b && (c = d.Jd);
        return c
    }

    function Xu(a, b, c) {
        var d = Yu(a),
            e = mn(a) || Su[d],
            f = void 0;
        c && (f = (c = (c = Zu(se(c, rp, 2), d)) ? F(c, pp, 7) : void 0) ? $u(c, e) : void 0);
        c = f;
        f = Yu(a);
        a = mn(a) || Su[f];
        var g = av(Uu[f].Kd, a);
        a = null === g ? bv(f, a) : new Vu(g, g, cv(g, 8), 8, .3, c);
        c = av(Uu[d].We, e);
        f = av(Uu[d].Kd, e);
        d = av(Uu[d].Ve, e);
        e = a.m;
        c && d && f && void 0 !== b && (e = .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Vu(e, e, cv(e, a.l), a.l, a.v, a.j)
    }

    function dv(a, b) {
        var c = Yu(a);
        a = mn(a) || Su[c];
        if (b = Zu(se(b, rp, 2), c))
            if (b = ev(b, a)) return b;
        return bv(c, a)
    }

    function fv(a) {
        var b = Yu(a);
        return bv(b, mn(a) || Su[b])
    }

    function gv(a, b, c) {
        var d = je(b, 2);
        b = F(b, rp, 1);
        var e = mn(c) || Su[Yu(c)],
            f;
        c = null != (f = av(null == b ? void 0 : D(b, 2), e)) ? f : a.m;
        var g;
        f = null != (g = av(null == b ? void 0 : D(b, 5), e)) ? g : a.A;
        var h;
        d = d ? [] : null != (h = hv(null == b ? void 0 : se(b, qp, 3), e)) ? h : a.B;
        var k;
        h = null != (k = null == b ? void 0 : D(b, 4)) ? k : a.l;
        var l;
        k = null != (l = null == b ? void 0 : ie(b, 6)) ? l : a.v;
        var m;
        l = null != (m = (null == b ? 0 : Yd(b, pp, 7)) ? $u(F(b, pp, 7), e) : null) ? m : a.j;
        return new Vu(c, f, d, h, k, l)
    }

    function Zu(a, b) {
        a = y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, D(c, 1) == b) return c;
        return null
    }

    function hv(a, b) {
        if (void 0 === a) return null;
        var c = [];
        a = y(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            var e = D(d, 1),
                f = av(D(d, 2), b);
            if ("number" !== typeof e || null === f) return null;
            c.push({
                adCount: e,
                Jd: {
                    tc: f,
                    ob: av(D(d, 3), b)
                }
            })
        }
        return c
    }

    function ev(a, b) {
        var c = av(D(a, 2), b),
            d = av(D(a, 5), b);
        if (null === c) return null;
        var e = D(a, 4);
        if (null == e) return null;
        var f = se(a, qp, 3);
        f = hv(f, b);
        if (null === f) return null;
        var g = F(a, pp, 7);
        b = g ? $u(g, b) : void 0;
        return new Vu(c, d, f, e, ie(a, 6), b)
    }

    function bv(a, b) {
        a = av(Ru[a], b);
        return new Vu(null === a ? Infinity : a, null, [], 3, null)
    }

    function av(a, b) {
        if (!a) return null;
        var c = parseFloat(a);
        return isNaN(c) ? null : t(a, "endsWith").call(a, "px") ? c : t(a, "endsWith").call(a, "vp") ? c * b : null
    }

    function Yu(a) {
        a = 900 <= hn(a);
        return qi() && !a ? 1 : 2
    }

    function cv(a, b) {
        if (4 > b) return [];
        var c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Jd: {
                tc: 2 * a,
                ob: 2 * a
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Jd: {
                tc: 3 * a,
                ob: 3 * a
            }
        }]
    }

    function $u(a, b) {
        return {
            Ce: av(D(a, 2), b) || 0,
            Be: D(a, 3) || 1,
            xb: av(D(a, 1), b) || 0
        }
    };

    function iv(a, b) {
        this.j = a;
        this.l = b
    }

    function jv(a, b, c) {
        return Wm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function kv(a) {
        if (!a.length) return null;
        var b = Xm(a.map(function(c) {
            return c.j
        }));
        a = a.reduce(function(c, d) {
            return c + d.l
        }, 0);
        return new iv(b, a)
    };

    function lv(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function mv(a, b) {
        var c = nv(b, ".google-auto-placed"),
            d = ov(b),
            e = pv(b),
            f = qv(b),
            g = rv(b),
            h = sv(b),
            k = nv(b, "div.googlepublisherpluginad"),
            l = nv(b, "html > ins.adsbygoogle"),
            m = [].concat(nv(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), nv(b, "body ins.adsbygoogle"));
        b = [];
        a = y([
            [a.kc, c],
            [a.hb, d],
            [a.Vf, e],
            [a.lc, f],
            [a.mc, g],
            [a.Sf, h],
            [a.Tf, k],
            [a.Wf, l]
        ]);
        for (c = a.next(); !c.done; c = a.next()) d = y(c.value), c = d.next().value, d = d.next().value, !1 === c ? b = b.concat(d) : m = m.concat(d);
        m = tv(m);
        a = tv(b);
        b = m.slice(0);
        m = y(a);
        for (a =
            m.next(); !a.done; a = m.next())
            for (a = a.value, c = 0; c < b.length; c++)(a.contains(b[c]) || b[c].contains(a)) && b.splice(c, 1);
        return b
    }

    function uv(a) {
        return !!a.className && Ib(a.className, "google-auto-placed")
    }

    function vv(a) {
        var b = lv(a);
        return b ? Yb(Zb(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function nv(a, b) {
        return ec(a.document.querySelectorAll(b))
    }

    function ov(a) {
        return nv(a, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")
    }

    function pv(a) {
        return nv(a, "ins.adsbygoogle[data-ad-format=autorelaxed]")
    }

    function qv(a) {
        return (vv(a) || nv(a, "div[id^=div-gpt-ad]")).concat(nv(a, "iframe[id^=google_ads_iframe]"))
    }

    function rv(a) {
        return nv(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
    }

    function sv(a) {
        return nv(a, "ins.adsbygoogle-ablated-ad-slot")
    }

    function tv(a) {
        var b = [];
        a = y(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };
    var wv = wm(453, mv),
        xv = wm(454, function(a, b) {
            var c = nv(b, ".google-auto-placed"),
                d = ov(b),
                e = pv(b),
                f = qv(b),
                g = rv(b),
                h = sv(b),
                k = nv(b, "div.googlepublisherpluginad");
            b = nv(b, "html > ins.adsbygoogle");
            return tv([].concat(!0 === a.kc ? c : [], !0 === a.hb ? d : [], !0 === a.Vf ? e : [], !0 === a.lc ? f : [], !0 === a.mc ? g : [], !0 === a.Sf ? h : [], !0 === a.Tf ? k : [], !0 === a.Wf ? b : []))
        });

    function yv(a, b, c) {
        this.m = a;
        this.j = b.slice(0);
        this.v = c.slice(0);
        this.l = null
    }

    function zv(a) {
        return a.j.map(function(b) {
            return b.box
        })
    }

    function Av(a) {
        return a.j.reduce(function(b, c) {
            return b + c.box.bottom - c.box.top
        }, 0)
    }

    function Bv(a, b, c) {
        var d = Cv(a);
        b = Dv(d, b, c);
        return new yv(a, d, b)
    }

    function Ev(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Cv(a) {
        var b = wv({
                hb: !1
            }, a),
            c = sn(a),
            d = rn(a);
        return b.map(function(e) {
            var f = e.getBoundingClientRect();
            return (e = uv(e)) || Ev(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Nk: e ? 1 : 0
            } : null
        }).filter(tf(function(e) {
            return null === e
        }))
    }

    function Dv(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Fv(a, b) : Zb(a, function(d) {
            return new iv(d.box, 1)
        })
    }

    function Fv(a, b) {
        a = Zb(a, function(g) {
            return new iv(g.box, 1)
        });
        for (var c = []; 0 < a.length;) {
            for (var d = a.pop(), e = !0; e;) {
                e = !1;
                for (var f = 0; f < a.length; f++)
                    if (jv(d, a[f], b)) {
                        d = kv([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Gv(a, b, c) {
        var d = uo(c, b);
        return !ac(a, function(e) {
            return Wm(e, d)
        })
    }

    function Hv(a, b, c, d, e) {
        e = e.ca;
        var f = uo(e, b),
            g = uo(e, c),
            h = uo(e, d);
        return !ac(a, function(k) {
            return Wm(k, g) || Wm(k, f) && !Wm(k, h)
        })
    }

    function Iv(a, b, c, d) {
        var e = zv(a);
        if (Gv(e, b, d.ca)) return !0;
        if (!Hv(e, b, c.Ce, c.xb, d)) return !1;
        var f = new iv(uo(d.ca, 0), 1);
        a = Yb(a.v, function(g) {
            return jv(g, f, c.xb)
        });
        b = $b(a, function(g, h) {
            return g + h.l
        }, 1);
        return 0 === a.length || b > c.Be ? !1 : !0
    };

    function Jv(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function Kv(a, b) {
        this.l = a;
        this.j = b
    }

    function Lv(a, b) {
        var c = new To,
            d = new Gn;
        b.forEach(function(e) {
            if (Ge(e, Ap, 1, Dp)) {
                e = Ge(e, Ap, 1, Dp);
                if (F(e, zp, 1) && F(e, zp, 1).Z() && F(e, zp, 2) && F(e, zp, 2).Z()) {
                    var f = Mv(a, F(e, zp, 1).Z()),
                        g = Mv(a, F(e, zp, 2).Z());
                    if (f && g)
                        for (f = y(Jv({
                                anchor: f,
                                position: D(F(e, zp, 1), 2)
                            }, {
                                anchor: g,
                                position: D(F(e, zp, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ta(g.anchor), g.position)
                }
                F(e, zp, 3) && F(e, zp, 3).Z() && (f = Mv(a, F(e, zp, 3).Z())) && c.set(Ta(f), D(F(e, zp, 3), 2))
            } else Ge(e, Bp, 2, Dp) ? Nv(a, Ge(e, Bp, 2, Dp), c) : Ge(e, yp, 3, Dp) && Ov(a, Ge(e,
                yp, 3, Dp), d)
        });
        return new Kv(c, d)
    }

    function Nv(a, b, c) {
        F(b, zp, 2) ? (b = F(b, zp, 2), (a = Mv(a, b.Z())) && c.set(Ta(a), D(b, 2))) : F(b, Vo, 1) && (a = Pv(a, F(b, Vo, 1))) && a.forEach(function(d) {
            d = Ta(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Ov(a, b, c) {
        F(b, Vo, 1) && (a = Pv(a, F(b, Vo, 1))) && a.forEach(function(d) {
            c.add(Ta(d))
        })
    }

    function Mv(a, b) {
        return (a = Pv(a, b)) && 0 < a.length ? a[0] : null
    }

    function Pv(a, b) {
        return (b = Ct(b)) ? b.query(a) : null
    };

    function Qv() {
        this.j = new r.Set
    }

    function Rv(a) {
        a = Sv(a);
        return a.has("all") || a.has("after")
    }

    function Tv(a) {
        a = Sv(a);
        return a.has("all") || a.has("before")
    }

    function Uv(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Vv(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.j.add(d)
        });
        return !1
    }

    function Vv(a) {
        var b = Sv(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function Sv(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new r.Set(a.split("|")) : new r.Set
    };

    function Wv(a) {
        return function(b) {
            return Lu(b, a)
        }
    }

    function Xv(a) {
        var b = mn(a);
        return b ? ab(Yv, b + rn(a)) : qf
    }

    function Zv(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return qf;
        var d = zv(c || Bv(b));
        return function(e) {
            return Gv(d, a, e.ca)
        }
    }

    function $v(a, b, c, d) {
        if (0 > a || 0 > b.Ce || 0 > b.Be || 0 > b.xb) throw Error("ama::ead:nd");
        return Infinity === a ? qf : function(e) {
            return Iv(d || Bv(c, b.xb), a, b, e)
        }
    }

    function aw(a) {
        if (!a.length) return qf;
        var b = new Lo(a);
        return function(c) {
            return b.contains(c.ib)
        }
    }

    function bw(a) {
        return function(b) {
            b = y(b.sc);
            for (var c = b.next(); !c.done; c = b.next())
                if (-1 < a.indexOf(c.value)) return !1;
            return !0
        }
    }

    function cw(a) {
        return a.length ? function(b) {
            var c = b.sc;
            return a.some(function(d) {
                return -1 < c.indexOf(d)
            })
        } : rf
    }

    function dw(a, b) {
        if (0 >= a) return rf;
        var c = nn(b).scrollHeight - a;
        return function(d) {
            return d.ca.j <= c
        }
    }

    function ew(a) {
        var b = {};
        a && a.forEach(function(c) {
            b[c] = !0
        });
        return function(c) {
            return !b[D(c.Dc, 2) || 0]
        }
    }

    function fw(a) {
        return a.length ? function(b) {
            return t(a, "includes").call(a, D(b.Dc, 1) || 0)
        } : rf
    }

    function gw(a, b) {
        var c = Lv(a, b);
        return function(d) {
            var e = d.Z();
            d = It[d.W.j()];
            var f = Ta(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(Ta(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(Ta(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function hw() {
        var a = new Qv;
        return function(b) {
            var c = b.Z();
            b = It[b.W.j()];
            a: switch (b) {
                case 1:
                    var d = Rv(c.previousElementSibling) || Tv(c);
                    break a;
                case 4:
                    d = Rv(c) || Tv(c.nextElementSibling);
                    break a;
                case 2:
                    d = Tv(c.firstElementChild);
                    break a;
                case 3:
                    d = Rv(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Uv(a, c, b))
        }
    }

    function Yv(a, b) {
        return b.ca.j >= a
    }

    function iw(a, b, c) {
        c = c.ca.l;
        return a <= c && c <= b
    };

    function jw(a, b) {
        this.m = a;
        this.l = b
    }
    jw.prototype.j = function() {
        for (var a = Xv(this.m), b = this.l.next(); b;) {
            if (a(b)) return b;
            b = this.l.next()
        }
        return null
    };

    function kw(a, b) {
        this.l = a;
        this.m = b
    }
    kw.prototype.j = function() {
        var a = new hq;
        var b = F(this.m.l, Vo, 1);
        a = te(a, 1, b);
        a = E(a, 2, 2);
        a = E(a, 8, 1);
        a = ou([a], this.l);
        return Lu(a, this.l)[0] || null
    };

    function lw(a) {
        var b = 0;
        a.forEach(function(c) {
            return b = Math.max(b, c.getBoundingClientRect().width)
        });
        return function(c) {
            return c.getBoundingClientRect().width > .5 * b
        }
    }

    function mw(a) {
        var b = mn(a) || 0;
        return function(c) {
            return c.getBoundingClientRect().height >= .75 * b
        }
    };

    function nw(a) {
        this.j = new Bn;
        this.l = a
    }

    function ow(a, b) {
        return ac(b.zb, function(c) {
            return pw(a, c)
        })
    }

    function pw(a, b) {
        if (!b) return !1;
        var c = Ta(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = pw(a, b.parentNode);
        a.j.set(c, b);
        return b
    };

    function qw(a, b) {
        this.v = a;
        this.j = [];
        this.l = [];
        this.m = b
    };

    function rw(a, b) {
        a = sw(a, b);
        var c = new nw(b);
        return Fo(a, function(d) {
            var e = {
                    Ue: c
                },
                f = void 0 === e ? {} : e,
                g = void 0 === f.Uf ? !1 : f.Uf;
            e = void 0 === f.gg ? 3 : f.gg;
            f = void 0 === f.Ue ? null : f.Ue;
            var h = Ku(d);
            d = g;
            g = f;
            d = void 0 === d ? !1 : d;
            e = void 0 === e ? 3 : e;
            g = void 0 === g ? null : g;
            if (2 > e) throw Error("minGroupSize should be at least 2, found " + e);
            h = h.slice(0);
            h.sort(Iu);
            f = [];
            d = new qw(d, g);
            h = y(h);
            for (g = h.next(); !g.done; g = h.next()) {
                g = g.value;
                g = {
                    zc: g,
                    nc: 51 > g.v.length ? !1 : null != d.m ? !ow(d.m, g) : !0
                };
                if (d.v || g.nc) {
                    if (d.j.length) {
                        var k = d.j[d.j.length -
                            1].zc;
                        b: {
                            var l = k.U();
                            var m = k.zb[k.zb.length - 1];k = g.zc.zb[0];
                            if (m && k) {
                                var n = m.parentElement,
                                    p = k.parentElement;
                                if (n && p && n == p)
                                    for (n = 0, m = m.nextSibling; 10 > n && m;) {
                                        if (m == k) {
                                            l = !0;
                                            break b
                                        }
                                        if (yu(l, m)) break;
                                        m = m.nextSibling;
                                        n++
                                    }
                            }
                            l = !1
                        }
                    } else l = !0;
                    l ? (d.j.push(g), g.nc && d.l.push(g.zc)) : (d.j = [g], d.l = g.nc ? [g.zc] : [])
                }
                if (d.l.length >= e) {
                    if (1 >= d.l.length) g = null;
                    else {
                        for (g = d.l[1]; d.j.length && !d.j[0].nc;) d.j.shift();
                        d.j.shift();
                        d.l.shift()
                    }
                    g && f.push(g)
                }
            }
            return f
        })
    }

    function sw(a, b) {
        var c = new Bn;
        a.forEach(function(d) {
            var e = Ct(F(d, Vo, 1));
            if (e) {
                var f = e.toString();
                Dn(c, f) || c.set(f, {
                    articleStructure: d,
                    mf: e,
                    cc: null,
                    je: !1
                });
                e = c.get(f);
                (d = (d = F(d, Vo, 2)) ? D(d, 7) : null) ? e.cc = e.cc ? e.cc + "," + d : d: e.je = !0
            }
        });
        return Fn(c).map(function(d) {
            var e = d.mf.query(b.document);
            return e.length ? new Ju(e[0], d, b) : null
        }).filter(function(d) {
            return null != d
        })
    };

    function tw(a, b) {
        b = sw(b, a);
        var c = b.map(function(d) {
            return d.j
        });
        b = b.filter(function(d) {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(function(d) {
            return lw(c)(d.j)
        }).filter(function(d) {
            return mw(a)(d.j)
        });
        b.sort(function(d, e) {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function uw(a, b, c) {
        if (Ee(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new hq;
                var e = new Vo;
                e = E(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = te(d, 1, e);
                d = E(d, 2, 2);
                d = E(d, 8, 1);
                d = ou([d], a);
                d = Lu(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = vw(c);b = tw(a, b);b = y(b);
            for (e = b.next(); !e.done; e = b.next()) {
                b: {
                    d = a;e = e.value;
                    var f = c;
                    switch (f) {
                        case 1:
                            d = new kw(d, e);
                            break b;
                        case 2:
                            d = new Qu(Pu(d, e));
                            break b;
                        case 3:
                            d = new jw(d, Pu(d, e));
                            break b;
                        default:
                            throw Error("Unknown position: " +
                                f);
                    }
                }
                if (d = d.j()) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    }

    function vw(a) {
        if (Ee(a, 2)) return 3;
        switch (Fe(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error("Unknown player position: " + Fe(a, 1));
        }
    };
    var ww = x(["window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;"]);

    function xw(a) {
        this.j = a
    }

    function yw(a, b, c, d, e) {
        if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return Ro("Player already created");
        var f = a.document,
            g = f.createElement("div");
        g.id = "google-auto-placed-read-aloud-player";
        K(g, {
            padding: "5px"
        });
        var h = f.createElement("script"),
            k = ww[0],
            l = Mf();
        k = l ? l.createScript(k) : k;
        h.textContent = Pf(new Of(k, Nf));
        Xg(h);
        g.appendChild(h);
        zw(f, g, of ("https://www.google-analytics.com/analytics.js"));
        zw(f, g, of ("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
        f = f.createElement("google-read-aloud-player");
        f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
        f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
        f.setAttribute("data-url", c.url);
        f.setAttribute("data-locale", d);
        f.setAttribute("data-no-settings-screen", "");
        e && (null != D(e, 1) && 0 != Fe(e, 1) && f.setAttribute("data-docking-begin-trigger", Aw[Fe(e, 1)]), null != D(e, 2) && f.setAttribute("data-experiment", G(e, 2)));
        g.appendChild(f);
        xu(b, g);
        return Po(new xw(a.document.getElementsByTagName("google-read-aloud-player")[0]))
    }

    function zw(a, b, c) {
        a = a.createElement("script");
        Yg(a, Yf(nf(c)));
        a.setAttribute("async", "true");
        b.appendChild(a)
    }
    var Bw = {},
        Aw = (Bw[1] = "out-of-view", Bw);

    function Cw() {
        var a = this;
        this.promise = new r.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Dw() {
        var a = new Cw;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Ew(a, b, c) {
        c = void 0 === c ? function() {} : c;
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        var d = b[a];
        if (d) return d;
        d = Dw();
        b[a] = d;
        c();
        return d
    }

    function Fw(a, b, c) {
        return Ew(a, b, function() {
            xi(b.document, c)
        }).promise
    };

    function Gw(a) {
        this.j = a
    }

    function Hw(a, b) {
        a = a.j.then(function(c) {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        tm.Aa(956, a)
    }

    function Iw(a, b, c, d) {
        a = Fw(7, a, c).then(function(e) {
            e.init(b);
            e.handleAdConfig({
                preloadAdBreaks: null != D(d, 1, !1) && Ee(d, 1) ? "auto" : "on",
                sound: "on"
            });
            return e
        });
        tm.Aa(915, a);
        return new Gw(a)
    };

    function Jw(a, b, c) {
        this.m = a;
        this.v = b;
        this.j = c;
        this.l = !1
    }

    function Kw(a) {
        var b = a.m.j;
        b.addEventListener("firstplay", function() {
            if (!a.l) {
                a.l = !0;
                b.pause();
                var c = performance.now();
                Hw(a.v, function() {
                    b.play();
                    au(a.j, "preroll", {
                        Rk: performance.now() - c
                    })
                });
                au(a.j, "play", {})
            }
        })
    };

    function Lw(a, b, c, d, e, f, g) {
        this.v = a;
        this.j = new $t(a, b, d);
        this.D = c;
        this.l = d;
        this.A = e;
        this.C = f;
        this.G = g;
        this.m = this.B = null
    }

    function Mw(a) {
        var b = uw(a.v, a.D, F(a.l, Mp, 2));
        if (b) {
            var c = !!a.A.Rb && Nw(a);
            if (c) {
                var d;
                a.B = Iw(a.v, a.C, a.A.Rb, (null == (d = F(a.l, Kp, 3)) ? void 0 : F(d, Jp, 2)) || new Jp)
            }
            d = yw(a.v, b, a.A, a.G, F(a.l, Np, 4) || void 0);
            null != d.j ? (a.m = d.j.value, a.m.j.addEventListener("firstview", function() {
                au(a.j, "view", {})
            }), c && Kw(new Jw(a.m, a.B, a.j)), au(a.j, "place", {
                sts: "ok",
                pp: b.ca.j
            })) : au(a.j, "place", {
                sts: "wf"
            })
        } else au(a.j, "place", {
            sts: "pf"
        })
    }

    function Nw(a) {
        return (a = F(a.l, Kp, 3)) ? se(a, Ip, 1).some(function(b) {
            return 1 === Fe(b, 1)
        }) : !1
    }

    function Ow(a, b, c, d, e, f, g) {
        return 0 == d.length ? Ro("No ArticleStructure found") : F(c, Mp, 2) ? Po(new Lw(a, b, d, c, e, f, g ? g : "en")) : Ro("No AudioSenseConfig.PlacementConfig found")
    };

    function Pw(a, b, c) {
        this.win = a;
        this.m = b;
        this.j = c;
        this.l = Si()
    }

    function Qw(a, b, c) {
        var d = 0 === a.l ? F(a.j, Qp, 8) : F(a.j, Qp, 9),
            e, f = a.m,
            g = Object,
            h = g.assign,
            k = mn(a.win),
            l = (null == (e = F(a.j, Rp, 5)) ? void 0 : ze(e, 1)) || 0;
        a: switch (null == d ? void 0 : d.j()) {
            case 1:
                d = "AUTO_PROSE_TOP_ANCHOR";
                break a;
            case 2:
                d = "AUTO_PROSE_BOTTOM_ANCHOR";
                break a;
            default:
                d = "UNKNOWN_POSITION"
        }
        a: switch (a.l) {
            case 0:
                e = "DESKTOP";
                break a;
            case 2:
                e = "MOBILE";
                break a;
            default:
                e = "OTHER_VIEWPORT"
        }
        Zt(f, St, h.call(g, {}, c, {
            evt: b,
            vh: k,
            eid: l,
            pos: d,
            vpt: e,
            url: a.win.location.href
        }))
    };
    var Rw = {},
        Sw = {},
        Tw = {},
        Uw = {},
        Vw = {};

    function Ww() {
        throw Error("Do not instantiate directly");
    }
    Ww.prototype.ce = null;
    Ww.prototype.ya = function() {
        return this.content
    };
    Ww.prototype.toString = function() {
        return this.content
    };

    function Xw(a) {
        if (a.de !== Rw) throw Error("Sanitized content was not of kind HTML.");
        return Eg(a.toString())
    }

    function Yw() {
        Ww.call(this)
    }
    ib(Yw, Ww);
    Yw.prototype.de = Rw;

    function Zw(a, b) {
        return null != a && a.de === b
    };

    function $w(a) {
        if (null != a) switch (a.ce) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function ax(a) {
        return Zw(a, Rw) ? a : a instanceof Bg ? bx(Cg(a).toString()) : a instanceof Bg ? bx(Cg(a).toString()) : bx(String(String(a)).replace(cx, dx), $w(a))
    }
    var bx = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.ce = d);
            return c
        }
    }(Yw);

    function ex(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function fx(a) {
        return Zw(a, Rw) ? String(String(a.ya()).replace(gx, "").replace(hx, "&lt;")).replace(ix, dx) : String(a).replace(cx, dx)
    }

    function jx(a) {
        function b(d, e, f) {
            for (var g = Math.min(e.length - f, d.length), h = 0; h < g; h++) {
                var k = e[f + h];
                if (d[h] !== ("A" <= k && "Z" >= k ? k.toLowerCase() : k)) return !1
            }
            return !0
        }
        a = String(a);
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function kx(a) {
        if (null == a) return " null ";
        if (Zw(a, Sw)) return a.ya();
        if (a instanceof Of || a instanceof Of) return Pf(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(lx, mx) + "'"
        }
    }

    function W(a) {
        Zw(a, Vw) ? a = ex(a.ya()) : null == a ? a = "" : a instanceof mg ? a = ex(ng(a)) : a instanceof mg ? a = ex(ng(a)) : a instanceof yg ? a = ex(zg(a)) : a instanceof yg ? a = ex(zg(a)) : (a = String(a), a = nx.test(a) ? a : "zSoyz");
        return a
    }
    var ox = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function dx(a) {
        return ox[a]
    }
    var px = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function mx(a) {
        return px[a]
    }
    var qx = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function rx(a) {
        return qx[a]
    }
    var cx = /[\x00\x22\x26\x27\x3c\x3e]/g,
        ix = /[\x00\x22\x27\x3c\x3e]/g,
        sx = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        tx = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        lx = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        ux = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        nx = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        vx =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function wx(a) {
        return String(a).replace(ux, rx)
    }
    var gx = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        hx = /</g;
    var xx = void 0;

    function yx() {
        void 0 === xx && (xx = 18);
        return xx
    }
    var zx = void 0;

    function Ax() {
        void 0 === zx && (zx = 18);
        return zx
    }

    function Bx(a) {
        a = void 0 === a ? "white" : a;
        return bx('<svg width="' + fx(Ax()) + '" height="' + fx(yx()) + '" viewBox="0 0 ' + fx(yx()) + " " + fx(Ax()) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (Zw(a, Rw) ? String(String(a.ya()).replace(gx, "").replace(hx,
            "&lt;")).replace(tx, dx) : String(a).replace(sx, dx)) + " /></svg>")
    };

    function Cx(a, b, c, d, e, f, g, h, k, l) {
        this.Ia = a;
        this.l = b;
        this.v = c;
        this.j = d;
        this.B = e;
        this.host = f;
        this.language = g;
        this.A = h;
        this.m = k;
        this.C = l
    }

    function Dx(a, b, c) {
        var d = a.Ia.contentWindow.google.search.cse.element.getElement("auto-rs-prose");
        c = {
            rsToken: c,
            afsExperimentId: a.m
        };
        a.C && (c.useStandardProseAdLoad = "1");
        d.execute(b, void 0, c)
    }
    Cx.prototype.init = function() {
        this.Ia.setAttribute("id", "prose-iframe");
        this.Ia.setAttribute("width", "100%");
        this.Ia.setAttribute("height", "100%");
        var a = this.Ia,
            b = og({
                "box-sizing": "border-box",
                border: "unset"
            });
        a.style.cssText = ng(b);
        a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
        var c = hg(a) || kg;
        a = this.v;
        b = this.j;
        var d = this.B,
            e = this.host,
            f = this.A.replace("${website}", t(this.host, "startsWith").call(this.host, "www.") ? this.host.slice(4) : this.host),
            g = bx;
        Zw(c, Tw) ||
            Zw(c, Uw) ? c = wx(c) : c instanceof cg ? c = wx(eg(c)) : c instanceof cg ? c = wx(eg(c)) : c instanceof Qf ? c = wx(Xf(c).toString()) : c instanceof Qf ? c = wx(Xf(c).toString()) : (c = String(c), c = vx.test(c) ? c.replace(ux, rx) : "about:invalid#zSoyz");
        a = g('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}</style><div class="prose-container"><img class="cse-favicon" src="' +
            fx(c) + '" alt="' + fx(e) + ' icon"><p class="cse-header"><strong>' + ax(f) + '</strong></p><div class="gcse-search" data-gname="' + fx(a) + '" data-adclient="' + fx(b) + '" data-adchannel="' + fx(d) + '" data-as_sitesearch="' + fx(e) + '" data-personalizedAds="false"></div></div>');
        a = Xw(a);
        b = {
            style: og({
                margin: 0
            })
        };
        d = {
            src: $f( of ("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                cxId: this.l,
                lang: this.language
            })
        };
        e = {};
        f = {};
        for (k in d) Object.prototype.hasOwnProperty.call(d, k) && (f[k] = d[k]);
        for (var h in e) Object.prototype.hasOwnProperty.call(e,
            h) && (f[h] = e[h]);
        var k = Ig("script", f);
        k = Fg("body", b, [a, k]);
        this.Ia.srcdoc = Cg(k)
    };

    function Ex(a) {
        this.j = dn(a).floatingAdsStacking
    }

    function Fx(a, b) {
        return new Gx(a, b)
    }

    function Hx(a) {
        a = Ci(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    Ex.prototype.addListener = function(a) {
        this.j.maxZIndexListeners.push(a);
        a(Hx(this))
    };

    function Ix(a) {
        var b = Hx(a);
        Xb(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    }

    function Gx(a, b) {
        this.l = a;
        this.m = b;
        this.j = null
    }

    function Jx(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.m,
                d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            Ix(b);
            a.j = d
        }
    }

    function Kx(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Ix(b);
            a.j = null
        }
    };
    var Lx = ["-webkit-text-fill-color"];

    function Mx(a) {
        K(a, Nx())
    }

    function Nx() {
        var a = {
            "animation-delay": "0s",
            "animation-direction": "normal",
            "animation-duration": "0s",
            "animation-fill-mode": "none",
            "animation-iteration-count": "1",
            "animation-name": "none",
            "animation-play-state": "running",
            "animation-timing-function": "ease",
            "background-attachment": "scroll",
            "background-blend-mode": "normal",
            "background-clip": "border-box",
            "background-color": "rgba(0, 0, 0, 0)",
            "background-image": "none",
            "background-origin": "padding-box",
            "background-position": "0% 0%",
            "background-repeat": "repeat",
            "background-size": "auto",
            "border-bottom-color": "rgb(0, 0, 0)",
            "border-bottom-left-radius": "0px",
            "border-bottom-right-radius": "0px",
            "border-bottom-style": "none",
            "border-bottom-width": "0px",
            "border-collapse": "separate",
            "border-image-outset": "0px",
            "border-image-repeat": "stretch",
            "border-image-slice": "100%",
            "border-image-source": "none",
            "border-image-width": "1",
            "border-left-color": "rgb(0, 0, 0)",
            "border-left-style": "none",
            "border-left-width": "0px",
            "border-right-color": "rgb(0, 0, 0)",
            "border-right-style": "none",
            "border-right-width": "0px",
            "border-top-color": "rgb(0, 0, 0)",
            "border-top-left-radius": "0px",
            "border-top-right-radius": "0px",
            "border-top-style": "none",
            "border-top-width": "0px",
            bottom: "auto",
            "box-shadow": "none",
            "box-sizing": "content-box",
            "break-after": "auto",
            "break-before": "auto",
            "break-inside": "auto",
            "caption-side": "top",
            clear: "none",
            clip: "auto",
            color: "rgb(0, 0, 0)",
            content: "normal",
            cursor: "auto",
            direction: "ltr",
            display: "inline",
            "empty-cells": "show",
            "float": "none",
            "font-family": "Times",
            "font-kerning": "auto",
            "font-optical-sizing": "auto",
            "font-size": "16px",
            "font-stretch": "100%",
            "font-style": "normal",
            "font-variant": "normal",
            "font-variant-ligatures": "normal",
            "font-variant-caps": "normal",
            "font-variant-numeric": "normal",
            "font-variant-east-asian": "normal",
            "font-weight": "400",
            height: "auto",
            "image-rendering": "auto",
            isolation: "auto",
            "justify-items": "normal",
            "justify-self": "auto",
            left: "auto",
            "letter-spacing": "normal",
            "line-height": "normal",
            "list-style-image": "none",
            "list-style-position": "outside",
            "list-style-type": "disc",
            "margin-bottom": "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            "margin-top": "0px",
            "max-height": "none",
            "max-width": "none",
            "min-height": "0px",
            "min-width": "0px",
            "mix-blend-mode": "normal",
            "object-fit": "fill",
            "object-position": "50% 50%",
            "offset-distance": "0px",
            "offset-path": "none",
            "offset-rotate": "auto 0deg",
            opacity: "1",
            orphans: "2",
            "outline-color": "rgb(0, 0, 0)",
            "outline-offset": "0px",
            "outline-style": "none",
            "outline-width": "0px",
            "overflow-anchor": "auto",
            "overflow-wrap": "normal",
            "overflow-x": "visible",
            "overflow-y": "visible",
            "padding-bottom": "0px",
            "padding-left": "0px",
            "padding-right": "0px",
            "padding-top": "0px",
            "pointer-events": "auto",
            position: "static",
            resize: "none",
            right: "auto",
            "scroll-behavior": "auto",
            speak: "normal",
            "table-layout": "auto",
            "tab-size": "8",
            "text-align": "start",
            "text-align-last": "auto",
            "text-decoration": "none solid rgb(0, 0, 0)",
            "text-decoration-line": "none",
            "text-decoration-style": "solid",
            "text-decoration-color": "rgb(0, 0, 0)",
            "text-decoration-skip-ink": "auto",
            "text-underline-position": "auto",
            "text-indent": "0px",
            "text-rendering": "auto",
            "text-shadow": "none",
            "text-size-adjust": "auto",
            "text-overflow": "clip",
            "text-transform": "none",
            top: "auto",
            "touch-action": "auto",
            "transition-delay": "0s",
            "transition-duration": "0s",
            "transition-property": "all",
            "transition-timing-function": "ease",
            "unicode-bidi": "normal",
            "vertical-align": "baseline",
            visibility: "visible",
            "white-space": "normal",
            widows: "2",
            width: "auto",
            "will-change": "auto",
            "word-break": "normal",
            "word-spacing": "0px",
            "z-index": "auto",
            zoom: "1",
            "-webkit-appearance": "none",
            "backface-visibility": "visible",
            "-webkit-border-horizontal-spacing": "0px",
            "-webkit-border-image": "none",
            "-webkit-border-vertical-spacing": "0px",
            "-webkit-box-align": "stretch",
            "-webkit-box-decoration-break": "slice",
            "-webkit-box-direction": "normal",
            "-webkit-box-flex": "0",
            "-webkit-box-ordinal-group": "1",
            "-webkit-box-orient": "horizontal",
            "-webkit-box-pack": "start",
            "-webkit-box-reflect": "none",
            "column-count": "auto",
            "column-gap": "normal",
            "column-rule-color": "rgb(0, 0, 0)",
            "column-rule-style": "none",
            "column-rule-width": "0px",
            "column-span": "none",
            "column-width": "auto",
            "backdrop-filter": "none",
            "align-content": "normal",
            "align-items": "normal",
            "align-self": "auto",
            "flex-basis": "auto",
            "flex-grow": "0",
            "flex-shrink": "1",
            "flex-direction": "row",
            "flex-wrap": "nowrap",
            "justify-content": "normal",
            "-webkit-font-smoothing": "auto",
            "grid-auto-columns": "auto",
            "grid-auto-flow": "row",
            "grid-auto-rows": "auto",
            "grid-column-end": "auto",
            "grid-column-start": "auto",
            "grid-template-areas": "none",
            "grid-template-columns": "none",
            "grid-template-rows": "none",
            "grid-row-end": "auto",
            "grid-row-start": "auto",
            "row-gap": "normal",
            "-webkit-highlight": "none",
            hyphens: "manual",
            "-webkit-hyphenate-character": "auto",
            "-webkit-line-break": "auto",
            "-webkit-line-clamp": "none",
            "-webkit-locale": "auto",
            "-webkit-margin-before-collapse": "collapse",
            "-webkit-margin-after-collapse": "collapse",
            "-webkit-mask-box-image": "none",
            "-webkit-mask-box-image-outset": "0px",
            "-webkit-mask-box-image-repeat": "stretch",
            "-webkit-mask-box-image-slice": "0 fill",
            "-webkit-mask-box-image-source": "none",
            "-webkit-mask-box-image-width": "auto",
            "-webkit-mask-clip": "border-box",
            "-webkit-mask-composite": "source-over",
            "-webkit-mask-image": "none",
            "-webkit-mask-origin": "border-box",
            "-webkit-mask-position": "0% 0%",
            "-webkit-mask-repeat": "repeat",
            "-webkit-mask-size": "auto",
            order: "0",
            perspective: "none",
            "perspective-origin": "0px 0px",
            "-webkit-print-color-adjust": "economy",
            "-webkit-rtl-ordering": "logical",
            "shape-outside": "none",
            "shape-image-threshold": "0",
            "shape-margin": "0px",
            "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0.4)",
            "-webkit-text-combine": "none",
            "-webkit-text-decorations-in-effect": "none",
            "-webkit-text-emphasis-color": "rgb(0, 0, 0)",
            "-webkit-text-emphasis-position": "over right",
            "-webkit-text-emphasis-style": "none",
            "-webkit-text-orientation": "vertical-right",
            "-webkit-text-security": "none",
            "-webkit-text-stroke-color": "rgb(0, 0, 0)",
            "-webkit-text-stroke-width": "0px",
            transform: "none",
            "transform-origin": "0px 0px",
            "transform-style": "flat",
            "-webkit-user-drag": "auto",
            "-webkit-user-modify": "read-only",
            "user-select": "auto",
            "-webkit-writing-mode": "horizontal-tb",
            "-webkit-app-region": "none",
            "buffered-rendering": "auto",
            "clip-path": "none",
            "clip-rule": "nonzero",
            mask: "none",
            filter: "none",
            "flood-color": "rgb(0, 0, 0)",
            "flood-opacity": "1",
            "lighting-color": "rgb(255, 255, 255)",
            "stop-color": "rgb(0, 0, 0)",
            "stop-opacity": "1",
            "color-interpolation": "srgb",
            "color-interpolation-filters": "linearrgb",
            "color-rendering": "auto",
            fill: "rgb(0, 0, 0)",
            "fill-opacity": "1",
            "fill-rule": "nonzero",
            "marker-end": "none",
            "marker-mid": "none",
            "marker-start": "none",
            "mask-type": "luminance",
            "shape-rendering": "auto",
            stroke: "none",
            "stroke-dasharray": "none",
            "stroke-dashoffset": "0px",
            "stroke-linecap": "butt",
            "stroke-linejoin": "miter",
            "stroke-miterlimit": "4",
            "stroke-opacity": "1",
            "stroke-width": "1px",
            "alignment-baseline": "auto",
            "baseline-shift": "0px",
            "dominant-baseline": "auto",
            "text-anchor": "start",
            "writing-mode": "horizontal-tb",
            "vector-effect": "none",
            "paint-order": "normal",
            d: "none",
            cx: "0px",
            cy: "0px",
            x: "0px",
            y: "0px",
            r: "0px",
            rx: "auto",
            ry: "auto",
            "caret-color": "rgb(0, 0, 0)",
            "line-break": "auto"
        };
        Xb(Lx, function(b) {
            delete a[b]
        });
        return a
    };

    function Ox(a, b) {
        var c = a.document.createElement("div");
        Mx(c);
        var d = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        b = {
            Gd: c,
            shadowRoot: d
        };
        a.document.body.appendChild(b.Gd);
        return b
    }

    function Px(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error("Element (" + a + ") does not exist");
        return b
    }

    function Qx(a, b) {
        var c = new Ln(b.O);
        Pn(b, !0, function() {
            return void O(c, !0)
        });
        Pn(b, !1, function() {
            a.setTimeout(function() {
                b.O || O(c, !1)
            }, 700)
        });
        return Qn(c)
    };
    var Rx = void 0;

    function Sx(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new Tx(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function Tx(a, b) {
        N.call(this);
        var c = this;
        this.J = a;
        this.j = b;
        this.stack = [];
        this.l = 1E9 * Math.random() >>> 0;
        this.v = 0;
        this.m = function(d) {
            (d = Ux(c, d.state)) ? Vx(c, Wx(c, d.googNavStackStateId + .5)): Vx(c, c.stack.splice(0, c.stack.length))
        }
    }
    z(Tx, N);
    Tx.prototype.pushEvent = function() {
        var a = this,
            b = {
                googNavStackId: this.l,
                googNavStackStateId: this.v++
            },
            c = new r.Promise(function(d) {
                a.stack.push({
                    Bg: d,
                    re: b
                })
            });
        this.j.pushState(b, "");
        return {
            navigatedBack: c,
            triggerNavigateBack: function() {
                var d = Wx(a, b.googNavStackStateId),
                    e;
                if (e = 0 < d.length) {
                    e = d[0].re;
                    var f = Ux(a, a.j.state);
                    e = f && f.googNavStackId === e.googNavStackId && f.googNavStackStateId === e.googNavStackStateId
                }
                e && a.j.go(-d.length);
                Vx(a, d)
            }
        }
    };
    Tx.prototype.init = function() {
        this.J.addEventListener("popstate", this.m)
    };

    function Wx(a, b) {
        b = gc(a.stack, b, function(c, d) {
            return c - d.re.googNavStackStateId
        });
        if (0 <= b) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }

    function Vx(a, b) {
        var c = {};
        for (c.Va = b.length - 1; 0 <= c.Va; c = {
                Va: c.Va,
                Gc: c.Gc
            }, --c.Va) c.Gc = 0 === c.Va, a.J.requestAnimationFrame(function(d) {
            return function() {
                return void b[d.Va].Bg({
                    isFinal: d.Gc
                })
            }
        }(c))
    }

    function Ux(a, b) {
        return b ? b.googNavStackId === a.l ? b : null : null
    }
    Tx.prototype.M = function() {
        this.J.removeEventListener("popstate", this.m);
        N.prototype.M.call(this)
    };

    function Xx(a) {
        N.call(this);
        this.m = a;
        this.l = new Wn;
        this.j = null
    }
    z(Xx, N);

    function Yx(a) {
        return (a = Sx(a)) ? new Xx(a) : null
    }

    function Zx(a) {
        if (!a.j) {
            var b = a.m.pushEvent(),
                c = b.navigatedBack;
            a.j = b.triggerNavigateBack;
            c.then(function() {
                a.j && !a.A && (a.j = null, Xn(a.l))
            })
        }
    };

    function $x(a, b, c, d) {
        N.call(this);
        this.win = a;
        this.v = b;
        this.j = new Ln(!1);
        this.l = Qx(a, this.j);
        Pn(this.l, !0, function() {
            Co(c);
            Jx(d)
        });
        Pn(this.l, !1, function() {
            Eo(c);
            Kx(d)
        })
    }
    z($x, N);

    function ay(a, b, c) {
        var d = Fx(new Ex(a), c.zIndex - 1),
            e = Ox(a, c.Wc),
            f = e.shadowRoot,
            g, h = f.appendChild,
            k = new Zh(a.document);
        var l = c.bd;
        var m = null != (g = c.Uk) ? g : !0;
        g = c.Yc || !1;
        var n = c.Sc,
            p = c.Pk || "",
            v = c.zIndex;
        m ? (void 0 === Rx && (Rx = 20), m = Rx) : m = 0;
        l = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(v) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            W(l) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + W(m) + "px; transition: transform " + W(.5) + "s ease-in-out;" + (g ? "left: 0; border-top-right-radius: " + W(m) + "px; border-bottom-right-radius: " + W(m) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + W(m) + "px; border-bottom-left-radius: " + W(m) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {height: 24px;}.hd-control-button {border: none; background: none; cursor: pointer;}#hd-back-arrow-button {" +
            (g ? "float: right;" : "float: left;") + "}#hd-close-button {" + (g ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' + fx(p) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' +
            fx(n) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        l = bx(l);
        h.call(f, pi(k, Xw(l)));
        h = Px("hd-content-container", f);
        h.appendChild(b);
        mc(a.document.body.offsetHeight);
        b = {
            Db: Px("hd-drawer-container", f),
            qd: Px("hd-modal-background", f),
            Tc: h,
            Af: Px("hd-close-button", f),
            Ok: Px("hd-back-arrow-button", f),
            Hd: e
        };
        d = new $x(a, b, Bo(a), d);
        d.init();
        (c.hc || void 0 === c.hc) && by(d);
        if (c.Oa)
            if (a = Yx(a)) cy(d, a, c.rd);
            else {
                var u;
                null == (u = c.rd) || u.call(c, Error("Unable to create closeNavigator"))
            }
        return d
    }
    q = $x.prototype;
    q.show = function(a) {
        var b = this;
        a = void 0 === a ? {} : a;
        a = void 0 === a.ec ? !1 : a.ec;
        if (this.A) throw Error("Cannot show drawer after disposal");
        dy(this).Db.classList.add("hd-revealed");
        O(this.j, !0);
        a && Pn(this.l, !1, function() {
            b.xa()
        })
    };
    q.collapse = function() {
        dy(this).Db.classList.remove("hd-revealed");
        O(this.j, !1)
    };
    q.isVisible = function() {
        return this.l
    };
    q.init = function() {
        ey(this)
    };

    function ey(a) {
        var b = dy(a),
            c = b.Af;
        b.qd.addEventListener("click", function() {
            return void a.collapse()
        });
        c.addEventListener("click", function() {
            return void a.collapse()
        })
    }

    function by(a) {
        a.m = function(b) {
            "Escape" === b.key && a.j.O && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.m)
    }

    function cy(a, b, c) {
        Pn(a.j, !0, function() {
            try {
                Zx(b)
            } catch (d) {
                null == c || c(d)
            }
        });
        Pn(a.j, !1, function() {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                null == c || c(d)
            }
        });
        (new Yn(b.l)).aa(function() {
            return void a.collapse()
        });
        km(a, ab(jm, b))
    }

    function dy(a) {
        if (a.A) throw Error("Accessing domItems after disposal");
        return a.v
    }
    q.M = function() {
        this.m && this.win.document.body.removeEventListener("keydown", this.m);
        var a = this.v.Hd.Gd,
            b = a.parentNode;
        b && b.removeChild(a);
        N.prototype.M.call(this)
    };
    var fy = void 0;

    function gy() {
        void 0 === fy && (fy = 20);
        return fy
    }
    var hy = void 0;

    function iy() {
        void 0 === hy && (hy = 30);
        return hy
    }

    function jy(a) {
        return bx('<div class="ved-handle" id="' + fx(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function ky(a) {
        this.j = a;
        this.direction = 0
    }

    function ly(a) {
        return no(a.j).map(function(b) {
            return b ? my(a, b) : 0
        })
    }

    function ny(a) {
        return po(a.j).map(function(b) {
            return my(a, b)
        })
    }

    function my(a, b) {
        switch (a.direction) {
            case 0:
                return oy(-b.df);
            case 1:
                return oy(-b.cf);
            default:
                throw Error("Unhandled direction: " + a.direction);
        }
    }

    function oy(a) {
        return 0 === a ? 0 : a
    };

    function py(a, b, c) {
        N.call(this);
        this.win = a;
        this.v = b;
        this.G = c;
        this.B = new Wn;
        this.D = new Wn;
        this.j = new Ln(!1);
        this.m = new Ln(!1);
        this.l = new Ln(!1)
    }
    z(py, N);

    function qy(a) {
        var b = ry(a),
            c = b.da;
        b.Ja.getBoundingClientRect().top <= c.getBoundingClientRect().top || sy(a);
        ry(a).Db.classList.add("ved-revealed");
        O(a.j, !0)
    }

    function ty(a) {
        return Qx(a.win, a.j)
    }

    function uy(a) {
        var b = ry(a),
            c = b.da,
            d = b.vc;
        return vy(a, function() {
            return d.getBoundingClientRect().top <= c.getBoundingClientRect().top
        })
    }

    function wy(a) {
        var b = ry(a),
            c = b.da,
            d = b.vc;
        return vy(a, function() {
            return d.getBoundingClientRect().top <= c.getBoundingClientRect().top - 1
        })
    }

    function xy(a) {
        return Vn(uy(a), yy(a))
    }

    function zy(a) {
        var b = ry(a),
            c = b.da,
            d = b.Ja;
        return vy(a, function() {
            return d.getBoundingClientRect().top < c.getBoundingClientRect().top - 1
        })
    }
    py.prototype.init = function() {
        var a = this;
        sy(this);
        Ay(this);
        By(this);
        Cy(this);
        Dy(this);
        Ey(this);
        ry(this).da.addEventListener("scroll", function() {
            return void Fy(a)
        })
    };

    function Ay(a) {
        Nn(uy(a), !0, function() {
            var b = ry(a),
                c = b.Pb;
            b.ke.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Nn(uy(a), !1, function() {
            var b = ry(a),
                c = b.Pb;
            b.ke.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function By(a) {
        var b = so(a.win, ry(a).Tc);
        b.j || (b.j = !0, b.m.observe(b.element));
        var c = Qn(b.l, Sh);
        Mn(c, function() {
            return void Gy(a)
        });
        km(a, ab(jm, b))
    }

    function Cy(a) {
        Nn(Hy(a), !0, function() {
            ry(a).Ke.classList.remove("ved-hidden")
        });
        Nn(Hy(a), !1, function() {
            ry(a).Ke.classList.add("ved-hidden")
        })
    }

    function Dy(a) {
        function b() {
            return void Xn(a.B)
        }
        var c = ry(a),
            d = c.Ja,
            e = c.Nf;
        c.qd.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Pn(Iy(a), !0, b)
    }

    function Ey(a) {
        Pn(ty(a), !1, function() {
            sy(a)
        })
    }

    function yy(a) {
        var b = ry(a).da;
        return vy(a, function() {
            return b.scrollTop === b.scrollHeight - b.clientHeight
        })
    }

    function Hy(a) {
        var b = ry(a),
            c = b.da,
            d = b.Ja;
        return vy(a, function() {
            return d.getBoundingClientRect().top <= c.getBoundingClientRect().top
        })
    }

    function Iy(a) {
        return Un(a.m.map(Uo), Jy(a))
    }

    function Jy(a) {
        return vy(a, function() {
            return 0 === ry(a).da.scrollTop
        })
    }

    function sy(a) {
        ry(a).Ja.classList.add("ved-snap-point-top");
        var b = Ky(a, ry(a).Ja);
        ry(a).da.scrollTop = b;
        Fy(a)
    }

    function vy(a, b) {
        var c = new Ln(b());
        (new Yn(a.D)).aa(function() {
            return void O(c, b())
        });
        return Qn(c)
    }

    function Ly(a) {
        var b = ry(a).da.scrollTop;
        cz(a, b);
        return function() {
            return void dz(a, b)
        }
    }

    function cz(a, b) {
        O(a.m, !0);
        var c = ry(a),
            d = c.Pb;
        c = c.da;
        c.scrollTop = 0;
        c.classList.add("ved-scrolling-paused");
        d.style.setProperty("margin-top", "-" + b + "px");
        return function() {
            return void dz(a, b)
        }
    }

    function dz(a, b) {
        var c = ry(a),
            d = c.da;
        c.Pb.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        ry(a).da.scrollTop = b;
        Fy(a);
        O(a.m, !1)
    }

    function Ky(a, b) {
        a = ry(a).Pb.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function Fy(a) {
        On(a.l, function() {
            return void Xn(a.D)
        })
    }

    function Gy(a) {
        if (!a.l.O) {
            var b = ry(a),
                c = b.ee;
            b = b.Tc.getBoundingClientRect().height;
            b = Math.max(ez(a), b);
            O(a.l, !0);
            var d = Ly(a);
            c.style.setProperty("height", b + "px");
            d();
            a.win.requestAnimationFrame(function() {
                a.win.requestAnimationFrame(function() {
                    O(a.l, !1)
                })
            })
        }
    }

    function ez(a) {
        a = ry(a);
        var b = a.vc,
            c = a.ee,
            d = a.Ja;
        a = a.da.getBoundingClientRect();
        b = b.getBoundingClientRect();
        c = c.getBoundingClientRect();
        d = d.getBoundingClientRect();
        c = c.top - b.top;
        return Math.max(a.height - d.height - c, Math.min(a.height, a.bottom - b.top) - c)
    }

    function ry(a) {
        if (a.A) throw Error("Accessing domItems after disposal");
        return a.v
    }
    py.prototype.M = function() {
        var a = this.v.Hd.Gd,
            b = a.parentNode;
        b && b.removeChild(a);
        N.prototype.M.call(this)
    };

    function fz(a, b, c, d) {
        N.call(this);
        this.win = a;
        this.j = b;
        Pn(ty(b), !0, function() {
            Co(c);
            Jx(d)
        });
        Pn(ty(b), !1, function() {
            Eo(c);
            Kx(d)
        })
    }
    z(fz, N);

    function gz(a, b, c) {
        var d = Fx(new Ex(a), c.zIndex - 1),
            e = Ox(a, c.Wc),
            f = e.shadowRoot,
            g = f.appendChild,
            h = new Zh(a.document);
        var k = 100 * c.wd;
        var l = 100 * c.cd;
        k = bx("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(c.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " + W(l) +
            "%; transition: transform " + W(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + W(gy()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            W(k / l * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + W((l - k) / l * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            W(k / l * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + W(k / l * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + W(iy() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            W(gy()) + "px " + W(gy()) + "px 0 0; background: white; display: flex; height: " + W(iy()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            jy("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + jy("ved-fixed-handle") + "</div></div></div>");
        g.call(f, pi(h, Xw(k)));
        g = Px("ved-content-container", f);
        g.appendChild(b);
        mc(a.document.body.offsetHeight);
        b = {
            Db: Px("ved-drawer-container", f),
            qd: Px("ved-modal-background", f),
            Xe: Px("ved-ui-revealer", f),
            da: Px("ved-scroller",
                f),
            Pb: Px("ved-scrolled-stack", f),
            Nf: Px("ved-fully-closed-anchor", f),
            Ja: Px("ved-partially-extended-anchor", f),
            ee: Px("ved-content-sizer", f),
            Tc: g,
            Tk: Px("ved-moving-handle", f),
            vc: Px("ved-moving-handle-holder", f),
            Mf: Px("ved-fixed-handle", f),
            ke: Px("ved-fixed-handle-holder", f),
            Ke: Px("ved-over-scroll-block", f),
            Hd: e
        };
        e = b.Mf;
        e = new mo(new eo(a, e), new $n(e));
        f = e.j;
        f.A.addEventListener("mousedown", f.D);
        f.v.addEventListener("mouseup", f.B);
        f.v.addEventListener("mousemove", f.C, {
            passive: !1
        });
        f = e.l;
        f.l.addEventListener("touchstart",
            f.C);
        f.l.addEventListener("touchend", f.A);
        f.l.addEventListener("touchmove", f.B, {
            passive: !1
        });
        b = new py(a, b, new ky(e));
        b.init();
        d = new fz(a, b, Bo(a), d);
        km(d, ab(jm, b));
        d.init();
        if (c.Oa)
            if (a = Yx(a)) hz(d, a, c.rd);
            else {
                var m;
                null == (m = c.rd) || m.call(c, Error("Unable to create closeNavigator"))
            }
        return d
    }
    fz.prototype.show = function(a) {
        var b = this;
        a = void 0 === a ? {} : a;
        a = void 0 === a.ec ? !1 : a.ec;
        if (this.A) throw Error("Cannot show drawer after disposal");
        qy(this.j);
        a && Pn(ty(this.j), !1, function() {
            b.xa()
        })
    };
    fz.prototype.collapse = function() {
        var a = this.j;
        ry(a).Db.classList.remove("ved-revealed");
        O(a.j, !1)
    };
    fz.prototype.isVisible = function() {
        return ty(this.j)
    };
    fz.prototype.init = function() {
        var a = this;
        (new Yn(this.j.B)).aa(function() {
            a.collapse()
        });
        iz(this);
        jz(this);
        mc(this.win.document.body.offsetHeight)
    };

    function iz(a) {
        Pn(Un(xy(a.j), zy(a.j)), !0, function() {
            ry(a.j).Ja.classList.remove("ved-snap-point-top")
        });
        Nn(wy(a.j), !0, function() {
            ry(a.j).da.classList.add("ved-no-snap")
        });
        Nn(wy(a.j), !1, function() {
            ry(a.j).da.classList.remove("ved-no-snap")
        });
        Pn(wy(a.j), !1, function() {
            var b = a.j;
            var c = ry(b).vc;
            c = cz(b, Ky(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function jz(a) {
        var b = a.j.G;
        ly(b).aa(function(c) {
            c = -c;
            if (0 < c) {
                var d = ry(a.j).Xe;
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", "translateY(" + c + "px)")
            } else c = ry(a.j).Xe, c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        ny(b).aa(function(c) {
            30 < -c && a.collapse()
        })
    }

    function hz(a, b, c) {
        Pn(a.j.j, !0, function() {
            try {
                Zx(b)
            } catch (d) {
                null == c || c(d)
            }
        });
        Pn(a.j.j, !1, function() {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                null == c || c(d)
            }
        });
        (new Yn(b.l)).aa(function() {
            return void a.collapse()
        });
        km(a, ab(jm, b))
    };

    function kz(a, b, c, d, e, f, g) {
        this.l = a;
        this.A = (this.I = g) ? 500 > this.l.innerWidth : 2 === Si();
        this.v = c;
        this.m = d;
        var h;
        this.K = (null == e ? void 0 : null == (h = F(e, Sp, 4)) ? void 0 : G(h, 1)) || "en";
        var k;
        this.L = (null == e ? void 0 : null == (k = F(e, Sp, 4)) ? void 0 : G(k, 2)) || "Search results from ${website}";
        this.H = b.replace("ca", "partner");
        this.C = new Zh(window.document);
        this.j = this.C.createElement("IFRAME");
        this.G = new Cx(this.j, (null == e ? void 0 : G(e, 10)) || "", "auto-prose", this.H, "AutoProseVariant", a.location.host, this.K, this.L, f, !1);
        a = this.j;
        this.D = this.A ? gz(this.l, a, {
            wd: .95,
            cd: .95,
            zIndex: 100001,
            Oa: !0,
            hc: !0
        }) : ay(this.l, a, {
            bd: "80vw",
            Sc: "",
            Yc: !1,
            zIndex: 100001,
            Oa: !0,
            hc: !0
        });
        this.B = this.A ? null == e ? void 0 : F(e, Qp, 9) : null == e ? void 0 : F(e, Qp, 8)
    }
    kz.prototype.init = function() {
        var a = this;
        this.v.appendChild(hi(document, function() {
            if (a.A) {
                var c = lz(a),
                    d = {
                        backgroundColor: c.backgroundColor,
                        gb: c.gb,
                        offsetTop: c.Fe,
                        ud: c.Ee
                    };
                d = d || {};
                var e = d.jg,
                    f = d.ud;
                c = d.backgroundColor;
                var g = d.gb;
                e = void 0 === e ? 16 : e;
                d = d.offsetTop;
                f = void 0 === f ? 2 : f;
                g = void 0 === g ? "white" : g;
                c = "<style>.autoprose-search-button {background: " + W(void 0 === c ? "#000" : c) + "; border-radius: " + W(24) + "px;" + (d ? "top: " + W(d) + "%;" : "bottom: " + W(f) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " +
                    W(48) + "px; position: fixed; right: " + W(e) + "px; width: 48px;}.autoprose-search-icon {left: " + W((48 - Ax()) / 2) + "px; position: relative; top: " + W((48 - yx()) / 2) + 'px;}</style><div class="autoprose-search-button" tabindex="0" role="button"><div class="autoprose-search-icon">' + Bx(g) + "</div></div>";
                c = bx(c);
                return Xw(c)
            }
            c = lz(a);
            d = {
                Dg: "Search",
                backgroundColor: c.backgroundColor,
                gb: c.gb,
                offsetTop: c.Fe,
                ud: c.Ee
            };
            e = d.jg;
            var h = d.ud;
            c = d.backgroundColor;
            g = d.gb;
            e = void 0 === e ? 16 : e;
            f = d.offsetTop;
            h = void 0 === h ? 2 : h;
            d = d.Dg;
            g =
                void 0 === g ? "white" : g;
            c = "<style>.autoprose-search-button {align-items: center; background: " + W(void 0 === c ? "#000" : c) + "; border-radius: " + W(24) + "px;" + (f ? "top: " + W(f) + "%;" : "bottom: " + W(h) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " + W(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + W(e) + "px;}.autoprose-search-text {color: " + W(g) + '; font-family: Google Sans, Roboto, sans-serif; margin: 10px; user-select: none;}</style><div class="autoprose-search-button" tabindex="0" role="button"><div class="autoprose-search-icon">' +
                Bx(g) + '</div><div class="autoprose-search-text">' + ax(d) + "</div></div>";
            c = bx(c);
            return Xw(c)
        }()));
        this.G.init();
        var b = mz(this);
        b ? (Qw(this.m, "place", {
            sts: "ok"
        }), I(b, "click", function() {
            Qw(a.m, "click", {});
            nz(a);
            a.D.show();
            var c = a.j.contentDocument.getElementsByTagName("input")[0];
            c ? c.focus({
                preventScroll: !0
            }) : console.warn("searchbox missing")
        })) : Qw(this.m, "place", {
            sts: "pfmsb"
        })
    };

    function lz(a) {
        var b, c = (null == (b = a.B) ? void 0 : G(b, 3)) || void 0,
            d;
        b = (null == (d = a.B) ? void 0 : G(d, 4)) || void 0;
        var e, f, g;
        1 === (null == (g = a.B) ? void 0 : g.j()) ? e = 14 : f = 2;
        return {
            backgroundColor: c,
            gb: b,
            Fe: e,
            Ee: f
        }
    }

    function mz(a) {
        var b = a.v.getElementsByClassName("autoprose-search-button")[0];
        return b ? b : a.v.getElementsByClassName("autoprose-searchbox")[0]
    }

    function nz(a) {
        function b() {
            var d, e = null == (d = a.j.contentDocument) ? void 0 : d.documentElement;
            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(b, 1E3))
        }
        var c = new ResizeObserver(function(d) {
            return La(function(e) {
                if (1 == e.j) return a.j.height = 0, Ca(e, new r.Promise(function(f) {
                    return a.l.requestAnimationFrame(f)
                }), 2);
                a.j.height = d[0].target.scrollHeight;
                e.j = 0
            })
        });
        b()
    };

    function oz(a, b, c, d) {
        this.l = a;
        this.j = c;
        this.v = new Pw(a, b, F(this.j, Tp, 31) || new Tp);
        this.m = d
    }

    function pz(a) {
        var b, c, d = (null == (b = F(a.j, Tp, 31)) ? void 0 : null == (c = F(b, Rp, 5)) ? void 0 : ze(c, 1)) || 0;
        b = a.l.document;
        c = b.createElement("div");
        c.classList.add("auto-prose-wrapper");
        b.body.appendChild(c);
        var e;
        (new kz(a.l, a.m, c, a.v, F(a.j, Tp, 31), d, (null == (e = F(a.j, Gp, 25)) ? void 0 : je(e, 2)) || !1)).init()
    };

    function qz(a, b, c) {
        this.win = a;
        this.j = b;
        this.l = c
    }

    function rz(a, b) {
        var c;
        Zt(a.j, Rt, t(Object, "assign").call(Object, {}, b, {
            evt: "place",
            vh: mn(a.win),
            eid: (null == (c = F(a.l, Rp, 6)) ? void 0 : ze(c, 1)) || 0,
            url: a.win.location.href
        }))
    };

    function sz(a) {
        this.j = a
    }
    sz.prototype.ya = function(a) {
        var b = a.document.createElement("div");
        Mx(b);
        K(b, {
            width: "100%",
            "max-width": "1000px",
            margin: "auto"
        });
        b.appendChild(this.j);
        a = a.document.createElement("div");
        Mx(a);
        K(a, {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "5px 5px 2px",
            "box-sizing": "border-box",
            "background-color": "#FFF"
        });
        a.appendChild(b);
        return a
    };

    function tz(a, b) {
        return (b = F(b, bq, 6)) ? rw(se(b, aq, 1), a).map(function(c) {
            return Fu(c)
        }) : []
    };

    function uz(a, b) {
        this.l = a;
        this.j = b
    };

    function vz(a, b) {
        this.win = a;
        this.width = b;
        this.C = [];
        this.A = !0;
        b = new Zh(a.document);
        this.l = b.ja("DIV", {
            "class": "adpub-drawer-modal-background"
        });
        var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        c.setAttribute("viewBox", "0 0 24 24");
        var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("fill", "#5f6368");
        d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
        c.appendChild(d);
        this.D = b.ja("DIV", {
            "class": "adpub-drawer-close-button"
        }, c);
        this.j = b.ja("DIV", {
            "class": "adpub-drawer-contents"
        });
        this.v = b.ja("DIV", {
            "class": "adpub-drawer"
        }, this.D, this.j);
        this.m = b.ja("DIV", {
            "class": "adpub-drawer-container"
        }, this.l, this.v);
        this.B = b.ja("DIV", {
            "class": "adpub-drawer-root"
        });
        c = this.B.attachShadow({
            mode: "open"
        });
        d = c.appendChild;
        var e = this.win.innerHeight - 5,
            f = this.width;
        a = a.innerWidth;
        a = bx("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
            W(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + W(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + W(a) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + W(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
            W(e) + "px; overflow-y: auto; padding-top: " + W(5) + "px; width: " + W(f) + "px;}</style>");
        d.call(c, pi(b, Xw(a)));
        c.appendChild(this.m);
        Mx(this.B)
    }
    vz.prototype.init = function() {
        this.win.document.body.appendChild(this.B);
        wz(this)
    };
    vz.prototype.P = function(a) {
        for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
        this.j.appendChild(a)
    };
    vz.prototype.show = function() {
        this.A = !1;
        this.win.document.documentElement.style.overflow = "hidden";
        this.m.style.transitionDelay = "0s";
        this.m.style.visibility = "visible";
        this.l.style.opacity = ".5";
        this.v.style.transform = "translateX(0)"
    };

    function xz(a) {
        a.A = !0;
        a.j.scrollTop = 0;
        a.v.style.transitionDuration = ".5s";
        a.v.style.transform = "translateX(" + a.width + "px)";
        a.l.style.opacity = "0";
        a.m.style.transitionDelay = ".5s";
        mc(a.m.offsetWidth);
        a.m.style.visibility = "hidden";
        setTimeout(function() {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (var b = y(a.C), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            try {
                c()
            } catch (d) {
                console.error(d)
            }
        }
    }
    vz.prototype.ia = function(a) {
        this.C.push(a)
    };

    function wz(a) {
        I(a.l, "click", function() {
            return xz(a)
        });
        I(a.D, "click", function() {
            return void xz(a)
        });
        var b = a.width / a.win.innerWidth;
        I(a.win, "resize", function() {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = a.width + "px";
            a.j.style.height = a.win.innerHeight + "px";
            a.l.style.width = a.win.innerWidth + "px";
            a.l.style.height = a.win.innerHeight + "px";
            a.A && (a.v.style.transform = "translateX(" + a.width + "px)")
        })
    };

    function yz(a, b, c) {
        this.win = a;
        this.C = b;
        this.m = c;
        this.L = [];
        this.N = new r.Map;
        this.G = !1;
        this.I = !0;
        this.D = null;
        b = new Zh(a.document);
        this.H = b.ja("DIV", {
            "class": "cse-modal-background",
            tabindex: 1
        });
        var d = b.ja("DIV", {
            "class": "cse-drawer-handle-icon"
        });
        this.v = b.ja("DIV", {
            "class": "cse-drawer-handle"
        }, d);
        this.l = b.ja("DIV", {
            "class": "cse-drawer-contents"
        });
        this.j = b.ja("DIV", {
            "class": "cse-drawer"
        }, this.v, this.l);
        this.A = b.ja("DIV", {
            "class": "cse-drawer-container"
        }, this.H, this.j);
        this.K = b.ja("DIV", {
            "class": "adpub-drawer-root"
        });
        this.B = a.innerHeight - (c + 30 - 20);
        a = this.K.attachShadow({
            mode: "open"
        });
        c = a.appendChild;
        d = this.m;
        var e = this.B;
        d = bx("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + W(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
            W(d + e) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + W(20) + "px " + W(20) + "px 0 0; background: white; display: flex; height: " + W(30) + "px; justify-content: center; margin-top: " + W(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + W(d) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
        c.call(a, pi(b, Xw(d)));
        a.appendChild(this.A);
        Mx(this.K)
    }
    yz.prototype.init = function() {
        this.win.document.body.appendChild(this.K);
        zz(this)
    };
    yz.prototype.P = function(a) {
        for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
        this.l.appendChild(a)
    };

    function Az(a, b) {
        function c(l) {
            l.contentWindow ? I(l.contentWindow, "message", d) : console.error("Loaded iframe missing content window.")
        }

        function d(l) {
            if (void 0 === g || t(g, "includes").call(g, l.origin)) {
                var m;
                if (t(h, "includes").call(h, null == (m = l.data) ? void 0 : m.type)) {
                    var n;
                    Array.isArray(null == (n = l.data) ? void 0 : n.touches) && (m = l.data.type, l = l.data.touches.map(function(p) {
                        return t(Object, "assign").call(Object, {}, p, {
                            target: a.l
                        })
                    }), f(a.j, m, l))
                }
            }
        }

        function e(l) {
            l = l.contentDocument;
            for (var m = {}, n = y(h), p = n.next(); !p.done; m = {
                    Tb: m.Tb
                }, p = n.next()) m.Tb = p.value, I(l, m.Tb, function(v) {
                return function(u) {
                    u = [].concat(ma(u.touches)).map(function(A) {
                        return {
                            clientX: A.clientX,
                            clientY: A.clientY,
                            force: A.force,
                            identifier: A.identifier,
                            pageX: A.pageX,
                            pageY: A.pageY,
                            radiusX: A.radiusX,
                            radiusY: A.radiusY,
                            rotationAngle: A.rotationAngle,
                            screenX: A.screenX,
                            screenY: A.screenY,
                            target: a.l
                        }
                    });
                    f(a.j, v.Tb, u)
                }
            }(m))
        }

        function f(l, m, n) {
            try {
                var p = n.map(function(v) {
                    return new Touch(v)
                });
                l.dispatchEvent(new TouchEvent(m, {
                    bubbles: !0,
                    cancelable: !0,
                    touches: p
                }))
            } catch (v) {
                for (m =
                    new UIEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    }), n = y(n), p = n.next(); !p.done; p = n.next()) l.dispatchEvent(t(Object, "assign").call(Object, m, {
                    touches: [p.value]
                }))
            }
        }
        var g = ["https://cse.google.com"],
            h = ["touchstart", "touchmove", "touchend", "touchcancel"],
            k;
        "complete" === (null == (k = b.contentDocument) ? void 0 : k.readyState) && (c(b), e(b));
        I(b, "load", function() {
            c(b);
            e(b)
        })
    }

    function Bz(a, b, c) {
        var d;
        a.N.set(b, null != (d = a.win.document.documentElement.style.getPropertyValue(b)) ? d : "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Cz(a, b) {
        var c, d = null != (c = a.N.get(b)) ? c : "";
        a.win.document.documentElement.style.setProperty(b, d)
    }
    yz.prototype.show = function() {
        this.D = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
        Bz(this, "transform", "translateY(" + -this.D + "px)");
        Bz(this, "position", "fixed");
        Bz(this, "width", "100%");
        Bz(this, "overflow", "hidden");
        Bz(this, "touch-action", "none");
        Bz(this, "scroll-behavior", "auto");
        this.A.style.transform = "translateY(" + this.D + "px)";
        Dz(this, this.m - this.C)
    };

    function Ez(a) {
        a.I = !0;
        a.G = !1;
        Cz(a, "position");
        Cz(a, "width");
        Cz(a, "transform");
        Cz(a, "overflow");
        Cz(a, "touch-action");
        null != a.D && (a.win.document.documentElement.scrollTop = a.D, a.win.document.body.scrollTop = a.D);
        Cz(a, "scroll-behavior");
        a.A.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = "translateY(" + (a.m + a.B) + "px)";
        a.H.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        mc(a.A.offsetHeight);
        a.A.style.visibility = "hidden";
        a = y(a.L);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {
                console.error(c)
            }
        }
    }
    yz.prototype.ia = function(a) {
        this.L.push(a)
    };

    function zz(a) {
        I(a.H, "click", function() {
            return Ez(a)
        });
        I(a.v, "mousedown", function() {
            function d() {
                Fz(a);
                Bf(a.v, "mousemove", e);
                Bf(a.v, "mouseup", d);
                Bf(a.v, "mouseleave", d)
            }

            function e(f) {
                Gz(a, f.movementY)
            }
            I(a.v, "mousemove", e);
            I(a.v, "mouseup", d);
            I(a.v, "mouseleave", d)
        });
        I(a.j, "touchstart", function(d) {
            function e() {
                Fz(a);
                Bf(a.j, "touchmove", f);
                Bf(a.j, "touchend", e);
                Bf(a.j, "touchcancel", e)
            }

            function f(h) {
                var k = h.touches[0];
                0 === Hz(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                if (g) {
                    var l =
                        0 === Hz(a) && a.l.scrollTop,
                        m = k.target === a.v || k.target.parentElement === a.v;
                    if (!l || m) l = k.screenY - g.screenY, Gz(a, l), l = 0 < l && 0 === a.l.scrollTop, l = a.G && !l, h.cancelable && !l && h.preventDefault()
                }
                g = k
            }
            var g = d.touches[0];
            I(a.j, "touchmove", f, {
                passive: !1
            });
            I(a.j, "touchend", e);
            I(a.j, "touchcancel", e)
        });
        I(a.A, "touchstart", function() {});
        var b = a.m / a.win.innerHeight,
            c = a.C / a.m;
        I(a.win, "resize", function() {
            a.m = Math.floor(b * a.win.innerHeight);
            a.C = Math.floor(c * a.m);
            a.B = a.win.innerHeight - (a.m + 30 - 20);
            var d = a.G ? 0 : a.m - a.C;
            a.l.style.height =
                a.m + "px";
            a.j.style.transform = a.I ? "translateY(" + (a.m + a.B) + "px)" : "translateY(" + (d + a.B) + "px)"
        })
    }

    function Dz(a, b) {
        a.I = !1;
        0 === b && (a.G = !0, a.l.classList.add("scrollable"));
        a.A.style.transitionDelay = "0s";
        a.A.style.visibility = "visible";
        a.H.style.opacity = ".5";
        a.j.style.transform = "translateY(" + (b + a.B) + "px)"
    }

    function Fz(a) {
        var b = Hz(a);
        if (a.G) 50 < b ? Ez(a) : 0 !== b && Dz(a, 0);
        else {
            var c = a.m - a.C;
            b < c - 50 ? Dz(a, 0) : b > c + 50 ? Ez(a) : b !== c && Dz(a, a.m - a.C)
        }
    }

    function Gz(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(Hz(a) + b, 0) + a.B;
        a.j.style.transform = "translateY(" + b + "px)";
        mc(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function Hz(a) {
        var b, c = null != (b = a.j.style.transform) ? b : null;
        return Number(((new DOMMatrix(c)).f - a.B).toFixed(1))
    };
    var Iz = x(["https://www.google.com/adsense/search/async-ads.js"]),
        Jz = x(["https://cse.google.com/cse.js?cx=9d449ff4a772956c6"]);

    function Kz(a, b, c, d, e, f, g, h, k, l) {
        this.win = a;
        this.K = b;
        this.language = (null == d ? void 0 : G(d, 1)) || "en";
        this.N = (null == d ? void 0 : G(d, 2)) || "Search results from ${website}";
        this.L = e;
        this.D = f;
        this.C = g;
        this.I = h;
        this.H = c.replace("ca", "partner");
        this.G = Fx(new Ex(a), 1E5);
        this.v = new Zh(a.document);
        this.m = this.v.createElement("DIV");
        this.A = this.v.createElement("DIV");
        this.l = this.v.createElement("IFRAME");
        this.B = new Cx(this.l, l.l ? l.j : "9d449ff4a772956c6", "auto-rs-prose", this.H, "AutoRsVariant", a.location.host, this.language,
            this.N, this.I, k);
        g ? (a = this.l, a = this.C ? 2 === Si() ? gz(this.win, a, {
            wd: .95,
            cd: .95,
            zIndex: 100001,
            Oa: !0
        }) : ay(this.win, a, {
            bd: "min(65vw, 768px)",
            Sc: "",
            Yc: !1,
            zIndex: 100001,
            Oa: !0
        }) : null) : this.D ? 2 === Si() ? (a = Math.round(.95 * this.win.innerHeight) - 30, a = new yz(this.win, a, a)) : a = new vz(this.win, Math.min(768, Math.round(.65 * this.win.innerWidth))) : a = null;
        this.j = a
    }
    Kz.prototype.init = function() {
        var a = this;
        this.D || this.C || !this.win.document.querySelector('script[src*="cse.google.com/cse"]') ? 0 !== this.K.length && (this.C ? At(1075, function() {
            return a.B.init()
        }, this.win) : this.D ? Lz(this) : (Mz(this), Nz(this)), At(1076, function() {
            var b = a.v.createElement("SCRIPT");
            Yg(b, L(Iz));
            a.win.document.head.appendChild(b)
        }, this.win), Oz(this), rz(this.L, {
            sts: "ok"
        })) : rz(this.L, {
            sts: "pfec"
        })
    };

    function Mz(a) {
        function b() {
            "flex" === a.m.style.display && (a.m.style.display = "none");
            a.A.classList.remove("gsc-modal-background-image-visible");
            Kx(a.G)
        }
        a.m.id = "cse-overlay-div";
        K(a.m, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        var c = a.v.createElement("DIV");
        c.id = "cse-overlay-close-button";
        K(c, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.A.classList.add("gsc-modal-background-image");
        a.A.setAttribute("tabindex", 0);
        a.win.document.body.appendChild(a.m);
        a.win.document.body.appendChild(a.A);
        c.onclick = b;
        a.A.onclick = b;
        a.m.appendChild(c);
        a.m.appendChild(a.l);
        At(1075, function() {
            return a.B.init()
        }, a.win)
    }

    function Lz(a) {
        if (a.j instanceof yz || a.j instanceof vz) a.j.init(), a.j.P(a.l), a.j instanceof yz && Az(a.j, a.l), a.j.ia(function() {
            return void Kx(a.G)
        }), At(1075, function() {
            return a.B.init()
        }, a.win)
    }

    function Nz(a) {
        var b = a.v.createElement("SCRIPT"),
            c = L(Jz);
        c = sj(c, new r.Map([
            ["language", a.language]
        ]));
        Yg(b, c);
        a.win.document.head.appendChild(b)
    }
    Kz.prototype.P = function(a, b) {
        var c = this;
        this.C || Jx(this.G);
        this.D || this.C ? (Dx(this.B, a, b), function() {
            function d() {
                var f, g = null == (f = c.l.contentDocument) ? void 0 : f.documentElement;
                g ? e.observe(g) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
            }
            var e = new ResizeObserver(function(f) {
                return La(function(g) {
                    if (1 == g.j) return c.l.height = 0, Ca(g, new r.Promise(function(h) {
                        return c.win.requestAnimationFrame(h)
                    }), 2);
                    c.l.height = f[0].target.scrollHeight;
                    g.j = 0
                })
            });
            d();
            c.j.show()
        }()) : (this.A.classList.add("gsc-modal-background-image-visible"),
            this.m.style.display = "flex", Dx(this.B, a, b))
    };

    function Oz(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.win, "_googCsa");
        var b = a.K.map(function(c) {
            return {
                container: c,
                relatedSearches: 5
            }
        });
        a.win._googCsa("relatedsearch", {
            pubId: a.H,
            styleId: "5134551505",
            hl: a.language,
            fexp: a.I,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.P.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    };

    function Pz(a, b, c, d) {
        this.B = a;
        this.m = b;
        this.A = c;
        this.v = d || null;
        this.j = null;
        this.l = new Ln(null)
    }
    Pz.prototype.init = function() {
        var a = Qz(this);
        this.j = a.Hf;
        xu(this.m, this.j);
        O(this.l, a.Df)
    };
    Pz.prototype.remove = function() {
        this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
        this.j = null;
        O(this.l, null)
    };
    Pz.prototype.C = function() {
        return this.l
    };

    function Qz(a) {
        var b = mu(a.m.W),
            c = a.A.ya(a.B, function() {
                return a.remove()
            });
        b.appendChild(c);
        a.v && (b.className = a.v);
        return {
            Hf: b,
            Df: c
        }
    };

    function Rz(a, b, c, d, e, f) {
        this.l = a;
        this.j = c;
        this.m = new qz(a, b, Cq(this.j) || new Up);
        this.v = d;
        this.V = e;
        this.A = f
    }

    function Sz(a) {
        var b = tz(a.l, a.j);
        b = Tz(a.l, b, a.V, a.A, a.m);
        var c = Uz(b, a.l),
            d, e, f, g = (null == (d = Cq(a.j)) ? void 0 : null == (e = F(d, Rp, 6)) ? void 0 : ze(e, 1)) || (null == (f = Cq(a.j)) ? void 0 : ze(f, 3)) || 0,
            h, k = (null == (h = Cq(a.j)) ? void 0 : Ee(h, 4)) || !1,
            l, m = (null == (l = Cq(a.j)) ? void 0 : Ee(l, 7)) || !1,
            n, p = (null == (n = Cq(a.j)) ? void 0 : Ee(n, 10)) || !1,
            v = Vz(a.j),
            u;
        (null == (u = F(a.j, Gp, 25)) ? 0 : je(u, 2)) || At(1074, function() {
            var A;
            return (new Kz(a.l, c, a.v, null == (A = Cq(a.j)) ? void 0 : F(A, Sp, 5), a.m, k, m, g, p, v)).init()
        }, a.l)
    }

    function Wz(a, b, c) {
        c = c ? se(c, Cp, 5) : [];
        var d = gw(a.document, c),
            e = hw();
        return b.filter(function(f) {
            return !(e(f) || d(f))
        })
    }

    function Tz(a, b, c, d, e) {
        b = Lu(b, a).sort(Xz);
        return 0 == b.length ? (rz(e, {
            sts: "pfno"
        }), []) : d && (b = Wz(a, b, c), 0 == b.length) ? (rz(e, {
            sts: "pffa"
        }), []) : [b[Math.floor(b.length / 2)]]
    }

    function Xz(a, b) {
        return a.ca.j - b.ca.j
    }

    function Uz(a, b) {
        for (var c = [], d = 0; d < a.length; d++) {
            var e = a[d],
                f = "autors-container-" + d,
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new Pz(b, e, new sz(g))).init();
            c.push(f)
        }
        return c
    }

    function Vz(a) {
        var b, c = (null == (b = Cq(a)) ? void 0 : Ee(b, 11)) || !1,
            d;
        a = (null == (d = Cq(a)) ? void 0 : G(d, 8)) || "";
        return new uz(c, a)
    };
    var Yz = {
            Uh: "google_ads_preview",
            Di: "google_mc_lab",
            Ti: "google_anchor_debug",
            Si: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            oj: "google_scr_debug",
            qj: "google_ia_debug_allow_onclick",
            Jj: "googleads",
            ff: "google_pedestal_debug",
            dk: "google_responsive_slot_preview",
            ck: "google_responsive_dummy_ad",
            Mh: "google_audio_sense",
            Nh: "google_auto_gallery",
            Ph: "google_auto_storify_swipeable",
            Oh: "google_auto_storify_scrollable",
            Lj: "google_pga_monetization"
        },
        Zz = {},
        $z = (Zz.google_bottom_anchor_debug = 1, Zz.google_anchor_debug =
            2, Zz.google_ia_debug = 8, Zz.google_scr_debug = 9, Zz.googleads = 2, Zz.google_pedestal_debug = 30, Zz);
    var aA = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        hk: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function bA(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = cA(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function cA(a) {
        var b = "";
        Bi(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    }

    function dA() {
        var a = B.location,
            b = !1;
        Bi(Yz, function(c) {
            bA(a, c) && (b = !0)
        });
        return b
    }

    function eA(a, b) {
        switch (a) {
            case 1:
                return bA(b, "google_ia_debug");
            case 2:
                return bA(b, "google_bottom_anchor_debug");
            case 3:
                return bA(b, "google_anchor_debug") || bA(b, "googleads");
            case 4:
                return bA(b, "google_scr_debug")
        }
    };

    function fA(a, b, c) {
        var d = [];
        F(a, jq, 18) && d.push(2);
        b.V && d.push(0);
        Cq(a) && 1 == Fe(Cq(a), 1) && d.push(1);
        F(a, Tp, 31) && 1 == Fe(F(a, Tp, 31), 1) && d.push(5);
        (F(a, Op, 27) && 1 == Fe(F(a, Op, 27), 1) || bA(c, "google_audio_sense")) && d.push(3);
        F(a, mq, 29) && d.push(4);
        return d
    };

    function gA(a, b, c) {
        this.l = a;
        this.v = b;
        this.m = c;
        this.j = new Ln(!1)
    }
    gA.prototype.ya = function(a, b, c, d) {
        var e = hA(a, d),
            f = hA(a),
            g = iA(this, a),
            h = jA(this, a, c);
        a = kA(a);
        a.appendChild(e);
        a.appendChild(f);
        a.appendChild(g);
        a.appendChild(h);
        this.j.aa(function(k) {
            K(e, {
                display: k ? "none" : "inline"
            });
            K(f, {
                display: k ? "inline" : "none"
            });
            k ? (K(g, {
                "line-height": "24px",
                "max-width": "100vw",
                opacity: "1",
                transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
            }), K(h, {
                margin: "0px 12px 0px 8px",
                opacity: 1,
                width: "24px",
                transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
            })) : (K(g, {
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
            }), K(h, {
                margin: "0",
                opacity: "0",
                width: "0",
                transition: "margin 100ms, opacity 50ms, width 100ms"
            }))
        }, !0);
        return a
    };

    function kA(a) {
        a = a.document.createElement("ins");
        lA(a);
        K(a, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return a
    }

    function hA(a, b) {
        a = Yh(a).createElement("IMG");
        lA(a);
        a.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        K(a, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && a.addEventListener("click", function(c) {
            b();
            c.stopPropagation()
        });
        return a
    }

    function iA(a, b) {
        var c = b.document.createElement("button");
        lA(c);
        K(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", function(d) {
            a.m();
            d.stopPropagation()
        });
        return c
    }

    function jA(a, b, c) {
        b = Yh(b).createElement("IMG");
        b.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        b.setAttribute("aria-label", a.v);
        lA(b);
        K(b, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        b.addEventListener("click", function(d) {
            c();
            d.stopPropagation()
        });
        return b
    }
    gA.prototype.pe = function() {
        return 40
    };
    gA.prototype.He = function() {
        O(this.j, !1);
        return 0
    };
    gA.prototype.Je = function() {
        O(this.j, !0)
    };

    function lA(a) {
        Mx(a);
        K(a, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function mA(a, b, c, d, e, f, g, h) {
        this.A = a;
        this.B = b;
        this.D = c;
        this.l = d;
        this.C = e;
        this.v = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.m = void 0 === h ? null : h
    }
    mA.prototype.ya = function(a) {
        var b = a.document.createElement("div");
        nA(this, b);
        K(b, {
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": this.l
        });
        if (this.v) {
            var c = Yh(a).createElement("IMG");
            c.src = this.v;
            nA(this, c);
            K(c, {
                margin: "0px 8px 0px 0px",
                width: "24px",
                height: "24px"
            })
        } else c = null;
        c && b.appendChild(c);
        c = a.document.createElement("span");
        nA(this, c);
        K(c, {
            "line-height": "24px"
        });
        c.appendChild(a.document.createTextNode(this.A));
        b.appendChild(c);
        c = oA(this, a);
        c.appendChild(b);
        return this.m ? pA(this,
            a, c, this.m) : c
    };

    function pA(a, b, c, d) {
        function e(h) {
            h.matches ? (K(f, {
                "flex-direction": "row"
            }), a.j && K(f, {
                "border-top": a.j,
                "border-bottom": a.j
            }), K(g, {
                "margin-left": "8px",
                "text-align": "start"
            }), K(c, {
                border: "0",
                "margin-right": "8px",
                width: "auto"
            })) : (K(f, {
                border: "0",
                "flex-direction": "column"
            }), K(g, {
                "margin-left": "0",
                "text-align": "center"
            }), K(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && K(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        }
        var f = b.document.createElement("div");
        Mx(f);
        K(f, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        var g = b.document.createElement("span");
        g.appendChild(b.document.createTextNode(d));
        Mx(g);
        K(g, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        e(b);
        b.addEventListener("change", e);
        f.appendChild(c);
        f.appendChild(g);
        return f
    }

    function oA(a, b) {
        b = b.document.createElement("button");
        nA(a, b);
        var c = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (c["border-top"] = a.j, c["border-bottom"] = a.j);
        K(b, c);
        b.addEventListener("click", function(d) {
            a.B();
            d.stopPropagation()
        });
        return b
    }

    function nA(a, b) {
        Mx(b);
        K(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.C,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.D,
            "user-select": "none",
            cursor: "pointer"
        })
    };

    function qA(a, b) {
        b = b.filter(function(c) {
            var d = F(c, dp, 4);
            return 5 == D(d, 1) && 1 == D(c, 8)
        });
        b = ou(b, a);
        a = Lu(b, a);
        a.sort(function(c, d) {
            return d.ca.j - c.ca.j
        });
        return a[0] || null
    };

    function rA(a) {
        var b = a.J,
            c = a.od,
            d = a.kd,
            e = a.ae,
            f = a.ba;
        a = a.zf;
        var g = 0;
        try {
            g |= fn(b);
            var h = Math.min(b.screen.width || 0, b.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            g |= b.navigator && sA(b.navigator.userAgent) ? 1048576 : 0;
            g = c ? g | (b.innerHeight >= c ? 0 : 1024) : g | (b.innerHeight >= b.innerWidth ? 0 : 8);
            g |= gn(b, d);
            g |= jn(b)
        } catch (l) {
            g |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = tA(b.innerWidth, 3, 0, Math.min(Math.round(b.innerWidth / 320 * 50), uA) + 15, 3);
                null != vA(b, d, void 0 === c ? null : c) && (g |= 16777216);
                break;
            case 1:
                c = f;
                c = void 0 ===
                    c ? null : c;
                d = b.innerWidth;
                e = b.innerHeight;
                h = Math.min(Math.round(b.innerWidth / 320 * 50), uA) + 15;
                var k = tA(d, 3, e - h, e, 3);
                25 < h && k.push({
                    x: d - 25,
                    y: e - 25
                });
                null != vA(b, k, void 0 === c ? null : c) && (g |= 16777216)
        }
        a && null != wA(b, void 0 === f ? null : f) && (g |= 16777216);
        return g
    }

    function sA(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }

    function wA(a, b) {
        b = void 0 === b ? null : b;
        var c = a.innerWidth,
            d = a.innerHeight,
            e = V(bs);
        c = tA(c, 10, d - e, d, 10);
        return vA(a, c, b)
    }

    function xA(a, b) {
        for (var c = a.innerWidth, d = a.innerHeight, e = d; e > b;) {
            var f = tA(c, 9, e - b, e, 9);
            f = vA(a, f);
            if (!f) return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }

    function vA(a, b, c) {
        c = void 0 === c ? null : c;
        b = y(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value,
                g = c;
            g = void 0 === g ? null : g;
            if (d = yA(e.document, f.x, f.y)) {
                var h;
                if (!(h = zA(d, e, f, g))) a: {
                    g = void 0 === g ? null : g;h = e.document;
                    for (d = d.offsetParent; d && d !== h.body; d = d.offsetParent) {
                        var k = zA(d, e, f, g);
                        if (k) {
                            h = k;
                            break a
                        }
                    }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    }

    function yA(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function tA(a, b, c, d, e) {
        for (var f = [], g = 0; g < e; g++)
            for (var h = 0; h < b; h++) {
                var k = f,
                    l = b - 1,
                    m = e - 1;
                k.push.call(k, {
                    x: (0 === l ? 0 : h / l) * a,
                    y: c + (0 === m ? 0 : g / m) * (d - c)
                })
            }
        return f
    }

    function zA(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== xj(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= Aj(a).width && 1 >= Aj(a).height ? !0 : !1;
        if (d) {
            var f, g;
            kk(d, "ach_evt", {
                tn: a.tagName,
                id: null != (f = a.getAttribute("id")) ? f : "",
                cls: null != (g = a.getAttribute("class")) ? g : "",
                ign: String(e),
                pw: b.innerWidth,
                ph: b.innerHeight,
                x: c.x,
                y: c.y
            }, !0, 1)
        }
        return e ? null : a
    }
    var uA = 90 * 1.38;

    function AA(a, b, c) {
        var d = this;
        this.j = a;
        this.A = b;
        this.B = null;
        this.v = new Ln(null);
        this.H = c || null;
        this.m = null;
        this.D = !1;
        this.l = 0;
        this.G = null;
        this.I = function() {
            return BA(d)
        }
    }
    AA.prototype.init = function() {
        this.j.addEventListener("scroll", this.I);
        this.l = kn(this.j);
        CA(this)
    };
    AA.prototype.remove = function() {
        this.m && this.m.parentNode && this.m.parentNode.removeChild(this.m);
        this.m = null;
        DA(this);
        O(this.v, null)
    };
    AA.prototype.C = function() {
        return this.v
    };

    function DA(a) {
        a.j.removeEventListener("scroll", a.I)
    }

    function BA(a) {
        if (a.D) {
            var b = rn(a.j);
            if (b > a.l + 100 || b < a.l - 100) EA(a), a.l = kn(a.j)
        }
        a.G && a.j.clearTimeout(a.G);
        a.G = a.j.setTimeout(function() {
            return CA(a)
        }, 200)
    }

    function CA(a) {
        var b = kn(a.j);
        a.l && a.l > b && (a.l = b);
        b = rn(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), FA(a))
    }

    function EA(a) {
        a.D = !1;
        var b = a.A.He();
        switch (b) {
            case 0:
                O(a.v, a.B);
                break;
            case 1:
                a.m && (K(a.m, {
                    display: "none"
                }), O(a.v, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function FA(a) {
        a.m || (a.m = GA(a));
        K(a.m, {
            display: "block"
        });
        a.D = !0;
        a.A.Je();
        O(a.v, a.B)
    }

    function GA(a) {
        var b = xA(a.j, a.A.pe() + 60);
        b = null == b ? 30 : b + 30;
        var c = a.j.document.createElement("div");
        Mx(c);
        K(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.B = a.A.ya(a.j, function() {
            return a.remove()
        }, function() {
            DA(a);
            EA(a)
        }, function() {
            DA(a);
            FA(a)
        });
        c.appendChild(a.B);
        a.H && (c.className = a.H);
        a.j.document.body.appendChild(c);
        return c
    };

    function HA(a, b, c, d, e) {
        this.A = a;
        this.G = b;
        this.I = c;
        this.H = d;
        this.D = e;
        this.B = new Ln(0);
        this.v = new Ln(null);
        this.l = this.m = this.j = null
    }
    HA.prototype.init = function() {
        var a = this;
        this.G ? (this.m = new Pz(this.A, this.G, this.I, this.D), this.m.init(), Rn(this.v, this.m.C()), O(this.B, 1), null == this.j && (this.j = new yo(this.A), this.j.init(2E3)), this.j.addListener(function() {
            IA(a);
            JA(a)
        })) : JA(this)
    };
    HA.prototype.remove = function() {
        IA(this);
        this.j && (this.j.xa(), this.j = null)
    };
    HA.prototype.C = function() {
        return this.v
    };

    function JA(a) {
        a.l = new AA(a.A, a.H, a.D);
        a.l.init();
        Rn(a.v, a.l.C());
        O(a.B, 2)
    }

    function IA(a) {
        O(a.B, 0);
        null != a.m && (a.m.remove(), a.m = null);
        null != a.l && (a.l.remove(), a.l = null)
    };

    function KA(a, b, c, d, e) {
        a = new HA(a, qA(a, e), new mA(b, d, "#FFF", "#4A4A4A", "normal"), new gA(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };

    function LA(a) {
        return a.googlefc = a.googlefc || {}
    }

    function MA(a) {
        a = LA(a);
        return a.ccpa = a.ccpa || {}
    };

    function NA(a, b, c) {
        this.j = a;
        this.m = Fx(b, 2147483643);
        this.v = c;
        this.l = null
    }

    function OA(a) {
        var b = LA(a.j);
        MA(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: function() {
                return PA(a)
            }
        })
    }

    function PA(a) {
        var b = MA(a.j);
        if (QA(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = KA(a.j, c, b, function() {
                return RA(a)
            }, a.v))
        }
    }

    function RA(a) {
        Jx(a.m);
        MA(a.j).openConfirmationDialog(function(b) {
            b && a.l && (a.l.remove(), a.l = null);
            Kx(a.m)
        })
    }

    function QA(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function SA(a, b, c, d) {
        this.v = a;
        this.A = b;
        this.m = c;
        this.l = d;
        this.j = new Ln(!1)
    }
    SA.prototype.ya = function(a, b, c, d) {
        c = TA(a);
        var e = UA(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
            f = UA(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
            g = VA(this, a),
            h = UA(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
        K(h, {
            "margin-left": "auto"
        });
        c.appendChild(e);
        c.appendChild(f);
        c.appendChild(g);
        c.appendChild(h);
        var k = WA(this, a);
        a = XA(a);
        a.appendChild(c);
        a.appendChild(k);
        this.j.aa(function(l) {
            K(e, {
                display: l ? "none" : "inline"
            });
            K(f, {
                display: l ? "inline" : "none"
            });
            l ? (K(g, {
                    "line-height": "24px",
                    "max-width": "100vw",
                    opacity: "1",
                    transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                }), K(h, {
                    "margin-right": "12px",
                    opacity: 1,
                    width: "24px",
                    transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                }), K(k, {
                    "border-width": "1px",
                    "line-height": "14px",
                    "max-width": "100vw",
                    opacity: "1",
                    padding: "8px 32px",
                    transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                })) :
                (K(g, {
                    "line-height": "0px",
                    "max-width": "0vw",
                    opacity: "0",
                    transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                }), K(h, {
                    "margin-right": "0",
                    opacity: "0",
                    width: "0",
                    transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                }), K(k, {
                    "border-width": "0px",
                    "line-height": "0px",
                    "max-width": "0vw",
                    opacity: "0",
                    padding: "0",
                    transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                }))
        }, !0);
        return a
    };

    function XA(a) {
        a = a.document.createElement("div");
        Mx(a);
        K(a, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return a
    }

    function TA(a) {
        a = a.document.createElement("ins");
        YA(a);
        K(a, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return a
    }

    function UA(a, b, c, d) {
        a = Yh(a).createElement("IMG");
        a.src = b;
        d && a.setAttribute("aria-label", d);
        YA(a);
        K(a, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        a.addEventListener("click", function(e) {
            c();
            e.stopPropagation()
        });
        return a
    }

    function VA(a, b) {
        var c = b.document.createElement("span");
        YA(c);
        K(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.v));
        c.addEventListener("click", function(d) {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function WA(a, b) {
        var c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.m));
        Mx(c);
        K(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }
    SA.prototype.pe = function() {
        return 71
    };
    SA.prototype.He = function() {
        O(this.j, !1);
        return 0
    };
    SA.prototype.Je = function() {
        O(this.j, !0)
    };

    function YA(a) {
        Mx(a);
        K(a, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function ZA(a, b, c, d) {
        this.v = a;
        this.j = Fx(b, 2147483643);
        this.m = c;
        this.l = d
    }

    function $A(a) {
        aB(a.l, function(b) {
            var c = a.v,
                d = b.Cg,
                e = b.Bf,
                f = b.pf;
            b = b.showRevocationMessage;
            (new HA(c, qA(c, a.m), new mA(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new SA(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, function() {
            Kx(a.j)
        })
    };

    function bB(a) {
        if (!a || null == D(a, 1)) return !1;
        a = D(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function cB(a, b, c, d, e) {
        this.l = a;
        this.m = b;
        this.j = c;
        this.A = d;
        this.v = e || null
    }

    function dB(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            bB(a.j) && (b = new ZA(a.l, a.A, a.v || se(a.j, hq, 4), a.m), Jx(b.j), $A(b), b = !0);
            var c;
            a: if ((c = a.j) && null != D(c, 3)) switch (c = D(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (OA(new NA(a.l, a.A, a.v || se(a.j, hq, 4))), b = !0);
            if (c = (c = a.j) ? !0 === je(c, 5) : !1) c = ((c = a.j) ? !0 === je(c, 6) : !1) || S(pr);
            c && (b = !0);
            b && (a.m.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    };

    function eB(a, b, c, d, e, f) {
        try {
            var g = a.j,
                h = yi("SCRIPT", g);
            h.async = !0;
            Yg(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", function() {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", function() {
                0 < c ? eB(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (k) {
            f()
        }
    }

    function fB(a, b, c, d) {
        c = void 0 === c ? function() {} : c;
        d = void 0 === d ? function() {} : d;
        eB(Yh(a), b, 0, !1, c, d)
    };

    function gB(a) {
        a = (void 0 === a ? null : a) || B;
        return a.googlefc || (a.googlefc = {})
    };
    Gf(Um).map(function(a) {
        return Number(a)
    });
    Gf(Vm).map(function(a) {
        return Number(a)
    });

    function hB(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = yi("IFRAME", d);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    d.body.appendChild(e)
                } else a.setTimeout(c, 5)
        }
        var d = a.document;
        c()
    };

    function iB(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function jB(a, b) {
        b = void 0 === b ? {} : b;
        N.call(this);
        this.l = a;
        this.j = null;
        this.B = {};
        this.G = 0;
        var c;
        this.D = null != (c = b.Jg) ? c : 500;
        var d;
        this.v = null != (d = b.wf) ? d : !1;
        this.m = null
    }
    z(jB, N);
    jB.prototype.M = function() {
        this.B = {};
        this.m && (Bf(this.l, "message", this.m), delete this.m);
        delete this.B;
        delete this.l;
        delete this.j;
        N.prototype.M.call(this)
    };

    function kB(a) {
        return "function" === typeof a.l.__tcfapi || null != lB(a)
    }

    function mB(a, b) {
        var c = {
                internalErrorState: 0,
                internalBlockOnErrors: a.v
            },
            d = vf(function() {
                return b(c)
            }),
            e = 0; - 1 !== a.D && (e = setTimeout(function() {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.D));
        nB(a, "addEventListener", function(f) {
            f && (c = f, c.internalErrorState = iB(c), c.internalBlockOnErrors = a.v, oB(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), nB(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }
    jB.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = iB(d), d.internalBlockOnErrors = c.v, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.v
            },
            e = vf(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.D && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.D));
        try {
            nB(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    jB.prototype.removeEventListener = function(a) {
        a && a.listenerId && nB(this, "removeEventListener", null, a.listenerId)
    };

    function pB(a) {
        var b = void 0 === b ? !1 : b;
        return oB(a) ? !1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length ? !0 : qB(a, "1") : !1
    }

    function qB(a, b) {
        var c = void 0 === c ? "755" : c;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (void 0 !== d) {
                    d = d[void 0 === c ? "755" : c];
                    break a
                }
            }
            d = void 0
        }
        if (0 === d) return !1;
        a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function nB(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
        else if (lB(a)) {
            rB(a);
            var e = ++a.G;
            a.B[e] = c;
            a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function lB(a) {
        if (a.j) return a.j;
        a.j = Ri(a.l, "__tcfapiLocator");
        return a.j
    }

    function rB(a) {
        a.m || (a.m = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, I(a.l, "message", a.m))
    }

    function oB(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = iB(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Zj({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function sB(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(function(c) {
            return qB(a, c)
        })
    };

    function tB(a, b) {
        this.j = a;
        this.l = b
    }
    tB.prototype.start = function() {
        if (this.j === this.j.top) try {
            hB(this.j, "googlefcPresent"), uB(this)
        } catch (a) {}
    };

    function aB(a, b, c) {
        var d = gB(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: function() {
                var e = gB(a.j),
                    f = new jB(a.j);
                kB(f) && mB(f, function(g) {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Cg: e.getDefaultConsentRevocationText(),
                        Bf: e.getDefaultConsentRevocationCloseText(),
                        pf: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: function() {
                            return e.showRevocationMessage()
                        }
                    })
                });
                c()
            }
        })
    }

    function uB(a) {
        var b = $f( of ("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        fB(a.j, b, function() {}, function() {})
    };

    function vB(a, b, c) {
        var d = F(a, bq, 6);
        if (!d) return [];
        c = rw(se(d, aq, 1), c);
        return (a = Bq(a)) && je(a, 11) ? c.map(function(e) {
            return Fu(e)
        }) : c.map(function(e) {
            var f = ep();
            return new gu(new Cu(e.Jc, e.Kc), new Au, new Bu(b), !0, 2, [], f, e.l, null, null, null, e.m, e.j)
        })
    };

    function wB(a) {
        H.call(this, a)
    }
    z(wB, H);
    wB.prototype.getHeight = function() {
        return xe(this, 2)
    };

    function xB(a) {
        H.call(this, a, -1, yB)
    }
    z(xB, H);

    function zB(a, b) {
        return E(a, 1, b)
    }

    function AB(a, b) {
        return ve(a, 2, b)
    }
    var yB = [2];

    function BB(a) {
        H.call(this, a, -1, CB)
    }
    z(BB, H);
    var CB = [5];

    function DB(a) {
        H.call(this, a)
    }
    z(DB, H);
    var EB = [1, 2];

    function FB() {}
    FB.prototype.j = function(a) {
        return GB(Math.floor(a.l))
    };

    function GB(a) {
        a = Math.floor(a);
        var b = {};
        return new fp(["pedestal_container"], (b.google_reactive_ad_format = 30, b.google_phwr = 2.189, b.google_ad_width = a, b.google_ad_format = "autorelaxed", b.google_full_width_responsive = !0, b.google_enable_content_recommendations = !0, b.google_content_recommendation_ui_type = "pedestal", b))
    };

    function HB(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c;
        a = null == (c = dn(a)) ? void 0 : c.tagSpecificState[1];
        if (null == a) c = null;
        else {
            var d;
            c = 4 === (null == (d = a.debugCard) ? void 0 : d.getAdType()) ? a.debugCard : null
        }(d = c) && d.displayAdLoadedContent(b)
    };

    function IB(a) {
        H.call(this, a)
    }
    z(IB, H);

    function JB() {
        this.B = this.F = this.m = this.Mc = null;
        this.l = this.v = 0
    }

    function KB(a, b) {
        if (!b) return !1;
        var c = b.adClient;
        if ("string" !== typeof c || !c) return !1;
        a.Mc = c;
        a.m = !!b.adTest;
        c = b.pubVars;
        Sa(c) && (a.F = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
            a.B = {};
            c = y(b.fillMessage);
            for (var d = c.next(); !d.done; d = c.next()) d = d.value, a.B[d.key] = d.value
        }
        a.v = b.adWidth;
        a.l = b.adHeight;
        Gj(a.v) && Gj(a.l) || xm("rctnosize", b);
        return !0
    }
    JB.prototype.D = function() {
        return !0
    };

    function LB(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return Yb(b, function(d) {
            return c - d < 1E3 * a
        })
    }

    function MB(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || ac(d, function(e) {
                    return !t(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = LB(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    }

    function NB(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : MB(a, b)
    }

    function OB(a) {
        return !!a && 1 > a.length
    };

    function PB(a, b, c) {
        var d = 0;
        try {
            d |= fn(a), d |= jn(a), d |= gn(a), d |= a.innerHeight >= a.innerWidth ? 0 : 8, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0, b && !OB(NB(c, 3600)) && (d |= 134217728), S(Sr) && (d |= 128)
        } catch (e) {
            d |= 32
        }
        return d
    };

    function QB() {
        JB.call(this);
        this.A = !1;
        this.j = null;
        this.C = !1
    }
    z(QB, JB);
    QB.prototype.D = function(a) {
        this.A = !!a.enableAma;
        var b = a.amaConfig;
        if (b) try {
            var c = Dq(b)
        } catch (d) {
            c = null
        } else c = null;
        this.j = c;
        Array.isArray(a.fillMessage) && (this.C = !0);
        return !0
    };
    var RB = {};

    function SB(a, b, c) {
        var d = TB(a, c, b);
        if (!d) return !0;
        for (var e = -1, f = c.B.l; d.Nb && d.Nb.length;) {
            var g = d.Nb.shift(),
                h = nu(g.W),
                k = g.ca.j,
                l = !!c.m.Id || !!c.m.Nd || c.Ea() || !!c.m.fe || k > e;
            h = !h || h <= d.Wb;
            if (l && h && UB(c, g, {
                    mb: d.Wb
                })) {
                e = k;
                if (d.Vb.j.length + 1 >= f) return !0;
                d = TB(a, c, b);
                if (!d) return !0
            }
        }
        return c.v
    }

    function TB(a, b, c) {
        var d = b.B.l,
            e = b.B.v,
            f = b.B;
        f = Bv(b.U(), f.j ? f.j.xb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = nn(f.m).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Av(f)) : e = void 0;
        a = null == e || 50 <= e ? VB(b, f, {
            types: a
        }, c) : null;
        return {
            Vb: f,
            Wb: e,
            Nb: a
        }
    }
    RB[2] = ab(function(a, b) {
        a = VB(b, Bv(b.U()), {
            types: a,
            Ya: fv(b.U())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (UB(b, a[c])) return !0;
        return b.v ? (b.A.push(11), !0) : !1
    }, [0]);
    RB[5] = ab(SB, [0], 5);
    RB[10] = ab(function(a, b) {
        a = [];
        var c = b.P;
        t(c, "includes").call(c, 3) && a.push(2);
        t(c, "includes").call(c, 1) && a.push(0);
        t(c, "includes").call(c, 2) && !S(br) && a.push(1);
        return SB(a, 10, b)
    }, 10);
    RB[3] = function(a) {
        if (!a.v) return !1;
        var b = VB(a, Bv(a.U()), {
            types: [0],
            Ya: fv(a.U())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (UB(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };

    function WB(a) {
        var b;
        a.m.Ye ? b = new Vu(0, null, [], 3, null) : b = fv(a.U());
        return {
            types: [0],
            Ya: b
        }
    }

    function XB(a) {
        var b = a.U().document.body.getBoundingClientRect().width;
        YB(a, GB(b))
    }

    function ZB(a, b) {
        var c = WB(a);
        c.zg = [5];
        c = VB(a, Bv(a.U()), c, 8);
        $B(a, c.reverse(), b)
    }

    function $B(a, b, c) {
        b = y(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = c.j(d.ca);
            if (UB(a, d, {
                    ub: e
                })) return !0
        }
        return !1
    }
    RB[8] = function(a) {
        var b = a.U().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", function() {
            return RB[8](a)
        }, {
            once: !0
        }), !0;
        if (!a.v) return !1;
        if (!a.Kb()) return !0;
        b = WB(a);
        b.Cd = [2, 4, 5];
        b = VB(a, Bv(a.U()), b, 8);
        var c = new FB;
        if ($B(a, b, c)) return !0;
        if (a.m.he) switch (a.m.Le || 0) {
            case 1:
                ZB(a, c);
                break;
            default:
                XB(a)
        }
        return !0
    };
    RB[6] = ab(SB, [2], 6);
    RB[7] = ab(SB, [1], 7);
    RB[9] = function(a) {
        var b = TB([0, 2], a, 9);
        if (!b || !b.Nb) return a.A.push(17), HB(a.U()), a.v;
        for (var c = y(b.Nb), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.m.Zc || null;
            if (null == e) var f = null;
            else {
                f = d.W;
                e = new aC(e, a.U());
                var g = new bC;
                f = new gu(f.G, (void 0 === g ? null : g) || f.C, (void 0 === e ? null : e) || f.L, f.H, f.ib, f.sc, f.Dc, f.m, f.ia, f.D, f.v, f.B, f.P);
                f = new uu(f, d.Z(), d.ca)
            }
            if (f && !(nu(f.W) > b.Wb) && UB(a, f, {
                    mb: b.Wb,
                    wb: !0
                })) return a = f.W.N, ju(d.W, 0 < a.length ? a[0] : null), !0
        }
        a.A.push(17);
        HB(a.U());
        return a.v
    };

    function bC() {}
    bC.prototype.l = function(a, b, c, d) {
        b = void 0 === b ? null : b;
        d = qt(d.document, {});
        rt(d, a, null, b);
        return d
    };
    bC.prototype.m = function(a) {
        return mn(a) || 0
    };

    function cC(a, b, c) {
        this.l = a;
        this.j = b;
        this.Vb = c
    }
    cC.prototype.ka = function(a) {
        return this.j ? $v(this.l, this.j, a, this.Vb) : Zv(this.l, a, this.Vb)
    };
    cC.prototype.la = function() {
        return this.j ? 16 : 9
    };

    function dC(a) {
        this.Nc = a
    }
    dC.prototype.ka = function(a) {
        return gw(a.document, this.Nc)
    };
    dC.prototype.la = function() {
        return 11
    };

    function eC(a) {
        this.ob = a
    }
    eC.prototype.ka = function(a) {
        return dw(this.ob, a)
    };
    eC.prototype.la = function() {
        return 13
    };

    function fC() {}
    fC.prototype.ka = function(a) {
        return Xv(a)
    };
    fC.prototype.la = function() {
        return 12
    };

    function gC(a) {
        this.Fb = a
    }
    gC.prototype.ka = function() {
        return bw(this.Fb)
    };
    gC.prototype.la = function() {
        return 2
    };

    function hC(a) {
        this.j = a
    }
    hC.prototype.ka = function() {
        return ew(this.j)
    };
    hC.prototype.la = function() {
        return 3
    };

    function iC() {}
    iC.prototype.ka = function() {
        return hw()
    };
    iC.prototype.la = function() {
        return 17
    };

    function jC(a) {
        this.j = a
    }
    jC.prototype.ka = function() {
        return aw(this.j)
    };
    jC.prototype.la = function() {
        return 1
    };

    function kC() {}
    kC.prototype.ka = function() {
        return tf(pu)
    };
    kC.prototype.la = function() {
        return 7
    };

    function lC(a) {
        this.Cd = a
    }
    lC.prototype.ka = function() {
        return cw(this.Cd)
    };
    lC.prototype.la = function() {
        return 6
    };

    function mC(a) {
        this.j = a
    }
    mC.prototype.ka = function() {
        return fw(this.j)
    };
    mC.prototype.la = function() {
        return 5
    };

    function nC(a, b) {
        this.minWidth = a;
        this.maxWidth = b
    }
    nC.prototype.ka = function() {
        return ab(iw, this.minWidth, this.maxWidth)
    };
    nC.prototype.la = function() {
        return 10
    };

    function oC(a) {
        this.v = a.l.slice(0);
        this.l = a.j.slice(0);
        this.m = a.m;
        this.A = a.v;
        this.j = a.A
    }

    function pC() {
        this.m = 0;
        this.v = !1;
        this.l = [].slice(0);
        this.j = [].slice(0)
    }

    function qC(a) {
        var b = new pC;
        b.A = a;
        b.l.push(new jC(a));
        return b
    }

    function rC(a, b) {
        a.l.push(new lC(b));
        return a
    }

    function sC(a, b) {
        a.l.push(new gC(b));
        return a
    }

    function tC(a, b) {
        a.l.push(new mC(b));
        return a
    }

    function uC(a, b) {
        a.l.push(new hC(b));
        return a
    }

    function vC(a) {
        a.l.push(new kC);
        return a
    }

    function wC(a) {
        a.j.push(new fC);
        return a
    }

    function xC(a, b, c, d) {
        a.j.push(new cC(void 0 === b ? 0 : b, c, d));
        return a
    }

    function yC(a, b, c) {
        c = void 0 === c ? Infinity : c;
        a.j.push(new nC(void 0 === b ? 0 : b, c));
        return a
    }

    function zC(a) {
        a.j.push(new iC);
        return a
    }

    function AC(a, b) {
        a.j.push(new eC(void 0 === b ? 0 : b));
        return a
    }

    function BC(a, b) {
        a.m = b;
        return a
    }
    pC.prototype.build = function() {
        return new oC(this)
    };

    function aC(a, b) {
        this.l = a;
        this.m = b
    }
    aC.prototype.j = function() {
        var a = this.l,
            b = this.m,
            c = a.F || {};
        c.google_ad_client = a.Mc;
        c.google_ad_height = mn(b) || 0;
        c.google_ad_width = hn(b) || 0;
        c.google_reactive_ad_format = 9;
        b = new IB;
        E(b, 1, a.A);
        a.j && te(b, 2, a.j);
        a.C && E(b, 3, !0);
        c.google_rasc = df(b);
        a.m && (c.google_adtest = "on");
        return new fp(["fsi_container"], c)
    };
    var CC = Zo(new Xo(0, {})),
        DC = Zo(new Xo(1, {}));

    function EC(a) {
        return a === CC || a === DC
    };

    function FC() {
        this.j = new Bn
    }

    function GC(a, b, c) {
        Dn(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    };

    function HC(a) {
        Ut.call(this, a);
        this.j = {}
    }
    z(HC, Ut);

    function IC(a, b) {
        b && (a.j.apv = D(b, 4), Yd(b, Hp, 23) && (a.j.sat = "" + Ae(F(b, Hp, 23), 1)));
        return a
    }

    function JC(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    HC.prototype.D = function(a) {
        null != a && (this.j.allp = a);
        return this
    };
    HC.prototype.v = function(a) {
        try {
            this.j.su = a.location.hostname
        } catch (b) {
            this.j.su = "_ex"
        }
        a = Ut.prototype.v.call(this, a);
        Jf(a, this.j);
        return a
    };

    function KC(a) {
        return null == a ? null : t(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3)
    };

    function LC(a) {
        HC.call(this, 0);
        t(Object, "assign").call(Object, this, a);
        this.l = {}
    }
    z(LC, HC);

    function MC(a, b) {
        a.l.op = NC(b)
    }

    function OC(a, b, c) {
        PC(a, "fap", b);
        a.l.fad = NC(c)
    }

    function QC(a, b, c) {
        PC(a, "fmp", b);
        a.l.fmd = NC(c)
    }

    function RC(a, b, c) {
        PC(a, "vap", b);
        a.l.vad = NC(c)
    }

    function SC(a, b, c) {
        PC(a, "vmp", b);
        a.l.vmd = NC(c)
    }

    function TC(a, b, c) {
        PC(a, "pap", b);
        a.l.pad = NC(c)
    }

    function UC(a, b, c) {
        PC(a, "pmp", b);
        a.l.pmd = NC(c)
    }

    function VC(a, b) {
        PC(a, "psq", b)
    }
    LC.prototype.v = function(a) {
        a = HC.prototype.v.call(this, a);
        t(Object, "assign").call(Object, a, this.l);
        return a
    };

    function PC(a, b, c) {
        30 >= c.length ? a.l[b] = WC(c) : (a.l[b] = WC(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function WC(a) {
        return a.map(function(b) {
            var c;
            return null != (c = null == b ? void 0 : b.toString()) ? c : "null"
        }).join("~")
    }

    function NC(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : t(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3)
    };

    function XC() {
        this.v = this.H = this.A = null;
        this.G = this.D = !1;
        this.m = null;
        this.L = this.B = this.K = !1;
        this.C = null;
        this.l = new Bn;
        this.j = new Bn;
        this.I = []
    }

    function YC(a, b) {
        ZC(a, b, function(c) {
            c.j = !0
        })
    }

    function $C(a, b) {
        ZC(a, b, function(c) {
            c.l = !0
        })
    }

    function aD(a, b) {
        ZC(a, b, function(c) {
            c.m = !0
        });
        a.I.push(b.W)
    }

    function bD(a, b, c) {
        ZC(a, b, function(d) {
            d.kb = c
        })
    }

    function ZC(a, b, c) {
        var d = b.W;
        if (!Dn(a.j, d)) {
            var e;
            a.j.set(d, new cD(null != (e = No(wu(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function dD(a, b, c) {
        var d = [],
            e = 0;
        b = y(c.filter(b));
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var f = void 0;
            EC(null != (f = c.kb) ? f : "") ? ++e : (f = void 0, c = a.l.get(null != (f = c.kb) ? f : "", null), d.push(c))
        }
        return {
            list: d.sort(function(g, h) {
                return (null != g ? g : -1) - (null != h ? h : -1)
            }),
            lb: e
        }
    }

    function eD(a, b) {
        MC(b, a.l.Ib());
        var c = Fn(a.j).filter(function(f) {
                return 0 === (t(f.Ga, "startsWith").call(f.Ga, CC) ? 0 : 1)
            }),
            d = Fn(a.j).filter(function(f) {
                return 1 === (t(f.Ga, "startsWith").call(f.Ga, CC) ? 0 : 1)
            }),
            e = dD(a, function(f) {
                return f.j
            }, c);
        OC(b, e.list, e.lb);
        e = dD(a, function(f) {
            return f.j
        }, d);
        QC(b, e.list, e.lb);
        e = dD(a, function(f) {
            return f.l
        }, c);
        RC(b, e.list, e.lb);
        e = dD(a, function(f) {
            return f.l
        }, d);
        SC(b, e.list, e.lb);
        c = dD(a, function(f) {
            return f.m
        }, c);
        TC(b, c.list, c.lb);
        d = dD(a, function(f) {
            return f.m
        }, d);
        UC(b,
            d.list, d.lb);
        VC(b, a.I.map(function(f) {
            var g;
            return null == (g = a.j.get(f)) ? void 0 : g.kb
        }).map(function(f) {
            var g;
            return null != (g = a.l.get(f)) ? g : null
        }))
    }

    function hl() {
        var a = om(XC);
        if (!a.A) return Wk();
        var b, c, d, e = dl(cl(bl(al($k(Zk(Yk(Xk(Vk(Uk(new Sk, null != (b = a.A) ? b : []), null != (c = a.H) ? c : []), a.B), a.D), a.G), a.K), a.L), null != (d = a.C) ? d : 0), Fn(a.j).map(function(f) {
            var g;
            var h = new Rk;
            h = De(h, 1, f.Ga);
            var k = a.l.get(null != (g = f.kb) ? g : "", -1);
            g = Be(h, 2, k);
            g = He(g, 3, f.j);
            return He(g, 4, f.l)
        })), a.I.map(function(f) {
            var g;
            return null == (g = a.j.get(f)) ? void 0 : g.kb
        }).map(function(f) {
            var g;
            return null != (g = a.l.get(f)) ? g : null
        }));
        null != a.m && He(e, 6, a.m);
        null != a.v && ne(e, 13, a.v, 0);
        return e
    }

    function cD(a) {
        this.m = this.l = this.j = !1;
        this.kb = null;
        this.Ga = a
    };

    function fD(a) {
        this.j = void 0 === a ? 0 : a
    };

    function gD(a) {
        this.l = a;
        this.j = -1
    };

    function hD(a) {
        for (var b = 0; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function iD(a) {
        this.j = a;
        this.m = new Bn;
        var b;
        this.v = ((null == (b = F(a, uq, 2)) ? void 0 : se(b, tq, 1)) || []).map(function(c) {
            var d = Yo(G(c, 1)),
                e = ze(c, 2);
            return {
                dc: d,
                sg: e,
                Ga: G(c, 1)
            }
        });
        this.l = []
    }

    function jD(a) {
        var b, c;
        return null != (c = null == (b = F(a.j, oq, 5)) ? void 0 : ze(b, 1)) ? c : null
    }

    function kD(a, b) {
        var c = a.v.filter(function(d) {
            return En(d.dc).every(function(e) {
                return d.dc.get(e) === b.get(e)
            })
        });
        return 0 === c.length ? (a.l.push(19), null) : c.reduce(function(d, e) {
            return d.dc.Ib() > e.dc.Ib() ? d : e
        }, c[0])
    }

    function lD(a, b) {
        b = wu(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Dn(a.m, b)) return a.m.get(b);
        var c = Yo(b);
        c = kD(a, c);
        a.m.set(b, c);
        return c
    }

    function mD(a, b) {
        var c, d;
        return null != (d = null == (c = lD(a, b)) ? void 0 : c.sg) ? d : Number.MAX_VALUE
    }

    function nD(a, b) {
        var c = V(qr) || 0;
        if (0 == b.length || 0 == c) return !0;
        var d = (new Ho(b)).filter(function(e) {
            var f;
            e = (null == (f = lD(a, e)) ? void 0 : f.Ga) || "";
            return "" != e && !EC(e)
        });
        return c <= d.j.length / b.length
    };

    function oD(a, b, c) {
        c = void 0 === c ? null : c;
        this.m = new gD(a);
        this.l = new fD(void 0 === b ? 0 : b);
        this.j = c && new iD(c)
    }

    function pD(a, b) {
        return 0 == b.j.length ? b : b.sort(function(c, d) {
            return mD(a.j, c) - mD(a.j, d)
        })
    }

    function qD(a, b) {
        return 0 == b.j.length ? b : b.sort(function(c, d) {
            return rD(a, c) - rD(a, d)
        })
    }

    function sD(a, b) {
        return b.sort(function(c, d) {
            var e = c.W.D,
                f = d.W.D,
                g;
            null == e || null == f ? g = null == e && null == f ? rD(a, c) - rD(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }

    function rD(a, b) {
        var c = b.ca.j,
            d = Math,
            e = d.min,
            f = b.Z(),
            g = b.W.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? hD(f.parentElement) : hD(f));
        d = a.m;
        0 > d.j && (d.j = nn(d.l).scrollHeight || 0);
        d = d.j - b.ca.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.Z();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    };

    function tD(a, b, c, d) {
        this.l = new Ho(a);
        this.j = new oD(b, void 0 === c ? 0 : c, void 0 === d ? null : d);
        this.m = b;
        this.v = new FC
    }

    function uD(a) {
        a.l.forEach(function(b) {
            b.l && Ts(b.l);
            b.l = null
        })
    }

    function vD(a, b, c) {
        c = void 0 === c ? 0 : c;
        for (var d = a.l, e = y(b.v), f = e.next(); !f.done; f = e.next()) f = f.value, d = Io(d, f.ka(a.m), wD(f.la(), c));
        e = d = d.apply(Wv(a.m));
        var g = y(b.l);
        for (f = g.next(); !f.done; f = g.next()) f = f.value, e = Io(e, f.ka(a.m), xD(f.la(), c));
        switch (b.m) {
            case 1:
                e = qD(a.j, e);
                break;
            case 2:
                e = sD(a.j, e);
                break;
            case 3:
                var h = om(XC);
                e = pD(a.j, e);
                d.forEach(function(l) {
                    YC(h, l);
                    var m;
                    null != (m = a.j.j) && (m = lD(m, l), null != (null == m ? void 0 : m.Ga) && bD(om(XC), l, m.Ga))
                });
                e.forEach(function(l) {
                    return $C(h, l)
                })
        }
        b.A && (e = Ko(e, Vh(a.m.location.href +
            a.m.localStorage.google_experiment_mod)));
        var k;
        1 === (null == (k = b.j) ? void 0 : k.length) && GC(a.v, b.j[0], {
            rf: d.j.length,
            Pg: e.j.length
        });
        return Jo(e)
    }

    function wD(a, b) {
        return function(c) {
            return iu(c, b, a)
        }
    }

    function xD(a, b) {
        return function(c) {
            return iu(c.W, b, a)
        }
    };

    function yD(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = zD(AD(c), a);
                    break a;
                case 3:
                    a = zD(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = zD(e ? 1 == e.nodeType ? e : AD(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !BD(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Nq(b) && 0 >= b.offsetWidth);
        return d
    }

    function zD(a, b) {
        if (!a) return !1;
        a = zi(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function AD(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function BD(a) {
        return !!a.nextSibling || !!a.parentNode && BD(a.parentNode)
    };
    var CD = !sc && !Qb();

    function DD(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (CD && a.dataset) {
            if (Sb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function ED(a, b, c) {
        if (!b) return null;
        var d = gi(document, "INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c),
                f = "";
            if (e && "static" != e.position) {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g != c;) {
                    if ("none" != a.getComputedStyle(g).display) {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f) d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height =
                "2000px";
            c = mn(a);
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && 0 < c && 0 < g && (f = g - h);
            a = k - h >= .8 * f
        } else a = !1;
        return a ? d : (b.removeChild(d), null)
    }

    function FD(a) {
        var b = a.document.body,
            c = ED(a, b, null);
        if (c) return c;
        if (a.document.body) {
            c = Math.floor(a.document.body.getBoundingClientRect().width);
            for (var d = [{
                    element: a.document.body,
                    depth: 0,
                    height: 0
                }], e = -1, f = null; 0 < d.length;) {
                var g = d.pop(),
                    h = g.element,
                    k = g.height;
                0 < g.depth && k > e && (e = k, f = h);
                if (5 > g.depth)
                    for (k = 0; k < h.children.length; k++) {
                        var l = h.children[k],
                            m = l.getBoundingClientRect().width;
                        (null == m || null == c ? 0 : m >= .9 * c && m <= 1.01 * c) && d.push({
                            element: l,
                            depth: g.depth + 1,
                            height: l.getBoundingClientRect().height
                        })
                    }
            }
            c =
                f
        } else c = null;
        return c ? ED(a, c.parentNode || b, c) : null
    }

    function GD(a) {
        var b = 0;
        try {
            b |= fn(a), qi() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), HD(a) && (b |= 33554432)
        } catch (c) {
            b |= 32
        }
        return b
    }

    function HD(a) {
        a = a.document.getElementsByClassName("adsbygoogle");
        for (var b = 0; b < a.length; b++)
            if ("autorelaxed" == DD(a[b])) return !0;
        return !1
    };

    function ID(a, b) {
        this.l = a;
        this.j = b;
        this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
    }

    function JD(a, b, c, d) {
        var e = qi() && !(900 <= hn(a.l));
        d = Yb(d, function(f) {
            return bc(a.m, f)
        }).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Gf,
            pg_h: KD(a.j.vd),
            pg_w: KD(a.j.mg),
            pg_hs: KD(a.j.lg),
            c: KD(a.j.cg),
            aa_c: KD(a.j.qf),
            av_h: KD(a.j.tf),
            av_w: KD(a.j.uf),
            av_a: KD(a.j.sf),
            s: KD(a.j.ig),
            all_s: KD(a.j.hg),
            b: KD(a.j.fg),
            all_b: KD(a.j.eg),
            d: KD(a.j.Vc),
            all_d: KD(a.j.Uc),
            ard: KD(a.j.lf),
            all_ard: KD(a.j.kf),
            pd_h: KD(a.j.ng),
            dt: e ? "m" : "d"
        }
    }

    function LD(a) {
        var b = ln(a, !0),
            c = nn(a).scrollWidth,
            d = nn(a).scrollHeight,
            e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = rn(a),
            g = [],
            h = [],
            k = [],
            l = [],
            m = [],
            n = [],
            p = [],
            v = 0,
            u = 0,
            A = Infinity,
            J = Infinity,
            Y = null,
            aa = mv({
                hb: !1
            }, a);
        aa = y(aa);
        for (var P = aa.next(); !P.done; P = aa.next()) {
            P = P.value;
            var Q = P.getBoundingClientRect(),
                U = b - (Q.bottom + f);
            if (P.className && Ib(P.className, "adsbygoogle-ablated-ad-slot")) {
                var ca = P.getAttribute("google_element_uid");
                var Z = a.google_sv_map;
                if (!ca || !Z || !Z[ca]) continue;
                ca = (Z = Sj(Z[ca])) ? Z.height : 0;
                Z = Z ? Z.width : 0
            } else if (ca = Q.bottom - Q.top, Z = Q.right - Q.left, 1 >= ca || 1 >= Z) continue;
            g.push(ca);
            k.push(Z);
            l.push(ca * Z);
            uv(P) ? (u += 1, P.className && Ib(P.className, "pedestal_container") && (Y = ca)) : (A = Math.min(A, U), n.push(Q), v += 1, h.push(ca), m.push(ca * Z));
            J = Math.min(J, U);
            p.push(Q)
        }
        A = Infinity === A ? null : A;
        J = Infinity === J ? null : J;
        f = MD(n);
        p = MD(p);
        h = ND(b, h);
        n = ND(b, g);
        m = ND(b * c, m);
        aa = ND(b * c, l);
        return new ID(a, {
            Gf: e,
            vd: b,
            mg: c,
            lg: d,
            cg: v,
            qf: u,
            tf: OD(g),
            uf: OD(k),
            sf: OD(l),
            ig: f,
            hg: p,
            fg: A,
            eg: J,
            Vc: h,
            Uc: n,
            lf: m,
            kf: aa,
            ng: Y
        })
    }

    function OD(a) {
        return Ph.apply(null, Yb(a, function(b) {
            return 0 < b
        })) || null
    }

    function ND(a, b) {
        return 0 >= a ? null : Oh.apply(null, b) / a
    }

    function MD(a) {
        for (var b = Infinity, c = 0; c < a.length - 1; c++)
            for (var d = c + 1; d < a.length; d++) {
                var e = a[c],
                    f = a[d];
                e = Math.max(Math.max(0, e.left - f.right, f.left - e.right), Math.max(0, e.top - f.bottom, f.top - e.bottom));
                0 < e && (b = Math.min(e, b))
            }
        return Infinity !== b ? b : null
    }

    function KD(a) {
        return null == a ? null : t(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3)
    };

    function PD(a, b, c, d, e, f) {
        e = void 0 === e ? {} : e;
        f = void 0 === f ? [] : f;
        this.l = a;
        this.C = b;
        this.j = c;
        this.B = d.Ya;
        this.N = d.Fb || [];
        this.H = d.If || null;
        this.L = d.Ff || [];
        this.K = d.Nc || [];
        this.m = e;
        this.v = !1;
        this.I = [];
        this.A = [];
        this.G = this.D = void 0;
        this.P = f
    }

    function QD(a) {
        return a.D ? a.D : a.D = a.j.google_ama_state
    }
    q = PD.prototype;
    q.U = function() {
        return this.j
    };

    function VB(a, b, c, d) {
        var e = c.Ya ? c.Ya : a.B,
            f = Wu(e, b.j.length);
        e = a.m.Ud ? e.j : void 0;
        var g = zC(AC(wC(yC(xC(vC(tC(uC(rC(sC(qC(c.types), a.N), c.Cd || []), a.L), c.zg || [])), f.tc || void 0, e, b), c.minWidth, c.maxWidth)), f.ob || void 0));
        a.K && g.j.push(new dC(a.K));
        b = 1;
        a.m.Nd ? b = 2 : a.Ea() && (b = 3);
        BC(g, b);
        a.m.Id && (g.v = !0);
        return At(995, function() {
            return vD(a.l, g.build(), d)
        }, a.j)
    }
    q.ra = function(a) {
        this.I.push(a)
    };

    function UB(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.mb ? void 0 : c.mb,
            e = void 0 === c.ub ? void 0 : c.ub,
            f = void 0 === c.wb ? void 0 : c.wb;
        return At(997, function() {
            return RD(a, b, {
                mb: d,
                ub: e,
                wb: f
            })
        }, a.j)
    }

    function RD(a, b, c) {
        var d = void 0 === c ? {} : c,
            e = void 0 === d.mb ? void 0 : d.mb;
        c = void 0 === d.ub ? void 0 : d.ub;
        d = void 0 === d.wb ? void 0 : d.wb;
        var f = b.W;
        if (f.A) return !1;
        var g = b.Z();
        if (!yD(a.j, f.j(), g, a.v)) return !1;
        var h = null,
            k;
        S($q) && (null == (k = f.sc) ? 0 : t(k, "includes").call(k, 6)) ? (k = Math.round(g.getBoundingClientRect().height), h = null == e ? k : Math.min(e, k)) : h = e;
        e = null == h ? null : new fp(null, {
            google_max_responsive_height: h
        });
        k = hp(D(f.Dc, 2) || 0);
        g = ip(f.D);
        h = SD(a, f);
        var l = TD(a),
            m = gp(a.H, f.L ? f.L.j(b.ca) : null, e, c || null, k, g, h, l),
            n = t(b, "fill").call(b, a.C, m);
        if (d && !UD(a, n, m) || !At(996, function() {
                return VD(a, n, m)
            }, a.j)) return !1;
        Om(9, [f.D, f.ib]);
        a.Ea() && aD(om(XC), b);
        return !0
    }

    function YB(a, b) {
        var c = FD(a.j);
        if (c) {
            var d = gp(a.H, b),
                e = pt(a.j.document, a.C, null, null, {}, d);
            e && (Us(e.cb, c, 2, 256), At(996, function() {
                return VD(a, e, d)
            }, a.j))
        }
    }

    function UD(a, b, c) {
        if (!b) return !1;
        var d = b.wa,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.wa;
        c = c && c.Jb() || {};
        if (d === d.top)
            if (488 > hn(d))
                if (d.innerHeight >= d.innerWidth) {
                    var g = hn(d);
                    if (!g || .3 < (g - f) / g) g = 6;
                    else {
                        if (g = "true" != c.google_full_width_responsive) b: {
                            g = hn(d);
                            for (var h = e.parentElement; h; h = h.parentElement) {
                                var k = zi(h, d);
                                if (k) {
                                    var l = Ki(k.width);
                                    if (l && !(l >= g) && "visible" != k.overflow) {
                                        g = !0;
                                        break b
                                    }
                                }
                            }
                            g = !1
                        }
                        g = g ? 7 : !0
                    }
                } else g = 5;
        else g = 4;
        else g = wi(d) ? 3 : 16;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = zi(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = hn(d), f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.wa;
            if (f = lt(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", jt(b, f, "0px"), b.style.width = hn(a) + "px", mt(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Ts(b.cb);
        return !1
    }

    function VD(a, b, c) {
        if (!b) return !1;
        try {
            st(a.j, b.wa, c)
        } catch (d) {
            return Ts(b.cb), a.A.push(6), !1
        }
        return !0
    }
    q.Ea = function() {
        var a = this,
            b, c;
        if (0 == (null != (c = null == (b = this.l.j.j) ? void 0 : [].concat(ma(Ce(b.j, 1))).length) ? c : 0)) return !1;
        if (0 == (V(qr) || 0)) return !0;
        if (void 0 === this.G) {
            var d = BC(wC(vC(qC([0, 1, 2]))), 1).build();
            b = At(995, function() {
                return vD(a.l, d)
            }, this.j);
            var e;
            this.G = (null == (e = this.l.j.j) ? void 0 : nD(e, b)) || !1
        }
        return this.G
    };
    q.qc = function() {
        return !!this.m.Re
    };
    q.Kb = function() {
        return !HD(this.j)
    };

    function SD(a, b) {
        return No(Qo(su(b).map(jp), function() {
            a.A.push(18)
        }))
    }

    function TD(a) {
        if (!a.Ea()) return null;
        var b, c = null == (b = a.l.j.j) ? void 0 : [].concat(ma(ke(b.j, 4, Sd)));
        if (null == c) return null;
        b = c.join("~");
        var d, e;
        a = null != (e = null == (d = a.l.j.j) ? void 0 : jD(d)) ? e : null;
        d = void 0 === a ? null : a;
        null == b ? d = null : (e = {
            google_daaos_ts: b
        }, null != d && (e.google_erank = d + 1), d = new fp(null, e));
        return d
    }

    function WD(a, b) {
        b = (mn(b) || 0) - rn(b);
        for (var c = 0, d = 0; d < a.length; d++) {
            var e = a[d].getBoundingClientRect();
            Ev(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function XD(a) {
        var b = {},
            c = wv({
                hb: !1,
                kc: !1,
                lc: !1,
                mc: !1
            }, a).map(function(d) {
                return d.getBoundingClientRect()
            }).filter(Ev);
        b.Rd = c.length;
        c = xv({
            lc: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Ev);
        b.ge = c.length;
        c = xv({
            mc: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Ev);
        b.De = c.length;
        c = xv({
            kc: !0
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Ev);
        b.Xd = c.length;
        c = (mn(a) || 0) - rn(a);
        c = wv({
            hb: !1
        }, a).map(function(d) {
            return d.getBoundingClientRect()
        }).filter(Ev).filter($a(YD,
            null, c));
        b.Sd = c.length;
        a = LD(a);
        c = null != a.j.Vc ? a.j.Vc : null;
        null != c && (b.ze = c);
        a = null != a.j.Uc ? a.j.Uc : null;
        null != a && (b.Td = a);
        return b
    }

    function YD(a, b) {
        return b.top <= a
    };

    function ZD(a, b, c, d, e, f, g) {
        this.Da = a;
        this.Bc = void 0 === f ? 0 : f;
        this.Ac = void 0 === g ? 0 : g;
        this.errors = b;
        this.Ua = c;
        this.j = d;
        this.l = e
    };

    function $D(a, b, c) {
        this.v = a.slice(0);
        this.l = a.slice(0);
        this.m = cc(this.l, 1);
        this.j = b;
        this.A = c
    }

    function aE(a, b) {
        return new r.Promise(function(c) {
            setTimeout(function() {
                c(bE(a, b))
            })
        })
    }

    function cE(a) {
        a.j.v = !0;
        return r.Promise.all(a.l.map(function(b) {
            return aE(a, b)
        })).then(function(b) {
            t(b, "includes").call(b, !1) && a.j.ra(5);
            a.l.splice(0, a.l.length)
        })
    }

    function dE(a) {
        var b = a.j.l.l.filter(pu).j.length,
            c = a.j.I.slice(0);
        var d = a.j;
        var e;
        d = [].concat(ma(d.A), ma((null == (e = d.l.j.j) ? void 0 : [].concat(ma(e.l))) || []));
        return new ZD(b, c, d, a.j.l.l.j.length, a.j.l.v.j, a.j.l.l.filter(pu).filter(qu).j.length, a.j.l.l.filter(qu).j.length)
    }

    function bE(a, b) {
        var c = RB[b];
        return c ? At(998, function() {
            return c(a.j)
        }, a.A) : (a.j.ra(12), !0)
    }

    function eE(a, b, c) {
        var d = {
                Kb: b.Kb(),
                qc: b.qc(),
                Qe: !!b.m.Zc,
                Ea: b.Ea()
            },
            e = void 0 === d ? {} : d;
        d = void 0 === e.Kb ? !1 : e.Kb;
        var f = void 0 === e.qc ? !1 : e.qc,
            g = void 0 === e.Ea ? !1 : e.Ea,
            h = [];
        (void 0 === e.Qe ? 0 : e.Qe) && h.push(9);
        if (g) {
            t(a, "includes").call(a, 4) && !f && d && h.push(8);
            t(a, "includes").call(a, 1) && h.push(1);
            e = t(a, "includes").call(a, 3);
            g = t(a, "includes").call(a, 2) && !S(br);
            var k = t(a, "includes").call(a, 1);
            (e || g || k) && h.push(10)
        } else t(a, "includes").call(a, 3) && h.push(6), t(a, "includes").call(a, 4) && !f && d && h.push(8), t(a, "includes").call(a,
            1) && h.push(1, 5), t(a, "includes").call(a, 2) && !S(br) && h.push(7);
        t(a, "includes").call(a, 4) && f && d && h.push(8);
        return new $D(h, b, c)
    };

    function fE(a) {
        this.j = a;
        this.exception = void 0
    };

    function gE(a) {
        return cE(a).then(function() {
            return new fE(dE(a))
        })
    };

    function hE() {}
    hE.prototype.j = function() {
        var a = {};
        a = (a.google_reactive_ad_format = 40, a.google_tag_origin = "qs", a);
        return new fp([], a)
    };

    function iE() {}
    iE.prototype.j = function() {
        return new fp(["adsbygoogle-resurrected-ad-slot"], {})
    };

    function jE(a) {
        var b = new iE;
        this.j = a;
        this.l = b || null
    }

    function kE(a) {
        return Oq(a.j.document).map(function(b) {
            var c = new Cu(b, 3);
            b = new du(ut(a.j, b));
            return new gu(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    };
    var lE = {
        Md: "10px",
        Rc: "10px"
    };

    function mE(a, b) {
        this.j = a;
        this.l = b || null
    }

    function nE(a) {
        return An(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(function(b) {
            return new gu(new Cu(b, 1), new bu(lE), a.l, !1, 0, [], null, a.j, null)
        })
    };

    function oE(a, b, c) {
        this.D = -1 == c.ic;
        this.v = c.ic;
        this.G = -1 == c.Hb;
        this.A = c.Hb;
        this.C = -1 == c.Mb;
        this.l = c.Mb;
        this.B = c.se;
        this.m = b;
        this.j = a
    }

    function pE(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function qE(a, b, c) {
        var d = pE(c.ic, "gapsMeasurementWindow") || pE(c.Hb, "gapsPerMeasurementWindow") || pE(c.Mb, "maxGapsToReport");
        return null != d ? Ro(d) : c.Wd || -1 != c.Hb || -1 != c.Mb ? Po(new oE(a, b, c)) : Ro("ShouldHaveLimits")
    }

    function rE(a) {
        return QD(a.m) && QD(a.m).placed || []
    }

    function sE(a) {
        return rE(a).map(function(b) {
            return wo(xo(b.element, a.j))
        })
    }

    function tE(a) {
        return rE(a).map(function(b) {
            return b.index
        })
    }

    function uE(a, b) {
        var c = b.W;
        return !a.B && c.v && null != D(c.v, 8) && 1 == D(c.v, 8) ? [] : c.A ? (c.N || []).map(function(d) {
            return wo(xo(d, a.j))
        }) : [wo(new vo(b.ca.j, 0))]
    }

    function vE(a) {
        a.sort(function(g, h) {
            return g.j - h.j
        });
        for (var b = [], c = 0, d = 0; d < a.length; ++d) {
            var e = a[d],
                f = e.j;
            e = e.j + e.l;
            f <= c ? c = Math.max(c, e) : (b.push(new vo(c, f - c)), c = e)
        }
        return b
    }

    function wE(a, b) {
        b = b.map(function(c) {
            var d = new wB;
            d = E(d, 1, c.j);
            c = c.getHeight();
            return E(d, 2, c)
        });
        return AB(zB(new xB, a), b)
    }

    function xE(a) {
        var b = se(a, wB, 2).map(function(c) {
            return "G" + xe(c, 1) + "~" + c.getHeight()
        });
        return "W" + xe(a, 1) + b.join("")
    }

    function yE(a, b) {
        for (var c = [], d = 0, e = y(En(b)), f = e.next(); !f.done; f = e.next()) {
            f = f.value;
            var g = b.get(f);
            g.sort(function(h, k) {
                return k.getHeight() - h.getHeight()
            });
            a.G || g.splice(a.A, g.length);
            !a.C && d + g.length > a.l && g.splice(a.l - d, g.length);
            c.push(wE(f, g));
            d += g.length;
            if (!a.C && d >= a.l) break
        }
        return c
    }

    function zE(a) {
        var b = se(a, xB, 5).map(function(c) {
            return xE(c)
        });
        return "M" + xe(a, 1) + "H" + xe(a, 2) + "C" + xe(a, 3) + "B" + Number(!!Ee(a, 4)) + b.join("")
    }

    function AE(a) {
        for (var b = Lu(Jo(a.m.l.l), a.j), c = sE(a), d = new Gn(tE(a)), e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = uE(a, b[e]);
                c.push.apply(c, ma(f))
            }
        c.push(new vo(0, 0));
        c.push(wo(new vo(nn(a.j).scrollHeight, 0)));
        b = vE(c);
        c = new Bn;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.D ? 0 : Math.floor(e.j / a.v), Dn(c, f) || c.set(f, []), c.get(f).push(e);
        b = yE(a, c);
        c = new BB;
        c = E(c, 1, a.l);
        c = E(c, 2, a.v);
        c = E(c, 3, a.A);
        a = E(c, 4, a.B);
        return ve(a, 5, b)
    }

    function BE(a) {
        a = AE(a);
        return zE(a)
    };

    function CE(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function DE(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function EE(a, b) {
        a = he(a, 2);
        if (!a) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function FE(a, b) {
        a = DE(CE(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Di(a),
            d = GE(a);
        return t(b, "find").call(b, function(e) {
            var f = Yd(e, xp, 7) ? D(F(e, xp, 7), 1) : D(e, 1);
            Yd(e, xp, 7) ? (e = F(e, xp, 7), e = D(e, 2)) : e = 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function GE(a) {
        for (var b = {};;) {
            b[Di(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var HE = {},
        IE = (HE.google_ad_channel = !0, HE.google_ad_host = !0, HE);

    function JE(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        xm("ama", b, .01)
    }

    function KE(a) {
        var b = {};
        Bi(IE, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function LE(a) {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                JE(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            JE(a, {
                lserr: 1
            })
        }
    };

    function ME(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function NE(a, b) {
        a = ME(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        var c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function OE() {
        this.S = {}
    }

    function PE() {
        if (QE) return QE;
        var a = qj() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? QE = b : a.google_persistent_state_async = QE = new OE
    }

    function RE(a, b, c) {
        b = SE[b] || "google_ps_" + b;
        a = a.S;
        var d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function TE(a, b, c) {
        return RE(a, b, function() {
            return c
        })
    }

    function UE(a, b, c) {
        return a.S[SE[b] || "google_ps_" + b] = c
    }

    function VE(a, b) {
        return UE(a, b, TE(a, b, 0) + 1)
    }

    function WE() {
        var a = PE();
        return TE(a, 20, {})
    }

    function XE() {
        var a = PE(),
            b = TE(a, 31, !1);
        b || UE(a, 31, !0);
        return !b
    }

    function YE() {
        var a = PE();
        return TE(a, 26)
    }

    function ZE() {
        var a = PE();
        return TE(a, 28, [])
    }
    var QE = null,
        $E = {},
        SE = ($E[8] = "google_prev_ad_formats_by_region", $E[9] = "google_prev_ad_slotnames_by_region", $E);
    var X = {},
        aF = (X.google_ad_block = "ad_block", X.google_ad_client = "client", X.google_ad_output = "output", X.google_ad_callback = "callback", X.google_ad_height = "h", X.google_ad_resize = "twa", X.google_ad_slot = "slotname", X.google_ad_unit_key = "adk", X.google_ad_dom_fingerprint = "adf", X.google_placement_id = "pi", X.google_daaos_ts = "daaos", X.google_erank = "epr", X.google_ad_width = "w", X.google_captcha_token = "captok", X.google_content_recommendation_columns_num = "cr_col", X.google_content_recommendation_rows_num = "cr_row", X.google_ctr_threshold =
            "ctr_t", X.google_cust_criteria = "cust_params", X.gfwrnwer = "fwrn", X.gfwrnher = "fwrnh", X.google_image_size = "image_size", X.google_last_modified_time = "lmt", X.google_loeid = "loeid", X.google_max_num_ads = "num_ads", X.google_max_radlink_len = "max_radlink_len", X.google_mtl = "mtl", X.google_native_settings_key = "nsk", X.google_enable_content_recommendations = "ecr", X.google_num_radlinks = "num_radlinks", X.google_num_radlinks_per_unit = "num_radlinks_per_unit", X.google_pucrd = "pucrd", X.google_reactive_plaf = "plaf", X.google_reactive_plat =
            "plat", X.google_reactive_fba = "fba", X.google_reactive_sra_channels = "plach", X.google_responsive_auto_format = "rafmt", X.armr = "armr", X.google_plas = "plas", X.google_rl_dest_url = "rl_dest_url", X.google_rl_filtering = "rl_filtering", X.google_rl_mode = "rl_mode", X.google_rt = "rt", X.google_video_play_muted = "vpmute", X.google_source_type = "src_type", X.google_restrict_data_processing = "rdp", X.google_tag_for_child_directed_treatment = "tfcd", X.google_tag_for_under_age_of_consent = "tfua", X.google_tag_origin = "to", X.google_ad_semantic_area =
            "sem", X.google_tfs = "tfs", X.google_package = "pwprc", X.google_tag_partner = "tp", X.fra = "fpla", X.google_ml_rank = "mlr", X.google_apsail = "psa", X.google_ad_channel = "channel", X.google_ad_type = "ad_type", X.google_ad_format = "format", X.google_color_bg = "color_bg", X.google_color_border = "color_border", X.google_color_link = "color_link", X.google_color_text = "color_text", X.google_color_url = "color_url", X.google_page_url = "url", X.google_allow_expandable_ads = "ea", X.google_ad_section = "region", X.google_cpm = "cpm", X.google_encoding =
            "oe", X.google_safe = "adsafe", X.google_font_face = "f", X.google_font_size = "fs", X.google_hints = "hints", X.google_ad_host = "host", X.google_ad_host_channel = "h_ch", X.google_ad_host_tier_id = "ht_id", X.google_kw_type = "kw_type", X.google_kw = "kw", X.google_contents = "contents", X.google_targeting = "targeting", X.google_adtest = "adtest", X.google_alternate_color = "alt_color", X.google_alternate_ad_url = "alternate_ad_url", X.google_cust_age = "cust_age", X.google_cust_ch = "cust_ch", X.google_cust_gender = "cust_gender", X.google_cust_interests =
            "cust_interests", X.google_cust_job = "cust_job", X.google_cust_l = "cust_l", X.google_cust_lh = "cust_lh", X.google_cust_u_url = "cust_u_url", X.google_cust_id = "cust_id", X.google_language = "hl", X.google_city = "gcs", X.google_country = "gl", X.google_region = "gr", X.google_content_recommendation_ad_positions = "ad_pos", X.google_content_recommendation_columns_num = "cr_col", X.google_content_recommendation_rows_num = "cr_row", X.google_content_recommendation_ui_type = "crui", X.google_content_recommendation_use_square_imgs = "cr_sq_img",
            X.google_color_line = "color_line", X.google_disable_video_autoplay = "disable_video_autoplay", X.google_full_width_responsive_allowed = "fwr", X.google_full_width_responsive = "fwrattr", X.efwr = "efwr", X.google_pgb_reactive = "pra", X.google_resizing_allowed = "rs", X.google_resizing_height = "rh", X.google_resizing_width = "rw", X.rpe = "rpe", X.google_responsive_formats = "resp_fmts", X.google_safe_for_responsive_override = "sfro", X.google_video_doc_id = "video_doc_id", X.google_video_product_type = "video_product_type", X.google_webgl_support =
            "wgl", X.easpi = "easpi", X.easpa = "easai", X.asgr = "asgr", X.asmrc = "asmrc", X.asntp = "asntp", X.asntpv = "asntpv", X.asntpl = "asntpl", X.asntpm = "asntpm", X.asntpc = "asntpc", X.asna = "asna", X.asnd = "asnd", X.asnp = "asnp", X.asns = "asns", X.asmat = "asmat", X.asptt = "asptt", X.aspe = "aspe", X.asro = "asro", X.ascet = "easct", X.asrc = "asdrc", X.asbu = "asbu", X.aseb = "aseb", X.asla = "aslmt", X.asaa = "asamt", X.asupm = "asupm", X);

    function bF(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function cF(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function dF(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function eF(a, b, c) {
        return La(function(d) {
            return 0 >= c ? d.return(r.Promise.reject()) : b() ? d.return(r.Promise.resolve()) : d.return(new r.Promise(function(e, f) {
                var g = a.setInterval(function() {
                    --c ? b() && (a.clearInterval(g), e()) : (a.clearInterval(g), f())
                }, 200)
            }))
        })
    };

    function fF(a) {
        this.win = qj() || window;
        this.ba = null != a ? a : new nm(100, 100, !0);
        this.state = RE(PE(), 33, function() {
            var b = V(Sq);
            return {
                sd: b,
                ssp: 0 < b && Ai() < 1 / b,
                pc: null,
                wpc: null,
                le: [],
                lgdp: []
            }
        })
    }

    function gF(a, b) {
        var c = new dm;
        var d = hF(a);
        c = Be(c, 1, d);
        c = em(c.Sa(iF(a)), a.state.sd);
        return Be(c, 7, Math.round(b || a.win.performance.now()))
    }

    function hF(a) {
        var b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = aj(a.win)
    }

    function iF(a) {
        var b = a.state.wpc;
        if (null !== b && "" !== b) var c = b;
        else {
            b = a.state;
            a = a.win;
            if (a.google_ad_client) var d = String(a.google_ad_client);
            else {
                var e, f, g;
                if (null != (g = null != (f = null == (d = ME(a).head_tag_slot_vars) ? void 0 : d.google_ad_client) ? f : null == (e = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : e.getAttribute("data-ad-client"))) d = g;
                else {
                    c: {
                        d = a.document.getElementsByTagName("script");e = a.navigator && a.navigator.userAgent || "";e = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                            "i").test(e) || /i(phone|pad|pod)/i.test(e) && /applewebkit/i.test(e) && !/version|safari/i.test(e) && !Qj() ? bF : cF;
                        for (f = d.length - 1; 0 <= f; f--)
                            if (a = d[f], !a.google_parsed_script_for_pub_code && (a.google_parsed_script_for_pub_code = !0, a = e(a))) {
                                d = a;
                                break c
                            }
                        d = null
                    }
                    if (d) {
                        e = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (f = {}; a = e.exec(d);) f[a[1]] = dF(a[2]);
                        d = f.google_ad_client ? f.google_ad_client : ""
                    } else d = ""
                }
                d = null != (c = d) ? c : ""
            }
            c = b.wpc = d
        }
        return c
    }

    function jF(a) {
        return La(function(b) {
            return Ca(b, eF(a.win, function() {
                return !(!hF(a) || !iF(a))
            }, 10), 0)
        })
    }

    function kF(a, b, c) {
        var d;
        return La(function(e) {
            if (1 == e.j) {
                if (!a.j || !c.length || t(a.state.lgdp, "includes").call(a.state.lgdp, Number(b))) return e.return();
                a.state.lgdp.push(Number(b));
                d = a.win.performance.now();
                return Ca(e, jF(a), 2)
            }
            var f = a.ba,
                g = gF(a, d);
            var h = new tl;
            h = Ie(h, 1, b);
            h = le(h, 2, c);
            g = ue(g, 9, fm, h);
            gm(f, g);
            e.j = 0
        })
    }

    function lF(a, b) {
        var c = gF(a);
        b = ue(c, 5, fm, b);
        a.j && !t(a.state.le, "includes").call(a.state.le, 2) && (a.state.le.push(2), gm(a.ba, b))
    }

    function mF(a, b) {
        La(function(c) {
            if (1 == c.j) return Ca(c, jF(a), 2);
            var d = a.ba;
            var e = em(gF(a), 1);
            e = ue(e, 6, fm, b);
            gm(d, e);
            c.j = 0
        })
    }
    ia.Object.defineProperties(fF.prototype, {
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state.ssp
            }
        }
    });

    function nF(a, b, c, d, e, f, g, h, k, l) {
        var m = null,
            n = !0;
        g = void 0 === g ? null : g;
        m = void 0 === m ? null : m;
        h = void 0 === h ? null : h;
        k = void 0 === k ? null : k;
        n = void 0 === n ? !0 : n;
        if (c)
            if (d) {
                var p = fA(d, e, a.location);
                try {
                    var v = new oF(a, b, c, d, e, p, f, g, m, h, k, l, n);
                    At(990, function() {
                        return pF(v)
                    }, a)
                } catch (u) {
                    Nm() && Om(15, [u]), Yt(b, Kt, Wt(JC(IC((new HC(0)).Sa(c), d), p).ra(1), u)), lF(om(fF), ll(new el, Hk(1)))
                }
            } else Yt(b, Kt, (new HC(0)).Sa(c).ra(8)), lF(om(fF), ll(new el, Hk(8)));
        else Yt(b, Kt, (new HC(0)).ra(9)), lF(om(fF), ll(new el, Hk(9)))
    }

    function oF(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        this.l = a;
        this.A = b;
        this.B = c;
        this.j = d;
        this.m = e;
        this.C = f;
        this.ia = h || null;
        this.H = [];
        this.Ca = k;
        this.I = l;
        this.L = m;
        this.Wa = g;
        this.K = 0;
        this.Ka = n ? n : {
            url: a.location.href,
            Rb: void 0
        };
        this.G = "n";
        this.Xa = void 0 === p ? !0 : p
    }

    function pF(a) {
        a.C.forEach(function(b) {
            switch (b) {
                case 0:
                    At(991, function() {
                        return qF(a)
                    }, a.l);
                    break;
                case 1:
                    At(1073, function() {
                        var c = S(kr),
                            d = a.m.V ? he(a.m.V, 2) : [];
                        c && 0 == d.length || Sz(new Rz(a.l, a.A, a.j, a.B, a.m.V, c))
                    }, a.l);
                    break;
                case 5:
                    pz(new oz(a.l, a.A, a.j, a.B));
                    break;
                case 2:
                    rF(a);
                    break;
                case 3:
                    sF(a);
                    break;
                case 4:
                    tF(a)
            }
        })
    }

    function qF(a) {
        uF(a);
        if (Aq(a.j) && 1 === D(Aq(a.j), 1)) {
            var b = F(Aq(a.j), np, 6);
            b && 2 === D(b, 1) && (tt(a.l), a.G = "b")
        }
        var c = a.m.qg;
        b = dv(a.l, c);
        if (a.m.V && Yd(a.m.V, wp, 10)) {
            var d = ie(F(a.m.V, wp, 10), 1);
            null !== d && void 0 !== d && (b = Xu(a.l, d, c))
        }
        Yd(a.j, tp, 26) && (b = gv(b, F(a.j, tp, 26), a.l));
        c = a.m.V ? he(a.m.V, 6) : [];
        d = a.m.V ? se(a.m.V, Cp, 5) : [];
        var e = a.m.V ? he(a.m.V, 2) : [],
            f = At(993, function() {
                var k = a.j,
                    l = se(k, hq, 1),
                    m = a.m.V && EE(a.m.V, 1) ? "text_image" : "text",
                    n = new hE,
                    p = ou(l, a.l, {
                        vf: n,
                        Xf: new eu(m)
                    });
                l.length != p.length && a.H.push(13);
                p =
                    p.concat(nE(new mE(a.l, n)));
                l = 0;
                n = S(ir);
                var v = !1;
                if (Aq(k) && 1 === D(Aq(k), 1)) {
                    var u = F(Aq(k), np, 6);
                    u && (l = D(u, 2) || 0, 1 === D(u, 1) && (v = !0))
                }
                var A, J, Y;
                u = (null == (A = F(k, wq, 24)) ? void 0 : null == (J = F(A, sq, 3)) ? void 0 : null == (Y = F(J, qq, 3)) ? void 0 : Ge(Y, pq, 2, rq)) || !1;
                if (n || v || u)
                    if (A = kE(new jE(a.l)), J = om(XC), p = p.concat(A), J.K = !0, J.C = A.length, "n" === a.G) {
                        var aa, P;
                        a.G = (null == (aa = F(k, wq, 24)) ? 0 : null == (P = Ce(aa, 1)) ? 0 : P.length) ? "o" : "p"
                    }
                p = p.concat(vB(k, m, a.l));
                k = F(k, wq, 24);
                return new tD(p, a.l, l, k)
            }, a.l);
        a.v = new PD(f, a.B, a.l, {
            Ya: b,
            If: a.ia,
            Fb: a.m.Fb,
            Ff: c,
            Nc: d
        }, vF(a), e);
        var g, h;
        (null == (g = QD(a.v)) ? 0 : null == (h = g.optimization) ? 0 : h.ablatingThisPageview) && !a.v.Ea() && (tt(a.l), om(XC).B = !0, a.G = "f");
        a.D = eE(e, a.v, a.l);
        a.Xa ? At(992, function() {
            return gE(a.D)
        }, a.l).then(At(994, function() {
            return a.P.bind(a)
        }, a.l), a.N.bind(a)) : At(992, function() {
            var k = a.D,
                l = new vn;
            for (k.j.v = !0; 0 < k.l.length;) bE(k, k.l[0]) || k.j.ra(5), k.l.shift();
            try {
                l.resolve(new fE(dE(k)))
            } catch (m) {
                l.reject(m)
            }
            return l.l
        }, a.l).then(At(994, function() {
            return a.P.bind(a)
        }, a.l), a.N.bind(a))
    }

    function rF(a) {
        var b = F(a.j, jq, 18);
        b && dB(new cB(a.l, a.Ca || new tB(a.l, a.B), b, new Ex(a.l), se(a.j, hq, 1)))
    }

    function sF(a) {
        var b = bA(a.l.location, "google_audio_sense") ? Pp() : F(a.j, Op, 27);
        if (b) {
            var c, d = (null == (c = F(a.j, bq, 6)) ? void 0 : se(c, aq, 1)) || [],
                e;
            c = {};
            Oo(Ow(a.l, a.A, b, d, a.Ka, (c.google_ad_client = a.B, c), (null == (e = F(a.j, $p, 22)) ? void 0 : D(e, 1)) || null), function(f) {
                return Mw(f)
            })
        }
    }

    function tF(a) {
        var b = F(a.j, mq, 29);
        if (b) {
            var c, d;
            wF(a.Wa, {
                win: a.l,
                webPropertyCode: a.B,
                me: b,
                Yd: null != (d = null == (c = F(a.j, bq, 6)) ? void 0 : se(c, aq, 1)) ? d : []
            })
        }
    }

    function vF(a) {
        var b = S(jr);
        if (!Bq(a.j)) return {
            Id: b,
            Nd: !1,
            fe: !1,
            Ye: !1,
            he: !1,
            Re: !1,
            og: 0,
            Le: 0,
            Ud: xF(a),
            Zc: a.L
        };
        var c = Bq(a.j);
        b = b || Ee(c, 14, !1);
        var d = Ee(c, 2, !1),
            e = Ee(c, 3, !1),
            f = Ee(c, 4, !1),
            g = Ee(c, 5, !1),
            h = Ee(c, 6, !1);
        var k = 0;
        k = void 0 === k ? 0 : k;
        k = ye(ie(c, 8), k);
        return {
            Id: b,
            Nd: d,
            fe: e,
            Ye: f,
            he: g,
            Re: h,
            og: k,
            Le: D(c, 10),
            Ud: xF(a),
            Zc: a.L
        }
    }

    function yF(a, b) {
        for (var c = Vt(Vt(new HC(b.Da), b.errors), a.H), d = b.Ua, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.B.length; g++)
                if (c.B[g] == f) break a;c.B.push(f)
        }
        c.j.pp = b.Ac;
        c.j.ppp = b.Bc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.Ab;
        c.j.eatfAbg = b.Bb;
        c.j.reatf = b.eb;
        c.j.a = a.D.v.slice(0).join(",");
        c = JC(IC(c, a.j), a.C).Sa(a.B);
        if (d = b.sa) c.j.as_count = d.Rd, c.j.d_count = d.ge, c.j.ng_count = d.De, c.j.am_count = d.Xd, c.j.atf_count = d.Sd, c.j.mdns = KC(d.ze), c.j.alldns = KC(d.Td);
        c = c.D(b.pb);
        if (d = b.Kf) {
            e = [];
            f = y(En(d));
            for (g =
                f.next(); !g.done; g = f.next())
                if (g = g.value, 0 < d.get(g).length) {
                    var h = d.get(g)[0];
                    e.push("(" + [g, h.rf, h.Pg].join() + ")")
                }
            c.j.fd = e.join(",")
        }
        d = b.vd;
        null != d && (c.j.pgh = d);
        c.j.abl = b.qe;
        c.j.rr = a.G;
        void 0 !== b.exception && Wt(c, b.exception).ra(1);
        return c
    }

    function zF(a, b) {
        var c = yF(a, b);
        Yt(a.A, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? 0 < a.K ? Mt : Kt : 0 < a.K ? Lt : Jt, c);
        if (F(a.j, wq, 24)) {
            var d;
            if (null != (d = a.v.l.j.j)) {
                b = om(XC);
                var e = [].concat(ma(Ce(d.j, 1)));
                b.A = e;
                e = [].concat(ma(ke(d.j, 4, Sd)));
                b.H = e;
                e = jD(d);
                null != e && (b.v = e);
                var f, g;
                e = !!(null == (f = F(d.j, sq, 3)) ? 0 : null == (g = F(f, qq, 3)) ? 0 : Ge(g, pq, 2, rq));
                b.G = e;
                f = new Bn;
                var h, k;
                d = y(null != (k = null == (h = F(d.j, uq, 2)) ? void 0 : se(h, tq, 1)) ? k : []);
                for (h = d.next(); !h.done; h = d.next()) h = h.value, f.set(G(h, 1), ze(h, 2));
                b.l = f
            }
            h =
                QD(a.v);
            b = om(XC);
            var l;
            k = !!(null == h ? 0 : null == (l = h.optimization) ? 0 : l.ablationFromStorage);
            b.m = k;
            var m;
            if (null == h ? 0 : null == (m = h.optimization) ? 0 : m.ablatingThisPageview) b.D = !0;
            var n;
            l = !!(null == h ? 0 : null == (n = h.optimization) ? 0 : n.availableAbg);
            b.L = l;
            n = om(XC);
            c = new LC(c);
            if (n.A) {
                var p;
                l = null != (p = n.A) ? p : [];
                c.l.sl = l.join("~");
                var v;
                p = null != (v = n.H) ? v : [];
                c.l.daaos = p.join("~");
                c.l.ab = NC(n.D);
                c.l.rr = NC(n.K);
                c.l.oab = NC(n.G);
                null != n.m && (c.l.sab = NC(n.m));
                n.B && (c.l.fb = NC(n.B));
                c.l.ls = NC(n.L);
                MC(c, n.l.Ib());
                null != n.C &&
                    (c.l.rp = NC(n.C));
                null != n.v && (c.l.expl = NC(n.v));
                eD(n, c)
            } else v = "irr".replace(RegExp("~", "g"), ""), c.l.e = c.l.e ? c.l.e + ("~" + v) : v;
            Yt(a.A, Pt, c)
        }
    }

    function AF(a, b) {
        var c = om(fF);
        if (c.j) {
            var d = new el,
                e = b.Ua.filter(function(u) {
                    return null !== u
                }),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(function(u) {
                    return null !== u
                }),
                g, h, k, l, m, n, p, v;
            pl(nl(sl(rl(ql(ol(il(kl(ml(jl(d, a.D.v.slice(0).map(function(u) {
                var A = new Fk;
                return E(A, 1, u)
            })), e.map(function(u) {
                var A = new Ik;
                return E(A, 1, u)
            })), f.map(function(u) {
                return Hk(u)
            })), null == (g = F(a.j, Hp, 23)) ? void 0 : D(g, 1)), b.Da).D(b.pb), b.eb), b.Ab), b.Bb), a.C.map(function(u) {
                return u.toString()
            })), Qk(Pk(Ok(Nk(Mk(Lk(Kk(new Jk,
                null == (h = b.sa) ? void 0 : h.Rd), null == (k = b.sa) ? void 0 : k.ge), null == (l = b.sa) ? void 0 : l.De), null == (m = b.sa) ? void 0 : m.Xd), null == (n = b.sa) ? void 0 : n.Sd), null == (p = b.sa) ? void 0 : p.ze), null == (v = b.sa) ? void 0 : v.Td));
            F(a.j, wq, 24) && gl(d);
            lF(c, d)
        }
    }

    function BF(a) {
        if (Aq(a.j) && 1 === D(Aq(a.j), 1)) {
            var b;
            if (b = F(Aq(a.j), np, 6)) a = F(Aq(a.j), np, 6), b = 1 <= (D(a, 3) || 0);
            a = !b
        } else a = !1;
        return a
    }

    function CF(a) {
        if (BF(a)) {
            a = a.v;
            var b = xv({
                lc: !0,
                mc: !0
            }, a.j);
            a = 0 < WD(b, a.j)
        } else a = a.v.j, b = wv({
            hb: !1,
            kc: !1
        }, a), a = 0 < WD(b, a);
        return a
    }
    oF.prototype.P = function(a) {
        var b = this;
        try {
            DF(this, a.j.Da);
            var c = CF(this) || BF(this) ? CF(this) : void 0;
            Hq({
                Xc: c
            }, this.l);
            EF(this);
            var d = FF(this, a, CF(this));
            Yd(this.j, Gp, 25) && je(F(this.j, Gp, 25), 1) && GF(this, d);
            zF(this, d);
            AF(this, d);
            wm(753, function() {
                if (S(dr) && null != b.v) {
                    var e = qE(b.l, b.v, {
                            ic: V(hr),
                            Hb: V(gr),
                            Mb: V(er),
                            se: !0,
                            Wd: !1
                        }),
                        f = Hf(d);
                    null != e.j ? (e = BE(e.j.value), f.placementPositionDiffs = e) : f.placementPositionDiffs = "E" + e.l.message;
                    f = yF(b, f);
                    Yt(b.A, Nt, f)
                }
            })()
        } catch (e) {
            HF(this, e)
        }
    };
    oF.prototype.N = function(a) {
        DF(this, 0);
        HF(this, a)
    };

    function DF(a, b) {
        try {
            if (S(ar)) {
                var c, d;
                null == (c = a.v) || null == (d = c.l) || uD(d)
            }
        } catch (e) {
            Yt(a.A, Tt, Wt(JC(IC((new HC(b)).Sa(a.B), a.j), a.C).ra(14), e))
        }
    }

    function HF(a, b) {
        zF(a, {
            Da: 0,
            pb: void 0,
            errors: [],
            Ua: [],
            exception: b,
            eb: void 0,
            Ab: void 0,
            Bb: void 0,
            sa: void 0
        });
        AF(a, {
            Da: 0,
            pb: void 0,
            errors: [],
            Ua: [],
            exception: b,
            eb: void 0,
            Ab: void 0,
            Bb: void 0,
            sa: void 0
        })
    }

    function GF(a, b) {
        var c = a.v.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.pb;
        c.numAutoAdsPlaced = b.Da;
        c.hasAtfAd = b.eb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.v && (a = qE(a.l, a.v, {
            ic: -1,
            Hb: -1,
            Mb: -1,
            se: !0,
            Wd: !0
        }), null != a.j ? (c.placementPositionDiffs = BE(a.j.value), a = AE(a.j.value), b = new DB, a = ue(b, 2, EB, a), c.placementPositionDiffsReport = df(a)) : (a = a.l.message, c.placementPositionDiffs = "E" + a, b = new DB, a = oe(b, 1, EB, a), c.placementPositionDiffsReport = df(a)))
    }

    function FF(a, b, c) {
        var d = QD(a.v),
            e = b.j,
            f = e.j,
            g = e.Ac,
            h = e.Da,
            k = e.Bc,
            l = e.errors.slice(),
            m = e.Ua.slice(),
            n = b.exception,
            p;
        var v = null != (p = ME(a.l).had_ads_ablation) ? p : !1;
        d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.D.m && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
            Da: h,
            Ac: g,
            Bc: k,
            pb: f,
            errors: e.errors.slice(),
            Ua: m,
            exception: n,
            eb: c,
            Ab: !!d.eatf,
            Bb: !!d.eatfAbg,
            qe: v
        }) : (m.push(12), a.D.m && m.push(13), c = {
            Da: h,
            Ac: g,
            Bc: k,
            pb: f,
            errors: l,
            Ua: m,
            exception: n,
            eb: c,
            Ab: !1,
            Bb: !1,
            qe: v
        });
        c.sa = XD(a.v.j);
        if (b = b.j.l) c.Kf = b;
        c.vd = nn(a.l).scrollHeight;
        if (Nm()) {
            b = [];
            d = y(Jo(a.v.l.l));
            for (e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                f = {};
                g = e.I;
                h = y(En(g));
                for (k = h.next(); !k.done; k = h.next()) k = k.value, f[k] = g.get(k);
                e = {
                    anchorElement: ku(e),
                    position: e.j(),
                    clearBoth: e.H,
                    locationType: e.ib,
                    placed: e.A,
                    placementProto: e.v ? e.v.toJSON() : null,
                    articleStructure: e.B ? e.B.toJSON() : null,
                    rejectionReasons: f
                };
                b.push(e)
            }
            Om(14, [{
                placementIdentifiers: b
            }, a.v.C, c.sa])
        }
        return c
    }

    function xF(a) {
        return a.m.V && Yd(a.m.V, wp, 10) ? .5 <= (ie(F(a.m.V, wp, 10), 1) || 0) : !0
    }

    function IF(a, b, c, d) {
        b = {
            r: b,
            pg_h: nn(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        Zt(a.A, Ot, b)
    }

    function JF(a) {
        var b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = Bq(b)) ? void 0 : Ee(c, 18, !1)) ? d : !1
    }

    function uF(a) {
        JF(a) && IF(a, "p", KF(a))
    }

    function KF(a) {
        var b = null;
        Bq(a.j) && null != Ae(Bq(a.j), 19) && (b = Ae(Bq(a.j), 19));
        return b
    }

    function EF(a) {
        if (JF(a)) {
            var b = KF(a);
            a.I.init(null == b ? void 0 : b, function() {
                IF(a, "s", b)
            });
            a.I.addListener(function(c) {
                IF(a, "d", KF(a), c);
                a.I.xa();
                var d, e;
                if (null == (d = a.j) ? 0 : null == (e = Bq(d)) ? 0 : Ee(e, 21, !1)) {
                    var f, g;
                    null != (f = a.j) && null != (g = Bq(f)) && E(g, 18, !1);
                    try {
                        var h;
                        if (null == (h = a.C) ? 0 : t(h, "includes").call(h, 0)) a.K++, qF(a), IF(a, "r", KF(a), c)
                    } catch (k) {
                        IF(a, "f", KF(a), c), Yt(a.A, Mt, Wt(JC(IC((new HC(0)).Sa(a.B), a.j), a.C).ra(1), k))
                    }
                }
            })
        }
    };

    function LF(a) {
        H.call(this, a)
    }
    z(LF, H);
    var MF = jf(LF);

    function NF(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? So(function() {
            return MF(c)
        }) : Po(null)
    };

    function OF(a) {
        this.j = a || {
            cookie: ""
        }
    }
    q = OF.prototype;
    q.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Vk;
            d = c.Eg || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ae
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    q.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = ub(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Ae: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.isEmpty = function() {
        return !this.j.cookie
    };
    q.Ib = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    q.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = ub(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function PF(a, b) {
        b = void 0 === b ? window : b;
        if (je(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function QF(a) {
        return "null" !== a.origin
    }

    function RF(a, b, c) {
        b = je(b, 5) && QF(c) ? c.document.cookie : null;
        return null === b ? null : (new OF({
            cookie: b
        })).get(a) || ""
    };

    function SF(a) {
        H.call(this, a)
    }
    z(SF, H);

    function TF(a, b) {
        return E(a, 5, b)
    };

    function UF(a) {
        var b = a.win,
            c = a.ve,
            d = void 0 === a.Qf ? !1 : a.Qf;
        if (a = (void 0 === a.Rf ? 0 : a.Rf) || !kB(new jB(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = NF(b), null != c.j)
                        if ((c = c.j.value) && null != D(c, 1)) b: switch (c = D(c, 1), c) {
                            case 1:
                                c = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                        } else c = !1;
                        else ym(806, c.l), c = !1;
                d = c
            }
            a = d
        }
        return a ? VF(b, TF(new SF, !0)) : (c = TE(PE(), 24)) ? VF(b, TF(new SF, pB(c))) : new Mo(null, Error("tcunav"))
    }

    function VF(a, b) {
        return (a = PF(b, a)) ? Po(a) : new Mo(null, Error("unav"))
    };

    function WF(a) {
        H.call(this, a)
    }
    z(WF, H);

    function XF(a, b, c, d) {
        this.j = a;
        this.m = b;
        this.A = c;
        this.l = !1;
        this.v = d
    };

    function YF(a) {
        this.j = a
    }

    function wF(a, b) {
        var c = b.win,
            d = b.webPropertyCode,
            e = b.me,
            f = b.Yd;
        a = Fw(8, c, a.j).then(function(g) {
            return g.runGallerify({
                win: c,
                webPropertyCode: d,
                serializedGallerifyConfig: df(e),
                serializedArticleStructures: f.map(function(h) {
                    return df(h)
                })
            })
        });
        tm.Aa(927, a)
    };

    function ZF(a) {
        var b = a.win,
            c = a.webPropertyCode;
        a = a.Gb;
        if (bA(b.location, "google_auto_gallery")) {
            var d = new mq;
            var e = new lq;
            e = E(e, 1, !0);
            d = te(d, 3, e);
            wF(new YF(a), {
                win: b,
                webPropertyCode: c,
                me: d,
                Yd: []
            })
        }
    };

    function $F(a, b) {
        this.l = a;
        this.j = b
    }

    function aG(a) {
        try {
            var b = t(Array, "from").call(Array, a.l.win.document.querySelectorAll('[id*="mobile-toggle"], [id="toggle-nav"], [class~="menu-mobile-toggle"], [class*="hamburger-show"], [class~="offcanvas-toggle"], [class~="site__header-btn"], [class~="toggle-mobile-menu"], [class~="elementor-menu-toggle"]'));
            a.Bd(b);
            for (var c = {}, d = y(t(b, "entries").call(b)), e = d.next(); !e.done; c = {
                    Fc: c.Fc
                }, e = d.next()) {
                var f = y(e.value),
                    g = f.next().value,
                    h = f.next().value;
                c.Fc = g;
                h.addEventListener("click", function(k) {
                    return function() {
                        var l =
                            a.j,
                            m = t(Object, "assign").call(Object, {}, {
                                typ: "mt",
                                tbi: k.Fc
                            }, bG(l));
                        cG(l.ba, m)
                    }
                }(c))
            }
        } catch (k) {
            dG(a.j, "instrumentMenuToggleButton " + k)
        }
    }
    $F.prototype.Bd = function(a) {
        for (var b = 0, c = y(a), d = c.next(); !d.done; d = c.next()) null !== d.value.offsetParent && b++;
        this.j.Bd({
            Kg: a.length,
            Lg: b
        })
    };

    function eG(a, b) {
        if (IntersectionObserver) {
            for (var c = new r.Map, d = y(t(b, "entries").call(b)), e = d.next(); !e.done; e = d.next()) {
                var f = y(e.value);
                e = f.next().value;
                f = f.next().value;
                c.set(f.rootElement, e)
            }
            d = new IntersectionObserver(function(g) {
                g = y(g);
                for (var h = g.next(); !h.done; h = g.next()) {
                    var k = h.value;
                    h = a.j;
                    var l = c.get(k.target);
                    k = t(Object, "assign").call(Object, {}, {
                        typ: "mvc",
                        mi: l,
                        ir: k.intersectionRatio
                    }, bG(h));
                    cG(h.ba, k)
                }
            }, {
                threshold: .5
            });
            b = y(b);
            for (e = b.next(); !e.done; e = b.next()) d.observe(e.value.rootElement)
        } else dG(a.j,
            "IntersectionObserver is not supported")
    }

    function fG(a, b) {
        var c = {};
        b = y(t(b, "entries").call(b));
        for (var d = b.next(); !d.done; c = {
                Hc: c.Hc
            }, d = b.next()) {
            var e = y(d.value);
            d = e.next().value;
            e = e.next().value;
            c.Hc = d;
            d = {};
            e = y(t(e.ld, "entries").call(e.ld));
            for (var f = e.next(); !f.done; d = {
                    Ic: d.Ic
                }, f = e.next()) {
                var g = y(f.value);
                f = g.next().value;
                g = g.next().value;
                d.Ic = f;
                f = void 0;
                null == (f = g.querySelector("a")) || f.addEventListener("click", function(h, k) {
                    return function() {
                        var l = a.j,
                            m = t(Object, "assign").call(Object, {}, {
                                typ: "ic",
                                mi: h.Hc,
                                mii: k.Ic
                            }, bG(l));
                        cG(l.ba, m)
                    }
                }(c,
                    d))
            }
        }
    }
    $F.prototype.Ad = function(a) {
        for (var b = 0, c = y(a), d = c.next(); !d.done; d = c.next()) b += d.value.ld.length;
        this.j.Ad({
            dg: a.length,
            Og: b
        })
    };

    function gG(a, b, c) {
        var d = aj(B);
        this.ba = a;
        this.webPropertyCode = b;
        this.l = c;
        this.m = d;
        this.j = null
    }
    gG.prototype.Ad = function(a) {
        a = t(Object, "assign").call(Object, {}, {
            typ: "mdr",
            md: a.dg,
            tmid: a.Og
        }, bG(this));
        cG(this.ba, a)
    };
    gG.prototype.Bd = function(a) {
        a = t(Object, "assign").call(Object, {}, {
            typ: "mtbdr",
            tbd: a.Kg,
            tbv: a.Lg
        }, bG(this));
        cG(this.ba, a)
    };

    function dG(a, b) {
        b = t(Object, "assign").call(Object, {}, {
            typ: "er",
            msg: b
        }, bG(a));
        cG(a.ba, b)
    }

    function bG(a) {
        var b = a.webPropertyCode,
            c = a.l,
            d = a.m;
        null === a.j ? (a.j = ok(), a = 0) : a = ok() - a.j;
        return {
            wpc: b,
            hst: c,
            pvsid: d,
            tim: a,
            dvc: Si()
        }
    };

    function hG(a) {
        this.win = a
    }

    function iG(a) {
        var b = jG(t(Array, "from").call(Array, a.win.document.querySelectorAll(":not([id*=foot], [class*=foot]) > LI.menu-item"))) || jG(t(Array, "from").call(Array, a.win.document.querySelectorAll("UL[id*=nav] > LI, UL[class*=nav] > LI, UL[role*=nav] > LI, UL[aria-controls*=nav] > LI"))) || [];
        a = new r.Map;
        b = y(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, c.parentElement && (a.has(c.parentElement) ? a.get(c.parentElement).push(c) : a.set(c.parentElement, [c]));
        return t(Array, "from").call(Array, t(a, "entries").call(a)).map(function(d) {
            return {
                rootElement: d[0],
                ld: d[1]
            }
        })
    }

    function jG(a) {
        return 0 < a.length ? a : null
    };

    function kG(a) {
        this.win = a;
        this.domain = "pagead2.googlesyndication.com";
        this.path = "/pagead/gen_204";
        this.protocol = "https:"
    }

    function cG(a, b) {
        var c = new bk;
        Bi(b, function(d, e) {
            var f = c.v++;
            fk(c, f, ck(e, d))
        });
        b = gk(c, a.protocol, a.domain, a.path + "?id=abg::auto_menu&");
        try {
            a.win.navigator.sendBeacon(b)
        } catch (d) {}
    };
    var lG = "a".charCodeAt(),
        mG = Gf(Um),
        nG = Gf(Vm);

    function oG(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.l = a;
        this.j = 0
    }

    function pG(a) {
        var b = qG(a, 16);
        return !0 === !!qG(a, 1) ? (a = rG(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : sG(a, b)
    }

    function rG(a) {
        for (var b = qG(a, 12), c = []; b--;) {
            var d = !0 === !!qG(a, 1),
                e = qG(a, 16);
            if (d)
                for (d = qG(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function sG(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (qG(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function qG(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    };

    function tG(a, b) {
        try {
            var c = Kc(a.split(".")[0]).map(function(e) {
                    return (ba = e.toString(2), t(ba, "padStart")).call(ba, 8, "0")
                }).join(""),
                d = new oG(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = qG(d, 12);
            c.cmpVersion = qG(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = qG(d, 6);
            c.isServiceSpecific = !!qG(d, 1);
            c.useNonStandardStacks = !!qG(d, 1);
            c.specialFeatureOptins = uG(sG(d, 12, nG), nG);
            c.purpose = {
                consents: uG(sG(d, 24, mG), mG),
                legitimateInterests: uG(sG(d, 24, mG), mG)
            };
            c.purposeOneTreatment = !!qG(d, 1);
            c.publisherCC = String.fromCharCode(lG +
                qG(d, 6)) + String.fromCharCode(lG + qG(d, 6));
            c.vendor = {
                consents: uG(pG(d), b),
                legitimateInterests: uG(pG(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function uG(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = y(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = y(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function vG() {
        this.j = {}
    };

    function wG(a) {
        H.call(this, a)
    }
    z(wG, H);

    function xG(a) {
        H.call(this, a)
    }
    z(xG, H);

    function yG(a) {
        H.call(this, a)
    }
    z(yG, H);
    var zG = [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27];

    function AG() {};

    function BG(a) {
        H.call(this, a)
    }
    z(BG, H);

    function CG(a) {
        H.call(this, a)
    }
    z(CG, H);

    function DG(a) {
        H.call(this, a, -1, EG)
    }
    z(DG, H);
    var FG = jf(DG),
        EG = [7];
    var GG = new function(a, b) {
        this.key = a;
        this.defaultValue = void 0 === b ? !1 : b;
        this.valueType = "boolean"
    }("45369554");

    function HG() {
        this.j = {};
        var a = B.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.j = JSON.parse(a)
        } catch (d) {}
    }
    var IG;
    z(HG, vG);

    function JG(a) {
        return (a = KG(a)) ? F(a, CG, 4) : null
    }

    function KG(a) {
        if (a = (new OF(a)).get("FCCDCF", ""))
            if (t(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                LG(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? FG(b) : null
        } catch (c) {
            return LG(2), null
        }
    }

    function LG(a) {
        new AG;
        var b = new wG;
        a = E(b, 7, a);
        b = new xG;
        a = te(b, 1, a);
        b = new yG;
        ue(b, 22, zG, a);
        IG || (IG = new HG);
        a = IG.j[GG.key];
        if ("proto" === GG.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };

    function MG(a) {
        this.j = a;
        this.l = null
    }

    function NG(a) {
        a.__tcfapiPostMessageReady || OG(new MG(a))
    }

    function OG(a) {
        a.l = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage &&
                    b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    };

    function PG(a) {
        this.j = a;
        this.l = a.document;
        this.A = (a = (a = KG(this.l)) ? F(a, BG, 5) || null : null) ? D(a, 2) : null;
        this.m = (a = JG(this.l)) && null != D(a, 1) ? D(a, 1) : null;
        this.v = (a = JG(this.l)) && null != D(a, 2) ? D(a, 2) : null
    }

    function QG(a) {
        var b = S(nr);
        a.__uspapi || a.frames.__uspapiLocator || (a = new PG(a), RG(a), b && SG(a))
    }

    function RG(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", hB(a.j, "__uspapiLocator"), hb("__uspapi", function() {
            return a.C.apply(a, ma(Ma.apply(0, arguments)))
        }))
    }
    PG.prototype.C = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.A
        }, !0)
    };

    function SG(a) {
        !a.m || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", hB(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], hb("__tcfapi", function() {
            return a.B.apply(a, ma(Ma.apply(0, arguments)))
        }), NG(a.j))
    }
    PG.prototype.B = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.j.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(TG(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(TG(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ?
                        (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };

    function TG(a, b, c) {
        if (!a.m) return null;
        b = tG(a.m, b);
        b.addtlConsent = null != a.v ? a.v : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function UG(a) {
        var b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function VG(a, b) {
        a = UG(a);
        b = UG(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var WG = r.Promise;

    function XG(a) {
        this.m = a
    }
    XG.prototype.l = function(a, b, c) {
        this.m.then(function(d) {
            d.l(a, b, c)
        })
    };
    XG.prototype.j = function(a, b) {
        return this.m.then(function(c) {
            return c.j(a, b)
        })
    };

    function YG(a) {
        this.data = a
    };

    function ZG(a) {
        this.m = a
    }
    ZG.prototype.l = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        $G(d.port1, b);
        this.m.postMessage(a, [d.port2].concat(c))
    };
    ZG.prototype.j = function(a, b) {
        var c = this;
        return new WG(function(d) {
            c.l(a, d, b)
        })
    };

    function aH(a, b) {
        $G(a, b);
        return new ZG(a)
    }

    function $G(a, b) {
        b && (a.onmessage = function(c) {
            b(new YG(c.data, aH(c.ports[0])))
        })
    };

    function bH(a) {
        var b = a.Ia,
            c = void 0 === a.Ma ? "ZNWN1d" : a.Ma,
            d = void 0 === a.onMessage ? void 0 : a.onMessage,
            e = void 0 === a.wc ? void 0 : a.wc;
        return cH({
            destination: a.destination,
            Pf: function() {
                return b.contentWindow
            },
            kg: dH(a.origin),
            Ma: c,
            onMessage: d,
            wc: e
        })
    }

    function cH(a) {
        var b = a.destination,
            c = a.Pf,
            d = a.kg,
            e = void 0 === a.Mg ? void 0 : a.Mg,
            f = a.Ma,
            g = void 0 === a.onMessage ? void 0 : a.onMessage,
            h = void 0 === a.wc ? void 0 : a.wc,
            k = Object.create(null);
        d.forEach(function(l) {
            k[l] = !0
        });
        return new XG(new WG(function(l, m) {
            function n(p) {
                p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(aH(p.ports[0],
                    g)), h && h(p)))
            }
            b.addEventListener("message", n, !1)
        }))
    }

    function dH(a) {
        a = "string" === typeof a ? [a] : a;
        var b = Object.create(null);
        a.forEach(function(c) {
            if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return a
    };

    function eH(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? null : g;
        try {
            var k = a.localStorage
        } catch (p) {
            k = null
        }
        if (k) {
            if (S(cr)) var l = null;
            else try {
                l = k.getItem("google_ama_config")
            } catch (p) {
                l = null
            }
            try {
                var m = l ? Dq(l) : null
            } catch (p) {
                m = null
            }
            l = m
        } else l = null;
        a: {
            if (d) try {
                var n = Dq(d);
                break a
            } catch (p) {
                JE(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            n = null
        }
        if (d = n) {
            if (e) {
                n = new vp;
                te(d, 3, n);
                l = Bq(d) && Ae(Bq(d), 13) ? Ae(Bq(d), 13) : 1;
                E(n, 1, Date.now() + 864E5 * l);
                n = bf(d, !1);
                Bq(d) && (l = new up, m = Bq(d), m = je(m, 23), l = E(l, 23, null == m ? void 0 : m), m = Ee(Bq(d), 12, !1), l = E(l, 12, m), m = Ee(Bq(d),
                    15, !1), l = E(l, 15, m), te(n, 15, l));
                l = se(n, hq, 1);
                for (m = 0; m < l.length; m++) E(l[m], 11, Md);
                E(n, 22, void 0, !1);
                if (S(cr)) LE(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", df(n))
                } catch (p) {
                    JE(a, {
                        lserr: 1
                    })
                }
            }
            e = FE(a, se(d, Ep, 7));
            a: {
                if (e && (n = D(e, 3), l = F(d, Yp, 9), n && l)) {
                    b: {
                        l = se(l, Xp, 1);l = y(l);
                        for (m = l.next(); !m.done; m = l.next())
                            if (m = m.value, D(m, 1) == n) {
                                n = F(m, Vp, 2) || null;
                                break b
                            }
                        n = null
                    }
                    if (n) break a
                }
                n = F(d, Vp, 8) || new Vp
            }
            n = {
                qg: n
            };
            e && (n.V = e);
            e && EE(e, 3) && (n.Fb = [1]);
            if (7 === c.google_pgb_reactive && (e = n.V, !e || !je(e, 8))) return !1;
            NE(a, 2) && (Om(5, [d.toJSON()]), c = KE(c), f = new YF(f), e = n.V, c.google_package = e && D(e, 4) || "", c = new fp(["google-auto-placed"], c), nF(a, new Xt(a), b, d, n, f, void 0 === c ? null : c, new yo(a), void 0 === g ? null : g, {
                url: a.location.href,
                Rb: h
            }));
            return !0
        }
        l && (JE(a, {
            cfg: 1,
            cl: 1
        }), LE(a));
        return !1
    };

    function fH(a) {
        var b = a.F;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Gh.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = gH(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = gH(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = gH(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = gH(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = gH(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = gH(a, b.google_color_line, c))
    }

    function gH(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function hH(a, b) {
        var c = tm,
            d;
        var e;
        d = (e = (e = void 0 === e ? nj() : e) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new jj(d.left, d.top, d.width, d.height) : null) ? new Qh(e.left, e.top) : (d = oj()) && Sa(d.rootBounds) ? new Qh(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Qh(0, 0),
                g = ei($h(b));
            if (nc(g, "parent")) {
                do {
                    if (g == a) var h = zj(b);
                    else {
                        var k = yj(b);
                        h = new Qh(k.left,
                            k.top)
                    }
                    d = h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return c.na(888, l), new Qh(-12245933, -12245933)
        }
    };

    function iH(a) {
        H.call(this, a)
    }
    z(iH, H);

    function jH(a) {
        H.call(this, a, -1, kH)
    }
    z(jH, H);
    var kH = [1];

    function lH(a) {
        H.call(this, a, -1, mH)
    }
    z(lH, H);
    var mH = [19],
        nH = [13, 14];

    function oH() {
        var a = this;
        this.j = null;
        var b = {};
        this.l = (b[3] = {}, b[4] = {}, b[5] = {}, b);
        b = {};
        this.l[4] = (b[9] = function() {
            return a.j ? Di(Ma.apply(0, arguments)[0] + " + " + a.j) % 1E3 : void 0
        }, b)
    }
    var pH;

    function qH(a, b) {
        b && !a.j && (a.j = t(b.split(":"), "find").call(b.split(":"), function(c) {
            return 0 === c.indexOf("ID=")
        }) || null)
    };
    var rH = void 0;

    function sH() {
        hf(rH, ff);
        return rH
    }

    function tH(a) {
        hf(rH, Ck);
        rH = a
    };

    function uH(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Df(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    };

    function vH(a) {
        a = void 0 === a ? B : a;
        return a.ggeac || (a.ggeac = {})
    };

    function wH(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(ba = c.allowedFeatures(), t(ba, "includes")).call(ba, a))
    };

    function xH() {
        this.j = function() {}
    }

    function yH(a, b) {
        a.j = pm(14, b, function() {})
    };

    function zH() {
        var a = vH(B),
            b = a = void 0 === a ? vH() : a;
        rm(om(qm), b);
        AH(a);
        yH(om(xH), a);
        om(Ps).A()
    }

    function AH(a) {
        var b = om(Ps);
        b.j = function(c, d) {
            return pm(5, a, function() {
                return !1
            })(c, d, 1)
        };
        b.l = function(c, d) {
            return pm(6, a, function() {
                return 0
            })(c, d, 1)
        };
        b.m = function(c, d) {
            return pm(7, a, function() {
                return ""
            })(c, d, 1)
        };
        b.v = function(c, d) {
            return pm(8, a, function() {
                return []
            })(c, d, 1)
        };
        b.A = function() {
            pm(15, a, function() {})(1)
        }
    };

    function BH(a) {
        var b = om(qm).l(a);
        a = kF(om(fF), a, b);
        Qm.Aa(1085, a)
    }

    function CH(a) {
        var b = om(qm).j();
        a = ME(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    }

    function DH(a) {
        var b = nk();
        b && (a.debug_experiment_id = b)
    };

    function EH(a) {
        this.j = a;
        this.l = 0
    }

    function FH(a, b, c) {
        return c ? RF(b, c, a.j) : null
    }

    function GH(a, b, c, d) {
        if (d) {
            var e = {
                Ae: D(c, 2) - Date.now() / 1E3,
                path: D(c, 3),
                domain: D(c, 4),
                Eg: !1
            };
            a = a.j;
            je(d, 5) && QF(a) && (new OF(a.document)).set(b, D(c, 1), e)
        }
    }

    function HH(a, b, c) {
        if (c && RF(b, c, a.j)) {
            var d = a.j.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = y(d);
            for (e = d.next(); !e.done; e = d.next()) f = a.j, je(c, 5) && QF(f) && (new OF(f.document)).remove(b, "/", e.value)
        }
    };

    function IH(a, b, c) {
        return wm(629, function(d) {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return r.Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            d = y(d);
            for (var e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = f._domain_;
                var g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                f = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof f || !g) throw Error("Invalid JSONP response");
                e = rh(qh(ph(oh(g),
                    h), k), e);
                switch (f) {
                    case 1:
                        GH(c, "__gads", e, b);
                        break;
                    case 2:
                        GH(c, "__gpi", e, b)
                }
            }
            return r.Promise.resolve()
        })
    }

    function JH(a, b, c) {
        var d;
        if (0 === a.l) {
            if (FH(a, "__gads", b)) var e = !0;
            else if (e = a.j, je(b, 5) && QF(e) && (new OF(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === RF("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                je(b, 5) && QF(f) && (new OF(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = IH(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function KH(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = FH(b, "__gads", a);
        e && (d.cookie = e);
        (e = FH(b, "__gpi", a)) && !t(e, "includes").call(e, "&") && (d.gpic = e);
        var f = Vf(Yf(nf( of ("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = JH(b, a, c);
        g ? new r.Promise(function(h) {
            c._gfp_s_ = function(k) {
                g(k).then(h)
            };
            xi(c.document, f)
        }) : r.Promise.resolve()
    }

    function LH(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        var d = new EH(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error("Illegal value of _gfp_a_: " + e);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error("Illegal value of _gfp_p_: " + e);
            e ? r.Promise.resolve() : KH(a, d, b, c)
        } else r.Promise.resolve();
        a = FH(d, "__gads", a) || "";
        pH || (pH = new oH);
        b = pH;
        qH(b, a);
        a = b.l;
        om(xH).j(a);
        BH(20);
        BH(17)
    };

    function MH(a) {
        if (S($r)) {
            a.easpi = S($r);
            S(Zr) && (a.easpa = !0);
            a.asntp = 0;
            a.asntpv = 0;
            a.asntpl = 0;
            a.asntpm = 0;
            a.asntpc = V(qs);
            a.asna = 5;
            a.asnd = 5;
            a.asnp = 5;
            a.asns = 5;
            a.asmat = V(os);
            a.asptt = -1;
            S(xs) || (a.aspe = !0);
            a.asro = S(Bs) ? S(zr) : S(ss);
            S(rs) && (a.ascet = !0);
            S(ls) && (a.asgr = !0);
            S(ts) || (a.asrc = !1);
            S(hs) && (a.asbu = !0);
            S(js) && (a.aseb = !0);
            1 > V(ms) && (a.asla = V(ms));
            1 > V(cs) && (a.asaa = V(cs));
            S(Es) && (a.asupm = !0);
            var b = V(ns);
            0 < b && (a.asmrc = b)
        }
    };

    function NH(a, b) {
        return rA({
            J: a,
            kd: 3E3,
            od: a.innerWidth > en ? 650 : 0,
            ba: sm,
            ae: b
        })
    };

    function OH(a) {
        var b = 0;
        try {
            b |= fn(a), b |= gn(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function PH(a) {
        var b = 0;
        try {
            b |= fn(a), b |= gn(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function QH(a, b, c) {
        var d = 0;
        try {
            d |= fn(a), d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (g) {
            d |= 32
        }
        var e = 0;
        try {
            e |= gn(a, 2500);
            if (S(Or)) {
                var f = mn(a);
                e |= f ? 320 > f ? 2097152 : 0 : 1073741824
            }
            e |= jn(a);
            0 < c && !OB(NB(b, c)) && (e |= 134217728)
        } catch (g) {
            e |= 32
        }
        return d | e
    };

    function RH(a, b, c, d) {
        d = void 0 === d ? null : d;
        if (!S(Rr)) return 32;
        var e = fn(a),
            f;
        sA(null == (f = a.navigator) ? void 0 : f.userAgent) && (e |= 1048576);
        f = a.innerWidth;
        1200 > f && (e |= 65536);
        var g = a.innerHeight;
        650 > g && (e |= 2097152);
        d && 0 === e && (SH({
            J: a,
            xe: b,
            Te: 1,
            position: 3 === d ? "left" : "right",
            T: f,
            X: g,
            Pa: new r.Set,
            minWidth: 120,
            minHeight: 500,
            Pe: c
        }) || (e |= 16));
        return e
    }

    function TH(a) {
        var b = S(ur);
        if (0 !== RH(a, !0, b)) return "";
        for (var c = [], d = a.innerWidth, e = a.innerHeight, f = y(["left", "right"]), g = f.next(); !g.done; g = f.next()) {
            g = g.value;
            var h = SH({
                J: a,
                xe: !0,
                Te: 1,
                position: g,
                T: d,
                X: e,
                Pa: new r.Set,
                minWidth: 120,
                minHeight: 500,
                Pe: b
            });
            h && c.push(h.width + "x" + h.height + "_" + String(g).charAt(0))
        }
        return c.join("|")
    }

    function UH(a, b) {
        return null !== oi(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        })
    }

    function VH(a, b) {
        return oi(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        })
    }

    function WH(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function XH(a) {
        return a.position + "-" + WH(a.T) + "x" + WH(a.X) + "-" + WH(a.scrollY + a.qb) + "Y"
    }

    function YH(a) {
        return "f-" + XH({
            position: a.position,
            qb: a.qb,
            scrollY: 0,
            T: a.T,
            X: a.X
        })
    }

    function ZH(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    }

    function $H(a, b, c) {
        var d = dn(c.J).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.X),
                    g = Math.max(e.left - 10, 0),
                    h = Math.min(e.right + 10, c.T),
                    k = .3 * c.T;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < h && g < k) {
                        var l = YH({
                            position: "left",
                            qb: e,
                            T: c.T,
                            X: c.X
                        });
                        b.set(l, ZH(b.get(l), g))
                    }
                    if (g < c.T && h > c.T - k) {
                        l = YH({
                            position: "right",
                            qb: e,
                            T: c.T,
                            X: c.X
                        });
                        var m = c.T - h;
                        b.set(l, ZH(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function SH(a) {
        if (a.Pe && (1200 > a.T || 650 > a.X)) return null;
        var b = dn(a.J).sideRailAvailableSpace;
        if (!a.xe) {
            var c = {
                    J: a.J,
                    T: a.T,
                    X: a.X,
                    Pa: a.Pa
                },
                d = "f-" + WH(c.T) + "x" + WH(c.X);
            if (!b.has(d)) {
                b.set(d, 0);
                dn(c.J).sideRailProcessedFixedElements.clear();
                d = new r.Set([].concat(ma(t(Array, "from").call(Array, c.J.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), ma(c.Pa)));
                for (var e = c.J, f = [], g = y(e.document.querySelectorAll("*")), h = g.next(); !h.done; h = g.next()) {
                    h = h.value;
                    var k = e.getComputedStyle(h,
                        null);
                    "fixed" === k.position && "none" !== k.display && "hidden" !== k.visibility && f.push(h)
                }
                e = y(f);
                for (f = e.next(); !f.done; f = e.next()) f = f.value, UH(f, d) || $H(f, b, c)
            }
        }
        c = [];
        e = .9 * a.X;
        f = rn(a.J);
        g = d = (a.X - e) / 2;
        h = e / 7;
        for (k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            var n = g;
            var p = a.position,
                v = {
                    J: a.J,
                    T: a.T,
                    X: a.X,
                    Pa: a.Pa
                },
                u = YH({
                    position: p,
                    qb: n,
                    T: v.T,
                    X: v.X
                }),
                A = XH({
                    position: p,
                    qb: n,
                    scrollY: f,
                    T: v.T,
                    X: v.X
                });
            if (!b.has(A)) {
                var J = "left" === p ? 20 : v.T - 20,
                    Y = J;
                p = .3 * v.T / 5 * ("left" === p ? 1 : -1);
                for (var aa = 0; 6 > aa; aa++) {
                    var P = yA(v.J.document, Math.round(Y),
                            Math.round(n)),
                        Q = UH(P, v.Pa),
                        U = VH(P, v.J);
                    if (!Q && null !== U) {
                        $H(U, b, v);
                        b.delete(A);
                        break
                    }
                    Q || (Q = P.offsetHeight >= .25 * v.X, Q = P.offsetWidth >= .9 * v.T && Q);
                    if (Q) b.set(A, Math.round(Math.abs(Y - J) + 20));
                    else if (Y !== J) Y -= p, p /= 2;
                    else {
                        b.set(A, 0);
                        break
                    }
                    Y += p
                }
            }
            n = ZH(b.get(u), b.get(A));
            m.call(l, n);
            g += h
        }
        b = a.Te;
        f = a.position;
        e = Math.round(e / 8);
        d = Math.round(d);
        g = a.minWidth;
        a = a.minHeight;
        l = [];
        h = t(Array(c.length), "fill").call(Array(c.length), 0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[k];) l.pop();
            h[k] = 0 ===
                l.length ? 0 : l[l.length - 1] + 1;
            l.push(k)
        }
        l = [];
        m = c.length - 1;
        k = t(Array(c.length), "fill").call(Array(c.length), 0);
        for (n = m; 0 <= n; n--) {
            for (; 0 !== l.length && c[l[l.length - 1]] >= c[n];) l.pop();
            k[n] = 0 === l.length ? m : l[l.length - 1] - 1;
            l.push(n)
        }
        l = null;
        for (m = 0; m < c.length; m++)
            if (n = {
                    position: f,
                    width: Math.round(c[m]),
                    height: Math.round((k[m] - h[m] + 1) * e),
                    Xk: d + h[m] * e
                }, v = n.width >= g && n.height >= a, 0 === b && v) {
                l = n;
                break
            } else 1 === b && v && (!l || n.width * n.height > l.width * l.height) && (l = n);
        return l
    };
    var aI = x(["https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]),
        bI = {},
        cI = (bI[27] = 512, bI[26] = 128, bI);

    function dI(a, b, c, d) {
        switch (c) {
            case 1:
            case 2:
                return 0 === NH(a, c);
            case 3:
            case 4:
                return 0 === RH(a, !1, S(ur), c);
            case 8:
                return b = "on" === b.google_adtest || bA(a.location, "google_ia_debug") ? -1 : 3600, 0 == QH(a, d, b);
            case 9:
                return b = !("on" === b.google_adtest || bA(a.location, "google_scr_debug")), !PB(a, b, d);
            case 30:
                return 0 == GD(a);
            case 26:
                return 0 == PH(a);
            case 27:
                return 0 === OH(a);
            case 40:
                return !0;
            default:
                return !1
        }
    }

    function eI(a, b, c, d) {
        switch (c) {
            case 0:
            case 40:
            case 10:
            case 11:
                return 0;
            case 1:
            case 2:
                return NH(a, c);
            case 3:
            case 4:
                return RH(a, !1, S(ur), c);
            case 8:
                return QH(a, d, "on" === b.google_adtest || bA(a.location, "google_ia_debug") ? -1 : 3600);
            case 9:
                return PB(a, !("on" === b.google_adtest || bA(a.location, "google_scr_debug")), d);
            case 16:
                return it(b, a) ? 0 : 8388608;
            case 30:
                return GD(a);
            case 26:
                return PH(a);
            case 27:
                return OH(a);
            default:
                return 32
        }
    }

    function fI(a, b, c) {
        var d = b.google_reactive_ad_format;
        if (!Ef(d)) return !1;
        a = wi(a);
        if (!a || !dI(a, b, d, c)) return !1;
        b = dn(a);
        if (on(b, d)) return !1;
        b.adCount[d] || (b.adCount[d] = 0);
        b.adCount[d]++;
        return !0
    }

    function gI(a) {
        var b = a.google_reactive_ad_format;
        return !a.google_reactive_ads_config && hI(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
    }

    function iI(a) {
        if (!a.hash) return null;
        var b = null;
        Bi(Yz, function(c) {
            !b && bA(a, c) && (b = $z[c])
        });
        return b
    }

    function jI(a, b) {
        var c = dn(a).tagSpecificState[1] || null;
        null != c && null == c.debugCard && Bi(aA, function(d) {
            !c.debugCardRequested && "number" === typeof d && eA(d, a.location) && (c.debugCardRequested = !0, kI(a, b, function(e) {
                c.debugCard = e.createDebugCard(d, a)
            }))
        })
    }

    function lI(a, b, c) {
        if (!b) return null;
        var d = dn(b),
            e = 0;
        Bi(Ff, function(f) {
            var g = cI[f];
            g && 0 === mI(a, b, f, c) && (e |= g)
        });
        d.wasPlaTagProcessed && (e |= 256);
        a.google_reactive_tag_first && (e |= 1024);
        return e ? "" + e : null
    }

    function nI(a, b, c) {
        var d = [];
        Bi(Ff, function(e) {
            if (S(Rr) || 3 !== e && 4 !== e) {
                var f = mI(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            }
        });
        return d.join(",") || null
    }

    function oI(a) {
        var b = [],
            c = {};
        Bi(a, function(d, e) {
            if ((e = Zm[e]) && !c[e]) {
                c[e] = !0;
                if (d) d = 1;
                else if (!1 === d) d = 2;
                else return;
                b.push(e + ":" + d)
            }
        });
        return b.join(",")
    }

    function pI(a) {
        a = a.overlays;
        if (!a) return "";
        a = a.bottom;
        return "boolean" === typeof a ? a ? "1" : "0" : ""
    }

    function mI(a, b, c, d) {
        if (!b) return 256;
        var e = 0,
            f = dn(b),
            g = on(f, c);
        if (a.google_reactive_ad_format == c || g) e |= 64;
        var h = !1;
        Bi(f.reactiveTypeDisabledByPublisher, function(k, l) {
            String(c) === String(l) && (h = !0)
        });
        h && iI(b.location) !== c && (e |= 128);
        return e | eI(b, a, c, d)
    }

    function qI(a, b) {
        if (a) {
            var c = dn(a),
                d = {};
            Bi(b, function(e, f) {
                (f = Zm[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
            });
            Bi(Ff, function(e) {
                d[an[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
            })
        }
    }

    function rI(a, b, c) {
        b = wm(b, c);
        return Fw(1, window, Vf(a, Qs(Vq) ? {
            bust: Qs(Vq)
        } : {})).then(b)
    }

    function kI(a, b, c) {
        c = wm(212, c);
        Fw(3, a, b).then(c)
    }

    function sI(a) {
        a.adsbygoogle || (a.adsbygoogle = [], xi(a.document, L(aI)))
    }

    function tI(a, b) {
        I(a, "load", function() {
            sI(a);
            a.adsbygoogle.push(b)
        })
    }

    function uI(a) {
        a = a.google_reactive_ad_format;
        return Ef(a) ? "" + a : null
    }

    function hI(a) {
        return !!uI(a) || null != a.google_pgb_reactive
    }

    function vI(a) {
        a = uI(a);
        return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
    };

    function wI(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function xI(a, b, c) {
        var d = b.J || b.pubWin,
            e = b.F;
        e.google_reactive_plat = nI(d, e, c);
        var f = oI(a);
        f && (e.google_reactive_plaf = f);
        (f = pI(a)) && (e.google_reactive_fba = f);
        (f = TH(d)) && (e.google_plas = f);
        yI(a, e);
        f = iI(b.pubWin.location);
        zI(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        MH(e);
        S(vr) && (e.fsapi = !0);
        pj() || Ys(b.pubWin.top);
        f = Bm(b.pubWin, "rsrai", wm(429, function(g, h) {
            return AI(b, d, e.google_ad_client, a, g, h, c)
        }), wm(430, function(g, h) {
            return un(b.pubWin, "431", sm, h)
        }));
        b.m.push(f);
        dn(d).wasReactiveTagRequestSent = !0;
        BI(b, a, c)
    }

    function BI(a, b, c) {
        var d = a.F,
            e = Sa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Bm(a.pubWin, "apcnf", wm(353, function(f, g) {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = a.ea.Gb,
                m = a.ea.Rb;
            return Yi(g.origin) ? eH(h, k, e, f.config, c, l, null, m) : !1
        }), wm(353, function(f, g) {
            return un(a.pubWin, "353", sm, g)
        }));
        a.m.push(b)
    }

    function AI(a, b, c, d, e, f, g) {
        if (!Yi(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!NE(b, 1)) return !0;
        f && Om(6, [f]);
        e = e.amaConfig;
        for (var h = [], k = [], l = dn(b), m = null, n = 0; n < f.length; n++)
            if (f[n]) {
                var p = f[n],
                    v = p.adFormat;
                l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[v] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = n;
                    if (9 === v && e) {
                        p.pubVars = t(Object, "assign").call(Object, p.pubVars || {}, CI(d, p));
                        var u = new QB;
                        if (KB(u, p) && u.D(p)) {
                            m = u;
                            continue
                        }
                    }
                    h.push(p);
                    k.push(v)
                }
            }
        h.length && (xm("rasra::pm", {
            rt: k.join(","),
            c: c
        }, .1), rI(a.ea.Ne, 522, function(A) {
            DI(h, b, c, A, d, g)
        }));
        e && eH(b, c, d, e, g, a.ea.Gb, m);
        return !0
    }

    function CI(a, b) {
        var c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        var e = {};
        a = a.page_level_pubvars;
        Sa(a) && t(Object, "assign").call(Object, e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function DI(a, b, c, d, e, f) {
        for (var g = [], h = {}, k = 0; k < a.length; h = {
                Sb: h.Sb,
                Ha: h.Ha
            }, k++) {
            h.Ha = a[k];
            var l = h.Ha.adFormat,
                m = h.Ha.adKey;
            h.Sb = d.configProcessorForAdFormat(l);
            l && h.Sb && m ? (h.Ha.pubVars = CI(e, h.Ha), delete h.Ha.google_reactive_sra_index, g.push(l), vm(466, function(n) {
                return function() {
                    return n.Sb.verifyAndProcessConfig(b, n.Ha, f)
                }
            }(h))) : xm("rasra::ivc", {
                af: l,
                ak: String(m),
                c: c
            }, .1)
        }
        xm("rasra::pr", {
            rt: g.join(","),
            c: c
        }, .1)
    }

    function yI(a, b) {
        var c = [],
            d = !1;
        Bi(Zm, function(e, f) {
            if (a.hasOwnProperty(f) && (f = a[f], null == f ? 0 : f.google_ad_channel)) var g = String(f.google_ad_channel);
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function zI(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === (null == d ? void 0 : d.google_adtest) || b) c.google_adtest = "on"
        }
    };
    mc("script");
    var EI = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function FI() {
        N.apply(this, arguments);
        this.j = null
    }
    z(FI, N);
    FI.prototype.init = function(a) {
        var b = this,
            c = PE();
        if (!TE(c, 27, !1)) {
            UE(c, 27, !0);
            this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
            var d = function() {
                return GI(b, a)
            };
            I(a, "resize", d);
            km(this, function() {
                Bf(a, "resize", d)
            })
        }
    };

    function GI(a, b) {
        var c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            c = ZE();
            a = {};
            c = y(c);
            for (var d = c.next(); !d.done; a = {
                    Ba: a.Ba
                }, d = c.next())
                if (a.Ba = d.value, a.Ba.Ra.offsetWidth != a.Ba.offsetWidth || a.Ba.F.google_full_width_responsive_allowed) a.Ba.offsetWidth = a.Ba.Ra.offsetWidth, vm(467, function(e) {
                    return function() {
                        var f = e.Ba.Ra,
                            g = e.Ba.F,
                            h = HI(f, g);
                        g.google_full_width_responsive_allowed && (f.style.marginLeft = g.gfwroml || "", f.style.marginRight = g.gfwromr || "", f.style.height = g.gfwroh ? g.gfwroh + "px" : "", f.style.width =
                            g.gfwrow ? g.gfwrow + "px" : "", f.style.zIndex = g.gfwroz || "", delete g.google_full_width_responsive_allowed);
                        delete g.google_ad_format;
                        delete g.google_ad_width;
                        delete g.google_ad_height;
                        delete g.google_content_recommendation_ui_type;
                        delete g.google_content_recommendation_rows_num;
                        delete g.google_content_recommendation_columns_num;
                        b.google_spfd(f, g, b);
                        var k = HI(f, g);
                        !k && h && 1 == f.childNodes.length ? (II(h, !1), g.google_reactive_ad_format = 16, g.google_ad_section = "responsive_resize", f.dataset.adsbygoogleStatus = "reserved",
                            f.className += " adsbygoogle-noablate", sI(b), b.adsbygoogle.push({
                                element: f,
                                params: g
                            })) : k && h ? k != h && (II(h, !1), II(k, !0)) : xm("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: f.childNodes.length
                        })
                    }
                }(a))
        }
    }

    function JI(a, b) {
        if (!it(b, a)) return function() {};
        a = KI(b, a);
        if (!a) return function() {};
        var c = ZE(),
            d = {
                Ra: a,
                F: Hf(b),
                offsetWidth: a.offsetWidth
            };
        c.push(d);
        return function() {
            return cc(c, d)
        }
    }

    function II(a, b) {
        a.style.display = b ? "inline-block" : "none";
        var c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function HI(a, b) {
        for (var c = 0; c < a.childNodes.length; c++) {
            for (var d = {}, e = a.childNodes[c], f = e.style, g = ["width", "height"], h = 0; h < g.length; h++) {
                var k = "google_ad_" + g[h];
                if (!d.hasOwnProperty(k)) {
                    var l = Ki(f[g[h]]);
                    l = null === l ? null : Math.round(l);
                    null != l && (d[k] = l)
                }
            }
            if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height) return e
        }
        return null
    }

    function KI(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id + (S(wr) ? "_host" : ""));
        if (!a) return null;
        for (a = a.parentElement; a && !nt.test(a.className);) a = a.parentElement;
        return a
    };

    function LI(a, b, c) {
        this.J = a;
        this.Ra = b;
        this.F = c;
        this.j = null;
        this.l = this.m = 0
    }
    LI.prototype.v = function() {
        10 <= ++this.m && B.clearInterval(this.j);
        var a = lt(this.J, this.Ra);
        a = mt(this.J, this.Ra, a);
        var b = ht(this.Ra, this.J);
        null != b && 0 === b.x || B.clearInterval(this.j);
        a && (this.l++, xm("rspv:al", {
            aligns: this.l,
            attempt: this.m,
            client: this.F.google_ad_client,
            eoffs: String(null != b ? b.x : null),
            eids: CH(this.F),
            slot: this.F.google_ad_slot,
            url: this.F.google_page_url
        }, .01))
    };
    var MI = x(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/rum", ".js"]),
        NI = x(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/rum_debug", ".js"]),
        OI = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/reactive_library", ".js"]),
        PI = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/debug_card_library", ".js"]),
        QI = x(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/creativetoolset/xpc_expansion_embed.js"]),
        RI = x(["https://googleads.g.doubleclick.net/pagead/html/",
            "/", "/zrt_lookup.html"
        ]),
        SI = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        TI = x(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/gallerify", ".js"]);
    var Ek = {
        Hk: 0,
        Ek: 1,
        Ck: 2,
        Dk: 3,
        Gk: 5,
        Fk: 7
    };

    function UI(a) {
        this.J = a.J;
        this.pubWin = a.pubWin;
        this.F = a.F;
        this.ha = a.ha;
        this.ea = a.ea;
        this.jb = a.jb;
        this.Y = a.Y;
        this.A = -1;
        this.j = 0;
        this.l = this.H = null;
        this.G = this.D = 0;
        this.m = [];
        this.Eb = this.C = "";
        this.v = this.B = null
    };

    function VI(a, b) {
        var c = TF(a, pB(b));
        c = E(c, 2, b.tcString);
        c = E(c, 4, b.addtlConsent || "");
        E(c, 7, b.internalErrorState);
        c = !sB(b);
        E(a, 9, c);
        null != b.gdprApplies && E(a, 3, b.gdprApplies)
    }

    function WI(a) {
        var b = new jB(a.pubWin, {
            Jg: -1,
            wf: !0
        });
        if (!kB(b)) return r.Promise.resolve(null);
        var c = PE(),
            d = TE(c, 24);
        if (d) return r.Promise.resolve(d);
        var e = new r.Promise(function(f) {
            f = {
                resolve: f
            };
            var g = TE(c, 25, []);
            g.push(f);
            UE(c, 25, g)
        });
        d || null === d || (UE(c, 24, null), b.addEventListener(function(f) {
            if (oB(f)) {
                UE(c, 24, f);
                VI(a.l, f);
                for (var g = y(TE(c, 25, [])), h = g.next(); !h.done; h = g.next()) h.value.resolve(f);
                UE(c, 25, [])
            } else UE(c, 24, null)
        }));
        return e
    };

    function XI(a, b, c) {
        a -= b;
        return a >= (void 0 === c ? 1E5 : c) ? "M" : 0 <= a ? a : "-M"
    };

    function YI(a, b, c) {
        var d, e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", function() {
            return ZI(e)
        });
        return Bm(a, "adpnt", function(f, g) {
            var h;
            if (qn(g, c.contentWindow)) {
                f = tn(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    null != a.googletag || (a.googletag = {
                        cmd: []
                    });
                    var k = null != (h = a.googletag.queryIds) ? h : [];
                    k.push(f);
                    500 < k.length && k.shift();
                    a.googletag.queryIds = k
                } catch (l) {}
                e.dataset.adStatus && xm("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    }

    function ZI(a) {
        setTimeout(function() {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function $I(a, b, c, d) {
        N.call(this);
        var e = this;
        this.l = a;
        this.j = b;
        this.K = c;
        this.ba = d;
        this.Ca = {};
        this.gf = this.K.rb(168, function(f, g) {
            return void aJ(e, f, g)
        });
        this.jf = this.K.rb(169, function(f, g) {
            return un(e.l, "ras::xsf", e.ba, g)
        });
        this.N = [];
        this.P(this.Ca);
        this.N.push(Am(this.l, "sth", this.gf, this.jf))
    }
    z($I, N);

    function aJ(a, b, c) {
        try {
            if (!Yi(c.origin) || a.j && !qn(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.Ca[d]) && a.K.Ob(168, function() {
            e.call(a, b, c)
        })
    }
    $I.prototype.M = function() {
        for (var a = y(this.N), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.N.length = 0;
        N.prototype.M.call(this)
    };

    function bJ(a, b) {
        $I.call(this, a, void 0 === b ? null : b, tm, sm);
        this.l = a
    }
    z(bJ, $I);

    function cJ(a, b) {
        bJ.call(this, a, b);
        this.m = function() {};
        this.j && I(this.j, "load", this.m)
    }
    z(cJ, bJ);
    cJ.prototype.M = function() {
        this.j && Bf(this.j, "load", this.m);
        bJ.prototype.M.call(this);
        this.j = null
    };
    cJ.prototype.P = function(a) {
        var b = this;
        a["adsense-labs"] = function(c) {
            if (c = tn(c).settings) try {
                var d = new lh(JSON.parse(c));
                if (null != D(d, 1)) {
                    var e = b.l,
                        f = D(d, 1) || "";
                    if (S(Rq) ? null != UF({
                            win: e,
                            ve: sH()
                        }).j : 1) {
                        if (S(Rq)) {
                            var g = UF({
                                win: e,
                                ve: sH()
                            });
                            var h = null != g.j ? uH(g.j.value) : {}
                        } else h = uH(e.localStorage);
                        null !== d && (h[f] = d.toJSON());
                        try {
                            e.localStorage.setItem("google_adsense_settings", JSON.stringify(h))
                        } catch (k) {}
                    }
                }
            } catch (k) {}
        }
    };

    function dJ(a, b) {
        bJ.call(this, a.J, b);
        var c = this;
        this.m = a.Y;
        this.D = this.m.parentElement && this.m.parentElement.classList.contains("adsbygoogle") ? this.m.parentElement : this.m;
        this.v = parseInt(this.m.style.height, 10);
        this.L = null;
        this.Xa = this.Ub = !1;
        this.Ka = "";
        this.ia = this.G = this.B = 0;
        this.hf = this.v / 5;
        this.H = zj(this.D).y;
        this.Wa = null;
        this.Lc = xf(wm(651, function() {
            c.H = zj(c.D).y;
            var d = c.G;
            c.G = rn(c.l);
            c.v < c.B ? (d = c.G - d, 0 < d && (c.ia += d, c.ia >= c.hf ? (eJ(c), fJ(c, c.B)) : (c.v = Math.min(c.B, c.v + d), fJ(c, d), gJ(c)))) : Bf(c.l,
                "scroll", c.I)
        }), this);
        this.I = function() {
            var d = c.Lc;
            Gh.requestAnimationFrame ? Gh.requestAnimationFrame(d) : d()
        }
    }
    z(dJ, bJ);
    dJ.prototype.P = function(a) {
        var b = this;
        a["expand-on-scroll"] = function(c, d) {
            c = tn(c);
            b.L = c.i_expid;
            b.Ka = c.qid;
            b.Wa = c.gen204_fraction;
            if (!b.Ub) {
                b.Ub = !0;
                c = hJ(b, c);
                "0" === c && I(b.l, "scroll", b.I, yf);
                var e = {};
                e = (e.msg_type = "expand-on-scroll-result", e.eos_success = "0" === c, e);
                Cm(d.source, "sth", e, "*");
                d = {
                    err: c
                };
                d = void 0 === d ? {} : d;
                b.L && (d.eid = b.L);
                d.qid = b.Ka;
                xm("eoscrl", d, Tm(String(b.Wa)))
            }
        };
        a["expand-on-scroll-force-expand"] = function() {
            b.Xa || (b.Xa = !0, eJ(b), Bf(b.l, "scroll", b.I))
        }
    };

    function eJ(a) {
        a.v = a.B;
        a.D.style.transition = "height 500ms";
        a.m.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        gJ(a)
    }

    function gJ(a) {
        var b = "rect(0px, " + a.j.width + "px, " + a.v + "px, 0px)";
        a.j.style.clip = b;
        a.m.style.clip = b;
        a.j.setAttribute("height", a.v);
        a.j.style.height = a.v + "px";
        a.m.setAttribute("height", a.v);
        a.m.style.height = a.v + "px";
        a.D.style.height = a.v + "px"
    }

    function hJ(a, b) {
        b = Ii(b.r_nh);
        a.B = null == b ? 0 : b;
        if (0 >= a.B) return "1";
        a.H = zj(a.D).y;
        a.G = rn(a.l);
        if (a.H + a.v < a.G) return "2";
        if (a.H > ln(a.l) - a.l.innerHeight) return "3";
        b = a.G;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.m.style.overflow = "hidden";
        a.D.style.position = "relative";
        a.D.style.transition = "height 100ms";
        a.m.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.l.innerHeight - a.H, a.v);
        tj(a.m, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = "rect(0px, " + a.j.width +
            "px, " + b + "px, 0px)";
        tj(a.j, {
            clip: b
        });
        tj(a.m, {
            clip: b
        });
        return "0"
    }

    function fJ(a, b) {
        var c = {};
        b = (c.msg_type = "expand-on-scroll-result", c.eos_success = !0, c.eos_amount = b, c);
        Cm(a.j.contentWindow, "sth", b, "*")
    }
    dJ.prototype.M = function() {
        this.I && Bf(this.l, "scroll", this.I, yf);
        bJ.prototype.M.call(this)
    };

    function iJ(a, b, c) {
        N.call(this);
        var d = this;
        this.l = a;
        this.v = b;
        this.H = c;
        this.B = 0;
        this.m = jJ(this);
        this.G = wf(this.D, this);
        this.j = wm(433, function() {
            var e = d.G;
            Gh.requestAnimationFrame ? Gh.requestAnimationFrame(e) : e()
        });
        I(this.l, "scroll", this.j, yf)
    }
    z(iJ, N);

    function jJ(a) {
        var b = a.H.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    iJ.prototype.D = function() {
        var a = jJ(this);
        if (a && !this.m) {
            var b = {
                    rr: "vis-bcr"
                },
                c = this.v.contentWindow;
            c && (Dm(c, "ig", b, "*", 2), 10 <= ++this.B && this.j && Bf(this.l, "scroll", this.j, yf))
        }
        this.m = a
    };

    function kJ(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function lJ(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function mJ(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function nJ(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.yd + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        tj(a, "transition", b.join(","))
    }
    var oJ = uf(function() {
        if (sc) return !0;
        var a = gi(document, "DIV"),
            b = vc ? "-webkit" : uc ? "-moz" : sc ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = Fg("div", {
            style: c
        });
        Kh(a, b);
        a = a.firstChild;
        b = a.style[Wh("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[uj(a, "transition")] || "")
    });

    function pJ(a, b) {
        this.l = ["", ""];
        this.j = a || "";
        this.m = b || ""
    }

    function qJ(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function rJ(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function sJ(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }
    pJ.prototype.toString = function() {
        return [this.l[0], this.l[1], this.j, this.m].join("|")
    };

    function tJ(a) {
        var b = uJ(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }

    function uJ(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(vJ, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function wJ(a, b, c, d, e, f, g) {
        this.Ub = a;
        this.K = c;
        this.D = b;
        this.P = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
        this.A = new xJ(this.D);
        this.v = g;
        this.Wa = yJ(this.A, d.Ld, d.height, d.Se);
        this.C = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.right - this.A.boundingClientRect.left : null : e;
        this.B = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.bottom - this.A.boundingClientRect.top : null : f;
        this.m = zJ(d.width);
        this.l = zJ(d.height);
        this.L = this.v ? zJ(d.opacity) : null;
        this.ia = d.check;
        this.G =
            "animate" == d.Ld && !AJ(this.A, this.l, this.Ka) && oJ();
        this.Xa = !!d.Vd;
        this.j = new pJ;
        AJ(this.A, this.l, this.Ka) && rJ(this.j, "r");
        e = this.A;
        e.j && e.l >= e.m && rJ(this.j, "b");
        this.I = this.H = null;
        this.N = !1;
        this.Ca = !!d.yg;
        this.Lc = !!d.Ag;
        this.Ka = !!d.Se
    }

    function BJ(a) {
        if (a.v && !a.Wa || null == a.m && null == a.l && null == a.L && a.v) return a.j;
        var b = a.v;
        a.v = !1;
        CJ(a);
        a.v = b;
        if (!b || null != a.ia && !uJ(a.j, a.ia, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null, a.B = null);
        if (null == a.C && null !== a.m || null == a.B && null !== a.l) a.G = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        DJ(a);
        return CJ(a)
    }

    function DJ(a) {
        function b() {
            EJ(c, h, k);
            if (l && !m && !k) {
                var n = function(p) {
                    for (var v = 0; v < p.length; v++) tj(l, p[v], "0px")
                };
                n(FJ);
                n(GJ)
            }
        }
        var c = a.D;
        c.style.overflow = a.Xa ? "visible" : "hidden";
        a.G && (a.I ? (nJ(c, HJ), nJ(a.I, HJ)) : nJ(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.L && (c.style.opacity = a.L);
        var d = null != a.C && null != a.m && (a.Ca || a.m > a.C) ? a.m : null,
            e = null != a.B && null != a.l && (a.Ca || a.l > a.B) ? a.l : null;
        if (a.K)
            for (var f = a.K.length, g =
                    0; g < f; g++) EJ(a.K[g], d, e);
        var h = a.m,
            k = a.l,
            l = a.I,
            m = a.N;
        a.G ? B.setTimeout(b, 1E3) : b()
    }

    function IJ(a, b) {
        var c = !1;
        "none" == b.display && (rJ(a.j, "n"), a.v && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || rJ(a.j, "v");
        "hidden" == b.overflow && rJ(a.j, "o");
        "absolute" == b.position ? (rJ(a.j, "a"), c = !0) : "fixed" == b.position && (rJ(a.j, "f"), c = !0);
        return c
    }

    function CJ(a) {
        var b = a.P;
        a.H = function() {};
        JJ(a, a.D, b);
        var c = a.D.parentElement;
        if (!c) return a.j;
        for (var d = !0, e = null; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : zi(c, b)
            } catch (g) {
                sJ(a.j, "c")
            }
            var f = KJ(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.N = !0);
            if (d && !f && LJ(e)) {
                rJ(a.j, "l");
                a.I = c;
                break
            }
            d = d && f;
            if (e && IJ(a, e)) break;
            c.parentNode && "#document-fragment" === c.parentNode.nodeName && c.parentNode.toString && "[object ShadowRoot]" === c.parentNode.toString() ?
                c = c.parentNode.host : c = c.parentElement;
            if (!c) {
                if (b === a.Ub) break;
                try {
                    if (c = b.frameElement, b = b.parent, !ti(b)) {
                        rJ(a.j, "c");
                        break
                    }
                } catch (g) {
                    rJ(a.j, "c");
                    break
                }
            }
        }
        a.G && a.v && MJ(a);
        return a.j
    }

    function NJ(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            var d = null;
            try {
                d = zi(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.A.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.A.boundingClientRect.left ? 2 : 0) | (c.bottom > a.A.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function JJ(a, b, c) {
        var d = 0;
        if (!b || !b.parentElement) return !0;
        for (var e = !1, f = 0, g = b.parentElement.childNodes, h = 0; h < g.length; h++) {
            var k = g[h];
            k == b ? e = !0 : (k = NJ(a, k, c), d |= k, e && (f |= k))
        }
        f & 1 && (d & 2 && qJ(a.j, 0, "o"), d & 4 && qJ(a.j, 1, "o"));
        return !(d & 1)
    }

    function OJ(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Ii(f);
                null == f && (sJ(a.j, "n"), qJ(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.v)
                        if (a.G) {
                            var k = Math.max(f + h - (g || 0), 0),
                                l = a.H;
                            a.H = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else qJ(a.j, b, "d")
        }
    }

    function PJ(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? QJ(f) : RJ(f)) || (f = Ki(f), null == f ? rJ(a.j, "p") : null != k && rJ(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? QJ(h) : RJ(h)) return;
                h = Ki(h);
                null == h && (sJ(a.j, "p"), qJ(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.v)
                        if (a.G) {
                            var m = Math.max(h + l - (k || 0), 0),
                                n = a.H;
                            a.H = function(p, v) {
                                p == b && (e[g] = m - v + "px");
                                n && n(p, v)
                            }
                        } else e[g] = l + "px"
                } else qJ(a.j, b, c)
        }
    }

    function KJ(a, b, c, d) {
        var e = null;
        try {
            e = c.style
        } catch (A) {
            sJ(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Ii(f),
            h = c.getAttribute("height"),
            k = Ii(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = JJ(a, c, b);
        var m = d && d.width,
            n = d && d.height,
            p = e && e.width,
            v = e && e.height,
            u = Ki(m) == a.C && Ki(n) == a.B;
        m = u ? m : p;
        v = u ? n : v;
        p = Ki(m);
        u = Ki(v);
        g = null !== a.C && (null !== p && a.C >= p || null !== g && a.C >= g);
        u = null !== a.B && (null !== u && a.B >= u || null !== k && a.B >= k);
        k = !b && LJ(d);
        u = b || u || k || !(f || m || d && (!QJ(String(d.minWidth)) || !RJ(String(d.maxWidth))));
        l = b || g || k || l || !(h || v || d && (!QJ(String(d.minHeight)) || !RJ(String(d.maxHeight))));
        OJ(a, 0, u, c, "width", f, a.C, a.m);
        PJ(a, 0, "d", u, e, d, "width", m, a.C, a.m);
        PJ(a, 0, "m", u, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        PJ(a, 0, "M", u, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        a.Lc ? (c = /^html|body$/i.test(c.nodeName), f = Ki(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.v && !c && h && (e.setProperty("height", "auto", "important"), d && !QJ(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !RJ(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (OJ(a, 1, l, c, "height", h, a.B, a.l), PJ(a, 1, "d", l, e, d, "height", v, a.B, a.l), PJ(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.B, a.l), PJ(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.B, a.l));
        return b
    }

    function MJ(a) {
        function b() {
            if (0 < c) {
                var l = zi(e, d) || {},
                    m = Ki(l.width);
                l = Ki(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else B.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        var c = 31.25,
            d = a.P,
            e = a.D,
            f = a.m,
            g = a.l,
            h = a.H,
            k;
        B.setTimeout(function() {
            k = B.setInterval(b, 16)
        }, 990)
    }

    function xJ(a) {
        var b = a && a.ownerDocument,
            c = b && (b.defaultView || b.parentWindow);
        c = c && wi(c);
        this.j = !!c;
        this.boundingClientRect = null;
        if (a) try {
            this.boundingClientRect = a.getBoundingClientRect()
        } catch (k) {}
        for (var d = a, e = 0, f = this.boundingClientRect; d;) try {
            f && (e += f.top);
            var g = d.ownerDocument,
                h = g && (g.defaultView || g.parentWindow);
            (d = h && h.frameElement) && (f = d.getBoundingClientRect())
        } catch (k) {
            break
        }
        this.l = e;
        c = c || B;
        this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
        b = b && kJ(b);
        this.v = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
    }

    function AJ(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.v) && (c ? (b = a.l + Math.min(b, zJ(a.getHeight())), a = a.j && b >= a.m) : a = a.j && a.l >= a.m, d = a);
        return d
    }
    xJ.prototype.isVisible = function() {
        return this.v
    };
    xJ.prototype.getWidth = function() {
        return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
    };
    xJ.prototype.getHeight = function() {
        return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
    };

    function yJ(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return AJ(a, c, d)
        }
    }

    function LJ(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function SJ(a, b, c, d) {
        return BJ(new wJ(a, b, d, c, null, null, !0))
    }
    var TJ = new pJ("s", ""),
        vJ = RegExp("[lonvafrbpEe]", "g");

    function RJ(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function QJ(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function EJ(a, b, c) {
        null !== b && null !== Ii(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Ii(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    for (var FJ = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), GJ = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), UJ = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s", VJ = FJ, WJ = 0; WJ < VJ.length; WJ++) UJ += ", " + VJ[WJ] + " .2s cubic-bezier(.4, 0, 1, 1)";
    VJ = GJ;
    for (var XJ = 0; XJ < VJ.length; XJ++) UJ += ", " + VJ[XJ] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var HJ = UJ;

    function zJ(a) {
        return "string" === typeof a ? Ii(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function YJ(a, b, c) {
        bJ.call(this, a, b);
        this.B = String(c.google_ad_unit_key || "");
        this.v = String(c.google_ad_dom_fingerprint || "");
        this.m = String(c.google_ad_format || "")
    }
    z(YJ, bJ);
    YJ.prototype.P = function(a) {
        var b = this;
        a["resize-me"] = function(c, d) {
            c = tn(c);
            var e = c.r_chk;
            if (null == e || "" === e) {
                var f = Ii(c.r_nw),
                    g = Ii(c.r_nh),
                    h = Ii(c.r_no);
                null != h || 0 !== f && 0 !== g || (h = 0);
                var k = c.r_str;
                k = k ? k : null;
                var l = h,
                    m = Ji(c.r_ao),
                    n = Ji(c.r_ifr),
                    p = Ji(c.r_cab),
                    v = window;
                if (b.j && v)
                    if ("no_rsz" === k) c.err = "7", ZJ(b, c, null), f = !0;
                    else if (h = new xJ(b.j), h.j) {
                    var u = h.getWidth();
                    null != u && (c.w = u);
                    u = h.getHeight();
                    null != u && (c.h = u);
                    if (yJ(h, k, g, p)) {
                        var A = b.j.ownerDocument.getElementById(b.j.id + "_host");
                        u = A || b.j;
                        e = SJ(v,
                            u, {
                                width: f,
                                height: g,
                                opacity: l,
                                check: e,
                                Ld: k,
                                Vd: m,
                                yg: n,
                                Se: p
                            }, A ? [b.j] : null);
                        c.r_cui && Ji(c.r_cui.toString()) && K(u, {
                            height: (null === g ? 0 : g - 48) + "px",
                            top: "24px"
                        });
                        null != f && (c.nw = f);
                        null != g && (c.nh = g);
                        c.rsz = e.toString();
                        c.abl = tJ(e);
                        c.frsz = ("force" === k).toString();
                        c.err = "0";
                        ZJ(b, c, h);
                        f = !0
                    } else c.err = "1", ZJ(b, c, h), f = !1
                } else c.err = "3", ZJ(b, c, null), f = !1;
                else c.err = "2", ZJ(b, c, null), f = !1;
                Cm(d.source, "sth", {
                    msg_type: "resize-result",
                    r_str: k,
                    r_status: f
                }, "*");
                b.j.dataset.googleQueryId || b.j.setAttribute("data-google-query-id",
                    c.qid)
            }
        }
    };

    function $J(a, b, c) {
        var d = {
            scrl: rn(a.l || window),
            adk: a.B,
            adf: a.v,
            fmt: a.m
        };
        b && (d.str = AJ(b, Ii(c.r_nh), Ji(c.r_cab)), d.ad_y = b.l, d.vph = b.m);
        Bi(c, function(e, f) {
            d[f] = e
        });
        return d
    }

    function ZJ(a, b, c) {
        var d = Tm(String(b.gen204_fraction));
        b = $J(a, c, b);
        b.url = a.l.document.URL;
        xm("resize", b, d)
    }
    YJ.prototype.M = function() {
        bJ.prototype.M.call(this);
        this.j = null
    };
    var aK = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    var bK = /^blogger$/,
        cK = /^wordpress(.|\s|$)/i,
        dK = /^joomla!/i,
        eK = /^drupal/i,
        fK = /\/wp-content\//,
        gK = /\/wp-content\/plugins\/advanced-ads/,
        hK = /\/wp-content\/themes\/genesis/,
        iK = /\/wp-content\/plugins\/genesis/;

    function jK(a) {
        for (var b = a.getElementsByTagName("script"), c = b.length, d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (gK.test(e)) return 5;
                if (iK.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", hK.test(e) || iK.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (bK.test(f)) return 1;
                if (cK.test(f)) return 2;
                if (dK.test(f)) return 3;
                if (eK.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", fK.test(d))) return 2;
        return 0
    };
    var kK = navigator;

    function lK(a) {
        var b = 1,
            c;
        if (void 0 != a && "" != a)
            for (b = 0, c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }

    function mK(a, b) {
        if (!a || "none" == a) return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return lK(a.toLowerCase())
    }
    var nK = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        oK = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        pK = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function qK() {
        var a = void 0 === a ? B : a;
        var b = new bt;
        a.SVGElement && a.document.createElementNS && b.set(0);
        var c = Pi();
        c["allow-top-navigation-by-user-activation"] && b.set(1);
        c["allow-popups-to-escape-sandbox"] && b.set(2);
        a.crypto && a.crypto.subtle && b.set(3);
        a.TextDecoder && a.TextEncoder && b.set(4);
        return ct(b)
    };
    var rK = x(["https://adservice.google.com/adsid/integrator.", ""]),
        sK = x(["https://adservice.google.ad/adsid/integrator.", ""]),
        tK = x(["https://adservice.google.ae/adsid/integrator.", ""]),
        uK = x(["https://adservice.google.com.af/adsid/integrator.", ""]),
        vK = x(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        wK = x(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        xK = x(["https://adservice.google.al/adsid/integrator.", ""]),
        yK = x(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        zK = x(["https://adservice.google.com.ar/adsid/integrator.",
            ""
        ]),
        AK = x(["https://adservice.google.as/adsid/integrator.", ""]),
        BK = x(["https://adservice.google.at/adsid/integrator.", ""]),
        CK = x(["https://adservice.google.com.au/adsid/integrator.", ""]),
        DK = x(["https://adservice.google.az/adsid/integrator.", ""]),
        EK = x(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        FK = x(["https://adservice.google.be/adsid/integrator.", ""]),
        GK = x(["https://adservice.google.bf/adsid/integrator.", ""]),
        HK = x(["https://adservice.google.bg/adsid/integrator.", ""]),
        IK = x(["https://adservice.google.com.bh/adsid/integrator.",
            ""
        ]),
        JK = x(["https://adservice.google.bi/adsid/integrator.", ""]),
        KK = x(["https://adservice.google.bj/adsid/integrator.", ""]),
        LK = x(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        MK = x(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        NK = x(["https://adservice.google.com.br/adsid/integrator.", ""]),
        OK = x(["https://adservice.google.bs/adsid/integrator.", ""]),
        PK = x(["https://adservice.google.bt/adsid/integrator.", ""]),
        QK = x(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        RK = x(["https://adservice.google.com.bz/adsid/integrator.",
            ""
        ]),
        SK = x(["https://adservice.google.ca/adsid/integrator.", ""]),
        TK = x(["https://adservice.google.cd/adsid/integrator.", ""]),
        UK = x(["https://adservice.google.cf/adsid/integrator.", ""]),
        VK = x(["https://adservice.google.cg/adsid/integrator.", ""]),
        WK = x(["https://adservice.google.ch/adsid/integrator.", ""]),
        XK = x(["https://adservice.google.ci/adsid/integrator.", ""]),
        YK = x(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        ZK = x(["https://adservice.google.cl/adsid/integrator.", ""]),
        $K = x(["https://adservice.google.cm/adsid/integrator.",
            ""
        ]),
        aL = x(["https://adservice.google.com.co/adsid/integrator.", ""]),
        bL = x(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        cL = x(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        dL = x(["https://adservice.google.cv/adsid/integrator.", ""]),
        eL = x(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        fL = x(["https://adservice.google.cz/adsid/integrator.", ""]),
        gL = x(["https://adservice.google.de/adsid/integrator.", ""]),
        hL = x(["https://adservice.google.dj/adsid/integrator.", ""]),
        iL = x(["https://adservice.google.dk/adsid/integrator.",
            ""
        ]),
        jL = x(["https://adservice.google.dm/adsid/integrator.", ""]),
        kL = x(["https://adservice.google.dz/adsid/integrator.", ""]),
        lL = x(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        mL = x(["https://adservice.google.ee/adsid/integrator.", ""]),
        nL = x(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        oL = x(["https://adservice.google.es/adsid/integrator.", ""]),
        pL = x(["https://adservice.google.com.et/adsid/integrator.", ""]),
        qL = x(["https://adservice.google.fi/adsid/integrator.", ""]),
        rL = x(["https://adservice.google.com.fj/adsid/integrator.",
            ""
        ]),
        sL = x(["https://adservice.google.fm/adsid/integrator.", ""]),
        tL = x(["https://adservice.google.fr/adsid/integrator.", ""]),
        uL = x(["https://adservice.google.ga/adsid/integrator.", ""]),
        vL = x(["https://adservice.google.ge/adsid/integrator.", ""]),
        wL = x(["https://adservice.google.gg/adsid/integrator.", ""]),
        xL = x(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        yL = x(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        zL = x(["https://adservice.google.gl/adsid/integrator.", ""]),
        AL = x(["https://adservice.google.gm/adsid/integrator.",
            ""
        ]),
        BL = x(["https://adservice.google.gr/adsid/integrator.", ""]),
        CL = x(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        DL = x(["https://adservice.google.gy/adsid/integrator.", ""]),
        EL = x(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        FL = x(["https://adservice.google.hn/adsid/integrator.", ""]),
        GL = x(["https://adservice.google.hr/adsid/integrator.", ""]),
        HL = x(["https://adservice.google.ht/adsid/integrator.", ""]),
        IL = x(["https://adservice.google.hu/adsid/integrator.", ""]),
        JL = x(["https://adservice.google.co.id/adsid/integrator.",
            ""
        ]),
        KL = x(["https://adservice.google.ie/adsid/integrator.", ""]),
        LL = x(["https://adservice.google.co.il/adsid/integrator.", ""]),
        ML = x(["https://adservice.google.im/adsid/integrator.", ""]),
        NL = x(["https://adservice.google.co.in/adsid/integrator.", ""]),
        OL = x(["https://adservice.google.iq/adsid/integrator.", ""]),
        PL = x(["https://adservice.google.is/adsid/integrator.", ""]),
        QL = x(["https://adservice.google.it/adsid/integrator.", ""]),
        RL = x(["https://adservice.google.je/adsid/integrator.", ""]),
        SL = x(["https://adservice.google.com.jm/adsid/integrator.",
            ""
        ]),
        TL = x(["https://adservice.google.jo/adsid/integrator.", ""]),
        UL = x(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        VL = x(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        WL = x(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        XL = x(["https://adservice.google.ki/adsid/integrator.", ""]),
        YL = x(["https://adservice.google.kg/adsid/integrator.", ""]),
        ZL = x(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        $L = x(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        aM = x(["https://adservice.google.kz/adsid/integrator.",
            ""
        ]),
        bM = x(["https://adservice.google.la/adsid/integrator.", ""]),
        cM = x(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        dM = x(["https://adservice.google.li/adsid/integrator.", ""]),
        eM = x(["https://adservice.google.lk/adsid/integrator.", ""]),
        fM = x(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        gM = x(["https://adservice.google.lt/adsid/integrator.", ""]),
        hM = x(["https://adservice.google.lu/adsid/integrator.", ""]),
        iM = x(["https://adservice.google.lv/adsid/integrator.", ""]),
        jM = x(["https://adservice.google.com.ly/adsid/integrator.",
            ""
        ]),
        kM = x(["https://adservice.google.md/adsid/integrator.", ""]),
        lM = x(["https://adservice.google.me/adsid/integrator.", ""]),
        mM = x(["https://adservice.google.mg/adsid/integrator.", ""]),
        nM = x(["https://adservice.google.mk/adsid/integrator.", ""]),
        oM = x(["https://adservice.google.ml/adsid/integrator.", ""]),
        pM = x(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        qM = x(["https://adservice.google.mn/adsid/integrator.", ""]),
        rM = x(["https://adservice.google.ms/adsid/integrator.", ""]),
        sM = x(["https://adservice.google.com.mt/adsid/integrator.",
            ""
        ]),
        tM = x(["https://adservice.google.mu/adsid/integrator.", ""]),
        uM = x(["https://adservice.google.mv/adsid/integrator.", ""]),
        vM = x(["https://adservice.google.mw/adsid/integrator.", ""]),
        wM = x(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        xM = x(["https://adservice.google.com.my/adsid/integrator.", ""]),
        yM = x(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        zM = x(["https://adservice.google.com.na/adsid/integrator.", ""]),
        AM = x(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        BM = x(["https://adservice.google.com.ni/adsid/integrator.",
            ""
        ]),
        CM = x(["https://adservice.google.ne/adsid/integrator.", ""]),
        DM = x(["https://adservice.google.nl/adsid/integrator.", ""]),
        EM = x(["https://adservice.google.no/adsid/integrator.", ""]),
        FM = x(["https://adservice.google.com.np/adsid/integrator.", ""]),
        GM = x(["https://adservice.google.nr/adsid/integrator.", ""]),
        HM = x(["https://adservice.google.nu/adsid/integrator.", ""]),
        IM = x(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        JM = x(["https://adservice.google.com.om/adsid/integrator.", ""]),
        KM = x(["https://adservice.google.com.pa/adsid/integrator.",
            ""
        ]),
        LM = x(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        MM = x(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        NM = x(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        OM = x(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        PM = x(["https://adservice.google.pl/adsid/integrator.", ""]),
        QM = x(["https://adservice.google.pn/adsid/integrator.", ""]),
        RM = x(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        SM = x(["https://adservice.google.ps/adsid/integrator.", ""]),
        TM = x(["https://adservice.google.pt/adsid/integrator.",
            ""
        ]),
        UM = x(["https://adservice.google.com.py/adsid/integrator.", ""]),
        VM = x(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        WM = x(["https://adservice.google.ro/adsid/integrator.", ""]),
        XM = x(["https://adservice.google.rw/adsid/integrator.", ""]),
        YM = x(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        ZM = x(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        $M = x(["https://adservice.google.sc/adsid/integrator.", ""]),
        aN = x(["https://adservice.google.se/adsid/integrator.", ""]),
        bN = x(["https://adservice.google.com.sg/adsid/integrator.",
            ""
        ]),
        cN = x(["https://adservice.google.sh/adsid/integrator.", ""]),
        dN = x(["https://adservice.google.si/adsid/integrator.", ""]),
        eN = x(["https://adservice.google.sk/adsid/integrator.", ""]),
        fN = x(["https://adservice.google.sn/adsid/integrator.", ""]),
        gN = x(["https://adservice.google.so/adsid/integrator.", ""]),
        hN = x(["https://adservice.google.sm/adsid/integrator.", ""]),
        iN = x(["https://adservice.google.sr/adsid/integrator.", ""]),
        jN = x(["https://adservice.google.st/adsid/integrator.", ""]),
        kN = x(["https://adservice.google.com.sv/adsid/integrator.",
            ""
        ]),
        lN = x(["https://adservice.google.td/adsid/integrator.", ""]),
        mN = x(["https://adservice.google.tg/adsid/integrator.", ""]),
        nN = x(["https://adservice.google.co.th/adsid/integrator.", ""]),
        oN = x(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        pN = x(["https://adservice.google.tl/adsid/integrator.", ""]),
        qN = x(["https://adservice.google.tm/adsid/integrator.", ""]),
        rN = x(["https://adservice.google.tn/adsid/integrator.", ""]),
        sN = x(["https://adservice.google.to/adsid/integrator.", ""]),
        tN = x(["https://adservice.google.com.tr/adsid/integrator.",
            ""
        ]),
        uN = x(["https://adservice.google.tt/adsid/integrator.", ""]),
        vN = x(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        wN = x(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        xN = x(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        yN = x(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        zN = x(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        AN = x(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        BN = x(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        CN = x(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        DN = x(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        EN = x(["https://adservice.google.vg/adsid/integrator.", ""]),
        FN = x(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        GN = x(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        HN = x(["https://adservice.google.vu/adsid/integrator.", ""]),
        IN = x(["https://adservice.google.ws/adsid/integrator.", ""]),
        JN = x(["https://adservice.google.rs/adsid/integrator.", ""]),
        KN = x(["https://adservice.google.co.za/adsid/integrator.",
            ""
        ]),
        LN = x(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        MN = x(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        NN = x(["https://adservice.google.cat/adsid/integrator.", ""]),
        ON = new r.Map([
            [".google.com", function(a) {
                return L(rK, a)
            }],
            [".google.ad", function(a) {
                return L(sK, a)
            }],
            [".google.ae", function(a) {
                return L(tK, a)
            }],
            [".google.com.af", function(a) {
                return L(uK, a)
            }],
            [".google.com.ag", function(a) {
                return L(vK, a)
            }],
            [".google.com.ai", function(a) {
                return L(wK, a)
            }],
            [".google.al", function(a) {
                return L(xK,
                    a)
            }],
            [".google.co.ao", function(a) {
                return L(yK, a)
            }],
            [".google.com.ar", function(a) {
                return L(zK, a)
            }],
            [".google.as", function(a) {
                return L(AK, a)
            }],
            [".google.at", function(a) {
                return L(BK, a)
            }],
            [".google.com.au", function(a) {
                return L(CK, a)
            }],
            [".google.az", function(a) {
                return L(DK, a)
            }],
            [".google.com.bd", function(a) {
                return L(EK, a)
            }],
            [".google.be", function(a) {
                return L(FK, a)
            }],
            [".google.bf", function(a) {
                return L(GK, a)
            }],
            [".google.bg", function(a) {
                return L(HK, a)
            }],
            [".google.com.bh", function(a) {
                return L(IK, a)
            }],
            [".google.bi",
                function(a) {
                    return L(JK, a)
                }
            ],
            [".google.bj", function(a) {
                return L(KK, a)
            }],
            [".google.com.bn", function(a) {
                return L(LK, a)
            }],
            [".google.com.bo", function(a) {
                return L(MK, a)
            }],
            [".google.com.br", function(a) {
                return L(NK, a)
            }],
            [".google.bs", function(a) {
                return L(OK, a)
            }],
            [".google.bt", function(a) {
                return L(PK, a)
            }],
            [".google.co.bw", function(a) {
                return L(QK, a)
            }],
            [".google.com.bz", function(a) {
                return L(RK, a)
            }],
            [".google.ca", function(a) {
                return L(SK, a)
            }],
            [".google.cd", function(a) {
                return L(TK, a)
            }],
            [".google.cf", function(a) {
                return L(UK,
                    a)
            }],
            [".google.cg", function(a) {
                return L(VK, a)
            }],
            [".google.ch", function(a) {
                return L(WK, a)
            }],
            [".google.ci", function(a) {
                return L(XK, a)
            }],
            [".google.co.ck", function(a) {
                return L(YK, a)
            }],
            [".google.cl", function(a) {
                return L(ZK, a)
            }],
            [".google.cm", function(a) {
                return L($K, a)
            }],
            [".google.com.co", function(a) {
                return L(aL, a)
            }],
            [".google.co.cr", function(a) {
                return L(bL, a)
            }],
            [".google.com.cu", function(a) {
                return L(cL, a)
            }],
            [".google.cv", function(a) {
                return L(dL, a)
            }],
            [".google.com.cy", function(a) {
                return L(eL, a)
            }],
            [".google.cz",
                function(a) {
                    return L(fL, a)
                }
            ],
            [".google.de", function(a) {
                return L(gL, a)
            }],
            [".google.dj", function(a) {
                return L(hL, a)
            }],
            [".google.dk", function(a) {
                return L(iL, a)
            }],
            [".google.dm", function(a) {
                return L(jL, a)
            }],
            [".google.dz", function(a) {
                return L(kL, a)
            }],
            [".google.com.ec", function(a) {
                return L(lL, a)
            }],
            [".google.ee", function(a) {
                return L(mL, a)
            }],
            [".google.com.eg", function(a) {
                return L(nL, a)
            }],
            [".google.es", function(a) {
                return L(oL, a)
            }],
            [".google.com.et", function(a) {
                return L(pL, a)
            }],
            [".google.fi", function(a) {
                return L(qL,
                    a)
            }],
            [".google.com.fj", function(a) {
                return L(rL, a)
            }],
            [".google.fm", function(a) {
                return L(sL, a)
            }],
            [".google.fr", function(a) {
                return L(tL, a)
            }],
            [".google.ga", function(a) {
                return L(uL, a)
            }],
            [".google.ge", function(a) {
                return L(vL, a)
            }],
            [".google.gg", function(a) {
                return L(wL, a)
            }],
            [".google.com.gh", function(a) {
                return L(xL, a)
            }],
            [".google.com.gi", function(a) {
                return L(yL, a)
            }],
            [".google.gl", function(a) {
                return L(zL, a)
            }],
            [".google.gm", function(a) {
                return L(AL, a)
            }],
            [".google.gr", function(a) {
                return L(BL, a)
            }],
            [".google.com.gt",
                function(a) {
                    return L(CL, a)
                }
            ],
            [".google.gy", function(a) {
                return L(DL, a)
            }],
            [".google.com.hk", function(a) {
                return L(EL, a)
            }],
            [".google.hn", function(a) {
                return L(FL, a)
            }],
            [".google.hr", function(a) {
                return L(GL, a)
            }],
            [".google.ht", function(a) {
                return L(HL, a)
            }],
            [".google.hu", function(a) {
                return L(IL, a)
            }],
            [".google.co.id", function(a) {
                return L(JL, a)
            }],
            [".google.ie", function(a) {
                return L(KL, a)
            }],
            [".google.co.il", function(a) {
                return L(LL, a)
            }],
            [".google.im", function(a) {
                return L(ML, a)
            }],
            [".google.co.in", function(a) {
                return L(NL,
                    a)
            }],
            [".google.iq", function(a) {
                return L(OL, a)
            }],
            [".google.is", function(a) {
                return L(PL, a)
            }],
            [".google.it", function(a) {
                return L(QL, a)
            }],
            [".google.je", function(a) {
                return L(RL, a)
            }],
            [".google.com.jm", function(a) {
                return L(SL, a)
            }],
            [".google.jo", function(a) {
                return L(TL, a)
            }],
            [".google.co.jp", function(a) {
                return L(UL, a)
            }],
            [".google.co.ke", function(a) {
                return L(VL, a)
            }],
            [".google.com.kh", function(a) {
                return L(WL, a)
            }],
            [".google.ki", function(a) {
                return L(XL, a)
            }],
            [".google.kg", function(a) {
                return L(YL, a)
            }],
            [".google.co.kr",
                function(a) {
                    return L(ZL, a)
                }
            ],
            [".google.com.kw", function(a) {
                return L($L, a)
            }],
            [".google.kz", function(a) {
                return L(aM, a)
            }],
            [".google.la", function(a) {
                return L(bM, a)
            }],
            [".google.com.lb", function(a) {
                return L(cM, a)
            }],
            [".google.li", function(a) {
                return L(dM, a)
            }],
            [".google.lk", function(a) {
                return L(eM, a)
            }],
            [".google.co.ls", function(a) {
                return L(fM, a)
            }],
            [".google.lt", function(a) {
                return L(gM, a)
            }],
            [".google.lu", function(a) {
                return L(hM, a)
            }],
            [".google.lv", function(a) {
                return L(iM, a)
            }],
            [".google.com.ly", function(a) {
                return L(jM,
                    a)
            }],
            [".google.md", function(a) {
                return L(kM, a)
            }],
            [".google.me", function(a) {
                return L(lM, a)
            }],
            [".google.mg", function(a) {
                return L(mM, a)
            }],
            [".google.mk", function(a) {
                return L(nM, a)
            }],
            [".google.ml", function(a) {
                return L(oM, a)
            }],
            [".google.com.mm", function(a) {
                return L(pM, a)
            }],
            [".google.mn", function(a) {
                return L(qM, a)
            }],
            [".google.ms", function(a) {
                return L(rM, a)
            }],
            [".google.com.mt", function(a) {
                return L(sM, a)
            }],
            [".google.mu", function(a) {
                return L(tM, a)
            }],
            [".google.mv", function(a) {
                return L(uM, a)
            }],
            [".google.mw", function(a) {
                return L(vM,
                    a)
            }],
            [".google.com.mx", function(a) {
                return L(wM, a)
            }],
            [".google.com.my", function(a) {
                return L(xM, a)
            }],
            [".google.co.mz", function(a) {
                return L(yM, a)
            }],
            [".google.com.na", function(a) {
                return L(zM, a)
            }],
            [".google.com.ng", function(a) {
                return L(AM, a)
            }],
            [".google.com.ni", function(a) {
                return L(BM, a)
            }],
            [".google.ne", function(a) {
                return L(CM, a)
            }],
            [".google.nl", function(a) {
                return L(DM, a)
            }],
            [".google.no", function(a) {
                return L(EM, a)
            }],
            [".google.com.np", function(a) {
                return L(FM, a)
            }],
            [".google.nr", function(a) {
                return L(GM, a)
            }],
            [".google.nu", function(a) {
                return L(HM, a)
            }],
            [".google.co.nz", function(a) {
                return L(IM, a)
            }],
            [".google.com.om", function(a) {
                return L(JM, a)
            }],
            [".google.com.pa", function(a) {
                return L(KM, a)
            }],
            [".google.com.pe", function(a) {
                return L(LM, a)
            }],
            [".google.com.pg", function(a) {
                return L(MM, a)
            }],
            [".google.com.ph", function(a) {
                return L(NM, a)
            }],
            [".google.com.pk", function(a) {
                return L(OM, a)
            }],
            [".google.pl", function(a) {
                return L(PM, a)
            }],
            [".google.pn", function(a) {
                return L(QM, a)
            }],
            [".google.com.pr", function(a) {
                return L(RM, a)
            }],
            [".google.ps", function(a) {
                return L(SM, a)
            }],
            [".google.pt", function(a) {
                return L(TM, a)
            }],
            [".google.com.py", function(a) {
                return L(UM, a)
            }],
            [".google.com.qa", function(a) {
                return L(VM, a)
            }],
            [".google.ro", function(a) {
                return L(WM, a)
            }],
            [".google.rw", function(a) {
                return L(XM, a)
            }],
            [".google.com.sa", function(a) {
                return L(YM, a)
            }],
            [".google.com.sb", function(a) {
                return L(ZM, a)
            }],
            [".google.sc", function(a) {
                return L($M, a)
            }],
            [".google.se", function(a) {
                return L(aN, a)
            }],
            [".google.com.sg", function(a) {
                return L(bN, a)
            }],
            [".google.sh",
                function(a) {
                    return L(cN, a)
                }
            ],
            [".google.si", function(a) {
                return L(dN, a)
            }],
            [".google.sk", function(a) {
                return L(eN, a)
            }],
            [".google.sn", function(a) {
                return L(fN, a)
            }],
            [".google.so", function(a) {
                return L(gN, a)
            }],
            [".google.sm", function(a) {
                return L(hN, a)
            }],
            [".google.sr", function(a) {
                return L(iN, a)
            }],
            [".google.st", function(a) {
                return L(jN, a)
            }],
            [".google.com.sv", function(a) {
                return L(kN, a)
            }],
            [".google.td", function(a) {
                return L(lN, a)
            }],
            [".google.tg", function(a) {
                return L(mN, a)
            }],
            [".google.co.th", function(a) {
                return L(nN,
                    a)
            }],
            [".google.com.tj", function(a) {
                return L(oN, a)
            }],
            [".google.tl", function(a) {
                return L(pN, a)
            }],
            [".google.tm", function(a) {
                return L(qN, a)
            }],
            [".google.tn", function(a) {
                return L(rN, a)
            }],
            [".google.to", function(a) {
                return L(sN, a)
            }],
            [".google.com.tr", function(a) {
                return L(tN, a)
            }],
            [".google.tt", function(a) {
                return L(uN, a)
            }],
            [".google.com.tw", function(a) {
                return L(vN, a)
            }],
            [".google.co.tz", function(a) {
                return L(wN, a)
            }],
            [".google.com.ua", function(a) {
                return L(xN, a)
            }],
            [".google.co.ug", function(a) {
                return L(yN, a)
            }],
            [".google.co.uk",
                function(a) {
                    return L(zN, a)
                }
            ],
            [".google.com.uy", function(a) {
                return L(AN, a)
            }],
            [".google.co.uz", function(a) {
                return L(BN, a)
            }],
            [".google.com.vc", function(a) {
                return L(CN, a)
            }],
            [".google.co.ve", function(a) {
                return L(DN, a)
            }],
            [".google.vg", function(a) {
                return L(EN, a)
            }],
            [".google.co.vi", function(a) {
                return L(FN, a)
            }],
            [".google.com.vn", function(a) {
                return L(GN, a)
            }],
            [".google.vu", function(a) {
                return L(HN, a)
            }],
            [".google.ws", function(a) {
                return L(IN, a)
            }],
            [".google.rs", function(a) {
                return L(JN, a)
            }],
            [".google.co.za", function(a) {
                return L(KN,
                    a)
            }],
            [".google.co.zm", function(a) {
                return L(LN, a)
            }],
            [".google.co.zw", function(a) {
                return L(MN, a)
            }],
            [".google.cat", function(a) {
                return L(NN, a)
            }]
        ].map(function(a) {
            var b = y(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));

    function PN(a, b, c) {
        var d = yi("LINK", a);
        try {
            if (d.rel = "preload", Ib("preload", "stylesheet")) {
                d.href = Xf(b).toString();
                var e = Mh('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else {
                if (b instanceof Qf) var f = Xf(b).toString();
                else {
                    if (b instanceof cg) var g = eg(b);
                    else {
                        if (b instanceof cg) var h = b;
                        else {
                            b = "object" == typeof b && b.ua ? b.ma() : String(b);
                            b: if (e = b, jg) {
                                try {
                                    var k = new URL(e)
                                } catch (p) {
                                    var l = "https:";
                                    break b
                                }
                                l = k.protocol
                            } else c: {
                                var m = document.createElement("a");
                                try {
                                    m.href = e
                                } catch (p) {
                                    l = void 0;
                                    break c
                                }
                                var n = m.protocol;l = ":" === n || "" === n ? "https:" : n
                            }
                            "javascript:" === l && (b = "about:invalid#zClosurez");
                            h = new cg(b, dg)
                        }
                        g = eg(h)
                    }
                    f = g
                }
                d.href = f
            }
        } catch (p) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (p) {}
    };
    var QN = B;

    function RN(a) {
        var b = new r.Map([
            ["domain", B.location.hostname]
        ]);
        SN[3] >= gb() && b.set("adsid", SN[1]);
        return sj(ON.get(a).js, b)
    }
    var SN, TN;

    function UN() {
        QN = B;
        SN = QN.googleToken = QN.googleToken || {};
        var a = gb();
        SN[1] && SN[3] > a && 0 < SN[2] || (SN[1] = "", SN[2] = -1, SN[3] = -1, SN[4] = "", SN[6] = "");
        TN = QN.googleIMState = QN.googleIMState || {};
        ON.has(TN[1]) || (TN[1] = ".google.com");
        Array.isArray(TN[5]) || (TN[5] = []);
        "boolean" !== typeof TN[6] && (TN[6] = !1);
        Array.isArray(TN[7]) || (TN[7] = []);
        "number" !== typeof TN[8] && (TN[8] = 0)
    }

    function VN(a) {
        UN();
        ON.has(a) && (TN[1] = a)
    }
    var WN = {
        dd: function() {
            return 0 < TN[8]
        },
        vg: function() {
            TN[8]++
        },
        wg: function() {
            0 < TN[8] && TN[8]--
        },
        xg: function() {
            TN[8] = 0
        },
        Wk: function() {
            return !1
        },
        ne: function() {
            return TN[5]
        },
        Zd: function(a) {
            try {
                a()
            } catch (b) {
                B.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Oe: function() {
            if (!WN.dd()) {
                var a = B.document,
                    b = function(e) {
                        e = RN(e);
                        a: {
                            try {
                                var f = Mh("script[nonce]");
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        PN(a, e.toString(), f);
                        f = yi("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return B.processGoogleToken({}, 2)
                        };
                        Yg(f, e);
                        try {
                            (a.head ||
                                a.body || a.documentElement).appendChild(f), WN.vg()
                        } catch (g) {}
                    },
                    c = TN[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                B.setTimeout(function() {
                    return B.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function XN(a) {
        UN();
        var b = QN.googleToken[5] || 0;
        a && (0 != b || SN[3] >= gb() ? WN.Zd(a) : (WN.ne().push(a), WN.Oe()));
        SN[3] >= gb() && SN[2] >= gb() || WN.Oe()
    }

    function YN(a) {
        B.processGoogleToken = B.processGoogleToken || function(b, c) {
            var d = b;
            d = void 0 === d ? {} : d;
            c = void 0 === c ? 0 : c;
            b = d.newToken || "";
            var e = "NT" == b,
                f = parseInt(d.freshLifetimeSecs || "", 10),
                g = parseInt(d.validLifetimeSecs || "", 10),
                h = d["1p_jar"] || "";
            d = d.pucrd || "";
            UN();
            1 == c ? WN.xg() : WN.wg();
            var k = QN.googleToken = QN.googleToken || {},
                l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
            e = e && !WN.dd() && (!(SN[3] >= gb()) || "NT" == SN[1]);
            var m = !(SN[3] >= gb()) && 0 != c;
            if (l || e || m) e = gb(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Xj(B, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, UN();
            if (l || !WN.dd()) {
                c = WN.ne();
                for (b = 0; b < c.length; b++) WN.Zd(c[b]);
                c.length = 0
            }
        };
        XN(a)
    };
    var ZN = new r.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        $N = new r.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function aO(a) {
        try {
            var b, c, d = null == (b = a.performance) ? void 0 : null == (c = b.getEntriesByType("navigation")) ? void 0 : c[0];
            if (null == d ? 0 : d.type) {
                var e;
                return null != (e = ZN.get(d.type)) ? e : null
            }
        } catch (k) {}
        var f, g, h;
        return null != (h = $N.get(null == (f = a.performance) ? void 0 : null == (g = f.navigation) ? void 0 : g.type)) ? h : null
    };

    function bO(a, b) {
        if (Rb()) {
            var c = a.document.documentElement.lang;
            cO(a) ? dO(b, aj(a), !0, "", c) : (new MutationObserver(function(d, e) {
                cO(a) && (dO(b, aj(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function cO(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    }

    function dO(a, b, c, d, e) {
        Zj({
            ptt: "" + a,
            pvsid: "" + b,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };
    var eO = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        fO = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function gO(a, b, c) {
        N.call(this);
        var d = this;
        this.l = a;
        this.j = [];
        b && hO() && this.j.push(eO);
        c && this.j.push(fO);
        if (document.hasTrustToken && !S(Is)) {
            var e = new r.Map;
            this.j.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.l ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof r.Map ? new r.Map([].concat(ma(e), ma(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof r.Map ||
                (window.goog_tt_promise_map = new r.Map)
        }
    }
    z(gO, N);

    function hO() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function iO() {
        var a = window;
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function jO(a, b, c) {
        a = a.goog_tt_state_map;
        var d, e = [];
        b && (d = null == a ? void 0 : a.get(eO.issuerOrigin)) && e.push(d);
        c && (d = null == a ? void 0 : a.get(fO.issuerOrigin)) && e.push(d);
        return e
    }

    function kO(a) {
        return S(Ls) ? !0 : a.some(function(b) {
            return b.hasRedemptionRecord
        })
    }

    function lO(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function mO(a, b) {
        a = S(Ls) ? a.filter(function(c) {
            return 12 !== c.state
        }).map(function(c) {
            return c.issuerOrigin
        }) : a.filter(function(c) {
            return c.hasRedemptionRecord
        }).map(function(c) {
            return c.issuerOrigin
        });
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: S(Ls) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !S(Ls) && b && 0 < t(Object, "keys").call(Object, b).length && (a.additionalSigningData = Jc(JSON.stringify(b)));
        return a
    }

    function nO(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function oO() {
        var a = eO.issuerOrigin + eO.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: eO.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        nO(eO.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            nO(eO.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? nO(eO.issuerOrigin, 6, !0) : nO(eO.issuerOrigin, 5)
        })
    }

    function pO() {
        var a = eO.issuerOrigin + eO.issuancePath;
        nO(eO.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            nO(eO.issuerOrigin, 10);
            return oO()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return nO(eO.issuerOrigin, 10), oO();
            nO(eO.issuerOrigin, 9)
        })
    }

    function qO() {
        nO(eO.issuerOrigin, 13);
        return document.hasTrustToken(eO.issuerOrigin).then(function(a) {
            return a ? oO() : pO()
        })
    }

    function rO() {
        nO(fO.issuerOrigin, 13);
        if (r.Promise) {
            var a = document.hasTrustToken(fO.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return r.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = fO.issuerOrigin + fO.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            nO(fO.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    nO(fO.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f &&
                        "NoModificationAllowedError" === f.name) nO(fO.issuerOrigin, 18, !0);
                    else {
                        if (e) return r.Promise.reject({
                            state: 17,
                            error: f
                        });
                        nO(fO.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(fO.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return r.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = fO.issuerOrigin + fO.getStatePath;
                nO(fO.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [fO.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status +
                        ": Network response was not ok!");
                    nO(fO.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return r.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = aj(window);
            return a.then(function(e) {
                var f = fO.issuerOrigin + fO.issuancePath;
                return e && e.srqt && e.cs ? (nO(fO.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    nO(fO.issuerOrigin,
                        25);
                    return e
                }).catch(function(g) {
                    return r.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return nO(fO.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    nO(fO.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return r.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                nO(fO.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        nO(fO.issuerOrigin, e.state);
                        var f = V(Ks);
                        Math.random() <= f && Zj({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function sO(a) {
        if (document.hasTrustToken && !S(Is) && a.l) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof r.Map) {
                var c = [];
                if (a.j.some(function(e) {
                        return e.issuerOrigin === eO.issuerOrigin
                    })) {
                    var d = b.get(eO.issuerOrigin);
                    d || (d = qO(), b.set(eO.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(function(e) {
                    return e.issuerOrigin === fO.issuerOrigin
                }) && (a = b.get(fO.issuerOrigin), a || (a = rO(), b.set(fO.issuerOrigin, a)), c.push(a));
                if (0 < c.length && r.Promise && r.Promise.all) return r.Promise.all(c)
            }
        }
    };

    function tO(a) {
        var b;
        if (a = null == (b = a.navigator) ? void 0 : b.userActivation) {
            b = 0;
            if (null == a ? 0 : a.hasBeenActive) b |= 1;
            if (null == a ? 0 : a.isActive) b |= 2;
            return b
        }
    };
    var uO = /[+, ]/;

    function vO(a, b) {
        var c = a.F,
            d = a.pubWin,
            e = {},
            f = d.document;
        var g = fj(d);
        var h = dt(d, c.google_ad_width, c.google_ad_height);
        var k = ft(g).hd;
        var l = d.top == d ? 0 : ti(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = gt(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (v) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && ti(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch (v) {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        if (g == g.top) d = g.document.referrer;
        else {
            var p;
            d = (p = void 0 === p ? nj() : p) && p.referrer || ""
        }
        e.google_referrer_url =
            d;
        et(e, c);
        e = c.google_page_location || c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in aK), 2 <= e.length && (d = d || e[e.length - 2] in aK), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = wO(a, b);
        d = a.F;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" ===
        d.google_ad_client && xO.test(f) && (g = "/pagead/lopri?");
        a = Hj(b, "https://" + e + g + (Ee(a.ha, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function yO(a) {
        var b = {};
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + Ij((b.adk = a.google_ad_unit_key, b.client = a.google_ad_client, b.fa = a.google_reactive_ad_format, b))
    }

    function zO(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch (e) {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                var b = ei(a);
                if (b) {
                    var c = b.frameElement;
                    if (c && ti(b.parent)) {
                        var d = c;
                        break a
                    }
                }
            } catch (e) {}
            d = null
        }
        else d = null;
        return d
    }

    function AO(a, b) {
        b.eid = CH(a.pubWin);
        var c = a.F.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function BO(a, b) {
        a = (a = wi(a.pubWin)) && a.document ? $s(a.document, a) : new Qh(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function CO(a) {
        try {
            var b = B.top.location.hash;
            if (b) {
                var c = b.match(a);
                return c && c[1] || ""
            }
        } catch (d) {}
        return ""
    }

    function DO(a, b, c) {
        var d = a.F,
            e = a.pubWin,
            f = a.J,
            g = fj(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = nj(e)) && Sa(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = ft(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.hd || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.Eb && (b.etu = a.Eb);
        !S(lr) && 0 <= a.A && (b.eae = a.A);
        (c = lI(d, f, f ? PF(c, f) : null)) && (b.fc = c);
        if (!Rj(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new Zh(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    var k = h.contentWindow.document;
                    k.open();
                    k.write(Cg(Ng));
                    k.close();
                    g += k.documentMode
                } catch (xa) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        try {
            var l = e.screenX;
            var m = e.screenY
        } catch (xa) {}
        try {
            var n = e.outerWidth;
            var p =
                e.outerHeight
        } catch (xa) {}
        try {
            var v = e.innerWidth;
            var u = e.innerHeight
        } catch (xa) {}
        try {
            var A = e.screenLeft;
            var J = e.screenTop
        } catch (xa) {}
        try {
            v = e.innerWidth, u = e.innerHeight
        } catch (xa) {}
        try {
            var Y = e.screen.availWidth;
            var aa = e.screen.availTop
        } catch (xa) {}
        b.brdim = [A, J, l, m, Y, aa, n, p, v, u].join();
        k = 0;
        void 0 === B.postMessage && (k |= 1);
        0 < k && (b.osd = k);
        b.vis = kJ(e.document);
        e = hI(d) ? TJ : BJ(new wJ(e, a.Y, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = tJ(e);
        if (!hI(d) && (e = Sj(d), null !=
                e)) {
            k = 0;
            a: {
                try {
                    var P = d.google_async_iframe_id,
                        Q = window.document;
                    if (P) var U = Q.getElementById(P + (S(wr) ? "_host" : ""));
                    else {
                        var ca = Q.getElementsByTagName("script"),
                            Z = ca[ca.length - 1];
                        U = Z && Z.parentNode || null
                    }
                    if (P = U) {
                        U = [];
                        Q = 0;
                        for (var fa = Date.now(); 100 >= ++Q && 50 > Date.now() - fa && (P = zO(P));) 1 === P.nodeType && U.push(P);
                        b: {
                            for (fa = 0; fa < U.length; fa++) {
                                c: {
                                    var M = U[fa];
                                    try {
                                        if (M.parentNode && 0 < M.offsetWidth && 0 < M.offsetHeight && M.style && "none" !== M.style.display && "hidden" !== M.style.visibility && (!M.style.opacity || 0 !== Number(M.style.opacity))) {
                                            var ya =
                                                M.getBoundingClientRect();
                                            var Va = 0 < ya.right && 0 < ya.bottom;
                                            break c
                                        }
                                    } catch (xa) {}
                                    Va = !1
                                }
                                if (!Va) {
                                    var Cb = !1;
                                    break b
                                }
                            }
                            Cb = !0
                        }
                        if (Cb) {
                            b: {
                                var bb = Date.now();Cb = /^html|body$/i;Va = /^fixed/i;
                                for (M = 0; M < U.length && 50 > Date.now() - bb; M++) {
                                    var nb = U[M];
                                    if (!Cb.test(nb.tagName) && Va.test(nb.style.position || xj(nb, "position"))) {
                                        var T = nb;
                                        break b
                                    }
                                }
                                T = null
                            }
                            break a
                        }
                    }
                } catch (xa) {}
                T = null
            }
            T && T.offsetWidth * T.offsetHeight <= 4 * e.width * e.height && (k = 1);
            b.pfx = k
        }
        a: {
            if (.05 > Math.random() && f) try {
                var ua = f.document.getElementsByTagName("head")[0];
                var ob = ua ? jK(ua) : 0;
                break a
            } catch (xa) {}
            ob = 0
        }
        f = ob;
        0 !== f && (b.cms = f);
        d.google_lrv !== G(a.ha, 2) && (b.alvm = d.google_lrv || "none")
    }

    function EO(a, b) {
        var c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : ui(function() {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function FO(a, b) {
        var c = TE(b, 8, {});
        b = TE(b, 9, {});
        var d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + ("," + e) : e : a && (b[d] = b[d] ? b[d] + ("," + a) : a)
    }

    function GO(a, b, c) {
        var d = a.F,
            e = a.F;
        b.dt = Sm;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        var f;
        var g = void 0 === g ? B : g;
        a: {
            try {
                var h = g.performance;
                if (h && h.timing && h.now) {
                    var k = h.timing.navigationStart + Math.round(h.now()) - h.timing.domLoading;
                    break a
                }
            } catch (Zd) {}
            k = null
        }
        var l = k;
        (f = l ? XI(l, g.Date.now() - Sm, 1E6) : null) && (b.bdt = f);
        b.idt = XI(a.G, Sm);
        var m = a.F;
        b.shv = G(a.ha, 2);
        a.jb && (b.mjsv = a.jb);
        "sa" == m.google_loader_used ? b.ptt = 5 : "aa" == m.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(m.google_loader_used) &&
            (b.saldr = m.google_loader_used);
        var n = nj(a.pubWin);
        if (n) {
            b.is_amp = 1;
            var p = n;
            p = void 0 === p ? nj() : p;
            b.amp_v = p && p.mode ? +p.mode.version || null : null;
            var v = n;
            if ((v = void 0 === v ? nj() : v) && v.container) {
                for (var u = v.container.split(","), A = [], J = 0; J < u.length; J++) A.push(mj[u[J]] || "x");
                var Y = A.join()
            } else Y = null;
            var aa = Y;
            aa && (b.act = aa)
        }
        var P = a.pubWin;
        P == P.top && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            var Q = a.pubWin._gfp_a_;
            if ("boolean" !== typeof Q) throw Error("Illegal value of _gfp_a_: " + Q);
            if (Q) {
                var U = new EH(a.pubWin),
                    ca =
                    FH(U, "__gads", c);
                ca && (b.cookie = ca);
                var Z = FH(U, "__gpi", c);
                Z && !t(Z, "includes").call(Z, "&") && (b.gpic = Z);
                "1" === FH(U, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1")
            }
        }
        var fa = PE(),
            M = TE(fa, 8, {}),
            ya = d.google_ad_section;
        M[ya] && (b.prev_fmts = M[ya]);
        var Va = TE(fa, 9, {});
        Va[ya] && (b.prev_slotnames = Va[ya].toLowerCase());
        FO(d, fa);
        var Cb = TE(fa, 15, 0);
        0 < Cb && (b.nras = String(Cb));
        var bb = nj(window);
        if (bb) {
            if (bb) {
                var nb = bb.pageViewId,
                    T = bb.clientId;
                "string" === typeof T && (nb += T.replace(/\D/g, "").substr(0, 6));
                var ua = nb
            } else ua = null;
            var ob = +ua
        } else {
            var xa = fj(window),
                Nc = xa.google_global_correlator;
            Nc || (xa.google_global_correlator = Nc = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            ob = Nc
        }
        b.correlator = TE(fa, 7, ob);
        S(Gr) && (b.rume = 1);
        if (d.google_ad_channel) {
            for (var kd = TE(fa, 10, {}), ld = "", Vb = d.google_ad_channel.split(uO), pb = 0; pb < Vb.length; pb++) {
                var Oc = Vb[pb];
                kd[Oc] ? ld += Oc + "+" : kd[Oc] = !0
            }
            b.pv_ch = ld
        }
        if (d.google_ad_host_channel) {
            for (var Db = TE(fa, 11, []), Qe = d.google_ad_host_channel.split("|"), cb = -1, md = [], db = 0; db < Qe.length; db++) {
                var nd = Qe[db].split(uO);
                Db[db] || (Db[db] = {});
                for (var pc = "", Pc = 0; Pc < nd.length; Pc++) {
                    var eb = nd[Pc];
                    "" !== eb && (Db[db][eb] ? pc += "+" + eb : Db[db][eb] = !0)
                }
                pc = pc.slice(1);
                md[db] = pc;
                "" !== pc && (cb = db)
            }
            var od = "";
            if (-1 < cb) {
                for (var pd = 0; pd < cb; pd++) od += md[pd] + "|";
                od += md[cb]
            }
            b.pv_h_ch = od
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        var qd = d.google_ad_client;
        try {
            var $d = fj(window),
                qc = $d.google_prev_clients;
            qc || (qc = $d.google_prev_clients = {});
            if (qd in qc) var rd = 1;
            else qc[qd] = !0, rd = 2
        } catch (Zd) {
            rd = 0
        }
        b.pv = rd;
        if (a.J && S(tr)) {
            var ae = a.J;
            var be = Rb() && cO(ae) ? ae.document.documentElement.lang : void 0;
            be && (b.tl = be)
        }
        var Eb = a.pubWin.document,
            Qc = a.F,
            Re = a.pubWin;
        var Se = Eb.domain,
            sd = (je(c, 5) && QF(Re) ? Re.document.cookie : null) || "",
            Wb = a.pubWin.screen,
            Rc = Eb.referrer,
            Bh = Kj();
        if (nj()) var td = window.gaGlobal || {};
        else {
            var ce = Math.round((new Date).getTime() / 1E3),
                ud = Qc.google_analytics_domain_name,
                vd = "undefined" == typeof ud ? mK("auto", Se) : mK(ud, Se),
                Te = -1 < sd.indexOf("__utma=" + vd + "."),
                Rf = -1 < sd.indexOf("__utmb=" + vd),
                fb;
            if (!(fb = (qj() || window).gaGlobal)) {
                var Ch = {};
                fb = (qj() || window).gaGlobal = Ch
            }
            var na = fb,
                Ue = !1;
            if (Te) {
                var wd = sd.split("__utma=" + vd + ".")[1].split(";")[0].split(".");
                Rf ? na.sid = wd[3] : na.sid || (na.sid = ce + "");
                na.vid = wd[0] + "." + wd[1];
                na.from_cookie = !0
            } else {
                na.sid || (na.sid = ce + "");
                if (!na.vid) {
                    Ue = !0;
                    var Sf = Math.round(2147483647 * Math.random()),
                        Ve = Bh,
                        xd, yd = kK.appName,
                        We = kK.version,
                        Dh = kK.language ? kK.language : kK.browserLanguage,
                        Tf = kK.platform,
                        de = kK.userAgent;
                    try {
                        var Sc = kK.javaEnabled()
                    } catch (Zd) {
                        Sc = !1
                    }
                    var Wa = [yd, We, Dh, Tf, de, Sc ? 1 : 0].join("");
                    if (Wb) Wa += Wb.width +
                        "x" + Wb.height + Wb.colorDepth;
                    else if (B.java && B.java.awt) {
                        var Xe = B.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                        Wa += Xe.screen.width + "x" + Xe.screen.height
                    }
                    Wa = Wa + sd + (Rc || "");
                    for (xd = Wa.length; 0 < Ve;) Wa += Ve-- ^ xd++;
                    na.vid = (Sf ^ lK(Wa) & 2147483647) + "." + ce
                }
                na.from_cookie || (na.from_cookie = !1)
            }
            if (!na.cid) {
                b: {
                    var qb = ud,
                        ee = 999;qb && (qb = 0 == qb.indexOf(".") ? qb.substr(1) : qb, ee = qb.split(".").length);
                    for (var Tc, Ye = 999, zd = sd.split(";"), rb = 0; rb < zd.length; rb++) {
                        var rc = nK.exec(zd[rb]) || oK.exec(zd[rb]) || pK.exec(zd[rb]);
                        if (rc) {
                            var Ad = rc[1] || 0;
                            if (Ad == ee) {
                                var Bd = rc[2];
                                break b
                            }
                            Ad < Ye && (Ye = Ad, Tc = rc[2])
                        }
                    }
                    Bd = Tc
                }
                var Fb = Bd;Ue && Fb && -1 != Fb.search(/^\d+\.\d+$/) ? (na.vid = Fb, na.from_cookie = !0) : Fb != na.vid && (na.cid = Fb)
            }
            na.dh = vd;
            na.hid || (na.hid = Math.round(2147483647 * Math.random()));
            td = na
        }
        var Gb = td;
        b.ga_vid = Gb.vid;
        b.ga_sid = Gb.sid;
        b.ga_hid = Gb.hid;
        b.ga_fc = Gb.from_cookie;
        b.ga_cid = Gb.cid;
        b.ga_wpids = Qc.google_analytics_uacct;
        EO(a.pubWin, b);
        var sb = d.google_ad_layout;
        sb && 0 <= EI[sb] && (b.rplot = EI[sb])
    }

    function HO(a, b) {
        a = a.l;
        if ((null == a ? 0 : je(a, 6)) || YE()) b.npa = 1;
        if (a) {
            null != D(a, 3, !1) && (b.gdpr = je(a, 3) ? "1" : "0");
            var c = D(a, 1);
            c && (b.us_privacy = c);
            (c = D(a, 2)) && (b.gdpr_consent = c);
            (c = D(a, 4)) && (b.addtl_consent = c);
            (a = D(a, 7)) && (b.tcfe = a)
        }
    }

    function IO(a, b) {
        var c = a.F;
        HO(a, b);
        Bi(aF, function(d, e) {
            b[d] = c[e]
        });
        hI(c) && (b.fa = uI(c));
        b.pi || null == c.google_ad_slot || (a = ru(c), null != a.j && (a = Zo(a.j.value), b.pi = a))
    }

    function JO(a, b) {
        var c = pj() || Ys(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = Ys(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function KO(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Ys(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Di(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function LO(a, b) {
        (a = WE()[a.F.google_ad_client]) && (b.psts = a.join())
    }

    function MO(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function NO(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Jc(a))
    }

    function OO(a, b) {
        var c = S(iO() ? Hs : Gs),
            d = S(Js);
        (a = jO(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = Jc(JSON.stringify(a)))
    }

    function PO(a, b) {
        try {
            var c = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (c) {
                var d = JSON.parse(c("os-mode")),
                    e = parseInt(d["os-mode"], 10);
                0 <= e && (b.wsm = e + 1)
            }
        } catch (f) {}
    }

    function QO(a, b) {
        0 <= a.F.google_ad_public_floor && (b.pubf = a.F.google_ad_public_floor);
        0 <= a.F.google_ad_private_floor && (b.pvtf = a.F.google_ad_private_floor)
    }

    function RO(a, b) {
        var c = Number(a.F.google_traffic_source);
        c && (ba = t(Object, "values").call(Object, kb), t(ba, "includes")).call(ba, c) && (b.trt = a.F.google_traffic_source)
    }

    function SO(a, b) {
        S(Os) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function TO(a, b) {
        S(Lr) && (S(Kr) || wH("attribution-reporting", a.pubWin.document) && (b.nt = 1))
    }

    function wO(a, b) {
        var c = {};
        IO(a, c);
        UN();
        c.adsid = SN[1];
        UN();
        c.pucrd = SN[6];
        NO(a, c);
        OO(a, c);
        GO(a, c, b);
        Nj(c);
        c.u_sd = Zs(a.pubWin);
        var d;
        c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
        vm(889, function() {
            if (null == a.J) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = hH(a.J, a.Y);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                at(a.Y) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        JO(a, c);
        KO(a, c);
        BO(a, c);
        AO(a, c);
        a.D && (c.oid = a.D);
        LO(a, c);
        c.pvsid = aj(a.pubWin,
            tm);
        MO(a, c);
        PO(a, c);
        c.uas = tO(a.pubWin);
        (d = aO(a.pubWin)) && (c.nvt = d);
        a.C && (c.scar = a.C);
        a.v && (c.topics = a.v instanceof Uint8Array ? Hc(a.v, 3) : a.v, !S(Fs) || a.v instanceof Uint8Array || (c.tps = a.v));
        DO(a, c, b);
        c.fu = a.j;
        c.bc = qK();
        UN();
        c.jar = SN[4];
        Ee(a.ha, 9) && (DH(c), c.creatives = CO(/\b(?:creatives)=([\d,]+)/), c.adgroups = CO(/\b(?:adgroups)=([\d,]+)/), c.adgroups && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0));
        Mm() && (c.atl = !0);
        QO(a, c);
        RO(a, c);
        SO(a, c);
        TO(a, c);
        null == Qs(Cr) || !1 !== a.F.google_video_play_muted && !0 !== S(Dr) || 10 !== a.F.google_reactive_ad_format && 11 !== a.F.google_reactive_ad_format || (c.sdkv = Qs(Cr));
        return c
    }
    var xO = /YtLoPri/;

    function UO(a) {
        H.call(this, a)
    }
    z(UO, H);
    var VO = jf(UO);

    function WO(a) {
        this.j = a
    }
    WO.prototype.Qa = function() {
        return this.j.now()
    };
    var XO = [255, 255, 255];

    function YO(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error("Invalid color: " + a);
    }

    function ZO(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = YO(b.backgroundColor);
        var c = $O(b);
        if (c) return c;
        a = (a = a.parentElement) ? ZO(a) : XO;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function $O(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };

    function aP(a, b, c, d) {
        this.Dd = b;
        this.Qc = c;
        this.nb = d;
        this.l = 0;
        this.j = new bP(a)
    }

    function bP(a) {
        this.v = a;
        this.j = new r.Map;
        this.l = 0
    }
    ia.Object.defineProperties(bP.prototype, {
        m: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        }
    });

    function cP(a) {
        K(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function dP(a, b, c, d, e) {
        var f = new Ul;
        d = De(f, 4, d);
        a = E(d, 1, a);
        b = E(a, 2, b);
        c = E(b, 3, c);
        e = e.v;
        b = eP(e, 4);
        c = ue(b, 8, cm, c);
        return fP(e, c)
    };
    var gP = [{
        Qb: "1907259590",
        uc: 480,
        Za: 220
    }, {
        Qb: "2837189651",
        uc: 400,
        Za: 180
    }, {
        Qb: "9211025045",
        uc: 360,
        Za: 160
    }, {
        Qb: "6584860439",
        uc: -Infinity,
        Za: 150
    }];

    function hP(a) {
        return t(gP, "find").call(gP, function(b) {
            return b.uc <= a
        })
    };
    var iP = new function() {
            this.j = []
        },
        jP = !1;

    function kP(a, b, c) {
        this.win = a;
        this.j = b;
        this.m = c;
        this.l = !1
    }

    function lP(a) {
        return mP(a.j, 1065, a.win, function() {
            if (!a.l) {
                var b = new $l;
                b = Be(b, 1, a.m);
                var c = new Zl;
                b = ue(b, 2, am, c);
                nP(a.j.v, b)
            }
        }, 1E4)
    }
    kP.prototype.cancel = function(a) {
        this.win.clearTimeout(a)
    };

    function oP(a, b, c, d, e) {
        var f = hP(a.document.body.clientWidth),
            g = b.j ? pP(a, b, d, f, e) : qP(a, b, d, f, e);
        Pn(g.isVisible(), !1, function() {
            jP = !1;
            for (var l = y(iP.j), m = l.next(); !m.done; m = l.next()) m = m.value, m();
            iP.j.length = 0
        });
        g.show({
            ec: !0
        });
        jP = !0;
        var h = new kP(a, b, c),
            k = lP(h);
        iP.j.push(function() {
            var l = b.v;
            var m = new $l;
            m = Be(m, 1, c);
            var n = new Yl;
            m = ue(m, 3, am, n);
            nP(l, m);
            h.l = !0
        });
        rP.push(function() {
            g.isVisible().O && g.collapse();
            h.cancel(k)
        })
    }

    function pP(a, b, c, d, e) {
        b = sP(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center", e);
        return gz(a, b, {
            wd: .75,
            cd: .95,
            zIndex: 100001,
            Oa: !0,
            Wc: "adpub-drawer-root"
        })
    }

    function qP(a, b, c, d, e) {
        a: {
            var f = a.document.body.clientWidth;
            var g = .9 * f;
            for (f = 768 >= f ? 3 : 4; 1 <= f; f--) {
                var h = d.Za * f + 42;
                if (h <= g) {
                    g = h;
                    break a
                }
            }
        }
        c = sP(a, b, c, d, g, "600px", "24px", "24px", "start", e);
        return ay(a, c, {
            bd: g + "px",
            Yc: tP(b),
            Sc: G(b.l, 14),
            zIndex: 100001,
            Oa: !0,
            hc: !1,
            Wc: "adpub-drawer-root"
        })
    }

    function sP(a, b, c, d, e, f, g, h, k, l) {
        var m = b.l,
            n = G(m, 10),
            p = n.indexOf("TERM"),
            v = b.C;
        var u = S(Cs) ? {
            bf: v.replace("ca", "partner"),
            Pd: "ads"
        } : {
            bf: "pub-adfiliates-rockskipper",
            Pd: "ads"
        };
        v = "";
        S(vs) && (v = b.G.get(c) || "");
        var A = V(as);
        e = Math.max(Math.floor((e - Math.floor(e / d.Za) * d.Za) / 2), 5);
        var J = b.I ? "on" : "",
            Y = G(m, 3),
            aa = S(Bs) ? "" + b.D.tb : "" + V(is),
            P = G(m, 7),
            Q = G(m, 6),
            U = b.C,
            ca = n.substring(0, p);
        n = n.substring(p + 4);
        p = d.Qb;
        var Z = u.bf;
        u = u.Pd;
        var fa = !!Ee(m, 13),
            M = v,
            ya = S(us),
            Va = S(ys);
        M = void 0 === M ? "" : M;
        f = bx('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            fx(W(g)) + " " + fx(W(h)) + "; text-align: " + fx(W(k)) + ';">' + (l ? '<div style="max-width: ' + fx(W(f)) + '">' + ax(Y) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + ax(Q) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + fx(W(g)) + "; text-align: " + fx(W(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">' +
            (ya ? "search" : "shoppingmode") + '</span><span style="color:#80868b"> ' + ax(ca) + "</span>" + ax(c) + '<span style="color:#80868b">' + ax(n) + '</span></div></div><div id="anno-csa" style="margin:5px ' + fx(W(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');" + (Va ? "" : "const pageOptions = {'pubId': " + jx(kx(Z)) + ", 'styleId': " + jx(kx(p)) + ", 'disableCarousel': true, 'query': " + jx(kx(c)) + ", 'hl': " + jx(kx(P)) + ", 'personalizedAds': 'false', 'fexp': " +
                jx(kx(aa)) + ", 'adfiliateWp': " + jx(kx(U)) + "," + (M ? "'afdToken': " + jx(kx(M)) + "," : "") + "'adtest': " + jx(kx(J)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + jx(kx(A)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + jx(kx(u)) + ", pageOptions, adBlock);") + "\x3c/script>" + (fa ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" :
                '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
        m = Fg("body", {
            dir: tP(b) ? "rtl" : "ltr",
            lang: G(m, 7),
            style: og({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: "hidden"
            })
        }, Xw(f));
        f = a.document.createElement("IFRAME");
        K(f, {
            border: "0",
            width: "100%"
        });
        uP(a, b, f, c, d, v);
        f.srcdoc = Cg(m);
        return f
    }

    function uP(a, b, c, d, e, f) {
        function g(l) {
            var m = new ResizeObserver(function() {
                c.height = l.parentElement.offsetHeight + "px"
            });
            m.observe(l);
            var n = vP(b, a, function() {
                var p, v, u, A = null == (p = c.contentDocument) ? void 0 : null == (v = p.body) ? void 0 : null == (u = v.parentElement) ? void 0 : u.offsetHeight;
                A && (c.height = A + "px")
            });
            S(ys) && mP(b, 999, a, function() {
                var p = b.l,
                    v = c.contentWindow,
                    u, A = (null == c ? void 0 : c.contentDocument) || (null == (u = c.contentWindow) ? void 0 : u.document);
                if (v) {
                    if (void 0 === v._googCsa) throw Error("No _googCsa");
                    if (!A) throw Error("No contentDocument");
                } else throw Error("No googCsa window");
                p = {
                    pubId: "pub-adfiliates-rockskipper",
                    styleId: e.Qb,
                    disableCarousel: !0,
                    query: d,
                    hl: G(p, 7),
                    personalizedAds: "false",
                    fexp: S(Bs) ? "" + b.D.tb : "" + V(is),
                    adfiliateWp: b.C,
                    adtest: b.I ? "on" : ""
                };
                f && (p.afdToken = f);
                A = {
                    container: "anno-csa",
                    linkTarget: "_blank",
                    number: V(as),
                    width: A.body.offsetWidth - 30
                };
                v._googCsa("ads", p, A)
            }, 100);
            rP.push(function() {
                m.disconnect();
                a.clearInterval(n)
            })
        }

        function h() {
            if (!k) {
                var l, m, n, p = (null == (l = c.contentDocument) ? void 0 : l.body) || (null == (m = c.contentWindow) ?
                    void 0 : null == (n = m.document) ? void 0 : n.body);
                p && (k = !0, g(p))
            }
            return k
        }
        var k = !1;
        c.onload = function() {
            return void h()
        };
        b.Aa(1066, eF(a, function() {
            return h()
        }, 100))
    }
    var rP = [];

    function wP(a, b, c) {
        return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length))
    }

    function xP(a) {
        a = YO(a);
        var b = new Il;
        b = ne(b, 1, a[0], 0);
        b = ne(b, 2, a[1], 0);
        b = ne(b, 3, a[2], 0);
        return ne(b, 4, Qd(a[3]), 0)
    };

    function yP(a, b) {
        var c = this;
        this.m = a;
        this.j = !1;
        this.v = b;
        this.l = this.v.rb(264, function(d) {
            c.j && (zP || (d = Date.now()), c.m(d), zP ? AP.call(B, c.l) : B.setTimeout(c.l, 17))
        })
    }
    yP.prototype.start = function() {
        this.j || (this.j = !0, zP ? AP.call(B, this.l) : this.l(0))
    };
    var AP = B.requestAnimationFrame || B.webkitRequestAnimationFrame,
        zP = !!AP && !/'iPhone'/.test(B.navigator.userAgent);

    function BP(a, b, c, d) {
        this.j = a;
        this.B = b;
        this.G = c;
        this.progress = 0;
        this.l = null;
        this.D = !1;
        this.m = [];
        this.v = null;
        this.A = new yP($a(this.ef, this), d)
    }
    q = BP.prototype;
    q.ef = function(a) {
        if (this.D) this.A.j = !1;
        else {
            null === this.l && (this.l = a);
            this.progress = (a - this.l) / this.G;
            1 <= this.progress && (this.progress = 1);
            a = this.v ? this.v(this.progress) : this.progress;
            this.m = [];
            for (var b = 0; b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
            this.Od();
            1 == this.progress && (this.A.j = !1, this.Ge())
        }
    };
    q.Ge = function() {};
    q.Od = function() {};
    q.play = function() {
        this.D = !1;
        this.A.start()
    };
    q.reset = function(a, b, c) {
        this.l = null;
        this.j = a;
        this.B = b;
        this.G = c;
        this.progress = 0
    };

    function CP(a) {
        return a * a * a
    }

    function DP(a) {
        a = 1 - a;
        return 1 - a * a * a
    };

    function EP(a, b, c, d, e) {
        this.C = a;
        this.D = b;
        this.m = c;
        this.B = e
    }
    ia.Object.defineProperties(EP.prototype, {
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.C
            }
        },
        A: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D
            }
        },
        v: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            }
        }
    });

    function FP(a, b) {
        a = GP(a.document, S(us) ? "search" : "shoppingmode");
        K(a, b);
        a.className = "google-material-icons";
        return a
    }

    function HP(a, b) {
        a = GP(a, "close");
        K(a, {
            color: "#5F6368",
            display: "block",
            "font-size": "15px",
            left: b ? "" : "20px",
            right: b ? "20px" : "",
            "pointer-events": "initial",
            position: "absolute",
            top: "16px",
            transform: "none"
        });
        return a
    }

    function IP(a, b, c) {
        a = GP(a, "expand_more");
        K(a, {
            color: "#5F6368",
            cursor: "pointer",
            display: "block",
            "font-size": "15px",
            left: c ? "" : "0",
            right: c ? "0" : "",
            padding: c ? "0 0 0 16px" : "0 16px 0 0",
            "pointer-events": "initial",
            position: "absolute",
            top: "20px",
            transform: b
        });
        return a
    }

    function GP(a, b) {
        var c = a.createElement("SPAN");
        c.appendChild(a.createTextNode(b));
        cP(c);
        K(c, {
            "font-family": '"Google Material Icons"',
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        });
        c.className = "google-material-icons";
        return c
    };

    function JP(a, b, c) {
        return rA({
            J: a,
            kd: 3E3,
            od: a.innerWidth > en ? 650 : 0,
            ba: c,
            ae: b
        })
    }

    function KP(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function LP(a, b) {
        var c = document.createElement("SPAN");
        c.id = "gda";
        if (S(Ds)) c.appendChild(HP(a.document, b.j === tP(b)));
        else {
            var d = MP(a, b);
            c.appendChild(d)
        }
        NP(b, 1064, c, function(e) {
            var f = tP(b),
                g = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
            OP(b, KP(a), 0, g, CP).play();
            var h = PP(b);
            h.appendChild(FP(a, {
                "font-size": "18px",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            NP(b, 1064, h, function(k) {
                var l = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
                OP(b, KP(a),
                    l, 0, DP).play();
                a.document.body.removeChild(h);
                k.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function MP(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = tP(b);
        b = b.j ? d : !d;
        K(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function QP(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = tP(b);
        d = b.j ? d : !d;
        K(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.j ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : tP(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function PP(a) {
        var b = document.createElement("div");
        b.id = "gca";
        var c = tP(a);
        a = a.j ? c : !c;
        K(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": "1000"
        });
        return b
    }

    function RP(a) {
        (new MutationObserver(function(b) {
            b.forEach(function(c) {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && K(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function SP(a) {
        try {
            var b, c;
            return null !== (null == (b = a.location) ? void 0 : null == (c = b.href) ? void 0 : c.match(/goog_fsa=1/))
        } catch (d) {
            return !1
        }
    }

    function TP() {
        this.j = "";
        this.m = null;
        this.v = "";
        this.l = null
    }

    function UP(a, b, c, d, e) {
        if (a.j !== d || null !== a.m || a.v !== e) {
            if (null !== a.l) {
                var f = a.l,
                    g = c.v,
                    h = new vl;
                f = Be(h, 1, f);
                h = eP(g, 8);
                f = ue(h, 7, cm, f);
                fP(g, f)
            }
            a.j = d;
            a.m = null;
            a.v = e;
            (d = KP(b)) ? a.l = VP(a, d, c): (null != wA(b, null) ? b = null : (d = b.getComputedStyle(b.document.body).paddingBottom.match(/\d+/), K(b.document.body, {
                "padding-bottom": (d && d.length ? Number(d[0]) + 45 : 45) + "px"
            }), RP(b), d = document.createElement("div"), d.id = "google-anno-sa", d.dir = tP(c) ? "rtl" : "ltr", K(d, {
                background: "white",
                "border-style": "solid",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                bottom: "0",
                height: "45px",
                position: "fixed",
                "text-align": "center",
                width: "100%",
                border: "0px",
                left: "0px",
                "box-shadow": "0px 0px 10px 0px #00000026",
                "z-index": "1000"
            }), d.appendChild(LP(b, c)), d.appendChild(WP(a, b, c)), d.appendChild(XP(a, b, c)), c = VP(a, d, c), b.document.body.appendChild(d), b = c), a.l = b)
        }
    }

    function VP(a, b, c) {
        var d = G(c.l, 11);
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = d.replace("TERM", a.j));
        c = c.v;
        d = new wl;
        d = E(d, 1, a.m);
        a = De(d, 4, a.j);
        d = eP(c, 7);
        a = ue(d, 6, cm, a);
        return fP(c, a)
    }

    function WP(a, b, c) {
        var d = document.createElement("SPAN");
        cP(d);
        K(d, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var e = tP(c);
        c.j || K(d, {
            "justify-content": ""
        });
        d.appendChild(FP(b, {
            "font-size": "18px",
            width: "15px",
            height: "15px",
            "margin-left": e ? "8px" : "",
            "margin-right": e ? "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        e = document.createElement("SPAN");
        var f;
        null == (f = e.classList) ||
            f.add("google-anno-sa-qtx", "google-anno-skip");
        K(e, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        NP(c, 999, d, function(g) {
            return YP(a, b, c, g)
        });
        d.appendChild(e);
        return d
    }

    function XP(a, b, c) {
        var d = document.createElement("DIV");
        d.id = "google-anno-ea";
        c.j || K(d, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        var e = S(Ds) ? IP(b.document, c.j ? "rotate(180deg) translateY(5px)" : tP(c) ? "rotate(270deg) translateX(-5px)" : "rotate(90deg) translateX(5px)", c.j !== tP(c)) : QP(b, c);
        d.appendChild(e);
        NP(c, 999, d, function(f) {
            return YP(a, b, c, f)
        });
        return d
    }

    function YP(a, b, c, d) {
        var e = dP(a.m, null, a.l, a.j, c);
        oP(b, c, e, a.j, !1);
        d.preventDefault();
        return !1
    };

    function ZP(a, b, c) {
        var d = new TP;
        this.B = a;
        this.win = b;
        this.v = c;
        this.A = d;
        this.m = [];
        this.l = !0;
        this.j = 0
    }

    function $P(a) {
        if (a.j >= a.m.length) {
            if (!S(zs)) {
                a.l = !0;
                return
            }
            a.j = 0
        }
        if (jP) iP.j.push(function() {
            return void $P(a)
        });
        else {
            var b = a.m[a.j++];
            a.l = !1;
            UP(a.A, a.win, a.v, b.j, b.l);
            mP(a.v, 898, a.win, function() {
                return void $P(a)
            }, a.B)
        }
    }

    function aQ(a, b) {
        this.j = a;
        this.l = b
    };
    var bQ = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function cQ(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || bQ.test(a)
        }
    }

    function dQ(a, b, c, d) {
        return cQ(a.charAt(b - 1), d) && cQ(a.charAt(c + 1), d)
    };

    function eQ(a, b, c) {
        c = new fQ(c);
        a = y(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value,
                f = b;
            d = G(e, 1);
            if (1 === f && Ee(e, 3)) gQ(c, d, d);
            else if (2 === f)
                for (Ee(e, 4) && gQ(c, d, d), e = y(Ce(e, 5)), f = e.next(); !f.done; f = e.next()) gQ(c, f.value, d)
        }
        hQ(c);
        return new iQ(c)
    }

    function jQ(a, b, c) {
        c = new fQ(c);
        a = y(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            for (var e = y(se(d, uh, 2)), f = e.next(); !f.done; f = e.next()) f = f.value, he(f, 3).length && !(ba = he(f, 3), t(ba, "includes")).call(ba, b) || gQ(c, G(f, 1), G(d, 1))
        }
        hQ(c);
        return new iQ(c)
    }

    function iQ(a) {
        this.j = a
    }
    iQ.prototype.match = function(a) {
        return this.j.match(a)
    };

    function fQ(a) {
        this.A = a;
        this.size = 1;
        this.j = [new kQ];
        this.l = [];
        this.v = new r.Map;
        this.m = new r.Map;
        this.B = 0
    }

    function lQ(a, b) {
        a: {
            for (var c = 0, d = 0; d < b.length; d++) {
                for (;;) {
                    var e = b.charCodeAt(d);
                    if (a.j[c].contains(e)) {
                        c = a.j[c].l.get(e);
                        break
                    }
                    if (0 === c) break;
                    c = a.j[c].j
                }
                for (e = c;;) {
                    e = a.j[e].m;
                    if (0 === e) break;
                    var f = d + 1 - a.l[a.j[e].C],
                        g = d;
                    if (dQ(b, f, g, a.A)) {
                        a = new mQ(f, g, a.m.get(a.j[e].v));
                        break a
                    }
                    e = a.j[e].j
                }
            }
            a = void 0
        }
        return void 0 !== a
    }
    fQ.prototype.match = function(a) {
        for (var b = 0, c = [], d = 0; d < a.length; d++) {
            for (;;) {
                var e = a.charCodeAt(d),
                    f = this.j[b];
                if (f.contains(e)) {
                    b = f.l.get(e);
                    break
                }
                if (0 === b) break;
                b = f.j
            }
            for (e = b;;) {
                e = this.j[e].m;
                if (0 === e) break;
                f = d + 1 - this.l[this.j[e].C];
                var g = d;
                dQ(a, f, g, this.A) && c.push(new mQ(f, g, this.m.get(this.j[e].v)));
                e = this.j[e].j
            }
        }
        return c
    };

    function gQ(a, b, c) {
        var d = a.v.has(c) ? a.v.get(c) : a.B++;
        a.v.set(c, d);
        a.m.set(d, c);
        for (var e = c = 0; e < b.length; e++) {
            var f = b.charCodeAt(e);
            a.j[c].contains(f) || (a.j.push(new kQ), a.j[a.size].B = c, a.j[a.size].P = f, a.j[c].l.set(f, a.size), a.size++);
            c = a.j[c].l.get(f)
        }
        a.j[c].A = !0;
        a.j[c].v = d;
        a.j[c].C = a.l.length;
        a.l.push(b.length)
    }

    function hQ(a) {
        var b = [];
        for (b.push(0); 0 < b.length;) {
            var c = b.shift(),
                d = a,
                e = d.j[c];
            if (0 === c) e.j = 0, e.m = 0;
            else if (0 === e.B) e.j = 0, e.m = e.A ? c : d.j[d.j[c].j].m;
            else {
                e = d.j[d.j[c].B].j;
                for (var f = d.j[c].P;;) {
                    if (d.j[e].contains(f)) {
                        d.j[c].j = d.j[e].l.get(f);
                        break
                    }
                    if (0 === e) {
                        d.j[c].j = 0;
                        break
                    }
                    e = d.j[e].j
                }
                d.j[c].m = d.j[c].A ? c : d.j[d.j[c].j].m
            }
            c = y(a.j[c].childNodes);
            for (d = c.next(); !d.done; d = c.next()) b.push(d.value)
        }
    }

    function kQ() {
        this.l = new r.Map;
        this.H = !1;
        this.N = this.G = this.D = this.L = this.I = this.K = -1
    }
    kQ.prototype.contains = function(a) {
        return this.l.has(a)
    };
    ia.Object.defineProperties(kQ.prototype, {
        B: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.K = a
            },
            get: function() {
                return this.K
            }
        },
        P: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.I = a
            },
            get: function() {
                return this.I
            }
        },
        A: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.H = a
            },
            get: function() {
                return this.H
            }
        },
        v: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.G = a
            },
            get: function() {
                return this.G
            }
        },
        j: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.L = a
            },
            get: function() {
                return this.L
            }
        },
        m: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.D = a
            },
            get: function() {
                return this.D
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.N = a
            },
            get: function() {
                return this.N
            }
        },
        childNodes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return t(this.l, "values").call(this.l)
            }
        }
    });

    function mQ(a, b, c) {
        this.A = a;
        this.v = b;
        this.B = c
    }
    ia.Object.defineProperties(mQ.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A
            }
        },
        m: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.v
            }
        },
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            }
        },
        length: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.v - this.A
            }
        }
    });

    function nQ(a) {
        this.j = a;
        this.matches = []
    };
    var oQ = x(['@font-face{font-family:"goog-matfb";size-adjust:39.13%;src:local("Times New Roman"),local("Tinos");}']),
        pQ = x(['@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}']),
        qQ = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function rQ(a, b, c, d, e, f) {
        if (c.Qa(5) >= c.K) return !1;
        for (var g = 0; g < b.childNodes.length; g++) {
            var h = b.childNodes[g];
            if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent) {
                a: {
                    var k = a,
                        l = c,
                        m = b,
                        n = h.textContent,
                        p = d,
                        v = e,
                        u = f,
                        A = [];b: {
                        var J = n;
                        switch (l.m) {
                            case 1:
                                for (var Y = J, aa = Array(Y.length), P = 0, Q = 0; Q < Y.length; Q++) bQ.test(Y[Q]) || P++, aa[Q] = P;
                                var U = aa;
                                break b;
                            default:
                                for (var ca = J, Z = Array(ca.length), fa = 0, M = 0; M < ca.length;) {
                                    for (;
                                        /\s/.test(ca[M]);) Z[M] = fa, M++;
                                    for (var ya = !1; M < ca.length && !/\s/.test(ca[M]);) ya = !0, Z[M] = fa,
                                        M++;
                                    ya && (fa++, Z[M - 1] = fa)
                                }
                                U = Z
                        }
                    }
                    if (t(n, "includes").call(n, "\u00bb")) var Va = [];
                    else {
                        for (var Cb = v.match(n), bb = new r.Map, nb = y(Cb), T = nb.next(); !T.done; T = nb.next()) {
                            var ua = T.value,
                                ob = ua.l;
                            if (bb.has(ob)) {
                                var xa = bb.get(ob);
                                ua.length > xa.length && bb.set(ob, ua)
                            } else bb.set(ob, ua)
                        }
                        Va = t(Array, "from").call(Array, t(bb, "values").call(bb))
                    }
                    for (var Nc = -1, kd = y(Va), ld = kd.next(); !ld.done; ld = kd.next()) {
                        for (var Vb = ld.value, pb = Vb.l, Oc = Vb.m, Db = u, Qe = Vb.j, cb = Db.j, md = Db.l + U[pb] - cb.v, db = y(t(cb.j, "keys").call(cb.j)), nd = db.next(); !nd.done; nd =
                            db.next()) {
                            for (var pc = nd.value, Pc = cb.j.get(pc), eb = 0; eb < Pc.length && Pc[eb] < md;) eb++;
                            cb.l -= eb;
                            0 < eb && cb.j.set(pc, Pc.slice(eb))
                        }
                        var od = Db,
                            pd = Qe,
                            qd = od.j;
                        if ((qd.j.has(pd) ? qd.j.get(pd).length : 0) < od.Dd && Db.j.m < Db.Qc) {
                            var $d = k.getComputedStyle(m),
                                qc = $d.fontSize.match(/\d+/);
                            if (!(qc && 12 <= Number(qc[0]) && 22 >= Number(qc[0]) && bc(qQ, $d.display))) {
                                u.l += U[U.length - 1];
                                var rd = [];
                                break a
                            }
                            var ae = Nc + 1;
                            ae < pb && A.push(k.document.createTextNode(n.substring(ae, pb)));
                            var be = n.substring(pb, Oc + 1),
                                Eb = k,
                                Qc = m,
                                Re = be,
                                Se = wP(n, pb, Oc + 1),
                                sd = Vb.j,
                                Wb = U[pb],
                                Rc = Qc.getBoundingClientRect(),
                                Bh = Ml(2);
                            var td = De(Bh, 2, Re);
                            var ce = De(td, 3, Se);
                            var ud = De(ce, 4, sd);
                            var vd = ne(ud, 5, Wb, 0);
                            var Te = ne(vd, 6, Math.round(Rc.x), 0);
                            var Rf = ne(Te, 7, Math.round(Rc.y), 0),
                                fb = Eb.getComputedStyle(Qc),
                                Ch = new Jl;
                            var na = De(Ch, 1, fb.fontFamily);
                            var Ue = xP(fb.color);
                            var wd = te(na, 7, Ue);
                            var Sf = xP(fb.backgroundColor);
                            var Ve = te(wd, 8, Sf);
                            var xd = fb.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            var yd = ne(Ve, 4, xd ? Math.round(Number(xd[1])) : 0, 0);
                            var We = Math.round(Number(fb.fontWeight));
                            isNaN(We) ||
                                400 === We || ne(yd, 5, We, 0);
                            "none" !== fb.textDecorationLine && De(yd, 6, fb.textDecorationLine);
                            for (var Dh = te(Rf, 8, yd), Tf, de = [], Sc = Qc; Sc && 20 > de.length;) {
                                var Wa = de,
                                    Xe = Wa.push,
                                    qb = Sc,
                                    ee = new Gl;
                                var Tc = De(ee, 1, qb.tagName);
                                "" !== qb.className && me(Tc, 2, qb.className.split(" "), Ud);
                                Xe.call(Wa, Tc);
                                if ("BODY" === Sc.tagName) break;
                                Sc = Sc.parentElement
                            }
                            Tf = de.reverse();
                            var Ye = ve(Dh, 9, Tf);
                            var zd = sQ(p, Ye);
                            A.push(tQ(k, l, zd, Vb.j, be));
                            var rb = u.j,
                                rc = Vb.j,
                                Ad = u.l + U[pb],
                                Bd = [];
                            rb.j.has(rc) && (Bd = rb.j.get(rc));
                            Bd.push(Ad);
                            rb.l++;
                            rb.j.set(rc,
                                Bd);
                            Nc = Oc;
                            if (0 < u.nb && u.j.m >= u.nb) break
                        }
                    }
                    var Fb = Nc + 1;0 !== Fb && Fb < n.length && A.push(k.document.createTextNode(n.substring(Fb)));u.l += U[U.length - 1];rd = A
                }
                var Gb = rd;
                if (0 < Gb.length && (S(Bs) ? !c.D.Cc : !S(ss))) {
                    for (var sb = y(Gb), Zd = sb.next(); !Zd.done; Zd = sb.next()) {
                        var Hh = Zd.value;
                        b.insertBefore(Hh, h);
                        uQ(Hh)
                    }
                    b.removeChild(h);
                    g += Gb.length - 1
                }
            }
            else if (vQ(h, c) && !rQ(a, h, c, d, e, f)) return !1;
            if (0 < f.nb && f.j.m >= f.nb) break
        }
        return !0
    }

    function uQ(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = $O(YO(getComputedStyle(a.parentElement).color)),
                    c = $O(YO(getComputedStyle(a).color));
                var d = ZO(a);
                if (d = b && c && d ? VG(c, d) < Math.min(VG(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    K(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) uQ(a.children[b])
        }
    }

    function vQ(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE) return !1;
        var c;
        if ((null == (c = a.classList) ? 0 : c.contains("google-anno-skip")) || !a.offsetHeight) return !1;
        var d, e;
        switch (null == (d = a.tagName) ? void 0 : null == (e = d.toUpperCase) ? void 0 : e.call(d)) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !S(es) && !!b.A;
            default:
                if (!(b = !S(es) && !!b.A)) {
                    var f, g, h, k, l, m;
                    b = !((null == (g = (f = a.className).toUpperCase) ? 0 : null == (h = g.call(f)) ? 0 : t(h, "includes").call(h, "CRUMB")) || (null == (l = (k = a.id).toUpperCase) ? 0 : null == (m = l.call(k)) ? 0 : t(m, "includes").call(m, "CRUMB")))
                }
                return b
        }
    }

    function wQ() {
        this.j = null
    }
    ia.Object.defineProperties(wQ.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j
            }
        }
    });

    function tQ(a, b, c, d, e) {
        var f = a.document.createElement("SPAN");
        cP(f);
        K(f, {
            "text-decoration": "underline"
        });
        K(f, {
            "text-decoration-style": "dotted"
        });
        K(f, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        f.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        cP(e);
        K(e, {
            "text-decoration": "none"
        });
        Sg(e);
        e.className = "google-anno";
        e.appendChild(FP(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            position: "relative"
        }));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(f);
        var g = xQ(b, c, e);
        NP(b, 999, e, function(h) {
            try {
                var k = dP(c, g.l, null, d, b);
                oP(a, b, k, d, !0);
                return !1
            } finally {
                h.preventDefault(), h.stopImmediatePropagation()
            }
        });
        return e
    }

    function xQ(a, b, c) {
        var d = new wQ;
        yQ(a, function(e) {
            e = y(e);
            for (var f = e.next(); !f.done; f = e.next())
                if (f.value.isIntersecting) {
                    var g = b;
                    f = a.v;
                    var h = new Xl;
                    g = Be(h, 1, g);
                    h = eP(f, 5);
                    g = ue(h, 4, cm, g);
                    f = fP(f, g);
                    d.j = f
                } else d.j && (f = a.v, g = new Wl, g = Be(g, 1, d.j), h = eP(f, 6), g = ue(h, 5, cm, g), fP(f, g), d.j = null)
        }).observe(c);
        return d
    };

    function zQ() {
        this.entries = [];
        this.j = 0;
        this.l = this.m = null
    }

    function sQ(a, b) {
        t(a, "entries").push(bf(b, !1));
        return t(a, "entries").length - 1
    }

    function AQ(a) {
        if (S(Es)) {
            a = Eh(a);
            for (var b = 0, c = y(a), d = c.next(); !d.done; d = c.next()) d = d.value, b += (Ee(d, 3) ? 1 : 0) + (Ee(d, 4) ? 1 : 0) + Ce(d, 5).length;
            return Rl(Ql(new Pl, a.length), b)
        }
        b = Ql(new Pl, Ah(a).length);
        var e = 0;
        Ah(a).forEach(function(f) {
            e += se(f, uh, 2).length
        });
        return Rl(b, e)
    }

    function BQ(a, b, c, d) {
        var e = new Cl;
        switch (a) {
            case "se":
                return b = new Bl, ue(e, 1, Dl, b);
            case "sw":
                return b = new Bl, ue(e, 2, Dl, b);
            case "si":
                return b = new Bl, ue(e, 3, Dl, b);
            case "sl":
                return b = new Bl, ue(e, 5, Dl, b);
            case "l":
                return b = new Bl, ue(e, 6, Dl, b)
        }
        if (c && b) {
            if (b.l) return a = new Al, b = Be(a, 1, b.l), ue(e, 7, Dl, b);
            if (c.j && b.v && (!d || !b.A)) return b = new Bl, ue(e, 8, Dl, b)
        }
        return null
    };

    function CQ(a, b, c) {
        this.win = a;
        this.l = b;
        this.m = c
    }
    ia.Object.defineProperties(CQ.prototype, {
        window: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.win
            }
        },
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        }
    });

    function DQ(a, b) {
        this.m = a;
        this.j = b
    }
    ia.Object.defineProperties(DQ.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        }
    });

    function EQ(a, b, c, d) {
        this.l = a;
        this.m = b;
        this.v = c;
        this.A = 1;
        this.j = [].concat(ma(d))
    }

    function nP(a, b) {
        var c = eP(a, 9);
        b = ue(c, 9, cm, b);
        fP(a, b)
    }

    function eP(a, b) {
        var c = new bm;
        var d = a.A++;
        c = Be(c, 1, d);
        b = Be(c, 2, Math.round(a.l.Qa(b) - a.m));
        return te(b, 10, a.v)
    }

    function fP(a, b) {
        a = y(a.j);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, c(b);
        return ze(b, 1)
    };

    function FQ(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function GQ(a) {
        return new r.Set(a.map(FQ).filter(function(b) {
            return b.length
        }))
    };

    function HQ(a, b) {
        this.l = a;
        this.m = b
    }
    ia.Object.defineProperties(HQ.prototype, {
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        },
        v: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        }
    });

    function IQ(a, b, c, d, e, f, g, h) {
        BP.call(this, [b], [c], d, f);
        this.H = a;
        this.I = e;
        this.C = g ? g : null;
        this.v = h || null
    }
    z(IQ, BP);
    IQ.prototype.Od = function() {
        var a = {};
        a[this.I] = this.m[0] + "px";
        tj(this.H, a)
    };
    IQ.prototype.Ge = function() {
        this.C && this.C()
    };

    function JQ(a) {
        this.tb = a.tb;
        var b;
        this.Cc = null != (b = a.Cc) ? b : !1;
        var c;
        this.Pc = null != (c = a.Pc) ? c : 300
    };

    function KQ(a, b, c, d, e, f, g, h, k, l, m, n, p, v) {
        var u = this;
        this.C = a;
        this.j = b;
        this.l = c;
        this.N = d;
        this.K = e;
        this.A = f;
        this.H = g;
        this.v = h;
        this.ba = k;
        this.P = l;
        this.B = m;
        this.L = n;
        this.I = void 0 === v ? !1 : v;
        this.D = new JQ(p);
        this.m = bc(LQ, G(c, 7)) ? 1 : 0;
        this.G = new r.Map;
        if (S(vs))
            if (S(Es))
                for (a = y(Eh(this.l)), b = a.next(); !b.done; b = a.next()) b = b.value, null != D(b, 2) && this.G.set(G(b, 1), G(b, 2));
            else Ah(this.l).forEach(function(A) {
                null != D(A, 3) && u.G.set(G(A, 1), G(A, 3));
                se(A, uh, 2).forEach(function(J) {
                    null != D(J, 2) && u.G.set(G(J, 1), G(J, 2))
                })
            })
    }

    function NP(a, b, c, d) {
        c.addEventListener("click", MQ(a, b, d))
    }

    function mP(a, b, c, d, e) {
        return c.setTimeout(MQ(a, b, d), e)
    }

    function vP(a, b, c) {
        return b.setInterval(MQ(a, 1066, c), 1E3)
    }

    function yQ(a, b) {
        return new IntersectionObserver(MQ(a, 1065, b), {
            threshold: .98
        })
    }

    function MQ(a, b, c) {
        return a.H.rb(b, c, void 0, function(d) {
            return void NQ(a, d)
        })
    }

    function OP(a, b, c, d, e) {
        return new IQ(b, c, d, 100, "left", a.H, void 0, e)
    }
    KQ.prototype.Aa = function(a, b) {
        var c = this;
        this.H.Aa(a, b, function(d) {
            return void NQ(c, d)
        })
    };

    function NQ(a, b) {
        b.e = S(Bs) ? "" + a.D.tb : "" + V(is);
        b.c = "" + a.N
    }
    KQ.prototype.Qa = function(a) {
        return this.P.Qa(a)
    };

    function tP(a) {
        return 2 === Fe(a.l, 12)
    }

    function OQ(a) {
        var b, c;
        return null != (c = null == (b = a.B) ? void 0 : b.pd) ? c : t(Number, "MAX_SAFE_INTEGER")
    }

    function PQ(a) {
        var b, c;
        return null != (c = null == (b = a.L) ? void 0 : b.pd) ? c : t(Number, "MAX_SAFE_INTEGER")
    }
    var LQ = ["ja", "zh_CN", "zh_TW"];
    var QQ = x(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700"]),
        RQ = x(["https://www.google.com/adsense/search/ads.js"]);

    function SQ(a, b, c, d, e, f) {
        var g = tm,
            h = sm;
        try {
            mc(a.document)
        } catch (k) {
            return
        }
        f = (f = FH(new EH(a), "__gads", f)) ? (f = Di(f + "t2Z7mVic")) ? f % 20 : null : null;
        f || (f = Fi() ? null : Math.floor(20 * Ai()));
        null != f && TQ(a, b, c, new DQ(!1, f), g, d, h, e)
    }

    function UQ(a, b, c, d, e, f, g, h) {
        S(Zr) && b && !b.j && (a = wA(a)) && cj(a, function() {
            TQ(c.window, c.j, c.C, new DQ(!0, d.j), e, f, g, h)
        })
    }

    function TQ(a, b, c, d, e, f, g, h) {
        var k = b.l;
        if (k) {
            var l = h.Qa(1),
                m = l + (S(Bs) ? b.j.Pc : V(fs)),
                n = b.j;
            if ((S(Bs) ? !n.Cc : !S(ss)) && 0 < (S(Es) ? Eh(k) : Ah(k)).length) {
                var p = a.document,
                    v = p.createElement("LINK"),
                    u = L(QQ);
                Wg(v, u, "stylesheet");
                p.head.appendChild(v)
            }
            var A = 488 > hn(a);
            if (S(Zr) || SP(a)) {
                var J = (S(Es) ? Eh(b.l) : Ah(b.l)).length;
                var Y = new HQ(b.A, J)
            } else Y = null;
            var aa = Y,
                P = new CQ(a, b, c);
            if (S(Zr) || SP(a))
                if (SP(a)) var Q = new EP(!0, !1, !1, d.l, 0, A);
                else {
                    var U = rA({
                        J: a,
                        kd: 3E3,
                        od: V(ds),
                        ba: g,
                        zf: !0
                    });
                    var ca = JP(a, 2, g),
                        Z = JP(a, 1, g);
                    Q =
                        new EP(0 < U || 0 === aa.v ? !1 : !aa.j || 0 < Z || A && 0 === ca, 0 === ca, 0 === Z, d.l, U, A)
                }
            else Q = null;
            var fa = Q,
                M = b.j,
                ya = new Vl,
                Va = S(Bs) ? M.tb : V(is);
            var Cb = Be(ya, 1, Va);
            var bb = ne(Cb, 2, d.j, 0);
            var nb = new EQ(h, l, bb, f);
            S(ks) && UQ(a, fa, P, d, e, f, g, h);
            var T = new KQ(c, A, k, d.j, m, fa, e, nb, g, h, b.B, b.v, b.j, b.m),
                ua = new zQ;
            var ob = a.document.body;
            if (ob && VQ(ob)) {
                var xa = ob.textContent || "";
                b: switch (T.m) {
                    case 1:
                        for (var Nc = 0, kd = xa.length - 1; 0 <= kd; kd--) bQ.test(xa[kd]) || Nc++;
                        var ld = Nc;
                        break b;
                    default:
                        var Vb = xa.trim();
                        ld = "" === Vb ? 0 : Vb.split(/\s+/).length
                }
                var pb =
                    ld;
                ua.j = pb;
                var Oc = FQ(G(T.l, 7));
                var Db = a.document.documentElement,
                    Qe = FQ(Db.lang) || FQ(Db.getAttribute("xml:lang"));
                if ("" !== Qe) var cb = new r.Set([Qe]);
                else {
                    for (var md, db = a.location, nd = db.host.match(/^[a-z]{2}\./i), pc = nd ? [nd[0]] : [], Pc = y(db.pathname.split("/")), eb = Pc.next(); !eb.done; eb = Pc.next()) {
                        var od = eb.value;
                        2 === od.length && pc.push(od)
                    }
                    md = GQ(pc);
                    if (md.size) var pd = md;
                    else {
                        var qd = a.navigator,
                            $d;
                        pd = GQ((null == ($d = qd.languages) ? 0 : $d.length) ? qd.languages : [qd.language])
                    }
                    cb = pd
                }
                var qc = cb;
                ua.m = Oc;
                ua.l = new r.Set(qc);
                if (pb < (S(es) && S(Yr) ? Math.min(OQ(T), PQ(T)) : V(ps))) var rd = "sw";
                else {
                    if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) var ae = "si";
                    else {
                        if (qc.has(Oc)) {
                            if (T.Qa(5) >= T.K) var be = "l";
                            else {
                                b: {
                                    var Eb = T.l;
                                    if (0 === (S(Es) ? Eh(Eb) : Ah(Eb)).length || !S(es) && T.A && !T.A.j) var Qc = !0;
                                    else {
                                        if (S(es) || !T.A) {
                                            var Re = a.document,
                                                Se = Re.createElement("style"),
                                                sd = S(us) ? new yg(oQ[0], xg) : new yg(pQ[0], xg);
                                            Se.textContent = zg(sd);
                                            Re.head.appendChild(Se)
                                        }
                                        if (S(Es))
                                            if (S(es)) {
                                                var Wb = eQ(Eh(Eb), 2, T.m);
                                                var Rc =
                                                    eQ(Eh(Eb), 1, T.m)
                                            } else {
                                                for (var Bh = Eh(Eb), td = new fQ(T.m), ce = y(Bh), ud = ce.next(); !ud.done; ud = ce.next()) {
                                                    var vd = ud.value,
                                                        Te = G(vd, 1);
                                                    gQ(td, Te, Te);
                                                    for (var Rf = y(Ce(vd, 5)), fb = Rf.next(); !fb.done; fb = Rf.next()) gQ(td, fb.value, Te)
                                                }
                                                hQ(td);
                                                Wb = Rc = new iQ(td)
                                            }
                                        else if (S(es)) Wb = jQ(Ah(Eb), 2, T.m), Rc = jQ(Ah(Eb), 1, T.m);
                                        else {
                                            for (var Ch = Ah(Eb), na = new fQ(T.m), Ue = y(Ch), wd = Ue.next(); !wd.done; wd = Ue.next())
                                                for (var Sf = wd.value, Ve = y(se(Sf, uh, 2)), xd = Ve.next(); !xd.done; xd = Ve.next()) gQ(na, G(xd.value, 1), G(Sf, 1));
                                            hQ(na);
                                            Wb = Rc = new iQ(na)
                                        }
                                        var yd;
                                        if (yd = T.A && T.A.j) {
                                            var We = ua.j;
                                            yd = !S(es) || !S(Yr) || We >= PQ(T)
                                        }
                                        if (yd) {
                                            if (lQ(Wb.j, xa)) {
                                                for (var Dh = new ZP(V(As), a, T), Tf = T.m, de, Sc = Wb.match(xa), Wa = new r.Map, Xe = y(Sc), qb = Xe.next(); !qb.done; qb = Xe.next()) {
                                                    var ee = qb.value,
                                                        Tc = ee.j;
                                                    if (Wa.has(Tc)) Wa.get(Tc).matches.push(ee);
                                                    else {
                                                        var Ye = new nQ(Tc);
                                                        Ye.matches.push(ee);
                                                        Wa.set(Tc, Ye)
                                                    }
                                                }
                                                de = t(Array, "from").call(Array, t(Wa, "values").call(Wa));
                                                for (var zd = y(de), rb = zd.next(); !rb.done; rb = zd.next()) {
                                                    for (var rc = rb.value, Ad = null, Bd = y(rc.matches), Fb = Bd.next(); !Fb.done; Fb = Bd.next()) {
                                                        var Gb =
                                                            xa,
                                                            sb = Fb.value,
                                                            Zd = ua;
                                                        if (dQ(Gb, sb.l, sb.m, Tf)) {
                                                            var Hh = Gb.substring(sb.l, sb.m + 1),
                                                                AR = Zd,
                                                                BR = Hh,
                                                                CR = wP(Gb, sb.l, sb.m + 1),
                                                                DR = sb.j,
                                                                ER = Ml(1);
                                                            var FR = De(ER, 2, BR);
                                                            var GR = De(FR, 3, CR);
                                                            var HR = De(GR, 4, DR);
                                                            var IR = ne(HR, 5, null, 0);
                                                            sQ(AR, IR);
                                                            var My = Hh
                                                        } else My = null;
                                                        var Ny = My;
                                                        null != Ny && (Ad = Ny)
                                                    }
                                                    if (null != Ad) {
                                                        var kp = Dh;
                                                        kp.m.push(new aQ(rc.j, Ad));
                                                        kp.l && $P(kp)
                                                    }
                                                }
                                            }
                                            if (!S(es)) {
                                                Qc = !0;
                                                break b
                                            }
                                        }
                                        var JR = ua.j,
                                            lp;
                                        if (!(lp = !(!S(es) || !S(Yr) || JR >= OQ(T)) || !lQ(Rc.j, xa))) {
                                            var Oy, Py;
                                            var Qy = null != (Py = null == (Oy = T.B) ? void 0 : Oy.Qg) ? Py : null;
                                            var KR = a.document.body,
                                                LR = Rc,
                                                MR = null != Qy ? Qy : 100,
                                                Ry, Sy;
                                            var NR = null != (Sy = null == (Ry = T.B) ? void 0 : Ry.Dd) ? Sy : null;
                                            var Ty, Uy;
                                            var OR = null != (Uy = null == (Ty = T.B) ? void 0 : Ty.Qc) ? Uy : null;
                                            var Vy, Wy;
                                            var PR = null != (Wy = null == (Vy = T.B) ? void 0 : Vy.nb) ? Wy : null;
                                            lp = rQ(a, KR, T, ua, LR, new aP(MR, NR || 0, OR || 0, PR || -1))
                                        }
                                        Qc = lp
                                    }
                                }
                                be = Qc ? "a" : "p"
                            }
                            var Xy = be
                        } else Xy = "sl";
                        ae = Xy
                    }
                    rd = ae
                }
                var Yy = rd
            } else Yy = "se";
            var Zy = Yy,
                QR = h.Qa(3) - l,
                RR = b.j;
            if ((S(Bs) ? !RR.Cc : !S(ss)) && t(ua, "entries").length && !Ee(k, 13)) {
                var $y = a.document,
                    lk = $y.createElement("LINK");
                Wg(lk, L(RQ), "prefetch");
                lk.as = "script";
                lk.fetchPriority = "low";
                $y.head.appendChild(lk)
            }
            var SR = b.C,
                TR = a.location.hostname,
                UR = b.D,
                VR = new Sl,
                WR = new xl;
            var YR = De(WR, 1, SR);
            var ZR = De(YR, 2, TR);
            var $R = He(ZR, 3, A);
            var aS = E($R, 4, ua.j);
            var bS = te(VR, 1, aS);
            var az, cS = new yl,
                dS = t(Array, "from").call(Array, null != (az = ua.l) ? az : []).sort();
            var eS = me(cS, 1, dS, Ud);
            var fS = De(eS, 2, ua.m);
            var gS = De(fS, 3, UR);
            var hS = te(bS, 2, gS);
            var iS = Be(hS, 3, Math.round(QR));
            var jS = AQ(k);
            var mp = te(iS, 6, jS);
            var bz = BQ(Zy, fa, aa, A);
            if (bz) {
                var kS = new El;
                var lS = we(kS, 1, Cl, bz);
                ue(mp, 5, Tl, lS)
            } else {
                var mS = new Nl;
                var nS = He(mS, 1, "p" === Zy);
                var oS = ve(nS, 2, t(ua, "entries"));
                var pS = (S(Es) ? Eh(k) : Ah(k)).length;
                var qS = Be(oS, 3, pS);
                ue(mp, 4, Tl, qS)
            }
            var rS = eP(nb, 3);
            var sS = ue(rS, 3, cm, mp);
            fP(nb, sS)
        }
    }

    function VQ(a) {
        try {
            mc(new ResizeObserver(function() {})), mc(new MutationObserver(function() {}))
        } catch (b) {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };

    function WQ(a, b, c, d, e) {
        if (!TE(PE(), 29, !1)) {
            UE(PE(), 29, !0);
            var f = a.performance;
            null != f && f.now && SQ(a, c, d, [function(g) {
                if (S(Wq)) mF(b, g);
                else {
                    var h = b.ba,
                        k = em(gF(b), 1);
                    g = ue(k, 6, fm, g);
                    gm(h, g)
                }
            }], new WO(f), e)
        }
    };

    function XQ(a, b, c, d, e, f, g) {
        this.l = a;
        this.C = b;
        this.A = c;
        this.D = d;
        this.B = e;
        this.v = {
            pd: 50
        };
        this.j = f;
        this.m = g
    };

    function YQ(a) {
        tm.Ed(function(b) {
            b.shv = String(a);
            b.mjsv = "m202302130101";
            b.eid = CH(B)
        })
    };

    function ZQ(a) {
        var b = a.Gg;
        return a.Cf || ("dev" === b ? "dev" : "")
    };
    var $Q = "undefined" === typeof sttc ? void 0 : sttc;

    function aR(a) {
        var b = tm;
        try {
            return hf(a, Bk), new lH(JSON.parse(a))
        } catch (c) {
            b.na(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new lH
    };

    function bR(a, b, c, d) {
        N.call(this);
        this.K = b;
        this.I = c;
        this.H = d;
        this.G = new r.Map;
        this.L = 0;
        this.v = new r.Map;
        this.D = new r.Map;
        this.B = new r.Map;
        this.m = void 0;
        this.l = a
    }
    z(bR, N);
    bR.prototype.M = function() {
        delete this.j;
        this.G.clear();
        this.v.clear();
        this.D.clear();
        this.B.clear();
        this.m && (Bf(this.l, "message", this.m), delete this.m);
        delete this.l;
        delete this.H;
        N.prototype.M.call(this)
    };

    function cR(a) {
        if (a.j) return a.j;
        a.I && a.I(a.l) ? a.j = a.l : a.j = Ri(a.l, a.K);
        var b;
        return null != (b = a.j) ? b : null
    }

    function dR(a, b) {
        if (cR(a))
            if (a.j === a.l) {
                var c = a.G.get("getDataWithCallback");
                c && c(a.j, b)
            } else if ((c = a.v.get("getDataWithCallback")) && c.jd) {
            eR(a);
            var d = ++a.L;
            a.D.set(d, c.Ie);
            a.B.set(d, c.ye(b));
            a.j.postMessage(c.jd(b, d), "*")
        }
    }

    function eR(a) {
        a.m || (a.m = function(b) {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.xd,
                        e = a.D.get(d);
                    if (e) {
                        a.D.delete(d);
                        var f = a.B.get(c.xd);
                        a.B.delete(d);
                        e(f, c.payload)
                    }
                }
            } catch (g) {}
        }, I(a.l, "message", a.m))
    };

    function fR(a, b) {
        (0, a.__uspapi)("getUSPData", 1, function(c, d) {
            b.callback({
                consentData: null != c ? c : void 0,
                ie: d ? void 0 : 2
            })
        })
    }
    var gR = {
        ye: function(a) {
            return a.callback
        },
        jd: function(a, b) {
            a = {};
            return a.__uspapiCall = {
                callId: b,
                command: "getUSPData",
                version: 1
            }, a
        },
        Ie: function(a, b) {
            b = b.__uspapiReturn;
            var c;
            a({
                consentData: null != (c = b.returnValue) ? c : void 0,
                ie: b.success ? void 0 : 2
            })
        }
    };

    function hR(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            xd: b.__uspapiReturn.callId
        }
    }

    function iR(a) {
        N.call(this);
        this.caller = new bR(a, "__uspapiLocator", function(b) {
            return "function" === typeof b.__uspapi
        }, hR);
        this.caller.G.set("getDataWithCallback", fR);
        this.caller.v.set("getDataWithCallback", gR)
    }
    z(iR, N);
    iR.prototype.M = function() {
        this.caller.xa();
        N.prototype.M.call(this)
    };
    iR.prototype.B = function(a) {
        var b = {};
        if (cR(this.caller)) {
            var c = vf(function() {
                a(b)
            });
            dR(this.caller, {
                callback: function(d) {
                    d.ie || (b = d.consentData);
                    c()
                }
            });
            setTimeout(c, 500)
        } else a(b)
    };

    function jR(a) {
        H.call(this, a)
    }
    z(jR, H);
    var kR = jf(jR);

    function lR(a, b) {
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, function(c) {
            c = kR(c);
            b.callback({
                consentData: c
            })
        })
    }
    var mR = {
        ye: function(a) {
            return a.callback
        },
        jd: function(a, b) {
            var c = {};
            return c.__fciCall = {
                callId: b,
                command: a.command
            }, c
        },
        Ie: function(a, b) {
            a({
                consentData: b
            })
        }
    };

    function nR(a) {
        a = kR(a.data.__fciReturn);
        return {
            payload: a,
            xd: D(a, 1)
        }
    }

    function oR(a) {
        N.call(this);
        this.j = null;
        this.m = !1;
        this.caller = new bR(a, "googlefcPresent", void 0, nR);
        this.caller.G.set("getDataWithCallback", lR);
        this.caller.v.set("getDataWithCallback", mR)
    }
    z(oR, N);
    oR.prototype.M = function() {
        this.caller.xa();
        N.prototype.M.call(this)
    };
    oR.prototype.l = function() {
        this.m || (this.j = cR(this.caller), this.m = !0);
        return !!this.j
    };
    oR.prototype.G = function(a) {
        var b = this;
        return new r.Promise(function(c) {
            b.l() && dR(b.caller, {
                command: a,
                callback: function(d) {
                    c(d.consentData)
                }
            })
        })
    };

    function pR(a) {
        var b = [5, 8, 9],
            c = [3, 4],
            d = void 0,
            e = 2;
        b = void 0 === b ? qR : b;
        c = void 0 === c ? rR : c;
        d = void 0 === d ? sR : d;
        e = void 0 === e ? 0 : e;
        this.j = Yh(a);
        this.v = b;
        this.A = c;
        this.m = d;
        this.l = e
    }

    function tR(a, b) {
        var c = a.j.U(),
            d = a.j.j;
        return new r.Promise(function(e, f) {
            var g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(function(k) {
                                    var l = new uk,
                                        m = xk(l, function() {
                                            return uR(a, k)
                                        });
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, vR);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function uR(a, b) {
        function c(n) {
            return bc(a.v, n.overlapType) && bc(a.A, n.overlapDepth) && bc(a.m, n.overlapDetectionPoint)
        }
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        var d = b.getBoundingClientRect(),
            e = ci(a.j.U() || window);
        if (0 >= d.bottom || d.bottom > e.height || 0 >= d.right || d.left >= e.width) return null;
        var f = wR(a, b, d, a.j.j.elementsFromPoint(Nh(d.left + d.width / 2, d.left, d.right - 1), Nh(d.bottom - 1 - a.l, d.top, d.bottom - 1)), 1, []),
            g = wR(a, b, d, a.j.j.elementsFromPoint(Nh(d.left + d.width / 2, d.left, d.right - 1), Nh(d.top + a.l, d.top, d.bottom -
                1)), 2, f.Na),
            h = wR(a, b, d, a.j.j.elementsFromPoint(Nh(d.left + a.l, d.left, d.right - 1), Nh(d.top + d.height / 2, d.top, d.bottom - 1)), 3, [].concat(ma(f.Na), ma(g.Na))),
            k = wR(a, b, d, a.j.j.elementsFromPoint(Nh(d.right - 1 - a.l, d.left, d.right - 1), Nh(d.top + d.height / 2, d.top, d.bottom - 1)), 4, [].concat(ma(f.Na), ma(g.Na), ma(h.Na))),
            l = xR(a, b, d);
        f = Yb([].concat(ma(t(f, "entries")), ma(t(g, "entries")), ma(t(h, "entries")), ma(t(k, "entries"))), c);
        g = Yb(l, c);
        l = [].concat(ma(f), ma(g));
        h = d.left < -a.l || d.right > e.width + a.l;
        h = 0 < l.length || h;
        k = di(a.j.j);
        var m = new jj(d.left, d.top, d.width, d.height);
        f = [].concat(ma(Zb(f, function(n) {
            return new jj(n.elementRect.left, n.elementRect.top, n.elementRect.width, n.elementRect.height)
        })), ma(kc(Zb(g, function(n) {
            return lj(m, n.elementRect)
        }))), ma(Yb(lj(m, new jj(0, 0, e.width, e.height)), function(n) {
            return 0 <= n.top && n.top + n.height <= e.height
        })));
        return {
            entries: l,
            isOverlappingOrOutsideViewport: h,
            scrollPosition: {
                scrollX: k.x,
                scrollY: k.y
            },
            target: b,
            targetRect: d,
            viewportSize: {
                width: e.width,
                height: e.height
            },
            overlappedArea: 20 >
                f.length ? yR(m, f) : zR(d, f)
        }
    }

    function yR(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = 1; d < 1 << b.length; d++) {
            for (var e = a, f = 0, g = 0; g < b.length && (!(d & 1 << g) || (f++, e = kj(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function zR(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = a.left; d <= a.right; d++)
            for (var e = a.top; e <= a.bottom; e++)
                for (var f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function wR(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Na: []
        };
        for (var g = [], h = [], k = 0; k < d.length; k++) {
            var l = d[k];
            if (l !== b && !bc(f, l)) {
                h.push(l);
                var m = l.getBoundingClientRect();
                if (a.j.contains(l, b)) g.push(tS(a, c, l, m, 1, e));
                else if (a.j.contains(b, l)) g.push(tS(a, c, l, m, 2, e));
                else {
                    var n = a,
                        p = b,
                        v = n.j.Lf(p, l);
                    if (v) {
                        var u = uS(n, p, v, l) || {};
                        var A = u.suspectAncestor;
                        u = u.bb;
                        p = uS(n, l, v, p) || {};
                        n = p.suspectAncestor;
                        p = p.bb;
                        A = A && u && n && p ? u <= p ? {
                                suspectAncestor: A,
                                overlapType: vS[u]
                            } : {
                                suspectAncestor: n,
                                overlapType: wS[p]
                            } :
                            A && u ? {
                                suspectAncestor: A,
                                overlapType: vS[u]
                            } : n && p ? {
                                suspectAncestor: n,
                                overlapType: wS[p]
                            } : null
                    } else A = null;
                    u = A || {};
                    A = u.suspectAncestor;
                    u = u.overlapType;
                    A && u ? g.push(tS(a, c, l, m, u, e, A)) : g.push(tS(a, c, l, m, 9, e))
                }
            }
        }
        return {
            entries: g,
            Na: h
        }
    }

    function xR(a, b, c) {
        var d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            var e = b.getBoundingClientRect();
            if (e) {
                var f = zi(b, a.j.U());
                f && "visible" !== f.overflow && ("auto" !== f.overflowY && "scroll" !== f.overflowY && c.bottom > e.bottom + a.l ? d.push(tS(a, c, b, e, 5, 1)) : (f = "auto" === f.overflowX || "scroll" === f.overflowX, !f && c.left < e.left - a.l ? d.push(tS(a, c, b, e, 5, 3)) : !f && c.right > e.right + a.l && d.push(tS(a, c, b, e, 5, 4))))
            }
        }
        return d
    }

    function tS(a, b, c, d, e, f, g) {
        var h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (bc(a.v, e) && bc(a.m, f)) {
            b = new gj(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = xS(a, c)) && ij(b, a)) c = 4;
            else {
                a = yS(c, d);
                if (sc) {
                    e = Dj(c, "paddingLeft");
                    f = Dj(c, "paddingRight");
                    var k = Dj(c, "paddingTop"),
                        l = Dj(c, "paddingBottom");
                    e = new gj(k, f, l, e)
                } else e = wj(c, "paddingLeft"), f = wj(c, "paddingRight"), k = wj(c, "paddingTop"), l = wj(c, "paddingBottom"), e = new gj(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                ij(b, new gj(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = yS(c, d), c = ij(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function uS(a, b, c, d) {
        for (var e = [], f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.U();
        for (f = 0; f < e.length; f++) {
            var g = e[f],
                h = zi(g, c);
            if (h) {
                if ("fixed" === h.position) return {
                    suspectAncestor: g,
                    bb: 1
                };
                if ("sticky" === h.position && a.j.contains(g.parentElement, d)) return {
                    suspectAncestor: g,
                    bb: 2
                };
                if ("absolute" === h.position) return {
                    suspectAncestor: g,
                    bb: 3
                };
                if ("none" !== h.cssFloat) {
                    h = g === e[0];
                    var k = zS(a, e.slice(0, f), g);
                    if (h || k) return {
                        suspectAncestor: g,
                        bb: 4
                    }
                }
            }
        }
        return (a = zS(a, e, b)) ? {
            suspectAncestor: a,
            bb: 5
        } : null
    }

    function zS(a, b, c) {
        var d = c.getBoundingClientRect();
        if (!d) return null;
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            if (a.j.contains(f, c)) {
                var g = f.getBoundingClientRect();
                if (g) {
                    var h = zi(f, a.j.U());
                    if (h && d.bottom > g.bottom + a.l && "visible" === h.overflowY) return f
                }
            }
        }
        return null
    }

    function yS(a, b) {
        if (!sc || 9 <= Number(Ec)) {
            var c = wj(a, "borderLeftWidth");
            d = wj(a, "borderRightWidth");
            e = wj(a, "borderTopWidth");
            a = wj(a, "borderBottomWidth");
            c = new gj(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Fj(a, "borderLeft");
            var d = Fj(a, "borderRight"),
                e = Fj(a, "borderTop");
            a = Fj(a, "borderBottom");
            c = new gj(e, d, a, c)
        }
        return new gj(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }

    function xS(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: function(d) {
                return /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new gj(a.top, a.right, a.bottom, a.left)
    }
    var AS = {},
        vS = (AS[1] = 3, AS[4] = 10, AS[3] = 12, AS[2] = 4, AS[5] = 5, AS),
        BS = {},
        wS = (BS[1] = 6, BS[4] = 11, BS[3] = 13, BS[2] = 7, BS[5] = 8, BS),
        qR = Yb(Ci({
            Ji: 1,
            Ki: 2,
            uk: 3,
            vk: 4,
            xk: 5,
            Fi: 6,
            Gi: 7,
            Ii: 8,
            Hj: 9,
            wk: 10,
            Hi: 11,
            tk: 12,
            Ei: 13
        }), function(a) {
            return !bc([1, 2], a)
        }),
        rR = Ci({
            Vh: 1,
            Ij: 2,
            gi: 3,
            yk: 4
        }),
        sR = Ci({
            Wh: 1,
            Bk: 2,
            vj: 3,
            gk: 4
        }),
        vR = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function CS(a, b, c, d) {
        function e(k) {
            try {
                var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                g === l.paw_id && (Bf(a, "message", e), l.error ? f.reject(Error(l.error)) : f.resolve(d(l)))
            } catch (m) {}
        }
        var f = new Cw,
            g = "",
            h = DS(a);
        return h ? (I(a, "message", e), g = c(h), f.promise) : (c = ES(a)) ? (g = String(Math.floor(2147483647 * Ai())), I(a, "message", e), b(c, g), f.promise) : null
    }

    function FS(a) {
        return CS(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }

    function DS(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    }

    function ES(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };

    function GS(a) {
        N.call(this);
        this.j = a;
        this.l = null;
        this.v = {};
        this.D = 0;
        this.m = null
    }
    z(GS, N);
    GS.prototype.M = function() {
        this.m && Bf(this.j, "message", this.m);
        N.prototype.M.call(this)
    };

    function HS(a) {
        var b;
        return "function" === typeof(null == (b = a.j) ? void 0 : b.__uspapi) || null != IS(a)
    }
    GS.prototype.B = function(a) {
        var b = {};
        if (HS(this)) {
            var c = vf(function() {
                return a(b)
            });
            JS(this, function(d, e) {
                e && (b = d);
                c()
            });
            setTimeout(c, 500)
        } else a(b)
    };

    function JS(a, b) {
        var c;
        "function" === typeof(null == (c = a.j) ? void 0 : c.__uspapi) ? (a = a.j.__uspapi, a("getUSPData", 1, b)) : IS(a) && (KS(a), c = ++a.D, a.v[c] = b, a.l && (b = {}, a.l.postMessage((b.__uspapiCall = {
            command: "getUSPData",
            version: 1,
            callId: c
        }, b), "*")))
    }

    function IS(a) {
        if (a.l) return a.l;
        a.l = Ri(a.j, "__uspapiLocator");
        return a.l
    }

    function KS(a) {
        a.m || (a.m = function(b) {
            try {
                var c = {};
                "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                var d = c.__uspapiReturn;
                var e;
                null == (e = a.v) || e[d.callId](d.returnValue, d.success)
            } catch (f) {}
        }, I(a.j, "message", a.m))
    };

    function LS(a) {
        N.call(this);
        this.v = a;
        this.m = this.j = null;
        this.D = {};
        this.H = 0;
        this.B = !1
    }
    z(LS, N);
    LS.prototype.l = function() {
        if (!this.B) {
            if (!this.j) {
                var a = Ri(this.v, "googlefcPresent");
                this.j = a ? a : null
            }
            this.B = !0
        }
        return !!this.j
    };
    LS.prototype.G = function(a) {
        var b = this;
        return new r.Promise(function(c) {
            if (b.l())
                if (b.j === b.v) {
                    var d = b.j.googlefc || (b.j.googlefc = {});
                    d.__fci = d.__fci || [];
                    d.__fci.push(a, function(f) {
                        c(kR(f))
                    })
                } else {
                    MS(b);
                    d = b.H++;
                    b.D[d] = c;
                    var e = {};
                    b.j.postMessage((e.__fciCall = {
                        command: a,
                        callId: d
                    }, e), "*")
                }
        })
    };

    function MS(a) {
        a.m || (a.m = function(b) {
            try {
                var c = kR(b.data.__fciReturn);
                (0, a.D[D(c, 1)])(c)
            } catch (d) {}
        }, I(a.v, "message", a.m))
    };

    function NS(a, b) {
        try {
            var c = void 0 === Ee(b, 6) ? !0 : Ee(b, 6),
                d, e;
            a: switch (Fe(b, 4)) {
                case 1:
                    var f = "pt";
                    break a;
                case 2:
                    f = "cr";
                    break a;
                default:
                    f = ""
            }
            var g = new kh(ih(Fe(b, 2)), G(b, 3), f),
                h = null != (e = null == (d = F(b, dh, 5)) ? void 0 : G(d, 1)) ? e : "";
            g.Lb = h;
            g.j = c;
            g.win = a;
            var k = g.build();
            ch(k)
        } catch (l) {}
    }

    function OS(a, b) {
        var c = void 0 === c ? NS : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : I(a, "load", function() {
            return void c(a, b)
        }))
    };

    function PS(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function QS(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function RS(a) {
        if (a === a.top || ti(a.top)) return r.Promise.resolve({
            status: 4
        });
        var b = PS(a);
        if (!b) return r.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && QS(a.document.referrer)) return r.Promise.resolve({
            status: 3
        });
        var c = new Cw;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Eb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function SS(a) {
        H.call(this, a)
    }
    z(SS, H);
    var TS = jf(SS),
        US = [1, 3];
    var VS = x(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        WS = L(VS);

    function XS(a) {
        var b = void 0 === b ? WS : b;
        var c = YS(a);
        return c.messageChannelSendRequestFn ? r.Promise.resolve(c.messageChannelSendRequestFn) : new r.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = yi("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = Xf(b).toString();
            var g = (new URL(b.toString())).origin,
                h = bH({
                    destination: a,
                    Ia: f,
                    origin: g,
                    Ma: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" ===
                k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    }

    function ZS(a, b, c) {
        var d = tm;
        var e = void 0 === e ? !1 : e;
        var f = $S(c),
            g = f.Yb,
            h = f.Xb;
        b = YS(b);
        b.getTopicsPromise || (a = a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: e
            }).then(function(k) {
                var l = h;
                if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && ic(k, g)));
                else if (Dk()(k)) l || (l = k !== g);
                else return d.na(989, Error(JSON.stringify(k))), 7;
                if (l && c) try {
                    var m = new SS;
                    var n = E(m, 2, ok());
                    k instanceof Uint8Array ? oe(n, 1, US, Ld(k, !1, !1)) : oe(n, 3, US, k);
                    c.setItem("goog:cached:topics", df(n))
                } catch (p) {}
                return k
            }),
            b.getTopicsPromise = a);
        return g && !h ? r.Promise.resolve(g) : b.getTopicsPromise
    }

    function $S(a) {
        if (!a) return {
            Yb: null,
            Xb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Yb: null,
                Xb: !0
            };
            var c = TS(b),
                d = pe(c, US);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f, g = 1 === pe(c, US) ? 1 : -1,
                        h = D(c, g),
                        k = Ld(h, !0, !!(id(c.R) & 18));
                    null != k && k !== h && Xd(c, g, k);
                    var l = null == k ? ed() : k;
                    cd(ad);
                    var m = l.O;
                    if (null == m || Zc(m)) var n = m;
                    else {
                        if ("string" === typeof m)
                            if (Vc) {
                                a = m;
                                Xc.test(a) && (a = a.replace(Xc, Yc));
                                var p = atob(a);
                                var v = new Uint8Array(p.length);
                                for (a = 0; a < p.length; a++) v[a] = p.charCodeAt(a);
                                var u = v
                            } else u =
                                Mc(m);
                        else u = null;
                        n = u
                    }
                    var A = n;
                    e = (f = null == A ? A : l.O = A) ? new Uint8Array(f) : $c || ($c = new Uint8Array(0));
                    break;
                case 3:
                    e = Fe(c, 3 === pe(c, US) ? 3 : -1);
                    break;
                default:
                    throw Error("unexpected value " + d + "!");
            }
            var J = ze(c, 2) + 6048E5 < ok();
            return {
                Yb: e,
                Xb: J
            }
        } catch (Y) {
            return {
                Yb: null,
                Xb: !0
            }
        }
    }

    function YS(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };

    function aT(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }

    function bT(a) {
        var b = a.ha,
            c = a.ea,
            d = a.jb,
            e = a.slot,
            f, g, h, k, l, m, n, p;
        return La(function(v) {
            switch (v.j) {
                case 1:
                    return f = e.vars, g = wi(e.pubWin), h = aT(e), k = new UI({
                        J: g,
                        pubWin: e.pubWin,
                        F: f,
                        ha: b,
                        ea: c,
                        jb: d,
                        Y: h
                    }), k.G = Date.now(), Om(1, [k.F]), vm(1032, function() {
                        if (g && S(Ur)) {
                            var u = k.F;
                            TE(PE(), 32, !1) || (UE(PE(), 32, !0), bO(g, "sa" === u.google_loader_used ? 5 : 9))
                        }
                    }), v.B = 2, Ca(v, cT(k), 4);
                case 4:
                    Da(v);
                    break;
                case 2:
                    if (l = Ea(v), !ym(159, l)) throw l;
                case 3:
                    return vm(639, function() {
                        var u = k.F;
                        var A = k.J;
                        if (A && 1 === u.google_responsive_auto_format &&
                            !0 === u.google_full_width_responsive_allowed) {
                            var J;
                            (J = (J = A.document.getElementById(u.google_async_iframe_id + (S(wr) ? "_host" : ""))) ? ni(J, "INS", "adsbygoogle") : null) ? (u = new LI(A, J, u), u.j = B.setInterval($a(u.v, u), 500), u.v(), u = !0) : u = !1
                        } else u = !1;
                        return u
                    }), Am(k.pubWin, "affa", function(u) {
                        vm(1008, function() {
                            f.google_ad_client && g && !Ob() && dT(g, f, VO(u.config), k.l, G(b, 8))
                        }, eT)
                    }), f.google_ad_client && g && !Ob() && (null == (m = g) ? 0 : null == (n = m.location) ? 0 : null == (p = n.hash) ? 0 : p.match(/\bgoog_cpmi=([^&]*)/)) && dT(g, f, fT(), k.l,
                        G(b, 8)), v.return(k)
            }
        })
    }

    function eT(a) {
        a.e = "" + V(is)
    }

    function dT(a, b, c, d, e) {
        if (F(c, yh, 1) || S(ws)) {
            var f = om(fF);
            var g = b.google_page_url;
            g = "string" === typeof g ? g : "";
            var h = "on" === b.google_adtest,
                k = F(c, iH, 2);
            try {
                var l, m, n = null == a ? void 0 : null == (l = a.location) ? void 0 : null == (m = l.hash) ? void 0 : m.match(/\bgoog_cpmi=([^&]*)/);
                if (n) {
                    var p = decodeURIComponent(n[1]);
                    var v = Fh(p)
                } else v = null
            } catch (A) {
                v = null
            }
            if (!v)
                if (S($r)) {
                    var u;
                    v = null != (u = F(c, yh, 1)) ? u : null
                } else v = null;
            c = new XQ(v, g, !(null == k || !Ee(k, 6) || !(488 > hn(a)) && (null == k ? 0 : Ee(k, 7))), e, {
                Qg: S(Bs) ? V(yr) : V(gs),
                pd: 300,
                Dd: 2,
                Qc: 5,
                nb: -1
            }, new JQ({
                tb: S(Bs) ? V(Ar) : V(is),
                Pc: V(xr)
            }), h);
            WQ(a, f, c, b.google_ad_client, d)
        }
    }

    function fT() {
        var a = new UO;
        if (S(Zr)) {
            var b = new iH;
            b = He(b, 5, !0);
            b = He(b, 8, !0);
            te(a, 2, b)
        }
        return a
    }

    function cT(a) {
        if (/_sdo/.test(a.F.google_ad_format)) return r.Promise.resolve();
        BH(13);
        BH(11);
        var b = om(Ps).v(Hr.j, Hr.defaultValue);
        if (b.length) {
            var c = document;
            if (b.length && c.head) {
                b = y(b);
                for (var d = b.next(); !d.done; d = b.next())
                    if ((d = d.value) && c.head) {
                        var e = yi("META");
                        c.head.appendChild(e);
                        e.httpEquiv = "origin-trial";
                        e.content = d
                    }
            }
        }
        c = PE();
        (b = TE(c, 23, !1)) || UE(c, 23, !0);
        if (!b) {
            b = a.F.google_ad_client;
            d = a.ha;
            if (void 0 !== fe(d, iH, 13 === pe(d, nH) ? 13 : -1)) c = F(Ge(d, iH, 13, nH), WF, 2);
            else {
                var f, g;
                c = ic(null != (g = null == (f =
                    Ge(d, jH, 14, nH)) ? void 0 : Ce(f, 1)) ? g : [], [b]) ? F(F(Ge(d, jH, 14, nH), iH, 2), WF, 2) : new WF
            }
            f = new XF(a.pubWin, a.F.google_ad_client, c, Ee(a.ha, 6));
            f.l = !0;
            g = F(f.A, jq, 1);
            if (f.l && (c = f.j, f.v && !bB(g) ? (b = new LF, b = E(b, 1, 1)) : b = null, b)) {
                b = df(b);
                try {
                    c.localStorage.setItem("google_auto_fc_cmp_setting", b)
                } catch (h) {}
            }
            g && dB(new cB(f.j, new tB(f.j, f.m), g, new Ex(f.j)))
        }
        f = !nj() && !Nb();
        return !f || f && !gT(a) ? hT(a) : r.Promise.resolve()
    }

    function iT(a, b, c) {
        c = void 0 === c ? !1 : c;
        b = hH(a.J, b);
        var d = pj() || Ys(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        var e = 0;
        try {
            var f = a.pubWin.top;
            e = $s(f.document, f).y
        } catch (g) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function gT(a) {
        return jT(a) || kT(a)
    }

    function jT(a) {
        var b = a.F;
        if (!b.google_pause_ad_requests) return !1;
        var c = B.setTimeout(function() {
                xm("abg:cmppar", {
                    client: a.F.google_ad_client,
                    url: a.F.google_page_url
                })
            }, 1E4),
            d = wm(450, function() {
                b.google_pause_ad_requests = !1;
                B.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                gT(a) || hT(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function kT(a) {
        var b = a.pubWin.document,
            c = lT();
        if (0 > c.hidden && 0 > c.visible) return !1;
        var d = a.Y,
            e = lJ(b);
        if (!e) return !1;
        if (!mJ(b)) return mT(a, c.visible, d);
        var f = 3 === kJ(b);
        if (iT(a, d) <= c.hidden && !f) return !1;
        var g = wm(332, function() {
            !mJ(b) && g && (Bf(b, e, g), mT(a, c.visible, d) || hT(a), g = null)
        });
        return I(b, e, g)
    }

    function lT() {
        var a = {
            hidden: 0,
            visible: 3
        };
        B.IntersectionObserver || (a.visible = -1);
        qi() && (a.visible *= 2);
        return a
    }

    function mT(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.F;
        if (!pn(d.google_reactive_ad_format) && (hI(d) || d.google_reactive_ads_config) || !at(c) || iT(a, c) <= b) return !1;
        var e = PE(),
            f = TE(e, 8, {});
        e = TE(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        var g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new r.Promise(function(h) {
            var k = new B.IntersectionObserver(function(l, m) {
                Xb(l, function(n) {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: 100 * b + "%"
            });
            a.H = k;
            k.observe(c)
        });
        e = new r.Promise(function(h) {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                function() {
                    h(void 0)
                })
        });
        t(r.Promise, "any").call(r.Promise, [f, e]).then(function() {
            vm(294, function() {
                hT(a)
            })
        });
        return !0
    }

    function hT(a) {
        vm(326, function() {
            if (1 === Mj(a.F)) {
                var c = S(Vr),
                    d = c || S(Tr),
                    e = a.pubWin;
                if (d && e === a.J) {
                    var f = new Im;
                    d = new Jm;
                    f.setCorrelator(aj(a.pubWin));
                    var g = CH(a.pubWin);
                    De(f, 5, g);
                    Ie(f, 2, 1);
                    f = te(d, 1, f);
                    g = new Gm;
                    g = He(g, 10, !0);
                    var h = S(Mr);
                    g = He(g, 8, h);
                    h = S(Nr);
                    g = He(g, 12, h);
                    h = S(Qr);
                    g = He(g, 7, h);
                    h = S(Pr);
                    g = He(g, 13, h);
                    te(f, 2, g);
                    e.google_rum_config = d.toJSON();
                    xi(e.document, Ee(a.ha, 9) && c ? a.ea.tg : a.ea.ug)
                } else vk(um)
            }
        });
        a.F.google_ad_channel = nT(a, a.F.google_ad_channel);
        a.F.google_tag_partner = oT(a, a.F.google_tag_partner);
        pT(a);
        qT(a);
        var b = a.F.google_start_time;
        "number" === typeof b && (Sm = b, a.F.google_start_time = null);
        fH(a);
        rT(a);
        XE() && ZF({
            win: a.pubWin,
            webPropertyCode: a.F.google_ad_client,
            Gb: a.ea.Gb
        });
        hI(a.F) && (dA() && (a.F.google_adtest = a.F.google_adtest || "on"), a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3);
        sT(a.J);
        if ("function" === typeof a.pubWin.document.browsingTopics && wH("browsing-topics", a.pubWin.document) || S(Br)) try {
            a.B = XS(a.pubWin)
        } catch (c) {
            ym(984, c)
        }
        return tT(a)
    }

    function rT(a) {
        if (a.J && (jI(a.J, a.ea.Ef), iI(a.J.location))) {
            var b = a.F.google_ad_client;
            var c = {};
            b = {
                enable_page_level_ads: (c.pltais = !0, c),
                google_ad_client: b
            };
            tI(a.J, b)
        }
    }

    function nT(a, b) {
        return (b ? [b] : []).concat(ME(a.F).ad_channels || []).join("+")
    }

    function oT(a, b) {
        return (b ? [b] : []).concat(ME(a.F).tag_partners || []).join("+")
    }

    function uT(a) {
        var b = yi("IFRAME");
        Bi(a, function(c, d) {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function vT(a, b, c) {
        return 9 === a.F.google_reactive_ad_format && ni(a.Y, null, "fsi_container") ? (a.Y.appendChild(b), r.Promise.resolve(b)) : rI(a.ea.Ne, 525, function(d) {
            a.Y.appendChild(b);
            d.createAdSlot(a.J, a.F, b, a.Y.parentElement, PF(c, a.pubWin));
            return b
        })
    }

    function wT(a, b, c) {
        function d(h) {
            h && a.m.push(function() {
                h.xa()
            })
        }
        OS(a.pubWin, He(hh(Ie(Ie(gh(new fh, eh(new dh, String(aj(a.pubWin)))), 4, 1), 2, 1), G(a.ha, 2)), 6, !0));
        var e = a.J;
        a.F.google_acr && a.F.google_acr(b);
        I(b, "load", function() {
            b && b.setAttribute("data-load-complete", !0);
            var h = e ? ME(e).enable_overlap_observer || !1 : !1;
            (a.F.ovlp || h) && e && e === a.pubWin && xT(e, a, a.Y, b)
        });
        yT(a, b);
        zT(a, b);
        !e || hI(a.F) && !vI(a.F) || (a.Y || xm("shadowroot_nullcheck", {
            "var": "sth_init",
            ctxSize: t(Object, "keys").call(Object, a).length,
            isExp: S(wr) ?
                1 : 0
        }, .05), d(new YJ(e, b, a.F)), d(new dJ(a, b)), d(e.IntersectionObserver ? null : new iJ(e, b, a.Y)));
        e && (d(new cJ(e, b, a.F)), a.m.push(JI(e, a.F)), om(FI).init(e), a.m.push(YI(e, a.Y, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.F.iaaso;
        if (null != c) {
            var f = a.Y,
                g = f.parentElement;
            (g && nt.test(g.className) ? g : f).setAttribute("data-auto-ad-size", c)
        }
        c = a.Y;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        AT(a)
    }

    function yT(a, b) {
        var c = a.pubWin,
            d = a.F.google_ad_client,
            e = WE(),
            f = null,
            g = Am(c, "pvt", function(h, k) {
                "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
            });
        a.m.push(g)
    }

    function BT(a, b) {
        var c = FH(a, "__gpi_opt_out", b.l);
        c && (c = rh(qh(ph(oh(c), 2147483647), "/"), b.pubWin.location.hostname), GH(a, "__gpi_opt_out", c, b.l))
    }

    function zT(a, b) {
        var c = Am(a.pubWin, "gpi-uoo", function(d, e) {
            if (e.source === b.contentWindow) {
                e = rh(qh(ph(oh(d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new EH(a.pubWin);
                GH(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) HH(f, "__gads", a.l), HH(f, "__gpi", a.l)
            }
        });
        a.m.push(c)
    }

    function AT(a) {
        var b = nj(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                var c = function(d) {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                I(a.pubWin, "message", wm(616, c));
                a.m.push(function() {
                    Bf(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function xT(a, b, c, d) {
        tR(new pR(a), c).then(function(e) {
            Om(8, [e]);
            return e
        }).then(function(e) {
            var f = c.parentElement;
            (f && nt.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(function(e) {
            var f = b.F.armr || "",
                g = e.executionTime || "",
                h = null == b.F.iaaso ? "" : Number(b.F.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = Zb(t(e, "entries"), function(J) {
                    return J.overlapType + ":" + J.overlapDepth + ":" + J.overlapDetectionPoint
                }),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p = m * e.targetRect.width * e.targetRect.height,
                v = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                u = Oj(e.target),
                A = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            xm("ovlp", {
                adf: b.F.google_ad_dom_fingerprint,
                armr: f,
                client: b.F.google_ad_client,
                eid: CH(b.F),
                et: g,
                fwrattr: b.F.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.F.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.F.google_responsive_auto_format,
                roa: p,
                slot: b.F.google_ad_slot,
                sp: v,
                tgt: u,
                tr: A,
                url: b.F.google_page_url,
                vp: e,
                pvc: aj(a)
            }, 1)
        }).catch(function(e) {
            Om(8, ["Error:", e.message, c]);
            xm("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function CT(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function DT(a, b, c, d) {
        var e = a.F,
            f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height,
            k = wI(e),
            l = {
                id: f,
                name: f
            };
        l.style = k ? ["width:" + g + "px !IMPORTANT", "height:" + h + "px !IMPORTANT"].join(";") : "left:0;position:absolute;top:0;border:0;width:" + (g + "px;height:") + (h + "px;");
        var m = Pi();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var p = m.indexOf("?");
                if (0 > p || p > n) {
                    p = n;
                    var v = ""
                } else v =
                    m.substring(p + 1, n);
                m = [m.slice(0, p), v, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            l.sandbox = Oi().join(" ")
        }
        S(Zq) && !1 === e.google_video_play_muted && CT("autoplay", l);
        n = b;
        b = ET(b);
        p = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (p = ""; 0 < m--;) p += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = p;
            b = zm(b, m);
            zm(n, m)
        } else b = p;
        e.dash && (l.srcdoc = e.dash);
        n = S(iO() ? Hs : Gs);
        p = S(Js);
        n = jO(a.pubWin, n, p);
        p = e.google_trust_token_additional_signing_data;
        n && kO(n) && (n = mO(n, p)) && (l.trustToken = JSON.stringify(n));
        var u;
        (null == (u = a.pubWin.document.featurePolicy) ? 0 : (ba = u.features(), t(ba, "includes")).call(ba, "attribution-reporting")) && CT("attribution-reporting", l);
        S(Ir) && (u = a.pubWin, void 0 !== u.credentialless && (S(Jr) || u.crossOriginIsolated) && (l.credentialless = "true"));
        if (k) {
            l.src = b;
            var A = uT(l);
            A = vT(a, A, d)
        } else {
            d = {};
            d.dtd = XI((new Date).getTime(), Sm);
            d = Hj(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = uT(l);
            d && a.m.push(rj(a.pubWin, l));
            d = (d = a.F.google_shadow_mode) && "string" === typeof d && "open" === d ? "open" : "closed";
            a: {
                k = a.Y;
                try {
                    if (S(wr) && k) {
                        A = k.attachShadow({
                            mode: d
                        });
                        break a
                    }
                } catch (J) {}
                A = void 0
            }
            a.Y.style.visibility = "visible";
            for (A = A || a.Y; d = A.firstChild;) A.removeChild(d);
            A.appendChild(l);
            A = r.Promise.resolve(l)
        }
        c && (c = a.ea.Rg, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            Ma: m,
            rg: a.pubWin,
            nf: f,
            Sk: "google_expandable_ad_slot" +
                Mj(e),
            Yf: c.toString(),
            ed: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Ma || !e.ed ? void 0 : Am(e.ed, "ct", ab(Em, e, c)), e && a.m.push(e));
        return A
    }

    function ET(a) {
        var b = V(C("Edge") ? mr : rr);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            var d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            xm("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }

    function FT(a) {
        var b, c, d, e, f, g, h, k, l, m, n, p, v, u, A, J, Y, aa, P, Q, U, ca, Z, fa;
        return La(function(M) {
            switch (M.j) {
                case 1:
                    b = a;
                    c = b.F;
                    d = b.pubWin;
                    e = a.l;
                    je(e, 5) && BT(new EH(a.pubWin), a);
                    f = PF(e, a.pubWin);
                    if (!je(e, 5)) return xm("afc_noc_req", {}, V(Xq)), M.return(r.Promise.resolve());
                    je(e, 5) && LH(e, a.pubWin, a.F.google_ad_client);
                    if (g = a.F.google_reactive_ads_config) qI(a.J, g), h = PF(e), xI(g, a, h), k = g.page_level_pubvars, Sa(k) && Jf(a.F, k);
                    if (!je(e, 5)) {
                        M.j = 2;
                        break
                    }
                    return Ca(M, GT(), 2);
                case 2:
                    S(Br) && a.B && je(e, 5) && !TE(PE(), 34, !1) &&
                        (UE(PE(), 34, !0), l = a.B.then(function(ya) {
                            ya({
                                message: "goog:spam:client_age",
                                pvsid: aj(a.pubWin)
                            })
                        }), tm.Aa(1069, l));
                    if (!S(Fr) || !a.B) {
                        M.j = 4;
                        break
                    }
                    if (!HT(a)) {
                        a.v = 5;
                        M.j = 4;
                        break
                    }
                    a.v = 1;
                    m = PF(a.l, a.pubWin);
                    n = a.B.then(function(ya) {
                        return La(function(Va) {
                            return Ca(Va, ZS(ya, a.pubWin, m).then(function(Cb) {
                                a.v = Cb
                            }), 0)
                        })
                    });
                    p = V(Er);
                    return 0 < p ? Ca(M, r.Promise.race([n, ej(p)]), 4) : Ca(M, n, 4);
                case 4:
                    if (lO(a.pubWin, sH(), G(a.ha, 8))) {
                        M.j = 10;
                        break
                    }
                    v = V(Ns);
                    u = d.google_trust_token_operation_promise;
                    if (!(0 < v && u)) {
                        M.j = 10;
                        break
                    }
                    return Ca(M,
                        r.Promise.race([u, new r.Promise(function(ya) {
                            return void setTimeout(function() {
                                ya(void 0)
                            }, v)
                        })]), 10);
                case 10:
                    A = "";
                    wI(c) ? (J = a.ea.Sg.toString(), A = J + "#" + yO(c), FO(c, PE()), IT(c)) : (5 === c.google_pgb_reactive && c.google_reactive_ads_config || !gI(c) || fI(d, c, f)) && IT(c) && (A = vO(a, e));
                    Om(2, [c, A]);
                    if (!A) return M.return(r.Promise.resolve());
                    c.google_async_iframe_id || Lj(d);
                    Y = Mj(c);
                    aa = a.pubWin === a.J ? "a!" + Y.toString(36) : Y.toString(36) + "." + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 *
                        Math.random()) ^ gb()).toString(36));
                    P = 0 < iT(a, a.Y, !0);
                    Q = {};
                    U = (Q.ifi = Y, Q.uci = aa, Q);
                    P && (ca = PE(), U.btvi = TE(ca, 21, 1), VE(ca, 21));
                    A = Hj(U, A);
                    Z = DT(a, A, 0 === a.A, e);
                    A = ET(A);
                    a.F.rpe && SJ(a.pubWin, a.Y, {
                        height: a.F.google_ad_height,
                        Ld: "force",
                        Vd: !0,
                        Ag: !0,
                        Mc: a.F.google_ad_client
                    });
                    return Ca(M, Z, 13);
                case 13:
                    fa = M.v;
                    try {
                        wT(a, fa, aa)
                    } catch (ya) {
                        ym(223, ya)
                    }
                    M.j = 0
            }
        })
    }

    function GT() {
        return (Qb() ? 0 <= Jb(11) : Pb() && 0 <= Jb(65)) ? new r.Promise(function(a) {
            YN(a.bind(null, !0))
        }) : (YN(null), r.Promise.resolve(!1))
    }

    function JT(a) {
        var b = S(Xr) ? new iR(a) : new GS(a);
        return new r.Promise(function(c) {
            b.B(function(d) {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function KT(a) {
        var b = void 0 === b ? B.top : b;
        b = Qi(b, "googlefcPresent");
        var c = void 0 === c ? B : c;
        c.googlefc && !b && xm("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function LT(a, b) {
        var c = b.Ig;
        b = b.uspString;
        c ? VI(a, c) : TF(a, !0);
        b && E(a, 1, b)
    }

    function MT(a) {
        var b = V(Uq);
        if (0 >= b) return null;
        var c = ok(),
            d = FS(a.pubWin);
        if (!d) return null;
        a.C = "0";
        return r.Promise.race([d, ej(b, "0")]).then(function(e) {
            xm("adsense_paw", {
                time: ok() - c
            });
            (null == e ? void 0 : e.length) > V(Tq) ? ym(809, Error("ML:" + e.length)) : a.C = e
        }).catch(function(e) {
            ym(809, e)
        })
    }

    function NT(a) {
        var b = ok();
        return r.Promise.race([vm(832, function() {
            return RS(a)
        }), ej(200)]).then(function(c) {
            var d, e = null != (d = null == c ? void 0 : c.status) ? d : 100;
            xm("afc_etu", {
                etus: e,
                sig: ok() - b,
                tms: 200
            });
            return null == c ? void 0 : c.Eb
        })
    }

    function OT(a) {
        var b = V(Yq);
        return r.Promise.race([wm(779, function() {
            var c = S(iO() ? Hs : Gs),
                d = S(Js);
            return sO(new gO(a, c, d))
        })(), ej(b)])
    }

    function PT(a) {
        var b, c, d, e, f, g, h, k;
        return La(function(l) {
            switch (l.j) {
                case 1:
                    return b = MT(a), c = vm(868, function() {
                        return NT(a.pubWin)
                    }), VN(G(a.ha, 8)), QG(a.pubWin), KT(a.F.google_ad_client), d = S(Wr) ? new oR(a.pubWin) : new LS(a.pubWin), Ca(l, d.l() ? d.G("loaded") : r.Promise.resolve(null), 2);
                case 2:
                    return a.l = new SF, e = [WI(a), JT(a.pubWin)], Ca(l, r.Promise.all(e), 3);
                case 3:
                    f = l.v;
                    LT(a.l, {
                        Ig: f[0],
                        uspString: f[1]
                    });
                    if (!lO(a.pubWin, sH(), G(a.ha, 8))) {
                        l.j = 4;
                        break
                    }
                    g = a.l;
                    h = OT(!!je(g, 5));
                    if (S(Ms)) {
                        tm.Aa(962, h);
                        l.j = 4;
                        break
                    }
                    return Ca(l,
                        h, 4);
                case 4:
                    return Ca(l, b, 7);
                case 7:
                    return k = a, Ca(l, c, 8);
                case 8:
                    return k.Eb = l.v || "", Ca(l, FT(a), 0)
            }
        })
    }

    function HT(a) {
        var b = a.l;
        a = a.F;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!je(b, 5) && !je(b, 6) && !YE() && !je(b, 9)
    }

    function tT(a) {
        var b = a.pubWin.document,
            c = a.F,
            d = c.google_ad_width,
            e = c.google_ad_height,
            f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2;
            c = navigator;
            var g = c.userAgent,
                h = c.platform,
                k = c.product;
            if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(h) && /^Opera/.test(g)) var l = !1;
            else if (/Win/.test(h) && /Trident/.test(g) && 11 <= b.documentMode) l = !0;
            else {
                var m = (/WebKit\/(\d+)/.exec(g) || [0, 0])[1],
                    n = (/rv:(\d+\.\d+)/.exec(g) || [0, 0])[1];
                l = !m && "Gecko" === k && 27 <= n && !/ rv: 1\.8([^.] |\.0) /.test(g) || 536 <= m ? !0 : !1
            }
            l || (f |= 4);
            dt(a.pubWin, d, e) && (f |= 2)
        } catch (v) {
            f |= 8
        }
        a.A = f;
        0 === a.A || (a.F.google_allow_expandable_ads = !1);
        fj(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === kJ(a.pubWin.document) && (a.j |= 32);
        if (b = a.J) b = a.J, b = !(nn(b).scrollWidth <= hn(b));
        b && (a.j |= 1024);
        var p;
        if (null == (p = a.pubWin.Prototype) ? 0 : p.Version) a.j |= 16384;
        a.F.google_loader_features_used && (a.j |= a.F.google_loader_features_used);
        a.D = 2;
        return PT(a)
    }

    function IT(a) {
        var b = PE(),
            c = a.google_ad_section;
        hI(a) && VE(b, 15);
        if (Rj(a)) {
            if (100 < VE(b, 5)) return !1
        } else if (100 < VE(b, 6) - TE(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function pT(a) {
        var b = a.J;
        if (b && !ME(b).ads_density_stats_processed && !nj(b) && (ME(b).ads_density_stats_processed = !0, S(sr) || .01 > Ai())) {
            var c = function() {
                if (b) {
                    var d = JD(LD(b), a.F.google_ad_client, b.location.hostname, CH(a.F).split(","));
                    xm("ama_stats", d, 1)
                }
            };
            dj(b, function() {
                B.setTimeout(c, 1E3)
            })
        }
    }

    function sT(a) {
        a && !ME(a).host_pinged_back && (ME(a).host_pinged_back = !0, xm("abg_host", {
            host: a.location.host
        }, .01))
    }

    function qT(a) {
        var b = a.pubWin;
        if (b && !ME(b).menu_analytics_processed && (ME(b).menu_analytics_processed = !0, S(or))) {
            var c = function() {
                var d = "function" !== typeof b.navigator.sendBeacon ? null : new kG(b);
                if (null === d) var e = null;
                else e = new hG(b), d = new gG(d, a.F.google_ad_client, b.location.hostname), e = new $F(e, d);
                if (null != e) {
                    d = e.j;
                    var f = t(Object, "assign").call(Object, {}, {
                        typ: "pv"
                    }, bG(d));
                    cG(d.ba, f);
                    aG(e);
                    try {
                        var g = iG(e.l);
                        e.Ad(g);
                        eG(e, g);
                        fG(e, g)
                    } catch (h) {
                        dG(e.j, "instrumentMenu " + h)
                    }
                }
            };
            dj(b, function() {
                B.setTimeout(c,
                    1E3)
            })
        }
    };
    (function(a, b, c) {
        vm(843, function() {
            if (!B.google_sa_impl) {
                var d = aR(a);
                YQ(G(d, 2));
                tH(Ee(d, 6));
                Om(16, [3, d.toJSON()]);
                var e = ZQ({
                        Cf: b,
                        Gg: G(d, 2)
                    }),
                    f = c(e, d);
                B.google_sa_impl = function(h) {
                    return bT({
                        ha: d,
                        ea: f,
                        jb: e,
                        slot: h
                    })
                };
                zH();
                var g;
                null == (g = B.google_process_slots) || g.call(B);
                g = (B.Prototype || {}).Version;
                null != g && xm("prtpjs", {
                    version: g
                })
            }
        })
    })($Q, "m202302130101", function(a, b) {
        var c = 2012 < xe(b, 1) ? "_fy" + xe(b, 1) : "",
            d = G(b, 3);
        b = G(b, 2);
        return {
            ug: L(MI, b, d, c),
            tg: L(NI, b, d, c),
            Ne: L(OI, a, c),
            Ef: L(PI, a, c),
            Rg: L(QI, b, d),
            Sg: L(RI,
                b, d),
            Rb: L(SI, a, c),
            Gb: L(TI, a, c)
        }
    });
}).call(this, "[2021,\"r20230221\",\"r20110914\",null,null,null,null,\".google.com.tr\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759927,44777877,44773810,44759842,44759876]]");