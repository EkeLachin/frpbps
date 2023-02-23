(function() {
    var q;

    function aa(a) {
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
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var t = ca(this);

    function u(a, b) {
        if (b) a: {
            var c = t;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, h) {
            this.h = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = t[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });

    function ea(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function v(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function w(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var fa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ka = {
                    a: !0
                },
                la = {};
            try {
                la.__proto__ = ka;
                ia = la.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ha;

    function x(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (ma) ma(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.la = b.prototype
    }

    function na() {
        this.l = !1;
        this.i = null;
        this.m = void 0;
        this.h = 1;
        this.B = 0;
        this.j = null
    }

    function oa(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    }
    na.prototype.s = function(a) {
        this.m = a
    };

    function pa(a, b) {
        a.j = {
            ha: b,
            ia: !0
        };
        a.h = a.B
    }
    na.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.h = this.B
    };

    function qa(a) {
        this.h = new na;
        this.i = a
    }

    function ra(a, b) {
        oa(a.h);
        var c = a.h.i;
        if (c) return sa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.h.return);
        a.h.return(b);
        return ta(a)
    }

    function sa(a, b, c, d) {
        try {
            var e = b.call(a.h.i, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.h.l = !1, e;
            var f = e.value
        } catch (h) {
            return a.h.i = null, pa(a.h, h), ta(a)
        }
        a.h.i = null;
        d.call(a.h, f);
        return ta(a)
    }

    function ta(a) {
        for (; a.h.h;) try {
            var b = a.i(a.h);
            if (b) return a.h.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.h.m = void 0, pa(a.h, c)
        }
        a.h.l = !1;
        if (a.h.j) {
            b = a.h.j;
            a.h.j = null;
            if (b.ia) throw b.ha;
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

    function ua(a) {
        this.next = function(b) {
            oa(a.h);
            a.h.i ? b = sa(a, a.h.i.next, b, a.h.s) : (a.h.s(b), b = ta(a));
            return b
        };
        this.throw = function(b) {
            oa(a.h);
            a.h.i ? b = sa(a, a.h.i["throw"], b, a.h.s) : (pa(a.h, b), b = ta(a));
            return b
        };
        this.return = function(b) {
            return ra(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function va(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        new Promise(function(d, e) {
            function f(h) {
                h.done ? d(h.value) : Promise.resolve(h.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function wa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    u("Promise", function(a) {
        function b(h) {
            this.i = 0;
            this.j = void 0;
            this.h = [];
            this.B = !1;
            var g = this.l();
            try {
                h(g.resolve, g.reject)
            } catch (k) {
                g.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(h) {
            return h instanceof b ? h : new b(function(g) {
                g(h)
            })
        }
        if (a) return a;
        c.prototype.i = function(h) {
            if (null == this.h) {
                this.h = [];
                var g = this;
                this.j(function() {
                    g.m()
                })
            }
            this.h.push(h)
        };
        var e = t.setTimeout;
        c.prototype.j = function(h) {
            e(h, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var h = this.h;
                this.h = [];
                for (var g = 0; g < h.length; ++g) {
                    var k =
                        h[g];
                    h[g] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(h) {
            this.j(function() {
                throw h;
            })
        };
        b.prototype.l = function() {
            function h(l) {
                return function(m) {
                    k || (k = !0, l.call(g, m))
                }
            }
            var g = this,
                k = !1;
            return {
                resolve: h(this.J),
                reject: h(this.m)
            }
        };
        b.prototype.J = function(h) {
            if (h === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof b) this.L(h);
            else {
                a: switch (typeof h) {
                    case "object":
                        var g = null != h;
                        break a;
                    case "function":
                        g = !0;
                        break a;
                    default:
                        g = !1
                }
                g ? this.I(h) : this.s(h)
            }
        };
        b.prototype.I = function(h) {
            var g = void 0;
            try {
                g = h.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof g ? this.M(g, h) : this.s(h)
        };
        b.prototype.m = function(h) {
            this.F(2, h)
        };
        b.prototype.s = function(h) {
            this.F(1, h)
        };
        b.prototype.F = function(h, g) {
            if (0 != this.i) throw Error("Cannot settle(" + h + ", " + g + "): Promise already settled in state" + this.i);
            this.i = h;
            this.j = g;
            2 === this.i && this.K();
            this.G()
        };
        b.prototype.K = function() {
            var h = this;
            e(function() {
                if (h.H()) {
                    var g = t.console;
                    "undefined" !== typeof g && g.error(h.j)
                }
            }, 1)
        };
        b.prototype.H =
            function() {
                if (this.B) return !1;
                var h = t.CustomEvent,
                    g = t.Event,
                    k = t.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof h ? h = new h("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof g ? h = new g("unhandledrejection", {
                    cancelable: !0
                }) : (h = t.document.createEvent("CustomEvent"), h.initCustomEvent("unhandledrejection", !1, !0, h));
                h.promise = this;
                h.reason = this.j;
                return k(h)
            };
        b.prototype.G = function() {
            if (null != this.h) {
                for (var h = 0; h < this.h.length; ++h) f.i(this.h[h]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.L =
            function(h) {
                var g = this.l();
                h.N(g.resolve, g.reject)
            };
        b.prototype.M = function(h, g) {
            var k = this.l();
            try {
                h.call(g, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(h, g) {
            function k(p, r) {
                return "function" == typeof p ? function(B) {
                    try {
                        l(p(B))
                    } catch (W) {
                        m(W)
                    }
                } : r
            }
            var l, m, n = new b(function(p, r) {
                l = p;
                m = r
            });
            this.N(k(h, l), k(g, m));
            return n
        };
        b.prototype.catch = function(h) {
            return this.then(void 0, h)
        };
        b.prototype.N = function(h, g) {
            function k() {
                switch (l.i) {
                    case 1:
                        h(l.j);
                        break;
                    case 2:
                        g(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            l.i);
                }
            }
            var l = this;
            null == this.h ? f.i(k) : this.h.push(k);
            this.B = !0
        };
        b.resolve = d;
        b.reject = function(h) {
            return new b(function(g, k) {
                k(h)
            })
        };
        b.race = function(h) {
            return new b(function(g, k) {
                for (var l = v(h), m = l.next(); !m.done; m = l.next()) d(m.value).N(g, k)
            })
        };
        b.all = function(h) {
            var g = v(h),
                k = g.next();
            return k.done ? d([]) : new b(function(l, m) {
                function n(B) {
                    return function(W) {
                        p[B] = W;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, d(k.value).N(n(p.length - 1), m), k = g.next(); while (!k.done)
            })
        };
        return b
    });
    u("WeakMap", function(a) {
        function b(k) {
            this.h = (g += Math.random() + 1).toString();
            if (k) {
                k = v(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function e(k) {
            if (!w(k, h)) {
                var l = new c;
                ba(k, h, {
                    value: l
                })
            }
        }

        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && e(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(l)) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && 4 == m.get(l)
                } catch (n) {
                    return !1
                }
            }()) return a;
        var h = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var g = 0;
        b.prototype.set = function(k, l) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!w(k, h)) throw Error("WeakMap key fail: " + k);
            k[h][this.h] = l;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && w(k, h) ? k[h][this.h] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && w(k,
                h) && w(k[h], this.h)
        };
        b.prototype.delete = function(k) {
            return d(k) && w(k, h) && w(k[h], this.h) ? delete k[h][this.h] : !1
        };
        return b
    });
    u("Map", function(a) {
        function b() {
            var g = {};
            return g.C = g.next = g.head = g
        }

        function c(g, k) {
            var l = g.h;
            return ea(function() {
                if (l) {
                    for (; l.head != g.h;) l = l.C;
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

        function d(g, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++h, f.set(k, l)) : l = "p_" + k;
            var m = g.i[l];
            if (m && w(g.i, l))
                for (g = 0; g < m.length; g++) {
                    var n = m[g];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: g,
                        u: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                u: void 0
            }
        }

        function e(g) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (g) {
                g = v(g);
                for (var k; !(k = g.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var g = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [g, "s"]
                        ]));
                    if ("s" != k.get(g) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(g, k) {
            g = 0 === g ? 0 : g;
            var l = d(this, g);
            l.list || (l.list = this.i[l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this.h,
                C: this.h.C,
                head: this.h,
                key: g,
                value: k
            }, l.list.push(l.u), this.h.C.next = l.u, this.h.C = l.u, this.size++);
            return this
        };
        e.prototype.delete = function(g) {
            g = d(this, g);
            return g.u && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this.i[g.id], g.u.C.next = g.u.next, g.u.next.C = g.u.C, g.u.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.C = b();
            this.size = 0
        };
        e.prototype.has = function(g) {
            return !!d(this, g).u
        };
        e.prototype.get = function(g) {
            return (g = d(this, g).u) && g.value
        };
        e.prototype.entries = function() {
            return c(this, function(g) {
                return [g.key, g.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(g) {
                return g.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(g) {
                return g.value
            })
        };
        e.prototype.forEach = function(g, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                g.call(k, m[1], m[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var h = 0;
        return e
    });

    function xa(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }

    function ya(a, b) {
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
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    u("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ya(this, function(b, c) {
                return [b, c]
            })
        }
    });
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ya(this, function(b) {
                return b
            })
        }
    });
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    u("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== xa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    u("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(g) {
                return g
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++))
            } else
                for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
            return e
        }
    });
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
    });

    function y(a) {
        return a ? a : Array.prototype.fill
    }
    u("Int8Array.prototype.fill", y);
    u("Uint8Array.prototype.fill", y);
    u("Uint8ClampedArray.prototype.fill", y);
    u("Int16Array.prototype.fill", y);
    u("Uint16Array.prototype.fill", y);
    u("Int32Array.prototype.fill", y);
    u("Uint32Array.prototype.fill", y);
    u("Float32Array.prototype.fill", y);
    u("Float64Array.prototype.fill", y);
    u("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) w(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = xa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e;)
                if (d[c++] != b[h++]) return !1;
            return h >= f
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var z = this || self;

    function za(a) {
        var b = a.url;
        a = a.aa;
        this.l = b;
        this.s = a;
        a = /[?&]dsh=1(&|$)/.test(b);
        this.i = !a && /[?&]ae=1(&|$)/.test(b);
        this.m = !a && /[?&]ae=2(&|$)/.test(b);
        if ((this.h = /[?&]adurl=([^&]*)/.exec(b)) && this.h[1]) {
            try {
                var c = decodeURIComponent(this.h[1])
            } catch (d) {
                c = null
            }
            this.j = c
        }
    }

    function Aa(a) {
        var b = "&act=1&ri=1";
        a.i && a.s && (b += Ba(a));
        return Ca(a, b)
    }

    function Da(a, b) {
        return a.i && a.j || a.m ? 1 == b ? a.i ? a.j : Ca(a, "&dct=1") : 2 == b ? Ca(a, "&ri=2") : Ca(a, "&ri=16") : a.l
    }

    function Ca(a, b) {
        return a.h ? a.l.slice(0, a.h.index) + b + a.l.slice(a.h.index) : a.l + b
    }

    function Ba(a) {
        a = a.s;
        var b = encodeURIComponent,
            c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(function(d) {
            return b(d.brand) + ";" + b(d.version)
        }).join("|")));
        "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
        return c
    };

    function A(a) {
        var b;
        a: {
            if (b = z.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function C(a, b) {
        this.h = b === Ea ? a : ""
    }
    C.prototype.toString = function() {
        return this.h.toString()
    };
    C.prototype.i = !0;
    var Fa;
    try {
        new URL("s://g"), Fa = !0
    } catch (a) {
        Fa = !1
    }
    var Ga = Fa,
        Ea = {},
        Ha = new C("about:invalid#zClosurez", Ea);
    var Ia = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ja = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Ka = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        };

    function La(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };

    function Ma(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Na(a, b) {
        if (!(b instanceof C || b instanceof C)) {
            b = "object" == typeof b && b.i ? b.h.toString() : String(b);
            b: {
                var c = b;
                if (Ga) {
                    try {
                        var d = new URL(c)
                    } catch (e) {
                        c = "https:";
                        break b
                    }
                    c = d.protocol
                } else c: {
                    d = document.createElement("a");
                    try {
                        d.href = c
                    } catch (e) {
                        c = void 0;
                        break c
                    }
                    c = d.protocol;c = ":" === c || "" === c ? "https:" : c
                }
            }
            "javascript:" === c && (b = "about:invalid#zClosurez");
            b = new C(b, Ea)
        }
        a.href = b instanceof C && b.constructor === C ? b.h : "type_error:SafeUrl"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Oa(a) {
        this.ka = a
    }

    function D(a) {
        return new Oa(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Pa = new Oa(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        }),
        Qa = D("http"),
        Ra = D("https"),
        Sa = D("ftp"),
        Ta = D("mailto"),
        Ua = D("intent"),
        Va = D("market"),
        Wa = D("itms"),
        Xa = D("itms-appss"),
        Ya = [D("data"), Qa, Ra, Ta, Sa, Pa];

    function Za() {
        return A("iPhone") && !A("iPod") && !A("iPad")
    };

    function $a(a) {
        $a[" "](a);
        return a
    }
    $a[" "] = function() {};
    var ab = Za(),
        bb = A("iPad");
    var cb = Za() || A("iPod"),
        db = A("iPad");
    var eb = {},
        fb = null;

    function gb(a, b) {
        void 0 === b && (b = 0);
        if (!fb) {
            fb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                eb[e] = f;
                for (var h = 0; h < f.length; h++) {
                    var g = f[h];
                    void 0 === fb[g] && (fb[g] = h)
                }
            }
        }
        b = eb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            g = a[f + 2];
            h = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | g >> 6];
            g = b[g & 63];
            c[e++] = h + k + l + g
        }
        h = 0;
        g = d;
        switch (a.length - f) {
            case 2:
                h =
                    a[f + 1], g = b[(h & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | h >> 4] + g + d
        }
        return c.join("")
    };
    var ib = "undefined" !== typeof Uint8Array,
        jb = !(A("Trident") || A("MSIE")) && "function" === typeof z.btoa;
    var E = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;

    function F(a, b) {
        if (E) return a[E] |= b;
        if (void 0 !== a.A) return a.A |= b;
        Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function kb(a) {
        E ? a[E] && (a[E] &= -17) : void 0 !== a.A && (a.A &= -17)
    }

    function G(a) {
        var b;
        E ? b = a[E] : b = a.A;
        return null == b ? 0 : b
    }

    function H(a, b) {
        E ? a[E] = b : void 0 !== a.A ? a.A = b : Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function lb(a) {
        F(a, 1);
        return a
    }

    function I(a) {
        return !!(G(a) & 2)
    }

    function J(a) {
        F(a, 18);
        return a
    }

    function nb(a) {
        F(a, 16);
        return a
    }

    function ob(a, b) {
        H(b, (a | 0) & -51)
    }

    function pb(a, b) {
        H(b, (a | 18) & -41)
    };
    var qb = {};

    function rb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var sb, tb, ub = [];
    H(ub, 23);
    tb = Object.freeze(ub);

    function vb(a) {
        this.V = 0;
        this.U = a
    }
    vb.prototype.next = function() {
        return this.V < this.U.length ? {
            done: !1,
            value: this.U[this.V++]
        } : {
            done: !0,
            value: void 0
        }
    };
    vb.prototype[Symbol.iterator] = function() {
        return this
    };

    function wb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && rb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };

    function xb(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.P === qb) return a;
        if (!e) return c ? d & 2 ? (a = b[yb]) ? b = a : (a = new b, J(a.o), b = b[yb] = a) : b = new b : b = void 0, b;
        zb(a, d);
        return new b(a)
    }

    function zb(a, b) {
        var c = G(a),
            d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && H(a, d)
    }
    var yb = Symbol();

    function K(a, b, c, d) {
        d = void 0 === d ? Cb : d;
        c = G(a);
        c |= 32;
        H(a, c);
        this.i = c;
        this.j = (this.l = b) ? Db : Eb;
        this.s = d;
        this.h = b = new Map;
        for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
        this.size = b.size
    }

    function Fb(a, b) {
        b = void 0 === b ? Gb : b;
        for (var c = Hb(a), d = 0; d < c.length; d++) {
            var e = c[d],
                f = a.h.get(c[d]);
            c[d] = [b(e), b(f)]
        }
        return c
    }

    function Ib(a, b) {
        b = void 0 === b ? Gb : b;
        var c = [];
        a = a.h.entries();
        for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
        return c
    }
    q = K.prototype;
    q.entries = function() {
        for (var a = Hb(this), b = 0; b < a.length; b++) {
            var c = a[b];
            a[b] = [c, this.get(c)]
        }
        return new vb(a)
    };
    q.keys = function() {
        var a = Hb(this);
        return new vb(a)
    };
    q.values = function() {
        for (var a = Hb(this), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
        return new vb(a)
    };
    q.forEach = function(a, b) {
        for (var c = Hb(this), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, this.get(e), e, this)
        }
    };
    q.set = function(a, b) {
        if (this.i & 2) throw Error("Cannot mutate an immutable Map");
        var c = this.h;
        if (null == b) return c.delete(a), this;
        c.set(a, this.j(b, this.l, this.m, this.i));
        this.size = c.size;
        return this
    };
    q.get = function(a) {
        var b = this.h;
        if (b.has(a)) {
            var c = b.get(a),
                d = this.i,
                e = this.l;
            e && Array.isArray(c) && d & 16 && nb(c);
            d = this.j(c, e, this.m, d);
            d !== c && b.set(a, d);
            return d
        }
    };
    q.has = function(a) {
        return this.h.has(a)
    };

    function Hb(a) {
        return Array.from(a.h.keys()).sort(Jb)
    }
    K.prototype[Symbol.iterator] = function() {
        return this.entries()
    };

    function Jb(a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Db(a, b, c, d) {
        a = xb(a, b, !0, d);
        c && (a = Kb(a));
        return a
    }

    function Eb(a) {
        return a
    }

    function Cb(a) {
        return a
    }

    function Gb(a) {
        return a
    };

    function Lb(a) {
        var b = a.i + a.D;
        return a.v || (a.v = a.o[b] = {})
    }

    function L(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.v ? a.v[b] : void 0 : c && a.v && (c = a.v[b], null != c) ? c : a.o[b + a.D]
    }

    function M(a, b, c, d) {
        if (G(a.o) & 2) throw Error();
        return N(a, b, c, d)
    }

    function N(a, b, c, d) {
        a.j && (a.j = void 0);
        if (b >= a.i || d) return Lb(a)[b] = c, a;
        a.o[b + a.D] = c;
        (c = a.v) && b in c && delete c[b];
        return a
    }

    function Mb(a, b, c) {
        return void 0 !== Nb(a, b, c, !1)
    }

    function Ob(a, b, c, d, e) {
        var f = L(a, b, d);
        Array.isArray(f) || (f = tb);
        var h = G(f);
        h & 1 || lb(f);
        if (e) h & 2 || J(f), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var g = h & 2;
            c & 1 || !g ? e && h & 16 && !g && kb(f) : (f = lb(Array.prototype.slice.call(f)), N(a, b, f, d))
        }
        return f
    }

    function Pb(a, b) {
        var c = I(a.o),
            d = Ob(a, b, 1, !1, c),
            e = G(d);
        if (!(e & 4)) {
            Object.isFrozen(d) && (d = lb(d.slice()), N(a, b, d, !1));
            for (var f = 0, h = 0; f < d.length; f++) {
                var g = d[f];
                null != g && (d[h++] = g)
            }
            h < f && (d.length = h);
            e |= 5;
            c && (e |= 18);
            H(d, e);
            e & 2 && Object.freeze(d)
        }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), F(d, 5), N(a, b, d, !1));
        return d
    }
    var Qb;

    function Rb(a, b, c) {
        var d = I(a.o);
        b: {
            var e = L(a, b),
                f = !1;
            if (null == e) {
                if (d) {
                    a = Qb || (Qb = new K(J([])));
                    break b
                }
                e = []
            } else if (e.constructor === K) {
                if (0 == (e.i & 2) || d) {
                    a = e;
                    break b
                }
                e = Ib(e)
            } else Array.isArray(e) ? f = I(e) : e = [];
            if (d) {
                if (!e.length) {
                    a = Qb || (Qb = new K(J([])));
                    break b
                }
                f || (f = !0, J(e))
            } else if (f) {
                f = !1;
                e = Array.prototype.slice.call(e);
                for (var h = 0; h < e.length; h++) {
                    var g = e[h] = Array.prototype.slice.call(e[h]);
                    Array.isArray(g[1]) && (g[1] = J(g[1]))
                }
            }
            f || (G(e) & 32 ? kb(e) : G(a.o) & 16 && nb(e));f = new K(e, c);N(a, b, f, !1);a = f
        }
        null ==
            a ? c = a : (!d && c && (a.m = !0), c = a);
        return c
    }

    function Nb(a, b, c, d) {
        var e = L(a, c, d);
        b = xb(e, b, !1, G(a.o));
        b !== e && null != b && N(a, c, b, d);
        return b
    }

    function O(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Nb(a, b, c, d);
        if (null == b) return b;
        if (!I(a.o)) {
            var e = Kb(b);
            e !== b && (b = e, N(a, c, b, d))
        }
        return b
    }

    function Sb(a) {
        var b = G(a.o),
            c = !!(b & 2);
        var d = Tb,
            e = !!(b & 2);
        a.h || (a.h = {});
        var f = a.h[7];
        var h = Ob(a, 7, 3, void 0, e);
        if (f) e || (e = Object.isFrozen(f), c && !e ? Object.freeze(f) : !c && e && (f = Array.prototype.slice.call(f), a.h[7] = f));
        else {
            var g = h;
            f = [];
            e = !!(b & 2);
            h = !!(G(g) & 2);
            var k = g;
            !e && h && (g = Array.prototype.slice.call(g));
            var l = b | (h ? 2 : 0);
            b = h;
            for (var m = 0; m < g.length; m++) {
                var n = g[m];
                var p = d;
                Array.isArray(n) ? (zb(n, l), n = new p(n)) : n = void 0;
                void 0 !== n && (b || (b = !!(2 & G(n.o))), f.push(n))
            }
            a.h[7] = f;
            l = G(g);
            d = l | 33;
            d = b ? d & -9 : d | 8;
            l != d &&
                (b = g, Object.isFrozen(b) && (b = Array.prototype.slice.call(b)), H(b, d), g = b);
            k !== g && N(a, 7, g);
            (e || c && h) && J(f);
            c && Object.freeze(f)
        }
        a = Ob(a, 7, 3, void 0, c);
        if (!(c || G(a) & 8)) {
            for (c = 0; c < f.length; c++) e = f[c], h = Kb(e), e !== h && (f[c] = h, a[c] = h.o);
            F(a, 8)
        }
        return f
    }

    function Ub(a, b, c, d) {
        if (G(a.o) & 2) throw Error();
        var e = null == c ? tb : lb([]);
        if (null != c) {
            for (var f = !!c.length, h = 0; h < c.length; h++) {
                var g = c[h];
                f = f && !I(g.o);
                e[h] = g.o
            }
            f = (f ? 8 : 0) | 1;
            h = G(e);
            (h & f) !== f && (Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), H(e, h | f));
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0);
        return N(a, b, e, d)
    }

    function Vb(a, b) {
        return null == a ? b : a
    }

    function P(a, b) {
        return Vb(L(a, b), "")
    }

    function Q(a, b) {
        a = L(a, b);
        return Vb(null == a ? a : !!a, !1)
    }

    function Wb(a, b, c) {
        return Vb(L(a, b), void 0 === c ? 0 : c)
    };
    var Xb;

    function Yb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (G(a) & 128)) return a = Array.prototype.slice.call(a), wb(a), a
                    } else {
                        if (ib && null != a && a instanceof Uint8Array) {
                            if (jb) {
                                for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                                b += String.fromCharCode.apply(null, a);
                                a = btoa(b)
                            } else a = gb(a);
                            return a
                        }
                        if (a instanceof K) return Fb(a)
                    }
        }
        return a
    };

    function Zb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = $b(a, b, c, void 0 !== d);
            else if (rb(a)) {
                var e = {},
                    f;
                for (f in a) e[f] = Zb(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function $b(a, b, c, d) {
        var e = G(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = Zb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function ac(a) {
        return Zb(a, bc, cc)
    }

    function bc(a) {
        return a.P === qb ? a.toJSON() : a instanceof K ? Fb(a, ac) : Yb(a)
    }

    function cc(a, b) {
        a & 128 && wb(b)
    };

    function dc(a, b, c) {
        c = void 0 === c ? pb : c;
        if (null != a) {
            if (ib && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = G(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return H(a, d | 18), a;
                a = $b(a, dc, d & 4 ? pb : c, !0);
                b = G(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.P === qb ? a = ec(a) : a instanceof K && (b = J(Ib(a, dc)), a = new K(b, a.l, a.j, a.s));
            return a
        }
    }

    function fc(a, b, c, d, e, f, h) {
        (a = a.h && a.h[c]) ? (d = G(a), d & 2 ? d = a : (f = Ka(a, ec), pb(d, f), Object.freeze(f), d = f), Ub(b, c, d, e)) : M(b, c, dc(d, f, h), e)
    }

    function ec(a) {
        if (I(a.o)) return a;
        a = gc(a, !0);
        J(a.o);
        return a
    }

    function gc(a, b) {
        var c = a.o,
            d = nb([]),
            e = a.constructor.h;
        e && d.push(e);
        e = a.v;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (G(c) & 128) && wb(d);
        b = b || I(a.o) ? pb : ob;
        f = a.constructor;
        Xb = d;
        d = new f(d);
        Xb = void 0;
        a.X && (d.X = a.X.slice());
        f = !!(G(c) & 16);
        for (var h = e ? c.length - 1 : c.length, g = 0; g < h; g++) fc(a, d, g - a.D, c[g], !1, f, b);
        if (e)
            for (var k in e) fc(a, d, +k, e[k], !0, f, b);
        return d
    }

    function Kb(a) {
        if (!I(a.o)) return a;
        var b = gc(a, !1);
        b.j = a;
        return b
    };

    function R(a, b, c, d) {
        null == a && (a = Xb);
        Xb = void 0;
        var e = this.constructor.h;
        if (null == a) {
            a = e ? [e] : [];
            var f = 48;
            var h = !0;
            d && (f |= 128);
            H(a, f)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (e && e !== a[0]) throw Error();
            f = F(a, 0) | 32;
            h = 0 !== (16 & f);
            if (d) {
                if (!(f & 128) && 0 < a.length) {
                    var g = a[a.length - 1];
                    if (rb(g) && "g" in g) {
                        f |= 128;
                        delete g.g;
                        var k = !0,
                            l;
                        for (l in g) {
                            k = !1;
                            break
                        }
                        k && a.pop()
                    } else throw Error();
                }
            } else if (128 & f) throw Error();
            H(a, f)
        }
        this.D = e ? 0 : -1;
        this.h = void 0;
        this.o = a;
        a: {
            f = this.o.length;e = f - 1;
            if (f && (f = this.o[e], rb(f))) {
                this.v =
                    f;
                this.i = e - this.D;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, e + 1 - this.D), this.v = void 0) : this.i = Number.MAX_VALUE
        }
        if (!d && this.v && "g" in this.v) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !0;
            d = this.i;
            var m;
            for (h = 0; h < c.length; h++) e = c[h], e < d ? (e += this.D, (f = a[e]) ? hc(f, b) : a[e] = tb) : (m || (m = Lb(this)), (f = m[e]) ? hc(f, b) : m[e] = tb)
        }
    }
    R.prototype.toJSON = function() {
        var a = this.o;
        return sb ? a : $b(a, bc, cc)
    };

    function ic(a) {
        sb = !0;
        try {
            return JSON.stringify(a.toJSON(), jc)
        } finally {
            sb = !1
        }
    }

    function hc(a, b) {
        if (Array.isArray(a)) {
            var c = G(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && H(a, c | d)
        }
    }
    R.prototype.P = qb;
    R.prototype.toString = function() {
        return this.o.toString()
    };

    function jc(a, b) {
        return Yb(b)
    };

    function kc(a) {
        R.call(this, a)
    }
    x(kc, R);

    function lc(a) {
        R.call(this, a)
    }
    x(lc, R);

    function mc(a) {
        R.call(this, a)
    }
    x(mc, R);

    function Tb(a) {
        R.call(this, a)
    }
    x(Tb, R);
    Tb.prototype.O = function() {
        return P(this, 3)
    };
    Tb.prototype.Z = function(a) {
        M(this, 5, a)
    };

    function S(a) {
        R.call(this, a)
    }
    x(S, R);
    S.prototype.O = function() {
        return P(this, 1)
    };
    S.prototype.Z = function(a) {
        M(this, 2, a)
    };

    function nc(a) {
        R.call(this, a)
    }
    x(nc, R);

    function oc(a) {
        R.call(this, a, -1, pc)
    }
    x(oc, R);
    var pc = [6, 7];

    function qc(a) {
        R.call(this, a, -1, rc)
    }
    x(qc, R);
    var rc = [17];

    function sc(a) {
        R.call(this, a)
    }
    x(sc, R);

    function tc(a) {
        R.call(this, a)
    }
    x(tc, R);
    var uc = {
            capture: !0
        },
        vc = {
            passive: !0
        },
        wc = Ma(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                z.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function xc(a) {
        return a ? a.passive && wc() ? a : a.capture || !1 : !1
    }

    function T(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, xc(d))
    };

    function yc() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    var zc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ac(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.slice(0, c), d, a.slice(b)]
    }

    function Bc(a, b) {
        return b ? a ? a + "&" + b : b : a
    }

    function Cc(a, b) {
        if (!b) return a;
        a = Ac(a);
        a[1] = Bc(a[1], b);
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function Dc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Dc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Ec(a) {
        var b = [],
            c;
        for (c in a) Dc(c, a[c], b);
        return b.join("&")
    }

    function Fc() {
        var a = yc();
        a = null != a ? "=" + encodeURIComponent(String(a)) : "";
        return Cc("https://pagead2.googlesyndication.com/pagead/gen_204", "zx" + a)
    }
    var Gc = /#|$/;

    function Hc(a, b) {
        var c = a.search(Gc);
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
    }

    function Ic(a, b) {
        a = Ac(a);
        var c = a[1],
            d = [];
        c && c.split("&").forEach(function(e) {
            var f = e.indexOf("=");
            b.hasOwnProperty(0 <= f ? e.slice(0, f) : e) || d.push(e)
        });
        a[1] = Bc(d.join("&"), Ec(b));
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };

    function Jc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Kc(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    var Lc = [];

    function Mc() {
        var a = Lc;
        Lc = [];
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function Nc(a) {
        Lc.push(a);
        1 == Lc.length && (window.Promise ? Promise.resolve().then(Mc) : window.setImmediate ? setImmediate(Mc) : setTimeout(Mc, 0))
    }

    function Oc(a) {
        var b = U;
        "complete" === b.readyState || "interactive" === b.readyState ? Nc(a) : b.addEventListener("DOMContentLoaded", a)
    }

    function Pc(a) {
        var b = window;
        "complete" === b.document.readyState ? Nc(a) : b.addEventListener("load", a)
    }

    function Uc(a) {
        a = void 0 === a ? document : a;
        return a.createElement("img")
    };

    function Vc(a, b, c, d) {
        Wc(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    }

    function Wc(a, b, c, d) {
        var e = !1;
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Uc(a.document);
        if (c || d) {
            var h = function(g) {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    var k = Ia(g, f);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                f.removeEventListener && f.removeEventListener("load", h, xc());
                f.removeEventListener && f.removeEventListener("error", h, xc())
            };
            T(f, "load", h);
            T(f, "error", h)
        }
        e && (f.attributionsrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }

    function Xc(a, b) {
        var c = void 0 === c ? !1 : c;
        var d;
        if (d = a.navigator) d = a.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1;
        d && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Vc(a, b, void 0, c)
    };
    var Yc = 0;

    function Zc(a) {
        return (a = $c(a)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function $c(a) {
        var b = document.currentScript;
        return (b = void 0 === b ? null : b) && b.getAttribute("data-jc") === String(a) ? b : document.querySelector('[data-jc="' + a + '"]')
    }

    function ad(a) {
        var b = void 0 === b ? .01 : b;
        if (!(Math.random() > b)) {
            var c = $c(a);
            a = "https://" + (c && "true" === c.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com") + "/pagead/gen_204?id=jca&jc=" + a + "&version=" + Zc(a) + "&sample=" + b;
            Xc(window, a)
        }
    };
    var U = document,
        X = window;
    var bd = [Qa, Ra, Ta, Sa, Pa, Va, Wa, Ua, Xa];

    function cd(a, b) {
        if (a instanceof C) return a;
        var c = bd;
        c = void 0 === c ? Ya : c;
        a: {
            c = void 0 === c ? Ya : c;
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                if (e instanceof Oa && e.ka(a)) {
                    c = new C(a, Ea);
                    break a
                }
            }
            c = void 0
        }
        c = c || Ha;
        c === Ha && b(a);
        return c
    }

    function dd(a) {
        var b = (ed() ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/gen_204";
        return function(c) {
            c = Ec({
                id: "unsafeurl",
                ctx: a,
                url: c
            });
            c = Cc(b, c);
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };

    function ed() {
        var a = void 0 === a ? X : a;
        return "http:" === a.location.protocol
    }

    function fd(a) {
        var b = U;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };

    function gd(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var hd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function id(a, b) {
        this.h = a;
        this.i = b
    }

    function jd(a, b) {
        this.url = a;
        this.Y = !!b;
        this.depth = null
    };

    function kd() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function ld(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function md(a, b, c, d, e) {
        var f = [];
        Jc(a, function(h, g) {
            (h = nd(h, b, c, d, e)) && f.push(g + "=" + h)
        });
        return f.join(b)
    }

    function nd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], h = 0; h < a.length; h++) f.push(nd(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(md(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function od(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = pd(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, n) {
            return m - n
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var h = a.h[f], g = a.i[h], k = 0; k < g.length; k++) {
                if (!d) {
                    b = null == b ? h : b;
                    break
                }
                var l = md(g[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? h : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function pd(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function qd() {
        this.h = Math.random()
    }

    function rd() {
        var a = sd,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function td(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof kd) var f = c;
            else f = new kd, Jc(c, function(g, k) {
                var l = f,
                    m = l.l++;
                g = ld(k, g);
                l.h.push(m);
                l.i[m] = g
            });
            var h = od(f, "/pagead/gen_204?id=" + b + "&");
            h && Vc(z, h)
        } catch (g) {}
    };
    var ud = null;

    function vd() {
        var a = void 0 === a ? z : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function wd() {
        var a = void 0 === a ? z : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function xd(a, b) {
        var c = wd() || vd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var Z = z.performance,
        yd = !!(Z && Z.mark && Z.measure && Z.clearMarks),
        zd = Ma(function() {
            var a;
            if (a = yd) {
                var b;
                if (null === ud) {
                    ud = "";
                    try {
                        a = "";
                        try {
                            a = z.top.location.hash
                        } catch (c) {
                            a = z.location.hash
                        }
                        a && (ud = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = ud;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ad() {
        var a = window;
        this.i = [];
        this.j = a || z;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.h = zd() || (null != b ? b : 1 > Math.random())
    }

    function Bd(a) {
        a && Z && zd() && (Z.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Z.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Ad.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new xd(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Z && zd() && Z.mark(b);
        return a
    };
    Ad.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (wd() || vd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Z && zd() && Z.mark(b);
            !this.h || 2048 < this.i.length || this.i.push(a)
        }
    };

    function Cd() {
        var a = Dd;
        this.j = sd;
        this.i = null;
        this.s = this.m;
        this.h = void 0 === a ? null : a;
        this.l = !1
    }
    Cd.prototype.pinger = function() {
        return this.j
    };

    function Ed(a, b) {
        var c = Fd;
        try {
            if (c.h && c.h.h) {
                var d = c.h.start(a.toString(), 3);
                var e = b();
                c.h.end(d)
            } else e = b()
        } catch (g) {
            b = !0;
            try {
                Bd(d), b = c.s(a, new gd(g, {
                    message: Gd(g)
                }), void 0, void 0)
            } catch (k) {
                c.m(217, k)
            }
            if (b) {
                var f, h;
                null == (f = window.console) || null == (h = f.error) || h.call(f, g)
            } else throw g;
        }
        return e
    }

    function Hd(a, b) {
        return function() {
            var c = wa.apply(0, arguments);
            return Ed(a, function() {
                return b.apply(void 0, c)
            })
        }
    }
    Cd.prototype.m = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new kd;
            f.h.push(1);
            f.i[1] = ld("context", a);
            b.error && b.meta && b.id || (b = new gd(b, {
                message: Gd(b)
            }));
            if (b.msg) {
                var h = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = ld("msg", h)
            }
            var g = b.meta || {};
            if (this.i) try {
                this.i(g)
            } catch (da) {}
            if (d) try {
                d(g)
            } catch (da) {}
            b = [g];
            f.h.push(3);
            f.i[3] = b;
            d = z;
            b = [];
            h = null;
            do {
                var k = d;
                try {
                    var l;
                    if (l = !!k && null != k.location.href) b: {
                        try {
                            $a(k.foo);
                            l = !0;
                            break b
                        } catch (da) {}
                        l = !1
                    }
                    var m = l
                } catch (da) {
                    m = !1
                }
                if (m) {
                    var n = k.location.href;
                    h = k.document &&
                        k.document.referrer || null
                } else n = h, h = null;
                b.push(new jd(n || ""));
                try {
                    d = k.parent
                } catch (da) {
                    d = null
                }
            } while (d && k != d);
            n = 0;
            for (var p = b.length - 1; n <= p; ++n) b[n].depth = p - n;
            k = z;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (p = 1; p < b.length; ++p) {
                    var r = b[p];
                    r.url || (r.url = k.location.ancestorOrigins[p - 1] || "", r.Y = !0)
                }
            var B = new jd(z.location.href, !1);
            k = null;
            var W = b.length - 1;
            for (r = W; 0 <= r; --r) {
                var V = b[r];
                !k && hd.test(V.url) && (k = V);
                if (V.url && !V.Y) {
                    B = V;
                    break
                }
            }
            V = null;
            var fe = b.length &&
                b[W].url;
            0 != B.depth && fe && (V = b[W]);
            var Y = new id(B, V);
            if (Y.i) {
                var ge = Y.i.url || "";
                f.h.push(4);
                f.i[4] = ld("top", ge)
            }
            var Ab = {
                url: Y.h.url || ""
            };
            if (Y.h.url) {
                var Bb = Y.h.url.match(zc),
                    Qc = Bb[1],
                    Rc = Bb[3],
                    Sc = Bb[4];
                B = "";
                Qc && (B += Qc + ":");
                Rc && (B += "//", B += Rc, Sc && (B += ":" + Sc));
                var Tc = B
            } else Tc = "";
            Ab = [Ab, {
                url: Tc
            }];
            f.h.push(5);
            f.i[5] = Ab;
            td(this.j, e, f, this.l, c)
        } catch (da) {
            try {
                td(this.j, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Gd(da),
                    url: Y && Y.h.url
                }, this.l, c)
            } catch (Ge) {}
        }
        return !0
    };

    function Gd(a) {
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

    function Id() {};
    var sd, Fd, Dd = new Ad;

    function Jd() {
        if (!window.google_measure_js_timing) {
            var a = Dd;
            a.h = !1;
            a.i != a.j.google_js_reporting_queue && (zd() && Ja(a.i, Bd), a.i.length = 0)
        }
    }(function(a) {
        sd = null != a ? a : new qd;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        rd();
        Fd = new Cd;
        Fd.i = function(b) {
            var c = Yc;
            0 !== c && (b.jc = String(c), b.shv = Zc(c))
        };
        Fd.l = !0;
        "complete" == window.document.readyState ? Jd() : Dd.h && T(window, "load", function() {
            Jd()
        })
    })();

    function Kd(a, b) {
        return Hd(a, b)
    }

    function Ld(a) {
        var b = "W";
        Id.W && Id.hasOwnProperty(b) || (b = new Id, Id.W = b);
        b = [];
        !a.eid && b.length && (a.eid = b.toString());
        td(sd, "gdn-asoch", a, !0)
    };

    function Md() {
        var a = void 0 === a ? z : a;
        return a.oneAfmaInstance
    };

    function Nd(a, b) {
        b = P(a, 2) || b;
        if (!b) return "";
        if (Q(a, 13)) return b;
        var c = /[?&]adurl=([^&]+)/.exec(b);
        if (!c) return b;
        var d = [b.slice(0, c.index + 1)];
        Rb(a, 4).forEach(function(e, f) {
            d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
        });
        d.push(b.slice(c.index + 1));
        return d.join("")
    }

    function Od(a, b) {
        b = void 0 === b ? [] : b;
        b = 0 < b.length ? b : fd("data-asoch-targets");
        a = Rb(a, 1, oc);
        for (var c = [], d = 0; d < b.length; ++d) {
            for (var e = b[d].getAttribute("data-asoch-targets"), f = e.split(","), h = !0, g = v(f), k = g.next(); !k.done; k = g.next())
                if (!a.has(k.value)) {
                    h = !1;
                    break
                }
            if (h) {
                h = a.get(f[0]);
                for (e = 1; e < f.length; ++e) {
                    g = a.get(f[e]);
                    h = gc(h, !1).toJSON();
                    g = g.toJSON();
                    k = Math.max(h.length, g.length);
                    for (var l = 0; l < k; ++l) null == h[l] && (h[l] = g[l]);
                    h = new oc(h)
                }
                f = Rb(h, 4);
                null != L(h, 5) && f.set("nb", Wb(h, 5, 0).toString());
                c.push({
                    element: b[d],
                    data: h
                })
            } else Ld({
                type: 1,
                data: e
            })
        }
        return c
    }

    function Pd(a, b, c, d) {
        c = Nd(b, c);
        if (0 !== c.length) {
            if ("2" === Hc(c, "ase") && 1087 !== d) {
                if (609 === d) var e = 4;
                else {
                    var f;
                    e = (null == (f = U.featurePolicy) ? 0 : f.allowedFeatures().includes("attribution-reporting")) ? 6 : 5
                }
                f = "";
                Qd(c) ? f = Rd(Aa(new za({
                    url: c
                })), "nis", e.toString()) : c = Rd(c, "nis", e.toString());
                a.setAttribute("attributionsrc", f)
            }
            Na(a, cd(c, dd(d)));
            a.target || (a.target = null != L(b, 11) ? P(b, 11) : "_top")
        }
    }

    function Sd(a) {
        var b = void 0 === b ? "" : b;
        var c = void 0 === c ? !1 : c;
        a = v(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            d = e.data;
            var f = 0 === b.length ? !1 : e.element.matches(b);
            "A" != e.element.tagName || Q(d, 1) || f || (e = e.element, Pd(e, d, e.href, c ? 1087 : 609))
        }
    }

    function Qd(a) {
        return !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a)
    }

    function Td(a) {
        var b = Md();
        if (b) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value.data) && Mb(c, nc, 8)) {
                    var d = P(O(c, nc, 8), 4);
                    if (d) {
                        b.fetchAppStoreOverlay(d, void 0, P(O(c, nc, 8), 6));
                        break
                    }
                }
        }
    }

    function Ud(a, b) {
        function c(g, k) {
            if (k) {
                g = v(e);
                for (var l = g.next(); !l.done; l = g.next()) l = l.value, k[l.O()] && l.Z(!0)
            }
        }
        b = void 0 === b ? 500 : b;
        var d = [],
            e = [];
        a = v(a);
        for (var f = a.next(); !f.done; f = a.next())(f = f.value.data) && Mb(f, S, 12) && (e.push(O(f, S, 12)), d.push(O(f, S, 12).O()));
        a = Md();
        d = v(d);
        for (f = d.next(); !f.done; f = d.next()) {
            f = f.value;
            var h = void 0;
            null == (h = a) || h.canOpenAndroidApp(f, c, function() {}, b)
        }
    }

    function Vd(a, b, c, d, e) {
        function f(l) {
            return Xc(X, l)
        }

        function h(l) {
            return d.openStoreOverlay(l, void 0, P(g, 6))
        }
        if (!b || !Mb(b, nc, 8)) return !1;
        var g = O(b, nc, 8),
            k = P(g, 2);
        Rb(b, 10).forEach(function(l, m) {
            var n = k;
            m = encodeURIComponent(m);
            var p = encodeURIComponent(l);
            l = new RegExp("[?&]" + m + "=([^&]+)");
            var r = l.exec(n);
            console.log(r);
            m = m + "=" + p;
            k = r ? n.replace(l, r[0].charAt(0) + m) : n.replace("?", "?" + m + "&")
        });
        Wd(b) && Q(b, 15) && !/[?&]label=/.test(c) && (c = Rd(c, "label", "deep_link_fallback"));
        return d.redirectForStoreU2({
            clickUrl: c,
            trackingUrl: P(g, 3),
            finalUrl: k,
            pingFunc: e ? f : d.click,
            openFunc: (null == a ? 0 : Q(a, 1)) ? h : d.openIntentOrNativeApp,
            isExternalClickUrl: Q(b, 13)
        })
    }

    function Xd(a, b) {
        b = void 0 === b ? null : b;
        if (null !== b) {
            var c = new za({
                url: a
            });
            if (c.i && c.j || c.m) return b(Aa(c)), Da(c, 1)
        } else return b = new za({
            url: a,
            aa: {}.aa
        }), b.i && b.j || b.m ? navigator.sendBeacon ? navigator.sendBeacon(Aa(b), "") ? Da(b, 1) : Da(b, 2) : Da(b, 0) : a;
        return a
    }

    function Yd(a, b, c) {
        b = void 0 === b ? !0 : b;
        var d = !1;
        (void 0 === c ? 0 : c) && X.navigator && X.navigator.sendBeacon && (d = X.navigator.sendBeacon(a));
        d || (b && X.fetch ? X.fetch(a, {
            method: "GET",
            keepalive: !0,
            mode: "no-cors"
        }).then(function(e) {
            e.ok || Vc(X, a)
        }) : Vc(X, a))
    }

    function Rd(a, b, c) {
        b = encodeURIComponent(String(b));
        c = encodeURIComponent(String(c));
        return a.replace("?", "?" + b + "=" + c + "&")
    }

    function Wd(a) {
        a = v(Sb(a));
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, 3 === Wb(b, 1, 0) && P(b, 2)) return !0;
        return !1
    };

    function Zd(a, b) {
        return a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : ""
    };

    function $d(a) {
        R.call(this, a)
    }
    x($d, R);

    function ae(a) {
        R.call(this, a, -1, be)
    }
    x(ae, R);

    function ce(a, b) {
        return M(a, 2, b)
    }

    function de(a, b) {
        return M(a, 3, b)
    }

    function ee(a, b) {
        return M(a, 4, b)
    }

    function he(a, b) {
        return M(a, 5, b)
    }

    function ie(a, b) {
        return M(a, 9, b)
    }

    function je(a, b) {
        return Ub(a, 10, b)
    }

    function ke(a, b) {
        return M(a, 11, b)
    }

    function le(a, b) {
        return M(a, 1, b)
    }

    function me(a, b) {
        return M(a, 7, b)
    }
    var be = [10, 6];
    var ne = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function oe(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function pe(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function qe() {
        var a = window;
        if (!pe(a)) return null;
        var b = oe(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ne).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function re(a) {
        var b;
        return ke(je(he(ce(le(ee(me(ie(de(new ae, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new $d;
            d = M(d, 1, c.brand);
            return M(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function se() {
        var a, b;
        return null != (b = null == (a = qe()) ? void 0 : a.then(function(c) {
            return re(c)
        })) ? b : null
    };

    function te(a) {
        var b = this;
        this.s = cb || ab || db || bb;
        var c = fd("data-asoch-meta");
        if (1 !== c.length) Ld({
            type: 2,
            data: c.length
        });
        else {
            this.M = 70;
            this.i = new qc(JSON.parse(c[0].getAttribute("data-asoch-meta")) || []);
            this.K = a["extra-meta"] ? new qc(JSON.parse(a["extra-meta"])) : null;
            this.L = "true" === a["is-fsn"];
            this.B = a["ios-store-overlay-config"] ? new sc(JSON.parse(a["ios-store-overlay-config"])) : null;
            this.ea = "true" === a["use-cct-over-browser"];
            this.ca = "true" === a["send-ac-click-ping-by-js"];
            this.T = "true" === a["correct-redirect-url-for-och-15-click"];
            this.da = "true" === a["send-click-ping-by-js-in-och"];
            this.ba = "true" === a["enable-paw"];
            this.fa = "true" === a["async-using-fetch"];
            this.j = this.l = "";
            this.H = this.G = -1;
            this.F = "";
            c = se();
            null != c && c.then(function(e) {
                e = ic(e);
                for (var f = [], h = 0, g = 0; g < e.length; g++) {
                    var k = e.charCodeAt(g);
                    255 < k && (f[h++] = k & 255, k >>= 8);
                    f[h++] = k
                }
                e = gb(f, 3);
                b.F = e
            });
            this.h = Od(this.i);
            this.ga = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
            this.R = -Infinity;
            this.m = P(this.i, 5) || "";
            this.S = Q(this.i, 11);
            this.K && (this.S = Q(this.K, 11));
            this.J = this.I = null;
            Q(this.i, 3) || (Sd(this.h), M(this.i, 3, !0));
            ue(this.h);
            a = Md();
            !this.s && a && Ud(this.h, this.ga);
            var d;
            if (a && (null == (d = this.B) ? 0 : Q(d, 2))) switch (d = function() {
                var e = Vb(L(b.B, 4), 0);
                0 < e ? z.setTimeout(function() {
                    Td(b.h)
                }, e) : Td(b.h)
            }, Wb(this.B, 3, 0)) {
                case 1:
                    a.runOnOnShowEvent(d);
                    break;
                case 2:
                    Pc(d);
                    break;
                default:
                    Td(this.h)
            }
            T(U, "click", Kd(557, function(e) {
                a: if (!e.defaultPrevented || b.I === e) {
                    for (var f, h, g = e.target;
                        (!f || !h) && g;) {
                        h || "A" != g.tagName || (h = g);
                        var k = g.hasAttribute("data-asoch-targets"),
                            l =
                            g.hasAttribute("data-asoch-fixed-value");
                        if (!f)
                            if (l) f = new oc(JSON.parse(g.getAttribute("data-asoch-fixed-value")) || []);
                            else if ("A" == g.tagName || k)
                            if (k = k && "true" === g.getAttribute("data-asoch-is-dynamic") ? Od(b.i, [g]) : b.h, k = ve(k, g)) f = k.data;
                        g = g.parentElement
                    }
                    if (g = f && !Q(f, 1)) {
                        if (e.defaultPrevented) {
                            var m = h;
                            g = f;
                            if (b.I === e && b.J) {
                                f = new mc(b.J);
                                h = P(g, 9);
                                k = "";
                                switch (Wb(f, 4, 1)) {
                                    case 2:
                                        if (Vb(L(f, 2), 0)) k = "blocked_fast_click";
                                        else if (P(f, 1) || P(f, 7)) k = "blocked_border_click";
                                        break;
                                    case 3:
                                        var n = void 0 === n ? U : n;
                                        n = n.getElementById ?
                                            n.getElementById("common_15click_anchor") : null;
                                        "function" === typeof window.copfcChm && n && (g = gc(g, !1), M(g, 5, 12), Rb(g, 4).set("nb", (12).toString()), (k = ve(b.h, n)) ? k.data = g : b.h.push({
                                            element: n,
                                            data: g
                                        }), !b.T && m && (we(b, e, m, g), M(g, 2, m.href)), window.copfcChm(e, Nd(g, n.href), null, Mb(f, lc, 10) ? ic(O(f, lc, 10)) : null), b.T && we(b, e, n, g));
                                        k = "onepointfiveclick_first_click"
                                }
                                h && k && Yd(h + "&label=" + k, !1);
                                ad(b.M)
                            }
                            break a
                        }
                        n = v(Pb(f, 6));
                        for (k = n.next(); !k.done; k = n.next()) Yd(k.value)
                    }
                    if (h && g) {
                        n = h;
                        f = g ? f : null;
                        (h = ve(b.h, n)) ? h = h.data:
                            (h = new oc, M(h, 2, n.href), M(h, 11, n.target || "_top"), b.h.push({
                                element: n,
                                data: h
                            }));
                        Pd(n, f || h, P(h, 2), 557);
                        we(b, e, n, f);
                        h = v(Pb(b.i, 17));
                        for (k = h.next(); !k.done; k = h.next()) {
                            g = void 0;
                            l = k.value;
                            var p = U.body;
                            g = void 0 === g ? {} : g;
                            "function" === typeof window.CustomEvent ? k = new CustomEvent(l, g) : (k = document.createEvent("CustomEvent"), k.initCustomEvent(l, !!g.bubbles, !!g.cancelable, g.detail));
                            p.dispatchEvent(k)
                        }
                        if (null == f ? 0 : null != L(f, 19)) {
                            h = new kc;
                            M(h, 1, Wb(f, 5, 0));
                            g = Zd(n.href, "nx");
                            "" != g && M(h, 2, +g);
                            g = Zd(n.href, "ny");
                            "" !=
                            g && M(h, 3, +g);
                            g = Zd(n.href, "bg");
                            "" != g && M(h, 4, g);
                            g = Zd(n.href, "nm");
                            "" != g && M(h, 5, +g);
                            g = Zd(n.href, "mb");
                            "" != g && M(h, 6, +g);
                            g = P(f, 19);
                            k = null != L(f, 20) ? Vb(L(f, 20), 0) : null;
                            h = ic(h);
                            l = b.F;
                            p = z;
                            p = void 0 === p ? window : p;
                            var r = new tc;
                            M(r, 1, g);
                            null !== k && M(r, 2, k);
                            null !== l && M(r, 3, l);
                            M(r, 4, h);
                            null == p || null == (m = p.fence) || m.reportEvent({
                                eventType: "click",
                                eventData: JSON.stringify(r),
                                destination: ["buyer"]
                            })
                        }
                        Q(b.i, 16) || b.L ? xe(b, e, n, f) : (m = "", (h = Md()) && (m = h.appendClickSignals(n.href)), ye(b, e, n, f, m))
                    }
                }
            }), uc);
            !a && Q(this.i, 21) &&
                (T(X, "pagehide", Kd(1037, function() {
                    if (b.l && b.j && (b.j += "+pagehide", b.H = Date.now(), -1 !== b.G)) {
                        var e = {
                            id: "visibilityBeforePagehide",
                            payload: b.j,
                            delay: b.H - b.G,
                            isios: b.s,
                            clickstring: b.l
                        };
                        Yd(Ic(Fc(), e), !1, !0)
                    }
                })), T(U, "visibilitychange", Kd(1067, function() {
                    if ("visible" === U.visibilityState) b.j = "", b.l = "", b.G = -1, b.H = -1;
                    else if ("hidden" === U.visibilityState && b.j && b.l) {
                        b.G = Date.now();
                        var e = {
                            id: "visibilityhidden",
                            payload: b.j,
                            isios: b.s,
                            clickstring: b.l
                        };
                        Yd(Ic(Fc(), e), !1, !0)
                    }
                })));
            this.m && "function" === typeof window.ss &&
                T(U.body, "mouseover", Kd(626, function() {
                    window.ss(b.m, 0)
                }), vc);
            "function" === typeof window.ivti && window.ivti(window);
            d = window;
            d.googqscp && "function" === typeof d.googqscp.registerCallback && d.googqscp.registerCallback(function(e, f) {
                b.I = e;
                b.J = f
            })
        }
    }

    function xe(a, b, c, d) {
        var e, f, h;
        va(new ua(new qa(function(g) {
            switch (g.h) {
                case 1:
                    e = "";
                    f = Md();
                    if (!f) {
                        g.h = 2;
                        break
                    }
                    b.preventDefault();
                    var k = f.appendClickSignalsAsync(c.href);
                    g.h = 3;
                    return {
                        value: k
                    };
                case 3:
                    e = g.m || "";
                    if (!a.L) {
                        g.h = 2;
                        break
                    }
                    k = f.getNativeClickMeta();
                    g.h = 5;
                    return {
                        value: k
                    };
                case 5:
                    if (h = g.m) {
                        if (h.customClickGestureEligible) return g.return();
                        e = Rd(e, "nas", h.encodedNas)
                    }
                case 2:
                    ye(a, b, c, d, e), g.h = 0
            }
        })))
    }

    function ye(a, b, c, d, e) {
        var f = Q(a.i, 2),
            h = f && 300 < Date.now() - a.R,
            g = Md();
        g ? (Kc(b), function() {
            var k = g.logScionEventAndAddParam(e);
            if (!a.s && d && Mb(d, S, 12)) {
                var l = O(d, S, 12).O();
                if (0 < Sb(d).length)
                    for (var m = v(Sb(d)), n = m.next(); !n.done; n = m.next());
                Q(O(d, S, 12), 2) ? (g.click(k), g.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            if (!l && !Vd(a.B, d, k, g, a.ca)) {
                l = a.ea;
                m = a.s;
                n = a.da;
                var p = Q(d, 15),
                    r = Qd(k);
                !f || !h || p && r || (k = (void 0 === n ? 0 : n) ? Xd(k) : Xd(k, g.click));
                k && k.startsWith("intent:") ? g.openIntentOrNativeApp(k) : l ? m ? g.openBrowser(k) :
                    g.openChromeCustomTab(k) : g.openSystemBrowser(k, {
                        useFirstPackage: !0,
                        useRunningProcess: !0
                    })
            }
        }()) : (Q(a.i, 21) && c.href && "_blank" !== c.target && (a.l = Hc(c.href, "ai") || "") && (a.j = "clicked"), b = window, a.ba && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) : h && (b = "2" === Hc(c.href, "ase") && Qd(c.href) ? Xd(c.href, function() {}) : a.fa ? Xd(c.href, function(k) {
            X.fetch(k, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            })
        }) : Xd(c.href), b !== c.href && Na(c, cd(b, dd(599)))));
        h && (a.R = Date.now());
        ad(a.M)
    }

    function we(a, b, c, d) {
        if (!Q(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (Na(c, cd(e[0], dd(557))); !c.id;)
                if (f = "asoch-id-" + yc(), !U.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            "function" === typeof window.xy && window.xy(b, c, U.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(f);
            "function" === typeof window.ja && window.ja(f, d ? Wb(d, 5, 0) : 0);
            "function" === typeof window.vti && window.vti(f);
            a.m && "function" === typeof window.ss &&
                (a.S ? window.ss(f, 1, a.m) : window.ss(a.m, 1));
            0 < e.length && (a = 0 < a.F.length && (null == d || null == L(d, 19)) ? c.href + "&uach=" + encodeURIComponent(a.F) + e[1] : c.href + e[1], Na(c, cd(a, dd(557))))
        }
    }

    function ze(a) {
        Oc(Kd(556, function() {
            new te(a || {})
        }))
    }

    function ve(a, b) {
        return La(a, function(c) {
            return c.element === b
        })
    }

    function ue(a) {
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            "A" == c.element.tagName && (b = c.element, c = c.data, null == L(c, 2) && M(c, 2, b.href))
        }
    };
    var Ae = Kd(555, function(a) {
        return ze(a)
    });
    Yc = 70;
    var Be = $c(70);
    if (null == Be) throw Error("JSC not found 70");
    for (var Ce = {}, De = Be.attributes, Ee = De.length - 1; 0 <= Ee; Ee--) {
        var Fe = De[Ee].name;
        0 === Fe.indexOf("data-jcp-") && (Ce[Fe.substring(9)] = De[Ee].value)
    }
    Ae(Ce);
}).call(this);