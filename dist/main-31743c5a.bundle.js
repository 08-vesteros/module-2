(() => {
	'use strict';
	var t,
		n = {
			7830: (t, n, e) => {
				e.d(n, { Z: () => i });
				var r = e(655),
					o = e(7294),
					a = e(1067);
				const i = function (t) {
					var n = t.content,
						e = (0, r._T)(t, ['content']);
					return o.createElement(a.W, (0, r.pi)({}, e), n);
				};
			},
			1067: (t, n, e) => {
				e.d(n, { W: () => l });
				var r,
					o = e(655),
					a = e(1893),
					i = e(2037),
					l =
						(i.iZ,
						i.iZ,
						i.r$,
						i.Y,
						a.ZP.button(
							r ||
								(r = (0, o.cy)(
									[
										'\n\tcursor: pointer;\n\tborder-radius: 8px;\n\tbackground-color: ',
										';\n\tborder: ',
										';\n\tcolor: ',
										';\n\tpadding: ',
										';\n\tmargin: ',
										';\n\twidth: ',
										';\n\topacity: ',
										';\n\tpointer-events: ',
										';\n\tfont-size: 16px;\n\ttext-decoration: none;\n\ttext-align: center;\n\n\t&:hover {\n\t\tbackground-color: ',
										';\n\t\tcolor: ',
										';\n\t\ttransition: all 0.3s;\n\t}\n',
									],
									[
										'\n\tcursor: pointer;\n\tborder-radius: 8px;\n\tbackground-color: ',
										';\n\tborder: ',
										';\n\tcolor: ',
										';\n\tpadding: ',
										';\n\tmargin: ',
										';\n\twidth: ',
										';\n\topacity: ',
										';\n\tpointer-events: ',
										';\n\tfont-size: 16px;\n\ttext-decoration: none;\n\ttext-align: center;\n\n\t&:hover {\n\t\tbackground-color: ',
										';\n\t\tcolor: ',
										';\n\t\ttransition: all 0.3s;\n\t}\n',
									]
								)),
							function (t) {
								return t.theme.backgroundColor || 'transparent';
							},
							function (t) {
								return t.theme.border || '2px solid ' + i.iZ;
							},
							function (t) {
								return t.theme.color || i.wC;
							},
							function (t) {
								return t.theme.padding || '12px 0';
							},
							function (t) {
								return t.theme.margin || '0 0 24px 0';
							},
							function (t) {
								return t.theme.width || '180px';
							},
							function (t) {
								return t.disabled ? 0.3 : 1;
							},
							function (t) {
								return t.disabled ? 'none' : 'auto';
							},
							function (t) {
								return t.theme.backgroundColorHover || i.iZ;
							},
							function (t) {
								return t.theme.colorHover || i.Y;
							}
						));
			},
			66: (t, n, e) => {
				e.d(n, { Z: () => m });
				var r,
					o = e(7294),
					a = e(9704),
					i = e(655),
					l = e(1893),
					s = e(2037),
					c = l.ZP.div(
						r ||
							(r = (0, i.cy)(
								[
									'\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tbackground-color: #0000004d;\n\tz-index: 10;\n\n\t.warn__dialog {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tbackground-color: ',
									';\n\t\tborder-radius: 12px;\n\t\twidth: 340px;\n\t\tpadding: 30px;\n\t\tmax-height: 90%;\n\t\toverflow-y: auto;\n\t\ttext-align: center;\n\t}\n\n\t.warn__text {\n\t\tmargin-bottom: 30px;\n\t\tfont-size: 18px;\n\t}\n',
								],
								[
									'\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tbackground-color: #0000004d;\n\tz-index: 10;\n\n\t.warn__dialog {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tbackground-color: ',
									';\n\t\tborder-radius: 12px;\n\t\twidth: 340px;\n\t\tpadding: 30px;\n\t\tmax-height: 90%;\n\t\toverflow-y: auto;\n\t\ttext-align: center;\n\t}\n\n\t.warn__text {\n\t\tmargin-bottom: 30px;\n\t\tfont-size: 18px;\n\t}\n',
								]
							)),
						s.Y
					),
					u = e(7830),
					d = e(3887),
					p = e(6189);
				const m = function () {
					var t = (0, a.I0)(),
						n = (0, p.Z)(function (t) {
							return t.warn;
						}).item,
						e = (0, o.useCallback)(
							function (n) {
								n.currentTarget === n.target && t((0, d.$)(''));
							},
							[n]
						);
					return o.createElement(
						c,
						{ hidden: !n, onClick: e },
						o.createElement(
							'div',
							{ className: 'warn__dialog' },
							o.createElement('p', { className: 'warn__text' }, n),
							o.createElement(u.Z, { onClick: e, content: 'Ok' })
						)
					);
				};
			},
			2037: (t, n, e) => {
				e.d(n, {
					it: () => r,
					yh: () => o,
					iZ: () => a,
					r$: () => i,
					Y: () => l,
					wC: () => s,
					Ss: () => c,
					GP: () => u,
					T5: () => d,
					vj: () => p,
					lf: () => m,
					d3: () => f,
					gT: () => h,
					Th: () => g,
				});
				var r = 'https://ya-praktikum.tech/api/v2',
					o = r + '/resources',
					a = '#8774E1',
					i = '#6a52da',
					l = '#ffffff',
					s = '#000000',
					c = '#ff0000',
					u = '#2f2f2f',
					d = 'solid 1px #e6e6e6',
					p = 600,
					m = 150,
					f = 5,
					h = 30,
					g = 15;
			},
			7639: (t, n, e) => {
				var r = e(7294),
					o = e(3935),
					a = e(9704),
					i = e(8957),
					l = e(655),
					s = e(1893),
					c = e(2037),
					u = e(1068);
				const d = (0, s.vJ)(
					p ||
						(p = (0, l.cy)(
							[
								'\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    padding: 30px 10px;\n    margin: 0;\n    background-color: #fafafa;\n    font-family: sans-serif;\n  }\n\n  main {\n    padding: 20px;\n    background: url(',
								') no-repeat right bottom;\n    background-size: 128px;\n    min-height: 200px;\n  }\n\n  .container {\n    max-width: 768px;\n    margin: 0 auto;\n    border: ',
								';\n    border-radius: 10px;\n    overflow: hidden;\n    background-color: ',
								';\n  }\n',
							],
							[
								'\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    padding: 30px 10px;\n    margin: 0;\n    background-color: #fafafa;\n    font-family: sans-serif;\n  }\n\n  main {\n    padding: 20px;\n    background: url(',
								') no-repeat right bottom;\n    background-size: 128px;\n    min-height: 200px;\n  }\n\n  .container {\n    max-width: 768px;\n    margin: 0 auto;\n    border: ',
								';\n    border-radius: 10px;\n    overflow: hidden;\n    background-color: ',
								';\n  }\n',
							]
						)),
					u,
					c.T5,
					c.Y
				);
				var p,
					m = e(4890),
					f = e(3894),
					h = e(2809),
					g = e(3887);
				const b = (0, m.UY)({ user: h.M3, warn: g.i }),
					v = (0, m.MT)(b, (0, m.md)(f.Z));
				o.render(
					r.createElement(
						a.zt,
						{ store: v },
						r.createElement(d, null),
						r.createElement(i.Z, null)
					),
					document.getElementById('root')
				);
			},
			7422: (t, n, e) => {
				e.d(n, { Z: () => f });
				var r,
					o = e(655),
					a = e(7294),
					i = e(3727),
					l = e(9704),
					s = e(1893),
					c = e(2037),
					u = s.ZP.header(
						r ||
							(r = (0, o.cy)(
								[
									'\n\t.nav {\n\t\tdisplay: flex;\n\t\tborder-bottom: ',
									';\n\n\t\t&__link {\n\t\t\tpadding: 15px;\n\t\t\tflex: 1 100%;\n\t\t\ttext-align: center;\n\t\t\tcolor: ',
									';\n\t\t\tfont-weight: 600;\n\t\t\ttext-decoration: none;\n\t\t\ttransition: 0.3s;\n\t\t\tborder: none;\n\t\t\tbackground-color: initial;\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: sans-serif;\n\t\t\tcursor: pointer;\n\n\t\t\t& + .nav__link {\n\t\t\t\tborder-left: ',
									';\n\t\t\t}\n\n\t\t\t&--active,\n\t\t\t:hover {\n\t\t\t\tcolor: ',
									';\n\t\t\t}\n\n\t\t\t&--active {\n\t\t\t\tbackground-color: ',
									';\n\t\t\t}\n\t\t\t:hover {\n\t\t\t\tbackground-color: ',
									';\n\t\t\t}\n\t\t}\n\t}\n',
								],
								[
									'\n\t.nav {\n\t\tdisplay: flex;\n\t\tborder-bottom: ',
									';\n\n\t\t&__link {\n\t\t\tpadding: 15px;\n\t\t\tflex: 1 100%;\n\t\t\ttext-align: center;\n\t\t\tcolor: ',
									';\n\t\t\tfont-weight: 600;\n\t\t\ttext-decoration: none;\n\t\t\ttransition: 0.3s;\n\t\t\tborder: none;\n\t\t\tbackground-color: initial;\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: sans-serif;\n\t\t\tcursor: pointer;\n\n\t\t\t& + .nav__link {\n\t\t\t\tborder-left: ',
									';\n\t\t\t}\n\n\t\t\t&--active,\n\t\t\t:hover {\n\t\t\t\tcolor: ',
									';\n\t\t\t}\n\n\t\t\t&--active {\n\t\t\t\tbackground-color: ',
									';\n\t\t\t}\n\t\t\t:hover {\n\t\t\t\tbackground-color: ',
									';\n\t\t\t}\n\t\t}\n\t}\n',
								]
							)),
						c.T5,
						c.r$,
						c.T5,
						c.Y,
						c.iZ,
						c.r$
					),
					d = e(6189),
					p = e(8064),
					m = e(2809);
				const f = function (t) {
					var n = t.routes,
						e = (0, l.I0)(),
						r =
							'success' ===
							(0, d.Z)(function (t) {
								return t.user;
							}).status;
					return a.createElement(
						u,
						null,
						a.createElement(
							'nav',
							{ className: 'nav' },
							n.map(function (t) {
								return a.createElement(
									i.OL,
									{
										key: t.path,
										to: t.path,
										exact: !0,
										className: 'nav__link',
										activeClassName: 'nav__link--active',
									},
									t.component.displayName || t.component.name
								);
							}),
							r
								? a.createElement(
										'button',
										{
											type: 'button',
											className: 'nav__link',
											onClick: function () {
												return (0, o.mG)(void 0, void 0, void 0, function () {
													return (0, o.Jh)(this, function (t) {
														switch (t.label) {
															case 0:
																return [4, (0, p.ni)()];
															case 1:
																return 200 === t.sent().status && e((0, m.EH)()), [2];
														}
													});
												});
											},
										},
										'Log out'
								  )
								: null
						)
					);
				};
			},
			4979: (t, n, e) => {
				e.d(n, { Z: () => u });
				var r,
					o = e(7294),
					a = e(2037),
					i = e(3121),
					l = e(655),
					s = e(1893).ZP.canvas(
						r ||
							(r = (0, l.cy)(
								['\n\tborder: 1px solid red;\n\toutline: none;\n'],
								['\n\tborder: 1px solid red;\n\toutline: none;\n']
							))
					),
					c = function (t, n, e, r, o) {
						t.beginPath(), t.fillRect(n, e, r, o), t.closePath();
					};
				const u = function () {
					var t = (0, o.useRef)(null),
						n = { x: 0, y: 200 },
						e = [];
					return (
						(e[0] = { x: 2 * a.vj, y: 220, w: 50, h: 80 }),
						(0, o.useEffect)(function () {
							var r = null == t ? void 0 : t.current,
								o = null == r ? void 0 : r.getContext('2d');
							r &&
								((r.width = 2 * a.vj),
								(r.height = 2 * a.lf),
								(r.style.width = a.vj + 'px'),
								(r.style.height = a.lf + 'px'));
							var i = function () {
								if (r) {
									null == o || o.clearRect(0, 0, r.width, r.height),
										(l = o),
										(s = n.x),
										(u = n.y),
										100,
										100,
										l.beginPath(),
										l.fillRect(s, u, 100, 100),
										l.closePath(),
										n.y < 200 ? (n.y += a.d3) : (n.y = 200);
									for (var t = 0; t < e.length; t += 1)
										c(o, e[t].x, e[t].y, e[t].w, e[t].h),
											(e[t].x -= a.Th),
											135 === e[t].x && e.push({ x: r.width, y: 220, w: 50, h: 80 });
								}
								var l, s, u;
								requestAnimationFrame(i);
							};
							i();
						}, []),
						o.createElement(
							i.i,
							null,
							o.createElement(s, {
								tabIndex: 0,
								ref: t,
								onKeyDown: function () {
									200 === n.y && (n.y = a.gT);
								},
							})
						)
					);
				};
			},
			6624: (t, n, e) => {
				e.d(n, { H: () => Et, d: () => kt });
				var r = e(7294),
					o = function () {
						return r.createElement('div', null, 'Forum');
					};
				o.displayName = 'Forum';
				const a = o;
				var i,
					l = e(655),
					s = e(9590),
					c = e(9704),
					u = [
						{ label: 'First name', type: 'text', name: 'first_name' },
						{ label: 'Second name', type: 'text', name: 'second_name' },
						{ label: 'Display name', type: 'text', name: 'display_name' },
						{ label: 'Email', type: 'email', name: 'email' },
						{ label: 'Phone', type: 'tel', name: 'phone' },
						{ label: 'Login', type: 'text', name: 'login' },
					],
					d = e(7830),
					p = e(1893),
					m = e(2037),
					f = p.ZP.input(
						i ||
							(i = (0, l.cy)(
								[
									'\n\tfont-size: 18px;\n\tpadding: 10px;\n\tmargin: 10px;\n\tbackground-color: transparent;\n\tborder: 1px solid ',
									';\n\tborder-radius: 10px;\n',
								],
								[
									'\n\tfont-size: 18px;\n\tpadding: 10px;\n\tmargin: 10px;\n\tbackground-color: transparent;\n\tborder: 1px solid ',
									';\n\tborder-radius: 10px;\n',
								]
							)),
						m.GP
					);
				const h = function (t) {
					var n = (0, l._T)(t, []);
					return r.createElement(f, (0, l.pi)({}, n));
				};
				var g,
					b = p.ZP.div(
						g || (g = (0, l.cy)(['\n\tdisplay: ', ';\n'], ['\n\tdisplay: ', ';\n'])),
						function (t) {
							return t.touched && t.error ? 'block' : 'none';
						}
					);
				const v = function (t) {
					var n = t.touched,
						e = t.error;
					return r.createElement(b, (0, l.pi)({}, { touched: n, error: e }), e);
				};
				var x,
					y = p.ZP.div(
						x ||
							(x = (0, l.cy)(
								[
									'\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 350px;\n\n\t',
									' {\n\t\twhite-space: pre-line;\n\t\tcolor: ',
									';\n\t\tmargin-bottom: 10px;\n\t\tpadding: 0 20px;\n\t\tfont-size: 14px;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\tposition: relative;\n\n\t\t&__label {\n\t\t\tposition: absolute;\n\t\t\tbackground-color: ',
									';\n\t\t\tcolor: ',
									';\n\t\t\tleft: 20px;\n\t\t\ttop: 1px;\n\t\t\ttransition: 0.2s;\n\t\t\tfont-size: 16px;\n\t\t\tpadding: 0 5px;\n\t\t\tcursor: text;\n\t\t}\n\t}\n\n\t',
									" {\n\t\toutline: none;\n\t\twidth: 100%;\n\t\ttransition: 0.2s;\n\n\t\t&[value='']:not(:focus):not(:disabled) {\n\t\t\t& + .input__label {\n\t\t\t\tfont-size: 18px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t}\n\t\t}\n\t}\n",
								],
								[
									'\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 350px;\n\n\t',
									' {\n\t\twhite-space: pre-line;\n\t\tcolor: ',
									';\n\t\tmargin-bottom: 10px;\n\t\tpadding: 0 20px;\n\t\tfont-size: 14px;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\tposition: relative;\n\n\t\t&__label {\n\t\t\tposition: absolute;\n\t\t\tbackground-color: ',
									';\n\t\t\tcolor: ',
									';\n\t\t\tleft: 20px;\n\t\t\ttop: 1px;\n\t\t\ttransition: 0.2s;\n\t\t\tfont-size: 16px;\n\t\t\tpadding: 0 5px;\n\t\t\tcursor: text;\n\t\t}\n\t}\n\n\t',
									" {\n\t\toutline: none;\n\t\twidth: 100%;\n\t\ttransition: 0.2s;\n\n\t\t&[value='']:not(:focus):not(:disabled) {\n\t\t\t& + .input__label {\n\t\t\t\tfont-size: 18px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t}\n\t\t}\n\t}\n",
								]
							)),
						b,
						m.Ss,
						m.Y,
						m.r$,
						f
					);
				const w = function (t) {
					var n = (0, l._T)(t, []);
					return r.createElement(
						y,
						null,
						r.createElement(
							'label',
							{ className: 'input', htmlFor: n.name },
							r.createElement(h, (0, l.pi)({}, n, { id: n.name })),
							r.createElement('span', { className: 'input__label' }, n.label)
						),
						r.createElement(v, (0, l.pi)({}, n))
					);
				};
				var _ = e(8064),
					E = function (t) {
						return 0 === t.trim().length;
					},
					k = function (t) {
						return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(t);
					},
					P = function (t) {
						return /^[A-Za-z0-9_-]*$/.test(t);
					},
					C = function (t) {
						return /^(?=.*[0-9])([0-9()/+ -]*)$/.test(t);
					},
					S = function (t) {
						return /^\S*$/.test(t);
					},
					Z = function (t) {
						return function (n) {
							return n.length >= t;
						};
					},
					T = function (t) {
						return function (n) {
							return t === n;
						};
					};
				const O = function (t) {
					var n = {};
					return (
						E(t.first_name) && (n.first_name = 'Required'),
						E(t.second_name) && (n.second_name = 'Required'),
						k(t.email) || (n.email = 'Invalid e-mail'),
						C(t.phone) || (n.phone = 'Invalid phone number'),
						Z(7)(t.phone) || (n.phone = 'Phone number is too short'),
						P(t.login) ||
							(n.login =
								'Can contain only latin letters, numbers, underscores or hyphens'),
						Z(5)(t.login) || (n.login = 'Login should be at least 5 characters long'),
						n
					);
				};
				var N,
					z = e(1067),
					$ = p.ZP.form(
						N ||
							(N = (0, l.cy)(
								[
									'\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t',
									' {\n\t\tmargin: 10px;\n\t}\n',
								],
								[
									'\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t',
									' {\n\t\tmargin: 10px;\n\t}\n',
								]
							)),
						z.W
					);
				const j = function (t) {
					var n = t.children,
						e = (0, l._T)(t, ['children']);
					return r.createElement($, (0, l.pi)({}, e), n);
				};
				var I,
					B = p.ZP.div(
						I ||
							(I = (0, l.cy)(
								[
									'\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tmax-width: 500px;\n\tmargin: 20px 0;\n',
								],
								[
									'\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tmax-width: 500px;\n\tmargin: 20px 0;\n',
								]
							))
					);
				const R = function (t) {
					var n = t.children;
					return r.createElement(B, null, n);
				};
				var A = [
						{ label: 'Old password', type: 'password', name: 'oldPassword' },
						{ label: 'New password', type: 'password', name: 'newPassword' },
						{
							label: 'Confirm new password',
							type: 'password',
							name: 'confirmPassword',
						},
					],
					G = { oldPassword: '', newPassword: '', confirmPassword: '' };
				const F = function (t) {
					var n = {};
					return (
						T(t.newPassword)(t.oldPassword) &&
							(n.newPassword = 'New password must differ from old one'),
						Object.keys(t).forEach(function (e) {
							E(t[e]) && (n[e] = 'Required');
						}),
						Object.keys(t).forEach(function (e) {
							S(t[e]) || (n[e] = 'Cannot contain whitespaces');
						}),
						T(t.newPassword)(t.confirmPassword) ||
							(n.confirmPassword = 'Wrong confirmation password'),
						n
					);
				};
				var L = e(3887);
				const Y = function (t) {
					var n = (0, l._T)(t, []),
						e = (0, c.I0)(),
						o = (0, s.TA)({
							initialValues: G,
							onSubmit: function (t) {
								return (0, l.mG)(void 0, void 0, void 0, function () {
									var r;
									return (0, l.Jh)(this, function (o) {
										switch (o.label) {
											case 0:
												return [4, (0, _.Cp)(t)];
											case 1:
												return 200 !== (r = o.sent()).status
													? (e((0, L.$)(r.data.reason)), [2])
													: (e((0, L.$)('Password has been changed!')),
													  n.returnAction(!1),
													  [2]);
										}
									});
								});
							},
							validateOnChange: !1,
							validateOnBlur: !0,
							validate: F,
						});
					return r.createElement(
						j,
						{ onSubmit: o.handleSubmit },
						A.map(function (t) {
							var n = t.label,
								e = t.name,
								a = t.type;
							return r.createElement(w, {
								key: e,
								label: n,
								name: e,
								type: a,
								value: o.values[e],
								touched: o.touched[e],
								error: o.errors[e],
								onChange: o.handleChange,
								onBlur: o.handleBlur,
							});
						}),
						r.createElement(
							R,
							null,
							r.createElement(d.Z, {
								type: 'submit',
								content: 'Confirm',
								disabled: o.isSubmitting,
							}),
							r.createElement(d.Z, {
								type: 'button',
								content: 'Return',
								onClick: function () {
									return n.returnAction(!1);
								},
							})
						)
					);
				};
				var J,
					U = p.ZP.form(
						J ||
							(J = (0, l.cy)(
								[
									"\n\t.avatar {\n\t\tmargin: 10px auto 20px;\n\t\tdisplay: block;\n\t\twidth: 130px;\n\t\theight: 130px;\n\t\tborder: solid 1px #ccc;\n\t\tborder-radius: 50%;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\toverflow: hidden;\n\n\t\t&__img {\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\n\t\t&:hover {\n\t\t\t.avatar__change {\n\t\t\t\ttop: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__change {\n\t\t\tposition: absolute;\n\t\t\ttext-align: center;\n\t\t\tcolor: #fff;\n\t\t\ttop: 100%;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\t\tdisplay: flex;\n\t\t\ttransition: 0.3s;\n\n\t\t\t&::before {\n\t\t\t\tcontent: 'Change profile photo';\n\t\t\t\tmargin: auto;\n\t\t\t}\n\t\t}\n\t}\n",
								],
								[
									"\n\t.avatar {\n\t\tmargin: 10px auto 20px;\n\t\tdisplay: block;\n\t\twidth: 130px;\n\t\theight: 130px;\n\t\tborder: solid 1px #ccc;\n\t\tborder-radius: 50%;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\toverflow: hidden;\n\n\t\t&__img {\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\n\t\t&:hover {\n\t\t\t.avatar__change {\n\t\t\t\ttop: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__change {\n\t\t\tposition: absolute;\n\t\t\ttext-align: center;\n\t\t\tcolor: #fff;\n\t\t\ttop: 100%;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\t\tdisplay: flex;\n\t\t\ttransition: 0.3s;\n\n\t\t\t&::before {\n\t\t\t\tcontent: 'Change profile photo';\n\t\t\t\tmargin: auto;\n\t\t\t}\n\t\t}\n\t}\n",
								]
							))
					),
					q = e(1068),
					W = e(6189),
					H = e(2809);
				const D = function () {
					var t = (0, c.I0)(),
						n = (0, W.Z)(function (t) {
							return t.user;
						}).item;
					return r.createElement(
						U,
						null,
						r.createElement(
							'label',
							{ htmlFor: 'avatar', className: 'avatar' },
							r.createElement('img', {
								src: n.avatar ? m.yh + n.avatar : q,
								alt: n.login,
								className: 'avatar__img',
							}),
							r.createElement('input', {
								onChange: function (n) {
									return (0, l.mG)(void 0, void 0, void 0, function () {
										var e, r, o;
										return (0, l.Jh)(this, function (a) {
											switch (a.label) {
												case 0:
													return (null == (e = n.target.files) ? void 0 : e.length)
														? ((r = new FormData()).append('avatar', e[0]), [4, (0, _.mk)(r)])
														: [2];
												case 1:
													return 200 !== (o = a.sent()).status
														? (t((0, L.$)(o.data.reason)), [2])
														: (t((0, H.Pp)(o.data)), [2]);
											}
										});
									});
								},
								type: 'file',
								accept: 'image/png, image/jpeg',
								name: 'avatar',
								id: 'avatar',
								hidden: !0,
							}),
							r.createElement('div', { className: 'avatar__change' })
						)
					);
				};
				var M = function () {
					var t = (0, W.Z)(function (t) {
							return t.user;
						}).item,
						n = (0, c.I0)(),
						e = t,
						o = (0, r.useState)(!1),
						a = o[0],
						i = o[1],
						p = (0, r.useState)(!1),
						m = p[0],
						f = p[1],
						h = (0, s.TA)({
							initialValues: e,
							onSubmit: function (t) {
								return (0, l.mG)(void 0, void 0, void 0, function () {
									var e;
									return (0, l.Jh)(this, function (r) {
										switch (r.label) {
											case 0:
												return [4, (0, _.Nq)(t)];
											case 1:
												return 200 !== (e = r.sent()).status
													? (n((0, L.$)(e.data.reason)), [2])
													: (n((0, H.Pp)(e.data)),
													  i(!1),
													  n((0, L.$)("Profile's updated!")),
													  [2]);
										}
									});
								});
							},
							validateOnChange: !1,
							validateOnBlur: !0,
							validate: O,
						});
					return m
						? r.createElement(Y, { returnAction: f })
						: r.createElement(
								r.Fragment,
								null,
								r.createElement(D, null),
								r.createElement(
									j,
									{ onSubmit: h.handleSubmit },
									u.map(function (t) {
										var n = t.label,
											e = t.name,
											o = t.type;
										return r.createElement(w, {
											key: e,
											label: n,
											name: e,
											type: o,
											disabled: !a,
											value: h.values[e] || '',
											touched: h.touched[e],
											error: h.errors[e],
											onChange: h.handleChange,
											onBlur: h.handleBlur,
										});
									}),
									r.createElement(
										R,
										null,
										a
											? r.createElement(d.Z, {
													type: 'submit',
													content: 'Save',
													disabled: h.isSubmitting,
											  })
											: r.createElement(d.Z, {
													type: 'button',
													content: 'Change Password',
													onClick: function () {
														return f(!0);
													},
											  }),
										r.createElement(d.Z, {
											type: 'button',
											content: a ? 'Cancel' : 'Edit User Info',
											onClick: function () {
												h.resetForm({ values: e }), i(!a);
											},
										})
									)
								)
						  );
				};
				M.displayName = 'Profile';
				const V = M;
				var K = e(6550),
					Q = p.ZP.li(
						tt ||
							(tt = (0, l.cy)(
								[
									'\n\tdisplay: flex;\n\tpadding: 10px;\n\tborder-left: 2px solid ',
									';\n\tborder-right: 2px solid ',
									';\n\tborder-top: 2px solid ',
									';\n\t&:last-child {\n\t\tborder-bottom: 2px solid ',
									';\n\t}\n\n\tspan {\n\t\tdisplay: block;\n\t}\n\n\t.listItem__position {\n\t\twidth: 30%;\n\t}\n\n\t.listItem__score {\n\t\tmargin-left: auto;\n\t}\n',
								],
								[
									'\n\tdisplay: flex;\n\tpadding: 10px;\n\tborder-left: 2px solid ',
									';\n\tborder-right: 2px solid ',
									';\n\tborder-top: 2px solid ',
									';\n\t&:last-child {\n\t\tborder-bottom: 2px solid ',
									';\n\t}\n\n\tspan {\n\t\tdisplay: block;\n\t}\n\n\t.listItem__position {\n\t\twidth: 30%;\n\t}\n\n\t.listItem__score {\n\t\tmargin-left: auto;\n\t}\n',
								]
							)),
						m.r$,
						m.r$,
						m.r$,
						m.r$
					);
				const X = function (t) {
					var n = t.userData,
						e = t.position,
						o = n.login,
						a = n.score;
					return r.createElement(
						Q,
						null,
						r.createElement('span', { className: 'listItem__position' }, e),
						r.createElement('span', { className: 'listItem__name' }, o),
						r.createElement('span', { className: 'listItem__score' }, a)
					);
				};
				var tt,
					nt,
					et,
					rt = [
						{ id: 123, login: 'monster', score: 523234 },
						{ id: 124, login: 'monster2', score: 123 },
						{ id: 125, login: 'monster3', score: 9999 },
					],
					ot = p.ZP.ul(
						nt ||
							(nt = (0, l.cy)(
								[
									'\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 0;\n\twidth: 40%;\n',
								],
								[
									'\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 0;\n\twidth: 40%;\n',
								]
							))
					),
					at = p.ZP.div(
						et ||
							(et = (0, l.cy)(
								[
									'\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n',
								],
								[
									'\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n',
								]
							))
					),
					it = function () {
						var t = (0, r.useState)(rt)[0].sort(function (t, n) {
								return n.score - t.score;
							}),
							n = (0, K.k6)();
						return r.createElement(
							at,
							null,
							r.createElement(d.Z, {
								content: 'Try again',
								onClick: function () {
									n.push('/game');
								},
							}),
							r.createElement(
								ot,
								null,
								t.map(function (t, n) {
									return r.createElement(X, {
										key: t.login,
										userData: t,
										position: n + 1,
									});
								})
							)
						);
					};
				it.displayName = 'Scoreboard';
				const lt = it,
					st = function (t) {
						var n = {};
						return (
							Object.keys(t).forEach(function (e) {
								E(t[e]) && (n[e] = 'Required');
							}),
							P(t.login) ||
								(n.login =
									'Can contain only latin letters, numbers, underscores or hyphens'),
							Z(5)(t.login) ||
								(n.login = 'Login should be at least 5 characters long'),
							S(t.password) || (n.password = 'Password must not contain whitespaces'),
							n
						);
					};
				var ct = [
						{ label: 'Login', type: 'text', name: 'login' },
						{ label: 'Password', type: 'password', name: 'password' },
					],
					ut = { login: '', password: '' },
					dt = e(7187),
					pt = function () {
						var t = (0, c.I0)(),
							n = (0, s.TA)({
								initialValues: ut,
								onSubmit: function (n) {
									return (0, l.mG)(void 0, void 0, void 0, function () {
										var e;
										return (0, l.Jh)(this, function (r) {
											switch (r.label) {
												case 0:
													return [4, (0, _.zB)(n)];
												case 1:
													return 200 !== (e = r.sent()).status
														? (t((0, L.$)(e.data.reason)), [2])
														: (t((0, dt.B)()), [2]);
											}
										});
									});
								},
								validateOnChange: !1,
								validateOnBlur: !0,
								validate: st,
							});
						return r.createElement(
							j,
							{ onSubmit: n.handleSubmit },
							ct.map(function (t) {
								var e = t.label,
									o = t.name,
									a = t.type;
								return r.createElement(w, {
									key: o,
									label: e,
									name: o,
									type: a,
									value: n.values[o],
									touched: n.touched[o],
									error: n.errors[o],
									onChange: n.handleChange,
									onBlur: n.handleBlur,
								});
							}),
							r.createElement(
								R,
								null,
								r.createElement(d.Z, {
									type: 'submit',
									content: 'Login',
									disabled: n.isSubmitting,
								})
							)
						);
					};
				pt.displayName = 'Sign in';
				const mt = pt;
				var ft = [
						{ label: 'First name', type: 'text', name: 'first_name' },
						{ label: 'Second name', type: 'text', name: 'second_name' },
						{ label: 'Email', type: 'email', name: 'email' },
						{ label: 'Phone', type: 'tel', name: 'phone' },
						{ label: 'Login', type: 'text', name: 'login' },
						{ label: 'Password', type: 'password', name: 'password' },
						{ label: 'Confirm password', type: 'password', name: 'confirm_password' },
					],
					ht = {
						first_name: '',
						second_name: '',
						email: '',
						phone: '',
						login: '',
						password: '',
						confirm_password: '',
					};
				const gt = function (t) {
					var n = {};
					return (
						Object.keys(t).forEach(function (e) {
							E(t[e]) && (n[e] = 'Required');
						}),
						k(t.email) || (n.email = 'Invalid e-mail'),
						C(t.phone) || (n.phone = 'Invalid phone number'),
						Z(7)(t.phone) || (n.phone = 'Phone number is too short'),
						P(t.login) ||
							(n.login =
								'Can contain only latin letters, numbers, underscores or hyphens'),
						Z(5)(t.login) || (n.login = 'Login should be at least 5 characters long'),
						S(t.password) || (n.password = 'Password must not contain whitespaces'),
						T(t.password)(t.confirm_password) ||
							(n.confirm_password = 'Wrong confirmation password'),
						n
					);
				};
				var bt = function () {
					var t = (0, c.I0)(),
						n = (0, s.TA)({
							initialValues: ht,
							onSubmit: function (n) {
								return (0, l.mG)(void 0, void 0, void 0, function () {
									var e;
									return (0, l.Jh)(this, function (r) {
										switch (r.label) {
											case 0:
												return [4, (0, _.y1)(n)];
											case 1:
												return 200 !== (e = r.sent()).status
													? (t((0, L.$)(e.data.reason)), [2])
													: (t((0, dt.B)()), [2]);
										}
									});
								});
							},
							validateOnChange: !1,
							validateOnBlur: !0,
							validate: gt,
						});
					return r.createElement(
						j,
						{ onSubmit: n.handleSubmit },
						ft.map(function (t) {
							var e = t.label,
								o = t.name,
								a = t.type;
							return r.createElement(w, {
								key: o,
								label: e,
								name: o,
								type: a,
								value: n.values[o],
								touched: n.touched[o],
								error: n.errors[o],
								onChange: n.handleChange,
								onBlur: n.handleBlur,
							});
						}),
						r.createElement(
							R,
							null,
							r.createElement(d.Z, {
								type: 'submit',
								content: 'Submit',
								disabled: n.isSubmitting,
							})
						)
					);
				};
				bt.displayName = 'Sign up';
				const vt = bt;
				var xt,
					yt = e(3121),
					wt = p.ZP.span(
						xt ||
							(xt = (0, l.cy)(
								['\n\twidth: 300px;\n\ttext-align: center;\n\tmargin-bottom: 30px;\n'],
								['\n\twidth: 300px;\n\ttext-align: center;\n\tmargin-bottom: 30px;\n']
							))
					),
					_t = function () {
						var t = (0, K.k6)();
						return r.createElement(
							yt.i,
							null,
							r.createElement(
								wt,
								null,
								'Use ',
								r.createElement('b', null, '"Space"'),
								' to control the dino. Try to score the maximum points.'
							),
							r.createElement(d.Z, {
								onClick: function () {
									t.push('/game');
								},
								content: 'Start Game',
							})
						);
					};
				_t.displayName = 'Play';
				var Et = [
						{ path: '/', component: _t },
						{ path: '/profile', component: V },
						{ path: '/scoreboard', component: lt },
						{ path: '/forum', component: a },
					],
					kt = [
						{ path: '/', component: _t },
						{ path: '/signup', component: vt },
						{ path: '/signin', component: mt },
						{ path: '/scoreboard', component: lt },
						{ path: '/forum', component: a },
					];
			},
			7187: (t, n, e) => {
				e.d(n, { B: () => i });
				var r = e(655),
					o = e(2809),
					a = e(8064),
					i = function () {
						return function (t) {
							return (0, r.mG)(void 0, void 0, void 0, function () {
								var n;
								return (0, r.Jh)(this, function (e) {
									switch (e.label) {
										case 0:
											return [4, (0, a.PR)()];
										case 1:
											return (
												(n = e.sent()),
												t(200 === n.status ? (0, o.Pp)(n.data) : (0, o.EH)()),
												[2]
											);
									}
								});
							});
						};
					};
			},
			2809: (t, n, e) => {
				e.d(n, { M3: () => a, Pp: () => l, EH: () => s });
				var r = e(655),
					o = { status: 'pending', item: null },
					a = function (t, n) {
						void 0 === t && (t = o);
						var e = n.type,
							a = n.status,
							i = n.item;
						return 'SET_USER' === e
							? (0, r.pi)((0, r.pi)({}, t), { status: a, item: i })
							: t;
					},
					i = function (t) {
						var n = t.status;
						return { type: 'SET_USER', item: t.item, status: n };
					},
					l = function (t) {
						return i({ item: t, status: 'success' });
					},
					s = function () {
						return i({ item: null, status: 'error' });
					};
			},
			3887: (t, n, e) => {
				e.d(n, { i: () => a, $: () => i });
				var r = e(655),
					o = { item: '' },
					a = function (t, n) {
						void 0 === t && (t = o);
						var e = n.type,
							a = n.item;
						return 'SET_WARN' === e ? (0, r.pi)((0, r.pi)({}, t), { item: a }) : t;
					},
					i = function (t) {
						return { type: 'SET_WARN', item: t };
					};
			},
			6189: (t, n, e) => {
				e.d(n, { Z: () => r });
				const r = e(9704).v9;
			},
			3121: (t, n, e) => {
				e.d(n, { i: () => a });
				var r,
					o = e(655),
					a = e(1893).ZP.div(
						r ||
							(r = (0, o.cy)(
								[
									'\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tpadding: 10vw 0;\n\tfont-size: 20px;\n',
								],
								[
									'\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tpadding: 10vw 0;\n\tfont-size: 20px;\n',
								]
							))
					);
			},
			8064: (t, n, e) => {
				e.d(n, {
					mk: () => f,
					Cp: () => m,
					PR: () => u,
					ni: () => d,
					zB: () => c,
					y1: () => s,
					Nq: () => p,
				});
				var r = e(655),
					o = e(9669),
					a = e.n(o),
					i = e(2037);
				(a().defaults.baseURL = i.it),
					(a().defaults.withCredentials = !0),
					a().interceptors.response.use(
						function (t) {
							return t;
						},
						function (t) {
							return t.response;
						}
					);
				const l = function (t) {
					return (0, r.mG)(void 0, void 0, void 0, function () {
						return (0, r.Jh)(this, function (n) {
							switch (n.label) {
								case 0:
									return [4, a()(t)];
								case 1:
									return [2, n.sent()];
							}
						});
					});
				};
				var s = function (t) {
						return l({ method: 'POST', url: '/auth/signup', data: t });
					},
					c = function (t) {
						return l({ method: 'POST', url: '/auth/signin', data: t });
					},
					u = function () {
						return l({ method: 'GET', url: '/auth/user' });
					},
					d = function () {
						return l({ method: 'POST', url: '/auth/logout' });
					},
					p = function (t) {
						return l({ method: 'PUT', url: '/user/profile', data: t });
					},
					m = function (t) {
						return l({ method: 'PUT', url: '/user/password', data: t });
					},
					f = function (t) {
						return l({ method: 'PUT', url: '/user/profile/avatar', data: t });
					};
			},
			1068: (t, n, e) => {
				t.exports = e.p + 'c727b03d014228c22263.png';
			},
		},
		e = {};
	function r(t) {
		var o = e[t];
		if (void 0 !== o) return o.exports;
		var a = (e[t] = { exports: {} });
		return n[t](a, a.exports, r), a.exports;
	}
	(r.m = n),
		(t = []),
		(r.O = (n, e, o, a) => {
			if (!e) {
				var i = 1 / 0;
				for (u = 0; u < t.length; u++) {
					for (var [e, o, a] = t[u], l = !0, s = 0; s < e.length; s++)
						(!1 & a || i >= a) && Object.keys(r.O).every(t => r.O[t](e[s]))
							? e.splice(s--, 1)
							: ((l = !1), a < i && (i = a));
					if (l) {
						t.splice(u--, 1);
						var c = o();
						void 0 !== c && (n = c);
					}
				}
				return n;
			}
			a = a || 0;
			for (var u = t.length; u > 0 && t[u - 1][2] > a; u--) t[u] = t[u - 1];
			t[u] = [e, o, a];
		}),
		(r.n = t => {
			var n = t && t.__esModule ? () => t.default : () => t;
			return r.d(n, { a: n }), n;
		}),
		(r.d = (t, n) => {
			for (var e in n)
				r.o(n, e) &&
					!r.o(t, e) &&
					Object.defineProperty(t, e, { enumerable: !0, get: n[e] });
		}),
		(r.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (t) {
				if ('object' == typeof window) return window;
			}
		})()),
		(r.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
		(() => {
			var t;
			r.g.importScripts && (t = r.g.location + '');
			var n = r.g.document;
			if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
				var e = n.getElementsByTagName('script');
				e.length && (t = e[e.length - 1].src);
			}
			if (!t)
				throw new Error('Automatic publicPath is not supported in this browser');
			(t = t
				.replace(/#.*$/, '')
				.replace(/\?.*$/, '')
				.replace(/\/[^\/]+$/, '/')),
				(r.p = t);
		})(),
		(() => {
			var t = { 605: 0 };
			r.O.j = n => 0 === t[n];
			var n = (n, e) => {
					var o,
						a,
						[i, l, s] = e,
						c = 0;
					if (i.some(n => 0 !== t[n])) {
						for (o in l) r.o(l, o) && (r.m[o] = l[o]);
						if (s) var u = s(r);
					}
					for (n && n(e); c < i.length; c++)
						(a = i[c]), r.o(t, a) && t[a] && t[a][0](), (t[i[c]] = 0);
					return r.O(u);
				},
				e = (self.webpackChunkmodule_2 = self.webpackChunkmodule_2 || []);
			e.forEach(n.bind(null, 0)), (e.push = n.bind(null, e.push.bind(e)));
		})();
	var o = r.O(void 0, [543, 187, 484, 169, 791, 100], () => r(7639));
	o = r.O(o);
})();
