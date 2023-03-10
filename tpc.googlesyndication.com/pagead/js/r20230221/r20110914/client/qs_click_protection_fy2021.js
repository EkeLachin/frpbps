(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var l = this || self;

    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function fa(a, b, c) {
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

    function p(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = aa : p = fa;
        return p.apply(null, arguments)
    }

    function ha(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.T = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.U = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };

    function ia(a) {
        var b;
        a: {
            if (b = l.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function q(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    var ja = {},
        r = null;
    var ka = "undefined" !== typeof Uint8Array;
    const la = !(ia("Trident") || ia("MSIE")) && "function" === typeof l.btoa;
    const u = Symbol();

    function v(a, b) {
        if (u) return a[u] |= b;
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

    function w(a) {
        let b;
        u ? b = a[u] : b = a.A;
        return null == b ? 0 : b
    }

    function x(a, b) {
        u ? a[u] = b : void 0 !== a.A ? a.A = b : Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function ma(a) {
        v(a, 1);
        return a
    }

    function na(a, b) {
        x(b, (a | 0) & -51)
    }

    function y(a, b) {
        x(b, (a | 18) & -41)
    };
    var z = {};

    function oa(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    const ta = [];
    x(ta, 23);
    var B = Object.freeze(ta);

    function ua(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && oa(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function va(a, b) {
        const c = w(a);
        let d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && x(a, d)
    };

    function wa(a) {
        const b = a.i + a.v;
        return a.o || (a.o = a.j[b] = {})
    }

    function C(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.o ? a.o[b] : void 0 : c && a.o && (c = a.o[b], null != c) ? c : a.j[b + a.v]
    }

    function D(a, b, c, d) {
        a.l && (a.l = void 0);
        b >= a.i || d ? wa(a)[b] = c : (a.j[b + a.v] = c, (a = a.o) && b in a && delete a[b])
    }

    function xa(a, b) {
        a = C(a, 1);
        Array.isArray(a) || (a = B);
        const c = w(a);
        c & 1 || ma(a);
        b && (c & 2 || v(a, 18));
        return a
    }

    function ya(a) {
        var b = C(a, 1, !1); {
            var c = za;
            let d = !1;
            null == b || "object" !== typeof b || (d = Array.isArray(b)) || b.K !== z ? d ? (va(b, w(a.j)), c = new c(b)) : c = void 0 : c = b
        }
        c !== b && null != c && D(a, 1, c, !1);
        b = c;
        if (null == b) return b;
        w(a.j) & 2 || (c = Aa(b), c !== b && (b = c, D(a, 1, b, !1)));
        return b
    }

    function Ba(a) {
        var b = w(a.j),
            c = !!(b & 2);
        var d = Ca,
            e = !!(b & 2);
        a.h || (a.h = {});
        var f = a.h[1];
        var g = xa(a, e);
        if (f) e || (e = Object.isFrozen(f), c && !e ? Object.freeze(f) : !c && e && (f = Array.prototype.slice.call(f), a.h[1] = f));
        else {
            var h = g;
            f = [];
            e = !!(b & 2);
            g = !!(w(h) & 2);
            const A = h;
            !e && g && (h = Array.prototype.slice.call(h));
            var m = b | (g ? 2 : 0);
            b = g;
            let t = 0;
            for (; t < h.length; t++) {
                var k = h[t];
                var n = d;
                Array.isArray(k) ? (va(k, m), k = new n(k)) : k = void 0;
                void 0 !== k && (b || (b = !!(2 & w(k.j))), f.push(k))
            }
            a.h[1] = f;
            m = w(h);
            d = m | 33;
            d = b ? d & -9 : d | 8;
            m != d && (b = h, Object.isFrozen(b) &&
                (b = Array.prototype.slice.call(b)), x(b, d), h = b);
            A !== h && D(a, 1, h);
            (e || c && g) && v(f, 18);
            c && Object.freeze(f)
        }
        a = xa(a, c);
        if (!(c || w(a) & 8)) {
            for (c = 0; c < f.length; c++) e = f[c], g = Aa(e), e !== g && (f[c] = g, a[c] = g.j);
            v(a, 8)
        }
        return f
    }

    function F(a, b) {
        return G(C(a, b), 0)
    }

    function G(a, b) {
        return null == a ? b : a
    }

    function H(a) {
        return G(C(a, 1), "")
    }

    function I(a, b) {
        a = C(a, b);
        return G(null == a ? a : !!a, !1)
    }

    function J(a, b) {
        return G(C(a, b), 1)
    };
    let K;

    function Da(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (w(a) & 128)) return a = Array.prototype.slice.call(a), ua(a), a
                    } else if (ka && null != a && a instanceof Uint8Array) {
                    if (la) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        if (!r) {
                            r = {};
                            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                                    d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                                var f = c.concat(d[e].split(""));
                                ja[e] = f;
                                for (var g = 0; g < f.length; g++) {
                                    var h = f[g];
                                    void 0 === r[h] && (r[h] = g)
                                }
                            }
                        }
                        b = ja[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (e = f = 0; f < a.length - 2; f += 3) {
                            var m = a[f],
                                k = a[f + 1];
                            h = a[f + 2];
                            g = b[m >> 2];
                            m = b[(m & 3) << 4 | k >> 4];
                            k = b[(k & 15) << 2 | h >> 6];
                            h = b[h & 63];
                            c[e++] = g + m + k + h
                        }
                        g = 0;
                        h = d;
                        switch (a.length - f) {
                            case 2:
                                g = a[f + 1], h = b[(g & 15) << 2] || d;
                            case 1:
                                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Ea(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Fa(a, b, c, void 0 !== d);
            else if (oa(a)) {
                const e = {};
                for (let f in a) e[f] = Ea(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Fa(a, b, c, d) {
        const e = w(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Ea(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Ga(a) {
        return a.K === z ? a.toJSON() : Da(a)
    }

    function Ha(a, b) {
        a & 128 && ua(b)
    };

    function Ia(a, b, c = y) {
        if (null != a) {
            if (ka && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = w(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return x(a, d | 18), a;
                a = Fa(a, Ia, d & 4 ? y : c, !0);
                b = w(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.K === z ? Ja(a) : a
        }
    }

    function Ka(a, b, c, d, e, f, g) {
        if (a = a.h && a.h[c]) {
            d = w(a);
            d & 2 ? d = a : (f = Array.prototype.map.call(a, Ja, void 0), y(d, f), Object.freeze(f), d = f);
            if (w(b.j) & 2) throw Error();
            g = null == d ? B : ma([]);
            if (null != d) {
                f = !!d.length;
                for (a = 0; a < d.length; a++) {
                    const h = d[a];
                    f = f && !(w(h.j) & 2);
                    g[a] = h.j
                }
                f = (f ? 8 : 0) | 1;
                a = w(g);
                (a & f) !== f && (Object.isFrozen(g) && (g = Array.prototype.slice.call(g)), x(g, a | f));
                b.h || (b.h = {});
                b.h[c] = d
            } else b.h && (b.h[c] = void 0);
            D(b, c, g, e)
        } else {
            d = Ia(d, f, g);
            if (w(b.j) & 2) throw Error();
            D(b, c, d, e)
        }
    }

    function Ja(a) {
        if (w(a.j) & 2) return a;
        a = La(a, !0);
        v(a.j, 18);
        return a
    }

    function La(a, b) {
        const c = a.j;
        var d = [];
        v(d, 16);
        var e = a.constructor.h;
        e && d.push(e);
        e = a.o;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (w(c) & 128) && ua(d);
        b = b || w(a.j) & 2 ? y : na;
        f = a.constructor;
        K = d;
        d = new f(d);
        K = void 0;
        a.P && (d.P = a.P.slice());
        f = !!(w(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Ka(a, d, h - a.v, c[h], !1, f, b);
        if (e)
            for (const h in e) Ka(a, d, +h, e[h], !0, f, b);
        return d
    }

    function Aa(a) {
        if (!(w(a.j) & 2)) return a;
        const b = La(a, !1);
        b.l = a;
        return b
    };
    var L = class {
        constructor(a, b, c) {
            null == a && (a = K);
            K = void 0;
            var d = this.constructor.h;
            if (null == a) {
                a = d ? [d] : [];
                var e = !0;
                x(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (d && d !== a[0]) throw Error();
                var f = v(a, 0) | 32;
                e = 0 !== (16 & f);
                if (128 & f) throw Error();
                x(a, f)
            }
            this.v = d ? 0 : -1;
            this.h = void 0;
            this.j = a;
            a: {
                f = this.j.length;d = f - 1;
                if (f && (f = this.j[d], oa(f))) {
                    this.o = f;
                    this.i = d - this.v;
                    break a
                }
                void 0 !== b && -1 < b ? (this.i = Math.max(b, d + 1 - this.v), this.o = void 0) : this.i = Number.MAX_VALUE
            }
            if (this.o && "g" in this.o) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = e && !0;
                e = this.i;
                let h;
                for (d = 0; d < c.length; d++)
                    if (f = c[d], f < e) {
                        f += this.v;
                        var g = a[f];
                        g ? Ma(g, b) : a[f] = B
                    } else h || (h = wa(this)), (g = h[f]) ? Ma(g, b) : h[f] = B
            }
        }
        toJSON() {
            return Fa(this.j, Ga, Ha)
        }
    };

    function Ma(a, b) {
        if (Array.isArray(a)) {
            var c = w(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && x(a, c | d)
        }
    }
    L.prototype.K = z;
    L.prototype.toString = function() {
        return this.j.toString()
    };
    var Ca = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var za = class extends L {
            constructor(a) {
                super(a, -1, Na)
            }
        },
        Na = [1];
    var Oa = class extends L {
        constructor(a) {
            super(a)
        }
    };

    function Pa() {}

    function Qa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Ra = {
            capture: !0
        },
        Sa = {
            passive: !0
        },
        Ta = Qa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                l.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ua(a) {
        return a ? a.passive && Ta() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ua(d))
    };
    var O = class {
        constructor(a, b) {
            this.h = b === N ? a : ""
        }
        toString() {
            return this.h.toString()
        }
    };
    O.prototype.l = !0;
    O.prototype.i = function() {
        return this.h.toString()
    };
    var N = {},
        Va = new O("about:invalid#zClosurez", N);

    function Wa(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Wa(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    class Xa {
        constructor(a) {
            this.S = a
        }
    }

    function P(a) {
        return new Xa(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Ya = new Xa(a => /^[^:]*([/?#]|$)/.test(a));
    var Za = P("http"),
        $a = P("https"),
        ab = P("ftp"),
        bb = P("mailto");
    const cb = [P("data"), Za, $a, bb, ab, Ya];

    function db(a = cb) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Xa && c.S("#")) return new O("#", N)
        }
    }

    function eb(a = cb) {
        return db(a) || Va
    };

    function fb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let Q = [];
    const gb = () => {
        const a = Q;
        Q = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var hb = a => {
        var b = R;
        "complete" === b.readyState || "interactive" === b.readyState ? (Q.push(a), 1 == Q.length && (window.Promise ? Promise.resolve().then(gb) : window.setImmediate ? setImmediate(gb) : setTimeout(gb, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function ib(a = document) {
        return a.createElement("img")
    };

    function jb(a, b, c = null, d = !1) {
        kb(a, b, c, d)
    }

    function kb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = ib(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    var h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, Ua());
                e.removeEventListener && e.removeEventListener("error", f, Ua())
            };
            M(e, "load", f);
            M(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function lb(a = null) {
        return a && "23" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="23"]')
    }

    function mb() {
        if (!(.01 < Math.random())) {
            var a = lb(document.currentScript);
            a = a && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = lb(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : jb(b, a, void 0, !1)
        }
    };
    var R = document,
        S = window;
    var nb = (a = []) => {
        l.google_logging_queue || (l.google_logging_queue = []);
        l.google_logging_queue.push([12, a])
    };
    const ob = [Za, $a, bb, ab, Ya, P("market"), P("itms"), P("intent"), P("itms-appss")];
    var pb = () => {
        var a = `${"http:"===S.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) Wa(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                0 > b && (b = a.length);
                c = a.indexOf("?");
                if (0 > c || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var qb = () => {
            var a = R;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        rb = (a, b) => {
            a && fb(b, (c, d) => {
                a.style[d] = c
            })
        },
        sb = a => {
            var b = R.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };

    function tb(a, b, c, d, e) {
        const f = [];
        fb(a, function(g, h) {
            (g = ub(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ub(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(ub(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(tb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function vb(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }

    function wb(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = vb(a) - 24;
        if (0 > c) return "";
        a.h.sort(function(f, g) {
            return f - g
        });
        let d = null,
            e = "";
        for (let f = 0; f < a.h.length; f++) {
            const g = a.h[f],
                h = a.i[g];
            for (let m = 0; m < h.length; m++) {
                if (!c) {
                    d = null == d ? g : d;
                    break
                }
                let k = tb(h[m], a.l, ",$");
                if (k) {
                    k = e + k;
                    if (c >= k.length) {
                        c -= k.length;
                        b += k;
                        e = a.l;
                        break
                    }
                    d = null == d ? g : d
                }
            }
        }
        a = "";
        null != d && (a = e + "trn=" + d);
        return b + a
    }
    class xb {
        constructor() {
            this.l = "&";
            this.i = {};
            this.s = 0;
            this.h = []
        }
    };

    function yb() {
        var a = zb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function Ab(a) {
        if (.01 > zb.h) try {
            let b;
            a instanceof xb ? b = a : (b = new xb, fb(a, (d, e) => {
                var f = b;
                const g = f.s++,
                    h = {};
                h[e] = d;
                d = [h];
                f.h.push(g);
                f.i[g] = d
            }));
            const c = wb(b);
            c && jb(l, c)
        } catch (b) {}
    }
    class Bb {
        constructor() {
            this.h = Math.random()
        }
    };
    let T = null;

    function Cb() {
        const a = l.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Db() {
        const a = l.performance;
        return a && a.now ? a.now() : null
    };
    class Eb {
        constructor(a, b) {
            var c = Db() || Cb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const U = l.performance,
        Fb = !!(U && U.mark && U.measure && U.clearMarks),
        V = Qa(() => {
            var a;
            if (a = Fb) {
                var b;
                if (null === T) {
                    T = "";
                    try {
                        a = "";
                        try {
                            a = l.top.location.hash
                        } catch (c) {
                            a = l.location.hash
                        }
                        a && (T = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = T;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Gb(a) {
        a && U && V() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Hb {
        constructor() {
            var a = window;
            this.h = [];
            this.l = a || l;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.i = V() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.i) return null;
            a = new Eb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && V() && U.mark(b);
            return a
        }
        end(a) {
            if (this.i && "number" === typeof a.value) {
                a.duration = (Db() || Cb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && V() && U.mark(b);
                !this.i || 2048 <
                    this.h.length || this.h.push(a)
            }
        }
    };

    function Ib() {
        this.i = this.i;
        this.l = this.l
    }
    Ib.prototype.i = !1;

    function Jb(a) {
        a.i || (a.i = !0, a.s())
    }
    Ib.prototype.s = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };
    class Kb {};
    let zb;
    const W = new Hb;
    var Lb = () => {
        window.google_measure_js_timing || (W.i = !1, W.h != W.l.google_js_reporting_queue && (V() && q(W.h, Gb), W.h.length = 0))
    };
    (a => {
        zb = a ? ? new Bb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        yb();
        "complete" == window.document.readyState ? Lb() : W.i && M(window, "load", () => {
            Lb()
        })
    })();
    var Mb = a => {
        M(S, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "ig" !== c.googMsgType || a(c, b)
        })
    };

    function X(a, b, c) {
        Ib.call(this);
        this.u = a;
        this.H = b || 0;
        this.B = c;
        this.D = p(this.F, this)
    }
    ha(X, Ib);
    X.prototype.h = 0;
    X.prototype.s = function() {
        X.T.s.call(this);
        this.isActive() && l.clearTimeout(this.h);
        this.h = 0;
        delete this.u;
        delete this.B
    };
    X.prototype.start = function(a) {
        this.isActive() && l.clearTimeout(this.h);
        this.h = 0;
        var b = this.D;
        a = void 0 !== a ? a : this.H;
        if ("function" !== typeof b)
            if (b && "function" == typeof b.handleEvent) b = p(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.h = 2147483647 < Number(a) ? -1 : l.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return 0 != this.h
    };
    X.prototype.F = function() {
        this.h = 0;
        this.u && this.u.call(this.B)
    };
    const Nb = {
            display: "inline-block",
            position: "absolute"
        },
        Ob = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function Pb(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 === a.length && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function Qb(a, b, c = 2147483647) {
        const d = R.createElement("div");
        rb(d, { ...Nb,
            "z-index": String(c),
            ...b
        });
        I(a.data, 10) && M(d, "click", Pa);
        if (I(a.data, 11)) {
            a = b = R.createElement("a");
            c = pb();
            const f = eb(ob);
            f === Va && c("#");
            c = f;
            if (c instanceof O) var e = c;
            else if (c instanceof O) e = c;
            else {
                c = "object" == typeof c && c.l ? c.i() : String(c);
                b: {
                    try {
                        e = new URL(c)
                    } catch (g) {
                        e = "https:";
                        break b
                    }
                    e = e.protocol
                }
                "javascript:" === e && (c = "about:invalid#zClosurez");
                e = new O(c, N)
            }
            a.href = e instanceof O && e.constructor === O ? e.h : "type_error:SafeUrl";
            b.appendChild(d);
            return b
        }
        return d
    }

    function Rb(a, b) {
        switch (J(b.m, 5)) {
            case 2:
                S.AFMA_Communicator ? .addEventListener ? .("onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                M(S, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                M(R, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                Mb(c => {
                    c.rr && Z(a, b)
                });
                break;
            case 9:
                if ("IntersectionObserver" in S) {
                    const c = new IntersectionObserver(d => {
                        for (const e of d)
                            if (0 < e.intersectionRatio) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(R.body);
                    a.R.push(c)
                }
                break;
            case 11:
                S.AFMA_Communicator ? .addEventListener ? .("onAdVisibilityChanged", () => {
                    Z(a, b)
                })
        }
    }

    function Sb(a, b) {
        b = Pb(b);
        const c = F(a.data, 9);
        a.s = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => Qb(a, d, 9019))
    }

    function Tb(a) {
        var b = 0;
        for (const d of a.L) {
            const e = d.m,
                f = a.F[J(e, 5)];
            d.C || void 0 === f || (b = Math.max(b, f + F(e, 2)))
        }
        a.u && Jb(a.u);
        b -= Date.now();
        const c = a.i;
        0 < b ? (Y(c, !0), a.u = new X(() => {
            Y(c, !1)
        }, b), a.u.start()) : Y(c, !1)
    }

    function Z(a, b) {
        b.C || (a.F[J(b.m, 5)] = Date.now(), I(b.m, 9) && (a.L.push(b), Tb(a)))
    }

    function Ub(a, b, c) {
        if (!a.h || !a.D || 300 <= b.timeStamp - a.h.timeStamp) return !1;
        const d = new Map;
        q(a.D.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = F(c.m, 11) || 10;
        for (const e of a.h.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var Wb = class {
        constructor() {
            var a = Vb;
            this.s = [];
            this.u = this.i = null;
            this.L = [];
            this.data = null;
            this.H = [];
            this.l = [];
            this.B = [];
            this.F = {};
            this.R = [];
            this.D = this.h = null;
            this.M = "";
            this.N = "true" === a["send-fccs"];
            this.M = a.qid || ""
        }
        init(a) {
            nb([a]);
            this.data = new Oa(a);
            a = ya(this.data);
            q(Ba(a), e => {
                this.B.push({
                    I: 0,
                    C: !1,
                    J: 0,
                    m: e,
                    G: -1
                })
            });
            this.l = qb();
            let b = !1;
            a = this.l.length;
            for (let e = 0; e < a; ++e) {
                var c = new za(JSON.parse(this.l[e].getAttribute("data-ifc") || "[]"));
                q(Ba(c), f => {
                    this.B.push({
                        I: 0,
                        C: !1,
                        J: 0,
                        m: f,
                        G: e
                    });
                    1 === J(f,
                        4) && (b = !0)
                })
            }
            c = a = !1;
            for (var d of this.B) {
                const e = d.m;
                0 < F(e, 2) && 0 < J(e, 5) ? (!this.i && I(e, 9) && (this.i = Qb(this, Ob)), Rb(this, d)) : H(e) && I(e, 9) && Sb(this, H(e));
                H(e) && (a = !0);
                0 < F(e, 11) && (c = !0)
            }
            d = [];
            this.i && d.push(this.i);
            !b && d.push(...this.s);
            R.body && sb(d);
            I(this.data, 13) && hb(() => {
                const e = R.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let g = 0; g < e.length; ++g) {
                    var f = (f = e[g]) ? S.getComputedStyle(f).getPropertyValue("position") : void 0;
                    "absolute" === f && Y(e[g], !1)
                }
            });
            M(R, "click", e => {
                if (this.N) {
                    var f = {
                        cx: e.clientX,
                        cy: e.clientY,
                        et: Date.now(),
                        qid: this.M
                    };
                    var g = Kb;
                    var h = "O";
                    g.O && g.hasOwnProperty(h) || (h = new g, g.O = h);
                    g = [];
                    !f.eid && g.length && (f.eid = g.toString());
                    Ab(f);
                    this.N = !1
                }
                if (!1 === e.isTrusted && I(this.data, 15)) e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), mb();
                else {
                    f = -1;
                    g = [];
                    for (var m of this.B) {
                        h = m.G;
                        var k = -1 !== h;
                        if (!(F(m.m, 3) <= f || m.C || k && !1 === g[h])) {
                            var n = !k || g[h] || this.l[h].contains(e.target);
                            k && n && (g[h] = !0);
                            if (h = n)
                                if (h = e, n = m, k = n.m, 0 < F(k, 2) && 0 < J(k, 5)) h = this.F[J(k, 5)], h = void 0 !==
                                    h && Date.now() < h + F(k, 2);
                                else if (H(k)) {
                                {
                                    k = (0 <= n.G ? this.l[n.G] : R.body).getBoundingClientRect();
                                    var A = Number;
                                    var t = (t = R.body) ? S.getComputedStyle(t).getPropertyValue("zoom") : void 0;
                                    A = A(t || "1");
                                    const [pa, Zb] = [h.clientX, h.clientY], [ba, ca, qa, ra] = [pa / A - k.left, Zb / A - k.top, k.width, k.height];
                                    if (!(0 < qa && 0 < ra) || isNaN(ba) || isNaN(ca) || 0 > ba || 0 > ca) h = !1;
                                    else {
                                        n = Pb(H(n.m));
                                        t = !(ba >= n.left && qa - ba > n.right && ca >= n.top && ra - ca > n.bottom);
                                        if (this.h && I(this.data, 12) && 300 > h.timeStamp - this.h.timeStamp) {
                                            h = this.h.changedTouches[0];
                                            const [da, ea] = [h.clientX / A - k.left, h.clientY / A - k.top];
                                            !isNaN(da) && !isNaN(ea) && 0 <= da && 0 <= ea && (t = (t = I(this.data, 16) ? t : !1) || !(da >= n.left && qa - da > n.right && ea >= n.top && ra - ea > n.bottom))
                                        }
                                        h = t
                                    }
                                }
                            } else h = 0 < F(k, 11) ? Ub(this, h, n) : !0;
                            if (h) {
                                var E = m;
                                f = F(m.m, 3)
                            }
                        }
                    }
                    if (E) switch (m = E.m, J(m, 4)) {
                        case 2:
                        case 3:
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                            f = Date.now();
                            500 < f - E.J && (E.J = f, ++E.I);
                            f = E.m;
                            if (F(f, 8) && E.I >= F(f, 8))
                                if (E.C = !0, this.i && 0 < F(f, 2)) Tb(this);
                                else if (0 < this.s.length && H(f))
                                for (var sa of this.s) Y(sa, !1);
                            mb();
                            sa = m.toJSON();
                            for (const pa of this.H) pa(e, sa)
                    }
                }
            }, Ra);
            c && M(R, "touchstart", e => {
                this.D = e
            }, Sa);
            (a && I(this.data, 12) || c) && M(R, "touchend", e => {
                this.h = e
            }, Sa)
        }
        registerCallback(a) {
            this.H.push(a)
        }
    };
    const Xb = lb(document.currentScript);
    if (null == Xb) throw Error("JSC not found 23");
    var Vb;
    const Yb = {},
        $b = Xb.attributes;
    for (let a = $b.length - 1; 0 <= a; a--) {
        const b = $b[a].name;
        0 === b.indexOf("data-jcp-") && (Yb[b.substring(9)] = $b[a].value)
    }
    Vb = Yb;
    window.googqscp = new Wb;
}).call(this);