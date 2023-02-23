(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = {},
        u = this || self;

    function ba(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ca(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function w(a) {
        return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea)
    }
    var da = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ea = 0;

    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b, c) {
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

    function x(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = ha : x = ia;
        return x.apply(null, arguments)
    }

    function ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ka(a) {
        return a
    };
    var la;

    function ma(a) {
        u.setTimeout(() => {
            throw a;
        }, 0)
    };

    function na() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function z(a) {
        return -1 != na().indexOf(a)
    };

    function oa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function pa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function qa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function ra(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function sa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function ta(a, b) {
        return 0 <= oa(a, b)
    }

    function ua(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function va(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ba(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function wa(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function xa(a) {
        xa[" "](a);
        return a
    }
    xa[" "] = function() {};
    var ya = z("Opera"),
        za = z("Trident") || z("MSIE"),
        Aa = z("Edge"),
        Ba = z("Gecko") && !(-1 != na().toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        Ca = -1 != na().toLowerCase().indexOf("webkit") && !z("Edge");

    function Da() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var Ea;
    a: {
        var Fa = "",
            Ga = function() {
                var a = na();
                if (Ba) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Aa) return /Edge\/([\d\.]+)/.exec(a);
                if (za) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ca) return /WebKit\/(\S+)/.exec(a);
                if (ya) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ga && (Fa = Ga ? Ga[1] : "");
        if (za) {
            var Ha = Da();
            if (null != Ha && Ha > parseFloat(Fa)) {
                Ea = String(Ha);
                break a
            }
        }
        Ea = Fa
    }
    var Ia = Ea,
        Ja;
    if (u.document && za) {
        var Ka = Da();
        Ja = Ka ? Ka : parseInt(Ia, 10) || void 0
    } else Ja = void 0;
    var La = Ja;
    var Ma = {},
        Na = null;
    var Oa = "undefined" !== typeof Uint8Array;
    const Qa = !za && "function" === typeof u.btoa;
    const Ra = Symbol();

    function Sa(a, b) {
        if (Ra) return a[Ra] |= b;
        if (void 0 !== a.sa) return a.sa |= b;
        Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function Ta(a, b) {
        const c = B(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Ua(a, c | b));
        return a
    }

    function B(a) {
        let b;
        Ra ? b = a[Ra] : b = a.sa;
        return null == b ? 0 : b
    }

    function Ua(a, b) {
        Ra ? a[Ra] = b : void 0 !== a.sa ? a.sa = b : Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Va(a) {
        Sa(a, 1);
        return a
    }

    function Xa(a) {
        return !!(B(a) & 2)
    }

    function Ya(a) {
        Sa(a, 16);
        return a
    }

    function Za(a, b) {
        Ua(b, (a | 0) & -51)
    }

    function $a(a, b) {
        Ua(b, (a | 18) & -41)
    };
    var ab = {};

    function bb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let cb;
    var db;
    const eb = [];
    Ua(eb, 23);
    db = Object.freeze(eb);

    function fb(a) {
        if (Xa(a.N)) throw Error("Cannot mutate an immutable Message");
    }

    function gb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && bb(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function hb(a) {
        const b = a.l + a.Ea;
        return a.qa || (a.qa = a.N[b] = {})
    }

    function C(a, b, c) {
        return -1 === b ? null : b >= a.l ? a.qa ? a.qa[b] : void 0 : c && a.qa && (c = a.qa[b], null != c) ? c : a.N[b + a.Ea]
    }

    function ib(a, b, c, d) {
        fb(a);
        return jb(a, b, c, d)
    }

    function jb(a, b, c, d) {
        a.m && (a.m = void 0);
        if (b >= a.l || d) return hb(a)[b] = c, a;
        a.N[b + a.Ea] = c;
        (c = a.qa) && b in c && delete c[b];
        return a
    }

    function kb(a, b, c, d, e) {
        let f = C(a, b, d);
        Array.isArray(f) || (f = db);
        const g = B(f);
        g & 1 || Va(f);
        if (e) g & 2 || Sa(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && (a = f, Ra ? a[Ra] && (a[Ra] &= -17) : void 0 !== a.sa && (a.sa &= -17)) : (f = Va(Array.prototype.slice.call(f)), jb(a, b, f, d))
        }
        return f
    }

    function lb(a, b) {
        a = C(a, b);
        return null == a ? a : !!a
    }

    function mb(a) {
        var b = Xa(a.N);
        let c = kb(a, 4, 1, !1, b);
        const d = B(c);
        if (!(d & 4)) {
            Object.isFrozen(c) && (c = Va(c.slice()), jb(a, 4, c, !1));
            let e = 0,
                f = 0;
            for (; e < c.length; e++) {
                const g = c[e];
                null != g && (c[f++] = g)
            }
            f < e && (c.length = f);
            Sa(c, 5);
            b && (Sa(c, 2), Object.freeze(c))
        }!b && (d & 2 || Object.isFrozen(c)) && (c = Array.prototype.slice.call(c), Sa(c, 5), b = c, b = null == b ? db : Ta(b, 1), ib(a, 4, b, !1));
        return c
    }

    function F(a, b, c, d) {
        fb(a);
        c !== d ? jb(a, b, c) : jb(a, b, void 0, !1);
        return a
    }

    function nb(a, b, c) {
        const d = C(a, c, !1); {
            let f = !1;
            var e = null == d || "object" !== typeof d || (f = Array.isArray(d)) || d.Db !== ab ? f ? new b(d) : void 0 : d
        }
        e !== d && null != e && (jb(a, c, e, !1), Sa(e.N, B(a.N) & 18));
        return e
    }

    function ob(a, b, c) {
        b = nb(a, b, c);
        if (null == b) return b;
        if (!Xa(a.N)) {
            const d = pb(b);
            d !== b && (b = d, jb(a, c, b, !1))
        }
        return b
    }

    function rb(a, b, c) {
        var d = Xa(a.N);
        a.j || (a.j = {});
        var e = a.j[c];
        var f = kb(a, c, 3, void 0, d);
        if (e) d || (f = Object.isFrozen(e), d && !f ? Object.freeze(e) : !d && f && (e = Array.prototype.slice.call(e), a.j[c] = e));
        else {
            var g = f;
            e = [];
            var h = !!(B(a.N) & 16);
            f = Xa(g);
            const n = g;
            !d && f && (g = Array.prototype.slice.call(g));
            var l = f;
            let q = 0;
            for (; q < g.length; q++) {
                var k = g[q];
                var m = b;
                m = Array.isArray(k) ? new m(k) : void 0;
                if (void 0 === m) continue;
                k = m.N;
                const r = B(k);
                let t = r;
                f && (t |= 2);
                h && (t |= 16);
                t != r && Ua(k, t);
                k = t;
                l || (l = !!(2 & k));
                e.push(m)
            }
            a.j[c] = e;
            h =
                B(g);
            b = h | 33;
            b = l ? b & -9 : b | 8;
            h != b && (l = g, Object.isFrozen(l) && (l = Array.prototype.slice.call(l)), Ua(l, b), g = l);
            n !== g && jb(a, c, g);
            (d || d && f) && Sa(e, 2);
            d && Object.freeze(e)
        }
        a = kb(a, c, 3, void 0, d);
        if (!(d || B(a) & 8)) {
            for (d = 0; d < e.length; d++) c = e[d], f = pb(c), c !== f && (e[d] = f, a[d] = f.N);
            Sa(a, 8)
        }
        return e
    }

    function sb(a, b, c) {
        fb(a);
        null == c && (c = void 0);
        return jb(a, b, c)
    }

    function tb(a, b, c = !1) {
        a = lb(a, b);
        return null == a ? c : a
    };
    let ub;

    function vb(a, b) {
        ub = b;
        a = new a(b);
        ub = void 0;
        return a
    };

    function wb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (B(a) & 128)) return a = Array.prototype.slice.call(a), gb(a), a
                    } else if (Oa && null != a && a instanceof Uint8Array) {
                    if (Qa) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        if (!Na) {
                            Na = {};
                            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                                    d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                                var f = c.concat(d[e].split(""));
                                Ma[e] = f;
                                for (var g = 0; g < f.length; g++) {
                                    var h = f[g];
                                    void 0 === Na[h] && (Na[h] = g)
                                }
                            }
                        }
                        b = Ma[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (e = f = 0; f < a.length - 2; f += 3) {
                            var l = a[f],
                                k = a[f + 1];
                            h = a[f + 2];
                            g = b[l >> 2];
                            l = b[(l & 3) << 4 | k >> 4];
                            k = b[(k & 15) << 2 | h >> 6];
                            h = b[h & 63];
                            c[e++] = g + l + k + h
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

    function xb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = yb(a, b, c, void 0 !== d);
            else if (bb(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = xb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function yb(a, b, c, d) {
        const e = B(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = xb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function zb(a) {
        return a.Db === ab ? a.toJSON() : wb(a)
    }

    function Ab(a, b) {
        a & 128 && gb(b)
    };

    function Bb(a, b, c = $a) {
        if (null != a) {
            if (Oa && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = B(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Ua(a, d | 2), a;
                a = yb(a, Bb, d & 4 ? $a : c, !0);
                b = B(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Db === ab ? Cb(a) : a
        }
    }

    function Db(a, b, c, d, e, f, g) {
        if (a = a.j && a.j[c]) {
            d = B(a);
            d & 2 ? d = a : (f = ra(a, Cb), $a(d, f), Object.freeze(f), d = f);
            fb(b);
            f = null == d ? db : Va([]);
            if (null != d) {
                g = !!d.length;
                for (a = 0; a < d.length; a++) {
                    const h = d[a];
                    g = g && !Xa(h.N);
                    f[a] = h.N
                }
                f = Ta(f, (g ? 8 : 0) | 1);
                b.j || (b.j = {});
                b.j[c] = d
            } else b.j && (b.j[c] = void 0);
            jb(b, c, f, e)
        } else ib(b, c, Bb(d, f, g), e)
    }

    function Cb(a) {
        if (Xa(a.N)) return a;
        a = Eb(a, !0);
        Sa(a.N, 2);
        return a
    }

    function Eb(a, b) {
        const c = a.N;
        var d = Ya([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.qa;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (B(c) & 128) && gb(d);
        b = b || Xa(a.N) ? $a : Za;
        d = vb(a.constructor, d);
        a.Ob && (d.Ob = a.Ob.slice());
        f = !!(B(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Db(a, d, h - a.Ea, c[h], !1, f, b);
        if (e)
            for (const h in e) Db(a, d, +h, e[h], !0, f, b);
        return d
    }

    function pb(a) {
        if (!Xa(a.N)) return a;
        const b = Eb(a, !1);
        b.m = a;
        return b
    };
    var Gb = class {
        constructor(a, b, c) {
            null == a && (a = ub);
            ub = void 0;
            var d = this.constructor.messageId,
                e = !1;
            if (null == a) {
                a = d ? [d] : [];
                var f = !0;
                Ua(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (d && d !== a[0]) throw Error();
                var g = Sa(a, 0);
                let h = g;
                if (f = 0 !== (16 & h))(e = 0 !== (32 & h)) || (h |= 32);
                if (128 & h) throw Error();
                g !== h && Ua(a, h)
            }
            this.Ea = d ? 0 : -1;
            this.j = void 0;
            this.N = a;
            a: {
                g = this.N.length;d = g - 1;
                if (g && (g = this.N[d], bb(g))) {
                    this.qa = g;
                    this.l = d - this.Ea;
                    break a
                }
                void 0 !== b && -1 < b ? (this.l = Math.max(b, d + 1 - this.Ea), this.qa = void 0) : this.l =
                    Number.MAX_VALUE
            }
            if (this.qa && "g" in this.qa) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = f && !e && !0;
                f = this.l;
                let h;
                for (e = 0; e < c.length; e++) d = c[e], d < f ? (d += this.Ea, (g = a[d]) ? Fb(g, b) : a[d] = db) : (h || (h = hb(this)), (g = h[d]) ? Fb(g, b) : h[d] = db)
            }
        }
        toJSON() {
            const a = this.N;
            return cb ? a : yb(a, zb, Ab)
        }
    };

    function Fb(a, b) {
        if (Array.isArray(a)) {
            var c = B(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Ua(a, c | d)
        }
    }
    Gb.prototype.Db = ab;

    function Hb(a, b) {
        return wb(b)
    };
    let Ib = void 0;

    function Jb(a, b) {
        const c = Ib;
        Ib = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Kb(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = vb(a, Ya(b))
            }
            return b
        }
    };

    function Lb() {
        return !1
    }

    function Mb() {
        return !0
    }

    function Nb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ob(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Pb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Qb(a) {
        function b() {
            d = u.setTimeout(c, 100);
            let g = f;
            f = [];
            a.apply(void 0, g)
        }

        function c() {
            d = 0;
            e && (e = !1, b())
        }
        let d = 0,
            e = !1,
            f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    };
    var Rb = {
            capture: !0
        },
        Sb = {
            passive: !0
        },
        Tb = Ob(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                u.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ub(a) {
        return a ? a.passive && Tb() ? a : a.capture || !1 : !1
    }

    function H(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ub(d)), !0) : !1
    }

    function I(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Ub(d)), !0) : !1
    };
    var Vb = za || Ca;
    var Wb;

    function Xb() {
        if (void 0 === Wb) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ka,
                        createScript: ka,
                        createScriptURL: ka
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                Wb = a
            } else Wb = a
        }
        return Wb
    };
    var Zb = class {
            constructor(a, b) {
                this.j = b === Yb ? a : ""
            }
            toString() {
                return this.j + ""
            }
        },
        Yb = {};

    function $b(a) {
        const b = Xb();
        a = b ? b.createScriptURL(a) : a;
        return new Zb(a, Yb)
    };
    var bc = class {
            constructor(a, b) {
                this.j = b === ac ? a : ""
            }
            toString() {
                return this.j.toString()
            }
        },
        ac = {},
        cc = new bc("about:invalid#zClosurez", ac);
    const dc = {};

    function ec(a) {
        return a instanceof fc && a.constructor === fc ? a.j : "type_error:SafeHtml"
    }
    class fc {
        constructor(a, b) {
            this.j = b === dc ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    }
    var gc = new fc(u.trustedTypes && u.trustedTypes.emptyHTML || "", dc);
    var hc = Ob(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ec(gc);
        return !b.parentElement
    });

    function ic(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function jc(a) {
        return ic.apply(null, arguments) / arguments.length
    };

    function J(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }

    function kc(a, b) {
        return new J(a.x - b.x, a.y - b.y)
    }
    J.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    J.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    J.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function lc(a, b) {
        this.width = a;
        this.height = b
    }
    p = lc.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function mc(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(nc, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            if (!g) {
                g = e + " ";
                g = (f = Xb()) ? f.createHTML(g) : g;
                g = new fc(g, dc);
                if (hc())
                    for (; d.lastChild;) d.removeChild(d.lastChild);
                d.innerHTML = ec(g);
                g = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = g
        })
    }
    var nc = /&([^;\s<&]+);?/g;

    function oc(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function pc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function qc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function rc(a) {
        return a ? new sc(tc(a)) : la || (la = new sc)
    }

    function uc(a) {
        a = a.document;
        a = vc(a) ? a.documentElement : a.body;
        return new lc(a.clientWidth, a.clientHeight)
    }

    function wc(a) {
        var b = a.document,
            c = 0;
        if (b) {
            c = b.body;
            var d = b.documentElement;
            if (!d || !c) return 0;
            a = uc(a).height;
            if (vc(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                b = d.scrollHeight;
                var e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }

    function xc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function yc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ba(f) || ca(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ca(f)) {
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
                pa(g ? ua(f) : f, d)
            }
        }
    }

    function zc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function vc(a) {
        return "CSS1Compat" == a.compatMode
    }

    function Ac(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function tc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Bc(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function sc(a) {
        this.j = a || u.document || document
    }
    p = sc.prototype;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.createElement = function(a) {
        return zc(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    p.append = function(a, b) {
        yc(tc(a), a, arguments)
    };
    p.contains = Ac;

    function Cc() {
        return !(z("iPad") || z("Android") && !z("Mobile") || z("Silk")) && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    };
    var Dc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    class Ec {
        constructor(a) {
            this.ic = a
        }
    }

    function Fc(a) {
        return new Ec(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Gc = [Fc("data"), Fc("http"), Fc("https"), Fc("mailto"), Fc("ftp"), new Ec(a => /^[^:]*([/?#]|$)/.test(a))];

    function Hc(a, b = Gc) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Ec && d.ic(a)) return new bc(a, ac)
        }
    };

    function Ic(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    xa(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Jc(a) {
        return Ic(a.top) ? a.top : null
    }

    function Kc(a, b) {
        const c = Lc("SCRIPT", a);
        c.src = b instanceof Zb && b.constructor === Zb ? b.j : "type_error:TrustedResourceUrl";
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Mc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Nc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Oc(a) {
        const b = [];
        Nc(a, function(c) {
            b.push(c)
        });
        return b
    }
    var Pc = /^([0-9.]+)px$/,
        Qc = /^(-?[0-9.]{1,30})$/;

    function Rc(a) {
        if (!Qc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function N(a) {
        return (a = Pc.exec(a)) ? +a[1] : null
    }
    var O = (a, b) => {
            Nc(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Sc = (a, b) => {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = qa(c.children || c.childNodes || [], d => 1 === d.nodeType), c.length && a.unshift(...c))
            }
        },
        Uc = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Tc(a.style.cssText), Nc(a, b)
        },
        Tc = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                pa((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Vc = (a, b = () => !0) => {
            const c = /!\s*important/i;
            Uc(a, (d, e) => {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        };
    const Wc = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Xc = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Zc = /.*domain\.test$/,
        $c = /\.prod\.google\.com(:\d+)?$/;
    var ad = a => Wc[a] || Xc.test(a) || Zc.test(a) || $c.test(a),
        bd = a => {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        };

    function Lc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function cd(a) {
        u.google_image_requests || (u.google_image_requests = []);
        const b = Lc("IMG", u.document);
        b.src = a;
        u.google_image_requests.push(b)
    };

    function dd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = dd.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function ed(a) {
        return new dd(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof dd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function fd(a, ...b) {
        if (0 === b.length) return $b(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return $b(c.join(""))
    };

    function P(a, b, c) {
        if ("string" === typeof b)(b = gd(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = gd(c, d);
                f && (c.style[f] = e)
            }
    }
    var hd = {};

    function gd(a, b) {
        var c = hd[b];
        if (!c) {
            var d = pc(b);
            c = d;
            void 0 === a.style[d] && (d = (Ca ? "Webkit" : Ba ? "Moz" : za ? "ms" : null) + qc(d), void 0 !== a.style[d] && (c = d));
            hd[b] = c
        }
        return c
    }

    function id(a, b) {
        var c = tc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function jd(a, b) {
        return id(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function kd(a) {
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

    function ld(a) {
        var b = tc(a),
            c = new J(0, 0);
        var d = b ? tc(b) : document;
        d = !za || 9 <= Number(La) || vc(rc(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = kd(a);
        d = rc(b).j;
        b = d.scrollingElement ? d.scrollingElement : !Ca && vc(d) ? d.documentElement : d.body || d.documentElement;
        d = d.parentWindow || d.defaultView;
        b = za && d.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function md(a) {
        if (1 == a.nodeType) return a = kd(a), new J(a.left, a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new J(a.clientX, a.clientY)
    }

    function nd(a, b) {
        if (b instanceof lc) {
            var c = b.height;
            b = b.width
        } else throw Error("missing height argument");
        a.style.width = od(b, !0);
        a.style.height = od(c, !0)
    }

    function od(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function pd(a) {
        var b = qd;
        if ("none" != jd(a, "display")) return b(a);
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

    function qd(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Ca && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = kd(a), new lc(a.right - a.left, a.bottom - a.top)) : new lc(b, c)
    }

    function rd(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        if (c)
            if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
            else {
                b = a.style.left;
                var d = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = c;
                c = a.style.pixelLeft;
                a.style.left = b;
                a.runtimeStyle.left = d;
                a = +c
            }
        else a = 0;
        return a
    }

    function sd(a, b) {
        if (za) {
            var c = rd(a, b + "Left"),
                d = rd(a, b + "Right"),
                e = rd(a, b + "Top");
            a = rd(a, b + "Bottom");
            return new dd(e, d, a, c)
        }
        c = id(a, b + "Left");
        d = id(a, b + "Right");
        e = id(a, b + "Top");
        a = id(a, b + "Bottom");
        return new dd(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    };
    var td = a => "number" === typeof a && 0 < a;
    class ud {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const vd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var wd = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        xd = class {
            constructor(a, b) {
                this.url = a;
                this.Pb = !!b;
                this.depth = null
            }
        };

    function yd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function zd(a, b, c, d, e) {
        const f = [];
        Nc(a, function(g, h) {
            (g = Ad(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ad(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Ad(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(zd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Bd(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    }

    function Cd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Bd(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = zd(h[l], a.m, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.m;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Dd {
        constructor() {
            this.m = "&";
            this.l = {};
            this.v = 0;
            this.j = []
        }
    };

    function Ed(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }

    function Fd(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Dd ? f = c : (f = new Dd, Nc(c, (h, l) => {
                var k = f;
                const m = k.v++;
                h = yd(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = Cd(f, "/pagead/gen_204?id=" + b + "&");
            g && cd(g)
        } catch (f) {}
    }
    class Gd {
        constructor() {
            this.j = Math.random()
        }
    };
    let Hd = null;

    function Id() {
        const a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Jd() {
        const a = u.performance;
        return a && a.now ? a.now() : null
    };
    class Kd {
        constructor(a, b) {
            var c = Jd() || Id();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Ld = u.performance,
        Md = !!(Ld && Ld.mark && Ld.measure && Ld.clearMarks),
        Nd = Ob(() => {
            var a;
            if (a = Md) {
                var b;
                if (null === Hd) {
                    Hd = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Hd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Hd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Od(a) {
        a && Ld && Nd() && (Ld.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Ld.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Pd(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (Nd() && pa(a.l, Od), a.l.length = 0)
    }
    class Qd {
        constructor(a) {
            this.l = [];
            this.m = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Nd() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Kd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Ld && Nd() && Ld.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Jd() || Id()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Ld && Nd() && Ld.mark(b);
                !this.j || 2048 < this.l.length ||
                    this.l.push(a)
            }
        }
    };

    function Rd(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    class Sd {
        constructor(a, b = null) {
            this.A = a;
            this.l = null;
            this.B = this.Qa;
            this.j = b;
            this.m = !1
        }
        Eb(a) {
            this.l = a
        }
        v(a) {
            this.m = a
        }
        ya(a, b, c) {
            let d, e;
            try {
                this.j && this.j.j ? (e = this.j.start(a.toString(), 3), d = b(), this.j.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Od(e), b = this.B(a, new ud(f, {
                        message: Rd(f)
                    }), void 0, c)
                } catch (g) {
                    this.Qa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        O(a, b) {
            return (...c) => this.ya(a, () => b.apply(void 0, c))
        }
        Qa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const D = new Dd;
                var g = D;
                g.j.push(1);
                g.l[1] = yd("context",
                    a);
                b.error && b.meta && b.id || (b = new ud(b, {
                    message: Rd(b)
                }));
                if (b.msg) {
                    g = D;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = yd("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.l) try {
                    this.l(b)
                } catch (Z) {}
                if (d) try {
                    d(b)
                } catch (Z) {}
                d = D;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = u;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Ic(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new xd(m || ""));
                    try {
                        d = k.parent
                    } catch (Z) {
                        d = null
                    }
                } while (d && k != d);
                for (let Z = 0, fa = l.length - 1; Z <= fa; ++Z) l[Z].depth = fa - Z;
                k = u;
                if (k.location && k.location.ancestorOrigins &&
                    k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var n = l[m];
                        n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.Pb = !0)
                    }
                var q = l;
                let K = new xd(u.location.href, !1);
                k = null;
                const L = q.length - 1;
                for (n = L; 0 <= n; --n) {
                    var r = q[n];
                    !k && vd.test(r.url) && (k = r);
                    if (r.url && !r.Pb) {
                        K = r;
                        break
                    }
                }
                r = null;
                const Wa = q.length && q[L].url;
                0 != K.depth && Wa && (r = q[L]);
                f = new wd(K, r);
                if (f.l) {
                    q = D;
                    var t = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = yd("top", t)
                }
                var y = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var E = f.j.url.match(Dc),
                        G = E[1],
                        M = E[3],
                        v =
                        E[4];
                    t = "";
                    G && (t += G + ":");
                    M && (t += "//", t += M, v && (t += ":" + v));
                    var A = t
                } else A = "";
                G = D;
                y = [y, {
                    url: A
                }];
                G.j.push(5);
                G.l[5] = y;
                Fd(this.A, e, D, this.m, c)
            } catch (D) {
                try {
                    Fd(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Rd(D),
                        url: f && f.j.url
                    }, this.m, c)
                } catch (K) {}
            }
            return !0
        }
    };
    var Td = a => "string" === typeof a,
        Ud = a => void 0 === a;
    var Wd = class extends Gb {
            constructor() {
                super(void 0, -1, Vd)
            }
        },
        Vd = [9];

    function Xd(a) {
        var b = new Yd;
        return F(b, 1, a, 0)
    }

    function Zd(a, b) {
        return F(a, 2, b, !1)
    }

    function $d(a, b) {
        return F(a, 3, b, !1)
    }
    var Yd = class extends Gb {
        constructor() {
            super()
        }
    };

    function ae(a) {
        var b = new be;
        return F(b, 1, a, 0)
    }

    function ce(a, b) {
        return sb(a, 2, b)
    }

    function de(a, b) {
        return F(a, 3, b, 0)
    }
    var be = class extends Gb {
        constructor() {
            super()
        }
    };

    function ee(a) {
        a && "function" == typeof a.Lb && a.Lb()
    };

    function fe() {
        this.L = this.L;
        this.W = this.W
    }
    fe.prototype.L = !1;
    fe.prototype.Lb = function() {
        this.L || (this.L = !0, this.Ca())
    };

    function ge(a, b) {
        Q(a, ja(ee, b))
    }

    function Q(a, b) {
        a.L ? b() : (a.W || (a.W = []), a.W.push(b))
    }
    fe.prototype.Ca = function() {
        if (this.W)
            for (; this.W.length;) this.W.shift()()
    };
    var R = a => {
        var b = "Bb";
        if (a.Bb && a.hasOwnProperty(b)) return a.Bb;
        b = new a;
        return a.Bb = b
    };

    function he(a, b, c) {
        return b[a] || c
    };

    function ie(a, b) {
        a.j = () => he(3, b, () => [])(1)
    }
    class je {
        j() {
            return []
        }
    };
    let ke, le;
    const me = new Qd(window);
    (a => {
        ke = a ? ? new Gd;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Ed(ke, window.google_srt);
        le = new Sd(ke, me);
        le.Eb(() => {});
        le.v(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Pd(me) : me.j && H(window, "load", () => {
            window.google_measure_js_timing || Pd(me)
        })
    })();

    function ne(a, b) {
        return void 0 !== a.j[oe(b)]
    }

    function pe(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }
    const S = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = oe(a);
            this.j[c] = b;
            this.l[c] = a
        }
        get(a, b) {
            a = oe(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ab() {
            return pe(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function oe(a) {
        return a instanceof Object ? String(w(a)) : a + ""
    };
    var qe = class {
            constructor(a) {
                this.B = null != a.j ? a.j : !0;
                this.A = null != a.F ? a.F : 0;
                this.v = null != a.A ? a.A : .9;
                this.l = null != a.l ? a.l : 1.05;
                this.minWidth = null != a.C ? a.C : 0;
                this.C = null != a.v ? a.v : 25;
                this.m = null != a.m ? a.m : 0;
                this.G = null != a.B ? a.B : !1;
                this.F = a.G || null;
                this.j = a.L || null
            }
        },
        re = class {
            build() {
                return new qe(this)
            }
        };

    function se(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    };

    function te(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new ue;
        return a.google_reactive_ads_global_state
    }
    class ue {
        constructor() {
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
            this.floatingAdsStacking = new ve;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var ve = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var we = 728 * 1.38,
        xe = a => a.innerHeight >= a.innerWidth,
        ye = a => {
            const b = T(a).clientWidth;
            a = a.innerWidth;
            return b && a ? b / a : 0
        },
        T = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        ze = (a, b) => {
            const c = T(a);
            return b ? c.scrollHeight == T(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        Ae = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        U = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop :
        a.pageYOffset,
        Be = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Ce = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e = d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        De = a => {
            const b = {
                bottom: "auto",
                clear: "none",
                display: "inline",
                "float": "none",
                height: "auto",
                left: "auto",
                margin: 0,
                "margin-bottom": 0,
                "margin-left": 0,
                "margin-right": "0",
                "margin-top": 0,
                "max-height": "none",
                "max-width": "none",
                opacity: 1,
                overflow: "visible",
                padding: 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0,
                "padding-top": 0,
                position: "static",
                right: "auto",
                top: "auto",
                "vertical-align": "baseline",
                visibility: "visible",
                width: "auto",
                "z-index": "auto"
            };
            pa(Object.keys(b), c => {
                var d = a.style[pc(c)];
                ("undefined" !== typeof d ? d : a.style[gd(a, c)]) || P(a, c, b[c])
            });
            Vc(a)
        };

    function Ee(a, b) {
        var c = T(a).clientWidth;
        var d = T(a).clientHeight;
        if ("number" !== typeof c || "number" !== typeof d) throw Error("No VP width and/or height.");
        c = new lc(c, d);
        d = Be(a);
        a = U(a);
        a = Fe(a, c.width + d, c.height + a, d);
        return (se(b, a) ? new dd(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left)) : null) || Fe(0, 0, 0, 0)
    }

    function Ge(a, b) {
        const c = Be(b),
            d = U(b);
        if (a.getBoundingClientRect) return a = a.getBoundingClientRect(), He(a) ? Fe(a.top + d, a.right + c, a.bottom + d, a.left + c) : Fe(0, 0, 0, 0);
        b = b.document.createRange();
        b.selectNodeContents(a);
        return b.collapsed ? Fe(0, 0, 0, 0) : b.getBoundingClientRect ? (a = b.getBoundingClientRect(), He(a) ? Fe(a.top + d, a.right + c, a.bottom + d, a.left + c) : Fe(0, 0, 0, 0)) : Fe(0, 0, 0, 0)
    }

    function He(a) {
        return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left)
    }
    const Fe = (a, b, c, d) => new dd(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d));

    function Ie(a, b) {
        Je(a).forEach(b, void 0)
    }

    function Je(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };
    const Ke = class {
        constructor(a) {
            this.j = new S;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        contains(a) {
            return ne(this.j, a)
        }
    };
    class Le {
        constructor(a, b) {
            this.j = a[u.Symbol.iterator]();
            this.l = b
        }[Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.j.next();
            return {
                value: a.done ? void 0 : this.l.call(void 0, a.value),
                done: a.done
            }
        }
    }

    function Me(a, b) {
        return new Le(a, b)
    };

    function Ne() {}
    Ne.prototype.next = function() {
        return Oe
    };
    var Oe = {
        done: !0,
        value: void 0
    };
    Ne.prototype.Aa = function() {
        return this
    };

    function Pe(a) {
        if (a instanceof Ne) return a;
        if ("function" == typeof a.Aa) return a.Aa(!1);
        if (ba(a)) {
            let b = 0;
            const c = new Ne;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) return Oe;
                    if (b in a) return {
                        value: a[b++],
                        done: !1
                    };
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Qe(a) {
        a = Pe(a);
        const {
            done: b,
            value: c
        } = a.next();
        return b ? null : c
    };

    function Re(a) {
        if (a instanceof Se || a instanceof Te || a instanceof Ue) return a;
        if ("function" == typeof a.next) return new Se(() => a);
        if ("function" == typeof a[Symbol.iterator]) return new Se(() => a[Symbol.iterator]());
        if ("function" == typeof a.Aa) return new Se(() => a.Aa());
        throw Error("Not an iterator or iterable.");
    }
    class Se {
        constructor(a) {
            this.j = a
        }
        Aa() {
            return new Te(this.j())
        }[Symbol.iterator]() {
            return new Ue(this.j())
        }
        l() {
            return new Ue(this.j())
        }
    }
    class Te extends Ne {
        constructor(a) {
            super();
            this.j = a
        }
        next() {
            return this.j.next()
        }[Symbol.iterator]() {
            return new Ue(this.j)
        }
        l() {
            return new Ue(this.j)
        }
    }
    class Ue extends Se {
        constructor(a) {
            super(() => a);
            this.m = a
        }
        next() {
            return this.m.next()
        }
    };

    function Ve(a, b) {
        this.l = {};
        this.j = [];
        this.m = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Ve)
                for (c = We(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    p = Ve.prototype;
    p.Ab = function() {
        return this.size
    };

    function We(a) {
        Xe(a);
        return a.j.concat()
    }
    p.has = function(a) {
        return Object.prototype.hasOwnProperty.call(this.l, a)
    };
    p.isEmpty = function() {
        return 0 == this.size
    };
    p.clear = function() {
        this.l = {};
        this.m = this.size = this.j.length = 0
    };

    function Xe(a) {
        if (a.size != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                Object.prototype.hasOwnProperty.call(a.l, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.size != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) d = a.j[b], Object.prototype.hasOwnProperty.call(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c
        }
    }
    p.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.l, a) ? this.l[a] : b
    };
    p.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.l, a) || (this.size += 1, this.j.push(a), this.m++);
        this.l[a] = b
    };
    p.forEach = function(a, b) {
        for (var c = We(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    p.keys = function() {
        return Re(this.Aa(!0)).l()
    };
    p.values = function() {
        return Re(this.Aa(!1)).l()
    };
    p.entries = function() {
        const a = this;
        return Me(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    p.Aa = function(a) {
        Xe(this);
        var b = 0,
            c = this.m,
            d = this,
            e = new Ne;
        e.next = function() {
            if (c != d.m) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return Oe;
            var f = d.j[b++];
            return {
                value: a ? f : d.l[f],
                done: !1
            }
        };
        return e
    };

    function Ye(a) {
        return "transparent" == a || "rgba" == a.substring(0, 4) && (a = a.split(","), 4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1
    }

    function Ze() {
        pa($e, a => {
            a.L = null;
            a.C = null
        })
    }

    function af(a) {
        if (!a.D.ownerDocument) throw Error("Wrapped node should have an owner document.");
        return a.D.ownerDocument
    }

    function bf(a) {
        a = af(a);
        return a.defaultView || a.parentWindow
    }

    function cf(a) {
        const b = a.m.j(a.m.l);
        return b == a || b != a && Ac(b.D, a.D)
    }

    function df(a) {
        return Je(a.D.childNodes).map(b => a.m.j(b)).filter(Nb(b => null === b))
    }

    function ef(a) {
        if (!a.j()) return null;
        const b = df(a.j());
        a = oa(b, a);
        if (-1 == a) return null;
        for (a += 1; a < b.length; ++a)
            if (b[a].v() || b[a].I()) return b[a];
        return null
    }

    function ff(a) {
        const b = ef(a);
        return b ? b : a.j() ? ff(a.j()) : null
    }

    function gf(a, b) {
        b.push(a);
        a = df(a);
        for (let c = 0; c < a.length; ++c) gf(a[c], b)
    }

    function hf(a) {
        var b = a.l();
        if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
            var c = Be(bf(a));
            a = U(bf(a));
            c = -c;
            a = -a;
            c instanceof J ? (b.left += c.x, b.right += c.x, b.top += c.y, b.bottom += c.y) : (b.left += c, b.right += c, "number" === typeof a && (b.top += a, b.bottom += a))
        }
        return b
    }

    function V(a, b) {
        if (1 != a.D.nodeType) return null;
        a.A = a.A || bf(a).getComputedStyle(a.D);
        return a.A ? a.A[b] || a.A.getPropertyValue(b) || "" : ""
    }

    function jf(a, b, c) {
        if (void 0 !== a.F[b]) return a.F[b];
        a.F[b] = kf(a, b, c);
        return a.F[b]
    }

    function lf(a) {
        if (void 0 !== a.H) return a.H;
        var b = V(a, "position");
        if ("fixed" == b || "sticky" == b) b = a;
        else {
            var c = a.j();
            b = c && "BODY" != a.D.tagName ? (c = lf(c)) || "absolute" != b && "relative" != b ? c : a : null
        }
        a.H = b;
        return a.H
    }

    function mf(a, b) {
        const c = lf(a);
        if (c && "relative" != V(c, "position"))
            if (null != b) a: {
                do {
                    const d = a.l();
                    if ((d.right - d.left) * (d.bottom - d.top) > b) {
                        b = !1;
                        break a
                    }
                    if (a == c) break;
                    a = a.j()
                } while (null !== a);b = !0
            }
        else b = !0;
        else b = !1;
        return b
    }

    function kf(a, b, c) {
        const d = V(a, "position");
        a: switch (b) {
            case 0:
                var e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-x") || "scroll" == V(a, "overflow-x");
                break a;
            case 1:
                e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-y") || "scroll" == V(a, "overflow-y");
                break a;
            default:
                throw Error("Unknown pageAxis: " + b);
        }
        switch (d) {
            case "fixed":
                if (e) return a;
                break;
            case "static":
            case "":
            case null:
                if (e && !c) return a;
                if (a.j()) return jf(a.j(), b, c);
                break;
            case "absolute":
            case "relative":
                if (e) return a;
                if (a.j()) return jf(a.j(), b, "absolute" == d);
                break;
            default:
                u.console.error("Unknown position value: " + d)
        }
        return null
    }

    function nf(a) {
        var b = a.D.scrollHeight;
        const c = a.D.clientHeight,
            d = af(a).createElement("div");
        d.style.width = "100%";
        d.style.height = Math.max(b, c) + 100 + "px";
        d.style.clear = "both";
        a.D.appendChild(d);
        b = a.D.scrollHeight > a.D.clientHeight && a.D.scrollHeight - b > a.D.clientHeight - c;
        a.D.removeChild(d);
        return b
    }

    function of (a) {
        return null !== a.G ? a.G : "1" != V(a, "opacity") || a.j() && ! of (a.j()) ? a.G = !1 : a.G = !0
    }

    function pf(a) {
        a = a.l();
        a = new dd(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0));
        return a.left < a.right && a.top < a.bottom
    }

    function qf(a) {
        return null !== a.B ? a.B : a.j() && qf(a.j()) || "0" == V(a, "opacity") || "none" == V(a, "display") || "hidden" == V(a, "visibility") || a.D.tagName && "input" == a.D.tagName.toLowerCase() && a.D.type && "hidden" == a.D.type ? a.B = !0 : a.B = !1
    }

    function rf(a, b) {
        return b(a) ? !0 : a.j() ? rf(a.j(), b) : !1
    }

    function sf(a) {
        return !rf(a, b => "hidden" == V(b, "overflow-y"))
    }

    function tf(a) {
        a = V(a, "position");
        return "absolute" == a || "relative" == a
    }

    function uf(a) {
        return a.v() && (a = parseInt(V(a, "z-index"), 10), !isNaN(a)) ? a : 0
    }

    function vf(a, b) {
        return rf(a, c => !!c.D.tagName && c.D.tagName == b)
    }

    function wf(a, b) {
        return rf(a, c => {
            c = c.D;
            return !!c.id && !!c.id.match && !!c.id.match(b)
        })
    }

    function xf(a, b) {
        return rf(a, c => {
            a: {
                c = yf(c);
                for (let d = 0; d < c.length; ++d)
                    if (c[d].match(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        })
    }

    function yf(a) {
        return (a = a.D.className) && "function" === typeof a.split ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : []
    }

    function zf(a) {
        return "A" == a.D.tagName ? a.D.getAttribute("href") : (a = a.j()) ? zf(a) : null
    }

    function Af(a) {
        if (1 != a.D.nodeType) {
            var b = a.j();
            return b ? Af(b) : 0
        }
        const c = af(a).createTextNode("A");
        a.D.appendChild(c);
        b = a.m.j(c);
        if (!b) throw a.D.removeChild(c), Error("Unable to insert textnode");
        a = b.l();
        b.D.parentNode && b.D.parentNode.removeChild(b.D);
        return a.bottom - a.top
    }

    function Bf(a, b) {
        if (b || null == a.W) {
            if (b && !b(a)) return 0;
            let c = 0;
            if (a.I()) c = a.D.textContent.trim().length;
            else {
                const d = df(a);
                for (let e = 0; e < d.length; e++) c += Bf(d[e], b)
            }
            b || (a.W = c);
            return c
        }
        return a.W
    }
    class Cf {
        constructor(a, b) {
            this.D = a;
            this.m = b;
            this.B = this.G = this.J = this.K = null;
            this.F = {};
            this.A = this.C = this.W = null;
            new Ve
        }
        j() {
            return this.D != this.m.l && this.D.parentNode ? this.m.j(this.D.parentNode) : null
        }
        v() {
            return 1 == this.D.nodeType
        }
        I() {
            return 3 == this.D.nodeType
        }
        l() {
            if (!this.L) {
                this.C || (this.C = Ge(this.D, bf(this)));
                var a = ed(this.C);
                var b = V(this, "position");
                if ("fixed" == b) a = Ee(bf(this), a);
                else if (this.j()) {
                    var c = jf(this.j(), 0, "absolute" == b);
                    if (c) {
                        var d = c.l();
                        c = d.left;
                        d = d.right;
                        a = a.left >= d || a.right <= c ? null :
                            Fe(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c))
                    }
                    a && (b = jf(this.j(), 1, "absolute" == b)) && (c = b.l(), b = c.top, c = c.bottom, a = a.top >= c || a.bottom <= b ? null : Fe(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left));
                    a = a && lf(this) && "fixed" == V(lf(this), "position") ? Ee(bf(this), a) : a || new dd(0, 0, 0, 0)
                }
                this.L = a
            }
            return ed(this.L)
        }
        Ka() {
            return !pf(this) || qf(this)
        }
        Cb() {
            var a = V(this, "background-color");
            if (a = a ? Ye(a) : !0) a = V(this, "background-image"), a = !(a && "none" != a);
            return a
        }
        toString() {
            switch (this.D.nodeType) {
                case 1:
                    const a =
                        this.D;
                    let b = a.tagName;
                    a.id && (b += "#" + a.id);
                    a.className && "function" === typeof a.className.split && (b += "." + a.className.split(/\s+/).join("."));
                    return b;
                case 3:
                    return "TEXT#" + this.D.textContent.substr(0, 10);
                default:
                    return "HtmlNode"
            }
        }
    }

    function Df(a, b) {
        const c = w(b);
        var d = a.v.get(c);
        if ("boolean" === typeof d) return d;
        d = a.A && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1;
        !d && b.parentNode && b != a.l && (d = Df(a, b.parentNode));
        a.v.set(c, d);
        return d
    }
    var Ef = class {
            constructor(a, b) {
                this.l = a;
                this.A = b;
                this.v = new S;
                this.m = new S
            }
            j(a) {
                const b = w(a),
                    c = this.m.get(b);
                if (c) return c;
                if (Df(this, a)) return null;
                a = new Cf(a, this);
                this.m.set(b, a);
                return a
            }
        },
        $e = [];
    class Ff {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j(a) {
            return Gf(this.m, a).contains(this.l)
        }
    };

    function Gf(a, b) {
        const c = w(b),
            d = a.l.get(c);
        if (d) return d;
        b = a.j(b);
        a.l.set(c, b);
        return b
    }
    class Hf {
        constructor() {
            this.l = new S
        }
    };

    function If(a, b) {
        let c = zf(b);
        if (a.m.j(b) && null !== c) return c;
        b = df(b);
        if (1 > b.length) return null;
        c = If(a, b[0]);
        for (let d = 1; d < b.length; ++d)
            if (If(a, b[d]) != c) return null;
        return c
    }
    class Jf extends Hf {
        constructor(a) {
            super();
            this.m = a
        }
        j(a) {
            return new Ke(null !== If(this, a) ? [1] : [])
        }
    };
    class Kf extends Hf {
        constructor(a) {
            super();
            this.m = a
        }
        j(a) {
            a: if (3 == a.D.nodeType) var b = this.m.j(a);
                else {
                    b = !1;
                    a = df(a);
                    for (let c of a) {
                        if ((a = V(c, "display")) && "inline" != a) {
                            b = !1;
                            break a
                        }
                        Gf(this, c).contains(0) && (b = !0)
                    }
                }return new Ke(b ? [0] : [])
        }
    };

    function Lf(a, b) {
        return Bf(b, c => !a.m.j(c))
    }
    class Mf extends Hf {
        constructor(a, b, c) {
            super();
            this.v = a;
            this.m = b;
            this.A = c
        }
        j(a) {
            if (this.v.j(a) && !this.m.j(a) && !this.A.j(a) && 50 <= Lf(this, a)) {
                var b = Af(a);
                a = a.l();
                b = a.bottom - a.top >= 2 * b || !1
            } else b = !1;
            return new Ke(b ? [3] : [])
        }
    };

    function Nf(a) {
        return a.classList ? a.classList.contains("adsbygoogle") : ta(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
    };

    function Of(a, b) {
        return a.m.j(b) ? rf(b, function(c) {
            switch (c.D.tagName) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6":
                    return !0
            }
            return !1
        }) || Pf(b) && 5 <= Bf(b) ? !0 : (b = b.j()) ? Gf(a, b).contains(2) : !1 : !1
    }

    function Pf(a) {
        a = yf(a);
        for (let b of a)
            if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/)) return !0;
        return !1
    }
    class Qf extends Hf {
        constructor(a) {
            super();
            this.m = a
        }
        j(a) {
            return new Ke(Of(this, a) ? [2] : [])
        }
    };

    function Rf(a) {
        const b = [];
        pa(a, c => {
            1 == c.D.nodeType && (Sf(c, ":before", b), Sf(c, ":after", b))
        });
        return b
    }

    function Tf(a) {
        a = V(a, "content");
        if (!a || "none" == a || /\(.*\)/.test(a)) return !1;
        /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
        return 0 < a.trim().length
    }
    class Uf extends Cf {
        constructor(a, b) {
            super(a.D, a.m);
            this.M = a;
            this.Ca = b;
            this.A = bf(a).getComputedStyle(a.D, this.Ca)
        }
        v() {
            return !1
        }
        I() {
            return !1
        }
        Ka() {
            if (!Tf(this) && this.Cb()) var a = !0;
            else if (!(a = this.j().Ka() || qf(this) || !pf(this))) {
                a = Tf(this);
                const c = V(this, "width");
                var b = V(this, "height");
                b = a && "auto" == b || 0 < parseFloat(b);
                a = !((a && "auto" == c || 0 < parseFloat(c)) && b)
            }
            return a
        }
        j() {
            return this.M
        }
        Cb() {
            const a = jd(this.j().D, "backgroundColor"),
                b = V(this, "background-color");
            return null == b || b == a || Ye(b) || "fixed" != V(this,
                "position")
        }
        l() {
            switch (V(this, "position")) {
                case "absolute":
                    var a = this.j().l();
                    const b = a.top + parseInt(V(this, "top"), 10);
                    a = a.left + parseInt(V(this, "left"), 10);
                    let c = parseInt(V(this, "width"), 10),
                        d = parseInt(V(this, "height"), 10);
                    return new dd(b, a + c, b + d, a);
                case "fixed":
                    return new dd(0, parseInt(V(this, "width"), 10), parseInt(V(this, "height"), 10), 0);
                default:
                    return this.j().l()
            }
        }
    }
    const Sf = (a, b, c) => {
        if (":before" == b || ":after" == b) {
            var d = new Uf(a, b);
            if (!d.Ka()) switch (c.push(d), b) {
                case ":before":
                    a.K = d;
                    break;
                case ":after":
                    a.J = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
            }
        }
    };
    const Vf = new Ke("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    class Wf extends Hf {
        j(a) {
            var b = a.D,
                c = af(a);
            if (3 == b.nodeType) {
                var d = b.data;
                c = -1 != d.indexOf("&") ? mc(d, c) : d;
                c = /\S/.test(c)
            } else c = !1;
            (c = c || (a instanceof Uf ? Tf(a) : !1)) || (c = (b = b.tagName) && Vf.contains(b.toUpperCase()));
            a = c && !a.Ka();
            return new Ke(a ? [6] : [])
        }
    };

    function Xf(a) {
        a.A || (a.A = new Wf);
        return a.A
    }

    function Yf(a) {
        a.l || (a.l = new Kf(new Ff(Xf(a), 6)));
        return a.l
    }

    function Zf(a) {
        a.m || (a.m = new Qf(new Ff(Yf(a), 0)));
        return a.m
    }
    class $f {
        constructor() {
            this.v = this.m = this.j = this.l = this.A = null
        }
    };
    const ag = class {
        constructor() {
            this.j = new $f
        }
    };

    function bg(a) {
        const b = [];
        for (const c of a.j) b.push(c);
        return b
    }
    class cg {
        constructor() {
            this.j = [];
            this.m = new Ke
        }
        contains(a) {
            return this.m.contains(w(a))
        }
    };
    class dg {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.m = c
        }
        ca() {
            return this.m
        }
    }
    const fg = (a, b, c) => {
            b = eg(a.K, b, c);
            const d = new dg(a, 0, b++);
            c.pa.push(d);
            for (var e of df(a)) b = fg(e, b, c);
            e = new dg(a, 1, b++);
            c.pa.push(e);
            c.map.set(w(a), {
                start: d,
                end: e
            });
            return b = eg(a.J, b, c)
        },
        eg = (a, b, c) => {
            if (!a) return b;
            const d = new dg(a, 0, b++),
                e = new dg(a, 1, b++);
            c.pa.push(d);
            c.pa.push(e);
            c.map.set(w(a), {
                start: d,
                end: e
            });
            return b
        };

    function gg(a) {
        if (a instanceof Uf) return !0;
        if (!a.v()) return !1;
        const b = a.D,
            c = V(a, "position");
        if ("HTML" == b.tagName || "fixed" == c || "auto" != V(a, "z-index") && ("absolute" == c || "relative" == c)) return !0;
        a = V(a, "opacity");
        return "1" != a && "" != a ? !0 : !1
    }

    function hg(a) {
        const b = a.j.j();
        return b ? ig(a.l, b) : null
    }
    class jg {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }

    function kg(a, b, c) {
        var d = ig(a.j, b);
        a = ig(a.j, c);
        d = lg(d, a);
        if (!d) return 0;
        switch (d.ub) {
            case 0:
                return uf(b) - uf(d.pb.j);
            case 1:
                return uf(d.ob.j) - uf(c);
            case 2:
                return uf(d.ob.j) - uf(d.pb.j);
            default:
                throw Error("Unhandled adjacency.");
        }
    }
    var ng = class {
        constructor() {
            this.j = new mg
        }
    };

    function ig(a, b) {
        const c = w(b);
        var d = a.j.get(c);
        if (d) return d;
        d = b.j();
        b = !d || gg(b) ? new jg(b, a) : ig(a, d);
        a.j.set(c, b);
        return b
    }
    var mg = class {
        constructor() {
            this.j = new S
        }
    };

    function lg(a, b) {
        if (a == b) return null;
        const c = new S;
        var d = b;
        let e;
        for (; e = hg(d);) {
            if (a == e) return {
                ob: a,
                ub: 0,
                pb: d
            };
            c.set(w(e), d);
            d = e
        }
        for (; e = hg(a);) {
            if (e == b) return {
                ob: a,
                ub: 1,
                pb: b
            };
            if (d = c.get(w(e))) return {
                ob: a,
                ub: 2,
                pb: d
            };
            a = e
        }
        throw Error("Contexts not in same DOM.");
    };

    function og(a, b, c, d = []) {
        a = [].concat(a, d);
        b = new pg(b, c);
        for (let e of a) e.Cb() || e.Ka() || (c = b, a = e, c.j.push(a), c.m.add(w(a)));
        return b
    }
    class pg extends cg {
        constructor(a, b) {
            super();
            this.l = a;
            this.A = b
        }
        v(a, b = !1) {
            const c = a.l();
            b = b ? bg(this) : this.j.slice(0);
            for (let f = 0; f < b.length; ++f) {
                var d = b[f];
                if (!cf(d)) continue;
                var e = d.l();
                if (!se(e, c)) continue;
                const g = kg(this.A, d, a);
                !(e = 0 < g) && (e = 0 == g && !(d != a && Ac(d.D, a.D))) && (e = a, tf(d) && !tf(e) ? e = !0 : !tf(d) && tf(e) ? e = !1 : (e = this.l.map.get(w(e)), d = this.l.map.get(w(d)), e = e && d && e.end.ca() < d.start.ca() ? !0 : !1));
                if (e) return !0
            }
            return !1
        }
    };
    class qg {
        constructor(a, b) {
            this.jc = a;
            this.oc = b
        }
    };

    function rg(a, b) {
        let c = 0,
            d = null;
        const e = a.j.slice(0);
        for (let f = 0; f < e.length; ++f) {
            const g = a.l.map.get(w(e[f]));
            g.end.ca() < b && g.end.ca() > c && (d = g, c = g.end.ca())
        }
        return d
    }
    class sg extends cg {
        constructor(a) {
            super();
            this.l = a
        }
    };
    const tg = class extends sg {
        constructor(a, b) {
            super(a);
            this.A = b
        }
        v(a, b = !1) {
            const c = a.l(),
                d = mf(a);
            b = b ? bg(this) : this.j.slice(0);
            for (let e = 0; e < b.length; ++e) {
                const f = b[e];
                if (cf(f) && (d || !(0 < kg(this.A, a, f))) && se(b[e].l(), c)) return !0
            }
            return !1
        }
    };
    const ug = class {
        constructor(a, b, c) {
            this.l = a;
            this.m = b;
            this.j = c
        }
    };
    const vg = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.l = a;
            this.A = b;
            this.P = c;
            this.T = d;
            this.v = e;
            this.m = f;
            this.j = g;
            this.B = h
        }
    };
    const wg = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.v = b;
            this.m = c;
            this.j = d
        }
    };
    class xg {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            if (!a) return [9];
            a = a.l();
            a = a.right - a.left;
            return this.l <= a && a <= this.m ? [] : [4]
        }
    };
    const yg = class {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function zg(a) {
        if (0 != a.m) throw Error("Already resolved/rejected.");
    }
    var Cg = class {
        constructor() {
            this.j = new Ag(this);
            this.m = 0
        }
        resolve(a) {
            zg(this);
            this.m = 1;
            this.A = a;
            Bg(this.j)
        }
        l(a) {
            zg(this);
            this.m = 2;
            this.v = a;
            Bg(this.j)
        }
    };

    function Bg(a) {
        switch (a.j.m) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.A);
                break;
            case 2:
                a.m && a.m(a.j.v);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Ag = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.m = b;
            Bg(this)
        }
    };

    function Dg(a, b, c) {
        var d = new Cg;
        a.j(new yg(function() {
            d.resolve(b())
        }, c));
        return d.j
    }

    function Eg(a, b, c, d) {
        a.j(new yg(function() {
            b.resolve(c)
        }, d))
    }

    function Fg(a, b) {
        a.j(new yg(function() {
            b.l("n")
        }, "rrej"))
    }
    var Gg = class {};
    class Hg {
        constructor(a) {
            this.j = a
        }
    };

    function Ig(a, b) {
        var c = new Cg;
        a.j.j(new yg(function() {
            Jg(a, b, c)
        }, "idom"));
        return c.j
    }

    function Kg(a) {
        return Dg(a.j, function() {
            return new ag
        }, "icla")
    }

    function Lg(a, b, c) {
        var d = new Cg;
        Mg(a, b, new Hg(c.j)).then(function(e) {
            Ng(a, b).then(function(f) {
                Og(a, b, e).then(function(g) {
                    d.resolve(new ug(f, g, e))
                })
            })
        });
        return d.j
    }

    function Pg(a, b, c) {
        var d = new Cg;
        Ig(a, b).then(function(e) {
            Kg(a).then(function(f) {
                Lg(a, e, f).then(function(g) {
                    Eg(a.j, d, new wg(e, g, f, c))
                }, x(d.l, d))
            }, x(d.l, d))
        }, x(d.l, d));
        return d.j
    }

    function Jg(a, b, c) {
        var d = b.document.body;
        if (d) {
            var e = b.document.body.getBoundingClientRect().width;
            if (null == e) c.l("bw");
            else {
                var f = T(b).clientWidth,
                    g = T(b).clientHeight;
                if (null == f || null == g) c.l("vp");
                else {
                    var h = (new Ef(d, !0)).j(d);
                    if (h) {
                        var l = new ng;
                        Qg(a, h).then(function(k) {
                            $e = k;
                            Rg(a, h).then(function(m) {
                                c.resolve(new vg(b, e, f, g, h, k, m, l))
                            })
                        })
                    } else c.l("nt")
                }
            }
        } else c.l("b")
    }

    function Qg(a, b) {
        return Dg(a.j, function() {
            const c = [];
            gf(b, c);
            return c
        }, "iflt")
    }

    function Rg(a, b) {
        return Dg(a.j, function() {
            const c = {
                map: new S,
                pa: []
            };
            fg(b, 0, c);
            return c
        }, "intm")
    }

    function Mg(a, b, c) {
        return Dg(a.j, function() {
            var d = b.m;
            const e = new tg(b.j, b.B),
                f = new Ff(Xf(c.j), 6);
            for (let h of d)
                if (f.j(h)) {
                    d = e;
                    var g = h;
                    d.j.push(g);
                    d.m.add(w(g))
                }
            return e
        }, "ivis")
    }

    function Ng(a, b) {
        return Dg(a.j, function() {
            var c = Rf(b.m);
            return og(b.m, b.j, b.B, c)
        }, "ibck")
    }

    function Og(a, b, c) {
        return Dg(a.j, function() {
            var d = b.j;
            const e = new S;
            var f = 0;
            for (var g = 0; g < d.pa.length; ++g) {
                var h = d.pa[g],
                    l = h.j,
                    k;
                if (k = 1 == h.l) k = V(l, "float"), k = "left" == k || "right" == k;
                k && (l = l.l().bottom, l > f && (f = l));
                e.set(w(h), f)
            }
            f = new S;
            g = Number.MAX_VALUE;
            for (h = d.pa.length - 1; 0 <= h; --h) l = d.pa[h], k = l.j, 0 == l.l && c.contains(k) && (k = k.l().top, k < g && (g = k)), f.set(w(l), g);
            d = new S;
            g = pe(e);
            for (h = 0; h < g.length; ++h) {
                l = e.get(g[h]);
                k = f.get(g[h]);
                if ("number" !== typeof k) throw Error("No entry in minSubsequentTopBounds for terminal UID!");
                d.set(g[h], new qg(l, k))
            }
            return d
        }, "irel")
    }
    var Sg = class {
        constructor(a) {
            this.j = a
        }
    };

    function Tg(a) {
        var b = [];
        Ie(a.getElementsByTagName("p"), function(c) {
            100 <= Ug(c) && b.push(c)
        });
        return b
    }

    function Ug(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Ie(a.childNodes, function(c) {
            b += Ug(c)
        });
        return b
    }

    function Vg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Wg(a, b) {
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
    const Xg = class {
        constructor(a, b, c, d) {
            this.v = a;
            this.l = b;
            this.m = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.v)
            } catch (f) {}
            if (!b.length) return [];
            a = ua(b);
            a = Wg(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.m) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Tg(a[c]),
                        e = this.m;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.v,
                occurrenceIndex: this.l,
                paragraphIndex: this.m,
                ignoreMode: this.j
            })
        }
    };

    function Yg(a) {
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
    class Zg {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function $g(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new ah(d)
    }

    function bh(a, b = 1) {
        a = a.j.slice(0);
        const c = new Zg(b);
        wa(a, () => c.next());
        return new ah(a)
    }
    const ah = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new ah(qa(this.j, a))
        }
        apply(a) {
            return new ah(a(this.j.slice(0)))
        }
        sort(a) {
            return new ah(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new ah(b)
        }
    };
    var dh = class extends Gb {
            constructor(a) {
                super(a, -1, ch)
            }
            getId() {
                return C(this, 3)
            }
        },
        ch = [4];
    class eh {
        constructor(a, {
            Vb: b,
            Oc: c,
            Yc: d,
            xc: e
        }) {
            this.A = a;
            this.l = c;
            this.v = new ah(b || []);
            this.j = e;
            this.m = d
        }
    };
    var fh = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new S;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        hh = a => {
            var b = gh(a);
            a = [];
            for (let c of b) b = String(c.Ua), a.push(c.Na + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const gh = a => {
            const b = [],
                c = a.v;
            c && c.j.length && b.push({
                Na: "a",
                Ua: ih(c)
            });
            null != a.l && b.push({
                Na: "as",
                Ua: a.l
            });
            null != a.m && b.push({
                Na: "i",
                Ua: String(a.m)
            });
            null != a.j && b.push({
                Na: "rp",
                Ua: String(a.j)
            });
            b.sort(function(d, e) {
                return d.Na.localeCompare(e.Na)
            });
            b.unshift({
                Na: "t",
                Ua: jh(a.A)
            });
            return b
        },
        jh = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        ih = a => {
            a = a.j.slice(0).map(kh);
            a = JSON.stringify(a); {
                const c = a.length;
                if (0 == c) a = 0;
                else {
                    var b = 305419896;
                    for (let d = 0; d <
                        c; d++) b ^= (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295;
                    a = 0 < b ? b : 4294967296 + b
                }
            }
            return a
        },
        kh = a => {
            const b = {};
            null != C(a, 7) && (b.q = C(a, 7));
            null != C(a, 2) && (b.o = C(a, 2));
            null != C(a, 5) && (b.p = C(a, 5));
            return b
        };
    var lh = class extends Gb {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return ib(this, 1, a)
        }
    };
    var mh = class {
        constructor(a, b = !1) {
            this.j = a;
            this.defaultValue = b
        }
    };
    var nh = new mh(1196),
        oh = new mh(313),
        ph = new mh(1233),
        qh = new mh(1232),
        rh = new mh(1225),
        sh = new mh(1147),
        th = new mh(1957, !0),
        uh = new class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        }(1972);
    var vh = class {
        constructor() {
            const a = {};
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.v = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.m = () => {}
        }
    };

    function wh(a) {
        return R(vh).j(a.j, a.defaultValue)
    };

    function xh(a, b, c) {
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
        Yg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function yh(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Yg(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Ah = (a, b, c) => {
        if (wh(oh)) {
            var d = zh(b, c);
            if (d.Ia) {
                for (c = b = d.Ia; c = d.ba(c);) b = c;
                d = {
                    anchor: b,
                    position: d.jb
                }
            } else d = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = 0;
            xh(a, d.anchor, d.position)
        } else xh(a, b, c)
    };

    function zh(a, b) {
        const c = e => {
                e = Bh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Bh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    Ia: Ch(a.previousSibling, c),
                    ba: e => Ch(e.previousSibling, c),
                    jb: 0
                };
            case 2:
                return {
                    Ia: Ch(a.lastChild, c),
                    ba: e => Ch(e.previousSibling, c),
                    jb: 0
                };
            case 3:
                return {
                    Ia: Ch(a.nextSibling, d),
                    ba: e => Ch(e.nextSibling, d),
                    jb: 3
                };
            case 1:
                return {
                    Ia: Ch(a.firstChild, d),
                    ba: e => Ch(e.nextSibling, d),
                    jb: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Bh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ch(a, b) {
        return a && b(a) ? a : null
    };
    var Dh = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    var Eh = {
            BODY: {
                da: [1, 2],
                la: !1,
                ma: 2,
                ka: 4
            },
            HEADER: {
                da: [0, 3, 1, 2],
                la: !1,
                ma: 1,
                ka: 3
            },
            NAV: {
                da: [0, 3],
                la: !1,
                ma: 1,
                ka: 3
            },
            H1: {
                da: [0],
                la: !1,
                ma: 1,
                ka: 2
            },
            IMG: {
                da: [0, 3],
                la: !0,
                ma: 0,
                ka: 1
            },
            DIV: {
                da: [0, 3, 1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            TABLE: {
                da: [0, 3],
                la: !0,
                ma: 0,
                ka: 1
            },
            TD: {
                da: [1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            ASIDE: {
                da: [0, 3, 1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            LI: {
                da: [1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            SECTION: {
                da: [0, 3, 1, 2],
                la: !0,
                ma: 0,
                ka: 1
            }
        },
        Fh = a => ({
            da: a.da.slice(0),
            la: a.la,
            ma: a.ma,
            ka: a.ka
        }),
        Gh = (a, b) => {
            const c = Fh(a);
            c.da = qa(a.da, d => b[d]);
            return c
        };

    function Hh(a) {
        var b = a.length - 1,
            c = new Ne;
        c.next = function() {
            return 0 > b ? Oe : {
                value: a[b--],
                done: !1
            }
        };
        return c
    };
    var Ih = {
            0: !0,
            1: !0
        },
        Jh = {
            2: !0,
            3: !0
        },
        Kh = {
            3: !0
        },
        Lh = class {
            constructor(a, b, c) {
                this.m = a;
                this.l = b;
                this.j = c
            }
            ba() {
                for (var a = Qe(this.l); null !== a; a = Qe(this.l)) {
                    var b = a.j;
                    if (1 != b.D.nodeType) b = null;
                    else {
                        var c = Eh[b.D.tagName];
                        c ? (a = Gh(c, 0 == a.l ? Ih : 0 < df(a.j).length ? Jh : Kh), b = {
                            node: b,
                            vb: a,
                            identifier: {}
                        }) : b = null
                    }
                    if (b && (a = b.node.l().getWidth(), c = this.m, null == a || null == c ? 0 : a >= c * this.j.v && a <= c * this.j.l)) return a = new Cg, a.resolve(b), a.j
                }
                b = new Cg;
                b.l("na");
                return b.j
            }
        };
    var Mh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Nh = (a, b) => {
        do {
            const c = Mc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };
    var Oh = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Ph = a => {
            let b = 0;
            for (let c in Mh) - 1 != a.indexOf(c) && (b |= Mh[c]);
            return b
        },
        Qh = (a, b, c, d, e) => {
            if (a !== a.top) return Jc(a) ? 3 : 16;
            if (!(488 > T(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = T(a).clientWidth;
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = T(a).clientWidth; c; c =
                        c.parentElement)
                        if ((d = Mc(c, a)) && (e = N(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        Rh = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Sh = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = Mc(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        Th = (a, b, c) => {
            a = Oh(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var Uh = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = Mc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Rh(b, c, "0px");
            b.style.width = T(a).clientWidth + "px";
            if (0 !== Th(a, b, c)) {
                Rh(b, c, "0px");
                var d = Th(a, b, c);
                Rh(b, c, -1 * d + "px");
                a = Th(a, b, c);
                0 !== a && a !== d && Rh(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var Vh = class {
        constructor(a, b) {
            this.La = a;
            this.m = b
        }
        height() {
            return this.m
        }
        j(a) {
            return 300 < a && 300 < this.m ? this.La : Math.min(1200, Math.round(a))
        }
        l() {}
    };
    var Wh = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Mc(a, b)) && e[c] && d(e[c]) || null
        },
        Xh = a => b => b.La <= a,
        $h = (a, b, c, d) => {
            const e = a && Yh(c, b),
                f = Zh(b, d);
            return g => !(e && g.height() >= f)
        },
        ai = a => b => b.height() <= a,
        Yh = (a, b) => {
            a = Oh(a, b);
            return (a ? a.y : 0) < T(b).clientHeight - 100
        },
        bi = (a, b) => {
            var c = Wh(b, a, "height", N);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = Wh(b, a, "height", N);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && N(b.style.height)) && (c = Math.min(c, d)), (d = Wh(b,
                a, "maxHeight", N)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const Zh = (a, b) => {
        const c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * T(a).clientHeight / 3) : 250
    };

    function ci(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = pc(d.vc);
            a[e] = d.value
        }
    }

    function di(a, b, c) {
        var d = [];
        if (c = c && c.j()) a.Va.className = c.join(" ");
        a = a.Da;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        d.length && a.setAttribute("data-ad-channel", d.join("+"))
    }

    function ei(a, b) {
        var c = b.xb || !1;
        const d = (new sc(a)).createElement("DIV"),
            e = d.style;
        e.width = "100%";
        e.height = "auto";
        e.clear = c ? "both" : "none";
        c = d.style;
        c.textAlign = "center";
        b.ib && ci(c, b.ib);
        a = (new sc(a)).createElement("INS");
        c = a.style;
        c.display = "block";
        c.margin = "auto";
        c.backgroundColor = "transparent";
        b.Fb && (c.marginTop = b.Fb);
        b.wb && (c.marginBottom = b.wb);
        b.eb && ci(c, b.eb);
        d.appendChild(a);
        return {
            Va: d,
            Da: a
        }
    };

    function fi(a, b = !1) {
        if (a.na) return a.na;
        if (b = a.C(b)) Ze(), !a.j && b && (a.j = b.l());
        return b
    }

    function gi(a) {
        return a.G.node || null
    }

    function hi(a) {
        return (a = gi(a)) && a.v() ? Yg(a.D) : !1
    }

    function ii(a) {
        return pe(a.L.j).map(b => {
            switch (b) {
                case 1:
                    return "IN ARTICLE";
                case 2:
                    return "ABOVE FOOTER";
                case 3:
                    return "ABOVE COMMENT";
                case 4:
                    return "PEDESTAL";
                case 5:
                    return "BELOW CONTENT";
                default:
                    return null
            }
        }).filter(b => null != b).join(", ")
    }
    class ji {
        constructor(a) {
            this.G = a.l;
            this.l = a.v;
            this.j = this.na = null;
            this.v = !1;
            this.L = new Ke(pe(a.j.j))
        }
        B() {}
        C() {}
        F() {}
        m() {}
    }
    var ki = class {
        constructor(a, b) {
            this.l = a;
            this.v = b;
            this.j = new Ke;
            this.m = []
        }
        build() {}
    };

    function li(a, b) {
        va(a.m, b);
        return a
    }
    class mi {
        constructor() {
            this.l = [];
            this.m = [];
            this.v = []
        }
        j(a) {
            if (a = gi(a)) {
                for (var b = 0; b < this.v.length; ++b)
                    if (vf(a, this.v[b])) return [6];
                for (b = 0; b < this.l.length; ++b)
                    if (wf(a, this.l[b])) return [6];
                for (b = 0; b < this.m.length; ++b)
                    if (xf(a, this.m[b])) return [6]
            }
            return []
        }
    }
    var ni = [/cookie/, /(^|(-|_))sticky((-|_)|$)/],
        oi = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/],
        pi = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/],
        qi = [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/],
        ri = ["A", "FORM", "BUTTON"];

    function si(a) {
        return b => !!(b.cb & a)
    }
    class W extends Vh {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.cb = c;
            this.hc = d
        }
        qb() {
            return this.cb
        }
        l(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const ti = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        ui = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        vi = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function wi(a) {
        var b = 0;
        a.Ba && b++;
        a.ta && b++;
        a.ua && b++;
        if (3 > b) return {
            za: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.Ba.split(",");
        const c = a.ua.split(",");
        a = a.ta.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            za: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            za: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                za: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                za: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            ua: d,
            ta: e,
            Rb: b
        }
    }

    function xi(a) {
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

    function yi(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = zi(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function zi(a) {
        let b = "";
        Nc(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    const Ai = xa("script");
    class Bi {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, n = null) {
            this.C = a;
            this.J = b;
            this.cb = c;
            this.j = d;
            this.H = e;
            this.l = f;
            this.m = g;
            this.G = h;
            this.L = l;
            this.v = k;
            this.A = m;
            this.W = n;
            this.I = this.F = this.B = null
        }
        size() {
            return this.J
        }
    };
    class Ci extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Ci) : this.stack = Error().stack || ""
        }
    };
    var Di = class extends Vh {
            j(a) {
                return Math.min(1200, Math.max(this.La, Math.round(a)))
            }
        },
        Ii = (a, b) => {
            Gi(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new Bi(9, new Di(a, Math.floor(a * b.google_phwr)));
            var c = Cc();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * ti.mobile_banner_image_sidebyside + ui.mobile_banner_image_sidebyside) + 96), a = {
                Ta: a,
                Sa: c,
                ta: 1,
                ua: 12,
                Ba: "mobile_banner_image_sidebyside"
            }) : (a = xi(a), a = {
                Ta: a.width,
                Sa: a.height,
                ta: 1,
                ua: 13,
                Ba: "image_sidebyside"
            }) : (a = xi(a), a = {
                Ta: a.width,
                Sa: a.height,
                ta: 4,
                ua: 2,
                Ba: "image_stacked"
            });
            Hi(b, a);
            return new Bi(9, new Di(a.Ta, a.Sa))
        },
        Ji = (a, b) => {
            Gi(a, b);
            var c = wi({
                ua: b.google_content_recommendation_rows_num,
                ta: b.google_content_recommendation_columns_num,
                Ba: b.google_content_recommendation_ui_type
            });
            if (c.za) a = {
                Ta: 0,
                Sa: 0,
                ta: 0,
                ua: 0,
                Ba: "image_stacked",
                za: c.za
            };
            else {
                var d = 2 === c.Rb.length && 468 <= a ? 1 : 0;
                var e = c.Rb[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = vi[e];
                let g = c.ta[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.ua[d];
                c = Math.floor(((a - 8 * f - 8) / f *
                    ti[e] + ui[e]) * d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    yc: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    yc: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    Ta: a.width,
                    Sa: a.height,
                    ta: f,
                    ua: d,
                    Ba: e
                }
            }
            if (a.za) throw new Ci(a.za);
            Hi(b, a);
            return new Bi(9, new Di(a.Ta, a.Sa))
        };

    function Gi(a, b) {
        if (0 >= a) throw new Ci("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Hi(a, b) {
        a.google_content_recommendation_ui_type = b.Ba;
        a.google_content_recommendation_columns_num = b.ta;
        a.google_content_recommendation_rows_num = b.ua
    };
    class Ki extends Vh {
        j() {
            return this.La
        }
        l(a, b, c) {
            Uh(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const Li = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var Mi = class extends Vh {
            j() {
                return Math.min(1200, this.La)
            }
        },
        Ni = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = Qh(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = T(b).clientWidth)
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const l = g.parentElement.childNodes;
                                for (let k = 0; k < l.length; ++k) {
                                    const m = l[k];
                                    if (m != g && Sh(b, m)) break b
                                }
                                g = g.parentElement;
                                g.style.width =
                                    "100%";
                                g.style.height = "auto"
                            }
                        }
                        Uh(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new Ci("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new Ci("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new Bi(11, new Vh(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b =
                    null;
                if (!b) throw new Ci("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new Ci("Invalid height: height=" + f);
                if (50 > f) throw new Ci("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new Ci("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new Bi(11, new Vh(a, f))
            }
            d = Li[f];
            if (!d) throw new Ci("Invalid data-ad-layout value: " + f);
            c = Yh(c, b);
            b = T(b).clientWidth;
            b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new Bi(11, "in-article" == f ? new Mi(a, b) : new Vh(a, b))
        };
    var Oi = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        Qi = (a, b) => {
            var c = Pi.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var X = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        Pi = [X[6], X[12], X[3], X[0], X[7], X[14], X[1], X[8], X[10], X[4], X[15], X[2], X[11], X[5], X[13], X[9], X[16]];
    let Ri, Si;
    const Ti = new Qd(u);
    (a => {
        Ri = a || new Gd;
        "number" !== typeof u.google_srt && (u.google_srt = Math.random());
        Ed(Ri, u.google_srt);
        Si = new Sd(Ri, Ti);
        Si.v(!0);
        "complete" == u.document.readyState ? u.google_measure_js_timing || Pd(Ti) : Ti.j && H(u, "load", () => {
            u.google_measure_js_timing || Pd(Ti)
        })
    })();
    var Ui = (a, b, c) => Si.ya(a, b, c),
        Vi = (a, b) => Si.O(a, b),
        Wi = (a, b, c) => {
            const d = R(je).j();
            !b.eid && d.length && (b.eid = d.toString());
            Fd(Ri, a, b, !0, c)
        };
    var Xi = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                ia: a,
                ja: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || "auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = Qh(c, d, a, .3, e), !0 !== b ? e = b : "true" == e.google_full_width_responsive || Nh(d, c) ? (e = T(c).clientWidth, b = e - a, e = e && 0 <= b ? !0 : e ? -10 > b ? 11 : 0 > b ? 14 : 12 : 10) : e = 9, c = !0 !== e ? {
                ia: a,
                ja: e
            } : {
                ia: T(c).clientWidth || a,
                ja: !0
            }) : c = {
                ia: a,
                ja: 2
            };
            const {
                ia: f,
                ja: g
            } = c;
            return !0 !== g ? {
                ia: a,
                ja: g
            } : d.parentElement ? {
                ia: f,
                ja: g
            } : {
                ia: a,
                ja: g
            }
        },
        $i = (a, b, c, d, e) => {
            const {
                ia: f,
                ja: g
            } = Ui(247, () => Xi(a, b, c, d, e));
            var h = !0 === g;
            const l = N(d.style.width),
                k = N(d.style.height),
                {
                    Oa: m,
                    Ja: n,
                    qb: q,
                    Qb: r
                } = Yi(f, b, c, d, e, h);
            h = Zi(b, q);
            var t;
            const y = (t = Wh(d, c, "marginLeft", N)) ? t + "px" : "",
                E = (t = Wh(d, c, "marginRight", N)) ? t + "px" : "";
            t = Wh(d, c, "zIndex") || "";
            return new Bi(h, m, q, null, r, g, n, y, E, k, l, t)
        },
        Yi = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, T(c).clientWidth) ? 4 : 3 : Ph(b);
            let g;
            var h = !1;
            let l = !1;
            var k = 488 > T(c).clientWidth;
            if (k) {
                g = Nh(d, c);
                var m = Yh(d, c);
                h = !m && g;
                l =
                    m && g
            }
            m = [Xh(a), si(b)];
            m.push($h(k, c, d, l));
            null != e.google_max_responsive_height && m.push(ai(e.google_max_responsive_height));
            k = [t => !t.hc];
            if (h || l) h = bi(c, d), k.push(ai(h));
            let n = Qi(Oi(m), Oi(k));
            if (!n) throw new Ci("No slot size for availableWidth=" + a);
            const {
                Oa: q,
                Ja: r
            } = Ui(248, () => {
                var t;
                a: if (f) {
                    if (e.gfwrnh && (t = N(e.gfwrnh))) {
                        t = {
                            Oa: new Ki(a, t),
                            Ja: !0
                        };
                        break a
                    }
                    t = a / 1.2;
                    var y = Math;
                    var E = y.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var G = Infinity;
                    else {
                        G = d;
                        let v = Infinity;
                        do {
                            var M =
                                Wh(G, c, "height", N);
                            M && (v = Math.min(v, M));
                            (M = Wh(G, c, "maxHeight", N)) && (v = Math.min(v, M))
                        } while ((G = G.parentElement) && "HTML" != G.tagName);
                        G = v
                    }
                    y = E.call(y, t, G);
                    if (y < .5 * t || 100 > y) y = t;
                    t = {
                        Oa: new Ki(a, Math.floor(y)),
                        Ja: y < t ? 102 : !0
                    }
                } else t = {
                    Oa: n,
                    Ja: 100
                };
                return t
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                Oa: aj(a, c, d, q, e),
                Ja: !1,
                qb: b,
                Qb: g
            } : {
                Oa: q,
                Ja: r,
                qb: b,
                Qb: g
            }
        };
    const Zi = (a, b) => {
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
        },
        aj = (a, b, c, d, e) => {
            const f = e.google_ad_height || Wh(c, b, "height", N);
            b = Ni(a, b, c, f, e).size();
            return b.La * b.height() > a * d.height() ? new W(b.La, b.height(), 1) : d
        };
    var bj = (a, b, c, d, e) => {
        var f;
        (f = T(b).clientWidth) ? 488 > T(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Uh(b, c), f = {
            ia: f,
            ja: !0
        }) : f = {
            ia: a,
            ja: 5
        } : f = {
            ia: a,
            ja: 4
        }: f = {
            ia: a,
            ja: 10
        };
        const {
            ia: g,
            ja: h
        } = f;
        if (!0 !== h || a == g) return new Bi(12, new Vh(a, d), null, null, !0, h, 100);
        const {
            Oa: l,
            Ja: k,
            qb: m
        } = Yi(g, "auto", b, c, e, !0);
        return new Bi(1, l, m, 2, !0, h, k)
    };
    const cj = (a, b, c, d, e) => {
        const f = d.google_ad_height || Wh(c, e, "height", N);
        switch (a) {
            case 5:
                const {
                    ia: g,
                    ja: h
                } = Ui(247, () => Xi(b, d.google_ad_format, e, c, d));
                !0 === h && b != g && Uh(e, c);
                !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                return Ii(g, d);
            case 9:
                return Ji(b, d);
            case 8:
                return Ni(b, e, c, f, d);
            case 10:
                return bj(b, e, c, f, d)
        }
    };
    class dj extends ji {
        constructor(a) {
            super(a);
            this.A = ""
        }
        B() {
            return 1
        }
        C(a = !1) {
            const b = gi(this);
            if (!b) return null;
            hi(this) && (this.A = b.D.style.display);
            var c = ii(this),
                d = af(b),
                e = ei(d, {
                    Fb: "10px",
                    wb: "10px",
                    xb: this.v
                });
            e.Va.className = "google-auto-placed";
            const f = e.Da;
            var g = f.style;
            g.display = "inline-block";
            g.boxSizing = "border-box";
            g.width = "100%";
            g.height = a ? "auto" : "100px";
            g.backgroundColor = "#f60";
            g.border = "#000 solid 1px";
            c && (g = d.createElement("span"), g.style.fontSize = "small", g.appendChild(d.createTextNode(c)),
                f.appendChild(g));
            c = e.Va;
            e = e.Da;
            Ah(c, b.D, Dh[this.l]);
            if (a) try {
                this.F(e, xc())
            } catch (h) {
                e.style.height = "100px"
            }
            this.na = b.m.j(c);
            this.na || (c.parentNode.removeChild(c), hi(this) && (b.D.style.display = this.A));
            return this.na
        }
        F(a, b) {
            var c = {
                    google_ad_format: "auto"
                },
                d = 1,
                e = a.offsetWidth || (c.google_ad_resize || !1) && Wh(a, b, "width", N) || c.google_ad_width || 0;
            4 === d && (c.google_ad_format = "auto", d = 1);
            var f = (f = cj(d, e, a, c, b)) ? f : $i(e, c.google_ad_format, b, a, c);
            f.size().l(b, c, a);
            null != f.cb && (c.google_responsive_formats = f.cb);
            null != f.H && (c.google_safe_for_responsive_override = f.H);
            null != f.l && (!0 === f.l ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = f.l));
            null != f.m && !0 !== f.m && (c.gfwrnher = f.m);
            b = f.A || c.google_ad_width;
            null != b && (c.google_resizing_width = b);
            b = f.v || c.google_ad_height;
            null != b && (c.google_resizing_height = b);
            b = f.size().j(e);
            const g = f.size().height();
            if (!c.google_ad_resize) {
                c.google_ad_width = b;
                c.google_ad_height = g;
                var h = f.size();
                e = h.j(e) + "x" + h.height();
                c.google_ad_format =
                    e;
                c.google_responsive_auto_format = f.C;
                null != f.j && (c.armr = f.j);
                c.google_ad_resizable = !0;
                c.google_override_format = 1;
                c.google_loader_features_used = 128;
                !0 === f.l && (c.gfwrnh = f.size().height() + "px")
            }
            null != f.G && (c.gfwroml = f.G);
            null != f.L && (c.gfwromr = f.L);
            null != f.v && (c.gfwroh = f.v);
            null != f.A && (c.gfwrow = f.A);
            null != f.W && (c.gfwroz = f.W);
            null != f.B && (c.gml = f.B);
            null != f.F && (c.gmr = f.F);
            null != f.I && (c.gzi = f.I);
            e = Jc(window) || window;
            yi(e.location, "google_responsive_dummy_ad") && (ta([1, 2, 3, 4, 5, 6, 7, 8], f.C) || 1 === f.j) && 2 !==
                f.j && (e = JSON.stringify({
                    googMsgType: "adpnt",
                    key_value: [{
                        key: "qid",
                        value: "DUMMY_AD"
                    }]
                }), c.dash = `<${Ai}>window.top.postMessage('${e}', '*'); 
          </${Ai}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);
            1 != d && (c = f.size().height(), a.style.height = c + "px")
        }
        m() {
            if (this.na) {
                var a = this.na;
                a.D.parentNode && a.D.parentNode.removeChild(a.D);
                this.na = null;
                hi(this) && (gi(this).D.style.display = this.A);
                Ze()
            }
        }
    }
    var ej = class extends ki {
        build() {
            return new dj(this)
        }
    };
    new Ke(["comments"]);
    new Ke(["allcomments"]);
    new Ke(["post-container", "post", "type-post"]);
    var gj = (a, b, c) => {
            const d = [];
            a.map(e => fj(e, b, c)).forEach(e => va(d, e));
            return d
        },
        fj = (a, b, c) => {
            const d = a.vb.da,
                e = a.node;
            if (!e) return [];
            const f = [];
            e.j() && ta(d, 0) && f.push(0);
            ta(d, 1) && f.push(1);
            ta(d, 2) && (!ta(d, 1) || 0 < df(e).length) && f.push(2);
            e.j() && ta(d, 3) && f.push(3);
            return f.map(g => {
                g = new ej(a, g);
                b.forEach(g.j.add, g.j);
                g.m.push(...c);
                return g.build()
            })
        },
        hj = (a, b) => {
            a = gi(b) ? a.map.get(w(gi(b))) : void 0;
            if (!a) return -1;
            switch (b.l) {
                case 0:
                    return a.start.ca();
                case 1:
                    return a.start.ca() + 1;
                case 2:
                    return a.end.ca();
                case 3:
                    return a.end.ca() + 1
            }
            return -1
        },
        ij = (a, b) => {
            a = gi(b) ? a.map.get(w(gi(b))) : void 0;
            if (!a) return -1;
            switch (b.l) {
                case 0:
                    return a.start.ca() - .1;
                case 3:
                    return a.end.ca() + .1;
                case 1:
                    return a.start.ca() + .1;
                case 2:
                    return a.end.ca() - .1
            }
            return -1
        };

    function jj(a, b) {
        b && a.j.push(b);
        return a
    }

    function kj(a, b) {
        a.l.push(b);
        return a
    }

    function lj(a, b) {
        return Dg(a.v, () => {
            const c = [];
            for (let d = 0; d < a.l.length; ++d) {
                const e = a.l[d].j(b);
                va(c, e);
                if (0 < e.length) break
            }
            return c
        }, "flap")
    }

    function mj(a, b) {
        return Dg(a.v, () => {
            if (0 == a.j.length) var c = [];
            else {
                var d = Math.floor(ij(a.A, b));
                if ((d = -1 != d ? d + b.B() + "|" + b.v + "|10px|10px" : null) && ne(a.m, d)) c = a.m.get(d);
                else {
                    var e = [],
                        f = fi(b);
                    try {
                        for (let g = 0; g < a.j.length; ++g)
                            if (c = a.j[g].j(f), va(e, c), 0 < c.length) {
                                b.m();
                                break
                            }
                    } finally {
                        b.m()
                    }
                    null != d && a.m.set(d, e);
                    c = e
                }
            }
            return c
        }, "flfa")
    }

    function nj(a, b) {
        const c = new Cg;
        lj(a, b).then(d => {
            0 < d.length ? c.resolve(d) : mj(a, b).then(e => {
                c.resolve(d.concat(e))
            })
        });
        return c.j
    }
    class oj {
        constructor(a, b) {
            this.v = a;
            this.j = [];
            this.l = [];
            this.A = b;
            this.m = new S
        }
    };
    class pj {
        constructor(a) {
            this.l = a
        }
        j(a) {
            if (!a) return [];
            for (let b = 0; b < this.l.length; ++b)
                if (this.l[b].v(a, !1)) return [2];
            return []
        }
    };
    class qj {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            if (!a) return [9];
            const b = ze(this.l, !0);
            return null == b ? [16] : b - a.l().bottom < this.m ? [17] : []
        }
    };
    class rj {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            for (a = Math.floor(ij(this.l, a)); 0 < a; a--) {
                const b = this.l.pa[a];
                if (!b.j.Ka()) {
                    if ((0 == b.l ? hf(b.j).top : hf(b.j).bottom) <= this.m) break;
                    return []
                }
            }
            return [10]
        }
    };
    class sj {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.m = c
        }
    };
    class tj {
        constructor(a) {
            const b = [];
            a = a.j.slice(0);
            for (let c = 0; c < a.length; ++c) b.push(a[c].l());
            this.m = b;
            this.l = new S
        }
        j(a) {
            const b = w(a);
            if (ne(this.l, b)) return this.l.get(b);
            a: {
                var c = a.l();c = new sj(c.left, c.top + a.D.scrollHeight, a.D.scrollWidth);
                for (e of this.m) {
                    b: {
                        if (c.j >= Math.floor(e.bottom)) {
                            var d = !1;
                            break b
                        }
                        d = Math.ceil(e.left);
                        const f = c.l + c.m;d = !(Math.floor(e.right) <= c.l || f <= d)
                    }
                    if (d) {
                        var e = !0;
                        break a
                    }
                }
                e = !1
            }
            e = !e && a.D.scrollHeight > a.D.clientHeight && sf(a);
            c = a.j();
            c = !c || this.j(c);
            a = e && c ? !0 : e ? nf(a) : c &&
                !nf(a);
            this.l.set(b, a);
            return a
        }
    };
    class uj {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j(a) {
            const b = gi(a);
            if (!b) return [];
            switch (a.l) {
                case 0:
                case 3:
                    return a = b.j(), b != this.m && a && this.l.j(a) ? [] : [14];
                case 1:
                case 2:
                    return this.l.j(b) ? [] : [14];
                default:
                    throw Error("Unhandled position.");
            }
        }
    };
    class vj {
        constructor(a) {
            this.l = a
        }
        j(a) {
            return (a = gi(a)) && mf(a, this.l) ? [11] : []
        }
    };
    class wj {};

    function xj(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var Aj = (a, b) => {
            var c = ua(b.document.querySelectorAll(".google-auto-placed"));
            const d = ua(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
                e = ua(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var f;
            (f = yj(b)) || (f = ua(b.document.querySelectorAll("div[id^=div-gpt-ad]")));
            f = f.concat(ua(b.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const g = ua(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                h = ua(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                l = ua(b.document.querySelectorAll("div.googlepublisherpluginad")),
                k = ua(b.document.querySelectorAll("html > ins.adsbygoogle"));
            let m = [].concat(ua(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), ua(b.document.querySelectorAll("body ins.adsbygoogle")));
            b = [];
            for (const [n, q] of [
                    [a.Sc, c],
                    [a.Nb, d],
                    [a.Vc, e],
                    [a.Tc, f],
                    [a.Wc, g],
                    [a.Rc, h],
                    [a.Uc, l],
                    [a.Xc, k]
                ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
            a = zj(m);
            c = zj(b);
            a = a.slice(0);
            for (const n of c)
                for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
            return a
        },
        Cj = a => {
            const b = yj(xc(tc(a))) || [];
            return !!Bc(a, c => {
                if (!ca(c) || 1 != c.nodeType) return !1;
                const d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || ta(b, c) || sa(Oc(Bj), e => d.call(c, e))
            }, !1, 20)
        };
    const yj = a => {
            const b = xj(a);
            return b ? qa(ra(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        Bj = {
            Dc: "ins.adsbygoogle-ablated-ad-slot",
            Fc: "body ins.adsbygoogle",
            Ec: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            Gc: ".google-auto-placed",
            Hc: "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]",
            Ic: "iframe[id^=google_ads_iframe]",
            Kc: "div[id^=div-gpt-ad]",
            Lc: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            Mc: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            Jc: "div.googlepublisherpluginad",
            Nc: "html > ins.adsbygoogle"
        };
    var zj = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Dj = Si.O(453, Aj);

    function Ej(a) {
        a = Fj(a);
        Gj(a);
        return new Hj(a)
    }

    function Ij(a) {
        return a.j.map(b => b.box)
    }
    class Hj {
        constructor(a) {
            this.j = a.slice(0)
        }
    }

    function Fj(a) {
        const b = Dj({
                Nb: !1
            }, a),
            c = Be(a),
            d = U(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Pc: e ? 1 : 0
            } : null
        }).filter(Nb(e => null === e))
    }

    function Gj(a) {
        ra(a, () => new wj)
    };
    class Jj {
        constructor(a, b, c) {
            this.l = Dj({}, c).map(x(a.j, a)).filter(Nb(d => null === d));
            this.m = b
        }
        j(a) {
            if (!a) return [9];
            a = a.l();
            for (let d = 0; d < this.l.length; d++) {
                const e = this.l[d].l();
                var b;
                if (b = 1 < (e.bottom - e.top) * (e.right - e.left)) {
                    b = a.top;
                    var c = this.m;
                    (b = e.top - c < b && b < e.bottom + c) || (b = a.bottom, c = this.m, b = e.top - c < b && b < e.bottom + c)
                }
                if (b) return [8]
            }
            return []
        }
    };
    class Kj {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            if (hi(a)) return [];
            a = ij(this.l.l, a);
            var b = rg(this.l, a);
            if (!b) return [];
            const c = this.m.j(b.start.j);
            b = b.end.ca();
            return c && 10 >= a - b ? [5] : []
        }
    };
    const Lj = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
    class Mj {
        j(a) {
            a = gi(a);
            if (!a) return [12];
            if (!Lj.includes(a.D.tagName) || a.D.id) return [];
            const b = yf(a),
                c = af(a);
            for (const d of b)
                if (1 == c.getElementsByClassName(d).length) return [];
            return 150 >= a.l().getHeight() ? [13] : []
        }
    };
    class Nj {
        j(a) {
            return a && !a.Ka() && of (a) ? [] : [3]
        }
    };

    function Oj(a, b) {
        return 0 < a.j.length ? (b.resolve(a.j.shift()), !0) : !1
    }
    class Pj {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.C = [];
            this.v = [];
            this.j = []
        }
        ba() {
            const a = new Cg;
            this.l.j(new yg(x(this.m, this, a), "p"));
            return a.j
        }
        m(a) {
            Oj(this, a) || this.A.ba().then(x(this.B, this, a), x(a.l, a))
        }
        B(a, b) {
            b = gj([b], this.C, this.v);
            va(this.j, b);
            Oj(this, a) || this.l.j(new yg(x(this.m, this, a), "p"))
        }
    };
    class Qj {
        constructor(a) {
            this.j = a.filter(b => hi(b));
            this.l = a.filter(b => !hi(b))
        }
        ba() {
            return this.j.shift() || this.l.shift() || null
        }
    };
    class Rj {};

    function Sj(a, b) {
        a.l.j(new yg(() => {
            const c = a.j ? a.j.ba() : null;
            c ? Tj(a, b, c) : a.A.ba().then(x(a.B, a, b), x(a.F, a, b))
        }, "r"))
    }

    function Tj(a, b, c) {
        a.v && a.v.apply(c);
        a.m ? nj(a.m, c).then(function(d) {
            0 == d.length ? (0 < a.j.j.length || (a.j = null), Eg(a.l, b, c, "rres")) : (a.C.push(new Rj), Sj(a, b))
        }) : Eg(a.l, b, c, "rres")
    }
    class Uj {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.v = c;
            this.m = d;
            this.j = null;
            this.C = []
        }
        ba() {
            const a = new Cg;
            Sj(this, a);
            return a.j
        }
        B(a, b) {
            this.j = b;
            Sj(this, a)
        }
        F(a) {
            Fg(this.l, a)
        }
    };
    class Vj {
        constructor(a) {
            this.j = a
        }
        ba() {
            const a = new Cg;
            this.j.ba().then(b => {
                a.resolve(new Qj([b]))
            }, x(a.l, a));
            return a.j
        }
    };
    class Wj {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        apply(a) {
            var b = hj(this.j, a);
            b = this.l.get(w(this.j.pa[b]));
            a.v = b.jc <= b.oc
        }
    };
    class Xj {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a: {
                const b = gi(a);
                if (b) {
                    switch (a.l) {
                        case 0:
                        case 3:
                            if (a = b.j()) break a;
                            throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                        case 1:
                        case 2:
                            a = b;
                            break a
                    }
                    throw Error("Un-handled ad placement position.");
                }
                a = null
            }
            return a && ta(this.l, a.D) ? [18] : []
        }
    };
    var Yj = [{
        hostname: /^([a-z]+.)?m.wikihow.com$/,
        ec: "mw-mf-viewport"
    }];
    const Zj = a => {
        if (!a.location || !a.location.hostname) return [];
        var b = a.location.hostname,
            c = [];
        pa(Yj, function(d) {
            b.match(d.hostname) && (d = a.document.getElementById(d.ec)) && c.push(d)
        });
        return c
    };

    function ak(a, b) {
        a.l.j(new yg(function() {
            if (a.j)
                if (a.m.j(a.j)) {
                    var c = a.j;
                    a.j = ff(a.j);
                    b.resolve(c)
                } else {
                    a: {
                        c = a.j;
                        const d = df(c);
                        for (let e = 0; e < d.length; ++e)
                            if (d[e].v()) {
                                c = d[e];
                                break a
                            }
                        c = ff(c)
                    }
                    a.j = c;ak(a, b)
                }
            else b.l(null)
        }, "fpar"))
    }
    const bk = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.m = c
        }
        ba() {
            var a = new Cg;
            ak(this, a);
            return a.j
        }
    };
    class ck {
        constructor(a) {
            this.l = a;
            this.j = []
        }
        reset() {
            const a = this.j;
            this.j = [];
            return a
        }
    };
    var dk = {
            da: [3],
            la: !1,
            ma: 0,
            ka: 1
        },
        ek = new Ke(["LI", "TR", "TD", "TH"]);

    function fk(a, b) {
        a.l.j(new yg(function() {
            a.A.ba().then(x(a.v, a, b), x(a.m, a, b))
        }, "para"))
    }
    const gk = class {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.j = new ck(c)
        }
        ba() {
            var a = new Cg;
            fk(this, a);
            return a.j
        }
        v(a, b) {
            var c = this.j;
            if (c.j.length) {
                var d = c.j[c.j.length - 1];
                var e = c.l;
                const f = e.l.map.get(w(b));
                (e = f ? rg(e, f.start.ca()) : null) ? (e = e.start.j, d = d == e || d != e && Ac(d.D, e.D)) : d = !0
            } else d = !0;
            d ? c.j.push(b) : c.j = [b];
            b = this.j;
            (b = 3 <= b.j.length ? b.j[b.j.length - 3 + 1] : null) && !ek.contains(b.D.tagName) ? a.resolve({
                node: b,
                vb: Fh(dk),
                identifier: {}
            }) : fk(this, a)
        }
        m(a) {
            a.l("na")
        }
    };
    const hk = class extends Gg {
        constructor() {
            super();
            this.l = [];
            this.m = !1
        }
        j(a) {
            this.l.push(a);
            if (!this.m) {
                this.m = !0;
                try {
                    for (; 0 < this.l.length;) this.l.shift().j()
                } finally {
                    this.m = !1
                }
            }
        }
    };
    const ik = class {
        constructor() {
            this.j = Date.now();
            this.l = Date.now()
        }
    };
    var jk;

    function kk() {
        var a = u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = zc(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = x(function(l) {
                if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Jb;
                    c.Jb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Jb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            u.setTimeout(e, 0)
        }
    };
    class lk {
        constructor(a, b) {
            this.v = a;
            this.m = b;
            this.l = 0;
            this.j = null
        }
        get() {
            let a;
            0 < this.l ? (this.l--, a = this.j, this.j = a.next, a.next = null) : a = this.v();
            return a
        }
    };

    function mk() {
        var a = nk;
        let b = null;
        a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
        return b
    }
    class ok {
        constructor() {
            this.l = this.j = null
        }
        add(a, b) {
            const c = pk.get();
            c.set(a, b);
            this.l ? this.l.next = c : this.j = c;
            this.l = c
        }
    }
    var pk = new lk(() => new qk, a => a.reset());
    class qk {
        constructor() {
            this.next = this.j = this.l = null
        }
        set(a, b) {
            this.l = a;
            this.j = b;
            this.next = null
        }
        reset() {
            this.next = this.j = this.l = null
        }
    };
    let rk, sk = !1,
        nk = new ok,
        uk = () => {
            if (u.Promise && u.Promise.resolve) {
                const a = u.Promise.resolve(void 0);
                rk = () => {
                    a.then(tk)
                }
            } else rk = () => {
                var a = tk;
                "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && !z("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (jk || (jk = kk()), jk(a)) : u.setImmediate(a)
            }
        };
    var tk = () => {
        for (var a; a = mk();) {
            try {
                a.l.call(a.j)
            } catch (c) {
                ma(c)
            }
            var b = pk;
            b.m(a);
            100 > b.l && (b.l++, a.next = b.j, b.j = a)
        }
        sk = !1
    };
    var vk = class extends Gg {
        constructor(a, b, c) {
            var d = new ik;
            super();
            this.G = a;
            this.l = d;
            this.B = b || null;
            this.v = c || null;
            this.m = [];
            this.A = !1
        }
        j(a) {
            this.m.push(a);
            this.A || (a = this.F, rk || uk(), sk || (rk(), sk = !0), nk.add(a, this))
        }
        F() {
            this.B ? this.B(x(this.C, this)) : this.C()
        }
        C() {
            if (!this.A) {
                this.A = !0;
                try {
                    for (this.l.j = Date.now(); 0 < this.m.length;) {
                        var a = this.m.shift();
                        this.l.l = Date.now();
                        a.j();
                        this.v && this.v.l(Date.now() - this.l.l, a.l);
                        if (50 < Date.now() - this.l.j + 10) break
                    }
                    0 < this.m.length && this.G.setTimeout(x(this.F, this),
                        0)
                } finally {
                    this.A = !1, this.v && this.v.j(Date.now() - this.l.j)
                }
            }
        }
    };

    function wk(a, b) {
        var c = new Cg,
            d = b.G ? new vk(a, ja(Ui, b.j ? "lr:apf:" + b.j : "lr:apf"), b.F) : new hk;
        d.j(new yg(function() {
            Pg(new Sg(d), a, b).then(function(e) {
                var f = e.l,
                    g = e.v,
                    h = e.m;
                a: {
                    var l = e.l,
                        k = e.j.A;
                    switch (k) {
                        case 2:
                            var m = l.v;
                            k = e.m.j;
                            k.v || (l = new Ff(Yf(k), 0), k.j || (k.j = new Jf(new Ff(Yf(k), 0))), k.v = new Mf(l, new Ff(k.j, 1), new Ff(Zf(k), 2)));
                            m = new gk(d, new bk(d, m, new Ff(k.v, 3)), e.v.j);
                            break a;
                        default:
                            m = l.A;
                            var n = l.j.pa;
                            l = e.j;
                            k = 1 == k ? Hh(n) : Pe(n);
                            m = new Lh(m, k, l)
                    }
                }
                m = new Vj(new Pj(d, m));
                k = new Wj(f.j, g.m);
                l = new oj(d,
                    f.j);
                e.j.B && kj(l, new rj(f.j, f.T));
                n = Zj(f.l);
                h = kj(kj(kj(kj(l, new Xj(n)), new Kj(g.j, new Ff(Zf(h.j), 2))), new Mj), new uj(f.v, new tj(g.j)));
                n = new mi;
                va(n.l, ni);
                n = li(li(n, oi), pi);
                va(n.v, ri);
                va(n.l, qi);
                h = jj(kj(kj(h, li(n, qi)), new vj(f.P * f.T)), new Nj);
                var q = e.j,
                    r = e.l.A;
                n = Math.max(r * q.v, q.minWidth);
                q = r * q.l;
                n = void 0 !== n ? n : 0;
                q = void 0 !== q ? q : Infinity;
                if (0 > n || 0 > q) throw Error("apf::wf");
                jj(jj(jj(h, 0 >= n && Infinity === q ? null : new xg(n, q)), new Jj(f.v.m, e.j.C, f.l)), new pj([g.j, g.l]));
                0 < e.j.m && jj(l, new qj(f.l, e.j.m));
                Eg(d,
                    c, new Uj(d, m, k, l), "itres")
            }, x(c.l, c))
        }, "i"));
        return c.j
    };
    class xk {
        constructor(a) {
            this.j = new Ke(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };
    class yk {
        constructor(a) {
            this.j = a
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof yk ? a : new yk({
                value: a
            })) : this
        }
    };
    var zk = class extends Gb {
        constructor(a) {
            super(a)
        }
    };
    var Bk = class extends Gb {
            constructor(a) {
                super(a, -1, Ak)
            }
        },
        Ak = [3, 4];
    var Ck = class extends Gb {
        constructor(a) {
            super(a)
        }
    };
    var Ek = class extends Gb {
            constructor(a) {
                super(a, -1, Dk)
            }
        },
        Dk = [6, 7, 9, 10, 11];
    var Gk = class extends Gb {
            constructor(a) {
                super(a, -1, Fk)
            }
        },
        Hk = Kb(Gk),
        Fk = [1, 2, 5, 7];
    hh(new eh(0, {}));
    hh(new eh(1, {}));
    class Ik {
        constructor() {
            var a = fd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.A = Math.random();
            this.m = this.Qa;
            this.B = a
        }
        Eb(a) {
            this.j = a
        }
        v(a) {
            this.l = a
        }
        Qa(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new ud(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (Kc(u.document, this.B), u.error_rep_loaded = !0);
            return !1
        }
        ya(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.m(a, d, .01, c, "jserror")) throw d;
            }
        }
        O(a, b) {
            return (...c) => this.ya(a, () => b.apply(void 0, c))
        }
    };
    const Jk = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Kk = (a, b, c) => {
            const d = c || window,
                e = "undefined" !== typeof queueMicrotask;
            return function() {
                e && queueMicrotask(() => {
                    d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                    d.google_rum_task_id_counter += 1
                });
                const f = Jd();
                let g, h = 3;
                try {
                    g = a.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!b) throw l;
                    b(754, l)
                } finally {
                    d.google_measure_js_timing && f && Jk({
                        label: (754).toString(),
                        value: f,
                        duration: (Jd() || 0) - f,
                        type: h,
                        ...(e && {
                            taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                        })
                    }, d)
                }
                return g
            }
        },
        Lk = (a, b) =>
        Kk(a, (c, d) => {
            (new Ik).Qa(c, d)
        }, b);

    function Mk(a, b) {
        return Lk(a, b).apply()
    }
    var Nk = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ok(a) {
        return null == a ? a : Nk[a]
    }

    function Pk(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = C(a[c], 1),
                e = C(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.vc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Qk(a, b) {
        var c = {};
        a && (c.Fb = C(a, 1), c.wb = C(a, 2), c.xb = !!lb(a, 3));
        b && (c.ib = Pk(rb(b, zk, 3)), c.eb = Pk(rb(b, zk, 4)));
        return c
    }
    var Rk = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    const Sk = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            c = ei(d.document, this.j);
            c.Da.setAttribute("data-ad-format", "auto");
            di(c, a, b);
            return c
        }
    };
    const Tk = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < rb(this.j, Bk, 9).length ? rb(this.j, Bk, 9)[0] : null,
                f = Qk(ob(this.j, Ck, 3), e);
            if (!e) return null;
            if (e = C(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new sc(d)).createElement(g);
                c.style.clear = f.xb ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ib && ci(c.style, f.ib);
                d = (new sc(d)).createElement("INS");
                f.eb && ci(d.style, f.eb);
                c.appendChild(d);
                f = {
                    Va: c,
                    Da: d
                };
                f.Da.setAttribute("data-ad-type", "text");
                f.Da.setAttribute("data-native-settings-key",
                    e);
                di(f, a, b);
                a = f
            } else a = null;
            return a
        }
    };

    function Uk(a, b) {
        a = a.l.query(b.document);
        return 0 < a.length ? a[0] : null
    }
    const Vk = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function Wk(a) {
        return a.v
    }

    function Xk(a) {
        return wh(nh) ? (a.A || (a.A = Uk(a.j, a.m)), a.A) : Uk(a.j, a.m)
    }

    function Yk(a) {
        var b = a.W;
        a = a.m.document.createElement("div");
        wh(nh) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Zk(a, b) {
        ne(a.B, 0) || a.B.set(0, []);
        a.B.get(0).push(b)
    }
    class $k {
        constructor(a, b, c, d, e, f, g, h = null, l = null) {
            this.j = a;
            this.L = b;
            this.W = c;
            this.Sb = d;
            e || new lh;
            this.m = f;
            this.F = g;
            this.C = h;
            (this.G = l) && ob(l, dh, 1) && ob(l, dh, 1);
            this.H = [];
            this.v = !1;
            this.B = new S;
            this.A = this.l = null
        }
        ca() {
            return this.F
        }
    };
    var al = a => {
        switch (a.Sb) {
            case 0:
            case 1:
                var b = a.G;
                null == b ? a = null : (a = ob(b, dh, 1), null == a ? a = null : (b = C(b, 2), a = null == b ? null : new eh(0, {
                    Vb: [a],
                    xc: b
                })));
                return null != a ? new yk({
                    value: a
                }) : new yk(null);
            case 2:
                return new yk(null);
            default:
                return new yk(null)
        }
    };

    function bl(a) {
        return al(a.ra).map(b => hh(b))
    }

    function cl(a) {
        a.l = a.l || bl(a);
        return a.l
    }
    const dl = class {
        constructor(a, b, c) {
            this.ra = a;
            this.j = b;
            this.Ma = c;
            this.l = null
        }
        fill(a, b) {
            var c = this.ra;
            if (a = c.L.l(a, b, this.j, c.m)) {
                b = a.Va;
                if (this.ra.v) throw Error("AMA:AP:AP");
                Ah(b, this.j, this.ra.j.j);
                c = this.ra;
                c.v = !0;
                wh(nh) && (c.l && yh(c.l), c.l = null);
                null != b && c.H.push(b)
            }
            return a
        }
    };

    function el(a) {
        switch (a) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return null
        }
    };

    function fl(a, b) {
        return Mk(() => {
            if (wh(nh)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Xk(f);
                    if (g) {
                        var h = f;
                        if (!h.l && !h.v) {
                            var l = h;
                            var k = h,
                                m = null;
                            try {
                                var n = Xk(k);
                                if (n) {
                                    m = Yk(k);
                                    Ah(m, n, k.j.j);
                                    var q = m
                                } else q = null
                            } catch (y) {
                                throw yh(m), y;
                            }
                            l.l = q
                        }(h = h.l) && d.push({
                            uc: f,
                            fb: g,
                            na: h
                        })
                    }
                }
                if (0 < d.length)
                    for (q = U(b), n = Be(b), e = 0; e < d.length; e++) {
                        const {
                            uc: y,
                            fb: E,
                            na: G
                        } = d[e];
                        f = gl(G, n, q);
                        c.push(new dl(y, E, f))
                    }
                q = c
            } else {
                q = [];
                n = [];
                try {
                    const y = [];
                    for (let E = 0; E < a.length; E++) {
                        var r = a[E],
                            t = Xk(r);
                        t && y.push({
                            lb: r,
                            fb: t
                        })
                    }
                    for (t =
                        0; t < y.length; t++) {
                        r = n;
                        g = r.push; {
                            l = y[t];
                            k = l.fb;
                            m = l.lb;
                            const E = Yk(m);
                            try {
                                Ah(E, k, m.j.j), h = E
                            } catch (G) {
                                throw yh(E), G;
                            }
                        }
                        g.call(r, h)
                    }
                    c = U(b);
                    d = Be(b);
                    for (g = 0; g < n.length; g++) e = gl(n[g], d, c), f = y[g], q.push(new dl(f.lb, f.fb, e))
                } finally {
                    for (c = 0; c < n.length; c++) yh(n[c])
                }
            }
            return q
        }, b)
    }

    function gl(a, b, c) {
        a = a.getBoundingClientRect();
        return new sj(a.left + b, a.top + c, a.right - a.left)
    };

    function hl(a, b) {
        const c = {
            top: b.j - 25,
            right: b.l + b.m,
            bottom: b.j + 25,
            left: b.l
        };
        return !sa(a, d => se(d, c))
    };

    function il(a) {
        return function(b) {
            return fl(b, a)
        }
    }

    function jl(a) {
        const b = Ij(Ej(a));
        return c => hl(b, c.Ma)
    }

    function kl(a) {
        if (!a.length) return Lb;
        const b = new xk(a);
        return c => b.contains(c.Sb)
    }

    function ll(a, b) {
        if (0 >= a) return Mb;
        const c = T(b).scrollHeight - a;
        return function(d) {
            return d.Ma.j <= c
        }
    }
    const ml = (a, b) => b.Ma.j >= a,
        nl = (a, b, c) => {
            c = c.Ma.m;
            return a <= c && c <= b
        };
    var ol = class {
        Ga(a) {
            return jl(a)
        }
        Ha() {
            return 9
        }
    };
    var pl = class {
        constructor(a) {
            this.j = a
        }
        Ga(a) {
            return ll(this.j, a)
        }
        Ha() {
            return 13
        }
    };
    var ql = class {
        Ga(a) {
            const b = T(a).clientHeight;
            return b ? ja(ml, b + U(a)) : Lb
        }
        Ha() {
            return 12
        }
    };
    var rl = class {
        constructor(a) {
            this.j = a
        }
        Ga() {
            return kl(this.j)
        }
        Ha() {
            return 1
        }
    };
    var sl = class {
        Ga() {
            return Nb(Wk)
        }
        Ha() {
            return 7
        }
    };
    var tl = class {
        constructor(a, b) {
            this.minWidth = a;
            this.j = b
        }
        Ga() {
            return ja(nl, this.minWidth, this.j)
        }
        Ha() {
            return 10
        }
    };
    var ul = class {
        constructor(a) {
            this.v = a.l.slice(0);
            this.l = a.j.slice(0);
            this.m = a.m;
            this.A = a.A;
            this.j = a.v
        }
    };

    function vl(a, b = 0, c = Infinity) {
        a.j.push(new tl(b, c));
        return a
    }

    function wl(a, b = 0) {
        a.j.push(new pl(b));
        return a
    }
    var xl = class {
        constructor() {
            this.m = 0;
            this.A = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new ul(this)
        }
    };

    function yl(a, b, c) {
        ne(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class zl {
        constructor() {
            this.j = new S
        }
    };

    function Al(a, b, c) {
        const d = b.ra;
        if (!ne(a.j, d)) {
            var e = a.j,
                f = e.set;
            cl(b);
            f.call(e, d, new Bl)
        }
        c(a.j.get(d))
    }

    function Cl(a, b) {
        Al(a, b, c => {
            c.j = !0
        })
    }

    function Dl(a, b) {
        Al(a, b, c => {
            c.l = !0
        })
    }
    var El = class {
        constructor() {
            this.j = new S
        }
    };
    class Bl {
        constructor() {
            this.l = this.j = !1
        }
    };
    class Fl {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function Gl(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function Hl(a) {
        const b = null.dd.filter(c => pe(c.yb).every(d => c.yb.get(d) === a.get(d)));
        return 0 === b.length ? (null.Bc.push(19), null) : b.reduce((c, d) => c.yb.Ab() > d.yb.Ab() ? c : d, b[0])
    }

    function Il(a) {
        a = cl(a);
        if (null == a.j) return null.Bc.push(18), null;
        a = a.j.value;
        if (ne(null.Mb, a)) return null.Mb.get(a);
        var b = fh(a);
        b = Hl(b);
        null.Mb.set(a, b);
        return b
    };

    function Jl(a) {
        return 0 == a.j.length ? a : a.sort((b, c) => (Il(b) ? .wc ? ? Number.MAX_VALUE) - (Il(c) ? .wc ? ? Number.MAX_VALUE))
    }

    function Kl(a, b) {
        var c = Math;
        const d = b.j,
            e = b.ra.j.j;
        c = b.Ma.j + 200 * c.min.call(c, 20, 0 == e || 3 == e ? Gl(d.parentElement) : Gl(d));
        a = a.j;
        0 > a.j && (a.j = T(a.l).scrollHeight || 0);
        b = a.j - b.Ma.j;
        return c + (1E3 < b ? 0 : 2 * (1E3 - b))
    }

    function Ll(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => Kl(a, c) - Kl(a, d))
    }

    function Ml(a, b) {
        return b.sort((c, d) => {
            const e = c.ra.C,
                f = d.ra.C;
            var g;
            null == e || null == f ? g = null == e && null == f ? Kl(a, c) - Kl(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class Nl {
        constructor(a) {
            this.j = new Fl(a)
        }
    };

    function Ol(a, b) {
        var c = a.m;
        for (var d of b.v) c = $g(c, d.Ga(a.j), Pl(d.Ha()));
        d = c = c.apply(il(a.j));
        for (const e of b.l) d = $g(d, e.Ga(a.j), Ql(e.Ha()));
        switch (b.m) {
            case 1:
                d = Ll(a.l, d);
                break;
            case 2:
                d = Ml(a.l, d);
                break;
            case 3:
                const e = R(El);
                d = Jl(d);
                c.forEach(f => {
                    Cl(e, f);
                    null ? .cd(f)
                });
                d.forEach(f => Dl(e, f))
        }
        b.A && (d = bh(d, oc(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        1 === b.j ? .length && yl(a.v, b.j[0], {
            Qc: c.j.length,
            bd: d.j.length
        });
        return d.j.slice(0)
    }
    class Rl {
        constructor(a, b) {
            this.m = new ah(a);
            this.l = new Nl(b);
            this.j = b;
            this.v = new zl
        }
    }
    const Pl = a => b => Zk(b, a),
        Ql = a => b => Zk(b.ra, a);
    var Sl = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            H(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = I(a, "message", e));
                return g
            }
        },
        Tl = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Tl(a[f], b, c, d, --e)
        };

    function Ul(a, b, c, d) {
        return Sl(a, "fullscreen", d.O(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class Vl {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };
    async function Wl(a) {
        return a.v.promise
    }
    async function Xl(a) {
        return a.l.promise
    }
    async function Yl(a) {
        return a.m.promise
    }

    function Zl(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        Fd(a.B, "fullscreen_tag", b, !1, .25)
    }
    class $l extends fe {
        constructor(a, b, c, d) {
            super();
            this.slotType = 1;
            this.pubWin = a;
            this.Kb = b;
            this.A = c;
            this.B = d;
            this.j = 1;
            this.v = new Vl;
            this.l = new Vl;
            this.m = new Vl
        }
        Ia() {
            const a = Ul(this.pubWin, this.Kb, b => {
                if ("adError" === b.eventType) this.m.resolve(), this.j = 0;
                else if ("adReady" === b.eventType && 1 === this.j) b.slotType !== this.slotType && (Zl(this, {
                    cur_st: this.j,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.j = 0), this.v.resolve(), this.j = 2;
                else if ("adClosed" === b.eventType && 2 === this.j) this.l.resolve(b.result), this.j = 3;
                else if ("adClosed" !==
                    b.eventType || 3 !== this.j) Zl(this, {
                    cur_st: this.j,
                    evt: b.eventType
                }), this.j = 0
            }, this.A);
            Q(this, a)
        }
    }

    function am(a, b, c, d) {
        a = new $l(a, b, c, d);
        a.Ia();
        return a
    };
    var cm = class extends Gb {
            constructor(a) {
                super(a, -1, bm)
            }
        },
        bm = [19];

    function dm(a, b) {
        a = te(a) ? .tagSpecificState[1];
        return null == a ? null : a.debugCard ? .getAdType() === b ? a.debugCard : null
    }

    function em(a, b) {
        (a = dm(a, 4)) && a.displayAdLoadedContent(b)
    };
    let fm = void 0;

    function gm(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.m = c;
                a.l = !!b.adTest;
                c = b.pubVars;
                ca(c) && (a.B = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.j = {};
                    for (d of b.fillMessage) a.j[d.key] = d.value
                }
                a.A = b.adWidth;
                a.v = b.adHeight;
                td(a.A) && td(a.v) || Wi("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.F(b)
    }
    class hm {
        constructor() {
            this.j = this.B = this.l = this.m = null;
            this.v = this.A = 0
        }
        F() {
            return !0
        }
    };
    class im extends hm {
        F(a) {
            a.hasFillMessage || (this.j = null);
            return !0
        }
    };

    function jm(a, b) {
        for (const e of b) {
            b = a;
            var c = e,
                d = km(b.document, c.x, c.y);
            if (d) {
                if (!(c = lm(d))) a: {
                    c = d;b = b.document;
                    for (c = c.offsetParent; c && c !== b.body; c = c.offsetParent)
                        if (d = lm(c)) {
                            c = d;
                            break a
                        }
                    c = null
                }
                b = c || null
            } else b = null;
            if (b) return b
        }
        return null
    }

    function km(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function mm(a, b, c) {
        const d = [];
        for (let f = 0; 3 > f; f++)
            for (let g = 0; 3 > g; g++) {
                var e = d;
                e.push.call(e, {
                    x: g / 2 * a,
                    y: b + f / 2 * (c - b)
                })
            }
        return d
    }

    function lm(a) {
        return "fixed" !== jd(a, "position") ? null : "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= pd(a).width && 1 >= pd(a).height ? null : a
    }
    var nm = a => {
        const b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
        return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
    };
    const om = 90 * 1.38;

    function pm(a, b) {
        const c = a && yi(a.location, "google_anchor_debug");
        if (2 === b || c) {
            var d = mm(a.innerWidth, 0, Math.min(Math.round(a.innerWidth / 320 * 50), om) + 15);
            return null != jm(a, d) ? (Wi("flgr::top", {
                c: "fixed",
                d: String(c),
                p: b,
                url: a ? .location ? .href ? ? ""
            }), "bottom") : "top"
        }
        d = a.innerWidth;
        const e = a.innerHeight,
            f = Math.min(Math.round(a.innerWidth / 320 * 50), om) + 15,
            g = mm(d, e - f, e);
        25 < f && g.push({
            x: d - 25,
            y: e - 25
        });
        return null != jm(a, g) ? (Wi("flgr::bottom", {
            c: "fixed",
            d: String(c),
            p: b,
            url: a ? .location ? .href ? ? ""
        }), "top") : "bottom"
    };

    function qm(a = []) {
        const b = Date.now();
        return qa(a, c => 36E5 > b - c)
    }

    function rm(a) {
        try {
            const b = a.getItem("__lsv__");
            if (!b) return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            if (!Array.isArray(c) || sa(c, d => !Number.isInteger(d))) return a.removeItem("__lsv__"), [];
            c = qm(c);
            c.length || a ? .removeItem("__lsv__");
            return c
        } catch (b) {
            return null
        }
    };
    const sm = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        tm = {
            IMG: " ",
            BR: "\n"
        };
    var um = (a, b, c, d) => {
            if (!(a.nodeName in sm))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in tm) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(tm[a.nodeName]);
            else
                for (a = a.firstChild; a;) um(a, b, c, d), a = a.nextSibling
        },
        vm = / \xAD /g,
        wm = /\xAD/g,
        xm = /\u200B/g,
        ym = / +/g,
        zm = /^\s*/;

    function Am(a, b) {
        return null !== Bc(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0)
    }

    function Bm(a, b) {
        return Bc(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position, !0)
    }

    function Cm(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function Dm(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function Em(a) {
        return `${a.position}-${Dm(a.P)}x${Dm(a.T)}-${Dm(a.scrollY+a.Ra)}Y`
    }

    function Fm(a) {
        return `f-${Em({position:a.position,Ra:a.Ra,scrollY:0,P:a.P,T:a.T})}`
    }

    function Gm(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function Hm(a, b, c) {
        const d = te(c.Y).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.T),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.P);
                for (var l = .3 * c.P; f <= g; f += 10) {
                    if (0 < e && h < l) {
                        var k = Fm({
                            position: "left",
                            Ra: f,
                            P: c.P,
                            T: c.T
                        });
                        b.set(k, Gm(b.get(k), h))
                    }
                    if (h < c.P && e > c.P - l) {
                        k = Fm({
                            position: "right",
                            Ra: f,
                            P: c.P,
                            T: c.T
                        });
                        const m = c.P - e;
                        b.set(k, Gm(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    };
    var Im = (a, b, c) => {
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [], Kc(c.document, fd `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    };
    const Jm = [1, 2];

    function Km(a, b, c) {
        const d = zc(document, "INS");
        d.className = "adsbygoogle";
        b.document.body.appendChild(d);
        const e = c.B || {};
        e.google_ad_client = c.m;
        e.google_ad_width = c.A;
        e.google_ad_height = c.v;
        e.google_reactive_ad_format = a.j;
        c.j && (e.google_reactive_fill_message = c.j);
        c.l && (e.google_adtest = "on");
        Im(d, e, b)
    }
    class Lm {
        constructor(a) {
            this.j = a
        }
        verifyAndProcessConfig(a, b) {
            const c = te(a);
            if (c.wasReactiveAdConfigReceived[this.j]) return !1;
            const d = new im;
            if (!gm(d, b)) return !1;
            Jm.forEach(e => {
                c.wasReactiveAdConfigReceived[e] = !0
            });
            Km(this, a, d);
            return !0
        }
    };
    class Mm {
        constructor(a, b) {
            this.m = a;
            this.j = !1;
            this.v = b;
            this.l = this.v.O(264, c => {
                this.j && (Nm || (c = Date.now()), this.m(c), Nm ? Om.call(u, this.l) : u.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, Nm ? Om.call(u, this.l) : this.l(0))
        }
    }
    var Om = u.requestAnimationFrame || u.webkitRequestAnimationFrame,
        Nm = !!Om && !/'iPhone'/.test(u.navigator.userAgent);

    function Pm(a) {
        return a * a * a
    }

    function Qm(a) {
        a = 1 - a;
        return 1 - a * a * a
    }

    function Rm(a) {
        a.L = !1;
        a.A.start()
    }
    class Sm {
        constructor(a, b, c, d) {
            this.j = a;
            this.B = b;
            this.W = c;
            this.progress = 0;
            this.l = null;
            this.L = !1;
            this.m = [];
            this.v = null;
            this.A = new Mm(x(this.H, this), d)
        }
        H(a) {
            if (this.L) this.A.j = !1;
            else {
                null === this.l && (this.l = a);
                this.progress = (a - this.l) / this.W;
                1 <= this.progress && (this.progress = 1);
                a = this.v ? this.v(this.progress) : this.progress;
                this.m = [];
                for (let b = 0; b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
                this.G();
                1 == this.progress && (this.A.j = !1, this.C())
            }
        }
        C() {}
        G() {}
        reset(a, b, c) {
            this.l = null;
            this.j =
                a;
            this.B = b;
            this.W = c;
            this.progress = 0
        }
    };
    class Tm extends Sm {
        constructor(a, b, c, d, e, f, g, h) {
            super([b], [c], d, f);
            this.I = a;
            this.J = e;
            this.F = g ? g : null;
            this.v = h || null
        }
        G() {
            const a = {};
            a[this.J] = this.m[0] + "px";
            P(this.I, a)
        }
        C() {
            this.F && this.F()
        }
    };

    function Um(a) {
        a.j && I(a.j, a.l, a.m, Rb)
    }
    class Vm extends fe {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.m = c;
            H(this.j, this.l, this.m, Rb);
            Q(this, () => void Um(this))
        }
    }
    class Wm {
        constructor() {
            this.reset()
        }
        add(a) {
            const b = Date.now();
            this.j.push({
                time: b,
                coords: a
            });
            for (a = this.l; a < this.j.length; ++a)
                if (100 <= b - this.j[a].time) delete this.j[a];
                else break;
            this.l = a;
            a >= this.j.length && this.reset()
        }
        reset() {
            this.j = [];
            this.l = 0
        }
    }

    function Xm(a, b) {
        a.B && Ym(a);
        a.B = !0;
        a.m = a.J();
        a.l = Zm(b);
        a.j = a.l;
        a.A = new Wm;
        a.A.add(a.l);
        a.G = new Vm(a.v, "mousemove", x(a.Z, a));
        ge(a, a.G);
        a.I = new Vm(a.v, "touchmove", x(a.Z, a));
        ge(a, a.I);
        a.F = new Vm(a.v, "mouseup", x(a.aa, a));
        ge(a, a.F);
        a.H = new Vm(a.v, "touchend", x(a.aa, a));
        ge(a, a.H)
    }

    function Zm(a) {
        a = a.touches && a.touches[0] || a;
        return new J(a.clientX, a.clientY)
    }

    function Ym(a) {
        a.B = !1;
        a.C = !1;
        a.m = null;
        a.l = null;
        a.j = null;
        a.A = null;
        a.G && Um(a.G);
        a.I && Um(a.I);
        a.F && Um(a.F);
        a.H && Um(a.H)
    }
    class $m extends fe {
        constructor(a, b, c) {
            super();
            this.v = a;
            this.target = b;
            this.K = c || b;
            this.C = this.B = this.M = !1;
            this.A = this.j = this.l = this.m = this.H = this.F = this.I = this.G = null;
            this.oa = new Vm(this.K, "mousedown", d => {
                0 == d.button && Xm(this, d)
            });
            ge(this, this.oa);
            this.ha = new Vm(this.K, "touchstart", d => Xm(this, d));
            ge(this, this.ha);
            this.ga = new Vm(this.K, "click", d => {
                this.M ? this.M = !1 : d.stopPropagation()
            });
            ge(this, this.ga)
        }
        R() {
            if (this.m && this.l && this.j) {
                var a = this.m,
                    b = kc(this.j, this.l);
                var c = new J(a.x + b.x, a.y + b.y);
                a = this.target;
                c instanceof J ? (b = c.x, c = c.y) : (b = c, c = void 0);
                a.style.left = od(b, !1);
                a.style.top = od(c, !1)
            }
        }
        U() {}
        J() {
            var a = this.target,
                b;
            a: {
                if (Vb && (b = a.parentElement)) break a;b = a.parentNode;b = ca(b) && 1 == b.nodeType ? b : null
            }
            var c = b;
            b = md(a);
            c = md(c);
            b = new J(b.x - c.x, b.y - c.y);
            a = sd(a, "margin");
            return kc(b, new J(a.left, a.top))
        }
        Z(a) {
            if (this.B)
                if (a.preventDefault(), this.j = Zm(a), this.A.add(this.j), this.C) this.R();
                else {
                    var b = this.l,
                        c = this.j;
                    a = b.x - c.x;
                    b = b.y - c.y;
                    10 <= Math.sqrt(a * a + b * b) && (this.R(), this.C = !0)
                }
        }
        aa(a) {
            this.C ? (a.preventDefault(),
                this.j = Zm(a), this.U()) : this.M = !0;
            Ym(this)
        }
    };

    function an(a) {
        const b = bn(a);
        pa(a.j.maxZIndexListeners, c => c(b))
    }

    function bn(a) {
        a = Oc(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function cn(a, b) {
        a.j.maxZIndexListeners.push(b);
        b(bn(a))
    }
    class dn {
        constructor(a) {
            this.j = te(a).floatingAdsStacking
        }
    }
    class en {
        constructor(a) {
            this.l = a;
            this.j = null
        }
    };

    function fn(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "18");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "12");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "18");
        a.appendChild(b)
    }

    function gn(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "12");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "18");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "18");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "12");
        a.appendChild(b)
    }

    function hn(a, b) {
        if (!a.A && a.m) {
            var c = parseInt(a.m.style[a.j], 10),
                d = -a.B.height - (b ? 30 : 0),
                e = (c - d) / .1;
            "bottom" == a.j && nm(a.Y) && a.G.ya(405, () => jn(a, "21px", e, "ease-in"));
            b || kn(a, !0);
            c === d ? a.v = !b : (a.A = !0, c = new Tm(a.m, c, d, e, a.j, a.G, () => {
                a.A = !1;
                a.v = !b;
                b || kn(a, !0);
                b && a.aa();
                a.m.setAttribute("data-anchor-status", "dismissed")
            }, Pm), a.ea(), Rm(c))
        }
    }

    function ln(a, b) {
        De(b);
        O(b, {
            "background-color": "#FAFAFA",
            display: "block",
            position: "relative",
            "z-index": 1,
            height: "5px",
            "box-shadow": "top" == a.j ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
        });
        "top" == a.j && O(a.l ? ? b, {
            position: "absolute",
            top: a.B.height + "px",
            width: "100%"
        });
        const c = Lc("SPAN", a.Y.document);
        c.appendChild(mn(a));
        const d = e => {
            e.target === c && (e.preventDefault && e.preventDefault(), e.stopImmediatePropagation &&
                e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation())
        };
        H(c, "click", d);
        Q(a, () => I(c, "click", d));
        nn(a, c);
        b.className = "ee";
        b.appendChild(c)
    }

    function mn(a) {
        let b;
        let c, d;
        switch (a.j) {
            case "top":
                var e = "dropShadowBottom";
                b = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                var f = "0";
                c = "up";
                d = fn;
                break;
            case "bottom":
                e = "dropShadowTop", b = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", f = "25", c = "down", d = gn
        }
        const g = a.Y.document,
            h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
        h.style.setProperty("margin", "0 0 0 0px", "important");
        h.style.setProperty("position", "absolute", "important");
        h.style.setProperty(a.j, "0", "important");
        h.style.setProperty("left", "0%", "important");
        h.style.setProperty("display", "block", "important");
        h.style.setProperty("width", "80px", "important");
        h.style.setProperty("height", "30px", "important");
        h.style.setProperty("transform", "none", "important");
        h.style.setProperty("pointer-events", "initial", "important");
        a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
        const l = g.createElementNS("http://www.w3.org/2000/svg", "filter");
        l.setAttribute("id", e);
        l.setAttribute("filterUnits",
            "userSpaceOnUse");
        l.setAttribute("color-interpolation-filters", "sRGB");
        var k = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        k.setAttribute("in", "SourceAlpha");
        k.setAttribute("result", "TransferredAlpha");
        var m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        k.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        k.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        k.appendChild(m);
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        k.setAttribute("in", "TransferredAlpha");
        k.setAttribute("stdDeviation", "2");
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        k.setAttribute("dx", "0");
        k.setAttribute("dy", "0");
        k.setAttribute("result", "offsetblur");
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        k.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        m = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        m.setAttribute("in", "SourceGraphic");
        k.appendChild(m);
        l.appendChild(k);
        a.appendChild(l);
        h.appendChild(a);
        a = g.createElementNS("http://www.w3.org/2000/svg", "path");
        a.setAttribute("d", b);
        a.setAttribute("stroke", "#FAFAFA");
        a.setAttribute("stroke-width", "1");
        a.setAttribute("fill", "#FAFAFA");
        a.style.setProperty("filter",
            `url(#${e})`);
        h.appendChild(a);
        e = g.createElementNS("http://www.w3.org/2000/svg", "rect");
        e.setAttribute("x", "0");
        e.setAttribute("y", f);
        e.setAttribute("width", "80");
        e.setAttribute("height", "5");
        e.style.setProperty("fill", "#FAFAFA");
        h.appendChild(e);
        f = g.createElementNS("http://www.w3.org/2000/svg", "g");
        f.setAttribute("class", c);
        f.setAttribute("stroke", "#616161");
        f.setAttribute("stroke-width", "2px");
        f.setAttribute("stroke-linecap", "square");
        d(f);
        h.appendChild(f);
        return h
    }

    function nn(a, b) {
        const c = b.getElementsByTagName("svg")[0];
        O(b, {
            display: "block",
            width: "80px",
            height: "45px",
            [a.j]: "0",
            left: "0%",
            marginLeft: "0px",
            "pointer-events": "none"
        });
        Vc(c)
    }

    function on(a) {
        if (!a.A) {
            var b = parseInt(a.m.style[a.j], 10);
            if (b) {
                a.A = !0;
                const c = -b / .1;
                "bottom" == a.j && nm(a.Y) && a.G.ya(404, () => jn(a, "0px", c, "ease-out"));
                kn(a, !1);
                b = new Tm(a.m, b, 0, c, a.j, a.G, () => {
                    a.A = !1;
                    a.v = !1;
                    pn(a);
                    a.m.setAttribute("data-anchor-status", "displayed");
                    a.m.setAttribute("data-anchor-shown", !0);
                    kn(a, !1)
                }, Qm);
                a.X();
                Rm(b)
            } else a.v = !1
        }
    }

    function qn(a) {
        return a.l ? ? a.C
    }

    function kn(a, b) {
        const c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
        for (var d; d = c.firstChild;) c.removeChild(d);
        switch (a.j) {
            case "top":
                (b ? gn : fn)(c);
                break;
            case "bottom":
                (b ? fn : gn)(c)
        }
    }

    function rn(a, b, c, d) {
        Fd(a.Z, "flgr", {
            i: b,
            dc: a.v ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.I ? "1" : "0",
            expId: a.ga,
            sc: a.R ? "1" : "0",
            off: d,
            vw: T(a.Y).clientWidth,
            req: a.K.src,
            tp: a.j,
            h: a.B.height,
            w: a.B.width,
            qemId: a.fa
        }, !0, 1)
    }

    function jn(a, b, c, d) {
        P(a.K, {
            transition: c / 1E3 + "s",
            "transition-timing-function": d,
            "margin-top": b
        })
    }

    function pn(a) {
        a.U();
        a.U = () => {}
    }

    function sn(a, b) {
        if ("bottom" !== a.j && "top" !== a.j) throw Error("unsupported reactive type");
        const c = f => {
                f.preventDefault();
                a.A || (a.J = !0, a.v ? on(a) : hn(a, a.I), rn(a, "c", !a.v, 0))
            },
            d = a.C;
        H(d, "click", c);
        Q(a, () => I(d, "click", c));
        a.l && (H(a.l, "click", c), Q(a, () => a.l && I(a.l, "click", c)));
        P(b, {
            opacity: 1
        });
        var e = a.Y.document;
        e && (a.m = b, a.ha && (a.M = new("top" == a.j ? tn : un)(a, e, a.B.height, b, a.C), ge(a, a.M)), e = {
            position: "fixed",
            left: "0px"
        }, e[a.j] = -a.B.height - 30 + "px", P(b, e), O(b, {
            overflow: "visible",
            background: "#FAFAFA"
        }), cn(a.oa,
            f => {
                const g = null == a.V ? 2147483647 : a.V;
                P(b, {
                    zIndex: null == f ? g : Math.min(f, g)
                })
            }), on(a))
    }
    class vn extends fe {
        constructor(a, b, c, d, e, f, g, h, l, k, m) {
            super();
            this.F = a;
            this.Y = b;
            this.K = c;
            this.B = d;
            this.aa = f || (() => {});
            this.U = g || (() => {});
            this.G = h;
            this.Z = l;
            this.ea = k;
            this.X = m;
            Q(this, () => hn(this, !0));
            this.C = Lc("INS", b.document);
            Q(this, () => this.C = null);
            this.l = null;
            HTMLElement.prototype.attachShadow && !this.G.ya(1013, () => {
                this.l = Lc("DIV", b.document);
                this.l.className = "grippy-host";
                this.l.attachShadow({
                    mode: "closed"
                }).appendChild(this.C);
                Q(this, () => this.l = null);
                return !0
            }) && (this.l = null);
            this.v = this.A = !1;
            this.H = 0;
            this.j = e;
            this.J = !1;
            this.m = this.M = null;
            this.T = b.innerHeight;
            this.R = "true" === this.F.scroll_detached;
            this.I = "true" === this.F.dismissable;
            this.ha = "true" === this.F.draggable || "top" != this.j;
            this.ga = this.F.expId || "";
            this.fa = this.F.qemId || "";
            a = parseInt(this.F.z_index_override, 10);
            this.V = isNaN(a) ? null : a;
            this.oa = new dn(b);
            !this.I && u.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(() => {
                const n = this.Y.innerHeight;
                if (2 > Math.abs(n - 460) || 2 > Math.abs(n - 529)) n < this.T && 2 > Math.abs(U(this.Y) - this.H - 68) &&
                    (this.J = !0, this.v && on(this)), this.T = n
            }, 300);
            ln(this, this.C)
        }
    }
    class wn extends $m {
        constructor(a, b, c, d, e) {
            super(b, d, e);
            this.fa = a;
            this.X = c
        }
        U() {
            var a = this.fa;
            if (!a.A) {
                const b = parseInt(a.m.style[a.j], 10);
                b >= -(a.B.height / 2) ? (on(a), rn(a, "d", !1, b)) : (hn(a, a.I), rn(a, "d", !0, b))
            }
        }
        R() {
            if (null !== this.m && null !== this.l && null !== this.j) {
                var a = this.ea(this.m.y, kc(this.j, this.l).y);
                0 < a && (a = 0);
                a < -this.X && (a = -this.X);
                var b = {};
                b[this.V()] = a + "px";
                P(this.target, b)
            }
        }
    }
    class tn extends wn {
        J() {
            return new J(0, parseInt(this.target.style.top, 10))
        }
        ea(a, b) {
            return b - a
        }
        V() {
            return "top"
        }
    }
    class un extends wn {
        J() {
            return new J(0, parseInt(this.target.style.bottom, 10))
        }
        ea(a, b) {
            return a - b
        }
        V() {
            return "bottom"
        }
    };

    function xn(a, b, c, d) {
        if (!a.K) {
            a.K = [];
            for (var e = a.m.parentElement; e;) {
                a.K.push(e);
                if (a.Z(e)) break;
                e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
            }
        }
        e = a.K.slice();
        !c && a.Z(e[e.length - 1]) && e.pop();
        let f;
        if (d)
            for (c = e.length - 1; 0 <= c; --c)(f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)(f = e[c]) && b.call(a, f, c, e)
    }
    var yn = class extends fe {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.l = b;
            this.j = c;
            this.K = null;
            Q(this, () => this.K = null)
        }
        Z(a) {
            return this.j === a
        }
    };

    function zn(a, b, c) {
        null !== b && null !== Rc(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Rc(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    };

    function An(a) {
        Bn(a);
        const b = a.l.innerWidth;
        a = pd(a.m).height || +a.m.height || 0;
        return new lc(b, a)
    }

    function Cn(a) {
        if (a.U) {
            var b = a.j;
            b && (b.style.display = "none");
            Dn(a, a.V, !0, !0);
            a.U = !1
        }
    }

    function En(a) {
        a.H = "touchcancel";
        u.setTimeout(a.B.O(274, () => {
            "touchcancel" === a.H && (a.I = 0, a.M = !1, Fn(a))
        }), 1E3)
    }

    function Gn(a, b) {
        if (b && b.touches) {
            a.H = "touchend";
            var c = b.touches.length;
            2 > c ? u.setTimeout(a.B.O(256, () => {
                "touchend" === a.H && (a.I = c, a.M = !1, Fn(a))
            }), 1E3) : (a.I = c, Fn(a));
            !a.G || .05 > Math.abs(ye(a.l) - 1) || hn(a.v, !0)
        }
    }

    function Hn(a) {
        const b = a.l;
        I(b, "orientationchange", a.Fa);
        I(b, "resize", a.Wa);
        I(b, "scroll", a.gb);
        I(b, "touchcancel", a.hb);
        I(b, "touchend", a.kb);
        I(b, "touchmove", a.mb);
        I(b, "touchstart", a.nb)
    }

    function In(a) {
        const b = a.l;
        H(b, "orientationchange", a.Fa);
        H(b, "resize", a.Wa);
        H(b, "scroll", a.gb);
        H(b, "touchcancel", a.hb);
        H(b, "touchend", a.kb);
        H(b, "touchmove", a.mb);
        H(b, "touchstart", a.nb);
        Q(a, () => Hn(a))
    }

    function Jn(a, b) {
        const c = parseInt(b.ht, 10),
            d = 0 < c ? c : null;
        b = parseInt(b.wd, 10);
        const e = 0 < b ? b : null;
        null != d && (a.C.height = d);
        null != e && (a.C.width = e);
        xn(a, f => {
            zn(f, e, d)
        }, !1, !0);
        zn(a.m, e, d)
    }

    function Kn(a, b) {
        b = new vn(b, a.l, a.m, a.C, a.A, () => {
            if (!a.ha) {
                a.ha = !0;
                Hn(a);
                var c = a.j;
                c && c.parentNode && c.parentNode.removeChild(c);
                Dn(a, a.V, !0, !0);
                c && (c.style.display = "none")
            }
        }, () => void Ln(a), a.B, a.Gb, () => {
            a.R || (a.R = !0, Mn(a, null))
        }, () => {
            a.R && (a.R = !1, Mn(a, null))
        });
        ge(a, b);
        return b
    }

    function Ln(a) {
        a.tb && !a.Za && (a.Za = !0, a.B.ya(257, () => {
            const b = {
                    msg_type: "manual-send-view"
                },
                c = a.m.contentWindow;
            c && c.postMessage(a.l.JSON.stringify(b), "*")
        }))
    }

    function Nn(a) {
        if (!a.Pa()) return !1;
        if (!a.G && a.aa) switch (a.A) {
            case "bottom":
                return a.J >= a.Ac || a.wa;
            case "top":
                return a.J > On(a)
        }
        return .05 > Math.abs(ye(a.l) - 1)
    }

    function Pn(a) {
        const b = a.j;
        if (b && a.m.parentElement) {
            nd(b, a.X);
            var c = a.l.innerWidth;
            T(a.l).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
            Qn(a)
        }
    }

    function Rn(a) {
        const b = a.j;
        if (b) {
            var c = a.v,
                d = c.Y,
                e = U(d);
            10 > Math.abs(e - c.H) || (d = e + 10 + T(d).clientHeight > ze(d), d = 10 > e || d, c.R || c.J || c.A || (c.v || d ? c.v && d && on(c) : hn(c, !1)), c.H = e);
            a.U || (c = Dn, Bn(a), e = sd(a.l.document.body, "padding"), "bottom" == a.A && (e.bottom += a.X.height + 25), c(a, e), b.style.display = "block", a.U = !0)
        }
    }

    function Sn(a) {
        a.ab = !0;
        if (!a.G && Nn(a) && (a.fa || !a.oa)) {
            var b = a.j;
            b && (Pn(a), xn(a, c => {
                De(c)
            }, !0), sn(a.v, b), Rn(a), a.G = !0, (a = a.m.contentWindow) && Tl(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    }

    function Dn(a, b, c = !0, d = !1) {
        const e = a.F.top - b.top,
            f = U(a.l);
        f < e && !d || (d = a.l.document.body, d.style.paddingTop = b.top + "px", d.style.paddingRight = b.right + "px", d.style.paddingBottom = b.bottom + "px", d.style.paddingLeft = b.left + "px", a.F = b, c && a.l.scrollTo(0, f - e))
    }

    function Qn(a) {
        xn(a, b => {
            nd(b, a.C);
            b.style.width = "100%"
        }, !1, !0);
        a.m.style.display = "block";
        a.m.style.margin = "0 auto";
        if (a.sb) {
            const b = a.j;
            Sc(b, c => {
                Vc(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
                if ("svg" === c.nodeName) return !1
            })
        }
    }

    function Bn(a) {
        if ("bottom" !== a.A && "top" !== a.A) throw Error("Unexpected position: " + a.A);
    }

    function Fn(a) {
        !a.ea || a.ha || 2 <= a.I && a.M || !Nn(a) ? Cn(a) : (Sn(a), Rn(a))
    }

    function Mn(a, b) {
        const c = a.U ? On(a, a.R) : a.V.top;
        if ("top" === a.A && a.l.document.body && a.ea && a.v && a.G && a.F.top !== c && 0 !== b) {
            var d = ed(a.F);
            null === b ? (d.top = c, Dn(a, d)) : (0 < b && a.F.top > c && (d.top = Math.max(c, a.F.top - b), Dn(a, d, !1)), 0 > b && a.F.top < c && (d.top = Math.min(c, a.F.top - b), Dn(a, d, !1)))
        }
    }

    function On(a, b = !1) {
        return b ? a.V.top + 30 : a.V.top + 30 + a.X.height - 5
    }
    class Tn extends yn {
        constructor(a, b, c, d) {
            var e = Si,
                f = Ri;
            super(a, b, d);
            this.B = e;
            this.Gb = f;
            this.J = this.va = this.bb = 0;
            this.ha = this.rb = !1;
            this.v = null;
            this.M = this.ea = !1;
            this.H = null;
            this.V = sd(b.document.body, "padding");
            this.F = sd(b.document.body, "padding");
            this.I = 0;
            this.ab = this.G = !1;
            this.U = !0;
            this.A = c;
            this.C = An(this);
            this.X = null;
            this.aa = this.oa = this.fa = this.Za = this.sb = this.tb = !1;
            this.Ac = uc(b || window).height / 2;
            this.Xa = uc(b || window).height;
            this.Ya = wc(b);
            this.R = this.wa = !1;
            Cn(this);
            this.Fa = this.B.O(266, () => {
                Fn(this)
            });
            this.Wa = this.B.O(267, () => {
                Fn(this)
            });
            this.gb = this.B.O(268, () => {
                if (this.G && this.j && this.v) {
                    var g = this.v;
                    g.H = U(g.Y)
                }
                g = U(this.l);
                const h = g - this.bb;
                Mn(this, h);
                this.aa && (0 < h && (this.J += h), this.wa = this.Ya - g <= this.Xa, this.bb = g);
                Fn(this)
            });
            this.hb = this.B.O(269, () => {
                En(this)
            });
            this.kb = this.B.O(270, g => {
                Gn(this, g)
            });
            this.mb = this.B.O(271, g => {
                if (g && g.touches) {
                    this.H = "touchmove";
                    this.I = g.touches.length;
                    this.M = !0;
                    Fn(this);
                    if (!this.rb && g.touches && 0 != g.touches.length && g.touches[0]) {
                        g = g.touches[0].pageY;
                        var h = g - this.va;
                        this.va = g;
                        g = h
                    } else g = 0;
                    0 < g && (this.J += g);
                    Mn(this, g)
                }
            });
            this.nb = this.B.O(272, g => {
                g && g.touches && g.touches[0] && (this.H = "touchstart", this.I = g.touches.length, this.M = !1, Fn(this), this.va = g.touches[0].pageY, this.rb = (g = g.target) && "top" == this.A && this.ea && this.v && qn(this.v) && 1 === g.nodeType ? Ac(qn(this.v), g) : !1)
            });
            this.xa = this.B.O(273, () => {
                this.ga()
            });
            H(a, "load", this.xa);
            Q(this, () => I(a, "load", this.xa))
        }
        ga() {
            if (this.fa) return !1;
            this.fa = !0;
            I(this.m, "load", this.xa);
            if (this.oa && !this.ab) return !1;
            Fn(this);
            return !0
        }
        Pa() {
            return xe(this.l)
        }
    }
    var Un = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    class Vn extends Tn {
        Z(a) {
            return Nf(a)
        }
        ga() {
            if (!super.ga()) return !1;
            const a = dm(this.l, "top" === this.A ? 3 : 2);
            a && a.displayAdLoadedContent(!this.aa);
            return !0
        }
        Pa() {
            if (this.C.width > we) {
                var a = this.l;
                var b = this.C.width;
                a = a.innerWidth >= b && a.innerHeight >= (b > we ? 650 : 0)
            } else a = super.Pa();
            return a
        }
    };

    function Wn(a, b, c) {
        try {
            if (!ad(c.origin) || a.F && !Ae(c, a.F.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ya[d]) && a.J.ya(168, () => {
            e.call(a, b, c)
        })
    }
    class Xn extends fe {
        constructor(a, b, c, d, e = {}) {
            super();
            this.j = a;
            this.F = b;
            this.J = c;
            this.Pa = d;
            this.Ya = {};
            this.sb = this.J.O(168, (f, g) => void Wn(this, f, g));
            this.Gb = this.J.O(169, (f, g) => {
                Fd(this.Pa, "ras::xsf", {
                    c: g.data.substring(0, 500),
                    u: this.j.location.href.substring(0, 500)
                }, !0, .1);
                return !0
            });
            this.oa = [];
            this.ea(this.Ya, e);
            this.oa.push(Sl(this.j, "sth", this.sb, this.Gb))
        }
        Ca() {
            for (const a of this.oa) a();
            this.oa.length = 0;
            super.Ca()
        }
    };
    class Yn extends Xn {
        constructor(a, b = null) {
            super(a, b, Si, Ri);
            this.j = a
        }
    };
    class Zn extends Yn {
        constructor(a, b, c) {
            super(a, b.m);
            a = this.l = b;
            if ((b = a.j) && !a.v) {
                for (var d in Un) !Un.hasOwnProperty(d) || d in c || (c[d] = Un[d]);
                a.tb = "true" === c.use_manual_view || "top" === a.A || !!te(a.l).wasReactiveAdConfigReceived[2];
                a.sb = "true" === c.use_important;
                if (d = c.af_l) a.oa = "true" === d;
                a.aa = "true" === c.wait_for_scroll || "top" == a.A;
                Jn(a, c);
                a.v = Kn(a, c);
                c = a.C.height + 5;
                "bottom" == a.A && nm(a.l) && (c += 20);
                a.X = new lc(a.C.width, c);
                a.wa = a.Xa >= a.Ya;
                c = a.j;
                d = a.v && qn(a.v);
                c && d && ("top" == a.A ? c.appendChild(d) : c.insertBefore(d,
                    c.firstChild));
                In(a);
                a.ea = !0;
                b.setAttribute("data-anchor-status", "ready-to-display")
            }
            Sn(this.l)
        }
        ea(a) {
            a.dismiss = Pb(() => {
                var b = this.l;
                b.v && hn(b.v, !0)
            })
        }
    };
    var $n = class extends Gb {
            constructor(a) {
                super(a)
            }
        },
        ao = Kb($n);

    function bo(a) {
        co(a, !1);
        const b = a.j;
        xn(a, c => {
            O(c, eo);
            De(c)
        }, !0);
        a.m.setAttribute("width", "");
        a.m.setAttribute("height", "");
        P(a.m, eo);
        P(a.m, fo);
        P(b, go);
        De(b);
        De(a.m)
    }

    function co(a, b) {
        const c = a.j;
        b ? ho(a, c) : (O(c, {
            display: "none"
        }), a.v && O(a.v, {
            display: "none"
        }), a.B && (u.clearInterval(a.B), a.B = 0), io(a))
    }

    function jo(a, b) {
        const c = a.j;
        if (!b) return !1;
        var d = gi(b);
        if (!d || !d.v()) return !1;
        d = d.D;
        if (!d) return !1;
        a.v = a.l.document.createElement("ins");
        O(a.v, {
            display: "inline-block",
            width: "100%"
        });
        Ah(a.v, d, Dh[b.l]);
        a.C();
        O(c, {
            position: "absolute"
        });
        co(a, !0);
        return !0
    }

    function ho(a, b) {
        O(b, {
            display: "block"
        });
        a.B = u.setInterval(() => a.C, 250)
    }

    function io(a) {
        null != a.F && (a.A.body.style.overflow = a.F);
        null != a.G && (a.A.documentElement.style.overflow = a.G)
    }

    function ko(a) {
        const b = a.j,
            c = a.l.innerHeight;
        O(b, {
            height: c + "px"
        });
        a.l.scrollTo(0, ld(a.v).y);
        b && (O(b, {
            top: "0"
        }), a.v && O(a.v, {
            height: c + "px"
        }), O(b, {
            position: "fixed"
        }), a.A.body && "hidden" != a.A.body.style.overflow && (a.F = a.A.body.style.overflow, a.G = a.A.documentElement.style.overflow, a.A.body.style.overflow = "hidden", a.A.documentElement.style.overflow = "hidden"))
    }
    class lo extends yn {
        constructor(a, b, c) {
            super(a, b, c);
            this.F = null;
            this.B = 0;
            this.G = null;
            this.H = 0;
            this.A = b.document;
            this.v = null;
            this.I = 0;
            bo(this)
        }
        C() {
            if ("hidden" != this.A.body.style.overflow && "fixed" != this.A.body.style.position) {
                var a = this.j;
                const b = this.l.innerHeight;
                if (this.I < b) {
                    const c = {
                        height: b + "px"
                    };
                    O(a, c);
                    this.v && O(this.v, c);
                    this.I = b
                }(a = this.j) && this.v && (this.H = ld(this.v).y, a.style.top != this.H + "px" && O(a, {
                    top: this.H + "px"
                }))
            }
        }
    }
    var go = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            display: "none !important",
            zIndex: "2147483646"
        },
        eo = {
            width: "100%",
            height: "100%",
            zIndex: "2147483646"
        },
        fo = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var mo = (a, b) => {
            var c = a.document.body;
            if (!c || !b) return Wi("sci_evt", {
                amacerr: 1
            }, .1), null;
            b = rb(b, Ek, 1);
            var d = [];
            for (var e = 0; e < b.length; e++) {
                var f = b[e];
                var g = e,
                    h = a,
                    l = ob(f, dh, 1);
                if (l) {
                    var k;
                    if (k = l) {
                        var m = C(k, 7);
                        if (C(k, 1) || k.getId() || 0 < mb(k).length) {
                            m = mb(k);
                            var n = C(k, 3),
                                q = C(k, 1),
                                r = "";
                            q && (r += q);
                            n && (r += "#" + Vg(n));
                            if (m)
                                for (n = 0; n < m.length; n++) r += "." + Vg(m[n]);
                            k = (m = r) ? new Xg(m, C(k, 2), C(k, 5), Ok(C(k, 6))) : null
                        } else k = m ? new Xg(m, C(k, 2), C(k, 5), Ok(C(k, 6))) : null
                    } else k = null;
                    (m = k) ? (k = Rk[C(f, 2)], r = void 0 === k ? null : k,
                        null === r ? f = null : (k = (k = ob(f, Ck, 3)) ? lb(k, 3) : null, m = new Vk(m, r), r = kb(f, 10, 0, !1, Xa(f.N)).slice(0), null != C(l, 5) && r.push(1), l = C(f, 12), r = void 0 !== nb(f, lh, 4) ? ob(f, lh, 4) : null, f = 1 == C(f, 8) ? new $k(m, new Sk(Qk(ob(f, Ck, 3), null)), k, 0, r, h, g, l, f) : 2 == C(f, 8) ? new $k(m, new Tk(f), k, 1, r, h, g, l, f) : null)) : f = null
                } else f = null;
                null !== f && d.push(f)
            }
            b = new Rl(d, a);
            d = a.innerHeight;
            a = a.innerWidth;
            e = new xl;
            f = [0];
            e.v = f;
            e.l.push(new rl(f));
            e.l.push(new sl);
            e.j.push(new ol);
            a = wl(vl(e, .85 * a, a), d);
            a.j.push(new ql);
            a.m = 1;
            a = a.build();
            a = Ol(b,
                a)[0] || null;
            if (!a) return null;
            c = {
                node: (new Ef(c, !1)).j(a.j) || void 0,
                vb: void 0,
                identifier: {}
            };
            if (!c.node) throw Error("amac:n");
            b = el(a.ra.j.j);
            if (null === b) throw Error("amac:p");
            return (c = (new ej(c, b)).build()) ? {
                lb: c,
                Cc: a.Ma.j
            } : null
        },
        no = a => {
            var b = new re;
            b.j = !0;
            b.A = .85;
            b.l = 1;
            b.v = 25;
            b.m = a.innerHeight;
            b.B = !0;
            b = b.build();
            return wk(a, b)
        };

    function oo(a) {
        const b = ze(a, !0),
            c = T(a).scrollWidth,
            d = T(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = U(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            t = 0,
            y = Infinity,
            E = Infinity,
            G = null;
        var M = Aj({
            Nb: !1
        }, a);
        for (const L of M) {
            M = L.getBoundingClientRect();
            const Wa = b - (M.bottom + f);
            var v = void 0,
                A = void 0;
            if (L.className && -1 != L.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                v = L.getAttribute("google_element_uid");
                A = a.google_sv_map;
                if (!v ||
                    !A || !A[v]) continue;
                a: {
                    var D = A[v];v = Number(D.google_ad_width);A = Number(D.google_ad_height);
                    if (!(0 < v && 0 < A)) {
                        b: {
                            try {
                                const Z = String(D.google_ad_format);
                                if (Z && Z.match) {
                                    const fa = Z.match(/(\d+)x(\d+)/i);
                                    if (fa) {
                                        const qb = parseInt(fa[1], 10),
                                            Pa = parseInt(fa[2], 10);
                                        if (0 < qb && 0 < Pa) {
                                            var K = {
                                                width: qb,
                                                height: Pa
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (Z) {}
                            K = null
                        }
                        D = K;
                        if (!D) {
                            v = null;
                            break a
                        }
                        v = 0 < v ? v : D.width;A = 0 < A ? A : D.height
                    }
                    v = {
                        width: v,
                        height: A
                    }
                }
                v = (A = v) ? A.height : 0;
                A = A ? A.width : 0
            } else if (v = M.bottom - M.top, A = M.right - M.left, 1 >= v || 1 >= A) continue;
            g.push(v);
            l.push(A);
            k.push(v * A);
            L.className && -1 != L.className.indexOf("google-auto-placed") ? (t += 1, L.className && -1 != L.className.indexOf("pedestal_container") && (G = v)) : (y = Math.min(y, Wa), n.push(M), r += 1, h.push(v), m.push(v * A));
            E = Math.min(E, Wa);
            q.push(M)
        }
        y = Infinity === y ? null : y;
        E = Infinity === E ? null : E;
        f = po(n);
        q = po(q);
        h = qo(b, h);
        n = qo(b, g);
        m = qo(b * c, m);
        K = qo(b * c, k);
        return new ro(a, {
            cc: e,
            Ub: b,
            rc: c,
            qc: d,
            Tb: r,
            Hb: t,
            Ib: so(g),
            Zb: so(l),
            Yb: so(k),
            nc: f,
            mc: q,
            lc: y,
            kc: E,
            bc: h,
            ac: n,
            Xb: m,
            Wb: K,
            tc: G
        })
    }

    function to(a, b = 0) {
        a = oo(a);
        return ((a.j.Ib || 0) * (a.j.Tb + a.j.Hb) + b) / (a.j.Ub + b)
    }

    function uo(a, b) {
        const c = Cc() && !(900 <= T(a.l).clientWidth),
            d = qa([], e => ta(a.m, e)).join(",");
        return {
            wpc: "",
            su: b,
            eid: d,
            doc: a.j.cc,
            pg_h: Y(a.j.Ub),
            pg_w: Y(a.j.rc),
            pg_hs: Y(a.j.qc),
            c: Y(a.j.Tb),
            aa_c: Y(a.j.Hb),
            av_h: Y(a.j.Ib),
            av_w: Y(a.j.Zb),
            av_a: Y(a.j.Yb),
            s: Y(a.j.nc),
            all_s: Y(a.j.mc),
            b: Y(a.j.lc),
            all_b: Y(a.j.kc),
            d: Y(a.j.bc),
            all_d: Y(a.j.ac),
            ard: Y(a.j.Xb),
            all_ard: Y(a.j.Wb),
            pd_h: Y(a.j.tc),
            dt: c ? "m" : "d"
        }
    }
    class ro {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function so(a) {
        return jc.apply(null, qa(a, b => 0 < b)) || null
    }

    function qo(a, b) {
        return 0 >= a ? null : ic.apply(null, b) / a
    }

    function po(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Y(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function vo(a, b) {
        var c;
        if (!(c = null == b)) {
            try {
                b.setItem("__storage_test__", "__storage_test__");
                const e = b.getItem("__storage_test__");
                b.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        b = c ? null : rm(b);
        a.j = b;
        if (b = !!a.j) a = a.j, b = !!a && 1 > a.length;
        return b
    }

    function wo(a, b) {
        try {
            if (!b || !vo(a, b)) return !1;
            a.j.push(Date.now());
            const c = JSON.stringify(a.j);
            b.setItem("__lsv__", c);
            return b.getItem("__lsv__") == c
        } catch (c) {
            return !1
        }
    }
    class xo {
        constructor() {
            this.j = null
        }
    };

    function yo(a, b) {
        if (a.ha) Promise.resolve(!1);
        else {
            a.ha = !0;
            b = Ce(b);
            a.aa = "true" === b["i-fvs"];
            var c = b.i_expid;
            c && (a.M = c);
            b.qid && (a.R = b.qid);
            a.C = parseFloat(b.den_lim) || 0;
            b = parseInt(b.sti_lt, 10);
            isNaN(b) || (a.V = b);
            a.I = !0;
            if (zo(a)) Promise.resolve(!1);
            else {
                var d = new Vl,
                    e = () => {
                        Ao(a, {
                            nip: 1,
                            ph: ze(a.j, !0),
                            vh: a.j.innerHeight,
                            iplt: Date.now() - a.U,
                            ama: a.K,
                            url: a.j.location ? a.j.location.href : void 0
                        }, .1);
                        a.G.push("Could not locate a suitable placement in the content below the fold.");
                        em(a.j, a.G);
                        d.resolve(!1)
                    },
                    f = (g,
                        h) => {
                        Ao(a, {
                            iplt: Date.now() - a.U,
                            ama: a.K,
                            y: h
                        }, .01);
                        d.resolve(Bo(a, g))
                    };
                a.U = Date.now();
                a.K ? (b = mo(a.j, a.Fa)) && a.I && !zo(a) ? f(b.lb, b.Cc) : (Ao(a, {
                    amacerr: 1
                }, .1), e()) : no(a.j).then(g => {
                    if (a.I && !zo(a)) return g.ba().then(h => {
                        if (h.j) var l = h.j;
                        else h.na || (fi(h, !1), h.m()), l = h.na, !h.j && l && (h.j = l.l()), l = h.j;
                        f(h, l ? l.top : -1)
                    }, e);
                    d.resolve(!1)
                })
            }
        }
    }

    function zo(a) {
        return a.aa ? !1 : te(a.j).wasReactiveAdVisible[8] ? (Ao(a, {
            vigs: 1
        }, .1), !0) : !1
    }

    function Ao(a, b, c) {
        b = b || {};
        a.R && (b.qid = a.R);
        a.M && (b.eid = a.M);
        a.l && (b.tsl = Date.now() - a.l);
        a.X && (b.tslo = Date.now() - a.X, b.tl = a.wa);
        a.F.src && (b.req = a.F.src);
        Wi("sci_evt", b, c)
    }

    function Bo(a, b) {
        Co(a) && Do(a) && jo(a.m, b) && (a.l = Date.now(), Eo(a), a.aa ? Fo(a) : a.Z.call(a.j, () => Go(a)));
        em(a.j, a.G);
        return !!a.l
    }

    function Ho(a) {
        a.H = !0;
        a.v = !1;
        co(a.m, !1);
        a.A && (I(a.j, "orientationchange", a.A), a.A = null);
        a.B && (I(a.j, "resize", a.B), a.B = null)
    }

    function Co(a) {
        const b = a.j.innerHeight;
        if (!b) return !1;
        var c = a.j;
        c = T(c).scrollWidth <= T(c).clientWidth;
        let d;
        if (!xe(a.j)) return Ao(a, {
            lnd: 1
        }, .1), a.G.push("Landscape is not supported"), !1;
        if (a.C && (d = to(a.j, b)) > a.C) return Ao(a, Object.assign({
            den: d,
            lim: a.C
        }, uo(oo(a.j), a.j.location.hostname)), 1), a.G.push(`Insertion would cause ad density greater than ${100*a.C}%.`), !1;
        c || Ao(a, {
            Zc: 1
        }, .1);
        return !0
    }

    function Do(a) {
        return a.fa ? !0 : vo(R(xo), a.ga)
    }

    function Eo(a) {
        a.A = Vi(519, () => {
            !a.H && a.v && Ao(a, {
                tto: Date.now() - a.l,
                por: xe(a.j) ? 1 : 0
            }, .1)
        });
        H(a.j, "orientationchange", a.A);
        a.B = Vi(520, () => {
            a.H || (a.m.C(), a.v && Ao(a, {
                ttre: Date.now() - a.l
            }, .1))
        });
        H(a.j, "resize", a.B)
    }

    function Fo(a) {
        a.va || (a.F.contentWindow.postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "https://googleads.g.doubleclick.net"), a.va = !0)
    }

    function Go(a) {
        if (!a.H)
            if (zo(a)) Ho(a);
            else {
                var b = a.m.j.getBoundingClientRect().top,
                    c = a.j.innerHeight;
                a.m.C();
                .5 <= (c - b) / c && Fo(a);
                b < c && (te(a.j).wasReactiveAdVisible[9] = !0, a.fa || wo(R(xo), a.ga), a.xa = !0);
                0 >= b ? (0 <= a.V && Io(a), Ao(a, {
                    sice: !0,
                    vh: c,
                    gvto: b
                }, .1)) : a.Z && a.Z.call(a.j, () => Go(a))
            }
    }

    function Io(a) {
        a.X = Date.now();
        a.v = !0;
        a.wa++;
        ko(a.m);
        u.setTimeout(() => {
            if (a.v) {
                a.v = !1;
                var b = a.m;
                const c = b.j;
                O(c, {
                    top: ld(b.v).y + "px"
                });
                O(c, {
                    position: "absolute"
                });
                io(b)
            }
        }, Math.max(0, a.V))
    }
    class Jo extends Yn {
        constructor(a, b, c, d, e, f) {
            super(a, b);
            this.ga = f;
            this.fa = d;
            this.H = !1;
            this.M = null;
            this.aa = this.I = this.ha = !1;
            this.G = [];
            this.v = !1;
            this.wa = this.X = this.l = 0;
            this.B = this.A = this.R = null;
            this.Z = u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || u.msRequestAnimationFrame;
            this.va = !1;
            this.m = new lo(b, a, e);
            this.xa = !1;
            this.U = this.V = 0;
            this.K = tb(c, 1, !1);
            this.Fa = ob(c, Gk, 2);
            this.C = 0
        }
        ea(a) {
            a["sti-fill"] = b => {
                yo(this, b)
            };
            a["i-no"] = () => {
                this.I = !1;
                !this.xa && this.l && Ho(this)
            }
        }
    };
    class Ko extends hm {
        constructor() {
            super();
            this.G = !1;
            this.C = null;
            this.L = !1
        }
        F(a) {
            this.G = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Hk(b)
            } catch (d) {
                c = null
            } else c = null;
            this.C = c;
            Array.isArray(a.fillMessage) && (this.L = !0);
            return !0
        }
    };
    class Lo {
        verifyAndProcessConfig(a, b, c) {
            var d = te(a);
            if (d.wasReactiveAdConfigReceived[9]) return !1;
            const e = new Ko;
            if (!gm(e, b)) return !1;
            d.wasReactiveAdConfigReceived[9] = !0;
            if (!e.l && !vo(R(xo), c)) return !1;
            b = zc(document, "INS");
            b.className = "adsbygoogle";
            O(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.B || {};
            c.google_ad_client = e.m;
            c.google_ad_height = T(a).clientHeight || 0;
            c.google_ad_width = T(a).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            d = new $n;
            ib(d, 1, e.G);
            e.C && sb(d, 2, e.C);
            e.L && ib(d, 3, !0);
            a: {
                cb = !0;
                try {
                    var f = JSON.stringify(d.toJSON(), Hb);
                    break a
                } finally {
                    cb = !1
                }
                f = void 0
            }
            c.google_rasc = f;
            e.l && (c.google_adtest = "on");
            Im(b, c, a);
            return !0
        }
    };
    var Oo = class extends Yn {
        constructor(a, b) {
            super(a, b.m);
            this.l = b
        }
        ea(a) {
            a.dismiss = () => {
                var b = this.l;
                Mo(b, -30);
                No(b, "dismissed")
            }
        }
    };
    var Qo = (a, b) => {
        if (!a.body) return null;
        const c = new Po;
        c.apply(a, b);
        return () => {
            P(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.m,
                position: c.v,
                top: c.A
            });
            b.scrollTo(0, c.l)
        }
    };
    class Po {
        constructor() {
            this.j = this.A = this.v = this.m = null;
            this.l = 0
        }
        apply(a, b) {
            this.m = a.body.style.overflow;
            this.v = a.body.style.position;
            this.A = a.body.style.top;
            this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.l = U(b);
            P(a.body, "top", -this.l + "px")
        }
    };

    function Ro(a, b) {
        const c = a.j;
        if (c)
            if (b) {
                b = a.B;
                if (null == b.j) {
                    var d = b.l;
                    const e = d.j.nextRestrictionId++;
                    d.j.maxZIndexRestrictions[e] = 2147483646;
                    an(d);
                    b.j = e
                }
                O(c, {
                    display: "block"
                });
                a.A.body && !a.v && (a.v = Qo(a.A, a.l));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.A.body.setAttribute("aria-hidden", "true")
            } else b = a.B, null != b.j && (d = b.l, delete d.j.maxZIndexRestrictions[b.j], an(d), b.j = null), O(c, {
                display: "none"
            }), a.v && (a.v(), a.v = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden",
                "true")
    }

    function So(a) {
        Ro(a, !1);
        const b = a.j;
        b && (xn(a, c => {
            O(c, To);
            De(c)
        }, !0), a.m.setAttribute("width", ""), a.m.setAttribute("height", ""), P(a.m, To), P(a.m, Uo), P(b, Vo), P(b, {
            background: "transparent"
        }), O(b, {
            display: "none",
            position: "fixed"
        }), De(b), De(a.m))
    }
    class Wo extends yn {
        constructor(a, b, c) {
            super(a, b, c);
            this.v = null;
            this.A = b.document;
            a = new dn(b);
            this.B = new en(a)
        }
    }
    var Vo = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        To = {
            width: "100vw",
            height: "100vh"
        },
        Uo = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    class Xo extends Wo {
        constructor(a, b, c) {
            super(b, a, c);
            So(this)
        }
        Z(a) {
            return Nf(a)
        }
    };

    function Yo(a) {
        a = a.match(Dc);
        const b = a[6];
        return (a[5] || "") + (b ? "?" + b : "") || "/"
    }

    function Zo(a, b) {
        b ? a.j = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.j = null
    }

    function $o(a, b, c, d, e) {
        if (!c) return !1;
        switch (b.target) {
            case "_top":
            case "_parent":
                break;
            case "":
            case "_self":
                if (e) return !1;
                break;
            default:
                return !1
        }
        return !d || ap(a, d) && Yo(c) == a.v ? !1 : !0
    }

    function ap(a, b) {
        return b.replace(bp, "") == a.m.replace(bp, "")
    }

    function cp(a, b, c) {
        if (sa(["data-google-vignette", "data-google-interstitial"], f => "false" === b.getAttribute(f) || !1)) return !1;
        const d = b.href,
            e = d && (d.match(Dc)[3] || null);
        if (!$o(a, b, d, e, c)) return !1;
        a.l = !!e && ap(a, e);
        return a.l || !c && !Cj(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
    }

    function dp(a, b) {
        if (!b || !a.j) return [];
        var c = [];
        um(b, c, !0, !0);
        b = c.join("");
        b = b.replace(vm, " ").replace(wm, "");
        b = b.replace(xm, "");
        b = b.replace(ym, " ");
        " " != b && (b = b.replace(zm, ""));
        if (!b) return [];
        a = b.match(a.j);
        b = [];
        for (c = 0; a && c < a.length; c++) {
            const d = a[c].toLowerCase();
            0 <= oa(b, d) || b.push(d)
        }
        return b
    }
    class ep {
        constructor(a) {
            this.j = null;
            this.m = a.match(Dc)[3] || "";
            this.v = Yo(a);
            this.l = !1
        }
    }
    var bp = /^(www\.|m\.|mobile\.)*/i;

    function fp(a) {
        a.j ? .setAttribute("data-vignette-loaded", "true")
    }

    function gp(a, b, c) {
        a.xa && (b.qid = a.xa);
        a.wa && (b.eid = a.wa);
        a.ga && (b.lnk = a.ga.substr(0, 100), a.C.l || (b.inter = "1"));
        const d = Jd();
        d && (b.ns = String(d));
        b.fs = String(Id() - a.A);
        b.req = a.F.src;
        b.ptt = 9;
        null != a.G && (b.comm = !0);
        Fd(a.Pa, "ia_evt", b, !0, c)
    }

    function hp(a) {
        a.G && (Wl(a.G).then(() => {
            fp(a.M);
            ip(a)
        }), Xl(a.G).then(() => void jp(a)), Yl(a.G).then(() => {
            a.V = !0
        }))
    }

    function ip(a) {
        a.l || (a.l = Id(), kp(a), gp(a, {
            aflvr: !0,
            al: a.l - a.A
        }, .01))
    }

    function jp(a) {
        gp(a, {
            dis: Date.now() - a.B,
            dha: Number(a.aa)
        }, .01);
        if (a.aa) lp(a) ? a.j.history.back() : mp(a);
        else if (u.setTimeout(() => {
                mp(a)
            }, 1E3), a.m) {
            var b = Date.now();
            a.j.addEventListener("pagehide", () => {
                gp(a, {
                    pg_hid: Date.now() - b
                }, .01)
            });
            a.X && (a.fa = !1);
            np(a, a.m.href)
        }
    }

    function kp(a) {
        if (!a.v) {
            a.v = a.J.O(527, c => op(a, c));
            H(a.j.document, "click", a.v, Rb);
            var b = a.j.frames;
            for (let c = 0; c < b.length; c++) try {
                a.ab(b[c].frameElement) || H(b[c].document, "click", a.v, Rb)
            } catch (d) {}
        }
    }

    function lp(a) {
        return -1 != a.j.location.hash.indexOf("google_vignette")
    }

    function mp(a) {
        a.B && (a.va = !0, a.v && (I(a.j.document, "click", a.v), a.v = null), a.I && a.I.parentNode && (a.I.parentNode.removeChild(a.I), a.I = null), a.H && a.H.parentNode && (a.H.parentNode.removeChild(a.H), a.H = null), Ro(a.M, !1), a.Za())
    }

    function np(a, b) {
        a = a.j.location;
        b = Hc(b, Gc) || cc;
        if (b instanceof bc) var c = b instanceof bc && b.constructor === bc ? b.j : "type_error:SafeUrl";
        else {
            b: {
                try {
                    c = new URL(b)
                } catch (d) {
                    c = "https:";
                    break b
                }
                c = c.protocol
            }
            c = "javascript:" !== c ? b : void 0
        }
        void 0 !== c && a.replace(c)
    }

    function pp(a, b) {
        var c = Id(),
            d = !te(a.j).wasReactiveAdVisible[9],
            e = dp(a.C, b),
            f = .05 > Math.abs(ye(a.j) - 1);
        b = a.K.width < a.K.height === xe(a.j);
        if (864E5 > c - a.A && a.R && !a.V && !lp(a) && a.l && (a.Wa || d) && !e.length && f && b) b = null;
        else {
            var g = new Wd;
            c = F(g, 1, c, 0);
            c = F(c, 2, 864E5, 0);
            c = F(c, 3, a.R, !1);
            c = F(c, 4, a.V, !1);
            c = F(c, 5, lp(a), !1);
            c = F(c, 6, !!a.l, !1);
            a = F(c, 7, a.Wa, !1);
            d = F(a, 8, !d, !1);
            if (null == e) d = ib(d, 9, db);
            else {
                a = B(e);
                if (!(a & 4)) {
                    if (a & 2 || Object.isFrozen(e)) e = Array.prototype.slice.call(e);
                    for (c = 0; c < e.length; c++) e[c] = e[c];
                    Ua(e, a |
                        5)
                }
                d = ib(d, 9, e)
            }
            f = F(d, 10, f, !1);
            b = F(f, 11, b, !1)
        }
        return b
    }

    function qp(a, b, c) {
        a = Lc("LINK", a.j.document);
        a.setAttribute("rel", c);
        a.setAttribute("href", b);
        return a
    }

    function rp(a, b) {
        for (b = b.target; b;) {
            if ("A" == b.nodeName) {
                if (cp(a.C, b, b.ownerDocument != a.j.document)) return b;
                break
            }
            b = b.parentElement
        }
        return null
    }

    function op(a, b) {
        if (!b || b.defaultPrevented || a.B || a.L) {
            var c = de(ae(1), a.A);
            a.l && ib(c, 4, a.l)
        } else if (a.m) c = de(ae(2), a.A), a.l && ib(c, 4, a.l);
        else if (c = rp(a, b)) {
            var d = pp(a, c);
            d ? (sp(a, c, !1), c = ce(de(ae(4), a.A), d), a.l && ib(c, 4, a.l)) : (a.m = c, bd(b), b.preventDefault = () => b && (b.preventDefaultTriggered_ = !0), c = de(ae(5), a.A), a.l && ib(c, 4, a.l), u.setTimeout(x(a.nb, a, b), 0))
        } else c = de(ae(3), a.A), a.l && ib(c, 4, a.l)
    }

    function sp(a, b, c) {
        const d = a.j;
        var e = te(d);
        const f = a.K.width < a.K.height !== xe(a.j);
        e = {
            zm: Number(.05 > Math.abs(ye(d) - 1)),
            sz: Number(f),
            fc: Number(a.R),
            vp: Number(lp(a)),
            al: Number(!!a.l),
            fsi: Number(!!e.wasReactiveAdVisible[9]),
            ag: Number(864E5 > Id() - a.A)
        };
        c && (e.wsdojl = !0);
        f && (e.rs_sz = `${a.K.width}x${a.K.height}`, e.cr_sz = `${d.innerWidth}x${d.innerHeight}`);
        b = dp(a.C, b);
        b.length && (e.sw = b.join());
        a.ha && (e.ts = a.ha);
        gp(a, e, .01)
    }
    var tp = class extends Xn {
        constructor(a, b, c, d, e, f) {
            var g = Ri,
                h = wh(sh) && !wh(ph);
            super(a, b, c, g, {
                fullscreenApi: h
            });
            this.l = NaN;
            this.va = !1;
            this.m = null;
            this.aa = !1;
            this.wa = f.i_expid ? ? null;
            this.A = Id();
            this.R = !0;
            this.V = !1;
            this.Wa = "true" === f["i-fvs"];
            this.fa = !0;
            this.ga = null;
            this.B = 0;
            this.xa = f.qid ? ? null;
            this.v = this.I = this.H = null;
            this.X = void 0;
            this.ha = null;
            this.M = d;
            this.C = new ep(a.location.href);
            this.K = e;
            this.mb = "true" === f.iobs && !!this.j.IntersectionObserver;
            this.tb = Pb(() => void gp(this, {
                tth: Date.now() - this.B
            }, .01));
            Zo(this.C, f.stop_word ? .split(";") ? ? null);
            this.G = h ? am(a, b.contentWindow, c, g) : null;
            hp(this);
            kp(this)
        }
        ea(a, b) {
            a["i-blur"] = () => {
                this.aa = !0;
                this.X && (this.fa = !0)
            };
            a["i-no"] = c => {
                this.R = !1;
                this.ha = c.i_tslv ? c.i_tslv : null
            };
            b.fullscreenApi || (a["i-adframe-load"] = () => {
                fp(this.M);
                const c = R(vh).l(uh.j, uh.defaultValue);
                0 < c ? setTimeout(() => ip(this), c) : ip(this)
            }, a["i-dismiss"] = () => {
                jp(this)
            }, a.i_iif = () => {
                this.V = !0
            })
        }
        kb() {
            this.fa && (lp(this) ? (gp(this, {
                fnv: 1
            }, .01), np(this, this.m.href)) : (this.tb(), mp(this)))
        }
        Ca() {
            super.Ca();
            lp(this) && np(this, this.m.href);
            this.v && (I(this.j.document, "click", this.v), this.v = null)
        }
        Za() {}
        ab() {
            return !1
        }
        nb(a) {
            if (this.B || !this.m || this.L) Xd(1);
            else {
                a = a.preventDefaultTriggered_;
                var b = cp(this.C, this.m, this.m.ownerDocument != this.j.document),
                    c = pp(this, this.m);
                a || !b || c ? (sp(this, this.m, a), b = $d(Zd(Xd(2), a), b), c && sb(b, 4, c), a ? this.m = null : np(this, this.m.href)) : this.bb() ? (gp(this, {
                        lif: Id(),
                        lase: this.l,
                        latt: !!this.M.j ? .getAttribute("data-vignette-loaded"),
                        t: 9
                    }, .1), this.B = Date.now(), a = $d(Zd(Xd(4), a), b), c = !!this.M.j ? .getAttribute("data-vignette-loaded"), a = F(a, 6, c, !1), ib(a, 5, this.B), te(this.j).wasReactiveAdVisible[8] = !0, this.ga = this.m.href.substr(0, 100), this.mb || (this.G ? u.IntersectionObserver || this.G.Kb.postMessage(JSON.stringify({
                        eventType: "visible",
                        googMsgType: "fullscreen"
                    }), "*") : this.F.contentWindow.postMessage(JSON.stringify({
                        msg_type: "i-view"
                    }), "*")), a = this.m.href, this.I = qp(this, a, "prerender"), this.H = qp(this, a, "prefetch"), this.j.document.body.appendChild(this.I), this.j.document.body.appendChild(this.H),
                    lp(this) || (this.j.location.hash = "google_vignette"), this.X = this.J.O(526, x(this.kb, this)), u.setTimeout(ja(H, this.j, "hashchange", this.X), 0), a = this.J.O(528, x(this.rb, this)), H(this.j, "pagehide", a), Ro(this.M, !0)) : ($d(Zd(Xd(3), a), b), np(this, this.m.href))
            }
        }
        bb() {
            return !0
        }
        rb() {
            this.va || gp(this, {
                ttr: Date.now() - this.B
            }, .01);
            mp(this)
        }
    };

    function up(a, b) {
        b = b || a.j.document;
        if (!b.getElementById("vignette-style-id")) {
            var c = rc(b).createElement("STYLE");
            c.id = "vignette-style-id";
            c.textContent = "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
            b.head.appendChild(c);
            a.U.push(c)
        }
    }

    function vp(a, b, c) {
        let d = 0;
        for (let e = b.links.length; 0 <= e; e--) {
            const f = b.links[e];
            f && (f.classList.remove("google_vignette_inst"), cp(a.C, f, c) && !dp(a.C, f).length && (d++, f.classList.add("google_vignette_inst")))
        }
        return d
    }
    class wp extends tp {
        constructor(a, b, c, d, e, f, g) {
            super(a, b, Si, new Xo(a, b, e), d, g);
            this.hb = f;
            this.U = [];
            this.Z = 0;
            this.Xa = yi(this.j.location, "google_ia_debug");
            this.gb = c;
            this.Xa && (this.Fa(), this.Z = u.setInterval(x(this.Fa, this), 5E3))
        }
        Za() {
            if (this.Xa) {
                for (let b = 0; b < this.U.length; ++b) {
                    var a = this.U[b];
                    (a = a.ownerNode || a.owningElement || a) && a.parentNode && a.parentNode.removeChild(a)
                }
                this.U = [];
                this.Z && u.clearInterval(this.Z)
            }
        }
        Fa() {
            let a = vp(this, this.j.document, !1);
            up(this);
            var b = this.j.frames;
            for (let c = 0; c < b.length; c++) try {
                a +=
                    vp(this, b[c].document, !0), up(this, b[c].document)
            } catch (d) {}
            b = dm(this.j, 1);
            null != b && b.setLinksInstrumented(a)
        }
        bb() {
            return this.gb || wo(R(xo), this.hb)
        }
        ab(a) {
            return /aswift_[0-9]+/.test(a.id)
        }
    };

    function xp(a) {
        const b = a.l.document.createElement("span"),
            c = Math.round((yp(a) - 50) / 2);
        O(b, {
            background: "#FAFAFA",
            position: "absolute",
            left: c + "px",
            right: c + "px",
            top: zp(a) + 5 + "px",
            "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
        });
        b.className = `${a.m}-side-rail-dismiss-btn`;
        b.appendChild(Ap(a));
        const d = () => {
            a.C()
        };
        H(b, "click", d);
        Q(a, () => I(b, "click", d));
        return b
    }

    function zp(a) {
        return Number(pd(a.j).height || a.j.height)
    }

    function yp(a) {
        return Number(pd(a.j).width || a.j.width)
    }

    function Ap(a) {
        var b = a.l.document;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "svg");
        O(c, {
            position: "absolute",
            top: "0px",
            display: "block",
            width: "50px",
            height: "30px",
            "margin-top": "-5px",
            transform: "none",
            "pointer-events": "initial"
        });
        var d = b.createElementNS("http://www.w3.org/2000/svg", "defs"),
            e = b.createElementNS("http://www.w3.org/2000/svg", "filter");
        a = `${a.m}-side-rail-drop-shadow`;
        e.setAttribute("id", a);
        e.setAttribute("filterUnits", "userSpaceOnUse");
        e.setAttribute("color-interpolation-filters",
            "sRGB");
        var f = b.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        f.setAttribute("in", "SourceAlpha");
        f.setAttribute("result", "TransferredAlpha");
        var g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg",
            "feFuncB");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        f.setAttribute("in", "TransferredAlpha");
        f.setAttribute("stdDeviation", "2");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        f.setAttribute("dx", "0");
        f.setAttribute("dy", "0");
        f.setAttribute("result", "offsetblur");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        f.appendChild(b.createElementNS("http://www.w3.org/2000/svg",
            "feMergeNode"));
        g = b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        g.setAttribute("in", "SourceGraphic");
        f.appendChild(g);
        e.appendChild(f);
        d.appendChild(e);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("d", "M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");
        d.setAttribute("stroke", "#FAFAFA");
        d.setAttribute("stroke-width", "1");
        d.setAttribute("fill", "#FAFAFA");
        d.style.setProperty("filter", `url(#${a})`);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg",
            "rect");
        d.setAttribute("x", "0");
        d.setAttribute("y", "0");
        d.setAttribute("width", "50");
        d.setAttribute("height", "5");
        d.style.setProperty("fill", "#FAFAFA");
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        e = b.createElementNS("http://www.w3.org/2000/svg", "line");
        e.setAttribute("x1", "18");
        e.setAttribute("y1", "18");
        e.setAttribute("x2", "25");
        e.setAttribute("y2", "12");
        d.appendChild(e);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "25");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "32");
        b.setAttribute("y2", "18");
        d.appendChild(b);
        c.appendChild(d);
        return c
    }
    var Bp = class extends fe {
        constructor(a, b, c, d, e) {
            super();
            this.j = a;
            this.l = b;
            this.v = c;
            this.m = d;
            this.C = e;
            a = this.l.document.createElement("span");
            a.className = `${this.m}-side-rail-edge`;
            O(a, {
                background: "#FAFAFA",
                position: "absolute",
                left: "0px",
                top: zp(this) + "px",
                width: yp(this) + "px",
                height: "5px",
                "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
            });
            this.A = a;
            this.B = xp(this);
            this.v.appendChild(this.A);
            this.v.appendChild(this.B)
        }
    };

    function No(a, b) {
        "dismissed" !== a.v && (a.v = b, a.j.setAttribute("data-side-rail-status", a.v))
    }

    function Cp(a, b) {
        if ("dismissed" === a.v) var c = !1;
        else {
            c = a.j;
            var d = a.l;
            var e = a.position;
            var f = a.l.innerWidth,
                g = a.l.innerHeight,
                h = new Set([c]),
                l = a.C.width + 15,
                k = a.C.height + 35;
            if (a.I && (1200 > f || 650 > g)) e = null;
            else {
                var m = te(d).sideRailAvailableSpace,
                    n = {
                        Y: d,
                        P: f,
                        T: g,
                        zb: h
                    },
                    q = `f-${Dm(n.P)}x${Dm(n.T)}`;
                if (!m.has(q)) {
                    m.set(q, 0);
                    te(n.Y).sideRailProcessedFixedElements.clear();
                    q = new Set([...Array.from(n.Y.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...n.zb]);
                    for (var r of Cm(n.Y)) Am(r,
                        q) || Hm(r, m, n)
                }
                n = [];
                q = .9 * g;
                var t = U(d),
                    y = r = (g - q) / 2,
                    E = q / 7;
                for (let Wa = 0; 8 > Wa; Wa++) {
                    var G = n,
                        M = G.push;
                    c: {
                        var v = y;
                        var A = e,
                            D = m,
                            K = {
                                Y: d,
                                P: f,
                                T: g,
                                zb: h
                            };
                        const Z = Fm({
                                position: A,
                                Ra: v,
                                P: K.P,
                                T: K.T
                            }),
                            fa = Em({
                                position: A,
                                Ra: v,
                                scrollY: t,
                                P: K.P,
                                T: K.T
                            });
                        if (D.has(fa)) {
                            v = Gm(D.get(Z), D.get(fa));
                            break c
                        }
                        const qb = "left" === A ? 20 : K.P - 20;
                        let Pa = qb;A = .3 * K.P / 5 * ("left" === A ? 1 : -1);
                        for (let Ei = 0; 6 > Ei; Ei++) {
                            const Yc = km(K.Y.document, Math.round(Pa), Math.round(v));
                            var L = Am(Yc, K.zb);
                            const Fi = Bm(Yc, K.Y);
                            if (!L && null !== Fi) {
                                Hm(Fi, D, K);
                                D.delete(fa);
                                break
                            }
                            L || (L = Yc.offsetHeight >= .25 * K.T, L = Yc.offsetWidth >= .9 * K.P && L);
                            if (L) D.set(fa, Math.round(Math.abs(Pa - qb) + 20));
                            else if (Pa !== qb) Pa -= A, A /= 2;
                            else {
                                D.set(fa, 0);
                                break
                            }
                            Pa += A
                        }
                        v = Gm(D.get(Z), D.get(fa))
                    }
                    M.call(G, v);
                    y += E
                }
                d = Math.round(q / 8);
                f = Math.round(r);
                m = [];
                g = Array(n.length).fill(0);
                for (h = 0; h < n.length; h++) {
                    for (; 0 !== m.length && n[m[m.length - 1]] >= n[h];) m.pop();
                    g[h] = 0 === m.length ? 0 : m[m.length - 1] + 1;
                    m.push(h)
                }
                m = [];
                r = n.length - 1;
                h = Array(n.length).fill(0);
                for (q = r; 0 <= q; q--) {
                    for (; 0 !== m.length && n[m[m.length - 1]] >= n[q];) m.pop();
                    h[q] = 0 === m.length ? r : m[m.length - 1] - 1;
                    m.push(q)
                }
                m = null;
                for (r = 0; r < n.length; r++)
                    if (q = {
                            position: e,
                            width: Math.round(n[r]),
                            height: Math.round((h[r] - g[r] + 1) * d),
                            zc: f + g[r] * d
                        }, q.width >= l && q.height >= k) {
                        m = q;
                        break
                    }
                e = m
            }
            e ? (l = Math.round(e.width - a.C.width - 15), a.B = Math.min(a.B ? ? l, l), a.A = Math.round(e.zc), O(c, {
                margin: "0px",
                padding: "0px",
                position: "fixed",
                [a.position]: a.B + "px",
                top: a.A + "px",
                transition: "all 500ms ease-in",
                "z-index": "1"
            }), a.H && O(c, {
                "z-index": "2147483647",
                overflow: "visible"
            }), c = !0) : c = !1
        }
        c ? Dp(a, b) : Mo(a, b)
    }

    function Mo(a, b = 0) {
        "displayed" === a.v && (O(a.j, {
            transition: "all 500ms ease-in",
            opacity: "0",
            top: a.A + b + "px"
        }), clearTimeout(a.F), a.F = setTimeout(() => {
            No(a, "idle");
            O(a.j, {
                display: "none"
            })
        }, 500))
    }

    function Dp(a, b = 0) {
        "idle" === a.v && (O(a.j, {
            transition: "",
            display: "block",
            opacity: "0",
            top: a.A - b + "px"
        }), clearTimeout(a.F), a.F = setTimeout(() => {
            No(a, "displayed");
            O(a.j, {
                transition: "all 500ms ease-in",
                opacity: "1",
                top: a.A + "px"
            })
        }, 10))
    }
    var Ep = class extends yn {
        constructor(a, b, c, d, e) {
            var f = Si,
                g = wh(rh),
                h = wh(qh);
            super(a, b, c);
            this.C = e;
            this.I = g;
            this.H = h;
            this.v = "idle";
            this.A = this.F = 0;
            this.B = null;
            this.G = 0;
            this.position = 3 === d ? "left" : "right";
            new Bp(a, b, c, this.position, () => {
                Mo(this, -30);
                No(this, "dismissed")
            });
            No(this, "idle");
            O(c, {
                display: "none"
            });
            const l = f.O(273, () => {
                Cp(this)
            });
            H(a, "load", l);
            Q(this, () => I(a, "load", l));
            const k = f.O(267, () => {
                this.B = null;
                Cp(this)
            });
            H(b, "resize", k);
            Q(this, () => I(b, "resize", k));
            const m = f.O(268, Qb(() => {
                const n = U(this.l);
                Cp(this, this.C.height / 3 * Math.sign(this.G - n));
                this.G = n
            }));
            H(b, "scroll", m, Sb);
            Q(this, () => I(b, "scroll", m))
        }
    };
    var Fp = class {
        constructor(a) {
            this.j = a
        }
        verifyAndProcessConfig(a, b) {
            if (3 !== this.j && 4 !== this.j) return !1;
            const c = new hm;
            if (!gm(c, b)) return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            a.document.body.appendChild(b);
            const d = c.B || {};
            d.google_ad_client = c.m;
            d.google_ad_width = c.A;
            d.google_ad_height = c.v;
            d.google_reactive_ad_format = this.j;
            Im(b, d, a);
            return !0
        }
    };
    class Gp {
        verifyAndProcessConfig(a, b, c) {
            const d = te(a);
            if (d.wasReactiveAdConfigReceived[8]) return !1;
            const e = new hm;
            if (!gm(e, b)) return !1;
            d.wasReactiveAdConfigReceived[8] = !0;
            if (!e.l && !vo(R(xo), c)) return !1;
            b = Lc("INS");
            b.className = "adsbygoogle";
            O(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.B || {};
            c.google_ad_client = e.m;
            c.google_ad_width = e.A;
            c.google_ad_height = e.v;
            c.google_reactive_ad_format = 8;
            e.j && (c.google_reactive_fill_message = e.j);
            e.l && (c.google_adtest = "on");
            Im(b, c, a);
            return !0
        }
    };
    class Hp {
        configProcessorForAdFormat(a) {
            switch (a) {
                case 1:
                case 2:
                    return new Lm(a);
                case 3:
                case 4:
                    return wh(th) ? new Fp(a) : null;
                case 8:
                    return R(Gp);
                case 9:
                    return R(Lo);
                default:
                    return null
            }
        }
        createAdSlot(a, b, c, d, e) {
            a: {
                var f = b.google_reactive_ad_format;
                switch (f) {
                    case 1:
                    case 2:
                        e = pm(a, f);
                        c = new Vn(c, a, e, d);
                        new Zn(a, c, b.google_reactive_fill_message);
                        break a;
                    case 3:
                    case 4:
                        new Oo(a, new Ep(c, a, d, f, new lc(b.google_ad_width, b.google_ad_height)));
                        break a;
                    case 8:
                        new wp(a, c, "on" == b.google_adtest, new lc(b.google_ad_width,
                            b.google_ad_height), d, e, b.google_reactive_fill_message);
                        break a;
                    case 9:
                        f = b.google_rasc;
                        if (void 0 === f || null === f) var g = null;
                        else try {
                            g = ao(f)
                        } catch (h) {
                            Wi("rasf_fsi_ama", {}, .1), g = null
                        }
                        g = g || new $n;
                        new Jo(a, c, g, "on" == b.google_adtest, d, e)
                }
            }
        }
    };
    class Ip {};

    function Jp(a) {
        const b = R(vh);
        b.j = (c, d) => he(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => he(6, a, () => 0)(c, d, 1);
        b.v = (c, d) => he(7, a, () => "")(c, d, 1);
        b.A = (c, d) => he(8, a, () => [])(c, d, 1);
        b.m = () => {
            he(15, a, () => {})(1)
        }
    };

    function Kp(a) {
        Si.Eb(b => {
            b.shv = String(a);
            b.mjsv = "m202302130101";
            const c = R(je).j();
            u.google_ad_modifications || (u.google_ad_modifications = {});
            var d = u.google_ad_modifications;
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };
    var Lp = "undefined" === typeof sttc ? void 0 : sttc;

    function Mp() {
        var a = Si;
        try {
            return Jb(Lp, Td), new cm(JSON.parse(Lp))
        } catch (b) {
            a.Qa(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
                c.jspb = String(Lp)
            })
        }
        return new cm
    };
    Ui(210, () => {
        var a = Mp(),
            b = C(a, 2);
        Kp(null == b ? "" : b);
        a = tb(a, 6);
        Jb(fm, Ud);
        fm = a;
        a = u.ggeac || (u.ggeac = {});
        ie(R(je), a);
        Jp(a);
        R(Ip);
        R(vh).m();
        a = new Hp; {
            u.google_llp || (u.google_llp = {});
            b = u.google_llp;
            let c = b[1];
            if (!c) {
                const {
                    promise: d,
                    resolve: e
                } = new Vl;
                c = {
                    promise: d,
                    resolve: e
                };
                b[1] = c
            }
            b = c
        }
        b.resolve(a)
    });
}).call(this, "[2021,\"r20230221\",\"r20110914\",null,null,null,null,\".google.com.tr\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759876,44759927,44773809,44759837,44777877]]");