!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = t(); else if ("function" == typeof define && define.amd)define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.vg = t()
    }
}(function () {
    var t;
    return function t(e, n, r) {
        function i(o, s) {
            if (!n[o]) {
                if (!e[o]) {
                    var u = "function" == typeof require && require;
                    if (!s && u)return u(o, !0);
                    if (a)return a(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var c = n[o] = {exports: {}};
                e[o][0].call(c.exports, function (t) {
                    var n = e[o][1][t];
                    return i(n ? n : t)
                }, c, c.exports, t, e, n, r)
            }
            return n[o].exports
        }

        for (var a = "function" == typeof require && require, o = 0; o < r.length; o++)i(r[o]);
        return i
    }({
        1: [function (t, e, n) {
            e.exports = {
                version: "2.6.3",
                dataflow: t("vega-dataflow"),
                parse: t("./src/parse/"),
                scene: {
                    Bounder: t("./src/scene/Bounder"),
                    Builder: t("./src/scene/Builder"),
                    Encoder: t("./src/scene/Encoder"),
                    GroupBuilder: t("./src/scene/GroupBuilder"),
                    visit: t("./src/scene/visit")
                },
                transforms: t("./src/transforms"),
                Transform: t("./src/transforms/Transform"),
                BatchTransform: t("./src/transforms/BatchTransform"),
                Parameter: t("./src/transforms/Parameter"),
                schema: t("./src/core/schema"),
                config: t("./src/core/config"),
                util: t("./src/util"),
                logging: t("vega-logging"),
                debug: t("vega-logging").debug
            }
        }, {
            "./src/core/config": 91,
            "./src/core/schema": 92,
            "./src/parse/": 97,
            "./src/scene/Bounder": 109,
            "./src/scene/Builder": 110,
            "./src/scene/Encoder": 111,
            "./src/scene/GroupBuilder": 112,
            "./src/scene/visit": 117,
            "./src/transforms": 145,
            "./src/transforms/BatchTransform": 119,
            "./src/transforms/Parameter": 135,
            "./src/transforms/Transform": 140,
            "./src/util": 148,
            "vega-dataflow": 41,
            "vega-logging": 48
        }],
        2: [function (t, e, n) {
        }, {}],
        3: [function (e, n, r) {
            !function (e, i) {
                "object" == typeof r && "undefined" != typeof n ? i(r) : "function" == typeof t && t.amd ? t(["exports"], i) : i(e.d3_dsv = {})
            }(this, function (t) {
                "use strict";
                function e(t) {
                    return new a(t)
                }

                function n(t) {
                    return new Function("d", "return {" + t.map(function (t, e) {
                            return JSON.stringify(t) + ": d[" + e + "]"
                        }).join(",") + "}")
                }

                function r(t, e) {
                    var r = n(t);
                    return function (n, i) {
                        return e(r(n), i, t)
                    }
                }

                function i(t) {
                    var e = Object.create(null), n = [];
                    return t.forEach(function (t) {
                        for (var r in t)r in e || n.push(e[r] = r)
                    }), n
                }

                function a(t) {
                    function e(e) {
                        return e.map(a).join(t)
                    }

                    function a(t) {
                        return o.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
                    }

                    var o = new RegExp('["' + t + "\n]"), s = t.charCodeAt(0);
                    this.parse = function (t, e) {
                        var i, a, o = this.parseRows(t, function (t, o) {
                            return i ? i(t, o - 1) : (a = t, void(i = e ? r(t, e) : n(t)))
                        });
                        return o.columns = a, o
                    }, this.parseRows = function (t, e) {
                        function n() {
                            if (c >= l)return o;
                            if (i)return i = !1, a;
                            var e, n = c;
                            if (34 === t.charCodeAt(n)) {
                                for (var r = n; r++ < l;)if (34 === t.charCodeAt(r)) {
                                    if (34 !== t.charCodeAt(r + 1))break;
                                    ++r
                                }
                                return c = r + 2, e = t.charCodeAt(r + 1), 13 === e ? (i = !0, 10 === t.charCodeAt(r + 2) && ++c) : 10 === e && (i = !0), t.slice(n + 1, r).replace(/""/g, '"')
                            }
                            for (; c < l;) {
                                var u = 1;
                                if (e = t.charCodeAt(c++), 10 === e)i = !0; else if (13 === e)i = !0, 10 === t.charCodeAt(c) && (++c, ++u); else if (e !== s)continue;
                                return t.slice(n, c - u)
                            }
                            return t.slice(n)
                        }

                        for (var r, i, a = {}, o = {}, u = [], l = t.length, c = 0, d = 0; (r = n()) !== o;) {
                            for (var f = []; r !== a && r !== o;)f.push(r), r = n();
                            e && null == (f = e(f, d++)) || u.push(f)
                        }
                        return u
                    }, this.format = function (e, n) {
                        return null == n && (n = i(e)), [n.map(a).join(t)].concat(e.map(function (e) {
                            return n.map(function (t) {
                                return a(e[t])
                            }).join(t)
                        })).join("\n")
                    }, this.formatRows = function (t) {
                        return t.map(e).join("\n")
                    }
                }

                e.prototype = a.prototype;
                var o = e(","), s = e("\t"), u = "0.1.14";
                t.version = u, t.dsv = e, t.csv = o, t.tsv = s
            })
        }, {}],
        4: [function (e, n, r) {
            !function (e, i) {
                "object" == typeof r && "undefined" != typeof n ? i(r) : "function" == typeof t && t.amd ? t("d3-format", ["exports"], i) : i(e.d3_format = {})
            }(this, function (t) {
                "use strict";
                function e(t, e) {
                    if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)return null;
                    var n, r = t.slice(0, n);
                    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
                }

                function n(t) {
                    return t = e(Math.abs(t)), t ? t[1] : NaN
                }

                function r(t, e) {
                    return function (n, r) {
                        for (var i = n.length, a = [], o = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), a.push(n.substring(i -= s, i + s)), !((u += s + 1) > r));)s = t[o = (o + 1) % t.length];
                        return a.reverse().join(e)
                    }
                }

                function i(t, n) {
                    var r = e(t, n);
                    if (!r)return t + "";
                    var i = r[0], a = r[1], o = a - (p = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1, s = i.length;
                    return o === s ? i : o > s ? i + new Array(o - s + 1).join("0") : o > 0 ? i.slice(0, o) + "." + i.slice(o) : "0." + new Array(1 - o).join("0") + e(t, Math.max(0, n + o - 1))[0]
                }

                function a(t, n) {
                    var r = e(t, n);
                    if (!r)return t + "";
                    var i = r[0], a = r[1];
                    return a < 0 ? "0." + new Array(-a).join("0") + i : i.length > a + 1 ? i.slice(0, a + 1) + "." + i.slice(a + 1) : i + new Array(a - i.length + 2).join("0")
                }

                function o(t, e) {
                    t = t.toPrecision(e);
                    t:for (var n, r = t.length, i = 1, a = -1; i < r; ++i)switch (t[i]) {
                        case".":
                            a = n = i;
                            break;
                        case"0":
                            0 === a && (a = i), n = i;
                            break;
                        case"e":
                            break t;
                        default:
                            a > 0 && (a = 0)
                    }
                    return a > 0 ? t.slice(0, a) + t.slice(n + 1) : t
                }

                function s(t) {
                    return new u(t)
                }

                function u(t) {
                    if (!(e = m.exec(t)))throw new Error("invalid format: " + t);
                    var e, n = e[1] || " ", r = e[2] || ">", i = e[3] || "-", a = e[4] || "", o = !!e[5], s = e[6] && +e[6], u = !!e[7], l = e[8] && +e[8].slice(1), c = e[9] || "";
                    "n" === c ? (u = !0, c = "g") : g[c] || (c = ""), (o || "0" === n && "=" === r) && (o = !0, n = "0", r = "="), this.fill = n, this.align = r, this.sign = i, this.symbol = a, this.zero = o, this.width = s, this.comma = u, this.precision = l, this.type = c
                }

                function l(t) {
                    return t
                }

                function c(t) {
                    function e(t) {
                        t = s(t);
                        var e = t.fill, n = t.align, r = t.sign, i = t.symbol, l = t.zero, c = t.width, d = t.comma, f = t.precision, h = t.type, m = "$" === i ? o[0] : "#" === i && /[boxX]/.test(h) ? "0" + h.toLowerCase() : "", y = "$" === i ? o[1] : /[%p]/.test(h) ? "%" : "", _ = g[h], b = !h || /[defgprs%]/.test(h);
                        return f = null == f ? h ? 6 : 12 : /[gprs]/.test(h) ? Math.max(1, Math.min(21, f)) : Math.max(0, Math.min(20, f)), function (t) {
                            var i = m, o = y;
                            if ("c" === h)o = _(t) + o, t = ""; else {
                                t = +t;
                                var s = (t < 0 || 1 / t < 0) && (t *= -1, !0);
                                if (t = _(t, f), s) {
                                    var g, x = -1, w = t.length;
                                    for (s = !1; ++x < w;)if (g = t.charCodeAt(x), 48 < g && g < 58 || "x" === h && 96 < g && g < 103 || "X" === h && 64 < g && g < 71) {
                                        s = !0;
                                        break
                                    }
                                }
                                if (i = (s ? "(" === r ? r : "-" : "-" === r || "(" === r ? "" : r) + i, o = o + ("s" === h ? v[8 + p / 3] : "") + (s && "(" === r ? ")" : ""), b)for (var g, x = -1, w = t.length; ++x < w;)if (g = t.charCodeAt(x), 48 > g || g > 57) {
                                    o = (46 === g ? u + t.slice(x + 1) : t.slice(x)) + o, t = t.slice(0, x);
                                    break
                                }
                            }
                            d && !l && (t = a(t, 1 / 0));
                            var k = i.length + t.length + o.length, M = k < c ? new Array(c - k + 1).join(e) : "";
                            switch (d && l && (t = a(M + t, M.length ? c - o.length : 1 / 0), M = ""), n) {
                                case"<":
                                    return i + t + o + M;
                                case"=":
                                    return i + M + t + o;
                                case"^":
                                    return M.slice(0, k = M.length >> 1) + i + t + o + M.slice(k)
                            }
                            return M + i + t + o
                        }
                    }

                    function i(t, r) {
                        var i = e((t = s(t), t.type = "f", t)), a = 3 * Math.max(-8, Math.min(8, Math.floor(n(r) / 3))), o = Math.pow(10, -a), u = v[8 + a / 3];
                        return function (t) {
                            return i(o * t) + u
                        }
                    }

                    var a = t.grouping && t.thousands ? r(t.grouping, t.thousands) : l, o = t.currency, u = t.decimal;
                    return {format: e, formatPrefix: i}
                }

                function d(t) {
                    return Math.max(0, -n(Math.abs(t)))
                }

                function f(t, e) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(n(e) / 3))) - n(Math.abs(t)))
                }

                function h(t, e) {
                    return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, n(e) - n(t)) + 1
                }

                var p, g = {
                    "": o, "%": function (t, e) {
                        return (100 * t).toFixed(e)
                    }, b: function (t) {
                        return Math.round(t).toString(2)
                    }, c: function (t) {
                        return t + ""
                    }, d: function (t) {
                        return Math.round(t).toString(10)
                    }, e: function (t, e) {
                        return t.toExponential(e)
                    }, f: function (t, e) {
                        return t.toFixed(e)
                    }, g: function (t, e) {
                        return t.toPrecision(e)
                    }, o: function (t) {
                        return Math.round(t).toString(8)
                    }, p: function (t, e) {
                        return a(100 * t, e)
                    }, r: a, s: i, X: function (t) {
                        return Math.round(t).toString(16).toUpperCase()
                    }, x: function (t) {
                        return Math.round(t).toString(16)
                    }
                }, m = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
                u.prototype.toString = function () {
                    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
                };
                var v = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], y = c({
                    decimal: ".",
                    thousands: ",",
                    grouping: [3],
                    currency: ["$", ""]
                }), _ = c({decimal: ",", thousands: ".", grouping: [3], currency: ["", " €"]}), b = c({
                    decimal: ",",
                    thousands: " ",
                    grouping: [3],
                    currency: ["", " Kč"]
                }), x = c({decimal: ",", thousands: "'", grouping: [3], currency: ["", " CHF"]}), w = c({
                    decimal: ",",
                    thousands: ".",
                    grouping: [3],
                    currency: ["", " €"]
                }), k = c({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]}), M = c({
                    decimal: ".",
                    thousands: ",",
                    grouping: [3],
                    currency: ["£", ""]
                }), S = c({decimal: ",", thousands: ".", grouping: [3], currency: ["", " €"]}), T = c({
                    decimal: ",",
                    thousands: " ",
                    grouping: [3],
                    currency: ["", " €"]
                }), E = c({decimal: ",", thousands: " ", grouping: [3], currency: ["", "$"]}), A = c({
                    decimal: ",",
                    thousands: ".",
                    grouping: [3],
                    currency: ["", " €"]
                }), L = c({decimal: ".", thousands: ",", grouping: [3], currency: ["₪", ""]}), C = c({
                    decimal: ",",
                    thousands: " ",
                    grouping: [3],
                    currency: ["", " Ft"]
                }), D = c({decimal: ",", thousands: ".", grouping: [3], currency: ["€", ""]}), P = c({
                    decimal: ".",
                    thousands: ",",
                    grouping: [3],
                    currency: ["", "円"]
                }), I = c({decimal: ".", thousands: ",", grouping: [3], currency: ["₩", ""]}), N = c({
                    decimal: ",",
                    thousands: ".",
                    grouping: [3],
                    currency: ["", " ден."]
                }), O = c({decimal: ",", thousands: ".", grouping: [3], currency: ["€ ", ""]}), z = c({
                    decimal: ",",
                    thousands: ".",
                    grouping: [3],
                    currency: ["", "zł"]
                }), j = c({decimal: ",", thousands: ".", grouping: [3], currency: ["R$", ""]}), F = c({
                    decimal: ",",
                    thousands: " ",
                    grouping: [3],
                    currency: ["", " руб."]
                }), U = c({decimal: ",", thousands: " ", grouping: [3], currency: ["", "SEK"]}), R = c({
                    decimal: ".",
                    thousands: ",",
                    grouping: [3],
                    currency: ["¥", ""]
                }), q = y.format, B = y.formatPrefix, G = "0.4.2";
                t.version = G, t.format = q, t.formatPrefix = B, t.locale = c, t.localeCaEs = _, t.localeCsCz = b, t.localeDeCh = x, t.localeDeDe = w, t.localeEnCa = k, t.localeEnGb = M, t.localeEnUs = y, t.localeEsEs = S, t.localeFiFi = T, t.localeFrCa = E, t.localeFrFr = A, t.localeHeIl = L, t.localeHuHu = C, t.localeItIt = D, t.localeJaJp = P, t.localeKoKr = I, t.localeMkMk = N, t.localeNlNl = O, t.localePlPl = z, t.localePtBr = j, t.localeRuRu = F, t.localeSvSe = U, t.localeZhCn = R, t.formatSpecifier = s, t.precisionFixed = d, t.precisionPrefix = f, t.precisionRound = h
            })
        }, {}],
        5: [function (e, n, r) {
            !function (i, a) {
                "object" == typeof r && "undefined" != typeof n ? a(r, e("d3-time")) : "function" == typeof t && t.amd ? t("d3-time-format", ["exports", "d3-time"], a) : a(i.d3_time_format = {}, i.d3_time)
            }(this, function (t, e) {
                "use strict";
                function n(t) {
                    if (0 <= t.y && t.y < 100) {
                        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                        return e.setFullYear(t.y), e
                    }
                    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
                }

                function r(t) {
                    if (0 <= t.y && t.y < 100) {
                        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                        return e.setUTCFullYear(t.y), e
                    }
                    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
                }

                function i(t) {
                    return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
                }

                function a(t) {
                    function e(t, e) {
                        return function (n) {
                            var r, i, a, o = [], s = -1, u = 0, l = t.length;
                            for (n instanceof Date || (n = new Date(+n)); ++s < l;)37 === t.charCodeAt(s) && (o.push(t.slice(u, s)), null != (i = tt[r = t.charAt(++s)]) ? r = t.charAt(++s) : i = "e" === r ? " " : "0", (a = e[r]) && (r = a(n, i)), o.push(r), u = s + 1);
                            return o.push(t.slice(u, s)), o.join("")
                        }
                    }

                    function a(t, e) {
                        return function (n) {
                            var a = i(1900), s = o(a, t, n += "", 0);
                            if (s != n.length)return null;
                            if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "W" in a || "U" in a) {
                                "w" in a || (a.w = "W" in a ? 1 : 0);
                                var u = "Z" in a ? r(i(a.y)).getUTCDay() : e(i(a.y)).getDay();
                                a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (u + 5) % 7 : a.w + 7 * a.U - (u + 6) % 7
                            }
                            return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, r(a)) : e(a)
                        }
                    }

                    function o(t, e, n, r) {
                        for (var i, a, o = 0, s = e.length, u = n.length; o < s;) {
                            if (r >= u)return -1;
                            if (i = e.charCodeAt(o++), 37 === i) {
                                if (i = e.charAt(o++), a = jt[i in tt ? e.charAt(o++) : i], !a || (r = a(t, n, r)) < 0)return -1
                            } else if (i != n.charCodeAt(r++))return -1
                        }
                        return r
                    }

                    function s(t, e, n) {
                        var r = St.exec(e.slice(n));
                        return r ? (t.p = Tt[r[0].toLowerCase()], n + r[0].length) : -1
                    }

                    function Q(t, e, n) {
                        var r = Lt.exec(e.slice(n));
                        return r ? (t.w = Ct[r[0].toLowerCase()], n + r[0].length) : -1
                    }

                    function et(t, e, n) {
                        var r = Et.exec(e.slice(n));
                        return r ? (t.w = At[r[0].toLowerCase()], n + r[0].length) : -1
                    }

                    function nt(t, e, n) {
                        var r = It.exec(e.slice(n));
                        return r ? (t.m = Nt[r[0].toLowerCase()], n + r[0].length) : -1
                    }

                    function rt(t, e, n) {
                        var r = Dt.exec(e.slice(n));
                        return r ? (t.m = Pt[r[0].toLowerCase()], n + r[0].length) : -1
                    }

                    function it(t, e, n) {
                        return o(t, vt, e, n)
                    }

                    function at(t, e, n) {
                        return o(t, yt, e, n)
                    }

                    function ot(t, e, n) {
                        return o(t, _t, e, n)
                    }

                    function st(t) {
                        return wt[t.getDay()]
                    }

                    function ut(t) {
                        return xt[t.getDay()]
                    }

                    function lt(t) {
                        return Mt[t.getMonth()]
                    }

                    function ct(t) {
                        return kt[t.getMonth()]
                    }

                    function dt(t) {
                        return bt[+(t.getHours() >= 12)]
                    }

                    function ft(t) {
                        return wt[t.getUTCDay()]
                    }

                    function ht(t) {
                        return xt[t.getUTCDay()]
                    }

                    function pt(t) {
                        return Mt[t.getUTCMonth()]
                    }

                    function gt(t) {
                        return kt[t.getUTCMonth()]
                    }

                    function mt(t) {
                        return bt[+(t.getUTCHours() >= 12)]
                    }

                    var vt = t.dateTime, yt = t.date, _t = t.time, bt = t.periods, xt = t.days, wt = t.shortDays, kt = t.months, Mt = t.shortMonths, St = u(bt), Tt = l(bt), Et = u(xt), At = l(xt), Lt = u(wt), Ct = l(wt), Dt = u(kt), Pt = l(kt), It = u(Mt), Nt = l(Mt), Ot = {
                        a: st,
                        A: ut,
                        b: lt,
                        B: ct,
                        c: null,
                        d: M,
                        e: M,
                        H: S,
                        I: T,
                        j: E,
                        L: A,
                        m: L,
                        M: C,
                        p: dt,
                        S: D,
                        U: P,
                        w: I,
                        W: N,
                        x: null,
                        X: null,
                        y: O,
                        Y: z,
                        Z: j,
                        "%": Z
                    }, zt = {
                        a: ft,
                        A: ht,
                        b: pt,
                        B: gt,
                        c: null,
                        d: F,
                        e: F,
                        H: U,
                        I: R,
                        j: q,
                        L: B,
                        m: G,
                        M: $,
                        p: mt,
                        S: H,
                        U: Y,
                        w: V,
                        W: W,
                        x: null,
                        X: null,
                        y: X,
                        Y: J,
                        Z: K,
                        "%": Z
                    }, jt = {
                        a: Q,
                        A: et,
                        b: nt,
                        B: rt,
                        c: it,
                        d: v,
                        e: v,
                        H: _,
                        I: _,
                        j: y,
                        L: w,
                        m: m,
                        M: b,
                        p: s,
                        S: x,
                        U: d,
                        w: c,
                        W: f,
                        x: at,
                        X: ot,
                        y: p,
                        Y: h,
                        Z: g,
                        "%": k
                    };
                    return Ot.x = e(yt, Ot), Ot.X = e(_t, Ot), Ot.c = e(vt, Ot), zt.x = e(yt, zt), zt.X = e(_t, zt), zt.c = e(vt, zt), {
                        format: function (t) {
                            var r = e(t += "", Ot);
                            return r.parse = a(t, n), r.toString = function () {
                                return t
                            }, r
                        }, utcFormat: function (t) {
                            var n = e(t += "", zt);
                            return n.parse = a(t, r), n.toString = function () {
                                return t
                            }, n
                        }
                    }
                }

                function o(t, e, n) {
                    var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
                    return r + (a < n ? new Array(n - a + 1).join(e) + i : i)
                }

                function s(t) {
                    return t.replace(rt, "\\$&")
                }

                function u(t) {
                    return new RegExp("^(?:" + t.map(s).join("|") + ")", "i")
                }

                function l(t) {
                    for (var e = {}, n = -1, r = t.length; ++n < r;)e[t[n].toLowerCase()] = n;
                    return e
                }

                function c(t, e, n) {
                    var r = et.exec(e.slice(n, n + 1));
                    return r ? (t.w = +r[0], n + r[0].length) : -1
                }

                function d(t, e, n) {
                    var r = et.exec(e.slice(n));
                    return r ? (t.U = +r[0], n + r[0].length) : -1
                }

                function f(t, e, n) {
                    var r = et.exec(e.slice(n));
                    return r ? (t.W = +r[0], n + r[0].length) : -1
                }

                function h(t, e, n) {
                    var r = et.exec(e.slice(n, n + 4));
                    return r ? (t.y = +r[0], n + r[0].length) : -1
                }

                function p(t, e, n) {
                    var r = et.exec(e.slice(n, n + 2));
                    return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
                }

                function g(t, e, n) {
                    var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(e.slice(n, n + 6));
                    return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
                }

                function m(t, e, n) {
                    var r = et.exec(e.slice(n, n + 2));
                    return r ? (t.m = r[0] - 1, n + r[0].length) : -1
                }

                function v(t, e, n) {
                    var r = et.exec(e.slice(n, n + 2));
                    return r ? (t.d = +r[0], n + r[0].length) : -1
                }

                function y(t, e, n) {
                    var r = et.exec(e.slice(n, n + 3));
                    return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
                }

                function _(t, e, n) {
                    var r = et.exec(e.slice(n, n + 2));
                    return r ? (t.H = +r[0], n + r[0].length) : -1
                }

                function b(t, e, n) {
                    var r = et.exec(e.slice(n, n + 2));
                    return r ? (t.M = +r[0], n + r[0].length) : -1
                }

                function x(t, e, n) {
                    var r = et.exec(e.slice(n, n + 2));
                    return r ? (t.S = +r[0], n + r[0].length) : -1
                }

                function w(t, e, n) {
                    var r = et.exec(e.slice(n, n + 3));
                    return r ? (t.L = +r[0], n + r[0].length) : -1
                }

                function k(t, e, n) {
                    var r = nt.exec(e.slice(n, n + 1));
                    return r ? n + r[0].length : -1
                }

                function M(t, e) {
                    return o(t.getDate(), e, 2)
                }

                function S(t, e) {
                    return o(t.getHours(), e, 2)
                }

                function T(t, e) {
                    return o(t.getHours() % 12 || 12, e, 2)
                }

                function E(t, n) {
                    return o(1 + e.day.count(e.year(t), t), n, 3)
                }

                function A(t, e) {
                    return o(t.getMilliseconds(), e, 3)
                }

                function L(t, e) {
                    return o(t.getMonth() + 1, e, 2)
                }

                function C(t, e) {
                    return o(t.getMinutes(), e, 2)
                }

                function D(t, e) {
                    return o(t.getSeconds(), e, 2)
                }

                function P(t, n) {
                    return o(e.sunday.count(e.year(t), t), n, 2)
                }

                function I(t) {
                    return t.getDay()
                }

                function N(t, n) {
                    return o(e.monday.count(e.year(t), t), n, 2)
                }

                function O(t, e) {
                    return o(t.getFullYear() % 100, e, 2)
                }

                function z(t, e) {
                    return o(t.getFullYear() % 1e4, e, 4)
                }

                function j(t) {
                    var e = t.getTimezoneOffset();
                    return (e > 0 ? "-" : (e *= -1, "+")) + o(e / 60 | 0, "0", 2) + o(e % 60, "0", 2)
                }

                function F(t, e) {
                    return o(t.getUTCDate(), e, 2)
                }

                function U(t, e) {
                    return o(t.getUTCHours(), e, 2)
                }

                function R(t, e) {
                    return o(t.getUTCHours() % 12 || 12, e, 2)
                }

                function q(t, n) {
                    return o(1 + e.utcDay.count(e.utcYear(t), t), n, 3)
                }

                function B(t, e) {
                    return o(t.getUTCMilliseconds(), e, 3)
                }

                function G(t, e) {
                    return o(t.getUTCMonth() + 1, e, 2)
                }

                function $(t, e) {
                    return o(t.getUTCMinutes(), e, 2)
                }

                function H(t, e) {
                    return o(t.getUTCSeconds(), e, 2)
                }

                function Y(t, n) {
                    return o(e.utcSunday.count(e.utcYear(t), t), n, 2)
                }

                function V(t) {
                    return t.getUTCDay()
                }

                function W(t, n) {
                    return o(e.utcMonday.count(e.utcYear(t), t), n, 2)
                }

                function X(t, e) {
                    return o(t.getUTCFullYear() % 100, e, 2)
                }

                function J(t, e) {
                    return o(t.getUTCFullYear() % 1e4, e, 4)
                }

                function K() {
                    return "+0000"
                }

                function Z() {
                    return "%"
                }

                function Q(t) {
                    return t.toISOString()
                }

                var tt = {
                    "-": "",
                    _: " ",
                    0: "0"
                }, et = /^\s*\d+/, nt = /^%/, rt = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, it = a({
                    dateTime: "%a %b %e %X %Y",
                    date: "%m/%d/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                }), at = a({
                    dateTime: "%A, %e de %B de %Y, %X",
                    date: "%d/%m/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
                    shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
                    months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
                    shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
                }), ot = a({
                    dateTime: "%A, der %e. %B %Y, %X",
                    date: "%d.%m.%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
                }), st = a({
                    dateTime: "%A, der %e. %B %Y, %X",
                    date: "%d.%m.%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
                }), ut = a({
                    dateTime: "%a %b %e %X %Y",
                    date: "%Y-%m-%d",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                }), lt = a({
                    dateTime: "%a %e %b %X %Y",
                    date: "%d/%m/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                }), ct = a({
                    dateTime: "%A, %e de %B de %Y, %X",
                    date: "%d/%m/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
                    shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
                    months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
                    shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
                }), dt = a({
                    dateTime: "%A, %-d. %Bta %Y klo %X",
                    date: "%-d.%-m.%Y",
                    time: "%H:%M:%S",
                    periods: ["a.m.", "p.m."],
                    days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
                    shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                    months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
                    shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
                }), ft = a({
                    dateTime: "%a %e %b %Y %X",
                    date: "%Y-%m-%d",
                    time: "%H:%M:%S",
                    periods: ["", ""],
                    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                    shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
                    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                    shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
                }), ht = a({
                    dateTime: "%A, le %e %B %Y, %X",
                    date: "%d/%m/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                    shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                    shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
                }), pt = a({
                    dateTime: "%A, %e ב%B %Y %X",
                    date: "%d.%m.%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
                    shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
                    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
                    shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
                }), gt = a({
                    dateTime: "%Y. %B %-e., %A %X",
                    date: "%Y. %m. %d.",
                    time: "%H:%M:%S",
                    periods: ["de.", "du."],
                    days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
                    shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
                    months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
                    shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
                }), mt = a({
                    dateTime: "%A %e %B %Y, %X",
                    date: "%d/%m/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                    shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                    shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
                }), vt = a({
                    dateTime: "%Y %b %e %a %X",
                    date: "%Y/%m/%d",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
                    shortDays: ["日", "月", "火", "水", "木", "金", "土"],
                    months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
                    shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                }), yt = a({
                    dateTime: "%Y/%m/%d %a %X",
                    date: "%Y/%m/%d",
                    time: "%H:%M:%S",
                    periods: ["오전", "오후"],
                    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                    shortDays: ["일", "월", "화", "수", "목", "금", "토"],
                    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                    shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                }), _t = a({
                    dateTime: "%A, %e %B %Y г. %X",
                    date: "%d.%m.%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
                    shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                    months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                    shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
                }), bt = a({
                    dateTime: "%a %e %B %Y %T",
                    date: "%d-%m-%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                    shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                    shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
                }), xt = a({
                    dateTime: "%A, %e %B %Y, %X",
                    date: "%d/%m/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                    shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
                    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                    shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."]
                }), wt = a({
                    dateTime: "%A, %e de %B de %Y. %X",
                    date: "%d/%m/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                    shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
                }), kt = a({
                    dateTime: "%A, %e %B %Y г. %X",
                    date: "%d.%m.%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                    shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                    months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                    shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
                }), Mt = a({
                    dateTime: "%A den %d %B %Y %X",
                    date: "%Y-%m-%d",
                    time: "%H:%M:%S",
                    periods: ["fm", "em"],
                    days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                    shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
                }), St = a({
                    dateTime: "%a %b %e %X %Y",
                    date: "%Y/%-m/%-d",
                    time: "%H:%M:%S",
                    periods: ["上午", "下午"],
                    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                }), Tt = "%Y-%m-%dT%H:%M:%S.%LZ";
                Q.parse = function (t) {
                    var e = new Date(t);
                    return isNaN(e) ? null : e
                }, Q.toString = function () {
                    return Tt
                };
                var Et = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Q : it.utcFormat(Tt), At = it.format, Lt = it.utcFormat, Ct = "0.2.1";
                t.version = Ct, t.format = At, t.utcFormat = Lt, t.locale = a, t.localeCaEs = at, t.localeDeCh = ot, t.localeDeDe = st, t.localeEnCa = ut, t.localeEnGb = lt, t.localeEnUs = it, t.localeEsEs = ct, t.localeFiFi = dt, t.localeFrCa = ft, t.localeFrFr = ht, t.localeHeIl = pt, t.localeHuHu = gt, t.localeItIt = mt, t.localeJaJp = vt, t.localeKoKr = yt, t.localeMkMk = _t, t.localeNlNl = bt, t.localePlPl = xt, t.localePtBr = wt, t.localeRuRu = kt, t.localeSvSe = Mt, t.localeZhCn = St, t.isoFormat = Et
            })
        }, {"d3-time": 6}],
        6: [function (e, n, r) {
            !function (e, i) {
                "object" == typeof r && "undefined" != typeof n ? i(r) : "function" == typeof t && t.amd ? t("d3-time", ["exports"], i) : i(e.d3_time = {})
            }(this, function (t) {
                "use strict";
                function e(t, n, r, o) {
                    function s(e) {
                        return t(e = new Date(+e)), e
                    }

                    return s.floor = s, s.round = function (e) {
                        var r = new Date(+e), i = new Date(e - 1);
                        return t(r), t(i), n(i, 1), e - r < i - e ? r : i
                    }, s.ceil = function (e) {
                        return t(e = new Date(e - 1)), n(e, 1), e
                    }, s.offset = function (t, e) {
                        return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                    }, s.range = function (e, r, i) {
                        var a = [];
                        if (e = new Date(e - 1), r = new Date(+r), i = null == i ? 1 : Math.floor(i), !(e < r && i > 0))return a;
                        for (n(e, 1), t(e), e < r && a.push(new Date(+e)); n(e, i), t(e), e < r;)a.push(new Date(+e));
                        return a
                    }, s.filter = function (r) {
                        return e(function (e) {
                            for (; t(e), !r(e);)e.setTime(e - 1)
                        }, function (t, e) {
                            for (; --e >= 0;)for (; n(t, 1), !r(t););
                        })
                    }, r && (s.count = function (e, n) {
                        return i.setTime(+e), a.setTime(+n), t(i), t(a), Math.floor(r(i, a))
                    }, s.every = function (t) {
                        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? s.filter(o ? function (e) {
                            return o(e) % t === 0
                        } : function (e) {
                            return s.count(0, e) % t === 0
                        }) : s : null
                    }), s
                }

                function n(t) {
                    return e(function (e) {
                        e.setHours(0, 0, 0, 0), e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7)
                    }, function (t, e) {
                        t.setDate(t.getDate() + 7 * e)
                    }, function (t, e) {
                        return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
                    })
                }

                function r(t) {
                    return e(function (e) {
                        e.setUTCHours(0, 0, 0, 0), e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7)
                    }, function (t, e) {
                        t.setUTCDate(t.getUTCDate() + 7 * e)
                    }, function (t, e) {
                        return (e - t) / 6048e5
                    })
                }

                var i = new Date, a = new Date, o = e(function () {
                }, function (t, e) {
                    t.setTime(+t + e)
                }, function (t, e) {
                    return e - t
                });
                o.every = function (t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? e(function (e) {
                        e.setTime(Math.floor(e / t) * t)
                    }, function (e, n) {
                        e.setTime(+e + n * t)
                    }, function (e, n) {
                        return (n - e) / t
                    }) : o : null
                };
                var s = e(function (t) {
                    t.setMilliseconds(0)
                }, function (t, e) {
                    t.setTime(+t + 1e3 * e)
                }, function (t, e) {
                    return (e - t) / 1e3
                }, function (t) {
                    return t.getSeconds()
                }), u = e(function (t) {
                    t.setSeconds(0, 0)
                }, function (t, e) {
                    t.setTime(+t + 6e4 * e)
                }, function (t, e) {
                    return (e - t) / 6e4
                }, function (t) {
                    return t.getMinutes()
                }), l = e(function (t) {
                    t.setMinutes(0, 0, 0)
                }, function (t, e) {
                    t.setTime(+t + 36e5 * e)
                }, function (t, e) {
                    return (e - t) / 36e5
                }, function (t) {
                    return t.getHours()
                }), c = e(function (t) {
                    t.setHours(0, 0, 0, 0)
                }, function (t, e) {
                    t.setDate(t.getDate() + e)
                }, function (t, e) {
                    return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
                }, function (t) {
                    return t.getDate() - 1
                }), d = n(0), f = n(1), h = n(2), p = n(3), g = n(4), m = n(5), v = n(6), y = e(function (t) {
                    t.setHours(0, 0, 0, 0), t.setDate(1)
                }, function (t, e) {
                    t.setMonth(t.getMonth() + e)
                }, function (t, e) {
                    return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
                }, function (t) {
                    return t.getMonth()
                }), _ = e(function (t) {
                    t.setHours(0, 0, 0, 0), t.setMonth(0, 1)
                }, function (t, e) {
                    t.setFullYear(t.getFullYear() + e)
                }, function (t, e) {
                    return e.getFullYear() - t.getFullYear()
                }, function (t) {
                    return t.getFullYear()
                }), b = e(function (t) {
                    t.setUTCMilliseconds(0)
                }, function (t, e) {
                    t.setTime(+t + 1e3 * e)
                }, function (t, e) {
                    return (e - t) / 1e3
                }, function (t) {
                    return t.getUTCSeconds()
                }), x = e(function (t) {
                    t.setUTCSeconds(0, 0)
                }, function (t, e) {
                    t.setTime(+t + 6e4 * e)
                }, function (t, e) {
                    return (e - t) / 6e4
                }, function (t) {
                    return t.getUTCMinutes()
                }), w = e(function (t) {
                    t.setUTCMinutes(0, 0, 0)
                }, function (t, e) {
                    t.setTime(+t + 36e5 * e)
                }, function (t, e) {
                    return (e - t) / 36e5
                }, function (t) {
                    return t.getUTCHours()
                }), k = e(function (t) {
                    t.setUTCHours(0, 0, 0, 0)
                }, function (t, e) {
                    t.setUTCDate(t.getUTCDate() + e)
                }, function (t, e) {
                    return (e - t) / 864e5
                }, function (t) {
                    return t.getUTCDate() - 1
                }), M = r(0), S = r(1), T = r(2), E = r(3), A = r(4), L = r(5), C = r(6), D = e(function (t) {
                    t.setUTCHours(0, 0, 0, 0), t.setUTCDate(1)
                }, function (t, e) {
                    t.setUTCMonth(t.getUTCMonth() + e)
                }, function (t, e) {
                    return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
                }, function (t) {
                    return t.getUTCMonth()
                }), P = e(function (t) {
                    t.setUTCHours(0, 0, 0, 0), t.setUTCMonth(0, 1)
                }, function (t, e) {
                    t.setUTCFullYear(t.getUTCFullYear() + e)
                }, function (t, e) {
                    return e.getUTCFullYear() - t.getUTCFullYear()
                }, function (t) {
                    return t.getUTCFullYear()
                }), I = o.range, N = s.range, O = u.range, z = l.range, j = c.range, F = d.range, U = f.range, R = h.range, q = p.range, B = g.range, G = m.range, $ = v.range, H = d.range, Y = y.range, V = _.range, W = o, X = I, J = b.range, K = x.range, Z = w.range, Q = k.range, tt = M.range, et = S.range, nt = T.range, rt = E.range, it = A.range, at = L.range, ot = C.range, st = M.range, ut = D.range, lt = P.range, ct = "0.1.1";
                t.version = ct, t.milliseconds = I, t.seconds = N, t.minutes = O, t.hours = z, t.days = j, t.sundays = F, t.mondays = U, t.tuesdays = R, t.wednesdays = q, t.thursdays = B, t.fridays = G, t.saturdays = $, t.weeks = H, t.months = Y, t.years = V, t.utcMillisecond = W, t.utcMilliseconds = X, t.utcSeconds = J, t.utcMinutes = K, t.utcHours = Z, t.utcDays = Q, t.utcSundays = tt, t.utcMondays = et, t.utcTuesdays = nt, t.utcWednesdays = rt, t.utcThursdays = it, t.utcFridays = at, t.utcSaturdays = ot, t.utcWeeks = st, t.utcMonths = ut, t.utcYears = lt, t.millisecond = o, t.second = s, t.minute = u, t.hour = l, t.day = c, t.sunday = d, t.monday = f, t.tuesday = h, t.wednesday = p, t.thursday = g, t.friday = m, t.saturday = v, t.week = d, t.month = y, t.year = _, t.utcSecond = b, t.utcMinute = x, t.utcHour = w, t.utcDay = k, t.utcSunday = M, t.utcMonday = S, t.utcTuesday = T, t.utcWednesday = E, t.utcThursday = A, t.utcFriday = L, t.utcSaturday = C, t.utcWeek = M, t.utcMonth = D, t.utcYear = P, t.interval = e
            })
        }, {}],
        7: [function (t, e, n) {
            var r = t("./util"), i = t("./time"), a = i.utc, o = e.exports;
            o.$year = r.$func("year", i.year.unit), o.$month = r.$func("month", i.months.unit), o.$date = r.$func("date", i.dates.unit), o.$day = r.$func("day", i.weekdays.unit), o.$hour = r.$func("hour", i.hours.unit), o.$minute = r.$func("minute", i.minutes.unit), o.$second = r.$func("second", i.seconds.unit), o.$utcYear = r.$func("utcYear", a.year.unit), o.$utcMonth = r.$func("utcMonth", a.months.unit), o.$utcDate = r.$func("utcDate", a.dates.unit), o.$utcDay = r.$func("utcDay", a.weekdays.unit), o.$utcHour = r.$func("utcHour", a.hours.unit), o.$utcMinute = r.$func("utcMinute", a.minutes.unit), o.$utcSecond = r.$func("utcSecond", a.seconds.unit)
        }, {"./time": 29, "./util": 30}],
        8: [function (t, e, n) {
            function r() {
                this._cells = {}, this._aggr = [], this._stream = !1
            }

            function i(t) {
                if (a.isArray(t))return t;
                if (null == t)return [];
                var e, n, r = [];
                for (e in t)n = a.array(t[e]), r.push({name: e, ops: n});
                return r
            }

            var a = t("../util"), o = t("./measures"), s = t("./collector"), u = r.Flags = {
                ADD_CELL: 1, MOD_CELL: 2
            }, l = r.prototype;
            l.stream = function (t) {
                return null == t ? this._stream : (this._stream = !!t, this._aggr = [], this)
            }, l.key = function (t) {
                return null == t ? this._key : (this._key = a.$(t), this)
            }, l.groupby = function (t) {
                return this._dims = a.array(t).map(function (t, e) {
                    if (t = a.isString(t) ? {
                            name: t,
                            get: a.$(t)
                        } : a.isFunction(t) ? {
                            name: a.name(t) || t.name || "_" + e,
                            get: t
                        } : t.name && a.isFunction(t.get) ? t : null, null == t)throw"Invalid groupby argument: " + t;
                    return t
                }), this.clear()
            }, l.summarize = function (t) {
                t = i(t), this._count = !0;
                var e, n, r, s, u, l, c, d = this._aggr = [];
                for (r = 0; r < t.length; ++r) {
                    for (s = 0, e = [], n = t[r]; s < n.ops.length; ++s)u = n.ops[s], "count" !== u && (this._count = !1), l = n.as && n.as[s] || u + ("*" === n.name ? "" : "_" + n.name), e.push(o[u](l));
                    c = n.get && a.$(n.get) || ("*" === n.name ? a.identity : a.$(n.name)), d.push({
                        name: n.name,
                        measures: o.create(e, this._stream, c, this._assign)
                    })
                }
                return this.clear()
            }, l.count = function () {
                return this.summarize({"*": "count"})
            }, l._assign = function (t, e, n) {
                t[e] = n
            }, l.clear = function () {
                return this._cells = {}, this
            }, l._cellkey = function (t) {
                var e, n = this._dims, r = n.length, i = String(n[0].get(t));
                for (e = 1; e < r; ++e)i += "|" + n[e].get(t);
                return i
            }, l._cell = function (t) {
                var e = this._dims.length ? this._cellkey(t) : "";
                return this._cells[e] || (this._cells[e] = this._newcell(t, e))
            }, l._newcell = function (t, e) {
                var n, r = {num: 0, tuple: this._newtuple(t, e), flag: u.ADD_CELL, aggs: {}}, i = this._aggr;
                for (n = 0; n < i.length; ++n)r.aggs[i[n].name] = new i[n].measures(r, r.tuple);
                return r.collect && (r.data = new s(this._key)), r
            }, l._newtuple = function (t) {
                var e, n, r = this._dims, i = {};
                for (e = 0, n = r.length; e < n; ++e)i[r[e].name] = r[e].get(t);
                return this._ingest(i)
            }, l._ingest = a.identity, l._add = function (t) {
                var e, n = this._cell(t), r = this._aggr;
                if (n.num += 1, !this._count)for (n.collect && n.data.add(t), e = 0; e < r.length; ++e)n.aggs[r[e].name].add(t);
                n.flag |= u.MOD_CELL, this._on_add && this._on_add(t, n)
            }, l._rem = function (t) {
                var e, n = this._cell(t), r = this._aggr;
                if (n.num -= 1, !this._count)for (n.collect && n.data.rem(t), e = 0; e < r.length; ++e)n.aggs[r[e].name].rem(t);
                n.flag |= u.MOD_CELL, this._on_rem && this._on_rem(t, n)
            }, l._mod = function (t, e) {
                var n, r = this._cell(e), i = this._cell(t), o = this._aggr;
                for (r !== i ? (r.num -= 1, i.num += 1, r.collect && r.data.rem(e), i.collect && i.data.add(t)) : r.collect && !a.isObject(t) && (r.data.rem(e), r.data.add(t)), n = 0; n < o.length; ++n)r.aggs[o[n].name].rem(e), i.aggs[o[n].name].add(t);
                r.flag |= u.MOD_CELL, i.flag |= u.MOD_CELL, this._on_mod && this._on_mod(t, e, r, i)
            }, l._markMod = function (t) {
                var e = this._cell(t);
                e.flag |= u.MOD_CELL
            }, l.result = function () {
                var t, e, n, r = [], i = this._aggr;
                for (n in this._cells) {
                    if (t = this._cells[n], t.num > 0) {
                        for (t.collect && t.data.values(), e = 0; e < i.length; ++e)t.aggs[i[e].name].set();
                        r.push(t.tuple)
                    } else delete this._cells[n];
                    t.flag = 0
                }
                return this._rems = !1, r
            }, l.changes = function (t) {
                var e, n, r, i, a = t || {add: [], rem: [], mod: []}, o = this._aggr;
                for (i in this._cells) {
                    for (e = this._cells[i], n = e.flag, e.collect && e.data.values(), r = 0; r < o.length; ++r)e.aggs[o[r].name].set();
                    e.num <= 0 ? (a.rem.push(e.tuple), delete this._cells[i], this._on_drop && this._on_drop(e)) : (this._on_keep && this._on_keep(e), n & u.ADD_CELL ? a.add.push(e.tuple) : n & u.MOD_CELL && a.mod.push(e.tuple)), e.flag = 0
                }
                return this._rems = !1, a
            }, l.execute = function (t) {
                return this.clear().insert(t).result()
            }, l.insert = function (t) {
                this._consolidate();
                for (var e = 0; e < t.length; ++e)this._add(t[e]);
                return this
            }, l.remove = function (t) {
                if (!this._stream)throw"Aggregator not configured for streaming removes. Call stream(true) prior to calling summarize.";
                for (var e = 0; e < t.length; ++e)this._rem(t[e]);
                return this._rems = !0, this
            }, l._consolidate = function () {
                if (this._rems) {
                    for (var t in this._cells)this._cells[t].collect && this._cells[t].data.values();
                    this._rems = !1
                }
            }, e.exports = r
        }, {"../util": 30, "./collector": 9, "./measures": 11}],
        9: [function (t, e, n) {
            function r(t) {
                this._add = [], this._rem = [], this._key = t || null, this._last = null
            }

            var i = t("../util"), a = t("../stats"), o = "__dl_rem__", s = r.prototype;
            s.add = function (t) {
                this._add.push(t)
            }, s.rem = function (t) {
                this._rem.push(t)
            }, s.values = function () {
                if (this._get = null, 0 === this._rem.length)return this._add;
                var t, e, n, r, s = this._add, u = this._rem, l = this._key, c = Array(s.length - u.length);
                if (i.isObject(u[0]))if (l)for (r = i.toMap(u, l), t = 0, e = 0, n = s.length; t < n; ++t)r.hasOwnProperty(l(s[t])) || (c[e++] = s[t]); else {
                    for (t = 0, n = u.length; t < n; ++t)u[t][o] = 1;
                    for (t = 0, e = 0, n = s.length; t < n; ++t)s[t][o] || (c[e++] = s[t]);
                    for (t = 0, n = u.length; t < n; ++t)delete u[t][o]
                } else for (r = a.count.map(u), t = 0, e = 0, n = s.length; t < n; ++t)r[s[t]] > 0 ? r[s[t]] -= 1 : c[e++] = s[t];
                return this._rem = [], this._add = c
            }, s.extent = function (t) {
                if (this._get !== t || !this._ext) {
                    var e = this.values(), n = a.extent.index(e, t);
                    this._ext = [e[n[0]], e[n[1]]], this._get = t
                }
                return this._ext
            }, s.argmin = function (t) {
                return this.extent(t)[0]
            }, s.argmax = function (t) {
                return this.extent(t)[1]
            }, s.min = function (t) {
                var e = this.extent(t)[0];
                return null != e ? t(e) : +(1 / 0)
            }, s.max = function (t) {
                var e = this.extent(t)[1];
                return null != e ? t(e) : -(1 / 0)
            }, s.quartile = function (t) {
                return this._get === t && this._q || (this._q = a.quartile(this.values(), t), this._get = t), this._q
            }, s.q1 = function (t) {
                return this.quartile(t)[0]
            }, s.q2 = function (t) {
                return this.quartile(t)[1]
            }, s.q3 = function (t) {
                return this.quartile(t)[2]
            }, e.exports = r
        }, {"../stats": 27, "../util": 30}],
        10: [function (t, e, n) {
            var r = t("../util"), i = t("./aggregator");
            e.exports = function () {
                var t = [].reduce.call(arguments, function (t, e) {
                    return t.concat(r.array(e))
                }, []);
                return (new i).groupby(t).summarize({"*": "values"})
            }
        }, {"../util": 30, "./aggregator": 8}],
        11: [function (t, e, n) {
            function r(t) {
                return function (e) {
                    var n = o.extend({init: "", add: "", rem: "", idx: 0}, t);
                    return n.out = e || t.name, n
                }
            }

            function i(t, e) {
                function n(t, r) {
                    function i(e) {
                        t[e] || n(t, t[e] = s[e]())
                    }

                    return r.req && r.req.forEach(i), e && r.str && r.str.forEach(i), t
                }

                var r = t.reduce(n, t.reduce(function (t, e) {
                    return t[e.name] = e, t
                }, {}));
                return o.vals(r).sort(function (t, e) {
                    return t.idx - e.idx
                })
            }

            function a(e, n, r, a) {
                var s = i(e, n), u = "this.cell = cell; this.tuple = t; this.valid = 0; this.missing = 0;", l = "if (v==null) this.missing++; if (!this.isValid(v)) return; ++this.valid;", c = "if (v==null) this.missing--; if (!this.isValid(v)) return; --this.valid;", d = "var t = this.tuple; var cell = this.cell;";
                return s.forEach(function (t) {
                    t.idx < 0 ? (u = t.init + u, l = t.add + l, c = t.rem + c) : (u += t.init, l += t.add, c += t.rem)
                }), e.slice().sort(function (t, e) {
                    return t.idx - e.idx
                }).forEach(function (t) {
                    d += "this.assign(t,'" + t.out + "'," + t.set + ");"
                }), d += "return t;", u = Function("cell", "t", u), u.prototype.assign = a, u.prototype.add = Function("t", "var v = this.get(t);" + l), u.prototype.rem = Function("t", "var v = this.get(t);" + c), u.prototype.set = Function(d), u.prototype.get = r, u.prototype.distinct = t("../stats").count.distinct, u.prototype.isValid = o.isValid, u.fields = e.map(o.$("out")), u
            }

            var o = t("../util"), s = {
                values: r({
                    name: "values",
                    init: "cell.collect = true;",
                    set: "cell.data.values()",
                    idx: -1
                }),
                count: r({name: "count", set: "cell.num"}),
                missing: r({name: "missing", set: "this.missing"}),
                valid: r({name: "valid", set: "this.valid"}),
                sum: r({
                    name: "sum",
                    init: "this.sum = 0;",
                    add: "this.sum += v;",
                    rem: "this.sum -= v;",
                    set: "this.sum"
                }),
                mean: r({
                    name: "mean",
                    init: "this.mean = 0;",
                    add: "var d = v - this.mean; this.mean += d / this.valid;",
                    rem: "var d = v - this.mean; this.mean -= this.valid ? d / this.valid : this.mean;",
                    set: "this.mean"
                }),
                average: r({name: "average", set: "this.mean", req: ["mean"], idx: 1}),
                variance: r({
                    name: "variance",
                    init: "this.dev = 0;",
                    add: "this.dev += d * (v - this.mean);",
                    rem: "this.dev -= d * (v - this.mean);",
                    set: "this.valid > 1 ? this.dev / (this.valid-1) : 0",
                    req: ["mean"],
                    idx: 1
                }),
                variancep: r({
                    name: "variancep",
                    set: "this.valid > 1 ? this.dev / this.valid : 0",
                    req: ["variance"],
                    idx: 2
                }),
                stdev: r({
                    name: "stdev",
                    set: "this.valid > 1 ? Math.sqrt(this.dev / (this.valid-1)) : 0",
                    req: ["variance"],
                    idx: 2
                }),
                stdevp: r({
                    name: "stdevp",
                    set: "this.valid > 1 ? Math.sqrt(this.dev / this.valid) : 0",
                    req: ["variance"],
                    idx: 2
                }),
                stderr: r({
                    name: "stderr",
                    set: "this.valid > 1 ? Math.sqrt(this.dev / (this.valid * (this.valid-1))) : 0",
                    req: ["variance"],
                    idx: 2
                }),
                median: r({name: "median", set: "cell.data.q2(this.get)", req: ["values"], idx: 3}),
                q1: r({name: "q1", set: "cell.data.q1(this.get)", req: ["values"], idx: 3}),
                q3: r({name: "q3", set: "cell.data.q3(this.get)", req: ["values"], idx: 3}),
                distinct: r({
                    name: "distinct",
                    set: "this.distinct(cell.data.values(), this.get)",
                    req: ["values"],
                    idx: 3
                }),
                argmin: r({
                    name: "argmin",
                    add: "if (v < this.min) this.argmin = t;",
                    rem: "if (v <= this.min) this.argmin = null;",
                    set: "this.argmin = this.argmin || cell.data.argmin(this.get)",
                    req: ["min"],
                    str: ["values"],
                    idx: 3
                }),
                argmax: r({
                    name: "argmax",
                    add: "if (v > this.max) this.argmax = t;",
                    rem: "if (v >= this.max) this.argmax = null;",
                    set: "this.argmax = this.argmax || cell.data.argmax(this.get)",
                    req: ["max"],
                    str: ["values"],
                    idx: 3
                }),
                min: r({
                    name: "min",
                    init: "this.min = +Infinity;",
                    add: "if (v < this.min) this.min = v;",
                    rem: "if (v <= this.min) this.min = NaN;",
                    set: "this.min = (isNaN(this.min) ? cell.data.min(this.get) : this.min)",
                    str: ["values"],
                    idx: 4
                }),
                max: r({
                    name: "max",
                    init: "this.max = -Infinity;",
                    add: "if (v > this.max) this.max = v;",
                    rem: "if (v >= this.max) this.max = NaN;",
                    set: "this.max = (isNaN(this.max) ? cell.data.max(this.get) : this.max)",
                    str: ["values"],
                    idx: 4
                }),
                modeskew: r({
                    name: "modeskew",
                    set: "this.dev===0 ? 0 : (this.mean - cell.data.q2(this.get)) / Math.sqrt(this.dev/(this.valid-1))",
                    req: ["mean", "variance", "median"],
                    idx: 5
                })
            };
            s.create = a, e.exports = s
        }, {"../stats": 27, "../util": 30}],
        12: [function (t, e, n) {
            function r(t) {
                if (!t)throw Error("Missing binning options.");
                var e, n, r, s, u, l, c, d = t.maxbins || 15, f = t.base || 10, h = Math.log(f), p = t.div || [5, 2], g = t.min, m = t.max, v = m - g;
                if (t.step)e = t.step; else if (t.steps)e = t.steps[Math.min(t.steps.length - 1, i(t.steps, v / d, 0, t.steps.length))]; else {
                    for (n = Math.ceil(Math.log(d) / h), r = t.minstep || 0, e = Math.max(r, Math.pow(f, Math.round(Math.log(v) / h) - n)); Math.ceil(v / e) > d;)e *= f;
                    for (l = 0; l < p.length; ++l)u = e / p[l], u >= r && v / u <= d && (e = u)
                }
                return u = Math.log(e), s = u >= 0 ? 0 : ~~(-u / h) + 1, c = Math.pow(f, -s - 1), g = Math.min(g, Math.floor(g / e + c) * e), m = Math.ceil(m / e) * e, {
                    start: g,
                    stop: m,
                    step: e,
                    unit: {precision: s},
                    value: a,
                    index: o
                }
            }

            function i(t, e, n, r) {
                for (; n < r;) {
                    var i = n + r >>> 1;
                    l.cmp(t[i], e) < 0 ? n = i + 1 : r = i
                }
                return n
            }

            function a(t) {
                return this.step * Math.floor(t / this.step + d)
            }

            function o(t) {
                return Math.floor((t - this.start) / this.step + d)
            }

            function s(t) {
                return this.unit.date(a.call(this, t))
            }

            function u(t) {
                return o.call(this, this.unit.unit(t))
            }

            var l = t("../util"), c = t("../time"), d = 1e-15;
            r.date = function (t) {
                if (!t)throw Error("Missing date binning options.");
                var e = t.utc ? c.utc : c, n = t.min, i = t.max, a = t.maxbins || 20, o = t.minbins || 4, l = +i - +n, d = t.unit ? e[t.unit] : e.find(l, o, a), f = r({
                    min: null != d.min ? d.min : d.unit(n),
                    max: null != d.max ? d.max : d.unit(i),
                    maxbins: a,
                    minstep: d.minstep,
                    steps: d.step
                });
                return f.unit = d, f.index = u, t.raw || (f.value = s), f
            }, e.exports = r
        }, {"../time": 29, "../util": 30}],
        13: [function (t, e, n) {
            function r(t, e, n) {
                n = o(t, e, n);
                var r = a(n);
                return r ? f.$func("bin", r.unit.unit ? function (t) {
                    return r.value(r.unit.unit(t))
                } : function (t) {
                    return r.value(t)
                })(n.accessor) : n.accessor || f.identity
            }

            function i(t, e, n) {
                n = o(t, e, n);
                var r = a(n);
                return r ? s(t, n.accessor, r) : u(t, n.accessor, n && n.sort)
            }

            function a(t) {
                var e = t.type, n = null;
                return (null == e || p[e]) && ("integer" === e && null == t.minstep && (t.minstep = 1), n = "date" === e ? l.date(t) : l(t)), n
            }

            function o() {
                var t = arguments, e = 0, n = f.isArray(t[e]) ? t[e++] : null, r = f.isFunction(t[e]) || f.isString(t[e]) ? f.$(t[e++]) : null, i = f.extend({}, t[e]);
                if (n && (i.type = i.type || d(n, r), p[i.type])) {
                    var a = h.extent(n, r);
                    i = f.extend({min: a[0], max: a[1]}, i)
                }
                return r && (i.accessor = r), i
            }

            function s(t, e, n) {
                for (var r, i, a = c.range(n.start, n.stop + n.step / 2, n.step).map(function (t) {
                    return {value: n.value(t), count: 0}
                }), o = 0; o < t.length; ++o)if (r = e ? e(t[o]) : t[o], f.isValid(r)) {
                    if (i = n.index(r), i < 0 || i >= a.length || !isFinite(i))continue;
                    a[i].count += 1
                }
                return a.bins = n, a
            }

            function u(t, e, n) {
                var r = h.unique(t, e), i = h.count.map(t, e);
                return r.map(function (t) {
                    return {value: t, count: i[t]}
                }).sort(f.comparator(n ? "-count" : "+value"))
            }

            var l = t("./bins"), c = t("../generate"), d = t("../import/type"), f = t("../util"), h = t("../stats"), p = {
                integer: 1,
                number: 1,
                date: 1
            };
            e.exports = {$bin: r, histogram: i}
        }, {"../generate": 16, "../import/type": 25, "../stats": 27, "../util": 30, "./bins": 12}],
        14: [function (t, e, n) {
            function r(t, e) {
                e = s.extend({separator: " ", minwidth: 8, maxwidth: 15}, e);
                var n = e.fields || s.keys(t[0]), r = u.all(t);
                if (e.start || e.limit) {
                    var i = e.start || 0, a = e.limit ? i + e.limit : t.length;
                    t = t.slice(i, a)
                }
                var o = n.map(function (n) {
                    var i = d[r[n]] || "", a = c("{{" + n + i + "}}"), o = l.max(t, function (t) {
                        return a(t).length
                    });
                    return o = Math.max(Math.min(n.length, e.minwidth), o), e.maxwidth > 0 ? Math.min(o, e.maxwidth) : o
                }), h = n.map(function (t, e) {
                    return s.truncate(s.pad(t, o[e], "center"), o[e])
                }).join(e.separator), p = c(n.map(function (t, e) {
                    return "{{" + t + (d[r[t]] || "") + ("|pad:" + o[e] + "," + (f[r[t]] || "right")) + ("|truncate:" + o[e]) + "}}"
                }).join(e.separator));
                return h + "\n" + t.map(p).join("\n")
            }

            function i(t) {
                t = t ? t.__summary__ ? t : l.summary(t) : this;
                var e, n, r = [];
                for (e = 0, n = t.length; e < n; ++e)r.push("-- " + t[e].field + " --"), "string" === t[e].type || t[e].distinct < 10 ? r.push(o(t[e])) : r.push(a(t[e])), r.push("");
                return r.join("\n")
            }

            function a(t) {
                return ["valid:    " + t.valid, "missing:  " + t.missing, "distinct: " + t.distinct, "min:      " + t.min, "max:      " + t.max, "median:   " + t.median, "mean:     " + t.mean, "stdev:    " + t.stdev, "modeskew: " + t.modeskew].join("\n")
            }

            function o(t) {
                var e = ["valid:    " + t.valid, "missing:  " + t.missing, "distinct: " + t.distinct, "top values: "], n = t.unique, r = s.keys(n).sort(function (t, e) {
                    return n[e] - n[t]
                }).slice(0, 6).map(function (t) {
                    return " '" + t + "' (" + n[t] + ")"
                });
                return e.concat(r).join("\n")
            }

            var s = t("./util"), u = t("./import/type"), l = t("./stats"), c = t("./template");
            e.exports = {table: r, summary: i};
            var d = {
                date: '|time:"%m/%d/%Y %H:%M:%S"',
                number: '|number:".4f"',
                integer: '|number:"d"'
            }, f = {number: "left", integer: "left"}
        }, {"./import/type": 25, "./stats": 27, "./template": 28, "./util": 30}],
        15: [function (t, e, n) {
            function r(t) {
                return t.length > 4 && "locale" + (t[0].toUpperCase() + t[1].toLowerCase() + t[3].toUpperCase() + t[4].toLowerCase())
            }

            function i(t) {
                var e = x.isString(t) ? M[r(t)] : M.locale(t);
                if (null == e)throw Error("Unrecognized locale: " + t);
                S = e
            }

            function a(t) {
                var e = x.isString(t) ? k[r(t)] : k.locale(t);
                if (null == e)throw Error("Unrecognized locale: " + t);
                T = e, v = y = _ = b = null
            }

            function o(t, e) {
                t.length || (t = [0]), null == e && (e = 10);
                var n = t[0], r = t[t.length - 1];
                r < n && (o = r, r = n, n = o);
                var i = r - n || (e = 1, n || r || 1), a = Math.pow(10, Math.floor(Math.log(i / e) / Math.LN10)), o = i / e / a;
                return o >= A ? a *= 10 : o >= L ? a *= 5 : o >= C && (a *= 2), [Math.ceil(n / a) * a, Math.floor(r / a) * a + a / 2, a]
            }

            function s(t, e) {
                return function (n) {
                    var r = t(n), i = r.indexOf(e);
                    if (i < 0)return r;
                    for (var a = u(r, i), o = a < r.length ? r.slice(a) : ""; --a > i;)if ("0" !== r[a]) {
                        ++a;
                        break
                    }
                    return r.slice(0, a) + o
                }
            }

            function u(t, e) {
                var n, r = t.lastIndexOf("e");
                if (r > 0)return r;
                for (r = t.length; --r > e;)if (n = t.charCodeAt(r), n >= 48 && n <= 57)return r + 1
            }

            function l(t) {
                var e = S.format(".1f")(1)[1];
                switch (null == t && (t = ","), t = M.formatSpecifier(t), null == t.precision && (t.precision = 12), t.type) {
                    case"%":
                        t.precision -= 2;
                        break;
                    case"e":
                        t.precision -= 1
                }
                return s(S.format(t), e)
            }

            function c(t, e, n) {
                var r = o(t, e);
                switch (null == n && (n = ",f"), n = M.formatSpecifier(n), n.type) {
                    case"s":
                        var i = Math.max(Math.abs(r[0]), Math.abs(r[1]));
                        return null == n.precision && (n.precision = M.precisionPrefix(r[2], i)), S.formatPrefix(n, i);
                    case"":
                    case"e":
                    case"g":
                    case"p":
                    case"r":
                        null == n.precision && (n.precision = M.precisionRound(r[2], Math.max(Math.abs(r[0]), Math.abs(r[1]))) - ("e" === n.type));
                        break;
                    case"f":
                    case"%":
                        null == n.precision && (n.precision = M.precisionFixed(r[2]) - 2 * ("%" === n.type))
                }
                return S.format(n)
            }

            function d() {
                var t = T.format, e = t(".%L"), n = t(":%S"), r = t("%I:%M"), i = t("%I %p"), a = t("%a %d"), o = t("%b %d"), s = t("%B"), u = t("%Y");
                return function (t) {
                    var l = +t;
                    return (w.second(t) < l ? e : w.minute(t) < l ? n : w.hour(t) < l ? r : w.day(t) < l ? i : w.month(t) < l ? w.week(t) < l ? a : o : w.year(t) < l ? s : u)(t)
                }
            }

            function f() {
                var t = T.utcFormat, e = t(".%L"), n = t(":%S"), r = t("%I:%M"), i = t("%I %p"), a = t("%a %d"), o = t("%b %d"), s = t("%B"), u = t("%Y");
                return function (t) {
                    var l = +t;
                    return (w.utcSecond(t) < l ? e : w.utcMinute(t) < l ? n : w.utcHour(t) < l ? r : w.utcDay(t) < l ? i : w.utcMonth(t) < l ? w.utcWeek(t) < l ? a : o : w.utcYear(t) < l ? s : u)(t)
                }
            }

            function h(t, e) {
                var n = e ? y || (y = T.format("%b")) : v || (v = T.format("%B"));
                return E.setMonth(t), n(E)
            }

            function p(t, e) {
                var n = e ? b || (b = T.format("%a")) : _ || (_ = T.format("%A"));
                return E.setMonth(0), E.setDate(2 + t), n(E)
            }

            function g(t) {
                return Math.floor(t.getMonth() / 3) + 1
            }

            function m(t) {
                return Math.floor(t.getUTCMonth() / 3) + 1
            }

            var v, y, _, b, x = t("./util"), w = t("d3-time"), k = t("d3-time-format"), M = t("d3-format"), S = M, T = k, E = new Date(2e3, 0, 1);
            e.exports = {
                numberLocale: i, number: function (t) {
                    return S.format(t)
                }, numberPrefix: function (t, e) {
                    return S.formatPrefix(t, e)
                }, timeLocale: a, time: function (t) {
                    return T.format(t)
                }, utc: function (t) {
                    return T.utcFormat(t)
                }, locale: function (t) {
                    i(t), a(t)
                }, auto: {
                    number: l, linear: c, time: function () {
                        return d()
                    }, utc: function () {
                        return f()
                    }
                }, month: h, day: p, quarter: g, utcQuarter: m
            };
            var A = Math.sqrt(50), L = Math.sqrt(10), C = Math.sqrt(2)
        }, {"./util": 30, "d3-format": 4, "d3-time": 6, "d3-time-format": 5}],
        16: [function (t, e, n) {
            var r = t("./util"), i = e.exports;
            i.repeat = function (t, e) {
                var n, r = Array(e);
                for (n = 0; n < e; ++n)r[n] = t;
                return r
            }, i.zeros = function (t) {
                return i.repeat(0, t)
            }, i.range = function (t, e, n) {
                if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n == 1 / 0)throw new Error("Infinite range");
                var r, i = [], a = -1;
                if (n < 0)for (; (r = t + n * ++a) > e;)i.push(r); else for (; (r = t + n * ++a) < e;)i.push(r);
                return i
            }, i.random = {}, i.random.uniform = function (t, e) {
                void 0 === e && (e = void 0 === t ? 1 : t, t = 0);
                var n = e - t, r = function () {
                    return t + n * Math.random()
                };
                return r.samples = function (t) {
                    return i.zeros(t).map(r)
                }, r.pdf = function (r) {
                    return r >= t && r <= e ? 1 / n : 0
                }, r.cdf = function (r) {
                    return r < t ? 0 : r > e ? 1 : (r - t) / n
                }, r.icdf = function (e) {
                    return e >= 0 && e <= 1 ? t + e * n : NaN
                }, r
            }, i.random.integer = function (t, e) {
                void 0 === e && (e = t, t = 0);
                var n = e - t, r = function () {
                    return t + Math.floor(n * Math.random())
                };
                return r.samples = function (t) {
                    return i.zeros(t).map(r)
                }, r.pdf = function (r) {
                    return r === Math.floor(r) && r >= t && r < e ? 1 / n : 0
                }, r.cdf = function (r) {
                    var i = Math.floor(r);
                    return i < t ? 0 : i >= e ? 1 : (i - t + 1) / n
                }, r.icdf = function (e) {
                    return e >= 0 && e <= 1 ? t - 1 + Math.floor(e * n) : NaN
                }, r
            }, i.random.normal = function (t, e) {
                t = t || 0, e = e || 1;
                var n, r = function () {
                    var r, i, a = 0, o = 0;
                    if (void 0 !== n)return a = n, n = void 0, a;
                    do a = 2 * Math.random() - 1, o = 2 * Math.random() - 1, r = a * a + o * o; while (0 === r || r > 1);
                    return i = Math.sqrt(-2 * Math.log(r) / r), n = t + o * i * e, t + a * i * e
                };
                return r.samples = function (t) {
                    return i.zeros(t).map(r)
                }, r.pdf = function (n) {
                    var r = Math.exp(Math.pow(n - t, 2) / (-2 * Math.pow(e, 2)));
                    return 1 / (e * Math.sqrt(2 * Math.PI)) * r
                }, r.cdf = function (n) {
                    var r, i = (n - t) / e, a = Math.abs(i);
                    if (a > 37)r = 0; else {
                        var o, s = Math.exp(-a * a / 2);
                        a < 7.07106781186547 ? (o = .0352624965998911 * a + .700383064443688, o = o * a + 6.37396220353165, o = o * a + 33.912866078383, o = o * a + 112.079291497871, o = o * a + 221.213596169931, o = o * a + 220.206867912376, r = s * o, o = .0883883476483184 * a + 1.75566716318264, o = o * a + 16.064177579207, o = o * a + 86.7807322029461, o = o * a + 296.564248779674, o = o * a + 637.333633378831, o = o * a + 793.826512519948, o = o * a + 440.413735824752, r /= o) : (o = a + .65, o = a + 4 / o, o = a + 3 / o, o = a + 2 / o, o = a + 1 / o, r = s / o / 2.506628274631)
                    }
                    return i > 0 ? 1 - r : r
                }, r.icdf = function (n) {
                    if (n <= 0 || n >= 1)return NaN;
                    var r = 2 * n - 1, i = 8 * (Math.PI - 3) / (3 * Math.PI * (4 - Math.PI)), a = 2 / (Math.PI * i) + Math.log(1 - Math.pow(r, 2)) / 2, o = Math.log(1 - r * r) / i, s = (r > 0 ? 1 : -1) * Math.sqrt(Math.sqrt(a * a - o) - a);
                    return t + e * Math.SQRT2 * s
                }, r
            }, i.random.bootstrap = function (t, e) {
                var n = t.filter(r.isValid), a = n.length, o = e ? i.random.normal(0, e) : null, s = function () {
                    return n[~~(Math.random() * a)] + (o ? o() : 0)
                };
                return s.samples = function (t) {
                    return i.zeros(t).map(s)
                }, s
            }
        }, {"./util": 30}],
        17: [function (t, e, n) {
            function r(t, e) {
                if (t) {
                    var n = e.header;
                    t = (n ? n.join(e.delimiter) + "\n" : "") + t
                }
                return a.dsv(e.delimiter).parse(t)
            }

            var i = t("../../util"), a = t("d3-dsv");
            r.delimiter = function (t) {
                var e = {delimiter: t};
                return function (t, n) {
                    return r(t, n ? i.extend(n, e) : e)
                }
            }, e.exports = r
        }, {"../../util": 30, "d3-dsv": 3}],
        18: [function (t, e, n) {
            var r = t("./dsv");
            e.exports = {
                json: t("./json"),
                topojson: t("./topojson"),
                treejson: t("./treejson"),
                dsv: r,
                csv: r.delimiter(","),
                tsv: r.delimiter("\t")
            }
        }, {"./dsv": 17, "./json": 19, "./topojson": 20, "./treejson": 21}],
        19: [function (t, e, n) {
            var r = t("../../util");
            e.exports = function (t, e) {
                var n = r.isObject(t) && !r.isBuffer(t) ? t : JSON.parse(t);
                return e && e.property && (n = r.accessor(e.property)(n)), n
            }
        }, {"../../util": 30}],
        20: [function (t, e, n) {
            var r = t("./json"), i = function (t, e) {
                var n = i.topojson;
                if (null == n)throw Error("TopoJSON library not loaded.");
                var a, o = r(t, e);
                if (e && e.feature) {
                    if (a = o.objects[e.feature])return n.feature(o, a).features;
                    throw Error("Invalid TopoJSON object: " + e.feature)
                }
                if (e && e.mesh) {
                    if (a = o.objects[e.mesh])return [n.mesh(o, o.objects[e.mesh])];
                    throw Error("Invalid TopoJSON object: " + e.mesh)
                }
                throw Error("Missing TopoJSON feature or mesh parameter.")
            };
            i.topojson = t("topojson"), e.exports = i
        }, {"./json": 19, topojson: 31}],
        21: [function (t, e, n) {
            function r(t, e) {
                function n(t, e) {
                    t[i] = e, a.push(t);
                    var o = t[r];
                    if (o)for (var s = 0; s < o.length; ++s)n(o[s], t)
                }

                var r = e && e.children || "children", i = e && e.parent || "parent", a = [];
                return n(t, null), a.root = t, a
            }

            var i = t("./json");
            e.exports = function (t, e) {
                return r(i(t, e), e)
            }
        }, {"./json": 19}],
        22: [function (t, e, n) {
            function r(e) {
                var n = e.url;
                if (!n && e.file)return h + e.file;
                if (e.baseURL && !f.test(n) && (c(n, "/") || "/" === e.baseURL[e.baseURL.length - 1] || (n = "/" + n), n = e.baseURL + n), !i.useXHR && c(n, "//") && (n = (e.defaultProtocol || "http") + ":" + n), e.domainWhiteList) {
                    var r, a;
                    if (i.useXHR) {
                        var o = document.createElement("a");
                        o.href = n, "" === o.host && (o.href = o.href), r = o.hostname.toLowerCase(), a = window.location.hostname
                    } else {
                        var s = t("url").parse(n);
                        r = s.hostname, a = null
                    }
                    if (a !== r) {
                        var u = e.domainWhiteList.some(function (t) {
                            var e = r.length - t.length;
                            return t === r || e > 1 && "." === r[e - 1] && r.lastIndexOf(t) === e
                        });
                        if (!u)throw"URL is not whitelisted: " + n
                    }
                }
                return n
            }

            function i(t, e) {
                return i.loader(t, e)
            }

            function a(t, e) {
                var n, r = e || function (t) {
                        throw t
                    };
                try {
                    n = i.sanitizeUrl(t)
                } catch (t) {
                    return void r(t)
                }
                return n ? i.useXHR ? i.xhr(n, t, e) : c(n, h) ? i.file(n.slice(h.length), t, e) : n.indexOf("://") < 0 ? i.file(n, t, e) : i.http(n, t, e) : void r("Invalid URL: " + t.url)
            }

            function o(t) {
                var e = t.responseType;
                return e && "text" !== e ? t.response : t.responseText
            }

            function s(t, e, n) {
                function r() {
                    var t = s.status;
                    !t && o(s) || t >= 200 && t < 300 || 304 === t ? n(null, s.responseText) : n(s, null)
                }

                var a = !!n, s = new XMLHttpRequest;
                if ("undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), a && ("onload" in s ? s.onload = s.onerror = r : s.onreadystatechange = function () {
                        s.readyState > 3 && r()
                    }), s.open("GET", t, a), s.setRequestHeader) {
                    var u = d.extend({}, i.headers, e.headers);
                    for (var l in u)s.setRequestHeader(l, u[l])
                }
                if (s.send(), !a && o(s))return s.responseText
            }

            function u(e, n, r) {
                var i = t("fs");
                return r ? void i.readFile(e, r) : i.readFileSync(e, "utf8")
            }

            function l(e, n, r) {
                var a = d.extend({}, i.headers, n.headers), o = {url: e, encoding: null, gzip: !0, headers: a};
                return r ? void t("request")(o, function (t, e, n) {
                    t || 200 !== e.statusCode ? (t = t || "Load failed with response code " + e.statusCode + ".", r(t, null)) : r(null, n)
                }) : t("sync-request")("GET", e, o).getBody()
            }

            function c(t, e) {
                return null != t && 0 === t.lastIndexOf(e, 0)
            }

            var d = t("../util"), f = /^([A-Za-z]+:)?\/\//, h = "file://";
            i.loader = a, i.sanitizeUrl = r, i.xhr = s, i.file = u, i.http = l, i.useXHR = "undefined" != typeof XMLHttpRequest, i.headers = {}, e.exports = i
        }, {"../util": 30, fs: 2, request: 2, "sync-request": 2, url: 2}],
        23: [function (t, e, n) {
            function r(t, e) {
                var n = e && e.type || "json";
                return t = s[n](t, e), e && e.parse && i(t, e.parse), t
            }

            function i(t, e) {
                var n, r, i, s, l, c, d = t.length;
                for (e = "auto" === e ? o.inferAll(t) : a.duplicate(e), n = a.keys(e), r = n.map(function (t) {
                    var n = e[t];
                    if (n && 0 === n.indexOf("date:")) {
                        var r = n.split(/:(.+)?/, 2), i = r[1];
                        if (!("'" === i[0] && "'" === i[i.length - 1] || '"' === i[0] && '"' === i[i.length - 1]))throw Error("Format pattern must be quoted: " + i);
                        return i = i.slice(1, -1), i = u(i), function (t) {
                            return i.parse(t)
                        }
                    }
                    if (!o.parsers[n])throw Error("Illegal format pattern: " + t + ":" + n);
                    return o.parsers[n]
                }), s = 0, c = n.length; s < d; ++s)for (i = t[s], l = 0; l < c; ++l)i[n[l]] = r[l](i[n[l]]);
                o.annotation(t, e)
            }

            var a = t("../util"), o = t("./type"), s = t("./formats"), u = t("../format").time;
            r.formats = s, e.exports = r
        }, {"../format": 15, "../util": 30, "./formats": 18, "./type": 25}],
        24: [function (t, e, n) {
            var r = t("../util"), i = t("./load"), a = t("./read");
            e.exports = r.keys(a.formats).reduce(function (t, e) {
                return t[e] = function (t, n, o) {
                    r.isString(t) && (t = {url: t}), 2 === arguments.length && r.isFunction(n) && (o = n, n = void 0), n = r.extend({parse: "auto"}, n), n.type = e;
                    var s = i(t, o ? function (t, e) {
                        if (t)return void o(t, null);
                        try {
                            e = a(e, n), o(null, e)
                        } catch (t) {
                            o(t, null)
                        }
                    } : void 0);
                    if (!o)return a(s, n)
                }, t
            }, {})
        }, {"../util": 30, "./load": 22, "./read": 23}],
        25: [function (t, e, n) {
            function r(t, e) {
                return e ? void(t[l] = e) : t && t[l] || null
            }

            function i(t, e) {
                t = u.array(t), e = u.$(e);
                var n, r, i;
                if (t[l] && (n = e(t[l]), u.isString(n)))return n;
                for (r = 0, i = t.length; !u.isValid(n) && r < i; ++r)n = e ? e(t[r]) : t[r];
                return u.isDate(n) ? "date" : u.isNumber(n) ? "number" : u.isBoolean(n) ? "boolean" : u.isString(n) ? "string" : null
            }

            function a(t, e) {
                if (t.length)return e = e || u.keys(t[0]), e.reduce(function (e, n) {
                    return e[n] = i(t, n), e
                }, {})
            }

            function o(t, e) {
                t = u.array(t), e = u.$(e);
                var n, r, i, a = ["boolean", "integer", "number", "date"];
                for (n = 0; n < t.length; ++n) {
                    for (i = e ? e(t[n]) : t[n], r = 0; r < a.length; ++r)u.isValid(i) && !d[a[r]](i) && (a.splice(r, 1), r -= 1);
                    if (0 === a.length)return "string"
                }
                return a[0]
            }

            function s(t, e) {
                return e = e || u.keys(t[0]), e.reduce(function (e, n) {
                    return e[n] = o(t, n), e
                }, {})
            }

            var u = t("../util"), l = "__types__", c = {
                boolean: u.boolean,
                integer: u.number,
                number: u.number,
                date: u.date,
                string: function (t) {
                    return null == t || "" === t ? null : t + ""
                }
            }, d = {
                boolean: function (t) {
                    return "true" === t || "false" === t || u.isBoolean(t)
                }, integer: function (t) {
                    return d.number(t) && (t = +t) === ~~t
                }, number: function (t) {
                    return !isNaN(+t) && !u.isDate(t)
                }, date: function (t) {
                    return !isNaN(Date.parse(t))
                }
            };
            i.annotation = r, i.all = a, i.infer = o, i.inferAll = s, i.parsers = c, e.exports = i
        }, {"../util": 30}],
        26: [function (t, e, n) {
            var r = t("./util"), i = {
                version: "1.7.2",
                load: t("./import/load"),
                read: t("./import/read"),
                type: t("./import/type"),
                Aggregator: t("./aggregate/aggregator"),
                groupby: t("./aggregate/groupby"),
                bins: t("./bins/bins"),
                $bin: t("./bins/histogram").$bin,
                histogram: t("./bins/histogram").histogram,
                format: t("./format"),
                template: t("./template"),
                time: t("./time")
            };
            r.extend(i, r), r.extend(i, t("./accessor")), r.extend(i, t("./generate")), r.extend(i, t("./stats")), r.extend(i, t("./import/readers")), r.extend(i.format, t("./format-tables")), i.print = {
                table: i.format.table,
                summary: i.format.summary
            }, e.exports = i
        }, {
            "./accessor": 7,
            "./aggregate/aggregator": 8,
            "./aggregate/groupby": 10,
            "./bins/bins": 12,
            "./bins/histogram": 13,
            "./format": 15,
            "./format-tables": 14,
            "./generate": 16,
            "./import/load": 22,
            "./import/read": 23,
            "./import/readers": 24,
            "./import/type": 25,
            "./stats": 27,
            "./template": 28,
            "./time": 29,
            "./util": 30
        }],
        27: [function (t, e, n) {
            function r(t, e, n) {
                var r = t && t.nullh || 0, i = u.random.normal(0, 1), a = l.mean(e, n), o = l.stdev(e, n) / Math.sqrt(l.count.valid(e, n));
                if (0 === o)return a - r === 0 ? 1 : 0;
                var s = (a - r) / o;
                return 2 * i.cdf(-Math.abs(s))
            }

            function i(t, e, n, r) {
                var i, a = r ? e.map(o.$(n)) : e, s = r ? e.map(o.$(r)) : n, u = l.count(a), c = l.count(s), d = Array();
                if (u !== c)throw Error("Array lengths must match.");
                for (i = 0; i < u; ++i)o.isValid(a[i]) && o.isValid(s[i]) && d.push(a[i] - s[i]);
                return l.z.test(d, t && t.nullh || 0)
            }

            function a(t, e, n, r) {
                var i = r ? e.map(o.$(n)) : e, a = r ? e.map(o.$(r)) : n, s = l.count.valid(i), c = l.count.valid(a), d = u.random.normal(0, 1), f = l.mean(i) - l.mean(a) - (t && t.nullh || 0), h = Math.sqrt(l.variance(i) / s + l.variance(a) / c);
                if (0 === h)return 0 === f ? 1 : 0;
                var p = f / h;
                return 2 * d.cdf(-Math.abs(p))
            }

            var o = t("./util"), s = t("./import/type"), u = t("./generate"), l = e.exports;
            l.unique = function (t, e, n) {
                e = o.$(e), n = n || [];
                var r, i, a, s = {};
                for (i = 0, a = t.length; i < a; ++i)r = e ? e(t[i]) : t[i], r in s || (s[r] = 1, n.push(r));
                return n
            }, l.count = function (t) {
                return t && t.length || 0
            }, l.count.valid = function (t, e) {
                e = o.$(e);
                var n, r, i, a = 0;
                for (r = 0, i = t.length; r < i; ++r)n = e ? e(t[r]) : t[r], o.isValid(n) && (a += 1);
                return a
            }, l.count.missing = function (t, e) {
                e = o.$(e);
                var n, r, i, a = 0;
                for (r = 0, i = t.length; r < i; ++r)n = e ? e(t[r]) : t[r], null == n && (a += 1);
                return a
            }, l.count.distinct = function (t, e) {
                e = o.$(e);
                var n, r, i, a = {}, s = 0;
                for (r = 0, i = t.length; r < i; ++r)n = e ? e(t[r]) : t[r], n in a || (a[n] = 1, s += 1);
                return s
            }, l.count.map = function (t, e) {
                e = o.$(e);
                var n, r, i, a = {};
                for (r = 0, i = t.length; r < i; ++r)n = e ? e(t[r]) : t[r], a[n] = n in a ? a[n] + 1 : 1;
                return a
            }, l.median = function (t, e) {
                return e && (t = t.map(o.$(e))), t = t.filter(o.isValid).sort(o.cmp), l.quantile(t, .5)
            }, l.quartile = function (t, e) {
                e && (t = t.map(o.$(e))), t = t.filter(o.isValid).sort(o.cmp);
                var n = l.quantile;
                return [n(t, .25), n(t, .5), n(t, .75)]
            }, l.quantile = function (t, e, n) {
                void 0 === n && (n = e, e = o.identity), e = o.$(e);
                var r = (t.length - 1) * n + 1, i = Math.floor(r), a = +e(t[i - 1]), s = r - i;
                return s ? a + s * (e(t[i]) - a) : a
            }, l.sum = function (t, e) {
                e = o.$(e);
                for (var n, r = 0, i = 0, a = t.length; i < a; ++i)n = e ? e(t[i]) : t[i], o.isValid(n) && (r += n);
                return r
            }, l.mean = function (t, e) {
                e = o.$(e);
                var n, r, i, a, s, u = 0;
                for (r = 0, a = 0, i = t.length; r < i; ++r)s = e ? e(t[r]) : t[r], o.isValid(s) && (n = s - u, u += n / ++a);
                return u
            }, l.mean.geometric = function (t, e) {
                e = o.$(e);
                var n, r, i, a, s = 1;
                for (a = 0, n = 0, r = t.length; a < r; ++a)if (i = e ? e(t[a]) : t[a], o.isValid(i)) {
                    if (i <= 0)throw Error("Geometric mean only defined for positive values.");
                    s *= i, ++n
                }
                return s = n > 0 ? Math.pow(s, 1 / n) : 0
            }, l.mean.harmonic = function (t, e) {
                e = o.$(e);
                var n, r, i, a, s = 0;
                for (a = 0, n = 0, r = t.length; a < r; ++a)i = e ? e(t[a]) : t[a], o.isValid(i) && (s += 1 / i, ++n);
                return n / s
            }, l.variance = function (t, e) {
                if (e = o.$(e), !o.isArray(t) || t.length < 2)return 0;
                var n, r, i, a, s = 0, u = 0;
                for (r = 0, i = 0; r < t.length; ++r)a = e ? e(t[r]) : t[r], o.isValid(a) && (n = a - s, s += n / ++i, u += n * (a - s));
                return u /= i - 1
            }, l.stdev = function (t, e) {
                return Math.sqrt(l.variance(t, e))
            }, l.modeskew = function (t, e) {
                var n = l.mean(t, e), r = l.median(t, e), i = l.stdev(t, e);
                return 0 === i ? 0 : (n - r) / i
            }, l.min = function (t, e) {
                return l.extent(t, e)[0]
            }, l.max = function (t, e) {
                return l.extent(t, e)[1]
            }, l.extent = function (t, e) {
                e = o.$(e);
                var n, r, i, a, s = t.length;
                for (a = 0; a < s; ++a)if (i = e ? e(t[a]) : t[a], o.isValid(i)) {
                    n = r = i;
                    break
                }
                for (; a < s; ++a)i = e ? e(t[a]) : t[a], o.isValid(i) && (i < n && (n = i), i > r && (r = i));
                return [n, r]
            }, l.extent.index = function (t, e) {
                e = o.$(e);
                var n, r, i, a, s = -1, u = -1, l = t.length;
                for (a = 0; a < l; ++a)if (i = e ? e(t[a]) : t[a], o.isValid(i)) {
                    n = r = i, s = u = a;
                    break
                }
                for (; a < l; ++a)i = e ? e(t[a]) : t[a], o.isValid(i) && (i < n && (n = i, s = a), i > r && (r = i, u = a));
                return [s, u]
            }, l.dot = function (t, e, n) {
                var r, i, a = 0;
                if (n)for (e = o.$(e), n = o.$(n), r = 0; r < t.length; ++r)i = e(t[r]) * n(t[r]), i === i && (a += i); else {
                    if (t.length !== e.length)throw Error("Array lengths must match.");
                    for (r = 0; r < t.length; ++r)i = t[r] * e[r], i === i && (a += i)
                }
                return a
            }, l.dist = function (t, e, n, r) {
                var i, a, s = o.isFunction(n) || o.isString(n), u = t, l = s ? t : e, c = s ? r : n, d = 2 === c || null == c, f = t.length, h = 0;
                for (s && (e = o.$(e), n = o.$(n)), a = 0; a < f; ++a)i = s ? e(u[a]) - n(l[a]) : u[a] - l[a], h += d ? i * i : Math.pow(Math.abs(i), c);
                return d ? Math.sqrt(h) : Math.pow(h, 1 / c)
            }, l.cohensd = function (t, e, n) {
                var r = n ? t.map(o.$(e)) : t, i = n ? t.map(o.$(n)) : e, a = l.mean(r), s = l.mean(i), u = l.count.valid(r), c = l.count.valid(i);
                if (u + c - 2 <= 0)return 0;
                var d = l.variance(r), f = l.variance(i), h = Math.sqrt(((u - 1) * d + (c - 1) * f) / (u + c - 2));
                return 0 === h ? 0 : (a - s) / h
            }, l.covariance = function (t, e, n) {
                var r, i, a, s, u, c = n ? t.map(o.$(e)) : t, d = n ? t.map(o.$(n)) : e, f = c.length, h = l.mean(c), p = l.mean(d), g = 0, m = 0;
                if (f !== d.length)throw Error("Input lengths must match.");
                for (r = 0; r < f; ++r)if (i = c[r], s = o.isValid(i), a = d[r], u = o.isValid(a), s && u)g += (i - h) * (a - p), ++m; else if (s || u)throw Error("Valid values must align.");
                return g / (m - 1)
            }, l.rank = function (t, e) {
                e = o.$(e) || o.identity;
                var n, r, i, a = t.map(function (t, n) {
                    return {idx: n, val: e(t)}
                }).sort(o.comparator("val")), s = t.length, u = Array(s), l = -1, c = {};
                for (n = 0; n < s; ++n) {
                    if (r = a[n].val, l < 0 && c === r)l = n - 1; else if (l > -1 && c !== r) {
                        for (i = 1 + (n - 1 + l) / 2; l < n; ++l)u[a[l].idx] = i;
                        l = -1
                    }
                    u[a[n].idx] = n + 1, c = r
                }
                if (l > -1)for (i = 1 + (s - 1 + l) / 2; l < s; ++l)u[a[l].idx] = i;
                return u
            }, l.cor = function (t, e, n) {
                var r = n;
                n = r ? t.map(o.$(n)) : e, e = r ? t.map(o.$(e)) : t;
                var i = l.dot(e, n), a = l.mean(e), s = l.mean(n), u = l.stdev(e), c = l.stdev(n), d = t.length;
                return (i - d * a * s) / ((d - 1) * u * c)
            }, l.cor.rank = function (t, e, n) {
                var r, i, a, o = n ? l.rank(t, e) : l.rank(t), s = n ? l.rank(t, n) : l.rank(e), u = t.length;
                for (r = 0, i = 0; r < u; ++r)a = o[r] - s[r], i += a * a;
                return 1 - 6 * i / (u * (u * u - 1))
            }, l.cor.dist = function (t, e, n) {
                var r, i, a, s, u = n ? t.map(o.$(e)) : t, c = n ? t.map(o.$(n)) : e, d = l.dist.mat(u), f = l.dist.mat(c), h = d.length;
                for (r = 0, i = 0, a = 0, s = 0; r < h; ++r)i += d[r] * d[r], a += f[r] * f[r], s += d[r] * f[r];
                return Math.sqrt(s / Math.sqrt(i * a))
            }, l.linearRegression = function (t, e, n) {
                var r, i, a = n ? t.map(o.$(e)) : t, s = n ? t.map(o.$(n)) : e, u = a.length, c = l.covariance(a, s), d = l.stdev(a), f = l.stdev(s), h = c / (d * d), p = l.mean(s) - h * l.mean(a), g = {
                    slope: h,
                    intercept: p,
                    R: c / (d * f),
                    rss: 0
                };
                for (i = 0; i < u; ++i)o.isValid(a[i]) && o.isValid(s[i]) && (r = h * a[i] + p - s[i], g.rss += r * r);
                return g
            }, l.bootstrap = {}, l.bootstrap.ci = function (t, e, n, r, i) {
                var a, s, c, d, f, h, p;
                for (o.isFunction(e) || o.isString(e) ? (a = t.map(o.$(e)), s = n, c = r, d = i) : (a = t, s = e, c = n, d = r), s = s ? +s : 1e3, c = c || .05,
                         f = u.random.bootstrap(a, d), p = 0, h = Array(s); p < s; ++p)h[p] = l.mean(f.samples(a.length));
                return h.sort(o.numcmp), [l.quantile(h, c / 2), l.quantile(h, 1 - c / 2)]
            }, l.z = {}, l.z.ci = function (t, e, n) {
                var r = t, i = e;
                (o.isFunction(e) || o.isString(e)) && (r = t.map(o.$(e)), i = n), i = i || .05;
                var a = .05 === i ? 1.96 : u.random.normal(0, 1).icdf(1 - i / 2), s = l.mean(r), c = l.stdev(r) / Math.sqrt(l.count.valid(r));
                return [s - a * c, s + a * c]
            }, l.z.test = function (t, e, n, s) {
                return o.isFunction(n) || o.isString(n) ? (s && s.paired ? i : a)(s, t, e, n) : o.isArray(e) ? (n && n.paired ? i : a)(n, t, e) : o.isFunction(e) || o.isString(e) ? r(n, t, e) : r(e, t)
            }, l.dist.mat = function (t) {
                var e, n, r, i = t.length, a = i * i, o = Array(a), s = u.zeros(i), l = 0;
                for (n = 0; n < i; ++n)for (o[n * i + n] = 0, r = n + 1; r < i; ++r)o[n * i + r] = e = Math.abs(t[n] - t[r]), o[r * i + n] = e, s[n] += e, s[r] += e;
                for (n = 0; n < i; ++n)l += s[n], s[n] /= i;
                for (l /= a, n = 0; n < i; ++n)for (r = n; r < i; ++r)o[n * i + r] += l - s[n] - s[r], o[r * i + n] = o[n * i + r];
                return o
            }, l.entropy = function (t, e) {
                e = o.$(e);
                var n, r, i = 0, a = 0, s = t.length;
                for (n = 0; n < s; ++n)i += e ? e(t[n]) : t[n];
                if (0 === i)return 0;
                for (n = 0; n < s; ++n)r = (e ? e(t[n]) : t[n]) / i, r && (a += r * Math.log(r));
                return -a / Math.LN2
            }, l.mutual = function (t, e, n, r) {
                var i, a, s, u = r ? t.map(o.$(e)) : t, l = r ? t.map(o.$(n)) : e, c = r ? t.map(o.$(r)) : n, d = {}, f = {}, h = c.length, p = 0, g = 0, m = 0;
                for (s = 0; s < h; ++s)d[u[s]] = 0, f[l[s]] = 0;
                for (s = 0; s < h; ++s)d[u[s]] += c[s], f[l[s]] += c[s], p += c[s];
                for (a = 1 / (p * Math.LN2), s = 0; s < h; ++s)0 !== c[s] && (i = p * c[s] / (d[u[s]] * f[l[s]]), g += c[s] * a * Math.log(i), m += c[s] * a * Math.log(c[s] / p));
                return [g, 1 + g / m]
            }, l.mutual.info = function (t, e, n, r) {
                return l.mutual(t, e, n, r)[0]
            }, l.mutual.dist = function (t, e, n, r) {
                return l.mutual(t, e, n, r)[1]
            }, l.profile = function (t, e) {
                var n, r, i, a, u, c = 0, d = 0, f = 0, h = 0, p = null, g = null, m = 0, v = [], y = {};
                for (i = 0; i < t.length; ++i)a = e ? e(t[i]) : t[i], y[a] = a in y ? y[a] + 1 : (h += 1, 1), null == a ? ++f : o.isValid(a) && (u = "string" == typeof a ? a.length : a, (null === p || u < p) && (p = u), (null === g || u > g) && (g = u), n = u - c, c += n / ++d, m += n * (u - c), v.push(u));
                return m /= d - 1, r = Math.sqrt(m), v.sort(o.cmp), {
                    type: s(t, e),
                    unique: y,
                    count: t.length,
                    valid: d,
                    missing: f,
                    distinct: h,
                    min: p,
                    max: g,
                    mean: c,
                    stdev: r,
                    median: a = l.quantile(v, .5),
                    q1: l.quantile(v, .25),
                    q3: l.quantile(v, .75),
                    modeskew: 0 === r ? 0 : (c - a) / r
                }
            }, l.summary = function (t, e) {
                e = e || o.keys(t[0]);
                var n = e.map(function (e) {
                    var n = l.profile(t, o.$(e));
                    return n.field = e, n
                });
                return n.__summary__ = !0, n
            }
        }, {"./generate": 16, "./import/type": 25, "./util": 30}],
        28: [function (t, e, n) {
            function r(t) {
                var e = i(t, "d");
                return e = "var __t; return " + e + ";", new Function("d", e).bind(d)
            }

            function i(t, e, n) {
                e = e || "obj";
                var r = 0, i = "'", s = f;
                return t.replace(s, function (s, u, l) {
                    return i += t.slice(r, l).replace(m, o), r = l + s.length, u && (i += "'\n+((__t=(" + a(u, e, n) + "))==null?'':__t)+\n'"), s
                }), i + "'"
            }

            function a(t, e, n) {
                function i(t) {
                    return t = t || "", d ? (d = !1, f = "String(" + f + ")" + t) : f += t, f
                }

                function a() {
                    return "(typeof " + f + '==="number"?new Date(' + f + "):" + f + ")"
                }

                function o(t) {
                    var e = b[0];
                    if (!("'" === e[0] && "'" === e[e.length - 1] || '"' === e[0] && '"' === e[e.length - 1]))throw Error("Format pattern must be quoted: " + e);
                    e = e.slice(1, -1), v = s(e, t), d = !1;
                    var n = "number" === t ? f : a();
                    f = "this.formats[" + v + "](" + n + ")"
                }

                var u = t.match(h), c = u.shift().trim(), d = !0;
                n && (n[c] = 1);
                for (var f = r.property(e, c), g = 0; g < u.length; ++g) {
                    var m, v, y, _ = u[g], b = null;
                    switch ((m = _.indexOf(":")) > 0 && (_ = _.slice(0, m), b = u[g].slice(m + 1).match(p).map(function (t) {
                        return t.trim()
                    })), _ = _.trim()) {
                        case"length":
                            i(".length");
                            break;
                        case"lower":
                            i(".toLowerCase()");
                            break;
                        case"upper":
                            i(".toUpperCase()");
                            break;
                        case"lower-locale":
                            i(".toLocaleLowerCase()");
                            break;
                        case"upper-locale":
                            i(".toLocaleUpperCase()");
                            break;
                        case"trim":
                            i(".trim()");
                            break;
                        case"left":
                            v = l.number(b[0]), i(".slice(0," + v + ")");
                            break;
                        case"right":
                            v = l.number(b[0]), i(".slice(-" + v + ")");
                            break;
                        case"mid":
                            v = l.number(b[0]), y = v + l.number(b[1]), i(".slice(+" + v + "," + y + ")");
                            break;
                        case"slice":
                            v = l.number(b[0]), i(".slice(" + v + (b.length > 1 ? "," + l.number(b[1]) : "") + ")");
                            break;
                        case"truncate":
                            v = l.number(b[0]), y = b[1], y = "left" !== y && "middle" !== y && "center" !== y ? "right" : y, f = "this.truncate(" + i() + "," + v + ",'" + y + "')";
                            break;
                        case"pad":
                            v = l.number(b[0]), y = b[1], y = "left" !== y && "middle" !== y && "center" !== y ? "right" : y, f = "this.pad(" + i() + "," + v + ",'" + y + "')";
                            break;
                        case"number":
                            o("number");
                            break;
                        case"time":
                            o("time");
                            break;
                        case"time-utc":
                            o("utc");
                            break;
                        case"month":
                            f = "this.month(" + f + ")";
                            break;
                        case"month-abbrev":
                            f = "this.month(" + f + ",true)";
                            break;
                        case"day":
                            f = "this.day(" + f + ")";
                            break;
                        case"day-abbrev":
                            f = "this.day(" + f + ",true)";
                            break;
                        case"quarter":
                            f = "this.quarter(" + f + ")";
                            break;
                        case"quarter-utc":
                            f = "this.utcQuarter(" + f + ")";
                            break;
                        default:
                            throw Error("Unrecognized template filter: " + _)
                    }
                }
                return f
            }

            function o(t) {
                return "\\" + g[t]
            }

            function s(t, e) {
                var n = e + ":" + t;
                if (null == d.format_map[n]) {
                    var r = c[e](t), i = d.formats.length;
                    return d.formats.push(r), d.format_map[n] = i, i
                }
                return d.format_map[n]
            }

            function u(t, e) {
                return d.formats[s(t, e)]
            }

            var l = t("./util"), c = t("./format"), d = {
                formats: [],
                format_map: {},
                truncate: l.truncate,
                pad: l.pad,
                day: c.day,
                month: c.month,
                quarter: c.quarter,
                utcQuarter: c.utcQuarter
            };
            r.source = i, r.context = d, r.format = u, e.exports = r, r.clearFormatCache = function () {
                d.formats = [], d.format_map = {}
            }, r.property = function (t, e) {
                var n = l.field(e).map(l.str).join("][");
                return t + "[" + n + "]"
            };
            var f = /\{\{(.+?)\}\}|$/g, h = /(?:"[^"]*"|\'[^\']*\'|[^\|"]+|[^\|\']+)+/g, p = /(?:"[^"]*"|\'[^\']*\'|[^,"]+|[^,\']+)+/g, g = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, m = /\\|'|\r|\n|\u2028|\u2029/g
        }, {"./format": 15, "./util": 30}],
        29: [function (t, e, n) {
            function r(t) {
                return l.setTime(+t), l
            }

            function i(t, e, n, r, i, a) {
                var o = {type: t, date: e, unit: n};
                return r ? o.step = r : o.minstep = 1, null != i && (o.min = i), null != a && (o.max = a), o
            }

            function a(t, e, n, r, a, o) {
                return i(t, function (t) {
                    return e.offset(n, t)
                }, function (t) {
                    return e.count(n, t)
                }, r, a, o)
            }

            function o(t, e, n, r) {
                var i, a, o, s = p[0];
                for (i = 1, a = p.length; i < a; ++i)if (s = p[i], e > s[0]) {
                    if (o = e / s[0], o > r)return t[p[i - 1][1]];
                    if (o >= n)return t[s[1]]
                }
                return t[p[a - 1][1]]
            }

            function s(t) {
                var e, n, r = {};
                for (e = 0, n = t.length; e < n; ++e)r[t[e].type] = t[e];
                return r.find = function (e, n, r) {
                    return o(t, e, n, r)
                }, r
            }

            var u = t("d3-time"), l = new Date, c = new Date(0, 0, 1).setFullYear(0), d = new Date(Date.UTC(0, 0, 1)).setUTCFullYear(0), f = [a("second", u.second, c), a("minute", u.minute, c), a("hour", u.hour, c), a("day", u.day, c, [1, 7]), a("month", u.month, c, [1, 3, 6]), a("year", u.year, c), i("seconds", function (t) {
                return new Date(1970, 0, 1, 0, 0, t)
            }, function (t) {
                return r(t).getSeconds()
            }, null, 0, 59), i("minutes", function (t) {
                return new Date(1970, 0, 1, 0, t)
            }, function (t) {
                return r(t).getMinutes()
            }, null, 0, 59), i("hours", function (t) {
                return new Date(1970, 0, 1, t)
            }, function (t) {
                return r(t).getHours()
            }, null, 0, 23), i("weekdays", function (t) {
                return new Date(1970, 0, 4 + t)
            }, function (t) {
                return r(t).getDay()
            }, [1], 0, 6), i("dates", function (t) {
                return new Date(1970, 0, t)
            }, function (t) {
                return r(t).getDate()
            }, [1], 1, 31), i("months", function (t) {
                return new Date(1970, t % 12, 1)
            }, function (t) {
                return r(t).getMonth()
            }, [1], 0, 11)], h = [a("second", u.utcSecond, d), a("minute", u.utcMinute, d), a("hour", u.utcHour, d), a("day", u.utcDay, d, [1, 7]), a("month", u.utcMonth, d, [1, 3, 6]), a("year", u.utcYear, d), i("seconds", function (t) {
                return new Date(Date.UTC(1970, 0, 1, 0, 0, t))
            }, function (t) {
                return r(t).getUTCSeconds()
            }, null, 0, 59), i("minutes", function (t) {
                return new Date(Date.UTC(1970, 0, 1, 0, t))
            }, function (t) {
                return r(t).getUTCMinutes()
            }, null, 0, 59), i("hours", function (t) {
                return new Date(Date.UTC(1970, 0, 1, t))
            }, function (t) {
                return r(t).getUTCHours()
            }, null, 0, 23), i("weekdays", function (t) {
                return new Date(Date.UTC(1970, 0, 4 + t))
            }, function (t) {
                return r(t).getUTCDay()
            }, [1], 0, 6), i("dates", function (t) {
                return new Date(Date.UTC(1970, 0, t))
            }, function (t) {
                return r(t).getUTCDate()
            }, [1], 1, 31), i("months", function (t) {
                return new Date(Date.UTC(1970, t % 12, 1))
            }, function (t) {
                return r(t).getUTCMonth()
            }, [1], 0, 11)], p = [[31536e6, 5], [7776e6, 4], [2592e6, 4], [12096e5, 3], [6048e5, 3], [1728e5, 3], [864e5, 3], [432e5, 2], [216e5, 2], [108e5, 2], [36e5, 2], [18e5, 1], [9e5, 1], [3e5, 1], [6e4, 1], [3e4, 0], [15e3, 0], [5e3, 0], [1e3, 0]];
            e.exports = s(f), e.exports.utc = s(h)
        }, {"d3-time": 6}],
        30: [function (t, e, n) {
            (function (t) {
                function n(t, e) {
                    var n, r = "";
                    for (n = 0; n < t; ++n)r += e;
                    return r
                }

                function r(t, e, n) {
                    var r = 0, i = t.split(u);
                    return t = n ? (i = i.reverse()).filter(function (t) {
                        return r += t.length, r <= e
                    }).reverse() : i.filter(function (t) {
                        return r += t.length, r <= e
                    }), t.length ? t.join("").trim() : i[0].slice(0, e)
                }

                var i = e.exports, a = "__name__";
                i.namedfunc = function (t, e) {
                    return e[a] = t, e
                }, i.name = function (t) {
                    return null == t ? null : t[a]
                }, i.identity = function (t) {
                    return t
                }, i.true = i.namedfunc("true", function () {
                    return !0
                }), i.false = i.namedfunc("false", function () {
                    return !1
                }), i.duplicate = function (t) {
                    return JSON.parse(JSON.stringify(t))
                }, i.equal = function (t, e) {
                    return JSON.stringify(t) === JSON.stringify(e)
                }, i.extend = function (t) {
                    for (var e, n, r = 1, i = arguments.length; r < i; ++r) {
                        e = arguments[r];
                        for (n in e)t[n] = e[n]
                    }
                    return t
                }, i.length = function (t) {
                    return null != t && null != t.length ? t.length : null
                }, i.keys = function (t) {
                    var e, n = [];
                    for (e in t)n.push(e);
                    return n
                }, i.vals = function (t) {
                    var e, n = [];
                    for (e in t)n.push(t[e]);
                    return n
                }, i.toMap = function (t, e) {
                    return (e = i.$(e)) ? t.reduce(function (t, n) {
                        return t[e(n)] = 1, t
                    }, {}) : t.reduce(function (t, e) {
                        return t[e] = 1, t
                    }, {})
                }, i.keystr = function (t) {
                    var e = t.length;
                    if (!e)return "";
                    for (var n = String(t[0]), r = 1; r < e; ++r)n += "|" + String(t[r]);
                    return n
                };
                var o = Object.prototype.toString;
                i.isObject = function (t) {
                    return t === Object(t)
                }, i.isFunction = function (t) {
                    return "[object Function]" === o.call(t)
                }, i.isString = function (t) {
                    return "string" == typeof value || "[object String]" === o.call(t)
                }, i.isArray = Array.isArray || function (t) {
                        return "[object Array]" === o.call(t)
                    }, i.isNumber = function (t) {
                    return "number" == typeof t || "[object Number]" === o.call(t)
                }, i.isBoolean = function (t) {
                    return t === !0 || t === !1 || "[object Boolean]" == o.call(t)
                }, i.isDate = function (t) {
                    return "[object Date]" === o.call(t)
                }, i.isValid = function (t) {
                    return null != t && t === t
                }, i.isBuffer = "function" == typeof t && t.isBuffer || i.false, i.number = function (t) {
                    return null == t || "" === t ? null : +t
                }, i.boolean = function (t) {
                    return null == t || "" === t ? null : "false" !== t && !!t
                }, i.date = function (t, e) {
                    var n = e ? e : Date;
                    return null == t || "" === t ? null : n.parse(t)
                }, i.array = function (t) {
                    return null != t ? i.isArray(t) ? t : [t] : []
                }, i.str = function (t) {
                    return i.isArray(t) ? "[" + t.map(i.str) + "]" : i.isObject(t) || i.isString(t) ? JSON.stringify(t).replace("\u2028", "\\u2028").replace("\u2029", "\\u2029") : t
                };
                var s = /\[(.*?)\]|[^.\[]+/g;
                i.field = function (t) {
                    return String(t).match(s).map(function (t) {
                        return "[" !== t[0] ? t : "'" !== t[1] && '"' !== t[1] ? t.slice(1, -1) : t.slice(2, -2).replace(/\\(["'])/g, "$1")
                    })
                }, i.accessor = function (t) {
                    return null == t || i.isFunction(t) ? t : i.namedfunc(t, Function("x", "return x[" + i.field(t).map(i.str).join("][") + "];"))
                }, i.$ = i.accessor, i.mutator = function (t) {
                    var e;
                    return i.isString(t) && (e = i.field(t)).length > 1 ? function (t, n) {
                        for (var r = 0; r < e.length - 1; ++r)t = t[e[r]];
                        t[e[r]] = n
                    } : function (e, n) {
                        e[t] = n
                    }
                }, i.$func = function (t, e) {
                    return function (n) {
                        n = i.$(n) || i.identity;
                        var r = t + (i.name(n) ? "_" + i.name(n) : "");
                        return i.namedfunc(r, function (t) {
                            return e(n(t))
                        })
                    }
                }, i.$valid = i.$func("valid", i.isValid), i.$length = i.$func("length", i.length), i.$in = function (t, e) {
                    t = i.$(t);
                    var n = i.isArray(e) ? i.toMap(e) : e;
                    return function (e) {
                        return !!n[t(e)]
                    }
                }, i.comparator = function (t) {
                    var e = [];
                    return void 0 === t && (t = []), t = i.array(t).map(function (t) {
                        var n = 1;
                        return "-" === t[0] ? (n = -1, t = t.slice(1)) : "+" === t[0] && (n = 1, t = t.slice(1)), e.push(n), i.accessor(t)
                    }), function (n, r) {
                        var a, o, s, u;
                        for (a = 0, o = t.length; a < o; ++a)if (s = t[a], u = i.cmp(s(n), s(r)))return u * e[a];
                        return 0
                    }
                }, i.cmp = function (t, e) {
                    return (t < e || null == t) && null != e ? -1 : (t > e || null == e) && null != t ? 1 : (e = e instanceof Date ? +e : e, (t = t instanceof Date ? +t : t) !== t && e === e ? -1 : e !== e && t === t ? 1 : 0)
                }, i.numcmp = function (t, e) {
                    return t - e
                }, i.stablesort = function (t, e, n) {
                    var r = t.reduce(function (t, e, r) {
                        return t[n(e)] = r, t
                    }, {});
                    return t.sort(function (t, i) {
                        var a = e(t), o = e(i);
                        return a < o ? -1 : a > o ? 1 : r[n(t)] - r[n(i)]
                    }), t
                }, i.permute = function (t) {
                    for (var e, n, r = t.length; r;)n = Math.floor(Math.random() * r--), e = t[r], t[r] = t[n], t[n] = e
                }, i.pad = function (t, e, r, i) {
                    i = i || " ";
                    var a = e - t.length;
                    if (a <= 0)return t;
                    switch (r) {
                        case"left":
                            return n(a, i) + t;
                        case"middle":
                        case"center":
                            return n(Math.floor(a / 2), i) + t + n(Math.ceil(a / 2), i);
                        default:
                            return t + n(a, i)
                    }
                }, i.truncate = function (t, e, n, i, a) {
                    var o = t.length;
                    if (o <= e)return t;
                    a = void 0 !== a ? String(a) : "…";
                    var s = Math.max(0, e - a.length);
                    switch (n) {
                        case"left":
                            return a + (i ? r(t, s, 1) : t.slice(o - s));
                        case"middle":
                        case"center":
                            var u = Math.ceil(s / 2), l = Math.floor(s / 2);
                            return (i ? r(t, u) : t.slice(0, u)) + a + (i ? r(t, l, 1) : t.slice(o - l));
                        default:
                            return (i ? r(t, s) : t.slice(0, s)) + a
                    }
                };
                var u = /([\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF])/
            }).call(this, t("buffer").Buffer)
        }, {buffer: 2}],
        31: [function (e, n, r) {
            !function (e, i) {
                "object" == typeof r && "undefined" != typeof n ? i(r) : "function" == typeof t && t.amd ? t(["exports"], i) : i(e.topojson = e.topojson || {})
            }(this, function (t) {
                "use strict";
                function e() {
                }

                function n(t) {
                    if (!t)return e;
                    var n, r, i = t.scale[0], a = t.scale[1], o = t.translate[0], s = t.translate[1];
                    return function (t, e) {
                        e || (n = r = 0), t[0] = (n += t[0]) * i + o, t[1] = (r += t[1]) * a + s
                    }
                }

                function r(t) {
                    if (!t)return e;
                    var n, r, i = t.scale[0], a = t.scale[1], o = t.translate[0], s = t.translate[1];
                    return function (t, e) {
                        e || (n = r = 0);
                        var u = Math.round((t[0] - o) / i), l = Math.round((t[1] - s) / a);
                        t[0] = u - n, t[1] = l - r, n = u, r = l
                    }
                }

                function i(t, e) {
                    for (var n, r = t.length, i = r - e; i < --r;)n = t[i], t[i++] = t[r], t[r] = n
                }

                function a(t, e) {
                    for (var n = 0, r = t.length; n < r;) {
                        var i = n + r >>> 1;
                        t[i] < e ? n = i + 1 : r = i
                    }
                    return n
                }

                function o(t, e) {
                    return "GeometryCollection" === e.type ? {
                        type: "FeatureCollection",
                        features: e.geometries.map(function (e) {
                            return s(t, e)
                        })
                    } : s(t, e)
                }

                function s(t, e) {
                    var n = {type: "Feature", id: e.id, properties: e.properties || {}, geometry: u(t, e)};
                    return null == e.id && delete n.id, n
                }

                function u(t, e) {
                    function r(t, e) {
                        e.length && e.pop();
                        for (var n, r = d[t < 0 ? ~t : t], a = 0, o = r.length; a < o; ++a)e.push(n = r[a].slice()), c(n, a);
                        t < 0 && i(e, o)
                    }

                    function a(t) {
                        return t = t.slice(), c(t, 0), t
                    }

                    function o(t) {
                        for (var e = [], n = 0, i = t.length; n < i; ++n)r(t[n], e);
                        return e.length < 2 && e.push(e[0].slice()), e
                    }

                    function s(t) {
                        for (var e = o(t); e.length < 4;)e.push(e[0].slice());
                        return e
                    }

                    function u(t) {
                        return t.map(s)
                    }

                    function l(t) {
                        var e = t.type;
                        return "GeometryCollection" === e ? {
                            type: e,
                            geometries: t.geometries.map(l)
                        } : e in f ? {type: e, coordinates: f[e](t)} : null
                    }

                    var c = n(t.transform), d = t.arcs, f = {
                        Point: function (t) {
                            return a(t.coordinates)
                        }, MultiPoint: function (t) {
                            return t.coordinates.map(a)
                        }, LineString: function (t) {
                            return o(t.arcs)
                        }, MultiLineString: function (t) {
                            return t.arcs.map(o)
                        }, Polygon: function (t) {
                            return u(t.arcs)
                        }, MultiPolygon: function (t) {
                            return t.arcs.map(u)
                        }
                    };
                    return l(e)
                }

                function l(t, e) {
                    function n(e) {
                        var n, r = t.arcs[e < 0 ? ~e : e], i = r[0];
                        return t.transform ? (n = [0, 0], r.forEach(function (t) {
                            n[0] += t[0], n[1] += t[1]
                        })) : n = r[r.length - 1], e < 0 ? [n, i] : [i, n]
                    }

                    function r(t, e) {
                        for (var n in t) {
                            var r = t[n];
                            delete e[r.start], delete r.start, delete r.end, r.forEach(function (t) {
                                i[t < 0 ? ~t : t] = 1
                            }), s.push(r)
                        }
                    }

                    var i = {}, a = {}, o = {}, s = [], u = -1;
                    return e.forEach(function (n, r) {
                        var i, a = t.arcs[n < 0 ? ~n : n];
                        a.length < 3 && !a[1][0] && !a[1][1] && (i = e[++u], e[u] = n, e[r] = i)
                    }), e.forEach(function (t) {
                        var e, r, i = n(t), s = i[0], u = i[1];
                        if (e = o[s])if (delete o[e.end], e.push(t), e.end = u, r = a[u]) {
                            delete a[r.start];
                            var l = r === e ? e : e.concat(r);
                            a[l.start = e.start] = o[l.end = r.end] = l
                        } else a[e.start] = o[e.end] = e; else if (e = a[u])if (delete a[e.start], e.unshift(t), e.start = s, r = o[s]) {
                            delete o[r.end];
                            var c = r === e ? e : r.concat(e);
                            a[c.start = r.start] = o[c.end = e.end] = c
                        } else a[e.start] = o[e.end] = e; else e = [t], a[e.start = s] = o[e.end = u] = e
                    }), r(o, a), r(a, o), e.forEach(function (t) {
                        i[t < 0 ? ~t : t] || s.push([t])
                    }), s
                }

                function c(t) {
                    return u(t, d.apply(this, arguments))
                }

                function d(t, e, n) {
                    function r(t) {
                        var e = t < 0 ? ~t : t;
                        (c[e] || (c[e] = [])).push({i: t, g: u})
                    }

                    function i(t) {
                        t.forEach(r)
                    }

                    function a(t) {
                        t.forEach(i)
                    }

                    function o(t) {
                        "GeometryCollection" === t.type ? t.geometries.forEach(o) : t.type in d && (u = t, d[t.type](t.arcs))
                    }

                    var s = [];
                    if (arguments.length > 1) {
                        var u, c = [], d = {
                            LineString: i, MultiLineString: a, Polygon: a, MultiPolygon: function (t) {
                                t.forEach(a)
                            }
                        };
                        o(e), c.forEach(arguments.length < 3 ? function (t) {
                            s.push(t[0].i)
                        } : function (t) {
                            n(t[0].g, t[t.length - 1].g) && s.push(t[0].i)
                        })
                    } else for (var f = 0, h = t.arcs.length; f < h; ++f)s.push(f);
                    return {type: "MultiLineString", arcs: l(t, s)}
                }

                function f(t) {
                    var e = t[0], n = t[1], r = t[2];
                    return Math.abs((e[0] - r[0]) * (n[1] - e[1]) - (e[0] - n[0]) * (r[1] - e[1]))
                }

                function h(t) {
                    for (var e, n = -1, r = t.length, i = t[r - 1], a = 0; ++n < r;)e = i, i = t[n], a += e[0] * i[1] - e[1] * i[0];
                    return a / 2
                }

                function p(t) {
                    return u(t, g.apply(this, arguments))
                }

                function g(t, e) {
                    function n(t) {
                        t.forEach(function (e) {
                            e.forEach(function (e) {
                                (i[e = e < 0 ? ~e : e] || (i[e] = [])).push(t)
                            })
                        }), a.push(t)
                    }

                    function r(e) {
                        return Math.abs(h(u(t, {type: "Polygon", arcs: [e]}).coordinates[0]))
                    }

                    var i = {}, a = [], o = [];
                    return e.forEach(function (t) {
                        "Polygon" === t.type ? n(t.arcs) : "MultiPolygon" === t.type && t.arcs.forEach(n)
                    }), a.forEach(function (t) {
                        if (!t._) {
                            var e = [], n = [t];
                            for (t._ = 1, o.push(e); t = n.pop();)e.push(t), t.forEach(function (t) {
                                t.forEach(function (t) {
                                    i[t < 0 ? ~t : t].forEach(function (t) {
                                        t._ || (t._ = 1, n.push(t))
                                    })
                                })
                            })
                        }
                    }), a.forEach(function (t) {
                        delete t._
                    }), {
                        type: "MultiPolygon", arcs: o.map(function (e) {
                            var n, a = [];
                            if (e.forEach(function (t) {
                                    t.forEach(function (t) {
                                        t.forEach(function (t) {
                                            i[t < 0 ? ~t : t].length < 2 && a.push(t)
                                        })
                                    })
                                }), a = l(t, a), (n = a.length) > 1)for (var o, s, u = 1, c = r(a[0]); u < n; ++u)(o = r(a[u])) > c && (s = a[0], a[0] = a[u], a[u] = s, c = o);
                            return a
                        })
                    }
                }

                function m(t) {
                    function e(t, e) {
                        t.forEach(function (t) {
                            t < 0 && (t = ~t);
                            var n = i[t];
                            n ? n.push(e) : i[t] = [e]
                        })
                    }

                    function n(t, n) {
                        t.forEach(function (t) {
                            e(t, n)
                        })
                    }

                    function r(t, e) {
                        "GeometryCollection" === t.type ? t.geometries.forEach(function (t) {
                            r(t, e)
                        }) : t.type in s && s[t.type](t.arcs, e)
                    }

                    var i = {}, o = t.map(function () {
                        return []
                    }), s = {
                        LineString: e, MultiLineString: n, Polygon: n, MultiPolygon: function (t, e) {
                            t.forEach(function (t) {
                                n(t, e)
                            })
                        }
                    };
                    t.forEach(r);
                    for (var u in i)for (var l = i[u], c = l.length, d = 0; d < c; ++d)for (var f = d + 1; f < c; ++f) {
                        var h, p = l[d], g = l[f];
                        (h = o[p])[u = a(h, g)] !== g && h.splice(u, 0, g), (h = o[g])[u = a(h, p)] !== p && h.splice(u, 0, p)
                    }
                    return o
                }

                function v(t, e) {
                    return t[1][2] - e[1][2]
                }

                function y() {
                    function t(t, e) {
                        for (; e > 0;) {
                            var n = (e + 1 >> 1) - 1, i = r[n];
                            if (v(t, i) >= 0)break;
                            r[i._ = e] = i, r[t._ = e = n] = t
                        }
                    }

                    function e(t, e) {
                        for (; ;) {
                            var n = e + 1 << 1, a = n - 1, o = e, s = r[o];
                            if (a < i && v(r[a], s) < 0 && (s = r[o = a]), n < i && v(r[n], s) < 0 && (s = r[o = n]), o === e)break;
                            r[s._ = e] = s, r[t._ = e = o] = t
                        }
                    }

                    var n = {}, r = [], i = 0;
                    return n.push = function (e) {
                        return t(r[e._ = i] = e, i++), i
                    }, n.pop = function () {
                        if (!(i <= 0)) {
                            var t, n = r[0];
                            return --i > 0 && (t = r[i], e(r[t._ = 0] = t, 0)), n
                        }
                    }, n.remove = function (n) {
                        var a, o = n._;
                        if (r[o] === n)return o !== --i && (a = r[i], (v(a, n) < 0 ? t : e)(r[a._ = o] = a, o)), o
                    }, n
                }

                function _(t, e) {
                    function i(t) {
                        s.remove(t), t[1][2] = e(t), s.push(t)
                    }

                    var a = n(t.transform), o = r(t.transform), s = y();
                    return e || (e = f), t.arcs.forEach(function (t) {
                        var n, r, u, l, c = [], d = 0;
                        for (r = 0, u = t.length; r < u; ++r)l = t[r], a(t[r] = [l[0], l[1], 1 / 0], r);
                        for (r = 1, u = t.length - 1; r < u; ++r)n = t.slice(r - 1, r + 2), n[1][2] = e(n), c.push(n), s.push(n);
                        for (r = 0, u = c.length; r < u; ++r)n = c[r], n.previous = c[r - 1], n.next = c[r + 1];
                        for (; n = s.pop();) {
                            var f = n.previous, h = n.next;
                            n[1][2] < d ? n[1][2] = d : d = n[1][2], f && (f.next = h, f[2] = n[2], i(f)), h && (h.previous = f, h[0] = n[0], i(h))
                        }
                        t.forEach(o)
                    }), t
                }

                var b = "1.6.26";
                t.version = b, t.mesh = c, t.meshArcs = d, t.merge = p, t.mergeArcs = g, t.feature = o, t.neighbors = m, t.presimplify = _
            })
        }, {}],
        32: [function (t, e, n) {
            function r(t, e) {
                var n = {};
                return i(t, n), n.add = [], n.mod = [], n.rem = [], n.reflow = e, n
            }

            function i(t, e) {
                e.stamp = t ? t.stamp : 0, e.sort = t ? t.sort : null, e.facet = t ? t.facet : null, e.trans = t ? t.trans : null, e.dirty = t ? t.dirty : [], e.request = t ? t.request : null;
                for (var n, r = 0, i = a.length; r < i; ++r)e[n = a[r]] = t ? t[n] : {}
            }

            var a = t("./Dependencies").ALL;
            e.exports = {create: r, copy: i}
        }, {"./Dependencies": 35}],
        33: [function (t, e, n) {
            function r(t) {
                o.init.call(this, t), this._data = [], this.router(!0).collector(!0)
            }

            var i = t("vega-logging"), a = t("./Tuple"), o = t("./Node").prototype, s = t("./ChangeSet"), u = r.prototype = Object.create(o);
            u.constructor = r, u.data = function () {
                return this._data
            }, u.evaluate = function (t) {
                i.debug(t, ["collecting"]);
                var e = s.create(t);
                return t.rem.length && (this._data = a.idFilter(this._data, t.rem), e.rem = t.rem.slice(0)), t.add.length && (this._data = this._data.concat(t.add), e.add = t.add.slice(0)), t.mod.length && (e.mod = t.mod.slice(0)), t.sort && this._data.sort(t.sort), t.reflow && (e.mod = e.mod.concat(a.idFilter(this._data, e.add, e.mod, e.rem)), e.reflow = !1), e
            }, e.exports = r
        }, {"./ChangeSet": 32, "./Node": 38, "./Tuple": 40, "vega-logging": 48}],
        34: [function (t, e, n) {
            function r(t, e, n) {
                this._graph = t, this._name = e, this._data = [], this._source = null, this._facet = n, this._input = l.create(), this._output = null, this._indexes = {}, this._indexFields = [], this._inputNode = null, this._outputNode = null, this._pipeline = null, this._collector = null, this._mutates = !1
            }

            function i(t) {
                var e = new f(t._graph).router(!0).collector(!0);
                return e.data = function () {
                    return t._data
                }, e.evaluate = function (e) {
                    u.debug(e, ["input", t._name]);
                    var n, r = t._input, i = l.create(e);
                    for (n in r.fields)i.fields[n] = 1;
                    return r.rem.length && (t._data = d.idFilter(t._data, r.rem)), r.add.length && (t._data = t._data.concat(r.add)), r.sort && t._data.sort(r.sort), e.reflow && (r.mod = r.mod.concat(d.idFilter(t._data, r.add, r.mod, r.rem))), t._input = l.create(), i.add = r.add, i.mod = r.mod, i.rem = r.rem, i.facet = t._facet, i
                }, e
            }

            function a(t) {
                function e(e) {
                    var n, r, i, a, o, u, l = t._indexFields;
                    for (n = 0; n < l.length; ++n) {
                        for (a = l[n], o = t._indexes[a], i = s.$(a), r = 0; r < e.add.length; ++r)u = i(e.add[r]), d.prev_init(e.add[r]), o[u] = (o[u] || 0) + 1;
                        for (r = 0; r < e.rem.length; ++r)u = i(e.rem[r]), o[u] = (o[u] || 0) - 1;
                        for (r = 0; r < e.mod.length; ++r)u = i(e.mod[r]._prev), o[u] = (o[u] || 0) - 1, u = i(e.mod[r]), o[u] = (o[u] || 0) + 1
                    }
                }

                var n = new f(t._graph).router(!0).reflows(!0).collector(!0);
                return n.data = function () {
                    return t._collector ? t._collector.data() : t._data
                }, n.evaluate = function (n) {
                    u.debug(n, ["output", t._name]), e(n);
                    var r = l.create(n, !0);
                    return t._facet && (t._facet.values = t.values(), n.facet = null), t._output = n, r.data[t._name] = 1, r
                }, n
            }

            function o(t) {
                var e = new f(t._graph).router(!0);
                return e.evaluate = function (e) {
                    if (t.mutates()) {
                        var n = t._srcMap || (t._srcMap = {}), r = l.create(e);
                        return r.add = e.add.map(function (t) {
                            return n[t._id] = d.derive(t)
                        }), r.mod = e.mod.map(function (t) {
                            return d.rederive(t, n[t._id])
                        }), r.rem = e.rem.map(function (t) {
                            var e = n[t._id];
                            return n[t._id] = null, e
                        }), t._input = r
                    }
                    return t._input = e
                }, e
            }

            var s = t("datalib"), u = t("vega-logging"), l = t("./ChangeSet"), c = t("./Collector"), d = t("./Tuple"), f = t("./Node"), h = r.prototype;
            h.name = function (t) {
                return arguments.length ? (this._name = t, this) : this._name
            }, h.source = function (t) {
                return arguments.length ? this._source = this._graph.data(t) : this._source
            }, h.insert = function (t) {
                return this._input.add = this._input.add.concat(t.map(d.ingest)), this
            }, h.remove = function (t) {
                var e = this._data.filter(t);
                return this._input.rem = this._input.rem.concat(e), this
            }, h.update = function (t, e, n) {
                var r = this._input.mod, i = d.idMap(r);
                return this._input.fields[e] = 1, this._data.filter(t).forEach(function (t) {
                    var a = t[e], o = n(t);
                    a !== o && (d.set(t, e, o), 1 !== i[t._id] && (r.push(t), i[t._id] = 1))
                }), this
            }, h.values = function (t) {
                return arguments.length ? (this._input.rem = this._data.slice(), t && this.insert(t), this) : this._collector.data()
            }, h.mutates = function (t) {
                return arguments.length ? (this._mutates = this._mutates || t, this) : this._mutates
            }, h.last = function () {
                return this._output
            }, h.fire = function (t) {
                return t && (this._input = t), this._graph.propagate(this._input, this._pipeline[0]), this
            }, h.pipeline = function (t) {
                if (!arguments.length)return this._pipeline;
                var e, n = this._graph;
                return t.unshift(this._inputNode = i(this)), e = n.preprocess(t), e.router && t.push(e.collector = new c(n)), t.push(this._outputNode = a(this)), this._collector = e.collector, this._mutates = !!e.mutates, n.connect(this._pipeline = t), this
            }, h.synchronize = function () {
                return this._graph.synchronize(this._pipeline), this
            }, h.getIndex = function (t) {
                var e, n, r, i, a = this.values(), o = this._indexes, u = this._indexFields, l = s.$(t);
                if (!o[t])for (o[t] = e = {}, u.push(t), n = 0, r = a.length; n < r; ++n)i = l(a[n]), e[i] = (e[i] || 0) + 1, d.prev_init(a[n]);
                return o[t]
            }, h.listener = function () {
                return o(this).addListener(this._inputNode)
            }, h.addListener = function (t) {
                return t instanceof r ? this._collector.addListener(t.listener()) : this._outputNode.addListener(t), this
            }, h.removeListener = function (t) {
                this._outputNode.removeListener(t)
            }, h.listeners = function (t) {
                return (t ? this._collector : this._outputNode).listeners()
            }, e.exports = r
        }, {"./ChangeSet": 32, "./Collector": 33, "./Node": 38, "./Tuple": 40, datalib: 26, "vega-logging": 48}],
        35: [function (t, e, n) {
            var r = e.exports = {ALL: ["data", "fields", "scales", "signals"]};
            r.ALL.forEach(function (t) {
                r[t.toUpperCase()] = t
            })
        }, {}],
        36: [function (t, e, n) {
            function r() {
            }

            var i = t("datalib"), a = t("vega-logging"), o = t("./Heap"), s = t("./ChangeSet"), u = t("./DataSource"), l = t("./Collector"), c = t("./Tuple"), d = t("./Signal"), f = t("./Dependencies"), h = r.prototype;
            h.init = function () {
                this._stamp = 0, this._rank = 0, this._data = {}, this._signals = {}, this._requestedIndexes = {}, this.doNotPropagate = {}
            }, h.rank = function () {
                return ++this._rank
            }, h.values = function (t, e, n) {
                var r, a, o = t === f.SIGNALS ? this._signals : this._data, s = void 0 !== e ? e : i.keys(o);
                if (Array.isArray(s)) {
                    for (r = n || {}, a = 0; a < s.length; ++a)r[s[a]] = o[s[a]].values();
                    return r
                }
                return o[s].values()
            }, h.dataValues = function (t) {
                return this.values(f.DATA, t)
            }, h.signalValues = function (t) {
                return this.values(f.SIGNALS, t)
            }, h.data = function (t, e, n) {
                var r = this._data;
                if (arguments.length)return 1 === arguments.length ? r[t] : r[t] = new u(this, t, n).pipeline(e);
                var i, a = [];
                for (i in r)a.push(r[i]);
                return a
            }, h.signal = function (t, e) {
                if (1 === arguments.length) {
                    var n = this;
                    return Array.isArray(t) ? t.map(function (t) {
                        return n._signals[t]
                    }) : this._signals[t]
                }
                return this._signals[t] = new d(this, t, e)
            }, h.signalRef = function (t) {
                Array.isArray(t) || (t = i.field(t));
                var e = this.signal(t[0]).value();
                if (t.length > 1)for (var n = 1, r = t.length; n < r; ++n)e = e[t[n]];
                return e
            }, h.requestIndex = function (t, e) {
                var n = this._requestedIndexes, r = n[t] || (n[t] = {});
                return r[e] = !0, this
            }, h.buildIndexes = function () {
                var t, e, n, r, a, o, s, u, l = this._requestedIndexes, c = i.keys(l);
                for (t = 0, e = c.length; t < e; ++t) {
                    if (o = this.data(a = c[t]), !o)throw Error("Data source " + i.str(a) + " does not exist.");
                    for (s = i.keys(l[a]), n = 0, r = s.length; n < r; ++n)null !== (u = s[n]) && (o.getIndex(u), l[a][u] = null)
                }
                return this
            }, h.propagate = function (t, e, n, r) {
                var i, a, u, l, c, f, h, p, g = {}, m = new o(function (t, e) {
                    return t._qrank - e._qrank
                });
                if (t.stamp)throw Error("Pulse already has a non-zero stamp.");
                for (t.stamp = n || ++this._stamp, g[e._id] = t, m.push(e.qrank(!0)); m.size() > 0;)if (e = m.peek(), p = e instanceof d, t = g[e._id], e.rank() !== e.qrank())m.replace(e.qrank(!0)); else if (m.pop(), g[e._id] = null, i = e._listeners, (!p || p && !r) && (t = this.evaluate(t, e)), t !== this.doNotPropagate)for (!t.reflow && e.reflows() && (t = s.create(t, !0)), f = 0, h = i.length; f < h; ++f)if (a = i[f], void 0 !== (u = g[a._id])) {
                    if (null === u)throw Error("Already propagated to node.");
                    if (u === t)continue;
                    if (l = t.add.length || t.mod.length || t.rem.length, c = u.add.length || u.mod.length || u.rem.length, l && c)throw Error("Multiple changeset pulses to same node");
                    g[a._id] = l ? t : u, g[a._id].reflow = t.reflow || u.reflow
                } else m.push(a.qrank(!0)), g[a._id] = t;
                return this.done(t)
            }, h.done = function (t) {
                a.debug(t, ["bookkeeping"]);
                for (var e in t.data)this.data(e).synchronize();
                return this
            }, h.preprocess = function (t) {
                for (var e, n, r, i, a = this, o = 0, s = 0; s < t.length; ++s)e = t[s], e.batch() && !e._collector && (n || !r ? (e = new l(a), t.splice(s, 0, e), n = !1) : e._collector = r), (i = e.collector()) && (r = e), n = n || e.router() && !i, o = o || e.mutates(), e.produces() && (t.splice(s + 1, 0, new l(a)), n = !1);
                return {router: n, collector: r, mutates: o}
            }, h.connect = function (t) {
                var e, n, r, a, o, s, u, l, c, d;
                for (o = 0, s = t.length; o < s; ++o) {
                    for (n = t[o], n.collector() && (e = n), r = n.dependency(f.DATA), u = 0, l = r.length; u < l; ++u) {
                        if (!(c = this.data(d = r[u])))throw new Error("Unknown data source " + i.str(d));
                        c.addListener(e)
                    }
                    for (a = n.dependency(f.SIGNALS), u = 0, l = a.length; u < l; ++u) {
                        if (!(c = this.signal(d = a[u])))throw new Error("Unknown signal " + i.str(d));
                        c.addListener(e)
                    }
                    o > 0 && t[o - 1].addListener(n)
                }
                return t
            }, h.disconnect = function (t) {
                var e, n, r, i, a, o, s, u;
                for (a = 0, o = t.length; a < o; ++a) {
                    for (n = t[a], n.collector() && (e = n), r = n.dependency(f.DATA), s = 0, u = r.length; s < u; ++s)this.data(r[s]).removeListener(e);
                    for (i = n.dependency(f.SIGNALS), s = 0, u = i.length; s < u; ++s)this.signal(i[s]).removeListener(e);
                    n.disconnect()
                }
                return t
            }, h.synchronize = function (t) {
                var e, n, r, i, a, o, s, u, l = {};
                for (r = 0, i = t.length; r < i; ++r)if (e = t[r], e.collector())for (a = 0, n = e.data(), o = n.length; a < o; ++a)u = (s = n[a])._id, l[u] || (c.prev_update(s), l[u] = 1);
                return this
            }, h.reevaluate = function (t, e) {
                var n = t.reflow && e.last() >= t.stamp, r = e.router() || t.add.length || t.rem.length;
                return r || !n || e.reevaluate(t)
            }, h.evaluate = function (t, e) {
                return this.reevaluate(t, e) ? (t = e.evaluate(t), e.last(t.stamp), t) : t
            }, e.exports = r
        }, {
            "./ChangeSet": 32,
            "./Collector": 33,
            "./DataSource": 34,
            "./Dependencies": 35,
            "./Heap": 37,
            "./Signal": 39,
            "./Tuple": 40,
            datalib: 26,
            "vega-logging": 48
        }],
        37: [function (t, e, n) {
            function r(t) {
                this.cmp = t, this.nodes = []
            }

            function i(t, e, n, r) {
                var i, a, o;
                for (i = t[n]; n > e && (o = n - 1 >> 1, a = t[o], r(i, a) < 0);)t[n] = a, n = o;
                return t[n] = i
            }

            function a(t, e, n) {
                for (var r, a = e, o = t.length, s = t[e], u = 2 * e + 1; u < o;)r = u + 1, r < o && n(t[u], t[r]) >= 0 && (u = r), t[e] = t[u], e = u, u = 2 * e + 1;
                return t[e] = s, i(t, a, e, n)
            }

            var o = r.prototype;
            o.size = function () {
                return this.nodes.length
            }, o.clear = function () {
                return this.nodes = [], this
            }, o.peek = function () {
                return this.nodes[0]
            }, o.push = function (t) {
                var e = this.nodes;
                return e.push(t), i(e, 0, e.length - 1, this.cmp)
            }, o.pop = function () {
                var t, e = this.nodes, n = e.pop();
                return e.length ? (t = e[0], e[0] = n, a(e, 0, this.cmp)) : t = n, t
            }, o.replace = function (t) {
                var e = this.nodes, n = e[0];
                return e[0] = t, a(e, 0, this.cmp), n
            }, o.pushpop = function (t) {
                var e = this.nodes, n = e[0];
                return e.length && this.cmp(n, t) < 0 && (e[0] = t, t = n, a(e, 0, this.cmp)), t
            }, e.exports = r
        }, {}],
        38: [function (t, e, n) {
            function r(t) {
                t && this.init(t)
            }

            var i = t("./Dependencies").ALL, a = 0, o = r.Flags = {
                Router: 1,
                Collector: 2,
                Produces: 4,
                Mutates: 8,
                Reflows: 16,
                Batch: 32
            }, s = r.prototype;
            s.init = function (t) {
                this._id = ++a, this._graph = t, this._rank = t.rank(), this._qrank = null, this._stamp = 0, this._listeners = [], this._listeners._ids = {}, this._deps = {};
                for (var e = 0, n = i.length; e < n; ++e)this._deps[i[e]] = [];
                return this._flags = 0, this
            }, s.rank = function () {
                return this._rank
            }, s.rerank = function () {
                for (var t, e = this._graph, n = [this]; n.length;)t = n.shift(), t._rank = e.rank(), n.unshift.apply(n, t.listeners());
                return this
            }, s.qrank = function () {
                return arguments.length ? (this._qrank = this._rank, this) : this._qrank
            }, s.last = function (t) {
                return arguments.length ? (this._stamp = t, this) : this._stamp
            }, s._setf = function (t, e) {
                return e ? this._flags |= t : this._flags &= ~t, this
            }, s.router = function (t) {
                return arguments.length ? this._setf(o.Router, t) : this._flags & o.Router
            }, s.collector = function (t) {
                return arguments.length ? this._setf(o.Collector, t) : this._flags & o.Collector
            }, s.produces = function (t) {
                return arguments.length ? this._setf(o.Produces, t) : this._flags & o.Produces
            }, s.mutates = function (t) {
                return arguments.length ? this._setf(o.Mutates, t) : this._flags & o.Mutates
            }, s.reflows = function (t) {
                return arguments.length ? this._setf(o.Reflows, t) : this._flags & o.Reflows
            }, s.batch = function (t) {
                return arguments.length ? this._setf(o.Batch, t) : this._flags & o.Batch
            }, s.dependency = function (t, e) {
                var n = this._deps[t], r = n._names || (n._names = {});
                if (1 === arguments.length)return n;
                if (null === e)n.splice(0, n.length), n._names = {}; else if (Array.isArray(e))for (var i, a = 0, o = e.length; a < o; ++a)i = e[a], r[i] || (n.push(i), r[i] = 1); else {
                    if (r[e])return this;
                    n.push(e), r[e] = 1
                }
                return this
            }, s.listeners = function () {
                return this._listeners
            }, s.addListener = function (t) {
                if (!(t instanceof r))throw Error("Listener is not a Node");
                return this._listeners._ids[t._id] ? this : (this._listeners.push(t), this._listeners._ids[t._id] = 1, this._rank > t._rank && t.rerank(), this)
            }, s.removeListener = function (t) {
                if (!this._listeners._ids[t._id])return !1;
                var e = this._listeners.indexOf(t), n = e >= 0;
                return n && (this._listeners.splice(e, 1), this._listeners._ids[t._id] = null), n
            }, s.disconnect = function () {
                this._listeners = [], this._listeners._ids = {}
            }, s.evaluate = function (t) {
                return t
            }, s.reevaluate = function (t) {
                var e, n, r, a, o, s;
                for (r = 0, a = i.length; r < a; ++r)for (e = i[r], n = this._deps[e], o = 0, s = n.length; o < s; ++o)if (t[e][n[o]])return !0;
                return !1
            }, r.reset = function () {
                a = 0
            }, e.exports = r
        }, {"./Dependencies": 35}],
        39: [function (t, e, n) {
            function r(t, e, n) {
                return o.init.call(this, t), this._name = e, this._value = n, this._verbose = !1, this._handlers = [], this
            }

            var i = t("./ChangeSet"), a = t("./Node"), o = a.prototype, s = r.prototype = Object.create(o);
            s.constructor = r, s.name = function () {
                return this._name
            }, s.value = function (t) {
                return arguments.length ? (this._value = t, this) : this._value
            }, s.values = s.value, s.verbose = function (t) {
                return arguments.length ? (this._verbose = !!t, this) : this._verbose
            }, s.evaluate = function (t) {
                return t.signals[this._name] ? t : this._graph.doNotPropagate
            }, s.fire = function (t) {
                t || (t = i.create(null, !0)), t.signals[this._name] = 1, this._graph.propagate(t, this)
            }, s.on = function (t) {
                var e = this, n = new a(this._graph);
                return n.evaluate = function (n) {
                    return t(e.name(), e.value()), n
                }, this._handlers.push({
                    handler: t,
                    node: n
                }), this.addListener(n)
            }, s.off = function (t) {
                var e, n, r = this._handlers;
                for (e = r.length; --e >= 0;)t && r[e].handler !== t || (n = r.splice(e, 1)[0], this.removeListener(n.node));
                return this
            }, e.exports = r
        }, {"./ChangeSet": 32, "./Node": 38}],
        40: [function (t, e, n) {
            function r(t) {
                return t = t === Object(t) ? t : {data: t}, t._id = ++o, t._prev && (t._prev = null), t
            }

            function i(t, e) {
                e = e || {};
                for (var n = 0, r = t.length; n < r; ++n)e[t[n]._id] = 1;
                return e
            }

            function a(t, e) {
                e = e || {};
                for (var n in t)"_prev" !== n && "_id" !== n && (e[n] = t[n]);
                return e
            }

            var o = 0;
            e.exports = {
                ingest: r, idMap: i, derive: function (t) {
                    return r(a(t))
                }, rederive: function (t, e) {
                    return a(t, e)
                }, set: function (t, e, n) {
                    return t[e] === n ? 0 : (t[e] = n, 1)
                }, prev: function (t) {
                    return t._prev || t
                }, prev_init: function (t) {
                    t._prev || (t._prev = {_id: t._id})
                }, prev_update: function (t) {
                    var e, n, r = t._prev;
                    if (r)for (e in t)"_prev" !== e && "_id" !== e && (r[e] = (n = t[e]) instanceof Object && n._prev ? n._prev : n)
                }, reset: function () {
                    o = 0
                }, idFilter: function (t) {
                    for (var e = {}, n = arguments.length; --n > 0;)i(arguments[n], e);
                    return t.filter(function (t) {
                        return !e[t._id]
                    })
                }
            }
        }, {}],
        41: [function (t, e, n) {
            e.exports = {
                ChangeSet: t("./ChangeSet"),
                Collector: t("./Collector"),
                DataSource: t("./DataSource"),
                Dependencies: t("./Dependencies"),
                Graph: t("./Graph"),
                Node: t("./Node"),
                Signal: t("./Signal"),
                Tuple: t("./Tuple"),
                debug: t("vega-logging").debug
            }
        }, {
            "./ChangeSet": 32,
            "./Collector": 33,
            "./DataSource": 34,
            "./Dependencies": 35,
            "./Graph": 36,
            "./Node": 38,
            "./Signal": 39,
            "./Tuple": 40,
            "vega-logging": 48
        }],
        42: [function (t, e, n) {
            e.exports = function () {
                "use strict";
                function t(t, e) {
                    function n() {
                        this.constructor = t
                    }

                    n.prototype = e.prototype, t.prototype = new n
                }

                function e(t, n, r, i) {
                    this.message = t, this.expected = n, this.found = r, this.location = i, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
                }

                function n(t) {
                    function n(e) {
                        var n, r, i = pe[e];
                        if (i)return i;
                        for (n = e - 1; !pe[n];)n--;
                        for (i = pe[n], i = {
                            line: i.line,
                            column: i.column,
                            seenCR: i.seenCR
                        }; n < e;)r = t.charAt(n), "\n" === r ? (i.seenCR || i.line++, i.column = 1, i.seenCR = !1) : "\r" === r || "\u2028" === r || "\u2029" === r ? (i.line++, i.column = 1, i.seenCR = !0) : (i.column++, i.seenCR = !1), n++;
                        return pe[e] = i, i
                    }

                    function r(t, e) {
                        var r = n(t), i = n(e);
                        return {
                            start: {offset: t, line: r.line, column: r.column},
                            end: {offset: e, line: i.line, column: i.column}
                        }
                    }

                    function i(t) {
                        fe < ge || (fe > ge && (ge = fe, me = []), me.push(t))
                    }

                    function a(t, n, r, i) {
                        function a(t) {
                            var e = 1;
                            for (t.sort(function (t, e) {
                                return t.description < e.description ? -1 : t.description > e.description ? 1 : 0
                            }); e < t.length;)t[e - 1] === t[e] ? t.splice(e, 1) : e++
                        }

                        function o(t, e) {
                            function n(t) {
                                function e(t) {
                                    return t.charCodeAt(0).toString(16).toUpperCase()
                                }

                                return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (t) {
                                    return "\\x0" + e(t)
                                }).replace(/[\x10-\x1F\x80-\xFF]/g, function (t) {
                                    return "\\x" + e(t)
                                }).replace(/[\u0100-\u0FFF]/g, function (t) {
                                    return "\\u0" + e(t)
                                }).replace(/[\u1000-\uFFFF]/g, function (t) {
                                    return "\\u" + e(t)
                                })
                            }

                            var r, i, a, o = new Array(t.length);
                            for (a = 0; a < t.length; a++)o[a] = t[a].description;
                            return r = t.length > 1 ? o.slice(0, -1).join(", ") + " or " + o[t.length - 1] : o[0], i = e ? '"' + n(e) + '"' : "end of input", "Expected " + r + " but " + i + " found."
                        }

                        return null !== n && a(n), new e(null !== t ? t : o(n, r), n, r, i)
                    }

                    function o() {
                        var t;
                        return t = s()
                    }

                    function s() {
                        var e, n, r, a, o, l;
                        return e = fe, n = u(), n !== b ? (r = v(), r !== b ? (44 === t.charCodeAt(fe) ? (a = k, fe++) : (a = b, 0 === ve && i(M)), a !== b ? (o = v(), o !== b ? (l = s(), l !== b ? (he = e, n = S(n, l), e = n) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b), e === b && (e = fe, n = u(), n !== b && (he = e, n = T(n)), e = n), e
                    }

                    function u() {
                        var e, n, r, a, o, s, c, d, f, h, p, g, m, y;
                        return e = fe, 91 === t.charCodeAt(fe) ? (n = E, fe++) : (n = b, 0 === ve && i(A)), n !== b ? (r = v(), r !== b ? (a = l(), a !== b ? (o = v(), o !== b ? (44 === t.charCodeAt(fe) ? (s = k, fe++) : (s = b, 0 === ve && i(M)), s !== b ? (c = v(), c !== b ? (d = l(), d !== b ? (f = v(), f !== b ? (93 === t.charCodeAt(fe) ? (h = L, fe++) : (h = b, 0 === ve && i(C)), h !== b ? (p = v(), p !== b ? (62 === t.charCodeAt(fe) ? (g = D, fe++) : (g = b, 0 === ve && i(P)), g !== b ? (m = v(), m !== b ? (y = u(), y !== b ? (he = e, n = I(a, d, y), e = n) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b), e === b && (e = l()), e
                    }

                    function l() {
                        var t, e, n, r;
                        if (t = fe, e = c(), e !== b) {
                            if (n = [], r = h(), r !== b)for (; r !== b;)n.push(r), r = h(); else n = b;
                            n !== b ? (he = t, e = N(e, n), t = e) : (fe = t, t = b)
                        } else fe = t, t = b;
                        return t === b && (t = fe, e = c(), e !== b && (he = t, e = O(e)), t = e), t
                    }

                    function c() {
                        var e, n, r, a, o;
                        return e = fe, 40 === t.charCodeAt(fe) ? (n = z, fe++) : (n = b, 0 === ve && i(j)), n !== b ? (r = s(), r !== b ? (41 === t.charCodeAt(fe) ? (a = F, fe++) : (a = b, 0 === ve && i(U)), a !== b ? (he = e, n = R(r), e = n) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b), e === b && (e = fe, 64 === t.charCodeAt(fe) ? (n = q, fe++) : (n = b, 0 === ve && i(B)), n !== b ? (r = p(), r !== b ? (58 === t.charCodeAt(fe) ? (a = G, fe++) : (a = b, 0 === ve && i($)), a !== b ? (o = f(), o !== b ? (he = e, n = H(r, o), e = n) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b), e === b && (e = fe, n = d(), n !== b ? (58 === t.charCodeAt(fe) ? (r = G, fe++) : (r = b, 0 === ve && i($)), r !== b ? (a = f(), a !== b ? (he = e, n = Y(n, a), e = n) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b), e === b && (e = fe, n = g(), n !== b ? (58 === t.charCodeAt(fe) ? (r = G, fe++) : (r = b, 0 === ve && i($)), r !== b ? (a = f(), a !== b ? (he = e, n = V(n, a), e = n) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b), e === b && (e = fe, n = f(), n !== b && (he = e, n = W(n)), e = n, e === b && (e = fe, n = p(), n !== b && (he = e, n = X(n)), e = n))))), e
                    }

                    function d() {
                        var e;
                        return t.substr(fe, 4) === J ? (e = J, fe += 4) : (e = b, 0 === ve && i(K)), e === b && (t.substr(fe, 6) === Z ? (e = Z, fe += 6) : (e = b, 0 === ve && i(Q)), e === b && (t.substr(fe, 4) === tt ? (e = tt, fe += 4) : (e = b, 0 === ve && i(et)), e === b && (t.substr(fe, 3) === nt ? (e = nt, fe += 3) : (e = b, 0 === ve && i(rt)), e === b && (t.substr(fe, 4) === it ? (e = it, fe += 4) : (e = b, 0 === ve && i(at)), e === b && (t.substr(fe, 4) === ot ? (e = ot, fe += 4) : (e = b, 0 === ve && i(st)), e === b && (t.substr(fe, 4) === ut ? (e = ut, fe += 4) : (e = b, 0 === ve && i(lt)), e === b && (t.substr(fe, 5) === ct ? (e = ct, fe += 5) : (e = b, 0 === ve && i(dt)), e === b && (t.substr(fe, 4) === ft ? (e = ft, fe += 4) : (e = b, 0 === ve && i(ht)), e === b && (t.substr(fe, 5) === pt ? (e = pt, fe += 5) : (e = b, 0 === ve && i(gt))))))))))), e
                    }

                    function f() {
                        var e;
                        return t.substr(fe, 9) === mt ? (e = mt, fe += 9) : (e = b, 0 === ve && i(vt)), e === b && (t.substr(fe, 7) === yt ? (e = yt, fe += 7) : (e = b, 0 === ve && i(_t)), e === b && (t.substr(fe, 5) === bt ? (e = bt, fe += 5) : (e = b, 0 === ve && i(xt)), e === b && (t.substr(fe, 8) === wt ? (e = wt, fe += 8) : (e = b, 0 === ve && i(kt)), e === b && (t.substr(fe, 5) === Mt ? (e = Mt, fe += 5) : (e = b, 0 === ve && i(St)), e === b && (t.substr(fe, 7) === Tt ? (e = Tt, fe += 7) : (e = b, 0 === ve && i(Et)), e === b && (t.substr(fe, 8) === At ? (e = At, fe += 8) : (e = b, 0 === ve && i(Lt)), e === b && (t.substr(fe, 5) === Ct ? (e = Ct, fe += 5) : (e = b, 0 === ve && i(Dt)), e === b && (t.substr(fe, 10) === Pt ? (e = Pt, fe += 10) : (e = b, 0 === ve && i(It)), e === b && (t.substr(fe, 9) === Nt ? (e = Nt, fe += 9) : (e = b, 0 === ve && i(Ot)), e === b && (t.substr(fe, 8) === zt ? (e = zt, fe += 8) : (e = b, 0 === ve && i(jt)), e === b && (t.substr(fe, 9) === Ft ? (e = Ft, fe += 9) : (e = b, 0 === ve && i(Ut)), e === b && (t.substr(fe, 10) === Rt ? (e = Rt, fe += 10) : (e = b, 0 === ve && i(qt)), e === b && (t.substr(fe, 10) === Bt ? (e = Bt, fe += 10) : (e = b, 0 === ve && i(Gt)), e === b && (t.substr(fe, 9) === $t ? (e = $t, fe += 9) : (e = b, 0 === ve && i(Ht)), e === b && (t.substr(fe, 8) === Yt ? (e = Yt, fe += 8) : (e = b, 0 === ve && i(Vt)), e === b && (t.substr(fe, 9) === Wt ? (e = Wt, fe += 9) : (e = b, 0 === ve && i(Xt)), e === b && (t.substr(fe, 8) === Jt ? (e = Jt, fe += 8) : (e = b, 0 === ve && i(Kt)), e === b && (t.substr(fe, 9) === Zt ? (e = Zt, fe += 9) : (e = b, 0 === ve && i(Qt)))))))))))))))))))), e
                    }

                    function h() {
                        var e, n, r, a;
                        return e = fe, 91 === t.charCodeAt(fe) ? (n = E, fe++) : (n = b, 0 === ve && i(A)), n !== b ? (r = m(), r !== b ? (93 === t.charCodeAt(fe) ? (a = L, fe++) : (a = b, 0 === ve && i(C)), a !== b ? (he = e, n = te(r), e = n) : (fe = e, e = b)) : (fe = e, e = b)) : (fe = e, e = b), e
                    }

                    function p() {
                        var e, n, r;
                        if (e = fe, n = [], ee.test(t.charAt(fe)) ? (r = t.charAt(fe), fe++) : (r = b, 0 === ve && i(ne)), r !== b)for (; r !== b;)n.push(r), ee.test(t.charAt(fe)) ? (r = t.charAt(fe), fe++) : (r = b, 0 === ve && i(ne)); else n = b;
                        return n !== b && (he = e, n = re(n)), e = n
                    }

                    function g() {
                        var e, n, r;
                        if (e = fe, n = [], ie.test(t.charAt(fe)) ? (r = t.charAt(fe), fe++) : (r = b, 0 === ve && i(ae)), r !== b)for (; r !== b;)n.push(r), ie.test(t.charAt(fe)) ? (r = t.charAt(fe), fe++) : (r = b, 0 === ve && i(ae)); else n = b;
                        return n !== b && (he = e, n = oe(n)), e = n
                    }

                    function m() {
                        var e, n, r;
                        if (e = fe, n = [], se.test(t.charAt(fe)) ? (r = t.charAt(fe), fe++) : (r = b, 0 === ve && i(ue)), r !== b)for (; r !== b;)n.push(r), se.test(t.charAt(fe)) ? (r = t.charAt(fe), fe++) : (r = b, 0 === ve && i(ue)); else n = b;
                        return n !== b && (he = e, n = le(n)), e = n
                    }

                    function v() {
                        var e, n;
                        for (e = [], ce.test(t.charAt(fe)) ? (n = t.charAt(fe), fe++) : (n = b, 0 === ve && i(de)); n !== b;)e.push(n), ce.test(t.charAt(fe)) ? (n = t.charAt(fe), fe++) : (n = b, 0 === ve && i(de));
                        return e
                    }

                    var y, _ = arguments.length > 1 ? arguments[1] : {}, b = {}, x = {start: o}, w = o, k = ",", M = {
                        type: "literal",
                        value: ",",
                        description: '","'
                    }, S = function (t, e) {
                        return [t].concat(e)
                    }, T = function (t) {
                        return [t]
                    }, E = "[", A = {type: "literal", value: "[", description: '"["'}, L = "]", C = {
                        type: "literal",
                        value: "]",
                        description: '"]"'
                    }, D = ">", P = {type: "literal", value: ">", description: '">"'}, I = function (t, e, n) {
                        return {start: t, middle: n, end: e, str: "[" + t.str + ", " + e.str + "] > " + n.str}
                    }, N = function (t, e) {
                        return t.filters = e, t.str += e.map(function (t) {
                            return "[" + t + "]"
                        }).join(""), t
                    }, O = function (t) {
                        return t
                    }, z = "(", j = {type: "literal", value: "(", description: '"("'}, F = ")", U = {
                        type: "literal",
                        value: ")",
                        description: '")"'
                    }, R = function (t) {
                        return {
                            stream: t, str: "(" + t.map(function (t) {
                                return t.str
                            }).join(", ") + ")"
                        }
                    }, q = "@", B = {type: "literal", value: "@", description: '"@"'}, G = ":", $ = {
                        type: "literal",
                        value: ":",
                        description: '":"'
                    }, H = function (t, e) {
                        return {event: e, name: t, str: "@" + t + ":" + e}
                    }, Y = function (t, e) {
                        return {event: e, mark: t, str: t + ":" + e}
                    }, V = function (t, e) {
                        return {event: e, target: t, str: t + ":" + e}
                    }, W = function (t) {
                        return {event: t, str: t}
                    }, X = function (t) {
                        return {signal: t, str: t}
                    }, J = "rect", K = {
                        type: "literal",
                        value: "rect",
                        description: '"rect"'
                    }, Z = "symbol", Q = {
                        type: "literal",
                        value: "symbol",
                        description: '"symbol"'
                    }, tt = "path", et = {
                        type: "literal",
                        value: "path",
                        description: '"path"'
                    }, nt = "arc", rt = {
                        type: "literal",
                        value: "arc",
                        description: '"arc"'
                    }, it = "area", at = {
                        type: "literal",
                        value: "area",
                        description: '"area"'
                    }, ot = "line", st = {
                        type: "literal",
                        value: "line",
                        description: '"line"'
                    }, ut = "rule", lt = {
                        type: "literal",
                        value: "rule",
                        description: '"rule"'
                    }, ct = "image", dt = {
                        type: "literal",
                        value: "image",
                        description: '"image"'
                    }, ft = "text", ht = {
                        type: "literal",
                        value: "text",
                        description: '"text"'
                    }, pt = "group", gt = {
                        type: "literal",
                        value: "group",
                        description: '"group"'
                    }, mt = "mousedown", vt = {
                        type: "literal",
                        value: "mousedown",
                        description: '"mousedown"'
                    }, yt = "mouseup", _t = {
                        type: "literal",
                        value: "mouseup",
                        description: '"mouseup"'
                    }, bt = "click", xt = {
                        type: "literal",
                        value: "click",
                        description: '"click"'
                    }, wt = "dblclick", kt = {
                        type: "literal",
                        value: "dblclick",
                        description: '"dblclick"'
                    }, Mt = "wheel", St = {
                        type: "literal",
                        value: "wheel",
                        description: '"wheel"'
                    }, Tt = "keydown", Et = {
                        type: "literal",
                        value: "keydown",
                        description: '"keydown"'
                    }, At = "keypress", Lt = {
                        type: "literal",
                        value: "keypress",
                        description: '"keypress"'
                    }, Ct = "keyup", Dt = {
                        type: "literal",
                        value: "keyup",
                        description: '"keyup"'
                    }, Pt = "mousewheel", It = {
                        type: "literal",
                        value: "mousewheel",
                        description: '"mousewheel"'
                    }, Nt = "mousemove", Ot = {
                        type: "literal",
                        value: "mousemove",
                        description: '"mousemove"'
                    }, zt = "mouseout", jt = {
                        type: "literal",
                        value: "mouseout",
                        description: '"mouseout"'
                    }, Ft = "mouseover", Ut = {
                        type: "literal",
                        value: "mouseover",
                        description: '"mouseover"'
                    }, Rt = "mouseenter", qt = {
                        type: "literal",
                        value: "mouseenter",
                        description: '"mouseenter"'
                    }, Bt = "touchstart", Gt = {
                        type: "literal",
                        value: "touchstart",
                        description: '"touchstart"'
                    }, $t = "touchmove", Ht = {
                        type: "literal",
                        value: "touchmove",
                        description: '"touchmove"'
                    }, Yt = "touchend", Vt = {
                        type: "literal",
                        value: "touchend",
                        description: '"touchend"'
                    }, Wt = "dragenter", Xt = {
                        type: "literal",
                        value: "dragenter",
                        description: '"dragenter"'
                    }, Jt = "dragover", Kt = {
                        type: "literal",
                        value: "dragover",
                        description: '"dragover"'
                    }, Zt = "dragleave", Qt = {
                        type: "literal",
                        value: "dragleave",
                        description: '"dragleave"'
                    }, te = function (t) {
                        return t
                    }, ee = /^[a-zA-Z0-9_\-]/, ne = {
                        type: "class",
                        value: "[a-zA-Z0-9_-]",
                        description: "[a-zA-Z0-9_-]"
                    }, re = function (t) {
                        return t.join("")
                    }, ie = /^[a-zA-Z0-9\-_  #.>+~[\]=|\^$*]/, ae = {
                        type: "class",
                        value: "[a-zA-Z0-9-_  #\\.\\>\\+~\\[\\]=|\\^\\$\\*]",
                        description: "[a-zA-Z0-9-_  #\\.\\>\\+~\\[\\]=|\\^\\$\\*]"
                    }, oe = function (t) {
                        return t.join("")
                    }, se = /^['"a-zA-Z0-9_().><=! \t-&|~]/, ue = {
                        type: "class",
                        value: "['\"a-zA-Z0-9_\\(\\)\\.\\>\\<\\=\\! \\t-&|~]",
                        description: "['\"a-zA-Z0-9_\\(\\)\\.\\>\\<\\=\\! \\t-&|~]"
                    }, le = function (t) {
                        return t.join("")
                    }, ce = /^[ \t\r\n]/, de = {
                        type: "class",
                        value: "[ \\t\\r\\n]",
                        description: "[ \\t\\r\\n]"
                    }, fe = 0, he = 0, pe = [{line: 1, column: 1, seenCR: !1}], ge = 0, me = [], ve = 0;
                    if ("startRule" in _) {
                        if (!(_.startRule in x))throw new Error("Can't start parsing from rule \"" + _.startRule + '".');
                        w = x[_.startRule]
                    }
                    if (y = w(), y !== b && fe === t.length)return y;
                    throw y !== b && fe < t.length && i({
                        type: "end",
                        description: "end of input"
                    }), a(null, me, ge < t.length ? t.charAt(ge) : null, ge < t.length ? r(ge, ge + 1) : r(ge, ge))
                }

                return t(e, Error), {SyntaxError: e, parse: n}
            }()
        }, {}],
        43: [function (t, e, n) {
            function r(t) {
                var e, n, r = {};
                for (e = 0, n = t.length; e < n; ++e)r[t[e]] = 1;
                return r
            }

            function i(t) {
                var e, n = [];
                for (e in t)n.push(e);
                return n
            }

            e.exports = function (e) {
                function n(t) {
                    var e = {code: a(t), globals: i(p), fields: i(g), dataSources: i(m), defs: u};
                    return p = {}, g = {}, m = {}, e
                }

                function a(t) {
                    if ("string" == typeof t)return t;
                    var e = y[t.type];
                    if (null == e)throw new Error("Unsupported type: " + t.type);
                    return e(t)
                }

                e = e || {};
                var o = e.constants || t("./constants"), s = (e.functions || t("./functions"))(a), u = e.functionDefs ? e.functionDefs(a) : {}, l = e.idWhiteList ? r(e.idWhiteList) : null, c = e.idBlackList ? r(e.idBlackList) : null, d = 0, f = e.fieldVar || "datum", h = e.globalVar || "signals", p = {}, g = {}, m = {}, v = "function" == typeof h ? h : function (t) {
                    return h + '["' + t + '"]'
                }, y = {
                    Literal: function (t) {
                        return t.raw
                    }, Identifier: function (t) {
                        var e = t.name;
                        if (d > 0)return e;
                        if (o.hasOwnProperty(e))return o[e];
                        if (l)return l.hasOwnProperty(e) ? e : (p[e] = 1, v(e));
                        if (c && c.hasOwnProperty(e))throw new Error("Illegal identifier: " + e);
                        return e
                    }, Program: function (t) {
                        return t.body.map(a).join("\n")
                    }, MemberExpression: function (t) {
                        var e = !t.computed, n = a(t.object);
                        e && (d += 1);
                        var r = a(t.property);
                        return n === f && (g[r] = 1), e && (d -= 1), n + (e ? "." + r : "[" + r + "]")
                    }, CallExpression: function (t) {
                        if ("Identifier" !== t.callee.type)throw new Error("Illegal callee type: " + t.callee.type);
                        var e = t.callee.name, n = t.arguments, r = s.hasOwnProperty(e) && s[e];
                        if (!r)throw new Error("Unrecognized function: " + e);
                        return r instanceof Function ? r(n, p, g, m) : r + "(" + n.map(a).join(",") + ")"
                    }, ArrayExpression: function (t) {
                        return "[" + t.elements.map(a).join(",") + "]"
                    }, BinaryExpression: function (t) {
                        return "(" + a(t.left) + t.operator + a(t.right) + ")"
                    }, UnaryExpression: function (t) {
                        return "(" + t.operator + a(t.argument) + ")"
                    }, ConditionalExpression: function (t) {
                        return "(" + a(t.test) + "?" + a(t.consequent) + ":" + a(t.alternate) + ")"
                    }, LogicalExpression: function (t) {
                        return "(" + a(t.left) + t.operator + a(t.right) + ")"
                    }, ObjectExpression: function (t) {
                        return "{" + t.properties.map(a).join(",") + "}"
                    }, Property: function (t) {
                        d += 1;
                        var e = a(t.key);
                        return d -= 1, e + ":" + a(t.value)
                    }, ExpressionStatement: function (t) {
                        return a(t.expression)
                    }
                };
                return n.functions = s, n.functionDefs = u, n.constants = o, n
            }
        }, {"./constants": 44, "./functions": 45}],
        44: [function (t, e, n) {
            e.exports = {
                NaN: "NaN",
                E: "Math.E",
                LN2: "Math.LN2",
                LN10: "Math.LN10",
                LOG2E: "Math.LOG2E",
                LOG10E: "Math.LOG10E",
                PI: "Math.PI",
                SQRT1_2: "Math.SQRT1_2",
                SQRT2: "Math.SQRT2"
            }
        }, {}],
        45: [function (t, e, n) {
            e.exports = function (t) {
                function e(e, n, r, i) {
                    var a = t(n[0]);
                    return r && (a = r + "(" + a + ")", 0 === r.lastIndexOf("new ", 0) && (a = "(" + a + ")")), a + "." + e + (i < 0 ? "" : 0 === i ? "()" : "(" + n.slice(1).map(t).join(",") + ")")
                }

                function n(t, n, r) {
                    return function (i) {
                        return e(t, i, n, r)
                    }
                }

                var r = "new Date", i = "String", a = "RegExp";
                return {
                    isNaN: "isNaN",
                    isFinite: "isFinite",
                    abs: "Math.abs",
                    acos: "Math.acos",
                    asin: "Math.asin",
                    atan: "Math.atan",
                    atan2: "Math.atan2",
                    ceil: "Math.ceil",
                    cos: "Math.cos",
                    exp: "Math.exp",
                    floor: "Math.floor",
                    log: "Math.log",
                    max: "Math.max",
                    min: "Math.min",
                    pow: "Math.pow",
                    random: "Math.random",
                    round: "Math.round",
                    sin: "Math.sin",
                    sqrt: "Math.sqrt",
                    tan: "Math.tan",
                    clamp: function (e) {
                        if (e.length < 3)throw new Error("Missing arguments to clamp function.");
                        if (e.length > 3)throw new Error("Too many arguments to clamp function.");
                        var n = e.map(t);
                        return "Math.max(" + n[1] + ", Math.min(" + n[2] + "," + n[0] + "))"
                    },
                    now: "Date.now",
                    utc: "Date.UTC",
                    datetime: r,
                    date: n("getDate", r, 0),
                    day: n("getDay", r, 0),
                    year: n("getFullYear", r, 0),
                    month: n("getMonth", r, 0),
                    hours: n("getHours", r, 0),
                    minutes: n("getMinutes", r, 0),
                    seconds: n("getSeconds", r, 0),
                    milliseconds: n("getMilliseconds", r, 0),
                    time: n("getTime", r, 0),
                    timezoneoffset: n("getTimezoneOffset", r, 0),
                    utcdate: n("getUTCDate", r, 0),
                    utcday: n("getUTCDay", r, 0),
                    utcyear: n("getUTCFullYear", r, 0),
                    utcmonth: n("getUTCMonth", r, 0),
                    utchours: n("getUTCHours", r, 0),
                    utcminutes: n("getUTCMinutes", r, 0),
                    utcseconds: n("getUTCSeconds", r, 0),
                    utcmilliseconds: n("getUTCMilliseconds", r, 0),
                    length: n("length", null, -1),
                    indexof: n("indexOf", null),
                    lastindexof: n("lastIndexOf", null),
                    parseFloat: "parseFloat",
                    parseInt: "parseInt",
                    upper: n("toUpperCase", i, 0),
                    lower: n("toLowerCase", i, 0),
                    slice: n("slice", i),
                    substring: n("substring", i),
                    replace: n("replace", i),
                    regexp: a,
                    test: n("test", a),
                    if: function (e) {
                        if (e.length < 3)throw new Error("Missing arguments to if function.");
                        if (e.length > 3)throw new Error("Too many arguments to if function.");
                        var n = e.map(t);
                        return n[0] + "?" + n[1] + ":" + n[2]
                    }
                }
            }
        }, {}],
        46: [function (t, e, n) {
            var r = t("./parser"), i = t("./codegen"), a = e.exports = {
                parse: function (t, e) {
                    return r.parse("(" + t + ")", e)
                }, code: function (t) {
                    return i(t)
                }, compiler: function (t, e) {
                    t = t.slice();
                    var n = i(e), r = t.length, o = function (e) {
                        var i = n(a.parse(e));
                        t[r] = '"use strict"; return (' + i.code + ");";
                        var o = Function.apply(null, t);
                        return i.fn = t.length > 8 ? function () {
                            return o.apply(i, arguments)
                        } : function (t, e, n, r, a, s, u) {
                            return o.call(i, t, e, n, r, a, s, u)
                        }, i
                    };
                    return o.codegen = n, o
                }, functions: t("./functions"), constants: t("./constants")
            }
        }, {"./codegen": 43, "./constants": 44, "./functions": 45, "./parser": 47}],
        47: [function (t, e, n) {
            e.exports = function () {
                "use strict";
                function t(t, e) {
                    if (!t)throw new Error("ASSERT: " + e)
                }

                function e(t) {
                    return t >= 48 && t <= 57
                }

                function n(t) {
                    return "0123456789abcdefABCDEF".indexOf(t) >= 0
                }

                function r(t) {
                    return "01234567".indexOf(t) >= 0
                }

                function i(t) {
                    return 32 === t || 9 === t || 11 === t || 12 === t || 160 === t || t >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(t) >= 0
                }

                function a(t) {
                    return 10 === t || 13 === t || 8232 === t || 8233 === t
                }

                function o(t) {
                    return 36 === t || 95 === t || t >= 65 && t <= 90 || t >= 97 && t <= 122 || 92 === t || t >= 128 && Mt.NonAsciiIdentifierStart.test(String.fromCharCode(t))
                }

                function s(t) {
                    return 36 === t || 95 === t || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 48 && t <= 57 || 92 === t || t >= 128 && Mt.NonAsciiIdentifierPart.test(String.fromCharCode(t))
                }

                function u(t) {
                    switch (t) {
                        case"class":
                        case"enum":
                        case"export":
                        case"extends":
                        case"import":
                        case"super":
                            return !0;
                        default:
                            return !1
                    }
                }

                function l(t) {
                    switch (t) {
                        case"implements":
                        case"interface":
                        case"package":
                        case"private":
                        case"protected":
                        case"public":
                        case"static":
                        case"yield":
                        case"let":
                            return !0;
                        default:
                            return !1
                    }
                }

                function c(t) {
                    if (Tt && l(t))return !0;
                    switch (t.length) {
                        case 2:
                            return "if" === t || "in" === t || "do" === t;
                        case 3:
                            return "var" === t || "for" === t || "new" === t || "try" === t || "let" === t;
                        case 4:
                            return "this" === t || "else" === t || "case" === t || "void" === t || "with" === t || "enum" === t;
                        case 5:
                            return "while" === t || "break" === t || "catch" === t || "throw" === t || "const" === t || "yield" === t || "class" === t || "super" === t;
                        case 6:
                            return "return" === t || "typeof" === t || "delete" === t || "switch" === t || "export" === t || "import" === t;
                        case 7:
                            return "default" === t || "finally" === t || "extends" === t;
                        case 8:
                            return "function" === t || "continue" === t || "debugger" === t;
                        case 10:
                            return "instanceof" === t;
                        default:
                            return !1
                    }
                }

                function d() {
                    var t, e;
                    for (e = 0 === Et; Et < Ct;)if (t = St.charCodeAt(Et), i(t))++Et; else {
                        if (!a(t))break;
                        ++Et, 13 === t && 10 === St.charCodeAt(Et) && ++Et, ++At, Lt = Et, e = !0
                    }
                }

                function f(t) {
                    var e, r, i, a = 0;
                    for (r = "u" === t ? 4 : 2, e = 0; e < r; ++e) {
                        if (!(Et < Ct && n(St[Et])))return "";
                        i = St[Et++], a = 16 * a + "0123456789abcdef".indexOf(i.toLowerCase())
                    }
                    return String.fromCharCode(a)
                }

                function h() {
                    var t, e, r, i;
                    for (t = St[Et], e = 0, "}" === t && U({}, kt.UnexpectedToken, "ILLEGAL"); Et < Ct && (t = St[Et++], n(t));)e = 16 * e + "0123456789abcdef".indexOf(t.toLowerCase());
                    return (e > 1114111 || "}" !== t) && U({}, kt.UnexpectedToken, "ILLEGAL"), e <= 65535 ? String.fromCharCode(e) : (r = (e - 65536 >> 10) + 55296, i = (e - 65536 & 1023) + 56320, String.fromCharCode(r, i))
                }

                function p() {
                    var t, e;
                    for (t = St.charCodeAt(Et++), e = String.fromCharCode(t), 92 === t && (117 !== St.charCodeAt(Et) && U({}, kt.UnexpectedToken, "ILLEGAL"), ++Et, t = f("u"), t && "\\" !== t && o(t.charCodeAt(0)) || U({}, kt.UnexpectedToken, "ILLEGAL"), e = t); Et < Ct && (t = St.charCodeAt(Et), s(t));)++Et, e += String.fromCharCode(t), 92 === t && (e = e.substr(0, e.length - 1), 117 !== St.charCodeAt(Et) && U({}, kt.UnexpectedToken, "ILLEGAL"), ++Et, t = f("u"), t && "\\" !== t && s(t.charCodeAt(0)) || U({}, kt.UnexpectedToken, "ILLEGAL"), e += t);
                    return e
                }

                function g() {
                    var t, e;
                    for (t = Et++; Et < Ct;) {
                        if (e = St.charCodeAt(Et), 92 === e)return Et = t, p();
                        if (!s(e))break;
                        ++Et
                    }
                    return St.slice(t, Et)
                }

                function m() {
                    var t, e, n;
                    return t = Et, e = 92 === St.charCodeAt(Et) ? p() : g(), n = 1 === e.length ? _t.Identifier : c(e) ? _t.Keyword : "null" === e ? _t.NullLiteral : "true" === e || "false" === e ? _t.BooleanLiteral : _t.Identifier, {
                        type: n,
                        value: e,
                        lineNumber: At,
                        lineStart: Lt,
                        start: t,
                        end: Et
                    }
                }

                function v() {
                    var t, e, n, r, i = Et, a = St.charCodeAt(Et), o = St[Et];
                    switch (a) {
                        case 46:
                        case 40:
                        case 41:
                        case 59:
                        case 44:
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 63:
                        case 126:
                            return ++Et, It.tokenize && (40 === a ? It.openParenToken = It.tokens.length : 123 === a && (It.openCurlyToken = It.tokens.length)), {
                                type: _t.Punctuator,
                                value: String.fromCharCode(a),
                                lineNumber: At,
                                lineStart: Lt,
                                start: i,
                                end: Et
                            };
                        default:
                            if (t = St.charCodeAt(Et + 1), 61 === t)switch (a) {
                                case 43:
                                case 45:
                                case 47:
                                case 60:
                                case 62:
                                case 94:
                                case 124:
                                case 37:
                                case 38:
                                case 42:
                                    return Et += 2, {
                                        type: _t.Punctuator,
                                        value: String.fromCharCode(a) + String.fromCharCode(t),
                                        lineNumber: At,
                                        lineStart: Lt,
                                        start: i,
                                        end: Et
                                    };
                                case 33:
                                case 61:
                                    return Et += 2, 61 === St.charCodeAt(Et) && ++Et, {
                                        type: _t.Punctuator,
                                        value: St.slice(i, Et),
                                        lineNumber: At,
                                        lineStart: Lt,
                                        start: i,
                                        end: Et
                                    }
                            }
                    }
                    return r = St.substr(Et, 4), ">>>=" === r ? (Et += 4, {
                        type: _t.Punctuator,
                        value: r,
                        lineNumber: At,
                        lineStart: Lt,
                        start: i,
                        end: Et
                    }) : (n = r.substr(0, 3), ">>>" === n || "<<=" === n || ">>=" === n ? (Et += 3, {
                        type: _t.Punctuator,
                        value: n,
                        lineNumber: At,
                        lineStart: Lt,
                        start: i,
                        end: Et
                    }) : (e = n.substr(0, 2), o === e[1] && "+-<>&|".indexOf(o) >= 0 || "=>" === e ? (Et += 2, {
                        type: _t.Punctuator,
                        value: e,
                        lineNumber: At,
                        lineStart: Lt,
                        start: i,
                        end: Et
                    }) : "<>=!+-*%&|^/".indexOf(o) >= 0 ? (++Et, {
                        type: _t.Punctuator,
                        value: o,
                        lineNumber: At,
                        lineStart: Lt,
                        start: i,
                        end: Et
                    }) : void U({}, kt.UnexpectedToken, "ILLEGAL")))
                }

                function y(t) {
                    for (var e = ""; Et < Ct && n(St[Et]);)e += St[Et++];
                    return 0 === e.length && U({}, kt.UnexpectedToken, "ILLEGAL"), o(St.charCodeAt(Et)) && U({}, kt.UnexpectedToken, "ILLEGAL"), {
                        type: _t.NumericLiteral,
                        value: parseInt("0x" + e, 16),
                        lineNumber: At,
                        lineStart: Lt,
                        start: t,
                        end: Et
                    }
                }

                function _(t) {
                    for (var n = "0" + St[Et++]; Et < Ct && r(St[Et]);)n += St[Et++];
                    return (o(St.charCodeAt(Et)) || e(St.charCodeAt(Et))) && U({}, kt.UnexpectedToken, "ILLEGAL"), {
                        type: _t.NumericLiteral,
                        value: parseInt(n, 8),
                        octal: !0,
                        lineNumber: At,
                        lineStart: Lt,
                        start: t,
                        end: Et
                    }
                }

                function b() {
                    var n, i, a;
                    if (a = St[Et], t(e(a.charCodeAt(0)) || "." === a, "Numeric literal must start with a decimal digit or a decimal point"), i = Et, n = "", "." !== a) {
                        if (n = St[Et++], a = St[Et], "0" === n) {
                            if ("x" === a || "X" === a)return ++Et, y(i);
                            if (r(a))return _(i);
                            a && e(a.charCodeAt(0)) && U({}, kt.UnexpectedToken, "ILLEGAL")
                        }
                        for (; e(St.charCodeAt(Et));)n += St[Et++];
                        a = St[Et]
                    }
                    if ("." === a) {
                        for (n += St[Et++]; e(St.charCodeAt(Et));)n += St[Et++];
                        a = St[Et]
                    }
                    if ("e" === a || "E" === a)if (n += St[Et++], a = St[Et], "+" !== a && "-" !== a || (n += St[Et++]), e(St.charCodeAt(Et)))for (; e(St.charCodeAt(Et));)n += St[Et++]; else U({}, kt.UnexpectedToken, "ILLEGAL");
                    return o(St.charCodeAt(Et)) && U({}, kt.UnexpectedToken, "ILLEGAL"), {
                        type: _t.NumericLiteral,
                        value: parseFloat(n),
                        lineNumber: At,
                        lineStart: Lt,
                        start: i,
                        end: Et
                    }
                }

                function x() {
                    var e, n, i, o, s, u, l, c, d = "", p = !1;
                    for (l = At, c = Lt, e = St[Et], t("'" === e || '"' === e, "String literal must starts with a quote"), n = Et, ++Et; Et < Ct;) {
                        if (i = St[Et++], i === e) {
                            e = "";
                            break
                        }
                        if ("\\" === i)if (i = St[Et++], i && a(i.charCodeAt(0)))++At, "\r" === i && "\n" === St[Et] && ++Et, Lt = Et; else switch (i) {
                            case"u":
                            case"x":
                                "{" === St[Et] ? (++Et, d += h()) : (u = Et, s = f(i), s ? d += s : (Et = u, d += i));
                                break;
                            case"n":
                                d += "\n";
                                break;
                            case"r":
                                d += "\r";
                                break;
                            case"t":
                                d += "\t";
                                break;
                            case"b":
                                d += "\b";
                                break;
                            case"f":
                                d += "\f";
                                break;
                            case"v":
                                d += "\v";
                                break;
                            default:
                                r(i) ? (o = "01234567".indexOf(i), 0 !== o && (p = !0), Et < Ct && r(St[Et]) && (p = !0, o = 8 * o + "01234567".indexOf(St[Et++]), "0123".indexOf(i) >= 0 && Et < Ct && r(St[Et]) && (o = 8 * o + "01234567".indexOf(St[Et++]))), d += String.fromCharCode(o)) : d += i
                        } else {
                            if (a(i.charCodeAt(0)))break;
                            d += i
                        }
                    }
                    return "" !== e && U({}, kt.UnexpectedToken, "ILLEGAL"), {
                        type: _t.StringLiteral,
                        value: d,
                        octal: p,
                        startLineNumber: l,
                        startLineStart: c,
                        lineNumber: At,
                        lineStart: Lt,
                        start: n,
                        end: Et
                    }
                }

                function w(t, e) {
                    var n, r = t;
                    e.indexOf("u") >= 0 && (r = r.replace(/\\u\{([0-9a-fA-F]+)\}/g, function (t, e) {
                        return parseInt(e, 16) <= 1114111 ? "x" : void U({}, kt.InvalidRegExp)
                    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
                    try {
                        n = new RegExp(r)
                    } catch (t) {
                        U({}, kt.InvalidRegExp)
                    }
                    try {
                        return new RegExp(t, e)
                    } catch (t) {
                        return null
                    }
                }

                function k() {
                    var e, n, r, i, o;
                    for (e = St[Et], t("/" === e, "Regular expression literal must start with a slash"), n = St[Et++], r = !1, i = !1; Et < Ct;)if (e = St[Et++], n += e, "\\" === e)e = St[Et++], a(e.charCodeAt(0)) && U({}, kt.UnterminatedRegExp), n += e; else if (a(e.charCodeAt(0)))U({}, kt.UnterminatedRegExp); else if (r)"]" === e && (r = !1); else {
                        if ("/" === e) {
                            i = !0;
                            break
                        }
                        "[" === e && (r = !0)
                    }
                    return i || U({}, kt.UnterminatedRegExp), o = n.substr(1, n.length - 2), {value: o, literal: n}
                }

                function M() {
                    var t, e, n, r;
                    for (e = "", n = ""; Et < Ct && (t = St[Et], s(t.charCodeAt(0)));)if (++Et, "\\" === t && Et < Ct)if (t = St[Et], "u" === t) {
                        if (++Et, r = Et, t = f("u"))for (n += t, e += "\\u"; r < Et; ++r)e += St[r]; else Et = r, n += "u", e += "\\u";
                        R({}, kt.UnexpectedToken, "ILLEGAL")
                    } else e += "\\", R({}, kt.UnexpectedToken, "ILLEGAL"); else n += t, e += t;
                    return {value: n, literal: e}
                }

                function S() {
                    var t, e, n, r;
                    return Dt = null, d(), t = Et, e = k(), n = M(), r = w(e.value, n.value), It.tokenize ? {
                        type: _t.RegularExpression,
                        value: r,
                        regex: {pattern: e.value, flags: n.value},
                        lineNumber: At,
                        lineStart: Lt,
                        start: t,
                        end: Et
                    } : {
                        literal: e.literal + n.literal,
                        value: r,
                        regex: {pattern: e.value, flags: n.value},
                        start: t,
                        end: Et
                    }
                }

                function T() {
                    var t, e, n, r;
                    return d(), t = Et, e = {start: {line: At, column: Et - Lt}}, n = S(), e.end = {
                        line: At,
                        column: Et - Lt
                    }, It.tokenize || (It.tokens.length > 0 && (r = It.tokens[It.tokens.length - 1], r.range[0] === t && "Punctuator" === r.type && ("/" !== r.value && "/=" !== r.value || It.tokens.pop())), It.tokens.push({
                        type: "RegularExpression",
                        value: n.literal,
                        regex: n.regex,
                        range: [t, Et],
                        loc: e
                    })), n
                }

                function E(t) {
                    return t.type === _t.Identifier || t.type === _t.Keyword || t.type === _t.BooleanLiteral || t.type === _t.NullLiteral
                }

                function A() {
                    var t, e;
                    if (t = It.tokens[It.tokens.length - 1], !t)return T();
                    if ("Punctuator" === t.type) {
                        if ("]" === t.value)return v();
                        if (")" === t.value)return e = It.tokens[It.openParenToken - 1], !e || "Keyword" !== e.type || "if" !== e.value && "while" !== e.value && "for" !== e.value && "with" !== e.value ? v() : T();
                        if ("}" === t.value) {
                            if (It.tokens[It.openCurlyToken - 3] && "Keyword" === It.tokens[It.openCurlyToken - 3].type) {
                                if (e = It.tokens[It.openCurlyToken - 4], !e)return v()
                            } else {
                                if (!It.tokens[It.openCurlyToken - 4] || "Keyword" !== It.tokens[It.openCurlyToken - 4].type)return v();
                                if (e = It.tokens[It.openCurlyToken - 5], !e)return T()
                            }
                            return v()
                        }
                        return T()
                    }
                    return "Keyword" === t.type && "this" !== t.value ? T() : v()
                }

                function L() {
                    var t;
                    return d(), Et >= Ct ? {
                        type: _t.EOF,
                        lineNumber: At,
                        lineStart: Lt,
                        start: Et,
                        end: Et
                    } : (t = St.charCodeAt(Et), o(t) ? m() : 40 === t || 41 === t || 59 === t ? v() : 39 === t || 34 === t ? x() : 46 === t ? e(St.charCodeAt(Et + 1)) ? b() : v() : e(t) ? b() : It.tokenize && 47 === t ? A() : v())
                }

                function C() {
                    var t, e, n, r;
                    return d(), t = {start: {line: At, column: Et - Lt}}, e = L(), t.end = {
                        line: At,
                        column: Et - Lt
                    }, e.type !== _t.EOF && (n = St.slice(e.start, e.end), r = {
                        type: bt[e.type],
                        value: n,
                        range: [e.start, e.end],
                        loc: t
                    }, e.regex && (r.regex = {pattern: e.regex.pattern, flags: e.regex.flags}), It.tokens.push(r)), e
                }

                function D() {
                    var t;
                    return t = Dt, Et = t.end, At = t.lineNumber, Lt = t.lineStart, Dt = "undefined" != typeof It.tokens ? C() : L(), Et = t.end, At = t.lineNumber, Lt = t.lineStart, t
                }

                function P() {
                    var t, e, n;
                    t = Et, e = At, n = Lt, Dt = "undefined" != typeof It.tokens ? C() : L(), Et = t, At = e, Lt = n
                }

                function I() {
                    this.line = At, this.column = Et - Lt
                }

                function N() {
                    this.start = new I, this.end = null
                }

                function O(t) {
                    t.type === _t.StringLiteral ? this.start = {
                        line: t.startLineNumber,
                        column: t.start - t.startLineStart
                    } : this.start = {line: t.lineNumber, column: t.start - t.lineStart}, this.end = null
                }

                function z() {
                    Et = Dt.start, Dt.type === _t.StringLiteral ? (At = Dt.startLineNumber, Lt = Dt.startLineStart) : (At = Dt.lineNumber, Lt = Dt.lineStart), It.range && (this.range = [Et, 0]), It.loc && (this.loc = new N)
                }

                function j(t) {
                    It.range && (this.range = [t.start, 0]), It.loc && (this.loc = new O(t))
                }

                function F() {
                    var t, e, n, r;
                    return t = Et, e = At, n = Lt, d(), r = At !== e, Et = t, At = e, Lt = n, r
                }

                function U(e, n) {
                    var r, i = Array.prototype.slice.call(arguments, 2), a = n.replace(/%(\d)/g, function (e, n) {
                        return t(n < i.length, "Message reference must be in range"), i[n]
                    });
                    throw"number" == typeof e.lineNumber ? (r = new Error("Line " + e.lineNumber + ": " + a), r.index = e.start, r.lineNumber = e.lineNumber, r.column = e.start - Lt + 1) : (r = new Error("Line " + At + ": " + a), r.index = Et, r.lineNumber = At, r.column = Et - Lt + 1), r.description = a, r
                }

                function R() {
                    try {
                        U.apply(null, arguments)
                    } catch (t) {
                        if (!It.errors)throw t;
                        It.errors.push(t)
                    }
                }

                function q(t) {
                    if (t.type === _t.EOF && U(t, kt.UnexpectedEOS), t.type === _t.NumericLiteral && U(t, kt.UnexpectedNumber), t.type === _t.StringLiteral && U(t, kt.UnexpectedString), t.type === _t.Identifier && U(t, kt.UnexpectedIdentifier), t.type === _t.Keyword) {
                        if (u(t.value))U(t, kt.UnexpectedReserved); else if (Tt && l(t.value))return void R(t, kt.StrictReservedWord);
                        U(t, kt.UnexpectedToken, t.value)
                    }
                    U(t, kt.UnexpectedToken, t.value)
                }

                function B(t) {
                    var e = D();
                    e.type === _t.Punctuator && e.value === t || q(e)
                }

                function G(t) {
                    if (It.errors) {
                        var e = Dt;
                        e.type !== _t.Punctuator && e.value !== t ? R(e, kt.UnexpectedToken, e.value) : D()
                    } else B(t)
                }

                function $(t) {
                    return Dt.type === _t.Punctuator && Dt.value === t
                }

                function H(t) {
                    return Dt.type === _t.Keyword && Dt.value === t
                }

                function Y() {
                    var t;
                    return 59 === St.charCodeAt(Et) || $(";") ? void D() : (t = At, d(), void(At === t && (Dt.type === _t.EOF || $("}") || q(Dt))))
                }

                function V() {
                    var t = [], e = new z;
                    for (B("["); !$("]");)$(",") ? (D(), t.push(null)) : (t.push(lt()), $("]") || B(","));
                    return D(), e.finishArrayExpression(t)
                }

                function W() {
                    var t, e = new z;
                    return t = D(), t.type === _t.StringLiteral || t.type === _t.NumericLiteral ? (Tt && t.octal && R(t, kt.StrictOctalLiteral), e.finishLiteral(t)) : e.finishIdentifier(t.value)
                }

                function X() {
                    var t, e, n, r, i = new z;
                    return t = Dt, t.type === _t.Identifier ? (n = W(), B(":"), r = lt(), i.finishProperty("init", n, r)) : t.type !== _t.EOF && t.type !== _t.Punctuator ? (e = W(), B(":"), r = lt(), i.finishProperty("init", e, r)) : void q(t)
                }

                function J() {
                    var t, e, n, r, i = [], a = {}, o = String, s = new z;
                    for (B("{"); !$("}");)t = X(), e = t.key.type === xt.Identifier ? t.key.name : o(t.key.value), r = "init" === t.kind ? wt.Data : "get" === t.kind ? wt.Get : wt.Set, n = "$" + e, Object.prototype.hasOwnProperty.call(a, n) ? (a[n] === wt.Data ? Tt && r === wt.Data ? R({}, kt.StrictDuplicateProperty) : r !== wt.Data && R({}, kt.AccessorDataProperty) : r === wt.Data ? R({}, kt.AccessorDataProperty) : a[n] & r && R({}, kt.AccessorGetSet), a[n] |= r) : a[n] = r, i.push(t), $("}") || G(",");
                    return B("}"), s.finishObjectExpression(i)
                }

                function K() {
                    var t;
                    return B("("), ++Pt.parenthesisCount, t = ct(), B(")"), t
                }

                function Z() {
                    var t, e, n, r;
                    if ($("("))return K();
                    if ($("["))return V();
                    if ($("{"))return J();
                    if (t = Dt.type, r = new z, t === _t.Identifier || Nt[Dt.value])n = r.finishIdentifier(D().value); else if (t === _t.StringLiteral || t === _t.NumericLiteral)Tt && Dt.octal && R(Dt, kt.StrictOctalLiteral), n = r.finishLiteral(D()); else {
                        if (t === _t.Keyword)throw new Error("Disabled.");
                        t === _t.BooleanLiteral ? (e = D(), e.value = "true" === e.value, n = r.finishLiteral(e)) : t === _t.NullLiteral ? (e = D(), e.value = null, n = r.finishLiteral(e)) : $("/") || $("/=") ? (n = "undefined" != typeof It.tokens ? r.finishLiteral(T()) : r.finishLiteral(S()), P()) : q(D())
                    }
                    return n
                }

                function Q() {
                    var t = [];
                    if (B("("), !$(")"))for (; Et < Ct && (t.push(lt()), !$(")"));)G(",");
                    return B(")"), t
                }

                function tt() {
                    var t, e = new z;
                    return t = D(), E(t) || q(t), e.finishIdentifier(t.value)
                }

                function et() {
                    return B("."), tt()
                }

                function nt() {
                    var t;
                    return B("["), t = ct(), B("]"), t
                }

                function rt() {
                    var t, e, n, r, i = Pt.allowIn;
                    for (r = Dt, Pt.allowIn = !0, t = Z(); ;)if ($("."))n = et(), t = new j(r).finishMemberExpression(".", t, n); else if ($("("))e = Q(), t = new j(r).finishCallExpression(t, e); else {
                        if (!$("["))break;
                        n = nt(), t = new j(r).finishMemberExpression("[", t, n)
                    }
                    return Pt.allowIn = i, t
                }

                function it() {
                    var t = rt();
                    if (Dt.type === _t.Punctuator && ($("++") || $("--")) && !F())throw new Error("Disabled.");
                    return t
                }

                function at() {
                    var t, e, n;
                    if (Dt.type !== _t.Punctuator && Dt.type !== _t.Keyword)e = it(); else {
                        if ($("++") || $("--"))throw new Error("Disabled.");
                        if ($("+") || $("-") || $("~") || $("!"))n = Dt, t = D(), e = at(), e = new j(n).finishUnaryExpression(t.value, e); else {
                            if (H("delete") || H("void") || H("typeof"))throw new Error("Disabled.");
                            e = it()
                        }
                    }
                    return e
                }

                function ot(t, e) {
                    var n = 0;
                    if (t.type !== _t.Punctuator && t.type !== _t.Keyword)return 0;
                    switch (t.value) {
                        case"||":
                            n = 1;
                            break;
                        case"&&":
                            n = 2;
                            break;
                        case"|":
                            n = 3;
                            break;
                        case"^":
                            n = 4;
                            break;
                        case"&":
                            n = 5;
                            break;
                        case"==":
                        case"!=":
                        case"===":
                        case"!==":
                            n = 6;
                            break;
                        case"<":
                        case">":
                        case"<=":
                        case">=":
                        case"instanceof":
                            n = 7;
                            break;
                        case"in":
                            n = e ? 7 : 0;
                            break;
                        case"<<":
                        case">>":
                        case">>>":
                            n = 8;
                            break;
                        case"+":
                        case"-":
                            n = 9;
                            break;
                        case"*":
                        case"/":
                        case"%":
                            n = 11
                    }
                    return n
                }

                function st() {
                    var t, e, n, r, i, a, o, s, u, l;
                    if (t = Dt, u = at(), r = Dt, i = ot(r, Pt.allowIn), 0 === i)return u;
                    for (r.prec = i, D(), e = [t, Dt], o = at(), a = [u, r, o]; (i = ot(Dt, Pt.allowIn)) > 0;) {
                        for (; a.length > 2 && i <= a[a.length - 2].prec;)o = a.pop(), s = a.pop().value, u = a.pop(), e.pop(), n = new j(e[e.length - 1]).finishBinaryExpression(s, u, o), a.push(n);
                        r = D(), r.prec = i, a.push(r), e.push(Dt), n = at(), a.push(n)
                    }
                    for (l = a.length - 1, n = a[l], e.pop(); l > 1;)n = new j(e.pop()).finishBinaryExpression(a[l - 1].value, a[l - 2], n), l -= 2;
                    return n
                }

                function ut() {
                    var t, e, n, r, i;
                    return i = Dt, t = st(), $("?") && (D(), e = Pt.allowIn, Pt.allowIn = !0, n = lt(), Pt.allowIn = e, B(":"), r = lt(), t = new j(i).finishConditionalExpression(t, n, r)), t
                }

                function lt() {
                    var t, e, n, r;
                    return t = Pt.parenthesisCount, r = Dt, e = Dt, n = ut()
                }

                function ct() {
                    var t = lt();
                    if ($(","))throw new Error("Disabled.");
                    return t
                }

                function dt(t) {
                    var e = ct();
                    return Y(), t.finishExpressionStatement(e)
                }

                function ft() {
                    var t, e, n = Dt.type;
                    if (n === _t.EOF && q(Dt), n === _t.Punctuator && "{" === Dt.value)throw new Error("Disabled.");
                    if (e = new z, n === _t.Punctuator)switch (Dt.value) {
                        case";":
                            throw new Error("Disabled.");
                        case"(":
                            return dt(e)
                    } else if (n === _t.Keyword)throw new Error("Disabled.");
                    return t = ct(), Y(), e.finishExpressionStatement(t)
                }

                function ht() {
                    if (Dt.type === _t.Keyword)switch (Dt.value) {
                        case"const":
                        case"let":
                            throw new Error("Disabled.");
                        case"function":
                            throw new Error("Disabled.");
                        default:
                            return ft()
                    }
                    if (Dt.type !== _t.EOF)return ft()
                }

                function pt() {
                    for (var t, e, n, r, i = []; Et < Ct && (e = Dt, e.type === _t.StringLiteral) && (t = ht(), i.push(t), t.expression.type === xt.Literal);)n = St.slice(e.start + 1, e.end - 1), "use strict" === n ? (Tt = !0, r && R(r, kt.StrictOctalLiteral)) : !r && e.octal && (r = e);
                    for (; Et < Ct && (t = ht(), "undefined" != typeof t);)i.push(t);
                    return i
                }

                function gt() {
                    var t, e;
                    return d(), P(), e = new z, Tt = !0, t = pt(), e.finishProgram(t)
                }

                function mt() {
                    var t, e, n, r = [];
                    for (t = 0; t < It.tokens.length; ++t)e = It.tokens[t], n = {
                        type: e.type,
                        value: e.value
                    }, e.regex && (n.regex = {
                        pattern: e.regex.pattern,
                        flags: e.regex.flags
                    }), It.range && (n.range = e.range), It.loc && (n.loc = e.loc), r.push(n);
                    It.tokens = r
                }

                function vt(t, e) {
                    var n, r;
                    n = String, "string" == typeof t || t instanceof String || (t = n(t)), St = t, Et = 0, At = St.length > 0 ? 1 : 0, Lt = 0, Ct = St.length, Dt = null, Pt = {
                        allowIn: !0,
                        labelSet: {},
                        inFunctionBody: !1,
                        inIteration: !1,
                        inSwitch: !1,
                        lastCommentStart: -1
                    }, It = {}, e = e || {}, e.tokens = !0, It.tokens = [], It.tokenize = !0, It.openParenToken = -1, It.openCurlyToken = -1, It.range = "boolean" == typeof e.range && e.range, It.loc = "boolean" == typeof e.loc && e.loc, "boolean" == typeof e.tolerant && e.tolerant && (It.errors = []);
                    try {
                        if (P(), Dt.type === _t.EOF)return It.tokens;
                        for (D(); Dt.type !== _t.EOF;)try {
                            D()
                        } catch (t) {
                            if (It.errors) {
                                It.errors.push(t);
                                break
                            }
                            throw t
                        }
                        mt(), r = It.tokens, "undefined" != typeof It.errors && (r.errors = It.errors)
                    } catch (t) {
                        throw t
                    } finally {
                        It = {}
                    }
                    return r
                }

                function yt(t, e) {
                    var n, r;
                    r = String, "string" == typeof t || t instanceof String || (t = r(t)), St = t, Et = 0, At = St.length > 0 ? 1 : 0, Lt = 0, Ct = St.length, Dt = null, Pt = {
                        allowIn: !0,
                        labelSet: {},
                        parenthesisCount: 0,
                        inFunctionBody: !1,
                        inIteration: !1,
                        inSwitch: !1,
                        lastCommentStart: -1
                    }, It = {}, "undefined" != typeof e && (It.range = "boolean" == typeof e.range && e.range, It.loc = "boolean" == typeof e.loc && e.loc, It.loc && null !== e.source && void 0 !== e.source && (It.source = r(e.source)), "boolean" == typeof e.tokens && e.tokens && (It.tokens = []), "boolean" == typeof e.tolerant && e.tolerant && (It.errors = []));
                    try {
                        n = gt(), "undefined" != typeof It.tokens && (mt(), n.tokens = It.tokens), "undefined" != typeof It.errors && (n.errors = It.errors)
                    } catch (t) {
                        throw t
                    } finally {
                        It = {}
                    }
                    return n
                }

                var _t, bt, xt, wt, kt, Mt, St, Tt, Et, At, Lt, Ct, Dt, Pt, It;
                _t = {
                    BooleanLiteral: 1,
                    EOF: 2,
                    Identifier: 3,
                    Keyword: 4,
                    NullLiteral: 5,
                    NumericLiteral: 6,
                    Punctuator: 7,
                    StringLiteral: 8,
                    RegularExpression: 9
                }, bt = {}, bt[_t.BooleanLiteral] = "Boolean", bt[_t.EOF] = "<end>", bt[_t.Identifier] = "Identifier", bt[_t.Keyword] = "Keyword", bt[_t.NullLiteral] = "Null", bt[_t.NumericLiteral] = "Numeric", bt[_t.Punctuator] = "Punctuator", bt[_t.StringLiteral] = "String", bt[_t.RegularExpression] = "RegularExpression", xt = {
                    AssignmentExpression: "AssignmentExpression",
                    ArrayExpression: "ArrayExpression",
                    BinaryExpression: "BinaryExpression",
                    CallExpression: "CallExpression",
                    ConditionalExpression: "ConditionalExpression",
                    ExpressionStatement: "ExpressionStatement",
                    Identifier: "Identifier",
                    Literal: "Literal",
                    LogicalExpression: "LogicalExpression",
                    MemberExpression: "MemberExpression",
                    ObjectExpression: "ObjectExpression",
                    Program: "Program",
                    Property: "Property",
                    UnaryExpression: "UnaryExpression"
                }, wt = {Data: 1, Get: 2, Set: 4}, kt = {
                    UnexpectedToken: "Unexpected token %0",
                    UnexpectedNumber: "Unexpected number",
                    UnexpectedString: "Unexpected string",
                    UnexpectedIdentifier: "Unexpected identifier",
                    UnexpectedReserved: "Unexpected reserved word",
                    UnexpectedEOS: "Unexpected end of input",
                    NewlineAfterThrow: "Illegal newline after throw",
                    InvalidRegExp: "Invalid regular expression",
                    UnterminatedRegExp: "Invalid regular expression: missing /",
                    InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                    InvalidLHSInForIn: "Invalid left-hand side in for-in",
                    MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                    NoCatchOrFinally: "Missing catch or finally after try",
                    UnknownLabel: "Undefined label '%0'",
                    Redeclaration: "%0 '%1' has already been declared",
                    IllegalContinue: "Illegal continue statement",
                    IllegalBreak: "Illegal break statement",
                    IllegalReturn: "Illegal return statement",
                    StrictModeWith: "Strict mode code may not include a with statement",
                    StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                    StrictVarName: "Variable name may not be eval or arguments in strict mode",
                    StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                    StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                    StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                    StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                    StrictDelete: "Delete of an unqualified identifier in strict mode.",
                    StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
                    AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
                    AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
                    StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                    StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                    StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                    StrictReservedWord: "Use of future reserved word in strict mode"
                }, Mt = {
                    NonAsciiIdentifierStart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢲऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
                    NonAsciiIdentifierPart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԯԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠ-ࢲࣤ-ॣ०-९ॱ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧ᪰-᪽ᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶ᳸᳹ᴀ-᷵᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚝꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꧠ-ꧾꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︭︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")
                }, j.prototype = z.prototype = {
                    finish: function () {
                        It.range && (this.range[1] = Et), It.loc && (this.loc.end = new I, It.source && (this.loc.source = It.source))
                    }, finishArrayExpression: function (t) {
                        return this.type = xt.ArrayExpression, this.elements = t, this.finish(), this
                    }, finishAssignmentExpression: function (t, e, n) {
                        return this.type = xt.AssignmentExpression, this.operator = t, this.left = e, this.right = n, this.finish(), this
                    }, finishBinaryExpression: function (t, e, n) {
                        return this.type = "||" === t || "&&" === t ? xt.LogicalExpression : xt.BinaryExpression, this.operator = t, this.left = e, this.right = n, this.finish(), this
                    }, finishCallExpression: function (t, e) {
                        return this.type = xt.CallExpression, this.callee = t, this.arguments = e, this.finish(), this
                    }, finishConditionalExpression: function (t, e, n) {
                        return this.type = xt.ConditionalExpression, this.test = t, this.consequent = e, this.alternate = n, this.finish(), this
                    }, finishExpressionStatement: function (t) {
                        return this.type = xt.ExpressionStatement, this.expression = t, this.finish(), this
                    }, finishIdentifier: function (t) {
                        return this.type = xt.Identifier, this.name = t, this.finish(), this
                    }, finishLiteral: function (t) {
                        return this.type = xt.Literal, this.value = t.value, this.raw = St.slice(t.start, t.end), t.regex && ("//" == this.raw && (this.raw = "/(?:)/"), this.regex = t.regex), this.finish(), this
                    }, finishMemberExpression: function (t, e, n) {
                        return this.type = xt.MemberExpression, this.computed = "[" === t, this.object = e, this.property = n, this.finish(), this
                    }, finishObjectExpression: function (t) {
                        return this.type = xt.ObjectExpression, this.properties = t, this.finish(), this
                    }, finishProgram: function (t) {
                        return this.type = xt.Program, this.body = t, this.finish(), this
                    }, finishProperty: function (t, e, n) {
                        return this.type = xt.Property, this.key = e, this.value = n, this.kind = t, this.finish(), this
                    }, finishUnaryExpression: function (t, e) {
                        return this.type = xt.UnaryExpression, this.operator = t, this.argument = e, this.prefix = !0, this.finish(), this
                    }
                };
                var Nt = {if: 1, this: 1};
                return {tokenize: vt, parse: yt}
            }()
        }, {}],
        48: [function (t, e, n) {
            function r(t) {
                console.log("[Vega Log]", t)
            }

            function i(t) {
                console.error("[Vega Err]", t)
            }

            function a(t, e) {
                if (a.enable) {
                    var n = Function.prototype.bind.call(console.log, console), r = {
                        prevTime: Date.now() - o,
                        stamp: t.stamp
                    };
                    t.add && (r.add = t.add.length, r.mod = t.mod.length, r.rem = t.rem.length, r.reflow = !!t.reflow), n.apply(console, (e.push(JSON.stringify(r)), e)), o = Date.now()
                }
            }

            var o = Date.now();
            e.exports = {log: r, error: i, debug: (a.enable = !1, a)}
        }, {}],
        49: [function (t, e, n) {
            e.exports = {
                path: t("./path"),
                render: t("./render"),
                Item: t("./util/Item"),
                bound: t("./util/bound"),
                Bounds: t("./util/Bounds"),
                canvas: t("./util/canvas"),
                Gradient: t("./util/Gradient"),
                toJSON: t("./util/scene").toJSON,
                fromJSON: t("./util/scene").fromJSON
            }
        }, {
            "./path": 51,
            "./render": 71,
            "./util/Bounds": 77,
            "./util/Gradient": 79,
            "./util/Item": 81,
            "./util/bound": 82,
            "./util/canvas": 83,
            "./util/scene": 85
        }],
        50: [function (t, e, n) {
            function r(t, e, n, r, i, o, u, l, c) {
                var d = s.call(arguments);
                if (a[d])return a[d];
                var f = u * (Math.PI / 180), h = Math.sin(f), p = Math.cos(f);
                n = Math.abs(n), r = Math.abs(r);
                var g = p * (l - t) * .5 + h * (c - e) * .5, m = p * (c - e) * .5 - h * (l - t) * .5, v = g * g / (n * n) + m * m / (r * r);
                v > 1 && (v = Math.sqrt(v), n *= v, r *= v);
                var y = p / n, _ = h / n, b = -h / r, x = p / r, w = y * l + _ * c, k = b * l + x * c, M = y * t + _ * e, S = b * t + x * e, T = (M - w) * (M - w) + (S - k) * (S - k), E = 1 / T - .25;
                E < 0 && (E = 0);
                var A = Math.sqrt(E);
                o == i && (A = -A);
                var L = .5 * (w + M) - A * (S - k), C = .5 * (k + S) + A * (M - w), D = Math.atan2(k - C, w - L), P = Math.atan2(S - C, M - L), I = P - D;
                I < 0 && 1 === o ? I += 2 * Math.PI : I > 0 && 0 === o && (I -= 2 * Math.PI);
                for (var N = Math.ceil(Math.abs(I / (.5 * Math.PI + .001))), O = [], z = 0; z < N; ++z) {
                    var j = D + z * I / N, F = D + (z + 1) * I / N;
                    O[z] = [L, C, j, F, n, r, h, p]
                }
                return a[d] = O
            }

            function i(t) {
                var e = s.call(t);
                if (o[e])return o[e];
                var n = t[0], r = t[1], i = t[2], a = t[3], u = t[4], l = t[5], c = t[6], d = t[7], f = d * u, h = -c * l, p = c * u, g = d * l, m = Math.cos(i), v = Math.sin(i), y = Math.cos(a), _ = Math.sin(a), b = .5 * (a - i), x = Math.sin(.5 * b), w = 8 / 3 * x * x / Math.sin(b), k = n + m - w * v, M = r + v + w * m, S = n + y, T = r + _, E = S + w * _, A = T - w * y;
                return o[e] = [f * k + h * M, p * k + g * M, f * E + h * A, p * E + g * A, f * S + h * T, p * S + g * T]
            }

            var a = {}, o = {}, s = [].join;
            e.exports = {segments: r, bezier: i, cache: {segments: a, bezier: o}}
        }, {}],
        51: [function (t, e, n) {
            e.exports = {parse: t("./parse"), render: t("./render")}
        }, {"./parse": 52, "./render": 53}],
        52: [function (t, e, n) {
            var r = {
                m: 2,
                l: 2,
                h: 1,
                v: 1,
                c: 6,
                s: 4,
                q: 4,
                t: 2,
                a: 7
            }, i = [/([MLHVCSQTAZmlhvcsqtaz])/g, /###/, /(\d)([-+])/g, /\s|,|###/];
            e.exports = function (t) {
                var e, n, a, o, s, u, l, c, d, f, h, p = [];
                for (e = t.slice().replace(i[0], "###$1").split(i[1]).slice(1), c = 0, f = e.length; c < f; ++c) {
                    for (n = e[c], a = n.slice(1).trim().replace(i[2], "$1###$2").split(i[3]), u = n.charAt(0), o = [u], d = 0, h = a.length; d < h; ++d)(s = +a[d]) === s && o.push(s);
                    if (l = r[u.toLowerCase()], o.length - 1 > l)for (d = 1, h = o.length; d < h; d += l)p.push([u].concat(o.slice(d, d + l))); else p.push(o)
                }
                return p
            }
        }, {}],
        53: [function (t, e, n) {
            function r(t, e, n, r) {
                for (var a = i.segments(r[5], r[6], r[0], r[1], r[3], r[4], r[2], e, n), o = 0; o < a.length; ++o) {
                    var s = i.bezier(a[o]);
                    t.bezierCurveTo.apply(t, s)
                }
            }

            var i = t("./arc");
            e.exports = function (t, e, n, i) {
                var a, o, s, u, l, c = null, d = 0, f = 0, h = 0, p = 0;
                null == n && (n = 0), null == i && (i = 0), t.beginPath();
                for (var g = 0, m = e.length; g < m; ++g) {
                    switch (a = e[g], a[0]) {
                        case"l":
                            d += a[1], f += a[2], t.lineTo(d + n, f + i);
                            break;
                        case"L":
                            d = a[1], f = a[2], t.lineTo(d + n, f + i);
                            break;
                        case"h":
                            d += a[1], t.lineTo(d + n, f + i);
                            break;
                        case"H":
                            d = a[1], t.lineTo(d + n, f + i);
                            break;
                        case"v":
                            f += a[1], t.lineTo(d + n, f + i);
                            break;
                        case"V":
                            f = a[1], t.lineTo(d + n, f + i);
                            break;
                        case"m":
                            d += a[1], f += a[2], t.moveTo(d + n, f + i);
                            break;
                        case"M":
                            d = a[1], f = a[2], t.moveTo(d + n, f + i);
                            break;
                        case"c":
                            o = d + a[5], s = f + a[6], h = d + a[3], p = f + a[4], t.bezierCurveTo(d + a[1] + n, f + a[2] + i, h + n, p + i, o + n, s + i), d = o, f = s;
                            break;
                        case"C":
                            d = a[5], f = a[6], h = a[3], p = a[4], t.bezierCurveTo(a[1] + n, a[2] + i, h + n, p + i, d + n, f + i);
                            break;
                        case"s":
                            o = d + a[3], s = f + a[4], h = 2 * d - h, p = 2 * f - p, t.bezierCurveTo(h + n, p + i, d + a[1] + n, f + a[2] + i, o + n, s + i), h = d + a[1], p = f + a[2], d = o, f = s;
                            break;
                        case"S":
                            o = a[3], s = a[4], h = 2 * d - h, p = 2 * f - p, t.bezierCurveTo(h + n, p + i, a[1] + n, a[2] + i, o + n, s + i), d = o, f = s, h = a[1], p = a[2];
                            break;
                        case"q":
                            o = d + a[3], s = f + a[4], h = d + a[1], p = f + a[2], t.quadraticCurveTo(h + n, p + i, o + n, s + i), d = o, f = s;
                            break;
                        case"Q":
                            o = a[3], s = a[4], t.quadraticCurveTo(a[1] + n, a[2] + i, o + n, s + i), d = o, f = s, h = a[1], p = a[2];
                            break;
                        case"t":
                            o = d + a[1], s = f + a[2], null === c[0].match(/[QqTt]/) ? (h = d, p = f) : "t" === c[0] ? (h = 2 * d - u, p = 2 * f - l) : "q" === c[0] && (h = 2 * d - h, p = 2 * f - p), u = h, l = p, t.quadraticCurveTo(h + n, p + i, o + n, s + i), d = o, f = s, h = d + a[1], p = f + a[2];
                            break;
                        case"T":
                            o = a[1], s = a[2], h = 2 * d - h, p = 2 * f - p, t.quadraticCurveTo(h + n, p + i, o + n, s + i), d = o, f = s;
                            break;
                        case"a":
                            r(t, d + n, f + i, [a[1], a[2], a[3], a[4], a[5], a[6] + d + n, a[7] + f + i]), d += a[6], f += a[7];
                            break;
                        case"A":
                            r(t, d + n, f + i, [a[1], a[2], a[3], a[4], a[5], a[6] + n, a[7] + i]), d = a[6], f = a[7];
                            break;
                        case"z":
                        case"Z":
                            t.closePath()
                    }
                    c = a
                }
            }
        }, {"./arc": 50}],
        54: [function (t, e, n) {
            function r() {
                this._active = null, this._handlers = {}
            }

            var i = r.prototype;
            i.initialize = function (t, e, n) {
                return this._el = t, this._obj = n || null, this.padding(e)
            }, i.element = function () {
                return this._el
            }, i.padding = function (t) {
                return this._padding = t || {top: 0, left: 0, bottom: 0, right: 0}, this
            }, i.scene = function (t) {
                return arguments.length ? (this._scene = t, this) : this._scene
            }, i.on = function () {
            }, i.off = function () {
            }, i.handlers = function () {
                var t, e = this._handlers, n = [];
                for (t in e)n.push.apply(n, e[t]);
                return n
            }, i.eventName = function (t) {
                var e = t.indexOf(".");
                return e < 0 ? t : t.slice(0, e)
            }, e.exports = r
        }, {}],
        55: [function (t, e, n) {
            function r() {
                this._el = null, this._bgcolor = null
            }

            var i = r.prototype;
            i.initialize = function (t, e, n, r) {
                return this._el = t, this.resize(e, n, r)
            }, i.element = function () {
                return this._el
            }, i.scene = function () {
                return this._el && this._el.firstChild
            }, i.background = function (t) {
                return 0 === arguments.length ? this._bgcolor : (this._bgcolor = t, this)
            }, i.resize = function (t, e, n) {
                return this._width = t, this._height = e, this._padding = n || {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }, this
            }, i.render = function () {
                return this
            }, e.exports = r
        }, {}],
        56: [function (t, e, n) {
            function r() {
                s.call(this), this._down = null, this._touch = null, this._first = !0
            }

            function i(t, e, n) {
                return function (r) {
                    var i = this._active, a = this.pickEvent(r);
                    a === i ? this.fire(t, r) : (this.fire(n, r), this._active = a, this.fire(e, r), this.fire(t, r))
                }
            }

            function a(t) {
                return function (e) {
                    this.fire(t, e), this._active = null
                }
            }

            var o = t("../../util/dom"), s = t("../Handler"), u = t("./marks"), l = s.prototype, c = r.prototype = Object.create(l);
            c.constructor = r, c.initialize = function (t, e, n) {
                var r = this._canvas = o.find(t, "canvas");
                if (r) {
                    var i = this;
                    this.events.forEach(function (t) {
                        r.addEventListener(t, function (e) {
                            c[t] ? c[t].call(i, e) : i.fire(t, e)
                        })
                    })
                }
                return l.initialize.call(this, t, e, n)
            }, c.canvas = function () {
                return this._canvas
            }, c.context = function () {
                return this._canvas.getContext("2d")
            }, c.events = ["keydown", "keypress", "keyup", "dragenter", "dragleave", "dragover", "mousedown", "mouseup", "mousemove", "mouseout", "mouseover", "click", "dblclick", "wheel", "mousewheel", "touchstart", "touchmove", "touchend"], c.DOMMouseScroll = function (t) {
                this.fire("mousewheel", t)
            }, c.mousemove = i("mousemove", "mouseover", "mouseout"), c.dragover = i("dragover", "dragenter", "dragleave"), c.mouseout = a("mouseout"), c.dragleave = a("dragleave"), c.mousedown = function (t) {
                this._down = this._active, this.fire("mousedown", t)
            }, c.click = function (t) {
                this._down === this._active && (this.fire("click", t), this._down = null)
            }, c.touchstart = function (t) {
                this._touch = this.pickEvent(t.changedTouches[0]), this._first && (this._active = this._touch, this._first = !1), this.fire("touchstart", t, !0)
            }, c.touchmove = function (t) {
                this.fire("touchmove", t, !0)
            }, c.touchend = function (t) {
                this.fire("touchend", t, !0), this._touch = null
            }, c.fire = function (t, e, n) {
                var r, i, a = n ? this._touch : this._active, o = this._handlers[t];
                if (o)for (e.vegaType = t, r = 0, i = o.length; r < i; ++r)o[r].handler.call(this._obj, e, a)
            }, c.on = function (t, e) {
                var n = this.eventName(t), r = this._handlers;
                return (r[n] || (r[n] = [])).push({type: t, handler: e}), this
            }, c.off = function (t, e) {
                var n, r = this.eventName(t), i = this._handlers[r];
                if (i) {
                    for (n = i.length; --n >= 0;)i[n].type === t && (e && i[n].handler !== e || i.splice(n, 1));
                    return this
                }
            }, c.pickEvent = function (t) {
                var e, n, r = this._canvas.getBoundingClientRect(), i = this._padding;
                return this.pick(this._scene, e = t.clientX - r.left, n = t.clientY - r.top, e - i.left, n - i.top)
            }, c.pick = function (t, e, n, r, i) {
                var a = this.context(), o = u[t.marktype];
                return o.pick.call(this, a, t, e, n, r, i)
            }, e.exports = r
        }, {"../../util/dom": 84, "../Handler": 54, "./marks": 63}],
        57: [function (t, e, n) {
            function r(t) {
                c.call(this), this._loader = new u(t)
            }

            function i(t, e) {
                if (!e)return null;
                var n, r, i, o, u, l = new s;
                for (n = 0, r = e.length; n < r; ++n)i = e[n], o = i.mark, u = o.group, i = d[o.marktype].nested ? o : i, l.union(a(i.bounds, u)), i["bounds:prev"] && l.union(a(i["bounds:prev"], u));
                return l.round(), t.beginPath(), t.rect(l.x1, l.y1, l.width(), l.height()), t.clip(), l
            }

            function a(t, e) {
                if (null == e)return t;
                for (var n = t.clone(); null != e; e = e.mark.group)n.translate(e.x || 0, e.y || 0);
                return n
            }

            var o = t("../../util/dom"), s = t("../../util/Bounds"), u = t("../../util/ImageLoader"), l = t("../../util/canvas"), c = t("../Renderer"), d = t("./marks");
            r.RETINA = !0;
            var f = c.prototype, h = r.prototype = Object.create(f);
            h.constructor = r, h.initialize = function (t, e, n, r) {
                return this._canvas = l.instance(e, n), t && (o.clear(t, 0).appendChild(this._canvas), this._canvas.setAttribute("class", "marks")), f.initialize.call(this, t, e, n, r)
            }, h.resize = function (t, e, n) {
                return f.resize.call(this, t, e, n), l.resize(this._canvas, this._width, this._height, this._padding, r.RETINA), this
            }, h.canvas = function () {
                return this._canvas
            }, h.context = function () {
                return this._canvas ? this._canvas.getContext("2d") : null
            }, h.pendingImages = function () {
                return this._loader.pending()
            }, h.render = function (t, e) {
                var n, r = this.context(), a = this._padding, o = this._width + a.left + a.right, s = this._height + a.top + a.bottom;
                return this._scene = t, r.save(), n = i(r, e), this.clear(-a.left, -a.top, o, s), this.draw(r, t, n), r.restore(), this._scene = null, this
            }, h.draw = function (t, e, n) {
                var r = d[e.marktype];
                r.draw.call(this, t, e, n)
            }, h.clear = function (t, e, n, r) {
                var i = this.context();
                i.clearRect(t, e, n, r), null != this._bgcolor && (i.fillStyle = this._bgcolor, i.fillRect(t, e, n, r))
            }, h.loadImage = function (t) {
                var e = this, n = this._scene;
                return this._loader.loadImage(t, function () {
                    e.renderAsync(n)
                })
            }, h.renderAsync = function (t) {
                var e = this;
                e._async_id && clearTimeout(e._async_id), e._async_id = setTimeout(function () {
                    e.render(t), delete e._async_id
                }, 10)
            }, e.exports = r
        }, {
            "../../util/Bounds": 77,
            "../../util/ImageLoader": 80,
            "../../util/canvas": 83,
            "../../util/dom": 84,
            "../Renderer": 55,
            "./marks": 63
        }],
        58: [function (t, e, n) {
            e.exports = {Handler: t("./CanvasHandler"), Renderer: t("./CanvasRenderer")}
        }, {"./CanvasHandler": 56, "./CanvasRenderer": 57}],
        59: [function (t, e, n) {
            function r(t, e) {
                var n = e.x || 0, r = e.y || 0, i = e.innerRadius || 0, o = e.outerRadius || 0, s = (e.startAngle || 0) - a, u = (e.endAngle || 0) - a;
                t.beginPath(), 0 === i ? t.moveTo(n, r) : t.arc(n, r, i, s, u, 0), t.arc(n, r, o, u, s, 1), t.closePath()
            }

            var i = t("./util"), a = Math.PI / 2;
            e.exports = {draw: i.drawAll(r), pick: i.pickPath(r)}
        }, {"./util": 70}],
        60: [function (t, e, n) {
            function r(t, e) {
                var n = e[0], r = n.pathCache || (n.pathCache = o(u(e)));
                s(t, r)
            }

            function i(t, e, n, r, i, a) {
                var o = e.items, s = e.bounds;
                return !o || !o.length || s && !s.contains(i, a) ? null : (null != t.pixelratio && 1 !== t.pixelratio && (n *= t.pixelratio, r *= t.pixelratio), l(t, o, n, r) ? o[0] : null)
            }

            var a = t("./util"), o = t("../../../path/parse"), s = t("../../../path/render"), u = t("../../../util/svg").path.area, l = a.testPath(r);
            e.exports = {draw: a.drawOne(r), pick: i, nested: !0}
        }, {"../../../path/parse": 52, "../../../path/render": 53, "../../../util/svg": 86, "./util": 70}],
        61: [function (t, e, n) {
            function r(t, e, n) {
                if (e.items && e.items.length) {
                    var r, i, s, u, l, c, d, f, h, p, g, m, v, y = e.items, _ = this;
                    for (p = 0, g = y.length; p < g; ++p) {
                        for (r = y[p], s = r.axisItems || o, i = r.items || o, u = r.legendItems || o, l = r.x || 0, c = r.y || 0, d = r.width || 0, f = r.height || 0, (r.stroke || r.fill) && (h = null == r.opacity ? 1 : r.opacity, h > 0 && (r.fill && a.fill(t, r, h) && t.fillRect(l, c, d, f), r.stroke && a.stroke(t, r, h) && t.strokeRect(l, c, d, f))), t.save(), t.translate(l, c), r.clip && (t.beginPath(), t.rect(0, 0, d, f), t.clip()), n && n.translate(-l, -c), m = 0, v = s.length; m < v; ++m)"back" === s[m].layer && _.draw(t, s[m], n);
                        for (m = 0, v = i.length; m < v; ++m)_.draw(t, i[m], n);
                        for (m = 0, v = s.length; m < v; ++m)"back" !== s[m].layer && _.draw(t, s[m], n);
                        for (m = 0, v = u.length; m < v; ++m)_.draw(t, u[m], n);
                        n && n.translate(l, c), t.restore()
                    }
                }
            }

            function i(t, e, n, r, i, a) {
                if (e.bounds && !e.bounds.contains(i, a))return null;
                var s, u, l, c, d, f, h, p, g, m, v, y = e.items || o;
                for (g = y.length; --g >= 0;)if (u = y[g], v = u.bounds, !v || v.contains(i, a)) {
                    for (l = u.axisItems || o, c = u.items || o, d = u.legendItems || o, h = u.x || 0, p = u.y || 0, t.save(), t.translate(h, p), h = i - h, p = a - p, m = d.length; --m >= 0;)if (s = d[m], s.interactive !== !1 && (f = this.pick(s, n, r, h, p)))return t.restore(), f;
                    for (m = l.length; --m >= 0;)if (s = l[m], s.interactive !== !1 && "back" !== s.layer && (f = this.pick(s, n, r, h, p)))return t.restore(), f;
                    for (m = c.length; --m >= 0;)if (s = c[m], s.interactive !== !1 && (f = this.pick(s, n, r, h, p)))return t.restore(), f;
                    for (m = l.length; --m >= 0;)if (s = l[m], s.interative !== !1 && "back" === s.layer && (f = this.pick(s, n, r, h, p)))return t.restore(), f;
                    if (t.restore(), e.interactive !== !1 && (u.fill || u.stroke) && h >= 0 && h <= u.width && p >= 0 && p <= u.height)return u
                }
                return null
            }

            var a = t("./util"), o = [];
            e.exports = {draw: r, pick: i}
        }, {"./util": 70}],
        62: [function (t, e, n) {
            function r(t, e, n) {
                if (e.items && e.items.length)for (var r, i = this, a = e.items, o = 0, s = a.length; o < s; ++o)if (r = a[o], !n || n.intersects(r.bounds)) {
                    r.image && r.image.url === r.url || (r.image = i.loadImage(r.url), r.image.url = r.url);
                    var u, l = r.x || 0, c = r.y || 0, d = r.width || r.image && r.image.width || 0, f = r.height || r.image && r.image.height || 0;
                    l -= "center" === r.align ? d / 2 : "right" === r.align ? d : 0, c -= "middle" === r.baseline ? f / 2 : "bottom" === r.baseline ? f : 0, r.image.loaded && (t.globalAlpha = null != (u = r.opacity) ? u : 1, t.drawImage(r.image, l, c, d, f))
                }
            }

            var i = t("./util");
            e.exports = {draw: r, pick: i.pick()}
        }, {"./util": 70}],
        63: [function (t, e, n) {
            e.exports = {
                arc: t("./arc"),
                area: t("./area"),
                group: t("./group"),
                image: t("./image"),
                line: t("./line"),
                path: t("./path"),
                rect: t("./rect"),
                rule: t("./rule"),
                symbol: t("./symbol"),
                text: t("./text")
            }
        }, {
            "./arc": 59,
            "./area": 60,
            "./group": 61,
            "./image": 62,
            "./line": 64,
            "./path": 65,
            "./rect": 66,
            "./rule": 67,
            "./symbol": 68,
            "./text": 69
        }],
        64: [function (t, e, n) {
            function r(t, e) {
                var n = e[0], r = n.pathCache || (n.pathCache = o(u(e)));
                s(t, r)
            }

            function i(t, e, n, r, i, a) {
                var o = e.items, s = e.bounds;
                return !o || !o.length || s && !s.contains(i, a) ? null : (null != t.pixelratio && 1 !== t.pixelratio && (n *= t.pixelratio, r *= t.pixelratio), l(t, o, n, r) ? o[0] : null)
            }

            var a = t("./util"), o = t("../../../path/parse"), s = t("../../../path/render"), u = t("../../../util/svg").path.line, l = a.testPath(r, !1);
            e.exports = {draw: a.drawOne(r), pick: i, nested: !0}
        }, {"../../../path/parse": 52, "../../../path/render": 53, "../../../util/svg": 86, "./util": 70}],
        65: [function (t, e, n) {
            function r(t, e) {
                if (null == e.path)return !0;
                var n = e.pathCache || (e.pathCache = a(e.path));
                o(t, n, e.x, e.y)
            }

            var i = t("./util"), a = t("../../../path/parse"), o = t("../../../path/render");
            e.exports = {draw: i.drawAll(r), pick: i.pickPath(r)}
        }, {"../../../path/parse": 52, "../../../path/render": 53, "./util": 70}],
        66: [function (t, e, n) {
            function r(t, e, n) {
                if (e.items && e.items.length)for (var r, a, o, s, u, l, c = e.items, d = 0, f = c.length; d < f; ++d)r = c[d], n && !n.intersects(r.bounds) || (a = null == r.opacity ? 1 : r.opacity, 0 !== a && (o = r.x || 0, s = r.y || 0, u = r.width || 0, l = r.height || 0, r.fill && i.fill(t, r, a) && t.fillRect(o, s, u, l), r.stroke && i.stroke(t, r, a) && t.strokeRect(o, s, u, l)))
            }

            var i = t("./util");
            e.exports = {draw: r, pick: i.pick()}
        }, {"./util": 70}],
        67: [function (t, e, n) {
            function r(t, e, n) {
                if (e.items && e.items.length)for (var r, i, a, s, u, l, c = e.items, d = 0, f = c.length; d < f; ++d)r = c[d], n && !n.intersects(r.bounds) || (i = null == r.opacity ? 1 : r.opacity, 0 !== i && (a = r.x || 0, s = r.y || 0, u = null != r.x2 ? r.x2 : a, l = null != r.y2 ? r.y2 : s, r.stroke && o.stroke(t, r, i) && (t.beginPath(), t.moveTo(a, s), t.lineTo(u, l), t.stroke())))
            }

            function i(t, e) {
                var n = e.x || 0, r = e.y || 0, i = null != e.x2 ? e.x2 : n, a = null != e.y2 ? e.y2 : r, o = e.strokeWidth, s = e.strokeCap;
                t.lineWidth = null != o ? o : 1, t.lineCap = null != s ? s : "butt", t.beginPath(), t.moveTo(n, r), t.lineTo(i, a)
            }

            function a(t, e, n, r) {
                return !!t.isPointInStroke && (i(t, e), t.isPointInStroke(n, r))
            }

            var o = t("./util");
            e.exports = {draw: r, pick: o.pick(a)}
        }, {"./util": 70}],
        68: [function (t, e, n) {
            function r(t, e) {
                var n, r, a, c, d = null != e.size ? e.size : 100, f = e.x, h = e.y;
                if (t.beginPath(), null == e.shape || "circle" === e.shape)return n = Math.sqrt(d / Math.PI), t.arc(f, h, n, 0, 2 * Math.PI, 0), void t.closePath();
                switch (e.shape) {
                    case"cross":
                        n = Math.sqrt(d / 5) / 2, r = 3 * n, t.moveTo(f - r, h - n), t.lineTo(f - n, h - n), t.lineTo(f - n, h - r), t.lineTo(f + n, h - r), t.lineTo(f + n, h - n), t.lineTo(f + r, h - n), t.lineTo(f + r, h + n), t.lineTo(f + n, h + n), t.lineTo(f + n, h + r), t.lineTo(f - n, h + r), t.lineTo(f - n, h + n), t.lineTo(f - r, h + n);
                        break;
                    case"diamond":
                        c = Math.sqrt(d / (2 * l)), a = c * l, t.moveTo(f, h - c), t.lineTo(f + a, h), t.lineTo(f, h + c), t.lineTo(f - a, h);
                        break;
                    case"square":
                        r = Math.sqrt(d), n = r / 2, t.rect(f - n, h - n, r, r);
                        break;
                    case"triangle-down":
                        a = Math.sqrt(d / u), c = a * u / 2, t.moveTo(f, h + c), t.lineTo(f + a, h - c), t.lineTo(f - a, h - c);
                        break;
                    case"triangle-up":
                        a = Math.sqrt(d / u), c = a * u / 2, t.moveTo(f, h - c), t.lineTo(f + a, h + c), t.lineTo(f - a, h + c);
                        break;
                    default:
                        var p = i(o(e.shape), d);
                        s(t, p, f, h)
                }
                t.closePath()
            }

            function i(t, e) {
                var n, r, i, a, o, s = Math.sqrt(e);
                for (n = 0, r = t.length; n < r; ++n)for (o = t[n], i = 1, a = o.length; i < a; ++i)o[i] *= s;
                return t
            }

            var a = t("./util"), o = t("../../../path/parse"), s = t("../../../path/render"), u = Math.sqrt(3), l = Math.tan(30 * Math.PI / 180);
            e.exports = {draw: a.drawAll(r), pick: a.pickPath(r)}
        }, {"../../../path/parse": 52, "../../../path/render": 53, "./util": 70}],
        69: [function (t, e, n) {
            function r(t, e, n) {
                if (e.items && e.items.length)for (var r, i, a, o, l, c, d, f = e.items, h = 0, p = f.length; h < p; ++h)r = f[h], n && !n.intersects(r.bounds) || (d = s.value(r.text), d && (i = null == r.opacity ? 1 : r.opacity, 0 !== i && (t.font = s.font(r), t.textAlign = r.align || "left", a = r.x || 0, o = r.y || 0, (l = r.radius) && (c = (r.theta || 0) - Math.PI / 2, a += l * Math.cos(c), o += l * Math.sin(c)), r.angle && (t.save(), t.translate(a, o), t.rotate(r.angle * Math.PI / 180), a = o = 0), a += r.dx || 0, o += (r.dy || 0) + s.offset(r), r.fill && u.fill(t, r, i) && t.fillText(d, a, o), r.stroke && u.stroke(t, r, i) && t.strokeText(d, a, o), r.angle && t.restore())))
            }

            function i(t, e, n, r, i, a) {
                if (e.fontSize <= 0)return !1;
                if (!e.angle)return !0;
                var s = o(e, l, !0), u = -e.angle * Math.PI / 180, c = Math.cos(u), d = Math.sin(u), f = e.x, h = e.y, p = c * i - d * a + (f - f * c + h * d), g = d * i + c * a + (h - f * d - h * c);
                return s.contains(p, g)
            }

            var a = t("../../../util/Bounds"), o = t("../../../util/bound").text, s = t("../../../util/text"), u = t("./util"), l = new a;
            e.exports = {draw: r, pick: u.pick(i)}
        }, {"../../../util/Bounds": 77, "../../../util/bound": 82, "../../../util/text": 87, "./util": 70}],
        70: [function (t, e, n) {
            function r(t, e, n, r) {
                if (!t(e, r)) {
                    var i = null == n.opacity ? 1 : n.opacity;
                    0 !== i && (n.fill && c(e, n, i) && e.fill(), n.stroke && d(e, n, i) && e.stroke())
                }
            }

            function i(t, e, n, i) {
                var a, o, s;
                for (a = 0, o = n.items.length; a < o; ++a)s = n.items[a], i && !i.intersects(s.bounds) || r(t, e, s, s)
            }

            function a(t) {
                return function (e, n, r) {
                    i(t, e, n, r)
                }
            }

            function o(t) {
                return function (e, n, i) {
                    n.items.length && (i && !i.intersects(n.bounds) || r(t, e, n.items[0], n.items))
                }
            }

            function s(t) {
                return t || (t = p), function (e, n, r, i, a, o) {
                    if (!n.items.length)return null;
                    var s, u, l;
                    for (null != e.pixelratio && 1 !== e.pixelratio && (r *= e.pixelratio, i *= e.pixelratio), l = n.items.length; --l >= 0;)if (s = n.items[l], u = s.bounds, (!u || u.contains(a, o)) && u && t(e, s, r, i, a, o))return s;
                    return null
                }
            }

            function u(t, e) {
                return function (n, r, i, a) {
                    var o, s, u = Array.isArray(r) ? r[0] : r, l = null == e ? u.fill : e, c = u.stroke && n.isPointInStroke;
                    return c && (o = u.strokeWidth, s = u.strokeCap, n.lineWidth = null != o ? o : 1, n.lineCap = null != s ? s : "butt"), !t(n, r) && (l && n.isPointInPath(i, a) || c && n.isPointInStroke(i, a))
                }
            }

            function l(t) {
                return s(u(t))
            }

            function c(t, e, n) {
                return n *= null == e.fillOpacity ? 1 : e.fillOpacity, n > 0 && (t.globalAlpha = n, t.fillStyle = f(t, e, e.fill), !0)
            }

            function d(t, e, n) {
                var r, i = null != (i = e.strokeWidth) ? i : 1;
                return !(i <= 0) && (n *= null == e.strokeOpacity ? 1 : e.strokeOpacity, n > 0 && (t.globalAlpha = n, t.strokeStyle = f(t, e, e.stroke), t.lineWidth = i, t.lineCap = null != (r = e.strokeCap) ? r : "butt", t.vgLineDash(e.strokeDash || null), t.vgLineDashOffset(e.strokeDashOffset || 0), !0))
            }

            function f(t, e, n) {
                return n.id ? h(t, n, e.bounds) : n
            }

            function h(t, e, n) {
                var r, i, a = n.width(), o = n.height(), s = n.x1 + e.x1 * a, u = n.y1 + e.y1 * o, l = n.x1 + e.x2 * a, c = n.y1 + e.y2 * o, d = t.createLinearGradient(s, u, l, c), f = e.stops;
                for (r = 0, i = f.length; r < i; ++r)d.addColorStop(f[r].offset, f[r].color);
                return d
            }

            var p = function () {
                return !0
            };
            e.exports = {
                drawOne: o,
                drawAll: a,
                pick: s,
                pickPath: l,
                testPath: u,
                stroke: d,
                fill: c,
                color: f,
                gradient: h
            }
        }, {}],
        71: [function (t, e, n) {
            e.exports = {canvas: t("./canvas"), svg: t("./svg")}
        }, {"./canvas": 58, "./svg": 75}],
        72: [function (t, e, n) {
            function r() {
                a.call(this)
            }

            var i = t("../../util/dom"), a = t("../Handler"), o = a.prototype, s = r.prototype = Object.create(o);
            s.constructor = r, s.initialize = function (t, e, n) {
                return this._svg = i.find(t, "svg"), o.initialize.call(this, t, e, n)
            }, s.svg = function () {
                return this._svg
            }, s.listener = function (t) {
                var e = this;
                return function (n) {
                    var r = n.target, i = r.__data__;
                    n.vegaType = n.type, i = Array.isArray(i) ? i[0] : i, t.call(e._obj, n, i)
                }
            }, s.on = function (t, e) {
                var n = this.eventName(t), r = this._svg, i = this._handlers, a = {
                    type: t,
                    handler: e,
                    listener: this.listener(e)
                };
                return (i[n] || (i[n] = [])).push(a), r.addEventListener(n, a.listener), this
            }, s.off = function (t, e) {
                var n, r = this.eventName(t), i = this._svg, a = this._handlers[r];
                if (a) {
                    for (n = a.length; --n >= 0;)(a[n].type === t && !e || a[n].handler === e) && (i.removeEventListener(r, a[n].listener), a.splice(n, 1));
                    return this
                }
            }, e.exports = r
        }, {"../../util/dom": 84, "../Handler": 54}],
        73: [function (t, e, n) {
            function r(t) {
                d.call(this), this._loader = new c(t), this._dirtyID = 0
            }

            function i(t, e, n) {
                var r, i, a;
                for (t = h.child(t, n, "linearGradient", g), t.setAttribute("id", e.id), t.setAttribute("x1", e.x1), t.setAttribute("x2", e.x2), t.setAttribute("y1", e.y1), t.setAttribute("y2", e.y2), r = 0, i = e.stops.length; r < i; ++r)a = h.child(t, r, "stop", g), a.setAttribute("offset", e.stops[r].offset), a.setAttribute("stop-color", e.stops[r].color);
                h.clear(t, r)
            }

            function a(t, e, n) {
                var r;
                t = h.child(t, n, "clipPath", g), t.setAttribute("id", e.id), r = h.child(t, 0, "rect", g), r.setAttribute("x", 0), r.setAttribute("y", 0), r.setAttribute("width", e.width), r.setAttribute("height", e.height)
            }

            function o(t, e) {
                for (; t && t.dirty !== e; t = t.mark.group) {
                    if (t.dirty = e, !t.mark || t.mark.dirty === e)return;
                    t.mark.dirty = e
                }
            }

            function s(t, e, n, r, i) {
                var a = h.child(t, r, e.tag, g, null, i);
                if (a.__data__ = n, a.__values__ = {fill: "default"}, "g" === e.tag) {
                    var o = h.child(a, 0, "rect", g, "background");
                    o.__data__ = n
                }
                return n._svg = a
            }

            function u(t, e, n) {
                e !== b[t] && (null != e ? n ? _.setAttributeNS(n, t, e) : _.setAttribute(t, e) : n ? _.removeAttributeNS(n, t) : _.removeAttribute(t), b[t] = e)
            }

            function l() {
                return "undefined" != typeof window ? window.location.href : ""
            }

            var c = t("../../util/ImageLoader"), d = t("../Renderer"), f = t("../../util/text"), h = t("../../util/dom"), p = t("../../util/svg"), g = p.metadata.xmlns, m = t("./marks"), v = d.prototype, y = r.prototype = Object.create(v);
            y.constructor = r, y.initialize = function (t, e, n, r) {
                return t && (this._svg = h.child(t, 0, "svg", g, "marks"), h.clear(t, 1), this._root = h.child(this._svg, 0, "g", g), h.clear(this._svg, 1)), this._defs = {
                    clip_id: 1,
                    gradient: {},
                    clipping: {}
                }, this.background(this._bgcolor), v.initialize.call(this, t, e, n, r)
            }, y.background = function (t) {
                return arguments.length && this._svg && this._svg.style.setProperty("background-color", t), v.background.apply(this, arguments)
            }, y.resize = function (t, e, n) {
                if (v.resize.call(this, t, e, n), this._svg) {
                    var r = this._width, i = this._height, a = this._padding;
                    this._svg.setAttribute("width", r + a.left + a.right), this._svg.setAttribute("height", i + a.top + a.bottom), this._root.setAttribute("transform", "translate(" + a.left + "," + a.top + ")")
                }
                return this
            }, y.svg = function () {
                if (!this._svg)return null;
                var t = {
                    class: "marks",
                    width: this._width + this._padding.left + this._padding.right,
                    height: this._height + this._padding.top + this._padding.bottom
                };
                for (var e in p.metadata)t[e] = p.metadata[e];
                return h.openTag("svg", t) + this._svg.innerHTML + h.closeTag("svg")
            }, y.imageURL = function (t) {
                return this._loader.imageURL(t)
            }, y.render = function (t, e) {
                return this._dirtyCheck(e) && (this._dirtyAll && this._resetDefs(), this.draw(this._root, t, -1), h.clear(this._root, 1)), this.updateDefs(), this
            }, y.draw = function (t, e, n) {
                this.drawMark(t, e, n, m[e.marktype])
            }, y.updateDefs = function () {
                var t, e = this._svg, n = this._defs, r = n.el, o = 0;
                for (t in n.gradient)r || (r = n.el = h.child(e, 0, "defs", g)), i(r, n.gradient[t], o++);
                for (t in n.clipping)r || (r = n.el = h.child(e, 0, "defs", g)), a(r, n.clipping[t], o++);
                r && (0 === o ? (e.removeChild(r), n.el = null) : h.clear(r, o))
            }, y._resetDefs = function () {
                var t = this._defs;
                t.clip_id = 1, t.gradient = {}, t.clipping = {}
            }, y.isDirty = function (t) {
                return this._dirtyAll || t.dirty === this._dirtyID
            }, y._dirtyCheck = function (t) {
                if (this._dirtyAll = !0, !t)return !0;
                var e, n, r, i, a, s, u, l = ++this._dirtyID;
                for (a = 0, s = t.length; a < s; ++a)e = t[a], n = e.mark, n.marktype !== r && (r = n.marktype, i = m[r]), "exit" !== e.status ? (e = i.nest ? n.items[0] : e, e._update !== l && (e._svg ? this._update(i, e._svg, e) : (this._dirtyAll = !1, o(e, l)), e._update = l)) : e._svg && (i.nest && e.mark.items.length ? (this._update(i, e._svg, e.mark.items[0]), u = e.mark.items[0], u._svg = e._svg, u._update = l) : h.remove(e._svg), e._svg = null);
                return !this._dirtyAll
            }, y.drawMark = function (t, e, n, r) {
                if (this.isDirty(e)) {
                    var i, a, o, u, l, c, d = r.nest ? e.items && e.items.length ? [e.items[0]] : [] : e.items || [], f = e.interactive === !1 ? "none" : null, p = "g" === r.tag, m = h.cssClass(e);
                    for (i = h.child(t, n + 1, "g", g, m), i.setAttribute("class", m), e._svg = i, !p && f && i.style.setProperty("pointer-events", f), a = 0, o = d.length; a < o; ++a)this.isDirty(l = d[a]) && (c = !(this._dirtyAll || l._svg), u = s(i, r, l, a, c), this._update(r, u, l), p && (c && (this._dirtyAll = !0), this._recurse(u, l), c && (this._dirtyAll = !1)));
                    return h.clear(i, a), i
                }
            }, y._recurse = function (t, e) {
                var n, r, i = e.items || [], a = e.legendItems || [], o = e.axisItems || [], s = 0;
                for (n = 0, r = o.length; n < r; ++n)"back" === o[n].layer && this.drawMark(t, o[n], s++, m.group);
                for (n = 0, r = i.length; n < r; ++n)this.draw(t, i[n], s++);
                for (n = 0, r = o.length; n < r; ++n)"back" !== o[n].layer && this.drawMark(t, o[n], s++, m.group);
                for (n = 0, r = a.length; n < r; ++n)this.drawMark(t, a[n], s++, m.group);
                h.clear(t, 1 + s)
            };
            var _ = null, b = null, x = {
                group: function (t, e, n) {
                    _ = e.childNodes[0], b = e.__values__, t.background(u, n, this);
                    var r = n.mark.interactive === !1 ? "none" : null;
                    r !== b.events && (_.style.setProperty("pointer-events", r), b.events = r)
                }, text: function (t, e, n) {
                    var r = f.value(n.text);
                    r !== b.text && (e.textContent = r, b.text = r), r = f.font(n), r !== b.font && (e.style.setProperty("font", r), b.font = r)
                }
            };
            y._update = function (t, e, n) {
                _ = e, b = e.__values__, t.attr(u, n, this);
                var r = x[t.type];
                r && r(t, e, n), this.style(_, n)
            }, y.style = function (t, e) {
                if (null != e) {
                    var n, r, i, a, o;
                    for (n = 0, r = p.styleProperties.length; n < r; ++n)i = p.styleProperties[n], o = e[i], o !== b[i] && (a = p.styles[i], null == o ? "fill" === a ? t.style.setProperty(a, "none") : t.style.removeProperty(a) : (o.id && (this._defs.gradient[o.id] = o, o = "url(" + l() + "#" + o.id + ")"), t.style.setProperty(a, o + "")), b[i] = o)
                }
            }, e.exports = r
        }, {
            "../../util/ImageLoader": 80,
            "../../util/dom": 84,
            "../../util/svg": 86,
            "../../util/text": 87,
            "../Renderer": 55,
            "./marks": 76
        }],
        74: [function (t, e, n) {
            function r(t) {
                s.call(this), this._loader = new u(t), this._text = {
                    head: "",
                    root: "",
                    foot: "",
                    defs: "",
                    body: ""
                }, this._defs = {clip_id: 1, gradient: {}, clipping: {}}
            }

            function i(t, e, n, r) {
                v[r || t] = e
            }

            function a(t, e, n, r) {
                if (null == t)return "";
                var i, a, o, s, u, d = "";
                for ("bgrect" === n && e.interactive === !1 && (d += "pointer-events: none;"), "text" === n && (d += "font: " + c.font(t) + ";"), i = 0, a = l.styleProperties.length; i < a; ++i)o = l.styleProperties[i], s = l.styles[o], u = t[o], null == u ? "fill" === s && (d += (d.length ? " " : "") + "fill: none;") : (u.id && (r.gradient[u.id] = u, u = "url(#" + u.id + ")"), d += (d.length ? " " : "") + s + ": " + u + ";");
                return d ? 'style="' + d + '"' : null
            }

            function o(t) {
                return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            var s = t("../Renderer"), u = t("../../util/ImageLoader"), l = t("../../util/svg"), c = t("../../util/text"), d = t("../../util/dom"), f = d.openTag, h = d.closeTag, p = t("./marks"), g = s.prototype, m = r.prototype = Object.create(g);
            m.constructor = r, m.resize = function (t, e, n) {
                g.resize.call(this, t, e, n);
                var r = this._padding, i = this._text, a = {
                    class: "marks",
                    width: this._width + r.left + r.right,
                    height: this._height + r.top + r.bottom
                };
                for (var o in l.metadata)a[o] = l.metadata[o];
                return i.head = f("svg", a), i.root = f("g", {transform: "translate(" + r.left + "," + r.top + ")"}), i.foot = h("g") + h("svg"), this
            }, m.svg = function () {
                var t = this._text;
                return t.head + t.defs + t.root + t.body + t.foot
            }, m.render = function (t) {
                return this._text.body = this.mark(t), this._text.defs = this.buildDefs(), this
            }, m.reset = function () {
                return this._defs.clip_id = 0, this
            }, m.buildDefs = function () {
                var t, e, n, r, i = this._defs, a = "";
                for (e in i.gradient) {
                    for (n = i.gradient[e], r = n.stops, a += f("linearGradient", {
                        id: e,
                        x1: n.x1,
                        x2: n.x2,
                        y1: n.y1,
                        y2: n.y2
                    }), t = 0; t < r.length; ++t)a += f("stop", {
                            offset: r[t].offset,
                            "stop-color": r[t].color
                        }) + h("stop");
                    a += h("linearGradient")
                }
                for (e in i.clipping)n = i.clipping[e], a += f("clipPath", {id: e}), a += f("rect", {
                        x: 0,
                        y: 0,
                        width: n.width,
                        height: n.height
                    }) + h("rect"), a += h("clipPath");
                return a.length > 0 ? f("defs") + a + h("defs") : ""
            }, m.imageURL = function (t) {
                return this._loader.imageURL(t)
            };
            var v;
            m.attributes = function (t, e) {
                return v = {}, t(i, e, this), v
            }, m.mark = function (t) {
                var e, n, r, i = p[t.marktype], s = i.tag, u = i.attr, l = i.nest || !1, g = l ? t.items && t.items.length ? [t.items[0]] : [] : t.items || [], m = this._defs, v = "";
                for ("g" !== s && t.interactive === !1 && (e = 'style="pointer-events: none;"'), v += f("g", {class: d.cssClass(t)}, e), n = 0; n < g.length; ++n)r = g[n], e = "g" !== s ? a(r, t, s, m) : null, v += f(s, this.attributes(u, r), e), "text" === s ? v += o(c.value(r.text)) : "g" === s && (v += f("rect", this.attributes(i.background, r), a(r, t, "bgrect", m)) + h("rect"), v += this.markGroup(r)), v += h(s);
                return v + h("g")
            }, m.markGroup = function (t) {
                var e, n, r = "", i = t.axisItems || [], a = t.items || [], o = t.legendItems || [];
                for (e = 0, n = i.length; e < n; ++e)"back" === i[e].layer && (r += this.mark(i[e]));
                for (e = 0, n = a.length; e < n; ++e)r += this.mark(a[e]);
                for (e = 0, n = i.length; e < n; ++e)"back" !== i[e].layer && (r += this.mark(i[e]));
                for (e = 0, n = o.length; e < n; ++e)r += this.mark(o[e]);
                return r
            }, e.exports = r
        }, {
            "../../util/ImageLoader": 80,
            "../../util/dom": 84,
            "../../util/svg": 86,
            "../../util/text": 87,
            "../Renderer": 55,
            "./marks": 76
        }],
        75: [function (t, e, n) {
            e.exports = {
                Handler: t("./SVGHandler"),
                Renderer: t("./SVGRenderer"),
                string: {Renderer: t("./SVGStringRenderer")}
            }
        }, {"./SVGHandler": 72, "./SVGRenderer": 73, "./SVGStringRenderer": 74}],
        76: [function (t, e, n) {
            function r(t) {
                return i(t.x || 0, t.y || 0)
            }

            function i(t, e) {
                return "translate(" + t + "," + e + ")"
            }

            var a = t("../../util/text"), o = t("../../util/svg"), s = o.symbolTypes, u = o.textAlign, l = o.path;
            e.exports = {
                arc: {
                    tag: "path", type: "arc", attr: function (t, e) {
                        t("transform", r(e)), t("d", l.arc(e))
                    }
                }, area: {
                    tag: "path", type: "area", nest: !0, attr: function (t, e) {
                        var n = e.mark.items;
                        n.length && t("d", l.area(n))
                    }
                }, group: {
                    tag: "g", type: "group", attr: function (t, e, n) {
                        var i, a, o = null;
                        t("transform", r(e)), e.clip && (i = n._defs, o = e.clip_id || (e.clip_id = "clip" + i.clip_id++), a = i.clipping[o] || (i.clipping[o] = {id: o}), a.width = e.width || 0, a.height = e.height || 0), t("clip-path", o ? "url(#" + o + ")" : null)
                    }, background: function (t, e) {
                        t("class", "background"), t("width", e.width || 0), t("height", e.height || 0)
                    }
                }, image: {
                    tag: "image", type: "image", attr: function (t, e, n) {
                        var r = e.x || 0, a = e.y || 0, o = e.width || 0, s = e.height || 0, u = n.imageURL(e.url);
                        r -= "center" === e.align ? o / 2 : "right" === e.align ? o : 0, a -= "middle" === e.baseline ? s / 2 : "bottom" === e.baseline ? s : 0, t("href", u, "http://www.w3.org/1999/xlink", "xlink:href"), t("transform", i(r, a)), t("width", o), t("height", s)
                    }
                }, line: {
                    tag: "path", type: "line", nest: !0, attr: function (t, e) {
                        var n = e.mark.items;
                        n.length && t("d", l.line(n))
                    }
                }, path: {
                    tag: "path", type: "path", attr: function (t, e) {
                        t("transform", r(e)), t("d", e.path)
                    }
                }, rect: {
                    tag: "rect", type: "rect", nest: !1, attr: function (t, e) {
                        t("transform", r(e)), t("width", e.width || 0), t("height", e.height || 0)
                    }
                }, rule: {
                    tag: "line", type: "rule", attr: function (t, e) {
                        t("transform", r(e)), t("x2", null != e.x2 ? e.x2 - (e.x || 0) : 0), t("y2", null != e.y2 ? e.y2 - (e.y || 0) : 0)
                    }
                }, symbol: {
                    tag: "path", type: "symbol", attr: function (t, e) {
                        var n = !e.shape || s[e.shape] ? l.symbol(e) : l.resize(e.shape, e.size);
                        t("transform", r(e)), t("d", n)
                    }
                }, text: {
                    tag: "text", type: "text", nest: !1, attr: function (t, e) {
                        var n, r = e.dx || 0, o = (e.dy || 0) + a.offset(e), s = e.x || 0, l = e.y || 0, c = e.angle || 0, d = e.radius || 0;
                        d && (n = (e.theta || 0) - Math.PI / 2, s += d * Math.cos(n), l += d * Math.sin(n)), t("text-anchor", u[e.align] || "start"), c ? (n = i(s, l) + " rotate(" + c + ")", (r || o) && (n += " " + i(r, o))) : n = i(s + r, l + o), t("transform", n)
                    }
                }
            }
        }, {"../../util/svg": 86, "../../util/text": 87}],
        77: [function (t, e, n) {
            function r(t) {
                this.clear(), t && this.union(t)
            }

            var i = r.prototype;
            i.clone = function () {
                return new r(this)
            }, i.clear = function () {
                return this.x1 = +Number.MAX_VALUE, this.y1 = +Number.MAX_VALUE, this.x2 = -Number.MAX_VALUE, this.y2 = -Number.MAX_VALUE, this
            }, i.set = function (t, e, n, r) {
                return this.x1 = t, this.y1 = e, this.x2 = n, this.y2 = r, this
            }, i.add = function (t, e) {
                return t < this.x1 && (this.x1 = t), e < this.y1 && (this.y1 = e), t > this.x2 && (this.x2 = t), e > this.y2 && (this.y2 = e), this
            }, i.expand = function (t) {
                return this.x1 -= t, this.y1 -= t, this.x2 += t, this.y2 += t, this
            }, i.round = function () {
                return this.x1 = Math.floor(this.x1), this.y1 = Math.floor(this.y1), this.x2 = Math.ceil(this.x2), this.y2 = Math.ceil(this.y2), this
            }, i.translate = function (t, e) {
                return this.x1 += t, this.x2 += t, this.y1 += e, this.y2 += e, this
            }, i.rotate = function (t, e, n) {
                var r = Math.cos(t), i = Math.sin(t), a = e - e * r + n * i, o = n - e * i - n * r, s = this.x1, u = this.x2, l = this.y1, c = this.y2;
                return this.clear().add(r * s - i * l + a, i * s + r * l + o).add(r * s - i * c + a, i * s + r * c + o).add(r * u - i * l + a, i * u + r * l + o).add(r * u - i * c + a, i * u + r * c + o)
            }, i.union = function (t) {
                return t.x1 < this.x1 && (this.x1 = t.x1), t.y1 < this.y1 && (this.y1 = t.y1), t.x2 > this.x2 && (this.x2 = t.x2), t.y2 > this.y2 && (this.y2 = t.y2), this
            }, i.encloses = function (t) {
                return t && this.x1 <= t.x1 && this.x2 >= t.x2 && this.y1 <= t.y1 && this.y2 >= t.y2
            }, i.alignsWith = function (t) {
                return t && (this.x1 == t.x1 || this.x2 == t.x2 || this.y1 == t.y1 || this.y2 == t.y2)
            }, i.intersects = function (t) {
                return t && !(this.x2 < t.x1 || this.x1 > t.x2 || this.y2 < t.y1 || this.y1 > t.y2)
            }, i.contains = function (t, e) {
                return !(t < this.x1 || t > this.x2 || e < this.y1 || e > this.y2)
            }, i.width = function () {
                return this.x2 - this.x1
            }, i.height = function () {
                return this.y2 - this.y1
            }, e.exports = r
        }, {}],
        78: [function (t, e, n) {
            e.exports = function (t) {
                function e() {
                }

                function n(e, n) {
                    t.add(e, n)
                }

                return {
                    bounds: function (e) {
                        return arguments.length ? (t = e, this) : t
                    }, beginPath: e, closePath: e, moveTo: n, lineTo: n, quadraticCurveTo: function (e, n, r, i) {
                        t.add(e, n), t.add(r, i)
                    }, bezierCurveTo: function (e, n, r, i, a, o) {
                        t.add(e, n), t.add(r, i), t.add(a, o)
                    }
                }
            }
        }, {}],
        79: [function (t, e, n) {
            function r(t) {
                this.id = "gradient_" + i++, this.type = t || "linear", this.stops = [], this.x1 = 0, this.x2 = 1, this.y1 = 0, this.y2 = 0
            }

            var i = 0, a = r.prototype;
            a.stop = function (t, e) {
                return this.stops.push({offset: t, color: e}), this
            }, e.exports = r
        }, {}],
        80: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    this._pending = 0, this._config = t || r.Config
                }

                function i(t, e) {
                    var n = o.sanitizeUrl(this.params(t));
                    if (!n)return e && e(t, null), null;
                    var r = this, i = new Image;
                    return r._pending += 1, i.onload = function () {
                        r._pending -= 1, i.loaded = !0, e && e(null, i)
                    }, i.src = n, i
                }

                function a(t, e) {
                    var r = this, i = new ("undefined" != typeof window ? window.canvas : "undefined" != typeof n ? n.canvas : null).Image;
                    return r._pending += 1, o(this.params(t), function (t, n) {
                        return r._pending -= 1, t ? (e && e(t, null), null) : (i.src = n, i.loaded = !0, void(e && e(null, i)))
                    }), i
                }

                var o = t("datalib/src/import/load");
                r.Config = null;
                var s = r.prototype;
                s.pending = function () {
                    return this._pending
                }, s.params = function (t) {
                    var e, n = {url: t};
                    for (e in this._config)n[e] = this._config[e];
                    return n
                }, s.imageURL = function (t) {
                    return o.sanitizeUrl(this.params(t))
                }, s.loadImage = function (t, e) {
                    return o.useXHR ? i.call(this, t, e) : a.call(this, t, e)
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"datalib/src/import/load": 22}],
        81: [function (t, e, n) {
            function r(t) {
                this.mark = t
            }

            var i = r.prototype;
            i.hasPropertySet = function (t) {
                var e = this.mark.def.properties;
                return e && null != e[t]
            }, i.cousin = function (t, e) {
                if (0 === t)return this;
                t = t || -1;
                var n = this.mark, r = n.group, i = null == e ? n.items.indexOf(this) : e, a = r.items.indexOf(n) + t;
                return r.items[a].items[i]
            }, i.sibling = function (t) {
                if (0 === t)return this;
                t = t || -1;
                var e = this.mark, n = e.items.indexOf(this) + t;
                return e.items[n]
            }, i.remove = function () {
                var t = this, e = t.mark.items, n = e.indexOf(t);
                return n >= 0 && (n === e.length - 1 ? e.pop() : e.splice(n, 1)), t
            }, i.touch = function () {
                this.pathCache && (this.pathCache = null)
            }, e.exports = r
        }, {}],
        82: [function (t, e, n) {
            function r() {
                return D || (D = b.instance(1, 1).getContext("2d"))
            }

            function i(t, e) {
                return t.stroke && 0 !== t.opacity && 0 !== t.stokeOpacity && e.expand(null != t.strokeWidth ? t.strokeWidth : 1), e
            }

            function a(t, e, n, r, a) {
                return null == e ? n.set(0, 0, 0, 0) : (S(P.bounds(n), e, r, a), i(t, n)), n
            }

            function o(t, e) {
                var n = t.path ? t.pathCache || (t.pathCache = M(t.path)) : null;
                return a(t, n, e, t.x, t.y)
            }

            function s(t, e) {
                if (0 === t.items.length)return e;
                var n = t.items, r = n[0], i = r.pathCache || (r.pathCache = M(T(n)));
                return a(r, i, e)
            }

            function u(t, e) {
                if (0 === t.items.length)return e;
                var n = t.items, r = n[0], i = r.pathCache || (r.pathCache = M(E(n)));
                return a(r, i, e)
            }

            function l(t, e) {
                var n, r;
                return i(t, e.set(n = t.x || 0, r = t.y || 0, n + t.width || 0, r + t.height || 0))
            }

            function c(t, e) {
                var n = t.x || 0, r = t.y || 0, i = t.width || 0, a = t.height || 0;
                return n -= "center" === t.align ? i / 2 : "right" === t.align ? i : 0, r -= "middle" === t.baseline ? a / 2 : "bottom" === t.baseline ? a : 0, e.set(n, r, n + i, r + a)
            }

            function d(t, e) {
                var n, r;
                return i(t, e.set(n = t.x || 0, r = t.y || 0, null != t.x2 ? t.x2 : n, null != t.y2 ? t.y2 : r))
            }

            function f(t, e) {
                var n, r, a, o, s, u, l, c, d, f = t.x || 0, h = t.y || 0, p = t.innerRadius || 0, g = t.outerRadius || 0, m = (t.startAngle || 0) - A, v = (t.endAngle || 0) - A, y = 1 / 0, _ = -(1 / 0), b = 1 / 0, x = -(1 / 0), w = [m, v], k = m - m % A;
                for (r = 0; r < 4 && k < v; ++r, k += A)w.push(k);
                for (r = 0, a = w.length; r < a; ++r)n = w[r], o = Math.cos(n), u = p * o, c = g * o, s = Math.sin(n), l = p * s, d = g * s, y = Math.min(y, u, c), _ = Math.max(_, u, c), b = Math.min(b, l, d), x = Math.max(x, l, d);
                return i(t, e.set(f + y, h + b, f + _, h + x))
            }

            function h(t, e) {
                var n, r, a, o, s = null != t.size ? t.size : 100, u = t.x || 0, l = t.y || 0;
                switch (t.shape) {
                    case"cross":
                        r = 3 * Math.sqrt(s / 5) / 2, e.set(u - r, l - r, u + r, l + r);
                        break;
                    case"diamond":
                        o = Math.sqrt(s / (2 * C)), a = o * C, e.set(u - a, l - o, u + a, l + o);
                        break;
                    case"square":
                        r = Math.sqrt(s), n = r / 2, e.set(u - n, l - n, u + n, l + n);
                        break;
                    case"triangle-down":
                        a = Math.sqrt(s / L), o = a * L / 2, e.set(u - a, l - o, u + a, l + o);
                        break;
                    case"triangle-up":
                        a = Math.sqrt(s / L), o = a * L / 2, e.set(u - a, l - o, u + a, l + o);
                        break;
                    default:
                        n = Math.sqrt(s / Math.PI), e.set(u - n, l - n, u + n, l + n)
                }
                return i(t, e)
            }

            function p(t, e, n) {
                var i, a, o = r(), s = w.size(t), u = t.align, l = t.radius || 0, c = t.x || 0, d = t.y || 0, f = t.dx || 0, h = (t.dy || 0) + w.offset(t) - Math.round(.8 * s);
                return l && (a = (t.theta || 0) - Math.PI / 2, c += l * Math.cos(a), d += l * Math.sin(a)), o.font = w.font(t), i = o.measureText(w.value(t.text)).width, "center" === u ? f -= i / 2 : "right" === u && (f -= i), e.set(f += c, h += d, f + i, h + s), t.angle && !n && e.rotate(t.angle * Math.PI / 180, c, d), e.expand(n ? 0 : 1)
            }

            function g(t, e, n) {
                var r, a, o = t.axisItems || [], s = t.items || [], u = t.legendItems || [];
                if (!t.clip) {
                    for (r = 0, a = o.length; r < a; ++r)e.union(o[r].bounds);
                    for (r = 0, a = s.length; r < a; ++r)s[r].bounds && e.union(s[r].bounds);
                    if (n)for (r = 0, a = u.length; r < a; ++r)e.union(u[r].bounds)
                }
                return (t.clip || t.width || t.height) && i(t, e.add(0, 0).add(t.width || 0, t.height || 0)), e.translate(t.x || 0, t.y || 0)
            }

            function m(t, e, n) {
                var r = t.mark.marktype;
                e = e || I[r], e.nest && (t = t.mark);
                var i = t.bounds, a = t["bounds:prev"] || (t["bounds:prev"] = new _);
                return i ? (a.clear().union(i), i.clear()) : t.bounds = new _, e(t, t.bounds, n), i || a.clear().union(t.bounds), t.bounds
            }

            function v(t, e, n) {
                var r, i, a, o, s = t.marktype, u = I[s], l = t.items, c = l && l.length;
                if (u.nest)return a = c ? l[0] : (N.mark = t, N), o = m(a, u, n), e = e && e.union(o) || o;
                if (e = e || t.bounds && t.bounds.clear() || new _, c)for (r = 0, i = l.length; r < i; ++r)e.union(m(l[r], u, n));
                return t.bounds = e
            }

            var y = t("./BoundsContext"), _ = t("./Bounds"), b = t("./canvas"), x = t("./svg"), w = t("./text"), k = t("../path"), M = k.parse, S = k.render, T = x.path.area, E = x.path.line, A = Math.PI / 2, L = Math.sqrt(3), C = Math.tan(30 * Math.PI / 180), D = null, P = y(), I = {
                group: g,
                symbol: h,
                image: c,
                rect: l,
                rule: d,
                arc: f,
                text: p,
                path: o,
                area: s,
                line: u
            };
            I.area.nest = !0, I.line.nest = !0;
            var N = {mark: null};
            e.exports = {mark: v, item: m, text: p, group: g}
        }, {"../path": 51, "./Bounds": 77, "./BoundsContext": 78, "./canvas": 83, "./svg": 86, "./text": 87}],
        83: [function (t, e, n) {
            (function (t) {
                function n(e, n) {
                    e = e || 1, n = n || 1;
                    var r;
                    if ("undefined" != typeof document && document.createElement)r = document.createElement("canvas"), r.width = e, r.height = n; else {
                        var i = "undefined" != typeof window ? window.canvas : "undefined" != typeof t ? t.canvas : null;
                        if (!i.prototype)return null;
                        r = new i(e, n)
                    }
                    return a(r)
                }

                function r(t, e, n, r, a) {
                    var o = this._ctx = t.getContext("2d"), s = 1;
                    return t.width = e + r.left + r.right, t.height = n + r.top + r.bottom, a && "undefined" != typeof HTMLElement && t instanceof HTMLElement && (o.pixelratio = s = i(t) || 1), o.setTransform(s, 0, 0, s, s * r.left, s * r.top), t
                }

                function i(t) {
                    var e = t.getContext("2d"), n = window && window.devicePixelRatio || 1, r = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1, i = n / r;
                    if (n !== r) {
                        var a = t.width, o = t.height;
                        t.width = a * i, t.height = o * i, t.style.width = a + "px", t.style.height = o + "px"
                    }
                    return i
                }

                function a(t) {
                    var e = t.getContext("2d");
                    if (!e.vgLineDash) {
                        var n = function () {
                        }, r = [];
                        return e.setLineDash ? (e.vgLineDash = function (t) {
                            this.setLineDash(t || r)
                        }, e.vgLineDashOffset = function (t) {
                            this.lineDashOffset = t
                        }) : void 0 !== e.webkitLineDash ? (e.vgLineDash = function (t) {
                            this.webkitLineDash = t || r
                        }, e.vgLineDashOffset = function (t) {
                            this.webkitLineDashOffset = t
                        }) : void 0 !== e.mozDash ? (e.vgLineDash = function (t) {
                            this.mozDash = t
                        }, e.vgLineDashOffset = n) : (e.vgLineDash = n, e.vgLineDashOffset = n), t
                    }
                }

                e.exports = {instance: n, resize: r, lineDash: a}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        84: [function (t, e, n) {
            function r(t, e, n) {
                return n ? t.createElementNS(n, e) : t.createElement(e)
            }

            function i(t) {
                if (t) {
                    var e = t.parentNode;
                    e && (e.removeChild(t), e.childNodes && e.childNodes.length || i(e))
                }
            }

            e.exports = {
                find: function (t, e) {
                    e = e.toLowerCase();
                    for (var n = 0, r = t.childNodes.length; n < r; ++n)if (t.childNodes[n].tagName.toLowerCase() === e)return t.childNodes[n]
                }, child: function (t, e, n, i, a, o) {
                    var s, u;
                    return s = u = t.childNodes[e], (!s || o || s.tagName.toLowerCase() !== n.toLowerCase() || a && s.getAttribute("class") != a) && (s = r(t.ownerDocument, n, i), t.insertBefore(s, u || null), a && s.setAttribute("class", a)), s
                }, clear: function (t, e) {
                    for (var n = t.childNodes.length; n > e;)t.removeChild(t.childNodes[--n]);
                    return t
                }, remove: i, cssClass: function (t) {
                    return "mark-" + t.marktype + (t.name ? " " + t.name : "")
                }, openTag: function (t, e, n) {
                    var r, i, a = "<" + t;
                    if (e)for (r in e)i = e[r], null != i && (a += " " + r + '="' + i + '"');
                    return n && (a += " " + n), a + ">"
                }, closeTag: function (t) {
                    return "</" + t + ">"
                }
            }
        }, {}],
        85: [function (t, e, n) {
            function r(t, e) {
                return JSON.stringify(t, u, e)
            }

            function i(t) {
                var e = "string" == typeof t ? JSON.parse(t) : t;
                return a(e)
            }

            function a(t) {
                var e, n, r, i, u, l = t.marktype;
                for (r = 0, i = s.length; r < i; ++r)if (u = t[s[r]])for (e = 0, n = u.length; e < n; ++e)u[e][l ? "mark" : "group"] = t, l && "group" !== l || a(u[e]);
                return l && o.mark(t), t
            }

            var o = t("../util/bound"), s = ["items", "axisItems", "legendItems"], u = ["marktype", "name", "interactive", "clip", "items", "axisItems", "legendItems", "layer", "x", "y", "width", "height", "align", "baseline", "fill", "fillOpacity", "opacity", "stroke", "strokeOpacity", "strokeWidth", "strokeCap", "strokeDash", "strokeDashOffset", "startAngle", "endAngle", "innerRadius", "outerRadius", "interpolate", "tension", "orient", "url", "path", "x2", "y2", "size", "shape", "text", "angle", "theta", "radius", "dx", "dy", "font", "fontSize", "fontWeight", "fontStyle", "fontVariant"];
            e.exports = {toJSON: r, fromJSON: i}
        }, {"../util/bound": 82}],
        86: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    return t.x || 0
                }

                function i(t) {
                    return t.y || 0
                }

                function a(t) {
                    return (t.x || 0) + (t.width || 0)
                }

                function o(t) {
                    return (t.y || 0) + (t.height || 0)
                }

                function s(t) {
                    return null == t.size ? 100 : t.size
                }

                function u(t) {
                    return t.shape || "circle"
                }

                var l = t("datalib"), c = ("undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null).svg, d = t("../path/parse"), f = c.area().x(r).y1(i).y0(o), h = c.area().y(i).x1(r).x0(a), p = c.line().x(r).y(i);
                e.exports = {
                    metadata: {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    },
                    path: {
                        arc: c.arc(), symbol: c.symbol().type(u).size(s), area: function (t) {
                            var e = t[0];
                            return ("horizontal" === e.orient ? h : f).interpolate(e.interpolate || "linear").tension(e.tension || .7)(t)
                        }, line: function (t) {
                            var e = t[0];
                            return p.interpolate(e.interpolate || "linear").tension(e.tension || .7)(t)
                        }, resize: function (t, e) {
                            var n, r, i, a, o, s, u, l = d(t), c = "";
                            for (e = Math.sqrt(e), a = 0, o = l.length; a < o; ++a)for (n = l[a], s = 0, u = n.length; s < u && "Z" !== n[s]; ++s)(r = +n[s]) === r && (i = t.indexOf(r), c += t.substring(0, i) + r * e, t = t.substring(i + (r + "").length));
                            return c + "Z"
                        }
                    },
                    symbolTypes: l.toMap(c.symbolTypes),
                    textAlign: {left: "start", center: "middle", right: "end"},
                    textBaseline: {top: "before-edge", bottom: "after-edge", middle: "central"},
                    styles: {
                        fill: "fill",
                        fillOpacity: "fill-opacity",
                        stroke: "stroke",
                        strokeWidth: "stroke-width",
                        strokeOpacity: "stroke-opacity",
                        strokeCap: "stroke-linecap",
                        strokeDash: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        opacity: "opacity"
                    },
                    styleProperties: ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "strokeCap", "strokeDash", "strokeDashOffset", "opacity"]
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"../path/parse": 52, datalib: 26}],
        87: [function (t, e, n) {
            function r(t) {
                return null != t.fontSize ? t.fontSize : 11
            }

            e.exports = {
                size: r, value: function (t) {
                    return null != t ? String(t) : ""
                }, font: function (t, e) {
                    var n = t.font;
                    return e && n && (n = String(n).replace(/\"/g, "'")), "" + (t.fontStyle ? t.fontStyle + " " : "") + (t.fontVariant ? t.fontVariant + " " : "") + (t.fontWeight ? t.fontWeight + " " : "") + r(t) + "px " + (n || "sans-serif")
                }, offset: function (t) {
                    var e = t.baseline, n = r(t);
                    return Math.round("top" === e ? .93 * n : "middle" === e ? .3 * n : "bottom" === e ? -.21 * n : 0)
                }
            }
        }, {}],
        88: [function (t, e, n) {
            function r(t, e, n) {
                s.call(this, t, e, n), this._type = "canvas", this._renderers = {canvas: a, svg: o}
            }

            var i = t("vega-scenegraph").render, a = i.canvas, o = i.svg.string, s = t("./View"), u = r.prototype = new s;
            u.renderer = function (t) {
                return t && (this._type = t), s.prototype.renderer.apply(this, arguments)
            }, u.canvas = function () {
                return "canvas" === this._type ? this._renderer.canvas() : null
            }, u.canvasAsync = function (t) {
                function e() {
                    0 === n.pendingImages() ? (r.render(), t(r.canvas())) : setTimeout(e, 10)
                }

                var n = this._renderer, r = this;
                return "canvas" !== this._type ? null : void(n.pendingImages() > 0 ? e() : t(this.canvas()))
            }, u.svg = function () {
                return "svg" === this._type ? this._renderer.svg() : null
            }, u.initialize = function () {
                var t = this._width, e = this._height, n = this._bgcolor, r = this._padding, i = this.model().config();
                return this._viewport && (t = this._viewport[0] - (r ? r.left + r.right : 0), e = this._viewport[1] - (r ? r.top + r.bottom : 0)), this._renderer = (this._renderer || new this._io.Renderer(i.load)).initialize(null, t, e, r).background(n), this
            }, e.exports = r
        }, {"./View": 90, "vega-scenegraph": 49}],
        89: [function (t, e, n) {
            function r(t) {
                this._defs = {}, this._predicates = {}, this._scene = null, this._groups = null, this._node = null, this._builder = null, this._reset = {
                    axes: !1,
                    legends: !1
                }, this.config(t), this.expr = f(this), u.init.call(this)
            }

            function i(t) {
                var e = this, n = {};
                return a.isArray(t) ? (t.forEach(function (t) {
                    n[t] = e._predicates[t]
                }), n) : this._predicates[t]
            }

            var a = t("datalib"), o = t("vega-dataflow"), s = o.ChangeSet, u = o.Graph.prototype, l = o.Node, c = t("../scene/GroupBuilder"), d = t("../scene/visit"), f = t("../parse/expr"), h = t("./config"), p = r.prototype = Object.create(u);
            p.constructor = r, p.defs = function (t) {
                return arguments.length ? (this._defs = t, this) : this._defs
            }, p.config = function (t) {
                if (!arguments.length)return this._config;
                this._config = Object.create(h);
                for (var e in t) {
                    var n = t[e], r = this._config[e];
                    a.isObject(n) && a.isObject(r) ? this._config[e] = a.extend({}, r, n) : this._config[e] = n
                }
                return this
            }, p.width = function (t) {
                return this._defs && (this._defs.width = t), this._defs && this._defs.marks && (this._defs.marks.width = t), this._scene && (this._scene.items[0].width = t, this._scene.items[0]._dirty = !0), this._reset.axes = !0, this
            }, p.height = function (t) {
                return this._defs && (this._defs.height = t), this._defs && this._defs.marks && (this._defs.marks.height = t), this._scene && (this._scene.items[0].height = t, this._scene.items[0]._dirty = !0), this._reset.axes = !0, this
            }, p.node = function () {
                return this._node || (this._node = new l(this))
            }, p.data = function () {
                var t = u.data.apply(this, arguments);
                return arguments.length > 1 && this.node().addListener(t.pipeline()[0]), t
            }, p.predicate = function (t, e) {
                return 1 === arguments.length ? i.call(this, t) : this._predicates[t] = e
            }, p.predicates = function () {
                return this._predicates
            }, p.scene = function (t) {
                if (!arguments.length)return this._scene;
                this._builder && (this.node().removeListener(this._builder), this._builder._groupBuilder.disconnect());
                var e = this, n = this._builder = new l(this);
                return n.evaluate = function (r) {
                    if (n._groupBuilder)return r;
                    var i = n._groupBuilder = new c(e, e._defs.marks, e._scene = {}), a = i.pipeline();
                    return e._groups = {}, this.addListener(i.connect()), a[a.length - 1].addListener(t), r
                }, this.addListener(n), this
            }, p.group = function (t, e) {
                var n = this._groups;
                return 1 === arguments.length ? n[t] : (n[t] = e, this)
            }, p.reset = function () {
                return this._scene && this._reset.axes && (d(this._scene, function (t) {
                    t.axes && t.axes.forEach(function (t) {
                        t.reset()
                    })
                }), this._reset.axes = !1), this._scene && this._reset.legends && (d(this._scene, function (t) {
                    t.legends && t.legends.forEach(function (t) {
                        t.reset()
                    })
                }), this._reset.legends = !1), this
            }, p.addListener = function (t) {
                this.node().addListener(t)
            }, p.removeListener = function (t) {
                this.node().removeListener(t)
            }, p.fire = function (t) {
                t || (t = s.create()), this.propagate(t, this.node())
            }, e.exports = r
        }, {
            "../parse/expr": 96,
            "../scene/GroupBuilder": 112,
            "../scene/visit": 117,
            "./config": 91,
            datalib: 26,
            "vega-dataflow": 41
        }],
        90: [function (t, e, n) {
            (function (n) {
                function r(t, e, n) {
                    this._el = null, this._model = null, this._width = this.__width = e || 500, this._height = this.__height = n || 300, this._bgcolor = null, this._cursor = !0, this._autopad = 1, this._padding = {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }, this._viewport = null, this._renderer = null, this._handler = null, this._streamer = null, this._skipSignals = !1, this._changeset = null, this._repaint = !0, this._renderers = c, this._io = null, this._api = {}
                }

                function i(t) {
                    var e = this, n = this._model.data(t);
                    if (!n)return d.error('Data source "' + t + '" is not defined.');
                    var r = n.pipeline()[0], i = this._streamer, a = {};
                    return this._api[t] ? this._api[t] : (a.insert = function (o) {
                        return n.insert(u.duplicate(o)), i.addListener(r), e._changeset.data[t] = 1, a
                    }, a.update = function () {
                        return i.addListener(r), e._changeset.data[t] = 1, n.update.apply(n, arguments), a
                    }, a.remove = function () {
                        return i.addListener(r), e._changeset.data[t] = 1, n.remove.apply(n, arguments), a
                    }, a.values = function () {
                        return n.values()
                    }, this._api[t] = a)
                }

                function a(t, e) {
                    var n = this._changeset, r = this._model.signal(t);
                    return r ? (this._streamer.addListener(r.value(e)), n.signals[t] = 1, void(n.reflow = !0)) : d.error('Signal "' + t + '" is not defined.')
                }

                function o() {
                    var t = this;
                    return t._renderNode = new l.Node(t._model).router(!0), t._renderNode.evaluate = function (e) {
                        d.debug(e, ["rendering"]);
                        var n = t._model.scene(), r = t._handler;
                        return r && r.scene && r.scene(n), e.trans ? e.trans.start(function (e) {
                            t._renderer.render(n, e)
                        }) : t._repaint ? t._renderer.render(n) : e.dirty.length && t._renderer.render(n, e.dirty), e.dirty.length && (e.dirty.forEach(function (t) {
                            t._dirty = !1
                        }), n.items[0]._dirty = !1), t._repaint = t._skipSignals = !1, e
                    }, t._model.scene(t._renderNode), !0
                }

                var s = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, u = t("datalib"), l = t("vega-dataflow"), c = t("vega-scenegraph").render, d = t("vega-logging"), f = l.Dependencies, h = t("../parse/streams"), p = t("../scene/Encoder"), g = t("../scene/Transition"), m = r.prototype;
                m.model = function (t) {
                    return arguments.length ? (this._model !== t && (this._model = t, this._streamer = new l.Node(t), this._streamer._rank = -1, this._changeset = l.ChangeSet.create(), this._handler && this._handler.model(t)), this) : this._model
                }, m.data = function (t) {
                    var e = this;
                    return arguments.length ? u.isString(t) ? i.call(e, t) : (u.isObject(t) && u.keys(t).forEach(function (n) {
                        var r = i.call(e, n);
                        t[n](r)
                    }), this) : e._model.values()
                };
                var v = u.toMap(["width", "height", "padding"]);
                m.signal = function (t, e, n) {
                    var r, i, o = this._model;
                    if (!arguments.length)return o.values(f.SIGNALS);
                    if (1 === arguments.length && u.isString(t))return o.values(f.SIGNALS, t);
                    u.isObject(t) ? (i = t, n = e) : (i = {}, i[t] = e);
                    for (r in i)v[r] ? this[r](i[r]) : a.call(this, r, i[r]);
                    return this._skipSignals = n, this
                }, m.width = function (t) {
                    return arguments.length ? (this.__width !== t && (this._width = this.__width = t, this.model().width(t), this.initialize(), this._strict && (this._autopad = 1), a.call(this, "width", t)), this) : this.__width
                }, m.height = function (t) {
                    return arguments.length ? (this.__height !== t && (this._height = this.__height = t, this.model().height(t), this.initialize(), this._strict && (this._autopad = 1), a.call(this, "height", t)), this) : this.__height
                }, m.background = function (t) {
                    return arguments.length ? (this._bgcolor !== t && (this._bgcolor = t, this.initialize()), this) : this._bgcolor
                }, m.padding = function (t) {
                    return arguments.length ? (this._padding !== t && (u.isString(t) ? (this._autopad = 1, this._padding = {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }, this._strict = "strict" === t) : (this._autopad = 0, this._padding = t, this._strict = !1), this._renderer && this._renderer.resize(this._width, this._height, this._padding), this._handler && this._handler.padding(this._padding), a.call(this, "padding", this._padding)), this._repaint = !0, this) : this._padding
                }, m.autopad = function (t) {
                    if (this._autopad < 1)return this;
                    this._autopad = 0;
                    var e = this.model().scene().bounds, n = this._padding, r = this.model().config(), i = r.autopadInset, o = e.x1 < 0 ? Math.ceil(-e.x1) + i : 0, s = e.y1 < 0 ? Math.ceil(-e.y1) + i : 0, u = e.x2 > this._width ? Math.ceil(+e.x2 - this._width) + i : 0;
                    return e = e.y2 > this._height ? Math.ceil(+e.y2 - this._height) + i : 0, n = {
                        left: o,
                        top: s,
                        right: u,
                        bottom: e
                    }, this._strict ? (this._autopad = 0, this._padding = n, this._width = Math.max(0, this.__width - (o + u)), this._height = Math.max(0, this.__height - (s + e)), this._model.width(this._width).height(this._height).reset(), a.call(this, "width", this._width), a.call(this, "height", this._height), a.call(this, "padding", n), this.initialize().update({props: "enter"}).update({props: "update"})) : this.padding(n).update(t), this
                }, m.viewport = function (t) {
                    return arguments.length ? (this._viewport !== t && (this._viewport = t, this.initialize()), this) : this._viewport
                }, m.renderer = function (t) {
                    if (!arguments.length)return this._renderer;
                    if (this._renderers[t])t = this._renderers[t]; else {
                        if (u.isString(t))throw new Error("Unknown renderer: " + t);
                        if (!t)throw new Error("No renderer specified")
                    }
                    return this._io !== t && (this._io = t, this._renderer = null, this.initialize(), this._build && this.render()), this
                }, m.initialize = function (t) {
                    var e, n = this, r = n._width, i = n._height, a = n._padding, o = n._bgcolor, u = this.model().config();
                    return arguments.length && null !== t || (t = this._el ? this._el.parentNode : null) ? (s.select(t).select("div.vega").remove(), this._el = t = s.select(t).append("div").attr("class", "vega").style("position", "relative").node(), n._viewport && s.select(t).style("width", (n._viewport[0] || r) + "px").style("height", (n._viewport[1] || i) + "px").style("overflow", "auto"),
                        c.canvas.Renderer.RETINA = u.render.retina, n._renderer = (n._renderer || new this._io.Renderer(u.load)).initialize(t, r, i, a).background(o), e = n._handler, n._handler = (new this._io.Handler).initialize(t, a, n), e ? e.handlers().forEach(function (t) {
                        n._handler.on(t.type, t.handler)
                    }) : n._detach = h(this), this._repaint = !0, this) : this
                }, m.destroy = function () {
                    this._detach && this._detach()
                }, m.update = function (t) {
                    t = t || {};
                    var e = this, n = this._model, r = this._streamer, i = this._changeset, a = t.duration ? new g(t.duration, t.ease) : null;
                    if (a && (i.trans = a), void 0 !== t.props) {
                        if (u.keys(i.data).length > 0)throw Error("New data values are not reflected in the visualization. Please call view.update() before updating a specified property set.");
                        i.reflow = !0, i.request = t.props
                    }
                    var s = e._build;
                    return e._build = e._build || o.call(this), t.items && s ? (p.update(n, t.trans, t.props, t.items, i.dirty), e._renderNode.evaluate(i)) : r.listeners().length && s ? (this._repaint && r.addListener(n.node()), n.propagate(i, r, null, this._skipSignals), r.disconnect()) : n.fire(i), e._changeset = l.ChangeSet.create(), e.autopad(t)
                }, m.toImageURL = function (t) {
                    var e, n = this;
                    switch (t || "png") {
                        case"canvas":
                        case"png":
                            e = c.canvas.Renderer;
                            break;
                        case"svg":
                            e = c.svg.string.Renderer;
                            break;
                        default:
                            throw Error("Unrecognized renderer type: " + t)
                    }
                    var r = c.canvas.Renderer.RETINA;
                    c.canvas.Renderer.RETINA = !1;
                    var i = new e(n._model.config.load).initialize(null, n._width, n._height, n._padding).background(n._bgcolor).render(n._model.scene());
                    if (c.canvas.Renderer.RETINA = r, "svg" === t) {
                        var a = new Blob([i.svg()], {type: "image/svg+xml"});
                        return window.URL.createObjectURL(a)
                    }
                    return i.canvas().toDataURL("image/png")
                }, m.render = function (t) {
                    return this._renderer.render(this._model.scene(), t), this
                }, m.on = function () {
                    return this._handler.on.apply(this._handler, arguments), this
                }, m.onSignal = function (t, e) {
                    var n = this._model.signal(t);
                    return n ? n.on(e) : d.error('Signal "' + t + '" is not defined.'), this
                }, m.off = function () {
                    return this._handler.off.apply(this._handler, arguments), this
                }, m.offSignal = function (t, e) {
                    var n = this._model.signal(t);
                    return n ? n.off(e) : d.error('Signal "' + t + '" is not defined.'), this
                }, r.factory = function (e) {
                    var n = t("./HeadlessView");
                    return function (t) {
                        t = t || {};
                        var i = e.defs(), a = (t.el ? new r : new n).model(e).renderer(t.renderer || "canvas").width(i.width).height(i.height).background(i.background).padding(i.padding).viewport(i.viewport).initialize(t.el);
                        return t.data && a.data(t.data), t.el && (t.hover !== !1 && a.on("mouseover", function (t, e) {
                            e && e.hasPropertySet("hover") && this.update({props: "hover", items: e})
                        }).on("mouseout", function (t, e) {
                            e && e.hasPropertySet("hover") && this.update({props: "update", items: e})
                        }), t.cursor !== !1 && a.onSignal("cursor", function (t, e) {
                            var n = s.select("body");
                            u.isString(e) ? (a._cursor = "default" === e, n.style("cursor", e)) : u.isObject(e) && a._cursor && n.style("cursor", e.default)
                        })), a
                    }
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "../parse/streams": 107,
            "../scene/Encoder": 111,
            "../scene/Transition": 114,
            "./HeadlessView": 88,
            datalib: 26,
            "vega-dataflow": 41,
            "vega-logging": 48,
            "vega-scenegraph": 49
        }],
        91: [function (t, e, n) {
            (function (t) {
                var n = "undefined" != typeof window ? window.d3 : "undefined" != typeof t ? t.d3 : null, r = {};
                r.load = {baseURL: "", domainWhiteList: !1}, r.autopadInset = 5, r.scale = {
                    time: n.time.scale,
                    utc: n.time.scale.utc
                }, r.render = {retina: !0}, r.scene = {
                    fill: void 0,
                    fillOpacity: void 0,
                    stroke: void 0,
                    strokeOpacity: void 0,
                    strokeWidth: void 0,
                    strokeDash: void 0,
                    strokeDashOffset: void 0
                }, r.axis = {
                    layer: "back",
                    ticks: 10,
                    padding: 3,
                    axisColor: "#000",
                    axisWidth: 1,
                    gridColor: "#000",
                    gridOpacity: .15,
                    tickColor: "#000",
                    tickLabelColor: "#000",
                    tickWidth: 1,
                    tickSize: 6,
                    tickLabelFontSize: 11,
                    tickLabelFont: "sans-serif",
                    titleColor: "#000",
                    titleFont: "sans-serif",
                    titleFontSize: 11,
                    titleFontWeight: "bold",
                    titleOffset: "auto",
                    titleOffsetAutoMin: 30,
                    titleOffsetAutoMax: 1e4,
                    titleOffsetAutoMargin: 4
                }, r.legend = {
                    orient: "right",
                    offset: 20,
                    padding: 3,
                    margin: 2,
                    gradientStrokeColor: "#888",
                    gradientStrokeWidth: 1,
                    gradientHeight: 16,
                    gradientWidth: 100,
                    labelColor: "#000",
                    labelFontSize: 10,
                    labelFont: "sans-serif",
                    labelAlign: "left",
                    labelBaseline: "middle",
                    labelOffset: 8,
                    symbolShape: "circle",
                    symbolSize: 50,
                    symbolColor: "#888",
                    symbolStrokeWidth: 1,
                    titleColor: "#000",
                    titleFont: "sans-serif",
                    titleFontSize: 11,
                    titleFontWeight: "bold"
                }, r.color = {
                    rgb: [128, 128, 128],
                    lab: [50, 0, 0],
                    hcl: [0, 0, 50],
                    hsl: [0, 0, .5]
                }, r.range = {
                    category10: n.scale.category10().range(),
                    category20: n.scale.category20().range(),
                    category20b: n.scale.category20b().range(),
                    category20c: n.scale.category20c().range(),
                    shapes: ["circle", "cross", "diamond", "square", "triangle-down", "triangle-up"]
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        92: [function (t, e, n) {
            function r(t, e, n) {
                var r = t.schema;
                r && (r.refs && i.extend(n.refs, r.refs), r.defs && i.extend(n.defs, r.defs))
            }

            var i = t("datalib"), a = t("../parse"), o = t("../scene/Scale"), s = t("./config");
            e.exports = function (t) {
                var e = null;
                return t = t || {}, t.url ? e = i.json(i.extend({url: t.url}, s.load)) : (e = {
                    $schema: "http://json-schema.org/draft-04/schema#",
                    title: "Vega Visualization Specification Language",
                    defs: {},
                    refs: {},
                    $ref: "#/defs/spec"
                }, i.keys(a).forEach(function (n) {
                    r(a[n], t, e)
                }), r(o, t, e)), t.properties && i.keys(t.properties).forEach(function (n) {
                    e.defs.propset.properties[n] = {$ref: "#/refs/" + t.properties[n] + "Value"}
                }), t.propertySets && i.keys(t.propertySets).forEach(function (t) {
                    e.defs.mark.properties.properties.properties[t] = {$ref: "#/defs/propset"}
                }), e
            }
        }, {"../parse": 97, "../scene/Scale": 113, "./config": 91, datalib: 26}],
        93: [function (t, e, n) {
            function r(t, e, n, r) {
                var o = a(t);
                (e || []).forEach(function (e, a) {
                    n[a] = n[a] || s(t, o[e.type]), i(o[e.type], e, a, n[a], r)
                })
            }

            function i(t, e, n, r, i) {
                var a;
                void 0 !== e.scale && r.scale(a = i.scale(e.scale));
                var s = t.grid;
                o.isObject(s) && (t.grid = void 0 !== s[a.type] ? s[a.type] : s.default), r.orient(u(e, t, "orient", l[e.type])), r.offset(u(e, t, "offset", 0)), r.layer(u(e, t, "layer", "front")), r.grid(u(e, t, "grid", !1)), r.title(e.title || null), r.titleOffset(u(e, t, "titleOffset")), r.tickValues(e.values || null), r.tickFormat(e.format || null), r.tickFormatType(e.formatType || null), r.tickSubdivide(e.subdivide || 0), r.tickPadding(u(e, t, "tickPadding", t.padding));
                var c = u(e, t, "tickSize"), d = [c, c, c];
                d[0] = u(e, t, "tickSizeMajor", d[0]), d[1] = u(e, t, "tickSizeMinor", d[1]), d[2] = u(e, t, "tickSizeEnd", d[2]), d.length && r.tickSize.apply(r, d), r.tickCount(u(e, t, "ticks"));
                var f = e.properties;
                f && f.ticks ? (r.majorTickProperties(f.majorTicks ? o.extend({}, f.ticks, f.majorTicks) : f.ticks), r.minorTickProperties(f.minorTicks ? o.extend({}, f.ticks, f.minorTicks) : f.ticks)) : (r.majorTickProperties(f && f.majorTicks || {}), r.minorTickProperties(f && f.minorTicks || {})), r.tickLabelProperties(f && f.labels || {}), r.titleProperties(f && f.title || {}), r.gridLineProperties(f && f.grid || {}), r.domainProperties(f && f.axis || {})
            }

            function a(t) {
                var e = t.config(), n = e.axis;
                return {x: o.extend(o.duplicate(n), e.axis_x), y: o.extend(o.duplicate(n), e.axis_y)}
            }

            var o = t("datalib"), s = t("../scene/axis"), u = t("../util/theme-val"), l = {
                x: "bottom",
                y: "left",
                top: "top",
                bottom: "bottom",
                left: "left",
                right: "right"
            };
            e.exports = r
        }, {"../scene/axis": 115, "../util/theme-val": 149, datalib: 26}],
        94: [function (t, e, n) {
            (function (t) {
                function n(t) {
                    return null == t ? null : r.rgb(t) + ""
                }

                var r = "undefined" != typeof window ? window.d3 : "undefined" != typeof t ? t.d3 : null;
                e.exports = n
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        95: [function (t, e, n) {
            function r(t, e, n) {
                function o(t, e) {
                    a.error("PARSE DATA FAILED: " + e.name + " " + t), l = -1, n(t)
                }

                function s(e) {
                    return function (r, a) {
                        if (r)o(r, e); else if (l > 0)try {
                            t.data(e.name).values(i.read(a, e.format)), 0 === --l && n()
                        } catch (t) {
                            o(t, e)
                        }
                    }
                }

                var u = t.config(), l = 0;
                return (e || []).forEach(function (e) {
                    e.url && (l += 1, i.load(i.extend({url: e.url}, u.load), s(e)));
                    try {
                        r.datasource(t, e)
                    } catch (t) {
                        o(t, e)
                    }
                }), 0 === l && setTimeout(n, 1), e
            }

            var i = t("datalib"), a = t("vega-logging"), o = t("./transforms"), s = t("./modify");
            r.datasource = function (t, e) {
                var n = (e.transform || []).map(function (e) {
                    return o(t, e)
                }), r = (e.modify || []).map(function (n) {
                    return s(t, n, e)
                }), a = t.data(e.name, r.concat(n));
                return e.values ? a.values(i.read(e.values, e.format)) : e.source && (a.source(e.source).addListener(a), t.removeListener(a.pipeline()[0])), a
            }, e.exports = r
        }, {"./modify": 101, "./transforms": 108, datalib: 26, "vega-logging": 48}],
        96: [function (t, e, n) {
            function r(t) {
                return function (e) {
                    e = e.map(t);
                    var n = e.length;
                    if (n < 1 || n > 2)throw Error("open takes exactly 1 or 2 arguments.");
                    return "this.defs.open(this.model, " + e[0] + (n > 1 ? "," + e[1] : "") + ")"
                }
            }

            function i(t, e, n) {
                if ("undefined" == typeof window || !window || !window.open)throw Error("Open function can only be invoked in a browser.");
                var r = p.extend({type: "open", url: e, name: n}, t.config().load), i = p.load.sanitizeUrl(r);
                if (!i)throw Error("Invalid URL: " + r.url);
                window.open(i, n)
            }

            function a(t, e) {
                return function (n) {
                    n = n.map(t);
                    var r = n.length;
                    if (r < 2 || r > 3)throw Error("scale takes exactly 2 or 3 arguments.");
                    return "this.defs.scale(this.model, " + e + ", " + n[0] + "," + n[1] + (r > 2 ? "," + n[2] : "") + ")"
                }
            }

            function o(t, e, n, r, i) {
                if (i && i.scale || (i = i && i.mark ? i.mark.group : t.scene().items[0]), t.group(i._id) !== i)throw Error('Scope for scale "' + n + '" is not a valid group item.');
                var a = i.scale(n);
                return a ? e ? a.invert(r) : a(r) : r
            }

            function s(t, e, n, r) {
                var i = e, a = n;
                return e > n && (i = n, a = e), r ? i < t && a > t : i <= t && a >= t
            }

            function u(t) {
                return function (e, n, r, i) {
                    var a;
                    if (3 !== e.length)throw Error("indata takes 3 arguments.");
                    if ("Literal" !== e[0].type)throw Error("Data source name must be a literal for indata.");
                    return a = e[0].value, i[a] = 1, "Literal" === e[2].type && u.model.requestIndex(a, e[2].value), e = e.map(t), "this.defs.indata(this.model," + e[0] + "," + e[1] + "," + e[2] + ")"
                }
            }

            function l(t, e, n, r) {
                var i = t.data(e), a = i.getIndex(r);
                return a[n] > 0
            }

            function c(t, e) {
                return g.format(t, "number")(e)
            }

            function d(t, e) {
                return g.format(t, "time")(e)
            }

            function f(t, e) {
                return g.format(t, "utc")(e)
            }

            function h(t) {
                return function (e) {
                    u.model = t;
                    var n = y(e);
                    return n.model = t, n.sig = t ? t._signals : {}, n
                }
            }

            var p = t("datalib"), g = p.template, m = t("vega-expression"), v = ["datum", "parent", "event", "signals"], y = m.compiler(v, {
                idWhiteList: v,
                fieldVar: v[0],
                globalVar: function (t) {
                    return "this.sig[" + p.str(t) + "]._value"
                },
                functions: function (t) {
                    var e = m.functions(t);
                    return e.eventItem = "event.vg.getItem", e.eventGroup = "event.vg.getGroup", e.eventX = "event.vg.getX", e.eventY = "event.vg.getY", e.open = r(t), e.scale = a(t, !1), e.iscale = a(t, !0), e.inrange = "this.defs.inrange", e.indata = u(t), e.format = "this.defs.format", e.timeFormat = "this.defs.timeFormat", e.utcFormat = "this.defs.utcFormat", e
                },
                functionDefs: function () {
                    return {scale: o, inrange: s, indata: l, format: c, timeFormat: d, utcFormat: f, open: i}
                }
            });
            h.scale = o, h.codegen = y.codegen, e.exports = h
        }, {datalib: 26, "vega-expression": 46}],
        97: [function (t, e, n) {
            e.exports = {
                axes: t("./axes"),
                background: t("./background"),
                data: t("./data"),
                events: t("vega-event-selector"),
                expr: t("./expr"),
                legends: t("./legends"),
                mark: t("./mark"),
                marks: t("./marks"),
                modify: t("./modify"),
                padding: t("./padding"),
                predicates: t("./predicates"),
                properties: t("./properties"),
                signals: t("./signals"),
                spec: t("./spec"),
                streams: t("./streams"),
                transforms: t("./transforms")
            }
        }, {
            "./axes": 93,
            "./background": 94,
            "./data": 95,
            "./expr": 96,
            "./legends": 98,
            "./mark": 99,
            "./marks": 100,
            "./modify": 101,
            "./padding": 102,
            "./predicates": 103,
            "./properties": 104,
            "./signals": 105,
            "./spec": 106,
            "./streams": 107,
            "./transforms": 108,
            "vega-event-selector": 42
        }],
        98: [function (t, e, n) {
            function r(t, e, n, r) {
                (e || []).forEach(function (e, o) {
                    n[o] = n[o] || a(t), i(e, o, n[o], r)
                })
            }

            function i(t, e, n, r) {
                n.size(t.size ? r.scale(t.size) : null), n.shape(t.shape ? r.scale(t.shape) : null), n.fill(t.fill ? r.scale(t.fill) : null), n.stroke(t.stroke ? r.scale(t.stroke) : null), n.opacity(t.opacity ? r.scale(t.opacity) : null), t.orient && n.orient(t.orient), null != t.offset && n.offset(t.offset), n.title(t.title || null), n.values(t.values || null), n.format(void 0 !== t.format ? t.format : null), n.formatType(t.formatType || null);
                var i = t.properties;
                n.titleProperties(i && i.title || {}), n.labelProperties(i && i.labels || {}), n.legendProperties(i && i.legend || {}), n.symbolProperties(i && i.symbols || {}), n.gradientProperties(i && i.gradient || {})
            }

            var a = t("../scene/legend");
            e.exports = r
        }, {"../scene/legend": 116}],
        99: [function (t, e, n) {
            function r(t, e, n) {
                var o = e.properties || n && (e.properties = {}), s = o.enter || n && (o.enter = {}), u = e.marks, l = t.config().marks || {};
                if (n) {
                    "symbol" === e.type && !s.size && l.symbolSize && (s.size = {value: l.symbolSize});
                    var c = {
                        arc: "fill",
                        area: "fill",
                        rect: "fill",
                        symbol: "fill",
                        text: "fill",
                        line: "stroke",
                        path: "stroke",
                        rule: "stroke"
                    }, d = c[e.type];
                    !s[d] && l.color && (s[d] = {value: l.color})
                }
                return i.keys(o).forEach(function (n) {
                    o[n] = a(t, e.type, o[n])
                }), e.delay && (e.delay = a(t, e.type, {delay: e.delay})), u && (e.marks = u.map(function (e) {
                    return r(t, e, !0)
                })), e
            }

            var i = t("datalib"), a = t("./properties");
            e.exports = r
        }, {"./properties": 104, datalib: 26}],
        100: [function (t, e, n) {
            function r(t, e, n, r) {
                return {
                    type: "group",
                    width: n,
                    height: r,
                    properties: i(e.scene || {}, t),
                    scales: e.scales || [],
                    axes: e.axes || [],
                    legends: e.legends || [],
                    marks: (e.marks || []).map(function (e) {
                        return a(t, e, !0)
                    })
                }
            }

            function i(t, e) {
                var n, r, i, a, u, l = e.config().scene, c = {};
                for (n = 0, r = i = s.length; n < r; ++n)a = s[n], void 0 !== (u = t[a]) ? c[a] = u.signal ? u : {value: u} : l[a] ? c[a] = {value: l[a]} : --i;
                return i ? {update: o(e, "group", c)} : {}
            }

            var a = t("./mark"), o = t("./properties"), s = ["fill", "fillOpacity", "stroke", "strokeOpacity", "strokeWidth", "strokeDash", "strokeDashOffset"];
            e.exports = r
        }, {"./mark": 99, "./properties": 104}],
        101: [function (t, e, n) {
            function r(t, e, n, r) {
                var i, a, o, s, u = !0, l = t.length;
                for (i = n.length - 1; i >= 0; --i) {
                    for (a = 0; a < l; ++a)if (o = t[a], s = e && o(e) || e, o(n[i]) !== s) {
                        u = !1;
                        break
                    }
                    u && r.push.apply(r, n.splice(i, 1)), u = !0
                }
            }

            function i(t, e, n) {
                var r = c.ingest(e);
                t.add.push(r), n._data.push(r)
            }

            function a(t, e, n) {
                var a = e.signal ? o.field(e.signal) : null, u = a ? a[0] : null, p = e.predicate ? t.predicate(e.predicate.name || e.predicate) : null, g = e.test ? t.expr(e.test) : null, m = null === p && null === g, v = e.type === f.CLEAR, y = o.array(e.field || "data"), _ = y.map(o.accessor), b = y.map(o.mutator), x = new l(t).router(v);
                return x.evaluate = function (l) {
                    var x, w;
                    if (null !== p && (x = t.values(d.DATA, p.data || h), w = t.values(d.SIGNALS, p.signals || h), m = p.call(p, {}, x, w, t._predicates)), null !== g && (w = t.values(d.SIGNALS, g.globals || h), m = g.fn()), s.debug(l, [e.type + "ing", m]), !m || !v && !l.signals[u])return l;
                    var k, M = a ? t.signalRef(e.signal) : null, S = t.data(n.name), T = null, E = [], A = [], L = 0;
                    return o.isObject(M) ? (k = M, e.field || (y = o.keys(k), _ = y.map(o.accessor), b = y.map(o.mutator))) : (k = {}, b.forEach(function (t) {
                        t(k, M)
                    })), e.type === f.INSERT ? i(l, k, S) : e.type === f.REMOVE ? (r(_, M, l.mod, l.rem), r(_, M, l.add, A), r(_, M, S._data, A)) : e.type === f.UPSERT ? (l.mod.forEach(function (t) {
                        var e = _.every(function (e) {
                            return e(t) === e(k)
                        });
                        e && (o.extend(t, k), L += 1)
                    }), 0 === L && i(l, k, S)) : e.type === f.TOGGLE ? (r(_, M, l.mod, A), l.rem.push.apply(l.rem, A), r(_, M, l.add, E), E.length || A.length ? S._data = S._data.filter(function (t) {
                        return A.indexOf(t) < 0 && E.indexOf(t) < 0
                    }) : (l.add.push(T = c.ingest(k)), S._data.push(T))) : e.type === f.CLEAR && (l.rem.push.apply(l.rem, l.mod.splice(0)), l.add.splice(0), S._data.splice(0)), y.forEach(function (t) {
                        l.fields[t] = 1
                    }), l
                }, u && x.dependency(d.SIGNALS, u), p && (x.dependency(d.DATA, p.data), x.dependency(d.SIGNALS, p.signals)), g && (x.dependency(d.SIGNALS, g.globals), x.dependency(d.DATA, g.dataSources)), x
            }

            var o = t("datalib"), s = t("vega-logging"), u = t("vega-dataflow"), l = u.Node, c = u.Tuple, d = u.Dependencies, f = {
                INSERT: "insert",
                REMOVE: "remove",
                UPSERT: "upsert",
                TOGGLE: "toggle",
                CLEAR: "clear"
            }, h = [];
            e.exports = a
        }, {datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        102: [function (t, e, n) {
            function r(t) {
                return null == t ? "auto" : i.isObject(t) ? t : i.isNumber(t) ? {
                    top: t,
                    left: t,
                    right: t,
                    bottom: t
                } : "strict" === t ? t : "auto"
            }

            var i = t("datalib");
            e.exports = r
        }, {datalib: 26}],
        103: [function (t, e, n) {
            function r(t, e) {
                return (e || []).forEach(function (e) {
                    var n = d[e.type](t, e), r = Function("args", "db", "signals", "predicates", n.code);
                    r.root = function () {
                        return t.scene().items[0]
                    }, r.nullScale = f, r.isFunction = c.isFunction, r.signals = n.signals, r.data = n.data, t.predicate(e.name, r)
                }), e
            }

            function i(t, e) {
                var n = c.field(t), r = "signals[" + n.map(c.str).join("][") + "]";
                return e[n[0]] = 1, r
            }

            function a(t, e) {
                function n(t) {
                    s[t] = 1
                }

                function r(t) {
                    u[t] = 1
                }

                var a = [], o = [], s = {}, u = {};
                return c.array(e).forEach(function (e, u) {
                    var l = "o" + u, d = "";
                    if (void 0 !== e.value)d = c.str(e.value); else if (e.arg)d = "args[" + c.str(e.arg) + "]"; else if (e.signal)d = i(e.signal, s); else if (e.predicate) {
                        var f = e.predicate, h = f && (f.name || f), p = t.predicate(h), g = "predicates[" + c.str(h) + "]";
                        p.signals.forEach(n), p.data.forEach(r), c.isObject(f) && c.keys(f).forEach(function (t) {
                            if ("name" !== t) {
                                var e = f[t];
                                d += "args[" + c.str(t) + "] = ", e.signal ? d += i(e.signal, s) : e.arg && (d += "args[" + c.str(e.arg) + "]"), d += ", "
                            }
                        }), d += g + ".call(" + g + ", args, db, signals, predicates)"
                    }
                    a.push(l), o.push(l + "=(" + d + ")")
                }), {code: "var " + a.join(", ") + ";\n" + o.join(";\n") + ";\n", signals: c.keys(s), data: c.keys(u)}
            }

            function o(t, e) {
                var n = a(t, e.operands);
                return "=" === e.type && (e.type = "=="), n.code += "o0 = o0 instanceof Date ? o0.getTime() : o0;\no1 = o1 instanceof Date ? o1.getTime() : o1;\n", {
                    code: n.code + "return " + ["o0", "o1"].join(e.type) + ";",
                    signals: n.signals,
                    data: n.data
                }
            }

            function s(t, e) {
                for (var n = a(t, e.operands), r = [], i = 0, o = e.operands.length; r.push("o" + i++) < o;);
                return "and" === e.type ? e.type = "&&" : "or" === e.type && (e.type = "||"), {
                    code: n.code + "return " + r.join(e.type) + ";",
                    signals: n.signals,
                    data: n.data
                }
            }

            function u(t, e) {
                var n = [e.item], r = "";
                e.range && n.push.apply(n, e.range), e.scale && (r = l(e.scale, n));
                var i = a(t, n);
                if (r = i.code + r + "\n  var ordSet = null;\n", e.data) {
                    var o = c.field(e.field).map(c.str);
                    r += "var where = function(d) { return d[" + o.join("][") + "] == o0 };\n", r += "return db[" + c.str(e.data) + "].filter(where).length > 0;"
                } else e.range && (e.scale && (r += "if (scale.length == 2) {\n  ordSet = scale(o1, o2);\n} else {\n  o1 = scale(o1);\no2 = scale(o2);\n}"), r += "return ordSet !== null ? ordSet.indexOf(o0) !== -1 :\n  o1 < o2 ? o1 <= o0 && o0 <= o2 : o2 <= o0 && o0 <= o1;");
                return {code: r, signals: i.signals, data: i.data.concat(e.data ? [e.data] : [])}
            }

            function l(t, e) {
                var n = "var scale = ", r = e.length;
                return c.isString(t) ? (e.push({value: t}), n += "this.root().scale(o" + r + ")") : t.arg ? (e.push(t), n += "o" + r) : t.name && (e.push(c.isString(t.name) ? {value: t.name} : t.name), n += "(this.isFunction(o" + r + ") ? o" + r + " : ", t.scope ? (e.push(t.scope), n += "((o" + (r + 1) + ".scale || this.root().scale)(o" + r + ") || this.nullScale)") : n += "this.root().scale(o" + r + ")", n += ")"), t.invert === !0 && (n += ".invert"), n + ";\n"
            }

            var c = t("datalib"), d = {
                "=": o,
                "==": o,
                "!=": o,
                ">": o,
                ">=": o,
                "<": o,
                "<=": o,
                and: s,
                "&&": s,
                or: s,
                "||": s,
                in: u
            }, f = function () {
                return 0
            };
            f.invert = f, e.exports = r
        }, {datalib: 26}],
        104: [function (t, e, n) {
            (function (n) {
                function r(t, e, n) {
                    function r(t) {
                        if (null != v[t]) {
                            var e, n, r = h.array(v[t]);
                            for (e = 0, n = r.length; e < n; ++e)k[t][r[e]] = 1
                        }
                    }

                    function i(t) {
                        var e = (t.parent ? "parent_" : "group_") + t.level;
                        k._nRefs[e] = t
                    }

                    var l, c, d, v, y = t.config(), _ = "", b = h.keys(n), x = [], w = {}, k = {
                        signals: {},
                        scales: {},
                        data: {},
                        fields: {},
                        nested: [],
                        _nRefs: {},
                        reflow: !1
                    };
                    for (_ += "var o = trans ? {} : item, d=0, exprs=this.exprs, set=this.tpl.set, tmpl=signals||{}, t;\ntmpl.datum  = item.datum;\ntmpl.group  = group;\ntmpl.parent = group.datum;\n", o(t, y, n), l = 0, c = b.length; l < c; ++l)v = n[d = b[l]], _ += l > 0 ? "\n  " : "  ", v.rule ? (v = s(t, d, v.rule, x), _ += "\n  " + v.code) : h.isArray(v) ? (v = s(t, d, v, x), _ += "\n  " + v.code) : (v = u(y, d, v), _ += "d += set(o, " + h.str(d) + ", " + v.val + ");"), w[d] = !0, m.forEach(r), k.reflow = k.reflow || v.reflow, v.nested.length && v.nested.forEach(i);
                    h.keys(k._nRefs).forEach(function (t) {
                        k.nested.push(k._nRefs[t])
                    }), k.nested.sort(function (t, e) {
                        return t = t.level, e = e.level, t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
                    }), w.x2 && (w.x ? (_ += "\n  if (o.x > o.x2) { \n    t = o.x;\n    d += set(o, 'x', o.x2);\n    d += set(o, 'x2', t); \n  };", _ += "\n  d += set(o, 'width', (o.x2 - o.x));") : _ += w.width ? "\n  d += set(o, 'x', (o.x2 - o.width));" : "\n  d += set(o, 'x', o.x2);"), w.xc && (_ += w.width ? "\n  d += set(o, 'x', (o.xc - o.width/2));" : "\n  d += set(o, 'x', o.xc);"), w.y2 && (w.y ? (_ += "\n  if (o.y > o.y2) { \n    t = o.y;\n    d += set(o, 'y', o.y2);\n    d += set(o, 'y2', t);\n  };", _ += "\n  d += set(o, 'height', (o.y2 - o.y));") : _ += w.height ? "\n  d += set(o, 'y', (o.y2 - o.height));" : "\n  d += set(o, 'y', o.y2);"), w.yc && (_ += w.height ? "\n  d += set(o, 'y', (o.yc - o.height/2));" : "\n  d += set(o, 'y', o.yc);"), a(e, w) && (_ += "\n  d += (item.touch(), 1);"), _ += "\n  if (trans) trans.interpolate(item, o);", _ += "\n  return d > 0;";
                    try {
                        var M = Function("item", "group", "trans", "db", "signals", "predicates", _);
                        return M.tpl = g, M.exprs = x, M.util = h, M.d3 = f, h.extend(M, h.template.context), {
                            encode: M,
                            signals: h.keys(k.signals),
                            scales: h.keys(k.scales),
                            data: h.keys(k.data),
                            fields: h.keys(k.fields),
                            nested: k.nested,
                            reflow: k.reflow
                        }
                    } catch (t) {
                        p.error(t), p.log(_)
                    }
                }

                function i(t, e) {
                    return h.isObject(t) || (t = {reflow: !1, nested: []}, m.forEach(function (e) {
                        t[e] = []
                    })), h.isObject(e) && (t.reflow = t.reflow || e.reflow, t.nested.push.apply(t.nested, e.nested), m.forEach(function (n) {
                        t[n].push.apply(t[n], e[n])
                    })), t
                }

                function a(t, e) {
                    return e.path || ("area" === t || "line" === t) && (e.x || e.x2 || e.width || e.y || e.y2 || e.height || e.tension || e.interpolate)
                }

                function o(t, e, n) {
                    var r, i, a = n.shape, o = 0;
                    if (a && (r = a.value)) {
                        for (e.shape && e.shape[r] && (r = e.shape[r]), a = ""; null !== (i = v.exec(r));)a += r.substring(o, i.index), a += t.expr(i[1]).fn(), o = v.lastIndex;
                        n.shape.value = a + r.substring(o)
                    }
                }

                function s(t, e, n, r) {
                    var a = t.config(), o = i(), s = [], l = "";
                    return (n || []).forEach(function (c, d) {
                        var f = u(a, e, c);
                        if (i(o, f), c.test) {
                            var p = t.expr(c.test);
                            o.signals.push.apply(o.signals, p.globals), o.data.push.apply(o.data, p.dataSources), l += "if (exprs[" + r.length + "](item.datum, item.mark.group.datum, null)) {\n    d += set(o, " + h.str(e) + ", " + f.val + ");", l += n[d + 1] ? "\n  } else " : "  }", r.push(p.fn)
                        } else {
                            var g = c.predicate, m = g && (g.name || g), v = t.predicate(m), y = "predicates[" + h.str(m) + "]", _ = [], b = e + "_arg" + d;
                            h.isObject(g) && h.keys(g).forEach(function (t) {
                                if ("name" !== t) {
                                    var e = u(a, d, g[t], !0);
                                    _.push(h.str(t) + ": " + e.val), i(o, e)
                                }
                            }), m ? (o.signals.push.apply(o.signals, v.signals), o.data.push.apply(o.data, v.data), s.push(b + " = {\n    " + _.join(",\n    ") + "\n  }"), l += "if (" + y + ".call(" + y + "," + b + ", db, signals, predicates)) {\n    d += set(o, " + h.str(e) + ", " + f.val + ");", l += n[d + 1] ? "\n  } else " : "  }") : l += "{\n    d += set(o, " + h.str(e) + ", " + f.val + ");\n  }\n"
                        }
                    }), s.length && (l = "var " + s.join(",\n      ") + ";\n  " + l), o.code = l, o
                }

                function u(t, e, n, r) {
                    if (null == n)return null;
                    if ("fill" === e || "stroke" === e) {
                        if (n.c)return l(t, "hcl", n.h, n.c, n.l);
                        if (n.h || n.s)return l(t, "hsl", n.h, n.s, n.l);
                        if (n.l || n.a)return l(t, "lab", n.l, n.a, n.b);
                        if (n.r || n.g || n.b)return l(t, "rgb", n.r, n.g, n.b)
                    }
                    var a = null, o = null, s = i(), u = null, f = null, p = null, g = {};
                    return void 0 !== n.template && (a = h.template.source(n.template, "tmpl", g), h.keys(g).forEach(function (t) {
                        var e = h.field(t), n = e.shift();
                        "parent" === n || "group" === n ? s.nested.push({
                            parent: "parent" === n,
                            group: "group" === n,
                            level: 1
                        }) : "datum" === n ? s.fields.push(e[0]) : s.signals.push(n)
                    })), void 0 !== n.value && (a = h.str(n.value)), void 0 !== n.signal && (u = h.field(n.signal), a = "signals[" + u.map(h.str).join("][") + "]", s.signals.push(u.shift())), void 0 !== n.field && (n.field = h.isString(n.field) ? {datum: n.field} : n.field, f = c(n.field), a = f.val, i(s, f)), void 0 !== n.scale && (p = d(n.scale), o = p.val, i(s, p), s.scales.push(n.scale.name || n.scale), null !== a || n.band || n.mult || n.offset || !r ? a = o + (n.band ? ".rangeBand()" : "(" + (null !== a ? a : "item.datum.data") + ")") : r && (a = o)), a = "(" + (n.mult ? h.number(n.mult) + " * " : "") + a + ")" + (n.offset ? " + " + h.number(n.offset) : ""), s.val = a, s
                }

                function l(t, e, n, r, a) {
                    var o = n ? u(t, "", n) : t.color[e][0], s = r ? u(t, "", r) : t.color[e][1], l = a ? u(t, "", a) : t.color[e][2], c = i();
                    [o, s, l].forEach(function (t) {
                        h.isArray || i(c, t)
                    });
                    var d = "(this.d3." + e + "(" + [o.val, s.val, l.val].join(",") + ') + "")';
                    return c.val = d, c
                }

                function c(t) {
                    if (h.isString(t))return {val: h.field(t).map(h.str).join("][")};
                    var e = t.level || 1, n = (t.group || t.parent) && e, r = n ? Array(e).join("group.mark.") : "", a = c(t.datum || t.group || t.parent || t.signal), o = a.val, s = i(null, a);
                    return t.datum ? (o = "item.datum[" + o + "]", s.fields.push(t.datum)) : t.group ? (o = r + "group[" + o + "]", s.nested.push({
                        level: e,
                        group: !0
                    })) : t.parent ? (o = r + "group.datum[" + o + "]", s.nested.push({
                        level: e,
                        parent: !0
                    })) : t.signal && (o = "signals[" + o + "]", s.signals.push(h.field(t.signal)[0]), s.reflow = !0), s.val = o, s
                }

                function d(t) {
                    var e = null, n = null, r = i();
                    return e = h.isString(t) ? h.str(t) : t.name ? h.isString(t.name) ? h.str(t.name) : (n = c(t.name)).val : (n = c(t)).val, e = "(item.mark._scaleRefs[" + e + "] = 1, group.scale(" + e + "))", t.invert && (e += ".invert"), n && n.nested.forEach(function (t) {
                        t.scale = !0
                    }), n ? (n.val = e, n) : (r.val = e, r)
                }

                var f = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, h = t("datalib"), p = t("vega-logging"), g = t("vega-dataflow").Tuple, m = ["signals", "scales", "data", "fields"], v = /{{(.*?)}}/g;
                e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        105: [function (t, e, n) {
            function r(t, e) {
                return (e || []).forEach(function (e) {
                    if (u.indexOf(e.name) !== -1)throw Error('Signal name "' + e.name + '" is a reserved keyword (' + u.join(", ") + ").");
                    var n = t.signal(e.name, e.init).verbose(e.verbose);
                    e.init && e.init.expr && (e.init.expr = t.expr(e.init.expr), n.value(i(t, e.init))), e.expr && (e.expr = t.expr(e.expr), n.evaluate = function (r) {
                        var a = i(t, e), o = r.signals;
                        return (a !== n.value() || n.verbose()) && (n.value(a), o[e.name] = 1), o[e.name] ? r : t.doNotPropagate
                    }, n.dependency(s, e.expr.globals), e.expr.globals.forEach(function (e) {
                        t.signal(e).addListener(n)
                    }))
                }), e
            }

            function i(t, e) {
                var n = e.expr, i = n.fn();
                return e.scale ? r.scale(t, e, i) : i
            }

            var a = t("datalib"), o = t("./expr"), s = t("vega-dataflow").Dependencies.SIGNALS, u = ["datum", "event", "signals", "width", "height", "padding"].concat(a.keys(o.codegen.functions));
            r.scale = function (t, e, n, r, i) {
                var s, u = e.scale, l = u.name || u.signal || u, c = u.scope;
                return c && (c.signal ? c = t.signalRef(c.signal) : a.isString(c) && (s = u._expr = u._expr || t.expr(c), c = s.fn(r, i))), o.scale(t, u.invert, l, n, c)
            }, e.exports = r
        }, {"./expr": 96, datalib: 26, "vega-dataflow": 41}],
        106: [function (t, e, n) {
            function r(e) {
                function n(e) {
                    try {
                        e = i.duplicate(e);
                        var n = t("./"), a = o(e, c, "width", 500), s = o(e, c, "height", 500), u = n.padding(o(e, c, "padding")), d = o(e, c, "background");
                        p.signal("width", a), p.signal("height", s), p.signal("padding", u), r(e), p.defs({
                            width: a,
                            height: s,
                            padding: u,
                            viewport: e.viewport || null,
                            background: n.background(d),
                            signals: n.signals(p, e.signals),
                            predicates: n.predicates(p, e.predicates),
                            marks: n.marks(p, e, a, s),
                            data: n.data(p, e.data, l)
                        })
                    } catch (t) {
                        l(t)
                    }
                }

                function r(t) {
                    var e, n = t.signals || (t.signals = []);
                    n.some(function (t) {
                        return "cursor" === t.name && (e = t, !0)
                    }), e || n.push(e = {
                        name: "cursor",
                        streams: []
                    }), e.init = e.init || {}, e.streams.unshift({
                        type: "mousemove",
                        expr: "eventItem().cursor === cursor.default ? cursor : {default: eventItem().cursor}"
                    })
                }

                function l(t) {
                    var e;
                    t ? a.error(t) : e = g(p.buildIndexes()), h && (h.length > 1 ? h(t, e) : t || h(e), h = null)
                }

                var c, d = arguments.length, f = 2, h = arguments[d - 1], p = new s, g = u.factory;
                if (d > f && i.isFunction(arguments[d - f]) && (g = arguments[d - f], ++f), d > f && i.isObject(arguments[d - f]) && p.config(arguments[d - f]), c = p.config(), i.isObject(e))n(e); else if (i.isString(e)) {
                    var m = i.extend({url: e}, c.load);
                    i.json(m, function (t, e) {
                        t ? l("SPECIFICATION LOAD FAILED: " + t) : n(e)
                    })
                } else l("INVALID SPECIFICATION: Must be a valid JSON object or URL.")
            }

            var i = t("datalib"), a = t("vega-logging"), o = t("../util/theme-val"), s = t("../core/Model"), u = t("../core/View");
            e.exports = r
        }, {
            "../core/Model": 89,
            "../core/View": 90,
            "../util/theme-val": 149,
            "./": 97,
            datalib: 26,
            "vega-logging": 48
        }],
        107: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    function e(e, n) {
                        var r, a, o, s = i.mouse((i.event = e, t.renderer().scene())), u = t.padding(), l = {};
                        if (n)for (r = n.mark, a = "group" === r.marktype ? n : r.group, o = n; null != o; o = o.mark.group)o.mark.def.name && (l[o.mark.def.name] = o);
                        l.root = t.model().scene().items[0], e.vg = Object.create(d), e.vg.group = a, e.vg.item = n || {}, e.vg.name = l, e.vg.x = s[0] - u.left, e.vg.y = s[1] - u.top
                    }

                    function n(t, e, n, r, i) {
                        function a(t) {
                            return !t.fn(n, r, i)
                        }

                        var s, l, c, d, f = t.handlers[e], h = t.nodes[e], p = o.ChangeSet.create(null, !0), m = !1;
                        for (l = 0, c = f.length; l < c; ++l)d = f[l], m = d.filters.some(a), m || (s = d.exp.fn(n, r, i), d.spec.scale && (s = u.scale(g, d.spec, s, n, i)), (s !== d.signal.value() || d.signal.verbose()) && (d.signal.value(s), p.signals[d.signal.name()] = 1));
                        g.propagate(p, h)
                    }

                    function r(t, e, n, i) {
                        e.forEach(function (e) {
                            e.event ? f(t, e, n, i) : e.signal ? h(t, e, n, i) : e.start ? p(t, e, n, i) : e.stream && (e.filters && e.stream.forEach(function (t) {
                                t.filters = a.array(t.filters).concat(e.filters)
                            }), r(t, e.stream, n, i))
                        })
                    }

                    function f(t, e, n, r) {
                        var i = e.event, s = e.name, u = e.mark, l = e.target, c = a.array(e.filters), d = l ? x : b, f = l ? l + ":" + i : i, h = d.nodes[f] || (d.nodes[f] = new o.Node(g)), p = d.handlers[f] || (d.handlers[f] = []);
                        s ? c.push('!!event.vg.name["' + s + '"]') : u && c.push("event.vg.item.mark && event.vg.item.mark.marktype===" + a.str(u)), p.push({
                            signal: t,
                            exp: n,
                            spec: r,
                            filters: c.map(function (t) {
                                return g.expr(t)
                            })
                        }), h.addListener(t)
                    }

                    function h(t, e, n, r) {
                        var i = t.name(), a = g.signal(i + c, null);
                        a.evaluate = function (a) {
                            if (!a.signals[e.signal])return g.doNotPropagate;
                            var o = n.fn();
                            return r.scale && (o = u.scale(g, r, o)), (o !== t.value() || t.verbose()) && (t.value(o), a.signals[i] = 1, a.reflow = !0), a
                        }, a.dependency(o.Dependencies.SIGNALS, e.signal), a.addListener(t), g.signal(e.signal).addListener(a)
                    }

                    function p(t, e, n, i) {
                        var a = t.name(), o = a + l, s = e.middle, u = s.filters || (s.filters = []), c = g.signal(o) || g.signal(o, !1);
                        r(c, [e.start], m, {}), r(c, [e.end], v, {}), u.push(c.name()), r(t, [e.middle], n, i)
                    }

                    var g = t.model(), m = g.expr("true"), v = g.expr("false"), y = g.defs().signals, _ = {
                        handlers: {},
                        nodes: {}
                    }, b = a.duplicate(_), x = a.duplicate(_);
                    return a.array(y).forEach(function (t) {
                        var e = g.signal(t.name);
                        t.expr || a.array(t.streams).forEach(function (t) {
                            var n = s.parse(t.type), i = g.expr(t.expr);
                            r(e, n, i, t)
                        })
                    }), a.keys(b.handlers).forEach(function (r) {
                        t.on(r, function (t, i) {
                            t.preventDefault(), e(t, i), n(b, r, i && i.datum || {}, i && i.mark && i.mark.group && i.mark.group.datum || {}, t)
                        })
                    }), a.keys(x.handlers).forEach(function (t) {
                        function r(r) {
                            e(r), n(x, t, i.select(this).datum(), this.parentNode && i.select(this.parentNode).datum(), r)
                        }

                        if ("undefined" != typeof window) {
                            for (var a = x.handlers[t], o = t.split(":"), s = "window" === o[0] ? [window] : window.document.querySelectorAll(o[0]), u = 0; u < s.length; ++u)s[u].addEventListener(o[1], r);
                            a.elements = s, a.listener = r
                        }
                    }), x.detach = function () {
                        a.keys(x.handlers).forEach(function (t) {
                            for (var e = x.handlers[t], n = t.split(":"), r = a.array(e.elements), i = 0; i < r.length; ++i)r[i].removeEventListener(n[1], e.listener)
                        })
                    }, x.detach
                }

                var i = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, a = t("datalib"), o = t("vega-dataflow"), s = t("vega-event-selector"), u = t("./signals"), l = "_vgGATEKEEPER", c = "_vgEVALUATOR", d = {
                    getItem: function () {
                        return this.item
                    }, getGroup: function (t) {
                        var e = t ? this.name[t] : this.group, n = e && e.mark, r = n && (n.interactive || void 0 === n.interactive);
                        return r ? e : {}
                    }, getXY: function (t) {
                        var e = {x: this.x, y: this.y};
                        for ("string" == typeof t && (t = this.name[t]); t; t = t.mark && t.mark.group)e.x -= t.x || 0, e.y -= t.y || 0;
                        return e
                    }, getX: function (t) {
                        return this.getXY(t).x
                    }, getY: function (t) {
                        return this.getXY(t).y
                    }
                };
                e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"./signals": 105, datalib: 26, "vega-dataflow": 41, "vega-event-selector": 42}],
        108: [function (t, e, n) {
            function r(t, e) {
                var n, r = a[e.type];
                if (!r)throw new Error('"' + e.type + '" is not a valid transformation');
                return n = new r(t), e.output && n.output(e.output), i.keys(e).forEach(function (t) {
                    "type" !== t && "output" !== t && n.param(t, e[t])
                }), n
            }

            var i = t("datalib"), a = t("../transforms/index");
            e.exports = r
        }, {"../transforms/index": 145, datalib: 26}],
        109: [function (t, e, n) {
            function r(t, e) {
                return this._mark = e, s.prototype.init.call(this, t).router(!0).reflows(!0).mutates(!0)
            }

            var i = t("datalib"), a = t("vega-dataflow"), o = t("vega-scenegraph"), s = a.Node, u = t("vega-logging"), l = o.bound, c = o.Bounds, d = t("./Encoder"), f = r.prototype = new s;
            f.evaluate = function (t) {
                u.debug(t, ["bounds", this._mark.marktype]);
                var e, n, r, o, s, f, h = this._mark, p = h.marktype, g = "group" === p, m = h.items, v = i.array(h.def.legends).length > 0, y = h.bounds, _ = !y || t.rem.length;
                if ("line" === p || "area" === p)l.mark(h, null, g && !v); else if (t.add.forEach(function (t) {
                        l.item(t), _ = _ || y && !y.encloses(t.bounds)
                    }), t.mod.forEach(function (t) {
                        _ = _ || y && y.alignsWith(t.bounds), l.item(t)
                    }), _)for (y = h.bounds && h.bounds.clear() || (h.bounds = new c), e = 0, n = m.length; e < n; ++e)y.union(m[e].bounds);
                if (g && v) {
                    for (e = 0, n = m.length; e < n; ++e)for (s = m[e], s._legendPositions = null, r = 0, o = s.legendItems.length; r < o; ++r)f = s.legendItems[r], d.update(this._graph, t.trans, "legendPosition", f.items, t.dirty), l.mark(f, null, !1);
                    l.mark(h, null, !0)
                }
                return a.ChangeSet.create(t, !0)
            }, e.exports = r;
        }, {"./Encoder": 111, datalib: 26, "vega-dataflow": 41, "vega-logging": 48, "vega-scenegraph": 49}],
        110: [function (t, e, n) {
            function r() {
                return arguments.length ? this.init.apply(this, arguments) : this
            }

            function i() {
                var t, e, n, r, i, a, o, s = this._def.from, u = s.mark;
                if (u)r = this.sibling(u), t = r._isSuper ? r : r._bounder, e = ["vg", this._parent_id, u, t.listeners(!0).length].join("_"), n = {
                    name: e,
                    transform: s.transform,
                    modify: s.modify
                }; else {
                    if (t = this._graph.data(this._from), !t)throw Error('Data source "' + this._from + '" is not defined.');
                    e = ["vg", this._from, this._def.type, t.listeners(!0).length].join("_"), n = {
                        name: e,
                        source: this._from,
                        transform: s.transform,
                        modify: s.modify
                    }
                }
                this._from = e, this._ds = _.datasource(this._graph, n), u ? (o = new f(this._graph).addListener(this._ds.listener()), o.evaluate = function (t) {
                    var e = g.create(t), n = r._output;
                    return e.add = n.add, e.mod = n.mod, e.rem = n.rem, e
                }, t.addListener(o)) : (i = this._ds.source().last(), a = g.create(i), a.add = i.add, a.mod = i.mod, a.rem = i.rem, a.stamp = null, this._graph.propagate(a, this._ds.listener(), i.stamp))
            }

            function a() {
                var t = p.ingest(new c(this._mark));
                return this._def.width && p.set(t, "width", this._def.width), this._def.height && p.set(t, "height", this._def.height), t
            }

            function o(t, e, n, r, i) {
                var o, u, l, c, d, f, h, g = s(this._def.key || (r ? "_id" : null)), m = this._mark.items || [], v = r ? t.rem : m, y = p.idMap(!r || i ? n : t.mod), _ = [];
                for (o = 0, l = v.length; o < l; ++o)c = v[o] === m[o] ? m[o] : g ? this._map[g(v[o])] : v[o], c.status = b.EXIT;
                for (o = 0, l = n.length; o < l; ++o)d = n[o], c = g ? this._map[u = g(d)] : m[o], f = !c && (c = a.call(this), !0), c.status = f ? b.ENTER : b.UPDATE, h = !f && c.datum !== d, c.datum = d, g && (p.set(c, "key", u), this._map[u] = c), f ? e.add.push(c) : (h || y[d._id]) && e.mod.push(c), _.push(c);
                for (o = 0, l = v.length; o < l; ++o)c = v[o] === m[o] ? m[o] : g ? this._map[u = g(v[o])] : v[o], c.status === b.EXIT && (c._dirty = !0, t.dirty.push(c), _.push(c), e.rem.push(c), g && (this._map[u] = null));
                return this._mark.items = _, e
            }

            function s(t) {
                if (null == t)return null;
                var e = u.array(t).map(u.accessor);
                return function (t) {
                    for (var n = "", r = 0, i = e.length; r < i; ++r)r > 0 && (n += "|"), n += String(e[r](t));
                    return n
                }
            }

            var u = t("datalib"), l = t("vega-logging"), c = t("vega-scenegraph").Item, d = t("vega-dataflow"), f = d.Node, h = d.Dependencies, p = d.Tuple, g = d.ChangeSet, m = {}, v = t("./Encoder"), y = t("./Bounder"), _ = t("../parse/data"), b = r.STATUS = {
                ENTER: "enter",
                UPDATE: "update",
                EXIT: "exit"
            }, x = 1, w = 2, k = r.prototype = new f;
            k.init = function (t, e, n, r, a, o) {
                return f.prototype.init.call(this, t).router(!0).collector(!0), this._def = e, this._mark = n, this._from = (e.from ? e.from.data : null) || o, this._ds = u.isString(this._from) ? t.data(this._from) : null, this._map = {}, this._status = null, n.def = e, n.marktype = e.type, n.interactive = e.interactive !== !1, n.items = [], u.isValid(e.name) && (n.name = e.name), this._parent = r, this._parent_id = a, e.from && (e.from.mark || e.from.transform || e.from.modify) && i.call(this), this._isSuper = "group" !== this._def.type, this._encoder = new v(this._graph, this._mark, this), this._bounder = new y(this._graph, this._mark), this._output = null, this._ds && this._encoder.dependency(h.DATA, this._from), this.dependency(h.DATA, this._encoder.dependency(h.DATA)), this.dependency(h.SCALES, this._encoder.dependency(h.SCALES)), this.dependency(h.SIGNALS, this._encoder.dependency(h.SIGNALS)), this
            }, k.ds = function () {
                return this._ds
            }, k.parent = function () {
                return this._parent
            }, k.encoder = function () {
                return this._encoder
            }, k.pipeline = function () {
                return [this]
            }, k.connect = function () {
                var t = this;
                return this._graph.connect(this.pipeline()), this._encoder._scales.forEach(function (e) {
                    (e = t._parent.scale(e)) && e.addListener(t)
                }), this._parent && (this._isSuper ? this.addListener(this._parent._collector) : this._bounder.addListener(this._parent._collector)), this._status = x, this
            }, k.disconnect = function () {
                function t(t) {
                    for (var n, r = 0, i = t.length; r < i; ++r)(n = e._parent.scale(t[r])) && n.removeListener(e)
                }

                var e = this;
                return this._listeners.length ? (f.prototype.disconnect.call(this), this._graph.disconnect(this.pipeline()), t(this._encoder._scales), t(u.keys(this._mark._scaleRefs)), this._status = w, this) : this
            }, k.sibling = function (t) {
                return this._parent.child(t, this._parent_id)
            }, k.evaluate = function (t) {
                l.debug(t, ["building", this._from || this._def.from, this._def.type]);
                var e, n, r, i, a = this, s = this._mark.def, c = s.properties || {}, d = c.update || {}, f = g.create(t);
                if (this._ds) {
                    if (r = f.data[i = this._ds.name()], f.data[i] = null, e = this._encoder.reevaluate(f), f.data[i] = r, n = this._ds.last(), !n)throw Error("Builder evaluated before backing DataSource.");
                    n.stamp > this._stamp ? o.call(this, n, f, this._ds.values(), !0, e) : e && (f.mod = this._mark.items.slice())
                } else r = u.isFunction(this._def.from) ? this._def.from() : [m], o.call(this, t, f, r);
                return this._output = f = this._graph.evaluate(f, this._encoder), d.nested && d.nested.length && this._status === x && u.keys(this._mark._scaleRefs).forEach(function (t) {
                    var e = a._parent.scale(t);
                    e && (e.addListener(a), a.dependency(h.SCALES, t), a._encoder.dependency(h.SCALES, t))
                }), this._isSuper && (f.mod = f.mod.filter(function (t) {
                    return t._dirty
                }), f = this._graph.evaluate(f, this._bounder)), f
            }, e.exports = r
        }, {
            "../parse/data": 95,
            "./Bounder": 109,
            "./Encoder": 111,
            datalib: 26,
            "vega-dataflow": 41,
            "vega-logging": 48,
            "vega-scenegraph": 49
        }],
        111: [function (t, e, n) {
            function r(t, e, n) {
                var r = e.def.properties || {}, i = r.enter, a = r.update, o = r.exit;
                c.prototype.init.call(this, t), this._mark = e, this._builder = n;
                var s = this._scales = [];
                return i && s.push.apply(s, i.scales), a && (this.dependency(d.DATA, a.data), this.dependency(d.SIGNALS, a.signals), this.dependency(d.FIELDS, a.fields), this.dependency(d.SCALES, a.scales), s.push.apply(s, a.scales)), o && s.push.apply(s, o.scales), this.mutates(!0)
            }

            function i(t, e, n, r) {
                var i, a, o, s = n.add.length;
                return (i = r.enter) && (a = i[t]).length && s && (o = e.values(t, a, o = o || {})), (i = r.exit) && (a = i[t]).length && n.rem.length && (o = e.values(t, a, o = o || {})), (i = r.update) && (a = i[t]).length && (s || n.mod.length) && (o = e.values(t, a, o = o || {})), o || h
            }

            function a(t, e, n, r, i, a, o) {
                var s = t.encode, u = e._dirty, l = s.call(s, e, e.mark.group || e, n, r, i, a);
                e._dirty = l || u, l && !u && o.push(e)
            }

            function o() {
                for (var t, e, n, r = this._mark.def.properties.update.nested, i = this._builder, a = 0, o = 0, s = r.length; o < s; ++o)if (t = r[o], !t.scale) {
                    for (; a < t.level; ++a)i = i.parent(), e = i.ds();
                    if (n = (t.group ? i.encoder() : e.last())._stamp, n > this._stamp)return !0
                }
                return !1
            }

            var s = t("datalib"), u = t("vega-logging"), l = t("vega-dataflow"), c = l.Node, d = l.Dependencies, f = t("vega-scenegraph").bound, h = {}, p = r.prototype = new c;
            p.evaluate = function (e) {
                u.debug(e, ["encoding", this._mark.def.type]);
                var n, r, o, s, l = this._graph, c = this._mark.def.properties || {}, f = this._mark.items, p = c.enter, g = c.update, m = c.exit, v = e.dirty, y = l.predicates(), _ = e.request, b = this._mark.group, x = b && (b.mark.axis || b.mark.legend), w = h, k = h;
                if (_ && !x) {
                    if ((s = c[_]) && e.mod.length)for (w = s.data ? l.values(d.DATA, s.data) : null, k = s.signals ? l.values(d.SIGNALS, s.signals) : null, n = 0, r = e.mod.length; n < r; ++n)o = e.mod[n], a.call(this, s, o, e.trans, w, k, y, v);
                    return e
                }
                for (w = i(d.DATA, l, e, c), k = i(d.SIGNALS, l, e, c), n = 0, r = e.rem.length; n < r; ++n)o = e.rem[n], m && a.call(this, m, o, e.trans, w, k, y, v), e.trans && !m ? e.trans.interpolate(o, h) : e.trans || f.pop();
                var M = t("./Builder").STATUS.UPDATE;
                for (n = 0, r = e.add.length; n < r; ++n)o = e.add[n], p && a.call(this, p, o, e.trans, w, k, y, v), g && a.call(this, g, o, e.trans, w, k, y, v), o.status = M;
                if (g)for (n = 0, r = e.mod.length; n < r; ++n)o = e.mod[n], a.call(this, g, o, e.trans, w, k, y, v);
                return e
            }, p.reevaluate = function (t) {
                var e = this._mark.def, n = e.properties || {}, r = s.isFunction(e.from) || e.orient || t.request || c.prototype.reevaluate.call(this, t);
                return r || !!n.update && o.call(this)
            }, r.update = function (t, e, n, r, i) {
                r = s.array(r);
                var o, u, l, c, h, p = t.predicates(), g = t.values(d.DATA), m = t.values(d.SIGNALS);
                for (o = 0, u = r.length; o < u; ++o)l = r[o], c = l.mark.def.properties, h = c && c[n], h && (a.call(null, h, l, e, g, m, p, i), f.item(l))
            }, e.exports = r
        }, {"./Builder": 110, datalib: 26, "vega-dataflow": 41, "vega-logging": 48, "vega-scenegraph": 49}],
        112: [function (t, e, n) {
            function r() {
                return this._children = {}, this._scaler = null, this._recursor = null, this._scales = {}, this.scale = a.bind(this), arguments.length ? this.init.apply(this, arguments) : this
            }

            function i(t) {
                function e(t) {
                    t.type != x.MARK || t.inline || void 0 === m._graph.data(t.from) || m._recursor.removeListener(t.builder)
                }

                function n(e) {
                    var n = e.scale();
                    t.scales[n.scaleName] && e.reset().def()
                }

                function r(e) {
                    var n = e.size() || e.shape() || e.fill() || e.stroke() || e.opacity();
                    t.scales[n.scaleName] && e.reset().def()
                }

                function i(t) {
                    m._recursor.removeListener(t.builder), t.builder.disconnect()
                }

                var a, o, d, f, h, p, g, m = this, v = c.array(this._def.marks).length > 0, y = c.array(this._def.axes).length > 0, _ = c.array(this._def.legends).length > 0, b = !1;
                for (a = 0, f = t.add.length; a < f; ++a)h = t.add[a], v && s.call(this, t, h), y && u.call(this, t, h), _ && l.call(this, t, h);
                for (a = t.add.length - 1; a >= 0; --a)for (h = t.add[a], o = this._children[h._id].length - 1; o >= 0; --o)d = this._children[h._id][o], d.builder.connect(), p = d.builder.pipeline(), g = d.builder._def, b = g.type !== x.GROUP, b = b && void 0 !== this._graph.data(d.from), b = b && 1 === p[p.length - 1].listeners().length, b = b && g.from && !g.from.mark, d.inline = b, b ? this._graph.evaluate(t, d.builder) : this._recursor.addListener(d.builder);
                for (a = 0, f = t.mod.length; a < f; ++a)h = t.mod[a], v && m._children[h._id].forEach(e), y && h.axes.forEach(n), _ && h.legends.forEach(r);
                for (a = 0, f = t.rem.length; a < f; ++a)h = t.rem[a], m._children[h._id].forEach(i), delete m._children[h._id];
                return t
            }

            function a(t, e) {
                var n = this, r = null;
                if (2 === arguments.length)return n._scales[t] = e, e;
                for (; null == r && (r = n._scales[t], n = n.mark ? n.mark.group : n._parent););
                return r
            }

            function o(t, e) {
                m.debug(t, ["building group", e._id]), e._scales = e._scales || {}, e.scale = a.bind(e), e.items = e.items || [], this._children[e._id] = this._children[e._id] || [], e.axes = e.axes || [], e.axisItems = e.axisItems || [], e.legends = e.legends || [], e.legendItems = e.legendItems || [], this._graph.group(e._id, e)
            }

            function s(t, e) {
                m.debug(t, ["building children marks #" + e._id]);
                var n, i, a, o, s, u, l = this._def.marks;
                for (o = 0, s = l.length; o < s; ++o)n = l[o], i = n.from || {}, a = e.datum._facetID, e.items[o] = {
                    group: e,
                    _scaleRefs: {}
                }, u = n.type === x.GROUP ? new r : new v, u.init(this._graph, n, e.items[o], this, e._id, a), this._children[e._id].push({
                    builder: u,
                    from: i.data || (i.mark ? "vg_" + e._id + "_" + i.mark : a),
                    type: x.MARK
                })
            }

            function u(t, e) {
                var n = e.axes, i = e.axisItems, a = this;
                _(this._graph, this._def.axes, n, e), n.forEach(function (t, n) {
                    var o = a._def.axes[n].scale, s = t.def(), u = null;
                    i[n] = {
                        group: e,
                        axis: t,
                        layer: s.layer
                    }, u = s.type === x.GROUP ? new r : new v, u.init(a._graph, s, i[n], a).dependency(h.SCALES, o), a._children[e._id].push({
                        builder: u,
                        type: x.AXIS,
                        scale: o
                    })
                })
            }

            function l(t, e) {
                var n = e.legends, i = e.legendItems, a = this;
                b(this._graph, this._def.legends, n, e), n.forEach(function (t, n) {
                    var o = t.size() || t.shape() || t.fill() || t.stroke() || t.opacity(), s = t.def(), u = null;
                    i[n] = {
                        group: e,
                        legend: t
                    }, u = s.type === x.GROUP ? new r : new v, u.init(a._graph, s, i[n], a).dependency(h.SCALES, o), a._children[e._id].push({
                        builder: u,
                        type: x.LEGEND,
                        scale: o
                    })
                })
            }

            var c = t("datalib"), d = t("vega-dataflow"), f = d.Node, h = d.Dependencies, p = d.Tuple, g = d.Collector, m = t("vega-logging"), v = t("./Builder"), y = t("./Scale"), _ = t("../parse/axes"), b = t("../parse/legends"), x = r.TYPES = {
                GROUP: "group",
                MARK: "mark",
                AXIS: "axis",
                LEGEND: "legend"
            }, w = r.prototype = new v;
            w.init = function (t, e) {
                var n, r = this;
                this._scaler = new f(t), (e.scales || []).forEach(function (e) {
                    e = r.scale(n = e.name, new y(t, e, r)), r.scale(n + ":prev", e), r._scaler.addListener(e)
                }), this._recursor = new f(t), this._recursor.evaluate = i.bind(this);
                var a = (e.axes || []).reduce(function (t, e) {
                    return t[e.scale] = 1, t
                }, {});
                return a = (e.legends || []).reduce(function (t, e) {
                    return t[e.size || e.shape || e.fill || e.stroke || e.opacity] = 1, t
                }, a), this._recursor.dependency(h.SCALES, c.keys(a)), this._collector = new g(t), v.prototype.init.apply(this, arguments)
            }, w.evaluate = function () {
                var t = v.prototype.evaluate.apply(this, arguments), e = this._graph, n = this, r = this._scales, i = this._mark.items;
                if (t.mod.length < i.length) {
                    var a = c.keys(r).some(function (e) {
                        return r[e].reevaluate(t)
                    });
                    !a && this._def.axes && (a = this._def.axes.reduce(function (e, n) {
                        return e || t.scales[n.scale]
                    }, !1)), !a && this._def.legends && (a = this._def.legends.reduce(function (e, n) {
                        return e || t.scales[n.size || n.shape || n.fill || n.stroke]
                    }, !1)), a && (t.mod = t.mod.concat(p.idFilter(i, t.mod, t.add, t.rem)))
                }
                return t.add.forEach(function (e) {
                    o.call(n, t, e)
                }), t.rem.forEach(function (t) {
                    e.group(t._id, null)
                }), t
            }, w.pipeline = function () {
                return [this, this._scaler, this._recursor, this._collector, this._bounder]
            }, w.disconnect = function () {
                var t = this;
                return c.keys(t._children).forEach(function (e) {
                    t._children[e].forEach(function (e) {
                        t._recursor.removeListener(e.builder), e.builder.disconnect()
                    })
                }), t._children = {}, v.prototype.disconnect.call(this)
            }, w.child = function (t, e) {
                for (var n, r = this._children[e], i = 0, a = r.length; i < a && (n = r[i], n.type != x.MARK || n.builder._def.name != t); ++i);
                return n.builder
            }, e.exports = r
        }, {
            "../parse/axes": 93,
            "../parse/legends": 98,
            "./Builder": 110,
            "./Scale": 113,
            datalib: 26,
            "vega-dataflow": 41,
            "vega-logging": 48
        }],
        113: [function (t, e, n) {
            (function (n) {
                function r(t, e, n) {
                    return this._def = e, this._parent = n, this._updated = !1, k.prototype.init.call(this, t).reflows(!0)
                }

                function i(t) {
                    var e = this._def.name, n = e + ":prev", r = a.call(this, t.scale(e)), i = r.type === E.ORDINAL ? o : u, s = y.call(this, t);
                    return i.call(this, r, s, t), t.scale(e, r), t.scale(n, t.scale(n) || r), r
                }

                function a(t) {
                    var e = this._graph.config(), n = this._def.type || E.LINEAR;
                    if (!t || n !== t.type) {
                        var r = e.scale[n] || _.scale[n];
                        if (!r)throw Error("Unrecognized scale type: " + n);
                        (t = r()).type = t.type || n, t.scaleName = this._def.name, t._prev = {}
                    }
                    return t
                }

                function o(t, e, n) {
                    var r, i, a = this._def, o = t._prev, u = !1, l = m.call(this, a.padding) || 0, c = null == a.outerPadding ? l : m.call(this, a.outerPadding), d = a.points && m.call(this, a.points), f = m.call(this, a.round) || null == a.round, h = !0;
                    if (b.isObject(a.range) && !b.isArray(a.range) && (u = !0, e = g.call(this, A.RANGE, a.range, t, n)), r = g.call(this, A.DOMAIN, a.domain, t, n), r && !b.equal(o.domain, r) && (t.domain(r), o.domain = r, this._updated = !0), !b.equal(o.range, e)) {
                        if (a.bandSize) {
                            var p, v = m.call(this, a.bandSize), y = r.length, _ = a.points ? l * v : l * v * (y - 1) + 2 * c;
                            e[0] > e[1] ? (p = e[1] || 0, e = [p + (v * y + _), p]) : (p = e[0] || 0, e = [p, p + (v * y + _)]), a.reverse && (e = e.reverse())
                        }
                        i = "string" == typeof e[0], i || e.length > 2 || 1 === e.length || u ? (t.range(e), h = !1) : d && f ? t.rangeRoundPoints(e, l) : d ? t.rangePoints(e, l) : f ? t.rangeRoundBands(e, l, c) : t.rangeBands(e, l, c), o.range = e, this._updated = !0
                    }
                    !t.invert && h && s(t)
                }

                function s(t) {
                    t.invert = function (e, n) {
                        var r = t.range(), i = r[0] < r[1], a = i ? D : P;
                        if (1 === arguments.length) {
                            if (!b.isNumber(e))throw Error("Ordinal scale inversion is only supported for numeric input (" + e + ").");
                            return t.domain()[a(r, e)]
                        }
                        if (2 === arguments.length) {
                            if (!b.isNumber(e) || !b.isNumber(n))throw Error("Extents to ordinal invert are not numbers (" + e + ", " + n + ").");
                            var o, s = t.domain(), u = a(r, e), l = a(r, n), c = r.length - 1;
                            return l < u && (o = u, u = l, l = u), u < 0 && (u = 0), l > c && (l = c), (i ? b.range(u, l + 1) : b.range(l, u - 1, -1)).map(function (t) {
                                return s[t]
                            })
                        }
                    }
                }

                function u(t, e, n) {
                    var r, i, a = this._def, o = t._prev, s = m.call(this, a.round), u = m.call(this, a.exponent), l = m.call(this, a.clamp), c = m.call(this, a.nice);
                    r = a.type === E.QUANTILE ? g.call(this, A.DOMAIN, a.domain, t, n) : v.call(this, t, n), r && !b.equal(o.domain, r) && (t.domain(r), o.domain = r, this._updated = !0), "height" === m.call(this, a.range) && (e = e.reverse()), e && !b.equal(o.range, e) && (t[s && t.rangeRound ? "rangeRound" : "range"](e), o.range = e, this._updated = !0), u && a.type === E.POWER && t.exponent(u), l && t.clamp(!0), c && (a.type === E.TIME ? (i = _.time[c], i || w.error("Unrecognized interval: " + i), t.nice(i)) : t.nice())
                }

                function l(t) {
                    return t.type === E.ORDINAL || t.type === E.QUANTILE
                }

                function c(t) {
                    return t.fields || b.array(t)
                }

                function d(t) {
                    return t.some(function (t) {
                        return !t.data || t.data && b.array(t.field).some(function (t) {
                                return t.parent
                            })
                    })
                }

                function f(t, e) {
                    return b.array(t.field).map(function (t) {
                        return t.parent ? b.accessor(t.parent)(e.datum) : t
                    })
                }

                function h(t, e) {
                    var n = c(t);
                    return 1 == n.length && 1 == b.array(n[0].field).length ? S.TYPES.TUPLE : l(e) && b.isObject(t.sort) ? S.TYPES.MULTI : S.TYPES.VALUE
                }

                function p(t, e, n, r) {
                    var i = c(e), a = d(i), o = h(e, n), s = l(n), u = e.sort, p = "_" + t, g = f(i[0], r);
                    if (n[p] || this[p])return n[p] || this[p];
                    var m, v, y = new S(this._graph).type(o);
                    return a ? n[p] = y : this[p] = y, s ? o === S.TYPES.VALUE ? (m = [{
                        name: A.GROUPBY,
                        get: b.identity
                    }], v = {"*": A.COUNT}) : o === S.TYPES.TUPLE ? (m = [{
                        name: A.GROUPBY,
                        get: b.$(g[0])
                    }], v = b.isObject(u) ? [{
                        field: A.VALUE,
                        get: b.$(u.field),
                        ops: [u.op]
                    }] : {"*": A.COUNT}) : (m = A.GROUPBY, v = [{
                        field: A.VALUE,
                        ops: [u.op]
                    }]) : (m = [], v = [{
                        field: A.VALUE,
                        get: o == S.TYPES.TUPLE ? b.$(g[0]) : b.identity,
                        ops: [A.MIN, A.MAX],
                        as: [A.MIN, A.MAX]
                    }]), y.param("groupby", m).param("summarize", v), y._lastUpdate = -1, y
                }

                function g(t, e, n, r) {
                    function i(t) {
                        k.dependency(M.SIGNALS, t)
                    }

                    if (null == e)return [];
                    if (b.isArray(e))return e.map(m.bind(this));
                    var a, o, s, u, g, v, y, _, x, w, k = this, T = this._graph, E = c(e), L = d(E), C = h(e, n), D = p.apply(this, arguments), P = e.sort, I = l(n);
                    if (L || !L && D._lastUpdate < this._stamp) {
                        for (a = 0, o = E.length; a < o; ++a)if (g = E[a], x = g.data || r.datum._facetID, _ = T.data(x).last(), !(_.stamp <= this._stamp)) {
                            for (v = f(g, r), s = 0, u = v.length; s < u; ++s)y = v[s], C === S.TYPES.VALUE ? D.accessors(null, y) : C === S.TYPES.MULTI && D.accessors(y, g.sort || P.field), D.evaluate(_);
                            this.dependency(M.DATA, x), D.dependency(M.SIGNALS).forEach(i)
                        }
                        D._lastUpdate = this._stamp, _ = D.aggr().result(), I ? (b.isObject(P) ? (w = P.op + "_" + A.VALUE, w = b.comparator(w)) : P === !0 && (w = b.comparator(A.GROUPBY)), w && (_ = _.sort(w)), D._values = _.map(function (t) {
                            return t[A.GROUPBY]
                        })) : (_ = _[0], D._values = b.isValid(_) ? [_[A.MIN], _[A.MAX]] : [])
                    }
                    return D._values
                }

                function m(t) {
                    if (!t || !t.signal)return t;
                    var e, n = t.signal;
                    return this.dependency(M.SIGNALS, (e = b.field(n))[0]), this._graph.signalRef(e)
                }

                function v(t, e) {
                    var n, r, i = this._def, a = [null, null];
                    return void 0 !== i.domain && (a = b.isObject(i.domain) ? g.call(this, A.DOMAIN, i.domain, t, e) : a), r = a.length - 1, void 0 !== i.domainMin && (b.isObject(i.domainMin) ? i.domainMin.signal ? a[0] = b.isValid(n = m.call(this, i.domainMin)) ? n : a[0] : a[0] = g.call(this, A.DOMAIN + A.MIN, i.domainMin, t, e)[0] : a[0] = i.domainMin), void 0 !== i.domainMax && (b.isObject(i.domainMax) ? i.domainMax.signal ? a[r] = b.isValid(n = m.call(this, i.domainMax)) ? n : a[r] : a[r] = g.call(this, A.DOMAIN + A.MAX, i.domainMax, t, e)[1] : a[r] = i.domainMax), i.type === E.LOG || i.type === E.TIME || !i.zero && void 0 !== i.zero || (a[0] = Math.min(0, a[0]), a[r] = Math.max(0, a[r])), a
                }

                function y(t) {
                    var e = this._def, n = this._graph.config(), r = m.call(this, e.range), i = [null, null];
                    if (void 0 !== r)if ("string" == typeof r)if (T[r])i = [0, t[r]]; else {
                        if (!n.range[r])return w.error("Unrecogized range: " + r), i;
                        i = n.range[r]
                    } else if (b.isArray(r))i = b.duplicate(r).map(m.bind(this)); else {
                        if (b.isObject(r))return null;
                        i = [0, r]
                    }
                    if (void 0 !== e.rangeMin && (i[0] = e.rangeMin.signal ? m.call(this, e.rangeMin) : e.rangeMin), void 0 !== e.rangeMax && (i[i.length - 1] = e.rangeMax.signal ? m.call(this, e.rangeMax) : e.rangeMax), void 0 !== e.reverse) {
                        var a = m.call(this, e.reverse);
                        b.isObject(a) && (a = b.accessor(a.field)(t.datum)), a && (i = i.reverse())
                    }
                    return i
                }

                var _ = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, b = t("datalib"), x = t("vega-dataflow"), w = t("vega-logging"), k = x.Node, M = x.Dependencies, S = t("../transforms/Aggregate"), T = {
                    width: 1,
                    height: 1
                }, E = {
                    LINEAR: "linear",
                    ORDINAL: "ordinal",
                    LOG: "log",
                    POWER: "pow",
                    SQRT: "sqrt",
                    TIME: "time",
                    TIME_UTC: "utc",
                    QUANTILE: "quantile",
                    QUANTIZE: "quantize",
                    THRESHOLD: "threshold"
                }, A = {
                    DOMAIN: "domain",
                    RANGE: "range",
                    COUNT: "count",
                    GROUPBY: "groupby",
                    MIN: "min",
                    MAX: "max",
                    VALUE: "value",
                    ASC: "asc",
                    DESC: "desc"
                }, L = r.prototype = new k;
                L.evaluate = function (t) {
                    var e = this, n = function (t) {
                        i.call(e, t)
                    };
                    return this._updated = !1, t.add.forEach(n), t.mod.forEach(n), this._updated && (t.scales[this._def.name] = 1, w.debug(t, ["scale", this._def.name])), x.ChangeSet.create(t, !0)
                }, L.dependency = function (t, e) {
                    if (2 == arguments.length) {
                        var n = t === M.DATA ? "data" : "signal";
                        e = b.array(e);
                        for (var r = 0, i = e.length; r < i; ++r)this._graph[n](e[r]).addListener(this._parent)
                    }
                    return k.prototype.dependency.call(this, t, e)
                };
                var C = _.bisector(b.numcmp).right, D = function (t, e) {
                    return C(t, e) - 1
                }, P = _.bisector(function (t, e) {
                    return -1 * b.numcmp(t, e)
                }).left;
                e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"../transforms/Aggregate": 118, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        114: [function (t, e, n) {
            (function (n) {
                function r(t, e) {
                    this.duration = t || 500, this.ease = e && a.ease(e) || a.ease("cubic-in-out"), this.updates = {next: null}
                }

                function i(t) {
                    for (var e, n, r, i, a, s, l = this.updates, c = l, d = c.next, f = this.duration, h = !0; null != d; c = d, d = c.next)if (e = d.item, n = e.delay || 0, r = (t - n) / f, r < 0)h = !1; else {
                        for (r > 1 && (r = 1), i = d.ease(r), a = 0, s = d.length; a < s; ++a)e[d[a].property] = d[a](i);
                        e.touch(), o.item(e), 1 === r ? (d.remove && (e.status = u.EXIT, e.remove()), c.next = d.next, d = c) : h = !1
                    }
                    return this.callback(), h
                }

                var a = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, o = t("vega-scenegraph").bound, s = t("vega-dataflow").Tuple, u = t("./Builder").STATUS, l = r.prototype, c = {
                    text: 1,
                    url: 1
                };
                l.interpolate = function (t, e) {
                    var n, r, i, o, l = null;
                    for (n in e)r = t[n], i = e[n], r !== i && (c[n] || void 0 === r ? s.set(t, n, i) : "number" != typeof r || isFinite(r) ? (o = a.interpolate(r, i), o.property = n, (l || (l = [])).push(o)) : s.set(t, n, i));
                    return null === l && t.status === u.EXIT && (l = []), null != l && (l.item = t, l.ease = t.mark.ease || this.ease, l.next = this.updates.next, this.updates.next = l), this
                }, l.start = function (t) {
                    for (var e = this, n = e.updates, r = n.next; null != r; n = r, r = n.next)r.item.status === u.EXIT && (r.item.status = u.UPDATE, r.remove = !0);
                    e.callback = t, a.timer(function (t) {
                        return i.call(e, t)
                    })
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"./Builder": 110, "vega-dataflow": 41, "vega-scenegraph": 49}],
        115: [function (t, e, n) {
            function r(t, e) {
                function n() {
                    L.type = null
                }

                function r(t) {
                    return {data: t}
                }

                function a(t) {
                    var e = j || (S.ticks ? S.ticks(q) : S.domain()), n = i(S, e, R).map(r);
                    return e = e.map(function (e) {
                        return e = r(e), e.label = t(e.data), e
                    }), [e, n]
                }

                function k(t) {
                    var n = t.orient, r = t.marks[5].properties.update, i = r.encode, a = e.titleOffsetAutoMin, o = e.titleOffsetAutoMax, s = e.titleOffsetAutoMargin;
                    r.encode = function (t, e, r, u, l, c) {
                        var d = i.call(i, t, e, r, u, l, c), f = "bottom" === n || "top" === n ? "y" : "x";
                        if (null != Y[f])return d;
                        b.clear().union(e.items[3].bounds).union(e.items[4].bounds);
                        var h = r ? {} : t, p = "left" === n || "right" === n ? "width" : "height", g = "top" === n || "left" === n ? -1 : 1, m = ~~(b[p]() + t.fontSize / 2 + s);
                        return v.set(h, f, g * Math.min(Math.max(a, m), o)), r && r.interpolate(t, h), !0
                    }
                }

                function M(n) {
                    var r, i, a;
                    n.type === x ? (r = {
                        scale: n.scaleName,
                        offset: .5 + n.rangeBand() / 2
                    }, i = r) : (r = {scale: n.scaleName, offset: .5}, i = {
                        scale: n.scaleName + ":prev",
                        offset: .5
                    }), a = o(n), m.extend(W.gridLines, f(e)), m.extend(W.majorTicks, f(e)), m.extend(W.minorTicks, f(e)), m.extend(W.tickLabels, h(e)), m.extend(W.domain, g(e)), m.extend(W.title, p(e)), W.gridLines.properties.enter.stroke = {value: e.gridColor}, W.gridLines.properties.enter.strokeOpacity = {value: e.gridOpacity}, W.gridLines.properties.enter.strokeWidth = {value: e.gridWidth}, W.gridLines.properties.enter.strokeDash = {value: e.gridDash}, u(T, W.gridLines, i, r, 1 / 0, n, e, E), u(T, W.majorTicks, i, r, I, n, e), u(T, W.minorTicks, i, r, N, n, e), s(T, W.tickLabels, i, r, I, z), c(T, W.domain, a, O), l(T, W.title, a, +A || -1), m.extend(W.gridLines.properties.update, B), m.extend(W.majorTicks.properties.update, $), m.extend(W.minorTicks.properties.update, H), m.extend(W.tickLabels.properties.update, G), m.extend(W.domain.properties.update, V), m.extend(W.title.properties.update, Y);
                    var v = [W.gridLines, W.majorTicks, W.minorTicks, W.tickLabels, W.domain, W.title];
                    m.extend(L, {
                        type: "group",
                        interactive: !1,
                        properties: {
                            enter: {encode: d, scales: [n.scaleName], signals: [], data: []},
                            update: {encode: d, scales: [n.scaleName], signals: [], data: []}
                        }
                    }), L.marks = v.map(function (e) {
                        return y(t, e)
                    })
                }

                var S, T = e.orient, E = 0, A = e.titleOffset, L = {}, C = "front", D = !1, P = null, I = e.tickSize, N = e.tickSize, O = e.tickSize, z = e.tickPadding || e.padding, j = null, F = null, U = null, R = 0, q = e.ticks, B = {}, G = {}, $ = {}, H = {}, Y = {}, V = {}, W = {
                    gridLines: {},
                    majorTicks: {},
                    minorTicks: {},
                    tickLabels: {},
                    domain: {},
                    title: {}
                }, X = {};
                return X.def = function () {
                    L.type || M(S);
                    var t = _.getTickFormat(S, q, U, F), e = a(t), n = P ? [P].map(r) : [];
                    return L.marks[0].from = function () {
                        return D ? e[0] : []
                    }, L.marks[1].from = function () {
                        return e[0]
                    }, L.marks[2].from = function () {
                        return e[1]
                    }, L.marks[3].from = L.marks[1].from, L.marks[4].from = function () {
                        return [1]
                    }, L.marks[5].from = function () {
                        return n
                    }, L.offset = E, L.orient = T, L.layer = C, "auto" === A && k(L), L
                }, X.scale = function (t) {
                    return arguments.length ? (S !== t && (S = t, n()), X) : S
                }, X.orient = function (t) {
                    return arguments.length ? (T !== t && (T = t in w ? t + "" : e.orient, n()), X) : T
                }, X.title = function (t) {
                    return arguments.length ? (P !== t && (P = t, n()), X) : P
                }, X.tickCount = function (t) {
                    return arguments.length ? (q = t, X) : q
                }, X.tickValues = function (t) {
                    return arguments.length ? (j = t, X) : j
                }, X.tickFormat = function (t) {
                    return arguments.length ? (F !== t && (F = t, n()), X) : F
                }, X.tickFormatType = function (t) {
                    return arguments.length ? (U !== t && (U = t, n()), X) : U
                }, X.tickSize = function (t, e) {
                    if (!arguments.length)return I;
                    var r = arguments.length - 1, i = +t, a = r > 1 ? +e : I, o = r > 0 ? +arguments[r] : I;
                    return I === i && N === a && O === o || n(), I = i, N = a, O = o, X
                }, X.tickSubdivide = function (t) {
                    return arguments.length ? (R = +t, X) : R
                }, X.offset = function (t) {
                    return arguments.length ? (E = m.isObject(t) ? t : +t, X) : E
                }, X.tickPadding = function (t) {
                    return arguments.length ? (z !== +t && (z = +t, n()), X) : z
                }, X.titleOffset = function (t) {
                    return arguments.length ? (A !== t && (A = t, n()), X) : A
                }, X.layer = function (t) {
                    return arguments.length ? (C !== t && (C = t, n()), X) : C
                }, X.grid = function (t) {
                    return arguments.length ? (D !== t && (D = t, n()), X) : D
                }, X.gridLineProperties = function (t) {
                    return arguments.length ? (B !== t && (B = t), X) : B
                }, X.majorTickProperties = function (t) {
                    return arguments.length ? ($ !== t && ($ = t), X) : $
                }, X.minorTickProperties = function (t) {
                    return arguments.length ? (H !== t && (H = t), X) : H
                }, X.tickLabelProperties = function (t) {
                    return arguments.length ? (G !== t && (G = t), X) : G
                }, X.titleProperties = function (t) {
                    return arguments.length ? (Y !== t && (Y = t), X) : Y
                }, X.domainProperties = function (t) {
                    return arguments.length ? (V !== t && (V = t), X) : V
                }, X.reset = function () {
                    return n(), X
                }, X
            }

            function i(t, e, n) {
                var r = [];
                if (n && e.length > 1) {
                    for (var i, o, s = a(t.domain()), u = -1, l = e.length, c = (e[1] - e[0]) / ++n; ++u < l;)for (i = n; --i > 0;)(o = +e[u] - i * c) >= s[0] && r.push(o);
                    for (--u, i = 0; ++i < n && (o = +e[u] + i * c) < s[1];)r.push(o)
                }
                return r
            }

            function a(t) {
                var e = t[0], n = t[t.length - 1];
                return e < n ? [e, n] : [n, e]
            }

            function o(t) {
                return t.rangeExtent ? t.rangeExtent() : a(t.range())
            }

            function s(t, e, n, r, i, a) {
                i = Math.max(i, 0) + a, "left" !== t && "top" !== t || (i *= -1), "top" === t || "bottom" === t ? (m.extend(e.properties.enter, {
                    x: n,
                    y: {value: i}
                }), m.extend(e.properties.update, {
                    x: r,
                    y: {value: i},
                    align: {value: "center"},
                    baseline: {value: M[t]}
                })) : (m.extend(e.properties.enter, {
                    x: {value: i},
                    y: n
                }), m.extend(e.properties.update, {
                    x: {value: i},
                    y: r,
                    align: {value: k[t]},
                    baseline: {value: "middle"}
                }))
            }

            function u(t, e, n, r, i, a, o, s) {
                var u = "left" === t || "top" === t ? -1 : 1;
                if (i = i === 1 / 0 ? "top" === t || "bottom" === t ? {
                        field: {group: "height", level: 2},
                        mult: -u,
                        offset: s * -u
                    } : {field: {group: "width", level: 2}, mult: -u, offset: s * -u} : {
                        value: u * i,
                        offset: s
                    }, "between" === o.tickPlacement && a.type === x) {
                    var l = a.range(), c = .5 + (a.rangeBand() || (l[1] - l[0]) / 2);
                    r = n = m.duplicate(r), r.offset = n.offset = c
                }
                "top" === t || "bottom" === t ? (m.extend(e.properties.enter, {
                    x: n,
                    y: {value: 0},
                    y2: i
                }), m.extend(e.properties.update, {
                    x: r,
                    y: {value: 0},
                    y2: i
                }), m.extend(e.properties.exit, {x: r})) : (m.extend(e.properties.enter, {
                    x: {value: 0},
                    x2: i,
                    y: n
                }), m.extend(e.properties.update, {x: {value: 0}, x2: i, y: r}), m.extend(e.properties.exit, {y: r}))
            }

            function l(t, e, n, r) {
                var i = e.properties.update, a = ~~((n[0] + n[1]) / 2), o = "top" === t || "left" === t ? -1 : 1;
                "bottom" === t || "top" === t ? (i.x = {value: a}, i.angle = {value: 0}, r >= 0 && (i.y = {value: o * r})) : (i.y = {value: a}, i.angle = {value: "left" === t ? -90 : 90}, r >= 0 && (i.x = {value: o * r}))
            }

            function c(t, e, n, r) {
                var i;
                "top" !== t && "left" !== t || (r = -1 * r), i = "bottom" === t || "top" === t ? "M" + n[0] + "," + r + "V0H" + n[1] + "V" + r : "M" + r + "," + n[0] + "H0V" + n[1] + "H" + r, e.properties.update.path = {value: i}
            }

            function d(t, e, n) {
                var r = n ? {} : t, i = t.mark.def.offset, a = t.mark.def.orient, o = e.width, s = e.height;
                if (m.isArray(i)) {
                    var u = i[0], l = i[1];
                    switch (a) {
                        case"left":
                            v.set(r, "x", -u), v.set(r, "y", l);
                            break;
                        case"right":
                            v.set(r, "x", o + u), v.set(r, "y", l);
                            break;
                        case"bottom":
                            v.set(r, "x", u), v.set(r, "y", s + l);
                            break;
                        case"top":
                            v.set(r, "x", u), v.set(r, "y", -l);
                            break;
                        default:
                            v.set(r, "x", u), v.set(r, "y", l)
                    }
                } else switch (m.isObject(i) && (i = -e.scale(i.scale)(i.value)), a) {
                    case"left":
                        v.set(r, "x", -i), v.set(r, "y", 0);
                        break;
                    case"right":
                        v.set(r, "x", o + i), v.set(r, "y", 0);
                        break;
                    case"bottom":
                        v.set(r, "x", 0), v.set(r, "y", s + i);
                        break;
                    case"top":
                        v.set(r, "x", 0), v.set(r, "y", -i);
                        break;
                    default:
                        v.set(r, "x", 0), v.set(r, "y", 0)
                }
                return n && n.interpolate(t, r), !0
            }

            function f(t) {
                return {
                    type: "rule",
                    interactive: !1,
                    key: "data",
                    properties: {
                        enter: {
                            stroke: {value: t.tickColor},
                            strokeWidth: {value: t.tickWidth},
                            opacity: {value: 1e-6}
                        }, exit: {opacity: {value: 1e-6}}, update: {opacity: {value: 1}}
                    }
                }
            }

            function h(t) {
                return {
                    type: "text",
                    interactive: !0,
                    key: "data",
                    properties: {
                        enter: {
                            fill: {value: t.tickLabelColor},
                            font: {value: t.tickLabelFont},
                            fontSize: {value: t.tickLabelFontSize},
                            opacity: {value: 1e-6},
                            text: {field: "label"}
                        }, exit: {opacity: {value: 1e-6}}, update: {opacity: {value: 1}}
                    }
                }
            }

            function p(t) {
                return {
                    type: "text",
                    interactive: !0,
                    properties: {
                        enter: {
                            font: {value: t.titleFont},
                            fontSize: {value: t.titleFontSize},
                            fontWeight: {value: t.titleFontWeight},
                            fill: {value: t.titleColor},
                            align: {value: "center"},
                            baseline: {value: "middle"},
                            text: {field: "data"}
                        }, update: {}
                    }
                }
            }

            function g(t) {
                return {
                    type: "path",
                    interactive: !1,
                    properties: {
                        enter: {
                            x: {value: .5},
                            y: {value: .5},
                            stroke: {value: t.axisColor},
                            strokeWidth: {value: t.axisWidth}
                        }, update: {}
                    }
                }
            }

            var m = t("datalib"), v = t("vega-dataflow").Tuple, y = t("../parse/mark"), _ = t("../util"), b = new (t("vega-scenegraph").Bounds), x = "ordinal", w = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            }, k = {bottom: "center", top: "center", left: "right", right: "left"}, M = {
                bottom: "top",
                top: "bottom",
                left: "middle",
                right: "middle"
            };
            e.exports = r
        }, {"../parse/mark": 99, "../util": 148, datalib: 26, "vega-dataflow": 41, "vega-scenegraph": 49}],
        116: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    function e() {
                        $.type = null
                    }

                    function n(t, e) {
                        return {data: t, index: e}
                    }

                    function r(t) {
                        return "ordinal" === t || "quantize" === t || "quantile" === t || "threshold" === t
                    }

                    function y(t) {
                        var e, r, i, a = _(w, k, M, S, T), o = (null == A ? t.ticks ? t.ticks.apply(t, z) : t.domain() : A).map(n), s = m.getTickFormat(t, o.length, C, L), u = 5, l = d.range(o.length);
                        w ? (r = o.map(function (t) {
                            return Math.sqrt(w(t.data))
                        }), i = d.max(r), r = r.reduce(function (t, e, n, r) {
                            return n > 0 && (t[n] = t[n - 1] + r[n - 1] / 2 + u), t[n] += e / 2, t
                        }, [0]).map(Math.round)) : (i = Math.round(Math.sqrt(P.symbolSize)), r = E || (e = q.fontSize) && e.value + u || P.labelFontSize + u, r = l.map(function (t, e) {
                            return Math.round(i / 2 + e * r)
                        }));
                        var c, h = O;
                        D && (c = R.fontSize, h += 5 + (c && c.value || P.titleFontSize));
                        for (var p = 0, g = r.length; p < g; ++p)r[p] += h;
                        a.scales = a.scales || [{}], f.extend(a.scales[0], {
                            name: "legend",
                            type: "ordinal",
                            points: !0,
                            domain: l,
                            range: r
                        });
                        var v = (D ? [D] : []).map(n);
                        return o.forEach(function (t) {
                            t.label = s(t.data), t.offset = i
                        }), a.marks[0].from = function () {
                            return v
                        }, a.marks[1].from = function () {
                            return o
                        }, a.marks[2].from = a.marks[1].from, a
                    }

                    function _(e, n, r, l, c) {
                        var d = f.extend(B.titles, o(P)), h = f.extend(B.symbols, s(P)), m = f.extend(B.labels, u(P));
                        return a(h, e, n, r, l, c), f.extend(d.properties.update, R), f.extend(h.properties.update, F), f.extend(m.properties.update, q), d.properties.enter.x.value += O, d.properties.enter.y.value += O, m.properties.enter.x.offset += O + 1, h.properties.enter.x.offset = O + 1, m.properties.update.x.offset += O + 1, h.properties.update.x.offset = O + 1, f.extend($, {
                            type: "group",
                            interactive: !1,
                            properties: {
                                enter: p(t, "group", j),
                                legendPosition: {encode: i.bind(null, P), signals: [], scales: [], data: [], fields: []}
                            }
                        }), $.marks = [d, h, m].map(function (e) {
                            return g(t, e)
                        }), $
                    }

                    function b(t) {
                        var e = x(t), r = t.domain(), i = (null == A ? r : A).map(n), a = U.width && U.width.value || P.gradientWidth, o = m.getTickFormat(t, i.length, C, L);
                        e.scales = e.scales || [{}];
                        var s = f.extend(e.scales[0], {
                            name: "legend",
                            type: t.type,
                            round: !0,
                            zero: !1,
                            domain: [r[0], r[r.length - 1]],
                            range: [O, a + O]
                        });
                        "pow" === t.type && (s.exponent = t.exponent());
                        var u = (D ? [D] : []).map(n);
                        return i.forEach(function (t, e) {
                            t.label = o(t.data), t.align = e == i.length - 1 ? "right" : 0 === e ? "left" : "center"
                        }), e.marks[0].from = function () {
                            return u
                        }, e.marks[1].from = function () {
                            return [1]
                        }, e.marks[2].from = function () {
                            return i
                        }, e
                    }

                    function x(e) {
                        var n = f.extend(B.titles, o(P)), r = f.extend(B.gradient, l(P)), a = f.extend(B.labels, c(P)), s = new h, u = e.domain(), d = u[0], m = u[u.length - 1], v = e.copy().domain([d, m]).range([0, 1]), y = "linear" !== e.type && e.ticks ? e.ticks.call(e, 15) : u;
                        d !== y[0] && y.unshift(d), m !== y[y.length - 1] && y.push(m);
                        for (var _ = 0, b = y.length; _ < b; ++_)s.stop(v(y[_]), e(y[_]));
                        r.properties.enter.fill = {value: s}, f.extend(n.properties.update, R), f.extend(r.properties.update, U), f.extend(a.properties.update, q);
                        var x = r.properties, w = U.height, k = w && w.value || x.enter.height.value;
                        if (a.properties.enter.y.value = k, a.properties.update.y.value = k, D) {
                            var M = n.properties, S = R.fontSize, T = 4 + (S && S.value || M.enter.fontSize.value);
                            r.properties.enter.y.value += T, a.properties.enter.y.value += T,
                                r.properties.update.y.value += T, a.properties.update.y.value += T
                        }
                        return n.properties.enter.x.value += O, n.properties.enter.y.value += O, r.properties.enter.x.value += O, r.properties.enter.y.value += O, a.properties.enter.y.value += O, r.properties.update.x.value += O, r.properties.update.y.value += O, a.properties.update.y.value += O, f.extend($, {
                            type: "group",
                            interactive: !1,
                            properties: {
                                enter: p(t, "group", j),
                                legendPosition: {encode: i.bind(null, P), signals: [], scales: [], data: [], fields: []}
                            }
                        }), $.marks = [n, r, a].map(function (e) {
                            return g(t, e)
                        }), $
                    }

                    var w = null, k = null, M = null, S = null, T = null, E = null, A = null, L = null, C = null, D = null, P = t.config().legend, I = P.orient, N = P.offset, O = P.padding, z = [5], j = {}, F = {}, U = {}, R = {}, q = {}, B = {
                        titles: {},
                        symbols: {},
                        labels: {},
                        gradient: {}
                    }, G = {}, $ = {};
                    return G.def = function () {
                        var t = w || k || M || S || T;
                        return $.type || ($ = t !== M && t !== S || r(t.type) ? y(t) : b(t)), $.orient = I, $.offset = N, $.padding = O, $.margin = P.margin, $
                    }, G.size = function (t) {
                        return arguments.length ? (w !== t && (w = t, e()), G) : w
                    }, G.shape = function (t) {
                        return arguments.length ? (k !== t && (k = t, e()), G) : k
                    }, G.fill = function (t) {
                        return arguments.length ? (M !== t && (M = t, e()), G) : M
                    }, G.stroke = function (t) {
                        return arguments.length ? (S !== t && (S = t, e()), G) : S
                    }, G.opacity = function (t) {
                        return arguments.length ? (T !== t && (T = t, e()), G) : T
                    }, G.title = function (t) {
                        return arguments.length ? (D !== t && (D = t, e()), G) : D
                    }, G.format = function (t) {
                        return arguments.length ? (L !== t && (L = t, e()), G) : L
                    }, G.formatType = function (t) {
                        return arguments.length ? (C !== t && (C = t, e()), G) : C
                    }, G.spacing = function (t) {
                        return arguments.length ? (E !== +t && (E = +t, e()), G) : E
                    }, G.orient = function (t) {
                        return arguments.length ? (I = t in v ? t + "" : P.orient, G) : I
                    }, G.offset = function (t) {
                        return arguments.length ? (N = +t, G) : N
                    }, G.values = function (t) {
                        return arguments.length ? (A = t, G) : A
                    }, G.legendProperties = function (t) {
                        return arguments.length ? (j = t, G) : j
                    }, G.symbolProperties = function (t) {
                        return arguments.length ? (F = t, G) : F
                    }, G.gradientProperties = function (t) {
                        return arguments.length ? (U = t, G) : U
                    }, G.labelProperties = function (t) {
                        return arguments.length ? (q = t, G) : q
                    }, G.titleProperties = function (t) {
                        return arguments.length ? (R = t, G) : R
                    }, G.reset = function () {
                        return e(), G
                    }, G
                }

                function i(t, e, n, r, i, a, o) {
                    var s, u = r ? {} : e, l = e.mark.def, c = l.offset, d = l.orient, f = 2 * l.padding, h = "left" === d ? 0 : n.width, p = ~~e.bounds.width() + (e.width ? 0 : f), g = ~~e.bounds.height() + (e.height ? 0 : f), m = n._legendPositions || (n._legendPositions = {
                            right: .5,
                            left: .5
                        });
                    if (u.x = .5, u.y = .5, u.width = p, u.height = g, "left" === d || "right" === d) {
                        u.y = m[d], m[d] += g + l.margin;
                        var y = n.axes, _ = n.axisItems, b = v[d];
                        for (s = 0; s < y.length; ++s)y[s].orient() === d && (h = Math.max(h, Math.abs(_[s].bounds[b])))
                    }
                    switch (d) {
                        case"left":
                            u.x -= h + c + p;
                            break;
                        case"right":
                            u.x += h + c;
                            break;
                        case"top-left":
                            u.x += c, u.y += c;
                            break;
                        case"top-right":
                            u.x += n.width - p - c, u.y += c;
                            break;
                        case"bottom-left":
                            u.x += c, u.y += n.height - g - c;
                            break;
                        case"bottom-right":
                            u.x += n.width - p - c, u.y += n.height - g - c
                    }
                    var x = t.baseline, w = 0;
                    for (s = 0; s < n.legendItems.length; s++) {
                        var k = n.legendItems[s];
                        w += k.bounds.height() + (e.height ? 0 : f)
                    }
                    "middle" === x ? u.y += c + n.height / 2 - w / 2 : "bottom" === x && (u.y += c + n.height - w), r && r.interpolate(e, u);
                    var M = e.mark.def.properties.enter.encode;
                    return M.call(M, e, n, r, i, a, o), !0
                }

                function a(t, e, n, r, i, a) {
                    var o = t.properties.enter, s = t.properties.update;
                    e && (o.size = s.size = {
                        scale: e.scaleName,
                        field: "data"
                    }), n && (o.shape = s.shape = {
                        scale: n.scaleName,
                        field: "data"
                    }), r && (o.fill = s.fill = {
                        scale: r.scaleName,
                        field: "data"
                    }), i && (o.stroke = s.stroke = {
                        scale: i.scaleName,
                        field: "data"
                    }), a && (s.opacity = {scale: a.scaleName, field: "data"})
                }

                function o(t) {
                    return {
                        type: "text",
                        interactive: !1,
                        key: "data",
                        properties: {
                            enter: {
                                x: {value: 0},
                                y: {value: 0},
                                fill: {value: t.titleColor},
                                font: {value: t.titleFont},
                                fontSize: {value: t.titleFontSize},
                                fontWeight: {value: t.titleFontWeight},
                                baseline: {value: "top"},
                                text: {field: "data"},
                                opacity: {value: 1e-6}
                            }, exit: {opacity: {value: 1e-6}}, update: {opacity: {value: 1}}
                        }
                    }
                }

                function s(t) {
                    return {
                        type: "symbol",
                        interactive: !1,
                        key: "data",
                        properties: {
                            enter: {
                                x: {field: "offset", mult: .5},
                                y: {scale: "legend", field: "index"},
                                shape: {value: t.symbolShape},
                                size: {value: t.symbolSize},
                                stroke: {value: t.symbolColor},
                                strokeWidth: {value: t.symbolStrokeWidth},
                                opacity: {value: 1e-6}
                            },
                            exit: {opacity: {value: 1e-6}},
                            update: {
                                x: {field: "offset", mult: .5},
                                y: {scale: "legend", field: "index"},
                                opacity: {value: 1}
                            }
                        }
                    }
                }

                function u(t) {
                    return {
                        type: "text",
                        interactive: !1,
                        key: "data",
                        properties: {
                            enter: {
                                x: {field: "offset", offset: 5},
                                y: {scale: "legend", field: "index"},
                                fill: {value: t.labelColor},
                                font: {value: t.labelFont},
                                fontSize: {value: t.labelFontSize},
                                align: {value: t.labelAlign},
                                baseline: {value: t.labelBaseline},
                                text: {field: "label"},
                                opacity: {value: 1e-6}
                            },
                            exit: {opacity: {value: 1e-6}},
                            update: {
                                opacity: {value: 1},
                                x: {field: "offset", offset: 5},
                                y: {scale: "legend", field: "index"}
                            }
                        }
                    }
                }

                function l(t) {
                    return {
                        type: "rect",
                        interactive: !1,
                        properties: {
                            enter: {
                                x: {value: 0},
                                y: {value: 0},
                                width: {value: t.gradientWidth},
                                height: {value: t.gradientHeight},
                                stroke: {value: t.gradientStrokeColor},
                                strokeWidth: {value: t.gradientStrokeWidth},
                                opacity: {value: 1e-6}
                            },
                            exit: {opacity: {value: 1e-6}},
                            update: {x: {value: 0}, y: {value: 0}, opacity: {value: 1}}
                        }
                    }
                }

                function c(t) {
                    return {
                        type: "text",
                        interactive: !1,
                        key: "data",
                        properties: {
                            enter: {
                                x: {scale: "legend", field: "data"},
                                y: {value: 20},
                                dy: {value: 2},
                                fill: {value: t.labelColor},
                                font: {value: t.labelFont},
                                fontSize: {value: t.labelFontSize},
                                align: {field: "align"},
                                baseline: {value: "top"},
                                text: {field: "label"},
                                opacity: {value: 1e-6}
                            },
                            exit: {opacity: {value: 1e-6}},
                            update: {x: {scale: "legend", field: "data"}, y: {value: 20}, opacity: {value: 1}}
                        }
                    }
                }

                var d = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, f = t("datalib"), h = t("vega-scenegraph").Gradient, p = t("../parse/properties"), g = t("../parse/mark"), m = t("../util"), v = {
                    left: "x1",
                    right: "x2",
                    "top-left": "x1",
                    "top-right": "x2",
                    "bottom-left": "x1",
                    "bottom-right": "x2"
                };
                e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"../parse/mark": 99, "../parse/properties": 104, "../util": 148, datalib: 26, "vega-scenegraph": 49}],
        117: [function (t, e, n) {
            e.exports = function t(e, n) {
                var r, i, a, o, s;
                if (n(e))return !0;
                var u = ["items", "axisItems", "legendItems"];
                for (a = 0, o = u.length; a < o; ++a)if (s = e[u[a]])for (r = 0, i = s.length; r < i; ++r)if (t(s[r], n))return !0
            }
        }, {}],
        118: [function (t, e, n) {
            function r(t) {
                return d.prototype.init.call(this, t), d.addParameters(this, {
                    groupby: {type: "array<field>"},
                    summarize: {
                        type: "custom", set: function (t) {
                            function e(t) {
                                t.signal && (l[t.signal] = 1)
                            }

                            var n, r, i, o, s, u, l = {}, d = this._transform;
                            if (!a.isArray(o = t)) {
                                o = [];
                                for (s in t)u = a.array(t[s]), o.push({field: s, ops: u})
                            }
                            for (n = 0, r = o.length; n < r; ++n)i = o[n], i.field.signal && (l[i.field.signal] = 1), a.array(i.ops).forEach(e), a.array(i.as).forEach(e);
                            return d._fields = o, d._aggr = null, d.dependency(c.SIGNALS, a.keys(l)), d
                        }
                    }
                }), this._aggr = null, this._input = null, this._args = null, this._fields = [], this._out = [], this._type = p.TUPLE, this._acc = {
                    groupby: a.true,
                    value: a.true
                }, this.router(!0).produces(!0)
            }

            function i(t) {
                var e, n, r, i, a, o, s, u = [];
                for (a = t._dims, e = 0, n = a.length; e < n; ++e)u.push(a[e].name);
                for (o = t._aggr, e = 0, n = o.length; e < n; ++e)for (s = o[e].measures.fields, r = 0, i = s.length; r < i; ++r)u.push(s[r]);
                return u
            }

            var a = t("datalib"), o = t("vega-dataflow"), s = t("vega-logging"), u = o.ChangeSet, l = o.Tuple, c = o.Dependencies, d = t("./Transform"), f = t("./Facetor"), h = r.prototype = Object.create(d.prototype);
            h.constructor = r;
            var p = r.TYPES = {VALUE: 1, TUPLE: 2, MULTI: 3};
            r.VALID_OPS = ["values", "count", "valid", "missing", "distinct", "sum", "mean", "average", "variance", "variancep", "stdev", "stdevp", "median", "q1", "q3", "modeskew", "min", "max", "argmin", "argmax"], h.type = function (t) {
                return this._type = t, this
            }, h.accessors = function (t, e) {
                var n = this._acc;
                n.groupby = a.$(t) || a.true, n.value = a.$(e) || a.true
            }, h.aggr = function () {
                if (this._aggr)return this._aggr;
                var t = this._graph, e = !1, n = [], r = this.param("groupby").field, o = function (e) {
                    return e.signal ? t.signalRef(e.signal) : e
                }, s = this._fields.map(function (t) {
                    var r = {name: o(t.field), as: a.array(t.as), ops: a.array(o(t.ops)).map(o), get: t.get};
                    return e = e || null != r.get, n.push(r.name), r
                });
                r.forEach(function (t) {
                    t.get && (e = !0), n.push(t.name || t)
                }), this._args = e || !s.length ? null : n, s.length || (s = {"*": "values"});
                var u = this._aggr = (new f).groupby(r).stream(!0).summarize(s);
                return this._out = i(u), this._type !== p.VALUE && u.key("_id"), u
            }, h.transform = function (t, e) {
                s.debug(t, ["aggregate"]);
                var n, r, i, a, o, c = u.create(t), d = this.aggr(), f = this._out, h = this._args, g = !0, m = l.prev;
                if (e && (c.rem.push.apply(c.rem, d.result()), d.clear(), this._aggr = null, d = this.aggr()), this._type === p.TUPLE)n = function (t) {
                    d._add(t), l.prev_init(t)
                }, r = function (t) {
                    d._rem(m(t))
                }, i = function (t) {
                    d._mod(t, m(t))
                }, a = function (t) {
                    d._markMod(t, m(t))
                }; else {
                    var v = this._acc.groupby, y = this._acc.value, _ = this._type === p.VALUE ? y : function (t) {
                        return {_id: t._id, groupby: v(t), value: y(t)}
                    };
                    n = function (t) {
                        d._add(_(t)), l.prev_init(t)
                    }, r = function (t) {
                        d._rem(_(m(t)))
                    }, i = function (t) {
                        d._mod(_(t), _(m(t)))
                    }, a = function (t) {
                        d._mark(_(t), _(m(t)))
                    }
                }
                if (t.add.forEach(n), e)t.mod.forEach(n); else {
                    if (t.rem.forEach(r), h)for (o = 0, g = !1; o < h.length; ++o)if (t.fields[h[o]]) {
                        g = !0;
                        break
                    }
                    t.mod.forEach(g ? i : a)
                }
                for (o = 0; o < f.length; ++o)c.fields[f[o]] = 1;
                return d._input = t, d.changes(c)
            }, e.exports = r
        }, {"./Facetor": 124, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        119: [function (t, e, n) {
            function r() {
                this._collector = null
            }

            var i = t("./Transform").prototype, a = r.prototype = Object.create(i);
            a.constructor = r, a.init = function (t) {
                return i.init.call(this, t), this.batch(!0)
            }, a.transform = function (t, e) {
                return this.batchTransform(t, this._collector.data(), e)
            }, a.batchTransform = function () {
            }, e.exports = r
        }, {"./Transform": 140}],
        120: [function (t, e, n) {
            function r(t) {
                return u.prototype.init.call(this, t), s.addParameters(this, {
                    field: {type: "field"},
                    min: {type: "value"},
                    max: {type: "value"},
                    base: {type: "value", default: 10},
                    maxbins: {type: "value", default: 20},
                    step: {type: "value"},
                    steps: {type: "value"},
                    minstep: {type: "value"},
                    div: {type: "array<value>", default: [5, 2]}
                }), this._output = {start: "bin_start", end: "bin_end", mid: "bin_mid"}, this.mutates(!0)
            }

            var i = t("datalib"), a = t("vega-dataflow").Tuple, o = t("vega-logging"), s = t("./Transform"), u = t("./BatchTransform"), l = r.prototype = Object.create(u.prototype);
            l.constructor = r, l.extent = function (t) {
                var e, n = [this.param("min"), this.param("max")];
                return null != n[0] && null != n[1] || (e = i.extent(t, this.param("field").accessor), null == n[0] && (n[0] = e[0]), null == n[1] && (n[1] = e[1])), n
            }, l.batchTransform = function (t, e) {
                function n(t) {
                    var e = d(t);
                    e = null == e ? null : h.start + p * ~~((e - h.start) / p), a.set(t, s.start, e), a.set(t, s.end, e + p), a.set(t, s.mid, e + p / 2)
                }

                o.debug(t, ["binning"]);
                var r = this.extent(e), s = this._output, u = this.param("step"), l = this.param("steps"), c = this.param("minstep"), d = this.param("field").accessor, f = {
                    min: r[0],
                    max: r[1],
                    base: this.param("base"),
                    maxbins: this.param("maxbins"),
                    div: this.param("div")
                };
                u && (f.step = u), l && (f.steps = l), c && (f.minstep = c);
                var h = i.bins(f), p = h.step;
                return t.add.forEach(n), t.mod.forEach(n), t.rem.forEach(n), t.fields[s.start] = 1, t.fields[s.end] = 1, t.fields[s.mid] = 1, t
            }, e.exports = r
        }, {"./BatchTransform": 119, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        121: [function (t, e, n) {
            function r(t) {
                return s.prototype.init.call(this, t), s.addParameters(this, {
                    field: {type: "field", default: "data"},
                    pattern: {type: "value", default: "[\\w']+"},
                    case: {type: "value", default: "lower"},
                    stopwords: {type: "value", default: ""}
                }), this._output = {text: "text", count: "count"}, this.router(!0).produces(!0)
            }

            var i = t("vega-dataflow"), a = i.Tuple, o = t("vega-logging"), s = t("./Transform"), u = r.prototype = Object.create(s.prototype);
            u.constructor = r, u.transform = function (t, e) {
                function n(t) {
                    return a.prev_init(t), i(t)
                }

                function r(t) {
                    return i(a.prev(t))
                }

                o.debug(t, ["countpattern"]);
                var i = this.param("field").accessor, s = this.param("pattern"), u = this.param("stopwords"), l = !1;
                return this._stop !== u && (this._stop = u, this._stop_re = new RegExp("^" + u + "$", "i"), e = !0), this._pattern !== s && (this._pattern = s, this._match = new RegExp(this._pattern, "g"), e = !0), e && (this._counts = {}), this._add(t.add, n), e || this._rem(t.rem, r), (e || (l = t.fields[i.field])) && (l && this._rem(t.mod, r), this._add(t.mod, n)), this._changeset(t)
            }, u._changeset = function (t) {
                var e, n, r, o = this._counts, s = this._tuples || (this._tuples = {}), u = i.ChangeSet.create(t), l = this._output;
                for (e in o)n = s[e], r = o[e] || 0, !n && r ? (s[e] = n = a.ingest({}), n[l.text] = e, n[l.count] = r, u.add.push(n)) : 0 === r ? (n && u.rem.push(n), delete o[e], delete s[e]) : n[l.count] !== r && (a.set(n, l.count, r), u.mod.push(n));
                return u
            }, u._tokenize = function (t) {
                switch (this.param("case")) {
                    case"upper":
                        t = t.toUpperCase();
                        break;
                    case"lower":
                        t = t.toLowerCase()
                }
                return t.match(this._match)
            }, u._add = function (t, e) {
                var n, r, i, a, o = this._counts, s = this._stop_re;
                for (i = 0; i < t.length; ++i)for (n = this._tokenize(e(t[i])), r = 0; r < n.length; ++r)s.test(a = n[r]) || (o[a] = 1 + (o[a] || 0))
            }, u._rem = function (t, e) {
                var n, r, i, a, o = this._counts, s = this._stop_re;
                for (i = 0; i < t.length; ++i)for (n = this._tokenize(e(t[i])), r = 0; r < n.length; ++r)s.test(a = n[r]) || (o[a] -= 1)
            }, e.exports = r
        }, {"./Transform": 140, "vega-dataflow": 41, "vega-logging": 48}],
        122: [function (t, e, n) {
            function r(t) {
                return m.prototype.init.call(this, t), g.addParameters(this, {
                    with: {type: "data"},
                    diagonal: {type: "value", default: "true"},
                    filter: {type: "expr"}
                }), this._output = {
                    left: "a",
                    right: "b"
                }, this._lastWith = null, this._cids = {}, this._cache = {}, this.router(!0).produces(!0)
            }

            function i(t, e) {
                var n = this._cache, r = n[t._id] || (n[t._id] = {c: [], f: !1});
                r.c.push(e)
            }

            function a(t, e, n) {
                return t ? e._id + "_" + n._id : n._id + "_" + e._id
            }

            function o(t, e, n, r, o, s, u) {
                for (var l, c, d = this._output, f = this._cache, p = this._cids, g = t.add, m = !1, v = 0, y = n.length, _ = {}; v < y; ++v)l = n[v], c = a(e, u, l), p[c] || (u._id !== l._id || r) && (h.set(_, d.left, e ? u : l), h.set(_, d.right, e ? l : u), !o || o(_) ? (g.push(_ = h.ingest(_)), i.call(this, u, _), u._id !== l._id && i.call(this, l, _), s[_._id] = 1, p[c] = !0, _ = {}) : (f[l._id] && (f[l._id].f = !0), m = !0));
                f[u._id] && (f[u._id].f = m)
            }

            function s(t, e, n, r, i, s, u, l) {
                var c, d, f, h, p, g = this._output, m = this._cache, v = this._cids, y = m[l._id], _ = y && y.c, b = !y || y.f, x = t.mod, w = t.rem;
                if (_)for (c = _.length - 1; c >= 0; --c)if (d = _[c], h = l === d[g.left], f = h ? d[g.right] : d[g.left], p = a(h, l, f), m[f._id])if (!i || i(d)) {
                    if (s[d._id])continue;
                    x.push(d), s[d._id] = 1
                } else u[d._id] || w.push.apply(w, _.splice(c, 1)), u[d._id] = 1, v[p] = !1, y.f = !0; else v[p] = !1, _.splice(c, 1);
                i && b && o.call(this, t, e, n, r, i, s, l)
            }

            function u(t, e, n, r) {
                var i, o, s, u, l, c = this._output, d = this._cache[r._id], f = this._cids, h = t.rem;
                if (d) {
                    for (i = 0, o = d.c.length; i < o; ++i)s = d.c[i], l = r === s[c.left], u = l ? s[c.right] : s[c.left], f[a(l, r, u)] = !1, n[s._id] || (h.push(s), n[s._id] = 1);
                    this._cache[r._id] = null
                }
            }

            function l(t, e) {
                var n, r, i, a, o, s, u = this._cache, l = c.keys(u), d = t.rem;
                for (n = 0, r = l.length; n < r; ++n)for (o = u[l[n]], i = 0, a = o.c.length; i < a; ++i)s = o.c[i], e[s._id] || (d.push(s), e[s._id] = 1);
                this._cache = {}, this._cids = {}, this._lastWith = null
            }

            var c = t("datalib"), d = t("vega-dataflow"), f = d.ChangeSet, h = d.Tuple, p = t("vega-logging"), g = t("./Transform"), m = t("./BatchTransform"), v = r.prototype = Object.create(m.prototype);
            v.constructor = r, v.batchTransform = function (t, e, n) {
                p.debug(t, ["crossing"]);
                var r = this.param("with"), i = this.param("diagonal"), a = this._output, c = this.param("filter") || null, d = !r.name, h = d ? t : r.source.last(), g = d ? e : r.source.values(), m = f.create(t), v = {}, y = {};
                return n ? (l.call(this, m, y), e.forEach(o.bind(this, m, !0, g, i, c, v)), this._lastWith = h.stamp) : (t.rem.forEach(u.bind(this, m, !0, y)), t.add.forEach(o.bind(this, m, !0, g, i, c, v)), h.stamp > this._lastWith && (h.rem.forEach(u.bind(this, m, !1, y)), h.add.forEach(o.bind(this, m, !1, e, i, c, v)), h.mod.forEach(s.bind(this, m, !1, e, i, c, v, y)), this._lastWith = h.stamp), t.mod.forEach(s.bind(this, m, !0, g, i, c, v, y))), m.fields[a.left] = 1, m.fields[a.right] = 1, m
            }, e.exports = r
        }, {"./BatchTransform": 119, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        123: [function (t, e, n) {
            function r(e) {
                return i.addParameters(this, {
                    transform: {
                        type: "custom", set: function (t) {
                            return this._transform._pipeline = t, this._transform
                        }, get: function () {
                            var e = t("../parse/transforms"), n = this._transform;
                            return n._pipeline.map(function (t) {
                                return e(n._graph, t)
                            })
                        }
                    }
                }), this._pipeline = [], a.call(this, e)
            }

            var i = t("./Transform"), a = t("./Aggregate"), o = r.prototype = Object.create(a.prototype);
            o.constructor = r, o.aggr = function () {
                return a.prototype.aggr.call(this).facet(this)
            }, o.transform = function (t, e) {
                var n = a.prototype.transform.call(this, t, e);
                return t.add.length && this.listeners()[0].rerank(), n
            }, e.exports = r
        }, {"../parse/transforms": 108, "./Aggregate": 118, "./Transform": 140}],
        124: [function (t, e, n) {
            function r() {
                o.call(this), this._facet = null, this._facetID = ++d
            }

            function i(t) {
                c.debug({}, ["disconnecting cell", this.tuple._id]);
                var e = this.ds.pipeline();
                t.removeListener(e[0]), t._graph.removeListener(e[0]), t._graph.disconnect(e)
            }

            var a = t("datalib"), o = a.Aggregator, s = o.prototype, u = t("vega-dataflow"), l = u.Tuple, c = t("vega-logging"), d = 0, f = r.prototype = Object.create(s);
            f.constructor = r, f.facet = function (t) {
                return arguments.length ? (this._facet = t, this) : this._facet
            }, f._ingest = function (t) {
                return l.ingest(t, null)
            }, f._assign = l.set, f._newcell = function (t, e) {
                var n = s._newcell.call(this, t, e), r = this._facet;
                if (r) {
                    var a = r._graph, o = n.tuple, u = r.param("transform");
                    n.ds = a.data(o._facetID, u, o), n.disconnect = i, r.addListener(u[0])
                }
                return n
            }, f._newtuple = function (t, e) {
                var n = s._newtuple.call(this, t);
                return this._facet && (l.set(n, "key", e), l.set(n, "_facetID", this._facetID + "_" + e)), n
            }, f.clear = function () {
                if (this._facet)for (var t in this._cells)this._cells[t].disconnect(this._facet);
                return s.clear.call(this)
            }, f._on_add = function (t, e) {
                this._facet && e.ds._input.add.push(t)
            }, f._on_rem = function (t, e) {
                this._facet && e.ds._input.rem.push(t)
            }, f._on_mod = function (t, e, n, r) {
                this._facet && (n === r ? n.ds._input.mod.push(t) : (n.ds._input.rem.push(t), r.ds._input.add.push(t)))
            }, f._on_drop = function (t) {
                this._facet && t.disconnect(this._facet)
            }, f._on_keep = function (t) {
                this._facet && u.ChangeSet.copy(this._input, t.ds._input)
            }, e.exports = r
        }, {datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        125: [function (t, e, n) {
            function r(t) {
                return o.prototype.init.call(this, t), o.addParameters(this, {test: {type: "expr"}}), this._skip = {}, this.router(!0)
            }

            var i = t("vega-dataflow"), a = t("vega-logging"), o = t("./Transform"), s = r.prototype = Object.create(o.prototype);
            s.constructor = r, s.transform = function (t) {
                a.debug(t, ["filtering"]);
                var e = i.ChangeSet.create(t), n = this._skip, r = this.param("test");
                return t.rem.forEach(function (t) {
                    1 !== n[t._id] ? e.rem.push(t) : n[t._id] = 0
                }), t.add.forEach(function (t) {
                    r(t) ? e.add.push(t) : n[t._id] = 1
                }), t.mod.forEach(function (t) {
                    var i = r(t), a = 1 === n[t._id];
                    i && a ? (n[t._id] = 0, e.add.push(t)) : i && !a ? e.mod.push(t) : !i && a || (e.rem.push(t), n[t._id] = 1)
                }), e
            }, e.exports = r
        }, {"./Transform": 140, "vega-dataflow": 41, "vega-logging": 48}],
        126: [function (t, e, n) {
            function r(t) {
                return s.prototype.init.call(this, t), s.addParameters(this, {fields: {type: "array<field>"}}), this._output = {
                    key: "key",
                    value: "value"
                }, this._cache = {}, this.router(!0).produces(!0)
            }

            var i = t("vega-dataflow"), a = i.Tuple, o = t("vega-logging"), s = t("./Transform"), u = r.prototype = Object.create(s.prototype);
            u.constructor = r, u._reset = function (t, e) {
                for (var n in this._cache)e.rem.push.apply(e.rem, this._cache[n]);
                this._cache = {}
            }, u._tuple = function (t, e, n) {
                var r = this._cache[t._id] || (this._cache[t._id] = Array(n));
                return r[e] ? a.rederive(t, r[e]) : r[e] = a.derive(t)
            }, u._fn = function (t, e, n) {
                var r, i, o, s, u, l;
                for (r = 0, o = t.length; r < o; ++r)for (u = t[r], i = 0, s = e.field.length; i < s; ++i)l = this._tuple(u, i, s), a.set(l, this._output.key, e.field[i]), a.set(l, this._output.value, e.accessor[i](u)), n.push(l)
            }, u.transform = function (t, e) {
                o.debug(t, ["folding"]);
                var n = this, r = this.param("fields"), a = i.ChangeSet.create(t);
                return e && this._reset(t, a), this._fn(t.add, r, a.add), this._fn(t.mod, r, e ? a.add : a.mod), t.rem.forEach(function (t) {
                    a.rem.push.apply(a.rem, n._cache[t._id]), n._cache[t._id] = null
                }), (t.add.length || t.rem.length || r.field.some(function (e) {
                    return !!t.fields[e]
                })) && (a.fields[this._output.key] = 1, a.fields[this._output.value] = 1), a
            }, e.exports = r
        }, {"./Transform": 140, "vega-dataflow": 41, "vega-logging": 48}],
        127: [function (t, e, n) {
            (function (n) {
                function r(e) {
                    return l.prototype.init.call(this, e), this._prev = null, this._interactive = !1, this._setup = !0, this._nodes = [], this._links = [], this._layout = i.layout.force(), l.addParameters(this, {
                        size: {
                            type: "array<value>",
                            default: t("./screen").size
                        },
                        bound: {type: "value", default: !0},
                        links: {type: "data"},
                        linkStrength: {type: "value", default: 1},
                        linkDistance: {type: "value", default: 20},
                        charge: {type: "value", default: -30},
                        chargeDistance: {type: "value", default: 1 / 0},
                        friction: {type: "value", default: .9},
                        theta: {type: "value", default: .8},
                        gravity: {type: "value", default: .1},
                        alpha: {type: "value", default: .1},
                        iterations: {type: "value", default: 500},
                        interactive: {type: "value", default: this._interactive},
                        active: {type: "value", default: this._prev},
                        fixed: {type: "data"}
                    }), this._output = {x: "layout_x", y: "layout_y"}, this.mutates(!0)
                }

                var i = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, a = t("vega-dataflow"), o = a.Tuple, s = a.ChangeSet, u = t("vega-logging"), l = t("./Transform"), c = r.prototype = Object.create(l.prototype);
                c.constructor = r, c.transform = function (t, e) {
                    u.debug(t, ["force"]), e -= t.signals.active ? 1 : 0;
                    var n = this.param("interactive"), r = this.param("links").source, i = r.last(), a = this.param("active"), s = this._output, l = this._layout, c = this._nodes, d = this._links;
                    if (i.stamp < t.stamp && (i = null), this.configure(t, i, n, e), !n) {
                        for (var f = this.param("iterations"), h = 0; h < f; ++h)l.tick();
                        l.stop()
                    }
                    return this.update(a), (e || a !== this._prev && a && a.update) && l.alpha(this.param("alpha")), a !== this._prev && (this._prev = a), t.rem.length && l.nodes(this._nodes = o.idFilter(c, t.rem)), i && i.rem.length && l.links(this._links = o.idFilter(d, i.rem)), t.fields[s.x] = 1, t.fields[s.y] = 1, t
                }, c.configure = function (t, e, n, r) {
                    var i = this._layout, a = this._setup || t.add.length || e && e.add.length || n !== this._interactive || this.param("charge") !== i.charge() || this.param("linkStrength") !== i.linkStrength() || this.param("linkDistance") !== i.linkDistance();
                    if ((a || r) && i.size(this.param("size")).chargeDistance(this.param("chargeDistance")).theta(this.param("theta")).gravity(this.param("gravity")).friction(this.param("friction")), a) {
                        this._setup = !1, this._interactive = n;
                        var o, u, l = this, c = this._graph, d = this._nodes, f = this._links;
                        for (o = t.add, u = 0; u < o.length; ++u)d.push({tuple: o[u]});
                        if (e)for (o = e.add, u = 0; u < o.length; ++u)f.push({
                            tuple: o[u],
                            source: d[o[u].source],
                            target: d[o[u].target]
                        });
                        var h = n ? function () {
                            c.propagate(s.create(null, !0), l)
                        } : null;
                        i.linkStrength(this.param("linkStrength")).linkDistance(this.param("linkDistance")).charge(this.param("charge")).nodes(d).links(f).on("tick", h).start().alpha(this.param("alpha"))
                    }
                }, c.update = function (t) {
                    var e, n, r, i, a, s, u = this._output, l = this.param("bound"), c = this.param("fixed"), d = this.param("size"), f = this._nodes, h = {};
                    if (c && c.source)for (c = c.source.values(), n = 0, r = c.length; n < r; ++n)h[c[n].id] = 1;
                    for (n = 0; n < f.length; ++n)r = f[n], i = r.tuple, e = i._id, t && t.id === e ? (r.fixed = 1, t.update && (r.x = r.px = t.x, r.y = r.py = t.y)) : r.fixed = h[e] || 0, a = l ? Math.max(0, Math.min(r.x, d[0])) : r.x, s = l ? Math.max(0, Math.min(r.y, d[1])) : r.y, o.set(i, u.x, a), o.set(i, u.y, s)
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"./Transform": 140, "./screen": 146, "vega-dataflow": 41, "vega-logging": 48}],
        128: [function (t, e, n) {
            function r(t) {
                return s.prototype.init.call(this, t), s.addParameters(this, {
                    field: {type: "value"},
                    expr: {type: "expr"}
                }), this.mutates(!0)
            }

            var i = t("vega-dataflow"), a = i.Tuple, o = t("vega-logging"), s = t("./Transform"), u = r.prototype = Object.create(s.prototype);
            u.constructor = r, u.transform = function (t) {
                function e(t) {
                    a.set(t, n, r(t)), i = !0
                }

                o.debug(t, ["formulating"]);
                var n = this.param("field"), r = this.param("expr"), i = !1;
                return t.add.forEach(e), this.reevaluate(t) && t.mod.forEach(e), i && (t.fields[n] = 1), t
            }, e.exports = r
        }, {"./Transform": 140, "vega-dataflow": 41, "vega-logging": 48}],
        129: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    return u.prototype.init.call(this, t), u.addParameters(this, r.Parameters), u.addParameters(this, {
                        lon: {type: "field"},
                        lat: {type: "field"}
                    }), this._output = {x: "layout_x", y: "layout_y"}, this.mutates(!0)
                }

                var i = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, a = t("datalib"), o = t("vega-dataflow").Tuple, s = t("vega-logging"), u = t("./Transform");
                r.Parameters = {
                    projection: {type: "value", default: "mercator"},
                    center: {type: "array<value>"},
                    translate: {type: "array<value>", default: t("./screen").center},
                    rotate: {type: "array<value>"},
                    scale: {type: "value"},
                    precision: {type: "value"},
                    clipAngle: {type: "value"},
                    clipExtent: {type: "value"}
                }, r.d3Projection = function () {
                    var t, e, n, o = this.param("projection"), s = r.Parameters;
                    o !== this._mode && (this._mode = o, this._projection = i.geo[o]()), t = this._projection;
                    for (e in s)"projection" !== e && t[e] && (n = this.param(e), void 0 === n || a.isArray(n) && 0 === n.length || n !== t[e]() && t[e](n));
                    return t
                };
                var l = r.prototype = Object.create(u.prototype);
                l.constructor = r, l.transform = function (t) {
                    function e(t) {
                        var e = [i(t), a(t)], r = u(e) || [null, null];
                        o.set(t, n.x, r[0]), o.set(t, n.y, r[1])
                    }

                    s.debug(t, ["geo"]);
                    var n = this._output, i = this.param("lon").accessor, a = this.param("lat").accessor, u = r.d3Projection.call(this);
                    return t.add.forEach(e), this.reevaluate(t) && (t.mod.forEach(e), t.rem.forEach(e)), t.fields[n.x] = 1, t.fields[n.y] = 1, t
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"./Transform": 140, "./screen": 146, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        130: [function (t, e, n) {
            (function (n) {
                function r(t) {
                    return l.prototype.init.call(this, t), l.addParameters(this, u.Parameters), l.addParameters(this, {
                        field: {
                            type: "field",
                            default: null
                        }
                    }), this._output = {path: "layout_path"}, this.mutates(!0)
                }

                var i = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, a = t("datalib"), o = t("vega-dataflow").Tuple, s = t("vega-logging"), u = t("./Geo"), l = t("./Transform"), c = r.prototype = Object.create(l.prototype);
                c.constructor = r, c.transform = function (t) {
                    function e(t) {
                        o.set(t, n.path, c(r(t)))
                    }

                    s.debug(t, ["geopath"]);
                    var n = this._output, r = this.param("field").accessor || a.identity, l = u.d3Projection.call(this), c = i.geo.path().projection(l);
                    return t.add.forEach(e), this.reevaluate(t) && (t.mod.forEach(e), t.rem.forEach(e)), t.fields[n.path] = 1, t
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"./Geo": 129, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        131: [function (t, e, n) {
            (function (n) {
                function r(e) {
                    return l.prototype.init.call(this, e), u.addParameters(this, {
                        sort: {
                            type: "array<field>",
                            default: null
                        },
                        children: {type: "field", default: "children"},
                        parent: {type: "field", default: "parent"},
                        field: {type: "value", default: null},
                        mode: {type: "value", default: "tidy"},
                        size: {type: "array<value>", default: t("./screen").size},
                        nodesize: {type: "array<value>", default: null},
                        orient: {type: "value", default: "cartesian"}
                    }), this._mode = null, this._output = {
                        x: "layout_x",
                        y: "layout_y",
                        width: "layout_width",
                        height: "layout_height",
                        depth: "layout_depth"
                    }, this.mutates(!0)
                }

                var i = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, a = t("datalib"), o = t("vega-dataflow").Tuple, s = t("vega-logging"), u = t("./Transform"), l = t("./BatchTransform"), c = "partition", d = {
                    cartesian: function (t, e) {
                        return t.parent === e.parent ? 1 : 2
                    }, radial: function (t, e) {
                        return (t.parent === e.parent ? 1 : 2) / t.depth
                    }
                }, f = r.prototype = Object.create(l.prototype);
                f.constructor = r, f.batchTransform = function (t, e) {
                    s.debug(t, ["hierarchy layout"]);
                    var n = this._layout, r = this._output, u = this.param("mode"), l = this.param("sort"), f = this.param("nodesize"), h = this.param("parent").accessor, p = e.filter(function (t) {
                        return null === h(t)
                    })[0];
                    return u !== this._mode && (this._mode = u, "tidy" === u && (u = "tree"), n = this._layout = i.layout[u]()), t.fields[r.x] = 1, t.fields[r.y] = 1, t.fields[r.depth] = 1, u === c ? (t.fields[r.width] = 1, t.fields[r.height] = 1, n.value(this.param("field").accessor)) : n.separation(d[this.param("orient")]), f.length && u !== c ? n.nodeSize(f) : n.size(this.param("size")), n.sort(l.field.length ? a.comparator(l.field) : null).children(this.param("children").accessor).nodes(p), e.forEach(function (t) {
                        o.set(t, r.x, t.x), o.set(t, r.y, t.y), o.set(t, r.depth, t.depth), u === c && (o.set(t, r.width, t.dx), o.set(t, r.height, t.dy))
                    }), t
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./BatchTransform": 119,
            "./Transform": 140,
            "./screen": 146,
            datalib: 26,
            "vega-dataflow": 41,
            "vega-logging": 48
        }],
        132: [function (t, e, n) {
            function r(t) {
                return c.prototype.init.call(this, t), l.addParameters(this, {
                    groupby: {type: "array<field>"},
                    orderby: {type: "array<field>"},
                    field: {type: "field"},
                    method: {type: "value", default: "value"},
                    value: {type: "value", default: 0}
                }), this.router(!0).produces(!0)
            }

            function i(t, e, n, r) {
                var i, a = {_imputed: !0};
                for (i = 0; i < e.length; ++i)a[t[i]] = e[i];
                for (i = 0; i < r.length; ++i)a[n[i]] = r[i];
                return u.ingest(a)
            }

            function a(t, e, n) {
                var r, i, a, s, u, l, c, d, f = [], h = function (t) {
                    return t(a)
                }, p = function (t) {
                    return a = t, n.map(h)
                };
                for (l = f.domain = o.unique(t, p), d = l.length, c = l.reduce(function (t, e, n) {
                    return t[e] = {value: e, index: n}, t
                }, {}), r = {}, i = 0; i < t.length; ++i)a = t[i], s = null == e ? [] : e.map(h), u = r[s] || (f.push(r[s] = Array(d)), r[s].values = s, r[s]), u[c[p(a)].index] = a;
                return f
            }

            var o = t("datalib"), s = t("vega-logging"), u = t("vega-dataflow").Tuple, l = t("./Transform"), c = t("./BatchTransform"), d = r.prototype = Object.create(c.prototype);
            d.constructor = r, d.batchTransform = function (t, e) {
                function n(t) {
                    return null == t ? null : y(t)
                }

                s.debug(t, ["imputing"]);
                var r, u, l, c, d, f, h = this.param("groupby"), p = this.param("orderby"), g = this.param("method"), m = this.param("value"), v = this.param("field"), y = v.accessor, _ = v.field, b = this._imputed || [], x = [], w = a(e, h.accessor, p.accessor), k = w.domain;
                for (l = 0, d = w.length; l < d; ++l)for (r = w[l], "value" !== g && (m = o[g](r, n)), u = 0, c = r.length; u < c; ++u)null == r[u] && (f = i(h.field, r.values, p.field, k[u]), f[_] = m, x.push(f));
                for (u = 0, c = x.length; u < c; ++u)t.add.push(x[u]);
                for (u = 0, c = b.length; u < c; ++u)t.rem.push(b[u]);
                return this._imputed = x, t
            }, e.exports = r
        }, {"./BatchTransform": 119, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        133: [function (t, e, n) {
            function r(t) {
                return p.prototype.init.call(this, t), p.addParameters(this, {
                    sourceX: {
                        type: "field",
                        default: "_source.layout_x"
                    },
                    sourceY: {type: "field", default: "_source.layout_y"},
                    targetX: {type: "field", default: "_target.layout_x"},
                    targetY: {type: "field", default: "_target.layout_y"},
                    tension: {type: "value", default: .2},
                    shape: {type: "value", default: "line"}
                }), this._output = {path: "layout_path"}, this.mutates(!0)
            }

            function i(t, e, n, r) {
                return "M" + t + "," + e + "L" + n + "," + r
            }

            function a(t, e, n, r, i) {
                var a = n - t, o = r - e, s = i * (a + o), u = i * (o - a);
                return "M" + t + "," + e + "C" + (t + s) + "," + (e + u) + " " + (n + u) + "," + (r - s) + " " + n + "," + r
            }

            function o(t, e, n, r) {
                return "M" + t + "," + e + "V" + r + "H" + n
            }

            function s(t, e, n, r) {
                return "M" + t + "," + e + "H" + n + "V" + r
            }

            function u(t, e, n, r) {
                var i = Math.cos(t), a = Math.sin(t), o = Math.cos(n), s = Math.sin(n), u = Math.abs(n - t) > Math.PI ? n <= t : n > t;
                return "M" + e * i + "," + e * a + "A" + e + "," + e + " 0 0," + (u ? 1 : 0) + " " + e * o + "," + e * s + "L" + r * o + "," + r * s
            }

            function l(t, e, n, r) {
                var i = (t + n) / 2;
                return "M" + t + "," + e + "C" + i + "," + e + " " + i + "," + r + " " + n + "," + r
            }

            function c(t, e, n, r) {
                var i = (e + r) / 2;
                return "M" + t + "," + e + "C" + t + "," + i + " " + n + "," + i + " " + n + "," + r
            }

            function d(t, e, n, r) {
                var i = Math.cos(t), a = Math.sin(t), o = Math.cos(n), s = Math.sin(n), u = (e + r) / 2;
                return "M" + e * i + "," + e * a + "C" + u * i + "," + u * a + " " + u * o + "," + u * s + " " + r * o + "," + r * s
            }

            var f = t("vega-dataflow").Tuple, h = t("vega-logging"), p = t("./Transform"), g = r.prototype = Object.create(p.prototype);
            g.constructor = r;
            var m = {line: i, curve: a, cornerX: o, cornerY: s, cornerR: u, diagonalX: l, diagonalY: c, diagonalR: d};
            g.transform = function (t) {
                function e(t) {
                    var e = r(i(t), a(t), o(t), s(t), u);
                    f.set(t, n.path, e)
                }

                h.debug(t, ["linkpath"]);
                var n = this._output, r = m[this.param("shape")] || m.line, i = this.param("sourceX").accessor, a = this.param("sourceY").accessor, o = this.param("targetX").accessor, s = this.param("targetY").accessor, u = this.param("tension");
                return t.add.forEach(e), this.reevaluate(t) && (t.mod.forEach(e), t.rem.forEach(e)), t.fields[n.path] = 1, t
            }, e.exports = r
        }, {"./Transform": 140, "vega-dataflow": 41, "vega-logging": 48}],
        134: [function (t, e, n) {
            function r(t) {
                return o.prototype.init.call(this, t), o.addParameters(this, {
                    on: {type: "data"},
                    onKey: {type: "field", default: null},
                    as: {type: "array<value>"},
                    keys: {type: "array<field>", default: ["data"]},
                    default: {type: "value"}
                }), this.mutates(!0)
            }

            var i = t("vega-dataflow").Tuple, a = t("vega-logging"), o = t("./Transform"), s = r.prototype = Object.create(o.prototype);
            s.constructor = r, s.transform = function (t, e) {
                function n(t) {
                    for (var e = 0; e < h.length; ++e) {
                        var n = m[h[e](t)] || g;
                        i.set(t, p[e], n)
                    }
                }

                a.debug(t, ["lookup"]);
                var r, o, s = this.param("on"), u = s.source.last(), l = s.source.values(), c = this.param("onKey"), d = c.field, f = this.param("keys"), h = f.accessor, p = this.param("as"), g = this.param("default"), m = this._lut;
                if (null == m || this._on !== d || d && u.fields[d] || u.add.length || u.rem.length) {
                    if (d)for (c = c.accessor, m = {}, r = 0; r < l.length; ++r)m[c(o = l[r])] = o; else m = l;
                    this._lut = m, this._on = d, e = !0
                }
                t.add.forEach(n);
                var v = f.field.some(function (e) {
                    return t.fields[e]
                });
                return (v || e) && (t.mod.forEach(n), t.rem.forEach(n)), p.forEach(function (e) {
                    t.fields[e] = 1
                }), t
            }, e.exports = r
        }, {"./Transform": 140, "vega-dataflow": 41, "vega-logging": 48}],
        135: [function (t, e, n) {
            function r(t, e, n) {
                this._name = t, this._type = e, this._transform = n, this._value = [], this._accessors = [], this._resolution = !1, this._signals = []
            }

            function i() {
                var t = s.test(this._type), e = u.test(this._type), n = l.test(this._type), r = t ? this._value : this._value[0], i = t ? this._accessors : this._accessors[0];
                return !a.isValid(i) && d.test(this._type) ? r : e ? {name: r, source: i} : n ? {
                    field: r,
                    accessor: i
                } : r
            }

            var a = t("datalib"), o = t("vega-dataflow").Dependencies, s = /array/i, u = /data/i, l = /field/i, c = /expr/i, d = /value/i, f = r.prototype;
            f.get = function () {
                var t, e, n, r, o, s = this._transform._graph, c = u.test(this._type), d = l.test(this._type);
                if (!this._resolution)return i.call(this);
                if (c)return this._accessors = this._value.map(function (t) {
                    return s.data(t)
                }), i.call(this);
                for (t = 0, e = this._signals.length; t < e; ++t)n = this._signals[t], r = n.index, o = n.value(s), d && (this._accessors[r] = this._value[r] != o ? a.accessor(o) : this._accessors[r]), this._value[r] = o;
                return i.call(this)
            }, f.set = function (t) {
                var e = this, n = e._transform._graph, r = c.test(this._type), i = u.test(this._type), s = l.test(this._type);
                return e._signals = [], this._value = a.array(t).map(function (t, u) {
                    var l;
                    return a.isString(t) ? r ? (l = n.expr(t), e._transform.dependency(o.FIELDS, l.fields), e._transform.dependency(o.SIGNALS, l.globals), e._transform.dependency(o.DATA, l.dataSources), l.fn) : (s ? (e._accessors[u] = a.accessor(t), e._transform.dependency(o.FIELDS, a.field(t))) : i && (e._resolution = !0, e._transform.dependency(o.DATA, t)), t) : void 0 !== t.value ? t.value : void 0 !== t.field ? (e._accessors[u] = a.accessor(t.field), e._transform.dependency(o.FIELDS, a.field(t.field)), t.field) : void 0 !== t.signal ? (e._resolution = !0, e._transform.dependency(o.SIGNALS, a.field(t.signal)[0]), e._signals.push({
                        index: u,
                        value: function (e) {
                            return e.signalRef(t.signal)
                        }
                    }), t.signal) : void 0 !== t.expr ? (e._resolution = !0, l = n.expr(t.expr), e._transform.dependency(o.SIGNALS, l.globals), e._signals.push({
                        index: u,
                        value: function () {
                            return l.fn()
                        }
                    }), t.expr) : t
                }), e._transform
            }, e.exports = r
        }, {datalib: 26, "vega-dataflow": 41}],
        136: [function (t, e, n) {
            function r(t) {
                return l.prototype.init.call(this, t), u.addParameters(this, {
                    field: {type: "field", default: null},
                    startAngle: {type: "value", default: 0},
                    endAngle: {type: "value", default: 2 * Math.PI},
                    sort: {type: "value", default: !1}
                }), this._output = {start: "layout_start", end: "layout_end", mid: "layout_mid"}, this.mutates(!0)
            }

            function i() {
                return 1
            }

            var a = t("datalib"), o = t("vega-dataflow").Tuple, s = t("vega-logging"), u = t("./Transform"), l = t("./BatchTransform"), c = r.prototype = Object.create(l.prototype);
            c.constructor = r, c.batchTransform = function (t, e) {
                s.debug(t, ["pie"]);
                var n, r, u, l = this._output, c = this.param("field").accessor || i, d = this.param("startAngle"), f = this.param("endAngle"), h = this.param("sort"), p = e.map(c), g = d, m = (f - d) / a.sum(p), v = a.range(e.length);
                for (h && v.sort(function (t, e) {
                    return p[t] - p[e]
                }), n = 0; n < v.length; ++n)r = e[v[n]], u = p[v[n]], o.set(r, l.start, g), o.set(r, l.mid, g + .5 * u * m), o.set(r, l.end, g += u * m);
                return t.fields[l.start] = 1, t.fields[l.end] = 1, t.fields[l.mid] = 1, t
            }, e.exports = r
        }, {"./BatchTransform": 119, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        137: [function (t, e, n) {
            function r(t) {
                return s.prototype.init.call(this, t), o.addParameters(this, {
                    field: {type: "field", default: null},
                    normalize: {type: "value", default: !1}
                }), this._output = {rank: "rank"}, this.mutates(!0)
            }

            var i = t("vega-dataflow").Tuple, a = t("vega-logging"), o = t("./Transform"), s = t("./BatchTransform"), u = r.prototype = Object.create(s.prototype);
            u.constructor = r, u.batchTransform = function (t, e) {
                a.debug(t, ["rank"]);
                var n, r, o, s, u = this._output.rank, l = this.param("normalize"), c = this.param("field").accessor, d = {}, f = e.length;
                if (c)for (n = 0, r = 0; n < f; ++n)o = e[n], d[s = c(o)] = d[s] || (d[s] = ++r);
                for (n = 0; n < f && (o = e[n]); ++n)c && (s = c(o)) ? i.set(o, u, l ? d[s] / r : d[s]) : i.set(o, u, l ? (n + 1) / f : n + 1);
                return t.fields[u] = 1, t
            }, e.exports = r
        }, {"./BatchTransform": 119, "./Transform": 140, "vega-dataflow": 41, "vega-logging": 48}],
        138: [function (t, e, n) {
            function r(t) {
                o.prototype.init.call(this, t), o.addParameters(this, {by: {type: "array<field>"}}), this.router(!0)
            }

            var i = t("datalib"), a = t("vega-logging"), o = t("./Transform"), s = r.prototype = Object.create(o.prototype);
            s.constructor = r, s.transform = function (t) {
                return a.debug(t, ["sorting"]), (t.add.length || t.mod.length || t.rem.length) && (t.sort = i.comparator(this.param("by").field)), t
            }, e.exports = r
        }, {"./Transform": 140, datalib: 26, "vega-logging": 48}],
        139: [function (t, e, n) {
            function r(t) {
                return l.prototype.init.call(this, t), u.addParameters(this, {
                    groupby: {type: "array<field>"},
                    sortby: {type: "array<field>"},
                    field: {type: "field"},
                    offset: {type: "value", default: "zero"}
                }), this._output = {start: "layout_start", end: "layout_end", mid: "layout_mid"}, this.mutates(!0)
            }

            function i(t, e, n, r) {
                var i, a, o, s, u, l, c, d = [], f = function (t) {
                    return t(o)
                };
                if (null == e)d.push(t.slice()); else for (i = {}, a = 0; a < t.length; ++a)o = t[a], s = e.map(f), u = i[s] || (d.push(i[s] = []), i[s]), u.push(o);
                for (s = 0, c = 0; s < d.length; ++s) {
                    for (u = d[s], a = 0, l = 0; a < u.length; ++a)l += r(u[a]);
                    u.sum = l, l > c && (c = l), null != n && u.sort(n)
                }
                return d.max = c, d
            }

            var a = t("datalib"), o = t("vega-dataflow").Tuple, s = t("vega-logging"), u = t("./Transform"), l = t("./BatchTransform"), c = r.prototype = Object.create(l.prototype);
            c.constructor = r, c.batchTransform = function (t, e) {
                s.debug(t, ["stacking"]);
                for (var n = this.param("groupby").accessor, r = a.comparator(this.param("sortby").field), u = this.param("field").accessor, l = this.param("offset"), c = this._output, d = i(e, n, r, u), f = 0, h = d.max; f < d.length; ++f) {
                    var p, g, m, v = d[f], y = v.sum, _ = "center" === l ? (h - y) / 2 : 0, b = "normalize" === l ? 1 / y : 1, x = _, w = 0;
                    for (p = 0; p < v.length; ++p)g = v[p], m = x, w += u(g), x = b * w + _, o.set(g, c.start, m), o.set(g, c.end, x), o.set(g, c.mid, .5 * (m + x))
                }
                return t.fields[c.start] = 1, t.fields[c.end] = 1, t.fields[c.mid] = 1, t
            }, e.exports = r
        }, {"./BatchTransform": 119, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        140: [function (t, e, n) {
            function r(t) {
                t && a.init.call(this, t)
            }

            var i = t("vega-dataflow"), a = i.Node.prototype, o = i.Dependencies, s = t("./Parameter");
            r.addParameters = function (t, e) {
                t._parameters = t._parameters || {};
                for (var n in e) {
                    var r = e[n], i = new s(n, r.type, t);
                    t._parameters[n] = i, "custom" === r.type && (r.set && (i.set = r.set.bind(i)), r.get && (i.get = r.get.bind(i))), r.hasOwnProperty("default") && i.set(r.default)
                }
            };
            var u = r.prototype = Object.create(a);
            u.constructor = r, u.param = function (t, e) {
                var n = this._parameters[t];
                return void 0 === n ? this : 1 === arguments.length ? n.get() : n.set(e)
            }, u.transform = function (t) {
                return t
            }, u.evaluate = function (t) {
                var e = this._stamp < t.stamp && this.dependency(o.SIGNALS).reduce(function (e, n) {
                        return e += t.signals[n] ? 1 : 0
                    }, 0);
                return this.transform(t, e)
            }, u.output = function (t) {
                for (var e in this._output)void 0 !== t[e] && (this._output[e] = t[e]);
                return this
            }, e.exports = r
        }, {"./Parameter": 135, "vega-dataflow": 41}],
        141: [function (t, e, n) {
            function r(t) {
                return u.prototype.init.call(this, t), s.addParameters(this, {groupby: {type: "array<field>"}}), this._output = {
                    children: "children",
                    parent: "parent"
                }, this.router(!0).produces(!0)
            }

            var i = t("datalib"), a = t("vega-dataflow").Tuple, o = t("vega-logging"), s = t("./Transform"), u = t("./BatchTransform"), l = r.prototype = Object.create(u.prototype);
            l.constructor = r, l.batchTransform = function (t, e) {
                function n(t, e, r) {
                    var i = f[t].execute(r);
                    e[l] = i, i.forEach(function (r) {
                        r[c] = e, p.push(a.ingest(r)), t + 1 < u.length ? n(t + 1, r, r[l]) : r[l].forEach(function (t) {
                            t[c] = r
                        })
                    })
                }

                o.debug(t, ["treeifying"]);
                var r, s, u = this.param("groupby").field, l = this._output.children, c = this._output.parent, d = [{
                    name: "*",
                    ops: ["values"],
                    as: [l]
                }], f = u.map(function (t) {
                    return i.groupby(t).summarize(d)
                }), h = this._internal || [], p = [], g = a.ingest({});
                for (g[c] = null, p.push(g), n(0, g, e), r = 0, s = p.length; r < s; ++r)t.add.push(p[r]);
                for (r = 0, s = h.length; r < s; ++r)t.rem.push(h[r]);
                return this._internal = p, t
            }, e.exports = r
        }, {"./BatchTransform": 119, "./Transform": 140, datalib: 26, "vega-dataflow": 41, "vega-logging": 48}],
        142: [function (t, e, n) {
            (function (n) {
                function r(e) {
                    return l.prototype.init.call(this, e), u.addParameters(this, {
                        sort: {
                            type: "array<field>",
                            default: ["-value"]
                        },
                        children: {type: "field", default: "children"},
                        parent: {type: "field", default: "parent"},
                        field: {type: "field", default: "value"},
                        size: {type: "array<value>", default: t("./screen").size},
                        round: {type: "value", default: !0},
                        sticky: {type: "value", default: !1},
                        ratio: {type: "value", default: c},
                        padding: {type: "value", default: null},
                        mode: {type: "value", default: "squarify"}
                    }), this._layout = i.layout.treemap(), this._output = {
                        x: "layout_x",
                        y: "layout_y",
                        width: "layout_width",
                        height: "layout_height",
                        depth: "layout_depth"
                    }, this.mutates(!0)
                }

                var i = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, a = t("datalib"), o = t("vega-dataflow").Tuple, s = t("vega-logging"), u = t("./Transform"), l = t("./BatchTransform"), c = .5 * (1 + Math.sqrt(5)), d = r.prototype = Object.create(l.prototype);
                d.constructor = r, d.batchTransform = function (t, e) {
                    s.debug(t, ["treemap"]);
                    var n = this._layout, r = this._output, i = this.param("sticky"), u = this.param("parent").accessor, l = e.filter(function (t) {
                        return null === u(t)
                    })[0];
                    return n.sticky() !== i && n.sticky(i), n.sort(a.comparator(this.param("sort").field)).children(this.param("children").accessor).value(this.param("field").accessor).size(this.param("size")).round(this.param("round")).ratio(this.param("ratio")).padding(this.param("padding")).mode(this.param("mode")).nodes(l), e.forEach(function (t) {
                        o.set(t, r.x, t.x), o.set(t, r.y, t.y), o.set(t, r.width, t.dx), o.set(t, r.height, t.dy), o.set(t, r.depth, t.depth)
                    }), t.fields[r.x] = 1, t.fields[r.y] = 1, t.fields[r.width] = 1, t.fields[r.height] = 1, t.fields[r.depth] = 1, t
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./BatchTransform": 119,
            "./Transform": 140,
            "./screen": 146,
            datalib: 26,
            "vega-dataflow": 41,
            "vega-logging": 48
        }],
        143: [function (t, e, n) {
            (function (n) {
                function r(e) {
                    return u.prototype.init.call(this, e), s.addParameters(this, {
                        clipExtent: {
                            type: "array<value>",
                            default: t("./screen").extent
                        }, x: {type: "field", default: "layout_x"}, y: {type: "field", default: "layout_y"}
                    }), this._layout = i.geom.voronoi(), this._output = {path: "layout_path"}, this.mutates(!0)
                }

                var i = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, a = t("vega-dataflow/src/Tuple"), o = t("vega-logging"), s = t("./Transform"), u = t("./BatchTransform"), l = r.prototype = Object.create(u.prototype);
                l.constructor = r, l.batchTransform = function (t, e) {
                    o.debug(t, ["voronoi"]);
                    for (var n = this._output.path, r = this._layout.clipExtent(this.param("clipExtent")).x(this.param("x").accessor).y(this.param("y").accessor)(e), i = 0; i < e.length; ++i)r[i] && a.set(e[i], n, "M" + r[i].join("L") + "Z");
                    return t.fields[n] = 1, t
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./BatchTransform": 119,
            "./Transform": 140,
            "./screen": 146,
            "vega-dataflow/src/Tuple": 40,
            "vega-logging": 48
        }],
        144: [function (t, e, n) {
            (function (n) {
                function r(e) {
                    return h.prototype.init.call(this, e), f.addParameters(this, {
                        size: {
                            type: "array<value>",
                            default: t("./screen").size
                        },
                        text: {type: "field", default: "data"},
                        rotate: {type: "field|value", default: 0},
                        font: {type: "field|value", default: {value: "sans-serif"}},
                        fontSize: {type: "field|value", default: 14},
                        fontStyle: {type: "field|value", default: {value: "normal"}},
                        fontWeight: {type: "field|value", default: {value: "normal"}},
                        fontScale: {type: "array<value>", default: [10, 50]},
                        padding: {type: "value", default: 1},
                        spiral: {type: "value", default: "archimedean"}
                    }), this._layout = u().canvas(l.instance), this._output = {
                        x: "layout_x",
                        y: "layout_y",
                        font: "layout_font",
                        fontSize: "layout_fontSize",
                        fontStyle: "layout_fontStyle",
                        fontWeight: "layout_fontWeight",
                        rotate: "layout_rotate"
                    }, this.mutates(!0)
                }

                function i(t) {
                    return t && t.accessor || t
                }

                function a(t) {
                    var e = Object.create(t);
                    return e._tuple = t, e
                }

                var o = t("datalib"), s = "undefined" != typeof window ? window.d3 : "undefined" != typeof n ? n.d3 : null, u = "undefined" != typeof window ? window.d3.layout.cloud : "undefined" != typeof n ? n.d3.layout.cloud : null, l = t("vega-scenegraph").canvas, c = t("vega-dataflow/src/Tuple"), d = t("vega-logging"), f = t("./Transform"), h = t("./BatchTransform"), p = r.prototype = Object.create(h.prototype);
                p.constructor = r, p.batchTransform = function (t, e) {
                    d.debug(t, ["wordcloud"]);
                    var n, r, u = this._layout, l = this._output, f = this.param("fontSize"), h = f.accessor && this.param("fontScale");
                    f = f.accessor || s.functor(f), h.length && (r = s.scale.sqrt().domain(o.extent(e, n = f)).range(h), f = function (t) {
                        return r(n(t))
                    }), u.size(this.param("size")).text(i(this.param("text"))).padding(this.param("padding")).spiral(this.param("spiral")).rotate(i(this.param("rotate"))).font(i(this.param("font"))).fontStyle(i(this.param("fontStyle"))).fontWeight(i(this.param("fontWeight"))).fontSize(f).words(e.map(a)).on("end", function (t) {
                        var e, n, r, i, a = u.size(), o = a[0] >> 1, s = a[1] >> 1;
                        for (r = 0, i = t.length; r < i; ++r)e = t[r], n = e._tuple, c.set(n, l.x, e.x + o), c.set(n, l.y, e.y + s), c.set(n, l.font, e.font), c.set(n, l.fontSize, e.size), c.set(n, l.fontStyle, e.style), c.set(n, l.fontWeight, e.weight), c.set(n, l.rotate, e.rotate)
                    }).start();
                    for (var p in l)t.fields[l[p]] = 1;
                    return t
                }, e.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./BatchTransform": 119,
            "./Transform": 140,
            "./screen": 146,
            datalib: 26,
            "vega-dataflow/src/Tuple": 40,
            "vega-logging": 48,
            "vega-scenegraph": 49
        }],
        145: [function (t, e, n) {
            e.exports = {
                aggregate: t("./Aggregate"),
                bin: t("./Bin"),
                cross: t("./Cross"),
                countpattern: t("./CountPattern"),
                linkpath: t("./LinkPath"),
                facet: t("./Facet"),
                filter: t("./Filter"),
                fold: t("./Fold"),
                force: t("./Force"),
                formula: t("./Formula"),
                geo: t("./Geo"),
                geopath: t("./GeoPath"),
                hierarchy: t("./Hierarchy"),
                impute: t("./Impute"),
                lookup: t("./Lookup"),
                pie: t("./Pie"),
                rank: t("./Rank"),
                sort: t("./Sort"),
                stack: t("./Stack"),
                treeify: t("./Treeify"),
                treemap: t("./Treemap"),
                voronoi: t("./Voronoi"),
                wordcloud: t("./Wordcloud")
            }
        }, {
            "./Aggregate": 118,
            "./Bin": 120,
            "./CountPattern": 121,
            "./Cross": 122,
            "./Facet": 123,
            "./Filter": 125,
            "./Fold": 126,
            "./Force": 127,
            "./Formula": 128,
            "./Geo": 129,
            "./GeoPath": 130,
            "./Hierarchy": 131,
            "./Impute": 132,
            "./LinkPath": 133,
            "./Lookup": 134,
            "./Pie": 136,
            "./Rank": 137,
            "./Sort": 138,
            "./Stack": 139,
            "./Treeify": 141,
            "./Treemap": 142,
            "./Voronoi": 143,
            "./Wordcloud": 144
        }],
        146: [function (t, e, n) {
            e.exports = {
                size: [{signal: "width"}, {signal: "height"}],
                mid: [{expr: "width/2"}, {expr: "height/2"}],
                extent: [{expr: "[-padding.left, -padding.top]"}, {expr: "[width+padding.right, height+padding.bottom]"}]
            }
        }, {}],
        147: [function (t, e, n) {
            function r(t, e, n, r) {
                var a = n || i(t);
                return o(t, e, a, r)
            }

            function i(t) {
                switch (t.type) {
                    case u:
                        return u;
                    case l:
                        return l;
                    case d:
                        return c;
                    default:
                        return f
                }
            }

            function a(t, e, n, r) {
                function i(t) {
                    return (e[0] < 0 ? -Math.log(t > 0 ? 0 : -t) : Math.log(t < 0 ? 0 : t)) / Math.log(s)
                }

                function a(t) {
                    return e[0] < 0 ? -Math.pow(s, -t) : Math.pow(s, t)
                }

                if (null == n)return r;
                var o, s = t.base(), u = Math.min(s, t.ticks().length / n), l = e[0] > 0 ? (o = 1e-12, Math.ceil) : (o = -1e-12, Math.floor);
                return function (t) {
                    return a(l(i(t) + o)) / t >= u ? r(t) : ""
                }
            }

            function o(t, e, n, r) {
                var i, o = s.format, c = "log" === t.type;
                switch (n) {
                    case f:
                        return i = t.domain(), c ? a(t, i, e, o.auto.number(r || null)) : o.auto.linear(i, e, r || null);
                    case u:
                        return (r ? o : o.auto).time(r);
                    case l:
                        return (r ? o : o.auto).utc(r);
                    default:
                        return String
                }
            }

            var s = t("datalib"), u = "time", l = "utc", c = "string", d = "ordinal", f = "number";
            e.exports = {getTickFormat: r}
        }, {datalib: 26}],
        148: [function (t, e, n) {
            var r = t("datalib"), i = {};
            r.extend(i, t("./format")), e.exports = r.extend(i, r)
        }, {"./format": 147, datalib: 26}],
        149: [function (t, e, n) {
            e.exports = function (t, e, n, r) {
                return void 0 !== t[n] ? t[n] : void 0 !== e && void 0 !== e[n] ? e[n] : void 0 !== r ? r : void 0
            }
        }, {}]
    }, {}, [1])(1)
});
