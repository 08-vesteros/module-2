'use strict';
(self.webpackChunkmodule_2 = self.webpackChunkmodule_2 || []).push([
	[100],
	{
		8957: (e, t, n) => {
			n.d(t, { Z: () => b });
			var r = n(655),
				a = n(7294),
				o = n(3727),
				c = n(6550),
				u = n(9704),
				l = n(66),
				i = n(7422),
				f = n(6624),
				s = n(6189),
				p = n(7187),
				y = n(4979);
			const b = function () {
				var e = (0, s.Z)(function (e) {
						return e.user;
					}).status,
					t = (0, u.I0)(),
					n = 'pending' === e;
				(0, a.useEffect)(
					function () {
						t((0, p.B)());
					},
					['pending']
				);
				var b = 'success' === e ? f.H : f.d;
				return a.createElement(
					'div',
					{ className: 'container' },
					n
						? a.createElement('p', null, 'Loading...')
						: a.createElement(
								o.VK,
								null,
								a.createElement(i.Z, { routes: b }),
								a.createElement(
									'main',
									null,
									a.createElement(
										c.rs,
										null,
										b.map(function (e) {
											return a.createElement(
												c.AW,
												(0, r.pi)({ exact: !0 }, e, { key: e.path })
											);
										}),
										a.createElement(c.AW, { exact: !0, path: '/game', component: y.Z }),
										a.createElement(c.AW, {
											render: function () {
												return a.createElement(c.l_, { to: '/' });
											},
										})
									)
								),
								a.createElement(l.Z, null)
						  )
				);
			};
		},
		655: (e, t, n) => {
			n.d(t, { pi: () => r, _T: () => a, mG: () => o, Jh: () => c, cy: () => u });
			var r = function () {
				return (
					(r =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var a in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
							return e;
						}),
					r.apply(this, arguments)
				);
			};
			function a(e, t) {
				var n = {};
				for (var r in e)
					Object.prototype.hasOwnProperty.call(e, r) &&
						t.indexOf(r) < 0 &&
						(n[r] = e[r]);
				if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
						t.indexOf(r[a]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
							(n[r[a]] = e[r[a]]);
				}
				return n;
			}
			function o(e, t, n, r) {
				return new (n || (n = Promise))(function (a, o) {
					function c(e) {
						try {
							l(r.next(e));
						} catch (e) {
							o(e);
						}
					}
					function u(e) {
						try {
							l(r.throw(e));
						} catch (e) {
							o(e);
						}
					}
					function l(e) {
						var t;
						e.done
							? a(e.value)
							: ((t = e.value),
							  t instanceof n
									? t
									: new n(function (e) {
											e(t);
									  })).then(c, u);
					}
					l((r = r.apply(e, t || [])).next());
				});
			}
			function c(e, t) {
				var n,
					r,
					a,
					o,
					c = {
						label: 0,
						sent: function () {
							if (1 & a[0]) throw a[1];
							return a[1];
						},
						trys: [],
						ops: [],
					};
				return (
					(o = { next: u(0), throw: u(1), return: u(2) }),
					'function' == typeof Symbol &&
						(o[Symbol.iterator] = function () {
							return this;
						}),
					o
				);
				function u(o) {
					return function (u) {
						return (function (o) {
							if (n) throw new TypeError('Generator is already executing.');
							for (; c; )
								try {
									if (
										((n = 1),
										r &&
											(a =
												2 & o[0]
													? r.return
													: o[0]
													? r.throw || ((a = r.return) && a.call(r), 0)
													: r.next) &&
											!(a = a.call(r, o[1])).done)
									)
										return a;
									switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
										case 0:
										case 1:
											a = o;
											break;
										case 4:
											return c.label++, { value: o[1], done: !1 };
										case 5:
											c.label++, (r = o[1]), (o = [0]);
											continue;
										case 7:
											(o = c.ops.pop()), c.trys.pop();
											continue;
										default:
											if (
												!(
													(a = (a = c.trys).length > 0 && a[a.length - 1]) ||
													(6 !== o[0] && 2 !== o[0])
												)
											) {
												c = 0;
												continue;
											}
											if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
												c.label = o[1];
												break;
											}
											if (6 === o[0] && c.label < a[1]) {
												(c.label = a[1]), (a = o);
												break;
											}
											if (a && c.label < a[2]) {
												(c.label = a[2]), c.ops.push(o);
												break;
											}
											a[2] && c.ops.pop(), c.trys.pop();
											continue;
									}
									o = t.call(e, c);
								} catch (e) {
									(o = [6, e]), (r = 0);
								} finally {
									n = a = 0;
								}
							if (5 & o[0]) throw o[1];
							return { value: o[0] ? o[1] : void 0, done: !0 };
						})([o, u]);
					};
				}
			}
			function u(e, t) {
				return (
					Object.defineProperty
						? Object.defineProperty(e, 'raw', { value: t })
						: (e.raw = t),
					e
				);
			}
			Object.create, Object.create;
		},
		5429: (e, t, n) => {
			function r(e) {
				return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
			}
			n.d(t, { Z: () => a });
			const a = function e(t, n) {
				if (t === n) return !0;
				if (null == t || null == n) return !1;
				if (Array.isArray(t))
					return (
						Array.isArray(n) &&
						t.length === n.length &&
						t.every(function (t, r) {
							return e(t, n[r]);
						})
					);
				if ('object' == typeof t || 'object' == typeof n) {
					var a = r(t),
						o = r(n);
					return a !== t || o !== n
						? e(a, o)
						: Object.keys(Object.assign({}, t, n)).every(function (r) {
								return e(t[r], n[r]);
						  });
				}
				return !1;
			};
		},
	},
]);
