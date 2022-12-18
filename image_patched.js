(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8358], {
        12493: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/image", function() {
                return n(4895)
            }])
        },
        95316: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return o
                }
            });
            var i = n(11527),
                r = n(50959);

            function o() {
                var e = (0, r.useState)(0),
                    t = e[0],
                    n = e[1];
                return (0, r.useEffect)((function() {
                    var e = setInterval((function() {
                        n((function(e) {
                            return (e + 1) % 3
                        }))
                    }), 400);
                    return function() {
                        return clearInterval(e)
                    }
                }), []), (0, i.jsx)(i.Fragment, {
                    children: [0, 1, 2].map((function(e) {
                        return (0, i.jsx)("span", {
                            style: {
                                opacity: e <= t ? 1 : 0
                            },
                            children: "."
                        }, e)
                    }))
                })
            }
        },
        37901: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return r
                }
            });
            var i = n(50959);

            function r() {
                var e = (0, i.useState)(0)[1];
                return function() {
                    return e((function(e) {
                        return e + 1
                    }))
                }
            }
        },
        4895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return sn
                }
            });
            var i = n(29452),
                r = n(38975),
                o = n(93712),
                a = n(18316),
                s = n(56262),
                l = n(49980),
                c = n(81319),
                u = n.n(c),
                d = n(11527),
                h = n(49306),
                f = n.n(h),
                p = n(50959),
                g = n(25039),
                m = n(69162),
                v = n(14810),
                x = n(41151),
                y = n(29769),
                w = n(34210),
                b = n.n(w),
                j = n(11227),
                C = n(49413),
                S = n(69056),
                k = n(26234),
                I = n(88888),
                Z = n(94666),
                L = n(80069),
                M = n(65302),
                P = n(45371),
                T = n(54181),
                D = n(77128),
                E = n(81194),
                R = n(26373),
                A = n(99816),
                N = n(56957),
                z = n(63242),
                O = n(31576),
                F = n(87172),
                _ = n(13583),
                Y = n(2876),
                q = n(69115),
                H = n(7872),
                U = n(96715),
                B = n(64518),
                W = n(77451),
                $ = n(39069),
                G = n(31055),
                K = n(49592),
                V = n(47643),
                J = n(95316),
                X = n(59251),
                Q = n(48359);
            var ee = function(e) {
                    var t = e,
                        n = [],
                        i = Array.from({
                            length: e.length
                        }),
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var s, l = t[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
                            var c, u, d = s.value,
                                h = null === (c = d.match(/^~\d*/g)) || void 0 === c ? void 0 : c[0],
                                f = "";
                            if (h) {
                                var p, g, m = Number.parseInt(null !== (p = null === h || void 0 === h ? void 0 : h.slice(1)) && void 0 !== p ? p : "");
                                Number.isNaN(m) && (m = 0), f = null !== (g = n[m]) && void 0 !== g ? g : "", i[m] = !0
                            }
                            var v = d.slice(null !== (u = null === h || void 0 === h ? void 0 : h.length) && void 0 !== u ? u : 0);
                            n.push(f + v)
                        }
                    } catch (x) {
                        o = !0, a = x
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n.filter((function(e, t) {
                        return !i[t]
                    })).join("|")
                },
                te = function(e, t, n) {
                    var i = 4;
                    return e * t > 524288 && (i = 1), n ? Math.min(i, n) : i
                },
                ne = function(e, t) {
                    var n = e,
                        i = Math.floor(n / t) * t,
                        r = Math.ceil(n / t) * t,
                        o = n - i < r - n ? i : r;
                    return Number.isNaN(o) ? "" : (o <= 0 ? t : o).toString()
                },
                ie = function(e, t) {
                    var n = e,
                        i = Math.floor(n / t) * t,
                        r = Math.ceil(n / t) * t,
                        o = n - i < r - n ? i : r;
                    return Number.isNaN(o) ? 0 : o <= 0 ? t : o
                },
                re = /((\d*\.\d*)|(\d+))/g,
                oe = /(\d+)/g,
                ae = /(-)?(\d+)/g,
                se = function(e, t, n, i) {
                    var r = e.replace(/[^\d.-]+/g, ""),
                        o = n ? re : i ? ae : oe,
                        a = r.match(o);
                    a && (r = a[0]);
                    var s = Number.parseFloat(r);
                    Number.isNaN(s) && (s = void 0), t(s)
                };

            function le(e) {
                return e === I.oS.stableDiffusion || e === I.oS.naiDiffusion || e === I.oS.safeDiffusion || e === I.oS.waifuDiffusion || e === I.oS.naiDiffusionFurry
            }

            function ce(e, t) {
                return !(le(t) && (!e.width || !e.height || e.steps > 50)) && !(e.width * e.height > 1048576)
            }
            var ue = new Set([3, 9, 27, 36, 37]),
                de = new Set([I.r2.ddim, I.r2.plms]);

            function he(e, t) {
                return !!(le(t) && ue.has(e.steps) && de.has(e.sampler))
            }

            function fe(e) {
                switch (e) {
                    case I.oS.stableDiffusion:
                    case I.oS.naiDiffusion:
                    case I.oS.safeDiffusion:
                    case I.oS.waifuDiffusion:
                    case I.oS.naiDiffusionFurry:
                        return {
                            width: 512, height: 768, scale: 11, sampler: I.r2.kEulerAncestral, steps: 28, seed: void 0, n_samples: 1, strength: .7, noise: .2, module: void 0, ucPreset: 0, qualityToggle: !0
                        };
                    case I.oS.dalleMini:
                        return {
                            temperature: .5, top_k: 10, supercondition_factor: .5, n_samples: 4
                        }
                }
            }
            var pe = [{
                id: I.oS.safeDiffusion,
                name: "NAI Diffusion Anime (Curated)",
                description: (0, d.jsxs)(d.Fragment, {
                    children: ["Good baseline quality and predictable subject matter. ", (0, d.jsx)("br", {}), "Recommended for streaming."]
                })
            }, {
                id: I.oS.naiDiffusion,
                name: "NAI Diffusion Anime (Full)",
                description: "The expanded training set allows for a wider variety of generations."
            }, {
                id: I.oS.naiDiffusionFurry,
                name: "NAI Diffusion Furry (Beta V1.3)",
                description: "Beta model for furry and other non-human content."
            }].concat((0, l.Z)("production" !== q.qA ? [{
                id: I.oS.stableDiffusion,
                name: "Stable Diffusion",
                description: ""
            }, {
                id: I.oS.waifuDiffusion,
                name: "Waifu Diffusion",
                description: ""
            }] : []));

            function ge(e) {
                switch (e) {
                    case "Stable Diffusion 1D44365E":
                    default:
                        return I.oS.safeDiffusion;
                    case "Stable Diffusion 81274D13":
                        return I.oS.naiDiffusion;
                    case "Stable Diffusion 4CC42576":
                    case "Stable Diffusion 1D09C008":
                    case "Stable Diffusion 1D09D794":
                        return I.oS.naiDiffusionFurry
                }
            }
            var me = [{
                strength: .2,
                noise: 0
            }, {
                strength: .4,
                noise: 0
            }, {
                strength: .5,
                noise: 0
            }, {
                strength: .6,
                noise: 0
            }, {
                strength: .7,
                noise: .1
            }];

            function ve(e) {
                return e.startsWith(", ") ? e.slice(2) : e
            }

            function xe(e) {
                switch (e) {
                    case I.oS.naiDiffusion:
                    case I.oS.safeDiffusion:
                        return [{
                            name: "Low Quality + Bad Anatomy",
                            text: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"
                        }, {
                            name: "Low Quality",
                            text: "lowres, text, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"
                        }, {
                            name: "None",
                            text: "lowres"
                        }];
                    case I.oS.naiDiffusionFurry:
                        return [{
                            name: "Low Quality",
                            text: "worst quality, low quality, what has science done, what, nightmare fuel, eldritch horror, where is your god now, why"
                        }, {
                            name: "Bad Anatomy",
                            text: "{worst quality}, low quality, distracting watermark, [nightmare fuel], {{unfinished}}, deformed, outline, pattern, simple background"
                        }, {
                            name: "None",
                            text: "low res"
                        }];
                    default:
                        return []
                }
            }

            function ye(e) {
                return new Promise((function(t, n) {
                    var i = new Image;
                    i.addEventListener("load", (function() {
                        return t(i)
                    })), i.addEventListener("error", (function() {
                        return n(new Error("Failed to load image"))
                    })), i.src = "data:image/png;base64,".concat(e.toString("base64"))
                }))
            }

            function we(e, t, n, i, r) {
                return be.apply(this, arguments)
            }

            function be() {
                return (be = (0, i.Z)(u().mark((function e(t, n, i, r, o) {
                    var a, s, l, c;
                    return u().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = document.createElement("canvas"), e.next = 3, ye(t);
                            case 3:
                                if (s = e.sent, a.width = r || s.width, a.height = i || s.height, l = a.getContext("2d")) {
                                    e.next = 10;
                                    break
                                }
                                return (0, g.Am)("Could not create canvas context"), e.abrupt("return");
                            case 10:
                                l.fillStyle = n, l.fillRect(0, 0, a.width, a.height), r && i ? l.drawImage(s, 0, 0, r, i) : l.drawImage(s, 0, 0), c = "";
                                try {
                                    c = o ? a.toDataURL("image/jpeg", .95) : a.toDataURL("image/png")
                                } catch (u) {
                                    c = a.toDataURL("image/png")
                                }
                                return e.abrupt("return", c.split(",")[1]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var je = [{
                        name: "Portrait",
                        width: 512,
                        height: 768,
                        category: "Normal"
                    }, {
                        name: "Landscape",
                        width: 768,
                        height: 512,
                        category: "Normal"
                    }, {
                        name: "Square",
                        width: 640,
                        height: 640,
                        category: "Normal"
                    }, {
                        name: "Portrait",
                        width: 384,
                        height: 640,
                        category: "Small"
                    }, {
                        name: "Landscape",
                        width: 640,
                        height: 384,
                        category: "Small"
                    }, {
                        name: "Square",
                        width: 512,
                        height: 512,
                        category: "Small"
                    },
                    {
                        name: "Portrait",
                        width: 320,
                        height: 512,
                        category: "Extra Small"
                    },
                    {
                        name: "Landscape",
                        width: 512,
                        height: 320,
                        category: "Extra Small"
                    },
                    {
                        name: "Square",
                        width: 384,
                        height: 384,
                        category: "Extra Small"
                    },
                    {
                        name: "Portrait",
                        width: 512,
                        height: 1024,
                        category: "Large"
                    }, {
                        name: "Landscape",
                        width: 1024,
                        height: 512,
                        category: "Large"
                    }, {
                        name: "Square",
                        width: 1024,
                        height: 1024,
                        category: "Large"
                    }, {
                        name: "Custom",
                        width: 0,
                        height: 0,
                        category: "Custom"
                    }
                ],
                Ce = je.reduce((function(e, t) {
                    var n = e.find((function(e) {
                        return e.name === t.category
                    }));
                    return n || (n = {
                        name: t.category,
                        resolutions: []
                    }, e.push(n)), n.resolutions.push({
                        name: t.name,
                        width: t.width,
                        height: t.height
                    }), e
                }), []),
                Se = [{
                    label: "Recommended",
                    options: [{
                        name: "K Euler Ancestral",
                        value: I.r2.kEulerAncestral
                    }, {
                        name: "K Euler",
                        value: I.r2.kEuler
                    }, {
                        name: "K LMS",
                        value: I.r2.kLms
                    }]
                }, {
                    label: "Other",
                    options: [{
                        name: "PLMS",
                        value: I.r2.plms
                    }, {
                        name: "DDIM",
                        value: I.r2.ddim
                    }]
                }],
                ke = n(62721),
                Ie = n(22514),
                Ze = n(80929),
                Le = n(23909),
                Me = n(81626),
                Pe = (0, p.forwardRef)((function(e, t) {
                    var n = (0, p.useState)(0),
                        i = n[0],
                        r = n[1];
                    (0, p.useEffect)((function() {
                        if (e.params.width && e.params.height) {
                            var t = je.findIndex((function(t) {
                                return t.width === e.params.width && t.height == e.params.height
                            }));
                            r(t < 0 ? je.length - 1 : t)
                        }
                    }), [e.params.width, e.params.height]);
                    var s, l, c, u, h, f, g, m, v, x, w, b, j, C = {
                            onMouseDown: function(e) {
                                e.target !== document.activeElement && (e.preventDefault(), e.target.select())
                            }
                        },
                        S = 0,
                        k = xe(e.model),
                        L = (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsxs)(Ie.xw, {
                                ref: t,
                                children: [(0, d.jsxs)(T.gq, {
                                    children: [(0, d.jsx)(Ie.Dx, {
                                        children: "Image Resolution"
                                    }), (0, d.jsx)(Ie.Dx, {
                                        style: {
                                            opacity: .5
                                        },
                                        children: "[w x h]"
                                    })]
                                }), (0, d.jsx)(P.Ph, {
                                    isSearchable: !1,
                                    "aria-label": "Select a Resolution",
                                    maxMenuHeight: 420,
                                    options: Ce.map((function(e) {
                                        return {
                                            label: e.name,
                                            options: e.resolutions.map((function(e, t) {
                                                return {
                                                    value: S++,
                                                    description: "Custom" === e.name ? e.name : "".concat(e.name, " (").concat(e.width, "x").concat(e.height, ")"),
                                                    label: (0, d.jsx)(d.Fragment, {
                                                        children: "Custom" === e.name ? e.name : "".concat(e.name, " (").concat(e.width, "x").concat(e.height, ")")
                                                    })
                                                }
                                            }))
                                        }
                                    })),
                                    onChange: function(t) {
                                        null !== t && (r(t.value), t.value !== je.length - 1 && e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                            width: je[t.value].width,
                                            height: je[t.value].height
                                        })))
                                    },
                                    value: {
                                        value: i,
                                        description: "".concat(je[i].name, " (").concat(je[i].category, ")"),
                                        label: (0, d.jsx)(d.Fragment, {
                                            children: "".concat(je[i].name, " (").concat(je[i].category, ")")
                                        })
                                    }
                                }), (0, d.jsxs)(T.gq, {
                                    children: [(0, d.jsx)(Ie.II, (0, o.Z)({
                                        type: "number",
                                        style: {
                                            opacity: i !== je.length - 1 ? .5 : 1
                                        },
                                        value: null !== (s = e.params.width) && void 0 !== s ? s : "",
                                        onChange: function(t) {
                                            r(je.length - 1), se(t.target.value, (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    width: t
                                                }))
                                            }))
                                        },
                                        onBlur: function() {
                                            return se(ne(e.params.width, 64), (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    width: t || 64
                                                }))
                                            }))
                                        }
                                    }, C)), (0, d.jsx)(Z.Yl, {
                                        onClick: function() {
                                            var t = e.params.width,
                                                n = e.params.height;
                                            r(je.length - 1), e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                width: n,
                                                height: t
                                            }))
                                        },
                                        children: (0, d.jsx)(M.aM, {
                                            style: {
                                                height: 15,
                                                width: 15,
                                                margin: "18px",
                                                flex: "0 0 auto"
                                            }
                                        })
                                    }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                        type: "number",
                                        style: {
                                            opacity: i !== je.length - 1 ? .5 : 1
                                        },
                                        value: null !== (l = e.params.height) && void 0 !== l ? l : "",
                                        onChange: function(t) {
                                            r(je.length - 1), se(t.target.value, (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    height: t
                                                }))
                                            }))
                                        },
                                        onBlur: function() {
                                            return se(ne(e.params.height, 64), (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    height: t || 64
                                                }))
                                            }))
                                        }
                                    }, C))]
                                }), (0, d.jsx)(Ie.AZ, {
                                    style: {
                                        opacity: 1 === te(e.params.width, e.params.height) ? .5 : 1
                                    },
                                    children: (0, d.jsx)(R.jd, {
                                        title: "Number of Images: ",
                                        min: 1,
                                        max: te(e.params.width, e.params.height),
                                        step: 1,
                                        style: {
                                            margin: 0
                                        },
                                        value: Math.min(te(e.params.width, e.params.height), e.params.n_samples || 1),
                                        onChange: function(t) {
                                            return se(t.toString(), (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    n_samples: t
                                                }))
                                            }))
                                        },
                                        simple: !0
                                    })
                                })]
                            }), e.initImage && (0, d.jsxs)(p.Fragment, {
                                children: [(0, d.jsx)(T.l4, {
                                    min: 20,
                                    max: 20
                                }), (0, d.jsx)(Ie.xw, {
                                    children: (0, d.jsxs)(d.Fragment, {
                                        children: [(0, d.jsxs)(Ie.Dx, {
                                            style: {
                                                opacity: .7
                                            },
                                            children: ["Uploaded Image Settings", " ", (0, d.jsx)(U.Z, {
                                                delay: 1,
                                                tooltip: "",
                                                elementTooltip: (0, d.jsxs)(d.Fragment, {
                                                    children: [(0, d.jsx)("strong", {
                                                        children: "Strength: "
                                                    }), "Controls how much the uploaded image will be changed. Lower Strength will generate an image closer to the original.", (0, d.jsx)("br", {}), (0, d.jsx)("br", {}), (0, d.jsx)("strong", {
                                                        children: "Noise: "
                                                    }), "Higher noise will increase the detail added to the uploaded image, but causes artifacts if too high.", (0, d.jsx)("br", {}), "In general, noise should always be a lower number than Strength."]
                                                }),
                                                children: (0, d.jsx)(y.$x8, {
                                                    style: {
                                                        opacity: .3,
                                                        marginLeft: "0.3rem"
                                                    }
                                                })
                                            })]
                                        }), (0, d.jsx)("div", {
                                            style: {
                                                flex: "1"
                                            },
                                            children: (0, d.jsx)(R.jd, {
                                                title: "Strength: ",
                                                value: null !== (c = e.params.strength) && void 0 !== c ? c : "",
                                                onChange: function(t) {
                                                    e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                        strength: t
                                                    }))
                                                },
                                                min: 0,
                                                max: .99,
                                                step: .01,
                                                style: {
                                                    margin: 0
                                                },
                                                simple: !0
                                            })
                                        }), (0, d.jsx)("div", {
                                            style: {
                                                flex: "1"
                                            },
                                            children: (0, d.jsx)(R.jd, {
                                                title: "Noise: ",
                                                value: null !== (u = e.params.noise) && void 0 !== u ? u : "",
                                                onChange: function(t) {
                                                    e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                        noise: t
                                                    }))
                                                },
                                                min: 0,
                                                max: .99,
                                                step: .01,
                                                style: {
                                                    margin: 0
                                                },
                                                simple: !0
                                            })
                                        })]
                                    })
                                })]
                            }), (0, d.jsx)(T.l4, {
                                min: 20,
                                max: 20
                            }), (0, d.jsxs)(Ie.xw, {
                                style: {
                                    gap: "20px"
                                },
                                children: [(0, d.jsxs)(Ie.Dx, {
                                    style: {
                                        opacity: .7
                                    },
                                    children: ["Model-Specific Settings", (0, d.jsx)(U.Z, {
                                        delay: 1,
                                        tooltip: "",
                                        elementTooltip: (0, d.jsxs)(d.Fragment, {
                                            children: [(0, d.jsx)("strong", {
                                                children: "Steps: "
                                            }), "The number of iterations to refine the image for.", (0, d.jsx)("br", {}), (0, d.jsx)("br", {}), (0, d.jsx)("strong", {
                                                children: "Scale: "
                                            }), "At high scale the prompt will be followed more closely, with finer detail and sharpness. Low scale often results in greater creative freedom, but reduced definition."]
                                        }),
                                        children: (0, d.jsx)(y.$x8, {
                                            style: {
                                                opacity: .3,
                                                marginLeft: "0.3rem"
                                            }
                                        })
                                    })]
                                }), (0, d.jsxs)(Ie.AZ, {
                                    children: [(0, d.jsx)(Ie.Dx, {
                                        children: "Undesired Content"
                                    }), k.length > 0 && (0, d.jsx)(P.Ph, {
                                        menuPlacement: "auto",
                                        isSearchable: !1,
                                        "aria-label": "Select a preset",
                                        maxMenuHeight: 420,
                                        minMenuHeight: 300,
                                        options: k.map((function(e, t) {
                                            var n = e.name;
                                            return {
                                                value: t,
                                                description: "".concat(n),
                                                label: (0, d.jsx)(d.Fragment, {
                                                    children: "".concat(n)
                                                })
                                            }
                                        })),
                                        onChange: function(t) {
                                            null !== t && e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                ucPreset: t.value
                                            }))
                                        },
                                        value: {
                                            value: e.params.ucPreset,
                                            description: "".concat(k[null !== (h = e.params.ucPreset) && void 0 !== h ? h : 0].name),
                                            label: (0, d.jsx)(d.Fragment, {
                                                children: k[null !== (f = e.params.ucPreset) && void 0 !== f ? f : 0].name
                                            })
                                        }
                                    }), (0, d.jsx)(Ie.Gw, {
                                        minRows: 2,
                                        maxRows: 6,
                                        placeholder: "Anything in here is added to the preset selected above.",
                                        value: null !== (g = e.negPrompt) && void 0 !== g ? g : "",
                                        warn: e.negPromptTokens > ke.Y$,
                                        onChange: function(t) {
                                            e.setNegPrompt((t.target.value || "").replace(/(\n|\r)/g, ""))
                                        },
                                        onInput: function(t) {
                                            (0, Ze.Z)(t.target, HTMLTextAreaElement) && e.setNegPrompt((t.target.value || "").replace(/(\n|\r)/g, ""))
                                        },
                                        onKeyDown: function(t) {
                                            "Enter" === t.key && (t.preventDefault(), e.generateImage && e.generateImage())
                                        }
                                    })]
                                }), (0, d.jsx)(Le.ZP, {
                                    label: "Add Quality Tags",
                                    checkedText: "Tags to increase quality will be prepended to the prompt.",
                                    uncheckedText: "The prompt will be used unmodified.",
                                    value: e.params.qualityToggle,
                                    setValue: function(t) {
                                        e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                            qualityToggle: t
                                        }))
                                    },
                                    alternate: !0
                                }), (0, d.jsxs)(T.gq, {
                                    grow: !1,
                                    children: [(0, d.jsxs)(Ie.AZ, {
                                        children: [(0, d.jsx)(Ie.Dx, {
                                            children: "Steps"
                                        }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                            type: "number",
                                            disabled: !!e.initImage,
                                            value: e.initImage ? ke.jb : null !== (m = e.params.steps) && void 0 !== m ? m : "",
                                            onChange: function(t) {
                                                return se(t.target.value, (function(t) {
                                                    return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                        steps: t
                                                    }))
                                                }))
                                            },
                                            onBlur: function() {
                                                var t;
                                                e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    steps: Math.max(1, Math.min(null !== (t = e.params.steps) && void 0 !== t ? t : 28, 50))
                                                }))
                                            }
                                        }, C))]
                                    }), (0, d.jsx)("div", {
                                        style: {
                                            width: 20
                                        }
                                    }), (0, d.jsxs)(Ie.AZ, {
                                        children: [(0, d.jsx)(Ie.Dx, {
                                            children: "Scale"
                                        }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                            type: "number",
                                            min: 1.1,
                                            step: .1,
                                            max: 100,
                                            value: null !== (v = e.params.scale) && void 0 !== v ? v : "",
                                            onChange: function(t) {
                                                return se(t.target.value, (function(t) {
                                                    return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                        scale: t
                                                    }))
                                                }), !0)
                                            },
                                            onBlur: function() {
                                                var t;
                                                e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    scale: Math.max(1.1, Math.min(null !== (t = e.params.scale) && void 0 !== t ? t : 12, 100))
                                                }))
                                            }
                                        }, C))]
                                    })]
                                }), (0, d.jsxs)(Ie.AZ, {
                                    children: [(0, d.jsx)(Ie.Dx, {
                                        children: "Seed"
                                    }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                        type: "number",
                                        placeholder: "Enter your image seed here.",
                                        value: null !== (x = e.params.seed) && void 0 !== x ? x : "",
                                        onChange: function(t) {
                                            se(t.target.value, (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    seed: t
                                                }))
                                            }))
                                        }
                                    }, C))]
                                }), (0, d.jsxs)(Ie.AZ, {
                                    children: [(0, d.jsx)(Ie.Dx, {
                                        children: "Advanced: Sampling"
                                    }), (0, d.jsx)(P.Ph, {
                                        menuPlacement: "auto",
                                        isSearchable: !1,
                                        "aria-label": "Select a sampler",
                                        maxMenuHeight: 420,
                                        minMenuHeight: 300,
                                        options: Se.map((function(e) {
                                            return {
                                                label: e.label,
                                                options: e.options.map((function(e) {
                                                    return {
                                                        value: e.value,
                                                        description: "".concat(e.value),
                                                        label: (0, d.jsx)(d.Fragment, {
                                                            children: "".concat(e.value)
                                                        })
                                                    }
                                                }))
                                            }
                                        })),
                                        onChange: function(t) {
                                            null !== t && e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                sampler: t.value
                                            }))
                                        },
                                        value: {
                                            value: e.params.sampler,
                                            description: "".concat(e.params.sampler),
                                            label: (0, d.jsx)(d.Fragment, {
                                                children: e.params.sampler
                                            })
                                        }
                                    })]
                                })]
                            })]
                        }),
                        D = (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsxs)(Ie.xw, {
                                children: [(0, d.jsxs)(T.gq, {
                                    children: [(0, d.jsx)(Ie.Dx, {
                                        children: "Image Resolution"
                                    }), (0, d.jsx)(Ie.Dx, {
                                        style: {
                                            opacity: .5
                                        },
                                        children: "[w x h]"
                                    })]
                                }), (0, d.jsx)(P.Ph, {
                                    isSearchable: !1,
                                    "aria-label": "Select a Resolution",
                                    maxMenuHeight: 420,
                                    isDisabled: !0,
                                    options: [{
                                        name: "Default",
                                        height: 256,
                                        width: 256
                                    }].map((function(e, t) {
                                        return {
                                            value: t,
                                            description: "".concat(e.name, " (").concat(e.width, "x").concat(e.height, ")"),
                                            label: (0, d.jsx)(d.Fragment, {
                                                children: "".concat(e.name, " (").concat(e.width, "x").concat(e.height, ")")
                                            })
                                        }
                                    })),
                                    onChange: function(t) {
                                        null !== t && (r(t.value), t.value !== je.length - 1 && e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                            width: je[t.value].width,
                                            height: je[t.value].height
                                        })))
                                    },
                                    value: {
                                        value: 0,
                                        description: "Default",
                                        label: (0, d.jsx)(d.Fragment, {
                                            children: "Default"
                                        })
                                    }
                                }), (0, d.jsxs)(T.gq, {
                                    children: [(0, d.jsx)(Ie.II, {
                                        type: "number",
                                        disabled: !0,
                                        value: 256
                                    }), (0, d.jsx)(M.aM, {
                                        style: {
                                            height: 15,
                                            width: 15,
                                            margin: "18px",
                                            flex: "0 0 auto",
                                            cursor: "default",
                                            opacity: .7
                                        }
                                    }), (0, d.jsx)(Ie.II, {
                                        type: "number",
                                        disabled: !0,
                                        value: 256
                                    })]
                                })]
                            }), (0, d.jsx)("div", {
                                style: {
                                    height: 20
                                }
                            }), (0, d.jsxs)(Ie.xw, {
                                style: {
                                    gap: "20px"
                                },
                                children: [(0, d.jsx)(Ie.Dx, {
                                    style: {
                                        opacity: .7
                                    },
                                    children: "Model-Specific Settings"
                                }), (0, d.jsx)(R.jd, {
                                    title: "Temperature",
                                    value: null !== (w = e.params.temperature) && void 0 !== w ? w : "",
                                    onChange: function(t) {
                                        e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                            temperature: t
                                        }))
                                    },
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    style: {
                                        margin: 0
                                    },
                                    simple: !0
                                }), (0, d.jsxs)(Ie.AZ, {
                                    children: [(0, d.jsx)(Ie.Dx, {
                                        children: "Top K"
                                    }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                        type: "number",
                                        value: null !== (b = e.params.top_k) && void 0 !== b ? b : "",
                                        onChange: function(t) {
                                            return se(t.target.value, (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    top_k: t
                                                }))
                                            }))
                                        }
                                    }, C))]
                                }), (0, d.jsxs)(Ie.AZ, {
                                    children: [(0, d.jsx)(Ie.Dx, {
                                        children: "Supercondition Factor"
                                    }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                        type: "number",
                                        value: null !== (j = e.params.supercondition_factor) && void 0 !== j ? j : "",
                                        onChange: function(t) {
                                            return se(t.target.value, (function(t) {
                                                return e.setParams((0, a.Z)((0, o.Z)({}, e.params), {
                                                    supercondition_factor: t
                                                }))
                                            }))
                                        }
                                    }, C))]
                                })]
                            })]
                        });
                    return (0, d.jsxs)(Ie.qn, {
                        children: [(0, d.jsx)(Ie.Dx, {
                            style: {
                                opacity: .5,
                                padding: 20
                            },
                            children: (0, d.jsxs)(T.gq, {
                                style: {
                                    gap: 5,
                                    alignItems: "center"
                                },
                                children: ["Settings", (0, d.jsx)(Q.ZP, {
                                    style: {
                                        padding: 4,
                                        width: "auto",
                                        background: "none"
                                    },
                                    onConfirm: function() {
                                        e.setParams(fe(e.model))
                                    },
                                    warningText: "Reset all settings to default?",
                                    confirmButtonText: "Yes",
                                    neverMindText: "Cancel",
                                    ariaLabel: "reset settings",
                                    iconURL: Me.Z.src,
                                    buttonText: (0, d.jsx)(M.Lw, {
                                        style: {
                                            width: "1rem",
                                            height: "1rem"
                                        }
                                    })
                                })]
                            })
                        }), e.children, le(e.model) && L, e.model === I.oS.dalleMini && D]
                    })
                })),
                Te = n(99951);

            function De(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var Ee = n(17440),
                Re = n(75538),
                Ae = n(9964),
                Ne = n(97355),
                ze = n(37901),
                Oe = n(683),
                Fe = n(58777);

            function _e() {
                var e = (0, Ee.Z)(["\n    width: 58px;\n    height: 44px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 3px;\n"]);
                return _e = function() {
                    return e
                }, e
            }

            function Ye() {
                var e = (0, Ee.Z)(["\n    width: 50px;\n    .react-colorful__saturation {\n        border-radius: 5px 5px 0 0;\n    }\n    .react-colorful__last-control {\n        border-radius: 0;\n    }\n"]);
                return Ye = function() {
                    return e
                }, e
            }

            function qe() {
                var e = (0, Ee.Z)(["\n    border-radius: 0 0 5px 5px;\n"]);
                return qe = function() {
                    return e
                }, e
            }

            function He() {
                var e = (0, Ee.Z)(["\n    position: absolute;\n    z-index: 1;\n    @media (max-width: 550px) {\n        right: 0;\n        left: unset;\n    }\n    @media (max-width: 375px) {\n        left: 0;\n        right: unset;\n    }\n"]);
                return He = function() {
                    return e
                }, e
            }

            function Ue() {
                var e = (0, Ee.Z)(["\n    background-color: ", ";\n    padding: 20px 20px 20px 20px;\n"]);
                return Ue = function() {
                    return e
                }, e
            }

            function Be() {
                var e = (0, Ee.Z)(["\n    background-color: ", ";\n    width: 30px;\n    height: 30px;\n"]);
                return Be = function() {
                    return e
                }, e
            }

            function We() {
                var e = (0, Ee.Z)(["\n    width: 30px;\n    height: 30px;\n"]);
                return We = function() {
                    return e
                }, e
            }

            function $e() {
                var e = (0, Ee.Z)(["\n    padding: 8px;\n    height: 44px;\n    min-width: 58px;\n    padding: 10px 20px;\n    width: max-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    background-color: ", ";\n    color: ", ";\n    border: solid 1px\n        ", ";\n    border-radius: 3px;\n    > div {\n        width: 18px;\n        height: 18px;\n        background-color: ", ";\n    }\n    &:hover {\n        color: ", ";\n        > div {\n            background-color: ", ";\n        }\n    }\n\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 20px;\n\n    & > span:nth-child(3) {\n        font-size: 0.875rem;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        padding: 1px 10px;\n        color: ", ";\n        background-color: ", ";\n        border-radius: 3px;\n        font-weight: 600;\n        transition: color 100ms, background-color 100ms, transform 150ms;\n        line-height: 1.25rem;\n        > ", " {\n            margin-left: 3px;\n            background-color: ", ";\n        }\n    }\n"]);
                return $e = function() {
                    return e
                }, e
            }

            function Ge() {
                var e = (0, Ee.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 44px;\n    line-height: 0px;\n    background-color: ", ";\n    color: ", ";\n    border-radius: 3px;\n    font-weight: 600;\n    &:hover {\n        background-color: ", ";\n    }\n    &:disabled {\n        color: ", ";\n    }\n"]);
                return Ge = function() {
                    return e
                }, e
            }

            function Ke() {
                var e = (0, Ee.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 44px;\n    line-height: 0px;\n    color: ", ";\n"]);
                return Ke = function() {
                    return e
                }, e
            }

            function Ve() {
                var e = (0, Ee.Z)(["\n    background-color: ", ";\n    padding: 20px 20px 20px 20px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n"]);
                return Ve = function() {
                    return e
                }, e
            }
            var Je = (0, Ae.ZP)(Z.Yl).withConfig({
                    componentId: "sc-c9336e12-0"
                })(_e()),
                Xe = (0, Ae.ZP)(Fe.L_).withConfig({
                    componentId: "sc-c9336e12-1"
                })(Ye()),
                Qe = (0, Ae.ZP)(Fe.ZE).withConfig({
                    componentId: "sc-c9336e12-2"
                })(qe()),
                et = Ae.ZP.div.withConfig({
                    componentId: "sc-c9336e12-3"
                })(He()),
                tt = Ae.ZP.div.withConfig({
                    componentId: "sc-c9336e12-4"
                })(Ue(), (function(e) {
                    return e.theme.colors.bg2
                })),
                nt = Ae.ZP.div.withConfig({
                    componentId: "sc-c9336e12-5"
                })(Be(), (function(e) {
                    return e.theme.colors.textMain
                })),
                it = Ae.ZP.div.withConfig({
                    componentId: "sc-c9336e12-6"
                })(We()),
                rt = (0, Ae.ZP)(Z.Yl).withConfig({
                    componentId: "sc-c9336e12-7"
                })($e(), (function(e) {
                    return e.selected ? e.theme.colors.textHeadings : e.theme.colors.bg2
                }), (function(e) {
                    return e.selected ? e.theme.colors.bg0 : e.theme.colors.textMain
                }), (function(e) {
                    return e.selected ? e.theme.colors.textHeadings : e.theme.colors.bg3
                }), (function(e) {
                    return e.selected ? e.theme.colors.bg0 : e.theme.colors.textMain
                }), (function(e) {
                    return e.selected ? e.theme.colors.bg3 : e.theme.colors.textHeadings
                }), (function(e) {
                    return e.selected ? e.theme.colors.bg0 : e.theme.colors.textHeadings
                }), (function(e) {
                    return e.theme.colors.bg1
                }), (function(e) {
                    return e.theme.colors.textHeadings
                }), M.JO, (function(e) {
                    return e.theme.colors.bg1
                })),
                ot = (0, Ae.ZP)(Z.t4).withConfig({
                    componentId: "sc-c9336e12-8"
                })(Ge(), (function(e) {
                    return e.theme.colors.textHeadings
                }), (function(e) {
                    return e.theme.colors.bg2
                }), (function(e) {
                    return e.theme.colors.textHeadings
                }), (function(e) {
                    return e.theme.colors.bg2
                })),
                at = (0, Ae.ZP)(Z.Yl).withConfig({
                    componentId: "sc-c9336e12-9"
                })(Ke(), (function(e) {
                    return e.theme.colors.warning
                })),
                st = Ae.ZP.div.withConfig({
                    componentId: "sc-c9336e12-10"
                })(Ve(), (function(e) {
                    return e.theme.colors.bg1
                })),
                lt = n(57225),
                ct = n(33160).Buffer;

            function ut(e) {
                var t = (0, m.sJ)(S.D9),
                    n = (0, m.sJ)(S.JD),
                    r = (0, p.useRef)(null),
                    o = (0, p.useState)(!1),
                    a = o[0],
                    s = o[1],
                    l = (0, p.useRef)(null);
                (0, p.useEffect)((function() {
                    var e = function(e) {
                            var n;
                            t || (null === (n = e.dataTransfer) || void 0 === n ? void 0 : n.types.includes("Files")) && (l.current = e.target, s(!0))
                        },
                        n = function(e) {
                            e.target !== l.current && e.target !== document || s(!1)
                        };
                    return document.addEventListener("dragenter", e), document.addEventListener("dragleave", n),
                        function() {
                            document.removeEventListener("dragenter", e), document.removeEventListener("dragleave", n)
                        }
                }), [t]);
                var c = function() {
                    var t = (0, i.Z)(u().mark((function t(n) {
                        var r, o, a, l, c, d, h, f, p;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = n.dataTransfer.files, s(!1), 0 !== r.length) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    for (n.preventDefault(), n.stopPropagation(), o = [], a = [], l = !0, c = !1, d = void 0, t.prev = 9, h = r[Symbol.iterator](); !(l = (f = h.next()).done); l = !0) p = f.value, a.push(p.name), o.push(p.arrayBuffer());
                                    t.next = 17;
                                    break;
                                case 13:
                                    t.prev = 13, t.t0 = t.catch(9), c = !0, d = t.t0;
                                case 17:
                                    t.prev = 17, t.prev = 18, l || null == h.return || h.return();
                                case 20:
                                    if (t.prev = 20, !c) {
                                        t.next = 23;
                                        break
                                    }
                                    throw d;
                                case 23:
                                    return t.finish(20);
                                case 24:
                                    return t.finish(17);
                                case 25:
                                    return t.next = 27, Promise.allSettled(o).then(function() {
                                        var t = (0, i.Z)(u().mark((function t(n) {
                                            var i, r;
                                            return u().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        "fulfilled" === (i = n[0]).status ? (r = ct.from(i.value), e.onFileImport(r)) : (0, g.Am)("Something went wrong while importing a file.");
                                                    case 2:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        var t;
                                        (0, g.Am)(null !== (t = "Something went wrong while importing a file: " + e.message) && void 0 !== t ? t : e)
                                    }));
                                case 27:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [9, 13, 17, 25],
                            [18, , 20, 24]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                return (0, d.jsx)(lt.PO, {
                    visible: a,
                    fixed: !0,
                    ref: r,
                    onDrop: c,
                    onDragOver: dt,
                    onClick: function(e) {
                        s(!1), e.preventDefault(), e.stopPropagation()
                    },
                    children: (0, d.jsx)(lt.Kd, {
                        visible: a,
                        children: (0, d.jsx)(y.s_P, {
                            style: {
                                width: "50px",
                                height: "50px",
                                color: n.colors.textMain
                            }
                        })
                    })
                })
            }
            var dt = function(e) {
                    e.stopPropagation(), e.preventDefault()
                },
                ht = n(33160).Buffer;

            function ft() {
                var e = (0, Ee.Z)(["\n    position: relative;\n    border-radius: 3px;\n    border: 3px solid ", ";\n\n    background-color: white;\n    // eslint-disable-next-line max-len\n    background-image: linear-gradient(45deg, #a0a0a0 25%, transparent 25%),\n        linear-gradient(-45deg, #a0a0a0 25%, transparent 25%),\n        linear-gradient(45deg, transparent 75%, #a0a0a0 75%),\n        linear-gradient(-45deg, transparent 75%, #a0a0a0 75%);\n    background-size: 16px 16px;\n    background-position: 0 0, 0 8px, 8px -8px, -8px 0px;\n    button:last-child {\n        width: 100%;\n        height: 100%;\n        background-size: 100% 100%;\n        background-repeat: no-repeat;\n        background-position: center;\n    }\n    div:first-child button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 3px;\n        height: 20px;\n        width: 20px;\n        padding: 3px;\n        z-index: 1;\n        position: absolute;\n        background-color: ", ";\n        > div {\n            background-color: ", ";\n        }\n    }\n"]);
                return ft = function() {
                    return e
                }, e
            }

            function pt() {
                var e = (0, Ee.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n    button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 3px;\n        height: 20px;\n        width: 20px;\n    }\n"]);
                return pt = function() {
                    return e
                }, e
            }

            function gt() {
                var e = (0, Ee.Z)(["\n    @media (max-width: 800px) {\n        display: flex;\n        flex-direction: column;\n    }\n"]);
                return gt = function() {
                    return e
                }, e
            }

            function mt() {
                var e = (0, Ee.Z)(["\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: flex-end;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex: 0 0 auto;\n    @media (max-width: 800px) {\n        flex-direction: row-reverse;\n        overflow-y: hidden;\n        overflow-x: auto;\n        margin-left: 10px;\n    }\n    > div,\n    > button {\n        flex: 0 0 auto;\n    }\n"]);
                return mt = function() {
                    return e
                }, e
            }

            function vt(e, t) {
                if (!e) return {
                    x: 0,
                    y: 0
                };
                var n = e.getBoundingClientRect(),
                    i = t.clientX - n.left,
                    r = t.clientY - n.top,
                    o = e.width,
                    a = e.height;
                return {
                    x: Math.floor(i * (o / n.width)),
                    y: Math.floor(r * (a / n.height))
                }
            }

            function xt(e, t, n, i, r) {
                e.beginPath(), e.arc(t.x, t.y, n / 2, 0, 2 * Math.PI), e.fillStyle = i, e.globalAlpha = r, e.fill()
            }

            function yt(e, t, n, i, r, o) {
                e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.strokeStyle = r, e.globalAlpha = o, e.lineWidth = i, e.stroke()
            }
            var wt, bt = function() {
                    function e() {
                        var t = this;
                        (0, Te.Z)(this, e), this.drawing = !1, this._penPressure = 1, this.size = function(e, n) {
                            return t._penPressure = e.pressureSensitivity ? n.pressure || t._penPressure : 1, e.size * t._penPressure
                        }, this.opacity = function(e, n) {
                            return t._penPressure = e.pressureSensitivity ? n.pressure || t._penPressure : 1, e.opacity * t._penPressure
                        }, this.name = "Draw", this.icon = (0, d.jsx)(M.Is, {})
                    }
                    var t = e.prototype;
                    return t.pointerDown = function(e, t, n, i) {
                        this.drawing = !0, t.globalCompositeOperation = "source-over", xt(t, e, this.size(n, i), n.color, this.opacity(n, i)), n.changeToReload && n.changeToReload()
                    }, t.pointerMove = function(e, t, n, i, r) {
                        this.drawing && (n.globalCompositeOperation = "source-over", yt(n, e, t, this.size(i, r), i.color, this.opacity(i, r)), xt(n, t, this.size(i, r), i.color, this.opacity(i, r)), i.changeToReload && i.changeToReload())
                    }, t.pointerUp = function(e, t, n, i) {
                        this.drawing && (t.globalCompositeOperation = "source-over", xt(t, e, this.size(n, i), n.color, this.opacity(n, i)), n.changeToReload && n.changeToReload(), n.canvas.saveState()), this.drawing = !1
                    }, t.switchTo = function(e) {}, t.switchFrom = function(e) {}, t.frameLoop = function(e, t, n) {
                        t.globalCompositeOperation = "source-over", t.beginPath(), t.arc(e.x, e.y, n.size / 2, 0, 2 * Math.PI), t.strokeStyle = "black", t.lineWidth = 1, t.stroke()
                    }, e
                }(),
                jt = function() {
                    function e() {
                        var t = this;
                        (0, Te.Z)(this, e), this.drawing = !1, this._penPressure = 1, this.size = function(e, n) {
                            return t._penPressure = e.pressureSensitivity ? n.pressure || t._penPressure : 1, e.size * t._penPressure
                        }, this.opacity = function(e, n) {
                            return t._penPressure = e.pressureSensitivity ? n.pressure || t._penPressure : 1, e.opacity * t._penPressure
                        }, this.name = "Erase", this.icon = (0, d.jsx)(M.$q, {})
                    }
                    var t = e.prototype;
                    return t.pointerDown = function(e, t, n, i) {
                        this.drawing = !0, t.globalCompositeOperation = "destination-out", xt(t, e, this.size(n, i), "white", this.opacity(n, i)), n.changeToReload && n.changeToReload()
                    }, t.pointerMove = function(e, t, n, i, r) {
                        this.drawing && (n.globalCompositeOperation = "destination-out", yt(n, e, t, this.size(i, r), "white", this.opacity(i, r)), xt(n, t, this.size(i, r), "white", this.opacity(i, r)), i.changeToReload && i.changeToReload())
                    }, t.pointerUp = function(e, t, n, i) {
                        this.drawing && (t.globalCompositeOperation = "destination-out", xt(t, e, this.size(n, i), "white", this.opacity(n, i)), n.changeToReload && n.changeToReload(), n.canvas.saveState()), this.drawing = !1
                    }, t.switchTo = function(e) {}, t.switchFrom = function(e) {}, t.frameLoop = function(e, t, n) {
                        t.globalCompositeOperation = "source-over", t.beginPath(), t.arc(e.x, e.y, n.size / 2, 0, 2 * Math.PI), t.strokeStyle = "black", t.globalAlpha = 1, t.lineWidth = 1, t.stroke()
                    }, e
                }(),
                Ct = function() {
                    function e() {
                        (0, Te.Z)(this, e), this.moving = !1, this.selecting = !1, this.hasLayerFrameLoop = !0, this.name = "Select", this.icon = (0, d.jsx)(M.GV, {})
                    }
                    var t = e.prototype;
                    return t.pointerDown = function(e, t, n, i) {
                        if (this.selection) {
                            var r, o, a, s, l, c, u, d, h = Math.min(this.selection.from.x, this.selection.to.x) + (null !== (l = null === (r = this.displacement) || void 0 === r ? void 0 : r.x) && void 0 !== l ? l : 0),
                                f = Math.max(this.selection.from.x, this.selection.to.x) + (null !== (c = null === (o = this.displacement) || void 0 === o ? void 0 : o.x) && void 0 !== c ? c : 0),
                                p = Math.min(this.selection.from.y, this.selection.to.y) + (null !== (u = null === (a = this.displacement) || void 0 === a ? void 0 : a.y) && void 0 !== u ? u : 0),
                                g = Math.max(this.selection.from.y, this.selection.to.y) + (null !== (d = null === (s = this.displacement) || void 0 === s ? void 0 : s.y) && void 0 !== d ? d : 0);
                            e.x >= h && e.x <= f && e.y >= p && e.y <= g ? (this.moving = !0, this.displacement || (this.displacement = {
                                x: 0,
                                y: 0
                            })) : this.displacement && (this.displaceSelection(t, n), this.selection = void 0, this.displacement = void 0, n.canvas.saveState())
                        }
                        this.moving || (this.selecting = !0, this.selection = {
                            from: e,
                            to: e
                        })
                    }, t.pointerMove = function(e, t, n, i, r) {
                        t.x = Math.max(Math.min(t.x, n.canvas.width), 0), t.y = Math.max(Math.min(t.y, n.canvas.height), 0), this.moving && this.selection && this.displacement && (this.displacement.x += t.x - e.x, this.displacement.y += t.y - e.y), this.selecting && this.selection && (this.selection.to = t)
                    }, t.displaceSelection = function(e, t) {
                        if (this.selection && this.displacement) {
                            var n = Math.max(this.selection.from.x, this.selection.to.x),
                                i = Math.min(this.selection.from.x, this.selection.to.x),
                                r = Math.max(this.selection.from.y, this.selection.to.y),
                                o = Math.min(this.selection.from.y, this.selection.to.y),
                                a = n - i,
                                s = r - o,
                                l = document.createElement("canvas");
                            l.width = a, l.height = s;
                            var c = l.getContext("2d");
                            if (!c) return;
                            c.drawImage(e.canvas, i, o, a, s, 0, 0, a, s), e.clearRect(i, o, a, s), e.drawImage(l, 0, 0, a, s, i + this.displacement.x, o + this.displacement.y, a, s)
                        }
                    }, t.pointerUp = function(e, t, n, i) {
                        this.selecting && (this.selecting = !1, !this.selection || this.selection.from.x !== this.selection.to.x && this.selection.from.y !== this.selection.to.y ? this.displacement = {
                            x: 0,
                            y: 0
                        } : this.selection = void 0), this.moving && (this.moving = !1)
                    }, t.switchTo = function(e) {}, t.switchFrom = function(e) {
                        this.selection = void 0, this.displacement = void 0, this.selecting = !1, this.moving = !1
                    }, t.frameLoop = function(e, t, n) {
                        this.selection && !this.displacement && (t.setLineDash([5, 5]), t.strokeStyle = "black", t.strokeRect(this.selection.from.x, this.selection.from.y, this.selection.to.x - this.selection.from.x, this.selection.to.y - this.selection.from.y), t.setLineDash([])), this.selection && this.displacement && (t.setLineDash([5, 5]), t.strokeStyle = "black", t.strokeRect(this.selection.from.x + this.displacement.x, this.selection.from.y + this.displacement.y, this.selection.to.x - this.selection.from.x, this.selection.to.y - this.selection.from.y), t.setLineDash([]))
                    }, t.layerFrameLoop = function(e, t, n) {
                        this.selection && this.displacement && this.displaceSelection(t, n)
                    }, e
                }(),
                St = function() {
                    function e() {
                        (0, Te.Z)(this, e), this.name = "Color Picker", this.icon = (0, d.jsx)(M.dF, {})
                    }
                    var t = e.prototype;
                    return t.pointerDown = function(e, t, n, i) {}, t.pointerMove = function(e, t, n, i, r) {}, t.pointerUp = function(e, t, n, i) {
                        var r = vt(n.canvas.displayCanvas, i),
                            o = r.x,
                            a = r.y;
                        if (!(o < 0 || a < 0) && !(o > t.canvas.width || a > t.canvas.height)) {
                            var s = n.canvas.displayCanvas;
                            if (s) {
                                var l = s.getContext("2d");
                                if (l) {
                                    var c = l.getImageData(o, a, 1, 1);
                                    n.color = "rgb(".concat(c.data[0], ", ").concat(c.data[1], ", ").concat(c.data[2], ", 1)"), n.changeColor && n.changeColor(n.color)
                                }
                            }
                        }
                    }, t.switchTo = function(e) {}, t.switchFrom = function(e) {}, t.frameLoop = function(e, t, n) {}, e
                }(),
                kt = function() {
                    function e() {
                        var t = this;
                        (0, Te.Z)(this, e), this.scrolling = !1, this.changeCanvasDimensions = function(e, n, i, r) {
                            var o = t.displayCanvas.width + i + n,
                                a = t.displayCanvas.height + r + e,
                                s = t.layers;
                            t.layers = [];
                            var l = !0,
                                c = !1,
                                u = void 0;
                            try {
                                for (var d, h = s[Symbol.iterator](); !(l = (d = h.next()).done); l = !0) {
                                    var f = d.value,
                                        p = document.createElement("canvas");
                                    p.width = o, p.height = a;
                                    var g = p.getContext("2d");
                                    if (!g) throw new Error("Could not get context");
                                    g.drawImage(f, Math.max(0, -n), Math.max(0, -e), o, a, Math.max(0, n), Math.max(0, e), o, a), t.layers.push(p)
                                }
                            } catch (m) {
                                c = !0, u = m
                            } finally {
                                try {
                                    l || null == h.return || h.return()
                                } finally {
                                    if (c) throw u
                                }
                            }
                            return t.displayCanvas.width = o, t.displayCanvas.height = a, t.clearHistory(), {
                                height: a,
                                width: o
                            }
                        }, this.zoomCanvas = function(e, n) {
                            t.zoom = e, t.zoomCenter = n
                        }, this.translateZoomedPosition = function(e) {
                            var n = e.x,
                                i = e.y,
                                r = t.zoom,
                                o = t.zoomCenter,
                                a = o.x,
                                s = o.y;
                            return {
                                x: (n - a) / r + a,
                                y: (i - s) / r + s
                            }
                        }, this.layers = [], this.toolState = {
                            tools: [new bt],
                            currentTool: new bt,
                            color: "rgb(0, 0, 0, 1)",
                            size: 20,
                            pressureSensitivity: Oe.SE,
                            opacity: 1,
                            canvas: this
                        }, this.undoStack = [], this.redoStack = [], this.selectedLayer = 0, this.tools = [new bt, new jt, new Ct, new St], this.lastPosition = {
                            x: 0,
                            y: 0
                        }, this.blockInput = !1, this.zoom = 1, this.zoomCenter = {
                            x: 0,
                            y: 0
                        }
                    }
                    var t, n, i, r = e.prototype;
                    return r.getImage = function() {
                        var e = document.createElement("canvas");
                        e.width = this.displayCanvas.width, e.height = this.displayCanvas.height;
                        var t = e.getContext("2d");
                        if (t) return this.layers.forEach((function(e) {
                            t.drawImage(e, 0, 0)
                        })), e.toDataURL("image/png")
                    }, r.resizeCanvas = function(e, t) {
                        this.layers.forEach((function(n) {
                            n.height = e, n.width = t
                        })), this.displayCanvas.height = e, this.displayCanvas.width = t, this.clearHistory()
                    }, r.pointerDown = function(e) {
                        if (this.blockInput) return !1;
                        var t = vt(this.displayCanvas, e),
                            n = t.x,
                            i = t.y,
                            r = this.translateZoomedPosition({
                                x: n,
                                y: i
                            }),
                            o = r.x,
                            a = r.y;
                        return 1 === e.button && (this.scrolling = !0, this.lastPosition = {
                            x: o,
                            y: a
                        }), 0 === e.button && (!(n < 0 || i < 0 || n > this.displayCanvas.width || i > this.displayCanvas.height) && (this.currentCtx.save(), (e.ctrlKey || e.metaKey) && this.switchTool(this.tools[3]), this.currentTool.pointerDown({
                            x: o,
                            y: a
                        }, this.currentCtx, this.toolState, e), this.currentCtx.restore(), this.lastPosition = {
                            x: o,
                            y: a
                        }, !0))
                    }, r.pointerMove = function(e) {
                        if (!this.blockInput) {
                            if (this.scrolling) {
                                var t = vt(this.displayCanvas, e),
                                    n = t.x,
                                    i = t.y,
                                    r = this.translateZoomedPosition({
                                        x: n,
                                        y: i
                                    }),
                                    o = r.x,
                                    a = r.y,
                                    s = this.lastPosition,
                                    l = s.x,
                                    c = s.y;
                                return this.zoomCenter = {
                                    x: this.zoomCenter.x + (l - o),
                                    y: this.zoomCenter.y + (c - a)
                                }, this.lastPosition = {
                                    x: o,
                                    y: a
                                }, this.zoomCenter.x < 0 && (this.zoomCenter.x = 0), this.zoomCenter.y < 0 && (this.zoomCenter.y = 0), this.zoomCenter.x > this.displayCanvas.width && (this.zoomCenter.x = this.displayCanvas.width), void(this.zoomCenter.y > this.displayCanvas.height && (this.zoomCenter.y = this.displayCanvas.height))
                            }
                            var u = this.translateZoomedPosition(vt(this.displayCanvas, e)),
                                d = u.x,
                                h = u.y;
                            this.currentCtx.save(), this.currentTool.pointerMove(this.lastPosition, {
                                x: d,
                                y: h
                            }, this.currentCtx, this.toolState, e), this.currentCtx.restore(), this.lastPosition = {
                                x: d,
                                y: h
                            }
                        }
                    }, r.pointerUp = function(e) {
                        if (this.scrolling = !1, !this.blockInput) {
                            var t = this.translateZoomedPosition(vt(this.displayCanvas, e)),
                                n = t.x,
                                i = t.y;
                            0 === e.button && (this.currentCtx.save(), this.currentTool.pointerUp({
                                x: n,
                                y: i
                            }, this.currentCtx, this.toolState, e), this.currentCtx.restore(), this.lastPosition = {
                                x: n,
                                y: i
                            })
                        }
                    }, r.wheel = function(e) {
                        if (!this.blockInput) {
                            var t = vt(this.displayCanvas, e),
                                n = t.x,
                                i = t.y,
                                r = this.translateZoomedPosition({
                                    x: n,
                                    y: i
                                }),
                                o = r.x,
                                a = r.y;
                            if (!(n < 0 || i < 0 || n > this.displayCanvas.width || i > this.displayCanvas.height)) {
                                var s = e.deltaY > 0 ? this.zoom - .1 : this.zoom + .1,
                                    l = {
                                        x: (s = Math.min(Math.max(1, s), 3)) > this.zoom ? o : (o + this.zoomCenter.x) / 2,
                                        y: s > this.zoom ? a : (a + this.zoomCenter.y) / 2
                                    };
                                s !== this.zoom && this.zoomCanvas(s, l), this.lastPosition = {
                                    x: o,
                                    y: a
                                }
                            }
                        }
                    }, r.switchTool = function(e) {
                        this.currentTool.switchFrom(this.currentCtx), this.toolState.lastTool = this.currentTool, this.toolState.currentTool = e, this.currentTool.switchTo(this.currentCtx)
                    }, r.switchLayer = function(e) {
                        this.currentTool.switchFrom(this.currentCtx), this.selectedLayer = e, this.currentTool.switchTo(this.currentCtx)
                    }, r.addLayer = function(e) {
                        var t = document.createElement("canvas");
                        t.width = this.displayCanvas.width, t.height = this.displayCanvas.height, this.layers.push(t), this.selectedLayer = this.layers.length - 1, e && this.saveState()
                    }, r.removeLayer = function(e, t) {
                        this.layers.length > 1 && (this.layers.splice(e, 1), this.selectedLayer >= this.layers.length && (this.selectedLayer = this.layers.length - 1), t && this.saveState())
                    }, r.moveLayer = function(e, t, n) {
                        t < 0 || t >= this.layers.length || e !== t && (this.layers.splice(t, 0, this.layers.splice(e, 1)[0]), e === this.selectedLayer ? this.selectedLayer = t : e < this.selectedLayer && t >= this.selectedLayer ? this.selectedLayer-- : e > this.selectedLayer && t <= this.selectedLayer && this.selectedLayer++, n && this.saveState())
                    }, r.putImageDataToLayer = function(e, t) {
                        var n = this.layers[e].getContext("2d");
                        if (!n) throw new Error("Could not get context");
                        n.putImageData(t, 0, 0)
                    }, r.getLayerData = function() {
                        return this.layers.map((function(e) {
                            var t = e.getContext("2d");
                            if (!t) throw new Error("Could not get context");
                            return t.getImageData(0, 0, e.width, e.height)
                        }))
                    }, r.undo = function() {
                        if (this.undoStack.length > 1) {
                            var e = this.undoStack.pop();
                            if (!e) return;
                            this.redoStack.push(e);
                            var t = this.undoStack[this.undoStack.length - 1];
                            if (!t) return;
                            var n = 0,
                                i = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var a, s = t.layerData[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                                    var l = a.value;
                                    n < this.layers.length || this.addLayer(), this.putImageDataToLayer(n, l), n++
                                }
                            } catch (c) {
                                r = !0, o = c
                            } finally {
                                try {
                                    i || null == s.return || s.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            this.layers = this.layers.slice(0, n), this.selectedLayer >= this.layers.length && (this.selectedLayer = this.layers.length - 1), this.toolState.changeToReload && this.toolState.changeToReload(!0)
                        }
                    }, r.redo = function() {
                        if (this.redoStack.length > 0) {
                            var e = this.redoStack.pop();
                            if (!e) return;
                            this.undoStack.push(e);
                            var t = 0,
                                n = !0,
                                i = !1,
                                r = void 0;
                            try {
                                for (var o, a = e.layerData[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                    var s = o.value;
                                    t < this.layers.length || this.addLayer(), this.putImageDataToLayer(t, s), t++
                                }
                            } catch (l) {
                                i = !0, r = l
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (i) throw r
                                }
                            }
                            this.layers = this.layers.slice(0, t), this.selectedLayer >= this.layers.length && (this.selectedLayer = this.layers.length - 1), this.toolState.changeToReload && this.toolState.changeToReload(!0)
                        }
                    }, r.saveState = function() {
                        var e = this.getLayerData();
                        this.undoStack.push({
                            layerData: e
                        }), this.redoStack = []
                    }, r.clearHistory = function() {
                        this.undoStack = [], this.redoStack = [], this.saveState()
                    }, t = e, (n = [{
                        key: "currentLayer",
                        get: function() {
                            return this.layers[this.selectedLayer]
                        }
                    }, {
                        key: "displayContext",
                        get: function() {
                            var e = this.displayCanvas.getContext("2d");
                            if (!e) throw new Error("Could not get display context");
                            return e
                        }
                    }, {
                        key: "currentCtx",
                        get: function() {
                            if (!this.currentLayer) throw new Error("No current layer");
                            var e = this.currentLayer.getContext("2d");
                            if (!e) throw new Error("Could not get context");
                            return e
                        }
                    }, {
                        key: "currentTool",
                        get: function() {
                            return this.toolState.currentTool
                        }
                    }]) && De(t.prototype, n), i && De(t, i), e
                }(),
                It = 0,
                Zt = 0,
                Lt = 0,
                Mt = 0;

            function Pt() {
                if (window.requestAnimationFrame(Pt), Zt = Date.now(), Mt = Zt - Lt, wt && Mt > It) {
                    Lt = Zt - Mt % It, wt.displayContext.clearRect(0, 0, wt.displayCanvas.width, wt.displayCanvas.height);
                    var e = document.createElement("canvas");
                    e.width = wt.displayCanvas.width, e.height = wt.displayCanvas.height;
                    var t = e.getContext("2d");
                    if (!t) throw new Error("Could not get temp context for combining layers");
                    var n = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var o, a = wt.layers[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var s = o.value;
                            if (wt.currentTool.hasLayerFrameLoop && wt.selectedLayer === wt.layers.indexOf(s)) {
                                var l = document.createElement("canvas");
                                l.width = wt.displayCanvas.width, l.height = wt.displayCanvas.height;
                                var c = l.getContext("2d");
                                if (!c) throw new Error("Could not get context");
                                c.drawImage(s, 0, 0), wt.currentTool.layerFrameLoop && wt.currentTool.layerFrameLoop(wt.lastPosition, c, wt.toolState), t.drawImage(l, 0, 0)
                            } else t.drawImage(s, 0, 0)
                        }
                    } catch (h) {
                        i = !0, r = h
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    t.save(), wt.currentTool.frameLoop(wt.lastPosition, t, wt.toolState), t.restore();
                    var u = wt.zoom,
                        d = wt.zoomCenter;
                    wt.displayContext.save(), wt.displayContext.translate(d.x, d.y), wt.displayContext.scale(u, u), wt.displayContext.translate(-d.x, -d.y), wt.displayContext.drawImage(e, 0, 0), wt.displayContext.restore()
                }
            }

            function Tt(e) {
                var t = (0, p.useState)([0, 0]),
                    n = t[0],
                    i = t[1],
                    r = (0, p.useState)([1024, 1024]),
                    a = r[0],
                    s = r[1],
                    l = (0, p.useRef)(!1),
                    c = (0, p.useRef)(new kt),
                    u = (0, ze.O)(),
                    h = (0, p.useRef)(),
                    f = (0, p.useRef)(!!e.image);
                (0, p.useLayoutEffect)((function() {
                    if (!l.current) {
                        c.current = new kt, wt = c.current;
                        var t = c.current;
                        l.current = !0;
                        var n = document.querySelector("#canvas");
                        t.displayCanvas = n, c.current.addLayer(), c.current.toolState.changeColor = function(e) {
                            y(e), L(c.current.tools[0])
                        };
                        var i, r, o = function() {
                            u()
                        };
                        if (c.current.toolState.changeToReload = function(e) {
                                h.current && clearTimeout(h.current), e ? o() : h.current = setTimeout(o, 1e3)
                            }, It = 1e3 / 60, Mt = Date.now(), Pt(), setTimeout((function() {
                                A(!0)
                            }), 100), !e.image) return W(null !== (i = e.width) && void 0 !== i ? i : 1024, null !== (r = e.height) && void 0 !== r ? r : 1024), void c.current.saveState();
                        var a = new Image;
                        a.addEventListener("load", (function() {
                            var e = 1680,
                                n = a.width,
                                i = a.height,
                                r = n / i,
                                o = n,
                                s = i;
                            (n > e || i > e) && (r > 1 ? (o = e, s = e / r) : (o = e * r, s = e)), W(o, s), t.currentCtx.drawImage(a, 0, 0, o, s), t.addLayer(), O(1), c.current.saveState()
                        })), a.src = "data:image/png;base64,".concat(e.image.toString("base64"))
                    }
                }), [e.height, e.image, e.width, u]);
                var m = c.current,
                    v = (0, p.useState)(c.current.toolState.color),
                    x = v[0],
                    y = v[1],
                    w = function(e) {
                        y(e), c.current.toolState.color = e, c.current.toolState.opacity = function(e) {
                            var t = (e.match(/^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+(?:\.\d*)?)?\s*\)$/) || [])[4];
                            return Number.parseFloat(null !== t && void 0 !== t ? t : "1")
                        }(e)
                    },
                    b = (0, p.useState)(c.current.toolState.size),
                    j = b[0],
                    C = b[1],
                    S = (0, p.useState)(c.current.tools[0]),
                    k = S[0],
                    I = S[1],
                    L = function(e) {
                        I(e), c.current.switchTool(e)
                    },
                    P = (0, p.useState)(!1),
                    E = P[0],
                    A = P[1],
                    N = (0, p.useState)(c.current.selectedLayer),
                    z = N[0],
                    O = N[1],
                    _ = function(e) {
                        O(e), c.current.switchLayer(e)
                    },
                    q = (0, p.useState)(Oe.SE),
                    H = q[0],
                    B = q[1],
                    W = function(e, t) {
                        c.current.resizeCanvas(t, e), s([e, t])
                    };
                (0, p.useLayoutEffect)((function() {
                    var e = function(e) {
                            "b" === e.key && L(c.current.tools[0])
                        },
                        t = function(e) {
                            "e" === e.key && L(c.current.tools[1])
                        },
                        n = function(e) {
                            "s" === e.key && L(c.current.tools[2])
                        },
                        i = function(e) {
                            "c" === e.key && ("Color Picker" === c.current.toolState.currentTool.name && c.current.toolState.lastTool ? L(c.current.toolState.lastTool) : L(c.current.tools[3]))
                        },
                        r = function(e) {
                            "z" === e.key && (e.ctrlKey || e.metaKey) && (e.preventDefault(), c.current.undo())
                        },
                        o = function(e) {
                            "y" === e.key && (e.ctrlKey || e.metaKey) && (e.preventDefault(), c.current.redo())
                        },
                        a = function(e) {
                            c.current.pointerDown(e) && (f.current = !0)
                        },
                        s = function(e) {
                            c.current.pointerMove(e)
                        },
                        l = function(e) {
                            c.current.pointerUp(e)
                        };
                    return window.addEventListener("pointerdown", a), window.addEventListener("pointerup", l), window.addEventListener("pointermove", s), window.addEventListener("wheel", (function(e) {
                            c.current.wheel(e)
                        })), window.addEventListener("keydown", e), window.addEventListener("keydown", t), window.addEventListener("keydown", n), window.addEventListener("keydown", i), window.addEventListener("keydown", r), window.addEventListener("keydown", o),
                        function() {
                            window.removeEventListener("pointerdown", a), window.removeEventListener("pointerup", l), window.removeEventListener("pointermove", s), window.removeEventListener("keydown", e), window.removeEventListener("keydown", t), window.removeEventListener("keydown", n), window.removeEventListener("keydown", i), window.removeEventListener("keydown", r), window.removeEventListener("keydown", o)
                        }
                }), [m]);
                var $ = (0, p.useRef)(null),
                    G = (0, D.i)();
                (0, p.useLayoutEffect)((function() {
                    if ($.current) {
                        var e = $.current.getBoundingClientRect(),
                            t = e.width,
                            n = e.height,
                            r = t / n,
                            o = a[0] / a[1];
                        if (r < o) {
                            i([t, t / o])
                        } else {
                            i([n * o, n])
                        }
                    }
                }), [$, G.width, G.height, a]);
                var K = (0, p.useState)(a[0]),
                    V = K[0],
                    J = K[1],
                    X = (0, p.useState)(a[1]),
                    Q = X[0],
                    ee = X[1],
                    te = (0, p.useState)(0),
                    ne = te[0],
                    ie = te[1],
                    re = (0, p.useState)(0),
                    oe = re[0],
                    ae = re[1],
                    le = (0, p.useState)(0),
                    ce = le[0],
                    ue = le[1],
                    de = (0, p.useState)(0),
                    he = de[0],
                    fe = de[1],
                    pe = (0, p.useState)(!1),
                    ge = pe[0],
                    me = pe[1];
                (0, p.useEffect)((function() {
                    wt && (wt.blockInput = ge)
                }), [ge]);
                var ve = {
                        onMouseDown: function(e) {
                            e.target !== document.activeElement && (e.preventDefault(), e.target.select())
                        }
                    },
                    xe = function(e, t, n, i) {
                        void 0 !== e && void 0 !== t && void 0 !== n && void 0 !== i && (J(a[0] + i + t), ee(a[1] + n + e))
                    },
                    ye = function(e, t) {
                        void 0 !== e && void 0 !== t && (ie(0), ae(0), ue(e - a[0]), fe(t - a[1]))
                    },
                    we = (0, p.useCallback)((function(e) {
                        var t = new Image;
                        t.addEventListener("load", (function() {
                            var e = document.createElement("canvas");
                            e.width = t.width, e.height = t.height;
                            var n = e.getContext("2d");
                            if (!n) throw new Error("Could not get context");
                            if (n.drawImage(t, 0, 0), f.current || W(t.width, t.height), m.addLayer(), f.current) {
                                var i = t.width / t.height,
                                    r = m.currentLayer.width / m.currentLayer.height;
                                if (i - r > 0) {
                                    var o = t.height * r,
                                        a = (t.width - o) / 2;
                                    m.currentCtx.drawImage(e, a, 0, o, t.height, 0, 0, m.currentLayer.width, m.currentLayer.height)
                                } else {
                                    var s = t.width / r,
                                        l = (t.height - s) / 2;
                                    m.currentCtx.drawImage(e, 0, l, t.width, s, 0, 0, m.currentLayer.width, m.currentLayer.height)
                                }
                            } else m.currentCtx.drawImage(e, 0, 0, t.width, t.height, 0, 0, m.currentLayer.width, m.currentLayer.height);
                            O(m.selectedLayer), c.current.saveState(), u()
                        })), t.src = "data:image/png;base64,".concat(e.toString("base64"))
                    }), [m, u]);
                return (0, p.useEffect)((function() {
                    ge && (J(a[0]), ee(a[1]), ie(0), ae(0), ue(0), fe(0))
                }), [a, ge]), (0, d.jsxs)(Rt, {
                    style: {
                        display: "flex",
                        height: "100%",
                        width: "100%"
                    },
                    children: [(0, d.jsx)(ut, {
                        onFileImport: function(e) {
                            we(e)
                        }
                    }), (0, d.jsxs)(st, {
                        children: [(0, d.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start",
                                marginBottom: "5px"
                            },
                            children: [(0, d.jsxs)("span", {
                                style: {
                                    opacity: .5
                                },
                                children: ["Selected:", " "]
                            }), (0, d.jsx)(Ie.y$, {
                                children: m.toolState.currentTool.name
                            })]
                        }), (0, d.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start",
                                minHeight: "44px",
                                marginBottom: "20px",
                                flexWrap: "wrap"
                            },
                            children: [m.tools.map((function(e) {
                                return (0, d.jsx)(rt, {
                                    selected: k === e,
                                    onClick: function() {
                                        L(e)
                                    },
                                    children: e.icon
                                }, e.name)
                            })), (0, d.jsx)(zt, {
                                color: x,
                                onChange: function(e) {
                                    w(e), I(m.tools[0])
                                }
                            }), (0, d.jsx)(R.pW, {
                                title: "Pen Size",
                                min: 5,
                                max: 100,
                                step: 5,
                                value: j,
                                uncapMax: !0,
                                uncapMin: !0,
                                onChange: function(e) {
                                    var t;
                                    t = e, t = Math.min(500, t), t = Math.max(1, t), C(t), c.current.toolState.size = t
                                },
                                style: {
                                    margin: 0
                                }
                            }), (0, d.jsx)(U.Z, {
                                tooltip: "Pressure Sensitivity",
                                delay: 0,
                                children: (0, d.jsx)(rt, {
                                    selected: H,
                                    onClick: function() {
                                        var e;
                                        B(e = !H), c.current.toolState.pressureSensitivity = e
                                    },
                                    children: (0, d.jsx)(M.Xf, {})
                                })
                            }), (0, d.jsx)(T.Gb, {}), (0, d.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "10px"
                                },
                                children: [(0, d.jsx)(rt, {
                                    style: {
                                        border: "none",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    },
                                    onClick: function() {
                                        me(!0)
                                    },
                                    children: "Resize Canvas"
                                }), (0, d.jsx)(rt, {
                                    style: {
                                        justifyContent: "center",
                                        minWidth: "80px"
                                    },
                                    onClick: function() {
                                        m.undo()
                                    },
                                    children: (0, d.jsx)(M.UE, {})
                                }), (0, d.jsx)(rt, {
                                    style: {
                                        justifyContent: "center",
                                        minWidth: "80px"
                                    },
                                    onClick: function() {
                                        m.redo()
                                    },
                                    children: (0, d.jsx)(M.zG, {})
                                }), (0, d.jsx)(rt, {
                                    "aria-label": "Download Canvas as PNG",
                                    style: {
                                        justifyContent: "center",
                                        minWidth: "80px"
                                    },
                                    onClick: function() {
                                        var e = m.getImage();
                                        if (e) {
                                            var t = document.createElement("a");
                                            t.download = "canvas.png", t.href = e, t.target = "_blank", t.click()
                                        } else(0, g.Am)("Error saving image")
                                    },
                                    children: (0, d.jsx)(M.N, {})
                                }), (0, d.jsx)(ot, {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        minWidth: "120px",
                                        padding: "10px"
                                    },
                                    onClick: function() {
                                        var t = m.getImage();
                                        t ? e.close(ht.from(t.split(",")[1], "base64")) : (0, g.Am)("Error saving image")
                                    },
                                    children: "Save"
                                }), (0, d.jsx)(at, {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        minWidth: "100px",
                                        padding: "10px"
                                    },
                                    onClick: function() {
                                        e.close()
                                    },
                                    children: "Cancel"
                                })]
                            }), (0, d.jsx)(Y.Z, {
                                isOpen: ge,
                                onRequestClose: function() {
                                    return me(!1)
                                },
                                shouldCloseOnOverlayClick: !0,
                                type: Y.w.Large,
                                children: (0, d.jsxs)(tt, {
                                    children: [(0, d.jsx)(F.P, {
                                        onClick: function() {
                                            return me(!1)
                                        },
                                        children: (0, d.jsx)("div", {})
                                    }), (0, d.jsx)("div", {
                                        style: {
                                            fontSize: "1.275rem"
                                        },
                                        children: "Resize Canvas"
                                    }), (0, d.jsx)(T.l4, {
                                        min: 20,
                                        max: 20
                                    }), (0, d.jsxs)(T.gq, {
                                        children: [(0, d.jsxs)(Ie.Dx, {
                                            children: ["Change Size", (0, d.jsx)("span", {
                                                style: {
                                                    opacity: .5
                                                },
                                                children: " [w x h]"
                                            })]
                                        }), (0, d.jsx)(Z.Yl, {
                                            style: {
                                                opacity: .9,
                                                fontSize: "0.875rem"
                                            },
                                            onClick: function() {
                                                ! function(e) {
                                                    if (void 0 !== V && void 0 !== Q) {
                                                        var t = a[0],
                                                            n = a[1],
                                                            i = Math.floor(t / e) * e,
                                                            r = Math.floor(n / e) * e - n,
                                                            o = i - t,
                                                            s = Math.floor(o / 2),
                                                            l = Math.floor(r / 2),
                                                            c = Math.ceil(o / 2),
                                                            u = Math.ceil(r / 2);
                                                        ae(s), ie(l), ue(c), fe(u), xe(l, s, u, c)
                                                    }
                                                }(64)
                                            },
                                            children: "Crop to closest valid generation size"
                                        })]
                                    }), (0, d.jsxs)(T.gq, {
                                        children: [(0, d.jsx)(Ie.II, (0, o.Z)({
                                            type: "number",
                                            value: null !== V && void 0 !== V ? V : "",
                                            onChange: function(e) {
                                                se(e.target.value, (function(e) {
                                                    return J(e)
                                                }), !1, !0)
                                            },
                                            onBlur: function() {
                                                ye(V, Q)
                                            }
                                        }, ve)), (0, d.jsx)(Z.Yl, {
                                            onClick: function() {
                                                var e = V;
                                                J(Q), ee(e)
                                            },
                                            children: (0, d.jsx)(M.aM, {
                                                style: {
                                                    height: 15,
                                                    width: 15,
                                                    margin: "18px",
                                                    flex: "0 0 auto"
                                                }
                                            })
                                        }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                            type: "number",
                                            value: null !== Q && void 0 !== Q ? Q : "",
                                            onChange: function(e) {
                                                se(e.target.value, (function(e) {
                                                    return ee(e)
                                                }), !1, !0)
                                            },
                                            onBlur: function() {
                                                ye(V, Q)
                                            }
                                        }, ve))]
                                    }), (0, d.jsx)(T.l4, {
                                        min: 10,
                                        max: 10
                                    }), (0, d.jsx)(Ie.Dx, {
                                        style: {
                                            opacity: .5
                                        },
                                        children: "or"
                                    }), (0, d.jsx)(T.l4, {
                                        min: 10,
                                        max: 10
                                    }), (0, d.jsx)(Ie.Dx, {
                                        children: "Shift Edges"
                                    }), (0, d.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center"
                                        },
                                        children: (0, d.jsx)(Ie.II, (0, o.Z)({
                                            style: {
                                                maxWidth: 100
                                            },
                                            type: "number",
                                            value: null !== ne && void 0 !== ne ? ne : "",
                                            onChange: function(e) {
                                                se(e.target.value, (function(e) {
                                                    return ie(e)
                                                }), !1, !0)
                                            },
                                            onBlur: function() {
                                                xe(ne, oe, he, ce)
                                            }
                                        }, ve))
                                    }), (0, d.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        },
                                        children: [(0, d.jsx)(Ie.II, (0, o.Z)({
                                            style: {
                                                maxWidth: 100
                                            },
                                            type: "number",
                                            value: null !== oe && void 0 !== oe ? oe : "",
                                            onChange: function(e) {
                                                se(e.target.value, (function(e) {
                                                    return ae(e)
                                                }), !1, !0)
                                            },
                                            onBlur: function() {
                                                xe(ne, oe, he, ce)
                                            }
                                        }, ve)), (0, d.jsx)("div", {
                                            children: (0, d.jsxs)("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr 1fr",
                                                    gridTemplateRows: "1fr 1fr 1 fr",
                                                    alignItems: "center",
                                                    justifyItems: "center"
                                                },
                                                children: [(0, d.jsx)(it, {}), (0, d.jsx)(M.Hf, {
                                                    style: {
                                                        cursor: "default"
                                                    }
                                                }), (0, d.jsx)(it, {}), (0, d.jsx)(M.Y4, {
                                                    style: {
                                                        cursor: "default"
                                                    }
                                                }), (0, d.jsx)(nt, {}), (0, d.jsx)(M.LZ, {
                                                    style: {
                                                        cursor: "default"
                                                    }
                                                }), (0, d.jsx)(it, {}), (0, d.jsx)(M.ve, {
                                                    style: {
                                                        cursor: "default"
                                                    }
                                                }), (0, d.jsx)(it, {})]
                                            })
                                        }), (0, d.jsx)(Ie.II, (0, o.Z)({
                                            style: {
                                                maxWidth: 100
                                            },
                                            type: "number",
                                            value: null !== ce && void 0 !== ce ? ce : "",
                                            onChange: function(e) {
                                                se(e.target.value, (function(e) {
                                                    return ue(e)
                                                }), !1, !0)
                                            },
                                            onBlur: function() {
                                                xe(ne, oe, he, ce)
                                            }
                                        }, ve))]
                                    }), (0, d.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center"
                                        },
                                        children: (0, d.jsx)(Ie.II, (0, o.Z)({
                                            style: {
                                                maxWidth: 100
                                            },
                                            type: "number",
                                            value: null !== he && void 0 !== he ? he : "",
                                            onChange: function(e) {
                                                se(e.target.value, (function(e) {
                                                    return fe(e)
                                                }), !1, !0)
                                            },
                                            onBlur: function() {
                                                xe(ne, oe, he, ce)
                                            }
                                        }, ve))
                                    }), (0, d.jsx)(Z.t4, {
                                        style: {
                                            marginLeft: "auto"
                                        },
                                        onClick: function() {
                                            void 0 !== ne && void 0 !== oe && void 0 !== he && void 0 !== ce && (! function(e, t, n, i) {
                                                f.current = !0;
                                                var r = m.changeCanvasDimensions(e, t, n, i),
                                                    o = r.width,
                                                    a = r.height;
                                                ie(0), ae(0), ue(0), fe(0), J(o), ee(a), s([o, a])
                                            }(ne, oe, ce, he), me(!1))
                                        },
                                        children: "Resize"
                                    })]
                                })
                            })]
                        }), (0, d.jsx)("div", {
                            ref: $,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                flex: "1 1 0",
                                position: "relative",
                                width: "100%"
                            },
                            children: (0, d.jsx)("div", {
                                style: {
                                    display: E ? "block" : "none",
                                    position: "absolute",
                                    border: "1px solid #000",
                                    backgroundColor: "#fff",
                                    width: n[0],
                                    height: n[1],
                                    userSelect: "none",
                                    backgroundImage: "linear-gradient(45deg, #A0A0A0 25%, transparent 25%), linear-gradient(-45deg, #A0A0A0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #A0A0A0 75%), linear-gradient(-45deg, transparent 75%, #A0A0A0 75%)",
                                    backgroundSize: "30px 30px",
                                    backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px"
                                },
                                children: (0, d.jsx)("canvas", {
                                    id: "canvas",
                                    draggable: !1,
                                    style: {
                                        height: n[1],
                                        width: n[0],
                                        touchAction: "none"
                                    },
                                    height: "1024",
                                    width: "1024"
                                })
                            })
                        })]
                    }), (0, d.jsxs)(At, {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [m.layers.map((function(e, t) {
                            var i = n[0] / n[1],
                                r = i > 1 ? 80 : 80 * i,
                                o = i > 1 ? 80 / i : 80;
                            return (0, d.jsxs)("div", {
                                style: {
                                    height: 105,
                                    width: 80,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: [(0, d.jsxs)(Dt, {
                                    selected: t === z,
                                    style: {
                                        height: o,
                                        width: r,
                                        flex: "0 0 auto"
                                    },
                                    onClick: function() {
                                        _(t)
                                    },
                                    children: [(0, d.jsx)("div", {
                                        children: (0, d.jsx)(Z.Yl, {
                                            style: {
                                                top: 0,
                                                right: 0
                                            },
                                            disabled: 1 === m.layers.length,
                                            onClick: function(e) {
                                                e.stopPropagation(), m.removeLayer(t, !0), _(m.layers.length - 1)
                                            },
                                            children: (0, d.jsx)(M.pJ, {})
                                        })
                                    }), (0, d.jsx)(Z.Yl, {
                                        style: {
                                            backgroundImage: "url(".concat(e.toDataURL(), ")")
                                        }
                                    })]
                                }), (0, d.jsxs)(Et, {
                                    style: {
                                        width: r
                                    },
                                    children: [(0, d.jsx)(Z.Yl, {
                                        style: {
                                            bottom: 0,
                                            left: 0
                                        },
                                        onClick: function(e) {
                                            e.stopPropagation(), m.moveLayer(t, t + 1, !0), u()
                                        },
                                        disabled: t === m.layers.length - 1,
                                        children: (0, d.jsx)(M.Hf, {})
                                    }), (0, d.jsx)(Z.Yl, {
                                        style: {
                                            bottom: 0,
                                            left: 21
                                        },
                                        onClick: function(e) {
                                            e.stopPropagation(), m.moveLayer(t, t - 1, !0), u()
                                        },
                                        disabled: 0 === t,
                                        children: (0, d.jsx)(M.ve, {})
                                    })]
                                })]
                            }, t)
                        })), (0, d.jsx)(Z.Yl, {
                            onClick: function() {
                                m.addLayer(!0), _(m.layers.length - 1), u()
                            },
                            style: {
                                padding: 4,
                                fontSize: "0.875rem",
                                opacity: .5
                            },
                            children: window.innerWidth > 800 ? "Add Layer" : (0, d.jsx)(M.pO, {})
                        })]
                    })]
                })
            }
            var Dt = Ae.ZP.div.withConfig({
                    componentId: "sc-f9f8b4f0-0"
                })(ft(), (function(e) {
                    return e.selected ? e.theme.colors.textMain : e.theme.colors.bg2
                }), (function(e) {
                    return e.theme.colors.bg2
                }), (function(e) {
                    return e.theme.colors.textMain
                })),
                Et = Ae.ZP.div.withConfig({
                    componentId: "sc-f9f8b4f0-1"
                })(pt(), (function(e) {
                    return e.theme.colors.bg3
                })),
                Rt = Ae.ZP.div.withConfig({
                    componentId: "sc-f9f8b4f0-2"
                })(gt()),
                At = Ae.ZP.div.withConfig({
                    componentId: "sc-f9f8b4f0-3"
                })(mt());

            function Nt(e) {
                var t = (0, s.Z)(e.match(/^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+(?:\.\d*)?)?\s*\)$/) || [], 5),
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    o = t[4],
                    a = (255 * Number.parseFloat(null !== o && void 0 !== o ? o : "1")).toString(16);
                return a.length < 2 && (a = "0" + a), "#" + ((1 << 24) + (Number.parseInt(n) << 16) + (Number.parseInt(i) << 8) + Number.parseInt(r)).toString(16).slice(1) + a
            }

            function zt(e) {
                var t = (0, p.useState)(!1),
                    n = t[0],
                    i = t[1];
                (0, p.useEffect)((function() {
                    wt && (wt.blockInput = n)
                }), [n]);
                var r = (0, p.useRef)(null),
                    o = (0, p.useCallback)((function() {
                        i(!1)
                    }), []);
                (0, Ne.O)(r, o);
                var a = (0, p.useState)(Nt(e.color)),
                    s = a[0],
                    l = a[1],
                    c = (0, p.useRef)(0),
                    u = function(t) {
                        l(t), clearTimeout(c.current), c.current = setTimeout((function() {
                            return e.onChange(function(e) {
                                var t = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{1,2})?$/i.exec(e);
                                if (!t) throw "Invalid hex color: " + e;
                                var n, i = Number.parseInt(t[1], 16),
                                    r = Number.parseInt(t[2], 16),
                                    o = Number.parseInt(t[3], 16),
                                    a = (void 0 !== (0, Re.Z)(t[4]) ? Number.parseInt(null !== (n = t[4]) && void 0 !== n ? n : "FF", 16) : 255) / 255;
                                return "rgba(".concat(i, ", ").concat(r, ", ").concat(o, ", ").concat(a, ")")
                            }(t))
                        }), 20)
                    };
                return (0, p.useEffect)((function() {
                    l(Nt(e.color))
                }), [e.color]), (0, d.jsxs)("div", {
                    style: {
                        lineHeight: 0,
                        borderRadius: 3,
                        position: "relative",
                        backgroundColor: "white",
                        backgroundImage: "linear-gradient(45deg, #A0A0A0 25%, transparent 25%), linear-gradient(-45deg, #A0A0A0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #A0A0A0 75%), linear-gradient(-45deg, transparent 75%, #A0A0A0 75%)",
                        backgroundSize: "30px 30px",
                        backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px"
                    },
                    children: [(0, d.jsx)(Je, {
                        style: {
                            backgroundColor: s
                        },
                        onClick: function() {
                            i(!0)
                        }
                    }), n && (0, d.jsxs)(et, {
                        ref: r,
                        children: [(0, d.jsx)(Xe, {
                            color: s,
                            onChange: function(e) {
                                u(e)
                            }
                        }), (0, d.jsx)(Qe, {
                            color: s,
                            onChange: function(e) {
                                u(e)
                            }
                        })]
                    })]
                })
            }
            var Ot = n(22058),
                Ft = n(70804);

            function _t() {
                var e = (0, Ee.Z)(["\n    padding: 20px;\n    background: ", ";\n    display: flex;\n    flex-direction: column;\n"]);
                return _t = function() {
                    return e
                }, e
            }

            function Yt() {
                var e = (0, Ee.Z)(["\n    font-size: 1.275rem;\n    font-weight: 600;\n    font-family: ", ";\n    color: ", ";\n    margin-bottom: 10px;\n"]);
                return Yt = function() {
                    return e
                }, e
            }

            function qt() {
                var e = (0, Ee.Z)(["\n    background-color: ", ";\n    padding: 20px;\n    white-space: pre-wrap;\n    overflow-y: auto;\n"]);
                return qt = function() {
                    return e
                }, e
            }

            function Ht() {
                var e = (0, p.useState)(!1),
                    t = e[0],
                    n = e[1],
                    i = (0, s.Z)((0, m.FV)(S.z_), 2),
                    r = i[0],
                    l = i[1],
                    c = (0, p.useState)(!(0, Ft.WH)(r.settings, "stableLicenseAgree")),
                    u = c[0],
                    h = c[1];
                return !0 === (0, Ft.WH)(r.settings, "stableLicenseAgree") ? (0, d.jsx)(d.Fragment, {}) : (0, d.jsx)(Y.Z, {
                    type: Y.w.Large,
                    isOpen: u,
                    onRequestClose: function() {
                        return h(!1)
                    },
                    children: (0, d.jsxs)(Bt, {
                        children: [(0, d.jsx)(Wt, {
                            children: "Please read and agree with the following:"
                        }), (0, d.jsx)($t, {
                            children: Ut
                        }), (0, d.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                gap: "30px",
                                marginTop: "30px",
                                flexWrap: "wrap",
                                width: "100%"
                            },
                            children: [(0, d.jsx)(Le.U4, {
                                label: "I agree",
                                value: t,
                                setValue: n,
                                offText: "Click here to agree with these terms",
                                text: "I agree with the above terms"
                            }), (0, d.jsx)(ot, {
                                style: {
                                    width: "100%",
                                    maxWidth: "280px"
                                },
                                disabled: !t,
                                onClick: function() {
                                    t && (l((function(e) {
                                        var n = (0, a.Z)((0, o.Z)({}, e), {
                                            settings: (0, a.Z)((0, o.Z)({}, e.settings), {
                                                stableLicenseAgree: t
                                            })
                                        });
                                        return (0, Ot.cF)(n).saveSettings(n.settings), n
                                    })), h(!1))
                                },
                                children: "Accept"
                            })]
                        })]
                    })
                })
            }
            var Ut = 'Copyright (c) 2022 Robin Rombach and Patrick Esser and contributors\n\nCreativeML Open RAIL-M\ndated August 22, 2022\n\nSection I: PREAMBLE\n\nMultimodal generative models are being widely adopted and used, and have the potential to transform the way artists, among other individuals, conceive and benefit from AI or ML technologies as a tool for content creation.\n\nNotwithstanding the current and potential benefits that these artifacts can bring to society at large, there are also concerns about potential misuses of them, either due to their technical limitations or ethical considerations.\n\nIn short, this license strives for both the open and responsible downstream use of the accompanying model. When it comes to the open character, we took inspiration from open source permissive licenses regarding the grant of IP rights. Referring to the downstream responsible use, we added use-based restrictions not permitting the use of the Model in very specific scenarios, in order for the licensor to be able to enforce the license in case potential misuses of the Model may occur. At the same time, we strive to promote open and responsible research on generative models for art and content generation.\n\nEven though downstream derivative versions of the model could be released under different licensing terms, the latter will always have to include - at minimum - the same use-based restrictions as the ones in the original license (this license). We believe in the intersection between open and responsible AI development; thus, this License aims to strike a balance between both in order to enable responsible open-science in the field of AI.\n\nThis License governs the use of the model (and its derivatives) and is informed by the model card associated with the model.\n\nNOW THEREFORE, You and Licensor agree as follows:\n\n1. Definitions\n\n- "License" means the terms and conditions for use, reproduction, and Distribution as defined in this document.\n- "Data" means a collection of information and/or content extracted from the dataset used with the Model, including to train, pretrain, or otherwise evaluate the Model. The Data is not licensed under this License.\n- "Output" means the results of operating a Model as embodied in informational content resulting therefrom.\n- "Model" means any accompanying machine-learning based assemblies (including checkpoints), consisting of learnt weights, parameters (including optimizer states), corresponding to the model architecture as embodied in the Complementary Material, that have been trained or tuned, in whole or in part on the Data, using the Complementary Material.\n- "Derivatives of the Model" means all modifications to the Model, works based on the Model, or any other model which is created or initialized by transfer of patterns of the weights, parameters, activations or output of the Model, to the other model, in order to cause the other model to perform similarly to the Model, including - but not limited to - distillation methods entailing the use of intermediate data representations or methods based on the generation of synthetic data by the Model for training the other model.\n- "Complementary Material" means the accompanying source code and scripts used to define, run, load, benchmark or evaluate the Model, and used to prepare data for training or evaluation, if any. This includes any accompanying documentation, tutorials, examples, etc, if any.\n- "Distribution" means any transmission, reproduction, publication or other sharing of the Model or Derivatives of the Model to a third party, including providing the Model as a hosted service made available by electronic or other remote means - e.g. API-based or web access.\n- "Licensor" means the copyright owner or entity authorized by the copyright owner that is granting the License, including the persons or entities that may have rights in the Model and/or distributing the Model.\n- "You" (or "Your") means an individual or Legal Entity exercising permissions granted by this License and/or making use of the Model for whichever purpose and in any field of use, including usage of the Model in an end-use application - e.g. chatbot, translator, image generator.\n- "Third Parties" means individuals or legal entities that are not under common control with Licensor or You.\n- "Contribution" means any work of authorship, including the original version of the Model and any modifications or additions to that Model or Derivatives of the Model thereof, that is intentionally submitted to Licensor for inclusion in the Model by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Model, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."\n- "Contributor" means Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Model.\n\nSection II: INTELLECTUAL PROPERTY RIGHTS\n\nBoth copyright and patent grants apply to the Model, Derivatives of the Model and Complementary Material. The Model and Derivatives of the Model are subject to additional terms as described in Section III.\n\n2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare, publicly display, publicly perform, sublicense, and distribute the Complementary Material, the Model, and Derivatives of the Model.\n3. Grant of Patent License. Subject to the terms and conditions of this License and where and as applicable, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this paragraph) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Model and the Complementary Material, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Model to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Model and/or Complementary Material or a Contribution incorporated within the Model and/or Complementary Material constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for the Model and/or Work shall terminate as of the date such litigation is asserted or filed.\n\nSection III: CONDITIONS OF USAGE, DISTRIBUTION AND REDISTRIBUTION\n\n4. Distribution and Redistribution. You may host for Third Party remote access purposes (e.g. software-as-a-service), reproduce and distribute copies of the Model or Derivatives of the Model thereof in any medium, with or without modifications, provided that You meet the following conditions:\nUse-based restrictions as referenced in paragraph 5 MUST be included as an enforceable provision by You in any type of legal agreement (e.g. a license) governing the use and/or distribution of the Model or Derivatives of the Model, and You shall give notice to subsequent users You Distribute to, that the Model or Derivatives of the Model are subject to paragraph 5. This provision does not apply to the use of Complementary Material.\nYou must give any Third Party recipients of the Model or Derivatives of the Model a copy of this License;\nYou must cause any modified files to carry prominent notices stating that You changed the files;\nYou must retain all copyright, patent, trademark, and attribution notices excluding those notices that do not pertain to any part of the Model, Derivatives of the Model.\nYou may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions - respecting paragraph 4.a. - for use, reproduction, or Distribution of Your modifications, or for any such Derivatives of the Model as a whole, provided Your use, reproduction, and Distribution of the Model otherwise complies with the conditions stated in this License.\n5. Use-based restrictions. The restrictions set forth in Attachment A are considered Use-based restrictions. Therefore You cannot use the Model and the Derivatives of the Model for the specified restricted uses. You may use the Model subject to this License, including only for lawful purposes and in accordance with the License. Use may include creating any content with, finetuning, updating, running, training, evaluating and/or reparametrizing the Model. You shall require all of Your users who use the Model or a Derivative of the Model to comply with the terms of this paragraph (paragraph 5).\n6. The Output You Generate. Except as set forth herein, Licensor claims no rights in the Output You generate using the Model. You are accountable for the Output you generate and its subsequent uses. No use of the output can contravene any provision as stated in the License.\n\nSection IV: OTHER PROVISIONS\n\n7. Updates and Runtime Restrictions. To the maximum extent permitted by law, Licensor reserves the right to restrict (remotely or otherwise) usage of the Model in violation of this License, update the Model through electronic means, or modify the Output of the Model based on updates. You shall undertake reasonable efforts to use the latest version of the Model.\n8. Trademarks and related. Nothing in this License permits You to make use of Licensors\u2019 trademarks, trade names, logos or to otherwise suggest endorsement or misrepresent the relationship between the parties; and any rights not expressly granted herein are reserved by the Licensors.\n9. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Model and the Complementary Material (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Model, Derivatives of the Model, and the Complementary Material and assume any risks associated with Your exercise of permissions under this License.\n10. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Model and the Complementary Material (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.\n11. Accepting Warranty or Additional Liability. While redistributing the Model, Derivatives of the Model and the Complementary Material thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.\n12. If any provision of this License is held to be invalid, illegal or unenforceable, the remaining provisions shall be unaffected thereby and remain valid as if such provision had not been set forth herein.\n\nEND OF TERMS AND CONDITIONS\n\n\n\n\nAttachment A\n\nUse Restrictions\n\nYou agree not to use the Model or Derivatives of the Model:\n- In any way that violates any applicable national, federal, state, local or international law or regulation;\n- For the purpose of exploiting, harming or attempting to exploit or harm minors in any way;\n- To generate or disseminate verifiably false information and/or content with the purpose of harming others;\n- To generate or disseminate personal identifiable information that can be used to harm an individual;\n- To defame, disparage or otherwise harass others;\n- For fully automated decision making that adversely impacts an individual\u2019s legal rights or otherwise creates or modifies a binding, enforceable obligation;\n- For any use intended to or which has the effect of discriminating against or harming individuals or groups based on online or offline social behavior or known or predicted personal or personality characteristics;\n- To exploit any of the vulnerabilities of a specific group of persons based on their age, social, physical or mental characteristics, in order to materially distort the behavior of a person pertaining to that group in a manner that causes or is likely to cause that person or another person physical or psychological harm;\n- For any use intended to or which has the effect of discriminating against individuals or groups based on legally protected characteristics or categories;\n- To provide medical advice and medical results interpretation;\n- To generate or disseminate information for the purpose to be used for administration of justice, law enforcement, immigration or asylum processes, such as predicting an individual will commit fraud/crime commitment (e.g. by text profiling, drawing causal relationships between assertions made in documents, indiscriminate and arbitrarily-targeted use).\n',
                Bt = Ae.ZP.div.withConfig({
                    componentId: "sc-4f5b19f8-0"
                })(_t(), (function(e) {
                    return e.theme.colors.bg2
                })),
                Wt = Ae.ZP.div.withConfig({
                    componentId: "sc-4f5b19f8-1"
                })(Yt(), (function(e) {
                    return e.theme.fonts.headings
                }), (function(e) {
                    return e.theme.colors.textHeadings
                })),
                $t = Ae.ZP.div.withConfig({
                    componentId: "sc-4f5b19f8-2"
                })(qt(), (function(e) {
                    return e.theme.colors.bg1
                }));

            function Gt() {
                var e = (0, s.Z)((0, m.FV)(S.z_), 2),
                    t = e[0],
                    n = e[1],
                    i = (0, p.useState)(!(0, Ft.WH)(t.settings, "hideImageStartupModal")),
                    r = i[0],
                    l = i[1];
                return !0 === (0, Ft.WH)(t.settings, "hideImageStartupModal") ? (0, d.jsx)(d.Fragment, {}) : (0, d.jsx)(Y.Z, {
                    type: Y.w.Large,
                    isOpen: r,
                    onRequestClose: function() {
                        return l(!1)
                    },
                    shouldCloseOnOverlayClick: !0,
                    children: (0, d.jsxs)(Bt, {
                        style: {
                            maxWidth: "100vw",
                            width: "500px"
                        },
                        children: [(0, d.jsx)("h3", {
                            children: "Image Generation Notice"
                        }), (0, d.jsx)("p", {
                            style: {
                                marginBottom: 10
                            },
                            children: "Make sure to save any Image Generations and Text Prompts you like!"
                        }), (0, d.jsxs)("p", {
                            style: {
                                marginBottom: 10
                            },
                            children: [(0, d.jsx)(d.Fragment, {
                                children: "Text prompts, image generations, canvas edits"
                            }), ", and", (0, d.jsx)(Ie.y$, {
                                children: " image uploads"
                            }), " are not stored and", (0, d.jsx)(Ie.y$, {
                                children: " will be lost at the end of your session. "
                            })]
                        }), (0, d.jsx)("br", {}), (0, d.jsxs)("p", {
                            style: {
                                marginBottom: 10
                            },
                            children: ["Please generate ", (0, d.jsx)(Ie.y$, {
                                children: "responsibly"
                            }), ", and be ", (0, d.jsx)(Ie.y$, {
                                children: "mindful"
                            }), " ", "of your wordage."]
                        }), (0, d.jsxs)("p", {
                            style: {
                                marginBottom: 10
                            },
                            children: ["This is a new technology that ", (0, d.jsx)(Ie.y$, {
                                children: "may generate unpredictable results."
                            })]
                        }), (0, d.jsx)("br", {}), (0, d.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "flex-end"
                            },
                            children: [(0, d.jsxs)(Z.Yl, {
                                style: {
                                    opacity: .8
                                },
                                onClick: function() {
                                    n((function(e) {
                                        var t = (0, a.Z)((0, o.Z)({}, e), {
                                            settings: (0, a.Z)((0, o.Z)({}, e.settings), {
                                                hideImageStartupModal: !0
                                            })
                                        });
                                        return (0, Ot.cF)(t).saveSettings(t.settings), t
                                    })), l(!1)
                                },
                                children: ["Don", "'", "t show this again."]
                            }), (0, d.jsx)(Z.t4, {
                                style: {
                                    minWidth: "100px",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                onClick: function() {
                                    l(!1)
                                },
                                children: "OK"
                            })]
                        })]
                    })
                })
            }
            var Kt = n(14887),
                Vt = n(17070),
                Jt = n(96574),
                Xt = n(39555),
                Qt = n(63705),
                en = n(69428),
                tn = n(72567),
                nn = n(33160).Buffer,
                rn = (0, g.vU)({
                    enter: "fade-in-right",
                    exit: "fade-out-right"
                }),
                on = "",
                an = function(e, t) {
                    return "".concat((0, l.Z)(e.prompt.join("|")).slice(0, 80).join(""), " s-").concat(e.seed).concat(t ? " (".concat(t, ")") : "", ".png").replace(/["%*/:<>?\\|]/g, "_")
                };

            function sn() {
                var e = (0, v.useRouter)(),
                    t = (0, p.useState)(!0),
                    n = t[0],
                    i = t[1];
                return (0, C.j)((function() {
                    i(!1)
                }), (function() {
                    e.push("/login")
                })), (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(f(), {
                        children: (0, d.jsx)("title", {
                            children: "Image Generation - NovelAI"
                        })
                    }), (0, d.jsx)(tn.j, {
                        children: (0, d.jsx)(g.Ix, {
                            transition: rn
                        })
                    }), n ? (0, d.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh"
                        },
                        children: (0, d.jsx)(z.T, {
                            visible: !0
                        })
                    }) : (0, d.jsx)(cn, {})]
                })
            }
            var ln = new Map;

            function cn() {
                var e, t, c, h, f, v, w, C, re, oe = (0, p.useState)([]),
                    ae = oe[0],
                    se = oe[1];
                (0, p.useEffect)((function() {
                    var e = function(e) {
                        ae.length > 0 && (e.preventDefault(), e.returnValue = "Images generated are not saved and you must download any you want to keep. Are you sure you want exit?")
                    };
                    return window.addEventListener("beforeunload", e),
                        function() {
                            window.removeEventListener("beforeunload", e)
                        }
                }), [ae.length]);
                var ue = (0, p.useState)(!1),
                    de = ue[0],
                    ye = ue[1],
                    be = (0, p.useState)(0),
                    je = be[0],
                    Ce = be[1],
                    Se = (0, s.Z)((0, m.FV)(S.z_), 2),
                    Ze = Se[0],
                    Le = Se[1],
                    Me = (0, s.Z)((0, _.Z)("imagegen-model", I.oS.safeDiffusion, !1), 2),
                    Te = Me[0],
                    De = Me[1],
                    Ee = (0, p.useRef)(null),
                    Re = (0, p.useRef)(null),
                    Ae = (0, s.Z)((0, _.Z)("image-params", fe(Te), !1), 2),
                    Ne = Ae[0],
                    ze = Ae[1],
                    Oe = (0, s.Z)((0, _.Z)("imagegen-prompt", [""], !1), 2),
                    Fe = Oe[0],
                    _e = Oe[1],
                    Ye = (0, p.useState)([1]),
                    qe = Ye[0],
                    He = Ye[1],
                    Ue = (0, s.Z)((0, _.Z)("imagegen-negativeprompt", "", !1), 2),
                    Be = Ue[0],
                    We = Ue[1],
                    $e = (0, p.useRef)(!1);
                (0, p.useEffect)((function() {
                    Ze.noAccount && !$e.current && ((0, g.Am)("An account is required to generate images."), $e.current = !0)
                }), [Ze]);
                var Ge = (0, p.useCallback)((function(e) {
                        "function" !== typeof e && JSON.stringify(e) === JSON.stringify(Ne) || ze(e)
                    }), [Ne, ze]),
                    Ke = (0, D.i)(),
                    Ve = (0, p.useRef)(null),
                    Je = (0, p.useState)(1),
                    Xe = Je[0],
                    Qe = Je[1],
                    et = (0, p.useState)(1),
                    tt = et[0],
                    nt = et[1],
                    it = (0, p.useState)(!1),
                    ot = (it[0], it[1]),
                    at = (0, p.useState)(0),
                    st = at[0],
                    lt = at[1],
                    ct = (0, p.useState)(0),
                    dt = ct[0],
                    ht = ct[1],
                    ft = (0, p.useState)(1),
                    pt = ft[0],
                    gt = ft[1],
                    mt = (0, p.useState)(1),
                    vt = mt[0],
                    xt = mt[1],
                    yt = (0, p.useState)(!1),
                    wt = yt[0],
                    bt = yt[1],
                    jt = (0, p.useState)(2),
                    Ct = jt[0],
                    St = jt[1],
                    kt = (0, p.useState)(me[2].strength),
                    It = kt[0],
                    Zt = kt[1],
                    Lt = (0, p.useState)(me[2].noise),
                    Mt = Lt[0],
                    Pt = Lt[1],
                    Dt = (0, p.useState)(void 0),
                    Et = Dt[0],
                    Rt = Dt[1],
                    At = (0, s.Z)((0, _.Z)("enhancedSettings", !1, !0), 2),
                    Nt = At[0],
                    zt = At[1],
                    Ot = (0, p.useState)(void 0),
                    Ft = Ot[0],
                    _t = Ot[1],
                    Yt = (0, p.useRef)(!1),
                    qt = (0, p.useState)(!1),
                    Ut = qt[0],
                    Bt = qt[1],
                    Wt = (0, p.useState)(-1),
                    $t = Wt[0],
                    tn = Wt[1],
                    rn = (0, p.useState)(-1),
                    sn = rn[0],
                    cn = rn[1],
                    un = (0, p.useState)(-1),
                    dn = un[0],
                    hn = un[1],
                    fn = (0, m._8)((function(e) {
                        var t = e.snapshot;
                        return function() {
                            var e = (0, i.Z)(u().mark((function e(n, i, r, o, a, s, l) {
                                var c;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (ce(i, o)) {
                                                e.next = 3;
                                                break
                                            }
                                            return l("The parameters are incorrect"), e.abrupt("return");
                                        case 3:
                                            return e.next = 5, t.getPromise(S.z_);
                                        case 5:
                                            c = e.sent, s((0, K.Eu)(i, c));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, i, r, o, a, s) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }), []),
                    pn = (0, p.useRef)(0),
                    gn = (0, p.useRef)(0),
                    mn = (0, p.useRef)("");
                (0, p.useEffect)((function() {
                    var e = (0, o.Z)({}, Ne);
                    e.width = ne(e.width, 64), e.height = ne(e.height, 64), e.n_samples = te(e.width, e.height, e.n_samples), e.uc = ",", Ft ? (e.steps = ke.jb, e.image = " ") : e.image = void 0;
                    var t = JSON.stringify(e);
                    mn.current !== t && (mn.current = t, tn(-1), clearTimeout(gn.current), gn.current = setTimeout((function() {
                        var t = Math.floor(65e3 * Math.random());
                        pn.current = t, fn(t, e, [""], Te, (function(e) {
                            return e == pn.current
                        }), (function(e) {
                            tn(e)
                        }), (function() {
                            tn(-2)
                        }))
                    }), 300))
                }), [fn, Ne, Te, Ze, Ft]);
                var vn = (0, p.useRef)(0),
                    xn = (0, p.useRef)(0);
                (0, p.useEffect)((function() {
                    cn(-1), clearTimeout(xn.current), xn.current = setTimeout((function() {
                        if (ae[je] && ae[je][null !== Et && void 0 !== Et ? Et : 0]) {
                            var e = ae[je][null !== Et && void 0 !== Et ? Et : 0],
                                t = (0, o.Z)({}, Ne);
                            t.width = Math.floor(e.width * Ct), t.height = Math.floor(e.height * Ct), t.n_samples = 1, t.image = "", t.strength = It, t.noise = Mt, t.steps = ke.jb, t.image = " ", t.width = ne(t.width, 64), t.height = ne(t.height, 64), t.n_samples = te(t.width, t.height, t.n_samples), t.uc = ",";
                            var n = Math.floor(65e3 * Math.random());
                            vn.current = n, fn(n, t, [""], Te, (function(e) {
                                return e == vn.current
                            }), (function(e) {
                                cn(e)
                            }), (function() {
                                cn(-2)
                            }))
                        }
                    }), 300)
                }), [fn, Ne, Te, Ze, Ct, ae, je, Et, It, Mt]);
                var yn = (0, p.useRef)(0),
                    wn = (0, p.useRef)(0);
                (0, p.useEffect)((function() {
                    hn(-1), clearTimeout(wn.current), wn.current = setTimeout((function() {
                        if (ae[je || 0] && ae[je || 0][0]) {
                            var e = ae[je || 0][0],
                                t = (0, o.Z)({}, Ne, e.params);
                            t.n_samples = 3, t.image = "", t.strength = .8, t.noise = .1, t.steps = ke.jb, t.image = " ", t.width = ne(t.width, 64), t.height = ne(t.height, 64), t.n_samples = te(t.width, t.height, t.n_samples), t.uc = ",";
                            var n = Math.floor(65e3 * Math.random());
                            yn.current = n, fn(n, t, [""], Te, (function(e) {
                                return e == yn.current
                            }), (function(e) {
                                hn(e)
                            }), (function() {
                                hn(-2)
                            }))
                        }
                    }), 300)
                }), [fn, ae, Ne, je, Te, Ze]);
                var bn = (0, p.useState)([]),
                    jn = bn[0],
                    Cn = bn[1],
                    Sn = (0, p.useRef)(0),
                    kn = (0, p.useRef)(0);
                (0, p.useEffect)((function() {
                    clearTimeout(Sn.current);
                    var e = Math.floor(65e3 * Math.random());
                    kn.current = e, Sn.current = setTimeout((function() {
                        if (Fe && Fe[0]) {
                            var e = Fe[0].split("|");
                            Ne.qualityToggle && (e[0] = ke.F9 + e[0]);
                            var t = new B.PT;
                            Promise.all(e.map((function(e) {
                                return t.encode(e, W._E.CLIP)
                            }))).then((function(e) {
                                Cn(e.map((function(e) {
                                    return e.length
                                })))
                            })).catch((function(e) {
                                (0, E.H)(e)
                            }))
                        } else Cn([])
                    }), 50)
                }), [Fe, Ne.qualityToggle]);
                var In = (0, p.useRef)(!0);
                (0, p.useEffect)((function() {
                    jn.some((function(e) {
                        return e > ke.Y$
                    })) && In.current ? (In.current = !1, (0, g.Am)("Prompt is too long and will be cut off. Using " + jn + " out of " + ke.Y$ + " available tokens.")) : jn.every((function(e) {
                        return e <= ke.Y$
                    })) && (In.current = !0)
                }), [jn]);
                var Zn = (0, p.useState)(0),
                    Ln = Zn[0],
                    Mn = Zn[1],
                    Pn = (0, p.useRef)(0),
                    Tn = (0, p.useRef)(0);
                (0, p.useEffect)((function() {
                    clearTimeout(Pn.current);
                    var e = Math.floor(65e3 * Math.random());
                    Tn.current = e, Pn.current = setTimeout((function() {
                        if (Be) {
                            var t = [Be],
                                n = new B.PT;
                            Promise.all(t.map((function(e) {
                                return n.encode(e, W._E.CLIP)
                            }))).then((function(t) {
                                var n, i = (n = Math).max.apply(n, (0, l.Z)(t.map((function(e) {
                                    return e.length
                                }))));
                                e === Tn.current && Mn(i)
                            })).catch((function(e) {
                                (0, E.H)(e)
                            }))
                        } else Mn(0)
                    }), 50)
                }), [Be]);
                var Dn = (0, p.useRef)(!0);
                (0, p.useEffect)((function() {
                    Ln > ke.Y$ && Dn.current ? (Dn.current = !1, (0, g.Am)("Negative prompt is too long and will be cut off. Using " + Ln + " out of " + ke.Y$ + " available tokens.")) : Ln <= ke.Y$ && (Dn.current = !0)
                }), [Ln]);
                var En = (0, p.useState)(),
                    Rn = En[0],
                    An = En[1],
                    Nn = (0, p.useState)(),
                    zn = Nn[0],
                    On = Nn[1],
                    Fn = (0, p.useState)(!1),
                    _n = Fn[0],
                    Yn = Fn[1],
                    qn = (0, p.useRef)(""),
                    Hn = (0, p.useRef)(0),
                    Un = (0, p.useRef)(0),
                    Bn = (0, p.useState)(-1),
                    Wn = Bn[0],
                    $n = Bn[1],
                    Gn = (0, p.useRef)(0),
                    Kn = (0, p.useRef)(!1),
                    Vn = (0, p.useCallback)((function(e) {
                        if (!Ze.noAccount) {
                            var t = Math.floor(65e3 * Math.random());
                            Gn.current = t, fetch(q.PO + "?model=".concat(encodeURIComponent(Te.toString()), "&prompt=").concat(encodeURIComponent(e.replace(/[/[{}]]/g, "").trim())), {
                                mode: "cors",
                                cache: "default",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer " + Ze.auth_token
                                },
                                method: "GET"
                            }).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                if (t === Gn.current && e.tags) {
                                    var n = e.tags.map((function(e) {
                                        return [e.tag, e.count]
                                    }));
                                    Kn.current || On(n)
                                }
                            })).catch((function(e) {
                                (0, E.H)(e)
                            })).finally((function() {
                                Yn(!1)
                            }))
                        }
                    }), [Te, Ze]),
                    Jn = (0, p.useCallback)((function() {
                        clearTimeout(Hn.current), Yn(!1), On(void 0), $n(-1), Kn.current = !0
                    }), []),
                    Xn = (0, p.useCallback)((function(e, t) {
                        var n;
                        if (void 0 !== Rn) {
                            var i = document.querySelector("#prompt-input-" + Rn);
                            if (i) {
                                var r, o = null !== (r = i.selectionStart) && void 0 !== r ? r : 0,
                                    a = Fe[Rn].slice(0, o),
                                    s = a.match(RegExp("[,[{](?<s>\\s)?", "g")),
                                    c = 0,
                                    u = !0;
                                if (s) {
                                    var d = s[s.length - 1];
                                    c = a.lastIndexOf(d) + d.length, u = !d.endsWith(" ") && d.startsWith(",")
                                }
                                var h = Fe[Rn].slice(0, c) + (u ? " " : "") + e + Fe[Rn].slice(o),
                                    f = !(null === (n = Fe[Rn].slice(o)) || void 0 === n ? void 0 : n.trim());
                                f && (h += ", "), _e((function(e) {
                                    return (0, l.Z)(e.slice(0, Rn)).concat([h], (0, l.Z)(e.slice(Rn + 1)))
                                })), void 0 !== t && setTimeout((function() {
                                    var n = document.querySelector("#prompt-input-".concat(t));
                                    n && (n.focus(), n.setSelectionRange(c + e.length + (u ? 1 : 0) + (f ? 2 : 0), c + e.length + (u ? 1 : 0) + (f ? 2 : 0)), f && (n.scrollLeft = n.scrollWidth))
                                }), 10)
                            }
                        }
                    }), [Rn, Fe, _e]),
                    Qn = (0, p.useState)(((null === (e = n.g.window) || void 0 === e ? void 0 : e.innerWidth) || 0) <= ke.P_),
                    ei = Qn[0],
                    ti = Qn[1];
                (0, p.useLayoutEffect)((function() {
                    if (Ve.current && ae[je]) {
                        var e = Ve.current.getBoundingClientRect(),
                            t = e.width - (ei ? 20 : 40) - 20 * (tt - 1),
                            n = e.height - (ei ? 20 : 40) - 20 * (Xe - 1),
                            i = ae[je];
                        if (!i[0]) return;
                        if (!e || !i) return;
                        var r = t / n,
                            o = i[0].width * tt / (i[0].height * Xe),
                            a = i[0].width / i[0].height;
                        if (r < o) {
                            var s = t / tt;
                            lt(s), ht(s / a)
                        } else {
                            var l = n / Xe;
                            ht(l), lt(l * a)
                        }
                        if (r < a) {
                            var c = e.width - (ei ? 20 : 40);
                            gt(c), xt(c / a)
                        } else {
                            var u = e.height - (ei ? 10 : 40);
                            xt(u), gt(u * a)
                        }
                    }
                }), [tt, ae, Xe, je, Ke, Fe.length, qe, ei]), (0, p.useLayoutEffect)((function() {
                    var e, t = null === (e = Ve.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                        n = ae[je];
                    if (t && (null === n || void 0 === n ? void 0 : n[0])) {
                        for (var i = t.width / t.height, r = n[0].width, o = n[0].height, a = [], s = 1; s <= n.length; s++)
                            for (var l = 1; l <= n.length; l++) s * l >= n.length && a.push({
                                columns: s,
                                rows: l
                            });
                        var c = a.filter((function(e) {
                                return e.columns * e.rows - n.length <= 1
                            })),
                            u = c.reduce((function(e, t) {
                                var n = t.columns * r / (t.rows * o),
                                    a = Math.abs(n - i);
                                return a < e.score ? {
                                    layout: t,
                                    score: a
                                } : e
                            }), {
                                layout: {
                                    columns: 1,
                                    rows: 1
                                },
                                score: Number.POSITIVE_INFINITY
                            });
                        Qe(u.layout.rows), nt(u.layout.columns)
                    }
                }), [ae, je, Ke, Fe.length]);
                var ni = function(e) {
                    (0, E.Sv)(e.data, an(e), "image/png")
                };
                (0, p.useEffect)((function() {
                    var e = function(e) {
                        if ("s" === e.key && (e.ctrlKey || e.metaKey)) {
                            e.preventDefault();
                            var t = ae[je];
                            t && t.forEach((function(e) {
                                e.isVariationOriginal || ni(e)
                            }))
                        }
                    };
                    return window.addEventListener("keydown", e),
                        function() {
                            window.removeEventListener("keydown", e)
                        }
                }), [ae, je]);
                var ii = (0, p.useRef)(0),
                    ri = (0, p.useRef)(!0),
                    oi = (0, p.useRef)("Image Generation - NovelAI");
                (0, p.useEffect)((function() {
                    var e = Array.from("\u25f0\u25f3\u25f2\u25f1"),
                        t = 0;
                    clearInterval(ii.current), de ? ii.current = setInterval((function() {
                        document.title = e[t] + " " + oi.current, t = (t + 1) % e.length
                    }), 225) : document.title = ri.current ? oi.current : "\u2713 " + oi.current
                }), [de]);
                var ai = (0, p.useRef)(de);
                ai.current = de, (0, p.useEffect)((function() {
                    var e = function() {
                        ri.current = "visible" === document.visibilityState, ai.current || (document.title = oi.current)
                    };
                    return document.addEventListener("visibilitychange", e),
                        function() {
                            return document.removeEventListener("visibilitychange", e)
                        }
                }), []);
                var si, li, ci, ui = (0, s.Z)((0, m.FV)(S.$4), 2),
                    di = ui[0],
                    hi = ui[1],
                    fi = function() {
                        hi({
                            open: !1,
                            blocked: !1
                        })
                    },
                    pi = function() {
                        var e = (0, i.Z)(u().mark((function e(t, n) {
                            var r, s, c, d, h, f, p, m, v, x, y, w, b;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!de) {
                                            e.next = 3;
                                            break
                                        }
                                        return (0, g.Am)("Already generating an image"), e.abrupt("return");
                                    case 3:
                                        if (!Ze.noAccount) {
                                            e.next = 6;
                                            break
                                        }
                                        return (0, g.Am)("An account is required to generate images."), e.abrupt("return");
                                    case 6:
                                        if ((0, H.ey)(Ze.subscription) || 0 !== (0, H.CX)(Ze.subscription.trainingStepsLeft) || hi({
                                                open: !0,
                                                blocked: !0
                                            }), e.prev = 7, r = (0, o.Z)({}, Ne), s = Fe, c = Be, !((null !== (h = null !== (d = r.width) && void 0 !== d ? d : 0 * r.height) && void 0 !== h ? h : 0) > 1048576)) {
                                            e.next = 15;
                                            break
                                        }
                                        return (0, g.Am)("Image size is too large. Total size cannot exceed 1024*1024 pixels."), e.abrupt("return");
                                    case 15:
                                        if (le(Te) && void 0 === r.seed && (r.seed = Math.floor(Math.random() * Math.pow(2, 32) - 1)), t && !le(Te) && (r = fe(I.oS.stableDiffusion)), t ? (r.width = Math.floor(t.width * Ct), r.height = Math.floor(t.height * Ct), r.n_samples = 1, r.image = t.data.toString("base64"), s = t.prompt, c = t.negPrompt, r.strength = It, r.noise = Mt) : Ft && (r.image = Ft.toString("base64")), n && (r = (0, a.Z)((0, o.Z)({}, n.params), {
                                                n_samples: te(n.params.width, n.params.height, 3),
                                                image: n.data.toString("base64"),
                                                strength: .8,
                                                noise: .1,
                                                steps: 50,
                                                seed: Math.floor(Math.random() * Math.pow(2, 32) - 1)
                                            }), s = n.prompt, c = n.negPrompt), !r.image) {
                                            e.next = 24;
                                            break
                                        }
                                        return e.next = 22, we(r.image, "white", r.height, r.width, !0);
                                    case 22:
                                        r.image = e.sent, r.steps = ke.jb;
                                    case 24:
                                        if (ce(r, Te)) {
                                            e.next = 27;
                                            break
                                        }
                                        return (0, g.Am)("Invalid parameters"), e.abrupt("return");
                                    case 27:
                                        if (f = ee(s), (p = xe(Te)).length > 0 && (le(Te) && (r.uc = p[null !== (m = r.ucPreset) && void 0 !== m ? m : 0].text, Te === I.oS.safeDiffusion || r.uc === p[p.length - 1].text || f.toLowerCase().includes("nsfw") || (v = "nsfw", "" !== r.uc && (v += ", "), r.uc = v + r.uc)), c && (r.ucPreset === p.length - 1 && (r.uc = ""), "" !== r.uc && (r.uc = r.uc + ", "), r.uc = r.uc + c)), r.qualityToggle && (f = f.split("|").map((function(e) {
                                                return ke.F9 + e
                                            })).join("|"), r.qualityToggle), (x = JSON.stringify((0, o.Z)({
                                                prompt: f,
                                                model: Te
                                            }, r))) !== on) {
                                            e.next = 35;
                                            break
                                        }
                                        return (0, g.Am)("Identical parameters to last generation"), e.abrupt("return");
                                    case 35:
                                        if (r.n_samples = te(r.width, r.height, r.n_samples), !he(r, Te)) {
                                            e.next = 39;
                                            break
                                        }
                                        return (0, g.Am)("This combination of sampling type (".concat(r.sampler, ") and steps (").concat(r.steps, ") is known to error. Please change either setting and try again.")), e.abrupt("return");
                                    case 39:
                                        y = (0, I.VV)(Ze, f, Te, (0, o.Z)({}, r)), ye(!0), w = [], y.requestStream(function() {
                                            var e = (0, i.Z)(u().mark((function e(n, i) {
                                                var a, l, d, h, f;
                                                return u().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            a = Number.parseInt(i, 0) - 1, l = URL.createObjectURL(new Blob([n], {
                                                                type: "image/jpeg"
                                                            })), Ce(0), w[a] = {
                                                                data: n,
                                                                url: l,
                                                                prompt: s,
                                                                negPrompt: c,
                                                                height: null !== (d = r.height) && void 0 !== d ? d : 256,
                                                                width: null !== (h = r.width) && void 0 !== h ? h : 256,
                                                                seed: r.seed + a,
                                                                model: Te,
                                                                params: (0, o.Z)({}, r),
                                                                enhanced: !!t,
                                                                enhanceOriginal: null !== (f = null === t || void 0 === t ? void 0 : t.url) && void 0 !== f ? f : void 0
                                                            };
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), (function(e) {
                                            var t, n;
                                            (ye(!1), "unknown status" === e.status && void 0 === e.message) ? (0, g.Am)("Something went wrong. You might have sent too many requests. Please try again in a moment.") : (0, g.Am)("".concat(null !== (n = null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e)) && void 0 !== n ? n : "There was an error generating your image.").replace(/training steps/g, "Anlas"))
                                        }), (function() {
                                            ye(!1), w.length > 0 && (se(n ? function(e) {
                                                return [
                                                    [(0, a.Z)((0, o.Z)({}, n), {
                                                        isVariationOriginal: !0
                                                    })].concat((0, l.Z)(w))
                                                ].concat((0, l.Z)(e))
                                            } : function(e) {
                                                return [w].concat((0, l.Z)(e))
                                            }), on = x, setTimeout((function() {
                                                Qi()
                                            }), 500))
                                        })), e.next = 51;
                                        break;
                                    case 45:
                                        return e.prev = 45, e.t0 = e.catch(7), (0, g.Am)(null !== (b = "Error generating image: " + e.t0.message) && void 0 !== b ? b : e.t0), ye(!1), e.abrupt("return");
                                    case 51:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [7, 45]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    gi = (0, p.useState)(),
                    mi = (gi[0], gi[1]),
                    vi = (function() {
                        var e = (0, i.Z)(u().mark((function e(t, n) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!de) {
                                            e.next = 3;
                                            break
                                        }
                                        throw (0, g.Am)("Already generating an image"), "Already generating an image";
                                    case 3:
                                        return e.abrupt("return", new Promise((function(e, r) {
                                            try {
                                                var s = (0, a.Z)((0, o.Z)({}, t.params), {
                                                        seed: t.seed,
                                                        n_samples: 1,
                                                        masks: n.map((function(e) {
                                                            return {
                                                                seed: e.seed,
                                                                mask: e.mask.toString("base64")
                                                            }
                                                        }))
                                                    }),
                                                    c = ee(t.prompt),
                                                    d = JSON.stringify((0, o.Z)({
                                                        prompt: c,
                                                        model: Te
                                                    }, s));
                                                if (d === on) return (0, g.Am)("Identical parameters to last generation"), void r();
                                                var h = (0, I.VV)(Ze, c, Te, (0, o.Z)({}, s));
                                                ye(!0);
                                                var f = [];
                                                h.requestStream(function() {
                                                    var e = (0, i.Z)(u().mark((function e(n, i) {
                                                        var r, a, l, c;
                                                        return u().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    r = Number.parseInt(i, 0) - 1, a = URL.createObjectURL(new Blob([n], {
                                                                        type: "image/jpeg"
                                                                    })), Ce(0), f[r] = {
                                                                        data: n,
                                                                        url: a,
                                                                        prompt: Fe,
                                                                        negPrompt: Be,
                                                                        height: null !== (l = s.height) && void 0 !== l ? l : 256,
                                                                        width: null !== (c = s.width) && void 0 !== c ? c : 256,
                                                                        seed: s.seed + r,
                                                                        model: Te,
                                                                        params: (0, o.Z)({}, s),
                                                                        enhanced: !!t
                                                                    };
                                                                case 5:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t, n) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }(), (function(e) {
                                                    var t, n;
                                                    ye(!1), (0, g.Am)("".concat(null !== (n = null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e)) && void 0 !== n ? n : "There was an error generating your image.").replace(/training steps/g, "Anlas"))
                                                }), (function() {
                                                    ye(!1), f.length > 0 && (se([f].concat((0, l.Z)(ae))), mi(f[0]), on = d), e({
                                                        images: f,
                                                        seeds: n.map((function(e) {
                                                            return e.seed
                                                        }))
                                                    })
                                                }))
                                            } catch (p) {
                                                return (0, g.Am)("Error generating image"), ye(!1), void r()
                                            }
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }(), (0, p.useState)(void 0)),
                    xi = vi[0],
                    yi = vi[1],
                    wi = (0, m.sJ)(S.JD),
                    bi = (0, p.useState)(!1),
                    ji = bi[0],
                    Ci = bi[1],
                    Si = (0, D.b)(ke.P_ + .5, 0);
                (0, p.useEffect)((function() {
                    Si.width >= ke.P_ + .5 && (Ci(!0), ti(!1)), Si.width < ke.P_ + .5 && (Ci(!1), ti(!0))
                }), [Si.width]), (0, p.useEffect)((function() {
                    var e, t = document.querySelector("#historyContainer");
                    t && ji && (null === (e = t.lastChild) || void 0 === e || e.scrollIntoView({
                        behavior: "smooth"
                    })), Rt(void 0)
                }), [ae]);
                var ki = (0, d.jsx)(P.Ph, {
                    menuPlacement: "auto",
                    isSearchable: !1,
                    "aria-label": "Select the Model",
                    maxMenuHeight: 420,
                    options: pe.map((function(e) {
                        return {
                            value: e.id,
                            description: e.name,
                            label: (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)(Ie.sc, {
                                    style: {
                                        fontSize: "0.875rem",
                                        fontWeight: 700
                                    },
                                    children: e.name
                                }), (0, d.jsx)("div", {
                                    style: {
                                        fontSize: "0.875rem"
                                    },
                                    children: e.description
                                })]
                            })
                        }
                    })),
                    onChange: function(e) {
                        if (null !== e) {
                            var t, n = le(Te) === le(e.value) || Te == e.value;
                            if (ln.set(Te, Ne.ucPreset), De(e.value), n || Ge(fe(e.value)), n) Ge((0, a.Z)((0, o.Z)({}, Ne), {
                                ucPreset: null !== (t = ln.get(e.value)) && void 0 !== t ? t : 0
                            }))
                        }
                    },
                    value: {
                        value: Te,
                        description: "".concat(null !== (si = null === (t = pe.find((function(e) {
                            return e.id === Te
                        }))) || void 0 === t ? void 0 : t.name) && void 0 !== si ? si : "Unknown", " "),
                        label: (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(Ie.sc, {
                                style: {
                                    fontSize: "0.875rem",
                                    fontWeight: 700
                                },
                                children: null !== (li = null === (c = pe.find((function(e) {
                                    return e.id === Te
                                }))) || void 0 === c ? void 0 : c.name) && void 0 !== li ? li : "Unknown"
                            }), (0, d.jsx)("div", {
                                style: {
                                    fontSize: "0.875rem",
                                    whiteSpace: "normal"
                                },
                                children: null !== (ci = null === (h = pe.find((function(e) {
                                    return e.id === Te
                                }))) || void 0 === h ? void 0 : h.description) && void 0 !== ci ? ci : "Unknown"
                            })]
                        })
                    },
                    styles: (0, a.Z)((0, o.Z)({}, (0, P.XE)(wi)), {
                        valueContainer: function(e, t) {
                            return (0, a.Z)((0, o.Z)({}, (0, P.XE)(wi).valueContainer(e, t)), {
                                padding: "18px 20px 14px 20px"
                            })
                        }
                    })
                });
                (0, p.useEffect)((function() {
                    bt(!1)
                }), [je]);
                var Ii = (0, p.useMemo)((function() {
                    var e, t, n, i, r, o, a = null !== (r = null === (e = ae[je]) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.width) && void 0 !== r ? r : 0,
                        s = null !== (o = null === (n = ae[je]) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i.height) && void 0 !== o ? o : 0;
                    return [2, 1.5, 1].filter((function(e) {
                        return a * e * s * e <= 1048576 && a * e % 64 === 0 && s * e % 64 === 0
                    }))
                }), [ae, je]);
                (0, p.useEffect)((function() {
                    St((function() {
                        return Ii[0]
                    }))
                }), [Ii]);
                var Zi = (0, p.useState)(3),
                    Li = Zi[0],
                    Mi = Zi[1],
                    Pi = (0, d.jsxs)(Ie.B8, {
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        children: [(0, d.jsx)(F.P, {
                            onClick: function() {
                                return bt(!1)
                            },
                            style: {
                                top: 5,
                                right: 5
                            },
                            children: (0, d.jsx)("div", {})
                        }), (0, d.jsxs)(Ie.Pb, {
                            children: [(0, d.jsx)(M.T$, {}), " Enhance Image"]
                        }), (0, d.jsxs)(Z.Yl, {
                            style: {
                                opacity: .5,
                                fontSize: "0.875rem"
                            },
                            onClick: function() {
                                zt(!Nt)
                            },
                            children: [Nt ? "Hide" : "Show", " individual settings"]
                        }), Nt && (0, d.jsxs)(T.gq, {
                            style: {
                                gap: 20
                            },
                            children: [(0, d.jsx)("div", {
                                style: {
                                    flex: "1"
                                },
                                children: (0, d.jsx)(R.jd, {
                                    title: "Strength",
                                    value: It,
                                    onChange: function(e) {
                                        Zt(e)
                                    },
                                    min: 0,
                                    max: .99,
                                    step: .01,
                                    style: {
                                        margin: 0
                                    },
                                    simple: !0
                                })
                            }), (0, d.jsx)("div", {
                                style: {
                                    flex: "1"
                                },
                                children: (0, d.jsx)(R.jd, {
                                    title: "Noise",
                                    value: Mt,
                                    onChange: function(e) {
                                        Pt(e)
                                    },
                                    min: 0,
                                    max: .99,
                                    step: .01,
                                    style: {
                                        margin: 0
                                    },
                                    simple: !0
                                })
                            })]
                        }), !Nt && (0, d.jsx)(R.jd, {
                            title: "Magnitude",
                            value: Li,
                            onChange: function(e) {
                                Mi(e), Zt(me[e - 1].strength), Pt(me[e - 1].noise)
                            },
                            min: 1,
                            max: 5,
                            step: 1,
                            style: {
                                margin: 0
                            },
                            simple: !0
                        }), (0, d.jsxs)(T.gq, {
                            style: {
                                alignItems: "flex-end",
                                gap: "20px"
                            },
                            children: [(0, d.jsxs)(Ie.AZ, {
                                style: {
                                    minWidth: "150px",
                                    flex: "2"
                                },
                                children: [(0, d.jsx)(Ie.Dx, {
                                    children: "Upscale Amount"
                                }), (0, d.jsx)(P.Ph, {
                                    isSearchable: !1,
                                    "aria-label": "Select a Resolution",
                                    maxMenuHeight: 420,
                                    menuPlacement: "top",
                                    isDisabled: Ii.length <= 1,
                                    options: Ii.map((function(e) {
                                        return {
                                            value: e,
                                            description: "x".concat(e),
                                            label: (0, d.jsx)(d.Fragment, {
                                                children: "x".concat(e)
                                            })
                                        }
                                    })),
                                    onChange: function(e) {
                                        null !== e && St(e.value)
                                    },
                                    value: {
                                        value: Ct,
                                        description: "".concat(Ct, "x"),
                                        label: (0, d.jsx)(d.Fragment, {
                                            children: "".concat(Ct, "x")
                                        })
                                    }
                                })]
                            }), (0, d.jsxs)(Ie.v8, {
                                disabled: de || sn < 0 || Fe.some((function(e) {
                                    return !e
                                })) || !ce(Ne, Te),
                                onClick: function() {
                                    bt(!1), Rt(void 0), pi(ae[je][null !== Et && void 0 !== Et ? Et : 0])
                                },
                                children: [(0, d.jsx)("span", {
                                    children: "Enhance!"
                                }), -2 === sn ? (0, d.jsx)("span", {
                                    children: "Invalid"
                                }) : sn < 0 ? (0, d.jsxs)("span", {
                                    children: [(0, d.jsx)(O.Z, {
                                        visible: !0,
                                        invert: !0,
                                        style: {
                                            height: "9px",
                                            margin: "4px",
                                            display: "inline-block"
                                        }
                                    }), " ", (0, d.jsx)(M.o, {
                                        style: {
                                            height: 10,
                                            width: 10
                                        }
                                    }), (0, d.jsx)(V.H, {
                                        notShown: !0,
                                        children: "Anlas"
                                    })]
                                }) : (0, d.jsxs)("span", {
                                    children: [sn, " ", (0, d.jsx)(M.o, {
                                        style: {
                                            height: 10,
                                            width: 10
                                        }
                                    }), (0, d.jsx)(V.H, {
                                        notShown: !0,
                                        children: "Anlas"
                                    })]
                                })]
                            })]
                        })]
                    }),
                    Ti = Ne.width > Ne.height ? Ne.height / Ne.width * 100 : 100,
                    Di = Ne.width > Ne.height ? 100 : Ne.width / Ne.height * 100,
                    Ei = (0, p.useState)(!1),
                    Ri = Ei[0],
                    Ai = Ei[1],
                    Ni = (0, p.useRef)(null),
                    zi = (0, p.useState)(void 0),
                    Oi = zi[0],
                    Fi = zi[1];
                (0, p.useEffect)((function() {
                    if (Ft) {
                        var e = URL.createObjectURL(new Blob([Ft], {
                            type: "image/png"
                        }));
                        Fi(e)
                    }
                }), [Ft]);
                var _i = (0, p.useCallback)((function(e) {
                        var t = new Image;
                        t.src = URL.createObjectURL(new Blob([e], {
                            type: "image/png"
                        })), t.addEventListener("load", (function() {
                            var e = t.width,
                                n = t.height,
                                i = e / n;
                            if (!(Ne.width / Ne.height === i && e <= Ne.width && n <= Ne.height))
                                if (e % 64 === 0 && n % 64 === 0 && e * n <= 1048576) Ge((function(t) {
                                    return (0, a.Z)((0, o.Z)({}, t), {
                                        width: e,
                                        height: n
                                    })
                                }));
                                else {
                                    if (i > 1) {
                                        var r = Math.floor(512 * i);
                                        if (r % 64 !== 0 && (r = ie(r, 64)), 512 * r <= 1048576) return void Ge((function(e) {
                                            return (0, a.Z)((0, o.Z)({}, e), {
                                                width: r,
                                                height: 512
                                            })
                                        }))
                                    } else {
                                        var s = Math.floor(512 / i);
                                        if (s % 64 !== 0 && (s = ie(s, 64)), 512 * s <= 1048576) return void Ge((function(e) {
                                            return (0, a.Z)((0, o.Z)({}, e), {
                                                width: 512,
                                                height: s
                                            })
                                        }))
                                    }
                                    if (i > 1) {
                                        var l = 1024,
                                            c = Math.floor(l * i);
                                        if (c % 64 !== 0 && (c = ie(c, 64)), c * l <= 1048576) return void Ge((function(e) {
                                            return (0, a.Z)((0, o.Z)({}, e), {
                                                width: c,
                                                height: l
                                            })
                                        }))
                                    } else {
                                        var u = 1024,
                                            d = Math.floor(u / i);
                                        if (d % 64 !== 0 && (d = ie(d, 64)), u * d <= 1048576) return void Ge((function(e) {
                                            return (0, a.Z)((0, o.Z)({}, e), {
                                                width: u,
                                                height: d
                                            })
                                        }))
                                    }
                                    Ge((function(e) {
                                        return (0, a.Z)((0, o.Z)({}, e), {
                                            width: 512,
                                            height: 512
                                        })
                                    }))
                                }
                        }))
                    }), [Ge]),
                    Yi = (0, d.jsxs)(Ie.td, {
                        children: [(0, d.jsx)(Z.Yl, {
                            style: {
                                backgroundImage: "url(".concat(Oi, ")"),
                                backgroundSize: "".concat(Di, "% ").concat(Ti, "%"),
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                position: "relative"
                            },
                            onClick: function() {
                                window.innerWidth > ke.P_ && Ai(!0)
                            }
                        }), (0, d.jsx)(Ie.tN, {
                            "aria-label": "Remove Init Image",
                            style: {
                                padding: "4px 4px",
                                margin: "2px",
                                top: "0px",
                                right: "0px",
                                position: "absolute",
                                borderRadius: 3,
                                width: "auto",
                                height: "auto"
                            },
                            onClick: function() {
                                _t(void 0), Ni.current && (Ni.current.value = "")
                            },
                            children: (0, d.jsx)(M.F7, {
                                style: {
                                    height: 15,
                                    width: 15,
                                    padding: "2px 4px"
                                }
                            })
                        }), (0, d.jsx)("div", {
                            style: {
                                position: "absolute",
                                fontSize: "0.875rem",
                                bottom: -25,
                                opacity: .8
                            },
                            children: (0, d.jsx)(Z.Yl, {
                                onClick: function() {
                                    window.innerWidth >= ke.P_ && Ai(!0)
                                },
                                children: "Edit Image"
                            })
                        })]
                    }),
                    qi = (0, d.jsxs)(Ie.td, {
                        children: [(0, d.jsx)(Z.Yl, {
                            style: {
                                backgroundImage: "url(".concat(Oi, ")"),
                                backgroundSize: "".concat(Di, "% ").concat(Ti, "%"),
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                position: "relative"
                            },
                            onClick: function() {
                                _t(void 0), Ni.current && (Ni.current.value = "")
                            },
                            children: (0, d.jsx)(M.F7, {
                                style: {
                                    height: 15,
                                    width: 15,
                                    padding: "2px 4px"
                                }
                            })
                        }), (0, d.jsx)("div", {
                            style: {
                                flex: "0 1 10px"
                            }
                        }), (0, d.jsx)(Ie.wN, {
                            style: {
                                whiteSpace: "pre",
                                fontSize: "0.875rem",
                                opacity: .8,
                                width: "max-content"
                            },
                            onClick: function() {
                                Ai(!0)
                            },
                            children: "Edit Image"
                        })]
                    }),
                    Hi = function(e, t) {
                        return (0, d.jsxs)("div", {
                            style: {
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                alignSelf: "center",
                                padding: "10px",
                                display: "flex",
                                gap: "10px",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                width: "100%"
                            },
                            children: [(0, d.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px"
                                },
                                children: [(0, d.jsx)(Ie.EE, {
                                    onClick: function(t) {
                                        t.stopPropagation(), (0, N.vQ)(e.seed.toString()), (0, g.Am)("Seed copied to clipboard")
                                    },
                                    children: e.seed
                                }), e.enhanceOriginal && (0, d.jsx)(Ie.EE, {
                                    onMouseDown: function(e) {
                                        e.stopPropagation(), Gi(t);
                                        var n = function() {
                                            Gi(void 0), window.document.removeEventListener("mouseup", n)
                                        };
                                        window.document.addEventListener("mouseup", n)
                                    },
                                    children: $i === t ? (0, d.jsxs)(d.Fragment, {
                                        children: [(0, d.jsx)(M.o8, {
                                            style: {
                                                width: 16,
                                                height: 16
                                            }
                                        }), " OLD"]
                                    }) : (0, d.jsxs)(d.Fragment, {
                                        children: [(0, d.jsx)(M.T$, {
                                            style: {
                                                width: 16,
                                                height: 16
                                            }
                                        }), " NEW"]
                                    })
                                })]
                            }), (0, d.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    marginLeft: "auto"
                                },
                                children: [(0, N.DH)() && (0, d.jsx)(Ie.EE, {
                                    onClick: function(t) {
                                        t.stopPropagation(), e.data && (0, N.F$)(e.data).then((function() {
                                            (0, g.Am)("Image copied to clipboard")
                                        })).catch((function(e) {
                                            (0, g.Am)("Error copying image to clipboard: " + e)
                                        }))
                                    },
                                    children: (0, d.jsx)(M.Km, {
                                        style: {
                                            width: 16,
                                            height: 16
                                        }
                                    })
                                }), (0, d.jsx)(Ie.EE, {
                                    onClick: function(t) {
                                        t.stopPropagation(), e.data && ni(e)
                                    },
                                    children: (0, d.jsx)(M.N, {
                                        style: {
                                            width: 16,
                                            height: 16
                                        }
                                    })
                                })]
                            })]
                        })
                    },
                    Ui = function(e, t, n) {
                        return (0, d.jsxs)(Ie.so, {
                            relative: n,
                            children: [(0, d.jsxs)(rt, {
                                "aria-label": "Edit image",
                                onClick: function(t) {
                                    var n;
                                    t.stopPropagation(), e.data && (null === (n = Ee.current) || void 0 === n || n.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    }), Ft || (Yt.current = !0), _t(e.data), Ai(!0))
                                },
                                children: [(0, d.jsx)(M.Is, {
                                    style: {
                                        width: 16,
                                        height: 16
                                    }
                                }), (0, d.jsx)("span", {
                                    children: " Edit Image"
                                })]
                            }), (0, d.jsxs)(rt, {
                                disabled: de || dn < 0,
                                style: {
                                    lineHeight: "0"
                                },
                                "aria-label": "Generate Variations",
                                onClick: function(t) {
                                    var n;
                                    t.stopPropagation(), null === (n = Ee.current) || void 0 === n || n.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    }), pi(void 0, e)
                                },
                                children: [(0, d.jsx)(M.Bp, {
                                    style: {
                                        width: 16,
                                        height: 16
                                    }
                                }), (0, d.jsx)("span", {
                                    children: " Variations"
                                }), -2 === dn ? (0, d.jsx)("span", {
                                    children: "Invalid"
                                }) : dn < 0 ? (0, d.jsxs)("span", {
                                    children: [(0, d.jsx)(O.Z, {
                                        visible: !0,
                                        invert: !0,
                                        style: {
                                            height: "9px",
                                            margin: "4px",
                                            display: "inline-block"
                                        }
                                    }), " ", (0, d.jsx)(M.o, {
                                        style: {
                                            height: 10,
                                            width: 10
                                        }
                                    }), (0, d.jsx)(V.H, {
                                        notShown: !0,
                                        children: "Anlas"
                                    })]
                                }) : (0, d.jsxs)("span", {
                                    children: [dn, " ", (0, d.jsx)(M.o, {
                                        style: {
                                            height: 10,
                                            width: 10
                                        }
                                    }), (0, d.jsx)(V.H, {
                                        notShown: !0,
                                        children: "Anlas"
                                    })]
                                })]
                            }), (0, d.jsxs)(rt, {
                                "aria-label": "Enhance Image",
                                onClick: function(n) {
                                    var i;
                                    n.stopPropagation(), e.data && (null === (i = Ee.current) || void 0 === i || i.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    }), 1 !== ae[je].length ? (Rt(t), bt(!0)) : bt(!wt))
                                },
                                children: [(0, d.jsx)(M.T$, {
                                    style: {
                                        width: 16,
                                        height: 16
                                    }
                                }), (0, d.jsx)("span", {
                                    children: " Enhance"
                                })]
                            })]
                        })
                    },
                    Bi = function(e, t) {
                        return (0, d.jsxs)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                right: 0,
                                margin: "10px",
                                display: "flex",
                                gap: "10px"
                            },
                            children: [(0, d.jsx)(U.Z, {
                                tooltip: "Edit Image",
                                delay: 0,
                                children: (0, d.jsx)(Ie.EE, {
                                    "aria-label": "Edit image",
                                    onClick: function(t) {
                                        t.stopPropagation(), e.data && (_t(e.data), Ai(!0))
                                    },
                                    children: (0, d.jsx)(M.Is, {
                                        style: {
                                            width: 16,
                                            height: 16
                                        }
                                    })
                                })
                            }), (0, d.jsx)(U.Z, {
                                tooltip: dn < 0 ? "..." : "Generate Variations (".concat(dn, " Anlas)"),
                                delay: 0,
                                children: (0, d.jsx)(Ie.EE, {
                                    disabled: de,
                                    style: {
                                        lineHeight: "0"
                                    },
                                    "aria-label": "Generate Variations",
                                    onClick: function(t) {
                                        t.stopPropagation(), pi(void 0, e)
                                    },
                                    children: (0, d.jsx)(M.Bp, {
                                        style: {
                                            width: 16,
                                            height: 16
                                        }
                                    })
                                })
                            }), (0, d.jsx)(U.Z, {
                                tooltip: "Enhance Image",
                                delay: 0,
                                children: (0, d.jsx)(Ie.EE, {
                                    "aria-label": "Enhance Image",
                                    onClick: function(n) {
                                        n.stopPropagation(), e.data && (1 !== ae[je].length ? (Rt(t), bt(!0)) : bt(!wt))
                                    },
                                    children: (0, d.jsx)(M.T$, {
                                        style: {
                                            width: 16,
                                            height: 16
                                        }
                                    })
                                })
                            })]
                        })
                    },
                    Wi = (0, p.useState)(),
                    $i = Wi[0],
                    Gi = Wi[1];
                (0, p.useEffect)((function() {
                    Gi(void 0)
                }), [je, ae]);
                var Ki, Vi = (0, p.useState)(!1),
                    Ji = Vi[0],
                    Xi = Vi[1],
                    Qi = function() {
                        var e = (0, i.Z)(u().mark((function e() {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!Ze.noAccount) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Xi(!0), e.next = 5, (0, G.k)(q.ON, {
                                            mode: "cors",
                                            cache: "no-store",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: "Bearer " + Ze.auth_token
                                            },
                                            method: "GET"
                                        }).then(function() {
                                            var e = (0, i.Z)(u().mark((function e(t) {
                                                return u().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (t.ok) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return (0, E.H)(t), e.next = 4, (0, K.m3)(t);
                                                        case 4:
                                                            throw e.sent;
                                                        case 5:
                                                            return e.abrupt("return", t.json());
                                                        case 6:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()).then((function(e) {
                                            Le((0, a.Z)((0, o.Z)({}, Ze), {
                                                subscription: e
                                            })), Xi(!1)
                                        })).catch((function(e) {
                                            Xi(!1)
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    er = (0, p.useMemo)((function() {
                        return (0, H.CX)(Ze.subscription.trainingStepsLeft)
                    }), [Ze.subscription]),
                    tr = (0, p.useState)(!1),
                    nr = tr[0],
                    ir = tr[1],
                    rr = (0, p.useState)(!1),
                    or = rr[0],
                    ar = rr[1],
                    sr = (0, p.useRef)(null),
                    lr = (0, p.useCallback)((function(e) {
                        var t = null !== e && void 0 !== e ? e : sr.current;
                        t && (_t(t), _i(t)), ar(!1), sr.current = null
                    }), [_i, _t]),
                    cr = (0, p.useCallback)(function() {
                        var e = (0, i.Z)(u().mark((function e(t) {
                            var n, i, r, l, c, d, h, f, p, m, v, x, y;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = sr.current) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 7, (0, X.U5)(n);
                                    case 7:
                                        c = e.sent, h = null !== (d = null === (i = c.find((function(e) {
                                            return "Description" === e.keyword
                                        }))) || void 0 === i ? void 0 : i.text) && void 0 !== d ? d : "", p = null !== (f = null === (r = c.find((function(e) {
                                            return "Comment" === e.keyword
                                        }))) || void 0 === r ? void 0 : r.text) && void 0 !== f ? f : "", v = null !== (m = null === (l = c.find((function(e) {
                                            return "Source" === e.keyword
                                        }))) || void 0 === l ? void 0 : l.text) && void 0 !== m ? m : "", x = ge(v), De(x), (y = new Image).src = URL.createObjectURL(new Blob([n], {
                                            type: "image/png"
                                        })), y.addEventListener("load", (function() {
                                            var e = y.width,
                                                n = y.height,
                                                i = !0;
                                            if (h) {
                                                var r = h.split("|");
                                                (i = r.every((function(e) {
                                                    return e.startsWith(ke.F9)
                                                }))) && (h = r.map((function(e) {
                                                    return e.slice(ke.F9.length)
                                                })).join("|")), _e([h])
                                            }
                                            if (p) {
                                                var l = JSON.parse(p);
                                                if (l.qualityToggle = i, l) {
                                                    var c, u = null !== (c = l.uc) && void 0 !== c ? c : "",
                                                        d = "";
                                                    u.startsWith("nsfw") && (d = "nsfw", (u = u.slice(4)).startsWith(", ") && (u = u.slice(2), d += ", "));
                                                    var f = xe(x).length - 1;
                                                    if (l.uc) {
                                                        var g = !0,
                                                            m = !1,
                                                            v = void 0;
                                                        try {
                                                            for (var w, b = xe(x).entries()[Symbol.iterator](); !(g = (w = b.next()).done); g = !0) {
                                                                var j = (0, s.Z)(w.value, 2),
                                                                    C = j[0],
                                                                    S = j[1];
                                                                if (u.startsWith(S.text)) {
                                                                    f = C, (u = u.slice(S.text.length)).startsWith(", ") && (u = ve(u));
                                                                    break
                                                                }
                                                            }
                                                        } catch (I) {
                                                            m = !0, v = I
                                                        } finally {
                                                            try {
                                                                g || null == b.return || b.return()
                                                            } finally {
                                                                if (m) throw v
                                                            }
                                                        }
                                                    }
                                                    t || delete l.seed;
                                                    var k = (0, a.Z)((0, o.Z)({}, fe(x), l), {
                                                        ucPreset: f
                                                    });
                                                    f === xe(x).length - 1 && (u = d + u), We(u), Ge((0, a.Z)((0, o.Z)({}, k), {
                                                        height: n,
                                                        width: e
                                                    }))
                                                }
                                            }
                                        })), e.next = 25;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t0 = e.catch(3), (0, E.H)(e.t0, !1), (0, g.Am)("Importing settings from the image failed.");
                                    case 25:
                                        sr.current = null, ar(!1);
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 21]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [_i, We, Ge, _e, De]),
                    ur = (0, p.useCallback)((function() {
                        sr.current = null, ar(!1)
                    }), []),
                    dr = (0, p.useCallback)(function() {
                        var e = (0, i.Z)(u().mark((function e(t) {
                            var n, i;
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 4, (0, X.U5)(t);
                                    case 4:
                                        i = e.sent, (null === (n = null === i || void 0 === i ? void 0 : i.find((function(e) {
                                            return "Comment" === e.keyword
                                        }))) || void 0 === n ? void 0 : n.text) ? (sr.current = t, ar(!0)) : lr(t), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0), (0, E.H)(e.t0, !1), lr(t);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [ar, lr]),
                    hr = (0, p.useRef)(0);
                return (0, d.jsxs)(Ie._z, {
                    ref: Ee,
                    children: [(0, d.jsx)(Gt, {}), (0, p.useMemo)((function() {
                        return (0, d.jsx)(Kt.Z, {})
                    }), []), (null === Ze || void 0 === Ze ? void 0 : Ze.authenticated) && (0, d.jsx)(Ht, {}), (0, d.jsxs)(Ie.S6, {
                        children: [Ri && (0, d.jsx)(Tt, {
                            width: Ne.width,
                            height: Ne.height,
                            image: Ft,
                            close: function(e) {
                                Ai(!1), ot(!1), mi(void 0), e && _t(e), e && _i(e), !e && Yt.current && _t(void 0), Yt.current = !1
                            }
                        }), !Ri && (0, d.jsx)(p.Fragment, {
                            children: (0, d.jsxs)(Ie.ul, {
                                children: [(0, d.jsxs)(Ie.Oe, {
                                    children: [(0, d.jsxs)(Ie.rF, {
                                        children: [(0, d.jsx)(Ie.zm, {
                                            children: (0, d.jsxs)(Ie.KD, {
                                                href: "/stories",
                                                style: {
                                                    fontSize: "0.875rem",
                                                    width: "max-content"
                                                },
                                                children: [(0, d.jsx)(M.Y4, {
                                                    style: {
                                                        display: "inline-block",
                                                        width: 6,
                                                        height: 12
                                                    }
                                                }), " ", (0, d.jsx)(M.GH, {
                                                    style: {
                                                        height: 21,
                                                        width: 18,
                                                        marginLeft: 10,
                                                        cursor: "pointer"
                                                    }
                                                })]
                                            })
                                        }), (0, d.jsxs)(Ie.y5, {
                                            children: [!Ft && (0, d.jsx)(d.Fragment, {
                                                children: (0, d.jsxs)(Ie.gv, {
                                                    style: {
                                                        lineHeight: "1.2rem",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        minHeight: "2.8rem"
                                                    },
                                                    children: [(0, d.jsxs)(Ie.wN, {
                                                        style: {
                                                            fontSize: "0.875rem",
                                                            width: "max-content",
                                                            marginRight: "20px"
                                                        },
                                                        onClick: function() {
                                                            Ai(!Ri)
                                                        },
                                                        children: [(0, d.jsx)(M.Is, {
                                                            style: {
                                                                height: 16,
                                                                width: 16,
                                                                marginRight: 5
                                                            }
                                                        }), " ", "Paint New Image"]
                                                    }), (0, d.jsxs)(Ie.wN, {
                                                        onClick: function() {
                                                            Ni.current && Ni.current.click()
                                                        },
                                                        style: {
                                                            fontSize: "0.875rem",
                                                            width: "max-content"
                                                        },
                                                        children: [(0, d.jsx)(M._c, {
                                                            style: {
                                                                height: 13,
                                                                width: 13,
                                                                marginRight: 5
                                                            }
                                                        }), " ", "Upload Image"]
                                                    })]
                                                })
                                            }), (0, d.jsx)(Ie.gv, {
                                                style: {
                                                    display: "contents"
                                                },
                                                children: (0, d.jsx)(Ie.l_, {
                                                    style: {
                                                        marginLeft: "20px"
                                                    },
                                                    onClick: function() {
                                                        return Ci(!0)
                                                    },
                                                    children: (0, d.jsx)(M.F_, {})
                                                })
                                            }), (0, d.jsx)(Ie.gv, {
                                                style: {
                                                    display: "contents"
                                                },
                                                children: (0, d.jsx)(T.Gb, {})
                                            }), (0, d.jsx)(Ie.I7, {
                                                style: {
                                                    display: "contents"
                                                },
                                                children: (0, d.jsx)(Ie.KD, {
                                                    href: "//docs.novelai.net",
                                                    target: "_blank",
                                                    style: {
                                                        fontSize: "0.875rem",
                                                        opacity: .85,
                                                        width: "max-content",
                                                        padding: "0 10px 0 10px"
                                                    },
                                                    children: (0, d.jsx)(M.by, {})
                                                })
                                            }), (0, d.jsxs)(Ie.o3, {
                                                children: [(0, d.jsxs)("div", {
                                                    style: {
                                                        opacity: Ji ? .5 : 1
                                                    },
                                                    children: [(0, d.jsx)(Ie.I7, {
                                                        style: {
                                                            display: "contents"
                                                        },
                                                        children: (0, d.jsx)("span", {
                                                            children: "Anlas:"
                                                        })
                                                    }), (0, d.jsx)("span", {
                                                        children: er
                                                    }), (0, d.jsx)(M.o, {
                                                        style: {
                                                            width: 10,
                                                            height: 10
                                                        }
                                                    })]
                                                }), (0, d.jsx)(Z.t4, {
                                                    onClick: function() {
                                                        Bt(!0)
                                                    },
                                                    children: (0, d.jsx)(M.pO, {
                                                        style: {
                                                            height: 14,
                                                            width: 14
                                                        }
                                                    })
                                                }), (0, d.jsx)(Vt.iy, {
                                                    children: (0, d.jsx)(Y.Z, {
                                                        type: Y.w.Compact,
                                                        isOpen: di.open,
                                                        label: "",
                                                        shouldCloseOnOverlayClick: !0,
                                                        onRequestClose: fi,
                                                        iconUrl: Xt.Z.src,
                                                        children: (0, d.jsx)(Jt.ZP, {
                                                            actionBlocked: di.blocked,
                                                            onClose: fi
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, d.jsx)(Vt.iy, {
                                            children: (0, d.jsx)(Ie.B$, {
                                                children: (0, d.jsx)(Ie.wN, {
                                                    onClick: function() {
                                                        hi({
                                                            open: !0,
                                                            blocked: !1
                                                        })
                                                    },
                                                    children: (0, d.jsx)(en.cq, {
                                                        className: "user-avatar",
                                                        style: {
                                                            height: "32px",
                                                            width: "32px",
                                                            marginRight: "0",
                                                            border: 0
                                                        },
                                                        children: (0, d.jsx)(Qt.Y, {
                                                            size: 32
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    }), (0, d.jsxs)(Ie.S9, {
                                        children: [(0, d.jsxs)(Ie.lc, {
                                            children: [(0, d.jsx)(Ie.I7, {
                                                children: Ft && Yi
                                            }), (0, d.jsxs)("div", {
                                                style: {
                                                    flex: 6,
                                                    alignSelf: "stretch"
                                                },
                                                children: [(0, d.jsx)(Ie.tm, {
                                                    children: (0, d.jsxs)(T.gq, {
                                                        style: {},
                                                        children: [(0, d.jsx)(T.Gb, {}), (0, d.jsx)("div", {
                                                            style: {
                                                                flex: "0 1 20px"
                                                            }
                                                        }), Ft ? qi : (0, d.jsxs)(p.Fragment, {
                                                            children: [(0, d.jsx)(Ie.wN, {
                                                                style: {
                                                                    fontSize: "0.875rem",
                                                                    opacity: .8,
                                                                    width: "max-content",
                                                                    marginRight: "20px"
                                                                },
                                                                onClick: function() {
                                                                    Ai(!Ri)
                                                                },
                                                                children: "Paint"
                                                            }), (0, d.jsx)(Ie.wN, {
                                                                onClick: function() {
                                                                    Ni.current && Ni.current.click()
                                                                },
                                                                style: {
                                                                    fontSize: "0.875rem",
                                                                    opacity: .8,
                                                                    width: "max-content"
                                                                },
                                                                children: "Upload"
                                                            }), (0, d.jsx)("div", {
                                                                style: {
                                                                    flex: "0 1 20px"
                                                                }
                                                            })]
                                                        }), (0, d.jsx)(Ie.KD, {
                                                            href: "//docs.novelai.net",
                                                            target: "_blank",
                                                            style: {
                                                                fontSize: "0.875rem",
                                                                opacity: .85,
                                                                width: "max-content",
                                                                padding: "0 20px 0 0"
                                                            },
                                                            children: (0, d.jsx)(M.by, {})
                                                        }), (0, d.jsx)(Ie.l_, {
                                                            style: {
                                                                height: 32
                                                            },
                                                            onClick: function() {
                                                                return Ci(!0)
                                                            },
                                                            children: (0, d.jsx)(M.F_, {})
                                                        })]
                                                    })
                                                }), (0, d.jsxs)(Ie.AZ, {
                                                    children: [(0, d.jsxs)(T.gq, {
                                                        style: {
                                                            alignItems: "flex-end",
                                                            justifyContent: "flex-end",
                                                            flexWrap: "wrap",
                                                            rowGap: 20
                                                        },
                                                        children: [(0, d.jsx)("input", {
                                                            style: {
                                                                display: "none"
                                                            },
                                                            accept: "image/png, image/jpeg",
                                                            type: "file",
                                                            ref: Ni,
                                                            onChange: function() {
                                                                var e = (0, i.Z)(u().mark((function e(t) {
                                                                    var n, i;
                                                                    return u().wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                if (!(null === (n = t.target.files) || void 0 === n ? void 0 : n[0])) {
                                                                                    e.next = 10;
                                                                                    break
                                                                                }
                                                                                return e.t0 = nn, e.t1 = Uint8Array, e.next = 6, t.target.files[0].arrayBuffer();
                                                                            case 6:
                                                                                e.t2 = e.sent, e.t3 = new e.t1(e.t2), i = e.t0.from.call(e.t0, e.t3), dr(i);
                                                                            case 10:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(t) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }()
                                                        }), (0, d.jsx)(ut, {
                                                            onFileImport: function(e) {
                                                                dr(e)
                                                            }
                                                        })]
                                                    }), Fe.map((function(e, t) {
                                                        var n, i, c, u, h = {
                                                            style: {
                                                                width: "100%",
                                                                borderRadius: "3px 0 0 3px"
                                                            },
                                                            id: "prompt-input-".concat(t),
                                                            placeholder: "Enter your prompt here.",
                                                            autoComplete: "off",
                                                            spellCheck: !0,
                                                            value: e,
                                                            onChange: function(e) {
                                                                e.target.value.length !== Un.current ? e.target.value.endsWith(" ") || function(e) {
                                                                    if (void 0 !== Rn) {
                                                                        Kn.current = !1, Un.current = e.length, clearTimeout(Hn.current), Hn.current = setTimeout((function() {
                                                                            qn.current = e;
                                                                            var t = document.querySelector("#prompt-input-" + Rn);
                                                                            if (t) {
                                                                                var n, i = null !== (n = t.selectionStart) && void 0 !== n ? n : 0,
                                                                                    r = e.slice(0, i),
                                                                                    o = r.match(RegExp("[,[{](?<s>\\s)?", "g")),
                                                                                    a = 0;
                                                                                if (o) {
                                                                                    var s = o[o.length - 1];
                                                                                    a = r.lastIndexOf(s) + s.length
                                                                                }
                                                                                var l = r.slice(a);
                                                                                !l || l.length < 2 || l.length > 20 || (Yn(!0), Vn(l))
                                                                            }
                                                                        }), 500);
                                                                        var t = document.querySelector("#prompt-input-" + Rn);
                                                                        if (t) {
                                                                            var n, i = null !== (n = t.selectionStart) && void 0 !== n ? n : 0,
                                                                                r = e.slice(0, i),
                                                                                o = r.lastIndexOf(","); - 1 === o ? o = 0 : o += 1, " " === r[o] && (o += 1);
                                                                            var a = r.slice(o);
                                                                            !a || a.length < 2 || a.length > 20 || (zn && Yn(!0), On(void 0), $n(-1))
                                                                        }
                                                                    }
                                                                }(e.target.value) : Jn(), Un.current = e.target.value.length, _e((0, l.Z)(Fe.slice(0, t)).concat([e.target.value], (0, l.Z)(Fe.slice(t + 1))))
                                                            },
                                                            onFocus: function() {
                                                                clearTimeout(hr.current), An(t)
                                                            },
                                                            onBlur: function() {
                                                                clearTimeout(hr.current), hr.current = setTimeout((function() {
                                                                    Jn()
                                                                }), 50)
                                                            },
                                                            onKeyDown: function(e) {
                                                                if ("Enter" === e.key && e.preventDefault(), "Enter" === e.key && -1 === Wn)
                                                                    if ((e.ctrlKey || e.metaKey) && e.shiftKey && Fe.length < 10) e.preventDefault(), e.stopPropagation(), _e((0, l.Z)(Fe.slice(0, t + 1)).concat([""], (0, l.Z)(Fe.slice(t + 1)))), setTimeout((function() {
                                                                        var e = document.querySelector("#prompt-input-".concat(t + 1));
                                                                        e && e.focus()
                                                                    }), 100);
                                                                    else if (e.shiftKey) {
                                                                    var n;
                                                                    setTimeout((function() {
                                                                        var e;
                                                                        if (1 === (null !== (e = qe[t]) && void 0 !== e ? e : 1)) {
                                                                            var n = document.querySelector("#prompt-input-".concat(t));
                                                                            n && n.focus()
                                                                        }
                                                                    }), 100), He((function(e) {
                                                                        return (0, a.Z)((0, o.Z)({}, e), (0, r.Z)({}, t, Math.min((null !== (n = qe[t]) && void 0 !== n ? n : 1) + 2, 9)))
                                                                    }))
                                                                } else e.preventDefault(), e.stopPropagation(), Jn(), Fe.every(Boolean) && pi();
                                                                else if ("Backspace" === e.key && e.shiftKey) {
                                                                    var i, s;
                                                                    e.preventDefault(), 3 === (null !== (i = qe[t]) && void 0 !== i ? i : 1) && setTimeout((function() {
                                                                        var e = document.querySelector("#prompt-input-".concat(t));
                                                                        e && e.focus()
                                                                    }), 100), He((function(e) {
                                                                        return (0, a.Z)((0, o.Z)({}, e), (0, r.Z)({}, t, (null !== (s = qe[t]) && void 0 !== s ? s : 1) - 2))
                                                                    }))
                                                                } else if ("Backspace" === e.key && Fe.length > 1 && 0 === Fe[t].length) e.preventDefault(), e.stopPropagation(), _e((0, l.Z)(Fe.slice(0, t)).concat((0, l.Z)(Fe.slice(t + 1)))), t === Fe.length - 1 && setTimeout((function() {
                                                                    var e = document.querySelector("#prompt-input-".concat(Fe.length - 2));
                                                                    e && e.focus()
                                                                }), 100);
                                                                else {
                                                                    if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                                                                        if (!zn) return;
                                                                        e.preventDefault(), e.stopPropagation(), $n((function(t) {
                                                                            return -1 === t ? "ArrowUp" === e.key ? zn.length - 1 : 0 : "ArrowUp" === e.key ? (t + zn.length - 1) % zn.length : (t + 1) % zn.length
                                                                        }))
                                                                    } else "Enter" === e.key && (e.preventDefault(), e.stopPropagation());
                                                                    if ("Enter" === e.key && Wn >= 0) {
                                                                        if (!zn) return;
                                                                        e.preventDefault(), e.stopPropagation(), Xn(zn[Wn][0], t), Jn()
                                                                    } ["Escape", "Backspace", "ArrowRight", "ArrowLeft", ",", ":", "|"].includes(e.key) && Jn()
                                                                }
                                                            }
                                                        };
                                                        return (0, d.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                position: "relative"
                                                            },
                                                            children: [qe[t] > 1 ? (0, d.jsx)(Ie.Gw, (0, o.Z)({
                                                                minRows: null !== (n = qe[t]) && void 0 !== n ? n : 1,
                                                                maxRows: null !== (i = qe[t]) && void 0 !== i ? i : 1
                                                            }, h)) : (0, d.jsx)(Ie.II, (0, o.Z)({
                                                                type: "text"
                                                            }, h)), (0, d.jsx)(U.Z, {
                                                                tooltip: (jn[t] || 0) + " tokens out of " + ke.Y$ + " tokens used",
                                                                delay: 0,
                                                                children: (0, d.jsx)(Ie.LG, {
                                                                    children: (0, d.jsx)(Ie.zx, {
                                                                        warn: (null !== (c = jn[t]) && void 0 !== c ? c : 0) > ke.Y$,
                                                                        style: {
                                                                            height: "".concat((null !== (u = jn[t]) && void 0 !== u ? u : 0) / ke.Y$ * 100, "%")
                                                                        }
                                                                    })
                                                                })
                                                            }), (0, d.jsx)(x.M, {
                                                                children: (zn || _n) && Rn === t && (0, d.jsxs)(Ie.gR, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        translateY: 16
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        translateY: 0
                                                                    },
                                                                    exit: {
                                                                        opacity: 0,
                                                                        translateY: 16
                                                                    },
                                                                    transition: {
                                                                        duration: .2,
                                                                        ease: "easeInOut"
                                                                    },
                                                                    onPointerDown: function(e) {
                                                                        e.preventDefault(), e.stopPropagation()
                                                                    },
                                                                    children: [(0, d.jsxs)(Ie.lU, {
                                                                        children: ["Did you mean?", (0, d.jsx)(F.P, {
                                                                            onClick: function() {
                                                                                Jn()
                                                                            },
                                                                            style: {
                                                                                top: 10,
                                                                                right: 12
                                                                            },
                                                                            children: (0, d.jsx)("div", {
                                                                                style: {
                                                                                    width: "1rem",
                                                                                    height: "1rem"
                                                                                }
                                                                            })
                                                                        })]
                                                                    }), _n && (0, d.jsx)(z.T, {
                                                                        style: {
                                                                            margin: "20px auto 0 auto"
                                                                        },
                                                                        visible: !0
                                                                    }), 0 === (null === zn || void 0 === zn ? void 0 : zn.length) && !_n && (0, d.jsx)(Ie.J0, {
                                                                        children: (0, d.jsx)("div", {
                                                                            style: {
                                                                                padding: 4
                                                                            },
                                                                            children: "No tags found."
                                                                        })
                                                                    }), (0, d.jsx)(Ie.J0, {
                                                                        children: (null !== zn && void 0 !== zn ? zn : []).map((function(e, n) {
                                                                            var i = (0, s.Z)(e, 2),
                                                                                r = i[0],
                                                                                o = i[1];
                                                                            return (0, d.jsxs)(Ie.p_, {
                                                                                selected: Wn === n,
                                                                                onPointerDown: function(e) {
                                                                                    e.preventDefault(), e.stopPropagation()
                                                                                },
                                                                                onClick: function(e) {
                                                                                    e.preventDefault(), e.stopPropagation(), Xn(r, t), Jn()
                                                                                },
                                                                                children: [(0, d.jsx)("span", {
                                                                                    children: r
                                                                                }), (0, d.jsx)(Ie.xF, {
                                                                                    count: o
                                                                                })]
                                                                            }, n)
                                                                        }))
                                                                    })]
                                                                }, "promptsuggestioncontainer")
                                                            })]
                                                        }, t)
                                                    }))]
                                                }), (0, d.jsx)(L.Ff, {
                                                    visible: de,
                                                    style: {
                                                        width: "100%",
                                                        zIndex: 1
                                                    }
                                                })]
                                            }), (0, d.jsxs)(Ie.qO, {
                                                children: [(0, d.jsxs)(Ie.F3, {
                                                    onClick: function() {
                                                        return pi()
                                                    },
                                                    disabled: de || $t < 0 || Fe.some((function(e) {
                                                        return !e
                                                    })),
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [(0, d.jsx)("span", {
                                                        children: "Generate"
                                                    }), -2 === $t ? (0, d.jsx)("span", {
                                                        children: "Invalid"
                                                    }) : $t < 0 ? (0, d.jsxs)("span", {
                                                        children: [(0, d.jsx)(O.Z, {
                                                            visible: !0,
                                                            invert: !0,
                                                            style: {
                                                                height: "9px",
                                                                margin: "4px",
                                                                display: "inline-block"
                                                            }
                                                        }), " ", (0, d.jsx)(M.o, {
                                                            style: {
                                                                height: 10,
                                                                width: 10
                                                            }
                                                        }), (0, d.jsx)(V.H, {
                                                            notShown: !0,
                                                            children: "Anlas"
                                                        })]
                                                    }) : (0, d.jsxs)("span", {
                                                        children: [$t, " ", (0, d.jsx)(M.o, {
                                                            style: {
                                                                height: 10,
                                                                width: 10
                                                            }
                                                        }), (0, d.jsx)(V.H, {
                                                            notShown: !0,
                                                            children: "Anlas"
                                                        })]
                                                    })]
                                                }), (0, d.jsx)(Ie.tm, {
                                                    style: {
                                                        display: "contents"
                                                    },
                                                    children: (0, d.jsx)(Z.Yl, {
                                                        onClick: function() {
                                                            var e;
                                                            return null === (e = Re.current) || void 0 === e ? void 0 : e.scrollIntoView({
                                                                behavior: "smooth",
                                                                block: "start"
                                                            })
                                                        },
                                                        style: {
                                                            width: "100%",
                                                            cursor: "pointer"
                                                        },
                                                        children: (0, d.jsxs)(T.gq, {
                                                            style: {
                                                                gap: "5px",
                                                                justifyContent: "center",
                                                                opacity: "0.3",
                                                                fontSize: "0.875rem"
                                                            },
                                                            children: [(0, d.jsx)("span", {
                                                                children: "Generation Settings"
                                                            }), (0, d.jsx)(M.ve, {})]
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, d.jsx)(Ie.Ex, {
                                            ref: Ve,
                                            children: (0, d.jsxs)(d.Fragment, {
                                                children: [(0, d.jsxs)(Ie.Ec, {
                                                    maxWidth: st ? st * tt + 20 * (tt - 1) : void 0,
                                                    children: [null === (f = ae[je]) || void 0 === f ? void 0 : f.map((function(e, t) {
                                                        var n, i;
                                                        return (0, d.jsxs)(Ie.mo, {
                                                            style: {
                                                                width: st,
                                                                height: dt,
                                                                cursor: (null === (n = ae[je]) || void 0 === n ? void 0 : n.length) > 1 ? "pointer" : "default",
                                                                marginTop: ei ? void 0 : 1 === (null === (i = ae[je]) || void 0 === i ? void 0 : i.length) ? 54 : 0
                                                            },
                                                            onMouseEnter: function() {
                                                                return yi(t)
                                                            },
                                                            onMouseLeave: function() {
                                                                return yi(void 0)
                                                            },
                                                            onClick: function() {
                                                                ae[je].length > 1 && Rt(t)
                                                            },
                                                            children: [(0, d.jsx)("img", {
                                                                src: $i === t ? e.enhanceOriginal : e.url,
                                                                alt: e.prompt.join("|")
                                                            }), (xi === t || 1 === ae[je].length) && (0, d.jsxs)(d.Fragment, {
                                                                children: [(0, d.jsx)(Ie.I7, {
                                                                    style: {
                                                                        display: "contents"
                                                                    },
                                                                    children: 1 === ae[je].length && e && Ui(e, 0)
                                                                }), 1 !== ae[je].length && Bi(e, t), Hi(e, t)]
                                                            }), e.isVariationOriginal && (0, d.jsx)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    margin: "10px",
                                                                    display: "flex",
                                                                    gap: "10px"
                                                                },
                                                                children: (0, d.jsx)(Ie.$0, {
                                                                    onClick: function() {
                                                                        Rt(void 0)
                                                                    },
                                                                    children: (0, d.jsx)("div", {
                                                                        children: "ORIGINAL"
                                                                    })
                                                                })
                                                            }), wt && 1 === ae[je].length && Pi]
                                                        }, t)
                                                    })), (null !== (Ki = null === (v = ae[je]) || void 0 === v ? void 0 : v.length) && void 0 !== Ki ? Ki : 0) > 0 ? null : (0, d.jsx)(Ie.I6, {
                                                        children: (0, d.jsxs)("svg", {
                                                            width: "58",
                                                            height: "48",
                                                            viewBox: "0 0 58 48",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0, d.jsx)("path", {
                                                                d: "M58 45.0403V2C58 0.895431 57.1046 0 56 0H2.00022C0.895652 0 0.000223091 0.895426 0.000216249 1.99999L1.23893e-05 34.9091C5.5469e-06 36.0137 0.895435 36.9091 2.00001 36.9091H46.6261C47.1566 36.9091 47.6653 37.1198 48.0403 37.4949L56.2929 45.7474C56.9229 46.3774 58 45.9312 58 45.0403Z",
                                                                fill: wi.colors.bg3
                                                            }), (0, d.jsx)("circle", {
                                                                cx: "13.1818",
                                                                cy: "18.4546",
                                                                r: "5.27273",
                                                                fill: wi.colors.bg1
                                                            }), (0, d.jsx)("circle", {
                                                                cx: "29",
                                                                cy: "18.4546",
                                                                r: "5.27273",
                                                                fill: wi.colors.bg1
                                                            }), (0, d.jsx)("circle", {
                                                                cx: "44.8181",
                                                                cy: "18.4546",
                                                                r: "5.27273",
                                                                fill: wi.colors.bg1
                                                            })]
                                                        })
                                                    })]
                                                }), (0, d.jsx)(x.M, {
                                                    children: void 0 !== Et && (null === (w = ae[je]) || void 0 === w ? void 0 : w[Et]) && (0, d.jsx)(Ie.$Q, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            transition: {
                                                                ease: "easeInOut",
                                                                duration: .1
                                                            }
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            transition: {
                                                                ease: "easeOut",
                                                                duration: .1
                                                            }
                                                        },
                                                        children: (0, d.jsxs)(Ie.mo, {
                                                            style: {
                                                                width: pt,
                                                                height: vt,
                                                                marginTop: ei ? void 0 : "54px"
                                                            },
                                                            onClick: function() {
                                                                return Rt(void 0)
                                                            },
                                                            children: [(0, d.jsx)("img", {
                                                                src: $i === Et ? ae[je][Et].enhanceOriginal : ae[je][Et].url,
                                                                alt: ae[je][Et].prompt.join("|")
                                                            }), (0, d.jsx)(Ie.I7, {
                                                                style: {
                                                                    display: "contents"
                                                                },
                                                                children: ae[je][Et] && Ui(ae[je][Et], Et)
                                                            }), (0, d.jsx)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    margin: "10px",
                                                                    display: "flex",
                                                                    gap: "10px"
                                                                },
                                                                children: (0, d.jsx)(Ie.EE, {
                                                                    onClick: function() {
                                                                        Rt(void 0)
                                                                    },
                                                                    children: (0, d.jsx)(M.aM, {
                                                                        style: {
                                                                            width: 16,
                                                                            height: 16
                                                                        }
                                                                    })
                                                                })
                                                            }), Hi(ae[je][Et], Et), wt && Pi]
                                                        })
                                                    }, "expanded-image")
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, d.jsx)("div", {
                                    ref: Re,
                                    style: {
                                        height: 0,
                                        visibility: "hidden"
                                    }
                                }), (0, d.jsxs)(Ie.tm, {
                                    style: {
                                        display: "contents"
                                    },
                                    children: [null === (C = ae[je]) || void 0 === C ? void 0 : C.map((function(e, t) {
                                        return (0, d.jsx)(p.Fragment, {
                                            children: (xi === t || 1 === ae[je].length) && (0, d.jsx)(d.Fragment, {
                                                children: 1 === ae[je].length && e && Ui(e, 0, !0)
                                            })
                                        }, t)
                                    })), void 0 !== Et && (null === (re = ae[je]) || void 0 === re ? void 0 : re[Et]) && ae[je][Et] && Ui(ae[je][Et], Et, !0)]
                                }), (0, d.jsx)(Pe, {
                                    params: Ne,
                                    setParams: Ge,
                                    model: Te,
                                    initImage: Ft,
                                    setInitImage: _t,
                                    negPrompt: Be,
                                    setNegPrompt: We,
                                    negPromptTokens: Ln,
                                    generateImage: function() {
                                        return pi()
                                    },
                                    children: (0, d.jsx)(Ie.KC, {
                                        children: ki
                                    })
                                })]
                            })
                        })]
                    }), !Ri && (0, d.jsxs)(p.Fragment, {
                        children: [(0, d.jsx)(Ie.I7, {
                            style: {
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                                width: "20px",
                                height: "20px"
                            },
                            children: (0, d.jsx)(Z.Yl, {
                                style: {},
                                onClick: function() {
                                    return Ci(!0)
                                },
                                children: (0, d.jsx)(M.F_, {})
                            })
                        }), (0, d.jsx)(A.Z, {
                            left: !1,
                            open: ji,
                            setOpen: Ci,
                            breakpointDesktop: "".concat(ke.P_, "px"),
                            breakpointMobile: "".concat(ke.P_, "px"),
                            overlayPoint: ke.P_,
                            noDragPoint: ke.P_,
                            initialOffset: 140,
                            style: {
                                overflowX: "hidden"
                            },
                            children: (0, d.jsxs)(Ie.iQ, {
                                id: "historyContainer",
                                children: [(0, d.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        width: "100%",
                                        justifyContent: "center",
                                        padding: "0 30px"
                                    },
                                    children: [(0, d.jsx)(Ie.eQ, {
                                        onClick: function() {
                                            return Ci(!1)
                                        },
                                        style: {
                                            marginRight: "auto"
                                        },
                                        children: (0, d.jsx)(M.aM, {
                                            style: {
                                                width: 14,
                                                height: 14
                                            }
                                        })
                                    }), (0, d.jsxs)(Ie.Dx, {
                                        style: {
                                            opacity: .5,
                                            flex: " 0 0 auto"
                                        },
                                        children: ["History", (0, d.jsx)(U.Z, {
                                            delay: 1,
                                            tooltip: "",
                                            elementTooltip: (0, d.jsx)(d.Fragment, {
                                                children: "Ctrl+Click on an image to set your settings to the ones used to generate it (except for any init image)."
                                            }),
                                            children: (0, d.jsx)(y.$x8, {
                                                style: {
                                                    opacity: .3,
                                                    marginLeft: "0.3rem"
                                                }
                                            })
                                        })]
                                    })]
                                }), (0, d.jsx)(Ie.rt, {
                                    children: ae.map((function(e, t) {
                                        var n;
                                        return (0, d.jsxs)(Ie.OC, {
                                            role: "button",
                                            "aria-label": "choose image",
                                            onClick: function(e) {
                                                var n, i, r;
                                                (e.ctrlKey || e.metaKey) && (De(ae[t][0].model), (n = (0, a.Z)((0, o.Z)({}, ae[t][0].params), {
                                                    image: Ne.image
                                                })).seed = Ne.seed, i = (0, l.Z)(ae[t][0].prompt), r = ae[t][0].negPrompt), e.shiftKey && (n || (n = (0, o.Z)({}, Ne)), n.seed = ae[t][0].seed), n ? Ge(n) : (Ce(t), Rt(void 0)), i && _e(i), r && We(r), Ke.width <= ke.P_ && Ci(!1)
                                            },
                                            selected: je === t,
                                            img: null === (n = e[0]) || void 0 === n ? void 0 : n.url,
                                            children: [(0, d.jsx)(Q.ZP, {
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 0,
                                                    padding: 4,
                                                    width: "auto",
                                                    background: "none"
                                                },
                                                disabled: de,
                                                onConfirm: function() {
                                                    se((function(e) {
                                                        return (0, l.Z)(e.slice(0, t)).concat((0, l.Z)(e.slice(t + 1)))
                                                    }))
                                                },
                                                warningText: "Delete this image?",
                                                confirmButtonText: "Delete it!",
                                                neverMindText: "No, keep it!",
                                                ariaLabel: "delete image(s)",
                                                buttonText: (0, d.jsx)(M.aM, {
                                                    style: {
                                                        width: 14,
                                                        height: 14
                                                    }
                                                })
                                            }), e.length > 1 && (0, d.jsxs)(Ie.be, {
                                                children: ["x", e.length]
                                            }), 1 === e.length && e[0].enhanced && (0, d.jsx)(Ie.be, {
                                                children: (0, d.jsx)(M.T$, {
                                                    style: {
                                                        height: 15,
                                                        width: 15
                                                    }
                                                })
                                            })]
                                        }, t)
                                    }))
                                }), (0, d.jsx)(Z.Yl, {
                                    disabled: 0 === ae.length,
                                    style: {
                                        opacity: .4,
                                        fontSize: "0.8rem",
                                        fontWeight: 400
                                    },
                                    onClick: function() {
                                        !nr && ae.length > 0 && window.confirm("Download all images? This could take a while, or fail entirely, with large numbers of images.") && function() {
                                            var e = new(b()),
                                                t = ae.reduce((function(e, t) {
                                                    return e + t.length
                                                }), 0),
                                                n = {};
                                            (0, g.Am)("Downloading ".concat(t, " images...")), ae.forEach((function(t, i) {
                                                t.forEach((function(t, i) {
                                                    if (!t.isVariationOriginal) {
                                                        var r = an(t);
                                                        n[r] ? r = an(t, n[r]++) : n[r] = 1, e.file(r, t.data)
                                                    }
                                                }))
                                            })), ir(!0), e.generateAsync({
                                                type: "blob"
                                            }).then((function(e) {
                                                (0, j.saveAs)(e, "images.zip"), ir(!1), (0, g.Am)("Images downloaded")
                                            }))
                                        }()
                                    },
                                    children: nr ? (0, d.jsxs)("span", {
                                        children: ["Downloading", (0, d.jsx)(J.d, {})]
                                    }) : "Download ZIP"
                                })]
                            })
                        })]
                    }), (0, d.jsx)(Y.Z, {
                        type: Y.w.Compact,
                        isOpen: Ut,
                        label: (0, d.jsxs)("span", {
                            children: ["Purchase ", (0, d.jsx)(M.o, {
                                style: {
                                    display: "inline-block",
                                    height: "1rem"
                                }
                            }), " Anlas"]
                        }),
                        shouldCloseOnOverlayClick: !0,
                        onRequestClose: function() {
                            return Bt(!1)
                        },
                        children: (0, d.jsx)($.Z, {})
                    }), (0, d.jsx)(Q.RV, {
                        isOpen: or,
                        label: "Image with Metadata found!",
                        iconURL: k.Z.src,
                        warningText: "Import the Image or import Settings and Prompt?",
                        confirmButtonText: "Import Image",
                        neverMindText: ["Import Settings", "Import Settings + Seed"],
                        confirm: (0, i.Z)(u().mark((function e() {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        lr();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))),
                        deny: [function() {
                            cr(!1)
                        }, function() {
                            cr(!0)
                        }],
                        cancel: function() {
                            ur()
                        }
                    })]
                })
            }
        },
        80069: function(e, t, n) {
            "use strict";
            n.d(t, {
                DW: function() {
                    return u
                },
                Ff: function() {
                    return h
                },
                fn: function() {
                    return d
                }
            });
            var i = n(17440),
                r = n(9964),
                o = n(8322),
                a = n(32079);

            function s() {
                var e = (0, i.Z)(["\n    flex: 1;\n    max-height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow-x: hidden;\n    overflow-y: auto;\n"]);
                return s = function() {
                    return e
                }, e
            }

            function l() {
                var e = (0, i.Z)(["\n    border: 1px solid\n        ", ";\n    display: block;\n    flex: 10;\n    overflow: hidden;\n    position: relative;\n    height: 100%;\n    min-height: 200px;\n    flex-direction: column-reverse;\n    ", "\n    ", "\n\n    ", "\n"]);
                return l = function() {
                    return e
                }, e
            }

            function c() {
                var e = (0, i.Z)(["\n    height: 1px;\n    position: relative;\n\n    &::after {\n        content: '';\n        height: 1px;\n        position: absolute;\n        top: 0;\n        width: 100%;\n        background-image: linear-gradient(\n            90deg,\n            ", " 0%,\n            ", " 40%,\n            ", " 60%,\n            ", " 100%\n        );\n        background-size: 200%;\n        background-repeat: repeat-x;\n        animation: ", " 2s linear infinite;\n        opacity: ", ";\n        transition: opacity 0.2s ease-in-out;\n    }\n"]);
                return c = function() {
                    return e
                }, e
            }
            var u = r.ZP.div.withConfig({
                    componentId: "sc-53c0ed4f-0"
                })(s()),
                d = r.ZP.div.withConfig({
                    componentId: "sc-53c0ed4f-1"
                })(l(), (function(e) {
                    return e.mode === o.xq.adventure ? "transparent" : e.theme.colors.bg3
                }), (function(e) {
                    return e.mode !== o.xq.adventure ? ":focus-within  {\n             background: ".concat(e.theme.colors.bg1, ";\n        }") : ""
                }), (function(e) {
                    return e.showRetryHighlight ? "\n        .retryDeletionText {\n            background-color: ".concat(e.theme.colors.textHighlight, ";\n        }") : ""
                }), (function(e) {
                    return e.showUndoHighlight ? "\n            .undoDeletionText {\n                background-color: ".concat(e.theme.colors.textHighlight, ";\n            }") : ""
                })),
                h = r.ZP.div.withConfig({
                    componentId: "sc-53c0ed4f-2"
                })(c(), (function(e) {
                    return e.theme.colors.textHeadings
                }), (function(e) {
                    return e.theme.colors.bg2
                }), (function(e) {
                    return e.theme.colors.bg3
                }), (function(e) {
                    return e.theme.colors.textHeadings
                }), a.ph, (function(e) {
                    return e.visible ? "1" : "0"
                }))
        }
    },
    function(e) {
        e.O(0, [6241, 2717, 6341, 6337, 3105, 5741, 5147, 7836, 3871, 5302, 7275, 3409, 8888, 2876, 4124, 4575, 6652, 6965, 6334, 3357, 7662, 9774, 2888, 179], (function() {
            return t = 12493, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);