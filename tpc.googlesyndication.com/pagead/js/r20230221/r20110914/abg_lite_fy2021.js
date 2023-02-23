(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var m = this || self;

    function ba(a) {
        return a
    };

    function ca(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function da(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };

    function ea(a) {
        ea[" "](a);
        return a
    }
    ea[" "] = function() {};
    var fa = {},
        n = null;
    var ha = "undefined" !== typeof Uint8Array;
    const ia = !(ca("Trident") || ca("MSIE")) && "function" === typeof m.btoa;
    const p = Symbol();

    function q(a, b) {
        if (p) return a[p] |= b;
        if (void 0 !== a.v) return a.v |= b;
        Object.defineProperties(a, {
            v: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function r(a) {
        let b;
        p ? b = a[p] : b = a.v;
        return null == b ? 0 : b
    }

    function t(a, b) {
        p ? a[p] = b : void 0 !== a.v ? a.v = b : Object.defineProperties(a, {
            v: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function ja(a) {
        q(a, 16);
        return a
    }

    function ka(a, b) {
        t(b, (a | 0) & -51)
    }

    function u(a, b) {
        t(b, (a | 18) & -41)
    };
    var v = {};

    function la(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    const ma = [];
    t(ma, 23);
    var na = Object.freeze(ma);

    function oa(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && la(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function pa(a) {
        const b = a.i + a.A;
        return a.o || (a.o = a.l[b] = {})
    }

    function w(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.o ? a.o[b] : void 0 : c && a.o && (c = a.o[b], null != c) ? c : a.l[b + a.A]
    }

    function x(a, b, c, d) {
        a.j && (a.j = void 0);
        b >= a.i || d ? pa(a)[b] = c : (a.l[b + a.A] = c, (a = a.o) && b in a && delete a[b])
    }

    function qa(a) {
        var b = ra;
        const c = w(a, 1, !1);
        var d = r(a.l),
            f = !1;
        if (null == c || "object" !== typeof c || (f = Array.isArray(c)) || c.F !== v)
            if (f) {
                let e = f = r(c);
                0 === e && (e |= d & 16);
                e |= d & 2;
                e !== f && t(c, e);
                b = new b(c)
            } else b = void 0;
        else b = c;
        b !== c && null != b && x(a, 1, b, !1);
        return b
    }

    function sa(a) {
        let b = qa(a);
        if (null == b) return b;
        if (!(r(a.l) & 2)) {
            var c = b;
            if (r(c.l) & 2) {
                var d = ta(c, !1);
                d.j = c;
                c = d
            }
            c !== b && (b = c, x(a, 1, b, !1))
        }
        return b
    }

    function y(a, b) {
        return null == a ? b : a
    }

    function D(a, b) {
        a = w(a, b);
        return y(null == a ? a : !!a, !1)
    };
    let E;

    function ua(a, b) {
        E = b;
        a = new a(b);
        E = void 0;
        return a
    };

    function za(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (r(a) & 128)) return a = Array.prototype.slice.call(a), oa(a), a
                    } else if (ha && null != a && a instanceof Uint8Array) {
                    if (ia) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        if (!n) {
                            n = {};
                            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                                    d = ["+/=", "+/", "-_=", "-_.", "-_"], f = 0; 5 > f; f++) {
                                var e = c.concat(d[f].split(""));
                                fa[f] = e;
                                for (var g = 0; g < e.length; g++) {
                                    var h = e[g];
                                    void 0 === n[h] && (n[h] = g)
                                }
                            }
                        }
                        b = fa[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (f = e = 0; e < a.length - 2; e += 3) {
                            var l = a[e],
                                k = a[e + 1];
                            h = a[e + 2];
                            g = b[l >> 2];
                            l = b[(l & 3) << 4 | k >> 4];
                            k = b[(k & 15) << 2 | h >> 6];
                            h = b[h & 63];
                            c[f++] = g + l + k + h
                        }
                        g = 0;
                        h = d;
                        switch (a.length - e) {
                            case 2:
                                g = a[e + 1], h = b[(g & 15) << 2] || d;
                            case 1:
                                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Aa(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Ba(a, b, c, void 0 !== d);
            else if (la(a)) {
                const f = {};
                for (let e in a) f[e] = Aa(a[e], b, c, d);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Ba(a, b, c, d) {
        const f = r(a);
        d = d ? !!(f & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let e = 0; e < a.length; e++) a[e] = Aa(a[e], b, c, d);
        c(f, a);
        return a
    }

    function Ca(a) {
        return a.F === v ? a.toJSON() : za(a)
    }

    function Da(a, b) {
        a & 128 && oa(b)
    };

    function Ea(a, b, c = u) {
        if (null != a) {
            if (ha && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = r(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return t(a, d | 18), a;
                a = Ba(a, Ea, d & 4 ? u : c, !0);
                b = r(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.F === v ? Fa(a) : a
        }
    }

    function Ga(a, b, c, d, f, e, g) {
        if (a = a.h && a.h[c]) {
            d = r(a);
            d & 2 ? d = a : (e = Array.prototype.map.call(a, Fa, void 0), u(d, e), Object.freeze(e), d = e);
            if (r(b.l) & 2) throw Error();
            null == d ? e = na : (e = [], q(e, 1));
            g = e;
            if (null != d) {
                e = !!d.length;
                for (a = 0; a < d.length; a++) {
                    const h = d[a];
                    e = e && !(r(h.l) & 2);
                    g[a] = h.l
                }
                e = (e ? 8 : 0) | 1;
                a = r(g);
                (a & e) !== e && (Object.isFrozen(g) && (g = Array.prototype.slice.call(g)), t(g, a | e));
                b.h || (b.h = {});
                b.h[c] = d
            } else b.h && (b.h[c] = void 0);
            x(b, c, g, f)
        } else {
            d = Ea(d, e, g);
            if (r(b.l) & 2) throw Error();
            x(b, c, d, f)
        }
    }

    function Fa(a) {
        if (r(a.l) & 2) return a;
        a = ta(a, !0);
        q(a.l, 18);
        return a
    }

    function ta(a, b) {
        const c = a.l;
        var d = ja([]),
            f = a.constructor.h;
        f && d.push(f);
        f = a.o;
        if (f) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var e = {};
            d[d.length - 1] = e
        }
        0 !== (r(c) & 128) && oa(d);
        b = b || r(a.l) & 2 ? u : ka;
        d = ua(a.constructor, d);
        a.N && (d.N = a.N.slice());
        e = !!(r(c) & 16);
        const g = f ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Ga(a, d, h - a.A, c[h], !1, e, b);
        if (f)
            for (const h in f) Ga(a, d, +h, f[h], !0, e, b);
        return d
    };
    var Ia = class {
        constructor(a, b) {
            null == a && (a = E);
            E = void 0;
            var c = this.constructor.h;
            if (null == a) {
                a = c ? [c] : [];
                var d = !0;
                t(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (c && c !== a[0]) throw Error();
                var f = q(a, 0) | 32;
                d = 0 !== (16 & f);
                if (128 & f) throw Error();
                t(a, f)
            }
            this.A = c ? 0 : -1;
            this.h = void 0;
            this.l = a;
            a: {
                f = this.l.length;c = f - 1;
                if (f && (f = this.l[c], la(f))) {
                    this.o = f;
                    this.i = c - this.A;
                    break a
                }
                this.i = Number.MAX_VALUE
            }
            if (this.o && "g" in this.o) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (b) {
                d = d && !0;
                c = this.i;
                let h;
                for (f = 0; f < b.length; f++) {
                    var e = b[f];
                    if (e < c) {
                        e += this.A;
                        var g = a[e];
                        g ? Ha(g, d) : a[e] = na
                    } else h || (h = pa(this)), (g = h[e]) ? Ha(g, d) : h[e] = na
                }
            }
        }
        toJSON() {
            return Ba(this.l, Ca, Da)
        }
    };

    function Ha(a, b) {
        if (Array.isArray(a)) {
            var c = r(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && t(a, c | d)
        }
    }
    Ia.prototype.F = v;
    var ra = class extends Ia {
            constructor(a) {
                super(a, Ja)
            }
        },
        Ja = [28];
    var La = function(a) {
            return b => {
                if (null == b || "" == b) b = new a;
                else {
                    b = JSON.parse(b);
                    if (!Array.isArray(b)) throw Error(void 0);
                    b = ua(a, ja(b))
                }
                return b
            }
        }(class extends Ia {
            constructor(a) {
                super(a, Ka)
            }
        }),
        Ka = [21];

    function Ma(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Na = {
            passive: !0
        },
        Oa = Ma(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Pa(a) {
        return a ? a.passive && Oa() ? a : a.capture || !1 : !1
    }

    function J(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Pa(d))
    };
    var K;
    var Ra = class {
            constructor(a, b) {
                this.h = b === Qa ? a : ""
            }
            toString() {
                return this.h + ""
            }
        },
        Qa = {};

    function L(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function Sa(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : Ta(b, a)[0] || null);
        return a || null
    }

    function Ta(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var f = a.getElementsByClassName(b);
            return f
        }
        f = a.getElementsByTagName("*");
        if (b) {
            var e = {};
            for (c = d = 0; a = f[c]; c++) {
                var g = a.className,
                    h;
                if (h = "function" == typeof g.split) h = 0 <= da(g.split(/\s+/), b);
                h && (e[d++] = a)
            }
            e.length = d;
            return e
        }
        return f
    }

    function Ua(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var Va = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Wa(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Xa(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Ya(a, b, c = null, d = !1) {
        Za(a, b, c, d)
    }

    function Za(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Xa("IMG", a.document);
        if (c || d) {
            const e = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = da(g, f);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                f.removeEventListener && f.removeEventListener("load", e, Pa());
                f.removeEventListener && f.removeEventListener("error", e, Pa())
            };
            J(f, "load", e);
            J(f, "error", e)
        }
        f.src = b;
        a.google_image_requests.push(f)
    };
    let $a = 0;

    function ab(a) {
        return (a = bb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function bb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function cb() {
        if (!(.01 < Math.random())) {
            var a = bb(60, document.currentScript);
            a = `https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${ab(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Ya(b, a, void 0, !1)
        }
    };
    var db = document,
        M = window;

    function eb(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function fb(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : eb(a).match(/\S+/g) || [], b = 0 <= da(a, b));
        return b
    }

    function N(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!fb(a, b)) {
            var c = eb(a);
            b = c + (0 < c.length ? " " + b : b);
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    var gb = class {
        constructor(a) {
            this.serializedAttributionData = a.toJSON();
            this.h = ta(a, !1);
            this.isMutableImpression = void 0 !== qa(this.h) && !!D(sa(this.h), 33);
            this.Y = !!D(this.h, 11);
            this.hasUserFeedbackData = !!this.h && void 0 !== qa(this.h);
            this.S = !!D(this.h, 4);
            this.V = !!D(this.h, 6);
            this.R = !!D(this.h, 13);
            this.creativeIndexSuffix = 1 < y(w(this.h, 8), 0) ? y(w(this.h, 7), 0).toString() : "";
            null != w(this.h, 34) && (this.creativeIndexSuffix = y(w(this.h, 34), "") + "_" + this.creativeIndexSuffix);
            this.Z = !!D(this.h, 17);
            this.X = !!D(this.h,
                18);
            this.P = !!D(this.h, 14);
            this.enableMultiplexThirdPartyAttribution = !!D(this.h, 32);
            this.J = !!D(this.h, 15);
            this.aa = !!D(this.h, 31);
            this.W = 1 == D(this.h, 9);
            this.openAttributionInline = 1 == D(this.h, 10);
            this.isMobileDevice = !!D(this.h, 12);
            this.D = null;
            this.U = (a = db.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
            (this.L = 1 < y(w(this.h, 8), 0)) && void 0 === M.goog_multislot_cache && (M.goog_multislot_cache = {});
            if (this.L && !this.U) {
                if (a = M.goog_multislot_cache.hd, void 0 === a) {
                    a = !1;
                    var b = db.querySelector("[data-dim]");
                    if (b)
                        if (b = b.getBoundingClientRect(), 150 <= b.right - b.left && 150 <= b.bottom - b.top) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.K = a;
            this.H = L("abgcp" + this.creativeIndexSuffix);
            this.G = L("abgc" + this.creativeIndexSuffix);
            this.i = L("abgs" + this.creativeIndexSuffix);
            L("abgl" + this.creativeIndexSuffix);
            this.B = L("abgb" + this.creativeIndexSuffix);
            this.I =
                L("abgac" + this.creativeIndexSuffix);
            L("mute_panel" + this.creativeIndexSuffix);
            this.C = Sa("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.C && !!this.P && !Sa("goog_delegate_disabled") && !this.J;
            if (this.i) a: for (a = this.i, b = a.childNodes, c = 0; c < b.length; c++) {
                const d = b.item(c);
                if ("undefined" != typeof d.tagName && "A" == d.tagName.toUpperCase()) {
                    a = d;
                    break a
                }
            } else a = null;
            this.s = a;
            this.m = this.isDelegateAttributionActive ? this.C : L("cbb" + this.creativeIndexSuffix);
            this.T = this.K ?
                "0" === this.creativeIndexSuffix : !0;
            this.enableDelegateDismissableMenu = !!this.m && fb(this.m, "goog_dismissable_menu");
            this.u = null;
            this.M = 0;
            this.j = this.isDelegateAttributionActive ? this.C : this.V && this.H ? this.H : this.G;
            this.autoExpandOnLoad = !!D(this.h, 19);
            this.adbadgeEnabled = !!D(this.h, 24);
            this.enableNativeJakeUi = !!D(this.h, 27)
        }
    };
    var lb = class {
        constructor(a, b) {
            if (!a) throw Error("bad conv util ctor args");
            this.i = a;
            this.h = b
        }
    };
    var O = (a, b) => {
        a && Wa(b, (c, d) => {
            a.style[d] = c
        })
    };
    class mb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const nb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ob = class {
            constructor(a, b) {
                this.h = a;
                this.i = b
            }
        },
        pb = class {
            constructor(a, b) {
                this.url = a;
                this.O = !!b;
                this.depth = null
            }
        };

    function Q(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function qb(a, b, c, d, f) {
        const e = [];
        Wa(a, function(g, h) {
            (g = rb(g, b, c, d, f)) && e.push(h + "=" + g)
        });
        return e.join(b)
    }

    function rb(a, b, c, d, f) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const e = [];
                for (let g = 0; g < a.length; g++) e.push(rb(a[g], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if ("object" == typeof a) return f = f || 0, 2 > f ? encodeURIComponent(qb(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function sb(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function tb(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = sb(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(e, g) {
            return e - g
        });
        b = null;
        let f = "";
        for (let e = 0; e < a.h.length; e++) {
            const g = a.h[e],
                h = a.i[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = qb(h[l], a.j, ",$");
                if (k) {
                    k = f + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        f = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = f + "trn=" + b);
        return c + a
    }
    class ub {
        constructor() {
            this.j = "&";
            this.i = {};
            this.m = 0;
            this.h = []
        }
    };

    function vb() {
        var a = wb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function xb(a, b, c, d = !1, f) {
        if ((d ? a.h : Math.random()) < (f || .01)) try {
            let e;
            c instanceof ub ? e = c : (e = new ub, Wa(c, (h, l) => {
                var k = e;
                const F = k.m++;
                h = Q(l, h);
                k.h.push(F);
                k.i[F] = h
            }));
            const g = tb(e, "/pagead/gen_204?id=" + b + "&");
            g && Ya(m, g)
        } catch (e) {}
    }
    class yb {
        constructor() {
            this.h = Math.random()
        }
    };
    let R = null;

    function zb() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ab() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    class Bb {
        constructor(a, b) {
            var c = Ab() || zb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const S = m.performance,
        Cb = !!(S && S.mark && S.measure && S.clearMarks),
        T = Ma(() => {
            var a;
            if (a = Cb) {
                var b;
                if (null === R) {
                    R = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (R = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = R;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Db(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Eb {
        constructor() {
            var a = window;
            this.i = [];
            this.j = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = T() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Bb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (Ab() || zb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.h || 2048 <
                    this.i.length || this.i.push(a)
            }
        }
    };

    function Fb(a) {
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

    function Gb(a, b, c) {
        let d, f;
        try {
            a.h && a.h.h ? (f = a.h.start(b.toString(), 3), d = c(), a.h.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                Db(f), c = a.u(b, new mb(e, {
                    message: Fb(e)
                }), void 0, void 0)
            } catch (g) {
                a.s(217, g)
            }
            if (c) window.console ? .error ? .(e);
            else throw e;
        }
        return d
    }

    function Hb(a, b) {
        var c = U;
        return (...d) => Gb(c, a, () => b.apply(void 0, d))
    }
    class Ib {
        constructor(a = null) {
            this.j = wb;
            this.i = null;
            this.u = this.s;
            this.h = a;
            this.m = !1
        }
        pinger() {
            return this.j
        }
        s(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const z = new ub;
                var g = z;
                g.h.push(1);
                g.i[1] = Q("context", a);
                b.error && b.meta && b.id || (b = new mb(b, {
                    message: Fb(b)
                }));
                if (b.msg) {
                    g = z;
                    var h = b.msg.substring(0, 512);
                    g.h.push(2);
                    g.i[2] = Q("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.i) try {
                    this.i(b)
                } catch (A) {}
                if (d) try {
                    d(b)
                } catch (A) {}
                d = z;
                l = [l];
                d.h.push(3);
                d.i[3] = l;
                d = m;
                l = [];
                let aa;
                b = null;
                do {
                    var k = d;
                    try {
                        var F;
                        if (F = !!k && null != k.location.href) b: {
                            try {
                                ea(k.foo);
                                F = !0;
                                break b
                            } catch (A) {}
                            F = !1
                        }
                        var G = F
                    } catch {
                        G = !1
                    }
                    G ? (aa = k.location.href, b = k.document && k.document.referrer || null) : (aa = b, b = null);
                    l.push(new pb(aa || ""));
                    try {
                        d = k.parent
                    } catch (A) {
                        d = null
                    }
                } while (d && k != d);
                for (let A = 0, hb = l.length - 1; A <= hb; ++A) l[A].depth = hb - A;
                k = m;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (G = 1; G < l.length; ++G) {
                        var H = l[G];
                        H.url || (H.url = k.location.ancestorOrigins[G - 1] || "", H.O = !0)
                    }
                var B = l;
                let va = new pb(m.location.href, !1);
                k = null;
                const wa = B.length - 1;
                for (H = wa; 0 <= H; --H) {
                    var C = B[H];
                    !k && nb.test(C.url) && (k = C);
                    if (C.url && !C.O) {
                        va = C;
                        break
                    }
                }
                C = null;
                const Sb = B.length && B[wa].url;
                0 != va.depth && Sb && (C = B[wa]);
                e = new ob(va, C);
                if (e.i) {
                    B = z;
                    var I = e.i.url || "";
                    B.h.push(4);
                    B.i[4] = Q("top", I)
                }
                var xa = {
                    url: e.h.url || ""
                };
                if (e.h.url) {
                    var ya = e.h.url.match(Va),
                        P = ya[1],
                        ib = ya[3],
                        jb = ya[4];
                    I = "";
                    P && (I += P + ":");
                    ib && (I += "//", I += ib, jb && (I += ":" + jb));
                    var kb = I
                } else kb = "";
                P = z;
                xa = [xa, {
                    url: kb
                }];
                P.h.push(5);
                P.i[5] = xa;
                xb(this.j, f, z, this.m, c)
            } catch (z) {
                try {
                    xb(this.j, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Fb(z),
                        url: e && e.h.url
                    }, this.m, c)
                } catch (aa) {}
            }
            return !0
        }
    };
    let wb, U;
    const V = new Eb;
    var Jb = () => {
        window.google_measure_js_timing || (V.h = !1, V.i != V.j.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.i, Db, void 0), V.i.length = 0))
    };
    (a => {
        wb = a ? ? new yb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        vb();
        U = new Ib(V);
        U.i = b => {
            const c = $a;
            0 !== c && (b.jc = String(c), b.shv = ab(c))
        };
        U.m = !0;
        "complete" == window.document.readyState ? Jb() : V.h && J(window, "load", () => {
            Jb()
        })
    })();
    var W = (a, b) => Hb(a, b);

    function Kb(a) {
        if (a.h.s && a.h.X) {
            const b = sa(a.h.h);
            b && null != w(b, 5) && null != w(b, 6) && (a.j = new lb(y(w(b, 5), ""), y(w(b, 19), "")));
            J(a.h.s, "click", W(452, () => {
                if (!a.m && (a.m = !0, a.j)) {
                    var c = a.j;
                    let d = c.i + "&label=closebutton_whythisad_click";
                    d += "&label_instance=1";
                    c.h && (d += "&cid=" + c.h);
                    Ya(window, d)
                }
            }))
        }
    }

    function Lb(a) {
        if (a.h.Y) J(a.h.j, "click", W(365, b => {
            const c = M.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.h.isMutableImpression && a.h.isMobileDevice) J(a.h.j, "click", () => a.i());
        else if (a.h.isMutableImpression && !a.h.isMobileDevice && (a.h.m && (J(a.h.m, "click", () => a.i()), J(a.h.m, "keydown", b => {
                "Enter" !== b.code && "Space" !== b.code || a.i()
            })), a.h.aa && a.h.i && J(a.h.i, "click", () => a.i())), a.h.S) Mb(a);
        else {
            J(a.h.j, "mouseover", W(367, () => Mb(a)));
            J(a.h.j, "mouseout", W(369,
                () => Nb(a, 500)));
            J(a.h.j, "touchstart", W(368, () => Mb(a)), Na);
            const b = W(370, () => Nb(a, 4E3));
            J(a.h.j, "mouseup", b);
            J(a.h.j, "touchend", b);
            J(a.h.j, "touchcancel", b);
            a.h.s && J(a.h.s, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function Mb(a) {
        window.clearTimeout(a.h.u);
        a.h.u = null;
        a.h.i && "block" == a.h.i.style.display || (a.h.M = Date.now(), a.h.B && a.h.i && (a.h.B.style.display = "none", a.h.i.style.display = "block"))
    }

    function Nb(a, b) {
        window.clearTimeout(a.h.u);
        a.h.u = window.setTimeout(() => Ob(a), b)
    }

    function Pb(a) {
        const b = a.h.I;
        b.style.display = "block";
        a.h.enableNativeJakeUi && window.requestAnimationFrame(() => {
            N(b, "abgacfo")
        })
    }

    function Ob(a) {
        window.clearTimeout(a.h.u);
        a.h.u = null;
        a.h.B && a.h.i && (a.h.B.style.display = "block", a.h.i.style.display = "none")
    }
    class Qb {
        constructor(a, b) {
            this.h = a;
            this.i = b;
            this.h.Z || (this.m = !1, this.j = null, !this.h.K || this.h.adbadgeEnabled || this.h.T ? Kb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.h.isMobileDevice ? (O(this.h.B, a), O(this.h.i, a), O(this.h.H, b), O(this.h.G, b)) : O(this.h.G, a)), Lb(this), this.h.enableNativeJakeUi && N(this.h.I, "abgnac"), this.h.isDelegateAttributionActive ? (N(document.body, "goog_delegate_active"), N(document.body, "jaa")) : (!this.h.isMutableImpression && this.h.m && Ua(this.h.m), setTimeout(() => {
                N(document.body,
                    "jar")
            }, this.h.R ? 750 : 100)), this.h.J && N(document.body, "goog_delegate_disabled"), this.h.autoExpandOnLoad && M.addEventListener("load", () => this.i()))
        }
        preventDefault(a) {
            if (this.h.i && "block" == this.h.i.style.display && 500 > Date.now() - this.h.M) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.h.openAttributionInline) {
                var b = this.h.s.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b),
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            } else this.h.W && (b = this.h.s.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function Rb(a) {
        if (!a.h && (a.h = !0, M.goog_delegate_deferred_token = void 0, a.i)) {
            var b = a.j;
            a = La(JSON.stringify(a.i));
            if (!a) throw Error("bad attrdata");
            a = new gb(a);
            new b(a)
        }
    }
    class Tb {
        constructor(a) {
            var b = Ub;
            if (!b) throw Error("bad ctor");
            this.j = b;
            this.i = a;
            this.h = !1;
            Sa("goog_delegate_deferred") ? void 0 !== M.goog_delegate_deferred_token ? Rb(this) : (a = () => {
                Rb(this)
            }, M.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : Rb(this)
        }
    };
    var Vb = (a = []) => {
        m.google_logging_queue || (m.google_logging_queue = []);
        m.google_logging_queue.push([11, a])
    };
    class Wb {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function Xb() {
        const {
            promise: a,
            resolve: b
        } = new Wb;
        return {
            promise: a,
            resolve: b
        }
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Yb(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = Xb();
        a[5] = c;
        b();
        return c
    }

    function Zb(a, b) {
        return Yb(a, () => {
            var c = a.document;
            const d = Xa("SCRIPT", c);
            d.src = b instanceof Ra && b.constructor === Ra ? b.h : "type_error:TrustedResourceUrl";
            var f;
            (f = (f = (d.ownerDocument && d.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? f.nonce || f.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", f);
            (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function $b(a) {
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        if (void 0 === K) {
            var b = null;
            var c = m.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ba,
                        createScript: ba,
                        createScriptURL: ba
                    })
                } catch (d) {
                    m.console && m.console.error(d.message)
                }
                K = b
            } else K = b
        }
        a = (b = K) ? b.createScriptURL(a) : a;
        return new Ra(a, Qa)
    };

    function ac(a) {
        Vb([a]);
        new Tb(a)
    }

    function bc(a) {
        a.h.D ? a.h.D.expandAttributionCard() : (Gb(U, 373, () => {
            Ob(a.i);
            Pb(a.i)
        }), Zb(window, $b(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+y(w(a.h.h,33),"")+"/abg_survey.js"}`)).then(b => {
            b.createAttributionCard(a.h);
            a.h.D = b;
            b.expandAttributionCard()
        }), cb())
    }
    var Ub = class {
        constructor(a) {
            this.h = a;
            this.i = new Qb(this.h, W(359, () => bc(this)))
        }
    };
    $a = 60;
    const cc = bb(60, document.currentScript);
    if (null == cc) throw Error("JSC not found 60");
    const dc = {},
        ec = cc.attributes;
    for (let a = ec.length - 1; 0 <= a; a--) {
        const b = ec[a].name;
        0 === b.indexOf("data-jcp-") && (dc[b.substring(9)] = ec[a].value)
    }
    if (dc["attribution-data"]) ac(JSON.parse(dc["attribution-data"]));
    else {
        var X = ["buildAttribution"],
            Y = m;
        X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || void 0 === ac ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = ac
    };
}).call(this);