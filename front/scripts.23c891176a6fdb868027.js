!(function (e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            'jQuery requires a window with a document'
                        );
                    return t(e);
                })
        : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
    'use strict';
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        h = c.hasOwnProperty,
        d = h.toString,
        f = d.call(Object),
        p = {},
        m = function (e) {
            return 'function' == typeof e && 'number' != typeof e.nodeType;
        },
        g = function (e) {
            return null != e && e === e.window;
        },
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(e, t, n) {
        var r,
            o,
            s = (n = n || i).createElement('script');
        if (((s.text = e), t))
            for (r in v)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    s.setAttribute(r, o);
        n.head.appendChild(s).parentNode.removeChild(s);
    }
    function b(e) {
        return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
            ? c[u.call(e)] || 'object'
            : typeof e;
    }
    var _ = function (e, t) {
            return new _.fn.init(e, t);
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function x(e) {
        var t = !!e && 'length' in e && e.length,
            n = b(e);
        return (
            !m(e) &&
            !g(e) &&
            ('array' === n ||
                0 === t ||
                ('number' == typeof t && t > 0 && t - 1 in e))
        );
    }
    (_.fn = _.prototype =
        {
            jquery: '3.4.1',
            constructor: _,
            length: 0,
            toArray: function () {
                return o.call(this);
            },
            get: function (e) {
                return null == e
                    ? o.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                var t = _.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return _.each(this, e);
            },
            map: function (e) {
                return this.pushStack(
                    _.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(o.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: a,
            sort: n.sort,
            splice: n.splice,
        }),
        (_.extend = _.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    i,
                    r,
                    o,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for (
                    'boolean' == typeof s &&
                        ((c = s), (s = arguments[a] || {}), a++),
                        'object' == typeof s || m(s) || (s = {}),
                        a === l && ((s = this), a--);
                    a < l;
                    a++
                )
                    if (null != (e = arguments[a]))
                        for (t in e)
                            (i = e[t]),
                                '__proto__' !== t &&
                                    s !== i &&
                                    (c &&
                                    i &&
                                    (_.isPlainObject(i) ||
                                        (r = Array.isArray(i)))
                                        ? ((n = s[t]),
                                          (o =
                                              r && !Array.isArray(n)
                                                  ? []
                                                  : r || _.isPlainObject(n)
                                                  ? n
                                                  : {}),
                                          (r = !1),
                                          (s[t] = _.extend(c, o, i)))
                                        : void 0 !== i && (s[t] = i));
                return s;
            }),
        _.extend({
            expando: 'jQuery' + ('3.4.1' + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(
                    !e ||
                    '[object Object]' !== u.call(e) ||
                    ((t = r(e)) &&
                        ('function' !=
                            typeof (n =
                                h.call(t, 'constructor') && t.constructor) ||
                            d.call(n) !== f))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t) {
                y(e, { nonce: t && t.nonce });
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (x(e))
                    for (
                        n = e.length;
                        i < n && !1 !== t.call(e[i], i, e[i]);
                        i++
                    );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? '' : (e + '').replace(w, '');
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (x(Object(e))
                            ? _.merge(n, 'string' == typeof e ? [e] : e)
                            : a.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                    !t(e[r], r) !== s && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    r,
                    o = 0,
                    a = [];
                if (x(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && a.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                return s.apply([], a);
            },
            guid: 1,
            support: p,
        }),
        'function' == typeof Symbol &&
            (_.fn[Symbol.iterator] = n[Symbol.iterator]),
        _.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' '
            ),
            function (e, t) {
                c['[object ' + t + ']'] = t.toLowerCase();
            }
        );
    var E = (function (e) {
        var t,
            n,
            i,
            r,
            o,
            s,
            a,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            m,
            g,
            v,
            y,
            b,
            _ = 'sizzle' + 1 * new Date(),
            w = e.document,
            x = 0,
            E = 0,
            S = le(),
            T = le(),
            C = le(),
            A = le(),
            D = function (e, t) {
                return e === t && (h = !0), 0;
            },
            O = {}.hasOwnProperty,
            k = [],
            I = k.pop,
            N = k.push,
            M = k.push,
            L = k.slice,
            P = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            H =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            R = '[\\x20\\t\\r\\n\\f]',
            j = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            $ =
                '\\[' +
                R +
                '*(' +
                j +
                ')(?:' +
                R +
                '*([*^$|!~]?=)' +
                R +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                j +
                '))|)' +
                R +
                '*\\]',
            Y =
                ':(' +
                j +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                $ +
                ')*)|.*)\\)|)',
            W = new RegExp(R + '+', 'g'),
            F = new RegExp(
                '^' + R + '+|((?:^|[^\\\\])(?:\\\\.)*)' + R + '+$',
                'g'
            ),
            U = new RegExp('^' + R + '*,' + R + '*'),
            V = new RegExp('^' + R + '*([>+~]|' + R + ')' + R + '*'),
            B = new RegExp(R + '|>'),
            q = new RegExp(Y),
            G = new RegExp('^' + j + '$'),
            z = {
                ID: new RegExp('^#(' + j + ')'),
                CLASS: new RegExp('^\\.(' + j + ')'),
                TAG: new RegExp('^(' + j + '|[*])'),
                ATTR: new RegExp('^' + $),
                PSEUDO: new RegExp('^' + Y),
                CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                        R +
                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                        R +
                        '*(?:([+-]|)' +
                        R +
                        '*(\\d+)|))' +
                        R +
                        '*\\)|)',
                    'i'
                ),
                bool: new RegExp('^(?:' + H + ')$', 'i'),
                needsContext: new RegExp(
                    '^' +
                        R +
                        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                        R +
                        '*((?:-\\d)?\\d*)' +
                        R +
                        '*\\)|)(?=[^-]|$)',
                    'i'
                ),
            },
            X = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
                '\\\\([\\da-f]{1,6}' + R + '?|(' + R + ')|.)',
                'ig'
            ),
            ne = function (e, t, n) {
                var i = '0x' + t - 65536;
                return i != i || n
                    ? t
                    : i < 0
                    ? String.fromCharCode(i + 65536)
                    : String.fromCharCode(
                          (i >> 10) | 55296,
                          (1023 & i) | 56320
                      );
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
                return t
                    ? '\0' === e
                        ? '\ufffd'
                        : e.slice(0, -1) +
                          '\\' +
                          e.charCodeAt(e.length - 1).toString(16) +
                          ' '
                    : '\\' + e;
            },
            oe = function () {
                d();
            },
            se = _e(
                function (e) {
                    return (
                        !0 === e.disabled &&
                        'fieldset' === e.nodeName.toLowerCase()
                    );
                },
                { dir: 'parentNode', next: 'legend' }
            );
        try {
            M.apply((k = L.call(w.childNodes)), w.childNodes);
        } catch (Te) {
            M = {
                apply: k.length
                    ? function (e, t) {
                          N.apply(e, L.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function ae(e, t, i, r) {
            var o,
                a,
                c,
                u,
                h,
                p,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (
                ((i = i || []),
                'string' != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
            )
                return i;
            if (
                !r &&
                ((t ? t.ownerDocument || t : w) !== f && d(t), (t = t || f), m)
            ) {
                if (11 !== x && (h = J.exec(e)))
                    if ((o = h[1])) {
                        if (9 === x) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i;
                        } else if (
                            y &&
                            (c = y.getElementById(o)) &&
                            b(t, c) &&
                            c.id === o
                        )
                            return i.push(c), i;
                    } else {
                        if (h[2])
                            return M.apply(i, t.getElementsByTagName(e)), i;
                        if (
                            (o = h[3]) &&
                            n.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return M.apply(i, t.getElementsByClassName(o)), i;
                    }
                if (
                    n.qsa &&
                    !A[e + ' '] &&
                    (!g || !g.test(e)) &&
                    (1 !== x || 'object' !== t.nodeName.toLowerCase())
                ) {
                    if (((v = e), (y = t), 1 === x && B.test(e))) {
                        for (
                            (u = t.getAttribute('id'))
                                ? (u = u.replace(ie, re))
                                : t.setAttribute('id', (u = _)),
                                a = (p = s(e)).length;
                            a--;

                        )
                            p[a] = '#' + u + ' ' + be(p[a]);
                        (v = p.join(',')),
                            (y = (ee.test(e) && ve(t.parentNode)) || t);
                    }
                    try {
                        return M.apply(i, y.querySelectorAll(v)), i;
                    } catch (E) {
                        A(e, !0);
                    } finally {
                        u === _ && t.removeAttribute('id');
                    }
                }
            }
            return l(e.replace(F, '$1'), t, i, r);
        }
        function le() {
            var e = [];
            return function t(n, r) {
                return (
                    e.push(n + ' ') > i.cacheLength && delete t[e.shift()],
                    (t[n + ' '] = r)
                );
            };
        }
        function ce(e) {
            return (e[_] = !0), e;
        }
        function ue(e) {
            var t = f.createElement('fieldset');
            try {
                return !!e(t);
            } catch (Te) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function he(e, t) {
            for (var n = e.split('|'), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
        }
        function de(e, t) {
            var n = t && e,
                i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return 'input' === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e;
            };
        }
        function me(e) {
            return function (t) {
                return 'form' in t
                    ? t.parentNode && !1 === t.disabled
                        ? 'label' in t
                            ? 'label' in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e ||
                              (t.isDisabled !== !e && se(t) === e)
                        : t.disabled === e
                    : 'label' in t && t.disabled === e;
            };
        }
        function ge(e) {
            return ce(function (t) {
                return (
                    (t = +t),
                    ce(function (n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--; )
                            n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                    })
                );
            });
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = ae.support = {}),
        (o = ae.isXML =
            function (e) {
                var t = (e.ownerDocument || e).documentElement;
                return !X.test(e.namespaceURI || (t && t.nodeName) || 'HTML');
            }),
        (d = ae.setDocument =
            function (e) {
                var t,
                    r,
                    s = e ? e.ownerDocument || e : w;
                return s !== f && 9 === s.nodeType && s.documentElement
                    ? ((p = (f = s).documentElement),
                      (m = !o(f)),
                      w !== f &&
                          (r = f.defaultView) &&
                          r.top !== r &&
                          (r.addEventListener
                              ? r.addEventListener('unload', oe, !1)
                              : r.attachEvent && r.attachEvent('onunload', oe)),
                      (n.attributes = ue(function (e) {
                          return (
                              (e.className = 'i'), !e.getAttribute('className')
                          );
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                          return (
                              e.appendChild(f.createComment('')),
                              !e.getElementsByTagName('*').length
                          );
                      })),
                      (n.getElementsByClassName = Z.test(
                          f.getElementsByClassName
                      )),
                      (n.getById = ue(function (e) {
                          return (
                              (p.appendChild(e).id = _),
                              !f.getElementsByName ||
                                  !f.getElementsByName(_).length
                          );
                      })),
                      n.getById
                          ? ((i.filter.ID = function (e) {
                                var t = e.replace(te, ne);
                                return function (e) {
                                    return e.getAttribute('id') === t;
                                };
                            }),
                            (i.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && m) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((i.filter.ID = function (e) {
                                var t = e.replace(te, ne);
                                return function (e) {
                                    var n =
                                        void 0 !== e.getAttributeNode &&
                                        e.getAttributeNode('id');
                                    return n && n.value === t;
                                };
                            }),
                            (i.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && m) {
                                    var n,
                                        i,
                                        r,
                                        o = t.getElementById(e);
                                    if (o) {
                                        if (
                                            (n = o.getAttributeNode('id')) &&
                                            n.value === e
                                        )
                                            return [o];
                                        for (
                                            r = t.getElementsByName(e), i = 0;
                                            (o = r[i++]);

                                        )
                                            if (
                                                (n =
                                                    o.getAttributeNode('id')) &&
                                                n.value === e
                                            )
                                                return [o];
                                    }
                                    return [];
                                }
                            })),
                      (i.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return void 0 !== t.getElementsByTagName
                                    ? t.getElementsByTagName(e)
                                    : n.qsa
                                    ? t.querySelectorAll(e)
                                    : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    i = [],
                                    r = 0,
                                    o = t.getElementsByTagName(e);
                                if ('*' === e) {
                                    for (; (n = o[r++]); )
                                        1 === n.nodeType && i.push(n);
                                    return i;
                                }
                                return o;
                            }),
                      (i.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              if (void 0 !== t.getElementsByClassName && m)
                                  return t.getElementsByClassName(e);
                          }),
                      (v = []),
                      (g = []),
                      (n.qsa = Z.test(f.querySelectorAll)) &&
                          (ue(function (e) {
                              (p.appendChild(e).innerHTML =
                                  "<a id='" +
                                  _ +
                                  "'></a><select id='" +
                                  _ +
                                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']")
                                      .length &&
                                      g.push('[*^$]=' + R + '*(?:\'\'|"")'),
                                  e.querySelectorAll('[selected]').length ||
                                      g.push(
                                          '\\[' + R + '*(?:value|' + H + ')'
                                      ),
                                  e.querySelectorAll('[id~=' + _ + '-]')
                                      .length || g.push('~='),
                                  e.querySelectorAll(':checked').length ||
                                      g.push(':checked'),
                                  e.querySelectorAll('a#' + _ + '+*').length ||
                                      g.push('.#.+[+~]');
                          }),
                          ue(function (e) {
                              e.innerHTML =
                                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = f.createElement('input');
                              t.setAttribute('type', 'hidden'),
                                  e.appendChild(t).setAttribute('name', 'D'),
                                  e.querySelectorAll('[name=d]').length &&
                                      g.push('name' + R + '*[*^$|!~]?='),
                                  2 !== e.querySelectorAll(':enabled').length &&
                                      g.push(':enabled', ':disabled'),
                                  (p.appendChild(e).disabled = !0),
                                  2 !==
                                      e.querySelectorAll(':disabled').length &&
                                      g.push(':enabled', ':disabled'),
                                  e.querySelectorAll('*,:x'),
                                  g.push(',.*:');
                          })),
                      (n.matchesSelector = Z.test(
                          (y =
                              p.matches ||
                              p.webkitMatchesSelector ||
                              p.mozMatchesSelector ||
                              p.oMatchesSelector ||
                              p.msMatchesSelector)
                      )) &&
                          ue(function (e) {
                              (n.disconnectedMatch = y.call(e, '*')),
                                  y.call(e, "[s!='']:x"),
                                  v.push('!=', Y);
                          }),
                      (g = g.length && new RegExp(g.join('|'))),
                      (v = v.length && new RegExp(v.join('|'))),
                      (t = Z.test(p.compareDocumentPosition)),
                      (b =
                          t || Z.test(p.contains)
                              ? function (e, t) {
                                    var n =
                                            9 === e.nodeType
                                                ? e.documentElement
                                                : e,
                                        i = t && t.parentNode;
                                    return (
                                        e === i ||
                                        !(
                                            !i ||
                                            1 !== i.nodeType ||
                                            !(n.contains
                                                ? n.contains(i)
                                                : e.compareDocumentPosition &&
                                                  16 &
                                                      e.compareDocumentPosition(
                                                          i
                                                      ))
                                        )
                                    );
                                }
                              : function (e, t) {
                                    if (t)
                                        for (; (t = t.parentNode); )
                                            if (t === e) return !0;
                                    return !1;
                                }),
                      (D = t
                          ? function (e, t) {
                                if (e === t) return (h = !0), 0;
                                var i =
                                    !e.compareDocumentPosition -
                                    !t.compareDocumentPosition;
                                return (
                                    i ||
                                    (1 &
                                        (i =
                                            (e.ownerDocument || e) ===
                                            (t.ownerDocument || t)
                                                ? e.compareDocumentPosition(t)
                                                : 1) ||
                                    (!n.sortDetached &&
                                        t.compareDocumentPosition(e) === i)
                                        ? e === f ||
                                          (e.ownerDocument === w && b(w, e))
                                            ? -1
                                            : t === f ||
                                              (t.ownerDocument === w && b(w, t))
                                            ? 1
                                            : u
                                            ? P(u, e) - P(u, t)
                                            : 0
                                        : 4 & i
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (h = !0), 0;
                                var n,
                                    i = 0,
                                    r = e.parentNode,
                                    o = t.parentNode,
                                    s = [e],
                                    a = [t];
                                if (!r || !o)
                                    return e === f
                                        ? -1
                                        : t === f
                                        ? 1
                                        : r
                                        ? -1
                                        : o
                                        ? 1
                                        : u
                                        ? P(u, e) - P(u, t)
                                        : 0;
                                if (r === o) return de(e, t);
                                for (n = e; (n = n.parentNode); ) s.unshift(n);
                                for (n = t; (n = n.parentNode); ) a.unshift(n);
                                for (; s[i] === a[i]; ) i++;
                                return i
                                    ? de(s[i], a[i])
                                    : s[i] === w
                                    ? -1
                                    : a[i] === w
                                    ? 1
                                    : 0;
                            }),
                      f)
                    : f;
            }),
        (ae.matches = function (e, t) {
            return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
            if (
                ((e.ownerDocument || e) !== f && d(e),
                n.matchesSelector &&
                    m &&
                    !A[t + ' '] &&
                    (!v || !v.test(t)) &&
                    (!g || !g.test(t)))
            )
                try {
                    var i = y.call(e, t);
                    if (
                        i ||
                        n.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return i;
                } catch (Te) {
                    A(t, !0);
                }
            return ae(t, f, null, [e]).length > 0;
        }),
        (ae.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && d(e), b(e, t);
        }),
        (ae.attr = function (e, t) {
            (e.ownerDocument || e) !== f && d(e);
            var r = i.attrHandle[t.toLowerCase()],
                o =
                    r && O.call(i.attrHandle, t.toLowerCase())
                        ? r(e, t, !m)
                        : void 0;
            return void 0 !== o
                ? o
                : n.attributes || !m
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
        }),
        (ae.escape = function (e) {
            return (e + '').replace(ie, re);
        }),
        (ae.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
        }),
        (ae.uniqueSort = function (e) {
            var t,
                i = [],
                r = 0,
                o = 0;
            if (
                ((h = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(D),
                h)
            ) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
            }
            return (u = null), e;
        }),
        (r = ae.getText =
            function (e) {
                var t,
                    n = '',
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ('string' == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
            }),
        ((i = ae.selectors =
            {
                cacheLength: 50,
                createPseudo: ce,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
                    '>': { dir: 'parentNode', first: !0 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: !0 },
                    '~': { dir: 'previousSibling' },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(te, ne)),
                            (e[3] = (e[3] || e[4] || e[5] || '').replace(
                                te,
                                ne
                            )),
                            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            'nth' === e[1].slice(0, 3)
                                ? (e[3] || ae.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ('even' === e[3] || 'odd' === e[3]))),
                                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                                : e[3] && ae.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return z.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || '')
                                  : n &&
                                    q.test(n) &&
                                    (t = s(n, !0)) &&
                                    (t =
                                        n.indexOf(')', n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return '*' === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = S[e + ' '];
                        return (
                            t ||
                            ((t = new RegExp(
                                '(^|' + R + ')' + e + '(' + R + '|$)'
                            )) &&
                                S(e, function (e) {
                                    return t.test(
                                        ('string' == typeof e.className &&
                                            e.className) ||
                                            (void 0 !== e.getAttribute &&
                                                e.getAttribute('class')) ||
                                            ''
                                    );
                                }))
                        );
                    },
                    ATTR: function (e, t, n) {
                        return function (i) {
                            var r = ae.attr(i, e);
                            return null == r
                                ? '!=' === t
                                : !t ||
                                      ((r += ''),
                                      '=' === t
                                          ? r === n
                                          : '!=' === t
                                          ? r !== n
                                          : '^=' === t
                                          ? n && 0 === r.indexOf(n)
                                          : '*=' === t
                                          ? n && r.indexOf(n) > -1
                                          : '$=' === t
                                          ? n && r.slice(-n.length) === n
                                          : '~=' === t
                                          ? (
                                                ' ' +
                                                r.replace(W, ' ') +
                                                ' '
                                            ).indexOf(n) > -1
                                          : '|=' === t &&
                                            (r === n ||
                                                r.slice(0, n.length + 1) ===
                                                    n + '-'));
                        };
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = 'nth' !== e.slice(0, 3),
                            s = 'last' !== e.slice(-4),
                            a = 'of-type' === t;
                        return 1 === i && 0 === r
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, l) {
                                  var c,
                                      u,
                                      h,
                                      d,
                                      f,
                                      p,
                                      m =
                                          o !== s
                                              ? 'nextSibling'
                                              : 'previousSibling',
                                      g = t.parentNode,
                                      v = a && t.nodeName.toLowerCase(),
                                      y = !l && !a,
                                      b = !1;
                                  if (g) {
                                      if (o) {
                                          for (; m; ) {
                                              for (d = t; (d = d[m]); )
                                                  if (
                                                      a
                                                          ? d.nodeName.toLowerCase() ===
                                                            v
                                                          : 1 === d.nodeType
                                                  )
                                                      return !1;
                                              p = m =
                                                  'only' === e &&
                                                  !p &&
                                                  'nextSibling';
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((p = [
                                              s ? g.firstChild : g.lastChild,
                                          ]),
                                          s && y)
                                      ) {
                                          for (
                                              b =
                                                  (f =
                                                      (c =
                                                          (u =
                                                              (h =
                                                                  (d = g)[_] ||
                                                                  (d[_] = {}))[
                                                                  d.uniqueID
                                                              ] ||
                                                              (h[d.uniqueID] =
                                                                  {}))[e] ||
                                                          [])[0] === x &&
                                                      c[1]) && c[2],
                                                  d = f && g.childNodes[f];
                                              (d =
                                                  (++f && d && d[m]) ||
                                                  (b = f = 0) ||
                                                  p.pop());

                                          )
                                              if (
                                                  1 === d.nodeType &&
                                                  ++b &&
                                                  d === t
                                              ) {
                                                  u[e] = [x, f, b];
                                                  break;
                                              }
                                      } else if (
                                          (y &&
                                              (b = f =
                                                  (c =
                                                      (u =
                                                          (h =
                                                              (d = t)[_] ||
                                                              (d[_] = {}))[
                                                              d.uniqueID
                                                          ] ||
                                                          (h[d.uniqueID] = {}))[
                                                          e
                                                      ] || [])[0] === x &&
                                                  c[1]),
                                          !1 === b)
                                      )
                                          for (
                                              ;
                                              (d =
                                                  (++f && d && d[m]) ||
                                                  (b = f = 0) ||
                                                  p.pop()) &&
                                              ((a
                                                  ? d.nodeName.toLowerCase() !==
                                                    v
                                                  : 1 !== d.nodeType) ||
                                                  !++b ||
                                                  (y &&
                                                      ((u =
                                                          (h =
                                                              d[_] ||
                                                              (d[_] = {}))[
                                                              d.uniqueID
                                                          ] ||
                                                          (h[d.uniqueID] = {}))[
                                                          e
                                                      ] = [x, b]),
                                                  d !== t));

                                          );
                                      return (
                                          (b -= r) === i ||
                                          (b % i == 0 && b / i >= 0)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            r =
                                i.pseudos[e] ||
                                i.setFilters[e.toLowerCase()] ||
                                ae.error('unsupported pseudo: ' + e);
                        return r[_]
                            ? r(t)
                            : r.length > 1
                            ? ((n = [e, e, '', t]),
                              i.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? ce(function (e, n) {
                                        for (
                                            var i, o = r(e, t), s = o.length;
                                            s--;

                                        )
                                            e[(i = P(e, o[s]))] = !(n[i] =
                                                o[s]);
                                    })
                                  : function (e) {
                                        return r(e, 0, n);
                                    })
                            : r;
                    },
                },
                pseudos: {
                    not: ce(function (e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(F, '$1'));
                        return i[_]
                            ? ce(function (e, t, n, r) {
                                  for (
                                      var o,
                                          s = i(e, null, r, []),
                                          a = e.length;
                                      a--;

                                  )
                                      (o = s[a]) && (e[a] = !(t[a] = o));
                              })
                            : function (e, r, o) {
                                  return (
                                      (t[0] = e),
                                      i(t, null, o, n),
                                      (t[0] = null),
                                      !n.pop()
                                  );
                              };
                    }),
                    has: ce(function (e) {
                        return function (t) {
                            return ae(e, t).length > 0;
                        };
                    }),
                    contains: ce(function (e) {
                        return (
                            (e = e.replace(te, ne)),
                            function (t) {
                                return (t.textContent || r(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: ce(function (e) {
                        return (
                            G.test(e || '') ||
                                ae.error('unsupported lang: ' + e),
                            (e = e.replace(te, ne).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if (
                                        (n = m
                                            ? t.lang
                                            : t.getAttribute('xml:lang') ||
                                              t.getAttribute('lang'))
                                    )
                                        return (
                                            (n = n.toLowerCase()) === e ||
                                            0 === n.indexOf(e + '-')
                                        );
                                } while (
                                    (t = t.parentNode) &&
                                    1 === t.nodeType
                                );
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === p;
                    },
                    focus: function (e) {
                        return (
                            e === f.activeElement &&
                            (!f.hasFocus || f.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ('input' === t && !!e.checked) ||
                            ('option' === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e);
                    },
                    header: function (e) {
                        return K.test(e.nodeName);
                    },
                    input: function (e) {
                        return Q.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ('input' === t && 'button' === e.type) ||
                            'button' === t
                        );
                    },
                    text: function (e) {
                        var t;
                        return (
                            'input' === e.nodeName.toLowerCase() &&
                            'text' === e.type &&
                            (null == (t = e.getAttribute('type')) ||
                                'text' === t.toLowerCase())
                        );
                    },
                    first: ge(function () {
                        return [0];
                    }),
                    last: ge(function (e, t) {
                        return [t - 1];
                    }),
                    eq: ge(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: ge(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: ge(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: ge(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                            e.push(i);
                        return e;
                    }),
                    gt: ge(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                        return e;
                    }),
                },
            }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
            return i;
        }
        function _e(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && 'parentNode' === o,
                a = E++;
            return t.first
                ? function (t, n, r) {
                      for (; (t = t[i]); )
                          if (1 === t.nodeType || s) return e(t, n, r);
                      return !1;
                  }
                : function (t, n, l) {
                      var c,
                          u,
                          h,
                          d = [x, a];
                      if (l) {
                          for (; (t = t[i]); )
                              if ((1 === t.nodeType || s) && e(t, n, l))
                                  return !0;
                      } else
                          for (; (t = t[i]); )
                              if (1 === t.nodeType || s)
                                  if (
                                      ((u =
                                          (h = t[_] || (t[_] = {}))[
                                              t.uniqueID
                                          ] || (h[t.uniqueID] = {})),
                                      r && r === t.nodeName.toLowerCase())
                                  )
                                      t = t[i] || t;
                                  else {
                                      if (
                                          (c = u[o]) &&
                                          c[0] === x &&
                                          c[1] === a
                                      )
                                          return (d[2] = c[2]);
                                      if (((u[o] = d), (d[2] = e(t, n, l))))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function we(e) {
            return e.length > 1
                ? function (t, n, i) {
                      for (var r = e.length; r--; )
                          if (!e[r](t, n, i)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function xe(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) &&
                    ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
            return s;
        }
        function Ee(e, t, n, i, r, o) {
            return (
                i && !i[_] && (i = Ee(i)),
                r && !r[_] && (r = Ee(r, o)),
                ce(function (o, s, a, l) {
                    var c,
                        u,
                        h,
                        d = [],
                        f = [],
                        p = s.length,
                        m =
                            o ||
                            (function (e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++)
                                    ae(e, t[i], n);
                                return n;
                            })(t || '*', a.nodeType ? [a] : a, []),
                        g = !e || (!o && t) ? m : xe(m, d, e, a, l),
                        v = n ? (r || (o ? e : p || i) ? [] : s) : g;
                    if ((n && n(g, v, a, l), i))
                        for (c = xe(v, f), i(c, [], a, l), u = c.length; u--; )
                            (h = c[u]) && (v[f[u]] = !(g[f[u]] = h));
                    if (o) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = v.length; u--; )
                                    (h = v[u]) && c.push((g[u] = h));
                                r(null, (v = []), c, l);
                            }
                            for (u = v.length; u--; )
                                (h = v[u]) &&
                                    (c = r ? P(o, h) : d[u]) > -1 &&
                                    (o[c] = !(s[c] = h));
                        }
                    } else (v = xe(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : M.apply(s, v);
                })
            );
        }
        function Se(e) {
            for (
                var t,
                    n,
                    r,
                    o = e.length,
                    s = i.relative[e[0].type],
                    a = s || i.relative[' '],
                    l = s ? 1 : 0,
                    u = _e(
                        function (e) {
                            return e === t;
                        },
                        a,
                        !0
                    ),
                    h = _e(
                        function (e) {
                            return P(t, e) > -1;
                        },
                        a,
                        !0
                    ),
                    d = [
                        function (e, n, i) {
                            var r =
                                (!s && (i || n !== c)) ||
                                ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
                            return (t = null), r;
                        },
                    ];
                l < o;
                l++
            )
                if ((n = i.relative[e[l].type])) d = [_e(we(d), n)];
                else {
                    if (
                        (n = i.filter[e[l].type].apply(null, e[l].matches))[_]
                    ) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return Ee(
                            l > 1 && we(d),
                            l > 1 &&
                                be(
                                    e
                                        .slice(0, l - 1)
                                        .concat({
                                            value:
                                                ' ' === e[l - 2].type
                                                    ? '*'
                                                    : '',
                                        })
                                ).replace(F, '$1'),
                            n,
                            l < r && Se(e.slice(l, r)),
                            r < o && Se((e = e.slice(r))),
                            r < o && be(e)
                        );
                    }
                    d.push(n);
                }
            return we(d);
        }
        return (
            (ye.prototype = i.filters = i.pseudos),
            (i.setFilters = new ye()),
            (s = ae.tokenize =
                function (e, t) {
                    var n,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u = T[e + ' '];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = i.preFilter; a; ) {
                        for (s in ((n && !(r = U.exec(a))) ||
                            (r && (a = a.slice(r[0].length) || a),
                            l.push((o = []))),
                        (n = !1),
                        (r = V.exec(a)) &&
                            ((n = r.shift()),
                            o.push({ value: n, type: r[0].replace(F, ' ') }),
                            (a = a.slice(n.length))),
                        i.filter))
                            !(r = z[s].exec(a)) ||
                                (c[s] && !(r = c[s](r))) ||
                                ((n = r.shift()),
                                o.push({ value: n, type: s, matches: r }),
                                (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : T(e, l).slice(0);
                }),
            (a = ae.compile =
                function (e, t) {
                    var n,
                        r = [],
                        o = [],
                        a = C[e + ' '];
                    if (!a) {
                        for (t || (t = s(e)), n = t.length; n--; )
                            (a = Se(t[n]))[_] ? r.push(a) : o.push(a);
                        (a = C(
                            e,
                            (function (e, t) {
                                var n = t.length > 0,
                                    r = e.length > 0,
                                    o = function (o, s, a, l, u) {
                                        var h,
                                            p,
                                            g,
                                            v = 0,
                                            y = '0',
                                            b = o && [],
                                            _ = [],
                                            w = c,
                                            E = o || (r && i.find.TAG('*', u)),
                                            S = (x +=
                                                null == w
                                                    ? 1
                                                    : Math.random() || 0.1),
                                            T = E.length;
                                        for (
                                            u && (c = s === f || s || u);
                                            y !== T && null != (h = E[y]);
                                            y++
                                        ) {
                                            if (r && h) {
                                                for (
                                                    p = 0,
                                                        s ||
                                                            h.ownerDocument ===
                                                                f ||
                                                            (d(h), (a = !m));
                                                    (g = e[p++]);

                                                )
                                                    if (g(h, s || f, a)) {
                                                        l.push(h);
                                                        break;
                                                    }
                                                u && (x = S);
                                            }
                                            n &&
                                                ((h = !g && h) && v--,
                                                o && b.push(h));
                                        }
                                        if (((v += y), n && y !== v)) {
                                            for (p = 0; (g = t[p++]); )
                                                g(b, _, s, a);
                                            if (o) {
                                                if (v > 0)
                                                    for (; y--; )
                                                        b[y] ||
                                                            _[y] ||
                                                            (_[y] = I.call(l));
                                                _ = xe(_);
                                            }
                                            M.apply(l, _),
                                                u &&
                                                    !o &&
                                                    _.length > 0 &&
                                                    v + t.length > 1 &&
                                                    ae.uniqueSort(l);
                                        }
                                        return u && ((x = S), (c = w)), b;
                                    };
                                return n ? ce(o) : o;
                            })(o, r)
                        )).selector = e;
                    }
                    return a;
                }),
            (l = ae.select =
                function (e, t, n, r) {
                    var o,
                        l,
                        c,
                        u,
                        h,
                        d = 'function' == typeof e && e,
                        f = !r && s((e = d.selector || e));
                    if (((n = n || []), 1 === f.length)) {
                        if (
                            (l = f[0] = f[0].slice(0)).length > 2 &&
                            'ID' === (c = l[0]).type &&
                            9 === t.nodeType &&
                            m &&
                            i.relative[l[1].type]
                        ) {
                            if (
                                !(t = (i.find.ID(
                                    c.matches[0].replace(te, ne),
                                    t
                                ) || [])[0])
                            )
                                return n;
                            d && (t = t.parentNode),
                                (e = e.slice(l.shift().value.length));
                        }
                        for (
                            o = z.needsContext.test(e) ? 0 : l.length;
                            o-- && !i.relative[(u = (c = l[o]).type)];

                        )
                            if (
                                (h = i.find[u]) &&
                                (r = h(
                                    c.matches[0].replace(te, ne),
                                    (ee.test(l[0].type) && ve(t.parentNode)) ||
                                        t
                                ))
                            ) {
                                if ((l.splice(o, 1), !(e = r.length && be(l))))
                                    return M.apply(n, r), n;
                                break;
                            }
                    }
                    return (
                        (d || a(e, f))(
                            r,
                            t,
                            !m,
                            n,
                            !t || (ee.test(e) && ve(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (n.sortStable = _.split('').sort(D).join('') === _),
            (n.detectDuplicates = !!h),
            d(),
            (n.sortDetached = ue(function (e) {
                return (
                    1 & e.compareDocumentPosition(f.createElement('fieldset'))
                );
            })),
            ue(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    '#' === e.firstChild.getAttribute('href')
                );
            }) ||
                he('type|href|height|width', function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            'type' === t.toLowerCase() ? 1 : 2
                        );
                }),
            (n.attributes &&
                ue(function (e) {
                    return (
                        (e.innerHTML = '<input/>'),
                        e.firstChild.setAttribute('value', ''),
                        '' === e.firstChild.getAttribute('value')
                    );
                })) ||
                he('value', function (e, t, n) {
                    if (!n && 'input' === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute('disabled');
            }) ||
                he(H, function (e, t, n) {
                    var i;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (i = e.getAttributeNode(t)) && i.specified
                            ? i.value
                            : null;
                }),
            ae
        );
    })(e);
    (_.find = E),
        (_.expr = E.selectors),
        (_.expr[':'] = _.expr.pseudos),
        (_.uniqueSort = _.unique = E.uniqueSort),
        (_.text = E.getText),
        (_.isXMLDoc = E.isXML),
        (_.contains = E.contains),
        (_.escapeSelector = E.escape);
    var S = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && _(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        C = _.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function O(e, t, n) {
        return m(t)
            ? _.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? _.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : 'string' != typeof t
            ? _.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
              })
            : _.filter(t, e, n);
    }
    (_.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === i.nodeType
                ? _.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : _.find.matches(
                      e,
                      _.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        _.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    r = this;
                if ('string' != typeof e)
                    return this.pushStack(
                        _(e).filter(function () {
                            for (t = 0; t < i; t++)
                                if (_.contains(r[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                    _.find(e, r[t], n);
                return i > 1 ? _.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(O(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(O(this, e || [], !0));
            },
            is: function (e) {
                return !!O(
                    this,
                    'string' == typeof e && C.test(e) ? _(e) : e || [],
                    !1
                ).length;
            },
        });
    var k,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((_.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || k), 'string' == typeof e)) {
            if (
                !(r =
                    '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                        ? [null, e, null]
                        : I.exec(e)) ||
                (!r[1] && t)
            )
                return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
            if (r[1]) {
                if (
                    (_.merge(
                        this,
                        _.parseHTML(
                            r[1],
                            (t = t instanceof _ ? t[0] : t) && t.nodeType
                                ? t.ownerDocument || t
                                : i,
                            !0
                        )
                    ),
                    D.test(r[1]) && _.isPlainObject(t))
                )
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (
                (o = i.getElementById(r[2])) &&
                    ((this[0] = o), (this.length = 1)),
                this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
                ? n.ready(e)
                : e(_)
            : _.makeArray(e, this);
    }).prototype = _.fn),
        (k = _(i));
    var N = /^(?:parents|prev(?:Until|All))/,
        M = { children: !0, contents: !0, next: !0, prev: !0 };
    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    _.fn.extend({
        has: function (e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                s = 'string' != typeof e && _(e);
            if (!C.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (s
                                ? s.index(n) > -1
                                : 1 === n.nodeType &&
                                  _.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? 'string' == typeof e
                    ? l.call(_(e), this[0])
                    : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        _.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return S(e, 'parentNode');
                },
                parentsUntil: function (e, t, n) {
                    return S(e, 'parentNode', n);
                },
                next: function (e) {
                    return L(e, 'nextSibling');
                },
                prev: function (e) {
                    return L(e, 'previousSibling');
                },
                nextAll: function (e) {
                    return S(e, 'nextSibling');
                },
                prevAll: function (e) {
                    return S(e, 'previousSibling');
                },
                nextUntil: function (e, t, n) {
                    return S(e, 'nextSibling', n);
                },
                prevUntil: function (e, t, n) {
                    return S(e, 'previousSibling', n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return void 0 !== e.contentDocument
                        ? e.contentDocument
                        : (A(e, 'template') && (e = e.content || e),
                          _.merge([], e.childNodes));
                },
            },
            function (e, t) {
                _.fn[e] = function (n, i) {
                    var r = _.map(this, t, n);
                    return (
                        'Until' !== e.slice(-5) && (i = n),
                        i && 'string' == typeof i && (r = _.filter(i, r)),
                        this.length > 1 &&
                            (M[e] || _.uniqueSort(r), N.test(e) && r.reverse()),
                        this.pushStack(r)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function H(e) {
        return e;
    }
    function R(e) {
        throw e;
    }
    function j(e, t, n, i) {
        var r;
        try {
            e && m((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && m((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (_.Callbacks = function (e) {
        e =
            'string' == typeof e
                ? (function (e) {
                      var t = {};
                      return (
                          _.each(e.match(P) || [], function (e, n) {
                              t[n] = !0;
                          }),
                          t
                      );
                  })(e)
                : _.extend({}, e);
        var t,
            n,
            i,
            r,
            o = [],
            s = [],
            a = -1,
            l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length; )
                        !1 === o[a].apply(n[0], n[1]) &&
                            e.stopOnFalse &&
                            ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : '');
            },
            c = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((a = o.length - 1), s.push(n)),
                            (function t(n) {
                                _.each(n, function (n, i) {
                                    m(i)
                                        ? (e.unique && c.has(i)) || o.push(i)
                                        : i &&
                                          i.length &&
                                          'string' !== b(i) &&
                                          t(i);
                                });
                            })(arguments),
                            n && !t && l()),
                        this
                    );
                },
                remove: function () {
                    return (
                        _.each(arguments, function (e, t) {
                            for (var n; (n = _.inArray(t, o, n)) > -1; )
                                o.splice(n, 1), n <= a && a--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? _.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (r = s = []), (o = n = ''), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (r = s = []), n || t || (o = n = ''), this;
                },
                locked: function () {
                    return !!r;
                },
                fireWith: function (e, n) {
                    return (
                        r ||
                            ((n = [e, (n = n || []).slice ? n.slice() : n]),
                            s.push(n),
                            t || l()),
                        this
                    );
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return c;
    }),
        _.extend({
            Deferred: function (t) {
                var n = [
                        [
                            'notify',
                            'progress',
                            _.Callbacks('memory'),
                            _.Callbacks('memory'),
                            2,
                        ],
                        [
                            'resolve',
                            'done',
                            _.Callbacks('once memory'),
                            _.Callbacks('once memory'),
                            0,
                            'resolved',
                        ],
                        [
                            'reject',
                            'fail',
                            _.Callbacks('once memory'),
                            _.Callbacks('once memory'),
                            1,
                            'rejected',
                        ],
                    ],
                    i = 'pending',
                    r = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return r.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return _.Deferred(function (t) {
                                _.each(n, function (n, i) {
                                    var r = m(e[i[4]]) && e[i[4]];
                                    o[i[1]](function () {
                                        var e = r && r.apply(this, arguments);
                                        e && m(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(t.notify)
                                                  .done(t.resolve)
                                                  .fail(t.reject)
                                            : t[i[0] + 'With'](
                                                  this,
                                                  r ? [e] : arguments
                                              );
                                    });
                                }),
                                    (e = null);
                            }).promise();
                        },
                        then: function (t, i, r) {
                            var o = 0;
                            function s(t, n, i, r) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        c = function () {
                                            var e, c;
                                            if (!(t < o)) {
                                                if (
                                                    (e = i.apply(a, l)) ===
                                                    n.promise()
                                                )
                                                    throw new TypeError(
                                                        'Thenable self-resolution'
                                                    );
                                                m(
                                                    (c =
                                                        e &&
                                                        ('object' == typeof e ||
                                                            'function' ==
                                                                typeof e) &&
                                                        e.then)
                                                )
                                                    ? r
                                                        ? c.call(
                                                              e,
                                                              s(o, n, H, r),
                                                              s(o, n, R, r)
                                                          )
                                                        : c.call(
                                                              e,
                                                              s(++o, n, H, r),
                                                              s(o, n, R, r),
                                                              s(
                                                                  o,
                                                                  n,
                                                                  H,
                                                                  n.notifyWith
                                                              )
                                                          )
                                                    : (i !== H &&
                                                          ((a = void 0),
                                                          (l = [e])),
                                                      (r || n.resolveWith)(
                                                          a,
                                                          l
                                                      ));
                                            }
                                        },
                                        u = r
                                            ? c
                                            : function () {
                                                  try {
                                                      c();
                                                  } catch (e) {
                                                      _.Deferred
                                                          .exceptionHook &&
                                                          _.Deferred.exceptionHook(
                                                              e,
                                                              u.stackTrace
                                                          ),
                                                          t + 1 >= o &&
                                                              (i !== R &&
                                                                  ((a = void 0),
                                                                  (l = [e])),
                                                              n.rejectWith(
                                                                  a,
                                                                  l
                                                              ));
                                                  }
                                              };
                                    t
                                        ? u()
                                        : (_.Deferred.getStackHook &&
                                              (u.stackTrace =
                                                  _.Deferred.getStackHook()),
                                          e.setTimeout(u));
                                };
                            }
                            return _.Deferred(function (e) {
                                n[0][3].add(
                                    s(0, e, m(r) ? r : H, e.notifyWith)
                                ),
                                    n[1][3].add(s(0, e, m(t) ? t : H)),
                                    n[2][3].add(s(0, e, m(i) ? i : R));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? _.extend(e, r) : r;
                        },
                    },
                    o = {};
                return (
                    _.each(n, function (e, t) {
                        var s = t[2],
                            a = t[5];
                        (r[t[1]] = s.add),
                            a &&
                                s.add(
                                    function () {
                                        i = a;
                                    },
                                    n[3 - e][2].disable,
                                    n[3 - e][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            s.add(t[3].fire),
                            (o[t[0]] = function () {
                                return (
                                    o[t[0] + 'With'](
                                        this === o ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (o[t[0] + 'With'] = s.fireWith);
                    }),
                    r.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = o.call(arguments),
                    s = _.Deferred(),
                    a = function (e) {
                        return function (n) {
                            (i[e] = this),
                                (r[e] =
                                    arguments.length > 1
                                        ? o.call(arguments)
                                        : n),
                                --t || s.resolveWith(i, r);
                        };
                    };
                if (
                    t <= 1 &&
                    (j(e, s.done(a(n)).resolve, s.reject, !t),
                    'pending' === s.state() || m(r[n] && r[n].then))
                )
                    return s.then();
                for (; n--; ) j(r[n], a(n), s.reject);
                return s.promise();
            },
        });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (_.Deferred.exceptionHook = function (t, n) {
        e.console &&
            e.console.warn &&
            t &&
            $.test(t.name) &&
            e.console.warn(
                'jQuery.Deferred exception: ' + t.message,
                t.stack,
                n
            );
    }),
        (_.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var Y = _.Deferred();
    function W() {
        i.removeEventListener('DOMContentLoaded', W),
            e.removeEventListener('load', W),
            _.ready();
    }
    (_.fn.ready = function (e) {
        return (
            Y.then(e).catch(function (e) {
                _.readyException(e);
            }),
            this
        );
    }),
        _.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --_.readyWait : _.isReady) ||
                    ((_.isReady = !0),
                    (!0 !== e && --_.readyWait > 0) || Y.resolveWith(i, [_]));
            },
        }),
        (_.ready.then = Y.then),
        'complete' === i.readyState ||
        ('loading' !== i.readyState && !i.documentElement.doScroll)
            ? e.setTimeout(_.ready)
            : (i.addEventListener('DOMContentLoaded', W),
              e.addEventListener('load', W));
    var F = function (e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ('object' === b(n))
                for (a in ((r = !0), n)) F(e, t, a, n[a], !0, o, s);
            else if (
                void 0 !== i &&
                ((r = !0),
                m(i) || (s = !0),
                c &&
                    (s
                        ? (t.call(e, i), (t = null))
                        : ((c = t),
                          (t = function (e, t, n) {
                              return c.call(_(e), n);
                          }))),
                t)
            )
                for (; a < l; a++)
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        },
        U = /^-ms-/,
        V = /-([a-z])/g;
    function B(e, t) {
        return t.toUpperCase();
    }
    function q(e) {
        return e.replace(U, 'ms-').replace(V, B);
    }
    var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function z() {
        this.expando = _.expando + z.uid++;
    }
    (z.uid = 1),
        (z.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        G(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var i,
                    r = this.cache(e);
                if ('string' == typeof t) r[q(t)] = n;
                else for (i in t) r[q(i)] = t[i];
                return r;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][q(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && 'string' == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(q)
                            : (t = q(t)) in i
                            ? [t]
                            : t.match(P) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 === t || _.isEmptyObject(i)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !_.isEmptyObject(t);
            },
        });
    var X = new z(),
        Q = new z(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;
    function J(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((i = 'data-' + t.replace(Z, '-$&').toLowerCase()),
                'string' == typeof (n = e.getAttribute(i)))
            ) {
                try {
                    n = (function (e) {
                        return (
                            'true' === e ||
                            ('false' !== e &&
                                ('null' === e
                                    ? null
                                    : e === +e + ''
                                    ? +e
                                    : K.test(e)
                                    ? JSON.parse(e)
                                    : e))
                        );
                    })(n);
                } catch (r) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    _.extend({
        hasData: function (e) {
            return Q.hasData(e) || X.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return X.access(e, t, n);
        },
        _removeData: function (e, t) {
            X.remove(e, t);
        },
    }),
        _.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    r,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (
                        this.length &&
                        ((r = Q.get(o)),
                        1 === o.nodeType && !X.get(o, 'hasDataAttrs'))
                    ) {
                        for (n = s.length; n--; )
                            s[n] &&
                                0 === (i = s[n].name).indexOf('data-') &&
                                ((i = q(i.slice(5))), J(o, i, r[i]));
                        X.set(o, 'hasDataAttrs', !0);
                    }
                    return r;
                }
                return 'object' == typeof e
                    ? this.each(function () {
                          Q.set(this, e);
                      })
                    : F(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t)
                                  return void 0 !== (n = Q.get(o, e))
                                      ? n
                                      : void 0 !== (n = J(o, e))
                                      ? n
                                      : void 0;
                              this.each(function () {
                                  Q.set(this, e, t);
                              });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        _.extend({
            queue: function (e, t, n) {
                var i;
                if (e)
                    return (
                        (i = X.get(e, (t = (t || 'fx') + 'queue'))),
                        n &&
                            (!i || Array.isArray(n)
                                ? (i = X.access(e, t, _.makeArray(n)))
                                : i.push(n)),
                        i || []
                    );
            },
            dequeue: function (e, t) {
                var n = _.queue(e, (t = t || 'fx')),
                    i = n.length,
                    r = n.shift(),
                    o = _._queueHooks(e, t);
                'inprogress' === r && ((r = n.shift()), i--),
                    r &&
                        ('fx' === t && n.unshift('inprogress'),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                _.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + 'queueHooks';
                return (
                    X.get(e, n) ||
                    X.access(e, n, {
                        empty: _.Callbacks('once memory').add(function () {
                            X.remove(e, [t + 'queue', n]);
                        }),
                    })
                );
            },
        }),
        _.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    'string' != typeof e && ((t = e), (e = 'fx'), n--),
                    arguments.length < n
                        ? _.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = _.queue(this, e, t);
                              _._queueHooks(this, e),
                                  'fx' === e &&
                                      'inprogress' !== n[0] &&
                                      _.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    _.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || 'fx', []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    r = _.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --i || r.resolveWith(o, [o]);
                    };
                for (
                    'string' != typeof e && ((t = e), (e = void 0)),
                        e = e || 'fx';
                    s--;

                )
                    (n = X.get(o[s], e + 'queueHooks')) &&
                        n.empty &&
                        (i++, n.empty.add(a));
                return a(), r.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
        ne = ['Top', 'Right', 'Bottom', 'Left'],
        ie = i.documentElement,
        re = function (e) {
            return _.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    ie.getRootNode &&
        (re = function (e) {
            return (
                _.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
            );
        });
    var se = function (e, t) {
            return (
                'none' === (e = t || e).style.display ||
                ('' === e.style.display &&
                    re(e) &&
                    'none' === _.css(e, 'display'))
            );
        },
        ae = function (e, t, n, i) {
            var r,
                o,
                s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
            return r;
        };
    function le(e, t, n, i) {
        var r,
            o,
            s = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return _.css(e, t, '');
                  },
            l = a(),
            c = (n && n[3]) || (_.cssNumber[t] ? '' : 'px'),
            u =
                e.nodeType &&
                (_.cssNumber[t] || ('px' !== c && +l)) &&
                te.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3], u = +(l /= 2) || 1; s--; )
                _.style(e, t, u + c),
                    (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                    (u /= o);
            _.style(e, t, (u *= 2) + c), (n = n || []);
        }
        return (
            n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
            r
        );
    }
    var ce = {};
    function ue(e) {
        var t,
            n = e.ownerDocument,
            i = e.nodeName,
            r = ce[i];
        return (
            r ||
            ((t = n.body.appendChild(n.createElement(i))),
            (r = _.css(t, 'display')),
            t.parentNode.removeChild(t),
            'none' === r && (r = 'block'),
            (ce[i] = r),
            r)
        );
    }
    function he(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
            (i = e[o]).style &&
                ((n = i.style.display),
                t
                    ? ('none' === n &&
                          ((r[o] = X.get(i, 'display') || null),
                          r[o] || (i.style.display = '')),
                      '' === i.style.display && se(i) && (r[o] = ue(i)))
                    : 'none' !== n &&
                      ((r[o] = 'none'), X.set(i, 'display', n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
    }
    _.fn.extend({
        show: function () {
            return he(this, !0);
        },
        hide: function () {
            return he(this);
        },
        toggle: function (e) {
            return 'boolean' == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      se(this) ? _(this).show() : _(this).hide();
                  });
        },
    });
    var de = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
        };
    function ge(e, t) {
        var n;
        return (
            (n =
                void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t || '*')
                    : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || '*')
                    : []),
            void 0 === t || (t && A(e, t)) ? _.merge([e], n) : n
        );
    }
    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            X.set(e[n], 'globalEval', !t || X.get(t[n], 'globalEval'));
    }
    (me.optgroup = me.option),
        (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td);
    var ye,
        be,
        _e = /<|&#?\w+;/;
    function we(e, t, n, i, r) {
        for (
            var o,
                s,
                a,
                l,
                c,
                u,
                h = t.createDocumentFragment(),
                d = [],
                f = 0,
                p = e.length;
            f < p;
            f++
        )
            if ((o = e[f]) || 0 === o)
                if ('object' === b(o)) _.merge(d, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
                    for (
                        s = s || h.appendChild(t.createElement('div')),
                            a = (fe.exec(o) || ['', ''])[1].toLowerCase(),
                            s.innerHTML =
                                (l = me[a] || me._default)[1] +
                                _.htmlPrefilter(o) +
                                l[2],
                            u = l[0];
                        u--;

                    )
                        s = s.lastChild;
                    _.merge(d, s.childNodes),
                        ((s = h.firstChild).textContent = '');
                } else d.push(t.createTextNode(o));
        for (h.textContent = '', f = 0; (o = d[f++]); )
            if (i && _.inArray(o, i) > -1) r && r.push(o);
            else if (
                ((c = re(o)),
                (s = ge(h.appendChild(o), 'script')),
                c && ve(s),
                n)
            )
                for (u = 0; (o = s[u++]); ) pe.test(o.type || '') && n.push(o);
        return h;
    }
    (ye = i.createDocumentFragment().appendChild(i.createElement('div'))),
        (be = i.createElement('input')).setAttribute('type', 'radio'),
        be.setAttribute('checked', 'checked'),
        be.setAttribute('name', 't'),
        ye.appendChild(be),
        (p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ye.innerHTML = '<textarea>x</textarea>'),
        (p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
    var xe = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;
    function Te() {
        return !0;
    }
    function Ce() {
        return !1;
    }
    function Ae(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return i.activeElement;
                    } catch (e) {}
                })()) ==
            ('focus' === t)
        );
    }
    function De(e, t, n, i, r, o) {
        var s, a;
        if ('object' == typeof t) {
            for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t))
                De(e, a, n, i, t[a], o);
            return e;
        }
        if (
            (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ('string' == typeof n
                      ? ((r = i), (i = void 0))
                      : ((r = i), (i = n), (n = void 0))),
            !1 === r)
        )
            r = Ce;
        else if (!r) return e;
        return (
            1 === o &&
                ((s = r),
                ((r = function (e) {
                    return _().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = _.guid++))),
            e.each(function () {
                _.event.add(this, t, r, i, n);
            })
        );
    }
    function Oe(e, t, n) {
        n
            ? (X.set(e, t, !1),
              _.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                      var i,
                          r,
                          s = X.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                          if (s.length)
                              (_.event.special[t] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((s = o.call(arguments)),
                              X.set(this, t, s),
                              (i = n(this, t)),
                              this[t](),
                              s !== (r = X.get(this, t)) || i
                                  ? X.set(this, t, !1)
                                  : (r = {}),
                              s !== r)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  r.value
                              );
                      } else
                          s.length &&
                              (X.set(this, t, {
                                  value: _.event.trigger(
                                      _.extend(s[0], _.Event.prototype),
                                      s.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === X.get(e, t) && _.event.add(e, t, Te);
    }
    (_.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                m,
                g = X.get(e);
            if (g)
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                        r && _.find.matchesSelector(ie, r),
                        n.guid || (n.guid = _.guid++),
                        (l = g.events) || (l = g.events = {}),
                        (s = g.handle) ||
                            (s = g.handle =
                                function (t) {
                                    return void 0 !== _ &&
                                        _.event.triggered !== t.type
                                        ? _.event.dispatch.apply(e, arguments)
                                        : void 0;
                                }),
                        c = (t = (t || '').match(P) || ['']).length;
                    c--;

                )
                    (f = m = (a = Se.exec(t[c]) || [])[1]),
                        (p = (a[2] || '').split('.').sort()),
                        f &&
                            ((h = _.event.special[f] || {}),
                            (h =
                                _.event.special[
                                    (f = (r ? h.delegateType : h.bindType) || f)
                                ] || {}),
                            (u = _.extend(
                                {
                                    type: f,
                                    origType: m,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext:
                                        r && _.expr.match.needsContext.test(r),
                                    namespace: p.join('.'),
                                },
                                o
                            )),
                            (d = l[f]) ||
                                (((d = l[f] = []).delegateCount = 0),
                                (h.setup && !1 !== h.setup.call(e, i, p, s)) ||
                                    (e.addEventListener &&
                                        e.addEventListener(f, s))),
                            h.add &&
                                (h.add.call(e, u),
                                u.handler.guid || (u.handler.guid = n.guid)),
                            r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                            (_.event.global[f] = !0));
        },
        remove: function (e, t, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                m,
                g = X.hasData(e) && X.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || '').match(P) || ['']).length; c--; )
                    if (
                        ((f = m = (a = Se.exec(t[c]) || [])[1]),
                        (p = (a[2] || '').split('.').sort()),
                        f)
                    ) {
                        for (
                            h = _.event.special[f] || {},
                                d =
                                    l[
                                        (f =
                                            (i ? h.delegateType : h.bindType) ||
                                            f)
                                    ] || [],
                                a =
                                    a[2] &&
                                    new RegExp(
                                        '(^|\\.)' +
                                            p.join('\\.(?:.*\\.|)') +
                                            '(\\.|$)'
                                    ),
                                s = o = d.length;
                            o--;

                        )
                            (u = d[o]),
                                (!r && m !== u.origType) ||
                                    (n && n.guid !== u.guid) ||
                                    (a && !a.test(u.namespace)) ||
                                    (i &&
                                        i !== u.selector &&
                                        ('**' !== i || !u.selector)) ||
                                    (d.splice(o, 1),
                                    u.selector && d.delegateCount--,
                                    h.remove && h.remove.call(e, u));
                        s &&
                            !d.length &&
                            ((h.teardown &&
                                !1 !== h.teardown.call(e, p, g.handle)) ||
                                _.removeEvent(e, f, g.handle),
                            delete l[f]);
                    } else for (f in l) _.event.remove(e, f + t[c], n, i, !0);
                _.isEmptyObject(l) && X.remove(e, 'handle events');
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a = _.event.fix(e),
                l = new Array(arguments.length),
                c = (X.get(this, 'events') || {})[a.type] || [],
                u = _.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (
                ((a.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, a))
            ) {
                for (
                    s = _.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();

                )
                    for (
                        a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) &&
                        !a.isImmediatePropagationStopped();

                    )
                        (a.rnamespace &&
                            !1 !== o.namespace &&
                            !a.rnamespace.test(o.namespace)) ||
                            ((a.handleObj = o),
                            (a.data = o.data),
                            void 0 !==
                                (i = (
                                    (_.event.special[o.origType] || {})
                                        .handle || o.handler
                                ).apply(r.elem, l)) &&
                                !1 === (a.result = i) &&
                                (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !('click' === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (
                        1 === c.nodeType &&
                        ('click' !== e.type || !0 !== c.disabled)
                    ) {
                        for (o = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[(r = (i = t[n]).selector + ' ')] &&
                                (s[r] = i.needsContext
                                    ? _(r, this).index(c) > -1
                                    : _.find(r, this, null, [c]).length),
                                s[r] && o.push(i);
                        o.length && a.push({ elem: c, handlers: o });
                    }
            return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
            );
        },
        addProp: function (e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t,
                    });
                },
            });
        },
        fix: function (e) {
            return e[_.expando] ? e : new _.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return (
                        de.test(t.type) &&
                            t.click &&
                            A(t, 'input') &&
                            Oe(t, 'click', Te),
                        !1
                    );
                },
                trigger: function (e) {
                    var t = this || e;
                    return (
                        de.test(t.type) &&
                            t.click &&
                            A(t, 'input') &&
                            Oe(t, 'click'),
                        !0
                    );
                },
                _default: function (e) {
                    var t = e.target;
                    return (
                        (de.test(t.type) &&
                            t.click &&
                            A(t, 'input') &&
                            X.get(t, 'click')) ||
                        A(t, 'a')
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (_.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (_.Event = function (e, t) {
            if (!(this instanceof _.Event)) return new _.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? Te
                          : Ce),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && _.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[_.expando] = !0);
        }),
        (_.Event.prototype = {
            constructor: _.Event,
            isDefaultPrevented: Ce,
            isPropagationStopped: Ce,
            isImmediatePropagationStopped: Ce,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Te),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Te),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Te),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        _.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && xe.test(e.type)
                        ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                        : !e.which && void 0 !== t && Ee.test(e.type)
                        ? 1 & t
                            ? 1
                            : 2 & t
                            ? 3
                            : 4 & t
                            ? 2
                            : 0
                        : e.which;
                },
            },
            _.event.addProp
        ),
        _.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            _.event.special[e] = {
                setup: function () {
                    return Oe(this, e, Ae), !1;
                },
                trigger: function () {
                    return Oe(this, e), !0;
                },
                delegateType: t,
            };
        }),
        _.each(
            {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
            },
            function (e, t) {
                _.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            i = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (i && (i === this || _.contains(this, i))) ||
                                ((e.type = r.origType),
                                (n = r.handler.apply(this, arguments)),
                                (e.type = t)),
                            n
                        );
                    },
                };
            }
        ),
        _.fn.extend({
            on: function (e, t, n, i) {
                return De(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return De(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        _(e.delegateTarget).off(
                            i.namespace
                                ? i.origType + '.' + i.namespace
                                : i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ('object' == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this;
                }
                return (
                    (!1 !== t && 'function' != typeof t) ||
                        ((n = t), (t = void 0)),
                    !1 === n && (n = Ce),
                    this.each(function () {
                        _.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var ke =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return (
            (A(e, 'table') &&
                A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                _(e).children('tbody')[0]) ||
            e
        );
    }
    function Pe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
    }
    function He(e) {
        return (
            'true/' === (e.type || '').slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
            e
        );
    }
    function Re(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (
                X.hasData(e) &&
                ((o = X.access(e)), (s = X.set(t, o)), (c = o.events))
            )
                for (r in (delete s.handle, (s.events = {}), c))
                    for (n = 0, i = c[r].length; n < i; n++)
                        _.event.add(t, r, c[r][n]);
            Q.hasData(e) &&
                ((a = Q.access(e)), (l = _.extend({}, a)), Q.set(t, l));
        }
    }
    function je(e, t, n, i) {
        t = s.apply([], t);
        var r,
            o,
            a,
            l,
            c,
            u,
            h = 0,
            d = e.length,
            f = d - 1,
            g = t[0],
            v = m(g);
        if (v || (d > 1 && 'string' == typeof g && !p.checkClone && Ne.test(g)))
            return e.each(function (r) {
                var o = e.eq(r);
                v && (t[0] = g.call(this, r, o.html())), je(o, t, n, i);
            });
        if (
            d &&
            ((o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild),
            1 === r.childNodes.length && (r = o),
            o || i)
        ) {
            for (l = (a = _.map(ge(r, 'script'), Pe)).length; h < d; h++)
                (c = r),
                    h !== f &&
                        ((c = _.clone(c, !0, !0)),
                        l && _.merge(a, ge(c, 'script'))),
                    n.call(e[h], c, h);
            if (l)
                for (
                    u = a[a.length - 1].ownerDocument, _.map(a, He), h = 0;
                    h < l;
                    h++
                )
                    pe.test((c = a[h]).type || '') &&
                        !X.access(c, 'globalEval') &&
                        _.contains(u, c) &&
                        (c.src && 'module' !== (c.type || '').toLowerCase()
                            ? _._evalUrl &&
                              !c.noModule &&
                              _._evalUrl(c.src, {
                                  nonce: c.nonce || c.getAttribute('nonce'),
                              })
                            : y(c.textContent.replace(Me, ''), c, u));
        }
        return e;
    }
    function $e(e, t, n) {
        for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || _.cleanData(ge(i)),
                i.parentNode &&
                    (n && re(i) && ve(ge(i, 'script')),
                    i.parentNode.removeChild(i));
        return e;
    }
    _.extend({
        htmlPrefilter: function (e) {
            return e.replace(ke, '<$1></$2>');
        },
        clone: function (e, t, n) {
            var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                h = re(e);
            if (
                !(
                    p.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    _.isXMLDoc(e)
                )
            )
                for (s = ge(u), i = 0, r = (o = ge(e)).length; i < r; i++)
                    (a = o[i]),
                        'input' === (c = (l = s[i]).nodeName.toLowerCase()) &&
                        de.test(a.type)
                            ? (l.checked = a.checked)
                            : ('input' !== c && 'textarea' !== c) ||
                              (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || ge(e), s = s || ge(u), i = 0, r = o.length;
                        i < r;
                        i++
                    )
                        Re(o[i], s[i]);
                else Re(e, u);
            return (
                (s = ge(u, 'script')).length > 0 &&
                    ve(s, !h && ge(e, 'script')),
                u
            );
        },
        cleanData: function (e) {
            for (
                var t, n, i, r = _.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (G(n)) {
                    if ((t = n[X.expando])) {
                        if (t.events)
                            for (i in t.events)
                                r[i]
                                    ? _.event.remove(n, i)
                                    : _.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0;
                    }
                    n[Q.expando] && (n[Q.expando] = void 0);
                }
        },
    }),
        _.fn.extend({
            detach: function (e) {
                return $e(this, e, !0);
            },
            remove: function (e) {
                return $e(this, e);
            },
            text: function (e) {
                return F(
                    this,
                    function (e) {
                        return void 0 === e
                            ? _.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return je(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return je(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return je(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return je(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (_.cleanData(ge(e, !1)), (e.textContent = ''));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return _.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return F(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            'string' == typeof e &&
                            !Ie.test(e) &&
                            !me[(fe.exec(e) || ['', ''])[1].toLowerCase()]
                        ) {
                            e = _.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (_.cleanData(ge(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (r) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return je(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        _.inArray(this, e) < 0 &&
                            (_.cleanData(ge(this)),
                            n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        _.each(
            {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
            },
            function (e, t) {
                _.fn[e] = function (e) {
                    for (
                        var n, i = [], r = _(e), o = r.length - 1, s = 0;
                        s <= o;
                        s++
                    )
                        (n = s === o ? this : this.clone(!0)),
                            _(r[s])[t](n),
                            a.apply(i, n.get());
                    return this.pushStack(i);
                };
            }
        );
    var Ye = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
        We = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Fe = new RegExp(ne.join('|'), 'i');
    function Ue(e, t, n) {
        var i,
            r,
            o,
            s,
            a = e.style;
        return (
            (n = n || We(e)) &&
                ('' !== (s = n.getPropertyValue(t) || n[t]) ||
                    re(e) ||
                    (s = _.style(e, t)),
                !p.pixelBoxStyles() &&
                    Ye.test(s) &&
                    Fe.test(t) &&
                    ((i = a.width),
                    (r = a.minWidth),
                    (o = a.maxWidth),
                    (a.minWidth = a.maxWidth = a.width = s),
                    (s = n.width),
                    (a.width = i),
                    (a.minWidth = r),
                    (a.maxWidth = o))),
            void 0 !== s ? s + '' : s
        );
    }
    function Ve(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function t() {
            if (u) {
                (c.style.cssText =
                    'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                    (u.style.cssText =
                        'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                    ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                (r = '1%' !== t.top),
                    (l = 12 === n(t.marginLeft)),
                    (u.style.right = '60%'),
                    (a = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (u.style.position = 'absolute'),
                    (s = 12 === n(u.offsetWidth / 3)),
                    ie.removeChild(c),
                    (u = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var r,
            o,
            s,
            a,
            l,
            c = i.createElement('div'),
            u = i.createElement('div');
        u.style &&
            ((u.style.backgroundClip = 'content-box'),
            (u.cloneNode(!0).style.backgroundClip = ''),
            (p.clearCloneStyle = 'content-box' === u.style.backgroundClip),
            _.extend(p, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), a;
                },
                pixelPosition: function () {
                    return t(), r;
                },
                reliableMarginLeft: function () {
                    return t(), l;
                },
                scrollboxSize: function () {
                    return t(), s;
                },
            }));
    })();
    var Be = ['Webkit', 'Moz', 'ms'],
        qe = i.createElement('div').style,
        Ge = {};
    function ze(e) {
        return (
            _.cssProps[e] ||
            Ge[e] ||
            (e in qe
                ? e
                : (Ge[e] =
                      (function (e) {
                          for (
                              var t = e[0].toUpperCase() + e.slice(1),
                                  n = Be.length;
                              n--;

                          )
                              if ((e = Be[n] + t) in qe) return e;
                      })(e) || e))
        );
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Ke = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Ze = { letterSpacing: '0', fontWeight: '400' };
    function Je(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
    }
    function et(e, t, n, i, r, o) {
        var s = 'width' === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? 'border' : 'content')) return 0;
        for (; s < 4; s += 2)
            'margin' === n && (l += _.css(e, n + ne[s], !0, r)),
                i
                    ? ('content' === n &&
                          (l -= _.css(e, 'padding' + ne[s], !0, r)),
                      'margin' !== n &&
                          (l -= _.css(e, 'border' + ne[s] + 'Width', !0, r)))
                    : ((l += _.css(e, 'padding' + ne[s], !0, r)),
                      'padding' !== n
                          ? (l += _.css(e, 'border' + ne[s] + 'Width', !0, r))
                          : (a += _.css(e, 'border' + ne[s] + 'Width', !0, r)));
        return (
            !i &&
                o >= 0 &&
                (l +=
                    Math.max(
                        0,
                        Math.ceil(
                            e['offset' + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                l -
                                a -
                                0.5
                        )
                    ) || 0),
            l
        );
    }
    function tt(e, t, n) {
        var i = We(e),
            r =
                (!p.boxSizingReliable() || n) &&
                'border-box' === _.css(e, 'boxSizing', !1, i),
            o = r,
            s = Ue(e, t, i),
            a = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (Ye.test(s)) {
            if (!n) return s;
            s = 'auto';
        }
        return (
            ((!p.boxSizingReliable() && r) ||
                'auto' === s ||
                (!parseFloat(s) && 'inline' === _.css(e, 'display', !1, i))) &&
                e.getClientRects().length &&
                ((r = 'border-box' === _.css(e, 'boxSizing', !1, i)),
                (o = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) +
                et(e, t, n || (r ? 'border' : 'content'), o, i, s) +
                'px'
        );
    }
    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r);
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ue(e, 'opacity');
                        return '' === n ? '1' : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    s,
                    a = q(t),
                    l = Qe.test(t),
                    c = e.style;
                if (
                    (l || (t = ze(a)),
                    (s = _.cssHooks[t] || _.cssHooks[a]),
                    void 0 === n)
                )
                    return s && 'get' in s && void 0 !== (r = s.get(e, !1, i))
                        ? r
                        : c[t];
                'string' == (o = typeof n) &&
                    (r = te.exec(n)) &&
                    r[1] &&
                    ((n = le(e, t, r)), (o = 'number')),
                    null != n &&
                        n == n &&
                        ('number' !== o ||
                            l ||
                            (n += (r && r[3]) || (_.cssNumber[a] ? '' : 'px')),
                        p.clearCloneStyle ||
                            '' !== n ||
                            0 !== t.indexOf('background') ||
                            (c[t] = 'inherit'),
                        (s && 'set' in s && void 0 === (n = s.set(e, n, i))) ||
                            (l ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, i) {
            var r,
                o,
                s,
                a = q(t);
            return (
                Qe.test(t) || (t = ze(a)),
                (s = _.cssHooks[t] || _.cssHooks[a]) &&
                    'get' in s &&
                    (r = s.get(e, !0, n)),
                void 0 === r && (r = Ue(e, t, i)),
                'normal' === r && t in Ze && (r = Ze[t]),
                '' === n || n
                    ? ((o = parseFloat(r)),
                      !0 === n || isFinite(o) ? o || 0 : r)
                    : r
            );
        },
    }),
        _.each(['height', 'width'], function (e, t) {
            _.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)
                        return !Xe.test(_.css(e, 'display')) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? tt(e, t, i)
                            : ae(e, Ke, function () {
                                  return tt(e, t, i);
                              });
                },
                set: function (e, n, i) {
                    var r,
                        o = We(e),
                        s = !p.scrollboxSize() && 'absolute' === o.position,
                        a =
                            (s || i) &&
                            'border-box' === _.css(e, 'boxSizing', !1, o),
                        l = i ? et(e, t, i, a, o) : 0;
                    return (
                        a &&
                            s &&
                            (l -= Math.ceil(
                                e['offset' + t[0].toUpperCase() + t.slice(1)] -
                                    parseFloat(o[t]) -
                                    et(e, t, 'border', !1, o) -
                                    0.5
                            )),
                        l &&
                            (r = te.exec(n)) &&
                            'px' !== (r[3] || 'px') &&
                            ((e.style[t] = n), (n = _.css(e, t))),
                        Je(0, n, l)
                    );
                },
            };
        }),
        (_.cssHooks.marginLeft = Ve(p.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ue(e, 'marginLeft')) ||
                        e.getBoundingClientRect().left -
                            ae(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + 'px'
                );
        })),
        _.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
            (_.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var i = 0,
                            r = {},
                            o = 'string' == typeof n ? n.split(' ') : [n];
                        i < 4;
                        i++
                    )
                        r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                },
            }),
                'margin' !== e && (_.cssHooks[e + t].set = Je);
        }),
        _.fn.extend({
            css: function (e, t) {
                return F(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = We(e), r = t.length; s < r; s++)
                                o[t[s]] = _.css(e, t[s], !1, i);
                            return o;
                        }
                        return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        }),
        (_.Tween = nt),
        ((nt.prototype = {
            constructor: nt,
            init: function (e, t, n, i, r, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = r || _.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = i),
                    (this.unit = o || (_.cssNumber[n] ? '' : 'px'));
            },
            cur: function () {
                var e = nt.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : nt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = nt.propHooks[this.prop];
                return (
                    (this.pos = t =
                        this.options.duration
                            ? _.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              )
                            : e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = nt.prototype),
        ((nt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = _.css(e.elem, e.prop, '')) && 'auto' !== t
                        ? t
                        : 0;
                },
                set: function (e) {
                    _.fx.step[e.prop]
                        ? _.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!_.cssHooks[e.prop] &&
                              null == e.elem.style[ze(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : _.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = nt.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (_.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: 'swing',
        }),
        (_.fx = nt.prototype.init),
        (_.fx.step = {});
    var it,
        rt,
        ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    function at() {
        rt &&
            (!1 === i.hidden && e.requestAnimationFrame
                ? e.requestAnimationFrame(at)
                : e.setTimeout(at, _.fx.interval),
            _.fx.tick());
    }
    function lt() {
        return (
            e.setTimeout(function () {
                it = void 0;
            }),
            (it = Date.now())
        );
    }
    function ct(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r['margin' + (n = ne[i])] = r['padding' + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function ut(e, t, n) {
        for (
            var i,
                r = (ht.tweeners[t] || []).concat(ht.tweeners['*']),
                o = 0,
                s = r.length;
            o < s;
            o++
        )
            if ((i = r[o].call(n, t, e))) return i;
    }
    function ht(e, t, n) {
        var i,
            r,
            o = 0,
            s = ht.prefilters.length,
            a = _.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (r) return !1;
                for (
                    var t = it || lt(),
                        n = Math.max(0, c.startTime + c.duration - t),
                        i = 1 - (n / c.duration || 0),
                        o = 0,
                        s = c.tweens.length;
                    o < s;
                    o++
                )
                    c.tweens[o].run(i);
                return (
                    a.notifyWith(e, [c, i, n]),
                    i < 1 && s
                        ? n
                        : (s || a.notifyWith(e, [c, 1, 0]),
                          a.resolveWith(e, [c]),
                          !1)
                );
            },
            c = a.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(
                    !0,
                    { specialEasing: {}, easing: _.easing._default },
                    n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: it || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = _.Tween(
                        e,
                        c.opts,
                        t,
                        n,
                        c.opts.specialEasing[t] || c.opts.easing
                    );
                    return c.tweens.push(i), i;
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return (
                        t
                            ? (a.notifyWith(e, [c, 1, 0]),
                              a.resolveWith(e, [c, t]))
                            : a.rejectWith(e, [c, t]),
                        this
                    );
                },
            }),
            u = c.props;
        for (
            (function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (
                        ((r = t[(i = q(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                        n !== i && ((e[i] = o), delete e[n]),
                        (s = _.cssHooks[i]) && ('expand' in s))
                    )
                        for (n in ((o = s.expand(o)), delete e[i], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = r));
                    else t[i] = r;
            })(u, c.opts.specialEasing);
            o < s;
            o++
        )
            if ((i = ht.prefilters[o].call(c, e, u, c.opts)))
                return (
                    m(i.stop) &&
                        (_._queueHooks(c.elem, c.opts.queue).stop =
                            i.stop.bind(i)),
                    i
                );
        return (
            _.map(u, ut, c),
            m(c.opts.start) && c.opts.start.call(e, c),
            c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
            _.fx.timer(_.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (_.Animation = _.extend(ht, {
        tweeners: {
            '*': [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
            for (var n, i = 0, r = e.length; i < r; i++)
                (ht.tweeners[(n = e[i])] = ht.tweeners[n] || []).unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    h = 'width' in t || 'height' in t,
                    d = this,
                    f = {},
                    p = e.style,
                    m = e.nodeType && se(e),
                    g = X.get(e, 'fxshow');
                for (i in (n.queue ||
                    (null == (s = _._queueHooks(e, 'fx')).unqueued &&
                        ((s.unqueued = 0),
                        (a = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || a();
                        })),
                    s.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            s.unqueued--,
                                _.queue(e, 'fx').length || s.empty.fire();
                        });
                    })),
                t))
                    if (ot.test((r = t[i]))) {
                        if (
                            (delete t[i],
                            (o = o || 'toggle' === r),
                            r === (m ? 'hide' : 'show'))
                        ) {
                            if ('show' !== r || !g || void 0 === g[i]) continue;
                            m = !0;
                        }
                        f[i] = (g && g[i]) || _.style(e, i);
                    }
                if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
                    for (i in (h &&
                        1 === e.nodeType &&
                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        null == (c = g && g.display) &&
                            (c = X.get(e, 'display')),
                        'none' === (u = _.css(e, 'display')) &&
                            (c
                                ? (u = c)
                                : (he([e], !0),
                                  (c = e.style.display || c),
                                  (u = _.css(e, 'display')),
                                  he([e]))),
                        ('inline' === u ||
                            ('inline-block' === u && null != c)) &&
                            'none' === _.css(e, 'float') &&
                            (l ||
                                (d.done(function () {
                                    p.display = c;
                                }),
                                null == c &&
                                    (c = 'none' === (u = p.display) ? '' : u)),
                            (p.display = 'inline-block'))),
                    n.overflow &&
                        ((p.overflow = 'hidden'),
                        d.always(function () {
                            (p.overflow = n.overflow[0]),
                                (p.overflowX = n.overflow[1]),
                                (p.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    f))
                        l ||
                            (g
                                ? 'hidden' in g && (m = g.hidden)
                                : (g = X.access(e, 'fxshow', { display: c })),
                            o && (g.hidden = !m),
                            m && he([e], !0),
                            d.done(function () {
                                for (i in (m || he([e]),
                                X.remove(e, 'fxshow'),
                                f))
                                    _.style(e, i, f[i]);
                            })),
                            (l = ut(m ? g[i] : 0, i, d)),
                            i in g ||
                                ((g[i] = l.start),
                                m && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
        },
    })),
        (_.speed = function (e, t, n) {
            var i =
                e && 'object' == typeof e
                    ? _.extend({}, e)
                    : {
                          complete: n || (!n && t) || (m(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !m(t) && t),
                      };
            return (
                _.fx.off
                    ? (i.duration = 0)
                    : 'number' != typeof i.duration &&
                      (i.duration =
                          i.duration in _.fx.speeds
                              ? _.fx.speeds[i.duration]
                              : _.fx.speeds._default),
                (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
                (i.old = i.complete),
                (i.complete = function () {
                    m(i.old) && i.old.call(this),
                        i.queue && _.dequeue(this, i.queue);
                }),
                i
            );
        }),
        _.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(se)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
                var r = _.isEmptyObject(e),
                    o = _.speed(t, n, i),
                    s = function () {
                        var t = ht(this, _.extend({}, e), o);
                        (r || X.get(this, 'finish')) && t.stop(!0);
                    };
                return (
                    (s.finish = s),
                    r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || 'fx', []),
                    this.each(function () {
                        var t = !0,
                            r = null != e && e + 'queueHooks',
                            o = _.timers,
                            s = X.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s)
                                s[r] && s[r].stop && st.test(r) && i(s[r]);
                        for (r = o.length; r--; )
                            o[r].elem !== this ||
                                (null != e && o[r].queue !== e) ||
                                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                        (!t && n) || _.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || 'fx'),
                    this.each(function () {
                        var t,
                            n = X.get(this),
                            i = n[e + 'queue'],
                            r = n[e + 'queueHooks'],
                            o = _.timers,
                            s = i ? i.length : 0;
                        for (
                            n.finish = !0,
                                _.queue(this, e, []),
                                r && r.stop && r.stop.call(this, !0),
                                t = o.length;
                            t--;

                        )
                            o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        _.each(['toggle', 'show', 'hide'], function (e, t) {
            var n = _.fn[t];
            _.fn[t] = function (e, i, r) {
                return null == e || 'boolean' == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ct(t, !0), e, i, r);
            };
        }),
        _.each(
            {
                slideDown: ct('show'),
                slideUp: ct('hide'),
                slideToggle: ct('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' },
            },
            function (e, t) {
                _.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i);
                };
            }
        ),
        (_.timers = []),
        (_.fx.tick = function () {
            var e,
                t = 0,
                n = _.timers;
            for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || _.fx.stop(), (it = void 0);
        }),
        (_.fx.timer = function (e) {
            _.timers.push(e), _.fx.start();
        }),
        (_.fx.interval = 13),
        (_.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (_.fx.stop = function () {
            rt = null;
        }),
        (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (_.fn.delay = function (t, n) {
            return (
                (t = (_.fx && _.fx.speeds[t]) || t),
                this.queue((n = n || 'fx'), function (n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(r);
                    };
                })
            );
        }),
        (function () {
            var e = i.createElement('input'),
                t = i
                    .createElement('select')
                    .appendChild(i.createElement('option'));
            (e.type = 'checkbox'),
                (p.checkOn = '' !== e.value),
                (p.optSelected = t.selected),
                ((e = i.createElement('input')).value = 't'),
                (e.type = 'radio'),
                (p.radioValue = 't' === e.value);
        })();
    var dt,
        ft = _.expr.attrHandle;
    _.fn.extend({
        attr: function (e, t) {
            return F(this, _.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                _.removeAttr(this, e);
            });
        },
    }),
        _.extend({
            attr: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? _.prop(e, t, n)
                        : ((1 === o && _.isXMLDoc(e)) ||
                              (r =
                                  _.attrHooks[t.toLowerCase()] ||
                                  (_.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void _.removeAttr(e, t)
                                  : r &&
                                    'set' in r &&
                                    void 0 !== (i = r.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ''), n)
                              : r && 'get' in r && null !== (i = r.get(e, t))
                              ? i
                              : null == (i = _.find.attr(e, t))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!p.radioValue && 'radio' === t && A(e, 'input')) {
                            var n = e.value;
                            return (
                                e.setAttribute('type', t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    r = t && t.match(P);
                if (r && 1 === e.nodeType)
                    for (; (n = r[i++]); ) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ft[t] || _.find.attr;
            ft[t] = function (e, t, i) {
                var r,
                    o,
                    s = t.toLowerCase();
                return (
                    i ||
                        ((o = ft[s]),
                        (ft[s] = r),
                        (r = null != n(e, t, i) ? s : null),
                        (ft[s] = o)),
                    r
                );
            };
        });
    var pt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
    function gt(e) {
        return (e.match(P) || []).join(' ');
    }
    function vt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function yt(e) {
        return Array.isArray(e)
            ? e
            : ('string' == typeof e && e.match(P)) || [];
    }
    _.fn.extend({
        prop: function (e, t) {
            return F(this, _.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[_.propFix[e] || e];
            });
        },
    }),
        _.extend({
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && _.isXMLDoc(e)) ||
                            (r = _.propHooks[(t = _.propFix[t] || t)]),
                        void 0 !== n
                            ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                                ? i
                                : (e[t] = n)
                            : r && 'get' in r && null !== (i = r.get(e, t))
                            ? i
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = _.find.attr(e, 'tabindex');
                        return t
                            ? parseInt(t, 10)
                            : pt.test(e.nodeName) ||
                              (mt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: 'htmlFor', class: 'className' },
        }),
        p.optSelected ||
            (_.propHooks.selected = {
                get: function (e) {
                    return null;
                },
                set: function (e) {},
            }),
        _.each(
            [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
            ],
            function () {
                _.propFix[this.toLowerCase()] = this;
            }
        ),
        _.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = 0;
                if (m(e))
                    return this.each(function (t) {
                        _(this).addClass(e.call(this, t, vt(this)));
                    });
                if ((t = yt(e)).length)
                    for (; (n = this[l++]); )
                        if (
                            ((r = vt(n)),
                            (i = 1 === n.nodeType && ' ' + gt(r) + ' '))
                        ) {
                            for (s = 0; (o = t[s++]); )
                                i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
                            r !== (a = gt(i)) && n.setAttribute('class', a);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = 0;
                if (m(e))
                    return this.each(function (t) {
                        _(this).removeClass(e.call(this, t, vt(this)));
                    });
                if (!arguments.length) return this.attr('class', '');
                if ((t = yt(e)).length)
                    for (; (n = this[l++]); )
                        if (
                            ((r = vt(n)),
                            (i = 1 === n.nodeType && ' ' + gt(r) + ' '))
                        ) {
                            for (s = 0; (o = t[s++]); )
                                for (; i.indexOf(' ' + o + ' ') > -1; )
                                    i = i.replace(' ' + o + ' ', ' ');
                            r !== (a = gt(i)) && n.setAttribute('class', a);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = 'string' === n || Array.isArray(e);
                return 'boolean' == typeof t && i
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : m(e)
                    ? this.each(function (n) {
                          _(this).toggleClass(e.call(this, n, vt(this), t), t);
                      })
                    : this.each(function () {
                          var t, r, o, s;
                          if (i)
                              for (
                                  r = 0, o = _(this), s = yt(e);
                                  (t = s[r++]);

                              )
                                  o.hasClass(t)
                                      ? o.removeClass(t)
                                      : o.addClass(t);
                          else
                              (void 0 !== e && 'boolean' !== n) ||
                                  ((t = vt(this)) &&
                                      X.set(this, '__className__', t),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          'class',
                                          t || !1 === e
                                              ? ''
                                              : X.get(this, '__className__') ||
                                                    ''
                                      ));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    i = 0;
                for (t = ' ' + e + ' '; (n = this[i++]); )
                    if (
                        1 === n.nodeType &&
                        (' ' + gt(vt(n)) + ' ').indexOf(t) > -1
                    )
                        return !0;
                return !1;
            },
        });
    var bt = /\r/g;
    _.fn.extend({
        val: function (e) {
            var t,
                n,
                i,
                r = this[0];
            return arguments.length
                ? ((i = m(e)),
                  this.each(function (n) {
                      var r;
                      1 === this.nodeType &&
                          (null == (r = i ? e.call(this, n, _(this).val()) : e)
                              ? (r = '')
                              : 'number' == typeof r
                              ? (r += '')
                              : Array.isArray(r) &&
                                (r = _.map(r, function (e) {
                                    return null == e ? '' : e + '';
                                })),
                          ((t =
                              _.valHooks[this.type] ||
                              _.valHooks[this.nodeName.toLowerCase()]) &&
                              'set' in t &&
                              void 0 !== t.set(this, r, 'value')) ||
                              (this.value = r));
                  }))
                : r
                ? (t =
                      _.valHooks[r.type] ||
                      _.valHooks[r.nodeName.toLowerCase()]) &&
                  'get' in t &&
                  void 0 !== (n = t.get(r, 'value'))
                    ? n
                    : 'string' == typeof (n = r.value)
                    ? n.replace(bt, '')
                    : null == n
                    ? ''
                    : n
                : void 0;
        },
    }),
        _.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = _.find.attr(e, 'value');
                        return null != t ? t : gt(_.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            i,
                            r = e.options,
                            o = e.selectedIndex,
                            s = 'select-one' === e.type,
                            a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (
                                ((n = r[i]).selected || i === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !A(n.parentNode, 'optgroup'))
                            ) {
                                if (((t = _(n).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (
                            var n,
                                i,
                                r = e.options,
                                o = _.makeArray(t),
                                s = r.length;
                            s--;

                        )
                            ((i = r[s]).selected =
                                _.inArray(_.valHooks.option.get(i), o) > -1) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        _.each(['radio', 'checkbox'], function () {
            (_.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = _.inArray(_(e).val(), t) > -1);
                },
            }),
                p.checkOn ||
                    (_.valHooks[this].get = function (e) {
                        return null === e.getAttribute('value')
                            ? 'on'
                            : e.value;
                    });
        }),
        (p.focusin = 'onfocusin' in e);
    var _t = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    _.extend(_.event, {
        trigger: function (t, n, r, o) {
            var s,
                a,
                l,
                c,
                u,
                d,
                f,
                p,
                v = [r || i],
                y = h.call(t, 'type') ? t.type : t,
                b = h.call(t, 'namespace') ? t.namespace.split('.') : [];
            if (
                ((a = p = l = r = r || i),
                3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !_t.test(y + _.event.triggered) &&
                    (y.indexOf('.') > -1 &&
                        ((b = y.split('.')), (y = b.shift()), b.sort()),
                    (u = y.indexOf(':') < 0 && 'on' + y),
                    ((t = t[_.expando]
                        ? t
                        : new _.Event(y, 'object' == typeof t && t)).isTrigger =
                        o ? 2 : 3),
                    (t.namespace = b.join('.')),
                    (t.rnamespace = t.namespace
                        ? new RegExp(
                              '(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)'
                          )
                        : null),
                    (t.result = void 0),
                    t.target || (t.target = r),
                    (n = null == n ? [t] : _.makeArray(n, [t])),
                    (f = _.event.special[y] || {}),
                    o || !f.trigger || !1 !== f.trigger.apply(r, n)))
            ) {
                if (!o && !f.noBubble && !g(r)) {
                    for (
                        _t.test((c = f.delegateType || y) + y) ||
                        (a = a.parentNode);
                        a;
                        a = a.parentNode
                    )
                        v.push(a), (l = a);
                    l === (r.ownerDocument || i) &&
                        v.push(l.defaultView || l.parentWindow || e);
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
                    (p = a),
                        (t.type = s > 1 ? c : f.bindType || y),
                        (d =
                            (X.get(a, 'events') || {})[t.type] &&
                            X.get(a, 'handle')) && d.apply(a, n),
                        (d = u && a[u]) &&
                            d.apply &&
                            G(a) &&
                            ((t.result = d.apply(a, n)),
                            !1 === t.result && t.preventDefault());
                return (
                    (t.type = y),
                    o ||
                        t.isDefaultPrevented() ||
                        (f._default && !1 !== f._default.apply(v.pop(), n)) ||
                        !G(r) ||
                        (u &&
                            m(r[y]) &&
                            !g(r) &&
                            ((l = r[u]) && (r[u] = null),
                            (_.event.triggered = y),
                            t.isPropagationStopped() &&
                                p.addEventListener(y, wt),
                            r[y](),
                            t.isPropagationStopped() &&
                                p.removeEventListener(y, wt),
                            (_.event.triggered = void 0),
                            l && (r[u] = l))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
            _.event.trigger(i, null, t);
        },
    }),
        _.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    _.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return _.event.trigger(e, t, n, !0);
            },
        }),
        p.focusin ||
            _.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
                var n = function (e) {
                    _.event.simulate(t, e.target, _.event.fix(e));
                };
                _.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this,
                            r = X.access(i, t);
                        r || i.addEventListener(e, n, !0),
                            X.access(i, t, (r || 0) + 1);
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this,
                            r = X.access(i, t) - 1;
                        r
                            ? X.access(i, t, r)
                            : (i.removeEventListener(e, n, !0), X.remove(i, t));
                    },
                };
            });
    var xt = e.location,
        Et = Date.now(),
        St = /\?/;
    _.parseXML = function (t) {
        var n;
        if (!t || 'string' != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, 'text/xml');
        } catch (i) {
            n = void 0;
        }
        return (
            (n && !n.getElementsByTagName('parsererror').length) ||
                _.error('Invalid XML: ' + t),
            n
        );
    };
    var Tt = /\[\]$/,
        Ct = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    function Ot(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            _.each(t, function (t, r) {
                n || Tt.test(e)
                    ? i(e, r)
                    : Ot(
                          e +
                              '[' +
                              ('object' == typeof r && null != r ? t : '') +
                              ']',
                          r,
                          n,
                          i
                      );
            });
        else if (n || 'object' !== b(t)) i(e, t);
        else for (r in t) Ot(e + '[' + r + ']', t[r], n, i);
    }
    (_.param = function (e, t) {
        var n,
            i = [],
            r = function (e, t) {
                var n = m(t) ? t() : t;
                i[i.length] =
                    encodeURIComponent(e) +
                    '=' +
                    encodeURIComponent(null == n ? '' : n);
            };
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
            _.each(e, function () {
                r(this.name, this.value);
            });
        else for (n in e) Ot(n, e[n], t, r);
        return i.join('&');
    }),
        _.fn.extend({
            serialize: function () {
                return _.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = _.prop(this, 'elements');
                    return e ? _.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !_(this).is(':disabled') &&
                            Dt.test(this.nodeName) &&
                            !At.test(e) &&
                            (this.checked || !de.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = _(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? _.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Ct, '\r\n'),
                                  };
                              })
                            : { name: t.name, value: n.replace(Ct, '\r\n') };
                    })
                    .get();
            },
        });
    var kt = /%20/g,
        It = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Ht = {},
        Rt = {},
        jt = '*/'.concat('*'),
        $t = i.createElement('a');
    function Yt(e) {
        return function (t, n) {
            'string' != typeof t && ((n = t), (t = '*'));
            var i,
                r = 0,
                o = t.toLowerCase().match(P) || [];
            if (m(n))
                for (; (i = o[r++]); )
                    '+' === i[0]
                        ? ((i = i.slice(1) || '*'),
                          (e[i] = e[i] || []).unshift(n))
                        : (e[i] = e[i] || []).push(n);
        };
    }
    function Wt(e, t, n, i) {
        var r = {},
            o = e === Rt;
        function s(a) {
            var l;
            return (
                (r[a] = !0),
                _.each(e[a] || [], function (e, a) {
                    var c = a(t, n, i);
                    return 'string' != typeof c || o || r[c]
                        ? o
                            ? !(l = c)
                            : void 0
                        : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
            );
        }
        return s(t.dataTypes[0]) || (!r['*'] && s('*'));
    }
    function Ft(e, t) {
        var n,
            i,
            r = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && _.extend(!0, e, i), e;
    }
    ($t.href = xt.href),
        _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt.href,
                type: 'GET',
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        xt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    '*': jt,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript',
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON',
                },
                converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': _.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, _.ajaxSettings), t) : Ft(_.ajaxSettings, e);
            },
            ajaxPrefilter: Yt(Ht),
            ajaxTransport: Yt(Rt),
            ajax: function (t, n) {
                'object' == typeof t && ((n = t), (t = void 0));
                var r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    h,
                    d,
                    f,
                    p = _.ajaxSetup({}, (n = n || {})),
                    m = p.context || p,
                    g = p.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                    v = _.Deferred(),
                    y = _.Callbacks('once memory'),
                    b = p.statusCode || {},
                    w = {},
                    x = {},
                    E = 'canceled',
                    S = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!a)
                                    for (a = {}; (t = Mt.exec(s)); )
                                        a[t[1].toLowerCase() + ' '] = (
                                            a[t[1].toLowerCase() + ' '] || []
                                        ).concat(t[2]);
                                t = a[e.toLowerCase() + ' '];
                            }
                            return null == t ? null : t.join(', ');
                        },
                        getAllResponseHeaders: function () {
                            return u ? s : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == u &&
                                    ((e = x[e.toLowerCase()] =
                                        x[e.toLowerCase()] || e),
                                    (w[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == u && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) S.always(e[S.status]);
                                else for (t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || E;
                            return r && r.abort(t), T(0, t), this;
                        },
                    };
                if (
                    (v.promise(S),
                    (p.url = ((t || p.url || xt.href) + '').replace(
                        Pt,
                        xt.protocol + '//'
                    )),
                    (p.type = n.method || n.type || p.method || p.type),
                    (p.dataTypes = (p.dataType || '*')
                        .toLowerCase()
                        .match(P) || ['']),
                    null == p.crossDomain)
                ) {
                    c = i.createElement('a');
                    try {
                        (c.href = p.url),
                            (c.href = c.href),
                            (p.crossDomain =
                                $t.protocol + '//' + $t.host !=
                                c.protocol + '//' + c.host);
                    } catch (C) {
                        p.crossDomain = !0;
                    }
                }
                if (
                    (p.data &&
                        p.processData &&
                        'string' != typeof p.data &&
                        (p.data = _.param(p.data, p.traditional)),
                    Wt(Ht, p, n, S),
                    u)
                )
                    return S;
                for (d in ((h = _.event && p.global) &&
                    0 == _.active++ &&
                    _.event.trigger('ajaxStart'),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Lt.test(p.type)),
                (o = p.url.replace(It, '')),
                p.hasContent
                    ? p.data &&
                      p.processData &&
                      0 ===
                          (p.contentType || '').indexOf(
                              'application/x-www-form-urlencoded'
                          ) &&
                      (p.data = p.data.replace(kt, '+'))
                    : ((f = p.url.slice(o.length)),
                      p.data &&
                          (p.processData || 'string' == typeof p.data) &&
                          ((o += (St.test(o) ? '&' : '?') + p.data),
                          delete p.data),
                      !1 === p.cache &&
                          ((o = o.replace(Nt, '$1')),
                          (f = (St.test(o) ? '&' : '?') + '_=' + Et++ + f)),
                      (p.url = o + f)),
                p.ifModified &&
                    (_.lastModified[o] &&
                        S.setRequestHeader(
                            'If-Modified-Since',
                            _.lastModified[o]
                        ),
                    _.etag[o] &&
                        S.setRequestHeader('If-None-Match', _.etag[o])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                    n.contentType) &&
                    S.setRequestHeader('Content-Type', p.contentType),
                S.setRequestHeader(
                    'Accept',
                    p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                        ? p.accepts[p.dataTypes[0]] +
                              ('*' !== p.dataTypes[0]
                                  ? ', ' + jt + '; q=0.01'
                                  : '')
                        : p.accepts['*']
                ),
                p.headers))
                    S.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(m, S, p) || u))
                    return S.abort();
                if (
                    ((E = 'abort'),
                    y.add(p.complete),
                    S.done(p.success),
                    S.fail(p.error),
                    (r = Wt(Rt, p, n, S)))
                ) {
                    if (
                        ((S.readyState = 1),
                        h && g.trigger('ajaxSend', [S, p]),
                        u)
                    )
                        return S;
                    p.async &&
                        p.timeout > 0 &&
                        (l = e.setTimeout(function () {
                            S.abort('timeout');
                        }, p.timeout));
                    try {
                        (u = !1), r.send(w, T);
                    } catch (C) {
                        if (u) throw C;
                        T(-1, C);
                    }
                } else T(-1, 'No Transport');
                function T(t, n, i, a) {
                    var c,
                        d,
                        f,
                        w,
                        x,
                        E = n;
                    u ||
                        ((u = !0),
                        l && e.clearTimeout(l),
                        (r = void 0),
                        (s = a || ''),
                        (S.readyState = t > 0 ? 4 : 0),
                        (c = (t >= 200 && t < 300) || 304 === t),
                        i &&
                            (w = (function (e, t, n) {
                                for (
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a = e.contents,
                                        l = e.dataTypes;
                                    '*' === l[0];

                                )
                                    l.shift(),
                                        void 0 === i &&
                                            (i =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    'Content-Type'
                                                ));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (
                                            !l[0] ||
                                            e.converters[r + ' ' + l[0]]
                                        ) {
                                            o = r;
                                            break;
                                        }
                                        s || (s = r);
                                    }
                                    o = o || s;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(p, S, i)),
                        (w = (function (e, t, n, i) {
                            var r,
                                o,
                                s,
                                a,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (s in e.converters)
                                    c[s.toLowerCase()] = e.converters[s];
                            for (o = u.shift(); o; )
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !l &&
                                        i &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (l = o),
                                    (o = u.shift()))
                                )
                                    if ('*' === o) o = l;
                                    else if ('*' !== l && l !== o) {
                                        if (
                                            !(s = c[l + ' ' + o] || c['* ' + o])
                                        )
                                            for (r in c)
                                                if (
                                                    (a = r.split(' '))[1] ===
                                                        o &&
                                                    (s =
                                                        c[l + ' ' + a[0]] ||
                                                        c['* ' + a[0]])
                                                ) {
                                                    !0 === s
                                                        ? (s = c[r])
                                                        : !0 !== c[r] &&
                                                          ((o = a[0]),
                                                          u.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (C) {
                                                    return {
                                                        state: 'parsererror',
                                                        error: s
                                                            ? C
                                                            : 'No conversion from ' +
                                                              l +
                                                              ' to ' +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: 'success', data: t };
                        })(p, w, S, c)),
                        c
                            ? (p.ifModified &&
                                  ((x = S.getResponseHeader('Last-Modified')) &&
                                      (_.lastModified[o] = x),
                                  (x = S.getResponseHeader('etag')) &&
                                      (_.etag[o] = x)),
                              204 === t || 'HEAD' === p.type
                                  ? (E = 'nocontent')
                                  : 304 === t
                                  ? (E = 'notmodified')
                                  : ((E = w.state),
                                    (d = w.data),
                                    (c = !(f = w.error))))
                            : ((f = E),
                              (!t && E) || ((E = 'error'), t < 0 && (t = 0))),
                        (S.status = t),
                        (S.statusText = (n || E) + ''),
                        c
                            ? v.resolveWith(m, [d, E, S])
                            : v.rejectWith(m, [S, E, f]),
                        S.statusCode(b),
                        (b = void 0),
                        h &&
                            g.trigger(c ? 'ajaxSuccess' : 'ajaxError', [
                                S,
                                p,
                                c ? d : f,
                            ]),
                        y.fireWith(m, [S, E]),
                        h &&
                            (g.trigger('ajaxComplete', [S, p]),
                            --_.active || _.event.trigger('ajaxStop')));
                }
                return S;
            },
            getJSON: function (e, t, n) {
                return _.get(e, t, n, 'json');
            },
            getScript: function (e, t) {
                return _.get(e, void 0, t, 'script');
            },
        }),
        _.each(['get', 'post'], function (e, t) {
            _[t] = function (e, n, i, r) {
                return (
                    m(n) && ((r = r || i), (i = n), (n = void 0)),
                    _.ajax(
                        _.extend(
                            {
                                url: e,
                                type: t,
                                dataType: r,
                                data: n,
                                success: i,
                            },
                            _.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        (_._evalUrl = function (e, t) {
            return _.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: { 'text script': function () {} },
                dataFilter: function (e) {
                    _.globalEval(e, t);
                },
            });
        }),
        _.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; )
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return m(e)
                    ? this.each(function (t) {
                          _(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = _(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                    _(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not('body')
                        .each(function () {
                            _(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (_.expr.pseudos.hidden = function (e) {
            return !_.expr.pseudos.visible(e);
        }),
        (_.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (_.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (t) {}
        });
    var Ut = { 0: 200, 1223: 204 },
        Vt = _.ajaxSettings.xhr();
    (p.cors = !!Vt && 'withCredentials' in Vt),
        (p.ajax = Vt = !!Vt),
        _.ajaxTransport(function (t) {
            var n, i;
            if (p.cors || (Vt && !t.crossDomain))
                return {
                    send: function (r, o) {
                        var s,
                            a = t.xhr();
                        if (
                            (a.open(
                                t.type,
                                t.url,
                                t.async,
                                t.username,
                                t.password
                            ),
                            t.xhrFields)
                        )
                            for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        for (s in (t.mimeType &&
                            a.overrideMimeType &&
                            a.overrideMimeType(t.mimeType),
                        t.crossDomain ||
                            r['X-Requested-With'] ||
                            (r['X-Requested-With'] = 'XMLHttpRequest'),
                        r))
                            a.setRequestHeader(s, r[s]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n =
                                        i =
                                        a.onload =
                                        a.onerror =
                                        a.onabort =
                                        a.ontimeout =
                                        a.onreadystatechange =
                                            null),
                                    'abort' === e
                                        ? a.abort()
                                        : 'error' === e
                                        ? 'number' != typeof a.status
                                            ? o(0, 'error')
                                            : o(a.status, a.statusText)
                                        : o(
                                              Ut[a.status] || a.status,
                                              a.statusText,
                                              'text' !==
                                                  (a.responseType || 'text') ||
                                                  'string' !=
                                                      typeof a.responseText
                                                  ? { binary: a.response }
                                                  : { text: a.responseText },
                                              a.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (a.onload = n()),
                            (i = a.onerror = a.ontimeout = n('error')),
                            void 0 !== a.onabort
                                ? (a.onabort = i)
                                : (a.onreadystatechange = function () {
                                      4 === a.readyState &&
                                          e.setTimeout(function () {
                                              n && i();
                                          });
                                  }),
                            (n = n('abort'));
                        try {
                            a.send((t.hasContent && t.data) || null);
                        } catch (l) {
                            if (n) throw l;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        _.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        _.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                'text script': function (e) {
                    return _.globalEval(e), e;
                },
            },
        }),
        _.ajaxPrefilter('script', function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = 'GET');
        }),
        _.ajaxTransport('script', function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function (r, o) {
                        (t = _('<script>')
                            .attr(e.scriptAttrs || {})
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                'load error',
                                (n = function (e) {
                                    t.remove(),
                                        (n = null),
                                        e &&
                                            o(
                                                'error' === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            i.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var Bt,
        qt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var e = qt.pop() || _.expando + '_' + Et++;
            return (this[e] = !0), e;
        },
    }),
        _.ajaxPrefilter('json jsonp', function (t, n, i) {
            var r,
                o,
                s,
                a =
                    !1 !== t.jsonp &&
                    (Gt.test(t.url)
                        ? 'url'
                        : 'string' == typeof t.data &&
                          0 ===
                              (t.contentType || '').indexOf(
                                  'application/x-www-form-urlencoded'
                              ) &&
                          Gt.test(t.data) &&
                          'data');
            if (a || 'jsonp' === t.dataTypes[0])
                return (
                    (r = t.jsonpCallback =
                        m(t.jsonpCallback)
                            ? t.jsonpCallback()
                            : t.jsonpCallback),
                    a
                        ? (t[a] = t[a].replace(Gt, '$1' + r))
                        : !1 !== t.jsonp &&
                          (t.url +=
                              (St.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
                    (t.converters['script json'] = function () {
                        return s || _.error(r + ' was not called'), s[0];
                    }),
                    (t.dataTypes[0] = 'json'),
                    (o = e[r]),
                    (e[r] = function () {
                        s = arguments;
                    }),
                    i.always(function () {
                        void 0 === o ? _(e).removeProp(r) : (e[r] = o),
                            t[r] &&
                                ((t.jsonpCallback = n.jsonpCallback),
                                qt.push(r)),
                            s && m(o) && o(s[0]),
                            (s = o = void 0);
                    }),
                    'script'
                );
        }),
        (p.createHTMLDocument =
            (((Bt = i.implementation.createHTMLDocument('').body).innerHTML =
                '<form></form><form></form>'),
            2 === Bt.childNodes.length)),
        (_.parseHTML = function (e, t, n) {
            return 'string' != typeof e
                ? []
                : ('boolean' == typeof t && ((n = t), (t = !1)),
                  t ||
                      (p.createHTMLDocument
                          ? (((r = (t =
                                i.implementation.createHTMLDocument(
                                    ''
                                )).createElement('base')).href =
                                i.location.href),
                            t.head.appendChild(r))
                          : (t = i)),
                  (s = !n && []),
                  (o = D.exec(e))
                      ? [t.createElement(o[1])]
                      : ((o = we([e], t, s)),
                        s && s.length && _(s).remove(),
                        _.merge([], o.childNodes)));
            var r, o, s;
        }),
        (_.fn.load = function (e, t, n) {
            var i,
                r,
                o,
                s = this,
                a = e.indexOf(' ');
            return (
                a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
                m(t)
                    ? ((n = t), (t = void 0))
                    : t && 'object' == typeof t && (r = 'POST'),
                s.length > 0 &&
                    _.ajax({
                        url: e,
                        type: r || 'GET',
                        dataType: 'html',
                        data: t,
                    })
                        .done(function (e) {
                            (o = arguments),
                                s.html(
                                    i
                                        ? _('<div>')
                                              .append(_.parseHTML(e))
                                              .find(i)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    s.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        _.each(
            [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend',
            ],
            function (e, t) {
                _.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (_.expr.pseudos.animated = function (e) {
            return _.grep(_.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (_.offset = {
            setOffset: function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c = _.css(e, 'position'),
                    u = _(e),
                    h = {};
                'static' === c && (e.style.position = 'relative'),
                    (a = u.offset()),
                    (o = _.css(e, 'top')),
                    (l = _.css(e, 'left')),
                    ('absolute' === c || 'fixed' === c) &&
                    (o + l).indexOf('auto') > -1
                        ? ((s = (i = u.position()).top), (r = i.left))
                        : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                    m(t) && (t = t.call(e, n, _.extend({}, a))),
                    null != t.top && (h.top = t.top - a.top + s),
                    null != t.left && (h.left = t.left - a.left + r),
                    'using' in t ? t.using.call(e, h) : u.css(h);
            },
        }),
        _.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              _.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    i = this[0];
                return i
                    ? i.getClientRects().length
                        ? {
                              top:
                                  (t = i.getBoundingClientRect()).top +
                                  (n = i.ownerDocument.defaultView).pageYOffset,
                              left: t.left + n.pageXOffset,
                          }
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        r = { top: 0, left: 0 };
                    if ('fixed' === _.css(i, 'position'))
                        t = i.getBoundingClientRect();
                    else {
                        for (
                            t = this.offset(),
                                n = i.ownerDocument,
                                e = i.offsetParent || n.documentElement;
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            'static' === _.css(e, 'position');

                        )
                            e = e.parentNode;
                        e &&
                            e !== i &&
                            1 === e.nodeType &&
                            (((r = _(e).offset()).top += _.css(
                                e,
                                'borderTopWidth',
                                !0
                            )),
                            (r.left += _.css(e, 'borderLeftWidth', !0)));
                    }
                    return {
                        top: t.top - r.top - _.css(i, 'marginTop', !0),
                        left: t.left - r.left - _.css(i, 'marginLeft', !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var e = this.offsetParent;
                        e && 'static' === _.css(e, 'position');

                    )
                        e = e.offsetParent;
                    return e || ie;
                });
            },
        }),
        _.each(
            { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
            function (e, t) {
                var n = 'pageYOffset' === t;
                _.fn[e] = function (i) {
                    return F(
                        this,
                        function (e, i, r) {
                            var o;
                            if (
                                (g(e)
                                    ? (o = e)
                                    : 9 === e.nodeType && (o = e.defaultView),
                                void 0 === r)
                            )
                                return o ? o[t] : e[i];
                            o
                                ? o.scrollTo(
                                      n ? o.pageXOffset : r,
                                      n ? r : o.pageYOffset
                                  )
                                : (e[i] = r);
                        },
                        e,
                        i,
                        arguments.length
                    );
                };
            }
        ),
        _.each(['top', 'left'], function (e, t) {
            _.cssHooks[t] = Ve(p.pixelPosition, function (e, n) {
                if (n)
                    return (
                        (n = Ue(e, t)),
                        Ye.test(n) ? _(e).position()[t] + 'px' : n
                    );
            });
        }),
        _.each({ Height: 'height', Width: 'width' }, function (e, t) {
            _.each(
                { padding: 'inner' + e, content: t, '': 'outer' + e },
                function (n, i) {
                    _.fn[i] = function (r, o) {
                        var s =
                                arguments.length &&
                                (n || 'boolean' != typeof r),
                            a =
                                n ||
                                (!0 === r || !0 === o ? 'margin' : 'border');
                        return F(
                            this,
                            function (t, n, r) {
                                var o;
                                return g(t)
                                    ? 0 === i.indexOf('outer')
                                        ? t['inner' + e]
                                        : t.document.documentElement[
                                              'client' + e
                                          ]
                                    : 9 === t.nodeType
                                    ? ((o = t.documentElement),
                                      Math.max(
                                          t.body['scroll' + e],
                                          o['scroll' + e],
                                          t.body['offset' + e],
                                          o['offset' + e],
                                          o['client' + e]
                                      ))
                                    : void 0 === r
                                    ? _.css(t, n, a)
                                    : _.style(t, n, r, a);
                            },
                            t,
                            s ? r : void 0,
                            s
                        );
                    };
                }
            );
        }),
        _.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' '
            ),
            function (e, t) {
                _.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                };
            }
        ),
        _.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        _.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, '**')
                    : this.off(t, e || '**', n);
            },
        }),
        (_.proxy = function (e, t) {
            var n, i, r;
            if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
                return (
                    (i = o.call(arguments, 2)),
                    ((r = function () {
                        return e.apply(t || this, i.concat(o.call(arguments)));
                    }).guid = e.guid =
                        e.guid || _.guid++),
                    r
                );
        }),
        (_.holdReady = function (e) {
            e ? _.readyWait++ : _.ready(!0);
        }),
        (_.isArray = Array.isArray),
        (_.parseJSON = JSON.parse),
        (_.nodeName = A),
        (_.isFunction = m),
        (_.isWindow = g),
        (_.camelCase = q),
        (_.type = b),
        (_.now = Date.now),
        (_.isNumeric = function (e) {
            var t = _.type(e);
            return (
                ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
            );
        }),
        'function' == typeof define &&
            define.amd &&
            define('jquery', [], function () {
                return _;
            });
    var zt = e.jQuery,
        Xt = e.$;
    return (
        (_.noConflict = function (t) {
            return (
                e.$ === _ && (e.$ = Xt),
                t && e.jQuery === _ && (e.jQuery = zt),
                _
            );
        }),
        t || (e.jQuery = e.$ = _),
        _
    );
}),
    (function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
            ? (module.exports = t())
            : 'function' == typeof define && define.amd
            ? define(t)
            : (e.Popper = t());
    })(this, function () {
        'use strict';
        for (
            var e =
                    'undefined' != typeof window &&
                    'undefined' != typeof document,
                t = ['Edge', 'Trident', 'Firefox'],
                n = 0,
                i = 0;
            i < t.length;
            i += 1
        )
            if (e && navigator.userAgent.indexOf(t[i]) >= 0) {
                n = 1;
                break;
            }
        var r =
            e && window.Promise
                ? function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              window.Promise.resolve().then(function () {
                                  (t = !1), e();
                              }));
                      };
                  }
                : function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              setTimeout(function () {
                                  (t = !1), e();
                              }, n));
                      };
                  };
        function o(e) {
            return e && '[object Function]' === {}.toString.call(e);
        }
        function s(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n;
        }
        function a(e) {
            return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
        }
        function l(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case 'HTML':
                case 'BODY':
                    return e.ownerDocument.body;
                case '#document':
                    return e.body;
            }
            var t = s(e);
            return /(auto|scroll|overlay)/.test(
                t.overflow + t.overflowY + t.overflowX
            )
                ? e
                : l(a(e));
        }
        var c = e && !(!window.MSInputMethodContext || !document.documentMode),
            u = e && /MSIE 10/.test(navigator.userAgent);
        function h(e) {
            return 11 === e ? c : 10 === e ? u : c || u;
        }
        function d(e) {
            if (!e) return document.documentElement;
            for (
                var t = h(10) ? document.body : null,
                    n = e.offsetParent || null;
                n === t && e.nextElementSibling;

            )
                n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && 'BODY' !== i && 'HTML' !== i
                ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) &&
                  'static' === s(n, 'position')
                    ? d(n)
                    : n
                : e
                ? e.ownerDocument.documentElement
                : document.documentElement;
        }
        function f(e) {
            return null !== e.parentNode ? f(e.parentNode) : e;
        }
        function p(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
                return document.documentElement;
            var n =
                    e.compareDocumentPosition(t) &
                    Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                r = n ? t : e,
                o = document.createRange();
            o.setStart(i, 0), o.setEnd(r, 0);
            var s,
                a,
                l = o.commonAncestorContainer;
            if ((e !== l && t !== l) || i.contains(r))
                return 'BODY' === (a = (s = l).nodeName) ||
                    ('HTML' !== a && d(s.firstElementChild) !== s)
                    ? d(l)
                    : l;
            var c = f(e);
            return c.host ? p(c.host, t) : p(e, f(t).host);
        }
        function m(e) {
            var t =
                    'top' ===
                    (arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'top')
                        ? 'scrollTop'
                        : 'scrollLeft',
                n = e.nodeName;
            return 'BODY' === n || 'HTML' === n
                ? (e.ownerDocument.scrollingElement ||
                      e.ownerDocument.documentElement)[t]
                : e[t];
        }
        function g(e, t) {
            var n = 'x' === t ? 'Left' : 'Top',
                i = 'Left' === n ? 'Right' : 'Bottom';
            return (
                parseFloat(e['border' + n + 'Width'], 10) +
                parseFloat(e['border' + i + 'Width'], 10)
            );
        }
        function v(e, t, n, i) {
            return Math.max(
                t['offset' + e],
                t['scroll' + e],
                n['client' + e],
                n['offset' + e],
                n['scroll' + e],
                h(10)
                    ? parseInt(n['offset' + e]) +
                          parseInt(
                              i['margin' + ('Height' === e ? 'Top' : 'Left')]
                          ) +
                          parseInt(
                              i[
                                  'margin' +
                                      ('Height' === e ? 'Bottom' : 'Right')
                              ]
                          )
                    : 0
            );
        }
        function y(e) {
            var t = e.body,
                n = e.documentElement,
                i = h(10) && getComputedStyle(n);
            return { height: v('Height', t, n, i), width: v('Width', t, n, i) };
        }
        var b = function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
            },
            _ = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            'value' in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i);
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            })(),
            w = function (e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            },
            x =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) &&
                                (e[i] = n[i]);
                    }
                    return e;
                };
        function E(e) {
            return x({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height,
            });
        }
        function S(e) {
            var t = {};
            try {
                if (h(10)) {
                    t = e.getBoundingClientRect();
                    var n = m(e, 'top'),
                        i = m(e, 'left');
                    (t.top += n),
                        (t.left += i),
                        (t.bottom += n),
                        (t.right += i);
                } else t = e.getBoundingClientRect();
            } catch (u) {}
            var r = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top,
                },
                o = 'HTML' === e.nodeName ? y(e.ownerDocument) : {},
                a =
                    e.offsetWidth -
                    (o.width || e.clientWidth || r.right - r.left),
                l =
                    e.offsetHeight -
                    (o.height || e.clientHeight || r.bottom - r.top);
            if (a || l) {
                var c = s(e);
                (a -= g(c, 'x')),
                    (l -= g(c, 'y')),
                    (r.width -= a),
                    (r.height -= l);
            }
            return E(r);
        }
        function T(e, t) {
            var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                i = h(10),
                r = 'HTML' === t.nodeName,
                o = S(e),
                a = S(t),
                c = l(e),
                u = s(t),
                d = parseFloat(u.borderTopWidth, 10),
                f = parseFloat(u.borderLeftWidth, 10);
            n &&
                r &&
                ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
            var p = E({
                top: o.top - a.top - d,
                left: o.left - a.left - f,
                width: o.width,
                height: o.height,
            });
            if (((p.marginTop = 0), (p.marginLeft = 0), !i && r)) {
                var g = parseFloat(u.marginTop, 10),
                    v = parseFloat(u.marginLeft, 10);
                (p.top -= d - g),
                    (p.bottom -= d - g),
                    (p.left -= f - v),
                    (p.right -= f - v),
                    (p.marginTop = g),
                    (p.marginLeft = v);
            }
            return (
                (i && !n ? t.contains(c) : t === c && 'BODY' !== c.nodeName) &&
                    (p = (function (e, t) {
                        var n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                            i = m(t, 'top'),
                            r = m(t, 'left'),
                            o = n ? -1 : 1;
                        return (
                            (e.top += i * o),
                            (e.bottom += i * o),
                            (e.left += r * o),
                            (e.right += r * o),
                            e
                        );
                    })(p, t)),
                p
            );
        }
        function C(e) {
            if (!e || !e.parentElement || h()) return document.documentElement;
            for (var t = e.parentElement; t && 'none' === s(t, 'transform'); )
                t = t.parentElement;
            return t || document.documentElement;
        }
        function A(e, t, n, i) {
            var r =
                    arguments.length > 4 &&
                    void 0 !== arguments[4] &&
                    arguments[4],
                o = { top: 0, left: 0 },
                c = r ? C(e) : p(e, t);
            if ('viewport' === i)
                o = (function (e) {
                    var t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = T(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = t ? 0 : m(n),
                        a = t ? 0 : m(n, 'left');
                    return E({
                        top: s - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: r,
                        height: o,
                    });
                })(c, r);
            else {
                var u = void 0;
                'scrollParent' === i
                    ? 'BODY' === (u = l(a(t))).nodeName &&
                      (u = e.ownerDocument.documentElement)
                    : (u =
                          'window' === i ? e.ownerDocument.documentElement : i);
                var h = T(u, c, r);
                if (
                    'HTML' !== u.nodeName ||
                    (function e(t) {
                        var n = t.nodeName;
                        if ('BODY' === n || 'HTML' === n) return !1;
                        if ('fixed' === s(t, 'position')) return !0;
                        var i = a(t);
                        return !!i && e(i);
                    })(c)
                )
                    o = h;
                else {
                    var d = y(e.ownerDocument),
                        f = d.height,
                        g = d.width;
                    (o.top += h.top - h.marginTop),
                        (o.bottom = f + h.top),
                        (o.left += h.left - h.marginLeft),
                        (o.right = g + h.left);
                }
            }
            var v = 'number' == typeof (n = n || 0);
            return (
                (o.left += v ? n : n.left || 0),
                (o.top += v ? n : n.top || 0),
                (o.right -= v ? n : n.right || 0),
                (o.bottom -= v ? n : n.bottom || 0),
                o
            );
        }
        function D(e, t, n, i, r) {
            var o =
                arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : 0;
            if (-1 === e.indexOf('auto')) return e;
            var s = A(n, i, o, r),
                a = {
                    top: { width: s.width, height: t.top - s.top },
                    right: { width: s.right - t.right, height: s.height },
                    bottom: { width: s.width, height: s.bottom - t.bottom },
                    left: { width: t.left - s.left, height: s.height },
                },
                l = Object.keys(a)
                    .map(function (e) {
                        return x({ key: e }, a[e], {
                            area: ((t = a[e]), t.width * t.height),
                        });
                        var t;
                    })
                    .sort(function (e, t) {
                        return t.area - e.area;
                    }),
                c = l.filter(function (e) {
                    return (
                        e.width >= n.clientWidth && e.height >= n.clientHeight
                    );
                }),
                u = c.length > 0 ? c[0].key : l[0].key,
                h = e.split('-')[1];
            return u + (h ? '-' + h : '');
        }
        function O(e, t, n) {
            var i =
                arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
            return T(n, i ? C(t) : p(t, n), i);
        }
        function k(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n =
                    parseFloat(t.marginTop || 0) +
                    parseFloat(t.marginBottom || 0),
                i =
                    parseFloat(t.marginLeft || 0) +
                    parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function I(e) {
            var t = {
                left: 'right',
                right: 'left',
                bottom: 'top',
                top: 'bottom',
            };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e];
            });
        }
        function N(e, t, n) {
            n = n.split('-')[0];
            var i = k(e),
                r = { width: i.width, height: i.height },
                o = -1 !== ['right', 'left'].indexOf(n),
                s = o ? 'top' : 'left',
                a = o ? 'left' : 'top',
                l = o ? 'height' : 'width',
                c = o ? 'width' : 'height';
            return (
                (r[s] = t[s] + t[l] / 2 - i[l] / 2),
                (r[a] = n === a ? t[a] - i[c] : t[I(a)]),
                r
            );
        }
        function M(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function L(e, t, n) {
            return (
                (void 0 === n
                    ? e
                    : e.slice(
                          0,
                          (function (e, t, n) {
                              if (Array.prototype.findIndex)
                                  return e.findIndex(function (e) {
                                      return e.name === n;
                                  });
                              var i = M(e, function (e) {
                                  return e.name === n;
                              });
                              return e.indexOf(i);
                          })(e, 0, n)
                      )
                ).forEach(function (e) {
                    e.function &&
                        console.warn(
                            '`modifier.function` is deprecated, use `modifier.fn`!'
                        );
                    var n = e.function || e.fn;
                    e.enabled &&
                        o(n) &&
                        ((t.offsets.popper = E(t.offsets.popper)),
                        (t.offsets.reference = E(t.offsets.reference)),
                        (t = n(t, e)));
                }),
                t
            );
        }
        function P(e, t) {
            return e.some(function (e) {
                return e.enabled && e.name === t;
            });
        }
        function H(e) {
            for (
                var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
                    n = e.charAt(0).toUpperCase() + e.slice(1),
                    i = 0;
                i < t.length;
                i++
            ) {
                var r = t[i],
                    o = r ? '' + r + n : e;
                if (void 0 !== document.body.style[o]) return o;
            }
            return null;
        }
        function R(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function j(e) {
            return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function $(e, t) {
            Object.keys(t).forEach(function (n) {
                var i = '';
                -1 !==
                    [
                        'width',
                        'height',
                        'top',
                        'right',
                        'bottom',
                        'left',
                    ].indexOf(n) &&
                    j(t[n]) &&
                    (i = 'px'),
                    (e.style[n] = t[n] + i);
            });
        }
        var Y = e && /Firefox/i.test(navigator.userAgent);
        function W(e, t, n) {
            var i = M(e, function (e) {
                    return e.name === t;
                }),
                r =
                    !!i &&
                    e.some(function (e) {
                        return e.name === n && e.enabled && e.order < i.order;
                    });
            if (!r) {
                var o = '`' + t + '`';
                console.warn(
                    '`' +
                        n +
                        '` modifier is required by ' +
                        o +
                        ' modifier in order to work, be sure to include it before ' +
                        o +
                        '!'
                );
            }
            return r;
        }
        var F = [
                'auto-start',
                'auto',
                'auto-end',
                'top-start',
                'top',
                'top-end',
                'right-start',
                'right',
                'right-end',
                'bottom-end',
                'bottom',
                'bottom-start',
                'left-end',
                'left',
                'left-start',
            ],
            U = F.slice(3);
        function V(e) {
            var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                n = U.indexOf(e),
                i = U.slice(n + 1).concat(U.slice(0, n));
            return t ? i.reverse() : i;
        }
        var B = {
                placement: 'bottom',
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split('-')[0],
                                i = t.split('-')[1];
                            if (i) {
                                var r = e.offsets,
                                    o = r.reference,
                                    s = r.popper,
                                    a = -1 !== ['bottom', 'top'].indexOf(n),
                                    l = a ? 'left' : 'top',
                                    c = a ? 'width' : 'height',
                                    u = {
                                        start: w({}, l, o[l]),
                                        end: w({}, l, o[l] + o[c] - s[c]),
                                    };
                                e.offsets.popper = x({}, s, u[i]);
                            }
                            return e;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var n,
                                i = t.offset,
                                r = e.offsets,
                                o = r.popper,
                                s = r.reference,
                                a = e.placement.split('-')[0];
                            return (
                                (n = j(+i)
                                    ? [+i, 0]
                                    : (function (e, t, n, i) {
                                          var r = [0, 0],
                                              o =
                                                  -1 !==
                                                  ['right', 'left'].indexOf(i),
                                              s = e
                                                  .split(/(\+|\-)/)
                                                  .map(function (e) {
                                                      return e.trim();
                                                  }),
                                              a = s.indexOf(
                                                  M(s, function (e) {
                                                      return (
                                                          -1 !==
                                                          e.search(/,|\s/)
                                                      );
                                                  })
                                              );
                                          s[a] &&
                                              -1 === s[a].indexOf(',') &&
                                              console.warn(
                                                  'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                                              );
                                          var l = /\s*,\s*|\s+/,
                                              c =
                                                  -1 !== a
                                                      ? [
                                                            s
                                                                .slice(0, a)
                                                                .concat([
                                                                    s[a].split(
                                                                        l
                                                                    )[0],
                                                                ]),
                                                            [
                                                                s[a].split(
                                                                    l
                                                                )[1],
                                                            ].concat(
                                                                s.slice(a + 1)
                                                            ),
                                                        ]
                                                      : [s];
                                          return (
                                              (c = c.map(function (e, i) {
                                                  var r = (1 === i ? !o : o)
                                                          ? 'height'
                                                          : 'width',
                                                      s = !1;
                                                  return e
                                                      .reduce(function (e, t) {
                                                          return '' ===
                                                              e[e.length - 1] &&
                                                              -1 !==
                                                                  [
                                                                      '+',
                                                                      '-',
                                                                  ].indexOf(t)
                                                              ? ((e[
                                                                    e.length - 1
                                                                ] = t),
                                                                (s = !0),
                                                                e)
                                                              : s
                                                              ? ((e[
                                                                    e.length - 1
                                                                ] += t),
                                                                (s = !1),
                                                                e)
                                                              : e.concat(t);
                                                      }, [])
                                                      .map(function (e) {
                                                          return (function (
                                                              e,
                                                              t,
                                                              n,
                                                              i
                                                          ) {
                                                              var r = e.match(
                                                                      /((?:\-|\+)?\d*\.?\d*)(.*)/
                                                                  ),
                                                                  o = +r[1],
                                                                  s = r[2];
                                                              if (!o) return e;
                                                              if (
                                                                  0 ===
                                                                  s.indexOf('%')
                                                              ) {
                                                                  var a =
                                                                      void 0;
                                                                  switch (s) {
                                                                      case '%p':
                                                                          a = n;
                                                                          break;
                                                                      case '%':
                                                                      case '%r':
                                                                      default:
                                                                          a = i;
                                                                  }
                                                                  return (
                                                                      (E(a)[t] /
                                                                          100) *
                                                                      o
                                                                  );
                                                              }
                                                              return 'vh' ===
                                                                  s ||
                                                                  'vw' === s
                                                                  ? (('vh' === s
                                                                        ? Math.max(
                                                                              document
                                                                                  .documentElement
                                                                                  .clientHeight,
                                                                              window.innerHeight ||
                                                                                  0
                                                                          )
                                                                        : Math.max(
                                                                              document
                                                                                  .documentElement
                                                                                  .clientWidth,
                                                                              window.innerWidth ||
                                                                                  0
                                                                          )) /
                                                                        100) *
                                                                        o
                                                                  : o;
                                                          })(e, r, t, n);
                                                      });
                                              })).forEach(function (e, t) {
                                                  e.forEach(function (n, i) {
                                                      j(n) &&
                                                          (r[t] +=
                                                              n *
                                                              ('-' === e[i - 1]
                                                                  ? -1
                                                                  : 1));
                                                  });
                                              }),
                                              r
                                          );
                                      })(i, o, s, a)),
                                'left' === a
                                    ? ((o.top += n[0]), (o.left -= n[1]))
                                    : 'right' === a
                                    ? ((o.top += n[0]), (o.left += n[1]))
                                    : 'top' === a
                                    ? ((o.left += n[0]), (o.top -= n[1]))
                                    : 'bottom' === a &&
                                      ((o.left += n[0]), (o.top += n[1])),
                                (e.popper = o),
                                e
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.boundariesElement || d(e.instance.popper);
                            e.instance.reference === n && (n = d(n));
                            var i = H('transform'),
                                r = e.instance.popper.style,
                                o = r.top,
                                s = r.left,
                                a = r[i];
                            (r.top = ''), (r.left = ''), (r[i] = '');
                            var l = A(
                                e.instance.popper,
                                e.instance.reference,
                                t.padding,
                                n,
                                e.positionFixed
                            );
                            (r.top = o),
                                (r.left = s),
                                (r[i] = a),
                                (t.boundaries = l);
                            var c = e.offsets.popper,
                                u = {
                                    primary: function (e) {
                                        var n = c[e];
                                        return (
                                            c[e] < l[e] &&
                                                !t.escapeWithReference &&
                                                (n = Math.max(c[e], l[e])),
                                            w({}, e, n)
                                        );
                                    },
                                    secondary: function (e) {
                                        var n = 'right' === e ? 'left' : 'top',
                                            i = c[n];
                                        return (
                                            c[e] > l[e] &&
                                                !t.escapeWithReference &&
                                                (i = Math.min(
                                                    c[n],
                                                    l[e] -
                                                        ('right' === e
                                                            ? c.width
                                                            : c.height)
                                                )),
                                            w({}, n, i)
                                        );
                                    },
                                };
                            return (
                                t.priority.forEach(function (e) {
                                    var t =
                                        -1 !== ['left', 'top'].indexOf(e)
                                            ? 'primary'
                                            : 'secondary';
                                    c = x({}, c, u[t](e));
                                }),
                                (e.offsets.popper = c),
                                e
                            );
                        },
                        priority: ['left', 'right', 'top', 'bottom'],
                        padding: 5,
                        boundariesElement: 'scrollParent',
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets,
                                n = t.popper,
                                i = t.reference,
                                r = e.placement.split('-')[0],
                                o = Math.floor,
                                s = -1 !== ['top', 'bottom'].indexOf(r),
                                a = s ? 'right' : 'bottom',
                                l = s ? 'left' : 'top',
                                c = s ? 'width' : 'height';
                            return (
                                n[a] < o(i[l]) &&
                                    (e.offsets.popper[l] = o(i[l]) - n[c]),
                                n[l] > o(i[a]) &&
                                    (e.offsets.popper[l] = o(i[a])),
                                e
                            );
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, t) {
                            var n;
                            if (
                                !W(
                                    e.instance.modifiers,
                                    'arrow',
                                    'keepTogether'
                                )
                            )
                                return e;
                            var i = t.element;
                            if ('string' == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i)))
                                    return e;
                            } else if (!e.instance.popper.contains(i))
                                return (
                                    console.warn(
                                        'WARNING: `arrow.element` must be child of its popper element!'
                                    ),
                                    e
                                );
                            var r = e.placement.split('-')[0],
                                o = e.offsets,
                                a = o.popper,
                                l = o.reference,
                                c = -1 !== ['left', 'right'].indexOf(r),
                                u = c ? 'height' : 'width',
                                h = c ? 'Top' : 'Left',
                                d = h.toLowerCase(),
                                f = c ? 'left' : 'top',
                                p = c ? 'bottom' : 'right',
                                m = k(i)[u];
                            l[p] - m < a[d] &&
                                (e.offsets.popper[d] -= a[d] - (l[p] - m)),
                                l[d] + m > a[p] &&
                                    (e.offsets.popper[d] += l[d] + m - a[p]),
                                (e.offsets.popper = E(e.offsets.popper));
                            var g = l[d] + l[u] / 2 - m / 2,
                                v = s(e.instance.popper),
                                y = parseFloat(v['margin' + h], 10),
                                b = parseFloat(v['border' + h + 'Width'], 10),
                                _ = g - e.offsets.popper[d] - y - b;
                            return (
                                (_ = Math.max(Math.min(a[u] - m, _), 0)),
                                (e.arrowElement = i),
                                (e.offsets.arrow =
                                    (w((n = {}), d, Math.round(_)),
                                    w(n, f, ''),
                                    n)),
                                e
                            );
                        },
                        element: '[x-arrow]',
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (P(e.instance.modifiers, 'inner')) return e;
                            if (
                                e.flipped &&
                                e.placement === e.originalPlacement
                            )
                                return e;
                            var n = A(
                                    e.instance.popper,
                                    e.instance.reference,
                                    t.padding,
                                    t.boundariesElement,
                                    e.positionFixed
                                ),
                                i = e.placement.split('-')[0],
                                r = I(i),
                                o = e.placement.split('-')[1] || '',
                                s = [];
                            switch (t.behavior) {
                                case 'flip':
                                    s = [i, r];
                                    break;
                                case 'clockwise':
                                    s = V(i);
                                    break;
                                case 'counterclockwise':
                                    s = V(i, !0);
                                    break;
                                default:
                                    s = t.behavior;
                            }
                            return (
                                s.forEach(function (a, l) {
                                    if (i !== a || s.length === l + 1) return e;
                                    (i = e.placement.split('-')[0]), (r = I(i));
                                    var c = e.offsets.popper,
                                        u = e.offsets.reference,
                                        h = Math.floor,
                                        d =
                                            ('left' === i &&
                                                h(c.right) > h(u.left)) ||
                                            ('right' === i &&
                                                h(c.left) < h(u.right)) ||
                                            ('top' === i &&
                                                h(c.bottom) > h(u.top)) ||
                                            ('bottom' === i &&
                                                h(c.top) < h(u.bottom)),
                                        f = h(c.left) < h(n.left),
                                        p = h(c.right) > h(n.right),
                                        m = h(c.top) < h(n.top),
                                        g = h(c.bottom) > h(n.bottom),
                                        v =
                                            ('left' === i && f) ||
                                            ('right' === i && p) ||
                                            ('top' === i && m) ||
                                            ('bottom' === i && g),
                                        y = -1 !== ['top', 'bottom'].indexOf(i),
                                        b =
                                            (!!t.flipVariations &&
                                                ((y && 'start' === o && f) ||
                                                    (y && 'end' === o && p) ||
                                                    (!y &&
                                                        'start' === o &&
                                                        m) ||
                                                    (!y &&
                                                        'end' === o &&
                                                        g))) ||
                                            (!!t.flipVariationsByContent &&
                                                ((y && 'start' === o && p) ||
                                                    (y && 'end' === o && f) ||
                                                    (!y &&
                                                        'start' === o &&
                                                        g) ||
                                                    (!y && 'end' === o && m)));
                                    (d || v || b) &&
                                        ((e.flipped = !0),
                                        (d || v) && (i = s[l + 1]),
                                        b &&
                                            (o = (function (e) {
                                                return 'end' === e
                                                    ? 'start'
                                                    : 'start' === e
                                                    ? 'end'
                                                    : e;
                                            })(o)),
                                        (e.placement = i + (o ? '-' + o : '')),
                                        (e.offsets.popper = x(
                                            {},
                                            e.offsets.popper,
                                            N(
                                                e.instance.popper,
                                                e.offsets.reference,
                                                e.placement
                                            )
                                        )),
                                        (e = L(
                                            e.instance.modifiers,
                                            e,
                                            'flip'
                                        )));
                                }),
                                e
                            );
                        },
                        behavior: 'flip',
                        padding: 5,
                        boundariesElement: 'viewport',
                        flipVariations: !1,
                        flipVariationsByContent: !1,
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split('-')[0],
                                i = e.offsets,
                                r = i.popper,
                                o = i.reference,
                                s = -1 !== ['left', 'right'].indexOf(n),
                                a = -1 === ['top', 'left'].indexOf(n);
                            return (
                                (r[s ? 'left' : 'top'] =
                                    o[n] - (a ? r[s ? 'width' : 'height'] : 0)),
                                (e.placement = I(t)),
                                (e.offsets.popper = E(r)),
                                e
                            );
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (
                                !W(
                                    e.instance.modifiers,
                                    'hide',
                                    'preventOverflow'
                                )
                            )
                                return e;
                            var t = e.offsets.reference,
                                n = M(e.instance.modifiers, function (e) {
                                    return 'preventOverflow' === e.name;
                                }).boundaries;
                            if (
                                t.bottom < n.top ||
                                t.left > n.right ||
                                t.top > n.bottom ||
                                t.right < n.left
                            ) {
                                if (!0 === e.hide) return e;
                                (e.hide = !0),
                                    (e.attributes['x-out-of-boundaries'] = '');
                            } else {
                                if (!1 === e.hide) return e;
                                (e.hide = !1),
                                    (e.attributes['x-out-of-boundaries'] = !1);
                            }
                            return e;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.x,
                                i = t.y,
                                r = e.offsets.popper,
                                o = M(e.instance.modifiers, function (e) {
                                    return 'applyStyle' === e.name;
                                }).gpuAcceleration;
                            void 0 !== o &&
                                console.warn(
                                    'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                                );
                            var s,
                                a,
                                l = void 0 !== o ? o : t.gpuAcceleration,
                                c = d(e.instance.popper),
                                u = S(c),
                                h = { position: r.position },
                                f = (function (e, t) {
                                    var n = e.offsets,
                                        i = n.popper,
                                        r = Math.round,
                                        o = Math.floor,
                                        s = function (e) {
                                            return e;
                                        },
                                        a = r(n.reference.width),
                                        l = r(i.width),
                                        c =
                                            -1 !==
                                            ['left', 'right'].indexOf(
                                                e.placement
                                            ),
                                        u = -1 !== e.placement.indexOf('-'),
                                        h = t
                                            ? c || u || a % 2 == l % 2
                                                ? r
                                                : o
                                            : s,
                                        d = t ? r : s;
                                    return {
                                        left: h(
                                            a % 2 == 1 && l % 2 == 1 && !u && t
                                                ? i.left - 1
                                                : i.left
                                        ),
                                        top: d(i.top),
                                        bottom: d(i.bottom),
                                        right: h(i.right),
                                    };
                                })(e, window.devicePixelRatio < 2 || !Y),
                                p = 'bottom' === n ? 'top' : 'bottom',
                                m = 'right' === i ? 'left' : 'right',
                                g = H('transform');
                            if (
                                ((a =
                                    'bottom' === p
                                        ? 'HTML' === c.nodeName
                                            ? -c.clientHeight + f.bottom
                                            : -u.height + f.bottom
                                        : f.top),
                                (s =
                                    'right' === m
                                        ? 'HTML' === c.nodeName
                                            ? -c.clientWidth + f.right
                                            : -u.width + f.right
                                        : f.left),
                                l && g)
                            )
                                (h[g] =
                                    'translate3d(' + s + 'px, ' + a + 'px, 0)'),
                                    (h[p] = 0),
                                    (h[m] = 0),
                                    (h.willChange = 'transform');
                            else {
                                var v = 'right' === m ? -1 : 1;
                                (h[p] = a * ('bottom' === p ? -1 : 1)),
                                    (h[m] = s * v),
                                    (h.willChange = p + ', ' + m);
                            }
                            return (
                                (e.attributes = x(
                                    {},
                                    { 'x-placement': e.placement },
                                    e.attributes
                                )),
                                (e.styles = x({}, h, e.styles)),
                                (e.arrowStyles = x(
                                    {},
                                    e.offsets.arrow,
                                    e.arrowStyles
                                )),
                                e
                            );
                        },
                        gpuAcceleration: !0,
                        x: 'bottom',
                        y: 'right',
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            var t, n;
                            return (
                                $(e.instance.popper, e.styles),
                                (t = e.instance.popper),
                                (n = e.attributes),
                                Object.keys(n).forEach(function (e) {
                                    !1 !== n[e]
                                        ? t.setAttribute(e, n[e])
                                        : t.removeAttribute(e);
                                }),
                                e.arrowElement &&
                                    Object.keys(e.arrowStyles).length &&
                                    $(e.arrowElement, e.arrowStyles),
                                e
                            );
                        },
                        onLoad: function (e, t, n, i, r) {
                            var o = O(r, t, e, n.positionFixed),
                                s = D(
                                    n.placement,
                                    o,
                                    t,
                                    e,
                                    n.modifiers.flip.boundariesElement,
                                    n.modifiers.flip.padding
                                );
                            return (
                                t.setAttribute('x-placement', s),
                                $(t, {
                                    position: n.positionFixed
                                        ? 'fixed'
                                        : 'absolute',
                                }),
                                n
                            );
                        },
                        gpuAcceleration: void 0,
                    },
                },
            },
            q = (function () {
                function e(t, n) {
                    var i = this,
                        s =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                    b(this, e),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update);
                        }),
                        (this.update = r(this.update.bind(this))),
                        (this.options = x({}, e.Defaults, s)),
                        (this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: [],
                        }),
                        (this.reference = t && t.jquery ? t[0] : t),
                        (this.popper = n && n.jquery ? n[0] : n),
                        (this.options.modifiers = {}),
                        Object.keys(
                            x({}, e.Defaults.modifiers, s.modifiers)
                        ).forEach(function (t) {
                            i.options.modifiers[t] = x(
                                {},
                                e.Defaults.modifiers[t] || {},
                                s.modifiers ? s.modifiers[t] : {}
                            );
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (e) {
                                return x({ name: e }, i.options.modifiers[e]);
                            })
                            .sort(function (e, t) {
                                return e.order - t.order;
                            })),
                        this.modifiers.forEach(function (e) {
                            e.enabled &&
                                o(e.onLoad) &&
                                e.onLoad(
                                    i.reference,
                                    i.popper,
                                    i.options,
                                    e,
                                    i.state
                                );
                        }),
                        this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(),
                        (this.state.eventsEnabled = a);
                }
                return (
                    _(e, [
                        {
                            key: 'update',
                            value: function () {
                                return function () {
                                    if (!this.state.isDestroyed) {
                                        var e = {
                                            instance: this,
                                            styles: {},
                                            arrowStyles: {},
                                            attributes: {},
                                            flipped: !1,
                                            offsets: {},
                                        };
                                        (e.offsets.reference = O(
                                            this.state,
                                            this.popper,
                                            this.reference,
                                            this.options.positionFixed
                                        )),
                                            (e.placement = D(
                                                this.options.placement,
                                                e.offsets.reference,
                                                this.popper,
                                                this.reference,
                                                this.options.modifiers.flip
                                                    .boundariesElement,
                                                this.options.modifiers.flip
                                                    .padding
                                            )),
                                            (e.originalPlacement = e.placement),
                                            (e.positionFixed =
                                                this.options.positionFixed),
                                            (e.offsets.popper = N(
                                                this.popper,
                                                e.offsets.reference,
                                                e.placement
                                            )),
                                            (e.offsets.popper.position = this
                                                .options.positionFixed
                                                ? 'fixed'
                                                : 'absolute'),
                                            (e = L(this.modifiers, e)),
                                            this.state.isCreated
                                                ? this.options.onUpdate(e)
                                                : ((this.state.isCreated = !0),
                                                  this.options.onCreate(e));
                                    }
                                }.call(this);
                            },
                        },
                        {
                            key: 'destroy',
                            value: function () {
                                return function () {
                                    return (
                                        (this.state.isDestroyed = !0),
                                        P(this.modifiers, 'applyStyle') &&
                                            (this.popper.removeAttribute(
                                                'x-placement'
                                            ),
                                            (this.popper.style.position = ''),
                                            (this.popper.style.top = ''),
                                            (this.popper.style.left = ''),
                                            (this.popper.style.right = ''),
                                            (this.popper.style.bottom = ''),
                                            (this.popper.style.willChange = ''),
                                            (this.popper.style[H('transform')] =
                                                '')),
                                        this.disableEventListeners(),
                                        this.options.removeOnDestroy &&
                                            this.popper.parentNode.removeChild(
                                                this.popper
                                            ),
                                        this
                                    );
                                }.call(this);
                            },
                        },
                        {
                            key: 'enableEventListeners',
                            value: function () {
                                return function () {
                                    this.state.eventsEnabled ||
                                        (this.state = (function (e, t, n, i) {
                                            (n.updateBound = i),
                                                R(e).addEventListener(
                                                    'resize',
                                                    n.updateBound,
                                                    { passive: !0 }
                                                );
                                            var r = l(e);
                                            return (
                                                (function e(t, n, i, r) {
                                                    var o =
                                                            'BODY' ===
                                                            t.nodeName,
                                                        s = o
                                                            ? t.ownerDocument
                                                                  .defaultView
                                                            : t;
                                                    s.addEventListener(n, i, {
                                                        passive: !0,
                                                    }),
                                                        o ||
                                                            e(
                                                                l(s.parentNode),
                                                                n,
                                                                i,
                                                                r
                                                            ),
                                                        r.push(s);
                                                })(
                                                    r,
                                                    'scroll',
                                                    n.updateBound,
                                                    n.scrollParents
                                                ),
                                                (n.scrollElement = r),
                                                (n.eventsEnabled = !0),
                                                n
                                            );
                                        })(
                                            this.reference,
                                            0,
                                            this.state,
                                            this.scheduleUpdate
                                        ));
                                }.call(this);
                            },
                        },
                        {
                            key: 'disableEventListeners',
                            value: function () {
                                return function () {
                                    var e;
                                    this.state.eventsEnabled &&
                                        (cancelAnimationFrame(
                                            this.scheduleUpdate
                                        ),
                                        (this.state =
                                            ((e = this.state),
                                            R(
                                                this.reference
                                            ).removeEventListener(
                                                'resize',
                                                e.updateBound
                                            ),
                                            e.scrollParents.forEach(function (
                                                t
                                            ) {
                                                t.removeEventListener(
                                                    'scroll',
                                                    e.updateBound
                                                );
                                            }),
                                            (e.updateBound = null),
                                            (e.scrollParents = []),
                                            (e.scrollElement = null),
                                            (e.eventsEnabled = !1),
                                            e)));
                                }.call(this);
                            },
                        },
                    ]),
                    e
                );
            })();
        return (
            (q.Utils = (
                'undefined' != typeof window ? window : global
            ).PopperUtils),
            (q.placements = F),
            (q.Defaults = B),
            q
        );
    }),
    (function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
            ? t(require('jquery'), require('popper.js'))
            : 'function' == typeof define && define.amd
            ? define(['jquery', 'popper.js'], t)
            : t((e = e || self).jQuery, e.Popper);
    })(this, function (e, t) {
        'use strict';
        var n = Math.max;
        function i(e) {
            return {}.toString
                .call(e)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        }
        function r(e, t) {
            const n = e.nodeName.toLowerCase();
            if (-1 !== t.indexOf(n))
                return (
                    -1 === re.indexOf(n) ||
                    !(!e.nodeValue.match(oe) && !e.nodeValue.match(se))
                );
            const i = t.filter((e) => e instanceof RegExp);
            for (let r = 0, o = i.length; r < o; r++)
                if (n.match(i[r])) return !0;
            return !1;
        }
        function o(e, t, n) {
            if (0 === e.length) return e;
            if (n && 'function' == typeof n) return n(e);
            const i = new window.DOMParser().parseFromString(e, 'text/html'),
                o = Object.keys(t),
                s = [].slice.call(i.body.querySelectorAll('*'));
            for (let a = 0, l = s.length; a < l; a++) {
                const e = s[a],
                    n = e.nodeName.toLowerCase();
                if (-1 === o.indexOf(e.nodeName.toLowerCase())) {
                    e.parentNode.removeChild(e);
                    continue;
                }
                const i = [].slice.call(e.attributes),
                    l = [].concat(t['*'] || [], t[n] || []);
                i.forEach((t) => {
                    r(t, l) || e.removeAttribute(t.nodeName);
                });
            }
            return i.body.innerHTML;
        }
        function s(e, t) {
            for (var n, i = 0; i < t.length; i++)
                ((n = t[i]).enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
        }
        function a(e, t) {
            (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = t);
        }
        (e = e && e.hasOwnProperty('default') ? e.default : e),
            (t = t && t.hasOwnProperty('default') ? t.default : t);
        const l = 'transitionend',
            c = {
                TRANSITION_END: 'bsTransitionEnd',
                getUID(e) {
                    do {
                        e += ~~(1e6 * Math.random());
                    } while (document.getElementById(e));
                    return e;
                },
                getSelectorFromElement(e) {
                    let t = e.getAttribute('data-target');
                    if (!t || '#' === t) {
                        const n = e.getAttribute('href');
                        t = n && '#' !== n ? n.trim() : '';
                    }
                    try {
                        return document.querySelector(t) ? t : null;
                    } catch (e) {
                        return null;
                    }
                },
                getTransitionDurationFromElement(t) {
                    if (!t) return 0;
                    let n = e(t).css('transition-duration'),
                        i = e(t).css('transition-delay');
                    const r = parseFloat(n),
                        o = parseFloat(i);
                    return r || o
                        ? ((n = n.split(',')[0]),
                          (i = i.split(',')[0]),
                          1e3 * (parseFloat(n) + parseFloat(i)))
                        : 0;
                },
                reflow: (e) => e.offsetHeight,
                triggerTransitionEnd(t) {
                    e(t).trigger(l);
                },
                supportsTransitionEnd: () => !0,
                isElement: (e) => (e[0] || e).nodeType,
                typeCheckConfig(e, t, n) {
                    for (const r in n)
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            const o = n[r],
                                s = t[r],
                                a = s && c.isElement(s) ? 'element' : i(s);
                            if (!new RegExp(o).test(a))
                                throw new Error(
                                    `${e.toUpperCase()}: ` +
                                        `Option "${r}" provided type "${a}" ` +
                                        `but expected type "${o}".`
                                );
                        }
                },
                findShadowRoot(e) {
                    if (!document.documentElement.attachShadow) return null;
                    if ('function' == typeof e.getRootNode) {
                        const t = e.getRootNode();
                        return t instanceof ShadowRoot ? t : null;
                    }
                    return e instanceof ShadowRoot
                        ? e
                        : e.parentNode
                        ? c.findShadowRoot(e.parentNode)
                        : null;
                },
            };
        (e.fn.emulateTransitionEnd = function (t) {
            let n = !1;
            return (
                e(this).one(c.TRANSITION_END, () => {
                    n = !0;
                }),
                setTimeout(() => {
                    n || c.triggerTransitionEnd(this);
                }, t),
                this
            );
        }),
            (e.event.special[c.TRANSITION_END] = {
                bindType: l,
                delegateType: l,
                handle(t) {
                    return e(t.target).is(this)
                        ? t.handleObj.handler.apply(this, arguments)
                        : void 0;
                },
            });
        const u = 'bs.alert',
            h = `.${u}`,
            d = e.fn.alert,
            f = {
                CLOSE: `close${h}`,
                CLOSED: `closed${h}`,
                CLICK_DATA_API: `click${h}.data-api`,
            },
            p = { ALERT: 'alert', FADE: 'fade', SHOW: 'show' };
        class m {
            constructor(e) {
                this._element = e;
            }
            static get VERSION() {
                return '4.3.1';
            }
            close(e) {
                let t = this._element;
                e && (t = this._getRootElement(e)),
                    this._triggerCloseEvent(t).isDefaultPrevented() ||
                        this._removeElement(t);
            }
            dispose() {
                e.removeData(this._element, u), (this._element = null);
            }
            _getRootElement(t) {
                const n = c.getSelectorFromElement(t);
                let i = !1;
                return (
                    n && (i = document.querySelector(n)),
                    i || (i = e(t).closest(`.${p.ALERT}`)[0]),
                    i
                );
            }
            _triggerCloseEvent(t) {
                const n = e.Event(f.CLOSE);
                return e(t).trigger(n), n;
            }
            _removeElement(t) {
                if ((e(t).removeClass(p.SHOW), !e(t).hasClass(p.FADE)))
                    return void this._destroyElement(t);
                const n = c.getTransitionDurationFromElement(t);
                e(t)
                    .one(c.TRANSITION_END, (e) => this._destroyElement(t, e))
                    .emulateTransitionEnd(n);
            }
            _destroyElement(t) {
                e(t).detach().trigger(f.CLOSED).remove();
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    const n = e(this);
                    let i = n.data(u);
                    i || ((i = new m(this)), n.data(u, i)),
                        'close' === t && i[t](this);
                });
            }
            static _handleDismiss(e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this);
                };
            }
        }
        e(document).on(
            f.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            m._handleDismiss(new m())
        ),
            (e.fn.alert = m._jQueryInterface),
            (e.fn.alert.Constructor = m),
            (e.fn.alert.noConflict = () => (
                (e.fn.alert = d), m._jQueryInterface
            ));
        const g = 'bs.button',
            v = `.${g}`,
            y = '.data-api',
            b = e.fn.button,
            _ = { ACTIVE: 'active', BUTTON: 'btn', FOCUS: 'focus' },
            w = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: 'input:not([type="hidden"])',
                ACTIVE: '.active',
                BUTTON: '.btn',
            },
            x = {
                CLICK_DATA_API: `click${v}${y}`,
                FOCUS_BLUR_DATA_API: `focus${v}${y} ` + `blur${v}${y}`,
            };
        class E {
            constructor(e) {
                this._element = e;
            }
            static get VERSION() {
                return '4.3.1';
            }
            toggle() {
                let t = !0,
                    n = !0;
                const i = e(this._element).closest(w.DATA_TOGGLE)[0];
                if (i) {
                    const r = this._element.querySelector(w.INPUT);
                    if (r) {
                        if ('radio' === r.type)
                            if (
                                r.checked &&
                                this._element.classList.contains(_.ACTIVE)
                            )
                                t = !1;
                            else {
                                const t = i.querySelector(w.ACTIVE);
                                t && e(t).removeClass(_.ACTIVE);
                            }
                        if (t) {
                            if (
                                r.hasAttribute('disabled') ||
                                i.hasAttribute('disabled') ||
                                r.classList.contains('disabled') ||
                                i.classList.contains('disabled')
                            )
                                return;
                            (r.checked = !this._element.classList.contains(
                                _.ACTIVE
                            )),
                                e(r).trigger('change');
                        }
                        r.focus(), (n = !1);
                    }
                }
                n &&
                    this._element.setAttribute(
                        'aria-pressed',
                        !this._element.classList.contains(_.ACTIVE)
                    ),
                    t && e(this._element).toggleClass(_.ACTIVE);
            }
            dispose() {
                e.removeData(this._element, g), (this._element = null);
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    let n = e(this).data(g);
                    n || ((n = new E(this)), e(this).data(g, n)),
                        'toggle' === t && n[t]();
                });
            }
        }
        e(document)
            .on(x.CLICK_DATA_API, w.DATA_TOGGLE_CARROT, (t) => {
                t.preventDefault();
                let n = t.target;
                e(n).hasClass(_.BUTTON) || (n = e(n).closest(w.BUTTON)),
                    E._jQueryInterface.call(e(n), 'toggle');
            })
            .on(x.FOCUS_BLUR_DATA_API, w.DATA_TOGGLE_CARROT, (t) => {
                const n = e(t.target).closest(w.BUTTON)[0];
                e(n).toggleClass(_.FOCUS, /^focus(in)?$/.test(t.type));
            }),
            (e.fn.button = E._jQueryInterface),
            (e.fn.button.Constructor = E),
            (e.fn.button.noConflict = () => (
                (e.fn.button = b), E._jQueryInterface
            ));
        const S = 'carousel',
            T = 'bs.carousel',
            C = `.${T}`,
            A = '.data-api',
            D = e.fn.carousel,
            O = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: 'hover',
                wrap: !0,
                touch: !0,
            },
            k = {
                interval: '(number|boolean)',
                keyboard: 'boolean',
                slide: '(boolean|string)',
                pause: '(string|boolean)',
                wrap: 'boolean',
                touch: 'boolean',
            },
            I = { NEXT: 'next', PREV: 'prev', LEFT: 'left', RIGHT: 'right' },
            N = {
                SLIDE: `slide${C}`,
                SLID: `slid${C}`,
                KEYDOWN: `keydown${C}`,
                MOUSEENTER: `mouseenter${C}`,
                MOUSELEAVE: `mouseleave${C}`,
                TOUCHSTART: `touchstart${C}`,
                TOUCHMOVE: `touchmove${C}`,
                TOUCHEND: `touchend${C}`,
                POINTERDOWN: `pointerdown${C}`,
                POINTERUP: `pointerup${C}`,
                DRAG_START: `dragstart${C}`,
                LOAD_DATA_API: `load${C}${A}`,
                CLICK_DATA_API: `click${C}${A}`,
            },
            M = {
                CAROUSEL: 'carousel',
                ACTIVE: 'active',
                SLIDE: 'slide',
                RIGHT: 'carousel-item-right',
                LEFT: 'carousel-item-left',
                NEXT: 'carousel-item-next',
                PREV: 'carousel-item-prev',
                ITEM: 'carousel-item',
                POINTER_EVENT: 'pointer-event',
            },
            L = {
                ACTIVE: '.active',
                ACTIVE_ITEM: '.active.carousel-item',
                ITEM: '.carousel-item',
                ITEM_IMG: '.carousel-item img',
                NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
                INDICATORS: '.carousel-indicators',
                DATA_SLIDE: '[data-slide], [data-slide-to]',
                DATA_RIDE: '[data-ride="carousel"]',
            },
            P = { TOUCH: 'touch', PEN: 'pen' };
        class H {
            constructor(e, t) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(t)),
                    (this._element = e),
                    (this._indicatorsElement = this._element.querySelector(
                        L.INDICATORS
                    )),
                    (this._touchSupported =
                        'ontouchstart' in document.documentElement ||
                        0 < navigator.maxTouchPoints),
                    (this._pointerEvent = !(
                        !window.PointerEvent && !window.MSPointerEvent
                    )),
                    this._addEventListeners();
            }
            static get VERSION() {
                return '4.3.1';
            }
            static get Default() {
                return O;
            }
            next() {
                this._isSliding || this._slide(I.NEXT);
            }
            nextWhenVisible() {
                !document.hidden &&
                    e(this._element).is(':visible') &&
                    'hidden' !== e(this._element).css('visibility') &&
                    this.next();
            }
            prev() {
                this._isSliding || this._slide(I.PREV);
            }
            pause(e) {
                e || (this._isPaused = !0),
                    this._element.querySelector(L.NEXT_PREV) &&
                        (c.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
            }
            cycle(e) {
                e || (this._isPaused = !1),
                    this._interval &&
                        (clearInterval(this._interval),
                        (this._interval = null)),
                    this._config.interval &&
                        !this._isPaused &&
                        (this._interval = setInterval(
                            (document.visibilityState
                                ? this.nextWhenVisible
                                : this.next
                            ).bind(this),
                            this._config.interval
                        ));
            }
            to(t) {
                this._activeElement = this._element.querySelector(
                    L.ACTIVE_ITEM
                );
                const n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || 0 > t)) {
                    if (this._isSliding)
                        return void e(this._element).one(N.SLID, () =>
                            this.to(t)
                        );
                    if (n === t) return this.pause(), void this.cycle();
                    this._slide(t > n ? I.NEXT : I.PREV, this._items[t]);
                }
            }
            dispose() {
                e(this._element).off(C),
                    e.removeData(this._element, T),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
            }
            _getConfig(e) {
                return (e = { ...O, ...e }), c.typeCheckConfig(S, e, k), e;
            }
            _handleSwipe() {
                const e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    const t = e / this.touchDeltaX;
                    0 < t && this.prev(), 0 > t && this.next();
                }
            }
            _addEventListeners() {
                this._config.keyboard &&
                    e(this._element).on(N.KEYDOWN, (e) => this._keydown(e)),
                    'hover' === this._config.pause &&
                        e(this._element)
                            .on(N.MOUSEENTER, (e) => this.pause(e))
                            .on(N.MOUSELEAVE, (e) => this.cycle(e)),
                    this._config.touch && this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                if (!this._touchSupported) return;
                const t = (e) => {
                        this._pointerEvent &&
                        P[e.originalEvent.pointerType.toUpperCase()]
                            ? (this.touchStartX = e.originalEvent.clientX)
                            : !this._pointerEvent &&
                              (this.touchStartX =
                                  e.originalEvent.touches[0].clientX);
                    },
                    n = (e) => {
                        this.touchDeltaX =
                            e.originalEvent.touches &&
                            1 < e.originalEvent.touches.length
                                ? 0
                                : e.originalEvent.touches[0].clientX -
                                  this.touchStartX;
                    },
                    i = (e) => {
                        this._pointerEvent &&
                            P[e.originalEvent.pointerType.toUpperCase()] &&
                            (this.touchDeltaX =
                                e.originalEvent.clientX - this.touchStartX),
                            this._handleSwipe(),
                            'hover' === this._config.pause &&
                                (this.pause(),
                                this.touchTimeout &&
                                    clearTimeout(this.touchTimeout),
                                (this.touchTimeout = setTimeout(
                                    (e) => this.cycle(e),
                                    500 + this._config.interval
                                )));
                    };
                e(this._element.querySelectorAll(L.ITEM_IMG)).on(
                    N.DRAG_START,
                    (e) => e.preventDefault()
                ),
                    this._pointerEvent
                        ? (e(this._element).on(N.POINTERDOWN, (e) => t(e)),
                          e(this._element).on(N.POINTERUP, (e) => i(e)),
                          this._element.classList.add(M.POINTER_EVENT))
                        : (e(this._element).on(N.TOUCHSTART, (e) => t(e)),
                          e(this._element).on(N.TOUCHMOVE, (e) => n(e)),
                          e(this._element).on(N.TOUCHEND, (e) => i(e)));
            }
            _keydown(e) {
                if (!/input|textarea/i.test(e.target.tagName))
                    switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next();
                    }
            }
            _getItemIndex(e) {
                return (
                    (this._items =
                        e && e.parentNode
                            ? [].slice.call(
                                  e.parentNode.querySelectorAll(L.ITEM)
                              )
                            : []),
                    this._items.indexOf(e)
                );
            }
            _getItemByDirection(e, t) {
                const n = e === I.NEXT,
                    i = e === I.PREV,
                    r = this._getItemIndex(t);
                if (
                    ((i && 0 === r) || (n && r === this._items.length - 1)) &&
                    !this._config.wrap
                )
                    return t;
                const o = (r + (e === I.PREV ? -1 : 1)) % this._items.length;
                return -1 === o
                    ? this._items[this._items.length - 1]
                    : this._items[o];
            }
            _triggerSlideEvent(t, n) {
                const i = this._getItemIndex(t),
                    r = this._getItemIndex(
                        this._element.querySelector(L.ACTIVE_ITEM)
                    ),
                    o = e.Event(N.SLIDE, {
                        relatedTarget: t,
                        direction: n,
                        from: r,
                        to: i,
                    });
                return e(this._element).trigger(o), o;
            }
            _setActiveIndicatorElement(t) {
                if (this._indicatorsElement) {
                    const n = [].slice.call(
                        this._indicatorsElement.querySelectorAll(L.ACTIVE)
                    );
                    e(n).removeClass(M.ACTIVE);
                    const i =
                        this._indicatorsElement.children[this._getItemIndex(t)];
                    i && e(i).addClass(M.ACTIVE);
                }
            }
            _slide(t, n) {
                const i = this._element.querySelector(L.ACTIVE_ITEM),
                    r = this._getItemIndex(i),
                    o = n || (i && this._getItemByDirection(t, i)),
                    s = this._getItemIndex(o),
                    a = !!this._interval;
                let l, u, h;
                if (
                    (t === I.NEXT
                        ? ((l = M.LEFT), (u = M.NEXT), (h = I.LEFT))
                        : ((l = M.RIGHT), (u = M.PREV), (h = I.RIGHT)),
                    o && e(o).hasClass(M.ACTIVE))
                )
                    return void (this._isSliding = !1);
                if (this._triggerSlideEvent(o, h).isDefaultPrevented()) return;
                if (!i || !o) return;
                (this._isSliding = !0),
                    a && this.pause(),
                    this._setActiveIndicatorElement(o);
                const d = e.Event(N.SLID, {
                    relatedTarget: o,
                    direction: h,
                    from: r,
                    to: s,
                });
                if (e(this._element).hasClass(M.SLIDE)) {
                    e(o).addClass(u),
                        c.reflow(o),
                        e(i).addClass(l),
                        e(o).addClass(l);
                    const t = parseInt(o.getAttribute('data-interval'), 10);
                    t
                        ? ((this._config.defaultInterval =
                              this._config.defaultInterval ||
                              this._config.interval),
                          (this._config.interval = t))
                        : (this._config.interval =
                              this._config.defaultInterval ||
                              this._config.interval);
                    const n = c.getTransitionDurationFromElement(i);
                    e(i)
                        .one(c.TRANSITION_END, () => {
                            e(o).removeClass(`${l} ${u}`).addClass(M.ACTIVE),
                                e(i).removeClass(`${M.ACTIVE} ${u} ${l}`),
                                (this._isSliding = !1),
                                setTimeout(
                                    () => e(this._element).trigger(d),
                                    0
                                );
                        })
                        .emulateTransitionEnd(n);
                } else e(i).removeClass(M.ACTIVE), e(o).addClass(M.ACTIVE), (this._isSliding = !1), e(this._element).trigger(d);
                a && this.cycle();
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    let n = e(this).data(T),
                        i = { ...O, ...e(this).data() };
                    'object' == typeof t && (i = { ...i, ...t });
                    const r = 'string' == typeof t ? t : i.slide;
                    if (
                        (n || ((n = new H(this, i)), e(this).data(T, n)),
                        'number' == typeof t)
                    )
                        n.to(t);
                    else if ('string' == typeof r) {
                        if (void 0 === n[r])
                            throw new TypeError(`No method named "${r}"`);
                        n[r]();
                    } else i.interval && i.ride && (n.pause(), n.cycle());
                });
            }
            static _dataApiClickHandler(t) {
                const n = c.getSelectorFromElement(this);
                if (!n) return;
                const i = e(n)[0];
                if (!i || !e(i).hasClass(M.CAROUSEL)) return;
                const r = { ...e(i).data(), ...e(this).data() },
                    o = this.getAttribute('data-slide-to');
                o && (r.interval = !1),
                    H._jQueryInterface.call(e(i), r),
                    o && e(i).data(T).to(o),
                    t.preventDefault();
            }
        }
        e(document).on(N.CLICK_DATA_API, L.DATA_SLIDE, H._dataApiClickHandler),
            e(window).on(N.LOAD_DATA_API, () => {
                const t = [].slice.call(document.querySelectorAll(L.DATA_RIDE));
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = e(t[n]);
                    H._jQueryInterface.call(i, i.data());
                }
            }),
            (e.fn.carousel = H._jQueryInterface),
            (e.fn.carousel.Constructor = H),
            (e.fn.carousel.noConflict = () => (
                (e.fn[S] = D), H._jQueryInterface
            ));
        const R = 'collapse',
            j = 'bs.collapse',
            $ = `.${j}`,
            Y = e.fn.collapse,
            W = { toggle: !0, parent: '' },
            F = { toggle: 'boolean', parent: '(string|element)' },
            U = {
                SHOW: `show${$}`,
                SHOWN: `shown${$}`,
                HIDE: `hide${$}`,
                HIDDEN: `hidden${$}`,
                CLICK_DATA_API: `click${$}.data-api`,
            },
            V = {
                SHOW: 'show',
                COLLAPSE: 'collapse',
                COLLAPSING: 'collapsing',
                COLLAPSED: 'collapsed',
            },
            B = { WIDTH: 'width', HEIGHT: 'height' },
            q = {
                ACTIVES: '.show, .collapsing',
                DATA_TOGGLE: '[data-toggle="collapse"]',
            };
        class G {
            constructor(e, t) {
                (this._isTransitioning = !1),
                    (this._element = e),
                    (this._config = this._getConfig(t)),
                    (this._triggerArray = [].slice.call(
                        document.querySelectorAll(
                            `[data-toggle="collapse"][href="#${e.id}"],` +
                                `[data-toggle="collapse"][data-target="#${e.id}"]`
                        )
                    ));
                const n = [].slice.call(
                    document.querySelectorAll(q.DATA_TOGGLE)
                );
                for (let i = 0, r = n.length; i < r; i++) {
                    const t = n[i],
                        r = c.getSelectorFromElement(t),
                        o = [].slice
                            .call(document.querySelectorAll(r))
                            .filter((t) => t === e);
                    null !== r &&
                        0 < o.length &&
                        ((this._selector = r), this._triggerArray.push(t));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._element,
                            this._triggerArray
                        ),
                    this._config.toggle && this.toggle();
            }
            static get VERSION() {
                return '4.3.1';
            }
            static get Default() {
                return W;
            }
            toggle() {
                e(this._element).hasClass(V.SHOW) ? this.hide() : this.show();
            }
            show() {
                if (this._isTransitioning || e(this._element).hasClass(V.SHOW))
                    return;
                let t, n;
                if (
                    (this._parent &&
                        0 ===
                            (t = [].slice
                                .call(this._parent.querySelectorAll(q.ACTIVES))
                                .filter((e) =>
                                    'string' == typeof this._config.parent
                                        ? e.getAttribute('data-parent') ===
                                          this._config.parent
                                        : e.classList.contains(V.COLLAPSE)
                                )).length &&
                        (t = null),
                    t &&
                        (n = e(t).not(this._selector).data(j)) &&
                        n._isTransitioning)
                )
                    return;
                const i = e.Event(U.SHOW);
                if ((e(this._element).trigger(i), i.isDefaultPrevented()))
                    return;
                t &&
                    (G._jQueryInterface.call(e(t).not(this._selector), 'hide'),
                    !n && e(t).data(j, null));
                const r = this._getDimension();
                e(this._element).removeClass(V.COLLAPSE).addClass(V.COLLAPSING),
                    (this._element.style[r] = 0),
                    this._triggerArray.length &&
                        e(this._triggerArray)
                            .removeClass(V.COLLAPSED)
                            .attr('aria-expanded', !0),
                    this.setTransitioning(!0);
                const o = r[0].toUpperCase() + r.slice(1),
                    s = c.getTransitionDurationFromElement(this._element);
                e(this._element)
                    .one(c.TRANSITION_END, () => {
                        e(this._element)
                            .removeClass(V.COLLAPSING)
                            .addClass(V.COLLAPSE)
                            .addClass(V.SHOW),
                            (this._element.style[r] = ''),
                            this.setTransitioning(!1),
                            e(this._element).trigger(U.SHOWN);
                    })
                    .emulateTransitionEnd(s),
                    (this._element.style[r] = `${
                        this._element[`scroll${o}`]
                    }px`);
            }
            hide() {
                if (
                    !this._isTransitioning &&
                    e(this._element).hasClass(V.SHOW)
                ) {
                    const t = e.Event(U.HIDE);
                    if (
                        (e(this._element).trigger(t), !t.isDefaultPrevented())
                    ) {
                        const t = this._getDimension();
                        (this._element.style[t] = `${
                            this._element.getBoundingClientRect()[t]
                        }px`),
                            c.reflow(this._element),
                            e(this._element)
                                .addClass(V.COLLAPSING)
                                .removeClass(V.COLLAPSE)
                                .removeClass(V.SHOW);
                        const n = this._triggerArray.length;
                        if (0 < n)
                            for (let o = 0; o < n; o++) {
                                const t = this._triggerArray[o],
                                    n = c.getSelectorFromElement(t);
                                null !== n &&
                                    (e(
                                        [].slice.call(
                                            document.querySelectorAll(n)
                                        )
                                    ).hasClass(V.SHOW) ||
                                        e(t)
                                            .addClass(V.COLLAPSED)
                                            .attr('aria-expanded', !1));
                            }
                        this.setTransitioning(!0);
                        const i = () => {
                            this.setTransitioning(!1),
                                e(this._element)
                                    .removeClass(V.COLLAPSING)
                                    .addClass(V.COLLAPSE)
                                    .trigger(U.HIDDEN);
                        };
                        this._element.style[t] = '';
                        const r = c.getTransitionDurationFromElement(
                            this._element
                        );
                        e(this._element)
                            .one(c.TRANSITION_END, i)
                            .emulateTransitionEnd(r);
                    }
                }
            }
            setTransitioning(e) {
                this._isTransitioning = e;
            }
            dispose() {
                e.removeData(this._element, j),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
            }
            _getConfig(e) {
                return (
                    ((e = { ...W, ...e }).toggle = !!e.toggle),
                    c.typeCheckConfig(R, e, F),
                    e
                );
            }
            _getDimension() {
                return e(this._element).hasClass(B.WIDTH) ? B.WIDTH : B.HEIGHT;
            }
            _getParent() {
                let t;
                c.isElement(this._config.parent)
                    ? ((t = this._config.parent),
                      void 0 !== this._config.parent.jquery &&
                          (t = this._config.parent[0]))
                    : (t = document.querySelector(this._config.parent));
                const n = [].slice.call(
                    t.querySelectorAll(
                        `[data-toggle="collapse"][data-parent="${this._config.parent}"]`
                    )
                );
                return (
                    e(n).each((e, t) => {
                        this._addAriaAndCollapsedClass(
                            G._getTargetFromElement(t),
                            [t]
                        );
                    }),
                    t
                );
            }
            _addAriaAndCollapsedClass(t, n) {
                const i = e(t).hasClass(V.SHOW);
                n.length &&
                    e(n).toggleClass(V.COLLAPSED, !i).attr('aria-expanded', i);
            }
            static _getTargetFromElement(e) {
                const t = c.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null;
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    const n = e(this);
                    let i = n.data(j);
                    const r = {
                        ...W,
                        ...n.data(),
                        ...('object' == typeof t && t ? t : {}),
                    };
                    if (
                        (!i &&
                            r.toggle &&
                            /show|hide/.test(t) &&
                            (r.toggle = !1),
                        i || ((i = new G(this, r)), n.data(j, i)),
                        'string' == typeof t)
                    ) {
                        if (void 0 === i[t])
                            throw new TypeError(`No method named "${t}"`);
                        i[t]();
                    }
                });
            }
        }
        e(document).on(U.CLICK_DATA_API, q.DATA_TOGGLE, function (t) {
            'A' === t.currentTarget.tagName && t.preventDefault();
            const n = e(this),
                i = c.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            e(r).each(function () {
                const t = e(this),
                    i = t.data(j) ? 'toggle' : n.data();
                G._jQueryInterface.call(t, i);
            });
        }),
            (e.fn.collapse = G._jQueryInterface),
            (e.fn.collapse.Constructor = G),
            (e.fn.collapse.noConflict = () => (
                (e.fn[R] = Y), G._jQueryInterface
            ));
        const z = 'modal',
            X = 'bs.modal',
            Q = `.${X}`,
            K = e.fn.modal,
            Z = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            J = {
                backdrop: '(boolean|string)',
                keyboard: 'boolean',
                focus: 'boolean',
                show: 'boolean',
            },
            ee = {
                HIDE: `hide${Q}`,
                HIDDEN: `hidden${Q}`,
                SHOW: `show${Q}`,
                SHOWN: `shown${Q}`,
                FOCUSIN: `focusin${Q}`,
                RESIZE: `resize${Q}`,
                CLICK_DISMISS: `click.dismiss${Q}`,
                KEYDOWN_DISMISS: `keydown.dismiss${Q}`,
                MOUSEUP_DISMISS: `mouseup.dismiss${Q}`,
                MOUSEDOWN_DISMISS: `mousedown.dismiss${Q}`,
                CLICK_DATA_API: `click${Q}.data-api`,
            },
            te = {
                SCROLLABLE: 'modal-dialog-scrollable',
                SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
                BACKDROP: 'modal-backdrop',
                OPEN: 'modal-open',
                FADE: 'fade',
                SHOW: 'show',
            },
            ne = {
                DIALOG: '.modal-dialog',
                MODAL_BODY: '.modal-body',
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT:
                    '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
                STICKY_CONTENT: '.sticky-top',
            };
        class ie {
            constructor(e, t) {
                (this._config = this._getConfig(t)),
                    (this._element = e),
                    (this._dialog = e.querySelector(ne.DIALOG)),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            static get VERSION() {
                return '4.3.1';
            }
            static get Default() {
                return Z;
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(t) {
                if (!this._isShown && !this._isTransitioning) {
                    e(this._element).hasClass(te.FADE) &&
                        (this._isTransitioning = !0);
                    const n = e.Event(ee.SHOW, { relatedTarget: t });
                    e(this._element).trigger(n),
                        this._isShown ||
                            n.isDefaultPrevented() ||
                            ((this._isShown = !0),
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            this._adjustDialog(),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            e(this._element).on(
                                ee.CLICK_DISMISS,
                                ne.DATA_DISMISS,
                                (e) => this.hide(e)
                            ),
                            e(this._dialog).on(ee.MOUSEDOWN_DISMISS, () => {
                                e(this._element).one(
                                    ee.MOUSEUP_DISMISS,
                                    (t) => {
                                        e(t.target).is(this._element) &&
                                            (this._ignoreBackdropClick = !0);
                                    }
                                );
                            }),
                            this._showBackdrop(() => this._showElement(t)));
                }
            }
            hide(t) {
                if (
                    (t && t.preventDefault(),
                    this._isShown && !this._isTransitioning)
                ) {
                    const t = e.Event(ee.HIDE);
                    if (
                        (e(this._element).trigger(t),
                        this._isShown && !t.isDefaultPrevented())
                    ) {
                        this._isShown = !1;
                        const t = e(this._element).hasClass(te.FADE);
                        if (
                            (t && (this._isTransitioning = !0),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            e(document).off(ee.FOCUSIN),
                            e(this._element).removeClass(te.SHOW),
                            e(this._element).off(ee.CLICK_DISMISS),
                            e(this._dialog).off(ee.MOUSEDOWN_DISMISS),
                            t)
                        ) {
                            const t = c.getTransitionDurationFromElement(
                                this._element
                            );
                            e(this._element)
                                .one(c.TRANSITION_END, (e) =>
                                    this._hideModal(e)
                                )
                                .emulateTransitionEnd(t);
                        } else this._hideModal();
                    }
                }
            }
            dispose() {
                [window, this._element, this._dialog].forEach((t) =>
                    e(t).off(Q)
                ),
                    e(document).off(ee.FOCUSIN),
                    e.removeData(this._element, X),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._isTransitioning = null),
                    (this._scrollbarWidth = null);
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _getConfig(e) {
                return (e = { ...Z, ...e }), c.typeCheckConfig(z, e, J), e;
            }
            _showElement(t) {
                const n = e(this._element).hasClass(te.FADE);
                (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = 'block'),
                    this._element.removeAttribute('aria-hidden'),
                    this._element.setAttribute('aria-modal', !0),
                    e(this._dialog).hasClass(te.SCROLLABLE)
                        ? (this._dialog.querySelector(
                              ne.MODAL_BODY
                          ).scrollTop = 0)
                        : (this._element.scrollTop = 0),
                    n && c.reflow(this._element),
                    e(this._element).addClass(te.SHOW),
                    this._config.focus && this._enforceFocus();
                const i = e.Event(ee.SHOWN, { relatedTarget: t }),
                    r = () => {
                        this._config.focus && this._element.focus(),
                            (this._isTransitioning = !1),
                            e(this._element).trigger(i);
                    };
                if (n) {
                    const t = c.getTransitionDurationFromElement(this._dialog);
                    e(this._dialog)
                        .one(c.TRANSITION_END, r)
                        .emulateTransitionEnd(t);
                } else r();
            }
            _enforceFocus() {
                e(document)
                    .off(ee.FOCUSIN)
                    .on(ee.FOCUSIN, (t) => {
                        document !== t.target &&
                            this._element !== t.target &&
                            0 === e(this._element).has(t.target).length &&
                            this._element.focus();
                    });
            }
            _setEscapeEvent() {
                this._isShown && this._config.keyboard
                    ? e(this._element).on(ee.KEYDOWN_DISMISS, (e) => {
                          27 === e.which && (e.preventDefault(), this.hide());
                      })
                    : !this._isShown &&
                      e(this._element).off(ee.KEYDOWN_DISMISS);
            }
            _setResizeEvent() {
                this._isShown
                    ? e(window).on(ee.RESIZE, (e) => this.handleUpdate(e))
                    : e(window).off(ee.RESIZE);
            }
            _hideModal() {
                (this._element.style.display = 'none'),
                    this._element.setAttribute('aria-hidden', !0),
                    this._element.removeAttribute('aria-modal'),
                    (this._isTransitioning = !1),
                    this._showBackdrop(() => {
                        e(document.body).removeClass(te.OPEN),
                            this._resetAdjustments(),
                            this._resetScrollbar(),
                            e(this._element).trigger(ee.HIDDEN);
                    });
            }
            _removeBackdrop() {
                this._backdrop &&
                    (e(this._backdrop).remove(), (this._backdrop = null));
            }
            _showBackdrop(t) {
                const n = e(this._element).hasClass(te.FADE) ? te.FADE : '';
                if (this._isShown && this._config.backdrop) {
                    if (
                        ((this._backdrop = document.createElement('div')),
                        (this._backdrop.className = te.BACKDROP),
                        n && this._backdrop.classList.add(n),
                        e(this._backdrop).appendTo(document.body),
                        e(this._element).on(ee.CLICK_DISMISS, (e) =>
                            this._ignoreBackdropClick
                                ? void (this._ignoreBackdropClick = !1)
                                : void (
                                      e.target !== e.currentTarget ||
                                      ('static' === this._config.backdrop
                                          ? this._element.focus()
                                          : this.hide())
                                  )
                        ),
                        n && c.reflow(this._backdrop),
                        e(this._backdrop).addClass(te.SHOW),
                        !t)
                    )
                        return;
                    if (!n) return void t();
                    const i = c.getTransitionDurationFromElement(
                        this._backdrop
                    );
                    e(this._backdrop)
                        .one(c.TRANSITION_END, t)
                        .emulateTransitionEnd(i);
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(te.SHOW);
                    const n = () => {
                        this._removeBackdrop(), t && t();
                    };
                    if (e(this._element).hasClass(te.FADE)) {
                        const t = c.getTransitionDurationFromElement(
                            this._backdrop
                        );
                        e(this._backdrop)
                            .one(c.TRANSITION_END, n)
                            .emulateTransitionEnd(t);
                    } else n();
                } else t && t();
            }
            _adjustDialog() {
                const e =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                    e &&
                    (this._element.style.paddingLeft = `${this._scrollbarWidth}px`),
                    this._isBodyOverflowing &&
                        !e &&
                        (this._element.style.paddingRight = `${this._scrollbarWidth}px`);
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ''),
                    (this._element.style.paddingRight = '');
            }
            _checkScrollbar() {
                const e = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                    e.left + e.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
            }
            _setScrollbar() {
                if (this._isBodyOverflowing) {
                    const t = [].slice.call(
                            document.querySelectorAll(ne.FIXED_CONTENT)
                        ),
                        n = [].slice.call(
                            document.querySelectorAll(ne.STICKY_CONTENT)
                        );
                    e(t).each((t, n) => {
                        const i = n.style.paddingRight,
                            r = e(n).css('padding-right');
                        e(n)
                            .data('padding-right', i)
                            .css(
                                'padding-right',
                                `${parseFloat(r) + this._scrollbarWidth}px`
                            );
                    }),
                        e(n).each((t, n) => {
                            const i = n.style.marginRight,
                                r = e(n).css('margin-right');
                            e(n)
                                .data('margin-right', i)
                                .css(
                                    'margin-right',
                                    `${parseFloat(r) - this._scrollbarWidth}px`
                                );
                        });
                    const i = document.body.style.paddingRight,
                        r = e(document.body).css('padding-right');
                    e(document.body)
                        .data('padding-right', i)
                        .css(
                            'padding-right',
                            `${parseFloat(r) + this._scrollbarWidth}px`
                        );
                }
                e(document.body).addClass(te.OPEN);
            }
            _resetScrollbar() {
                const t = [].slice.call(
                    document.querySelectorAll(ne.FIXED_CONTENT)
                );
                e(t).each((t, n) => {
                    const i = e(n).data('padding-right');
                    e(n).removeData('padding-right'),
                        (n.style.paddingRight = i || '');
                });
                const n = [].slice.call(
                    document.querySelectorAll(`${ne.STICKY_CONTENT}`)
                );
                e(n).each((t, n) => {
                    const i = e(n).data('margin-right');
                    void 0 !== i &&
                        e(n).css('margin-right', i).removeData('margin-right');
                });
                const i = e(document.body).data('padding-right');
                e(document.body).removeData('padding-right'),
                    (document.body.style.paddingRight = i || '');
            }
            _getScrollbarWidth() {
                const e = document.createElement('div');
                (e.className = te.SCROLLBAR_MEASURER),
                    document.body.appendChild(e);
                const t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
            }
            static _jQueryInterface(t, n) {
                return this.each(function () {
                    let i = e(this).data(X);
                    const r = {
                        ...Z,
                        ...e(this).data(),
                        ...('object' == typeof t && t ? t : {}),
                    };
                    if (
                        (i || ((i = new ie(this, r)), e(this).data(X, i)),
                        'string' == typeof t)
                    ) {
                        if (void 0 === i[t])
                            throw new TypeError(`No method named "${t}"`);
                        i[t](n);
                    } else r.show && i.show(n);
                });
            }
        }
        e(document).on(ee.CLICK_DATA_API, ne.DATA_TOGGLE, function (t) {
            let n;
            const i = c.getSelectorFromElement(this);
            i && (n = document.querySelector(i));
            const r = e(n).data(X)
                ? 'toggle'
                : { ...e(n).data(), ...e(this).data() };
            ('A' === this.tagName || 'AREA' === this.tagName) &&
                t.preventDefault();
            const o = e(n).one(ee.SHOW, (t) => {
                t.isDefaultPrevented() ||
                    o.one(ee.HIDDEN, () => {
                        e(this).is(':visible') && this.focus();
                    });
            });
            ie._jQueryInterface.call(e(n), r, this);
        }),
            (e.fn.modal = ie._jQueryInterface),
            (e.fn.modal.Constructor = ie),
            (e.fn.modal.noConflict = () => (
                (e.fn[z] = K), ie._jQueryInterface
            ));
        const re = [
                'background',
                'cite',
                'href',
                'itemtype',
                'longdesc',
                'poster',
                'src',
                'xlink:href',
            ],
            oe =
                /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
            se =
                /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
            ae = 'tooltip',
            le = 'bs.tooltip',
            ce = `.${le}`,
            ue = e.fn[ae],
            he = 'bs-tooltip',
            de = new RegExp(`(^|\\s)${he}\\S+`, 'g'),
            fe = ['sanitize', 'whiteList', 'sanitizeFn'],
            pe = {
                animation: 'boolean',
                template: 'string',
                title: '(string|element|function)',
                trigger: 'string',
                delay: '(number|object)',
                html: 'boolean',
                selector: '(string|boolean)',
                placement: '(string|function)',
                offset: '(number|string|function)',
                container: '(string|element|boolean)',
                fallbackPlacement: '(string|array)',
                boundary: '(string|element)',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                whiteList: 'object',
            },
            me = {
                AUTO: 'auto',
                TOP: 'top',
                RIGHT: 'right',
                BOTTOM: 'bottom',
                LEFT: 'left',
            },
            ge = {
                animation: !0,
                template:
                    '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: 'hover focus',
                title: '',
                delay: 0,
                html: !1,
                selector: !1,
                placement: 'top',
                offset: 0,
                container: !1,
                fallbackPlacement: 'flip',
                boundary: 'scrollParent',
                sanitize: !0,
                sanitizeFn: null,
                whiteList: {
                    '*': [
                        'class',
                        'dir',
                        'id',
                        'lang',
                        'role',
                        /^aria-[\w-]*$/i,
                    ],
                    a: ['target', 'href', 'title', 'rel'],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ['src', 'alt', 'title', 'width', 'height'],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: [],
                },
            },
            ve = { SHOW: 'show', OUT: 'out' },
            ye = {
                HIDE: `hide${ce}`,
                HIDDEN: `hidden${ce}`,
                SHOW: `show${ce}`,
                SHOWN: `shown${ce}`,
                INSERTED: `inserted${ce}`,
                CLICK: `click${ce}`,
                FOCUSIN: `focusin${ce}`,
                FOCUSOUT: `focusout${ce}`,
                MOUSEENTER: `mouseenter${ce}`,
                MOUSELEAVE: `mouseleave${ce}`,
            },
            be = { FADE: 'fade', SHOW: 'show' },
            _e = {
                TOOLTIP: '.tooltip',
                TOOLTIP_INNER: '.tooltip-inner',
                ARROW: '.arrow',
            },
            we = {
                HOVER: 'hover',
                FOCUS: 'focus',
                CLICK: 'click',
                MANUAL: 'manual',
            };
        class xe {
            constructor(e, n) {
                if (void 0 === t)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                    );
                (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ''),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = e),
                    (this.config = this._getConfig(n)),
                    (this.tip = null),
                    this._setListeners();
            }
            static get VERSION() {
                return '4.3.1';
            }
            static get Default() {
                return ge;
            }
            static get NAME() {
                return ae;
            }
            static get DATA_KEY() {
                return le;
            }
            static get Event() {
                return ye;
            }
            static get EVENT_KEY() {
                return ce;
            }
            static get DefaultType() {
                return pe;
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle(t) {
                if (this._isEnabled)
                    if (t) {
                        const n = this.constructor.DATA_KEY;
                        let i = e(t.currentTarget).data(n);
                        i ||
                            ((i = new this.constructor(
                                t.currentTarget,
                                this._getDelegateConfig()
                            )),
                            e(t.currentTarget).data(n, i)),
                            (i._activeTrigger.click = !i._activeTrigger.click),
                            i._isWithActiveTrigger()
                                ? i._enter(null, i)
                                : i._leave(null, i);
                    } else {
                        if (e(this.getTipElement()).hasClass(be.SHOW))
                            return void this._leave(null, this);
                        this._enter(null, this);
                    }
            }
            dispose() {
                clearTimeout(this._timeout),
                    e.removeData(this.element, this.constructor.DATA_KEY),
                    e(this.element).off(this.constructor.EVENT_KEY),
                    e(this.element).closest('.modal').off('hide.bs.modal'),
                    this.tip && e(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
            }
            show() {
                if ('none' === e(this.element).css('display'))
                    throw new Error('Please use show on visible elements');
                const n = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(n);
                    const i = c.findShadowRoot(this.element),
                        r = e.contains(
                            null === i
                                ? this.element.ownerDocument.documentElement
                                : i,
                            this.element
                        );
                    if (n.isDefaultPrevented() || !r) return;
                    const o = this.getTipElement(),
                        s = c.getUID(this.constructor.NAME);
                    o.setAttribute('id', s),
                        this.element.setAttribute('aria-describedby', s),
                        this.setContent(),
                        this.config.animation && e(o).addClass(be.FADE);
                    const a =
                            'function' == typeof this.config.placement
                                ? this.config.placement.call(
                                      this,
                                      o,
                                      this.element
                                  )
                                : this.config.placement,
                        l = this._getAttachment(a);
                    this.addAttachmentClass(l);
                    const u = this._getContainer();
                    e(o).data(this.constructor.DATA_KEY, this),
                        e.contains(
                            this.element.ownerDocument.documentElement,
                            this.tip
                        ) || e(o).appendTo(u),
                        e(this.element).trigger(
                            this.constructor.Event.INSERTED
                        ),
                        (this._popper = new t(this.element, o, {
                            placement: l,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement,
                                },
                                arrow: { element: _e.ARROW },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary,
                                },
                            },
                            onCreate: (e) => {
                                e.originalPlacement !== e.placement &&
                                    this._handlePopperPlacementChange(e);
                            },
                            onUpdate: (e) =>
                                this._handlePopperPlacementChange(e),
                        })),
                        e(o).addClass(be.SHOW),
                        'ontouchstart' in document.documentElement &&
                            e(document.body)
                                .children()
                                .on('mouseover', null, e.noop);
                    const h = () => {
                        this.config.animation && this._fixTransition();
                        const t = this._hoverState;
                        (this._hoverState = null),
                            e(this.element).trigger(
                                this.constructor.Event.SHOWN
                            ),
                            t === ve.OUT && this._leave(null, this);
                    };
                    if (e(this.tip).hasClass(be.FADE)) {
                        const t = c.getTransitionDurationFromElement(this.tip);
                        e(this.tip)
                            .one(c.TRANSITION_END, h)
                            .emulateTransitionEnd(t);
                    } else h();
                }
            }
            hide(t) {
                const n = this.getTipElement(),
                    i = e.Event(this.constructor.Event.HIDE),
                    r = () => {
                        this._hoverState !== ve.SHOW &&
                            n.parentNode &&
                            n.parentNode.removeChild(n),
                            this._cleanTipClass(),
                            this.element.removeAttribute('aria-describedby'),
                            e(this.element).trigger(
                                this.constructor.Event.HIDDEN
                            ),
                            null !== this._popper && this._popper.destroy(),
                            t && t();
                    };
                if ((e(this.element).trigger(i), !i.isDefaultPrevented())) {
                    if (
                        (e(n).removeClass(be.SHOW),
                        'ontouchstart' in document.documentElement &&
                            e(document.body)
                                .children()
                                .off('mouseover', null, e.noop),
                        (this._activeTrigger[we.CLICK] = !1),
                        (this._activeTrigger[we.FOCUS] = !1),
                        (this._activeTrigger[we.HOVER] = !1),
                        e(this.tip).hasClass(be.FADE))
                    ) {
                        const t = c.getTransitionDurationFromElement(n);
                        e(n).one(c.TRANSITION_END, r).emulateTransitionEnd(t);
                    } else r();
                    this._hoverState = '';
                }
            }
            update() {
                null !== this._popper && this._popper.scheduleUpdate();
            }
            isWithContent() {
                return !!this.getTitle();
            }
            addAttachmentClass(t) {
                e(this.getTipElement()).addClass(`${he}-${t}`);
            }
            getTipElement() {
                return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                );
            }
            setContent() {
                const t = this.getTipElement();
                this.setElementContent(
                    e(t.querySelectorAll(_e.TOOLTIP_INNER)),
                    this.getTitle()
                ),
                    e(t).removeClass(`${be.FADE} ${be.SHOW}`);
            }
            setElementContent(t, n) {
                return 'object' == typeof n && (n.nodeType || n.jquery)
                    ? void (this.config.html
                          ? !e(n).parent().is(t) && t.empty().append(n)
                          : t.text(e(n).text()))
                    : void (this.config.html
                          ? (this.config.sanitize &&
                                (n = o(
                                    n,
                                    this.config.whiteList,
                                    this.config.sanitizeFn
                                )),
                            t.html(n))
                          : t.text(n));
            }
            getTitle() {
                let e = this.element.getAttribute('data-original-title');
                return (
                    e ||
                        (e =
                            'function' == typeof this.config.title
                                ? this.config.title.call(this.element)
                                : this.config.title),
                    e
                );
            }
            _getOffset() {
                const e = {};
                return (
                    'function' == typeof this.config.offset
                        ? (e.fn = (e) => (
                              (e.offsets = {
                                  ...e.offsets,
                                  ...(this.config.offset(
                                      e.offsets,
                                      this.element
                                  ) || {}),
                              }),
                              e
                          ))
                        : (e.offset = this.config.offset),
                    e
                );
            }
            _getContainer() {
                return !1 === this.config.container
                    ? document.body
                    : c.isElement(this.config.container)
                    ? e(this.config.container)
                    : e(document).find(this.config.container);
            }
            _getAttachment(e) {
                return me[e.toUpperCase()];
            }
            _setListeners() {
                this.config.trigger.split(' ').forEach((t) => {
                    if ('click' === t)
                        e(this.element).on(
                            this.constructor.Event.CLICK,
                            this.config.selector,
                            (e) => this.toggle(e)
                        );
                    else if (t !== we.MANUAL) {
                        const n =
                                t === we.HOVER
                                    ? this.constructor.Event.MOUSEENTER
                                    : this.constructor.Event.FOCUSIN,
                            i =
                                t === we.HOVER
                                    ? this.constructor.Event.MOUSELEAVE
                                    : this.constructor.Event.FOCUSOUT;
                        e(this.element)
                            .on(n, this.config.selector, (e) => this._enter(e))
                            .on(i, this.config.selector, (e) => this._leave(e));
                    }
                }),
                    e(this.element)
                        .closest('.modal')
                        .on('hide.bs.modal', () => {
                            this.element && this.hide();
                        }),
                    this.config.selector
                        ? (this.config = {
                              ...this.config,
                              trigger: 'manual',
                              selector: '',
                          })
                        : this._fixTitle();
            }
            _fixTitle() {
                const e = typeof this.element.getAttribute(
                    'data-original-title'
                );
                (this.element.getAttribute('title') || 'string' != e) &&
                    (this.element.setAttribute(
                        'data-original-title',
                        this.element.getAttribute('title') || ''
                    ),
                    this.element.setAttribute('title', ''));
            }
            _enter(t, n) {
                const i = this.constructor.DATA_KEY;
                return (
                    (n = n || e(t.currentTarget).data(i)) ||
                        ((n = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        e(t.currentTarget).data(i, n)),
                    t &&
                        (n._activeTrigger[
                            'focusin' === t.type ? we.FOCUS : we.HOVER
                        ] = !0),
                    e(n.getTipElement()).hasClass(be.SHOW) ||
                    n._hoverState === ve.SHOW
                        ? void (n._hoverState = ve.SHOW)
                        : (clearTimeout(n._timeout),
                          (n._hoverState = ve.SHOW),
                          n.config.delay && n.config.delay.show
                              ? void (n._timeout = setTimeout(() => {
                                    n._hoverState === ve.SHOW && n.show();
                                }, n.config.delay.show))
                              : void n.show())
                );
            }
            _leave(t, n) {
                const i = this.constructor.DATA_KEY;
                if (
                    ((n = n || e(t.currentTarget).data(i)) ||
                        ((n = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        e(t.currentTarget).data(i, n)),
                    t &&
                        (n._activeTrigger[
                            'focusout' === t.type ? we.FOCUS : we.HOVER
                        ] = !1),
                    !n._isWithActiveTrigger())
                )
                    return (
                        clearTimeout(n._timeout),
                        (n._hoverState = ve.OUT),
                        n.config.delay && n.config.delay.hide
                            ? void (n._timeout = setTimeout(() => {
                                  n._hoverState === ve.OUT && n.hide();
                              }, n.config.delay.hide))
                            : void n.hide()
                    );
            }
            _isWithActiveTrigger() {
                for (const e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1;
            }
            _getConfig(t) {
                const n = e(this.element).data();
                return (
                    Object.keys(n).forEach((e) => {
                        -1 !== fe.indexOf(e) && delete n[e];
                    }),
                    'number' ==
                        typeof (t = {
                            ...this.constructor.Default,
                            ...n,
                            ...('object' == typeof t && t ? t : {}),
                        }).delay &&
                        (t.delay = { show: t.delay, hide: t.delay }),
                    'number' == typeof t.title &&
                        (t.title = t.title.toString()),
                    'number' == typeof t.content &&
                        (t.content = t.content.toString()),
                    c.typeCheckConfig(ae, t, this.constructor.DefaultType),
                    t.sanitize &&
                        (t.template = o(t.template, t.whiteList, t.sanitizeFn)),
                    t
                );
            }
            _getDelegateConfig() {
                const e = {};
                if (this.config)
                    for (const t in this.config)
                        this.constructor.Default[t] !== this.config[t] &&
                            (e[t] = this.config[t]);
                return e;
            }
            _cleanTipClass() {
                const t = e(this.getTipElement()),
                    n = t.attr('class').match(de);
                null !== n && n.length && t.removeClass(n.join(''));
            }
            _handlePopperPlacementChange(e) {
                (this.tip = e.instance.popper),
                    this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(e.placement));
            }
            _fixTransition() {
                const t = this.getTipElement(),
                    n = this.config.animation;
                null !== t.getAttribute('x-placement') ||
                    (e(t).removeClass(be.FADE),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = n));
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    let n = e(this).data(le);
                    if (
                        (n || !/dispose|hide/.test(t)) &&
                        (n ||
                            ((n = new xe(this, 'object' == typeof t && t)),
                            e(this).data(le, n)),
                        'string' == typeof t)
                    ) {
                        if (void 0 === n[t])
                            throw new TypeError(`No method named "${t}"`);
                        n[t]();
                    }
                });
            }
        }
        (e.fn[ae] = xe._jQueryInterface),
            (e.fn[ae].Constructor = xe),
            (e.fn[ae].noConflict = () => (
                (e.fn[ae] = ue), xe._jQueryInterface
            ));
        const Ee = 'popover',
            Se = 'bs.popover',
            Te = `.${Se}`,
            Ce = e.fn.popover,
            Ae = 'bs-popover',
            De = new RegExp(`(^|\\s)${Ae}\\S+`, 'g'),
            Oe = {
                ...xe.Default,
                placement: 'right',
                trigger: 'click',
                content: '',
                template:
                    '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            },
            ke = { ...xe.DefaultType, content: '(string|element|function)' },
            Ie = { FADE: 'fade', SHOW: 'show' },
            Ne = { TITLE: '.popover-header', CONTENT: '.popover-body' },
            Me = {
                HIDE: `hide${Te}`,
                HIDDEN: `hidden${Te}`,
                SHOW: `show${Te}`,
                SHOWN: `shown${Te}`,
                INSERTED: `inserted${Te}`,
                CLICK: `click${Te}`,
                FOCUSIN: `focusin${Te}`,
                FOCUSOUT: `focusout${Te}`,
                MOUSEENTER: `mouseenter${Te}`,
                MOUSELEAVE: `mouseleave${Te}`,
            };
        class Le extends xe {
            static get VERSION() {
                return '4.3.1';
            }
            static get Default() {
                return Oe;
            }
            static get NAME() {
                return Ee;
            }
            static get DATA_KEY() {
                return Se;
            }
            static get Event() {
                return Me;
            }
            static get EVENT_KEY() {
                return Te;
            }
            static get DefaultType() {
                return ke;
            }
            isWithContent() {
                return this.getTitle() || this._getContent();
            }
            addAttachmentClass(t) {
                e(this.getTipElement()).addClass(`${Ae}-${t}`);
            }
            getTipElement() {
                return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                );
            }
            setContent() {
                const t = e(this.getTipElement());
                this.setElementContent(t.find(Ne.TITLE), this.getTitle());
                let n = this._getContent();
                'function' == typeof n && (n = n.call(this.element)),
                    this.setElementContent(t.find(Ne.CONTENT), n),
                    t.removeClass(`${Ie.FADE} ${Ie.SHOW}`);
            }
            _getContent() {
                return (
                    this.element.getAttribute('data-content') ||
                    this.config.content
                );
            }
            _cleanTipClass() {
                const t = e(this.getTipElement()),
                    n = t.attr('class').match(De);
                null !== n && 0 < n.length && t.removeClass(n.join(''));
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    let n = e(this).data(Se);
                    const i = 'object' == typeof t ? t : null;
                    if (
                        (n || !/dispose|hide/.test(t)) &&
                        (n || ((n = new Le(this, i)), e(this).data(Se, n)),
                        'string' == typeof t)
                    ) {
                        if (void 0 === n[t])
                            throw new TypeError(`No method named "${t}"`);
                        n[t]();
                    }
                });
            }
        }
        (e.fn.popover = Le._jQueryInterface),
            (e.fn.popover.Constructor = Le),
            (e.fn.popover.noConflict = () => (
                (e.fn[Ee] = Ce), Le._jQueryInterface
            ));
        const Pe = 'scrollspy',
            He = 'bs.scrollspy',
            Re = `.${He}`,
            je = e.fn.scrollspy,
            $e = { offset: 10, method: 'auto', target: '' },
            Ye = {
                offset: 'number',
                method: 'string',
                target: '(string|element)',
            },
            We = {
                ACTIVATE: `activate${Re}`,
                SCROLL: `scroll${Re}`,
                LOAD_DATA_API: `load${Re}.data-api`,
            },
            Fe = {
                DROPDOWN_ITEM: 'dropdown-item',
                DROPDOWN_MENU: 'dropdown-menu',
                ACTIVE: 'active',
            },
            Ue = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: '.active',
                NAV_LIST_GROUP: '.nav, .list-group',
                NAV_LINKS: '.nav-link',
                NAV_ITEMS: '.nav-item',
                LIST_ITEMS: '.list-group-item',
                DROPDOWN: '.dropdown',
                DROPDOWN_ITEMS: '.dropdown-item',
                DROPDOWN_TOGGLE: '.dropdown-toggle',
            },
            Ve = { OFFSET: 'offset', POSITION: 'position' };
        class Be {
            constructor(t, n) {
                (this._element = t),
                    (this._scrollElement = 'BODY' === t.tagName ? window : t),
                    (this._config = this._getConfig(n)),
                    (this._selector =
                        `${this._config.target} ${Ue.NAV_LINKS},` +
                        `${this._config.target} ${Ue.LIST_ITEMS},` +
                        `${this._config.target} ${Ue.DROPDOWN_ITEMS}`),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    e(this._scrollElement).on(We.SCROLL, (e) =>
                        this._process(e)
                    ),
                    this.refresh(),
                    this._process();
            }
            static get VERSION() {
                return '4.3.1';
            }
            static get Default() {
                return $e;
            }
            refresh() {
                const t =
                        'auto' === this._config.method
                            ? this._scrollElement === this._scrollElement.window
                                ? Ve.OFFSET
                                : Ve.POSITION
                            : this._config.method,
                    n = t === Ve.POSITION ? this._getScrollTop() : 0;
                (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .map((i) => {
                            let r;
                            const o = c.getSelectorFromElement(i);
                            if ((o && (r = document.querySelector(o)), r)) {
                                const i = r.getBoundingClientRect();
                                if (i.width || i.height)
                                    return [e(r)[t]().top + n, o];
                            }
                            return null;
                        })
                        .filter((e) => e)
                        .sort((e, t) => e[0] - t[0])
                        .forEach((e) => {
                            this._offsets.push(e[0]), this._targets.push(e[1]);
                        });
            }
            dispose() {
                e.removeData(this._element, He),
                    e(this._scrollElement).off(Re),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
            }
            _getConfig(t) {
                if (
                    'string' !=
                    typeof (t = {
                        ...$e,
                        ...('object' == typeof t && t ? t : {}),
                    }).target
                ) {
                    let n = e(t.target).attr('id');
                    n || ((n = c.getUID(Pe)), e(t.target).attr('id', n)),
                        (t.target = `#${n}`);
                }
                return c.typeCheckConfig(Pe, t, Ye), t;
            }
            _getScrollTop() {
                return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
            }
            _getScrollHeight() {
                return (
                    this._scrollElement.scrollHeight ||
                    n(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight
                    )
                );
            }
            _getOffsetHeight() {
                return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
            }
            _process() {
                const e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                    const e = this._targets[this._targets.length - 1];
                    this._activeTarget !== e && this._activate(e);
                } else {
                    if (
                        this._activeTarget &&
                        e < this._offsets[0] &&
                        0 < this._offsets[0]
                    )
                        return (this._activeTarget = null), void this._clear();
                    for (let t = this._offsets.length; t--; )
                        this._activeTarget !== this._targets[t] &&
                            e >= this._offsets[t] &&
                            (void 0 === this._offsets[t + 1] ||
                                e < this._offsets[t + 1]) &&
                            this._activate(this._targets[t]);
                }
            }
            _activate(t) {
                (this._activeTarget = t), this._clear();
                const n = this._selector
                        .split(',')
                        .map(
                            (e) => `${e}[data-target="${t}"],${e}[href="${t}"]`
                        ),
                    i = e(
                        [].slice.call(document.querySelectorAll(n.join(',')))
                    );
                i.hasClass(Fe.DROPDOWN_ITEM)
                    ? (i
                          .closest(Ue.DROPDOWN)
                          .find(Ue.DROPDOWN_TOGGLE)
                          .addClass(Fe.ACTIVE),
                      i.addClass(Fe.ACTIVE))
                    : (i.addClass(Fe.ACTIVE),
                      i
                          .parents(Ue.NAV_LIST_GROUP)
                          .prev(`${Ue.NAV_LINKS}, ${Ue.LIST_ITEMS}`)
                          .addClass(Fe.ACTIVE),
                      i
                          .parents(Ue.NAV_LIST_GROUP)
                          .prev(Ue.NAV_ITEMS)
                          .children(Ue.NAV_LINKS)
                          .addClass(Fe.ACTIVE)),
                    e(this._scrollElement).trigger(We.ACTIVATE, {
                        relatedTarget: t,
                    });
            }
            _clear() {
                [].slice
                    .call(document.querySelectorAll(this._selector))
                    .filter((e) => e.classList.contains(Fe.ACTIVE))
                    .forEach((e) => e.classList.remove(Fe.ACTIVE));
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    let n = e(this).data(He);
                    if (
                        (n ||
                            ((n = new Be(this, 'object' == typeof t && t)),
                            e(this).data(He, n)),
                        'string' == typeof t)
                    ) {
                        if (void 0 === n[t])
                            throw new TypeError(`No method named "${t}"`);
                        n[t]();
                    }
                });
            }
        }
        e(window).on(We.LOAD_DATA_API, () => {
            const t = [].slice.call(document.querySelectorAll(Ue.DATA_SPY));
            for (let n = t.length; n--; ) {
                const i = e(t[n]);
                Be._jQueryInterface.call(i, i.data());
            }
        }),
            (e.fn.scrollspy = Be._jQueryInterface),
            (e.fn.scrollspy.Constructor = Be),
            (e.fn.scrollspy.noConflict = () => (
                (e.fn[Pe] = je), Be._jQueryInterface
            ));
        const qe = 'bs.tab',
            Ge = `.${qe}`,
            ze = e.fn.tab,
            Xe = {
                HIDE: `hide${Ge}`,
                HIDDEN: `hidden${Ge}`,
                SHOW: `show${Ge}`,
                SHOWN: `shown${Ge}`,
                CLICK_DATA_API: `click${Ge}.data-api`,
            },
            Qe = {
                DROPDOWN_MENU: 'dropdown-menu',
                ACTIVE: 'active',
                DISABLED: 'disabled',
                FADE: 'fade',
                SHOW: 'show',
            },
            Ke = {
                DROPDOWN: '.dropdown',
                NAV_LIST_GROUP: '.nav, .list-group',
                ACTIVE: '.active',
                ACTIVE_UL: '> li > .active',
                DATA_TOGGLE:
                    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: '.dropdown-toggle',
                DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active',
            };
        class Ze {
            constructor(e) {
                this._element = e;
            }
            static get VERSION() {
                return '4.3.1';
            }
            show() {
                if (
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE &&
                        e(this._element).hasClass(Qe.ACTIVE)) ||
                    e(this._element).hasClass(Qe.DISABLED)
                )
                    return;
                let t, n;
                const i = e(this._element).closest(Ke.NAV_LIST_GROUP)[0],
                    r = c.getSelectorFromElement(this._element);
                if (i) {
                    const t =
                        'UL' === i.nodeName || 'OL' === i.nodeName
                            ? Ke.ACTIVE_UL
                            : Ke.ACTIVE;
                    n = (n = e.makeArray(e(i).find(t)))[n.length - 1];
                }
                const o = e.Event(Xe.HIDE, { relatedTarget: this._element }),
                    s = e.Event(Xe.SHOW, { relatedTarget: n });
                if (
                    (n && e(n).trigger(o),
                    e(this._element).trigger(s),
                    !s.isDefaultPrevented() && !o.isDefaultPrevented())
                ) {
                    r && (t = document.querySelector(r)),
                        this._activate(this._element, i);
                    const o = () => {
                        const t = e.Event(Xe.HIDDEN, {
                                relatedTarget: this._element,
                            }),
                            i = e.Event(Xe.SHOWN, { relatedTarget: n });
                        e(n).trigger(t), e(this._element).trigger(i);
                    };
                    t ? this._activate(t, t.parentNode, o) : o();
                }
            }
            dispose() {
                e.removeData(this._element, qe), (this._element = null);
            }
            _activate(t, n, i) {
                const r = (
                        !n || ('UL' !== n.nodeName && 'OL' !== n.nodeName)
                            ? e(n).children(Ke.ACTIVE)
                            : e(n).find(Ke.ACTIVE_UL)
                    )[0],
                    o = i && r && e(r).hasClass(Qe.FADE),
                    s = () => this._transitionComplete(t, r, i);
                if (r && o) {
                    const t = c.getTransitionDurationFromElement(r);
                    e(r)
                        .removeClass(Qe.SHOW)
                        .one(c.TRANSITION_END, s)
                        .emulateTransitionEnd(t);
                } else s();
            }
            _transitionComplete(t, n, i) {
                if (n) {
                    e(n).removeClass(Qe.ACTIVE);
                    const t = e(n.parentNode).find(Ke.DROPDOWN_ACTIVE_CHILD)[0];
                    t && e(t).removeClass(Qe.ACTIVE),
                        'tab' === n.getAttribute('role') &&
                            n.setAttribute('aria-selected', !1);
                }
                if (
                    (e(t).addClass(Qe.ACTIVE),
                    'tab' === t.getAttribute('role') &&
                        t.setAttribute('aria-selected', !0),
                    c.reflow(t),
                    t.classList.contains(Qe.FADE) && t.classList.add(Qe.SHOW),
                    t.parentNode && e(t.parentNode).hasClass(Qe.DROPDOWN_MENU))
                ) {
                    const n = e(t).closest(Ke.DROPDOWN)[0];
                    if (n) {
                        const t = [].slice.call(
                            n.querySelectorAll(Ke.DROPDOWN_TOGGLE)
                        );
                        e(t).addClass(Qe.ACTIVE);
                    }
                    t.setAttribute('aria-expanded', !0);
                }
                i && i();
            }
            static _jQueryInterface(t) {
                return this.each(function () {
                    const n = e(this);
                    let i = n.data(qe);
                    if (
                        (i || ((i = new Ze(this)), n.data(qe, i)),
                        'string' == typeof t)
                    ) {
                        if (void 0 === i[t])
                            throw new TypeError(`No method named "${t}"`);
                        i[t]();
                    }
                });
            }
        }
        e(document).on(Xe.CLICK_DATA_API, Ke.DATA_TOGGLE, function (t) {
            t.preventDefault(), Ze._jQueryInterface.call(e(this), 'show');
        }),
            (e.fn.tab = Ze._jQueryInterface),
            (e.fn.tab.Constructor = Ze),
            (e.fn.tab.noConflict = () => (
                (e.fn.tab = ze), Ze._jQueryInterface
            ));
        var Je = (function () {
                var e = !1,
                    t = '',
                    n = {
                        WebkitTransition: 'webkitTransitionEnd',
                        MozTransition: 'transitionend',
                        OTransition: 'oTransitionEnd otransitionend',
                        transition: 'transitionend',
                    };
                return (
                    (function () {
                        for (var i in ((e = (function () {
                            if (window.QUnit) return !1;
                            var e = document.createElement('bmd');
                            for (var t in n)
                                if (void 0 !== e.style[t]) return n[t];
                            return !1;
                        })()),
                        n))
                            t += ' ' + n[i];
                    })(),
                    {
                        transitionEndSupported: function () {
                            return e;
                        },
                        transitionEndSelector: function () {
                            return t;
                        },
                        isChar: function (e) {
                            return !(
                                void 0 !== e.which &&
                                (!('number' == typeof e.which && 0 < e.which) ||
                                    e.ctrlKey ||
                                    e.metaKey ||
                                    e.altKey ||
                                    8 === e.which ||
                                    9 === e.which ||
                                    13 === e.which ||
                                    16 === e.which ||
                                    17 === e.which ||
                                    20 === e.which ||
                                    27 === e.which)
                            );
                        },
                        assert: function (e, t, n) {
                            if (t)
                                throw (
                                    (void 0 === !e &&
                                        e.css('border', '1px solid red'),
                                    console.error(n, e),
                                    n)
                                );
                        },
                        describe: function (e) {
                            return void 0 === e
                                ? 'undefined'
                                : 0 === e.length
                                ? '(no matching elements)'
                                : e[0].outerHTML.split('>')[0] + '>';
                        },
                    }
                );
            })(jQuery),
            et = (function (e) {
                var t = {};
                return (function () {
                    function n(n, i, r) {
                        for (var o in (void 0 === r && (r = {}),
                        (this.$element = n),
                        (this.config = e.extend(!0, {}, t, i)),
                        r))
                            this[o] = r[o];
                    }
                    var i = n.prototype;
                    return (
                        (i.dispose = function (e) {
                            this.$element.data(e, null),
                                (this.$element = null),
                                (this.config = null);
                        }),
                        (i.addFormGroupFocus = function () {
                            this.$element.prop('disabled') ||
                                this.$bmdFormGroup.addClass('is-focused');
                        }),
                        (i.removeFormGroupFocus = function () {
                            this.$bmdFormGroup.removeClass('is-focused');
                        }),
                        (i.removeIsFilled = function () {
                            this.$bmdFormGroup.removeClass('is-filled');
                        }),
                        (i.addIsFilled = function () {
                            this.$bmdFormGroup.addClass('is-filled');
                        }),
                        (i.findMdbFormGroup = function (t) {
                            void 0 === t && (t = !0);
                            var n = this.$element.closest('.bmd-form-group');
                            return (
                                0 === n.length &&
                                    t &&
                                    e.error(
                                        'Failed to find .bmd-form-group for ' +
                                            Je.describe(this.$element)
                                    ),
                                n
                            );
                        }),
                        n
                    );
                })();
            })(jQuery),
            tt = (function (e) {
                var t = '.form-group',
                    n = "label[class^='bmd-label'], label[class*=' bmd-label']",
                    i = {
                        validate: !1,
                        formGroup: { required: !1 },
                        bmdFormGroup: {
                            template: "<span class='bmd-form-group'></span>",
                            create: !0,
                            required: !0,
                        },
                        label: {
                            required: !1,
                            selectors: ['.form-control-label', '> label'],
                            className: 'bmd-label-static',
                        },
                        requiredClasses: [],
                        invalidComponentMatches: [],
                        convertInputSizeVariations: !0,
                    },
                    r = {
                        'form-control-lg': 'bmd-form-group-lg',
                        'form-control-sm': 'bmd-form-group-sm',
                    };
                return (function (o) {
                    function s(t, n, r) {
                        var s;
                        return (
                            void 0 === r && (r = {}),
                            (s =
                                o.call(this, t, e.extend(!0, {}, i, n), r) ||
                                this)._rejectInvalidComponentMatches(),
                            s.rejectWithoutRequiredStructure(),
                            s._rejectWithoutRequiredClasses(),
                            (s.$formGroup = s.findFormGroup(
                                s.config.formGroup.required
                            )),
                            (s.$bmdFormGroup = s.resolveMdbFormGroup()),
                            (s.$bmdLabel = s.resolveMdbLabel()),
                            s.resolveMdbFormGroupSizing(),
                            s.addFocusListener(),
                            s.addChangeListener(),
                            '' != s.$element.val() && s.addIsFilled(),
                            s
                        );
                    }
                    a(s, o);
                    var l = s.prototype;
                    return (
                        (l.dispose = function (e) {
                            o.prototype.dispose.call(this, e),
                                (this.$bmdFormGroup = null),
                                (this.$formGroup = null);
                        }),
                        (l.rejectWithoutRequiredStructure = function () {}),
                        (l.addFocusListener = function () {
                            var e = this;
                            this.$element
                                .on('focus', function () {
                                    e.addFormGroupFocus();
                                })
                                .on('blur', function () {
                                    e.removeFormGroupFocus();
                                });
                        }),
                        (l.addChangeListener = function () {
                            var e = this;
                            this.$element
                                .on('keydown paste', function (t) {
                                    Je.isChar(t) && e.addIsFilled();
                                })
                                .on('keyup change', function () {
                                    e.isEmpty()
                                        ? e.removeIsFilled()
                                        : e.addIsFilled(),
                                        e.config.validate &&
                                            (void 0 ===
                                                e.$element[0].checkValidity ||
                                            e.$element[0].checkValidity()
                                                ? e.removeHasDanger()
                                                : e.addHasDanger());
                                });
                        }),
                        (l.addHasDanger = function () {
                            this.$bmdFormGroup.addClass('has-danger');
                        }),
                        (l.removeHasDanger = function () {
                            this.$bmdFormGroup.removeClass('has-danger');
                        }),
                        (l.isEmpty = function () {
                            return (
                                null === this.$element.val() ||
                                void 0 === this.$element.val() ||
                                '' === this.$element.val()
                            );
                        }),
                        (l.resolveMdbFormGroup = function () {
                            var e = this.findMdbFormGroup(!1);
                            return (
                                (void 0 === e || 0 === e.length) &&
                                    (!this.config.bmdFormGroup.create ||
                                    (void 0 !== this.$formGroup &&
                                        0 !== this.$formGroup.length)
                                        ? this.$formGroup.addClass(
                                              'bmd-form-group'
                                          )
                                        : this.outerElement()
                                              .parent()
                                              .hasClass('input-group')
                                        ? this.outerElement()
                                              .parent()
                                              .wrap(
                                                  this.config.bmdFormGroup
                                                      .template
                                              )
                                        : this.outerElement().wrap(
                                              this.config.bmdFormGroup.template
                                          ),
                                    (e = this.findMdbFormGroup(
                                        this.config.bmdFormGroup.required
                                    ))),
                                e
                            );
                        }),
                        (l.outerElement = function () {
                            return this.$element;
                        }),
                        (l.resolveMdbLabel = function () {
                            var e = this.$bmdFormGroup.find(n);
                            return (
                                (void 0 !== e && 0 !== e.length) ||
                                    void 0 ===
                                        (e = this.findMdbLabel(
                                            this.config.label.required
                                        )) ||
                                    0 === e.length ||
                                    e.addClass(this.config.label.className),
                                e
                            );
                        }),
                        (l.findMdbLabel = function (t) {
                            void 0 === t && (t = !0);
                            var i = null,
                                r = this.config.label.selectors,
                                o = Array.isArray(r),
                                s = 0;
                            for (r = o ? r : r[Symbol.iterator](); ; ) {
                                var a;
                                if (o) {
                                    if (s >= r.length) break;
                                    a = r[s++];
                                } else {
                                    if ((s = r.next()).done) break;
                                    a = s.value;
                                }
                                var l = a;
                                if (
                                    void 0 !==
                                        (i = e.isFunction(l)
                                            ? l(this)
                                            : this.$bmdFormGroup.find(l)) &&
                                    0 < i.length
                                )
                                    break;
                            }
                            return (
                                0 === i.length &&
                                    t &&
                                    e.error(
                                        'Failed to find ' +
                                            n +
                                            ' within form-group for ' +
                                            Je.describe(this.$element)
                                    ),
                                i
                            );
                        }),
                        (l.findFormGroup = function (n) {
                            void 0 === n && (n = !0);
                            var i = this.$element.closest(t);
                            return (
                                0 === i.length &&
                                    n &&
                                    e.error(
                                        'Failed to find ' +
                                            t +
                                            ' for ' +
                                            Je.describe(this.$element)
                                    ),
                                i
                            );
                        }),
                        (l.resolveMdbFormGroupSizing = function () {
                            if (this.config.convertInputSizeVariations)
                                for (var e in r)
                                    this.$element.hasClass(e) &&
                                        this.$bmdFormGroup.addClass(r[e]);
                        }),
                        (l._rejectInvalidComponentMatches = function () {
                            var e = this.config.invalidComponentMatches,
                                t = Array.isArray(e),
                                n = 0;
                            for (e = t ? e : e[Symbol.iterator](); ; ) {
                                var i;
                                if (t) {
                                    if (n >= e.length) break;
                                    i = e[n++];
                                } else {
                                    if ((n = e.next()).done) break;
                                    i = n.value;
                                }
                                i.rejectMatch(
                                    this.constructor.name,
                                    this.$element
                                );
                            }
                        }),
                        (l._rejectWithoutRequiredClasses = function () {
                            var e = this.config.requiredClasses,
                                t = Array.isArray(e),
                                n = 0;
                            for (e = t ? e : e[Symbol.iterator](); ; ) {
                                var i;
                                if (t) {
                                    if (n >= e.length) break;
                                    i = e[n++];
                                } else {
                                    if ((n = e.next()).done) break;
                                    i = n.value;
                                }
                                var r = i;
                                if (-1 !== r.indexOf('||')) {
                                    var o = r.split('||'),
                                        s = Array.isArray(o),
                                        a = 0;
                                    for (o = s ? o : o[Symbol.iterator](); ; ) {
                                        var l;
                                        if (s) {
                                            if (a >= o.length) break;
                                            l = o[a++];
                                        } else {
                                            if ((a = o.next()).done) break;
                                            l = a.value;
                                        }
                                        if (this.$element.hasClass(l)) break;
                                    }
                                } else this.$element.hasClass(r);
                            }
                        }),
                        s
                    );
                })(et);
            })(jQuery),
            nt = (function (e) {
                var t = { label: { required: !1 } };
                return (function (n) {
                    function i(i, r, o) {
                        var s;
                        return (
                            (s =
                                n.call(this, i, e.extend(!0, {}, t, r), o) ||
                                this).decorateMarkup(),
                            s
                        );
                    }
                    a(i, n);
                    var r = i.prototype;
                    return (
                        (r.decorateMarkup = function () {
                            var t = e(this.config.template);
                            this.$element.after(t),
                                !1 !== this.config.ripples && t.bmdRipples();
                        }),
                        (r.outerElement = function () {
                            return this.$element
                                .parent()
                                .closest('.' + this.outerClass);
                        }),
                        (r.rejectWithoutRequiredStructure = function () {
                            Je.assert(
                                this.$element,
                                'label' ===
                                    !this.$element.parent().prop('tagName'),
                                this.constructor.name +
                                    "'s " +
                                    Je.describe(this.$element) +
                                    ' parent element should be <label>.'
                            ),
                                Je.assert(
                                    this.$element,
                                    !this.outerElement().hasClass(
                                        this.outerClass
                                    ),
                                    this.constructor.name +
                                        "'s " +
                                        Je.describe(this.$element) +
                                        ' outer element should have class ' +
                                        this.outerClass +
                                        '.'
                                );
                        }),
                        (r.addFocusListener = function () {
                            var e = this;
                            this.$element.closest('label').hover(
                                function () {
                                    e.addFormGroupFocus();
                                },
                                function () {
                                    e.removeFormGroupFocus();
                                }
                            );
                        }),
                        (r.addChangeListener = function () {
                            var e = this;
                            this.$element.change(function () {
                                e.$element.blur();
                            });
                        }),
                        i
                    );
                })(tt);
            })(jQuery),
            it = (function (e) {
                var t = 'bmd.checkbox',
                    n = 'bmd' + ('c'.toUpperCase() + 'checkbox'.slice(1)),
                    i = e.fn[n],
                    r = {
                        template:
                            "<span class='checkbox-decorator'><span class='check'></span></span>",
                    },
                    o = (function (n) {
                        function i(t, i, o) {
                            return (
                                void 0 === o &&
                                    (o = {
                                        inputType: 'checkbox',
                                        outerClass: 'checkbox',
                                    }),
                                n.call(this, t, e.extend(!0, r, i), o) || this
                            );
                        }
                        return (
                            a(i, n),
                            (i.prototype.dispose = function (e) {
                                void 0 === e && (e = t),
                                    n.prototype.dispose.call(this, e);
                            }),
                            (i.matches = function (e) {
                                return 'checkbox' === e.attr('type');
                            }),
                            (i.rejectMatch = function (e, t) {
                                Je.assert(
                                    this.$element,
                                    this.matches(t),
                                    e +
                                        ' component element ' +
                                        Je.describe(t) +
                                        " is invalid for type='checkbox'."
                                );
                            }),
                            (i._jQueryInterface = function (n) {
                                return this.each(function () {
                                    var r = e(this),
                                        o = r.data(t);
                                    o || ((o = new i(r, n)), r.data(t, o));
                                });
                            }),
                            i
                        );
                    })(nt);
                return (
                    (e.fn[n] = o._jQueryInterface),
                    (e.fn[n].Constructor = o),
                    (e.fn[n].noConflict = function () {
                        return (e.fn[n] = i), o._jQueryInterface;
                    }),
                    o
                );
            })(jQuery),
            rt =
                ((function (e) {
                    var t = 'bmd.checkboxInline',
                        n =
                            'bmd' +
                            ('c'.toUpperCase() + 'checkboxInline'.slice(1)),
                        i = e.fn[n],
                        r = { bmdFormGroup: { create: !1, required: !1 } },
                        o = (function (n) {
                            function i(t, i, o) {
                                return (
                                    void 0 === o &&
                                        (o = {
                                            inputType: 'checkbox',
                                            outerClass: 'checkbox-inline',
                                        }),
                                    n.call(
                                        this,
                                        t,
                                        e.extend(!0, {}, r, i),
                                        o
                                    ) || this
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function () {
                                    n.prototype.dispose.call(this, t);
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(it);
                    (e.fn[n] = o._jQueryInterface),
                        (e.fn[n].Constructor = o),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), o._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = 'bmd.collapseInline',
                        n =
                            'bmd' +
                            ('c'.toUpperCase() + 'collapseInline'.slice(1)),
                        i = e.fn[n],
                        r = { ANY_INPUT: 'input, select, textarea' },
                        o = {
                            IN: 'in',
                            COLLAPSE: 'collapse',
                            COLLAPSING: 'collapsing',
                            COLLAPSED: 'collapsed',
                            WIDTH: 'width',
                        },
                        s = {},
                        l = (function (n) {
                            function i(t, i) {
                                var a;
                                (a =
                                    n.call(this, t, e.extend(!0, {}, s, i)) ||
                                    this).$bmdFormGroup = a.findMdbFormGroup(
                                    !0
                                );
                                var l = t.data('target');
                                (a.$collapse = e(l)),
                                    Je.assert(
                                        t,
                                        0 === a.$collapse.length,
                                        'Cannot find collapse target for ' +
                                            Je.describe(t)
                                    ),
                                    Je.assert(
                                        a.$collapse,
                                        !a.$collapse.hasClass(o.COLLAPSE),
                                        Je.describe(a.$collapse) +
                                            " is expected to have the '" +
                                            o.COLLAPSE +
                                            "' class.  It is being targeted by " +
                                            Je.describe(t)
                                    );
                                var c = a.$bmdFormGroup.find(r.ANY_INPUT);
                                return (
                                    0 < c.length && (a.$input = c.first()),
                                    a.$collapse.hasClass(o.WIDTH) ||
                                        a.$collapse.addClass(o.WIDTH),
                                    a.$input &&
                                        (a.$collapse.on(
                                            'shown.bs.collapse',
                                            function () {
                                                a.$input.focus();
                                            }
                                        ),
                                        a.$input.blur(function () {
                                            a.$collapse.collapse('hide');
                                        })),
                                    a
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function () {
                                    n.prototype.dispose.call(this, t),
                                        (this.$bmdFormGroup = null),
                                        (this.$collapse = null),
                                        (this.$input = null);
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(et);
                    (e.fn[n] = l._jQueryInterface),
                        (e.fn[n].Constructor = l),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), l._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = 'bmd.file',
                        n = 'bmd' + ('f'.toUpperCase() + 'file'.slice(1)),
                        i = e.fn[n],
                        r = {},
                        o = { FILE: 'file', IS_FILE: 'is-file' },
                        s = (function (n) {
                            function i(t, i) {
                                var s;
                                return (
                                    (s =
                                        n.call(this, t, e.extend(!0, r, i)) ||
                                        this).$bmdFormGroup.addClass(o.IS_FILE),
                                    s
                                );
                            }
                            a(i, n);
                            var s = i.prototype;
                            return (
                                (s.dispose = function () {
                                    n.prototype.dispose.call(this, t);
                                }),
                                (i.matches = function (e) {
                                    return 'file' === e.attr('type');
                                }),
                                (i.rejectMatch = function (e, t) {
                                    Je.assert(
                                        this.$element,
                                        this.matches(t),
                                        e +
                                            ' component element ' +
                                            Je.describe(t) +
                                            " is invalid for type='file'."
                                    );
                                }),
                                (s.outerElement = function () {
                                    return this.$element
                                        .parent()
                                        .closest('.' + o.FILE);
                                }),
                                (s.rejectWithoutRequiredStructure =
                                    function () {
                                        Je.assert(
                                            this.$element,
                                            'label' ===
                                                !this.outerElement().prop(
                                                    'tagName'
                                                ),
                                            this.constructor.name +
                                                "'s " +
                                                Je.describe(this.$element) +
                                                ' parent element ' +
                                                Je.describe(
                                                    this.outerElement()
                                                ) +
                                                ' should be <label>.'
                                        ),
                                            Je.assert(
                                                this.$element,
                                                !this.outerElement().hasClass(
                                                    o.FILE
                                                ),
                                                this.constructor.name +
                                                    "'s " +
                                                    Je.describe(this.$element) +
                                                    ' parent element ' +
                                                    Je.describe(
                                                        this.outerElement()
                                                    ) +
                                                    ' should have class .' +
                                                    o.FILE +
                                                    '.'
                                            );
                                    }),
                                (s.addFocusListener = function () {
                                    var e = this;
                                    this.$bmdFormGroup
                                        .on('focus', function () {
                                            e.addFormGroupFocus();
                                        })
                                        .on('blur', function () {
                                            e.removeFormGroupFocus();
                                        });
                                }),
                                (s.addChangeListener = function () {
                                    var t = this;
                                    this.$element.on('change', function () {
                                        var n = '';
                                        e.each(
                                            t.$element.files,
                                            function (e, t) {
                                                n += t.name + '  , ';
                                            }
                                        ),
                                            (n = n.substring(0, n.length - 2))
                                                ? t.addIsFilled()
                                                : t.removeIsFilled(),
                                            t.$bmdFormGroup
                                                .find(
                                                    'input.form-control[readonly]'
                                                )
                                                .val(n);
                                    });
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(tt);
                    (e.fn[n] = s._jQueryInterface),
                        (e.fn[n].Constructor = s),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), s._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = 'bmd.radio',
                        n = 'bmd' + ('r'.toUpperCase() + 'radio'.slice(1)),
                        i = e.fn[n],
                        r = { template: "<span class='bmd-radio'></span>" },
                        o = (function (n) {
                            function i(t, i, o) {
                                return (
                                    void 0 === o &&
                                        (o = {
                                            inputType: 'radio',
                                            outerClass: 'radio',
                                        }),
                                    n.call(this, t, e.extend(!0, r, i), o) ||
                                        this
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function (e) {
                                    void 0 === e && (e = t),
                                        n.prototype.dispose.call(this, e);
                                }),
                                (i.matches = function (e) {
                                    return 'radio' === e.attr('type');
                                }),
                                (i.rejectMatch = function (e, t) {
                                    Je.assert(
                                        this.$element,
                                        this.matches(t),
                                        e +
                                            ' component element ' +
                                            Je.describe(t) +
                                            " is invalid for type='radio'."
                                    );
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(nt);
                    return (
                        (e.fn[n] = o._jQueryInterface),
                        (e.fn[n].Constructor = o),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), o._jQueryInterface;
                        }),
                        o
                    );
                })(jQuery)),
            ot =
                ((function (e) {
                    var t = 'bmd.radioInline',
                        n =
                            'bmd' +
                            ('r'.toUpperCase() + 'radioInline'.slice(1)),
                        i = e.fn[n],
                        r = { bmdFormGroup: { create: !1, required: !1 } },
                        o = (function (n) {
                            function i(t, i, o) {
                                return (
                                    void 0 === o &&
                                        (o = {
                                            inputType: 'radio',
                                            outerClass: 'radio-inline',
                                        }),
                                    n.call(
                                        this,
                                        t,
                                        e.extend(!0, {}, r, i),
                                        o
                                    ) || this
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function () {
                                    n.prototype.dispose.call(this, t);
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(rt);
                    (e.fn[n] = o._jQueryInterface),
                        (e.fn[n].Constructor = o),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), o._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = { requiredClasses: ['form-control'] };
                    return (function (n) {
                        function i(i, r) {
                            var o;
                            return (
                                (o =
                                    n.call(this, i, e.extend(!0, t, r)) ||
                                    this).isEmpty() && o.removeIsFilled(),
                                o
                            );
                        }
                        return a(i, n), i;
                    })(tt);
                })(jQuery)),
            st =
                ((function (e) {
                    var t = 'bmd.select',
                        n = 'bmd' + ('s'.toUpperCase() + 'select'.slice(1)),
                        i = e.fn[n],
                        r = {
                            requiredClasses: ['form-control||custom-select'],
                        },
                        o = (function (n) {
                            function i(t, i) {
                                var o;
                                return (
                                    (o =
                                        n.call(this, t, e.extend(!0, r, i)) ||
                                        this).addIsFilled(),
                                    o
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function () {
                                    n.prototype.dispose.call(this, t);
                                }),
                                (i.matches = function (e) {
                                    return 'select' === e.prop('tagName');
                                }),
                                (i.rejectMatch = function (e, t) {
                                    Je.assert(
                                        this.$element,
                                        this.matches(t),
                                        e +
                                            ' component element ' +
                                            Je.describe(t) +
                                            ' is invalid for <select>.'
                                    );
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(ot);
                    (e.fn[n] = o._jQueryInterface),
                        (e.fn[n].Constructor = o),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), o._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = 'bmd.switch',
                        n = 'bmd' + ('s'.toUpperCase() + 'switch'.slice(1)),
                        i = e.fn[n],
                        r = {
                            template: "<span class='bmd-switch-track'></span>",
                        },
                        o = (function (n) {
                            function i(t, i, o) {
                                return (
                                    void 0 === o &&
                                        (o = {
                                            inputType: 'checkbox',
                                            outerClass: 'switch',
                                        }),
                                    n.call(
                                        this,
                                        t,
                                        e.extend(!0, {}, r, i),
                                        o
                                    ) || this
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function () {
                                    n.prototype.dispose.call(this, t);
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(it);
                    (e.fn[n] = o._jQueryInterface),
                        (e.fn[n].Constructor = o),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), o._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = 'bmd.text',
                        n = 'bmd' + ('t'.toUpperCase() + 'text'.slice(1)),
                        i = e.fn[n],
                        r = {},
                        o = (function (n) {
                            function i(t, i) {
                                return (
                                    n.call(this, t, e.extend(!0, r, i)) || this
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function (e) {
                                    void 0 === e && (e = t),
                                        n.prototype.dispose.call(this, e);
                                }),
                                (i.matches = function (e) {
                                    return 'text' === e.attr('type');
                                }),
                                (i.rejectMatch = function (e, t) {
                                    Je.assert(
                                        this.$element,
                                        this.matches(t),
                                        e +
                                            ' component element ' +
                                            Je.describe(t) +
                                            " is invalid for type='text'."
                                    );
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(ot);
                    (e.fn[n] = o._jQueryInterface),
                        (e.fn[n].Constructor = o),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), o._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = 'bmd.textarea',
                        n = 'bmd' + ('t'.toUpperCase() + 'textarea'.slice(1)),
                        i = e.fn[n],
                        r = {},
                        o = (function (n) {
                            function i(t, i) {
                                return (
                                    n.call(this, t, e.extend(!0, r, i)) || this
                                );
                            }
                            return (
                                a(i, n),
                                (i.prototype.dispose = function () {
                                    n.prototype.dispose.call(this, t);
                                }),
                                (i.matches = function (e) {
                                    return 'textarea' === e.prop('tagName');
                                }),
                                (i.rejectMatch = function (e, t) {
                                    Je.assert(
                                        this.$element,
                                        this.matches(t),
                                        e +
                                            ' component element ' +
                                            Je.describe(t) +
                                            ' is invalid for <textarea>.'
                                    );
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this),
                                            o = r.data(t);
                                        o || ((o = new i(r, n)), r.data(t, o));
                                    });
                                }),
                                i
                            );
                        })(ot);
                    (e.fn[n] = o._jQueryInterface),
                        (e.fn[n].Constructor = o),
                        (e.fn[n].noConflict = function () {
                            return (e.fn[n] = i), o._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    if ('undefined' == typeof Popper)
                        throw new Error(
                            'Bootstrap dropdown require Popper.js (https://popper.js.org)'
                        );
                    var t = 'bs.dropdown',
                        n = '.' + t,
                        i = '.data-api',
                        r = e.fn.dropdown,
                        o = new RegExp('38|40|27'),
                        a = {
                            HIDE: 'hide' + n,
                            HIDDEN: 'hidden' + n,
                            SHOW: 'show' + n,
                            SHOWN: 'shown' + n,
                            CLICK: 'click' + n,
                            CLICK_DATA_API: 'click' + n + i,
                            KEYDOWN_DATA_API: 'keydown' + n + i,
                            KEYUP_DATA_API: 'keyup' + n + i,
                            TRANSITION_END:
                                'transitionend webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd oAnimationEnd',
                        },
                        l = '[data-toggle="dropdown"]',
                        u = {
                            TOP: 'top-start',
                            TOPEND: 'top-end',
                            BOTTOM: 'bottom-start',
                            BOTTOMEND: 'bottom-end',
                        },
                        h = { placement: u.BOTTOM, offset: 0, flip: !0 },
                        d = {
                            placement: 'string',
                            offset: '(number|string)',
                            flip: 'boolean',
                        },
                        f = (function () {
                            function i(e, t) {
                                (this._element = e),
                                    (this._popper = null),
                                    (this._config = this._getConfig(t)),
                                    (this._menu = this._getMenuElement()),
                                    (this._inNavbar = this._detectNavbar()),
                                    this._addEventListeners();
                            }
                            var r = i.prototype;
                            return (
                                (r.toggle = function () {
                                    var t = this;
                                    if (
                                        !this._element.disabled &&
                                        !e(this._element).hasClass('disabled')
                                    ) {
                                        var n = i._getParentFromElement(
                                                this._element
                                            ),
                                            r = e(this._menu).hasClass('show');
                                        if ((i._clearMenus(), !r)) {
                                            var o = {
                                                    relatedTarget:
                                                        this._element,
                                                },
                                                s = e.Event(a.SHOW, o);
                                            if (
                                                (e(n).trigger(s),
                                                !s.isDefaultPrevented())
                                            ) {
                                                var l = this._element;
                                                e(n).hasClass('dropup') &&
                                                    (e(this._menu).hasClass(
                                                        'dropdown-menu-left'
                                                    ) ||
                                                        e(this._menu).hasClass(
                                                            'dropdown-menu-right'
                                                        )) &&
                                                    (l = n),
                                                    (this._popper = new Popper(
                                                        l,
                                                        this._menu,
                                                        this._getPopperConfig()
                                                    )),
                                                    'ontouchstart' in
                                                        document.documentElement &&
                                                        !e(n).closest(
                                                            '.navbar-nav'
                                                        ).length &&
                                                        e('body')
                                                            .children()
                                                            .on(
                                                                'mouseover',
                                                                null,
                                                                e.noop
                                                            ),
                                                    this._element.focus(),
                                                    this._element.setAttribute(
                                                        'aria-expanded',
                                                        !0
                                                    ),
                                                    e(this._menu).one(
                                                        a.TRANSITION_END,
                                                        function () {
                                                            e(n).trigger(
                                                                e.Event(
                                                                    a.SHOWN,
                                                                    o
                                                                )
                                                            ),
                                                                e(
                                                                    t._menu
                                                                ).removeClass(
                                                                    'showing'
                                                                );
                                                        }
                                                    ),
                                                    e(this._menu).addClass(
                                                        'show showing'
                                                    ),
                                                    e(n).addClass('show');
                                            }
                                        }
                                    }
                                }),
                                (r.dispose = function () {
                                    e.removeData(this._element, t),
                                        e(this._element).off(n),
                                        (this._element = null),
                                        (this._menu = null),
                                        null !== this._popper &&
                                            this._popper.destroy(),
                                        (this._popper = null);
                                }),
                                (r.update = function () {
                                    (this._inNavbar = this._detectNavbar()),
                                        null !== this._popper &&
                                            this._popper.scheduleUpdate();
                                }),
                                (r._addEventListeners = function () {
                                    var t = this;
                                    e(this._element).on(a.CLICK, function (e) {
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            t.toggle();
                                    });
                                }),
                                (r._getConfig = function (t) {
                                    var n = e(this._element).data();
                                    return (
                                        void 0 !== n.placement &&
                                            (n.placement =
                                                u[n.placement.toUpperCase()]),
                                        (t = e.extend(
                                            {},
                                            this.constructor.Default,
                                            e(this._element).data(),
                                            t
                                        )),
                                        c.typeCheckConfig(
                                            'dropdown',
                                            t,
                                            this.constructor.DefaultType
                                        ),
                                        t
                                    );
                                }),
                                (r._getMenuElement = function () {
                                    if (!this._menu) {
                                        var t = i._getParentFromElement(
                                            this._element
                                        );
                                        this._menu =
                                            e(t).find('.dropdown-menu')[0];
                                    }
                                    return this._menu;
                                }),
                                (r._getPlacement = function () {
                                    var t = e(this._element).parent(),
                                        n = this._config.placement;
                                    return (
                                        t.hasClass('dropup') ||
                                        this._config.placement === u.TOP
                                            ? ((n = u.TOP),
                                              e(this._menu).hasClass(
                                                  'dropdown-menu-right'
                                              ) && (n = u.TOPEND))
                                            : e(this._menu).hasClass(
                                                  'dropdown-menu-right'
                                              ) && (n = u.BOTTOMEND),
                                        n
                                    );
                                }),
                                (r._detectNavbar = function () {
                                    return (
                                        0 <
                                        e(this._element).closest('.navbar')
                                            .length
                                    );
                                }),
                                (r._getPopperConfig = function () {
                                    var e = {
                                        placement: this._getPlacement(),
                                        modifiers: {
                                            offset: {
                                                offset: this._config.offset,
                                            },
                                            flip: {
                                                enabled: this._config.flip,
                                            },
                                        },
                                    };
                                    return (
                                        this._inNavbar &&
                                            (e.modifiers.applyStyle = {
                                                enabled: !this._inNavbar,
                                            }),
                                        e
                                    );
                                }),
                                (i._jQueryInterface = function (n) {
                                    return this.each(function () {
                                        var r = e(this).data(t);
                                        if (
                                            (r ||
                                                ((r = new i(
                                                    this,
                                                    'object' == typeof n
                                                        ? n
                                                        : null
                                                )),
                                                e(this).data(t, r)),
                                            'string' == typeof n)
                                        ) {
                                            if (void 0 === r[n])
                                                throw new Error(
                                                    'No method named "' +
                                                        n +
                                                        '"'
                                                );
                                            r[n]();
                                        }
                                    });
                                }),
                                (i._clearMenus = function (n) {
                                    if (
                                        !n ||
                                        (3 !== n.which &&
                                            ('keyup' !== n.type ||
                                                9 === n.which))
                                    )
                                        for (
                                            var r = e.makeArray(e(l)),
                                                o = function (o) {
                                                    var s =
                                                            i._getParentFromElement(
                                                                r[o]
                                                            ),
                                                        l = e(r[o]).data(t),
                                                        c = {
                                                            relatedTarget: r[o],
                                                        };
                                                    if (!l) return 'continue';
                                                    var u = l._menu;
                                                    if (!e(s).hasClass('show'))
                                                        return 'continue';
                                                    if (
                                                        n &&
                                                        (('click' === n.type &&
                                                            /input|textarea/i.test(
                                                                n.target.tagName
                                                            )) ||
                                                            ('keyup' ===
                                                                n.type &&
                                                                9 ===
                                                                    n.which)) &&
                                                        e.contains(s, n.target)
                                                    )
                                                        return 'continue';
                                                    var h = e.Event(a.HIDE, c);
                                                    return (
                                                        e(s).trigger(h),
                                                        h.isDefaultPrevented()
                                                            ? 'continue'
                                                            : (('ontouchstart' in
                                                                  document.documentElement) &&
                                                                  e('body')
                                                                      .children()
                                                                      .off(
                                                                          'mouseover',
                                                                          null,
                                                                          e.noop
                                                                      ),
                                                              r[o].setAttribute(
                                                                  'aria-expanded',
                                                                  'false'
                                                              ),
                                                              e(u)
                                                                  .addClass(
                                                                      'hiding'
                                                                  )
                                                                  .removeClass(
                                                                      'show'
                                                                  ),
                                                              e(s).removeClass(
                                                                  'show'
                                                              ),
                                                              void e(u).one(
                                                                  a.TRANSITION_END,
                                                                  function () {
                                                                      e(
                                                                          s
                                                                      ).trigger(
                                                                          e.Event(
                                                                              a.HIDDEN,
                                                                              c
                                                                          )
                                                                      ),
                                                                          e(
                                                                              u
                                                                          ).removeClass(
                                                                              'hiding'
                                                                          );
                                                                  }
                                                              ))
                                                    );
                                                },
                                                s = 0;
                                            s < r.length;
                                            s++
                                        )
                                            o(s);
                                }),
                                (i._getParentFromElement = function (t) {
                                    var n,
                                        i = c.getSelectorFromElement(t);
                                    return (
                                        i && (n = e(i)[0]), n || t.parentNode
                                    );
                                }),
                                (i._dataApiKeydownHandler = function (t) {
                                    if (
                                        !(
                                            !o.test(t.which) ||
                                            (/button/i.test(t.target.tagName) &&
                                                32 === t.which) ||
                                            /input|textarea/i.test(
                                                t.target.tagName
                                            ) ||
                                            (t.preventDefault(),
                                            t.stopPropagation(),
                                            this.disabled ||
                                                e(this).hasClass('disabled'))
                                        )
                                    ) {
                                        var n = i._getParentFromElement(this),
                                            r = e(n).hasClass('show');
                                        if (
                                            (!r &&
                                                (27 !== t.which ||
                                                    32 !== t.which)) ||
                                            (r &&
                                                (27 === t.which ||
                                                    32 === t.which))
                                        ) {
                                            if (27 === t.which) {
                                                var s = e(n).find(l)[0];
                                                e(s).trigger('focus');
                                            }
                                            return void e(this).trigger(
                                                'click'
                                            );
                                        }
                                        var a = e(n)
                                            .find(
                                                '.dropdown-menu .dropdown-item:not(.disabled)'
                                            )
                                            .get();
                                        if (a.length) {
                                            var c = a.indexOf(t.target);
                                            38 === t.which && 0 < c && c--,
                                                40 === t.which &&
                                                    c < a.length - 1 &&
                                                    c++,
                                                0 > c && (c = 0),
                                                a[c].focus();
                                        }
                                    }
                                }),
                                (function (e, t, n) {
                                    n && s(e, n);
                                })(i, 0, [
                                    {
                                        key: 'VERSION',
                                        get: function () {
                                            return '4.1.0';
                                        },
                                    },
                                    {
                                        key: 'Default',
                                        get: function () {
                                            return h;
                                        },
                                    },
                                    {
                                        key: 'DefaultType',
                                        get: function () {
                                            return d;
                                        },
                                    },
                                ]),
                                i
                            );
                        })();
                    e(document)
                        .on(a.KEYDOWN_DATA_API, l, f._dataApiKeydownHandler)
                        .on(
                            a.KEYDOWN_DATA_API,
                            '.dropdown-menu',
                            f._dataApiKeydownHandler
                        )
                        .on(
                            a.CLICK_DATA_API + ' ' + a.KEYUP_DATA_API,
                            f._clearMenus
                        )
                        .on(a.CLICK_DATA_API, l, function (t) {
                            t.preventDefault(),
                                t.stopPropagation(),
                                f._jQueryInterface.call(e(this), 'toggle');
                        })
                        .on(a.CLICK_DATA_API, '.dropdown form', function (e) {
                            e.stopPropagation();
                        }),
                        (e.fn.dropdown = f._jQueryInterface),
                        (e.fn.dropdown.Constructor = f),
                        (e.fn.dropdown.noConflict = function () {
                            return (e.fn.dropdown = r), f._jQueryInterface;
                        });
                })(jQuery),
                (function (e) {
                    var t = '.bmd-layout-canvas',
                        n = '.bmd-layout-container',
                        i = '.bmd-layout-backdrop',
                        r = {
                            canvas: {
                                create: !0,
                                required: !0,
                                template:
                                    '<div class="bmd-layout-canvas"></div>',
                            },
                            backdrop: {
                                create: !0,
                                required: !0,
                                template:
                                    '<div class="bmd-layout-backdrop"></div>',
                            },
                        };
                    return (function (o) {
                        function s(t, n, i) {
                            var s;
                            return (
                                void 0 === i && (i = {}),
                                ((s =
                                    o.call(
                                        this,
                                        t,
                                        e.extend(!0, {}, r, n),
                                        i
                                    ) || this).$container = s.findContainer(
                                    !0
                                )),
                                (s.$backdrop = s.resolveBackdrop()),
                                s.resolveCanvas(),
                                s
                            );
                        }
                        a(s, o);
                        var l = s.prototype;
                        return (
                            (l.dispose = function (e) {
                                o.prototype.dispose.call(this, e),
                                    (this.$container = null),
                                    (this.$backdrop = null);
                            }),
                            (l.resolveCanvas = function () {
                                var e = this.findCanvas(!1);
                                return (
                                    (void 0 === e || 0 === e.length) &&
                                        (this.config.canvas.create &&
                                            this.$container.wrap(
                                                this.config.canvas.template
                                            ),
                                        (e = this.findCanvas(
                                            this.config.canvas.required
                                        ))),
                                    e
                                );
                            }),
                            (l.findCanvas = function (n, i) {
                                void 0 === n && (n = !0),
                                    void 0 === i && (i = this.$container);
                                var r = i.closest(t);
                                return (
                                    0 === r.length &&
                                        n &&
                                        e.error(
                                            'Failed to find ' +
                                                t +
                                                ' for ' +
                                                Je.describe(i)
                                        ),
                                    r
                                );
                            }),
                            (l.resolveBackdrop = function () {
                                var e = this.findBackdrop(!1);
                                return (
                                    (void 0 === e || 0 === e.length) &&
                                        (this.config.backdrop.create &&
                                            this.$container.append(
                                                this.config.backdrop.template
                                            ),
                                        (e = this.findBackdrop(
                                            this.config.backdrop.required
                                        ))),
                                    e
                                );
                            }),
                            (l.findBackdrop = function (t, n) {
                                void 0 === t && (t = !0),
                                    void 0 === n && (n = this.$container);
                                var r = n.find('> ' + i);
                                return (
                                    0 === r.length &&
                                        t &&
                                        e.error(
                                            'Failed to find ' +
                                                i +
                                                ' for ' +
                                                Je.describe(n)
                                        ),
                                    r
                                );
                            }),
                            (l.findContainer = function (t, i) {
                                void 0 === t && (t = !0),
                                    void 0 === i && (i = this.$element);
                                var r = i.closest(n);
                                return (
                                    0 === r.length &&
                                        t &&
                                        e.error(
                                            'Failed to find ' +
                                                n +
                                                ' for ' +
                                                Je.describe(i)
                                        ),
                                    r
                                );
                            }),
                            s
                        );
                    })(et);
                })(jQuery));
        (function (e) {
            var t = 'bmd.drawer',
                n = 'bmd' + ('d'.toUpperCase() + 'drawer'.slice(1)),
                i = e.fn[n],
                r = { ESCAPE: 27 },
                o = { focusSelector: 'a, button, input' },
                s = (function (n) {
                    function i(t, i) {
                        var s;
                        return (
                            ((s =
                                n.call(this, t, e.extend(!0, {}, o, i)) ||
                                this).$toggles = e(
                                '[data-toggle="drawer"][href="#' +
                                    s.$element[0].id +
                                    '"], [data-toggle="drawer"][data-target="#' +
                                    s.$element[0].id +
                                    '"]'
                            )),
                            s._addAria(),
                            s.$backdrop
                                .keydown(function (e) {
                                    e.which === r.ESCAPE && s.hide();
                                })
                                .click(function () {
                                    s.hide();
                                }),
                            s.$element.keydown(function (e) {
                                e.which === r.ESCAPE && s.hide();
                            }),
                            s.$toggles.click(function () {
                                s.toggle();
                            }),
                            s
                        );
                    }
                    a(i, n);
                    var s = i.prototype;
                    return (
                        (s.dispose = function () {
                            n.prototype.dispose.call(this, t),
                                (this.$toggles = null);
                        }),
                        (s.toggle = function () {
                            this._isOpen() ? this.hide() : this.show();
                        }),
                        (s.show = function () {
                            if (!this._isForcedClosed() && !this._isOpen()) {
                                this.$toggles.attr('aria-expanded', !0),
                                    this.$element.attr('aria-expanded', !0),
                                    this.$element.attr('aria-hidden', !1);
                                var e = this.$element.find(
                                    this.config.focusSelector
                                );
                                0 < e.length && e.first().focus(),
                                    this.$container.addClass('bmd-drawer-in'),
                                    this.$backdrop.addClass('in');
                            }
                        }),
                        (s.hide = function () {
                            this._isOpen() &&
                                (this.$toggles.attr('aria-expanded', !1),
                                this.$element.attr('aria-expanded', !1),
                                this.$element.attr('aria-hidden', !0),
                                this.$container.removeClass('bmd-drawer-in'),
                                this.$backdrop.removeClass('in'));
                        }),
                        (s._isOpen = function () {
                            return this.$container.hasClass('bmd-drawer-in');
                        }),
                        (s._isForcedClosed = function () {
                            return this.$container.hasClass('bmd-drawer-out');
                        }),
                        (s._addAria = function () {
                            var e = this._isOpen();
                            this.$element.attr('aria-expanded', e),
                                this.$element.attr('aria-hidden', e),
                                this.$toggles.length &&
                                    this.$toggles.attr('aria-expanded', e);
                        }),
                        (i._jQueryInterface = function (n) {
                            return this.each(function () {
                                var r = e(this),
                                    o = r.data(t);
                                o || ((o = new i(r, n)), r.data(t, o));
                            });
                        }),
                        i
                    );
                })(st);
            (e.fn[n] = s._jQueryInterface),
                (e.fn[n].Constructor = s),
                (e.fn[n].noConflict = function () {
                    return (e.fn[n] = i), s._jQueryInterface;
                });
        })(jQuery),
            (function (e) {
                var t = 'bmd.ripples',
                    i = 'bmd' + ('r'.toUpperCase() + 'ripples'.slice(1)),
                    r = e.fn[i],
                    o = '.ripple-container',
                    s = '.ripple-decorator',
                    a = {
                        container: {
                            template: "<div class='ripple-container'></div>",
                        },
                        decorator: {
                            template: "<div class='ripple-decorator'></div>",
                        },
                        trigger: {
                            start: 'mousedown touchstart',
                            end: 'mouseup mouseleave touchend',
                        },
                        touchUserAgentRegex:
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
                        duration: 500,
                    },
                    l = (function () {
                        function i(t, n) {
                            var i = this;
                            (this.$element = t),
                                (this.config = e.extend(!0, {}, a, n)),
                                this.$element.on(
                                    this.config.trigger.start,
                                    function (e) {
                                        i._onStartRipple(e);
                                    }
                                );
                        }
                        var r = i.prototype;
                        return (
                            (r.dispose = function () {
                                this.$element.data(t, null),
                                    (this.$element = null),
                                    (this.$container = null),
                                    (this.$decorator = null),
                                    (this.config = null);
                            }),
                            (r._onStartRipple = function (e) {
                                var t = this;
                                if (
                                    !this._isTouch() ||
                                    'mousedown' !== e.type
                                ) {
                                    this._findOrCreateContainer();
                                    var n = this._getRelY(e),
                                        i = this._getRelX(e);
                                    (n || i) &&
                                        (this.$decorator.css({
                                            left: i,
                                            top: n,
                                            'background-color':
                                                this._getRipplesColor(),
                                        }),
                                        this._forceStyleApplication(),
                                        this.rippleOn(),
                                        setTimeout(function () {
                                            t.rippleEnd();
                                        }, this.config.duration),
                                        this.$element.on(
                                            this.config.trigger.end,
                                            function () {
                                                t.$decorator &&
                                                    (t.$decorator.data(
                                                        'mousedown',
                                                        'off'
                                                    ),
                                                    'off' ===
                                                        t.$decorator.data(
                                                            'animating'
                                                        ) && t.rippleOut());
                                            }
                                        ));
                                }
                            }),
                            (r._findOrCreateContainer = function () {
                                (!this.$container ||
                                    0 < !this.$container.length) &&
                                    (this.$element.append(
                                        this.config.container.template
                                    ),
                                    (this.$container = this.$element.find(o))),
                                    this.$container.append(
                                        this.config.decorator.template
                                    ),
                                    (this.$decorator = this.$container.find(s));
                            }),
                            (r._forceStyleApplication = function () {
                                return window.getComputedStyle(
                                    this.$decorator[0]
                                ).opacity;
                            }),
                            (r._getRelX = function (e) {
                                var t = this.$container.offset();
                                return this._isTouch()
                                    ? 1 ===
                                          (e = e.originalEvent).touches
                                              .length &&
                                          e.touches[0].pageX - t.left
                                    : e.pageX - t.left;
                            }),
                            (r._getRelY = function (e) {
                                var t = this.$container.offset();
                                return this._isTouch()
                                    ? 1 ===
                                          (e = e.originalEvent).touches
                                              .length &&
                                          e.touches[0].pageY - t.top
                                    : e.pageY - t.top;
                            }),
                            (r._getRipplesColor = function () {
                                return this.$element.data('ripple-color')
                                    ? this.$element.data('ripple-color')
                                    : window.getComputedStyle(this.$element[0])
                                          .color;
                            }),
                            (r._isTouch = function () {
                                return this.config.touchUserAgentRegex.test(
                                    navigator.userAgent
                                );
                            }),
                            (r.rippleEnd = function () {
                                this.$decorator &&
                                    (this.$decorator.data('animating', 'off'),
                                    'off' ===
                                        this.$decorator.data('mousedown') &&
                                        this.rippleOut(this.$decorator));
                            }),
                            (r.rippleOut = function () {
                                var e = this;
                                this.$decorator.off(),
                                    Je.transitionEndSupported()
                                        ? this.$decorator.addClass('ripple-out')
                                        : this.$decorator.animate(
                                              { opacity: 0 },
                                              100,
                                              function () {
                                                  e.$decorator.trigger(
                                                      'transitionend'
                                                  );
                                              }
                                          ),
                                    this.$decorator.on(
                                        Je.transitionEndSelector(),
                                        function () {
                                            e.$decorator &&
                                                (e.$decorator.remove(),
                                                (e.$decorator = null));
                                        }
                                    );
                            }),
                            (r.rippleOn = function () {
                                var e = this,
                                    t = this._getNewSize();
                                Je.transitionEndSupported()
                                    ? this.$decorator
                                          .css({
                                              '-ms-transform':
                                                  'scale(' + t + ')',
                                              '-moz-transform':
                                                  'scale(' + t + ')',
                                              '-webkit-transform':
                                                  'scale(' + t + ')',
                                              transform: 'scale(' + t + ')',
                                          })
                                          .addClass('ripple-on')
                                          .data('animating', 'on')
                                          .data('mousedown', 'on')
                                    : this.$decorator.animate(
                                          {
                                              width:
                                                  2 *
                                                  n(
                                                      this.$element.outerWidth(),
                                                      this.$element.outerHeight()
                                                  ),
                                              height:
                                                  2 *
                                                  n(
                                                      this.$element.outerWidth(),
                                                      this.$element.outerHeight()
                                                  ),
                                              'margin-left':
                                                  -1 *
                                                  n(
                                                      this.$element.outerWidth(),
                                                      this.$element.outerHeight()
                                                  ),
                                              'margin-top':
                                                  -1 *
                                                  n(
                                                      this.$element.outerWidth(),
                                                      this.$element.outerHeight()
                                                  ),
                                              opacity: 0.2,
                                          },
                                          this.config.duration,
                                          function () {
                                              e.$decorator.trigger(
                                                  'transitionend'
                                              );
                                          }
                                      );
                            }),
                            (r._getNewSize = function () {
                                return (
                                    (n(
                                        this.$element.outerWidth(),
                                        this.$element.outerHeight()
                                    ) /
                                        this.$decorator.outerWidth()) *
                                    2.5
                                );
                            }),
                            (i._jQueryInterface = function (n) {
                                return this.each(function () {
                                    var r = e(this),
                                        o = r.data(t);
                                    o || ((o = new i(r, n)), r.data(t, o));
                                });
                            }),
                            i
                        );
                    })();
                (e.fn[i] = l._jQueryInterface),
                    (e.fn[i].Constructor = l),
                    (e.fn[i].noConflict = function () {
                        return (e.fn[i] = r), l._jQueryInterface;
                    });
            })(jQuery),
            (function (e) {
                var t = 'bmd.autofill',
                    n = 'bmd' + ('a'.toUpperCase() + 'autofill'.slice(1)),
                    i = e.fn[n],
                    r = 'bmd.last_value',
                    o = {},
                    s = (function (n) {
                        function i(t, i) {
                            var r;
                            return (
                                (r =
                                    n.call(this, t, e.extend(!0, {}, o, i)) ||
                                    this)._watchLoading(),
                                r._attachEventHandlers(),
                                r
                            );
                        }
                        a(i, n);
                        var s = i.prototype;
                        return (
                            (s.dispose = function () {
                                n.prototype.dispose.call(this, t);
                            }),
                            (s._watchLoading = function () {
                                var e = this;
                                setTimeout(function () {
                                    clearInterval(e._onLoading);
                                }, 1e4);
                            }),
                            (s._onLoading = function () {
                                setInterval(function () {
                                    e('input[type!=checkbox]').each(function (
                                        t,
                                        n
                                    ) {
                                        var i = e(n),
                                            o = i.data(r);
                                        void 0 === o && (o = i.attr('value')),
                                            void 0 === o && (o = '');
                                        var s = i.val();
                                        s !== o && i.trigger('change'),
                                            i.data(r, s);
                                    });
                                }, 100);
                            }),
                            (s._attachEventHandlers = function () {
                                var t = null;
                                e(document)
                                    .on('focus', 'input', function (n) {
                                        var i = e(n.currentTarget)
                                            .closest('form')
                                            .find('input')
                                            .not('[type=file], [type=date]');
                                        t = setInterval(function () {
                                            i.each(function (t, n) {
                                                var i = e(n),
                                                    o = i.data(r);
                                                void 0 === o &&
                                                    (o = i.attr('value')),
                                                    void 0 === o && (o = '');
                                                var s = i.val();
                                                s !== o && i.trigger('change'),
                                                    i.data(r, s);
                                            });
                                        }, 100);
                                    })
                                    .on(
                                        'blur',
                                        '.form-group input',
                                        function () {
                                            clearInterval(t);
                                        }
                                    );
                            }),
                            (i._jQueryInterface = function (n) {
                                return this.each(function () {
                                    var r = e(this),
                                        o = r.data(t);
                                    o || ((o = new i(r, n)), r.data(t, o));
                                });
                            }),
                            i
                        );
                    })(et);
                (e.fn[n] = s._jQueryInterface),
                    (e.fn[n].Constructor = s),
                    (e.fn[n].noConflict = function () {
                        return (e.fn[n] = i), s._jQueryInterface;
                    });
            })(jQuery),
            (Popper.Defaults.modifiers.computeStyle.gpuAcceleration = !1),
            (function (e) {
                var t = 'bmd.bootstrapMaterialDesign',
                    n = 'bootstrapMaterialDesign',
                    i = e.fn[n],
                    r = {
                        global: {
                            validate: !1,
                            label: { className: 'bmd-label-static' },
                        },
                        autofill: { selector: 'body' },
                        checkbox: {
                            selector:
                                '.checkbox > label > input[type=checkbox]',
                        },
                        checkboxInline: {
                            selector:
                                'label.checkbox-inline > input[type=checkbox]',
                        },
                        collapseInline: {
                            selector:
                                '.bmd-collapse-inline [data-toggle="collapse"]',
                        },
                        drawer: { selector: '.bmd-layout-drawer' },
                        file: { selector: 'input[type=file]' },
                        radio: {
                            selector: '.radio > label > input[type=radio]',
                        },
                        radioInline: {
                            selector: 'label.radio-inline > input[type=radio]',
                        },
                        ripples: {
                            selector: [
                                '.btn:not(.btn-link):not(.ripple-none)',
                                '.card-image:not(.ripple-none)',
                                '.navbar a:not(.ripple-none)',
                                '.dropdown-menu a:not(.ripple-none)',
                                '.nav-tabs a:not(.ripple-none)',
                                '.pagination li:not(.active):not(.disabled) a:not(.ripple-none)',
                                '.ripple',
                            ],
                        },
                        select: { selector: ['select'] },
                        switch: {
                            selector: '.switch > label > input[type=checkbox]',
                        },
                        text: {
                            selector: [
                                'input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])',
                            ],
                        },
                        textarea: { selector: ['textarea'] },
                        arrive: !0,
                        instantiation: [
                            'ripples',
                            'checkbox',
                            'checkboxInline',
                            'collapseInline',
                            'drawer',
                            'radio',
                            'radioInline',
                            'switch',
                            'text',
                            'textarea',
                            'select',
                            'autofill',
                        ],
                    },
                    o = (function () {
                        function n(t, n) {
                            var i = this;
                            (this.$element = t),
                                (this.config = e.extend(!0, {}, r, n));
                            var o = e(document),
                                s = function () {
                                    if (l) {
                                        if (c >= a.length) return 'break';
                                        u = a[c++];
                                    } else {
                                        if ((c = a.next()).done) return 'break';
                                        u = c.value;
                                    }
                                    var t = u,
                                        n = i.config[t];
                                    if (n) {
                                        var r = i._resolveSelector(n);
                                        n = e.extend(
                                            !0,
                                            {},
                                            i.config.global,
                                            n
                                        );
                                        var s =
                                            'bmd' +
                                            (t.charAt(0).toUpperCase() +
                                                t.slice(1));
                                        try {
                                            e(r)[s](n),
                                                document.arrive &&
                                                    i.config.arrive &&
                                                    o.arrive(r, function () {
                                                        e(this)[s](n);
                                                    });
                                        } catch (i) {
                                            throw (
                                                (console.error(
                                                    "Failed to instantiate component: $('" +
                                                        r +
                                                        "')[" +
                                                        s +
                                                        '](' +
                                                        n +
                                                        ')',
                                                    i,
                                                    '\nSelected elements: ',
                                                    e(r)
                                                ),
                                                i)
                                            );
                                        }
                                    }
                                },
                                a = this.config.instantiation,
                                l = Array.isArray(a),
                                c = 0;
                            for (a = l ? a : a[Symbol.iterator](); ; ) {
                                var u;
                                if ('break' === s()) break;
                            }
                        }
                        var i = n.prototype;
                        return (
                            (i.dispose = function () {
                                this.$element.data(t, null),
                                    (this.$element = null),
                                    (this.config = null);
                            }),
                            (i._resolveSelector = function (e) {
                                var t = e.selector;
                                return (
                                    Array.isArray(t) && (t = t.join(', ')), t
                                );
                            }),
                            (n._jQueryInterface = function (i) {
                                return this.each(function () {
                                    var r = e(this),
                                        o = r.data(t);
                                    o || ((o = new n(r, i)), r.data(t, o));
                                });
                            }),
                            n
                        );
                    })();
                (e.fn[n] = o._jQueryInterface),
                    (e.fn[n].Constructor = o),
                    (e.fn[n].noConflict = function () {
                        return (e.fn[n] = i), o._jQueryInterface;
                    });
            })(jQuery);
    });
var Arrive = (function (e, t, n) {
    'use strict';
    if (e.MutationObserver && 'undefined' != typeof HTMLElement) {
        var i,
            r = 0,
            o =
                ((i =
                    HTMLElement.prototype.matches ||
                    HTMLElement.prototype.webkitMatchesSelector ||
                    HTMLElement.prototype.mozMatchesSelector ||
                    HTMLElement.prototype.msMatchesSelector),
                {
                    matchesSelector: function (e, t) {
                        return e instanceof HTMLElement && i.call(e, t);
                    },
                    addMethod: function (e, t, n) {
                        var i = e[t];
                        e[t] = function () {
                            return n.length == arguments.length
                                ? n.apply(this, arguments)
                                : 'function' == typeof i
                                ? i.apply(this, arguments)
                                : void 0;
                        };
                    },
                    callCallbacks: function (e, t) {
                        t &&
                            t.options.onceOnly &&
                            1 == t.firedElems.length &&
                            (e = [e[0]]);
                        for (var n, i = 0; (n = e[i]); i++)
                            n && n.callback && n.callback.call(n.elem, n.elem);
                        t &&
                            t.options.onceOnly &&
                            1 == t.firedElems.length &&
                            t.me.unbindEventWithSelectorAndCallback.call(
                                t.target,
                                t.selector,
                                t.callback
                            );
                    },
                    checkChildNodesRecursively: function (e, t, n, i) {
                        for (var r, s = 0; (r = e[s]); s++)
                            n(r, t, i) &&
                                i.push({ callback: t.callback, elem: r }),
                                r.childNodes.length > 0 &&
                                    o.checkChildNodesRecursively(
                                        r.childNodes,
                                        t,
                                        n,
                                        i
                                    );
                    },
                    mergeArrays: function (e, t) {
                        var n,
                            i = {};
                        for (n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
                        for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                        return i;
                    },
                    toElementsArray: function (t) {
                        return (
                            void 0 === t ||
                                ('number' == typeof t.length && t !== e) ||
                                (t = [t]),
                            t
                        );
                    },
                }),
            s = (function () {
                var e = function () {
                    (this._eventsBucket = []),
                        (this._beforeAdding = null),
                        (this._beforeRemoving = null);
                };
                return (
                    (e.prototype.addEvent = function (e, t, n, i) {
                        var r = {
                            target: e,
                            selector: t,
                            options: n,
                            callback: i,
                            firedElems: [],
                        };
                        return (
                            this._beforeAdding && this._beforeAdding(r),
                            this._eventsBucket.push(r),
                            r
                        );
                    }),
                    (e.prototype.removeEvent = function (e) {
                        for (
                            var t, n = this._eventsBucket.length - 1;
                            (t = this._eventsBucket[n]);
                            n--
                        )
                            if (e(t)) {
                                this._beforeRemoving && this._beforeRemoving(t);
                                var i = this._eventsBucket.splice(n, 1);
                                i && i.length && (i[0].callback = null);
                            }
                    }),
                    (e.prototype.beforeAdding = function (e) {
                        this._beforeAdding = e;
                    }),
                    (e.prototype.beforeRemoving = function (e) {
                        this._beforeRemoving = e;
                    }),
                    e
                );
            })(),
            a = function (t, i) {
                var r = new s(),
                    a = this,
                    l = { fireOnAttributesModification: !1 };
                return (
                    r.beforeAdding(function (n) {
                        var r,
                            o = n.target;
                        (o !== e.document && o !== e) ||
                            (o = document.getElementsByTagName('html')[0]),
                            (r = new MutationObserver(function (e) {
                                i.call(this, e, n);
                            }));
                        var s = t(n.options);
                        r.observe(o, s), (n.observer = r), (n.me = a);
                    }),
                    r.beforeRemoving(function (e) {
                        e.observer.disconnect();
                    }),
                    (this.bindEvent = function (e, t, n) {
                        t = o.mergeArrays(l, t);
                        for (
                            var i = o.toElementsArray(this), s = 0;
                            s < i.length;
                            s++
                        )
                            r.addEvent(i[s], e, t, n);
                    }),
                    (this.unbindEvent = function () {
                        var e = o.toElementsArray(this);
                        r.removeEvent(function (t) {
                            for (var i = 0; i < e.length; i++)
                                if (this === n || t.target === e[i]) return !0;
                            return !1;
                        });
                    }),
                    (this.unbindEventWithSelectorOrCallback = function (e) {
                        var t = o.toElementsArray(this),
                            i = e;
                        r.removeEvent(
                            'function' == typeof e
                                ? function (e) {
                                      for (var r = 0; r < t.length; r++)
                                          if (
                                              (this === n ||
                                                  e.target === t[r]) &&
                                              e.callback === i
                                          )
                                              return !0;
                                      return !1;
                                  }
                                : function (i) {
                                      for (var r = 0; r < t.length; r++)
                                          if (
                                              (this === n ||
                                                  i.target === t[r]) &&
                                              i.selector === e
                                          )
                                              return !0;
                                      return !1;
                                  }
                        );
                    }),
                    (this.unbindEventWithSelectorAndCallback = function (e, t) {
                        var i = o.toElementsArray(this);
                        r.removeEvent(function (r) {
                            for (var o = 0; o < i.length; o++)
                                if (
                                    (this === n || r.target === i[o]) &&
                                    r.selector === e &&
                                    r.callback === t
                                )
                                    return !0;
                            return !1;
                        });
                    }),
                    this
                );
            },
            l = new (function () {
                var e = {
                    fireOnAttributesModification: !1,
                    onceOnly: !1,
                    existing: !1,
                };
                function t(e, t, i) {
                    return !(
                        !o.matchesSelector(e, t.selector) ||
                        (e._id === n && (e._id = r++),
                        -1 != t.firedElems.indexOf(e._id)) ||
                        (t.firedElems.push(e._id), 0)
                    );
                }
                var i = (l = new a(
                    function (e) {
                        var t = { attributes: !1, childList: !0, subtree: !0 };
                        return (
                            e.fireOnAttributesModification &&
                                (t.attributes = !0),
                            t
                        );
                    },
                    function (e, n) {
                        e.forEach(function (e) {
                            var i = e.addedNodes,
                                r = e.target,
                                s = [];
                            null !== i && i.length > 0
                                ? o.checkChildNodesRecursively(i, n, t, s)
                                : 'attributes' === e.type &&
                                  t(r, n) &&
                                  s.push({ callback: n.callback, elem: r }),
                                o.callCallbacks(s, n);
                        });
                    }
                )).bindEvent;
                return (
                    (l.bindEvent = function (t, n, r) {
                        void 0 === r
                            ? ((r = n), (n = e))
                            : (n = o.mergeArrays(e, n));
                        var s = o.toElementsArray(this);
                        if (n.existing) {
                            for (var a = [], l = 0; l < s.length; l++)
                                for (
                                    var c = s[l].querySelectorAll(t), u = 0;
                                    u < c.length;
                                    u++
                                )
                                    a.push({ callback: r, elem: c[u] });
                            if (n.onceOnly && a.length)
                                return r.call(a[0].elem, a[0].elem);
                            setTimeout(o.callCallbacks, 1, a);
                        }
                        i.call(this, t, n, r);
                    }),
                    l
                );
            })(),
            c = new (function () {
                var e = {};
                function t(e, t) {
                    return o.matchesSelector(e, t.selector);
                }
                var n = (c = new a(
                    function () {
                        return { childList: !0, subtree: !0 };
                    },
                    function (e, n) {
                        e.forEach(function (e) {
                            var i = e.removedNodes,
                                r = [];
                            null !== i &&
                                i.length > 0 &&
                                o.checkChildNodesRecursively(i, n, t, r),
                                o.callCallbacks(r, n);
                        });
                    }
                )).bindEvent;
                return (
                    (c.bindEvent = function (t, i, r) {
                        void 0 === r
                            ? ((r = i), (i = e))
                            : (i = o.mergeArrays(e, i)),
                            n.call(this, t, i, r);
                    }),
                    c
                );
            })();
        t && d(t.fn),
            d(HTMLElement.prototype),
            d(NodeList.prototype),
            d(HTMLCollection.prototype),
            d(HTMLDocument.prototype),
            d(Window.prototype);
        var u = {};
        return h(l, u, 'unbindAllArrive'), h(c, u, 'unbindAllLeave'), u;
    }
    function h(e, t, n) {
        o.addMethod(t, n, e.unbindEvent),
            o.addMethod(t, n, e.unbindEventWithSelectorOrCallback),
            o.addMethod(t, n, e.unbindEventWithSelectorAndCallback);
    }
    function d(e) {
        (e.arrive = l.bindEvent),
            h(l, e, 'unbindArrive'),
            (e.leave = c.bindEvent),
            h(c, e, 'unbindLeave');
    }
})(window, 'undefined' == typeof jQuery ? null : jQuery, void 0);
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : (e.moment = t());
})(this, function () {
    'use strict';
    var e, t;
    function n() {
        return e.apply(null, arguments);
    }
    function i(e) {
        return (
            e instanceof Array ||
            '[object Array]' === Object.prototype.toString.call(e)
        );
    }
    function r(e) {
        return (
            null != e && '[object Object]' === Object.prototype.toString.call(e)
        );
    }
    function o(e) {
        return void 0 === e;
    }
    function s(e) {
        return (
            'number' == typeof e ||
            '[object Number]' === Object.prototype.toString.call(e)
        );
    }
    function a(e) {
        return (
            e instanceof Date ||
            '[object Date]' === Object.prototype.toString.call(e)
        );
    }
    function l(e, t) {
        var n,
            i = [];
        for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
        return i;
    }
    function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    function u(e, t) {
        for (var n in t) c(t, n) && (e[n] = t[n]);
        return (
            c(t, 'toString') && (e.toString = t.toString),
            c(t, 'valueOf') && (e.valueOf = t.valueOf),
            e
        );
    }
    function h(e, t, n, i) {
        return Dt(e, t, n, i, !0).utc();
    }
    function d(e) {
        return (
            null == e._pf &&
                (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1,
                }),
            e._pf
        );
    }
    function f(e) {
        if (null == e._isValid) {
            var n = d(e),
                i = t.call(n.parsedDateParts, function (e) {
                    return null != e;
                }),
                r =
                    !isNaN(e._d.getTime()) &&
                    n.overflow < 0 &&
                    !n.empty &&
                    !n.invalidMonth &&
                    !n.invalidWeekday &&
                    !n.weekdayMismatch &&
                    !n.nullInput &&
                    !n.invalidFormat &&
                    !n.userInvalidated &&
                    (!n.meridiem || (n.meridiem && i));
            if (
                (e._strict &&
                    (r =
                        r &&
                        0 === n.charsLeftOver &&
                        0 === n.unusedTokens.length &&
                        void 0 === n.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
            )
                return r;
            e._isValid = r;
        }
        return e._isValid;
    }
    function p(e) {
        var t = h(NaN);
        return null != e ? u(d(t), e) : (d(t).userInvalidated = !0), t;
    }
    t = Array.prototype.some
        ? Array.prototype.some
        : function (e) {
              for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
                  if (i in t && e.call(this, t[i], i, t)) return !0;
              return !1;
          };
    var m = (n.momentProperties = []);
    function g(e, t) {
        var n, i, r;
        if (
            (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
            o(t._i) || (e._i = t._i),
            o(t._f) || (e._f = t._f),
            o(t._l) || (e._l = t._l),
            o(t._strict) || (e._strict = t._strict),
            o(t._tzm) || (e._tzm = t._tzm),
            o(t._isUTC) || (e._isUTC = t._isUTC),
            o(t._offset) || (e._offset = t._offset),
            o(t._pf) || (e._pf = d(t)),
            o(t._locale) || (e._locale = t._locale),
            m.length > 0)
        )
            for (n = 0; n < m.length; n++) o((r = t[(i = m[n])])) || (e[i] = r);
        return e;
    }
    var v = !1;
    function y(e) {
        g(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === v && ((v = !0), n.updateOffset(this), (v = !1));
    }
    function b(e) {
        return e instanceof y || (null != e && null != e._isAMomentObject);
    }
    function _(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function w(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = _(t)), n;
    }
    function x(e, t, n) {
        var i,
            r = Math.min(e.length, t.length),
            o = Math.abs(e.length - t.length),
            s = 0;
        for (i = 0; i < r; i++)
            ((n && e[i] !== t[i]) || (!n && w(e[i]) !== w(t[i]))) && s++;
        return s + o;
    }
    function E(e) {
        !1 === n.suppressDeprecationWarnings &&
            'undefined' != typeof console &&
            console.warn &&
            console.warn('Deprecation warning: ' + e);
    }
    function S(e, t) {
        var i = !0;
        return u(function () {
            if (
                (null != n.deprecationHandler && n.deprecationHandler(null, e),
                i)
            ) {
                for (var r, o = [], s = 0; s < arguments.length; s++) {
                    if (((r = ''), 'object' == typeof arguments[s])) {
                        for (var a in ((r += '\n[' + s + '] '), arguments[0]))
                            r += a + ': ' + arguments[0][a] + ', ';
                        r = r.slice(0, -2);
                    } else r = arguments[s];
                    o.push(r);
                }
                E(
                    e +
                        '\nArguments: ' +
                        Array.prototype.slice.call(o).join('') +
                        '\n' +
                        new Error().stack
                ),
                    (i = !1);
            }
            return t.apply(this, arguments);
        }, t);
    }
    var T,
        C = {};
    function A(e, t) {
        null != n.deprecationHandler && n.deprecationHandler(e, t),
            C[e] || (E(t), (C[e] = !0));
    }
    function D(e) {
        return (
            e instanceof Function ||
            '[object Function]' === Object.prototype.toString.call(e)
        );
    }
    function O(e, t) {
        var n,
            i = u({}, e);
        for (n in t)
            c(t, n) &&
                (r(e[n]) && r(t[n])
                    ? ((i[n] = {}), u(i[n], e[n]), u(i[n], t[n]))
                    : null != t[n]
                    ? (i[n] = t[n])
                    : delete i[n]);
        for (n in e) c(e, n) && !c(t, n) && r(e[n]) && (i[n] = u({}, i[n]));
        return i;
    }
    function k(e) {
        null != e && this.set(e);
    }
    (n.suppressDeprecationWarnings = !1),
        (n.deprecationHandler = null),
        (T = Object.keys
            ? Object.keys
            : function (e) {
                  var t,
                      n = [];
                  for (t in e) c(e, t) && n.push(t);
                  return n;
              });
    var I = {};
    function N(e, t) {
        var n = e.toLowerCase();
        I[n] = I[n + 's'] = I[t] = e;
    }
    function M(e) {
        return 'string' == typeof e ? I[e] || I[e.toLowerCase()] : void 0;
    }
    function L(e) {
        var t,
            n,
            i = {};
        for (n in e) c(e, n) && (t = M(n)) && (i[t] = e[n]);
        return i;
    }
    var P = {};
    function H(e, t) {
        P[e] = t;
    }
    function R(e, t, n) {
        var i = '' + Math.abs(e);
        return (
            (e >= 0 ? (n ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, t - i.length))
                .toString()
                .substr(1) +
            i
        );
    }
    var j =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        $ = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Y = {},
        W = {};
    function F(e, t, n, i) {
        var r = i;
        'string' == typeof i &&
            (r = function () {
                return this[i]();
            }),
            e && (W[e] = r),
            t &&
                (W[t[0]] = function () {
                    return R(r.apply(this, arguments), t[1], t[2]);
                }),
            n &&
                (W[n] = function () {
                    return this.localeData().ordinal(
                        r.apply(this, arguments),
                        e
                    );
                });
    }
    function U(e, t) {
        return e.isValid()
            ? ((t = V(t, e.localeData())),
              (Y[t] =
                  Y[t] ||
                  (function (e) {
                      var t,
                          n,
                          i,
                          r = e.match(j);
                      for (t = 0, n = r.length; t < n; t++)
                          r[t] = W[r[t]]
                              ? W[r[t]]
                              : (i = r[t]).match(/\[[\s\S]/)
                              ? i.replace(/^\[|\]$/g, '')
                              : i.replace(/\\/g, '');
                      return function (t) {
                          var i,
                              o = '';
                          for (i = 0; i < n; i++)
                              o += D(r[i]) ? r[i].call(t, e) : r[i];
                          return o;
                      };
                  })(t)),
              Y[t](e))
            : e.localeData().invalidDate();
    }
    function V(e, t) {
        var n = 5;
        function i(e) {
            return t.longDateFormat(e) || e;
        }
        for ($.lastIndex = 0; n >= 0 && $.test(e); )
            (e = e.replace($, i)), ($.lastIndex = 0), (n -= 1);
        return e;
    }
    var B = /\d/,
        q = /\d\d/,
        G = /\d{3}/,
        z = /\d{4}/,
        X = /[+-]?\d{6}/,
        Q = /\d\d?/,
        K = /\d\d\d\d?/,
        Z = /\d\d\d\d\d\d?/,
        J = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ne = /\d+/,
        ie = /[+-]?\d+/,
        re = /Z|[+-]\d\d:?\d\d/gi,
        oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        se =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ae = {};
    function le(e, t, n) {
        ae[e] = D(t)
            ? t
            : function (e, i) {
                  return e && n ? n : t;
              };
    }
    function ce(e, t) {
        return c(ae, e)
            ? ae[e](t._strict, t._locale)
            : new RegExp(
                  ue(
                      e
                          .replace('\\', '')
                          .replace(
                              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                              function (e, t, n, i, r) {
                                  return t || n || i || r;
                              }
                          )
                  )
              );
    }
    function ue(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var he = {};
    function de(e, t) {
        var n,
            i = t;
        for (
            'string' == typeof e && (e = [e]),
                s(t) &&
                    (i = function (e, n) {
                        n[t] = w(e);
                    }),
                n = 0;
            n < e.length;
            n++
        )
            he[e[n]] = i;
    }
    function fe(e, t) {
        de(e, function (e, n, i, r) {
            (i._w = i._w || {}), t(e, i._w, i, r);
        });
    }
    function pe(e, t, n) {
        null != t && c(he, e) && he[e](t, n._a, n, e);
    }
    var me = 0,
        ge = 1,
        ve = 2,
        ye = 3,
        be = 4,
        _e = 5,
        we = 6,
        xe = 7,
        Ee = 8;
    function Se(e) {
        return Te(e) ? 366 : 365;
    }
    function Te(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }
    F('Y', 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? '' + e : '+' + e;
    }),
        F(0, ['YY', 2], 0, function () {
            return this.year() % 100;
        }),
        F(0, ['YYYY', 4], 0, 'year'),
        F(0, ['YYYYY', 5], 0, 'year'),
        F(0, ['YYYYYY', 6, !0], 0, 'year'),
        N('year', 'y'),
        H('year', 1),
        le('Y', ie),
        le('YY', Q, q),
        le('YYYY', ee, z),
        le('YYYYY', te, X),
        le('YYYYYY', te, X),
        de(['YYYYY', 'YYYYYY'], me),
        de('YYYY', function (e, t) {
            t[me] = 2 === e.length ? n.parseTwoDigitYear(e) : w(e);
        }),
        de('YY', function (e, t) {
            t[me] = n.parseTwoDigitYear(e);
        }),
        de('Y', function (e, t) {
            t[me] = parseInt(e, 10);
        }),
        (n.parseTwoDigitYear = function (e) {
            return w(e) + (w(e) > 68 ? 1900 : 2e3);
        });
    var Ce,
        Ae = De('FullYear', !0);
    function De(e, t) {
        return function (i) {
            return null != i
                ? (ke(this, e, i), n.updateOffset(this, t), this)
                : Oe(this, e);
        };
    }
    function Oe(e, t) {
        return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN;
    }
    function ke(e, t, n) {
        e.isValid() &&
            !isNaN(n) &&
            ('FullYear' === t &&
            Te(e.year()) &&
            1 === e.month() &&
            29 === e.date()
                ? e._d['set' + (e._isUTC ? 'UTC' : '') + t](
                      n,
                      e.month(),
                      Ie(n, e.month())
                  )
                : e._d['set' + (e._isUTC ? 'UTC' : '') + t](n));
    }
    function Ie(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = ((t % 12) + 12) % 12;
        return (
            (e += (t - n) / 12),
            1 === n ? (Te(e) ? 29 : 28) : 31 - ((n % 7) % 2)
        );
    }
    (Ce = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (e) {
              var t;
              for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
              return -1;
          }),
        F('M', ['MM', 2], 'Mo', function () {
            return this.month() + 1;
        }),
        F('MMM', 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
        }),
        F('MMMM', 0, 0, function (e) {
            return this.localeData().months(this, e);
        }),
        N('month', 'M'),
        H('month', 8),
        le('M', Q),
        le('MM', Q, q),
        le('MMM', function (e, t) {
            return t.monthsShortRegex(e);
        }),
        le('MMMM', function (e, t) {
            return t.monthsRegex(e);
        }),
        de(['M', 'MM'], function (e, t) {
            t[ge] = w(e) - 1;
        }),
        de(['MMM', 'MMMM'], function (e, t, n, i) {
            var r = n._locale.monthsParse(e, i, n._strict);
            null != r ? (t[ge] = r) : (d(n).invalidMonth = e);
        });
    var Ne = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Me =
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
            ),
        Le = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function Pe(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ('string' == typeof t)
            if (/^\d+$/.test(t)) t = w(t);
            else if (!s((t = e.localeData().monthsParse(t)))) return e;
        return (
            (n = Math.min(e.date(), Ie(e.year(), t))),
            e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n),
            e
        );
    }
    function He(e) {
        return null != e
            ? (Pe(this, e), n.updateOffset(this, !0), this)
            : Oe(this, 'Month');
    }
    var Re = se,
        je = se;
    function $e() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t,
            n,
            i = [],
            r = [],
            o = [];
        for (t = 0; t < 12; t++)
            (n = h([2e3, t])),
                i.push(this.monthsShort(n, '')),
                r.push(this.months(n, '')),
                o.push(this.months(n, '')),
                o.push(this.monthsShort(n, ''));
        for (i.sort(e), r.sort(e), o.sort(e), t = 0; t < 12; t++)
            (i[t] = ue(i[t])), (r[t] = ue(r[t]));
        for (t = 0; t < 24; t++) o[t] = ue(o[t]);
        (this._monthsRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
                '^(' + r.join('|') + ')',
                'i'
            )),
            (this._monthsShortStrictRegex = new RegExp(
                '^(' + i.join('|') + ')',
                'i'
            ));
    }
    function Ye(e) {
        var t;
        if (e < 100 && e >= 0) {
            var n = Array.prototype.slice.call(arguments);
            (n[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, n))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
        } else t = new Date(Date.UTC.apply(null, arguments));
        return t;
    }
    function We(e, t, n) {
        var i = 7 + t - n;
        return (-(7 + Ye(e, 0, i).getUTCDay() - t) % 7) + i - 1;
    }
    function Fe(e, t, n, i, r) {
        var o,
            s,
            a = 1 + 7 * (t - 1) + ((7 + n - i) % 7) + We(e, i, r);
        return (
            a <= 0
                ? (s = Se((o = e - 1)) + a)
                : a > Se(e)
                ? ((o = e + 1), (s = a - Se(e)))
                : ((o = e), (s = a)),
            { year: o, dayOfYear: s }
        );
    }
    function Ue(e, t, n) {
        var i,
            r,
            o = We(e.year(), t, n),
            s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
        return (
            s < 1
                ? (i = s + Ve((r = e.year() - 1), t, n))
                : s > Ve(e.year(), t, n)
                ? ((i = s - Ve(e.year(), t, n)), (r = e.year() + 1))
                : ((r = e.year()), (i = s)),
            { week: i, year: r }
        );
    }
    function Ve(e, t, n) {
        var i = We(e, t, n),
            r = We(e + 1, t, n);
        return (Se(e) - i + r) / 7;
    }
    function Be(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t));
    }
    F('w', ['ww', 2], 'wo', 'week'),
        F('W', ['WW', 2], 'Wo', 'isoWeek'),
        N('week', 'w'),
        N('isoWeek', 'W'),
        H('week', 5),
        H('isoWeek', 5),
        le('w', Q),
        le('ww', Q, q),
        le('W', Q),
        le('WW', Q, q),
        fe(['w', 'ww', 'W', 'WW'], function (e, t, n, i) {
            t[i.substr(0, 1)] = w(e);
        }),
        F('d', 0, 'do', 'day'),
        F('dd', 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
        }),
        F('ddd', 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
        }),
        F('dddd', 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
        }),
        F('e', 0, 0, 'weekday'),
        F('E', 0, 0, 'isoWeekday'),
        N('day', 'd'),
        N('weekday', 'e'),
        N('isoWeekday', 'E'),
        H('day', 11),
        H('weekday', 11),
        H('isoWeekday', 11),
        le('d', Q),
        le('e', Q),
        le('E', Q),
        le('dd', function (e, t) {
            return t.weekdaysMinRegex(e);
        }),
        le('ddd', function (e, t) {
            return t.weekdaysShortRegex(e);
        }),
        le('dddd', function (e, t) {
            return t.weekdaysRegex(e);
        }),
        fe(['dd', 'ddd', 'dddd'], function (e, t, n, i) {
            var r = n._locale.weekdaysParse(e, i, n._strict);
            null != r ? (t.d = r) : (d(n).invalidWeekday = e);
        }),
        fe(['d', 'e', 'E'], function (e, t, n, i) {
            t[i] = w(e);
        });
    var qe = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        ),
        Ge = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        ze = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        Xe = se,
        Qe = se,
        Ke = se;
    function Ze() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t,
            n,
            i,
            r,
            o,
            s = [],
            a = [],
            l = [],
            c = [];
        for (t = 0; t < 7; t++)
            (n = h([2e3, 1]).day(t)),
                (i = this.weekdaysMin(n, '')),
                (r = this.weekdaysShort(n, '')),
                (o = this.weekdays(n, '')),
                s.push(i),
                a.push(r),
                l.push(o),
                c.push(i),
                c.push(r),
                c.push(o);
        for (s.sort(e), a.sort(e), l.sort(e), c.sort(e), t = 0; t < 7; t++)
            (a[t] = ue(a[t])), (l[t] = ue(l[t])), (c[t] = ue(c[t]));
        (this._weekdaysRegex = new RegExp('^(' + c.join('|') + ')', 'i')),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
                '^(' + l.join('|') + ')',
                'i'
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
                '^(' + a.join('|') + ')',
                'i'
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
                '^(' + s.join('|') + ')',
                'i'
            ));
    }
    function Je() {
        return this.hours() % 12 || 12;
    }
    function et(e, t) {
        F(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
    }
    function tt(e, t) {
        return t._meridiemParse;
    }
    F('H', ['HH', 2], 0, 'hour'),
        F('h', ['hh', 2], 0, Je),
        F('k', ['kk', 2], 0, function () {
            return this.hours() || 24;
        }),
        F('hmm', 0, 0, function () {
            return '' + Je.apply(this) + R(this.minutes(), 2);
        }),
        F('hmmss', 0, 0, function () {
            return (
                '' +
                Je.apply(this) +
                R(this.minutes(), 2) +
                R(this.seconds(), 2)
            );
        }),
        F('Hmm', 0, 0, function () {
            return '' + this.hours() + R(this.minutes(), 2);
        }),
        F('Hmmss', 0, 0, function () {
            return (
                '' + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2)
            );
        }),
        et('a', !0),
        et('A', !1),
        N('hour', 'h'),
        H('hour', 13),
        le('a', tt),
        le('A', tt),
        le('H', Q),
        le('h', Q),
        le('k', Q),
        le('HH', Q, q),
        le('hh', Q, q),
        le('kk', Q, q),
        le('hmm', K),
        le('hmmss', Z),
        le('Hmm', K),
        le('Hmmss', Z),
        de(['H', 'HH'], ye),
        de(['k', 'kk'], function (e, t, n) {
            var i = w(e);
            t[ye] = 24 === i ? 0 : i;
        }),
        de(['a', 'A'], function (e, t, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
        }),
        de(['h', 'hh'], function (e, t, n) {
            (t[ye] = w(e)), (d(n).bigHour = !0);
        }),
        de('hmm', function (e, t, n) {
            var i = e.length - 2;
            (t[ye] = w(e.substr(0, i))),
                (t[be] = w(e.substr(i))),
                (d(n).bigHour = !0);
        }),
        de('hmmss', function (e, t, n) {
            var i = e.length - 4,
                r = e.length - 2;
            (t[ye] = w(e.substr(0, i))),
                (t[be] = w(e.substr(i, 2))),
                (t[_e] = w(e.substr(r))),
                (d(n).bigHour = !0);
        }),
        de('Hmm', function (e, t, n) {
            var i = e.length - 2;
            (t[ye] = w(e.substr(0, i))), (t[be] = w(e.substr(i)));
        }),
        de('Hmmss', function (e, t, n) {
            var i = e.length - 4,
                r = e.length - 2;
            (t[ye] = w(e.substr(0, i))),
                (t[be] = w(e.substr(i, 2))),
                (t[_e] = w(e.substr(r)));
        });
    var nt,
        it = De('Hours', !0),
        rt = {
            calendar: {
                sameDay: '[Today at] LT',
                nextDay: '[Tomorrow at] LT',
                nextWeek: 'dddd [at] LT',
                lastDay: '[Yesterday at] LT',
                lastWeek: '[Last] dddd [at] LT',
                sameElse: 'L',
            },
            longDateFormat: {
                LTS: 'h:mm:ss A',
                LT: 'h:mm A',
                L: 'MM/DD/YYYY',
                LL: 'MMMM D, YYYY',
                LLL: 'MMMM D, YYYY h:mm A',
                LLLL: 'dddd, MMMM D, YYYY h:mm A',
            },
            invalidDate: 'Invalid date',
            ordinal: '%d',
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: 'in %s',
                past: '%s ago',
                s: 'a few seconds',
                ss: '%d seconds',
                m: 'a minute',
                mm: '%d minutes',
                h: 'an hour',
                hh: '%d hours',
                d: 'a day',
                dd: '%d days',
                M: 'a month',
                MM: '%d months',
                y: 'a year',
                yy: '%d years',
            },
            months: Me,
            monthsShort: Le,
            week: { dow: 0, doy: 6 },
            weekdays: qe,
            weekdaysMin: ze,
            weekdaysShort: Ge,
            meridiemParse: /[ap]\.?m?\.?/i,
        },
        ot = {},
        st = {};
    function at(e) {
        return e ? e.toLowerCase().replace('_', '-') : e;
    }
    function lt(e) {
        var t = null;
        if (!ot[e] && 'undefined' != typeof module && module && module.exports)
            try {
                (t = nt._abbr), require('./locale/' + e), ct(t);
            } catch (n) {}
        return ot[e];
    }
    function ct(e, t) {
        var n;
        return (
            e &&
                ((n = o(t) ? ht(e) : ut(e, t))
                    ? (nt = n)
                    : 'undefined' != typeof console &&
                      console.warn &&
                      console.warn(
                          'Locale ' +
                              e +
                              ' not found. Did you forget to load it?'
                      )),
            nt._abbr
        );
    }
    function ut(e, t) {
        if (null !== t) {
            var n,
                i = rt;
            if (((t.abbr = e), null != ot[e]))
                A(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                ),
                    (i = ot[e]._config);
            else if (null != t.parentLocale)
                if (null != ot[t.parentLocale]) i = ot[t.parentLocale]._config;
                else {
                    if (null == (n = lt(t.parentLocale)))
                        return (
                            st[t.parentLocale] || (st[t.parentLocale] = []),
                            st[t.parentLocale].push({ name: e, config: t }),
                            null
                        );
                    i = n._config;
                }
            return (
                (ot[e] = new k(O(i, t))),
                st[e] &&
                    st[e].forEach(function (e) {
                        ut(e.name, e.config);
                    }),
                ct(e),
                ot[e]
            );
        }
        return delete ot[e], null;
    }
    function ht(e) {
        var t;
        if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return nt;
        if (!i(e)) {
            if ((t = lt(e))) return t;
            e = [e];
        }
        return (function (e) {
            for (var t, n, i, r, o = 0; o < e.length; ) {
                for (
                    t = (r = at(e[o]).split('-')).length,
                        n = (n = at(e[o + 1])) ? n.split('-') : null;
                    t > 0;

                ) {
                    if ((i = lt(r.slice(0, t).join('-')))) return i;
                    if (n && n.length >= t && x(r, n, !0) >= t - 1) break;
                    t--;
                }
                o++;
            }
            return nt;
        })(e);
    }
    function dt(e) {
        var t,
            n = e._a;
        return (
            n &&
                -2 === d(e).overflow &&
                ((t =
                    n[ge] < 0 || n[ge] > 11
                        ? ge
                        : n[ve] < 1 || n[ve] > Ie(n[me], n[ge])
                        ? ve
                        : n[ye] < 0 ||
                          n[ye] > 24 ||
                          (24 === n[ye] &&
                              (0 !== n[be] || 0 !== n[_e] || 0 !== n[we]))
                        ? ye
                        : n[be] < 0 || n[be] > 59
                        ? be
                        : n[_e] < 0 || n[_e] > 59
                        ? _e
                        : n[we] < 0 || n[we] > 999
                        ? we
                        : -1),
                d(e)._overflowDayOfYear && (t < me || t > ve) && (t = ve),
                d(e)._overflowWeeks && -1 === t && (t = xe),
                d(e)._overflowWeekday && -1 === t && (t = Ee),
                (d(e).overflow = t)),
            e
        );
    }
    function ft(e, t, n) {
        return null != e ? e : null != t ? t : n;
    }
    function pt(e) {
        var t,
            i,
            r,
            o,
            s,
            a = [];
        if (!e._d) {
            for (
                r = (function (e) {
                    var t = new Date(n.now());
                    return e._useUTC
                        ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                        : [t.getFullYear(), t.getMonth(), t.getDate()];
                })(e),
                    e._w &&
                        null == e._a[ve] &&
                        null == e._a[ge] &&
                        (function (e) {
                            var t, n, i, r, o, s, a, l;
                            if (
                                null != (t = e._w).GG ||
                                null != t.W ||
                                null != t.E
                            )
                                (o = 1),
                                    (s = 4),
                                    (n = ft(
                                        t.GG,
                                        e._a[me],
                                        Ue(Ot(), 1, 4).year
                                    )),
                                    (i = ft(t.W, 1)),
                                    ((r = ft(t.E, 1)) < 1 || r > 7) && (l = !0);
                            else {
                                (o = e._locale._week.dow),
                                    (s = e._locale._week.doy);
                                var c = Ue(Ot(), o, s);
                                (n = ft(t.gg, e._a[me], c.year)),
                                    (i = ft(t.w, c.week)),
                                    null != t.d
                                        ? ((r = t.d) < 0 || r > 6) && (l = !0)
                                        : null != t.e
                                        ? ((r = t.e + o),
                                          (t.e < 0 || t.e > 6) && (l = !0))
                                        : (r = o);
                            }
                            i < 1 || i > Ve(n, o, s)
                                ? (d(e)._overflowWeeks = !0)
                                : null != l
                                ? (d(e)._overflowWeekday = !0)
                                : ((a = Fe(n, i, r, o, s)),
                                  (e._a[me] = a.year),
                                  (e._dayOfYear = a.dayOfYear));
                        })(e),
                    null != e._dayOfYear &&
                        ((s = ft(e._a[me], r[me])),
                        (e._dayOfYear > Se(s) || 0 === e._dayOfYear) &&
                            (d(e)._overflowDayOfYear = !0),
                        (i = Ye(s, 0, e._dayOfYear)),
                        (e._a[ge] = i.getUTCMonth()),
                        (e._a[ve] = i.getUTCDate())),
                    t = 0;
                t < 3 && null == e._a[t];
                ++t
            )
                e._a[t] = a[t] = r[t];
            for (; t < 7; t++)
                e._a[t] = a[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[ye] &&
                0 === e._a[be] &&
                0 === e._a[_e] &&
                0 === e._a[we] &&
                ((e._nextDay = !0), (e._a[ye] = 0)),
                (e._d = (
                    e._useUTC
                        ? Ye
                        : function (e, t, n, i, r, o, s) {
                              var a;
                              return (
                                  e < 100 && e >= 0
                                      ? ((a = new Date(
                                            e + 400,
                                            t,
                                            n,
                                            i,
                                            r,
                                            o,
                                            s
                                        )),
                                        isFinite(a.getFullYear()) &&
                                            a.setFullYear(e))
                                      : (a = new Date(e, t, n, i, r, o, s)),
                                  a
                              );
                          }
                ).apply(null, a)),
                (o = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[ye] = 24),
                e._w &&
                    void 0 !== e._w.d &&
                    e._w.d !== o &&
                    (d(e).weekdayMismatch = !0);
        }
    }
    var mt =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        gt =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        vt = /Z|[+-]\d\d(?::?\d\d)?/,
        yt = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, !1],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
            ['YYYYDDD', /\d{7}/],
        ],
        bt = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        _t = /^\/?Date\((\-?\d+)/i;
    function wt(e) {
        var t,
            n,
            i,
            r,
            o,
            s,
            a = e._i,
            l = mt.exec(a) || gt.exec(a);
        if (l) {
            for (d(e).iso = !0, t = 0, n = yt.length; t < n; t++)
                if (yt[t][1].exec(l[1])) {
                    (r = yt[t][0]), (i = !1 !== yt[t][2]);
                    break;
                }
            if (null == r) return void (e._isValid = !1);
            if (l[3]) {
                for (t = 0, n = bt.length; t < n; t++)
                    if (bt[t][1].exec(l[3])) {
                        o = (l[2] || ' ') + bt[t][0];
                        break;
                    }
                if (null == o) return void (e._isValid = !1);
            }
            if (!i && null != o) return void (e._isValid = !1);
            if (l[4]) {
                if (!vt.exec(l[4])) return void (e._isValid = !1);
                s = 'Z';
            }
            (e._f = r + (o || '') + (s || '')), Ct(e);
        } else e._isValid = !1;
    }
    var xt =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function Et(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
    }
    var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
    };
    function Tt(e) {
        var t,
            n,
            i,
            r,
            o,
            s,
            a = xt.exec(
                e._i
                    .replace(/\([^)]*\)|[\n\t]/g, ' ')
                    .replace(/(\s\s+)/g, ' ')
                    .replace(/^\s\s*/, '')
                    .replace(/\s\s*$/, '')
            );
        if (a) {
            var l =
                ((t = a[3]),
                (n = a[2]),
                (i = a[5]),
                (r = a[6]),
                (o = a[7]),
                (s = [
                    Et(a[4]),
                    Le.indexOf(t),
                    parseInt(n, 10),
                    parseInt(i, 10),
                    parseInt(r, 10),
                ]),
                o && s.push(parseInt(o, 10)),
                s);
            if (
                !(function (e, t, n) {
                    return (
                        !e ||
                        Ge.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
                        ((d(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                    );
                })(a[1], l, e)
            )
                return;
            (e._a = l),
                (e._tzm = (function (e, t, n) {
                    if (e) return St[e];
                    if (a[9]) return 0;
                    var i = parseInt(a[10], 10),
                        r = i % 100;
                    return ((i - r) / 100) * 60 + r;
                })(a[8])),
                (e._d = Ye.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (d(e).rfc2822 = !0);
        } else e._isValid = !1;
    }
    function Ct(e) {
        if (e._f !== n.ISO_8601)
            if (e._f !== n.RFC_2822) {
                (e._a = []), (d(e).empty = !0);
                var t,
                    i,
                    r,
                    o,
                    s,
                    a = '' + e._i,
                    l = a.length,
                    c = 0;
                for (
                    r = V(e._f, e._locale).match(j) || [], t = 0;
                    t < r.length;
                    t++
                )
                    (i = (a.match(ce((o = r[t]), e)) || [])[0]) &&
                        ((s = a.substr(0, a.indexOf(i))).length > 0 &&
                            d(e).unusedInput.push(s),
                        (a = a.slice(a.indexOf(i) + i.length)),
                        (c += i.length)),
                        W[o]
                            ? (i
                                  ? (d(e).empty = !1)
                                  : d(e).unusedTokens.push(o),
                              pe(o, i, e))
                            : e._strict && !i && d(e).unusedTokens.push(o);
                (d(e).charsLeftOver = l - c),
                    a.length > 0 && d(e).unusedInput.push(a),
                    e._a[ye] <= 12 &&
                        !0 === d(e).bigHour &&
                        e._a[ye] > 0 &&
                        (d(e).bigHour = void 0),
                    (d(e).parsedDateParts = e._a.slice(0)),
                    (d(e).meridiem = e._meridiem),
                    (e._a[ye] =
                        ((u = e._locale),
                        (h = e._a[ye]),
                        null == (f = e._meridiem)
                            ? h
                            : null != u.meridiemHour
                            ? u.meridiemHour(h, f)
                            : null != u.isPM
                            ? ((p = u.isPM(f)) && h < 12 && (h += 12),
                              p || 12 !== h || (h = 0),
                              h)
                            : h)),
                    pt(e),
                    dt(e);
            } else Tt(e);
        else wt(e);
        var u, h, f, p;
    }
    function At(e) {
        var t = e._i,
            c = e._f;
        return (
            (e._locale = e._locale || ht(e._l)),
            null === t || (void 0 === c && '' === t)
                ? p({ nullInput: !0 })
                : ('string' == typeof t && (e._i = t = e._locale.preparse(t)),
                  b(t)
                      ? new y(dt(t))
                      : (a(t)
                            ? (e._d = t)
                            : i(c)
                            ? (function (e) {
                                  var t, n, i, r, o;
                                  if (0 === e._f.length)
                                      return (
                                          (d(e).invalidFormat = !0),
                                          void (e._d = new Date(NaN))
                                      );
                                  for (r = 0; r < e._f.length; r++)
                                      (o = 0),
                                          (t = g({}, e)),
                                          null != e._useUTC &&
                                              (t._useUTC = e._useUTC),
                                          (t._f = e._f[r]),
                                          Ct(t),
                                          f(t) &&
                                              ((o += d(t).charsLeftOver),
                                              (o +=
                                                  10 *
                                                  d(t).unusedTokens.length),
                                              (d(t).score = o),
                                              (null == i || o < i) &&
                                                  ((i = o), (n = t)));
                                  u(e, n || t);
                              })(e)
                            : c
                            ? Ct(e)
                            : (function (e) {
                                  var t = e._i;
                                  o(t)
                                      ? (e._d = new Date(n.now()))
                                      : a(t)
                                      ? (e._d = new Date(t.valueOf()))
                                      : 'string' == typeof t
                                      ? (function (e) {
                                            var t = _t.exec(e._i);
                                            null === t
                                                ? (wt(e),
                                                  !1 === e._isValid &&
                                                      (delete e._isValid,
                                                      Tt(e),
                                                      !1 === e._isValid &&
                                                          (delete e._isValid,
                                                          n.createFromInputFallback(
                                                              e
                                                          ))))
                                                : (e._d = new Date(+t[1]));
                                        })(e)
                                      : i(t)
                                      ? ((e._a = l(t.slice(0), function (e) {
                                            return parseInt(e, 10);
                                        })),
                                        pt(e))
                                      : r(t)
                                      ? (function (e) {
                                            if (!e._d) {
                                                var t = L(e._i);
                                                (e._a = l(
                                                    [
                                                        t.year,
                                                        t.month,
                                                        t.day || t.date,
                                                        t.hour,
                                                        t.minute,
                                                        t.second,
                                                        t.millisecond,
                                                    ],
                                                    function (e) {
                                                        return (
                                                            e && parseInt(e, 10)
                                                        );
                                                    }
                                                )),
                                                    pt(e);
                                            }
                                        })(e)
                                      : s(t)
                                      ? (e._d = new Date(t))
                                      : n.createFromInputFallback(e);
                              })(e),
                        f(e) || (e._d = null),
                        e))
        );
    }
    function Dt(e, t, n, o, s) {
        var a,
            l = {};
        return (
            (!0 !== n && !1 !== n) || ((o = n), (n = void 0)),
            ((r(e) &&
                (function (e) {
                    if (Object.getOwnPropertyNames)
                        return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                })(e)) ||
                (i(e) && 0 === e.length)) &&
                (e = void 0),
            (l._isAMomentObject = !0),
            (l._useUTC = l._isUTC = s),
            (l._l = n),
            (l._i = e),
            (l._f = t),
            (l._strict = o),
            (a = new y(dt(At(l))))._nextDay &&
                (a.add(1, 'd'), (a._nextDay = void 0)),
            a
        );
    }
    function Ot(e, t, n, i) {
        return Dt(e, t, n, i, !1);
    }
    (n.createFromInputFallback = S(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (e) {
            e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
        }
    )),
        (n.ISO_8601 = function () {}),
        (n.RFC_2822 = function () {});
    var kt = S(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var e = Ot.apply(null, arguments);
                return this.isValid() && e.isValid()
                    ? e < this
                        ? this
                        : e
                    : p();
            }
        ),
        It = S(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var e = Ot.apply(null, arguments);
                return this.isValid() && e.isValid()
                    ? e > this
                        ? this
                        : e
                    : p();
            }
        );
    function Nt(e, t) {
        var n, r;
        if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length)) return Ot();
        for (n = t[0], r = 1; r < t.length; ++r)
            (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
        return n;
    }
    var Mt = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];
    function Lt(e) {
        var t = L(e),
            n = t.year || 0,
            i = t.quarter || 0,
            r = t.month || 0,
            o = t.week || t.isoWeek || 0,
            s = t.day || 0,
            a = t.hour || 0,
            l = t.minute || 0,
            c = t.second || 0,
            u = t.millisecond || 0;
        (this._isValid = (function (e) {
            for (var t in e)
                if (-1 === Ce.call(Mt, t) || (null != e[t] && isNaN(e[t])))
                    return !1;
            for (var n = !1, i = 0; i < Mt.length; ++i)
                if (e[Mt[i]]) {
                    if (n) return !1;
                    parseFloat(e[Mt[i]]) !== w(e[Mt[i]]) && (n = !0);
                }
            return !0;
        })(t)),
            (this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60),
            (this._days = +s + 7 * o),
            (this._months = +r + 3 * i + 12 * n),
            (this._data = {}),
            (this._locale = ht()),
            this._bubble();
    }
    function Pt(e) {
        return e instanceof Lt;
    }
    function Ht(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function Rt(e, t) {
        F(e, 0, 0, function () {
            var e = this.utcOffset(),
                n = '+';
            return (
                e < 0 && ((e = -e), (n = '-')),
                n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
            );
        });
    }
    Rt('Z', ':'),
        Rt('ZZ', ''),
        le('Z', oe),
        le('ZZ', oe),
        de(['Z', 'ZZ'], function (e, t, n) {
            (n._useUTC = !0), (n._tzm = $t(oe, e));
        });
    var jt = /([\+\-]|\d\d)/gi;
    function $t(e, t) {
        var n = (t || '').match(e);
        if (null === n) return null;
        var i = ((n[n.length - 1] || []) + '').match(jt) || ['-', 0, 0],
            r = 60 * i[1] + w(i[2]);
        return 0 === r ? 0 : '+' === i[0] ? r : -r;
    }
    function Yt(e, t) {
        var i, r;
        return t._isUTC
            ? ((i = t.clone()),
              (r =
                  (b(e) || a(e) ? e.valueOf() : Ot(e).valueOf()) - i.valueOf()),
              i._d.setTime(i._d.valueOf() + r),
              n.updateOffset(i, !1),
              i)
            : Ot(e).local();
    }
    function Wt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
    }
    function Ft() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    n.updateOffset = function () {};
    var Ut = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Vt =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Bt(e, t) {
        var n,
            i,
            r,
            o,
            a,
            l,
            u = e,
            h = null;
        return (
            Pt(e)
                ? (u = { ms: e._milliseconds, d: e._days, M: e._months })
                : s(e)
                ? ((u = {}), t ? (u[t] = e) : (u.milliseconds = e))
                : (h = Ut.exec(e))
                ? ((n = '-' === h[1] ? -1 : 1),
                  (u = {
                      y: 0,
                      d: w(h[ve]) * n,
                      h: w(h[ye]) * n,
                      m: w(h[be]) * n,
                      s: w(h[_e]) * n,
                      ms: w(Ht(1e3 * h[we])) * n,
                  }))
                : (h = Vt.exec(e))
                ? (u = {
                      y: qt(h[2], (n = '-' === h[1] ? -1 : 1)),
                      M: qt(h[3], n),
                      w: qt(h[4], n),
                      d: qt(h[5], n),
                      h: qt(h[6], n),
                      m: qt(h[7], n),
                      s: qt(h[8], n),
                  })
                : null == u
                ? (u = {})
                : 'object' == typeof u &&
                  ('from' in u || 'to' in u) &&
                  ((o = Ot(u.from)),
                  (a = Ot(u.to)),
                  (r =
                      o.isValid() && a.isValid()
                          ? ((a = Yt(a, o)),
                            o.isBefore(a)
                                ? (l = Gt(o, a))
                                : (((l = Gt(a, o)).milliseconds =
                                      -l.milliseconds),
                                  (l.months = -l.months)),
                            l)
                          : { milliseconds: 0, months: 0 }),
                  ((u = {}).ms = r.milliseconds),
                  (u.M = r.months)),
            (i = new Lt(u)),
            Pt(e) && c(e, '_locale') && (i._locale = e._locale),
            i
        );
    }
    function qt(e, t) {
        var n = e && parseFloat(e.replace(',', '.'));
        return (isNaN(n) ? 0 : n) * t;
    }
    function Gt(e, t) {
        var n = {};
        return (
            (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e.clone().add(n.months, 'M').isAfter(t) && --n.months,
            (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
            n
        );
    }
    function zt(e, t) {
        return function (n, i) {
            var r;
            return (
                null === i ||
                    isNaN(+i) ||
                    (A(
                        t,
                        'moment().' +
                            t +
                            '(period, number) is deprecated. Please use moment().' +
                            t +
                            '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                    ),
                    (r = n),
                    (n = i),
                    (i = r)),
                Xt(this, Bt((n = 'string' == typeof n ? +n : n), i), e),
                this
            );
        };
    }
    function Xt(e, t, i, r) {
        var o = t._milliseconds,
            s = Ht(t._days),
            a = Ht(t._months);
        e.isValid() &&
            ((r = null == r || r),
            a && Pe(e, Oe(e, 'Month') + a * i),
            s && ke(e, 'Date', Oe(e, 'Date') + s * i),
            o && e._d.setTime(e._d.valueOf() + o * i),
            r && n.updateOffset(e, s || a));
    }
    (Bt.fn = Lt.prototype),
        (Bt.invalid = function () {
            return Bt(NaN);
        });
    var Qt = zt(1, 'add'),
        Kt = zt(-1, 'subtract');
    function Zt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            i = e.clone().add(n, 'months');
        return (
            -(
                n +
                (t - i < 0
                    ? (t - i) / (i - e.clone().add(n - 1, 'months'))
                    : (t - i) / (e.clone().add(n + 1, 'months') - i))
            ) || 0
        );
    }
    function Jt(e) {
        var t;
        return void 0 === e
            ? this._locale._abbr
            : (null != (t = ht(e)) && (this._locale = t), this);
    }
    (n.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
        (n.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
    var en = S(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (e) {
            return void 0 === e ? this.localeData() : this.locale(e);
        }
    );
    function tn() {
        return this._locale;
    }
    var nn = 126227808e5;
    function rn(e, t) {
        return ((e % t) + t) % t;
    }
    function on(e, t, n) {
        return e < 100 && e >= 0
            ? new Date(e + 400, t, n) - nn
            : new Date(e, t, n).valueOf();
    }
    function sn(e, t, n) {
        return e < 100 && e >= 0
            ? Date.UTC(e + 400, t, n) - nn
            : Date.UTC(e, t, n);
    }
    function an(e, t) {
        F(0, [e, e.length], 0, t);
    }
    function ln(e, t, n, i, r) {
        var o;
        return null == e
            ? Ue(this, i, r).year
            : (t > (o = Ve(e, i, r)) && (t = o),
              function (e, t, n, i, r) {
                  var o = Fe(e, t, n, i, r),
                      s = Ye(o.year, 0, o.dayOfYear);
                  return (
                      this.year(s.getUTCFullYear()),
                      this.month(s.getUTCMonth()),
                      this.date(s.getUTCDate()),
                      this
                  );
              }.call(this, e, t, n, i, r));
    }
    F(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    }),
        F(0, ['GG', 2], 0, function () {
            return this.isoWeekYear() % 100;
        }),
        an('gggg', 'weekYear'),
        an('ggggg', 'weekYear'),
        an('GGGG', 'isoWeekYear'),
        an('GGGGG', 'isoWeekYear'),
        N('weekYear', 'gg'),
        N('isoWeekYear', 'GG'),
        H('weekYear', 1),
        H('isoWeekYear', 1),
        le('G', ie),
        le('g', ie),
        le('GG', Q, q),
        le('gg', Q, q),
        le('GGGG', ee, z),
        le('gggg', ee, z),
        le('GGGGG', te, X),
        le('ggggg', te, X),
        fe(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, i) {
            t[i.substr(0, 2)] = w(e);
        }),
        fe(['gg', 'GG'], function (e, t, i, r) {
            t[r] = n.parseTwoDigitYear(e);
        }),
        F('Q', 0, 'Qo', 'quarter'),
        N('quarter', 'Q'),
        H('quarter', 7),
        le('Q', B),
        de('Q', function (e, t) {
            t[ge] = 3 * (w(e) - 1);
        }),
        F('D', ['DD', 2], 'Do', 'date'),
        N('date', 'D'),
        H('date', 9),
        le('D', Q),
        le('DD', Q, q),
        le('Do', function (e, t) {
            return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
        }),
        de(['D', 'DD'], ve),
        de('Do', function (e, t) {
            t[ve] = w(e.match(Q)[0]);
        });
    var cn = De('Date', !0);
    F('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
        N('dayOfYear', 'DDD'),
        H('dayOfYear', 4),
        le('DDD', J),
        le('DDDD', G),
        de(['DDD', 'DDDD'], function (e, t, n) {
            n._dayOfYear = w(e);
        }),
        F('m', ['mm', 2], 0, 'minute'),
        N('minute', 'm'),
        H('minute', 14),
        le('m', Q),
        le('mm', Q, q),
        de(['m', 'mm'], be);
    var un = De('Minutes', !1);
    F('s', ['ss', 2], 0, 'second'),
        N('second', 's'),
        H('second', 15),
        le('s', Q),
        le('ss', Q, q),
        de(['s', 'ss'], _e);
    var hn,
        dn = De('Seconds', !1);
    for (
        F('S', 0, 0, function () {
            return ~~(this.millisecond() / 100);
        }),
            F(0, ['SS', 2], 0, function () {
                return ~~(this.millisecond() / 10);
            }),
            F(0, ['SSS', 3], 0, 'millisecond'),
            F(0, ['SSSS', 4], 0, function () {
                return 10 * this.millisecond();
            }),
            F(0, ['SSSSS', 5], 0, function () {
                return 100 * this.millisecond();
            }),
            F(0, ['SSSSSS', 6], 0, function () {
                return 1e3 * this.millisecond();
            }),
            F(0, ['SSSSSSS', 7], 0, function () {
                return 1e4 * this.millisecond();
            }),
            F(0, ['SSSSSSSS', 8], 0, function () {
                return 1e5 * this.millisecond();
            }),
            F(0, ['SSSSSSSSS', 9], 0, function () {
                return 1e6 * this.millisecond();
            }),
            N('millisecond', 'ms'),
            H('millisecond', 16),
            le('S', J, B),
            le('SS', J, q),
            le('SSS', J, G),
            hn = 'SSSS';
        hn.length <= 9;
        hn += 'S'
    )
        le(hn, ne);
    function fn(e, t) {
        t[we] = w(1e3 * ('0.' + e));
    }
    for (hn = 'S'; hn.length <= 9; hn += 'S') de(hn, fn);
    var pn = De('Milliseconds', !1);
    F('z', 0, 0, 'zoneAbbr'), F('zz', 0, 0, 'zoneName');
    var mn = y.prototype;
    function gn(e) {
        return e;
    }
    (mn.add = Qt),
        (mn.calendar = function (e, t) {
            var i = e || Ot(),
                r = Yt(i, this).startOf('day'),
                o = n.calendarFormat(this, r) || 'sameElse',
                s = t && (D(t[o]) ? t[o].call(this, i) : t[o]);
            return this.format(s || this.localeData().calendar(o, this, Ot(i)));
        }),
        (mn.clone = function () {
            return new y(this);
        }),
        (mn.diff = function (e, t, n) {
            var i, r, o;
            if (!this.isValid()) return NaN;
            if (!(i = Yt(e, this)).isValid()) return NaN;
            switch (
                ((r = 6e4 * (i.utcOffset() - this.utcOffset())), (t = M(t)))
            ) {
                case 'year':
                    o = Zt(this, i) / 12;
                    break;
                case 'month':
                    o = Zt(this, i);
                    break;
                case 'quarter':
                    o = Zt(this, i) / 3;
                    break;
                case 'second':
                    o = (this - i) / 1e3;
                    break;
                case 'minute':
                    o = (this - i) / 6e4;
                    break;
                case 'hour':
                    o = (this - i) / 36e5;
                    break;
                case 'day':
                    o = (this - i - r) / 864e5;
                    break;
                case 'week':
                    o = (this - i - r) / 6048e5;
                    break;
                default:
                    o = this - i;
            }
            return n ? o : _(o);
        }),
        (mn.endOf = function (e) {
            var t;
            if (void 0 === (e = M(e)) || 'millisecond' === e || !this.isValid())
                return this;
            var i = this._isUTC ? sn : on;
            switch (e) {
                case 'year':
                    t = i(this.year() + 1, 0, 1) - 1;
                    break;
                case 'quarter':
                    t =
                        i(
                            this.year(),
                            this.month() - (this.month() % 3) + 3,
                            1
                        ) - 1;
                    break;
                case 'month':
                    t = i(this.year(), this.month() + 1, 1) - 1;
                    break;
                case 'week':
                    t =
                        i(
                            this.year(),
                            this.month(),
                            this.date() - this.weekday() + 7
                        ) - 1;
                    break;
                case 'isoWeek':
                    t =
                        i(
                            this.year(),
                            this.month(),
                            this.date() - (this.isoWeekday() - 1) + 7
                        ) - 1;
                    break;
                case 'day':
                case 'date':
                    t = i(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case 'hour':
                    (t = this._d.valueOf()),
                        (t +=
                            36e5 -
                            rn(
                                t + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
                                36e5
                            ) -
                            1);
                    break;
                case 'minute':
                    (t = this._d.valueOf()), (t += 6e4 - rn(t, 6e4) - 1);
                    break;
                case 'second':
                    (t = this._d.valueOf()), (t += 1e3 - rn(t, 1e3) - 1);
            }
            return this._d.setTime(t), n.updateOffset(this, !0), this;
        }),
        (mn.format = function (e) {
            e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
            var t = U(this, e);
            return this.localeData().postformat(t);
        }),
        (mn.from = function (e, t) {
            return this.isValid() && ((b(e) && e.isValid()) || Ot(e).isValid())
                ? Bt({ to: this, from: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
        }),
        (mn.fromNow = function (e) {
            return this.from(Ot(), e);
        }),
        (mn.to = function (e, t) {
            return this.isValid() && ((b(e) && e.isValid()) || Ot(e).isValid())
                ? Bt({ from: this, to: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
        }),
        (mn.toNow = function (e) {
            return this.to(Ot(), e);
        }),
        (mn.get = function (e) {
            return D(this[(e = M(e))]) ? this[e]() : this;
        }),
        (mn.invalidAt = function () {
            return d(this).overflow;
        }),
        (mn.isAfter = function (e, t) {
            var n = b(e) ? e : Ot(e);
            return (
                !(!this.isValid() || !n.isValid()) &&
                ('millisecond' === (t = M(t) || 'millisecond')
                    ? this.valueOf() > n.valueOf()
                    : n.valueOf() < this.clone().startOf(t).valueOf())
            );
        }),
        (mn.isBefore = function (e, t) {
            var n = b(e) ? e : Ot(e);
            return (
                !(!this.isValid() || !n.isValid()) &&
                ('millisecond' === (t = M(t) || 'millisecond')
                    ? this.valueOf() < n.valueOf()
                    : this.clone().endOf(t).valueOf() < n.valueOf())
            );
        }),
        (mn.isBetween = function (e, t, n, i) {
            var r = b(e) ? e : Ot(e),
                o = b(t) ? t : Ot(t);
            return (
                !!(this.isValid() && r.isValid() && o.isValid()) &&
                ('(' === (i = i || '()')[0]
                    ? this.isAfter(r, n)
                    : !this.isBefore(r, n)) &&
                (')' === i[1] ? this.isBefore(o, n) : !this.isAfter(o, n))
            );
        }),
        (mn.isSame = function (e, t) {
            var n,
                i = b(e) ? e : Ot(e);
            return (
                !(!this.isValid() || !i.isValid()) &&
                ('millisecond' === (t = M(t) || 'millisecond')
                    ? this.valueOf() === i.valueOf()
                    : ((n = i.valueOf()),
                      this.clone().startOf(t).valueOf() <= n &&
                          n <= this.clone().endOf(t).valueOf()))
            );
        }),
        (mn.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
        }),
        (mn.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
        }),
        (mn.isValid = function () {
            return f(this);
        }),
        (mn.lang = en),
        (mn.locale = Jt),
        (mn.localeData = tn),
        (mn.max = It),
        (mn.min = kt),
        (mn.parsingFlags = function () {
            return u({}, d(this));
        }),
        (mn.set = function (e, t) {
            if ('object' == typeof e)
                for (
                    var n = (function (e) {
                            var t = [];
                            for (var n in e)
                                t.push({ unit: n, priority: P[n] });
                            return (
                                t.sort(function (e, t) {
                                    return e.priority - t.priority;
                                }),
                                t
                            );
                        })((e = L(e))),
                        i = 0;
                    i < n.length;
                    i++
                )
                    this[n[i].unit](e[n[i].unit]);
            else if (D(this[(e = M(e))])) return this[e](t);
            return this;
        }),
        (mn.startOf = function (e) {
            var t;
            if (void 0 === (e = M(e)) || 'millisecond' === e || !this.isValid())
                return this;
            var i = this._isUTC ? sn : on;
            switch (e) {
                case 'year':
                    t = i(this.year(), 0, 1);
                    break;
                case 'quarter':
                    t = i(this.year(), this.month() - (this.month() % 3), 1);
                    break;
                case 'month':
                    t = i(this.year(), this.month(), 1);
                    break;
                case 'week':
                    t = i(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday()
                    );
                    break;
                case 'isoWeek':
                    t = i(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1)
                    );
                    break;
                case 'day':
                case 'date':
                    t = i(this.year(), this.month(), this.date());
                    break;
                case 'hour':
                    (t = this._d.valueOf()),
                        (t -= rn(
                            t + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
                            36e5
                        ));
                    break;
                case 'minute':
                    (t = this._d.valueOf()), (t -= rn(t, 6e4));
                    break;
                case 'second':
                    (t = this._d.valueOf()), (t -= rn(t, 1e3));
            }
            return this._d.setTime(t), n.updateOffset(this, !0), this;
        }),
        (mn.subtract = Kt),
        (mn.toArray = function () {
            var e = this;
            return [
                e.year(),
                e.month(),
                e.date(),
                e.hour(),
                e.minute(),
                e.second(),
                e.millisecond(),
            ];
        }),
        (mn.toObject = function () {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
            };
        }),
        (mn.toDate = function () {
            return new Date(this.valueOf());
        }),
        (mn.toISOString = function (e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
                n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
                ? U(
                      n,
                      t
                          ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                          : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
                  )
                : D(Date.prototype.toISOString)
                ? t
                    ? this.toDate().toISOString()
                    : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                          .toISOString()
                          .replace('Z', U(n, 'Z'))
                : U(
                      n,
                      t
                          ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                          : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
                  );
        }),
        (mn.inspect = function () {
            if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
            var e = 'moment',
                t = '';
            this.isLocal() ||
                ((e =
                    0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'),
                (t = 'Z'));
            var n = '[' + e + '("]',
                i = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
            return this.format(n + i + '-MM-DD[T]HH:mm:ss.SSS' + t + '[")]');
        }),
        (mn.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
        }),
        (mn.toString = function () {
            return this.clone()
                .locale('en')
                .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        }),
        (mn.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
        }),
        (mn.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
        }),
        (mn.creationData = function () {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
            };
        }),
        (mn.year = Ae),
        (mn.isLeapYear = function () {
            return Te(this.year());
        }),
        (mn.weekYear = function (e) {
            return ln.call(
                this,
                e,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy
            );
        }),
        (mn.isoWeekYear = function (e) {
            return ln.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }),
        (mn.quarter = mn.quarters =
            function (e) {
                return null == e
                    ? Math.ceil((this.month() + 1) / 3)
                    : this.month(3 * (e - 1) + (this.month() % 3));
            }),
        (mn.month = He),
        (mn.daysInMonth = function () {
            return Ie(this.year(), this.month());
        }),
        (mn.week = mn.weeks =
            function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), 'd');
            }),
        (mn.isoWeek = mn.isoWeeks =
            function (e) {
                var t = Ue(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), 'd');
            }),
        (mn.weeksInYear = function () {
            var e = this.localeData()._week;
            return Ve(this.year(), e.dow, e.doy);
        }),
        (mn.isoWeeksInYear = function () {
            return Ve(this.year(), 1, 4);
        }),
        (mn.date = cn),
        (mn.day = mn.days =
            function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e
                    ? ((e = (function (e, t) {
                          return 'string' != typeof e
                              ? e
                              : isNaN(e)
                              ? 'number' == typeof (e = t.weekdaysParse(e))
                                  ? e
                                  : null
                              : parseInt(e, 10);
                      })(e, this.localeData())),
                      this.add(e - t, 'd'))
                    : t;
            }),
        (mn.weekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, 'd');
        }),
        (mn.isoWeekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var t = (function (e, t) {
                    return 'string' == typeof e
                        ? t.weekdaysParse(e) % 7 || 7
                        : isNaN(e)
                        ? null
                        : e;
                })(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7);
            }
            return this.day() || 7;
        }),
        (mn.dayOfYear = function (e) {
            var t =
                Math.round(
                    (this.clone().startOf('day') -
                        this.clone().startOf('year')) /
                        864e5
                ) + 1;
            return null == e ? t : this.add(e - t, 'd');
        }),
        (mn.hour = mn.hours = it),
        (mn.minute = mn.minutes = un),
        (mn.second = mn.seconds = dn),
        (mn.millisecond = mn.milliseconds = pn),
        (mn.utcOffset = function (e, t, i) {
            var r,
                o = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                if ('string' == typeof e) {
                    if (null === (e = $t(oe, e))) return this;
                } else Math.abs(e) < 16 && !i && (e *= 60);
                return (
                    !this._isUTC && t && (r = Wt(this)),
                    (this._offset = e),
                    (this._isUTC = !0),
                    null != r && this.add(r, 'm'),
                    o !== e &&
                        (!t || this._changeInProgress
                            ? Xt(this, Bt(e - o, 'm'), 1, !1)
                            : this._changeInProgress ||
                              ((this._changeInProgress = !0),
                              n.updateOffset(this, !0),
                              (this._changeInProgress = null))),
                    this
                );
            }
            return this._isUTC ? o : Wt(this);
        }),
        (mn.utc = function (e) {
            return this.utcOffset(0, e);
        }),
        (mn.local = function (e) {
            return (
                this._isUTC &&
                    (this.utcOffset(0, e),
                    (this._isUTC = !1),
                    e && this.subtract(Wt(this), 'm')),
                this
            );
        }),
        (mn.parseZone = function () {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ('string' == typeof this._i) {
                var e = $t(re, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
        }),
        (mn.hasAlignedHourOffset = function (e) {
            return (
                !!this.isValid() &&
                ((e = e ? Ot(e).utcOffset() : 0),
                (this.utcOffset() - e) % 60 == 0)
            );
        }),
        (mn.isDST = function () {
            return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
            );
        }),
        (mn.isLocal = function () {
            return !!this.isValid() && !this._isUTC;
        }),
        (mn.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC;
        }),
        (mn.isUtc = Ft),
        (mn.isUTC = Ft),
        (mn.zoneAbbr = function () {
            return this._isUTC ? 'UTC' : '';
        }),
        (mn.zoneName = function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        }),
        (mn.dates = S('dates accessor is deprecated. Use date instead.', cn)),
        (mn.months = S('months accessor is deprecated. Use month instead', He)),
        (mn.years = S('years accessor is deprecated. Use year instead', Ae)),
        (mn.zone = S(
            'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
            function (e, t) {
                return null != e
                    ? ('string' != typeof e && (e = -e),
                      this.utcOffset(e, t),
                      this)
                    : -this.utcOffset();
            }
        )),
        (mn.isDSTShifted = S(
            'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
            function () {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if ((g(e, this), (e = At(e))._a)) {
                    var t = e._isUTC ? h(e._a) : Ot(e._a);
                    this._isDSTShifted =
                        this.isValid() && x(e._a, t.toArray()) > 0;
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
            }
        ));
    var vn = k.prototype;
    function yn(e, t, n, i) {
        var r = ht(),
            o = h().set(i, t);
        return r[n](o, e);
    }
    function bn(e, t, n) {
        if ((s(e) && ((t = e), (e = void 0)), (e = e || ''), null != t))
            return yn(e, t, n, 'month');
        var i,
            r = [];
        for (i = 0; i < 12; i++) r[i] = yn(e, i, n, 'month');
        return r;
    }
    function _n(e, t, n, i) {
        'boolean' == typeof e
            ? (s(t) && ((n = t), (t = void 0)), (t = t || ''))
            : ((n = t = e),
              (e = !1),
              s(t) && ((n = t), (t = void 0)),
              (t = t || ''));
        var r,
            o = ht(),
            a = e ? o._week.dow : 0;
        if (null != n) return yn(t, (n + a) % 7, i, 'day');
        var l = [];
        for (r = 0; r < 7; r++) l[r] = yn(t, (r + a) % 7, i, 'day');
        return l;
    }
    (vn.calendar = function (e, t, n) {
        var i = this._calendar[e] || this._calendar.sameElse;
        return D(i) ? i.call(t, n) : i;
    }),
        (vn.longDateFormat = function (e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n
                ? t
                : ((this._longDateFormat[e] = n.replace(
                      /MMMM|MM|DD|dddd/g,
                      function (e) {
                          return e.slice(1);
                      }
                  )),
                  this._longDateFormat[e]);
        }),
        (vn.invalidDate = function () {
            return this._invalidDate;
        }),
        (vn.ordinal = function (e) {
            return this._ordinal.replace('%d', e);
        }),
        (vn.preparse = gn),
        (vn.postformat = gn),
        (vn.relativeTime = function (e, t, n, i) {
            var r = this._relativeTime[n];
            return D(r) ? r(e, t, n, i) : r.replace(/%d/i, e);
        }),
        (vn.pastFuture = function (e, t) {
            var n = this._relativeTime[e > 0 ? 'future' : 'past'];
            return D(n) ? n(t) : n.replace(/%s/i, t);
        }),
        (vn.set = function (e) {
            var t, n;
            for (n in e) D((t = e[n])) ? (this[n] = t) : (this['_' + n] = t);
            (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                    (this._dayOfMonthOrdinalParse.source ||
                        this._ordinalParse.source) +
                        '|' +
                        /\d{1,2}/.source
                ));
        }),
        (vn.months = function (e, t) {
            return e
                ? i(this._months)
                    ? this._months[e.month()]
                    : this._months[
                          (this._months.isFormat || Ne).test(t)
                              ? 'format'
                              : 'standalone'
                      ][e.month()]
                : i(this._months)
                ? this._months
                : this._months.standalone;
        }),
        (vn.monthsShort = function (e, t) {
            return e
                ? i(this._monthsShort)
                    ? this._monthsShort[e.month()]
                    : this._monthsShort[Ne.test(t) ? 'format' : 'standalone'][
                          e.month()
                      ]
                : i(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }),
        (vn.monthsParse = function (e, t, n) {
            var i, r, o;
            if (this._monthsParseExact)
                return function (e, t, n) {
                    var i,
                        r,
                        o,
                        s = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (
                            this._monthsParse = [],
                                this._longMonthsParse = [],
                                this._shortMonthsParse = [],
                                i = 0;
                            i < 12;
                            ++i
                        )
                            (o = h([2e3, i])),
                                (this._shortMonthsParse[i] = this.monthsShort(
                                    o,
                                    ''
                                ).toLocaleLowerCase()),
                                (this._longMonthsParse[i] = this.months(
                                    o,
                                    ''
                                ).toLocaleLowerCase());
                    return n
                        ? 'MMM' === t
                            ? -1 !== (r = Ce.call(this._shortMonthsParse, s))
                                ? r
                                : null
                            : -1 !== (r = Ce.call(this._longMonthsParse, s))
                            ? r
                            : null
                        : 'MMM' === t
                        ? -1 !== (r = Ce.call(this._shortMonthsParse, s))
                            ? r
                            : -1 !== (r = Ce.call(this._longMonthsParse, s))
                            ? r
                            : null
                        : -1 !== (r = Ce.call(this._longMonthsParse, s))
                        ? r
                        : -1 !== (r = Ce.call(this._shortMonthsParse, s))
                        ? r
                        : null;
                }.call(this, e, t, n);
            for (
                this._monthsParse ||
                    ((this._monthsParse = []),
                    (this._longMonthsParse = []),
                    (this._shortMonthsParse = [])),
                    i = 0;
                i < 12;
                i++
            ) {
                if (
                    ((r = h([2e3, i])),
                    n &&
                        !this._longMonthsParse[i] &&
                        ((this._longMonthsParse[i] = new RegExp(
                            '^' + this.months(r, '').replace('.', '') + '$',
                            'i'
                        )),
                        (this._shortMonthsParse[i] = new RegExp(
                            '^' +
                                this.monthsShort(r, '').replace('.', '') +
                                '$',
                            'i'
                        ))),
                    n ||
                        this._monthsParse[i] ||
                        ((o =
                            '^' +
                            this.months(r, '') +
                            '|^' +
                            this.monthsShort(r, '')),
                        (this._monthsParse[i] = new RegExp(
                            o.replace('.', ''),
                            'i'
                        ))),
                    n && 'MMMM' === t && this._longMonthsParse[i].test(e))
                )
                    return i;
                if (n && 'MMM' === t && this._shortMonthsParse[i].test(e))
                    return i;
                if (!n && this._monthsParse[i].test(e)) return i;
            }
        }),
        (vn.monthsRegex = function (e) {
            return this._monthsParseExact
                ? (c(this, '_monthsRegex') || $e.call(this),
                  e ? this._monthsStrictRegex : this._monthsRegex)
                : (c(this, '_monthsRegex') || (this._monthsRegex = je),
                  this._monthsStrictRegex && e
                      ? this._monthsStrictRegex
                      : this._monthsRegex);
        }),
        (vn.monthsShortRegex = function (e) {
            return this._monthsParseExact
                ? (c(this, '_monthsRegex') || $e.call(this),
                  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (c(this, '_monthsShortRegex') ||
                      (this._monthsShortRegex = Re),
                  this._monthsShortStrictRegex && e
                      ? this._monthsShortStrictRegex
                      : this._monthsShortRegex);
        }),
        (vn.week = function (e) {
            return Ue(e, this._week.dow, this._week.doy).week;
        }),
        (vn.firstDayOfYear = function () {
            return this._week.doy;
        }),
        (vn.firstDayOfWeek = function () {
            return this._week.dow;
        }),
        (vn.weekdays = function (e, t) {
            var n = i(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                      e && !0 !== e && this._weekdays.isFormat.test(t)
                          ? 'format'
                          : 'standalone'
                  ];
            return !0 === e ? Be(n, this._week.dow) : e ? n[e.day()] : n;
        }),
        (vn.weekdaysMin = function (e) {
            return !0 === e
                ? Be(this._weekdaysMin, this._week.dow)
                : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin;
        }),
        (vn.weekdaysShort = function (e) {
            return !0 === e
                ? Be(this._weekdaysShort, this._week.dow)
                : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort;
        }),
        (vn.weekdaysParse = function (e, t, n) {
            var i, r, o;
            if (this._weekdaysParseExact)
                return function (e, t, n) {
                    var i,
                        r,
                        o,
                        s = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (
                            this._weekdaysParse = [],
                                this._shortWeekdaysParse = [],
                                this._minWeekdaysParse = [],
                                i = 0;
                            i < 7;
                            ++i
                        )
                            (o = h([2e3, 1]).day(i)),
                                (this._minWeekdaysParse[i] = this.weekdaysMin(
                                    o,
                                    ''
                                ).toLocaleLowerCase()),
                                (this._shortWeekdaysParse[i] =
                                    this.weekdaysShort(
                                        o,
                                        ''
                                    ).toLocaleLowerCase()),
                                (this._weekdaysParse[i] = this.weekdays(
                                    o,
                                    ''
                                ).toLocaleLowerCase());
                    return n
                        ? 'dddd' === t
                            ? -1 !== (r = Ce.call(this._weekdaysParse, s))
                                ? r
                                : null
                            : 'ddd' === t
                            ? -1 !== (r = Ce.call(this._shortWeekdaysParse, s))
                                ? r
                                : null
                            : -1 !== (r = Ce.call(this._minWeekdaysParse, s))
                            ? r
                            : null
                        : 'dddd' === t
                        ? -1 !== (r = Ce.call(this._weekdaysParse, s))
                            ? r
                            : -1 !== (r = Ce.call(this._shortWeekdaysParse, s))
                            ? r
                            : -1 !== (r = Ce.call(this._minWeekdaysParse, s))
                            ? r
                            : null
                        : 'ddd' === t
                        ? -1 !== (r = Ce.call(this._shortWeekdaysParse, s))
                            ? r
                            : -1 !== (r = Ce.call(this._weekdaysParse, s))
                            ? r
                            : -1 !== (r = Ce.call(this._minWeekdaysParse, s))
                            ? r
                            : null
                        : -1 !== (r = Ce.call(this._minWeekdaysParse, s))
                        ? r
                        : -1 !== (r = Ce.call(this._weekdaysParse, s))
                        ? r
                        : -1 !== (r = Ce.call(this._shortWeekdaysParse, s))
                        ? r
                        : null;
                }.call(this, e, t, n);
            for (
                this._weekdaysParse ||
                    ((this._weekdaysParse = []),
                    (this._minWeekdaysParse = []),
                    (this._shortWeekdaysParse = []),
                    (this._fullWeekdaysParse = [])),
                    i = 0;
                i < 7;
                i++
            ) {
                if (
                    ((r = h([2e3, 1]).day(i)),
                    n &&
                        !this._fullWeekdaysParse[i] &&
                        ((this._fullWeekdaysParse[i] = new RegExp(
                            '^' +
                                this.weekdays(r, '').replace('.', '\\.?') +
                                '$',
                            'i'
                        )),
                        (this._shortWeekdaysParse[i] = new RegExp(
                            '^' +
                                this.weekdaysShort(r, '').replace('.', '\\.?') +
                                '$',
                            'i'
                        )),
                        (this._minWeekdaysParse[i] = new RegExp(
                            '^' +
                                this.weekdaysMin(r, '').replace('.', '\\.?') +
                                '$',
                            'i'
                        ))),
                    this._weekdaysParse[i] ||
                        ((o =
                            '^' +
                            this.weekdays(r, '') +
                            '|^' +
                            this.weekdaysShort(r, '') +
                            '|^' +
                            this.weekdaysMin(r, '')),
                        (this._weekdaysParse[i] = new RegExp(
                            o.replace('.', ''),
                            'i'
                        ))),
                    n && 'dddd' === t && this._fullWeekdaysParse[i].test(e))
                )
                    return i;
                if (n && 'ddd' === t && this._shortWeekdaysParse[i].test(e))
                    return i;
                if (n && 'dd' === t && this._minWeekdaysParse[i].test(e))
                    return i;
                if (!n && this._weekdaysParse[i].test(e)) return i;
            }
        }),
        (vn.weekdaysRegex = function (e) {
            return this._weekdaysParseExact
                ? (c(this, '_weekdaysRegex') || Ze.call(this),
                  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (c(this, '_weekdaysRegex') || (this._weekdaysRegex = Xe),
                  this._weekdaysStrictRegex && e
                      ? this._weekdaysStrictRegex
                      : this._weekdaysRegex);
        }),
        (vn.weekdaysShortRegex = function (e) {
            return this._weekdaysParseExact
                ? (c(this, '_weekdaysRegex') || Ze.call(this),
                  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (c(this, '_weekdaysShortRegex') ||
                      (this._weekdaysShortRegex = Qe),
                  this._weekdaysShortStrictRegex && e
                      ? this._weekdaysShortStrictRegex
                      : this._weekdaysShortRegex);
        }),
        (vn.weekdaysMinRegex = function (e) {
            return this._weekdaysParseExact
                ? (c(this, '_weekdaysRegex') || Ze.call(this),
                  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (c(this, '_weekdaysMinRegex') ||
                      (this._weekdaysMinRegex = Ke),
                  this._weekdaysMinStrictRegex && e
                      ? this._weekdaysMinStrictRegex
                      : this._weekdaysMinRegex);
        }),
        (vn.isPM = function (e) {
            return 'p' === (e + '').toLowerCase().charAt(0);
        }),
        (vn.meridiem = function (e, t, n) {
            return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
        }),
        ct('en', {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10;
                return (
                    e +
                    (1 === w((e % 100) / 10)
                        ? 'th'
                        : 1 === t
                        ? 'st'
                        : 2 === t
                        ? 'nd'
                        : 3 === t
                        ? 'rd'
                        : 'th')
                );
            },
        }),
        (n.lang = S(
            'moment.lang is deprecated. Use moment.locale instead.',
            ct
        )),
        (n.langData = S(
            'moment.langData is deprecated. Use moment.localeData instead.',
            ht
        ));
    var wn = Math.abs;
    function xn(e, t, n, i) {
        var r = Bt(t, n);
        return (
            (e._milliseconds += i * r._milliseconds),
            (e._days += i * r._days),
            (e._months += i * r._months),
            e._bubble()
        );
    }
    function En(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function Sn(e) {
        return (4800 * e) / 146097;
    }
    function Tn(e) {
        return (146097 * e) / 4800;
    }
    function Cn(e) {
        return function () {
            return this.as(e);
        };
    }
    var An = Cn('ms'),
        Dn = Cn('s'),
        On = Cn('m'),
        kn = Cn('h'),
        In = Cn('d'),
        Nn = Cn('w'),
        Mn = Cn('M'),
        Ln = Cn('Q'),
        Pn = Cn('y');
    function Hn(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN;
        };
    }
    var Rn = Hn('milliseconds'),
        jn = Hn('seconds'),
        $n = Hn('minutes'),
        Yn = Hn('hours'),
        Wn = Hn('days'),
        Fn = Hn('months'),
        Un = Hn('years'),
        Vn = Math.round,
        Bn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
        qn = Math.abs;
    function Gn(e) {
        return (e > 0) - (e < 0) || +e;
    }
    function zn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
            t,
            n = qn(this._milliseconds) / 1e3,
            i = qn(this._days),
            r = qn(this._months);
        (e = _(n / 60)), (t = _(e / 60)), (n %= 60), (e %= 60);
        var o = _(r / 12),
            s = (r %= 12),
            a = i,
            l = t,
            c = e,
            u = n ? n.toFixed(3).replace(/\.?0+$/, '') : '',
            h = this.asSeconds();
        if (!h) return 'P0D';
        var d = h < 0 ? '-' : '',
            f = Gn(this._months) !== Gn(h) ? '-' : '',
            p = Gn(this._days) !== Gn(h) ? '-' : '',
            m = Gn(this._milliseconds) !== Gn(h) ? '-' : '';
        return (
            d +
            'P' +
            (o ? f + o + 'Y' : '') +
            (s ? f + s + 'M' : '') +
            (a ? p + a + 'D' : '') +
            (l || c || u ? 'T' : '') +
            (l ? m + l + 'H' : '') +
            (c ? m + c + 'M' : '') +
            (u ? m + u + 'S' : '')
        );
    }
    var Xn = Lt.prototype;
    return (
        (Xn.isValid = function () {
            return this._isValid;
        }),
        (Xn.abs = function () {
            var e = this._data;
            return (
                (this._milliseconds = wn(this._milliseconds)),
                (this._days = wn(this._days)),
                (this._months = wn(this._months)),
                (e.milliseconds = wn(e.milliseconds)),
                (e.seconds = wn(e.seconds)),
                (e.minutes = wn(e.minutes)),
                (e.hours = wn(e.hours)),
                (e.months = wn(e.months)),
                (e.years = wn(e.years)),
                this
            );
        }),
        (Xn.add = function (e, t) {
            return xn(this, e, t, 1);
        }),
        (Xn.subtract = function (e, t) {
            return xn(this, e, t, -1);
        }),
        (Xn.as = function (e) {
            if (!this.isValid()) return NaN;
            var t,
                n,
                i = this._milliseconds;
            if ('month' === (e = M(e)) || 'quarter' === e || 'year' === e)
                switch (
                    ((n = this._months + Sn((t = this._days + i / 864e5))), e)
                ) {
                    case 'month':
                        return n;
                    case 'quarter':
                        return n / 3;
                    case 'year':
                        return n / 12;
                }
            else
                switch (((t = this._days + Math.round(Tn(this._months))), e)) {
                    case 'week':
                        return t / 7 + i / 6048e5;
                    case 'day':
                        return t + i / 864e5;
                    case 'hour':
                        return 24 * t + i / 36e5;
                    case 'minute':
                        return 1440 * t + i / 6e4;
                    case 'second':
                        return 86400 * t + i / 1e3;
                    case 'millisecond':
                        return Math.floor(864e5 * t) + i;
                    default:
                        throw new Error('Unknown unit ' + e);
                }
        }),
        (Xn.asMilliseconds = An),
        (Xn.asSeconds = Dn),
        (Xn.asMinutes = On),
        (Xn.asHours = kn),
        (Xn.asDays = In),
        (Xn.asWeeks = Nn),
        (Xn.asMonths = Mn),
        (Xn.asQuarters = Ln),
        (Xn.asYears = Pn),
        (Xn.valueOf = function () {
            return this.isValid()
                ? this._milliseconds +
                      864e5 * this._days +
                      (this._months % 12) * 2592e6 +
                      31536e6 * w(this._months / 12)
                : NaN;
        }),
        (Xn._bubble = function () {
            var e,
                t,
                n,
                i,
                r,
                o = this._milliseconds,
                s = this._days,
                a = this._months,
                l = this._data;
            return (
                (o >= 0 && s >= 0 && a >= 0) ||
                    (o <= 0 && s <= 0 && a <= 0) ||
                    ((o += 864e5 * En(Tn(a) + s)), (s = 0), (a = 0)),
                (l.milliseconds = o % 1e3),
                (e = _(o / 1e3)),
                (l.seconds = e % 60),
                (t = _(e / 60)),
                (l.minutes = t % 60),
                (n = _(t / 60)),
                (l.hours = n % 24),
                (s += _(n / 24)),
                (a += r = _(Sn(s))),
                (s -= En(Tn(r))),
                (i = _(a / 12)),
                (a %= 12),
                (l.days = s),
                (l.months = a),
                (l.years = i),
                this
            );
        }),
        (Xn.clone = function () {
            return Bt(this);
        }),
        (Xn.get = function (e) {
            return (e = M(e)), this.isValid() ? this[e + 's']() : NaN;
        }),
        (Xn.milliseconds = Rn),
        (Xn.seconds = jn),
        (Xn.minutes = $n),
        (Xn.hours = Yn),
        (Xn.days = Wn),
        (Xn.weeks = function () {
            return _(this.days() / 7);
        }),
        (Xn.months = Fn),
        (Xn.years = Un),
        (Xn.humanize = function (e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t = this.localeData(),
                n = (function (e, t, n) {
                    var i = Bt(e).abs(),
                        r = Vn(i.as('s')),
                        o = Vn(i.as('m')),
                        s = Vn(i.as('h')),
                        a = Vn(i.as('d')),
                        l = Vn(i.as('M')),
                        c = Vn(i.as('y')),
                        u = (r <= Bn.ss && ['s', r]) ||
                            (r < Bn.s && ['ss', r]) ||
                            (o <= 1 && ['m']) ||
                            (o < Bn.m && ['mm', o]) ||
                            (s <= 1 && ['h']) ||
                            (s < Bn.h && ['hh', s]) ||
                            (a <= 1 && ['d']) ||
                            (a < Bn.d && ['dd', a]) ||
                            (l <= 1 && ['M']) ||
                            (l < Bn.M && ['MM', l]) ||
                            (c <= 1 && ['y']) || ['yy', c];
                    return (
                        (u[2] = t),
                        (u[3] = +e > 0),
                        (u[4] = n),
                        function (e, t, n, i, r) {
                            return r.relativeTime(t || 1, !!n, e, i);
                        }.apply(null, u)
                    );
                })(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n);
        }),
        (Xn.toISOString = zn),
        (Xn.toString = zn),
        (Xn.toJSON = zn),
        (Xn.locale = Jt),
        (Xn.localeData = tn),
        (Xn.toIsoString = S(
            'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
            zn
        )),
        (Xn.lang = en),
        F('X', 0, 0, 'unix'),
        F('x', 0, 0, 'valueOf'),
        le('x', ie),
        le('X', /[+-]?\d+(\.\d{1,3})?/),
        de('X', function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10));
        }),
        de('x', function (e, t, n) {
            n._d = new Date(w(e));
        }),
        (n.version = '2.24.0'),
        (e = Ot),
        (n.fn = mn),
        (n.min = function () {
            return Nt('isBefore', [].slice.call(arguments, 0));
        }),
        (n.max = function () {
            return Nt('isAfter', [].slice.call(arguments, 0));
        }),
        (n.now = function () {
            return Date.now ? Date.now() : +new Date();
        }),
        (n.utc = h),
        (n.unix = function (e) {
            return Ot(1e3 * e);
        }),
        (n.months = function (e, t) {
            return bn(e, t, 'months');
        }),
        (n.isDate = a),
        (n.locale = ct),
        (n.invalid = p),
        (n.duration = Bt),
        (n.isMoment = b),
        (n.weekdays = function (e, t, n) {
            return _n(e, t, n, 'weekdays');
        }),
        (n.parseZone = function () {
            return Ot.apply(null, arguments).parseZone();
        }),
        (n.localeData = ht),
        (n.isDuration = Pt),
        (n.monthsShort = function (e, t) {
            return bn(e, t, 'monthsShort');
        }),
        (n.weekdaysMin = function (e, t, n) {
            return _n(e, t, n, 'weekdaysMin');
        }),
        (n.defineLocale = ut),
        (n.updateLocale = function (e, t) {
            if (null != t) {
                var n,
                    i,
                    r = rt;
                null != (i = lt(e)) && (r = i._config),
                    ((n = new k((t = O(r, t)))).parentLocale = ot[e]),
                    (ot[e] = n),
                    ct(e);
            } else
                null != ot[e] &&
                    (null != ot[e].parentLocale
                        ? (ot[e] = ot[e].parentLocale)
                        : null != ot[e] && delete ot[e]);
            return ot[e];
        }),
        (n.locales = function () {
            return T(ot);
        }),
        (n.weekdaysShort = function (e, t, n) {
            return _n(e, t, n, 'weekdaysShort');
        }),
        (n.normalizeUnits = M),
        (n.relativeTimeRounding = function (e) {
            return void 0 === e ? Vn : 'function' == typeof e && ((Vn = e), !0);
        }),
        (n.relativeTimeThreshold = function (e, t) {
            return (
                void 0 !== Bn[e] &&
                (void 0 === t
                    ? Bn[e]
                    : ((Bn[e] = t), 's' === e && (Bn.ss = t - 1), !0))
            );
        }),
        (n.calendarFormat = function (e, t) {
            var n = e.diff(t, 'days', !0);
            return n < -6
                ? 'sameElse'
                : n < -1
                ? 'lastWeek'
                : n < 0
                ? 'lastDay'
                : n < 1
                ? 'sameDay'
                : n < 2
                ? 'nextDay'
                : n < 7
                ? 'nextWeek'
                : 'sameElse';
        }),
        (n.prototype = mn),
        (n.HTML5_FMT = {
            DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
            DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
            DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
            DATE: 'YYYY-MM-DD',
            TIME: 'HH:mm',
            TIME_SECONDS: 'HH:mm:ss',
            TIME_MS: 'HH:mm:ss.SSS',
            WEEK: 'GGGG-[W]WW',
            MONTH: 'YYYY-MM',
        }),
        n
    );
}),
    (function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
            ? (module.exports = t())
            : 'function' == typeof define && define.amd
            ? define(t)
            : (e.PerfectScrollbar = t());
    })(this, function () {
        'use strict';
        function e(e) {
            return getComputedStyle(e);
        }
        function t(e, t) {
            for (var n in t) {
                var i = t[n];
                'number' == typeof i && (i += 'px'), (e.style[n] = i);
            }
            return e;
        }
        function n(e) {
            var t = document.createElement('div');
            return (t.className = e), t;
        }
        function i(e, t) {
            if (!m) throw new Error('No element matching method supported');
            return m.call(e, t);
        }
        function r(e) {
            e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
        }
        function o(e, t) {
            return Array.prototype.filter.call(e.children, function (e) {
                return i(e, t);
            });
        }
        function s(e, t) {
            var n = e.element.classList,
                i = g.state.scrolling(t);
            n.contains(i) ? clearTimeout(v[t]) : n.add(i);
        }
        function a(e, t) {
            v[t] = setTimeout(function () {
                return e.element.classList.remove(g.state.scrolling(t));
            }, e.settings.scrollingThreshold);
        }
        function l(e, t) {
            s(e, t), a(e, t);
        }
        function c(e) {
            if ('function' == typeof window.CustomEvent)
                return new CustomEvent(e);
            var t = document.createEvent('CustomEvent');
            return t.initCustomEvent(e, !1, !1, void 0), t;
        }
        function u(e) {
            return parseInt(e, 10) || 0;
        }
        function h(e) {
            return (
                i(e, 'input,[contenteditable]') ||
                i(e, 'select,[contenteditable]') ||
                i(e, 'textarea,[contenteditable]') ||
                i(e, 'button,[contenteditable]')
            );
        }
        function d(e, t) {
            return (
                e.settings.minScrollbarLength &&
                    (t = Math.max(t, e.settings.minScrollbarLength)),
                e.settings.maxScrollbarLength &&
                    (t = Math.min(t, e.settings.maxScrollbarLength)),
                t
            );
        }
        function f(e, n) {
            var i = { width: n.railXWidth };
            (i.left = n.isRtl
                ? n.negativeScrollAdjustment +
                  e.scrollLeft +
                  n.containerWidth -
                  n.contentWidth
                : e.scrollLeft),
                n.isScrollbarXUsingBottom
                    ? (i.bottom = n.scrollbarXBottom - e.scrollTop)
                    : (i.top = n.scrollbarXTop + e.scrollTop),
                t(n.scrollbarXRail, i);
            var r = { top: e.scrollTop, height: n.railYHeight };
            n.isScrollbarYUsingRight
                ? (r.right = n.isRtl
                      ? n.contentWidth -
                        (n.negativeScrollAdjustment + e.scrollLeft) -
                        n.scrollbarYRight -
                        n.scrollbarYOuterWidth
                      : n.scrollbarYRight - e.scrollLeft)
                : (r.left = n.isRtl
                      ? n.negativeScrollAdjustment +
                        e.scrollLeft +
                        2 * n.containerWidth -
                        n.contentWidth -
                        n.scrollbarYLeft -
                        n.scrollbarYOuterWidth
                      : n.scrollbarYLeft + e.scrollLeft),
                t(n.scrollbarYRail, r),
                t(n.scrollbarX, {
                    left: n.scrollbarXLeft,
                    width: n.scrollbarXWidth - n.railBorderXWidth,
                }),
                t(n.scrollbarY, {
                    top: n.scrollbarYTop,
                    height: n.scrollbarYHeight - n.railBorderYWidth,
                });
        }
        function p(e, t) {
            function n(t) {
                w(e, d, m + v * (t[l] - g), !1),
                    s(e, f),
                    E(e),
                    t.stopPropagation(),
                    t.preventDefault();
            }
            function i() {
                a(e, f), e.event.unbind(e.ownerDocument, 'mousemove', n);
            }
            var r = t[0],
                o = t[1],
                l = t[2],
                c = t[3],
                u = t[5],
                h = t[6],
                d = t[7],
                f = t[8],
                p = e.element,
                m = null,
                g = null,
                v = null;
            e.event.bind(e[t[4]], 'mousedown', function (t) {
                (m = p[h]),
                    (g = t[l]),
                    (v = (e[o] - e[r]) / (e[c] - e[u])),
                    e.event.bind(e.ownerDocument, 'mousemove', n),
                    e.event.once(e.ownerDocument, 'mouseup', i),
                    t.stopPropagation(),
                    t.preventDefault();
            });
        }
        var m =
                Element.prototype.matches ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.msMatchesSelector,
            g = {
                main: 'ps',
                element: {
                    thumb: function (e) {
                        return 'ps__thumb-' + e;
                    },
                    rail: function (e) {
                        return 'ps__rail-' + e;
                    },
                    consuming: 'ps__child--consume',
                },
                state: {
                    focus: 'ps--focus',
                    active: function (e) {
                        return 'ps--active-' + e;
                    },
                    scrolling: function (e) {
                        return 'ps--scrolling-' + e;
                    },
                },
            },
            v = { x: null, y: null },
            y = function (e) {
                (this.element = e), (this.handlers = {});
            },
            b = { isEmpty: { configurable: !0 } };
        (y.prototype.bind = function (e, t) {
            void 0 === this.handlers[e] && (this.handlers[e] = []),
                this.handlers[e].push(t),
                this.element.addEventListener(e, t, !1);
        }),
            (y.prototype.unbind = function (e, t) {
                var n = this;
                this.handlers[e] = this.handlers[e].filter(function (i) {
                    return (
                        !(!t || i === t) ||
                        (n.element.removeEventListener(e, i, !1), !1)
                    );
                });
            }),
            (y.prototype.unbindAll = function () {
                for (var e in this.handlers) this.unbind(e);
            }),
            (b.isEmpty.get = function () {
                var e = this;
                return Object.keys(this.handlers).every(function (t) {
                    return 0 === e.handlers[t].length;
                });
            }),
            Object.defineProperties(y.prototype, b);
        var _ = function () {
            this.eventElements = [];
        };
        (_.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
                return t.element === e;
            })[0];
            return t || ((t = new y(e)), this.eventElements.push(t)), t;
        }),
            (_.prototype.bind = function (e, t, n) {
                this.eventElement(e).bind(t, n);
            }),
            (_.prototype.unbind = function (e, t, n) {
                var i = this.eventElement(e);
                i.unbind(t, n),
                    i.isEmpty &&
                        this.eventElements.splice(
                            this.eventElements.indexOf(i),
                            1
                        );
            }),
            (_.prototype.unbindAll = function () {
                this.eventElements.forEach(function (e) {
                    return e.unbindAll();
                }),
                    (this.eventElements = []);
            }),
            (_.prototype.once = function (e, t, n) {
                var i = this.eventElement(e),
                    r = function (e) {
                        i.unbind(t, r), n(e);
                    };
                i.bind(t, r);
            });
        var w = function (e, t, n, i) {
                var r;
                if ((void 0 === i && (i = !0), 'top' === t))
                    r = [
                        'contentHeight',
                        'containerHeight',
                        'scrollTop',
                        'y',
                        'up',
                        'down',
                    ];
                else {
                    if ('left' !== t)
                        throw new Error('A proper axis should be provided');
                    r = [
                        'contentWidth',
                        'containerWidth',
                        'scrollLeft',
                        'x',
                        'left',
                        'right',
                    ];
                }
                !(function (e, t, n, i) {
                    var r = n[0],
                        o = n[1],
                        s = n[2],
                        a = n[3],
                        u = n[4],
                        h = n[5],
                        d = e.element,
                        f = !1;
                    (e.reach[a] = null),
                        t <= 0 && ((t = 0), (e.reach[a] = 'start')),
                        t >= e[r] - e[o] &&
                            ((t = e[r] - e[o]) - d[s] <= 2 && (f = !0),
                            (e.reach[a] = 'end'));
                    var p = d[s] - t;
                    p &&
                        (d.dispatchEvent(c('ps-scroll-' + a)),
                        d.dispatchEvent(
                            c(p > 0 ? 'ps-scroll-' + u : 'ps-scroll-' + h)
                        ),
                        f || (d[s] = t),
                        e.reach[a] &&
                            d.dispatchEvent(
                                c('ps-' + a + '-reach-' + e.reach[a])
                            ),
                        i && l(e, a));
                })(e, n, r, i);
            },
            x = {
                isWebKit:
                    document &&
                    'WebkitAppearance' in document.documentElement.style,
                supportsTouch:
                    window &&
                    ('ontouchstart' in window ||
                        (window.DocumentTouch &&
                            document instanceof window.DocumentTouch)),
                supportsIePointer: navigator && navigator.msMaxTouchPoints,
            },
            E = function (e) {
                var t = e.element;
                (e.containerWidth = t.clientWidth),
                    (e.containerHeight = t.clientHeight),
                    (e.contentWidth = t.scrollWidth),
                    (e.contentHeight = t.scrollHeight),
                    t.contains(e.scrollbarXRail) ||
                        (o(t, g.element.rail('x')).forEach(function (e) {
                            return r(e);
                        }),
                        t.appendChild(e.scrollbarXRail)),
                    t.contains(e.scrollbarYRail) ||
                        (o(t, g.element.rail('y')).forEach(function (e) {
                            return r(e);
                        }),
                        t.appendChild(e.scrollbarYRail)),
                    !e.settings.suppressScrollX &&
                    e.containerWidth + e.settings.scrollXMarginOffset <
                        e.contentWidth
                        ? ((e.scrollbarXActive = !0),
                          (e.railXWidth =
                              e.containerWidth - e.railXMarginWidth),
                          (e.railXRatio = e.containerWidth / e.railXWidth),
                          (e.scrollbarXWidth = d(
                              e,
                              u(
                                  (e.railXWidth * e.containerWidth) /
                                      e.contentWidth
                              )
                          )),
                          (e.scrollbarXLeft = u(
                              ((e.negativeScrollAdjustment + t.scrollLeft) *
                                  (e.railXWidth - e.scrollbarXWidth)) /
                                  (e.contentWidth - e.containerWidth)
                          )))
                        : (e.scrollbarXActive = !1),
                    !e.settings.suppressScrollY &&
                    e.containerHeight + e.settings.scrollYMarginOffset <
                        e.contentHeight
                        ? ((e.scrollbarYActive = !0),
                          (e.railYHeight =
                              e.containerHeight - e.railYMarginHeight),
                          (e.railYRatio = e.containerHeight / e.railYHeight),
                          (e.scrollbarYHeight = d(
                              e,
                              u(
                                  (e.railYHeight * e.containerHeight) /
                                      e.contentHeight
                              )
                          )),
                          (e.scrollbarYTop = u(
                              (t.scrollTop *
                                  (e.railYHeight - e.scrollbarYHeight)) /
                                  (e.contentHeight - e.containerHeight)
                          )))
                        : (e.scrollbarYActive = !1),
                    e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                        (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                    e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                        (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                    f(t, e),
                    e.scrollbarXActive
                        ? t.classList.add(g.state.active('x'))
                        : (t.classList.remove(g.state.active('x')),
                          (e.scrollbarXWidth = 0),
                          (e.scrollbarXLeft = 0),
                          w(e, 'left', 0)),
                    e.scrollbarYActive
                        ? t.classList.add(g.state.active('y'))
                        : (t.classList.remove(g.state.active('y')),
                          (e.scrollbarYHeight = 0),
                          (e.scrollbarYTop = 0),
                          w(e, 'top', 0));
            },
            S = {
                'click-rail': function (e) {
                    var t = e.element;
                    e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                        return e.stopPropagation();
                    }),
                        e.event.bind(
                            e.scrollbarYRail,
                            'mousedown',
                            function (n) {
                                var i =
                                    n.pageY -
                                        window.pageYOffset -
                                        e.scrollbarYRail.getBoundingClientRect()
                                            .top >
                                    e.scrollbarYTop
                                        ? 1
                                        : -1;
                                w(
                                    e,
                                    'top',
                                    t.scrollTop + i * e.containerHeight
                                ),
                                    E(e),
                                    n.stopPropagation();
                            }
                        ),
                        e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                            return e.stopPropagation();
                        }),
                        e.event.bind(
                            e.scrollbarXRail,
                            'mousedown',
                            function (n) {
                                var i =
                                    n.pageX -
                                        window.pageXOffset -
                                        e.scrollbarXRail.getBoundingClientRect()
                                            .left >
                                    e.scrollbarXLeft
                                        ? 1
                                        : -1;
                                w(
                                    e,
                                    'left',
                                    t.scrollLeft + i * e.containerWidth
                                ),
                                    E(e),
                                    n.stopPropagation();
                            }
                        );
                },
                'drag-thumb': function (e) {
                    p(e, [
                        'containerWidth',
                        'contentWidth',
                        'pageX',
                        'railXWidth',
                        'scrollbarX',
                        'scrollbarXWidth',
                        'scrollLeft',
                        'left',
                        'x',
                    ]),
                        p(e, [
                            'containerHeight',
                            'contentHeight',
                            'pageY',
                            'railYHeight',
                            'scrollbarY',
                            'scrollbarYHeight',
                            'scrollTop',
                            'top',
                            'y',
                        ]);
                },
                keyboard: function (e) {
                    var t = e.element,
                        n = function () {
                            return i(t, ':hover');
                        },
                        r = function () {
                            return (
                                i(e.scrollbarX, ':focus') ||
                                i(e.scrollbarY, ':focus')
                            );
                        };
                    e.event.bind(e.ownerDocument, 'keydown', function (i) {
                        if (
                            !(
                                (i.isDefaultPrevented &&
                                    i.isDefaultPrevented()) ||
                                i.defaultPrevented
                            ) &&
                            (n() || r())
                        ) {
                            var o = document.activeElement
                                ? document.activeElement
                                : e.ownerDocument.activeElement;
                            if (o) {
                                if ('IFRAME' === o.tagName)
                                    o = o.contentDocument.activeElement;
                                else
                                    for (; o.shadowRoot; )
                                        o = o.shadowRoot.activeElement;
                                if (h(o)) return;
                            }
                            var s = 0,
                                a = 0;
                            switch (i.which) {
                                case 37:
                                    s = i.metaKey
                                        ? -e.contentWidth
                                        : i.altKey
                                        ? -e.containerWidth
                                        : -30;
                                    break;
                                case 38:
                                    a = i.metaKey
                                        ? e.contentHeight
                                        : i.altKey
                                        ? e.containerHeight
                                        : 30;
                                    break;
                                case 39:
                                    s = i.metaKey
                                        ? e.contentWidth
                                        : i.altKey
                                        ? e.containerWidth
                                        : 30;
                                    break;
                                case 40:
                                    a = i.metaKey
                                        ? -e.contentHeight
                                        : i.altKey
                                        ? -e.containerHeight
                                        : -30;
                                    break;
                                case 32:
                                    a = i.shiftKey
                                        ? e.containerHeight
                                        : -e.containerHeight;
                                    break;
                                case 33:
                                    a = e.containerHeight;
                                    break;
                                case 34:
                                    a = -e.containerHeight;
                                    break;
                                case 36:
                                    a = e.contentHeight;
                                    break;
                                case 35:
                                    a = -e.contentHeight;
                                    break;
                                default:
                                    return;
                            }
                            (e.settings.suppressScrollX && 0 !== s) ||
                                (e.settings.suppressScrollY && 0 !== a) ||
                                (w(e, 'top', t.scrollTop - a),
                                w(e, 'left', t.scrollLeft + s),
                                E(e),
                                (function (n, i) {
                                    var r = t.scrollTop;
                                    if (0 === s) {
                                        if (!e.scrollbarYActive) return !1;
                                        if (
                                            (0 === r && a > 0) ||
                                            (r >=
                                                e.contentHeight -
                                                    e.containerHeight &&
                                                a < 0)
                                        )
                                            return !e.settings.wheelPropagation;
                                    }
                                    var o = t.scrollLeft;
                                    if (0 === a) {
                                        if (!e.scrollbarXActive) return !1;
                                        if (
                                            (0 === o && s < 0) ||
                                            (o >=
                                                e.contentWidth -
                                                    e.containerWidth &&
                                                s > 0)
                                        )
                                            return !e.settings.wheelPropagation;
                                    }
                                    return !0;
                                })() && i.preventDefault());
                        }
                    });
                },
                wheel: function (t) {
                    function n(t, n, i) {
                        if (!x.isWebKit && r.querySelector('select:focus'))
                            return !0;
                        if (!r.contains(t)) return !1;
                        for (var o = t; o && o !== r; ) {
                            if (o.classList.contains(g.element.consuming))
                                return !0;
                            var s = e(o);
                            if (
                                [s.overflow, s.overflowX, s.overflowY]
                                    .join('')
                                    .match(/(scroll|auto)/)
                            ) {
                                var a = o.scrollHeight - o.clientHeight;
                                if (
                                    a > 0 &&
                                    !(
                                        (0 === o.scrollTop && i > 0) ||
                                        (o.scrollTop === a && i < 0)
                                    )
                                )
                                    return !0;
                                var l = o.scrollLeft - o.clientWidth;
                                if (
                                    l > 0 &&
                                    !(
                                        (0 === o.scrollLeft && n < 0) ||
                                        (o.scrollLeft === l && n > 0)
                                    )
                                )
                                    return !0;
                            }
                            o = o.parentNode;
                        }
                        return !1;
                    }
                    function i(e) {
                        var i = (function (e) {
                                var t = e.deltaX,
                                    n = -1 * e.deltaY;
                                return (
                                    (void 0 !== t && void 0 !== n) ||
                                        ((t = (-1 * e.wheelDeltaX) / 6),
                                        (n = e.wheelDeltaY / 6)),
                                    e.deltaMode &&
                                        1 === e.deltaMode &&
                                        ((t *= 10), (n *= 10)),
                                    t != t &&
                                        n != n &&
                                        ((t = 0), (n = e.wheelDelta)),
                                    e.shiftKey ? [-n, -t] : [t, n]
                                );
                            })(e),
                            o = i[0],
                            s = i[1];
                        if (!n(e.target, o, s)) {
                            var a = !1;
                            t.settings.useBothWheelAxes
                                ? t.scrollbarYActive && !t.scrollbarXActive
                                    ? (w(
                                          t,
                                          'top',
                                          s
                                              ? r.scrollTop -
                                                    s * t.settings.wheelSpeed
                                              : r.scrollTop +
                                                    o * t.settings.wheelSpeed
                                      ),
                                      (a = !0))
                                    : t.scrollbarXActive &&
                                      !t.scrollbarYActive &&
                                      (w(
                                          t,
                                          'left',
                                          o
                                              ? r.scrollLeft +
                                                    o * t.settings.wheelSpeed
                                              : r.scrollLeft -
                                                    s * t.settings.wheelSpeed
                                      ),
                                      (a = !0))
                                : (w(
                                      t,
                                      'top',
                                      r.scrollTop - s * t.settings.wheelSpeed
                                  ),
                                  w(
                                      t,
                                      'left',
                                      r.scrollLeft + o * t.settings.wheelSpeed
                                  )),
                                E(t),
                                (a =
                                    a ||
                                    (function (e, n) {
                                        var i = r.scrollTop;
                                        if (0 === o) {
                                            if (!t.scrollbarYActive) return !1;
                                            if (
                                                (0 === i && s > 0) ||
                                                (i >=
                                                    t.contentHeight -
                                                        t.containerHeight &&
                                                    s < 0)
                                            )
                                                return !t.settings
                                                    .wheelPropagation;
                                        }
                                        var a = r.scrollLeft;
                                        if (0 === s) {
                                            if (!t.scrollbarXActive) return !1;
                                            if (
                                                (0 === a && o < 0) ||
                                                (a >=
                                                    t.contentWidth -
                                                        t.containerWidth &&
                                                    o > 0)
                                            )
                                                return !t.settings
                                                    .wheelPropagation;
                                        }
                                        return !0;
                                    })()) &&
                                    (e.stopPropagation(), e.preventDefault());
                        }
                    }
                    var r = t.element;
                    void 0 !== window.onwheel
                        ? t.event.bind(r, 'wheel', i)
                        : void 0 !== window.onmousewheel &&
                          t.event.bind(r, 'mousewheel', i);
                },
                touch: function (e) {
                    function t(t, n) {
                        var i = u.scrollTop,
                            r = u.scrollLeft,
                            o = Math.abs(t),
                            s = Math.abs(n);
                        if (s > o) {
                            if (
                                (n < 0 &&
                                    i ===
                                        e.contentHeight - e.containerHeight) ||
                                (n > 0 && 0 === i)
                            )
                                return {
                                    stop: !e.settings.swipePropagation,
                                    prevent: 0 === window.scrollY,
                                };
                        } else if (
                            o > s &&
                            ((t < 0 &&
                                r === e.contentWidth - e.containerWidth) ||
                                (t > 0 && 0 === r))
                        )
                            return {
                                stop: !e.settings.swipePropagation,
                                prevent: !0,
                            };
                        return { stop: !0, prevent: !0 };
                    }
                    function n(t, n) {
                        w(e, 'top', u.scrollTop - n),
                            w(e, 'left', u.scrollLeft - t),
                            E(e);
                    }
                    function i() {
                        m = !0;
                    }
                    function r() {
                        m = !1;
                    }
                    function o(e) {
                        return e.targetTouches ? e.targetTouches[0] : e;
                    }
                    function s(e) {
                        return !(
                            (e.pointerType &&
                                'pen' === e.pointerType &&
                                0 === e.buttons) ||
                            ((!e.targetTouches ||
                                1 !== e.targetTouches.length) &&
                                (!e.pointerType ||
                                    'mouse' === e.pointerType ||
                                    e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                        );
                    }
                    function a(e) {
                        if (s(e)) {
                            g = !0;
                            var t = o(e);
                            (h.pageX = t.pageX),
                                (h.pageY = t.pageY),
                                (d = new Date().getTime()),
                                null !== p && clearInterval(p),
                                e.stopPropagation();
                        }
                    }
                    function l(i) {
                        if (
                            (!g && e.settings.swipePropagation && a(i),
                            !m && g && s(i))
                        ) {
                            var r = o(i),
                                l = { pageX: r.pageX, pageY: r.pageY },
                                c = l.pageX - h.pageX,
                                u = l.pageY - h.pageY;
                            n(c, u), (h = l);
                            var p = new Date().getTime(),
                                v = p - d;
                            v > 0 && ((f.x = c / v), (f.y = u / v), (d = p));
                            var y = t(c, u),
                                b = y.prevent;
                            y.stop && i.stopPropagation(),
                                b && i.preventDefault();
                        }
                    }
                    function c() {
                        !m &&
                            g &&
                            ((g = !1),
                            e.settings.swipeEasing &&
                                (clearInterval(p),
                                (p = setInterval(function () {
                                    e.isInitialized
                                        ? clearInterval(p)
                                        : f.x || f.y
                                        ? Math.abs(f.x) < 0.01 &&
                                          Math.abs(f.y) < 0.01
                                            ? clearInterval(p)
                                            : (n(30 * f.x, 30 * f.y),
                                              (f.x *= 0.8),
                                              (f.y *= 0.8))
                                        : clearInterval(p);
                                }, 10))));
                    }
                    if (x.supportsTouch || x.supportsIePointer) {
                        var u = e.element,
                            h = {},
                            d = 0,
                            f = {},
                            p = null,
                            m = !1,
                            g = !1;
                        x.supportsTouch
                            ? (e.event.bind(window, 'touchstart', i),
                              e.event.bind(window, 'touchend', r),
                              e.event.bind(u, 'touchstart', a),
                              e.event.bind(u, 'touchmove', l),
                              e.event.bind(u, 'touchend', c))
                            : x.supportsIePointer &&
                              (window.PointerEvent
                                  ? (e.event.bind(window, 'pointerdown', i),
                                    e.event.bind(window, 'pointerup', r),
                                    e.event.bind(u, 'pointerdown', a),
                                    e.event.bind(u, 'pointermove', l),
                                    e.event.bind(u, 'pointerup', c))
                                  : window.MSPointerEvent &&
                                    (e.event.bind(window, 'MSPointerDown', i),
                                    e.event.bind(window, 'MSPointerUp', r),
                                    e.event.bind(u, 'MSPointerDown', a),
                                    e.event.bind(u, 'MSPointerMove', l),
                                    e.event.bind(u, 'MSPointerUp', c)));
                    }
                },
            },
            T = function (i, r) {
                var o = this;
                if (
                    (void 0 === r && (r = {}),
                    'string' == typeof i && (i = document.querySelector(i)),
                    !i || !i.nodeName)
                )
                    throw new Error(
                        'no element is specified to initialize PerfectScrollbar'
                    );
                for (var s in ((this.element = i),
                i.classList.add(g.main),
                (this.settings = {
                    handlers: [
                        'click-rail',
                        'drag-thumb',
                        'keyboard',
                        'wheel',
                        'touch',
                    ],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipePropagation: !0,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !1,
                    wheelSpeed: 1,
                }),
                r))
                    o.settings[s] = r[s];
                (this.containerWidth = null),
                    (this.containerHeight = null),
                    (this.contentWidth = null),
                    (this.contentHeight = null);
                var a = function () {
                        return i.classList.add(g.state.focus);
                    },
                    l = function () {
                        return i.classList.remove(g.state.focus);
                    };
                (this.isRtl = 'rtl' === e(i).direction),
                    (this.isNegativeScroll = (function () {
                        var e,
                            t = i.scrollLeft;
                        return (
                            (i.scrollLeft = -1),
                            (e = i.scrollLeft < 0),
                            (i.scrollLeft = t),
                            e
                        );
                    })()),
                    (this.negativeScrollAdjustment = this.isNegativeScroll
                        ? i.scrollWidth - i.clientWidth
                        : 0),
                    (this.event = new _()),
                    (this.ownerDocument = i.ownerDocument || document),
                    (this.scrollbarXRail = n(g.element.rail('x'))),
                    i.appendChild(this.scrollbarXRail),
                    (this.scrollbarX = n(g.element.thumb('x'))),
                    this.scrollbarXRail.appendChild(this.scrollbarX),
                    this.scrollbarX.setAttribute('tabindex', 0),
                    this.event.bind(this.scrollbarX, 'focus', a),
                    this.event.bind(this.scrollbarX, 'blur', l),
                    (this.scrollbarXActive = null),
                    (this.scrollbarXWidth = null),
                    (this.scrollbarXLeft = null);
                var c = e(this.scrollbarXRail);
                (this.scrollbarXBottom = parseInt(c.bottom, 10)),
                    isNaN(this.scrollbarXBottom)
                        ? ((this.isScrollbarXUsingBottom = !1),
                          (this.scrollbarXTop = u(c.top)))
                        : (this.isScrollbarXUsingBottom = !0),
                    (this.railBorderXWidth =
                        u(c.borderLeftWidth) + u(c.borderRightWidth)),
                    t(this.scrollbarXRail, { display: 'block' }),
                    (this.railXMarginWidth =
                        u(c.marginLeft) + u(c.marginRight)),
                    t(this.scrollbarXRail, { display: '' }),
                    (this.railXWidth = null),
                    (this.railXRatio = null),
                    (this.scrollbarYRail = n(g.element.rail('y'))),
                    i.appendChild(this.scrollbarYRail),
                    (this.scrollbarY = n(g.element.thumb('y'))),
                    this.scrollbarYRail.appendChild(this.scrollbarY),
                    this.scrollbarY.setAttribute('tabindex', 0),
                    this.event.bind(this.scrollbarY, 'focus', a),
                    this.event.bind(this.scrollbarY, 'blur', l),
                    (this.scrollbarYActive = null),
                    (this.scrollbarYHeight = null),
                    (this.scrollbarYTop = null);
                var h = e(this.scrollbarYRail);
                (this.scrollbarYRight = parseInt(h.right, 10)),
                    isNaN(this.scrollbarYRight)
                        ? ((this.isScrollbarYUsingRight = !1),
                          (this.scrollbarYLeft = u(h.left)))
                        : (this.isScrollbarYUsingRight = !0),
                    (this.scrollbarYOuterWidth = this.isRtl
                        ? (function (t) {
                              var n = e(t);
                              return (
                                  u(n.width) +
                                  u(n.paddingLeft) +
                                  u(n.paddingRight) +
                                  u(n.borderLeftWidth) +
                                  u(n.borderRightWidth)
                              );
                          })(this.scrollbarY)
                        : null),
                    (this.railBorderYWidth =
                        u(h.borderTopWidth) + u(h.borderBottomWidth)),
                    t(this.scrollbarYRail, { display: 'block' }),
                    (this.railYMarginHeight =
                        u(h.marginTop) + u(h.marginBottom)),
                    t(this.scrollbarYRail, { display: '' }),
                    (this.railYHeight = null),
                    (this.railYRatio = null),
                    (this.reach = {
                        x:
                            i.scrollLeft <= 0
                                ? 'start'
                                : i.scrollLeft >=
                                  this.contentWidth - this.containerWidth
                                ? 'end'
                                : null,
                        y:
                            i.scrollTop <= 0
                                ? 'start'
                                : i.scrollTop >=
                                  this.contentHeight - this.containerHeight
                                ? 'end'
                                : null,
                    }),
                    this.settings.handlers.forEach(function (e) {
                        return S[e](o);
                    }),
                    this.event.bind(this.element, 'scroll', function () {
                        return E(o);
                    }),
                    E(this);
            },
            C = { isInitialized: { configurable: !0 } };
        return (
            (C.isInitialized.get = function () {
                return this.element.classList.contains(g.main);
            }),
            (T.prototype.update = function () {
                this.isInitialized &&
                    ((this.negativeScrollAdjustment = this.isNegativeScroll
                        ? this.element.scrollWidth - this.element.clientWidth
                        : 0),
                    t(this.scrollbarXRail, { display: 'block' }),
                    t(this.scrollbarYRail, { display: 'block' }),
                    (this.railXMarginWidth =
                        u(e(this.scrollbarXRail).marginLeft) +
                        u(e(this.scrollbarXRail).marginRight)),
                    (this.railYMarginHeight =
                        u(e(this.scrollbarYRail).marginTop) +
                        u(e(this.scrollbarYRail).marginBottom)),
                    t(this.scrollbarXRail, { display: 'none' }),
                    t(this.scrollbarYRail, { display: 'none' }),
                    E(this),
                    t(this.scrollbarXRail, { display: '' }),
                    t(this.scrollbarYRail, { display: '' }));
            }),
            (T.prototype.destroy = function () {
                this.isInitialized &&
                    (this.event.unbindAll(),
                    r(this.scrollbarX),
                    r(this.scrollbarY),
                    r(this.scrollbarXRail),
                    r(this.scrollbarYRail),
                    this.removePsClasses(),
                    (this.element = null),
                    (this.scrollbarX = null),
                    (this.scrollbarY = null),
                    (this.scrollbarXRail = null),
                    (this.scrollbarYRail = null));
            }),
            (T.prototype.removePsClasses = function () {
                this.element.className = this.element.className
                    .split(' ')
                    .filter(function (e) {
                        return !e.match(/^ps([-_].+|)$/);
                    })
                    .join(' ');
            }),
            Object.defineProperties(T.prototype, C),
            T
        );
    }),
    (function (e) {
        'function' == typeof define && define.amd
            ? define(['jquery'], e)
            : 'object' == typeof exports
            ? e(require('jquery'))
            : e(jQuery);
    })(function (e) {
        var t = {
            element: 'body',
            position: null,
            type: 'info',
            allow_dismiss: !0,
            newest_on_top: !1,
            showProgressbar: !1,
            placement: { from: 'top', align: 'right' },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5e3,
            timer: 1e3,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp',
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template:
                '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
        };
        function n(n, i, r) {
            (r = e.extend(
                !0,
                {},
                (i = {
                    content: {
                        message: 'object' == typeof i ? i.message : i,
                        title: i.title ? i.title : '',
                        icon: i.icon ? i.icon : '',
                        url: i.url ? i.url : '#',
                        target: i.target ? i.target : '-',
                    },
                }),
                r
            )),
                (this.settings = e.extend(!0, {}, t, r)),
                (this._defaults = t),
                '-' == this.settings.content.target &&
                    (this.settings.content.target = this.settings.url_target),
                (this.animations = {
                    start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
                    end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend',
                }),
                'number' == typeof this.settings.offset &&
                    (this.settings.offset = {
                        x: this.settings.offset,
                        y: this.settings.offset,
                    }),
                this.init();
        }
        (String.format = function () {
            for (var e = arguments[0], t = 1; t < arguments.length; t++)
                e = e.replace(
                    RegExp('\\{' + (t - 1) + '\\}', 'gm'),
                    arguments[t]
                );
            return e;
        }),
            e.extend(n.prototype, {
                init: function () {
                    var e = this;
                    this.buildNotify(),
                        this.settings.content.icon && this.setIcon(),
                        '#' != this.settings.content.url && this.styleURL(),
                        this.styleDismiss(),
                        this.placement(),
                        this.bind(),
                        (this.notify = {
                            $ele: this.$ele,
                            update: function (t, n) {
                                var i = {};
                                for (var t in ('string' == typeof t
                                    ? (i[t] = n)
                                    : (i = t),
                                i))
                                    switch (t) {
                                        case 'type':
                                            this.$ele.removeClass(
                                                'alert-' + e.settings.type
                                            ),
                                                this.$ele
                                                    .find(
                                                        '[data-notify="progressbar"] > .progress-bar'
                                                    )
                                                    .removeClass(
                                                        'progress-bar-' +
                                                            e.settings.type
                                                    ),
                                                (e.settings.type = i[t]),
                                                this.$ele
                                                    .addClass('alert-' + i[t])
                                                    .find(
                                                        '[data-notify="progressbar"] > .progress-bar'
                                                    )
                                                    .addClass(
                                                        'progress-bar-' + i[t]
                                                    );
                                            break;
                                        case 'icon':
                                            var r = this.$ele.find(
                                                '[data-notify="icon"]'
                                            );
                                            'class' ==
                                            e.settings.icon_type.toLowerCase()
                                                ? r
                                                      .removeClass(
                                                          e.settings.content
                                                              .icon
                                                      )
                                                      .addClass(i[t])
                                                : (r.is('img') || r.find('img'),
                                                  r.attr('src', i[t]));
                                            break;
                                        case 'progress':
                                            this.$ele.data(
                                                'notify-delay',
                                                e.settings.delay -
                                                    e.settings.delay *
                                                        (i[t] / 100)
                                            ),
                                                this.$ele
                                                    .find(
                                                        '[data-notify="progressbar"] > div'
                                                    )
                                                    .attr('aria-valuenow', i[t])
                                                    .css('width', i[t] + '%');
                                            break;
                                        case 'url':
                                            this.$ele
                                                .find('[data-notify="url"]')
                                                .attr('href', i[t]);
                                            break;
                                        case 'target':
                                            this.$ele
                                                .find('[data-notify="url"]')
                                                .attr('target', i[t]);
                                            break;
                                        default:
                                            this.$ele
                                                .find(
                                                    '[data-notify="' + t + '"]'
                                                )
                                                .html(i[t]);
                                    }
                                var o =
                                    this.$ele.outerHeight() +
                                    parseInt(e.settings.spacing) +
                                    parseInt(e.settings.offset.y);
                                e.reposition(o);
                            },
                            close: function () {
                                e.close();
                            },
                        });
                },
                buildNotify: function () {
                    var t = this.settings.content;
                    (this.$ele = e(
                        String.format(
                            this.settings.template,
                            this.settings.type,
                            t.title,
                            t.message,
                            t.url,
                            t.target
                        )
                    )),
                        this.$ele.attr(
                            'data-notify-position',
                            this.settings.placement.from +
                                '-' +
                                this.settings.placement.align
                        ),
                        this.settings.allow_dismiss ||
                            this.$ele
                                .find('[data-notify="dismiss"]')
                                .css('display', 'none'),
                        ((this.settings.delay <= 0 &&
                            !this.settings.showProgressbar) ||
                            !this.settings.showProgressbar) &&
                            this.$ele
                                .find('[data-notify="progressbar"]')
                                .remove();
                },
                setIcon: function () {
                    'class' == this.settings.icon_type.toLowerCase()
                        ? this.$ele
                              .find('[data-notify="icon"]')
                              .addClass(this.settings.content.icon)
                        : this.$ele.find('[data-notify="icon"]').is('img')
                        ? this.$ele
                              .find('[data-notify="icon"]')
                              .attr('src', this.settings.content.icon)
                        : this.$ele
                              .find('[data-notify="icon"]')
                              .append(
                                  '<img src="' +
                                      this.settings.content.icon +
                                      '" alt="Notify Icon" />'
                              );
                },
                styleDismiss: function () {
                    this.$ele
                        .find('[data-notify="dismiss"]')
                        .css({
                            position: 'absolute',
                            right: '10px',
                            top: '5px',
                            zIndex: this.settings.z_index + 2,
                        });
                },
                styleURL: function () {
                    this.$ele
                        .find('[data-notify="url"]')
                        .css({
                            backgroundImage:
                                'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
                            height: '100%',
                            left: '0px',
                            position: 'absolute',
                            top: '0px',
                            width: '100%',
                            zIndex: this.settings.z_index + 1,
                        });
                },
                placement: function () {
                    var t = this,
                        n = this.settings.offset.y,
                        i = {
                            display: 'inline-block',
                            margin: '0px auto',
                            position: this.settings.position
                                ? this.settings.position
                                : 'body' === this.settings.element
                                ? 'fixed'
                                : 'absolute',
                            transition: 'all .5s ease-in-out',
                            zIndex: this.settings.z_index,
                        },
                        r = !1,
                        o = this.settings;
                    switch (
                        (e(
                            '[data-notify-position="' +
                                this.settings.placement.from +
                                '-' +
                                this.settings.placement.align +
                                '"]:not([data-closing="true"])'
                        ).each(function () {
                            return (n = Math.max(
                                n,
                                parseInt(e(this).css(o.placement.from)) +
                                    parseInt(e(this).outerHeight()) +
                                    parseInt(o.spacing)
                            ));
                        }),
                        1 == this.settings.newest_on_top &&
                            (n = this.settings.offset.y),
                        (i[this.settings.placement.from] = n + 'px'),
                        this.settings.placement.align)
                    ) {
                        case 'left':
                        case 'right':
                            i[this.settings.placement.align] =
                                this.settings.offset.x + 'px';
                            break;
                        case 'center':
                            (i.left = 0), (i.right = 0);
                    }
                    this.$ele.css(i).addClass(this.settings.animate.enter),
                        e.each(
                            Array('webkit-', 'moz-', 'o-', 'ms-', ''),
                            function (e, n) {
                                t.$ele[0].style[
                                    n + 'AnimationIterationCount'
                                ] = 1;
                            }
                        ),
                        e(this.settings.element).append(this.$ele),
                        1 == this.settings.newest_on_top &&
                            ((n =
                                parseInt(n) +
                                parseInt(this.settings.spacing) +
                                this.$ele.outerHeight()),
                            this.reposition(n)),
                        e.isFunction(t.settings.onShow) &&
                            t.settings.onShow.call(this.$ele),
                        this.$ele
                            .one(this.animations.start, function (e) {
                                r = !0;
                            })
                            .one(this.animations.end, function (n) {
                                e.isFunction(t.settings.onShown) &&
                                    t.settings.onShown.call(this);
                            }),
                        setTimeout(function () {
                            r ||
                                (e.isFunction(t.settings.onShown) &&
                                    t.settings.onShown.call(this));
                        }, 600);
                },
                bind: function () {
                    var t = this;
                    if (
                        (this.$ele
                            .find('[data-notify="dismiss"]')
                            .on('click', function () {
                                t.close();
                            }),
                        this.$ele
                            .mouseover(function (t) {
                                e(this).data('data-hover', 'true');
                            })
                            .mouseout(function (t) {
                                e(this).data('data-hover', 'false');
                            }),
                        this.$ele.data('data-hover', 'false'),
                        this.settings.delay > 0)
                    ) {
                        t.$ele.data('notify-delay', t.settings.delay);
                        var n = setInterval(function () {
                            var e =
                                parseInt(t.$ele.data('notify-delay')) -
                                t.settings.timer;
                            if (
                                ('false' === t.$ele.data('data-hover') &&
                                    'pause' == t.settings.mouse_over) ||
                                'pause' != t.settings.mouse_over
                            ) {
                                var i =
                                    ((t.settings.delay - e) /
                                        t.settings.delay) *
                                    100;
                                t.$ele.data('notify-delay', e),
                                    t.$ele
                                        .find(
                                            '[data-notify="progressbar"] > div'
                                        )
                                        .attr('aria-valuenow', i)
                                        .css('width', i + '%');
                            }
                            e <= -t.settings.timer &&
                                (clearInterval(n), t.close());
                        }, t.settings.timer);
                    }
                },
                close: function () {
                    var t = this,
                        n = parseInt(
                            this.$ele.css(this.settings.placement.from)
                        ),
                        i = !1;
                    this.$ele
                        .data('closing', 'true')
                        .addClass(this.settings.animate.exit),
                        t.reposition(n),
                        e.isFunction(t.settings.onClose) &&
                            t.settings.onClose.call(this.$ele),
                        this.$ele
                            .one(this.animations.start, function (e) {
                                i = !0;
                            })
                            .one(this.animations.end, function (n) {
                                e(this).remove(),
                                    e.isFunction(t.settings.onClosed) &&
                                        t.settings.onClosed.call(this);
                            }),
                        setTimeout(function () {
                            i ||
                                (t.$ele.remove(),
                                t.settings.onClosed &&
                                    t.settings.onClosed(t.$ele));
                        }, 600);
                },
                reposition: function (t) {
                    var n = this,
                        i =
                            '[data-notify-position="' +
                            this.settings.placement.from +
                            '-' +
                            this.settings.placement.align +
                            '"]:not([data-closing="true"])',
                        r = this.$ele.nextAll(i);
                    1 == this.settings.newest_on_top &&
                        (r = this.$ele.prevAll(i)),
                        r.each(function () {
                            e(this).css(n.settings.placement.from, t),
                                (t =
                                    parseInt(t) +
                                    parseInt(n.settings.spacing) +
                                    e(this).outerHeight());
                        });
                },
            }),
            (e.notify = function (e, t) {
                return new n(this, e, t).notify;
            }),
            (e.notifyDefaults = function (n) {
                return (t = e.extend(!0, {}, t, n));
            }),
            (e.notifyClose = function (t) {
                void 0 === t || 'all' == t
                    ? e('[data-notify]')
                          .find('[data-notify="dismiss"]')
                          .trigger('click')
                    : e('[data-notify-position="' + t + '"]')
                          .find('[data-notify="dismiss"]')
                          .trigger('click');
            });
    }),
    (function (e, t) {
        'function' == typeof define && define.amd
            ? define('Chartist', [], function () {
                  return (e.Chartist = t());
              })
            : 'object' == typeof module && module.exports
            ? (module.exports = t())
            : (e.Chartist = t());
    })(this, function () {
        var e = { version: '0.11.1' };
        return (
            (function (e, t) {
                'use strict';
                var n = e.window,
                    i = e.document;
                (t.namespaces = {
                    svg: 'http://www.w3.org/2000/svg',
                    xmlns: 'http://www.w3.org/2000/xmlns/',
                    xhtml: 'http://www.w3.org/1999/xhtml',
                    xlink: 'http://www.w3.org/1999/xlink',
                    ct: 'http://gionkunz.github.com/chartist-js/ct',
                }),
                    (t.noop = function (e) {
                        return e;
                    }),
                    (t.alphaNumerate = function (e) {
                        return String.fromCharCode(97 + (e % 26));
                    }),
                    (t.extend = function (e) {
                        var n, i, r;
                        for (e = e || {}, n = 1; n < arguments.length; n++)
                            for (var o in (i = arguments[n]))
                                e[o] =
                                    'object' != typeof (r = i[o]) ||
                                    null === r ||
                                    r instanceof Array
                                        ? r
                                        : t.extend(e[o], r);
                        return e;
                    }),
                    (t.replaceAll = function (e, t, n) {
                        return e.replace(new RegExp(t, 'g'), n);
                    }),
                    (t.ensureUnit = function (e, t) {
                        return 'number' == typeof e && (e += t), e;
                    }),
                    (t.quantity = function (e) {
                        if ('string' == typeof e) {
                            var t = /^(\d+)\s*(.*)$/g.exec(e);
                            return { value: +t[1], unit: t[2] || void 0 };
                        }
                        return { value: e };
                    }),
                    (t.querySelector = function (e) {
                        return e instanceof Node ? e : i.querySelector(e);
                    }),
                    (t.times = function (e) {
                        return Array.apply(null, new Array(e));
                    }),
                    (t.sum = function (e, t) {
                        return e + (t || 0);
                    }),
                    (t.mapMultiply = function (e) {
                        return function (t) {
                            return t * e;
                        };
                    }),
                    (t.mapAdd = function (e) {
                        return function (t) {
                            return t + e;
                        };
                    }),
                    (t.serialMap = function (e, n) {
                        var i = [],
                            r = Math.max.apply(
                                null,
                                e.map(function (e) {
                                    return e.length;
                                })
                            );
                        return (
                            t.times(r).forEach(function (t, r) {
                                var o = e.map(function (e) {
                                    return e[r];
                                });
                                i[r] = n.apply(null, o);
                            }),
                            i
                        );
                    }),
                    (t.roundWithPrecision = function (e, n) {
                        var i = Math.pow(10, n || t.precision);
                        return Math.round(e * i) / i;
                    }),
                    (t.precision = 8),
                    (t.escapingMap = {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        "'": '&#039;',
                    }),
                    (t.serialize = function (e) {
                        return null == e
                            ? e
                            : ('number' == typeof e
                                  ? (e = '' + e)
                                  : 'object' == typeof e &&
                                    (e = JSON.stringify({ data: e })),
                              Object.keys(t.escapingMap).reduce(function (
                                  e,
                                  n
                              ) {
                                  return t.replaceAll(e, n, t.escapingMap[n]);
                              },
                              e));
                    }),
                    (t.deserialize = function (e) {
                        if ('string' != typeof e) return e;
                        e = Object.keys(t.escapingMap).reduce(function (e, n) {
                            return t.replaceAll(e, t.escapingMap[n], n);
                        }, e);
                        try {
                            e =
                                void 0 !== (e = JSON.parse(e)).data
                                    ? e.data
                                    : e;
                        } catch (n) {}
                        return e;
                    }),
                    (t.createSvg = function (e, n, i, r) {
                        var o;
                        return (
                            (n = n || '100%'),
                            (i = i || '100%'),
                            Array.prototype.slice
                                .call(e.querySelectorAll('svg'))
                                .filter(function (e) {
                                    return e.getAttributeNS(
                                        t.namespaces.xmlns,
                                        'ct'
                                    );
                                })
                                .forEach(function (t) {
                                    e.removeChild(t);
                                }),
                            ((o = new t.Svg('svg')
                                .attr({ width: n, height: i })
                                .addClass(r))._node.style.width = n),
                            (o._node.style.height = i),
                            e.appendChild(o._node),
                            o
                        );
                    }),
                    (t.normalizeData = function (e, n, i) {
                        var r,
                            o = { raw: e, normalized: {} };
                        return (
                            (o.normalized.series = t.getDataArray(
                                { series: e.series || [] },
                                n,
                                i
                            )),
                            (r = o.normalized.series.every(function (e) {
                                return e instanceof Array;
                            })
                                ? Math.max.apply(
                                      null,
                                      o.normalized.series.map(function (e) {
                                          return e.length;
                                      })
                                  )
                                : o.normalized.series.length),
                            (o.normalized.labels = (e.labels || []).slice()),
                            Array.prototype.push.apply(
                                o.normalized.labels,
                                t
                                    .times(
                                        Math.max(
                                            0,
                                            r - o.normalized.labels.length
                                        )
                                    )
                                    .map(function () {
                                        return '';
                                    })
                            ),
                            n && t.reverseData(o.normalized),
                            o
                        );
                    }),
                    (t.safeHasProperty = function (e, t) {
                        return (
                            null !== e &&
                            'object' == typeof e &&
                            e.hasOwnProperty(t)
                        );
                    }),
                    (t.isDataHoleValue = function (e) {
                        return null == e || ('number' == typeof e && isNaN(e));
                    }),
                    (t.reverseData = function (e) {
                        e.labels.reverse(), e.series.reverse();
                        for (var t = 0; t < e.series.length; t++)
                            'object' == typeof e.series[t] &&
                            void 0 !== e.series[t].data
                                ? e.series[t].data.reverse()
                                : e.series[t] instanceof Array &&
                                  e.series[t].reverse();
                    }),
                    (t.getDataArray = function (e, n, i) {
                        return e.series.map(function e(n) {
                            if (t.safeHasProperty(n, 'value'))
                                return e(n.value);
                            if (t.safeHasProperty(n, 'data')) return e(n.data);
                            if (n instanceof Array) return n.map(e);
                            if (!t.isDataHoleValue(n)) {
                                if (i) {
                                    var r = {};
                                    return (
                                        'string' == typeof i
                                            ? (r[i] = t.getNumberOrUndefined(n))
                                            : (r.y = t.getNumberOrUndefined(n)),
                                        (r.x = n.hasOwnProperty('x')
                                            ? t.getNumberOrUndefined(n.x)
                                            : r.x),
                                        (r.y = n.hasOwnProperty('y')
                                            ? t.getNumberOrUndefined(n.y)
                                            : r.y),
                                        r
                                    );
                                }
                                return t.getNumberOrUndefined(n);
                            }
                        });
                    }),
                    (t.normalizePadding = function (e, t) {
                        return (
                            (t = t || 0),
                            'number' == typeof e
                                ? { top: e, right: e, bottom: e, left: e }
                                : {
                                      top: 'number' == typeof e.top ? e.top : t,
                                      right:
                                          'number' == typeof e.right
                                              ? e.right
                                              : t,
                                      bottom:
                                          'number' == typeof e.bottom
                                              ? e.bottom
                                              : t,
                                      left:
                                          'number' == typeof e.left
                                              ? e.left
                                              : t,
                                  }
                        );
                    }),
                    (t.getMetaData = function (e, t) {
                        var n = e.data ? e.data[t] : e[t];
                        return n ? n.meta : void 0;
                    }),
                    (t.orderOfMagnitude = function (e) {
                        return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
                    }),
                    (t.projectLength = function (e, t, n) {
                        return (t / n.range) * e;
                    }),
                    (t.getAvailableHeight = function (e, n) {
                        return Math.max(
                            (t.quantity(n.height).value || e.height()) -
                                (n.chartPadding.top + n.chartPadding.bottom) -
                                n.axisX.offset,
                            0
                        );
                    }),
                    (t.getHighLow = function (e, n, i) {
                        var r = {
                                high:
                                    void 0 ===
                                    (n = t.extend(
                                        {},
                                        n,
                                        i ? n['axis' + i.toUpperCase()] : {}
                                    )).high
                                        ? -Number.MAX_VALUE
                                        : +n.high,
                                low:
                                    void 0 === n.low
                                        ? Number.MAX_VALUE
                                        : +n.low,
                            },
                            o = void 0 === n.high,
                            s = void 0 === n.low;
                        return (
                            (o || s) &&
                                (function e(t) {
                                    if (void 0 !== t)
                                        if (t instanceof Array)
                                            for (var n = 0; n < t.length; n++)
                                                e(t[n]);
                                        else {
                                            var a = i ? +t[i] : +t;
                                            o && a > r.high && (r.high = a),
                                                s && a < r.low && (r.low = a);
                                        }
                                })(e),
                            (n.referenceValue || 0 === n.referenceValue) &&
                                ((r.high = Math.max(n.referenceValue, r.high)),
                                (r.low = Math.min(n.referenceValue, r.low))),
                            r.high <= r.low &&
                                (0 === r.low
                                    ? (r.high = 1)
                                    : r.low < 0
                                    ? (r.high = 0)
                                    : r.high > 0
                                    ? (r.low = 0)
                                    : ((r.high = 1), (r.low = 0))),
                            r
                        );
                    }),
                    (t.isNumeric = function (e) {
                        return null !== e && isFinite(e);
                    }),
                    (t.isFalseyButZero = function (e) {
                        return !e && 0 !== e;
                    }),
                    (t.getNumberOrUndefined = function (e) {
                        return t.isNumeric(e) ? +e : void 0;
                    }),
                    (t.isMultiValue = function (e) {
                        return 'object' == typeof e && ('x' in e || 'y' in e);
                    }),
                    (t.getMultiValue = function (e, n) {
                        return t.isMultiValue(e)
                            ? t.getNumberOrUndefined(e[n || 'y'])
                            : t.getNumberOrUndefined(e);
                    }),
                    (t.rho = function (e) {
                        if (1 === e) return e;
                        function t(e, n) {
                            return e % n == 0 ? n : t(n, e % n);
                        }
                        function n(e) {
                            return e * e + 1;
                        }
                        var i,
                            r = 2,
                            o = 2;
                        if (e % 2 == 0) return 2;
                        do {
                            (r = n(r) % e),
                                (o = n(n(o)) % e),
                                (i = t(Math.abs(r - o), e));
                        } while (1 === i);
                        return i;
                    }),
                    (t.getBounds = function (e, n, i, r) {
                        var o,
                            s,
                            a,
                            l = 0,
                            c = { high: n.high, low: n.low };
                        (c.valueRange = c.high - c.low),
                            (c.oom = t.orderOfMagnitude(c.valueRange)),
                            (c.step = Math.pow(10, c.oom)),
                            (c.min = Math.floor(c.low / c.step) * c.step),
                            (c.max = Math.ceil(c.high / c.step) * c.step),
                            (c.range = c.max - c.min),
                            (c.numberOfSteps = Math.round(c.range / c.step));
                        var u = t.projectLength(e, c.step, c) < i,
                            h = r ? t.rho(c.range) : 0;
                        if (r && t.projectLength(e, 1, c) >= i) c.step = 1;
                        else if (
                            r &&
                            h < c.step &&
                            t.projectLength(e, h, c) >= i
                        )
                            c.step = h;
                        else
                            for (;;) {
                                if (u && t.projectLength(e, c.step, c) <= i)
                                    c.step *= 2;
                                else {
                                    if (
                                        u ||
                                        !(
                                            t.projectLength(e, c.step / 2, c) >=
                                            i
                                        )
                                    )
                                        break;
                                    if (((c.step /= 2), r && c.step % 1 != 0)) {
                                        c.step *= 2;
                                        break;
                                    }
                                }
                                if (l++ > 1e3)
                                    throw new Error(
                                        'Exceeded maximum number of iterations while optimizing scale step!'
                                    );
                            }
                        var d = 2.221e-16;
                        function f(e, t) {
                            return (
                                e === (e += t) && (e *= 1 + (t > 0 ? d : -d)), e
                            );
                        }
                        for (
                            c.step = Math.max(c.step, d), s = c.min, a = c.max;
                            s + c.step <= c.low;

                        )
                            s = f(s, c.step);
                        for (; a - c.step >= c.high; ) a = f(a, -c.step);
                        (c.min = s), (c.max = a), (c.range = c.max - c.min);
                        var p = [];
                        for (o = c.min; o <= c.max; o = f(o, c.step)) {
                            var m = t.roundWithPrecision(o);
                            m !== p[p.length - 1] && p.push(m);
                        }
                        return (c.values = p), c;
                    }),
                    (t.polarToCartesian = function (e, t, n, i) {
                        var r = ((i - 90) * Math.PI) / 180;
                        return {
                            x: e + n * Math.cos(r),
                            y: t + n * Math.sin(r),
                        };
                    }),
                    (t.createChartRect = function (e, n, i) {
                        var r = !(!n.axisX && !n.axisY),
                            o = r ? n.axisY.offset : 0,
                            s = r ? n.axisX.offset : 0,
                            a = e.width() || t.quantity(n.width).value || 0,
                            l = e.height() || t.quantity(n.height).value || 0,
                            c = t.normalizePadding(n.chartPadding, i);
                        (a = Math.max(a, o + c.left + c.right)),
                            (l = Math.max(l, s + c.top + c.bottom));
                        var u = {
                            padding: c,
                            width: function () {
                                return this.x2 - this.x1;
                            },
                            height: function () {
                                return this.y1 - this.y2;
                            },
                        };
                        return (
                            r
                                ? ('start' === n.axisX.position
                                      ? ((u.y2 = c.top + s),
                                        (u.y1 = Math.max(
                                            l - c.bottom,
                                            u.y2 + 1
                                        )))
                                      : ((u.y2 = c.top),
                                        (u.y1 = Math.max(
                                            l - c.bottom - s,
                                            u.y2 + 1
                                        ))),
                                  'start' === n.axisY.position
                                      ? ((u.x1 = c.left + o),
                                        (u.x2 = Math.max(
                                            a - c.right,
                                            u.x1 + 1
                                        )))
                                      : ((u.x1 = c.left),
                                        (u.x2 = Math.max(
                                            a - c.right - o,
                                            u.x1 + 1
                                        ))))
                                : ((u.x1 = c.left),
                                  (u.x2 = Math.max(a - c.right, u.x1 + 1)),
                                  (u.y2 = c.top),
                                  (u.y1 = Math.max(l - c.bottom, u.y2 + 1))),
                            u
                        );
                    }),
                    (t.createGrid = function (e, n, i, r, o, s, a, l) {
                        var c = {};
                        (c[i.units.pos + '1'] = e),
                            (c[i.units.pos + '2'] = e),
                            (c[i.counterUnits.pos + '1'] = r),
                            (c[i.counterUnits.pos + '2'] = r + o);
                        var u = s.elem('line', c, a.join(' '));
                        l.emit(
                            'draw',
                            t.extend(
                                {
                                    type: 'grid',
                                    axis: i,
                                    index: n,
                                    group: s,
                                    element: u,
                                },
                                c
                            )
                        );
                    }),
                    (t.createGridBackground = function (e, t, n, i) {
                        var r = e.elem(
                            'rect',
                            {
                                x: t.x1,
                                y: t.y2,
                                width: t.width(),
                                height: t.height(),
                            },
                            n,
                            !0
                        );
                        i.emit('draw', {
                            type: 'gridBackground',
                            group: e,
                            element: r,
                        });
                    }),
                    (t.createLabel = function (
                        e,
                        n,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d
                    ) {
                        var f,
                            p = {};
                        if (
                            ((p[s.units.pos] = e + l[s.units.pos]),
                            (p[s.counterUnits.pos] = l[s.counterUnits.pos]),
                            (p[s.units.len] = n),
                            (p[s.counterUnits.len] = Math.max(0, a - 10)),
                            h)
                        ) {
                            var m = i.createElement('span');
                            (m.className = u.join(' ')),
                                m.setAttribute('xmlns', t.namespaces.xhtml),
                                (m.innerText = o[r]),
                                (m.style[s.units.len] =
                                    Math.round(p[s.units.len]) + 'px'),
                                (m.style[s.counterUnits.len] =
                                    Math.round(p[s.counterUnits.len]) + 'px'),
                                (f = c.foreignObject(
                                    m,
                                    t.extend({ style: 'overflow: visible;' }, p)
                                ));
                        } else f = c.elem('text', p, u.join(' ')).text(o[r]);
                        d.emit(
                            'draw',
                            t.extend(
                                {
                                    type: 'label',
                                    axis: s,
                                    index: r,
                                    group: c,
                                    element: f,
                                    text: o[r],
                                },
                                p
                            )
                        );
                    }),
                    (t.getSeriesOption = function (e, t, n) {
                        if (e.name && t.series && t.series[e.name]) {
                            var i = t.series[e.name];
                            return i.hasOwnProperty(n) ? i[n] : t[n];
                        }
                        return t[n];
                    }),
                    (t.optionsProvider = function (e, i, r) {
                        var o,
                            s,
                            a = t.extend({}, e),
                            l = [];
                        function c(e) {
                            var l = o;
                            if (((o = t.extend({}, a)), i))
                                for (s = 0; s < i.length; s++)
                                    n.matchMedia(i[s][0]).matches &&
                                        (o = t.extend(o, i[s][1]));
                            r &&
                                e &&
                                r.emit('optionsChanged', {
                                    previousOptions: l,
                                    currentOptions: o,
                                });
                        }
                        if (!n.matchMedia)
                            throw "window.matchMedia not found! Make sure you're using a polyfill.";
                        if (i)
                            for (s = 0; s < i.length; s++) {
                                var u = n.matchMedia(i[s][0]);
                                u.addListener(c), l.push(u);
                            }
                        return (
                            c(),
                            {
                                removeMediaQueryListeners: function () {
                                    l.forEach(function (e) {
                                        e.removeListener(c);
                                    });
                                },
                                getCurrentOptions: function () {
                                    return t.extend({}, o);
                                },
                            }
                        );
                    }),
                    (t.splitIntoSegments = function (e, n, i) {
                        i = t.extend({}, { increasingX: !1, fillHoles: !1 }, i);
                        for (var r = [], o = !0, s = 0; s < e.length; s += 2)
                            void 0 === t.getMultiValue(n[s / 2].value)
                                ? i.fillHoles || (o = !0)
                                : (i.increasingX &&
                                      s >= 2 &&
                                      e[s] <= e[s - 2] &&
                                      (o = !0),
                                  o &&
                                      (r.push({
                                          pathCoordinates: [],
                                          valueData: [],
                                      }),
                                      (o = !1)),
                                  r[r.length - 1].pathCoordinates.push(
                                      e[s],
                                      e[s + 1]
                                  ),
                                  r[r.length - 1].valueData.push(n[s / 2]));
                        return r;
                    });
            })(this, e),
            (function (e, t) {
                'use strict';
                (t.Interpolation = {}),
                    (t.Interpolation.none = function (e) {
                        return (
                            (e = t.extend({}, { fillHoles: !1 }, e)),
                            function (n, i) {
                                for (
                                    var r = new t.Svg.Path(), o = !0, s = 0;
                                    s < n.length;
                                    s += 2
                                ) {
                                    var a = n[s],
                                        l = n[s + 1],
                                        c = i[s / 2];
                                    void 0 !== t.getMultiValue(c.value)
                                        ? (o
                                              ? r.move(a, l, !1, c)
                                              : r.line(a, l, !1, c),
                                          (o = !1))
                                        : e.fillHoles || (o = !0);
                                }
                                return r;
                            }
                        );
                    }),
                    (t.Interpolation.simple = function (e) {
                        e = t.extend({}, { divisor: 2, fillHoles: !1 }, e);
                        var n = 1 / Math.max(1, e.divisor);
                        return function (i, r) {
                            for (
                                var o, s, a, l = new t.Svg.Path(), c = 0;
                                c < i.length;
                                c += 2
                            ) {
                                var u = i[c],
                                    h = i[c + 1],
                                    d = (u - o) * n,
                                    f = r[c / 2];
                                void 0 !== f.value
                                    ? (void 0 === a
                                          ? l.move(u, h, !1, f)
                                          : l.curve(
                                                o + d,
                                                s,
                                                u - d,
                                                h,
                                                u,
                                                h,
                                                !1,
                                                f
                                            ),
                                      (o = u),
                                      (s = h),
                                      (a = f))
                                    : e.fillHoles || (o = u = a = void 0);
                            }
                            return l;
                        };
                    }),
                    (t.Interpolation.cardinal = function (e) {
                        e = t.extend({}, { tension: 1, fillHoles: !1 }, e);
                        var n = Math.min(1, Math.max(0, e.tension)),
                            i = 1 - n;
                        return function r(o, s) {
                            var a = t.splitIntoSegments(o, s, {
                                fillHoles: e.fillHoles,
                            });
                            if (a.length) {
                                if (a.length > 1) {
                                    var l = [];
                                    return (
                                        a.forEach(function (e) {
                                            l.push(
                                                r(
                                                    e.pathCoordinates,
                                                    e.valueData
                                                )
                                            );
                                        }),
                                        t.Svg.Path.join(l)
                                    );
                                }
                                if (
                                    ((s = a[0].valueData),
                                    (o = a[0].pathCoordinates).length <= 4)
                                )
                                    return t.Interpolation.none()(o, s);
                                for (
                                    var c = new t.Svg.Path().move(
                                            o[0],
                                            o[1],
                                            !1,
                                            s[0]
                                        ),
                                        u = 0,
                                        h = o.length;
                                    h - 2 > u;
                                    u += 2
                                ) {
                                    var d = [
                                        { x: +o[u - 2], y: +o[u - 1] },
                                        { x: +o[u], y: +o[u + 1] },
                                        { x: +o[u + 2], y: +o[u + 3] },
                                        { x: +o[u + 4], y: +o[u + 5] },
                                    ];
                                    h - 4 === u
                                        ? (d[3] = d[2])
                                        : u ||
                                          (d[0] = { x: +o[u], y: +o[u + 1] }),
                                        c.curve(
                                            (n *
                                                (6 * d[1].x -
                                                    d[0].x +
                                                    d[2].x)) /
                                                6 +
                                                i * d[2].x,
                                            (n *
                                                (6 * d[1].y -
                                                    d[0].y +
                                                    d[2].y)) /
                                                6 +
                                                i * d[2].y,
                                            (n *
                                                (d[1].x +
                                                    6 * d[2].x -
                                                    d[3].x)) /
                                                6 +
                                                i * d[2].x,
                                            (n *
                                                (d[1].y +
                                                    6 * d[2].y -
                                                    d[3].y)) /
                                                6 +
                                                i * d[2].y,
                                            d[2].x,
                                            d[2].y,
                                            !1,
                                            s[(u + 2) / 2]
                                        );
                                }
                                return c;
                            }
                            return t.Interpolation.none()([]);
                        };
                    }),
                    (t.Interpolation.monotoneCubic = function (e) {
                        return (
                            (e = t.extend({}, { fillHoles: !1 }, e)),
                            function n(i, r) {
                                var o = t.splitIntoSegments(i, r, {
                                    fillHoles: e.fillHoles,
                                    increasingX: !0,
                                });
                                if (o.length) {
                                    if (o.length > 1) {
                                        var s = [];
                                        return (
                                            o.forEach(function (e) {
                                                s.push(
                                                    n(
                                                        e.pathCoordinates,
                                                        e.valueData
                                                    )
                                                );
                                            }),
                                            t.Svg.Path.join(s)
                                        );
                                    }
                                    if (
                                        ((r = o[0].valueData),
                                        (i = o[0].pathCoordinates).length <= 4)
                                    )
                                        return t.Interpolation.none()(i, r);
                                    var a,
                                        l,
                                        c = [],
                                        u = [],
                                        h = i.length / 2,
                                        d = [],
                                        f = [],
                                        p = [],
                                        m = [];
                                    for (a = 0; a < h; a++)
                                        (c[a] = i[2 * a]),
                                            (u[a] = i[2 * a + 1]);
                                    for (a = 0; a < h - 1; a++)
                                        (p[a] = u[a + 1] - u[a]),
                                            (m[a] = c[a + 1] - c[a]),
                                            (f[a] = p[a] / m[a]);
                                    for (
                                        d[0] = f[0], d[h - 1] = f[h - 2], a = 1;
                                        a < h - 1;
                                        a++
                                    )
                                        0 === f[a] ||
                                        0 === f[a - 1] ||
                                        f[a - 1] > 0 != f[a] > 0
                                            ? (d[a] = 0)
                                            : ((d[a] =
                                                  (3 * (m[a - 1] + m[a])) /
                                                  ((2 * m[a] + m[a - 1]) /
                                                      f[a - 1] +
                                                      (m[a] + 2 * m[a - 1]) /
                                                          f[a])),
                                              isFinite(d[a]) || (d[a] = 0));
                                    for (
                                        l = new t.Svg.Path().move(
                                            c[0],
                                            u[0],
                                            !1,
                                            r[0]
                                        ),
                                            a = 0;
                                        a < h - 1;
                                        a++
                                    )
                                        l.curve(
                                            c[a] + m[a] / 3,
                                            u[a] + (d[a] * m[a]) / 3,
                                            c[a + 1] - m[a] / 3,
                                            u[a + 1] - (d[a + 1] * m[a]) / 3,
                                            c[a + 1],
                                            u[a + 1],
                                            !1,
                                            r[a + 1]
                                        );
                                    return l;
                                }
                                return t.Interpolation.none()([]);
                            }
                        );
                    }),
                    (t.Interpolation.step = function (e) {
                        return (
                            (e = t.extend(
                                {},
                                { postpone: !0, fillHoles: !1 },
                                e
                            )),
                            function (n, i) {
                                for (
                                    var r, o, s, a = new t.Svg.Path(), l = 0;
                                    l < n.length;
                                    l += 2
                                ) {
                                    var c = n[l],
                                        u = n[l + 1],
                                        h = i[l / 2];
                                    void 0 !== h.value
                                        ? (void 0 === s
                                              ? a.move(c, u, !1, h)
                                              : (e.postpone
                                                    ? a.line(c, o, !1, s)
                                                    : a.line(r, u, !1, h),
                                                a.line(c, u, !1, h)),
                                          (r = c),
                                          (o = u),
                                          (s = h))
                                        : e.fillHoles || (r = o = s = void 0);
                                }
                                return a;
                            }
                        );
                    });
            })(0, e),
            (function (e, t) {
                'use strict';
                t.EventEmitter = function () {
                    var e = [];
                    return {
                        addEventHandler: function (t, n) {
                            (e[t] = e[t] || []), e[t].push(n);
                        },
                        removeEventHandler: function (t, n) {
                            e[t] &&
                                (n
                                    ? (e[t].splice(e[t].indexOf(n), 1),
                                      0 === e[t].length && delete e[t])
                                    : delete e[t]);
                        },
                        emit: function (t, n) {
                            e[t] &&
                                e[t].forEach(function (e) {
                                    e(n);
                                }),
                                e['*'] &&
                                    e['*'].forEach(function (e) {
                                        e(t, n);
                                    });
                        },
                    };
                };
            })(0, e),
            (function (e, t) {
                'use strict';
                t.Class = {
                    extend: function (e, n) {
                        var i = n || this.prototype || t.Class,
                            r = Object.create(i);
                        t.Class.cloneDefinitions(r, e);
                        var o = function () {
                            var e,
                                n = r.constructor || function () {};
                            return (
                                (e = this === t ? Object.create(r) : this),
                                n.apply(
                                    e,
                                    Array.prototype.slice.call(arguments, 0)
                                ),
                                e
                            );
                        };
                        return (
                            (o.prototype = r),
                            (o.super = i),
                            (o.extend = this.extend),
                            o
                        );
                    },
                    cloneDefinitions: function () {
                        var e = (function (e) {
                                var t = [];
                                if (e.length)
                                    for (var n = 0; n < e.length; n++)
                                        t.push(e[n]);
                                return t;
                            })(arguments),
                            t = e[0];
                        return (
                            e.splice(1, e.length - 1).forEach(function (e) {
                                Object.getOwnPropertyNames(e).forEach(function (
                                    n
                                ) {
                                    delete t[n],
                                        Object.defineProperty(
                                            t,
                                            n,
                                            Object.getOwnPropertyDescriptor(
                                                e,
                                                n
                                            )
                                        );
                                });
                            }),
                            t
                        );
                    },
                };
            })(0, e),
            (function (e, t) {
                'use strict';
                var n = e.window;
                t.Base = t.Class.extend({
                    constructor: function (e, i, r, o, s) {
                        (this.container = t.querySelector(e)),
                            (this.data = i || {}),
                            (this.data.labels = this.data.labels || []),
                            (this.data.series = this.data.series || []),
                            (this.defaultOptions = r),
                            (this.options = o),
                            (this.responsiveOptions = s),
                            (this.eventEmitter = t.EventEmitter()),
                            (this.supportsForeignObject =
                                t.Svg.isSupported('Extensibility')),
                            (this.supportsAnimations = t.Svg.isSupported(
                                'AnimationEventsAttribute'
                            )),
                            (this.resizeListener = function () {
                                this.update();
                            }.bind(this)),
                            this.container &&
                                (this.container.__chartist__ &&
                                    this.container.__chartist__.detach(),
                                (this.container.__chartist__ = this)),
                            (this.initializeTimeoutId = setTimeout(
                                function () {
                                    n.addEventListener(
                                        'resize',
                                        this.resizeListener
                                    ),
                                        (this.optionsProvider =
                                            t.optionsProvider(
                                                this.options,
                                                this.responsiveOptions,
                                                this.eventEmitter
                                            )),
                                        this.eventEmitter.addEventHandler(
                                            'optionsChanged',
                                            function () {
                                                this.update();
                                            }.bind(this)
                                        ),
                                        this.options.plugins &&
                                            this.options.plugins.forEach(
                                                function (e) {
                                                    e instanceof Array
                                                        ? e[0](this, e[1])
                                                        : e(this);
                                                }.bind(this)
                                            ),
                                        this.eventEmitter.emit('data', {
                                            type: 'initial',
                                            data: this.data,
                                        }),
                                        this.createChart(
                                            this.optionsProvider.getCurrentOptions()
                                        ),
                                        (this.initializeTimeoutId = void 0);
                                }.bind(this),
                                0
                            ));
                    },
                    optionsProvider: void 0,
                    container: void 0,
                    svg: void 0,
                    eventEmitter: void 0,
                    createChart: function () {
                        throw new Error(
                            "Base chart type can't be instantiated!"
                        );
                    },
                    update: function (e, n, i) {
                        return (
                            e &&
                                ((this.data = e || {}),
                                (this.data.labels = this.data.labels || []),
                                (this.data.series = this.data.series || []),
                                this.eventEmitter.emit('data', {
                                    type: 'update',
                                    data: this.data,
                                })),
                            n &&
                                ((this.options = t.extend(
                                    {},
                                    i ? this.options : this.defaultOptions,
                                    n
                                )),
                                this.initializeTimeoutId ||
                                    (this.optionsProvider.removeMediaQueryListeners(),
                                    (this.optionsProvider = t.optionsProvider(
                                        this.options,
                                        this.responsiveOptions,
                                        this.eventEmitter
                                    )))),
                            this.initializeTimeoutId ||
                                this.createChart(
                                    this.optionsProvider.getCurrentOptions()
                                ),
                            this
                        );
                    },
                    detach: function () {
                        return (
                            this.initializeTimeoutId
                                ? n.clearTimeout(this.initializeTimeoutId)
                                : (n.removeEventListener(
                                      'resize',
                                      this.resizeListener
                                  ),
                                  this.optionsProvider.removeMediaQueryListeners()),
                            this
                        );
                    },
                    on: function (e, t) {
                        return this.eventEmitter.addEventHandler(e, t), this;
                    },
                    off: function (e, t) {
                        return this.eventEmitter.removeEventHandler(e, t), this;
                    },
                    version: t.version,
                    supportsForeignObject: !1,
                });
            })(this, e),
            (function (e, t) {
                'use strict';
                var n = e.document;
                (t.Svg = t.Class.extend({
                    constructor: function (e, i, r, o, s) {
                        e instanceof Element
                            ? (this._node = e)
                            : ((this._node = n.createElementNS(
                                  t.namespaces.svg,
                                  e
                              )),
                              'svg' === e &&
                                  this.attr({ 'xmlns:ct': t.namespaces.ct })),
                            i && this.attr(i),
                            r && this.addClass(r),
                            o &&
                                (s && o._node.firstChild
                                    ? o._node.insertBefore(
                                          this._node,
                                          o._node.firstChild
                                      )
                                    : o._node.appendChild(this._node));
                    },
                    attr: function (e, n) {
                        return 'string' == typeof e
                            ? n
                                ? this._node.getAttributeNS(n, e)
                                : this._node.getAttribute(e)
                            : (Object.keys(e).forEach(
                                  function (n) {
                                      if (void 0 !== e[n])
                                          if (-1 !== n.indexOf(':')) {
                                              var i = n.split(':');
                                              this._node.setAttributeNS(
                                                  t.namespaces[i[0]],
                                                  n,
                                                  e[n]
                                              );
                                          } else
                                              this._node.setAttribute(n, e[n]);
                                  }.bind(this)
                              ),
                              this);
                    },
                    elem: function (e, n, i, r) {
                        return new t.Svg(e, n, i, this, r);
                    },
                    parent: function () {
                        return this._node.parentNode instanceof SVGElement
                            ? new t.Svg(this._node.parentNode)
                            : null;
                    },
                    root: function () {
                        for (var e = this._node; 'svg' !== e.nodeName; )
                            e = e.parentNode;
                        return new t.Svg(e);
                    },
                    querySelector: function (e) {
                        var n = this._node.querySelector(e);
                        return n ? new t.Svg(n) : null;
                    },
                    querySelectorAll: function (e) {
                        var n = this._node.querySelectorAll(e);
                        return n.length ? new t.Svg.List(n) : null;
                    },
                    getNode: function () {
                        return this._node;
                    },
                    foreignObject: function (e, i, r, o) {
                        if ('string' == typeof e) {
                            var s = n.createElement('div');
                            (s.innerHTML = e), (e = s.firstChild);
                        }
                        e.setAttribute('xmlns', t.namespaces.xmlns);
                        var a = this.elem('foreignObject', i, r, o);
                        return a._node.appendChild(e), a;
                    },
                    text: function (e) {
                        return (
                            this._node.appendChild(n.createTextNode(e)), this
                        );
                    },
                    empty: function () {
                        for (; this._node.firstChild; )
                            this._node.removeChild(this._node.firstChild);
                        return this;
                    },
                    remove: function () {
                        return (
                            this._node.parentNode.removeChild(this._node),
                            this.parent()
                        );
                    },
                    replace: function (e) {
                        return (
                            this._node.parentNode.replaceChild(
                                e._node,
                                this._node
                            ),
                            e
                        );
                    },
                    append: function (e, t) {
                        return (
                            t && this._node.firstChild
                                ? this._node.insertBefore(
                                      e._node,
                                      this._node.firstChild
                                  )
                                : this._node.appendChild(e._node),
                            this
                        );
                    },
                    classes: function () {
                        return this._node.getAttribute('class')
                            ? this._node
                                  .getAttribute('class')
                                  .trim()
                                  .split(/\s+/)
                            : [];
                    },
                    addClass: function (e) {
                        return (
                            this._node.setAttribute(
                                'class',
                                this.classes(this._node)
                                    .concat(e.trim().split(/\s+/))
                                    .filter(function (e, t, n) {
                                        return n.indexOf(e) === t;
                                    })
                                    .join(' ')
                            ),
                            this
                        );
                    },
                    removeClass: function (e) {
                        var t = e.trim().split(/\s+/);
                        return (
                            this._node.setAttribute(
                                'class',
                                this.classes(this._node)
                                    .filter(function (e) {
                                        return -1 === t.indexOf(e);
                                    })
                                    .join(' ')
                            ),
                            this
                        );
                    },
                    removeAllClasses: function () {
                        return this._node.setAttribute('class', ''), this;
                    },
                    height: function () {
                        return this._node.getBoundingClientRect().height;
                    },
                    width: function () {
                        return this._node.getBoundingClientRect().width;
                    },
                    animate: function (e, n, i) {
                        return (
                            void 0 === n && (n = !0),
                            Object.keys(e).forEach(
                                function (r) {
                                    function o(e, n) {
                                        var o,
                                            s,
                                            a,
                                            l = {};
                                        e.easing &&
                                            ((a =
                                                e.easing instanceof Array
                                                    ? e.easing
                                                    : t.Svg.Easing[e.easing]),
                                            delete e.easing),
                                            (e.begin = t.ensureUnit(
                                                e.begin,
                                                'ms'
                                            )),
                                            (e.dur = t.ensureUnit(e.dur, 'ms')),
                                            a &&
                                                ((e.calcMode = 'spline'),
                                                (e.keySplines = a.join(' ')),
                                                (e.keyTimes = '0;1')),
                                            n &&
                                                ((e.fill = 'freeze'),
                                                (l[r] = e.from),
                                                this.attr(l),
                                                (s = t.quantity(
                                                    e.begin || 0
                                                ).value),
                                                (e.begin = 'indefinite')),
                                            (o = this.elem(
                                                'animate',
                                                t.extend(
                                                    { attributeName: r },
                                                    e
                                                )
                                            )),
                                            n &&
                                                setTimeout(
                                                    function () {
                                                        try {
                                                            o._node.beginElement();
                                                        } catch (t) {
                                                            (l[r] = e.to),
                                                                this.attr(l),
                                                                o.remove();
                                                        }
                                                    }.bind(this),
                                                    s
                                                ),
                                            i &&
                                                o._node.addEventListener(
                                                    'beginEvent',
                                                    function () {
                                                        i.emit(
                                                            'animationBegin',
                                                            {
                                                                element: this,
                                                                animate:
                                                                    o._node,
                                                                params: e,
                                                            }
                                                        );
                                                    }.bind(this)
                                                ),
                                            o._node.addEventListener(
                                                'endEvent',
                                                function () {
                                                    i &&
                                                        i.emit('animationEnd', {
                                                            element: this,
                                                            animate: o._node,
                                                            params: e,
                                                        }),
                                                        n &&
                                                            ((l[r] = e.to),
                                                            this.attr(l),
                                                            o.remove());
                                                }.bind(this)
                                            );
                                    }
                                    e[r] instanceof Array
                                        ? e[r].forEach(
                                              function (e) {
                                                  o.bind(this)(e, !1);
                                              }.bind(this)
                                          )
                                        : o.bind(this)(e[r], n);
                                }.bind(this)
                            ),
                            this
                        );
                    },
                })),
                    (t.Svg.isSupported = function (e) {
                        return n.implementation.hasFeature(
                            'http://www.w3.org/TR/SVG11/feature#' + e,
                            '1.1'
                        );
                    }),
                    (t.Svg.Easing = {
                        easeInSine: [0.47, 0, 0.745, 0.715],
                        easeOutSine: [0.39, 0.575, 0.565, 1],
                        easeInOutSine: [0.445, 0.05, 0.55, 0.95],
                        easeInQuad: [0.55, 0.085, 0.68, 0.53],
                        easeOutQuad: [0.25, 0.46, 0.45, 0.94],
                        easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
                        easeInCubic: [0.55, 0.055, 0.675, 0.19],
                        easeOutCubic: [0.215, 0.61, 0.355, 1],
                        easeInOutCubic: [0.645, 0.045, 0.355, 1],
                        easeInQuart: [0.895, 0.03, 0.685, 0.22],
                        easeOutQuart: [0.165, 0.84, 0.44, 1],
                        easeInOutQuart: [0.77, 0, 0.175, 1],
                        easeInQuint: [0.755, 0.05, 0.855, 0.06],
                        easeOutQuint: [0.23, 1, 0.32, 1],
                        easeInOutQuint: [0.86, 0, 0.07, 1],
                        easeInExpo: [0.95, 0.05, 0.795, 0.035],
                        easeOutExpo: [0.19, 1, 0.22, 1],
                        easeInOutExpo: [1, 0, 0, 1],
                        easeInCirc: [0.6, 0.04, 0.98, 0.335],
                        easeOutCirc: [0.075, 0.82, 0.165, 1],
                        easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
                        easeInBack: [0.6, -0.28, 0.735, 0.045],
                        easeOutBack: [0.175, 0.885, 0.32, 1.275],
                        easeInOutBack: [0.68, -0.55, 0.265, 1.55],
                    }),
                    (t.Svg.List = t.Class.extend({
                        constructor: function (e) {
                            var n = this;
                            this.svgElements = [];
                            for (var i = 0; i < e.length; i++)
                                this.svgElements.push(new t.Svg(e[i]));
                            Object.keys(t.Svg.prototype)
                                .filter(function (e) {
                                    return (
                                        -1 ===
                                        [
                                            'constructor',
                                            'parent',
                                            'querySelector',
                                            'querySelectorAll',
                                            'replace',
                                            'append',
                                            'classes',
                                            'height',
                                            'width',
                                        ].indexOf(e)
                                    );
                                })
                                .forEach(function (e) {
                                    n[e] = function () {
                                        var i = Array.prototype.slice.call(
                                            arguments,
                                            0
                                        );
                                        return (
                                            n.svgElements.forEach(function (n) {
                                                t.Svg.prototype[e].apply(n, i);
                                            }),
                                            n
                                        );
                                    };
                                });
                        },
                    }));
            })(this, e),
            (function (e, t) {
                'use strict';
                var n = {
                        m: ['x', 'y'],
                        l: ['x', 'y'],
                        c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
                        a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y'],
                    },
                    i = { accuracy: 3 };
                function r(e, n, i, r, o, s) {
                    var a = t.extend(
                        { command: o ? e.toLowerCase() : e.toUpperCase() },
                        n,
                        s ? { data: s } : {}
                    );
                    i.splice(r, 0, a);
                }
                function o(e, t) {
                    e.forEach(function (i, r) {
                        n[i.command.toLowerCase()].forEach(function (n, o) {
                            t(i, n, r, o, e);
                        });
                    });
                }
                (t.Svg.Path = t.Class.extend({
                    constructor: function (e, n) {
                        (this.pathElements = []),
                            (this.pos = 0),
                            (this.close = e),
                            (this.options = t.extend({}, i, n));
                    },
                    position: function (e) {
                        return void 0 !== e
                            ? ((this.pos = Math.max(
                                  0,
                                  Math.min(this.pathElements.length, e)
                              )),
                              this)
                            : this.pos;
                    },
                    remove: function (e) {
                        return this.pathElements.splice(this.pos, e), this;
                    },
                    move: function (e, t, n, i) {
                        return (
                            r(
                                'M',
                                { x: +e, y: +t },
                                this.pathElements,
                                this.pos++,
                                n,
                                i
                            ),
                            this
                        );
                    },
                    line: function (e, t, n, i) {
                        return (
                            r(
                                'L',
                                { x: +e, y: +t },
                                this.pathElements,
                                this.pos++,
                                n,
                                i
                            ),
                            this
                        );
                    },
                    curve: function (e, t, n, i, o, s, a, l) {
                        return (
                            r(
                                'C',
                                {
                                    x1: +e,
                                    y1: +t,
                                    x2: +n,
                                    y2: +i,
                                    x: +o,
                                    y: +s,
                                },
                                this.pathElements,
                                this.pos++,
                                a,
                                l
                            ),
                            this
                        );
                    },
                    arc: function (e, t, n, i, o, s, a, l, c) {
                        return (
                            r(
                                'A',
                                {
                                    rx: +e,
                                    ry: +t,
                                    xAr: +n,
                                    lAf: +i,
                                    sf: +o,
                                    x: +s,
                                    y: +a,
                                },
                                this.pathElements,
                                this.pos++,
                                l,
                                c
                            ),
                            this
                        );
                    },
                    scale: function (e, t) {
                        return (
                            o(this.pathElements, function (n, i) {
                                n[i] *= 'x' === i[0] ? e : t;
                            }),
                            this
                        );
                    },
                    translate: function (e, t) {
                        return (
                            o(this.pathElements, function (n, i) {
                                n[i] += 'x' === i[0] ? e : t;
                            }),
                            this
                        );
                    },
                    transform: function (e) {
                        return (
                            o(this.pathElements, function (t, n, i, r, o) {
                                var s = e(t, n, i, r, o);
                                (s || 0 === s) && (t[n] = s);
                            }),
                            this
                        );
                    },
                    parse: function (e) {
                        var i = e
                            .replace(/([A-Za-z])([0-9])/g, '$1 $2')
                            .replace(/([0-9])([A-Za-z])/g, '$1 $2')
                            .split(/[\s,]+/)
                            .reduce(function (e, t) {
                                return (
                                    t.match(/[A-Za-z]/) && e.push([]),
                                    e[e.length - 1].push(t),
                                    e
                                );
                            }, []);
                        'Z' === i[i.length - 1][0].toUpperCase() && i.pop();
                        var r = i.map(function (e) {
                                var i = e.shift(),
                                    r = n[i.toLowerCase()];
                                return t.extend(
                                    { command: i },
                                    r.reduce(function (t, n, i) {
                                        return (t[n] = +e[i]), t;
                                    }, {})
                                );
                            }),
                            o = [this.pos, 0];
                        return (
                            Array.prototype.push.apply(o, r),
                            Array.prototype.splice.apply(this.pathElements, o),
                            (this.pos += r.length),
                            this
                        );
                    },
                    stringify: function () {
                        var e = Math.pow(10, this.options.accuracy);
                        return (
                            this.pathElements.reduce(
                                function (t, i) {
                                    var r = n[i.command.toLowerCase()].map(
                                        function (t) {
                                            return this.options.accuracy
                                                ? Math.round(i[t] * e) / e
                                                : i[t];
                                        }.bind(this)
                                    );
                                    return t + i.command + r.join(',');
                                }.bind(this),
                                ''
                            ) + (this.close ? 'Z' : '')
                        );
                    },
                    clone: function (e) {
                        var n = new t.Svg.Path(e || this.close);
                        return (
                            (n.pos = this.pos),
                            (n.pathElements = this.pathElements
                                .slice()
                                .map(function (e) {
                                    return t.extend({}, e);
                                })),
                            (n.options = t.extend({}, this.options)),
                            n
                        );
                    },
                    splitByCommand: function (e) {
                        var n = [new t.Svg.Path()];
                        return (
                            this.pathElements.forEach(function (i) {
                                i.command === e.toUpperCase() &&
                                    0 !== n[n.length - 1].pathElements.length &&
                                    n.push(new t.Svg.Path()),
                                    n[n.length - 1].pathElements.push(i);
                            }),
                            n
                        );
                    },
                })),
                    (t.Svg.Path.elementDescriptions = n),
                    (t.Svg.Path.join = function (e, n, i) {
                        for (
                            var r = new t.Svg.Path(n, i), o = 0;
                            o < e.length;
                            o++
                        )
                            for (
                                var s = e[o], a = 0;
                                a < s.pathElements.length;
                                a++
                            )
                                r.pathElements.push(s.pathElements[a]);
                        return r;
                    });
            })(0, e),
            (function (e, t) {
                'use strict';
                var n = {
                    x: {
                        pos: 'x',
                        len: 'width',
                        dir: 'horizontal',
                        rectStart: 'x1',
                        rectEnd: 'x2',
                        rectOffset: 'y2',
                    },
                    y: {
                        pos: 'y',
                        len: 'height',
                        dir: 'vertical',
                        rectStart: 'y2',
                        rectEnd: 'y1',
                        rectOffset: 'x1',
                    },
                };
                (t.Axis = t.Class.extend({
                    constructor: function (e, t, i, r) {
                        (this.units = e),
                            (this.counterUnits = e === n.x ? n.y : n.x),
                            (this.chartRect = t),
                            (this.axisLength = t[e.rectEnd] - t[e.rectStart]),
                            (this.gridOffset = t[e.rectOffset]),
                            (this.ticks = i),
                            (this.options = r);
                    },
                    createGridAndLabels: function (e, n, i, r, o) {
                        var s = r['axis' + this.units.pos.toUpperCase()],
                            a = this.ticks.map(this.projectValue.bind(this)),
                            l = this.ticks.map(s.labelInterpolationFnc);
                        a.forEach(
                            function (c, u) {
                                var h,
                                    d = { x: 0, y: 0 };
                                (h = a[u + 1]
                                    ? a[u + 1] - c
                                    : Math.max(this.axisLength - c, 30)),
                                    (t.isFalseyButZero(l[u]) && '' !== l[u]) ||
                                        ('x' === this.units.pos
                                            ? ((c = this.chartRect.x1 + c),
                                              (d.x = r.axisX.labelOffset.x),
                                              (d.y =
                                                  'start' === r.axisX.position
                                                      ? this.chartRect.padding
                                                            .top +
                                                        r.axisX.labelOffset.y +
                                                        (i ? 5 : 20)
                                                      : this.chartRect.y1 +
                                                        r.axisX.labelOffset.y +
                                                        (i ? 5 : 20)))
                                            : ((c = this.chartRect.y1 - c),
                                              (d.y =
                                                  r.axisY.labelOffset.y -
                                                  (i ? h : 0)),
                                              (d.x =
                                                  'start' === r.axisY.position
                                                      ? i
                                                          ? this.chartRect
                                                                .padding.left +
                                                            r.axisY.labelOffset
                                                                .x
                                                          : this.chartRect.x1 -
                                                            10
                                                      : this.chartRect.x2 +
                                                        r.axisY.labelOffset.x +
                                                        10)),
                                        s.showGrid &&
                                            t.createGrid(
                                                c,
                                                u,
                                                this,
                                                this.gridOffset,
                                                this.chartRect[
                                                    this.counterUnits.len
                                                ](),
                                                e,
                                                [
                                                    r.classNames.grid,
                                                    r.classNames[
                                                        this.units.dir
                                                    ],
                                                ],
                                                o
                                            ),
                                        s.showLabel &&
                                            t.createLabel(
                                                c,
                                                h,
                                                u,
                                                l,
                                                this,
                                                s.offset,
                                                d,
                                                n,
                                                [
                                                    r.classNames.label,
                                                    r.classNames[
                                                        this.units.dir
                                                    ],
                                                    'start' === s.position
                                                        ? r.classNames[
                                                              s.position
                                                          ]
                                                        : r.classNames.end,
                                                ],
                                                i,
                                                o
                                            ));
                            }.bind(this)
                        );
                    },
                    projectValue: function (e, t, n) {
                        throw new Error("Base axis can't be instantiated!");
                    },
                })),
                    (t.Axis.units = n);
            })(0, e),
            (function (e, t) {
                'use strict';
                t.AutoScaleAxis = t.Axis.extend({
                    constructor: function (e, n, i, r) {
                        var o = r.highLow || t.getHighLow(n, r, e.pos);
                        (this.bounds = t.getBounds(
                            i[e.rectEnd] - i[e.rectStart],
                            o,
                            r.scaleMinSpace || 20,
                            r.onlyInteger
                        )),
                            (this.range = {
                                min: this.bounds.min,
                                max: this.bounds.max,
                            }),
                            t.AutoScaleAxis.super.constructor.call(
                                this,
                                e,
                                i,
                                this.bounds.values,
                                r
                            );
                    },
                    projectValue: function (e) {
                        return (
                            (this.axisLength *
                                (+t.getMultiValue(e, this.units.pos) -
                                    this.bounds.min)) /
                            this.bounds.range
                        );
                    },
                });
            })(0, e),
            (function (e, t) {
                'use strict';
                t.FixedScaleAxis = t.Axis.extend({
                    constructor: function (e, n, i, r) {
                        var o = r.highLow || t.getHighLow(n, r, e.pos);
                        (this.divisor = r.divisor || 1),
                            (this.ticks =
                                r.ticks ||
                                t.times(this.divisor).map(
                                    function (e, t) {
                                        return (
                                            o.low +
                                            ((o.high - o.low) / this.divisor) *
                                                t
                                        );
                                    }.bind(this)
                                )),
                            this.ticks.sort(function (e, t) {
                                return e - t;
                            }),
                            (this.range = { min: o.low, max: o.high }),
                            t.FixedScaleAxis.super.constructor.call(
                                this,
                                e,
                                i,
                                this.ticks,
                                r
                            ),
                            (this.stepLength = this.axisLength / this.divisor);
                    },
                    projectValue: function (e) {
                        return (
                            (this.axisLength *
                                (+t.getMultiValue(e, this.units.pos) -
                                    this.range.min)) /
                            (this.range.max - this.range.min)
                        );
                    },
                });
            })(0, e),
            (function (e, t) {
                'use strict';
                t.StepAxis = t.Axis.extend({
                    constructor: function (e, n, i, r) {
                        t.StepAxis.super.constructor.call(
                            this,
                            e,
                            i,
                            r.ticks,
                            r
                        );
                        var o = Math.max(
                            1,
                            r.ticks.length - (r.stretch ? 1 : 0)
                        );
                        this.stepLength = this.axisLength / o;
                    },
                    projectValue: function (e, t) {
                        return this.stepLength * t;
                    },
                });
            })(0, e),
            (function (e, t) {
                'use strict';
                var n = {
                    axisX: {
                        offset: 30,
                        position: 'end',
                        labelOffset: { x: 0, y: 0 },
                        showLabel: !0,
                        showGrid: !0,
                        labelInterpolationFnc: t.noop,
                        type: void 0,
                    },
                    axisY: {
                        offset: 40,
                        position: 'start',
                        labelOffset: { x: 0, y: 0 },
                        showLabel: !0,
                        showGrid: !0,
                        labelInterpolationFnc: t.noop,
                        type: void 0,
                        scaleMinSpace: 20,
                        onlyInteger: !1,
                    },
                    width: void 0,
                    height: void 0,
                    showLine: !0,
                    showPoint: !0,
                    showArea: !1,
                    areaBase: 0,
                    lineSmooth: !0,
                    showGridBackground: !1,
                    low: void 0,
                    high: void 0,
                    chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
                    fullWidth: !1,
                    reverseData: !1,
                    classNames: {
                        chart: 'ct-chart-line',
                        label: 'ct-label',
                        labelGroup: 'ct-labels',
                        series: 'ct-series',
                        line: 'ct-line',
                        point: 'ct-point',
                        area: 'ct-area',
                        grid: 'ct-grid',
                        gridGroup: 'ct-grids',
                        gridBackground: 'ct-grid-background',
                        vertical: 'ct-vertical',
                        horizontal: 'ct-horizontal',
                        start: 'ct-start',
                        end: 'ct-end',
                    },
                };
                t.Line = t.Base.extend({
                    constructor: function (e, i, r, o) {
                        t.Line.super.constructor.call(
                            this,
                            e,
                            i,
                            n,
                            t.extend({}, n, r),
                            o
                        );
                    },
                    createChart: function (e) {
                        var i = t.normalizeData(this.data, e.reverseData, !0);
                        this.svg = t.createSvg(
                            this.container,
                            e.width,
                            e.height,
                            e.classNames.chart
                        );
                        var r,
                            o,
                            s = this.svg
                                .elem('g')
                                .addClass(e.classNames.gridGroup),
                            a = this.svg.elem('g'),
                            l = this.svg
                                .elem('g')
                                .addClass(e.classNames.labelGroup),
                            c = t.createChartRect(this.svg, e, n.padding);
                        (r =
                            void 0 === e.axisX.type
                                ? new t.StepAxis(
                                      t.Axis.units.x,
                                      i.normalized.series,
                                      c,
                                      t.extend({}, e.axisX, {
                                          ticks: i.normalized.labels,
                                          stretch: e.fullWidth,
                                      })
                                  )
                                : e.axisX.type.call(
                                      t,
                                      t.Axis.units.x,
                                      i.normalized.series,
                                      c,
                                      e.axisX
                                  )),
                            (o =
                                void 0 === e.axisY.type
                                    ? new t.AutoScaleAxis(
                                          t.Axis.units.y,
                                          i.normalized.series,
                                          c,
                                          t.extend({}, e.axisY, {
                                              high: t.isNumeric(e.high)
                                                  ? e.high
                                                  : e.axisY.high,
                                              low: t.isNumeric(e.low)
                                                  ? e.low
                                                  : e.axisY.low,
                                          })
                                      )
                                    : e.axisY.type.call(
                                          t,
                                          t.Axis.units.y,
                                          i.normalized.series,
                                          c,
                                          e.axisY
                                      )),
                            r.createGridAndLabels(
                                s,
                                l,
                                this.supportsForeignObject,
                                e,
                                this.eventEmitter
                            ),
                            o.createGridAndLabels(
                                s,
                                l,
                                this.supportsForeignObject,
                                e,
                                this.eventEmitter
                            ),
                            e.showGridBackground &&
                                t.createGridBackground(
                                    s,
                                    c,
                                    e.classNames.gridBackground,
                                    this.eventEmitter
                                ),
                            i.raw.series.forEach(
                                function (n, s) {
                                    var l = a.elem('g');
                                    l.attr({
                                        'ct:series-name': n.name,
                                        'ct:meta': t.serialize(n.meta),
                                    }),
                                        l.addClass(
                                            [
                                                e.classNames.series,
                                                n.className ||
                                                    e.classNames.series +
                                                        '-' +
                                                        t.alphaNumerate(s),
                                            ].join(' ')
                                        );
                                    var u = [],
                                        h = [];
                                    i.normalized.series[s].forEach(
                                        function (e, a) {
                                            var l = {
                                                x:
                                                    c.x1 +
                                                    r.projectValue(
                                                        e,
                                                        a,
                                                        i.normalized.series[s]
                                                    ),
                                                y:
                                                    c.y1 -
                                                    o.projectValue(
                                                        e,
                                                        a,
                                                        i.normalized.series[s]
                                                    ),
                                            };
                                            u.push(l.x, l.y),
                                                h.push({
                                                    value: e,
                                                    valueIndex: a,
                                                    meta: t.getMetaData(n, a),
                                                });
                                        }.bind(this)
                                    );
                                    var d = {
                                            lineSmooth: t.getSeriesOption(
                                                n,
                                                e,
                                                'lineSmooth'
                                            ),
                                            showPoint: t.getSeriesOption(
                                                n,
                                                e,
                                                'showPoint'
                                            ),
                                            showLine: t.getSeriesOption(
                                                n,
                                                e,
                                                'showLine'
                                            ),
                                            showArea: t.getSeriesOption(
                                                n,
                                                e,
                                                'showArea'
                                            ),
                                            areaBase: t.getSeriesOption(
                                                n,
                                                e,
                                                'areaBase'
                                            ),
                                        },
                                        f = (
                                            'function' == typeof d.lineSmooth
                                                ? d.lineSmooth
                                                : d.lineSmooth
                                                ? t.Interpolation.monotoneCubic()
                                                : t.Interpolation.none()
                                        )(u, h);
                                    if (
                                        (d.showPoint &&
                                            f.pathElements.forEach(
                                                function (i) {
                                                    var a = l
                                                        .elem(
                                                            'line',
                                                            {
                                                                x1: i.x,
                                                                y1: i.y,
                                                                x2: i.x + 0.01,
                                                                y2: i.y,
                                                            },
                                                            e.classNames.point
                                                        )
                                                        .attr({
                                                            'ct:value': [
                                                                i.data.value.x,
                                                                i.data.value.y,
                                                            ]
                                                                .filter(
                                                                    t.isNumeric
                                                                )
                                                                .join(','),
                                                            'ct:meta':
                                                                t.serialize(
                                                                    i.data.meta
                                                                ),
                                                        });
                                                    this.eventEmitter.emit(
                                                        'draw',
                                                        {
                                                            type: 'point',
                                                            value: i.data.value,
                                                            index: i.data
                                                                .valueIndex,
                                                            meta: i.data.meta,
                                                            series: n,
                                                            seriesIndex: s,
                                                            axisX: r,
                                                            axisY: o,
                                                            group: l,
                                                            element: a,
                                                            x: i.x,
                                                            y: i.y,
                                                        }
                                                    );
                                                }.bind(this)
                                            ),
                                        d.showLine)
                                    ) {
                                        var p = l.elem(
                                            'path',
                                            { d: f.stringify() },
                                            e.classNames.line,
                                            !0
                                        );
                                        this.eventEmitter.emit('draw', {
                                            type: 'line',
                                            values: i.normalized.series[s],
                                            path: f.clone(),
                                            chartRect: c,
                                            index: s,
                                            series: n,
                                            seriesIndex: s,
                                            seriesMeta: n.meta,
                                            axisX: r,
                                            axisY: o,
                                            group: l,
                                            element: p,
                                        });
                                    }
                                    if (d.showArea && o.range) {
                                        var m = Math.max(
                                                Math.min(
                                                    d.areaBase,
                                                    o.range.max
                                                ),
                                                o.range.min
                                            ),
                                            g = c.y1 - o.projectValue(m);
                                        f.splitByCommand('M')
                                            .filter(function (e) {
                                                return (
                                                    e.pathElements.length > 1
                                                );
                                            })
                                            .map(function (e) {
                                                var t = e.pathElements[0],
                                                    n =
                                                        e.pathElements[
                                                            e.pathElements
                                                                .length - 1
                                                        ];
                                                return e
                                                    .clone(!0)
                                                    .position(0)
                                                    .remove(1)
                                                    .move(t.x, g)
                                                    .line(t.x, t.y)
                                                    .position(
                                                        e.pathElements.length +
                                                            1
                                                    )
                                                    .line(n.x, g);
                                            })
                                            .forEach(
                                                function (t) {
                                                    var a = l.elem(
                                                        'path',
                                                        { d: t.stringify() },
                                                        e.classNames.area,
                                                        !0
                                                    );
                                                    this.eventEmitter.emit(
                                                        'draw',
                                                        {
                                                            type: 'area',
                                                            values: i.normalized
                                                                .series[s],
                                                            path: t.clone(),
                                                            series: n,
                                                            seriesIndex: s,
                                                            axisX: r,
                                                            axisY: o,
                                                            chartRect: c,
                                                            index: s,
                                                            group: l,
                                                            element: a,
                                                        }
                                                    );
                                                }.bind(this)
                                            );
                                    }
                                }.bind(this)
                            ),
                            this.eventEmitter.emit('created', {
                                bounds: o.bounds,
                                chartRect: c,
                                axisX: r,
                                axisY: o,
                                svg: this.svg,
                                options: e,
                            });
                    },
                });
            })(0, e),
            (function (e, t) {
                'use strict';
                var n = {
                    axisX: {
                        offset: 30,
                        position: 'end',
                        labelOffset: { x: 0, y: 0 },
                        showLabel: !0,
                        showGrid: !0,
                        labelInterpolationFnc: t.noop,
                        scaleMinSpace: 30,
                        onlyInteger: !1,
                    },
                    axisY: {
                        offset: 40,
                        position: 'start',
                        labelOffset: { x: 0, y: 0 },
                        showLabel: !0,
                        showGrid: !0,
                        labelInterpolationFnc: t.noop,
                        scaleMinSpace: 20,
                        onlyInteger: !1,
                    },
                    width: void 0,
                    height: void 0,
                    high: void 0,
                    low: void 0,
                    referenceValue: 0,
                    chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
                    seriesBarDistance: 15,
                    stackBars: !1,
                    stackMode: 'accumulate',
                    horizontalBars: !1,
                    distributeSeries: !1,
                    reverseData: !1,
                    showGridBackground: !1,
                    classNames: {
                        chart: 'ct-chart-bar',
                        horizontalBars: 'ct-horizontal-bars',
                        label: 'ct-label',
                        labelGroup: 'ct-labels',
                        series: 'ct-series',
                        bar: 'ct-bar',
                        grid: 'ct-grid',
                        gridGroup: 'ct-grids',
                        gridBackground: 'ct-grid-background',
                        vertical: 'ct-vertical',
                        horizontal: 'ct-horizontal',
                        start: 'ct-start',
                        end: 'ct-end',
                    },
                };
                t.Bar = t.Base.extend({
                    constructor: function (e, i, r, o) {
                        t.Bar.super.constructor.call(
                            this,
                            e,
                            i,
                            n,
                            t.extend({}, n, r),
                            o
                        );
                    },
                    createChart: function (e) {
                        var i, r;
                        e.distributeSeries
                            ? ((i = t.normalizeData(
                                  this.data,
                                  e.reverseData,
                                  e.horizontalBars ? 'x' : 'y'
                              )).normalized.series = i.normalized.series.map(
                                  function (e) {
                                      return [e];
                                  }
                              ))
                            : (i = t.normalizeData(
                                  this.data,
                                  e.reverseData,
                                  e.horizontalBars ? 'x' : 'y'
                              )),
                            (this.svg = t.createSvg(
                                this.container,
                                e.width,
                                e.height,
                                e.classNames.chart +
                                    (e.horizontalBars
                                        ? ' ' + e.classNames.horizontalBars
                                        : '')
                            ));
                        var o = this.svg
                                .elem('g')
                                .addClass(e.classNames.gridGroup),
                            s = this.svg.elem('g'),
                            a = this.svg
                                .elem('g')
                                .addClass(e.classNames.labelGroup);
                        if (e.stackBars && 0 !== i.normalized.series.length) {
                            var l = t.serialMap(
                                i.normalized.series,
                                function () {
                                    return Array.prototype.slice
                                        .call(arguments)
                                        .map(function (e) {
                                            return e;
                                        })
                                        .reduce(
                                            function (e, t) {
                                                return {
                                                    x: e.x + (t && t.x) || 0,
                                                    y: e.y + (t && t.y) || 0,
                                                };
                                            },
                                            { x: 0, y: 0 }
                                        );
                                }
                            );
                            r = t.getHighLow(
                                [l],
                                e,
                                e.horizontalBars ? 'x' : 'y'
                            );
                        } else
                            r = t.getHighLow(
                                i.normalized.series,
                                e,
                                e.horizontalBars ? 'x' : 'y'
                            );
                        (r.high = +e.high || (0 === e.high ? 0 : r.high)),
                            (r.low = +e.low || (0 === e.low ? 0 : r.low));
                        var c,
                            u,
                            h,
                            d,
                            f,
                            p = t.createChartRect(this.svg, e, n.padding);
                        (u =
                            e.distributeSeries && e.stackBars
                                ? i.normalized.labels.slice(0, 1)
                                : i.normalized.labels),
                            e.horizontalBars
                                ? ((c = d =
                                      void 0 === e.axisX.type
                                          ? new t.AutoScaleAxis(
                                                t.Axis.units.x,
                                                i.normalized.series,
                                                p,
                                                t.extend({}, e.axisX, {
                                                    highLow: r,
                                                    referenceValue: 0,
                                                })
                                            )
                                          : e.axisX.type.call(
                                                t,
                                                t.Axis.units.x,
                                                i.normalized.series,
                                                p,
                                                t.extend({}, e.axisX, {
                                                    highLow: r,
                                                    referenceValue: 0,
                                                })
                                            )),
                                  (h = f =
                                      void 0 === e.axisY.type
                                          ? new t.StepAxis(
                                                t.Axis.units.y,
                                                i.normalized.series,
                                                p,
                                                { ticks: u }
                                            )
                                          : e.axisY.type.call(
                                                t,
                                                t.Axis.units.y,
                                                i.normalized.series,
                                                p,
                                                e.axisY
                                            )))
                                : ((h = d =
                                      void 0 === e.axisX.type
                                          ? new t.StepAxis(
                                                t.Axis.units.x,
                                                i.normalized.series,
                                                p,
                                                { ticks: u }
                                            )
                                          : e.axisX.type.call(
                                                t,
                                                t.Axis.units.x,
                                                i.normalized.series,
                                                p,
                                                e.axisX
                                            )),
                                  (c = f =
                                      void 0 === e.axisY.type
                                          ? new t.AutoScaleAxis(
                                                t.Axis.units.y,
                                                i.normalized.series,
                                                p,
                                                t.extend({}, e.axisY, {
                                                    highLow: r,
                                                    referenceValue: 0,
                                                })
                                            )
                                          : e.axisY.type.call(
                                                t,
                                                t.Axis.units.y,
                                                i.normalized.series,
                                                p,
                                                t.extend({}, e.axisY, {
                                                    highLow: r,
                                                    referenceValue: 0,
                                                })
                                            )));
                        var m = e.horizontalBars
                                ? p.x1 + c.projectValue(0)
                                : p.y1 - c.projectValue(0),
                            g = [];
                        h.createGridAndLabels(
                            o,
                            a,
                            this.supportsForeignObject,
                            e,
                            this.eventEmitter
                        ),
                            c.createGridAndLabels(
                                o,
                                a,
                                this.supportsForeignObject,
                                e,
                                this.eventEmitter
                            ),
                            e.showGridBackground &&
                                t.createGridBackground(
                                    o,
                                    p,
                                    e.classNames.gridBackground,
                                    this.eventEmitter
                                ),
                            i.raw.series.forEach(
                                function (n, r) {
                                    var o,
                                        a,
                                        l = r - (i.raw.series.length - 1) / 2;
                                    (o =
                                        e.distributeSeries && !e.stackBars
                                            ? h.axisLength /
                                              i.normalized.series.length /
                                              2
                                            : e.distributeSeries && e.stackBars
                                            ? h.axisLength / 2
                                            : h.axisLength /
                                              i.normalized.series[r].length /
                                              2),
                                        (a = s.elem('g')).attr({
                                            'ct:series-name': n.name,
                                            'ct:meta': t.serialize(n.meta),
                                        }),
                                        a.addClass(
                                            [
                                                e.classNames.series,
                                                n.className ||
                                                    e.classNames.series +
                                                        '-' +
                                                        t.alphaNumerate(r),
                                            ].join(' ')
                                        ),
                                        i.normalized.series[r].forEach(
                                            function (s, u) {
                                                var v, y, b, _;
                                                if (
                                                    ((_ =
                                                        e.distributeSeries &&
                                                        !e.stackBars
                                                            ? r
                                                            : e.distributeSeries &&
                                                              e.stackBars
                                                            ? 0
                                                            : u),
                                                    (v = e.horizontalBars
                                                        ? {
                                                              x:
                                                                  p.x1 +
                                                                  c.projectValue(
                                                                      s && s.x
                                                                          ? s.x
                                                                          : 0,
                                                                      u,
                                                                      i
                                                                          .normalized
                                                                          .series[
                                                                          r
                                                                      ]
                                                                  ),
                                                              y:
                                                                  p.y1 -
                                                                  h.projectValue(
                                                                      s && s.y
                                                                          ? s.y
                                                                          : 0,
                                                                      _,
                                                                      i
                                                                          .normalized
                                                                          .series[
                                                                          r
                                                                      ]
                                                                  ),
                                                          }
                                                        : {
                                                              x:
                                                                  p.x1 +
                                                                  h.projectValue(
                                                                      s && s.x
                                                                          ? s.x
                                                                          : 0,
                                                                      _,
                                                                      i
                                                                          .normalized
                                                                          .series[
                                                                          r
                                                                      ]
                                                                  ),
                                                              y:
                                                                  p.y1 -
                                                                  c.projectValue(
                                                                      s && s.y
                                                                          ? s.y
                                                                          : 0,
                                                                      u,
                                                                      i
                                                                          .normalized
                                                                          .series[
                                                                          r
                                                                      ]
                                                                  ),
                                                          }),
                                                    h instanceof t.StepAxis &&
                                                        (h.options.stretch ||
                                                            (v[h.units.pos] +=
                                                                o *
                                                                (e.horizontalBars
                                                                    ? -1
                                                                    : 1)),
                                                        (v[h.units.pos] +=
                                                            e.stackBars ||
                                                            e.distributeSeries
                                                                ? 0
                                                                : l *
                                                                  e.seriesBarDistance *
                                                                  (e.horizontalBars
                                                                      ? -1
                                                                      : 1))),
                                                    (g[u] =
                                                        (b = g[u] || m) -
                                                        (m -
                                                            v[
                                                                h.counterUnits
                                                                    .pos
                                                            ])),
                                                    void 0 !== s)
                                                ) {
                                                    var w = {};
                                                    (w[h.units.pos + '1'] =
                                                        v[h.units.pos]),
                                                        (w[h.units.pos + '2'] =
                                                            v[h.units.pos]),
                                                        !e.stackBars ||
                                                        ('accumulate' !==
                                                            e.stackMode &&
                                                            e.stackMode)
                                                            ? ((w[
                                                                  h.counterUnits
                                                                      .pos + '1'
                                                              ] = m),
                                                              (w[
                                                                  h.counterUnits
                                                                      .pos + '2'
                                                              ] =
                                                                  v[
                                                                      h.counterUnits.pos
                                                                  ]))
                                                            : ((w[
                                                                  h.counterUnits
                                                                      .pos + '1'
                                                              ] = b),
                                                              (w[
                                                                  h.counterUnits
                                                                      .pos + '2'
                                                              ] = g[u])),
                                                        (w.x1 = Math.min(
                                                            Math.max(
                                                                w.x1,
                                                                p.x1
                                                            ),
                                                            p.x2
                                                        )),
                                                        (w.x2 = Math.min(
                                                            Math.max(
                                                                w.x2,
                                                                p.x1
                                                            ),
                                                            p.x2
                                                        )),
                                                        (w.y1 = Math.min(
                                                            Math.max(
                                                                w.y1,
                                                                p.y2
                                                            ),
                                                            p.y1
                                                        )),
                                                        (w.y2 = Math.min(
                                                            Math.max(
                                                                w.y2,
                                                                p.y2
                                                            ),
                                                            p.y1
                                                        ));
                                                    var x = t.getMetaData(n, u);
                                                    (y = a
                                                        .elem(
                                                            'line',
                                                            w,
                                                            e.classNames.bar
                                                        )
                                                        .attr({
                                                            'ct:value': [
                                                                s.x,
                                                                s.y,
                                                            ]
                                                                .filter(
                                                                    t.isNumeric
                                                                )
                                                                .join(','),
                                                            'ct:meta':
                                                                t.serialize(x),
                                                        })),
                                                        this.eventEmitter.emit(
                                                            'draw',
                                                            t.extend(
                                                                {
                                                                    type: 'bar',
                                                                    value: s,
                                                                    index: u,
                                                                    meta: x,
                                                                    series: n,
                                                                    seriesIndex:
                                                                        r,
                                                                    axisX: d,
                                                                    axisY: f,
                                                                    chartRect:
                                                                        p,
                                                                    group: a,
                                                                    element: y,
                                                                },
                                                                w
                                                            )
                                                        );
                                                }
                                            }.bind(this)
                                        );
                                }.bind(this)
                            ),
                            this.eventEmitter.emit('created', {
                                bounds: c.bounds,
                                chartRect: p,
                                axisX: d,
                                axisY: f,
                                svg: this.svg,
                                options: e,
                            });
                    },
                });
            })(0, e),
            (function (e, t) {
                'use strict';
                var n = {
                    width: void 0,
                    height: void 0,
                    chartPadding: 5,
                    classNames: {
                        chartPie: 'ct-chart-pie',
                        chartDonut: 'ct-chart-donut',
                        series: 'ct-series',
                        slicePie: 'ct-slice-pie',
                        sliceDonut: 'ct-slice-donut',
                        sliceDonutSolid: 'ct-slice-donut-solid',
                        label: 'ct-label',
                    },
                    startAngle: 0,
                    total: void 0,
                    donut: !1,
                    donutSolid: !1,
                    donutWidth: 60,
                    showLabel: !0,
                    labelOffset: 0,
                    labelPosition: 'inside',
                    labelInterpolationFnc: t.noop,
                    labelDirection: 'neutral',
                    reverseData: !1,
                    ignoreEmptyValues: !1,
                };
                function i(e, t, n) {
                    var i = t.x > e.x;
                    return (i && 'explode' === n) || (!i && 'implode' === n)
                        ? 'start'
                        : (i && 'implode' === n) || (!i && 'explode' === n)
                        ? 'end'
                        : 'middle';
                }
                t.Pie = t.Base.extend({
                    constructor: function (e, i, r, o) {
                        t.Pie.super.constructor.call(
                            this,
                            e,
                            i,
                            n,
                            t.extend({}, n, r),
                            o
                        );
                    },
                    createChart: function (e) {
                        var r,
                            o,
                            s,
                            a,
                            l,
                            c = t.normalizeData(this.data),
                            u = [],
                            h = e.startAngle;
                        (this.svg = t.createSvg(
                            this.container,
                            e.width,
                            e.height,
                            e.donut
                                ? e.classNames.chartDonut
                                : e.classNames.chartPie
                        )),
                            (o = t.createChartRect(this.svg, e, n.padding)),
                            (s = Math.min(o.width() / 2, o.height() / 2)),
                            (l =
                                e.total ||
                                c.normalized.series.reduce(function (e, t) {
                                    return e + t;
                                }, 0));
                        var d = t.quantity(e.donutWidth);
                        '%' === d.unit && (d.value *= s / 100),
                            (s -= e.donut && !e.donutSolid ? d.value / 2 : 0),
                            (a =
                                'outside' === e.labelPosition ||
                                (e.donut && !e.donutSolid)
                                    ? s
                                    : 'center' === e.labelPosition
                                    ? 0
                                    : e.donutSolid
                                    ? s - d.value / 2
                                    : s / 2),
                            (a += e.labelOffset);
                        var f = {
                                x: o.x1 + o.width() / 2,
                                y: o.y2 + o.height() / 2,
                            },
                            p =
                                1 ===
                                c.raw.series.filter(function (e) {
                                    return e.hasOwnProperty('value')
                                        ? 0 !== e.value
                                        : 0 !== e;
                                }).length;
                        c.raw.series.forEach(
                            function (e, t) {
                                u[t] = this.svg.elem('g', null, null);
                            }.bind(this)
                        ),
                            e.showLabel && (r = this.svg.elem('g', null, null)),
                            c.raw.series.forEach(
                                function (n, o) {
                                    if (
                                        0 !== c.normalized.series[o] ||
                                        !e.ignoreEmptyValues
                                    ) {
                                        u[o].attr({ 'ct:series-name': n.name }),
                                            u[o].addClass(
                                                [
                                                    e.classNames.series,
                                                    n.className ||
                                                        e.classNames.series +
                                                            '-' +
                                                            t.alphaNumerate(o),
                                                ].join(' ')
                                            );
                                        var m =
                                                l > 0
                                                    ? h +
                                                      (c.normalized.series[o] /
                                                          l) *
                                                          360
                                                    : 0,
                                            g = Math.max(
                                                0,
                                                h - (0 === o || p ? 0 : 0.2)
                                            );
                                        m - g >= 359.99 && (m = g + 359.99);
                                        var v,
                                            y,
                                            b,
                                            _ = t.polarToCartesian(
                                                f.x,
                                                f.y,
                                                s,
                                                g
                                            ),
                                            w = t.polarToCartesian(
                                                f.x,
                                                f.y,
                                                s,
                                                m
                                            ),
                                            x = new t.Svg.Path(
                                                !e.donut || e.donutSolid
                                            )
                                                .move(w.x, w.y)
                                                .arc(
                                                    s,
                                                    s,
                                                    0,
                                                    m - h > 180,
                                                    0,
                                                    _.x,
                                                    _.y
                                                );
                                        e.donut
                                            ? e.donutSolid &&
                                              ((v = t.polarToCartesian(
                                                  f.x,
                                                  f.y,
                                                  (b = s - d.value),
                                                  h - (0 === o || p ? 0 : 0.2)
                                              )),
                                              (y = t.polarToCartesian(
                                                  f.x,
                                                  f.y,
                                                  b,
                                                  m
                                              )),
                                              x.line(v.x, v.y),
                                              x.arc(
                                                  b,
                                                  b,
                                                  0,
                                                  m - h > 180,
                                                  1,
                                                  y.x,
                                                  y.y
                                              ))
                                            : x.line(f.x, f.y);
                                        var E = e.classNames.slicePie;
                                        e.donut &&
                                            ((E = e.classNames.sliceDonut),
                                            e.donutSolid &&
                                                (E =
                                                    e.classNames
                                                        .sliceDonutSolid));
                                        var S = u[o].elem(
                                            'path',
                                            { d: x.stringify() },
                                            E
                                        );
                                        if (
                                            (S.attr({
                                                'ct:value':
                                                    c.normalized.series[o],
                                                'ct:meta': t.serialize(n.meta),
                                            }),
                                            e.donut &&
                                                !e.donutSolid &&
                                                (S._node.style.strokeWidth =
                                                    d.value + 'px'),
                                            this.eventEmitter.emit('draw', {
                                                type: 'slice',
                                                value: c.normalized.series[o],
                                                totalDataSum: l,
                                                index: o,
                                                meta: n.meta,
                                                series: n,
                                                group: u[o],
                                                element: S,
                                                path: x.clone(),
                                                center: f,
                                                radius: s,
                                                startAngle: h,
                                                endAngle: m,
                                            }),
                                            e.showLabel)
                                        ) {
                                            var T, C;
                                            (T =
                                                1 === c.raw.series.length
                                                    ? { x: f.x, y: f.y }
                                                    : t.polarToCartesian(
                                                          f.x,
                                                          f.y,
                                                          a,
                                                          h + (m - h) / 2
                                                      )),
                                                (C =
                                                    c.normalized.labels &&
                                                    !t.isFalseyButZero(
                                                        c.normalized.labels[o]
                                                    )
                                                        ? c.normalized.labels[o]
                                                        : c.normalized.series[
                                                              o
                                                          ]);
                                            var A = e.labelInterpolationFnc(
                                                C,
                                                o
                                            );
                                            if (A || 0 === A) {
                                                var D = r
                                                    .elem(
                                                        'text',
                                                        {
                                                            dx: T.x,
                                                            dy: T.y,
                                                            'text-anchor': i(
                                                                f,
                                                                T,
                                                                e.labelDirection
                                                            ),
                                                        },
                                                        e.classNames.label
                                                    )
                                                    .text('' + A);
                                                this.eventEmitter.emit('draw', {
                                                    type: 'label',
                                                    index: o,
                                                    group: r,
                                                    element: D,
                                                    text: '' + A,
                                                    x: T.x,
                                                    y: T.y,
                                                });
                                            }
                                        }
                                        h = m;
                                    }
                                }.bind(this)
                            ),
                            this.eventEmitter.emit('created', {
                                chartRect: o,
                                svg: this.svg,
                                options: e,
                            });
                    },
                    determineAnchorPosition: i,
                });
            })(0, e),
            e
        );
    });
