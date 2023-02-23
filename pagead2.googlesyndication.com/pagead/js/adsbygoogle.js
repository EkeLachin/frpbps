(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
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
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        q = {},
        ha = {};

    function t(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function u(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in q ? f = q : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(q, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, q.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[t(q.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a) {
        return a.raw = a
    }

    function v(a) {
        var b = "undefined" != typeof q.Symbol && t(q.Symbol, "iterator") && a[t(q.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ka(a) {
        if (!(a instanceof Array)) {
            a = v(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function la(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ma = fa && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) la(d, e) && (a[e] = d[e])
        }
        return a
    };
    u("Object.assign", function(a) {
        return a || ma
    }, "es6");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (fa && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function w(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.lc = b.prototype
    }

    function ta() {
        this.l = !1;
        this.i = null;
        this.u = void 0;
        this.h = 1;
        this.A = 0;
        this.j = null
    }

    function ua(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    }
    ta.prototype.m = function(a) {
        this.u = a
    };

    function va(a, b) {
        a.j = {
            exception: b,
            tb: !0
        };
        a.h = a.A
    }
    ta.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.h = this.A
    };

    function wa(a, b, c) {
        a.h = c;
        return {
            value: b
        }
    }

    function xa(a) {
        this.h = new ta;
        this.i = a
    }

    function ya(a, b) {
        ua(a.h);
        var c = a.h.i;
        if (c) return za(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.h.return);
        a.h.return(b);
        return Aa(a)
    }

    function za(a, b, c, d) {
        try {
            var e = b.call(a.h.i, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.h.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.h.i = null, va(a.h, g), Aa(a)
        }
        a.h.i = null;
        d.call(a.h, f);
        return Aa(a)
    }

    function Aa(a) {
        for (; a.h.h;) try {
            var b = a.i(a.h);
            if (b) return a.h.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.h.u = void 0, va(a.h, c)
        }
        a.h.l = !1;
        if (a.h.j) {
            b = a.h.j;
            a.h.j = null;
            if (b.tb) throw b.exception;
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

    function Ba(a) {
        this.next = function(b) {
            ua(a.h);
            a.h.i ? b = za(a, a.h.i.next, b, a.h.m) : (a.h.m(b), b = Aa(a));
            return b
        };
        this.throw = function(b) {
            ua(a.h);
            a.h.i ? b = za(a, a.h.i["throw"], b, a.h.m) : (va(a.h, b), b = Aa(a));
            return b
        };
        this.return = function(b) {
            return ya(a, b)
        };
        this[t(q.Symbol, "iterator")] = function() {
            return this
        }
    }

    function Ca(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new q.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : q.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function Da(a) {
        return Ca(new Ba(new xa(a)))
    }

    function Ea() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    u("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.u = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.N),
                reject: g(this.m)
            }
        };
        b.prototype.N = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.Z(g);
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
                h ? this.M(g) : this.A(g)
            }
        };
        b.prototype.M = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.na(h, g) : this.A(g)
        };
        b.prototype.m = function(g) {
            this.B(2, g)
        };
        b.prototype.A = function(g) {
            this.B(1, g)
        };
        b.prototype.B = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.O();
            this.C()
        };
        b.prototype.O = function() {
            var g = this;
            e(function() {
                if (g.I()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.I =
            function() {
                if (this.u) return !1;
                var g = ea.CustomEvent,
                    h = ea.Event,
                    k = ea.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.C = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.Z = function(g) {
            var h = this.l();
            g.pa(h.resolve, h.reject)
        };
        b.prototype.na = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(r, y) {
                return "function" == typeof r ? function(F) {
                    try {
                        l(r(F))
                    } catch (z) {
                        m(z)
                    }
                } : y
            }
            var l, m, p = new b(function(r, y) {
                l = r;
                m = y
            });
            this.pa(k(g, l), k(h, m));
            return p
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.pa = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.u = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = v(g), m = l.next(); !m.done; m = l.next()) d(m.value).pa(h, k)
            })
        };
        b.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function p(F) {
                    return function(z) {
                        r[F] = z;
                        y--;
                        0 == y && l(r)
                    }
                }
                var r = [],
                    y = 0;
                do r.push(void 0), y++, d(k.value).pa(p(r.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    u("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    u("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = v(g);
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
            if (!la(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!la(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && la(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && la(g, e) && la(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && la(g, e) && la(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    u("Map", function(a) {
        function b() {
            var h = {};
            return h.V = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ia(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.V;
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
            var m = h.i[l];
            if (m && la(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var p = m[h];
                    if (k !== k && p.key !== p.key || k === p.key) return {
                        id: l,
                        list: m,
                        index: h,
                        D: p
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                D: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = v(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = new q.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.D ? l.D.value = k : (l.D = {
                next: this.h,
                V: this.h.V,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.D), this.h.V.next = l.D, this.h.V = l.D, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.D && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.D.V.next = h.D.next, h.D.next.V = h.D.V, h.D.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.V = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).D
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).D) && h.value
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
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[t(q.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");
    u("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");

    function Fa(a, b) {
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
        e[t(q.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Fa(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Fa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Array.prototype.fill", function(a) {
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

    function Ga(a) {
        return a ? a : t(Array.prototype, "fill")
    }
    u("Int8Array.prototype.fill", Ga, "es6");
    u("Uint8Array.prototype.fill", Ga, "es6");
    u("Uint8ClampedArray.prototype.fill", Ga, "es6");
    u("Int16Array.prototype.fill", Ga, "es6");
    u("Uint16Array.prototype.fill", Ga, "es6");
    u("Int32Array.prototype.fill", Ga, "es6");
    u("Uint32Array.prototype.fill", Ga, "es6");
    u("Float32Array.prototype.fill", Ga, "es6");
    u("Float64Array.prototype.fill", Ga, "es6");
    u("Set", function(a) {
        function b(c) {
            this.h = new q.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return t(this.h, "values").call(this.h)
        };
        b.prototype.keys = t(b.prototype,
            "values");
        b.prototype[t(q.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");

    function Ha(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ha(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    u("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ha(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    u("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    u("Array.prototype.includes", function(a) {
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
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ha(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    u("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ha(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? t(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    u("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return q.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return q.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function Ia(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Ja(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ka(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function La(a) {
        return Object.prototype.hasOwnProperty.call(a, Ma) && a[Ma] || (a[Ma] = ++Na)
    }
    var Ma = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Na = 0;

    function Oa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Pa(a, b, c) {
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

    function Qa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Qa = Oa : Qa = Pa;
        return Qa.apply(null, arguments)
    }

    function Ra(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Sa(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ta(a) {
        return a
    };
    var Ua = (new Date).getTime();

    function Va(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Wa(a, b) {
        var c = 0;
        a = Va(String(a)).split(".");
        b = Va(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Xa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Xa(0 == f[2].length, 0 == g[2].length) || Xa(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function Xa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Ya() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function A(a) {
        return -1 != Ya().indexOf(a)
    };

    function Za() {
        return A("Trident") || A("MSIE")
    }

    function $a() {
        return (A("Chrome") || A("CriOS")) && !A("Edge") || A("Silk")
    }

    function ab(a) {
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

    function bb() {
        var a = Ya();
        if (Za()) {
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
        a = ab(b);
        return A("Opera") ? a(["Version", "Opera"]) :
            A("Edge") ? a(["Edge"]) : A("Edg/") ? a(["Edg"]) : A("Silk") ? a(["Silk"]) : $a() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function cb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function db(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function eb(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function fb(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function gb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function hb(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function ib(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function jb(a, b) {
        return 0 <= cb(a, b)
    }

    function kb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function lb(a) {
        lb[" "](a);
        return a
    }
    lb[" "] = function() {};
    var mb = Za();
    !A("Android") || $a();
    $a();
    !A("Safari") || $a();
    var nb = {},
        ob = null;

    function pb(a) {
        var b = [];
        qb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function qb(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = ob[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        rb();
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

    function rb() {
        if (!ob) {
            ob = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                nb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === ob[f] && (ob[f] = e)
                }
            }
        }
    };
    var sb = "undefined" !== typeof Uint8Array,
        tb = !mb && "function" === typeof x.btoa;
    var ub = "function" === typeof q.Symbol && "symbol" === typeof(0, q.Symbol)() ? (0, q.Symbol)() : void 0;

    function vb(a, b) {
        if (ub) return a[ub] |= b;
        if (void 0 !== a.P) return a.P |= b;
        Object.defineProperties(a, {
            P: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function wb(a, b) {
        var c = B(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), xb(a, c | b));
        return a
    }

    function yb(a, b) {
        ub ? a[ub] && (a[ub] &= ~b) : void 0 !== a.P && (a.P &= ~b)
    }

    function B(a) {
        var b;
        ub ? b = a[ub] : b = a.P;
        return null == b ? 0 : b
    }

    function xb(a, b) {
        ub ? a[ub] = b : void 0 !== a.P ? a.P = b : Object.defineProperties(a, {
            P: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function zb(a) {
        vb(a, 1);
        return a
    }

    function Ab(a) {
        return !!(B(a) & 2)
    }

    function Bb(a) {
        vb(a, 16);
        return a
    }

    function Cb(a, b) {
        xb(b, (a | 0) & -51)
    }

    function Db(a, b) {
        xb(b, (a | 18) & -41)
    };
    var Eb = {};

    function Fb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Gb, Hb, Ib = [];
    xb(Ib, 23);
    Hb = Object.freeze(Ib);

    function Jb(a) {
        if (Ab(a.v)) throw Error("Cannot mutate an immutable Message");
    }

    function Kb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Fb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };

    function Lb(a) {
        var b = a.i + a.aa;
        return a.K || (a.K = a.v[b] = {})
    }

    function C(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.K ? a.K[b] : void 0 : c && a.K && (c = a.K[b], null != c) ? c : a.v[b + a.aa]
    }

    function D(a, b, c, d) {
        Jb(a);
        return Mb(a, b, c, d)
    }

    function Mb(a, b, c, d) {
        a.j && (a.j = void 0);
        if (b >= a.i || d) return Lb(a)[b] = c, a;
        a.v[b + a.aa] = c;
        (c = a.K) && b in c && delete c[b];
        return a
    }

    function Nb(a, b, c) {
        return void 0 !== Ob(a, b, Pb(a, Qb, c))
    }

    function Rb(a, b, c, d, e) {
        var f = C(a, b, d);
        Array.isArray(f) || (f = Hb);
        var g = B(f);
        g & 1 || zb(f);
        if (e) g & 2 || vb(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && yb(f, 16) : (f = zb(Array.prototype.slice.call(f)), Mb(a, b, f, d))
        }
        return f
    }

    function Sb(a, b, c) {
        return Rb(a, b, 0, void 0 === c ? !1 : c, Ab(a.v))
    }

    function Tb(a, b) {
        a = C(a, b);
        return null == a ? a : !!a
    }

    function Ub(a, b) {
        var c = Ab(a.v),
            d = Rb(a, b, 1, !1, c),
            e = B(d);
        if (!(e & 4)) {
            Object.isFrozen(d) && (d = zb(d.slice()), Mb(a, b, d, !1));
            for (var f = 0, g = 0; f < d.length; f++) {
                var h = d[f];
                null != h && (d[g++] = h)
            }
            g < f && (d.length = g);
            vb(d, 5);
            c && (vb(d, 2), Object.freeze(d))
        }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), vb(d, 5), Vb(a, b, d, !1));
        return d
    }

    function Vb(a, b, c, d) {
        c = null == c ? Hb : wb(c, 1);
        return D(a, b, c, d)
    }

    function Wb(a, b, c, d) {
        Jb(a);
        c !== d ? Mb(a, b, c) : Mb(a, b, void 0, !1);
        return a
    }

    function Xb(a, b, c, d) {
        Jb(a);
        (c = Yb(a, c)) && c !== b && null != d && Mb(a, c, void 0, !1);
        return Mb(a, b, d)
    }

    function Pb(a, b, c) {
        return Yb(a, b) === c ? c : -1
    }

    function Yb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != C(a, e) && (0 !== c && Mb(a, c, void 0, !1), c = e)
        }
        return c
    }

    function Ob(a, b, c, d) {
        var e = C(a, c, d);
        var f = !1;
        var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.za !== Eb ? f ? new b(e) : void 0 : e;
        g !== e && null != g && (Mb(a, c, g, d), vb(g.v, B(a.v) & 18));
        return g
    }

    function E(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Ob(a, b, c, d);
        if (null == b) return b;
        if (!Ab(a.v)) {
            var e = Zb(b);
            e !== b && (b = e, Mb(a, c, b, d))
        }
        return b
    }

    function $b(a, b, c, d, e) {
        a.h || (a.h = {});
        var f = a.h[c],
            g = Rb(a, c, 3, void 0, e);
        if (!f) {
            var h = g;
            f = [];
            var k = !!(B(a.v) & 16);
            g = Ab(h);
            var l = h;
            !e && g && (h = Array.prototype.slice.call(h));
            for (var m = g, p = 0; p < h.length; p++) {
                var r = h[p];
                var y = b,
                    F = !1;
                F = void 0 === F ? !1 : F;
                r = Array.isArray(r) ? new y(r) : F ? new y : void 0;
                if (void 0 !== r) {
                    y = r.v;
                    var z = F = B(y);
                    g && (z |= 2);
                    k && (z |= 16);
                    z != F && xb(y, z);
                    y = z;
                    m = m || !!(2 & y);
                    f.push(r)
                }
            }
            a.h[c] = f;
            k = B(h);
            b = k | 33;
            b = m ? b & -9 : b | 8;
            k != b && (m = h, Object.isFrozen(m) && (m = Array.prototype.slice.call(m)), xb(m, b), h = m);
            l !== h &&
                Mb(a, c, h);
            (e || d && g) && vb(f, 2);
            d && Object.freeze(f);
            return f
        }
        e || (e = Object.isFrozen(f), d && !e ? Object.freeze(f) : !d && e && (f = Array.prototype.slice.call(f), a.h[c] = f));
        return f
    }

    function G(a, b, c) {
        var d = Ab(a.v);
        b = $b(a, b, c, d, d);
        a = Rb(a, c, 3, void 0, d);
        if (!(d || B(a) & 8)) {
            for (d = 0; d < b.length; d++) {
                c = b[d];
                var e = Zb(c);
                c !== e && (b[d] = e, a[d] = e.v)
            }
            vb(a, 8)
        }
        return b
    }

    function ac(a, b, c) {
        Jb(a);
        null == c && (c = void 0);
        return Mb(a, b, c)
    }

    function bc(a, b, c, d) {
        Jb(a);
        null == d && (d = void 0);
        return Xb(a, b, c, d)
    }

    function cc(a, b, c, d) {
        Jb(a);
        var e = null == c ? Hb : zb([]);
        if (null != c) {
            for (var f = !!c.length, g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !Ab(h.v);
                e[g] = h.v
            }
            e = wb(e, (f ? 8 : 0) | 1);
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0);
        return Mb(a, b, e, d)
    }

    function dc(a, b) {
        return null == a ? b : a
    }

    function ec(a, b) {
        return dc(C(a, b), "")
    }

    function I(a, b, c) {
        return dc(Tb(a, b), void 0 === c ? !1 : c)
    }

    function fc(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = C(a, b);
        var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && Mb(a, b, e);
        return dc(e, c)
    }

    function J(a, b) {
        return dc(C(a, b), 0)
    }

    function gc(a, b, c, d) {
        return E(a, b, Pb(a, d, c))
    };
    var hc;

    function ic(a, b) {
        hc = b;
        a = new a(b);
        hc = void 0;
        return a
    };

    function jc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (B(a) & 128)) return a = Array.prototype.slice.call(a), Kb(a), a
                    } else if (sb && null != a && a instanceof Uint8Array) {
                    if (tb) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        rb();
                        b = nb[b];
                        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                            var g =
                                a[e],
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
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function kc(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = lc(a, b, c, void 0 !== d);
            else if (Fb(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = kc(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function lc(a, b, c, d) {
        var e = B(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = kc(a[f], b, c, d);
        c(e, a);
        return a
    }

    function mc(a) {
        return a.za === Eb ? a.toJSON() : jc(a)
    }

    function nc(a, b) {
        a & 128 && Kb(b)
    };

    function oc(a, b, c) {
        c = void 0 === c ? Db : c;
        if (null != a) {
            if (sb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = B(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return xb(a, d | 2), a;
                a = lc(a, oc, d & 4 ? Db : c, !0);
                b = B(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.za === Eb ? pc(a) : a
        }
    }

    function qc(a, b, c, d, e, f, g) {
        (a = a.h && a.h[c]) ? (d = B(a), d & 2 ? d = a : (f = fb(a, pc), Db(d, f), Object.freeze(f), d = f), cc(b, c, d, e)) : D(b, c, oc(d, f, g), e)
    }

    function pc(a) {
        if (Ab(a.v)) return a;
        a = rc(a, !0);
        vb(a.v, 2);
        return a
    }

    function rc(a, b) {
        var c = a.v,
            d = Bb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.K;
        if (e) {
            d.length = c.length;
            t(d, "fill").call(d, void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (B(c) & 128) && Kb(d);
        b = b || Ab(a.v) ? Db : Cb;
        d = ic(a.constructor, d);
        a.Ua && (d.Ua = a.Ua.slice());
        f = !!(B(c) & 16);
        for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++) qc(a, d, h - a.aa, c[h], !1, f, b);
        if (e)
            for (var k in e) qc(a, d, +k, e[k], !0, f, b);
        return d
    }

    function Zb(a) {
        if (!Ab(a.v)) return a;
        var b = rc(a, !1);
        b.j = a;
        return b
    };

    function K(a, b, c, d) {
        null == a && (a = hc);
        hc = void 0;
        var e = this.constructor.messageId,
            f = !1;
        if (null == a) {
            a = e ? [e] : [];
            var g = 48;
            var h = !0;
            d && (g |= 128);
            xb(a, g)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (e && e !== a[0]) throw Error();
            var k = g = vb(a, 0);
            if (h = 0 !== (16 & k))(f = 0 !== (32 & k)) || (k |= 32);
            if (d) {
                if (!(k & 128) && 0 < a.length) {
                    var l = a[a.length - 1];
                    if (Fb(l) && "g" in l) {
                        k |= 128;
                        delete l.g;
                        var m = !0,
                            p;
                        for (p in l) {
                            m = !1;
                            break
                        }
                        m && a.pop()
                    } else throw Error();
                }
            } else if (128 & k) throw Error();
            g !== k && xb(a, k)
        }
        this.aa = e ? 0 : -1;
        this.h = void 0;
        this.v =
            a;
        a: {
            g = this.v.length;e = g - 1;
            if (g && (g = this.v[e], Fb(g))) {
                this.K = g;
                this.i = e - this.aa;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, e + 1 - this.aa), this.K = void 0) : this.i = Number.MAX_VALUE
        }
        if (!d && this.K && "g" in this.K) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !f && !0;
            d = this.i;
            var r;
            for (h = 0; h < c.length; h++) f = c[h], f < d ? (f += this.aa, (e = a[f]) ? sc(e, b) : a[f] = Hb) : (r || (r = Lb(this)), (e = r[f]) ? sc(e, b) : r[f] = Hb)
        }
    }
    K.prototype.toJSON = function() {
        var a = this.v;
        return Gb ? a : lc(a, mc, nc)
    };

    function sc(a, b) {
        if (Array.isArray(a)) {
            var c = B(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && xb(a, c | d)
        }
    }
    K.prototype.za = Eb;

    function tc(a, b) {
        return jc(b)
    };

    function uc(a) {
        return null !== a && void 0 !== a
    }
    var vc = void 0;

    function wc(a, b) {
        var c = vc;
        vc = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function xc(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = ic(a, Bb(b))
            }
            return b
        }
    };

    function yc(a) {
        K.call(this, a)
    }
    w(yc, K);

    function zc(a) {
        K.call(this, a, -1, Ac)
    }
    w(zc, K);
    var Ac = [2, 3];

    function Bc(a, b) {
        this.i = a === Cc && b || "";
        this.h = Dc
    }
    var Dc = {},
        Cc = {};

    function Ec(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Fc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Gc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Hc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Ic(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function Jc(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Kc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Lc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Mc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Nc;

    function Oc() {
        if (void 0 === Nc) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ta,
                        createScript: Ta,
                        createScriptURL: Ta
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                Nc = a
            } else Nc = a
        }
        return Nc
    };
    var Pc = {};

    function Qc(a, b) {
        this.h = b === Pc ? a : ""
    }
    Qc.prototype.toString = function() {
        return this.h.toString()
    };

    function Sc(a, b) {
        this.h = b === Tc ? a : ""
    }
    Sc.prototype.toString = function() {
        return this.h + ""
    };

    function Uc(a, b) {
        a = Vc.exec(Wc(a).toString());
        var c = a[3] || "";
        return Xc(a[1] + Yc("?", a[2] || "", b) + Yc("#", c))
    }

    function Wc(a) {
        return a instanceof Sc && a.constructor === Sc ? a.h : "type_error:TrustedResourceUrl"
    }
    var Vc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Tc = {};

    function Xc(a) {
        var b = Oc();
        a = b ? b.createScriptURL(a) : a;
        return new Sc(a, Tc)
    }

    function Yc(a, b, c) {
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

    function Zc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function $c(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!Ja(f) || Ka(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Ka(f)) {
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
                db(g ? kb(f) : f, d)
            }
        }
    }

    function ad(a) {
        this.h = a || x.document || document
    }
    n = ad.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    n.append = function(a, b) {
        $c(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function bd() {
        return !cd() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
    }

    function cd() {
        return A("iPad") || A("Android") && !A("Mobile") || A("Silk")
    };
    var dd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        ed = /#|$/;

    function fd(a, b) {
        var c = a.search(ed);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function gd(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    lb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function hd(a) {
        return gd(a.top) ? a.top : null
    }

    function id(a, b) {
        var c = jd("SCRIPT", a);
        c.src = Wc(b);
        var d, e;
        (d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function kd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function ld(a, b) {
        if (!md() && !nd()) {
            var c = Math.random();
            if (c < b) return c = od(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function od() {
        if (!q.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            q.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function pd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function qd(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var nd = Fc(function() {
            return gb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], rd) || 1E-4 > Math.random()
        }),
        md = Fc(function() {
            return rd("MSIE")
        });

    function rd(a) {
        return -1 != Ya().indexOf(a)
    }
    var sd = /^([0-9.]+)px$/,
        td = /^(-?[0-9.]{1,30})$/;

    function ud(a) {
        if (!td.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function L(a) {
        return (a = sd.exec(a)) ? +a[1] : null
    }

    function vd(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var wd = Fc(function() {
        return bd() ? 2 : cd() ? 1 : 0
    });

    function xd(a, b) {
        pd(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    var yd = [];

    function zd() {
        var a = yd;
        yd = [];
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function Ad(a, b) {
        if (a.length && b.head) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = jd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }

    function Bd(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function Cd(a) {
        var b = Dd;
        "complete" === b.readyState || "interactive" === b.readyState ? (yd.push(a), 1 == yd.length && (q.Promise ? q.Promise.resolve().then(zd) : window.setImmediate ? setImmediate(zd) : setTimeout(zd, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function jd(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };

    function Ed(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = jd("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = cb(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                Ic(e, "load", f);
                Ic(e, "error", f)
            };
            Hc(e, "load", f);
            Hc(e, "error", f)
        }
        d && (e.attributionsrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Fd(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        pd(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        Gd(d, c)
    }

    function Gd(a, b) {
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
        }), c.fetch(a, b)) : Ed(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var Hd = null;
    var Dd = document,
        M = window;
    var Id = null;

    function Jd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Id) {
                Id = !1;
                try {
                    var d = hd(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Id = !0);
                    x.localStorage.getItem("google_logging") && (Id = !0)
                } catch (e) {}
            }
            a = Id
        }
        a && (d = x.document, a = new Bc(Cc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Xc(a instanceof Bc && a.constructor === Bc && a.h === Dc ? a.i : "type_error:Const"), id(d, a))
    };

    function Kd(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }

    function Ld(a) {
        return (a = void 0 === a ? Kd() : a) ? gd(a.master) ? a.master : null : null
    };

    function Md(a) {
        var b = Ea.apply(1, arguments);
        if (0 === b.length) return Xc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Xc(c.join(""))
    };

    function Nd(a) {
        var b = void 0 === b ? 1 : b;
        a = Ld(Kd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function Od(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function Pd() {
        var a = void 0 === a ? M : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Qd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function Rd(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Sd(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Td = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Ud(a, b) {
        this.h = a;
        this.i = b
    }

    function Vd(a, b, c) {
        this.url = a;
        this.s = b;
        this.Va = !!c;
        this.depth = null
    };

    function Wd() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function Xd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Yd(a, b, c, d, e) {
        var f = [];
        pd(a, function(g, h) {
            (g = Zd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Zd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Zd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Yd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function $d(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = ae(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, p) {
            return m - p
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = Yd(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function ae(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function be() {
        this.h = Math.random()
    }

    function ce(a, b) {
        0 <= b && 1 >= b && (a.h = b)
    }

    function de(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof Wd) var f = c;
            else f = new Wd, pd(c, function(h, k) {
                var l = f,
                    m = l.l++;
                h = Xd(k, h);
                l.h.push(m);
                l.i[m] = h
            });
            var g = $d(f, "/pagead/gen_204?id=" + b + "&");
            g && Ed(x, g, !1, !1)
        } catch (h) {}
    };
    var ee = null;

    function fe() {
        if (null === ee) {
            ee = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ee = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return ee
    };

    function ge() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function he() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function ke(a, b) {
        var c = he() || ge();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var le = x.performance,
        me = !!(le && le.mark && le.measure && le.clearMarks),
        ne = Fc(function() {
            var a;
            if (a = me) a = fe(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function oe(a) {
        this.i = [];
        this.j = a || x;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.h = ne() || (null != b ? b : 1 > Math.random())
    }

    function pe(a) {
        a.h = !1;
        a.i != a.j.google_js_reporting_queue && (ne() && db(a.i, qe), a.i.length = 0)
    }

    function qe(a) {
        a && le && ne() && (le.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), le.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    oe.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new ke(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        le && ne() && le.mark(b);
        return a
    };
    oe.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (he() || ge()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            le && ne() && le.mark(b);
            !this.h || 2048 < this.i.length || this.i.push(a)
        }
    };

    function re(a, b) {
        this.m = a;
        this.h = null;
        this.l = this.L;
        this.i = void 0 === b ? null : b;
        this.j = !1
    }
    n = re.prototype;
    n.cb = function(a) {
        this.l = a
    };
    n.Ba = function(a) {
        this.h = a
    };
    n.Ca = function(a) {
        this.j = a
    };
    n.ua = function(a, b, c) {
        try {
            if (this.i && this.i.h) {
                var d = this.i.start(a.toString(), 3);
                var e = b();
                this.i.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                qe(d), b = this.l(a, new Rd(h, {
                    message: se(h)
                }), void 0, c)
            } catch (k) {
                this.L(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Ya = function(a, b) {
        var c = this;
        return function() {
            var d = Ea.apply(0, arguments);
            return c.ua(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.L = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Wd;
            f.h.push(1);
            f.i[1] = Xd("context", a);
            Sd(b) || (b = new Rd(b, {
                message: se(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = Xd("msg", g)
            }
            var h = b.meta || {};
            if (this.h) try {
                this.h(h)
            } catch (Rc) {}
            if (d) try {
                d(h)
            } catch (Rc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (gd(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Vd(l || "", k));
                try {
                    d = k.parent
                } catch (Rc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var p = b[m];
                    p.url || (p.url = k.location.ancestorOrigins[m - 1] || "", p.Va = !0)
                }
            var r = new Vd(x.location.href, x, !1);
            k = null;
            var y = b.length - 1;
            for (p = y; 0 <= p; --p) {
                var F = b[p];
                !k && Td.test(F.url) && (k = F);
                if (F.url && !F.Va) {
                    r = F;
                    break
                }
            }
            F = null;
            var z = b.length && b[y].url;
            0 != r.depth && z && (F = b[y]);
            var H = new Ud(r, F);
            if (H.i) {
                var X = H.i.url || "";
                f.h.push(4);
                f.i[4] = Xd("top", X)
            }
            var ie = {
                url: H.h.url || ""
            };
            if (H.h.url) {
                var je = H.h.url.match(dd),
                    Mg = je[1],
                    Ng = je[3],
                    Og = je[4];
                r = "";
                Mg && (r += Mg + ":");
                Ng && (r += "//", r += Ng, Og && (r += ":" + Og));
                var Pg = r
            } else Pg = "";
            ie = [ie, {
                url: Pg
            }];
            f.h.push(5);
            f.i[5] = ie;
            de(this.m, e, f, this.j, c)
        } catch (Rc) {
            try {
                de(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: se(Rc),
                    url: H && H.h.url
                }, this.j, c)
            } catch (fr) {}
        }
        return !0
    };
    n.Aa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.L(a, d instanceof Error ? d : Error(d), void 0, c.h || void 0)
        })
    };

    function se(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };

    function te(a) {
        return "string" === typeof a
    }

    function ue(a) {
        return void 0 === a
    };

    function ve(a) {
        K.call(this, a, -1, we)
    }
    w(ve, K);
    var we = [2, 8],
        xe = [3, 4, 5],
        ye = [6, 7];

    function ze(a) {
        return null != a ? !a : a
    }

    function Ae(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Be(a, b) {
        var c = G(a, ve, 2);
        if (!c.length) return Ce(a, b);
        a = J(a, 1);
        if (1 === a) return ze(Be(c[0], b));
        c = fb(c, function(d) {
            return function() {
                return Be(d, b)
            }
        });
        switch (a) {
            case 2:
                return Ae(c, !1);
            case 3:
                return Ae(c, !0)
        }
    }

    function Ce(a, b) {
        var c = Yb(a, xe);
        a: {
            switch (c) {
                case 3:
                    var d = J(a, Pb(a, xe, 3));
                    break a;
                case 4:
                    d = J(a, Pb(a, xe, 4));
                    break a;
                case 5:
                    d = J(a, Pb(a, xe, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ka(Ub(a, 8)))
            } catch (f) {
                return
            }
            b = J(a, 1);
            if (4 === b) return !!e;
            if (5 === b) return null != e;
            if (12 === b) a = ec(a, Pb(a, ye, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = fc(a, Pb(a, ye, 6));
                        break a;
                    case 5:
                        a = ec(a, Pb(a, ye, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Wa(String(e), a);
                if (null != e) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return te(a) && te(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Wa(String(e), a);
                    case 11:
                        return null != e && 1 === Wa(String(e), a)
                }
            }
        }
    }

    function De(a, b) {
        return !a || !(!b || !Be(a, b))
    };

    function Ee(a) {
        K.call(this, a, -1, Fe)
    }
    w(Ee, K);
    var Fe = [4];

    function Ge(a) {
        K.call(this, a)
    }
    w(Ge, K);

    function He(a) {
        K.call(this, a, -1, Ie)
    }
    w(He, K);
    var Je = xc(He),
        Ie = [5],
        Ke = [1, 2, 3, 6, 7];

    function Le(a) {
        K.call(this, a, -1, Me)
    }
    w(Le, K);
    var Me = [2];

    function Ne(a) {
        K.call(this, a)
    }
    w(Ne, K);

    function Oe(a) {
        var b = new Ne;
        return D(b, 1, a)
    };

    function Pe(a) {
        K.call(this, a)
    }
    w(Pe, K);
    Pe.prototype.getWidth = function() {
        return dc(C(this, 1), 0)
    };

    function Qe(a, b) {
        return Wb(a, 1, b, 0)
    }
    Pe.prototype.getHeight = function() {
        return dc(C(this, 2), 0)
    };

    function Re(a, b) {
        return Wb(a, 2, b, 0)
    };

    function Se(a) {
        K.call(this, a)
    }
    w(Se, K);

    function Te(a, b) {
        return ac(a, 1, b)
    }

    function Ue(a, b) {
        return ac(a, 2, b)
    }

    function Ve(a, b) {
        ac(a, 3, b)
    };

    function We(a) {
        K.call(this, a)
    }
    w(We, K);

    function Xe(a) {
        K.call(this, a)
    }
    w(Xe, K);

    function Ye(a, b) {
        return bc(a, 4, Ze, b)
    }
    var Ze = [4, 5, 6, 8, 9, 10];

    function $e(a) {
        K.call(this, a)
    }
    w($e, K);

    function af(a, b) {
        return Wb(a, 1, b, 0)
    }

    function bf(a, b) {
        return Wb(a, 2, b, 0)
    };

    function cf(a) {
        K.call(this, a)
    }
    w(cf, K);
    var df = [1, 2];

    function ef(a) {
        K.call(this, a, -1, ff)
    }
    w(ef, K);

    function gf(a, b) {
        return ac(a, 1, b)
    }

    function hf(a, b) {
        return cc(a, 2, b)
    }

    function jf(a, b) {
        return Vb(a, 4, b)
    }

    function kf(a, b) {
        return cc(a, 5, b)
    }

    function lf(a, b) {
        return Wb(a, 6, b, 0)
    }
    var ff = [2, 4, 5];

    function mf(a) {
        K.call(this, a, -1, nf)
    }
    w(mf, K);
    var nf = [5],
        of = [1, 2, 3, 4];

    function pf(a) {
        K.call(this, a, -1, qf)
    }
    w(pf, K);
    var qf = [2, 3];

    function rf(a) {
        K.call(this, a)
    }
    w(rf, K);
    rf.prototype.getTagSessionCorrelator = function() {
        return dc(C(this, 2), 0)
    };

    function sf(a) {
        var b = new rf;
        return bc(b, 4, tf, a)
    }
    var tf = [4, 5, 7];

    function uf(a) {
        a.bb.apply(a, ka(Ea.apply(1, arguments).map(function(b) {
            return {
                gb: 4,
                message: b
            }
        })))
    }

    function vf(a) {
        a.bb.apply(a, ka(Ea.apply(1, arguments).map(function(b) {
            return {
                gb: 7,
                message: b
            }
        })))
    };

    function wf(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.gb] = b.message.toJSON(), c)]
        })])
    };

    function xf(a, b) {
        if (q.globalThis.fetch) q.globalThis.fetch(a, {
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

    function N() {
        this.A = this.A;
        this.j = this.j
    }
    N.prototype.A = !1;

    function yf(a) {
        a.A || (a.A = !0, a.h())
    }

    function zf(a, b) {
        a.A ? b() : (a.j || (a.j = []), a.j.push(b))
    }
    N.prototype.h = function() {
        if (this.j)
            for (; this.j.length;) this.j.shift()()
    };

    function Af(a) {
        N.call(this);
        this.s = a;
        this.state = 0;
        this.callback = null
    }
    w(Af, N);

    function Bf(a) {
        a.s.document.visibilityState ? Cf(a, a.s.document, "visibilitychange", function(b) {
            "hidden" === a.s.document.visibilityState && Df(a, b);
            "visible" === a.s.document.visibilityState && (a.state = 0)
        }) : "onpagehide" in a.s ? (Cf(a, a.s, "pagehide", function(b) {
            Df(a, b)
        }), Cf(a, a.s, "pageshow", function() {
            a.state = 0
        })) : Cf(a, a.s, "beforeunload", function(b) {
            Df(a, b)
        })
    }

    function Ef(a, b) {
        a.callback || Bf(a);
        a.callback = b
    }

    function Df(a, b) {
        1 !== a.state && (a.state = 1, a.callback && a.callback(b))
    }

    function Cf(a, b, c, d) {
        Hc(b, c, d);
        zf(a, function() {
            return Ic(b, c, d)
        })
    };

    function Ff(a, b, c, d, e) {
        this.B = a;
        this.u = b;
        this.C = c;
        this.m = d;
        this.A = e;
        this.l = [];
        this.h = [];
        this.i = null
    }

    function Gf(a, b, c, d) {
        a.j || (a.j = new Af(b), Ef(a.j, function() {
            for (var e = v(a.l), f = e.next(); !f.done; f = e.next()) f = f.value, f();
            c()
        }));
        d && 1 !== a.j.state && a.l.push(d)
    }

    function Hf(a) {
        null !== a.i && (clearTimeout(a.i), a.i = null);
        if (a.h.length) {
            var b = wf(a.h);
            a.u(a.B + "?e=1", b);
            a.h = []
        }
    }
    Ff.prototype.bb = function() {
        var a = Ea.apply(0, arguments),
            b = this;
        this.A && 65536 <= wf(this.h.concat(a)).length && Hf(this);
        this.h.push.apply(this.h, ka(a));
        this.h.length >= this.m && Hf(this);
        this.h.length && null === this.i && (this.i = setTimeout(function() {
            Hf(b)
        }, this.C))
    };

    function If(a, b, c) {
        Gf(a, b, function() {
            Hf(a)
        }, c)
    }

    function Jf(a, b, c) {
        Ff.call(this, "https://pagead2.googlesyndication.com/pagead/ping", xf, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!q.globalThis.fetch)
    }
    w(Jf, Ff);

    function Kf(a, b, c) {
        var d = void 0 === d ? new Jf(b) : d;
        this.m = a;
        this.l = c;
        this.i = d;
        this.h = [];
        this.j = 0 < a && od() < 1 / a
    }

    function Lf(a, b, c, d, e, f) {
        if (a.j) {
            var g = bf(af(new $e, b), c);
            b = lf(hf(gf(kf(jf(new ef, d), e), g), a.h.slice()), f);
            b = sf(b);
            uf(a.i, Mf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                    return J(h, 1) === J(g, 1) && J(h, 2) === c
                })) a.h.push(g), 100 < a.h.length && a.h.shift()
        }
    }

    function Nf(a, b, c, d) {
        if (a.j && a.l) {
            var e = new pf;
            b = cc(e, 2, b);
            c = cc(b, 3, c);
            d && Wb(c, 1, d, 0);
            d = new rf;
            d = bc(d, 7, tf, c);
            uf(a.i, Mf(a, d))
        }
    }

    function Mf(a, b) {
        b = Wb(b, 1, Date.now(), 0);
        var c = Bd(window);
        b = Wb(b, 2, c, 0);
        return Wb(b, 6, a.m, 0)
    };

    function O(a) {
        var b = "ya";
        if (a.ya && a.hasOwnProperty(b)) return a.ya;
        b = new a;
        return a.ya = b
    };

    function Of() {
        var a = {};
        this.H = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var Pf = /^true$/.test("false");

    function Qf(a, b) {
        switch (b) {
            case 1:
                return J(a, Pb(a, Ke, 1));
            case 2:
                return J(a, Pb(a, Ke, 2));
            case 3:
                return J(a, Pb(a, Ke, 3));
            case 6:
                return J(a, Pb(a, Ke, 6));
            default:
                return null
        }
    }

    function Rf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return I(a, 1);
            case 7:
                return ec(a, 3);
            case 2:
                return fc(a, 2);
            case 3:
                return ec(a, 3);
            case 6:
                return Ub(a, 4);
            default:
                return null
        }
    }
    var Sf = Fc(function() {
        if (!Pf) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Tf(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        O(Uf).j[e] = null != (g = null == (f = O(Uf).j[e]) ? void 0 : f.add(b)) ? g : (new q.Set).add(b);
        e = Sf();
        if (null != e[b]) return e[b];
        b = Vf(d)[b];
        if (!b) return c;
        b = Je(JSON.stringify(b));
        b = Wf(b);
        a = Rf(b, a);
        return null != a ? a : c
    }

    function Wf(a) {
        var b = O(Of).H;
        if (b) {
            var c = ib(G(a, Ge, 5), function(f) {
                return De(E(f, ve, 1), b)
            });
            if (c) {
                var d;
                return null != (d = E(c, Ee, 2)) ? d : null
            }
        }
        var e;
        return null != (e = E(a, Ee, 4)) ? e : null
    }

    function Uf() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new q.Map
    }

    function Xf(a, b, c) {
        return !!Tf(1, a, void 0 === b ? !1 : b, c)
    }

    function Yf(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Tf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Zf(a, b, c) {
        b = void 0 === b ? "" : b;
        a = Tf(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function $f(a, b, c) {
        b = void 0 === b ? [] : b;
        a = Tf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Vf(a) {
        return O(Uf).i[a] || (O(Uf).i[a] = {})
    }

    function ag(a, b) {
        var c = Vf(b);
        pd(a, function(d, e) {
            return c[e] = d
        })
    }

    function bg(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        db(b, function(h) {
            var k = Vf(h);
            db(a, function(l) {
                var m = Yb(l, Ke),
                    p = Qf(l, m);
                if (p) {
                    var r, y, F;
                    var z = null != (F = null == (r = O(Uf).h.get(h)) ? void 0 : null == (y = r.get(p)) ? void 0 : y.slice(0)) ? F : [];
                    a: {
                        r = new mf;
                        switch (m) {
                            case 1:
                                Xb(r, 1, of , p);
                                break;
                            case 2:
                                Xb(r, 2, of , p);
                                break;
                            case 3:
                                Xb(r, 3, of , p);
                                break;
                            case 6:
                                Xb(r, 4, of , p);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        Vb(r, 5, z);m = r
                    }
                    if (z = m) {
                        var H;
                        z = !(null == (H = O(Uf).j[h]) || !H.has(p))
                    }
                    z && f.push(m);
                    if (H = m) {
                        var X;
                        H = !(null == (X = O(Uf).h.get(h)) ||
                            !X.has(p))
                    }
                    H && g.push(m);
                    e || (X = O(Uf), X.h.has(h) || X.h.set(h, new q.Map), X.h.get(h).has(p) || X.h.get(h).set(p, []), d && X.h.get(h).get(p).push(d));
                    k[p] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && Nf(c, f, g, null != d ? d : void 0)
    }

    function cg(a, b) {
        var c = Vf(b);
        db(a, function(d) {
            var e = Je(JSON.stringify(d)),
                f = Yb(e, Ke);
            (e = Qf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function dg() {
        return fb(t(Object, "keys").call(Object, O(Uf).i), function(a) {
            return Number(a)
        })
    }

    function eg(a) {
        jb(O(Uf).l, a) || ag(Vf(4), a)
    };

    function fg(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function gg(a, b, c) {
        return b[a] || c
    }

    function hg(a) {
        fg(5, Xf, a);
        fg(6, Yf, a);
        fg(7, Zf, a);
        fg(8, $f, a);
        fg(13, cg, a);
        fg(15, eg, a)
    }

    function ig(a) {
        fg(4, function(b) {
            O(Of).H = b
        }, a);
        fg(9, function(b, c) {
            var d = O(Of);
            null == d.H[3][b] && (d.H[3][b] = c)
        }, a);
        fg(10, function(b, c) {
            var d = O(Of);
            null == d.H[4][b] && (d.H[4][b] = c)
        }, a);
        fg(11, function(b, c) {
            var d = O(Of);
            null == d.H[5][b] && (d.H[5][b] = c)
        }, a);
        fg(14, function(b) {
            for (var c = O(Of), d = v([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, t(Object, "assign").call(Object, c.H[e], b[e])
        }, a)
    }

    function jg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function kg() {}
    kg.prototype.j = function() {};
    kg.prototype.h = function() {};
    kg.prototype.l = function() {
        return []
    };
    kg.prototype.i = function() {
        return []
    };

    function lg(a, b, c) {
        a.j = gg(1, b, function() {});
        a.l = function(d) {
            return gg(2, b, function() {
                return []
            })(d, c)
        };
        a.i = function() {
            return gg(3, b, function() {
                return []
            })(c)
        };
        a.h = function(d) {
            gg(16, b, function() {})(d, c)
        }
    };
    var mg, ng, og = new oe(window);
    (function(a) {
        mg = null != a ? a : new be;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        ce(mg, window.google_srt);
        ng = new re(mg, og);
        ng.Ba(function() {});
        ng.Ca(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || pe(og) : og.h && Hc(window, "load", function() {
            window.google_measure_js_timing || pe(og)
        })
    })();
    var pg = {
        Ub: 0,
        Tb: 1,
        Qb: 2,
        Lb: 3,
        Rb: 4,
        Mb: 5,
        Sb: 6,
        Ob: 7,
        Pb: 8,
        Kb: 9,
        Nb: 10
    };
    var qg = {
        Wb: 0,
        Xb: 1,
        Vb: 2
    };

    function rg() {
        this.i = new sg(this);
        this.h = 0
    }
    rg.prototype.resolve = function(a) {
        tg(this);
        this.h = 1;
        this.l = a;
        ug(this.i)
    };
    rg.prototype.reject = function(a) {
        tg(this);
        this.h = 2;
        this.j = a;
        ug(this.i)
    };

    function tg(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function sg(a) {
        this.h = a
    }
    sg.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        ug(this)
    };

    function ug(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function vg(a) {
        this.h = a.slice(0)
    }
    n = vg.prototype;
    n.forEach = function(a) {
        var b = this;
        this.h.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new vg(eb(this.h, a))
    };
    n.apply = function(a) {
        return new vg(a(this.h.slice(0)))
    };
    n.sort = function(a) {
        return new vg(this.h.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.h[a]
    };
    n.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new vg(b)
    };

    function wg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function xg() {
        this.h = {};
        this.i = {}
    }
    xg.prototype.set = function(a, b) {
        var c = yg(a);
        this.h[c] = b;
        this.i[c] = a
    };
    xg.prototype.get = function(a, b) {
        a = yg(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    xg.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function yg(a) {
        return a instanceof Object ? String(La(a)) : a + ""
    };

    function zg(a, b) {
        this.h = a;
        this.i = b
    }

    function Ag(a) {
        return null != a.h ? a.h.value : null
    }

    function Bg(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    zg.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof zg ? a : Cg(a)) : this
    };

    function Dg(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function Cg(a) {
        return new zg({
            value: a
        }, null)
    }

    function Eg(a) {
        return new zg(null, a)
    }

    function Fg(a) {
        try {
            return Cg(a())
        } catch (b) {
            return Eg(b)
        }
    };

    function Gg(a) {
        this.h = new xg;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    Gg.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    Gg.prototype.contains = function(a) {
        return void 0 !== this.h.h[yg(a)]
    };

    function Hg() {
        this.h = new xg
    }
    Hg.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new Gg, this.h.set(a, c));
        c.add(b)
    };

    function P(a) {
        K.call(this, a, -1, Ig)
    }
    w(P, K);
    P.prototype.getId = function() {
        return C(this, 3)
    };
    var Ig = [4];

    function Jg(a) {
        var b = void 0 === a.Pa ? void 0 : a.Pa,
            c = void 0 === a.rb ? void 0 : a.rb,
            d = void 0 === a.ab ? void 0 : a.ab;
        this.h = void 0 === a.ib ? void 0 : a.ib;
        this.l = new vg(b || []);
        this.j = d;
        this.i = c
    };

    function Kg(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            ca: "a",
            ia: Lg(c)
        });
        null != a.h && b.push({
            ca: "as",
            ia: a.h
        });
        null != a.i && b.push({
            ca: "i",
            ia: String(a.i)
        });
        null != a.j && b.push({
            ca: "rp",
            ia: String(a.j)
        });
        b.sort(function(d, e) {
            return d.ca.localeCompare(e.ca)
        });
        b.unshift({
            ca: "t",
            ia: "aa"
        });
        return b
    }

    function Lg(a) {
        a = a.h.slice(0).map(Qg);
        a = JSON.stringify(a);
        return qd(a)
    }

    function Qg(a) {
        var b = {};
        null != C(a, 7) && (b.q = C(a, 7));
        null != C(a, 2) && (b.o = C(a, 2));
        null != C(a, 5) && (b.p = C(a, 5));
        return b
    };

    function Rg(a) {
        K.call(this, a)
    }
    w(Rg, K);
    Rg.prototype.setLocation = function(a) {
        return D(this, 1, a)
    };

    function Sg(a, b) {
        this.Ta = a;
        this.Za = b
    }

    function Tg(a) {
        var b = [].slice.call(arguments).filter(Ec(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ta || []);
            d = t(Object, "assign").call(Object, d, e.Za)
        });
        return new Sg(c, d)
    }

    function Ug(a) {
        switch (a) {
            case 1:
                return new Sg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Sg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Sg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Sg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Vg(a) {
        if (null == a) a = null;
        else {
            var b = Kg(a);
            a = [];
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.ia);
                a.push(c.ca + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new Sg(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Wg = {},
        Xg = new Sg(["google-auto-placed"], (Wg.google_reactive_ad_format = 40, Wg.google_tag_origin = "qs", Wg));
    var Yg = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Zg() {
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
        this.floatingAdsStacking = new $g;
        this.sideRailProcessedFixedElements = new q.Set;
        this.sideRailAvailableSpace = new q.Map
    }

    function ah(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new q.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new q.Map)) : a.google_reactive_ads_global_state = new Zg;
        return a.google_reactive_ads_global_state
    }

    function $g() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function bh(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function ch(a) {
        return bh(a).clientWidth
    };

    function dh(a) {
        a = a.getBoundingClientRect();
        return 0 < a.width && 0 < a.height
    }

    function eh(a) {
        var b = 0;
        a.forEach(function(c) {
            return b = Math.max(b, c.getBoundingClientRect().width)
        });
        return function(c) {
            return c.getBoundingClientRect().width > .5 * b
        }
    }

    function fh(a) {
        var b = bh(a).clientHeight || 0;
        return function(c) {
            return c.getBoundingClientRect().height >= .75 * b
        }
    }

    function gh(a, b) {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top
    };

    function hh(a) {
        K.call(this, a)
    }
    w(hh, K);

    function ih(a) {
        K.call(this, a)
    }
    w(ih, K);

    function jh(a) {
        K.call(this, a, -1, kh)
    }
    w(jh, K);
    var kh = [1];

    function lh(a) {
        K.call(this, a)
    }
    w(lh, K);

    function mh(a) {
        K.call(this, a)
    }
    w(mh, K);

    function nh(a) {
        K.call(this, a)
    }
    w(nh, K);

    function oh(a) {
        K.call(this, a, -1, ph)
    }
    w(oh, K);
    var ph = [1];

    function qh(a) {
        K.call(this, a)
    }
    w(qh, K);

    function rh(a) {
        K.call(this, a)
    }
    w(rh, K);

    function sh(a) {
        K.call(this, a, -1, th)
    }
    w(sh, K);
    var th = [6, 7, 9, 10, 11];

    function uh(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }
    uh.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.l)
        } catch (f) {}
        if (!b.length) return [];
        a = kb(b);
        a = vh(this, a);
        "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.j) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = wh(a[c]),
                    e = this.j;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    uh.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function vh(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function wh(a) {
        var b = [];
        wg(a.getElementsByTagName("p"), function(c) {
            100 <= xh(c) && b.push(c)
        });
        return b
    }

    function xh(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        wg(a.childNodes, function(c) {
            b += xh(c)
        });
        return b
    }

    function yh(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function zh(a) {
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
    };

    function Q(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Ah(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Bh(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var Ch = new Q(1082, !0),
        Dh = new Ah(1130, 100),
        Eh = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Fh = new Q(316),
        Gh = new Q(1207, !0),
        Hh = new Q(313),
        Ih = new Q(369),
        Jh = new Q(1230),
        Kh = new Q(1229),
        Lh = new Q(1231),
        Mh = new Q(1171, !0),
        Nh = new Q(1201, !0),
        Oh = new Q(217),
        Ph = new Q(1228),
        Qh = new Q(1216),
        Rh = new Q(1215),
        Sh = new Q(506914611),
        Th = new Q(1086, !0),
        Uh = new Ah(1079, 5),
        Vh = new Bh(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Wh = new Q(203),
        Xh = new Q(84),
        Yh = new Q(1975),
        Zh = new Q(1974),
        $h = new Q(1162),
        ai = new Q(1120),
        bi = new Ah(501545963, 1),
        ci = new Q(501545960),
        di = new Q(501545961),
        ei = new Q(45388034),
        fi = new Ah(501545962, 1),
        gi = new Ah(45388309, -1),
        hi = new Ah(1114, 1),
        ii = new Ah(1108, 1E3),
        ji = new Q(491815314),
        ki = new Q(1121),
        li = new Q(501545959, !0),
        mi = new Q(504834127),
        ni = new Q(506619840),
        oi = new Q(502896280),
        pi = new Q(1928),
        qi = new Q(1941),
        ri = new Q(370946349),
        si = new Q(392736476),
        ti = new Ah(406149835),
        ui = new Bh(1932),
        vi = new Ah(1935);

    function wi() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function R(a) {
        return O(wi).i(a.h, a.defaultValue)
    }

    function xi(a) {
        return O(wi).j(a.h, a.defaultValue)
    }

    function yi() {
        return O(wi).l(Eh.h, Eh.defaultValue)
    };

    function zi(a, b, c) {
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
        zh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Ai(a, b, c) {
        function d(f) {
            f = Bi(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Bi(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Ci(a.previousSibling, e),
                    qa: function(f) {
                        return Ci(f.previousSibling, e)
                    },
                    ta: 0
                };
            case 2:
                return {
                    init: Ci(a.lastChild, e),
                    qa: function(f) {
                        return Ci(f.previousSibling, e)
                    },
                    ta: 0
                };
            case 3:
                return {
                    init: Ci(a.nextSibling, d),
                    qa: function(f) {
                        return Ci(f.nextSibling, d)
                    },
                    ta: 3
                };
            case 1:
                return {
                    init: Ci(a.firstChild, d),
                    qa: function(f) {
                        return Ci(f.nextSibling, d)
                    },
                    ta: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Bi(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ci(a, b) {
        return a && b(a) ? a : null
    };
    var Di = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Ei(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && gd(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function Fi(a, b) {
        do {
            var c = kd(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Gi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = L(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Hi(a, b) {
        return !((td.test(b.google_ad_width) || sd.test(a.style.width)) && (td.test(b.google_ad_height) || sd.test(a.style.height)))
    }

    function Ii(a, b) {
        return (a = Ji(a, b)) ? a.y : 0
    }

    function Ji(a, b) {
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

    function Ki(a) {
        var b = 0,
            c;
        for (c in Di) - 1 != a.indexOf(c) && (b |= Di[c]);
        return b
    }

    function Li(a, b, c, d, e) {
        if (a !== a.top) return hd(a) ? 3 : 16;
        if (!(488 > ch(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = ch(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = ch(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = kd(b, a)) && (e = L(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Mi(a, b, c, d) {
        var e = Li(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || Fi(c, b) ? (b = ch(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Ni(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function Oi(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = kd(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Pi(a, b, c) {
        a = Ji(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Qi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = kd(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Ni(b, c, "0px");
            b.style.width = ch(a) + "px";
            if (0 !== Pi(a, b, c)) {
                Ni(b, c, "0px");
                var d = Pi(a, b, c);
                Ni(b, c, -1 * d + "px");
                a = Pi(a, b, c);
                0 !== a && a !== d && Ni(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Ri(a, b) {
        this.R = a;
        this.j = b
    }
    Ri.prototype.height = function() {
        return this.j
    };
    Ri.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.R : Math.min(1200, Math.round(a))
    };
    Ri.prototype.i = function() {};

    function Si(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = kd(a, b)) && e[c] && d(e[c]) || null
    }

    function Ti(a) {
        return function(b) {
            return b.R <= a
        }
    }

    function Ui(a, b, c, d) {
        var e = a && Vi(c, b),
            f = Wi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Xi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Vi(a, b) {
        return Ii(a, b) < bh(b).clientHeight - 100
    }

    function Yi(a, b) {
        var c = Si(b, a, "height", L);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Si(b, a, "height", L);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && L(b.style.height)) && (c = Math.min(c, d)), (d = Si(b, a, "maxHeight", L)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Wi(a, b) {
        var c = 0 == Od(a);
        return b && c ? Math.max(250, 2 * bh(a).clientHeight / 3) : 250
    };
    var S = {},
        Zi = (S.google_ad_channel = !0, S.google_ad_client = !0, S.google_ad_host = !0, S.google_ad_host_channel = !0, S.google_adtest = !0, S.google_tag_for_child_directed_treatment = !0, S.google_tag_for_under_age_of_consent = !0, S.google_tag_partner = !0, S.google_restrict_data_processing = !0, S.google_page_url = !0, S.google_debug_params = !0, S.google_shadow_mode = !0, S.google_adbreak_test = !0, S.google_ad_frequency_hint = !0, S.google_admob_interstitial_slot = !0, S.google_admob_rewarded_slot = !0, S.google_admob_ads_only = !0, S.google_max_ad_content_rating = !0, S.google_traffic_source = !0, S),
        $i = RegExp("(^| )adsbygoogle($| )");

    function aj(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Zc(d.hc);
            a[e] = d.value
        }
    };
    var bj = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function cj() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? Md(bj) : c;
        this.j = a;
        this.h = null;
        this.l = !1;
        this.A = Math.random();
        this.m = b;
        this.i = this.L;
        this.u = c
    }
    n = cj.prototype;
    n.Ba = function(a) {
        this.h = a
    };
    n.Ca = function(a) {
        this.l = a
    };
    n.cb = function(a) {
        this.i = a
    };
    n.L = function(a, b, c, d, e) {
        c = void 0 === c ? this.m : c;
        e = void 0 === e ? this.j : e;
        if ((this.l ? this.A : Math.random()) > c) return !1;
        Sd(b) || (b = new Rd(b, {
            context: a,
            id: e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (id(x.document, this.u), x.error_rep_loaded = !0);
        return !1
    };
    n.ua = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.i(a, d, this.m, c, this.j)) throw d;
        }
    };
    n.Ya = function(a, b) {
        var c = this;
        return function() {
            var d = Ea.apply(0, arguments);
            return c.ua(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.Aa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.L(a, d instanceof Error ? d : Error(d), void 0, c.h || void 0)
        })
    };

    function dj(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function ej(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = he(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && dj(t(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (he() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter ||
                        1
                }), f)
            }
            return l
        }
    }

    function fj(a, b) {
        return ej(a, b, function(c, d) {
            (new cj).L(c, d)
        }, void 0, !1)
    };

    function gj(a, b, c) {
        return ej(a, b, void 0, c, !0).apply()
    }

    function hj(a) {
        if (!a) return null;
        var b = C(a, 7);
        if (C(a, 1) || a.getId() || 0 < Ub(a, 4).length) {
            b = Ub(a, 4);
            var c = C(a, 3),
                d = C(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + yh(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + yh(b[c]);
            a = (b = e) ? new uh(b, C(a, 2), C(a, 5), ij(C(a, 6))) : null
        } else a = b ? new uh(b, C(a, 2), C(a, 5), ij(C(a, 6))) : null;
        return a
    }
    var jj = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function ij(a) {
        return null == a ? a : jj[a]
    }
    var kj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function lj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function mj(a) {
        a = lj(a);
        return a.optimization = a.optimization || {}
    };

    function nj(a) {
        K.call(this, a)
    }
    w(nj, K);
    var oj = xc(nj);

    function pj(a) {
        switch (C(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = E(a, P, 1), null == b ? b = null : (a = C(a, 2), b = null == a ? null : new Jg({
                    Pa: [b],
                    ab: a
                }));
                return null != b ? Cg(b) : Eg(Error("Missing dimension when creating placement id"));
            case 3:
                return Eg(Error("Missing dimension when creating placement id"));
            default:
                return Eg(Error("Invalid type: " + C(a, 8)))
        }
    };

    function qj(a) {
        K.call(this, a)
    }
    w(qj, K);

    function rj(a) {
        K.call(this, a)
    }
    w(rj, K);

    function sj(a) {
        K.call(this, a)
    }
    w(sj, K);

    function tj(a) {
        K.call(this, a)
    }
    w(tj, K);

    function uj(a) {
        K.call(this, a)
    }
    w(uj, K);

    function vj(a) {
        K.call(this, a)
    }
    w(vj, K);

    function wj(a) {
        K.call(this, a)
    }
    w(wj, K);

    function xj(a) {
        K.call(this, a)
    }
    w(xj, K);

    function yj(a) {
        K.call(this, a)
    }
    w(yj, K);
    yj.prototype.getName = function() {
        return C(this, 4)
    };
    var zj = [1, 2, 3];

    function Aj(a) {
        K.call(this, a, -1, Bj)
    }
    w(Aj, K);
    var Bj = [2, 5, 6, 11];

    function Cj(a) {
        K.call(this, a)
    }
    w(Cj, K);

    function Dj(a) {
        K.call(this, a)
    }
    w(Dj, K);
    var Ej = [1, 2];

    function Fj(a) {
        K.call(this, a, -1, Gj)
    }
    w(Fj, K);
    var Gj = [1, 4];

    function Hj(a) {
        K.call(this, a, -1, Ij)
    }
    w(Hj, K);
    var Jj = xc(Hj),
        Ij = [1, 2, 5, 7];

    function Kj(a, b) {
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

    function Lj(a, b) {
        this.i = a;
        this.h = b
    }

    function Mj(a, b) {
        var c = new Hg,
            d = new Gg;
        b.forEach(function(e) {
            if (gc(e, wj, 1, zj)) {
                e = gc(e, wj, 1, zj);
                if (E(e, qh, 1) && E(E(e, qh, 1), P, 1) && E(e, qh, 2) && E(E(e, qh, 2), P, 1)) {
                    var f = Nj(a, E(E(e, qh, 1), P, 1)),
                        g = Nj(a, E(E(e, qh, 2), P, 1));
                    if (f && g)
                        for (f = v(Kj({
                                anchor: f,
                                position: C(E(e, qh, 1), 2)
                            }, {
                                anchor: g,
                                position: C(E(e, qh, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(La(g.anchor), g.position)
                }
                E(e, qh, 3) && E(E(e, qh, 3), P, 1) && (f = Nj(a, E(E(e, qh, 3), P, 1))) && c.set(La(f), C(E(e, qh, 3), 2))
            } else gc(e, xj, 2, zj) ? Oj(a, gc(e, xj, 2, zj), c) : gc(e,
                vj, 3, zj) && Pj(a, gc(e, vj, 3, zj), d)
        });
        return new Lj(c, d)
    }

    function Oj(a, b, c) {
        E(b, qh, 2) ? (b = E(b, qh, 2), (a = Nj(a, E(b, P, 1))) && c.set(La(a), C(b, 2))) : E(b, P, 1) && (a = Qj(a, E(b, P, 1))) && a.forEach(function(d) {
            d = La(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Pj(a, b, c) {
        E(b, P, 1) && (a = Qj(a, E(b, P, 1))) && a.forEach(function(d) {
            c.add(La(d))
        })
    }

    function Nj(a, b) {
        return (a = Qj(a, b)) && 0 < a.length ? a[0] : null
    }

    function Qj(a, b) {
        return (b = hj(b)) ? b.query(a) : null
    };

    function Rj() {
        this.h = new q.Set
    }

    function Sj(a) {
        a = Tj(a);
        return a.has("all") || a.has("after")
    }

    function Uj(a) {
        a = Tj(a);
        return a.has("all") || a.has("before")
    }

    function Vj(a, b, c) {
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
            if (Wj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.h.add(d)
        });
        return !1
    }

    function Wj(a) {
        var b = Tj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function Tj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new q.Set(a.split("|")) : new q.Set
    };

    function Xj(a, b) {
        if (!a) return !1;
        a = kd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Yj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Zj(a) {
        return !!a.nextSibling || !!a.parentNode && Zj(a.parentNode)
    };

    function ak(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = bk(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function bk(a) {
        var b = "";
        pd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function ck(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function dk(a) {
        var b = ck(a);
        return b ? eb(fb(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function ek(a, b) {
        return kb(a.document.querySelectorAll(b))
    }

    function fk(a) {
        var b = [];
        a = v(a);
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

    function gk(a, b, c, d, e) {
        this.h = a;
        this.C = b;
        this.i = c;
        this.m = e || null;
        this.A = (this.B = d) ? Mj(a.document, G(d, yj, 5)) : Mj(a.document, []);
        this.u = new Rj;
        this.j = 0;
        this.l = !1
    }

    function hk(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = G(a.i, sh, 1);
        a.j = 0;
        var d = ik(a.B);
        if (ak(a.h.location, "google_audio_sense")) {
            var e = new mh;
            e = D(e, 1, 1);
            var f = new lh;
            f = D(f, 2, !0);
            e = ac(e, 2, f);
            f = new jh;
            var g = new hh;
            var h = D(g, 1, 1);
            Jb(f);
            g = $b(f, hh, 1, !1, !1);
            h = null != h ? h : new hh;
            var k = Rb(f, 1, 2, void 0, !1);
            g.push(h);
            k.push(h.v);
            Ab(h.v) && yb(k, 8);
            g = new ih;
            g = D(g, 1, !0);
            f = ac(f, 2, g);
            e = ac(e, 3, f)
        } else e = E(a.i, mh, 27);
        if (f = e) {
            var l;
            e = (null == (l = E(a.i, oh, 6)) ? void 0 : G(l, nh, 1)) || [];
            l = a.h;
            var m;
            if (1 == J(f, 1) && null != (m = E(f, lh, 2)) && I(m,
                    2) && 0 != e.length) {
                m = [];
                e = v(e);
                for (f = e.next(); !f.done; f = e.next())
                    if (f = hj(E(f.value, P, 1) || null)) f = f.query(l.document), 0 < f.length && m.push(f[0]);
                m = m.filter(dh).filter(eh(m)).filter(fh(l));
                m.sort(gh);
                if (m = m[0] || null) e = l.document.createElement("div"), e.id = "google-auto-placed-read-aloud-player-reserved", xd(e, {
                    width: "100%",
                    height: "65px"
                }), m.insertBefore(e, m.firstChild), lj(l).audioSenseSpaceReserved = !0
            }
        }
        m = a.h;
        var p;
        try {
            var r = (p = m.localStorage.getItem("google_ama_settings")) ? oj(p) : null
        } catch (X) {
            r = null
        }
        p = null !==
            r && I(r, 2, !1);
        r = lj(m);
        p && (r.eatf = !0, Jd(7, [!0, 0, !1]));
        b: {
            e = {
                pb: !1,
                qb: !1
            };f = ek(m, ".google-auto-placed");g = ek(m, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]");h = ek(m, "ins.adsbygoogle[data-ad-format=autorelaxed]");k = (dk(m) || ek(m, "div[id^=div-gpt-ad]")).concat(ek(m, "iframe[id^=google_ads_iframe]"));
            var y = ek(m, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                F = ek(m, "ins.adsbygoogle-ablated-ad-slot"),
                z = ek(m, "div.googlepublisherpluginad"),
                H = ek(m, "html > ins.adsbygoogle");l = [].concat(ek(m, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ek(m, "body ins.adsbygoogle"));p = [];e = v([
                [e.ac, f],
                [e.pb, g],
                [e.dc, h],
                [e.bc, k],
                [e.ec, y],
                [e.Zb, F],
                [e.cc, z],
                [e.qb, H]
            ]);
            for (f = e.next(); !f.done; f = e.next()) g = v(f.value),
            f = g.next().value,
            g = g.next().value,
            !1 === f ? p = p.concat(g) : l = l.concat(g);l = fk(l);e = fk(p);p = l.slice(0);l = v(e);
            for (e = l.next(); !e.done; e = l.next())
                for (e = e.value, f = 0; f <
                    p.length; f++)(e.contains(p[f]) || p[f].contains(e)) && p.splice(f, 1);m = bh(m).clientHeight;
            for (l = 0; l < p.length; l++)
                if (!(p[l].getBoundingClientRect().top > m)) {
                    p = !0;
                    break b
                }
            p = !1
        }
        r = p ? r.eatfAbg = !0 : !1;
        if (r) return !0;
        r = new Gg([2]);
        for (p = 0; p < c.length; p++) {
            m = a;
            e = c[p];
            l = p;
            f = b;
            if (E(e, Rg, 4) && r.contains(C(E(e, Rg, 4), 1)) && 1 === C(e, 8) && jk(e, d)) {
                m.j++;
                if (f = kk(m, e, f, d)) g = lj(m.h), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), E(e, P, 1) && null != C(E(e, P, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced =
                    1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: l,
                    element: f.oa
                }), Jd(7, [!1, m.j, !0]);
                m = f
            } else m = null;
            if (m) return !0
        }
        Jd(7, [!1, a.j, !1]);
        return !1
    }

    function kk(a, b, c, d) {
        if (!jk(b, d) || 1 != C(b, 8)) return null;
        d = E(b, P, 1);
        if (!d) return null;
        d = hj(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = kj[C(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = Xj(Yj(d), f);
                        break a;
                    case 3:
                        f = Xj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Xj(g ? 1 == g.nodeType ? g : Yj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Zj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !zh(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.A;
            f = C(b, 2);
            g = La(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(La(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(La(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.u;
            f = C(b, 2);
            a: switch (f) {
                case 1:
                    g = Sj(d.previousElementSibling) || Uj(d);
                    break a;
                case 4:
                    g = Sj(d) || Uj(d.nextElementSibling);
                    break a;
                case 2:
                    g = Uj(d.firstElementChild);
                    break a;
                case 3:
                    g = Sj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + f);
            }
            c = g || Vj(c, d, f)
        }
        if (c) return null;
        c = E(b, rh, 3);
        f = {};
        c && (f.fb = C(c, 1), f.Sa = C(c, 2), f.jb = !!Tb(c, 3));
        c = E(b, Rg, 4) && C(E(b, Rg, 4), 2) ? C(E(b, Rg, 4), 2) : null;
        c = Ug(c);
        g = null != C(b, 12) ? C(b, 12) : null;
        g = null == g ? null : new Sg(null, {
            google_ml_rank: g
        });
        b = lk(a, b);
        b = Tg(a.m, c, g, b);
        c = a.h;
        a = a.C;
        var h = c.document,
            k = f.jb || !1;
        g = (new ad(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.zb && aj(k, f.zb);
        h = (new ad(h)).createElement("INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor =
            "transparent";
        f.fb && (k.marginTop = f.fb);
        f.Sa && (k.marginBottom = f.Sa);
        f.hb && aj(k, f.hb);
        g.appendChild(h);
        f = {
            xa: g,
            oa: h
        };
        f.oa.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ta) f.xa.className = h.join(" ");
        h = f.oa;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.xa;
                var p = void 0 === p ? 0 : p;
                if (R(Hh)) {
                    p = void 0 === p ? 0 : p;
                    var r = Ai(d, e, p);
                    if (r.init) {
                        var y = r.init;
                        for (d = y; d = r.qa(d);) y = d;
                        var F = {
                            anchor: y,
                            position: r.ta
                        }
                    } else F = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = p;
                    zi(m, F.anchor, F.position)
                } else zi(m, d, e);
                b: {
                    var z = f.oa;z.dataset.adsbygoogleStatus = "reserved";z.className += " adsbygoogle-noablate";m = {
                        element: z
                    };
                    var H = b && b.Za;
                    if (z.hasAttribute("data-pub-vars")) {
                        try {
                            H = JSON.parse(z.getAttribute("data-pub-vars"))
                        } catch (X) {
                            break b
                        }
                        z.removeAttribute("data-pub-vars")
                    }
                    H && (m.params = H);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (X) {
                (z = f.xa) && z.parentNode && (H = z.parentNode, H.removeChild(z), zh(H) && (H.style.display = H.getAttribute("data-init-display") ||
                    "none"));
                z = !1;
                break a
            }
            z = !0
        }
        return z ? f : null
    }

    function lk(a, b) {
        return Ag(Dg(pj(b).map(Vg), function(c) {
            lj(a.h).exception = c
        }))
    }

    function ik(a) {
        var b = {};
        a && Sb(a, 6, !1).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function jk(a, b) {
        return a && void 0 !== Ob(a, Rg, 4, !1) && b[C(E(a, Rg, 4), 2)] ? !1 : !0
    };

    function mk(a) {
        K.call(this, a)
    }
    w(mk, K);
    var nk = xc(mk);

    function T(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
    }
    w(T, Error);
    var ok, pk, qk = new oe(x);

    function rk(a) {
        null != a && (x.google_measure_js_timing = a);
        x.google_measure_js_timing || pe(qk)
    }(function(a) {
        ok = a || new be;
        "number" !== typeof x.google_srt && (x.google_srt = Math.random());
        ce(ok, x.google_srt);
        pk = new re(ok, qk);
        pk.Ca(!0);
        "complete" == x.document.readyState ? rk() : qk.h && Hc(x, "load", function() {
            rk()
        })
    })();

    function sk(a, b, c) {
        return pk.ua(a, b, c)
    }

    function tk(a, b) {
        return pk.Ya(a, b)
    }

    function uk(a, b, c) {
        var d = O(kg).i();
        !b.eid && d.length && (b.eid = d.toString());
        de(ok, a, b, !0, c)
    }

    function vk(a, b) {
        pk.Aa(a, b)
    }

    function wk(a, b, c, d) {
        var e;
        Sd(b) ? e = b.msg || se(b.error) : e = se(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Rd ? b.error : b, c.pbr || (c.pbr = !0, pk.L(a, b, .1, d, "puberror")), !1) : pk.L(a, b, c, d)
    };

    function xk(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Fg(function() {
            return nk(c)
        }) : Cg(null)
    };

    function yk() {
        this.S = {}
    }

    function zk() {
        if (Ak) return Ak;
        var a = Ld() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Ak = b : a.google_persistent_state_async = Ak = new yk
    }

    function Bk(a) {
        return Ck[a] || "google_ps_" + a
    }

    function Dk(a, b, c) {
        b = Bk(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Ek(a, b, c) {
        return Dk(a, b, function() {
            return c
        })
    }
    var Ak = null,
        Fk = {},
        Ck = (Fk[8] = "google_prev_ad_formats_by_region", Fk[9] = "google_prev_ad_slotnames_by_region", Fk);

    function Gk(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Gk.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.ic;
            d = c.jc || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.xb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Gk.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Va(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Gk.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    Gk.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Va(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            xb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Hk(a) {
        K.call(this, a)
    }
    w(Hk, K);

    function Ik(a) {
        var b = new Hk;
        return D(b, 5, a)
    };

    function Jk(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Kk(a, b) {
        b = void 0 === b ? {} : b;
        N.call(this);
        this.l = a;
        this.i = null;
        this.u = {};
        this.I = 0;
        var c;
        this.C = null != (c = b.eb) ? c : 500;
        var d;
        this.B = null != (d = b.Yb) ? d : !1;
        this.m = null
    }
    w(Kk, N);
    Kk.prototype.h = function() {
        this.u = {};
        this.m && (Ic(this.l, "message", this.m), delete this.m);
        delete this.u;
        delete this.l;
        delete this.i;
        N.prototype.h.call(this)
    };

    function Lk(a) {
        return "function" === typeof a.l.__tcfapi || null != Mk(a)
    }
    Kk.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = Jk(d), d.internalBlockOnErrors = c.B, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.B
            },
            e = Gc(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.C && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.C));
        try {
            Nk(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    Kk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Nk(this, "removeEventListener", null, a.listenerId)
    };

    function Nk(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
        else if (Mk(a)) {
            Ok(a);
            var e = ++a.I;
            a.u[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Mk(a) {
        if (a.i) return a.i;
        a.i = vd(a.l, "__tcfapiLocator");
        return a.i
    }

    function Ok(a) {
        a.m || (a.m = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.u[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Hc(a.l, "message", a.m))
    }

    function Pk(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Jk(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Fd({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };

    function Qk(a) {
        var b = a.s,
            c = a.eb,
            d = a.callback;
        a = Rk({
            s: b,
            ka: a.ka,
            ra: void 0 === a.ra ? !1 : a.ra,
            sa: void 0 === a.sa ? !1 : a.sa
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Sk(b, c).then(function(e) {
            return e.map(Tk)
        }).then(function(e) {
            return e.map(function(f) {
                return Uk(b, f)
            })
        }).then(d)
    }

    function Rk(a) {
        var b = a.s,
            c = a.ka,
            d = void 0 === a.ra ? !1 : a.ra;
        if (a = (void 0 === a.sa ? 0 : a.sa) || !Lk(new Kk(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = xk(b), null == c.h) pk.L(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != C(c, 1)) b: switch (c = C(c, 1), c) {
                    case 1:
                        c = !0;
                        break b;
                    default:
                        throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                } else c = !1;
                d = c
            }
            a = d
        }
        if (a) return Uk(b, Ik(!0));
        c = zk();
        return (c = Ek(c, 24)) ? Uk(b, Tk(c)) : Eg(Error("tcunav"))
    }

    function Sk(a, b) {
        return q.Promise.race([Vk(), Wk(a, b)])
    }

    function Vk() {
        return (new q.Promise(function(a) {
            var b = zk();
            a = {
                resolve: a
            };
            var c = Ek(b, 25, []);
            c.push(a);
            b.S[Bk(25)] = c
        })).then(Xk)
    }

    function Wk(a, b) {
        return new q.Promise(function(c) {
            a.setTimeout(c, b, Eg(Error("tcto")))
        })
    }

    function Xk(a) {
        return a ? Cg(a) : Eg(Error("tcnull"))
    }

    function Tk(a) {
        var b = void 0 === b ? !1 : b;
        if (Pk(a))
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var c = void 0 === c ? "755" : c;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === c ? "755" : c];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (c && (a = a.purpose.consents,
                    c = !(!a || !a["1"])), a = c)) : a = !0
            }
        else a = !1;
        return Ik(a)
    }

    function Uk(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Tb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Cg(b) : Eg(Error("unav"))
    };

    function Yk(a) {
        K.call(this, a, -1, Zk)
    }
    w(Yk, K);
    var Zk = [1, 2, 3];

    function $k(a) {
        K.call(this, a)
    }
    w($k, K);

    function al(a) {
        this.exception = a
    }

    function bl(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    bl.prototype.start = function() {
        this.l()
    };
    bl.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    hk(this.h, !0);
                    cl(this);
                    break;
                default:
                    hk(this.h, !1) ? cl(this) : this.j.setTimeout(Qa(this.l, this), 100)
            }
        } catch (a) {
            cl(this, a)
        }
    };

    function cl(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            lj(e.h);
            G(e.i, sh, 1);
            d.call(c, new al(b))
        } catch (f) {
            a.i.reject(f)
        }
    };
    var dl = "a".charCodeAt(),
        el = Lc(pg),
        fl = Lc(qg);

    function gl(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.i = a;
        this.h = 0
    }

    function hl(a) {
        var b = il(a, 16);
        return !0 === !!il(a, 1) ? (a = jl(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : kl(a, b)
    }

    function jl(a) {
        for (var b = il(a, 12), c = []; b--;) {
            var d = !0 === !!il(a, 1),
                e = il(a, 16);
            if (d)
                for (d = il(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function kl(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (il(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function il(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    };

    function ll(a, b) {
        try {
            var c = pb(a.split(".")[0]).map(function(e) {
                    return (aa = e.toString(2), t(aa, "padStart")).call(aa, 8, "0")
                }).join(""),
                d = new gl(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = il(d, 12);
            c.cmpVersion = il(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = il(d, 6);
            c.isServiceSpecific = !!il(d, 1);
            c.useNonStandardStacks = !!il(d, 1);
            c.specialFeatureOptins = ml(kl(d, 12, fl), fl);
            c.purpose = {
                consents: ml(kl(d, 24, el), el),
                legitimateInterests: ml(kl(d, 24, el), el)
            };
            c.purposeOneTreatment = !!il(d, 1);
            c.publisherCC = String.fromCharCode(dl +
                il(d, 6)) + String.fromCharCode(dl + il(d, 6));
            c.vendor = {
                consents: ml(hl(d), b),
                legitimateInterests: ml(hl(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function ml(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = v(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function nl() {
        this.h = {}
    };

    function ol(a) {
        K.call(this, a)
    }
    w(ol, K);

    function pl(a) {
        K.call(this, a)
    }
    w(pl, K);

    function ql(a) {
        K.call(this, a)
    }
    w(ql, K);
    var rl = [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27];

    function sl() {};

    function tl(a) {
        K.call(this, a)
    }
    w(tl, K);

    function ul(a) {
        K.call(this, a)
    }
    w(ul, K);

    function vl(a) {
        K.call(this, a, -1, wl)
    }
    w(vl, K);
    var xl = xc(vl),
        wl = [7];
    var yl = new function(a, b) {
        this.key = a;
        this.defaultValue = void 0 === b ? !1 : b;
        this.valueType = "boolean"
    }("45369554");

    function zl() {
        this.h = {};
        var a = x.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.h = JSON.parse(a)
        } catch (d) {}
    }
    var Al;
    w(zl, nl);

    function Bl(a) {
        return (a = Cl(a)) ? E(a, ul, 4) : null
    }

    function Cl(a) {
        if (a = (new Gk(a)).get("FCCDCF", ""))
            if (t(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                Dl(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? xl(b) : null
        } catch (c) {
            return Dl(2), null
        }
    }

    function Dl(a) {
        new sl;
        var b = new ol;
        a = D(b, 7, a);
        b = new pl;
        a = ac(b, 1, a);
        b = new ql;
        bc(b, 22, rl, a);
        Al || (Al = new zl);
        a = Al.h[yl.key];
        if ("proto" === yl.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };
    Lc(pg).map(function(a) {
        return Number(a)
    });
    Lc(qg).map(function(a) {
        return Number(a)
    });

    function El(a) {
        this.h = a;
        this.i = null
    }

    function Fl(a) {
        a.__tcfapiPostMessageReady || Gl(new El(a))
    }

    function Gl(a) {
        a.i = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
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
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    };

    function Hl(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = jd("IFRAME", d);
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

    function Il(a) {
        this.h = a;
        this.i = a.document;
        this.m = (a = (a = Cl(this.i)) ? E(a, tl, 5) || null : null) ? C(a, 2) : null;
        this.j = (a = Bl(this.i)) && null != C(a, 1) ? C(a, 1) : null;
        this.l = (a = Bl(this.i)) && null != C(a, 2) ? C(a, 2) : null
    }

    function Jl() {
        var a = window,
            b = R(Mh);
        a.__uspapi || a.frames.__uspapiLocator || (a = new Il(a), Kl(a), b && Ll(a))
    }

    function Kl(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Hl(a.h, "__uspapiLocator"), Sa("__uspapi", function() {
            return a.u.apply(a, ka(Ea.apply(0, arguments)))
        }))
    }
    Il.prototype.u = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.m
        }, !0)
    };

    function Ll(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", Hl(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], Sa("__tcfapi", function() {
            return a.A.apply(a, ka(Ea.apply(0, arguments)))
        }), Fl(a.h))
    }
    Il.prototype.A = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(Ml(this, d, null), !0) : c(null, !1);
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
                    c(Ml(this, null, a - 1), !0);
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

    function Ml(a, b, c) {
        if (!a.j) return null;
        b = ll(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function Nl(a) {
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

    function Ol(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Pl(a) {
        a = Sb(a, 2, !1);
        if (!a) return !1;
        for (var b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    }

    function Ql(a, b) {
        a = Ol(Nl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = qd(a),
            d = Rl(a);
        return t(b, "find").call(b, function(e) {
            var f = void 0 !== Ob(e, uj, 7, !1) ? C(E(e, uj, 7), 1) : C(e, 1);
            e = void 0 !== Ob(e, uj, 7, !1) ? C(E(e, uj, 7), 2) : 2;
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

    function Rl(a) {
        for (var b = {};;) {
            b[qd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Sl = {},
        Tl = (Sl.google_ad_channel = !0, Sl.google_ad_host = !0, Sl);

    function Ul(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        uk("ama", b, .01)
    }

    function Vl(a) {
        var b = {};
        pd(Tl, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Wl(a) {
        a = E(a, tj, 3);
        return !a || C(a, 1) <= Date.now() ? !1 : !0
    }

    function Xl(a) {
        if (R(Fh)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Jj(b) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function Yl(a) {
        K.call(this, a)
    }
    w(Yl, K);

    function Zl(a) {
        K.call(this, a, -1, $l)
    }
    w(Zl, K);
    var $l = [1];

    function am(a) {
        K.call(this, a, -1, bm)
    }
    w(am, K);
    am.prototype.getId = function() {
        return dc(C(this, 1), 0)
    };
    var bm = [2];

    function cm(a) {
        K.call(this, a, -1, dm)
    }
    w(cm, K);
    var dm = [2];

    function em(a) {
        K.call(this, a, -1, fm)
    }
    w(em, K);
    var fm = [2];

    function gm(a) {
        K.call(this, a)
    }
    w(gm, K);

    function hm(a) {
        K.call(this, a, -1, im)
    }
    w(hm, K);
    var im = [1, 4, 2, 3];

    function jm(a) {
        K.call(this, a, -1, km)
    }
    w(jm, K);

    function lm(a) {
        return gc(a, Zl, 14, Qb)
    }
    var km = [19],
        Qb = [13, 14];
    var mm = void 0;

    function nm() {
        wc(mm, uc);
        return mm
    }

    function om(a) {
        wc(mm, ue);
        mm = a
    };

    function pm(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && qm(c, void 0 === d ? null : d) ? !0 : rm(a, c, function(e) {
            return gb(G(e, yc, 2), function(f) {
                return C(f, 1) === b
            })
        })
    }

    function qm(a, b) {
        return !b || I(b, 22) && !R(Rh) ? !1 : Nb(b, Yl, 13) ? I(gc(b, Yl, 13, Qb), 1) : Nb(b, Zl, 14) && "" !== a && 1 === Ub(lm(b), 1).length && Ub(lm(b), 1)[0] === a ? I(E(lm(b), Yl, 2), 1) : !1
    }

    function sm(a, b) {
        b = dc(C(b, 18), 0); - 1 !== b && (a.tmod = b)
    }

    function tm(a) {
        var b = void 0 === b ? "" : b;
        var c = hd(M) || M;
        return um(c, a) ? !0 : rm(M, b, function(d) {
            return gb(Sb(d, 3, !1), function(e) {
                return e === a
            })
        })
    }

    function um(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && jb(a.split(","), b.toString())
    }

    function rm(a, b, c) {
        a = hd(a) || a;
        var d = vm(a);
        b && (b = Qd(String(b)));
        return Kc(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function vm(a) {
        a = wm(a);
        var b = {};
        pd(a, function(c, d) {
            try {
                var e = new zc(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function wm(a) {
        return R(Ch) ? (a = Rk({
            s: a,
            ka: nm()
        }), null != a.h ? xm(a.h.value) : {}) : xm(a.localStorage)
    }

    function xm(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Jc(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function ym(a) {
        R(Nh) && uk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }

    function zm(a) {
        return !!a && (0 < G(a, sh, 1).length || R(Gh) && 0 < G(a, nh, 3).length)
    }

    function Am() {
        var a = [];
        R(Kh) && a.push(1);
        R(Jh) && a.push(2);
        R(Lh) && a.push(7);
        return a
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Bm(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Oa: !0,
            Gb: b,
            wa: a.ablation_viewport_offset
        } : null
    }

    function Cm(a, b) {
        a = U(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Dm(a) {
        U(M).allow_second_reactive_tag = a
    }

    function Em() {
        var a = U(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Fm(a) {
        var b, c;
        return null != (c = null == (b = a.document.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : b.getAttribute("content")) ? c : null
    };

    function Gm(a, b, c, d) {
        Hm(new Im(a, b, c, d))
    }

    function Im(a, b, c, d) {
        this.s = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function Hm(a) {
        Dg(Bg(Rk({
            s: a.s,
            ka: I(a.i, 6)
        }), function(b) {
            Jm(a, b, !0)
        }), function() {
            Km(a)
        })
    }

    function Jm(a, b, c) {
        Dg(Bg(Lm(b), function(d) {
            Mm("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }), function() {
            var d = a.s;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Ul(d, {
                    lserr: 1
                })
            }
            c ? Km(a) : a.h(null, null)
        })
    }

    function Km(a) {
        Dg(Bg(Nm(a), function(b) {
            a.h(b, {
                fromPABGSettings: !0
            })
        }), function() {
            Om(a)
        })
    }

    function Om(a) {
        Qk({
            s: a.s,
            ka: I(a.i, 6),
            eb: 50,
            callback: function(b) {
                Pm(a, b)
            }
        })
    }

    function Lm(a) {
        return (a = (a = Xl(a)) ? Wl(a) ? a : null : null) ? Cg(a) : Eg(Error("invlocst"))
    }

    function Nm(a) {
        var b = a.s,
            c, d, e;
        if ((null != (e = null == (c = U(b)) ? void 0 : null == (d = c.head_tag_slot_vars) ? void 0 : d.google_ad_host) ? e : Fm(b)) && (!I(a.i, 22) || !R(Qh))) return Eg(Error("invtag"));
        a: if (b = a.s, c = a.j, a = a.i, null == a ? 0 : Nb(a, Yl, 13)) {
            var f, g;
            var h = null == a ? void 0 : null == (f = gc(a, Yl, 13, Qb)) ? void 0 : null == (g = E(f, $k, 2)) ? void 0 : E(g, Yk, 2);
            zm(h) ? ym(!1) : h = null
        } else {
            if (null == a ? 0 : Nb(a, Zl, 14)) {
                var k;
                f = null == a ? void 0 : null == (k = lm(a)) ? void 0 : Ub(k, 1);
                var l, m;
                g = null == a ? void 0 : null == (h = lm(a)) ? void 0 : null == (l = E(h, Yl, 2)) ? void 0 :
                    null == (m = E(l, $k, 2)) ? void 0 : E(m, Yk, 2);
                if (f && 1 === f.length && f[0] === c && zm(g) && ec(a, 17) === b.location.host) {
                    ym(!0);
                    h = g;
                    break a
                }
            }
            h = null
        }
        h ? (l = new Hj, m = G(h, sh, 1), l = cc(l, 1, m), m = G(h, Aj, 2), l = cc(l, 7, m), R(Gh) && 0 < G(h, nh, 3).length && (m = new oh, h = G(h, nh, 3), h = cc(m, 1, h), ac(l, 6, h)), h = Cg(l)) : h = Eg(Error("invtag"));
        return h
    }

    function Pm(a, b) {
        Dg(Bg(b, function(c) {
            Jm(a, c, !1)
        }), function(c) {
            Mm(c.message);
            a.h(null, null)
        })
    }

    function Mm(a) {
        uk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function Qm(a, b, c, d) {
        try {
            var e = Ql(a, G(c, Aj, 7));
            if (e && Pl(e)) {
                if (C(e, 4)) {
                    var f = {},
                        g = new Sg(null, (f.google_package = C(e, 4), f));
                    d = Tg(d, g)
                }
                var h = new gk(a, b, c, e, d);
                gj(1E3, function() {
                    var k = new rg;
                    (new bl(a, h, k)).start();
                    return k.i
                }, a).then(Ra(Rm, a), Ra(Sm, a))
            }
        } catch (k) {
            Ul(a, {
                atf: -1
            })
        }
    }

    function Rm(a) {
        Ul(a, {
            atf: 1
        })
    }

    function Sm(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Ul(a, {
            atf: 0
        })
    };

    function Tm(a) {
        if (R(ai)) {
            a.easpi = R(ai);
            R($h) && (a.easpa = !0);
            a.asntp = 0;
            a.asntpv = 0;
            a.asntpl = 0;
            a.asntpm = 0;
            a.asntpc = xi(ii);
            a.asna = 5;
            a.asnd = 5;
            a.asnp = 5;
            a.asns = 5;
            a.asmat = xi(hi);
            a.asptt = -1;
            R(mi) || (a.aspe = !0);
            a.asro = R(ni) ? R(Sh) : R(ki);
            R(ji) && (a.ascet = !0);
            R(ei) && (a.asgr = !0);
            R(li) || (a.asrc = !1);
            R(ci) && (a.asbu = !0);
            R(di) && (a.aseb = !0);
            1 > xi(fi) && (a.asla = xi(fi));
            1 > xi(bi) && (a.asaa = xi(bi));
            R(oi) && (a.asupm = !0);
            var b = xi(gi);
            0 < b && (a.asmrc = b)
        }
    };
    mb || !A("Safari") || $a();

    function Um() {
        var a = this;
        this.promise = new q.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Vm() {
        var a = new Um;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Wm(a) {
        a = void 0 === a ? function() {} : a;
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp,
            c = b[7];
        if (c) return c;
        c = Vm();
        b[7] = c;
        a();
        return c
    }

    function Xm(a) {
        return Wm(function() {
            id(x.document, a)
        }).promise
    };

    function Ym(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Zm(a) {
        if (x.google_apltlad || x !== x.top || !a.google_ad_client) return null;
        x.google_apltlad = !0;
        var b = Ym(a.google_ad_client),
            c = b.enable_page_level_ads;
        pd(a, function(d, e) {
            Zi[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        Tm(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }

    function $m(a) {
        return Ka(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function an(a, b) {
        U(M).ama_ran_on_page || gj(1001, function() {
            return bn(new cn(a, b))
        }, x)
    }

    function cn(a, b) {
        this.h = x;
        this.i = a;
        this.j = b
    }

    function bn(a) {
        Gm(a.h, a.j, a.i.google_ad_client || "", function(b, c) {
            var d = a.h,
                e = a.i;
            U(M).ama_ran_on_page || b && dn(d, e, b, c)
        })
    }

    function dn(a, b, c, d) {
        d && (lj(a).configSourceInAbg = d);
        if (void 0 !== Ob(c, Fj, 24, !1)) {
            d = mj(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = E(c, Fj, 24)) ? 0 : null == (f = E(e, Dj, 3)) ? 0 : gc(f, Cj, 2, Ej))
        }
        if ($m(b) && (e = Ql(a, G(c, Aj, 7)), !e || !Tb(e, 8))) return;
        U(M).ama_ran_on_page = !0;
        var g;
        if (null == (g = E(c, sj, 15)) ? 0 : Tb(g, 23)) U(a).enable_overlap_observer = !0;
        if ((g = E(c, rj, 13)) && 1 === C(g, 1)) {
            var h = 0,
                k = E(g, qj, 6);
            k && C(k, 3) && (h = C(k, 3) || 0);
            Cm(a, h)
        } else if (null == (h = E(c, Fj, 24)) ? 0 : null == (k = E(h, Dj, 3)) ? 0 : gc(k, Cj, 2, Ej)) mj(a).ablatingThisPageview = !0, Cm(a, 1);
        Jd(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = Vl(Ka(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = Tg(Xg, new Sg(null, b));
        sk(782, function() {
            Qm(a, l, c, m)
        })
    };
    var en = {},
        fn = (en.google_ad_modifications = !0, en.google_analytics_domain_name = !0, en.google_analytics_uacct = !0, en.google_pause_ad_requests = !0, en.google_user_agent_client_hint = !0, en);

    function gn(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function hn(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function jn(a) {
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

    function kn(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        if (null != (e = null != (d = null == (b = U(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Pd() ? gn : hn;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = jn(d[2]);
                b = c.google_ad_client ? c.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };

    function ln(a, b) {
        var c = 10;
        return Da(function(d) {
            return 0 >= c ? d.return(q.Promise.reject()) : b() ? d.return(q.Promise.resolve()) : d.return(new q.Promise(function(e, f) {
                var g = a.setInterval(function() {
                    --c ? b() && (a.clearInterval(g), e()) : (a.clearInterval(g), f())
                }, 200)
            }))
        })
    };

    function mn(a) {
        this.s = Ld() || window;
        this.h = null != a ? a : new Jf(100, 100, !0);
        this.state = Dk(zk(), 33, function() {
            var b = xi(Dh);
            return {
                sd: b,
                ssp: 0 < b && od() < 1 / b,
                pc: null,
                wpc: null,
                le: [],
                lgdp: []
            }
        })
    }

    function nn(a, b) {
        var c = new Xe;
        var d = on(a);
        c = Wb(c, 1, d, 0);
        d = pn(a);
        c = Wb(c, 2, d, "");
        c = Wb(c, 3, a.state.sd, 0);
        return Wb(c, 7, Math.round(b || a.s.performance.now()), 0)
    }

    function on(a) {
        var b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = Bd(a.s)
    }

    function pn(a) {
        var b = a.state.wpc;
        return null !== b && "" !== b ? b : a.state.wpc = kn(a.s)
    }

    function qn(a) {
        return Da(function(b) {
            return wa(b, ln(a.s, function() {
                return !(!on(a) || !pn(a))
            }), 0)
        })
    }

    function rn() {
        var a = O(mn),
            b, c, d;
        return Da(function(e) {
            if (1 == e.h) {
                if (!a.i || t(a.state.le, "includes").call(a.state.le, 1)) return e.return();
                a.state.le.push(1);
                b = a.s.performance.now();
                return wa(e, qn(a), 2)
            }
            c = Te(Ue(new Se, Re(Qe(new Pe, bh(a.s).scrollWidth), bh(a.s).scrollHeight)), Re(Qe(new Pe, ch(a.s)), bh(a.s).clientHeight));
            d = Ei(a.s);
            0 !== d && Ve(c, Oe(d));
            vf(a.h, Ye(nn(a, b), c));
            If(a.h, a.s, function() {
                var f = a.h;
                var g = nn(a);
                var h = new We;
                g = bc(g, 8, Ze, h);
                vf(f, g)
            });
            e.h = 0
        })
    }

    function sn(a, b, c) {
        var d;
        return Da(function(e) {
            if (1 == e.h) {
                if (!a.i || !c.length || t(a.state.lgdp, "includes").call(a.state.lgdp, Number(b))) return e.return();
                a.state.lgdp.push(Number(b));
                d = a.s.performance.now();
                return wa(e, qn(a), 2)
            }
            var f = a.h,
                g = nn(a, d);
            var h = new Le;
            h = Wb(h, 1, b, 0);
            h = Vb(h, 2, c);
            g = bc(g, 9, Ze, h);
            vf(f, g);
            e.h = 0
        })
    }
    ea.Object.defineProperties(mn.prototype, {
        i: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state.ssp
            }
        }
    });

    function tn(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function un(a) {
        var b = M.document;
        if (b.currentScript) return tn(b.currentScript, a);
        b = v(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === tn(c.value, a)) return 0;
        return 1
    };

    function vn(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[3] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return pm(M, Number(g))
        }, c[24] = function(g) {
            return tm(Number(g))
        }, c[61] = function() {
            return I(b, 6)
        }, c[63] = function() {
            return I(b, 6) || ".google.ch" === ec(b, 8)
        }, c), f[4] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (p) {
                h = null
            }
            g = Number(g);
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            a: {
                var k = -1;
                try {
                    h && (k = parseInt(h.getItem(g), 10))
                } catch (p) {
                    k = null;
                    break a
                }
                k = 0 <= k && 1E3 > k ? k : null
            }
            if (null ===
                k) {
                k = nd() ? null : Math.floor(1E3 * od());
                var l;
                if (l = null != k && h) a: {
                    var m = String(k);
                    try {
                        if (h) {
                            h.setItem(g, m);
                            l = m;
                            break a
                        }
                    } catch (p) {}
                    l = null
                }
                h = l ? k : null
            } else h = k;
            return null != h ? h : void 0
        }, d), f[5] = (e[6] = function() {
            return ec(b, 15)
        }, e), f
    };

    function wn(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function xn() {
        var a = O(wi).h(Vh.h, Vh.defaultValue);
        Ad(a, M.document)
    };

    function yn(a, b) {
        try {
            var c = a.split(".");
            a = x;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var zn = {},
        An = {},
        Bn = {},
        Cn = {},
        Dn = (Cn[3] = (zn[8] = function(a) {
                try {
                    return null != Ia(a)
                } catch (b) {}
            }, zn[9] = function(a) {
                try {
                    var b = Ia(a)
                } catch (c) {
                    return
                }
                if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            }, zn[10] = function() {
                return window === window.top
            }, zn[6] = function(a) {
                return jb(O(kg).i(), Number(a))
            }, zn[27] = function(a) {
                a = yn(a, "boolean");
                return void 0 !== a ? a : void 0
            }, zn[60] = function(a) {
                try {
                    return !!x.document.querySelector(a)
                } catch (b) {}
            }, zn[69] =
            function(a) {
                var b = x.document;
                b = void 0 === b ? document : b;
                var c;
                return !(null == (c = b.featurePolicy) || !(aa = c.features(), t(aa, "includes")).call(aa, a))
            }, zn[70] = function(a) {
                var b = x.document;
                b = void 0 === b ? document : b;
                var c;
                return !(null == (c = b.featurePolicy) || !(aa = c.allowedFeatures(), t(aa, "includes")).call(aa, a))
            }, zn), Cn[4] = (An[3] = function() {
            return wd()
        }, An[6] = function(a) {
            a = yn(a, "number");
            return void 0 !== a ? a : void 0
        }, An), Cn[5] = (Bn[2] = function() {
                return window.location.href
            }, Bn[3] = function() {
                try {
                    return window.top.location.hash
                } catch (a) {
                    return ""
                }
            },
            Bn[4] = function(a) {
                a = yn(a, "string");
                return void 0 !== a ? a : void 0
            }, Bn), Cn);
    var En = [12, 13, 20];

    function Fn() {
        this.i = [];
        this.J = null;
        this.j = {};
        this.ja = !1;
        this.ea = {};
        this.Y = {};
        this.h = {}
    }
    Fn.prototype.init = function(a, b, c, d) {
        var e = this,
            f = void 0 === d ? {} : d,
            g = void 0 === f.ja ? !1 : f.ja;
        d = void 0 === f.Y ? [] : f.Y;
        f = void 0 === f.ea ? {} : f.ea;
        this.i = a.slice();
        this.J = c;
        this.j = {};
        this.ja = g;
        this.ea = f;
        a = {};
        this.Y = (a[b] = [], a[4] = [], a);
        this.h = {};
        (b = fe()) && db(b.split(",") || [], function(h) {
            (h = Number(h)) && (e.h[h] = !0)
        });
        db(d, function(h) {
            e.h[h] = !0
        });
        return this
    };

    function Gn(a, b, c) {
        var d = [],
            e = Hn(a.i, b),
            f;
        if (f = 9 !== b) a.j[b] ? f = !0 : (a.j[b] = !0, f = !1);
        if (f) return Lf(a.J, b, c, d, [], 4), d;
        if (!e.length) return Lf(a.J, b, c, d, [], 3), d;
        var g = jb(En, b),
            h = [];
        db(e, function(k) {
            var l = new cf;
            if (k = In(a, k, c, l)) 0 !== Yb(l, df) && h.push(l), l = k.getId(), d.push(l), Jn(a, l, g ? 4 : c), (k = G(k, He, 2)) && (g ? bg(k, dg(), a.J, l) : bg(k, [c], a.J, l))
        });
        Lf(a.J, b, c, d, h, 1);
        return d
    }

    function Jn(a, b, c) {
        a.Y[c] || (a.Y[c] = []);
        a = a.Y[c];
        jb(a, b) || a.push(b)
    }

    function Kn(a, b) {
        a.i.push.apply(a.i, ka(eb(fb(b, function(c) {
            return new em(c)
        }), function(c) {
            return !jb(En, J(c, 1))
        })))
    }

    function In(a, b, c, d) {
        var e = O(Of).H;
        if (!De(E(b, ve, 3), e)) return null;
        var f = G(b, am, 2),
            g = J(b, 6);
        if (g) {
            Xb(d, 1, df, g);
            f = e[4];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), Wb(d, 3, c, 0)
            } catch (k) {}
            return (b = Ln(b, c)) ? Mn(a, [b], 1) : null
        }
        if (g = J(b, 10)) {
            Xb(d, 2, df, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[4][9];
                    break;
                case 2:
                    h = e[4][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === J(b, 11)) return null;
            void 0 !== c && Wb(d, 3, c, 0);
            return (b = Ln(b, c)) ? Mn(a, [b], 1) : null
        }
        d = e ? eb(f, function(k) {
            return De(E(k,
                ve, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * dc(C(b, 1), 0);
        return (b = J(b, 4)) ? Nn(a, b, c, d) : Mn(a, d, c / 1E3)
    }

    function Nn(a, b, c, d) {
        var e = null != a.ea[b] ? a.ea[b] : 1E3;
        if (0 >= e) return null;
        d = Mn(a, d, c / e);
        a.ea[b] = d ? 0 : e - c;
        return d
    }

    function Mn(a, b, c) {
        var d = a.h,
            e = hb(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.ja ? null : ld(b, c)
    }

    function On(a, b) {
        fg(1, function(c) {
            a.h[c] = !0
        }, b);
        fg(2, function(c, d) {
            return Gn(a, c, d)
        }, b);
        fg(3, function(c) {
            return (a.Y[c] || []).concat(a.Y[4])
        }, b);
        fg(12, function(c) {
            return void Kn(a, c)
        }, b);
        fg(16, function(c, d) {
            return void Jn(a, c, d)
        }, b)
    }

    function Hn(a, b) {
        return (a = hb(a, function(c) {
            return J(c, 1) === b
        })) && G(a, cm, 2) || []
    }

    function Ln(a, b) {
        var c = G(a, am, 2),
            d = c.length,
            e = dc(C(a, 8), 0);
        a = d * dc(C(a, 1), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * od());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = O(Of).H;
        return !c || e && !De(E(c, ve, 3), e) ? null : c
    };

    function Pn() {
        this.h = function() {}
    }

    function Qn(a, b) {
        a.h = gg(14, b, function() {})
    }

    function Rn(a) {
        O(Pn).h(a)
    };
    var Sn, Tn, Un, Vn, Wn, Xn;

    function Yn(a) {
        var b = a.nb,
            c = a.H,
            d = a.lb,
            e = void 0 === a.Qa ? wn() : a.Qa,
            f = void 0 === a.Ra ? 0 : a.Ra;
        a = void 0 === a.J ? new Kf(null != (Vn = null == (Sn = E(b, gm, 5)) ? void 0 : dc(C(Sn, 2), 0)) ? Vn : 0, null != (Wn = null == (Tn = E(b, gm, 5)) ? void 0 : dc(C(Tn, 4), 0)) ? Wn : 0, null != (Xn = null == (Un = E(b, gm, 5)) ? void 0 : I(Un, 3)) ? Xn : !1) : a.J;
        e.hasOwnProperty("init-done") ? (gg(12, e, function() {})(fb(G(b, em, 2), function(g) {
            return g.toJSON()
        })), gg(13, e, function() {})(fb(G(b, He, 1), function(g) {
            return g.toJSON()
        }), f), c && gg(14, e, function() {})(c), Zn(f, e)) : (On(O(Fn).init(G(b,
            em, 2), f, a, d), e), hg(e), ig(e), jg(e), Zn(f, e), bg(G(b, He, 1), [f], a, void 0, !0), Pf = Pf || !(!d || !d.sb), Rn(Dn), c && Rn(c))
    }

    function Zn(a, b) {
        var c = b = void 0 === b ? wn() : b;
        lg(O(kg), c, a);
        $n(b, a);
        a = b;
        Qn(O(Pn), a);
        O(wi).m()
    }

    function $n(a, b) {
        var c = O(wi);
        c.i = function(d, e) {
            return gg(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return gg(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return gg(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return gg(8, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            gg(15, a, function() {})(b)
        }
    };

    function ao(a) {
        var b = O(kg).l(a);
        a = sn(O(mn), a, b);
        ng.Aa(1085, a)
    }

    function bo(a, b, c) {
        var d = U(a);
        if (d.plle) Zn(1, wn(a));
        else {
            d.plle = !0;
            d = E(b, hm, 12);
            var e = I(b, 9);
            Yn({
                nb: d,
                H: vn(c, b),
                lb: {
                    ja: e && !!a.google_disable_experiments,
                    sb: e
                },
                Qa: wn(a),
                Ra: 1
            });
            if (c = ec(b, 15)) c = Number(c), O(kg).j(c);
            b = v(Sb(b, 19));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, O(kg).h(c);
            ao(12);
            ao(10);
            a = hd(a) || a;
            ak(a.location, "google_mc_lab") && O(kg).h(44738307);
            ak(a.location, "google_auto_storify_swipeable") && O(kg).h(44773747);
            ak(a.location, "google_auto_storify_scrollable") && O(kg).h(44773746);
            ak(a.location,
                "google_pga_monetization") && O(kg).h(44779794)
        }
    };
    var co = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function eo(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function V(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Ri.call(this, a, b);
        this.la = c;
        this.ub = d
    }
    w(V, Ri);
    V.prototype.va = function() {
        return this.la
    };
    V.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function fo(a) {
        return function(b) {
            return !!(b.la & a)
        }
    };
    var go = {},
        ho = (go.image_stacked = 1 / 1.91, go.image_sidebyside = 1 / 3.82, go.mobile_banner_image_sidebyside = 1 / 3.82, go.pub_control_image_stacked = 1 / 1.91, go.pub_control_image_sidebyside = 1 / 3.82, go.pub_control_image_card_stacked = 1 / 1.91, go.pub_control_image_card_sidebyside = 1 / 3.74, go.pub_control_text = 0, go.pub_control_text_card = 0, go),
        io = {},
        jo = (io.image_stacked = 80, io.image_sidebyside = 0, io.mobile_banner_image_sidebyside = 0, io.pub_control_image_stacked = 80, io.pub_control_image_sidebyside = 0, io.pub_control_image_card_stacked =
            85, io.pub_control_image_card_sidebyside = 0, io.pub_control_text = 80, io.pub_control_text_card = 80, io),
        ko = {},
        lo = (ko.pub_control_image_stacked = 100, ko.pub_control_image_sidebyside = 200, ko.pub_control_image_card_stacked = 150, ko.pub_control_image_card_sidebyside = 250, ko.pub_control_text = 100, ko.pub_control_text_card = 150, ko);

    function mo(a) {
        var b = 0;
        a.X && b++;
        a.T && b++;
        a.U && b++;
        if (3 > b) return {
            W: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.X.split(",");
        var c = a.U.split(",");
        a = a.T.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            W: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            W: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                W: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                W: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            U: d,
            T: e,
            Xa: b
        }
    }

    function no(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var oo = lb("script");

    function po(a, b, c, d, e, f, g, h, k, l, m, p) {
        this.A = a;
        this.Z = b;
        this.la = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.N = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.C = void 0 === h ? null : h;
        this.I = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.M = void 0 === p ? null : p;
        this.O = this.B = this.u = null
    }
    po.prototype.size = function() {
        return this.Z
    };

    function qo(a, b, c) {
        null != a.la && (c.google_responsive_formats = a.la);
        null != a.N && (c.google_safe_for_responsive_override = a.N);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.A;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.C && (c.gfwroml = a.C);
        null != a.I && (c.gfwromr = a.I);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.M && (c.gfwroz = a.M);
        null != a.u && (c.gml = a.u);
        null != a.B && (c.gmr = a.B);
        null != a.O && (c.gzi = a.O);
        b = hd(window) || window;
        ak(b.location, "google_responsive_dummy_ad") &&
            (jb([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + oo + ">window.top.postMessage('" + a + "', '*');\n          </" + oo + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var ro = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function so(a, b) {
        Ri.call(this, a, b)
    }
    w(so, Ri);
    so.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.R, Math.round(a)))
    };

    function to(a, b) {
        uo(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new po(9, new so(a, Math.floor(a * b.google_phwr)));
        var c = bd();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * ho.mobile_banner_image_sidebyside + jo.mobile_banner_image_sidebyside) + 96), a = {
            ga: a,
            fa: c,
            T: 1,
            U: 12,
            X: "mobile_banner_image_sidebyside"
        }) : (a = no(a), a = {
            ga: a.width,
            fa: a.height,
            T: 1,
            U: 13,
            X: "image_sidebyside"
        }) : (a = no(a), a = {
            ga: a.width,
            fa: a.height,
            T: 4,
            U: 2,
            X: "image_stacked"
        });
        vo(b, a);
        return new po(9, new so(a.ga,
            a.fa))
    }

    function wo(a, b) {
        uo(a, b);
        var c = mo({
            U: b.google_content_recommendation_rows_num,
            T: b.google_content_recommendation_columns_num,
            X: b.google_content_recommendation_ui_type
        });
        if (c.W) a = {
            ga: 0,
            fa: 0,
            T: 0,
            U: 0,
            X: "image_stacked",
            W: c.W
        };
        else {
            var d = 2 === c.Xa.length && 468 <= a ? 1 : 0;
            var e = c.Xa[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = lo[e];
            for (var g = c.T[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.U[d];
            d = Math.floor(((a - 8 * f - 8) / f * ho[e] + jo[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    Eb: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    Eb: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                ga: a.width,
                fa: a.height,
                T: f,
                U: c,
                X: e
            }
        }
        if (a.W) throw new T(a.W);
        vo(b, a);
        return new po(9, new so(a.ga, a.fa))
    }

    function uo(a, b) {
        if (0 >= a) throw new T("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function vo(a, b) {
        a.google_content_recommendation_ui_type = b.X;
        a.google_content_recommendation_columns_num = b.T;
        a.google_content_recommendation_rows_num = b.U
    };

    function xo(a, b) {
        Ri.call(this, a, b)
    }
    w(xo, Ri);
    xo.prototype.h = function() {
        return this.R
    };
    xo.prototype.i = function(a, b, c) {
        Qi(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var yo = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function zo(a, b) {
        Ri.call(this, a, b)
    }
    w(zo, Ri);
    zo.prototype.h = function() {
        return Math.min(1200, this.R)
    };

    function Ao(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = Li(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = ch(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && Oi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Qi(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new T("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new po(11, new Ri(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new T("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new T("Invalid height: height=" + f);
            if (50 > f) throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new T("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new po(11, new Ri(a, f))
        }
        d = yo[f];
        if (!d) throw new T("Invalid data-ad-layout value: " + f);
        c = Vi(c, b);
        b = ch(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new po(11, "in-article" == f ? new zo(a, b) : new Ri(a, b))
    };

    function Bo(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Co(a, b) {
        for (var c = Do.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Eo = [new V(970, 90, 2), new V(728, 90, 2), new V(468, 60, 2), new V(336, 280, 1), new V(320, 100, 2), new V(320, 50, 2), new V(300, 600, 4), new V(300, 250, 1), new V(250, 250, 1), new V(234, 60, 2), new V(200, 200, 1), new V(180, 150, 1), new V(160, 600, 4), new V(125, 125, 1), new V(120, 600, 4), new V(120, 240, 4), new V(120, 120, 1, !0)],
        Do = [Eo[6], Eo[12], Eo[3], Eo[0], Eo[7], Eo[14], Eo[1], Eo[8], Eo[10], Eo[4], Eo[15], Eo[2], Eo[11], Eo[5], Eo[13], Eo[9], Eo[16]];

    function Fo(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            F: a,
            G: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Go(b) || e.google_ad_resize ? (b = Mi(a, c, d, e), c = !0 !== b ? {
            F: a,
            G: b
        } : {
            F: ch(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        b = c.G;
        return !0 !== b ? {
            F: a,
            G: b
        } : d.parentElement ? {
            F: c.F,
            G: b
        } : {
            F: a,
            G: b
        }
    }

    function Ho(a, b, c, d, e) {
        var f = sk(247, function() {
                return Fo(a, b, c, d, e)
            }),
            g = f.F;
        f = f.G;
        var h = !0 === f,
            k = L(d.style.width),
            l = L(d.style.height),
            m = Io(g, b, c, d, e, h);
        g = m.da;
        h = m.ba;
        var p = m.va;
        m = m.Wa;
        var r = Jo(b, p),
            y, F = (y = Si(d, c, "marginLeft", L)) ? y + "px" : "",
            z = (y = Si(d, c, "marginRight", L)) ? y + "px" : "";
        y = Si(d, c, "zIndex") || "";
        return new po(r, g, p, null, m, f, h, F, z, l, k, y)
    }

    function Go(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Io(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, ch(c)) ? 4 : 3 : Ki(b);
        var g = !1,
            h = !1,
            k = 488 > ch(c);
        if (k) {
            var l = Fi(d, c);
            var m = Vi(d, c);
            g = !m && l;
            h = m && l
        }
        m = [Ti(a), fo(b)];
        m.push(Ui(k, c, d, h));
        null != e.google_max_responsive_height && m.push(Xi(e.google_max_responsive_height));
        k = [function(r) {
            return !r.ub
        }];
        if (g || h) g = Yi(c, d), k.push(Xi(g));
        var p = Co(Bo(m), Bo(k));
        if (!p) throw new T("No slot size for availableWidth=" + a);
        m = sk(248, function() {
            var r;
            a: if (f) {
                if (e.gfwrnh && (r = L(e.gfwrnh))) {
                    r = {
                        da: new xo(a, r),
                        ba: !0
                    };
                    break a
                }
                r =
                    a / 1.2;
                var y = Math;
                var F = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var z = Infinity;
                else {
                    z = d;
                    var H = Infinity;
                    do {
                        var X = Si(z, c, "height", L);
                        X && (H = Math.min(H, X));
                        (X = Si(z, c, "maxHeight", L)) && (H = Math.min(H, X))
                    } while ((z = z.parentElement) && "HTML" != z.tagName);
                    z = H
                }
                y = F.call(y, r, z);
                if (y < .5 * r || 100 > y) y = r;
                r = {
                    da: new xo(a, Math.floor(y)),
                    ba: y < r ? 102 : !0
                }
            } else r = {
                da: p,
                ba: 100
            };
            return r
        });
        g = m.da;
        m = m.ba;
        return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
            da: Ko(a,
                c, d, g, e),
            ba: !1,
            va: b,
            Wa: l
        } : {
            da: g,
            ba: m,
            va: b,
            Wa: l
        }
    }

    function Jo(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function Ko(a, b, c, d, e) {
        var f = e.google_ad_height || Si(c, b, "height", L);
        b = Ao(a, b, c, f, e).size();
        return b.R * b.height() > a * d.height() ? new V(b.R, b.height(), 1) : d
    };

    function Lo(a, b, c, d, e) {
        var f;
        (f = ch(b)) ? 488 > ch(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Qi(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        var g = f;
        f = g.F;
        g = g.G;
        if (!0 !== g || a == f) return new po(12, new Ri(a, d), null, null, !0, g, 100);
        a = Io(f, "auto", b, c, e, !0);
        return new po(1, a.da, a.va, 2, !0, g, a.ba)
    };

    function Mo(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = v(ro), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Go(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (No(b), 1);
        if (27 === b.google_reactive_ad_format) return No(b), 1
    }

    function Oo(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Si(b, d, "width", L) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = Po(a, e, b, c, d)) ? f : Ho(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        qo(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function Po(a, b, c, d, e) {
        var f = d.google_ad_height || Si(c, e, "height", L);
        switch (a) {
            case 5:
                return f = sk(247, function() {
                    return Fo(b, d.google_ad_format, e, c, d)
                }), a = f.F, f = f.G, !0 === f && b != a && Qi(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), to(a, d);
            case 9:
                return wo(b, d);
            case 8:
                return Ao(b, e, c, f, d);
            case 10:
                return Lo(b, e, c, f, d)
        }
    }

    function No(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Qo(a, b) {
        var c = hd(b);
        if (c) {
            c = ch(c);
            var d = kd(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Ro(a) {
        pk.Ba(function(b) {
            b.shv = String(a);
            b.mjsv = "m202302130101";
            var c = O(kg).i(),
                d = U(x);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function So(a) {
        var b = a.Bb;
        return a.kb || ("dev" === b ? "dev" : "")
    };
    var To = "undefined" === typeof sttc ? void 0 : sttc;

    function Uo(a) {
        var b = pk;
        try {
            return wc(a, te), new jm(JSON.parse(a))
        } catch (c) {
            b.L(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new jm
    };

    function Vo(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Wo(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Xo() {
        var a = new q.Set,
            b = ck();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Yo(a) {
        a = a.id;
        return null != a && (Xo().has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift"))
    }

    function Zo(a, b, c) {
        if (!a.sources) return !1;
        switch ($o(a)) {
            case 2:
                var d = ap(a);
                if (d) return c.some(function(f) {
                    return bp(d, f)
                });
            case 1:
                var e = cp(a);
                if (e) return b.some(function(f) {
                    return bp(e, f)
                })
        }
        return !1
    }

    function $o(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function cp(a) {
        return dp(a, function(b) {
            return b.currentRect
        })
    }

    function ap(a) {
        return dp(a, function(b) {
            return b.previousRect
        })
    }

    function dp(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function ep() {
        N.call(this);
        this.l = this.i = this.M = this.I = this.B = 0;
        this.Ka = this.Ha = Number.NEGATIVE_INFINITY;
        this.Da = this.Fa = this.Ga = this.Ia = this.Na = this.m = this.Ma = this.Z = 0;
        this.Ea = !1;
        this.N = this.C = this.u = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.La = a ? a.getAttribute("data-google-query-id") : null;
        this.O = null;
        this.Ja = !1;
        this.na = function() {}
    }
    w(ep, N);

    function fp() {
        var a = new ep;
        if (R(Wh)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, a.J().observe({
                    type: c,
                    buffered: !0
                });
                gp(a)
            }
        }
    }
    ep.prototype.J = function() {
        var a = this;
        this.O || (this.O = new PerformanceObserver(fj(640, function(b) {
            var c = hp !== window.scrollX || ip !== window.scrollY ? [] : jp,
                d = kp();
            b = v(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    if (!e.hadRecentInput) {
                        a.B += Number(e.value);
                        Number(e.value) > a.I && (a.I = Number(e.value));
                        a.M += 1;
                        var f = Zo(e, c, d);
                        f && (a.m += e.value, a.Ia++);
                        if (5E3 < e.startTime - a.Ha || 1E3 < e.startTime - a.Ka) a.Ha = e.startTime, a.i = 0, a.l = 0;
                        a.Ka = e.startTime;
                        a.i += e.value;
                        f && (a.l += e.value);
                        a.i > a.Z && (a.Z = a.i, a.Na = a.l, a.Ma = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.Ga = Math.floor(e.renderTime || e.loadTime);
                    a.Fa = e.size;
                    break;
                case "first-input":
                    a.Da = Number((e.processingStart - e.startTime).toFixed(3));
                    a.Ea = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.u += e, a.C = Math.max(a.C, e), a.N += 1
            }
        })));
        return this.O
    };

    function gp(a) {
        var b = fj(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && lp(a)
            }),
            c = fj(641, function() {
                return void lp(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.na = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            a.J().disconnect()
        }
    }
    ep.prototype.h = function() {
        N.prototype.h.call(this);
        this.na()
    };

    function lp(a) {
        if (!a.Ja) {
            a.Ja = !0;
            a.J().takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Wo("cls", a.B), b += Wo("mls", a.I), b += Vo("nls", a.M), window.LayoutShiftAttribution && (b += Wo("cas", a.m), b += Vo("nas", a.Ia)), b += Wo("wls", a.Z), b += Wo("tls", a.Ma), window.LayoutShiftAttribution && (b += Wo("was", a.Na)));
            window.LargestContentfulPaint && (b += Vo("lcp", a.Ga), b += Vo("lcps", a.Fa));
            window.PerformanceEventTiming && a.Ea && (b += Vo("fid", a.Da));
            window.PerformanceLongTaskTiming &&
                (b += Vo("cbt", a.u), b += Vo("mbt", a.C), b += Vo("nlt", a.N));
            for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Yo(e.value) && c++;
            b += Vo("nif", c);
            b += Vo("ifi", Od(window));
            c = O(kg).i();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.La ? "&qqid=" + encodeURIComponent(a.La) : Vo("pvsid", Bd(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            yf(a)
        }
    }

    function bp(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function kp() {
        var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(Yo),
            b = [].concat(ka(Xo())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        hp = window.scrollX;
        ip = window.scrollY;
        return jp = [].concat(ka(a), ka(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var hp = void 0,
        ip = void 0,
        jp = [];
    var W = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function mp(a, b, c) {
        N.call(this);
        var d = this;
        this.l = a;
        this.i = [];
        b && np() && this.i.push(W);
        c && this.i.push(Y);
        if (document.hasTrustToken && !R(ri)) {
            var e = new q.Map;
            this.i.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.l ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof q.Map ? new q.Map([].concat(ka(e), ka(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof q.Map || (window.goog_tt_promise_map =
                new q.Map)
        }
    }
    w(mp, N);

    function np() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function op() {
        var a = void 0 === a ? window.document : a;
        var b = O(wi).h(ui.h, ui.defaultValue);
        Ad(b, a)
    }

    function pp(a, b) {
        return a || ".google.ch" === b || "function" === typeof M.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function qp() {
        var a = W.issuerOrigin + W.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: W.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(W.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(W.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(W.issuerOrigin, 6, !0) : Z(W.issuerOrigin, 5)
        })
    }

    function rp() {
        var a = W.issuerOrigin + W.issuancePath;
        Z(W.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(W.issuerOrigin, 10);
            return qp()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(W.issuerOrigin, 10), qp();
            Z(W.issuerOrigin, 9)
        })
    }

    function sp() {
        Z(W.issuerOrigin, 13);
        return document.hasTrustToken(W.issuerOrigin).then(function(a) {
            return a ? qp() : rp()
        })
    }

    function tp() {
        Z(Y.issuerOrigin, 13);
        if (q.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return q.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return q.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return q.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return q.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = Bd(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return q.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return q.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = xi(ti);
                        Math.random() <= f && Fd({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function up(a) {
        if (document.hasTrustToken && !R(ri) && a.l) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof q.Map) {
                var c = [];
                if (a.i.some(function(e) {
                        return e.issuerOrigin === W.issuerOrigin
                    })) {
                    var d = b.get(W.issuerOrigin);
                    d || (d = sp(), b.set(W.issuerOrigin, d));
                    c.push(d)
                }
                a.i.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = tp(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && q.Promise && q.Promise.all) return q.Promise.all(c)
            }
        }
    };

    function vp(a) {
        K.call(this, a)
    }
    w(vp, K);
    vp.prototype.getVersion = function() {
        return ec(this, 2)
    };

    function wp(a) {
        K.call(this, a, -1, xp)
    }
    w(wp, K);

    function yp(a, b) {
        return D(a, 2, b)
    }

    function zp(a, b) {
        return D(a, 3, b)
    }

    function Ap(a, b) {
        return D(a, 4, b)
    }

    function Bp(a, b) {
        return D(a, 5, b)
    }

    function Cp(a, b) {
        return D(a, 9, b)
    }

    function Dp(a, b) {
        return cc(a, 10, b)
    }

    function Ep(a, b) {
        return D(a, 11, b)
    }

    function Fp(a, b) {
        return D(a, 1, b)
    }

    function Gp(a, b) {
        return D(a, 7, b)
    }
    var xp = [10, 6];
    var Hp = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Ip() {
        var a;
        return null != (a = M.google_tag_data) ? a : M.google_tag_data = {}
    }

    function Jp() {
        var a, b;
        return "function" === typeof(null == (a = M.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function Kp() {
        if (!Jp()) return null;
        var a = Ip();
        if (a.uach_promise) return a.uach_promise;
        var b = M.navigator.userAgentData.getHighEntropyValues(Hp).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function Lp(a) {
        var b;
        return Ep(Dp(Bp(yp(Fp(Ap(Gp(Cp(zp(new wp, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new vp;
            d = D(d, 1, c.brand);
            return D(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Mp() {
        var a, b;
        return null != (b = null == (a = Kp()) ? void 0 : a.then(function(c) {
            return Lp(c)
        })) ? b : null
    };

    function Np(a, b) {
        b.google_ad_host || (a = Fm(a)) && (b.google_ad_host = a)
    }

    function Op(a, b, c) {
        c = void 0 === c ? "" : c;
        M.google_sa_impl && !M.document.getElementById("google_shimpl") && (delete M.google_sa_queue, delete M.google_sa_impl);
        M.google_sa_queue || (M.google_sa_queue = [], M.google_process_slots = tk(215, function() {
            return Pp(M.google_sa_queue)
        }), a = Qp(c, a, b), id(M.document, a).id = "google_shimpl")
    }

    function Pp(a) {
        var b = a.shift();
        "function" === typeof b && sk(216, b);
        a.length && x.setTimeout(tk(215, function() {
            return Pp(a)
        }), 0)
    }

    function Rp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Qp(a, b, c) {
        b = I(c, 4) ? b.Cb : b.Db;
        var d = {};
        a: {
            if (I(c, 4)) {
                if (a = a || kn(M)) {
                    c = {};
                    a = (c.client = a, c.plah = M.location.host, c);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        Sp(a, d);
        Sp(yi() ? {
            bust: yi()
        } : {}, d);
        return Uc(b, d)
    }

    function Sp(a, b) {
        pd(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Tp(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            for (var c = [x.top], d = [], e = 0, f; f = c[e++];) {
                b && !gd(f) || d.push(f);
                try {
                    if (f.frames)
                        for (var g = 0; g < f.frames.length && 1024 > c.length; ++g) c.push(f.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < d.length; b++) try {
                var h = d[b].frames.google_esf;
                if (h) {
                    Hd = h;
                    break a
                }
            } catch (k) {}
            Hd = null
        }
        if (Hd) return null;d = jd("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = Wc(a.Jb).toString();d.style.display = "none";
        return d
    }

    function Up(a, b, c, d) {
        Vp(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_host");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = jd("DIV");
            h.id = e + "_host";
            var k = h.style;
            k.border = "none";
            k.height = f + "px";
            k.width = g + "px";
            k.margin = "0px";
            k.padding = "0px";
            k.position = "relative";
            k.visibility = "visible";
            k.backgroundColor = "transparent";
            h.style.display = "inline-block";
            c.appendChild(h);
            return {
                ob: e,
                Ib: h
            }
        })
    }

    function Vp(a, b, c, d, e) {
        var f = e(a, b);
        e = f.ob;
        Wp(a, c, b);
        c = Ua;
        var g = (new Date).getTime();
        b.google_lrv = ec(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_host") ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        Rp(a, function() {
            var h = f.Ib;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h) throw Error("no_div");
            h = R(Ph) ? {
                pubWin: a,
                vars: b,
                innerInsElement: h
            } : {
                pubWin: a,
                vars: b,
                outerInsElement: h,
                innerInsElement: h
            };
            (h = a.google_sa_impl(h)) && vk(911, h)
        }, d)
    }

    function Wp(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !co[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = qd(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var p = k[m];
                            if (p.nodeName && p.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === p) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var r = a.parent;
                for (e = 0; r && r !== a && 25 > e; ++e) {
                    var y = r.frames;
                    for (d = 0; d < y.length; ++d)
                        if (a === y[d]) {
                            b.push(d);
                            break
                        }
                    a = r;
                    r = a.parent
                }
            } catch (F) {}
            c.google_ad_dom_fingerprint = qd(h + b.join()).toString()
        }
    }

    function Xp() {
        var a = hd(x);
        a && (a = ah(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Yp(a) {
        op();
        pp(nm(), ec(a, 8)) || tk(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = R(b.PeriodicSyncManager ? pi : qi);
            var c = R(si);
            b = new mp(!0, b, c);
            0 < xi(vi) ? M.google_trust_token_operation_promise = up(b) : up(b)
        })();
        a = Mp();
        null != a && a.then(function(b) {
            a: {
                Gb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), tc);
                    break a
                } finally {
                    Gb = !1
                }
                c = void 0
            }
            M.google_user_agent_client_hint = c
        });
        xn()
    };

    function Zp(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function $p(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = fd(c, "client");
            d && (b.google_ad_client = Zp("google_ad_client", d));
            (c = fd(c, "host")) && (b.google_ad_host = Zp("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Va(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Zp(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function aq(a) {
        if (a = Kd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function bq(a, b, c, d) {
        $p(a, b);
        if (c.document && c.document.body && !Mo(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Qo(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!co[e + "x" + g];
                var h = f;
                if (e) {
                    var k = eo(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new T("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = Ho(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                qo(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.R > f && !e && (b.google_ad_width = g.R, a.style.width = g.R + "px")
            }
        }
        e = a.offsetWidth || Si(a, c, "width", L) || b.google_ad_width || 0;
        if (488 > ch(c)) {
            f = hd(c) || c;
            g = b.google_ad_client;
            if (d = ak(f.location, "google_responsive_slot_preview") || R(Oh) || pm(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Mo(c, b) || Hi(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = kd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!jb(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = Li(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (b.google_resizing_allowed = !0, b.ovlp = !0, b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1, d = !0) : d = !1
        } else d = !1;
        if (e = Mo(c, b)) Oo(e, a, b, c, d);
        else {
            if (Hi(a, b)) {
                if (d = kd(a, c)) a.style.width = d.width, a.style.height = d.height, Gi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = aq(c)
            } else Gi(a.style, b);
            c.location &&
                "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Oo(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Mi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };
    var cq = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        dq = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        eq = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        fq = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        gq = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function hq(a, b, c, d) {
        N.call(this);
        this.I = b;
        this.C = c;
        this.M = d;
        this.B = new q.Map;
        this.u = new q.Map;
        this.O = new q.Map;
        this.N = new q.Map;
        this.m = void 0;
        this.l = a
    }
    w(hq, N);
    hq.prototype.h = function() {
        delete this.i;
        this.B.clear();
        this.u.clear();
        this.O.clear();
        this.N.clear();
        this.m && (Ic(this.l, "message", this.m), delete this.m);
        delete this.l;
        delete this.M;
        N.prototype.h.call(this)
    };

    function iq(a) {
        if (a.i) return a.i;
        a.C && a.C(a.l) ? a.i = a.l : a.i = vd(a.l, a.I);
        var b;
        return null != (b = a.i) ? b : null
    };

    function jq(a, b) {
        (0, a.__uspapi)("getUSPData", 1, function(c, d) {
            b.callback({
                consentData: null != c ? c : void 0,
                mb: d ? void 0 : 2
            })
        })
    }
    var kq = {
        vb: function(a) {
            return a.callback
        },
        wb: function(a, b) {
            a = {};
            return a.__uspapiCall = {
                callId: b,
                command: "getUSPData",
                version: 1
            }, a
        },
        yb: function(a, b) {
            b = b.__uspapiReturn;
            var c;
            a({
                consentData: null != (c = b.returnValue) ? c : void 0,
                mb: b.success ? void 0 : 2
            })
        }
    };

    function lq(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Ab: b.__uspapiReturn.callId
        }
    }

    function mq(a) {
        N.call(this);
        this.caller = new hq(a, "__uspapiLocator", function(b) {
            return "function" === typeof b.__uspapi
        }, lq);
        this.caller.B.set("getDataWithCallback", jq);
        this.caller.u.set("getDataWithCallback", kq)
    }
    w(mq, N);
    mq.prototype.h = function() {
        yf(this.caller);
        N.prototype.h.call(this)
    };
    mq.prototype.m = function() {
        return !!iq(this.caller)
    };

    function nq(a) {
        K.call(this, a)
    }
    w(nq, K);
    var oq = xc(nq);

    function pq(a, b) {
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, function(c) {
            c = oq(c);
            b.callback({
                consentData: c
            })
        })
    }
    var qq = {
        vb: function(a) {
            return a.callback
        },
        wb: function(a, b) {
            var c = {};
            return c.__fciCall = {
                callId: b,
                command: a.command
            }, c
        },
        yb: function(a, b) {
            a({
                consentData: b
            })
        }
    };

    function rq(a) {
        a = oq(a.data.__fciReturn);
        return {
            payload: a,
            Ab: C(a, 1)
        }
    }

    function sq(a) {
        N.call(this);
        this.i = null;
        this.l = !1;
        this.caller = new hq(a, "googlefcPresent", void 0, rq);
        this.caller.B.set("getDataWithCallback", pq);
        this.caller.u.set("getDataWithCallback", qq)
    }
    w(sq, N);
    sq.prototype.h = function() {
        yf(this.caller);
        N.prototype.h.call(this)
    };
    sq.prototype.m = function() {
        this.l || (this.i = iq(this.caller), this.l = !0);
        return !!this.i
    };
    var tq = ja(["(a=0)=>{let b;const c=class{};}"]);

    function uq() {
        var a = tq[0];
        var b = Oc();
        a = b ? b.createScript(a) : a;
        a = new Qc(a, Pc);
        try {
            b = window;
            var c = a instanceof Qc && a.constructor === Qc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return {
                supports: !0,
                error: ""
            }
        } catch (d) {
            return {
                supports: !1,
                error: String(d)
            }
        }
    };

    function vq(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Hc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function wq(a) {
        N.call(this);
        this.l = a;
        this.i = null
    }
    w(wq, N);
    wq.prototype.h = function() {
        N.prototype.h.call(this)
    };
    wq.prototype.m = function() {
        var a, b;
        (b = "function" === typeof(null == (a = this.l) ? void 0 : a.__uspapi)) || (a = this.i ? this.i : this.i = vd(this.l, "__uspapiLocator"), b = null != a);
        return b
    };

    function xq(a) {
        N.call(this);
        this.u = a;
        this.i = null;
        this.l = !1
    }
    w(xq, N);
    xq.prototype.m = function() {
        if (!this.l) {
            if (!this.i) {
                var a = vd(this.u, "googlefcPresent");
                this.i = a ? a : null
            }
            this.l = !0
        }
        return !!this.i
    };
    var yq = null,
        zq = [],
        Aq = new q.Map,
        Bq = -1;

    function Cq(a) {
        return $i.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function Dq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Eq(a, b, c)
    }

    function Eq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = bq);
        var e = b.google_reactive_ads_config;
        e || bq(a, b, d, c);
        Np(d, b);
        if (!Fq(a, b, d)) {
            e || (d.google_lpabyc = Ii(a, d) + Si(a, d, "height", L));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(M).page_contains_reactive_tag && !U(M).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Dm(!1);
                        return
                    }
                    throw new T("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(M).page_contains_reactive_tag = !0;
                Dm(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Nd(d);
            pd(fn, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(M).first_tag_on_page || 0);
            sk(164, function() {
                Up(d, b, a, c)
            })
        }
    }

    function Fq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Bm(c);
        if (f && f.Oa && "on" !== b.google_adtest && !e) {
            e = Ii(a, c);
            var g = bh(c).clientHeight;
            if (!f.wa || f.wa && ((0 == g ? null : e / g) || 0) >= f.wa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = La(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Gb && (null !== ud(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== ud(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = kd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Gq(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Cq(e) && "reserved" !== e.dataset.adsbygoogleStatus && (!a || d.id === a)) return d
        }
        return null
    }

    function Hq(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    Iq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function Jq() {
        var a = jd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        xd(a, {
            display: "none"
        });
        return a
    }

    function Kq(a, b) {
        var c = {},
            d = Am();
        pd(Yg, function(g, h) {
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : t(d, "includes").call(d, g) && (c[h] = !1)
        });
        Ka(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var e = Jq();
        Dd.body.appendChild(e);
        var f = {};
        f = (f.google_reactive_ads_config = c, f.google_ad_client = a.google_ad_client, f);
        f.google_pause_ad_requests = !!U(M).pause_ad_requests;
        Dq(e, f, b)
    }

    function Lq(a, b) {
        function c() {
            return Kq(a, b)
        }
        ah(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) c();
        else {
            var e = Gc(tk(191, c));
            Hc(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Iq(a, b, c) {
        var d = {};
        sk(165, function() {
            return Mq(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Nq(a) {
        delete a.google_checked_head;
        pd(a, function(b, c) {
            Zi[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function Oq(a, b) {
        var c = M.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || M.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) Pq(c);
            else {
                var e = {};
                $p(c, e);
                Nq(e);
                var f = Mc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                M.adsbygoogle || (M.adsbygoogle = []);
                d = M.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                var g;
                e.google_adbreak_test || (null == (g = gc(b, Yl, 13, Qb)) ? 0 : I(g, 3)) && R(Th) ? Qq(f, a) : vq(function() {
                    Qq(f, a)
                })
            }
        }
    }

    function Pq(a) {
        var b = U(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = fd(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new T("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Rq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function Mq(a, b, c, d) {
        if (null == a) throw new T("push() called with no parameters.");
        Nb(d, Zl, 14) && Sq(a, Ub(lm(d), 1), ec(d, 2));
        var e = Rq(a);
        if (0 !== e) d = Em(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ua), null == yq ? (Tq(a), zq.push(a)) : 3 === e ? sk(787, function() {
            yq.handleAdConfig(a)
        }) : vk(730, yq.handleAdBreak(a));
        else {
            Ua = (new Date).getTime();
            Op(c, d, Uq(a));
            Vq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new T("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Wq(a, d);
            else if ((e = a.params) && pd(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Xq(a.element);
                $p(e, b);
                c = U(x).head_tag_slot_vars || {};
                pd(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !U(x).head_tag_slot_vars) throw new T("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new T("Ad client is missing from the slot.");
                var f = (c = 0 === (U(M).first_tag_on_page || 0) && Zm(b)) && $m(c);
                c && (f || (Wq(c, d), U(M).skip_next_reactive_tag = !0), f && Yq(c));
                0 === (U(M).first_tag_on_page || 0) && (U(M).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(M).pause_ad_requests;
                Dq(e, b, d)
            }
        }
    }
    var Zq = !1;

    function Sq(a, b, c) {
        Zq || (Zq = !0, a = Uq(a) || kn(M), uk("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function Uq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Vq() {
        if (R(Ih)) {
            var a = Bm(M);
            if (!(a = a && a.Oa)) {
                try {
                    var b = M.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Xl(b) : null;
                a = !(b && Wl(b) && b)
            }
            a || Cm(M, 1)
        }
    }

    function Yq(a) {
        Cd(function() {
            ah(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function Wq(a, b) {
        if (U(M).skip_next_reactive_tag) U(M).skip_next_reactive_tag = !1;
        else {
            0 === (U(M).first_tag_on_page || 0) && (U(M).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = U(x);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            an(a, b);
            Lq(a, b)
        }
    }

    function Xq(a) {
        if (a) {
            if (!Cq(a) && (a.id ? a = Gq(a.id) : a = null, !a)) throw new T("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new T("'element' is not a good DOM element.");
        } else if (a = Gq(), !a) throw new T("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function $q() {
        var a = new Kk(M),
            b = R(Zh) ? new mq(M) : new wq(M),
            c = R(Yh) ? new sq(M) : new xq(M);
        uk("cmpMet", {
            tcfv1: M.__cmp ? 1 : 0,
            tcfv2: Lk(a) ? 1 : 0,
            usp: b.m() ? 1 : 0,
            fc: c.m() ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function ar(a) {
        zk().S[Bk(26)] = !!Number(a)
    }

    function br(a) {
        Number(a) ? U(M).pause_ad_requests = !0 : (U(M).pause_ad_requests = !1, a = function() {
            if (!U(M).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                M.dispatchEvent(c)
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function cr(a) {
        uk("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        M._gfp_a_ = a
    }

    function dr(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function Qq(a, b) {
        b = Xm(Uc(b.Fb, yi() ? {
            bust: yi()
        } : {})).then(function(c) {
            null == yq && (c.init(a), yq = c, er())
        });
        vk(723, b);
        t(b, "finally").call(b, function() {
            zq.length = 0;
            uk("slotcar", {
                event: "api_ld",
                time: Date.now() - Ua,
                time_pr: Date.now() - Bq
            })
        })
    }

    function er() {
        for (var a = v(Aq), b = a.next(); !b.done; b = a.next()) {
            var c = v(b.value);
            b = c.next().value;
            c = c.next().value; - 1 !== c && (x.clearTimeout(c), Aq.delete(b))
        }
        a = {};
        for (b = 0; b < zq.length; a = {
                ma: a.ma,
                ha: a.ha
            }, b++) Aq.has(b) || (a.ha = zq[b], a.ma = Rq(a.ha), sk(723, function(d) {
            return function() {
                3 === d.ma ? yq.handleAdConfig(d.ha) : 2 === d.ma && vk(730, yq.handleAdBreakBeforeReady(d.ha))
            }
        }(a)))
    }

    function Tq(a) {
        var b = zq.length;
        if (2 === Rq(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === Bq && (Bq = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Aq.set(b, -1), uk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * xi(Uh));
            Aq.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        pk.cb(wk);
        sk(166, function() {
            var e = Uo(b);
            Ro(ec(e, 2));
            om(I(e, 6));
            d();
            Jd(16, [1, e.toJSON()]);
            var f = Ld(Kd(M)) || M,
                g = c(So({
                    kb: a,
                    Bb: ec(e, 2)
                }), e);
            sm(f, e);
            bo(f, e, null === M.document.currentScript ? 1 : un(g.Hb));
            vk(1086, rn());
            if (!Za() || 0 <= Wa(bb(), 11)) {
                rk(R(Xh));
                Yp(e);
                Jl();
                try {
                    fp()
                } catch (p) {}
                Xp();
                Oq(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    uk("new_abg_tag", {
                        value: "" + I(e, 16),
                        host_v: "" + I(e, 22),
                        frequency: .01
                    }, .01);
                    $q();
                    var k = {
                        push: function(p) {
                            Iq(p, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: ar
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: br
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: cr
                        }), Object.defineProperty(k, "onload", {
                            set: dr
                        })
                    } catch (p) {}
                    if (h)
                        for (var l = v(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Hq(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    (f = Tp(g)) && document.documentElement.appendChild(f);
                    f = uq();
                    uk("modern_js", {
                        fy: dc(C(e, 1), 0),
                        supports: String(f.supports),
                        c: 2012,
                        e: f.error
                    }, .01)
                }
            }
        })
    })("m202302130101", To, function(a, b) {
        var c = 2012 < dc(C(b, 1), 0) ? "_fy" + dc(C(b, 1), 0) : "",
            d = ec(b, 3),
            e = ec(b, 2);
        b = Md(cq, a, c);
        d = Md(dq, e, d);
        return {
            Fb: b,
            Db: Md(eq, a, c),
            Cb: Md(fq, a, c),
            kc: Md(gq, a, c),
            Jb: d,
            Hb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2012,\"r20230221\",\"r20190131\",null,null,null,null,\".google.com.tr\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[1227,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1232,null,null,[1]],[1225,null,null,[1]],[1190,null,null,[1]],[null,508040914,null,[null,100]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[10004,null,null,[1]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[506738119,null,null,[1]],[null,null,null,[null,null,null,[\"Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv\/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,1158,null,[null,45]],[null,501545963,null,[null,1]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[505942137,null,null,[1]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1112,null,[null,5]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[501545959,null,null,[1]],[null,1194,null,[null,1]],[500169372,null,null,[1]],[504834127,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]],[null,469675170,null,[null,30000]],[50227136,null,null,[1]],[485990406,null,null,[]],[501411886,null,null,[1]]],[[10,[[50,[[31071642],[31071643,[[1216,null,null,[1]]]]],null,72],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[10,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[10,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[null,[[44755592],[44755593],[44755594],[44755653],[44777509,[[1200,null,null,[1]]]]],null,51],[50,[[31071869],[31071870,[[1215,null,null,[1]]]]],null,72],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[10,[[31072348],[31072349,[[1228,null,null,[1]]]]]],[100,[[31072386],[31072387,[[10005,null,null,[1]]]]]],[100,[[31072435],[31072436,[[1234,null,null,[1]]]]]],[1000,[[31072439,[[null,null,14,[null,null,\"31072439\"]]],[6,null,null,null,6,null,\"31072439\"]],[31072440,[[null,null,14,[null,null,\"31072440\"]]],[6,null,null,null,6,null,\"31072440\"]]],[4,null,55],63],[1000,[[31072479,[[null,null,14,[null,null,\"31072479\"]]],[6,null,null,null,6,null,\"31072479\"]],[31072480,[[null,null,14,[null,null,\"31072480\"]]],[6,null,null,null,6,null,\"31072480\"]]],[4,null,55],63],[1000,[[31072531,[[null,null,14,[null,null,\"31072531\"]]],[6,null,null,null,6,null,\"31072531\"]],[31072532,[[null,null,14,[null,null,\"31072532\"]]],[6,null,null,null,6,null,\"31072532\"]]],[4,null,55],63],[1000,[[31072568,[[null,null,14,[null,null,\"31072568\"]]],[6,null,null,null,6,null,\"31072568\"]],[31072569,[[null,null,14,[null,null,\"31072569\"]]],[6,null,null,null,6,null,\"31072569\"]]],[4,null,55],63],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,54],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[10,[[44784140],[44784141,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44784142,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,54],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44779906],[44784478]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44776368],[44779257],[44785149]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[17,[[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[1,[[31072412,[[null,1103,null,[null,31072412]],[1121,null,null,[1]]]],[31072413,[[1120,null,null,[1]],[null,1103,null,[null,31072413]],[null,1114,null,[null,0.4]],[1121,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,117,1],[1,[[31072414,[[1120,null,null,[1]],[null,1103,null,[null,31072414]],[null,1114,null,[null,0.4]]]],[31072415,[[1120,null,null,[1]],[null,1103,null,[null,31072415]],[null,1114,null,[null,0.4]],[471262996,null,null,[1]]]]],[4,null,55],null,null,null,null,2,null,117,1],[5,[[31072416,[[null,1103,null,[null,31072416]]]],[31072417,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,31072417]],[501545959,null,null,[]]]],[31072418,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,31072418]],[null,1114,null,[null,0.4]]]]],[4,null,55],null,null,null,null,42,null,117,1],[1,[[31072421,[[null,1103,null,[null,31072421]]]],[31072422,[[1162,null,null,[1]],[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,31072422]],[501545959,null,null,[]]]],[31072423,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,31072423]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,192,null,117,1],[4,[[31072504,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,31072504]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]],[31072505,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,31072505]],[505942137,null,null,[]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,222,null,117,1],[20,[[44784436,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784436]],[null,1114,null,[null,0.4]]]],[44784437,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784437]],[null,1114,null,[null,0.4]],[504535903,null,null,[1]]]]],[4,null,55],null,null,null,null,72,null,117,1],[10,[[44784438,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,44784438]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]],[44784439,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,44784439]],[45388034,null,null,[1]],[null,45388309,null,[null,30]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,282,null,117,1],[20,[[44784460,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784460]],[null,1114,null,[null,0.4]]]],[44784461,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784461]],[null,1114,null,[null,0.4]],[502896280,null,null,[1]]]]],[4,null,55],null,null,null,null,112,null,117,1],[5,[[44784587,[[1120,null,null,[1]],[null,1195,null,[null,5]],[501545960,null,null,[1]],[null,1103,null,[null,44784587]],[null,1114,null,[null,0.4]],[null,1194,null,[null,2]]]],[44784588,[[1120,null,null,[1]],[null,1195,null,[null,5]],[501545960,null,null,[1]],[null,1103,null,[null,44784588]],[null,1114,null,[null,0.4]],[null,1194,null,[null,2]],[500922887,null,null,[1]]]]],[4,null,55],null,null,null,null,152,null,117,1],[20,[[44784641,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,44784641]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]],[44784642,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,44784642]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[502896280,null,null,[1]]]]],[4,null,55],null,null,null,null,242,null,117,1]]],[11,[[500,[[31072315,[[483374575,null,null,[]]]],[31072316,[[483374575,null,null,[1]]]]],[4,null,8,null,null,null,null,[\"sharedStorage\"]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31071662],[31071663,[[1974,null,null,[1]]]]]],[50,[[31071975],[31071976,[[1975,null,null,[1]]]]]],[null,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[50,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[200,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44784847,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],null,[[\"ca-pub-7154395153208957\"],[1,[null,[[[[null,0,null,null,null,null,\"NAV\"],1,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"HEADER\\u003eDIV.header-main.hidden-xs.hidden-sm.header-main--inverse\\u003eDIV.container\\u003eDIV.row.row--flex.row--vertical-center\"],4,[\"10px\",\"10px\",1],[2],null,null,null,1]],[[null,[1,3,2],null,\"3870204166\",null,null,[0,2],null,null,[0.5]]],[[[null,1,null,null,null,null,\"DIV.atbs-ceris-posts-latest-has--smallpost\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.post--horizontal-reverse.remove-margin-bottom-lastchild.post--horizontal-normal.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,3,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,0,null,null,null,null,\"DIV.single-content__wrap\\u003eOL\\u003eLI\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,2,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,3,null,null,null,null,\"DIV.single-content__wrap\\u003eOL\\u003eLI\"],[]],[[null,9,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,6,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,null,null,null,null,null,\"DIV.single-content__wrap\"],[null,null,null,null,null,null,\"P,P.has-text-align-justify,UL\"]],[[null,8,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,1,null,null,null,null,\"DIV.single-content\\u003eDIV.entry-content.typography-copy\\u003eUL\"],[null,null,null,null,null,null,\"LI\"]],[[null,5,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,7,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,4,null,null,null,null,\"DIV.js-ajax-load-post\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,4,null,null,null,null,\"DIV.atbs-ceris-main-col\\u003eDIV.atbs-ceris-block.listing_list_b\\u003eDIV\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.remove-margin-bottom-lastchild.post--horizontal-no-excerpt.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]],[[null,2,null,null,null,null,\"DIV.atbs-ceris-posts-latest-has--smallpost\\u003eDIV.posts-list\\u003eDIV.list-item\\u003eARTICLE.post.post--horizontal.post--horizontal-middle.post--horizontal-reverse.remove-margin-bottom-lastchild.post--horizontal-normal.icon-has-animation\\u003eDIV.post__text\"],[null,null,null,null,null,null,\"DIV.post__excerpt,H3.post__title\"]]]]]]],null,null,\"vnrom.net\",1662637840,[44759875,44759926,44759837,44777876]]");