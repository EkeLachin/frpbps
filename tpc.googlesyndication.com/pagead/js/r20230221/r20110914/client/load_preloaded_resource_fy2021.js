(function() {
    'use strict';
    let e = [];
    const f = () => {
        const b = e;
        e = [];
        for (const a of b) try {
            a()
        } catch {}
    };

    function g(b = document) {
        return b.createElement("img")
    };

    function h(b = null) {
        return b && "26" === b.getAttribute("data-jc") ? b : document.querySelector('[data-jc="26"]')
    };
    var l = document;
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = () => {
        var b = l.head,
            a = b.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]");
        for (var c = 0; c < a.length; c++) {
            const p = a[c];
            var d = "link",
                k = document;
            d = String(d);
            "application/xhtml+xml" === k.contentType && (d = d.toLowerCase());
            d = k.createElement(d);
            d.setAttribute("rel", "stylesheet");
            d.setAttribute("href", p.getAttribute("href"));
            b.appendChild(d)
        }
        if (0 < a.length && !(.01 < Math.random())) {
            b = (b = h(document.currentScript)) && "true" === b.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" :
                "pagead2.googlesyndication.com";
            a = (a = h(document.currentScript)) && a.getAttribute("data-jc-version") || "unknown";
            b = `https://${b}/pagead/gen_204?id=jca&jc=${26}&version=${a}&sample=${.01}`;
            a = window;
            if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : (a.google_image_requests || (a.google_image_requests = []), c = g(a.document), c.src = b, a.google_image_requests.push(c))
        }
    };
    var n = document;
    "complete" === n.readyState || "interactive" === n.readyState ? (e.push(m), 1 == e.length && (window.Promise ? Promise.resolve().then(f) : window.setImmediate ? setImmediate(f) : setTimeout(f, 0))) : n.addEventListener("DOMContentLoaded", m);
}).call(this);