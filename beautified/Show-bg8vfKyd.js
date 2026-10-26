import {
    u as I,
    k as O,
    g as E,
    L as D,
    m as F,
    r as b,
    t as B,
    o as g,
    w as e,
    d as S,
    e as r,
    f as s,
    j as H,
    a as A,
    b as y,
    v,
    x as c,
    i as z,
    F as j,
    y as L,
    D as q
} from "./app-BYBn2zfx.js";
const h = {
        class: "grid grid-cols-3 gap-6"
    },
    M = {
        class: "col-span-3 sm:col-span-1"
    },
    G = {
        class: "col-span-3 sm:col-span-1"
    },
    J = {
        class: "col-span-3 sm:col-span-1"
    },
    K = {
        name: "TeamSyncForm"
    },
    Q = Object.assign(K, {
        props: {},
        emits: ["completed"],
        setup(R, {
            emit: k
        }) {
            const V = I(),
                C = k,
                P = O("emitter"),
                i = {
                    team: "",
                    role: !1,
                    permission: !1
                },
                U = "team/",
                a = E("teams").value.filter(f => f.uuid !== V.params.uuid),
                m = D(U),
                $ = F({}),
                p = F({
                    ...i
                }),
                T = f => {
                    Object.assign($, f)
                },
                u = () => {
                    C("completed"), P.emit("listItems")
                };
            return (f, d) => {
                const w = b("BaseSelect"),
                    t = b("BaseSwitch"),
                    n = b("FormAction");
                return g(), B(n, {
                    "no-card": "",
                    "pre-requisites": !1,
                    onSetPreRequisites: T,
                    "init-url": U,
                    uuid: s(V).params.uuid,
                    "no-data-fetch": "",
                    action: "sync",
                    "init-form": i,
                    form: p,
                    "keep-adding": !1,
                    "submit-text": f.$trans("general.proceed"),
                    "after-submit": u
                }, {
                    default: e(() => [S("div", h, [S("div", M, [r(w, {
                        name: "team",
                        label: f.$trans("team.team"),
                        modelValue: p.team,
                        "onUpdate:modelValue": d[0] || (d[0] = o => p.team = o),
                        error: s(m).team,
                        "onUpdate:error": d[1] || (d[1] = o => s(m).team = o),
                        options: s(a),
                        "value-prop": "uuid",
                        "label-prop": "name"
                    }, null, 8, ["label", "modelValue", "error", "options"])]), S("div", G, [r(t, {
                        vertical: "",
                        modelValue: p.role,
                        "onUpdate:modelValue": d[2] || (d[2] = o => p.role = o),
                        name: "role",
                        label: f.$trans("global.sync", {
                            attribute: f.$trans("team.config.role.role")
                        }),
                        error: s(m).role,
                        "onUpdate:error": d[3] || (d[3] = o => s(m).role = o)
                    }, null, 8, ["modelValue", "label", "error"])]), S("div", J, [r(t, {
                        vertical: "",
                        modelValue: p.permission,
                        "onUpdate:modelValue": d[4] || (d[4] = o => p.permission = o),
                        name: "permission",
                        label: f.$trans("global.sync", {
                            attribute: f.$trans("team.config.permission.permission")
                        }),
                        error: s(m).permission,
                        "onUpdate:error": d[5] || (d[5] = o => s(m).permission = o)
                    }, null, 8, ["modelValue", "label", "error"])])])]),
                    _: 1
                }, 8, ["uuid", "form", "submit-text"])
            }
        }
    }),
    W = {
        class: "grid grid-cols-3 gap-6"
    },
    X = {
        class: "col-span-3 sm:col-span-1"
    },
    Y = {
        key: 0,
        class: "col-span-3 sm:col-span-1"
    },
    Z = {
        key: 0,
        class: "font-bold"
    },
    x = {
        key: 0,
        class: "font-bold"
    },
    ee = {
        class: "col-span-3 sm:col-span-1"
    },
    te = {
        name: "TeamImportForm"
    },
    oe = Object.assign(te, {
        props: {},
        emits: ["completed"],
        setup(R, {
            emit: k
        }) {
            const V = I(),
                C = H(),
                P = k,
                i = O("emitter"),
                U = {
                    team: "",
                    period: "",
                    module: ""
                },
                a = "team/",
                m = E("teams").value.filter(t => t.uuid !== V.params.uuid),
                $ = D(a),
                p = F({
                    periods: []
                }),
                T = F({
                    selectedPeriod: null
                }),
                u = F({
                    ...U
                }),
                f = t => {
                    Object.assign(p, t)
                },
                d = async t => {
                    if (u.period = "", T.selectedPeriod = null, p.periods = [], t == null || _.isEmpty(t)) {
                        u.period = "";
                        return
                    }
                    await C.dispatch(a + "getPeriods", {
                        team: t
                    }).then(n => {
                        p.periods = n.periods
                    }).catch(n => {})
                }, w = () => {
                    P("completed"), i.emit("listItems")
                };
            return (t, n) => {
                const o = b("BaseSelect"),
                    N = b("FormAction");
                return g(), B(N, {
                    "no-card": "",
                    "pre-requisites": !1,
                    onSetPreRequisites: f,
                    "init-url": a,
                    uuid: s(V).params.uuid,
                    "no-data-fetch": "",
                    action: "import",
                    "init-form": U,
                    form: u,
                    "keep-adding": !1,
                    "submit-text": t.$trans("general.proceed"),
                    "after-submit": w
                }, {
                    default: e(() => [S("div", W, [S("div", X, [r(o, {
                        name: "team",
                        label: t.$trans("team.team"),
                        modelValue: u.team,
                        "onUpdate:modelValue": n[0] || (n[0] = l => u.team = l),
                        error: s($).team,
                        "onUpdate:error": n[1] || (n[1] = l => s($).team = l),
                        options: s(m),
                        "value-prop": "uuid",
                        "label-prop": "name",
                        onChange: d
                    }, null, 8, ["label", "modelValue", "error", "options"])]), p.periods.length > 1 ? (g(), A("div", Y, [r(o, {
                        name: "period",
                        label: t.$trans("academic.period.period"),
                        modelValue: u.period,
                        "onUpdate:modelValue": n[2] || (n[2] = l => u.period = l),
                        error: s($).period,
                        "onUpdate:error": n[3] || (n[3] = l => s($).period = l),
                        options: p.periods,
                        "value-prop": "uuid",
                        "label-prop": "name"
                    }, {
                        selectedOption: e(l => [l.value.session ? (g(), A("span", Z, c(l.value.session?.name) + " - ", 1)) : y("", !0), v(" " + c(l.value.name), 1)]),
                        listOption: e(l => [l.option.session ? (g(), A("span", x, c(l.option.session?.name) + " - ", 1)) : y("", !0), v(" " + c(l.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "error", "options"])])) : y("", !0), S("div", ee, [r(o, {
                        name: "module",
                        label: t.$trans("module.module"),
                        modelValue: u.module,
                        "onUpdate:modelValue": n[4] || (n[4] = l => u.module = l),
                        error: s($).module,
                        "onUpdate:error": n[5] || (n[5] = l => s($).module = l),
                        "label-prop": "label",
                        "value-prop": "value",
                        options: [{
                            value: "academic",
                            label: t.$trans("module.academic")
                        }, {
                            value: "student",
                            label: t.$trans("module.student")
                        }, {
                            value: "employee",
                            label: t.$trans("module.employee")
                        }, {
                            value: "finance",
                            label: t.$trans("module.finance")
                        }, {
                            value: "contact",
                            label: t.$trans("module.contact")
                        }, {
                            value: "transport",
                            label: t.$trans("module.transport")
                        }, {
                            value: "approval",
                            label: t.$trans("module.approval")
                        }]
                    }, null, 8, ["label", "modelValue", "error", "options"])])])]),
                    _: 1
                }, 8, ["uuid", "form", "submit-text"])
            }
        }
    }),
    ae = {
        class: "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"
    },
    se = {
        name: "TeamShow"
    },
    re = Object.assign(se, {
        setup(R) {
            H();
            const k = I(),
                V = z(),
                C = {},
                P = "team/",
                i = F({
                    ...C
                }),
                U = a => {
                    Object.assign(i, a)
                };
            return (a, m) => {
                const $ = b("PageHeaderAction"),
                    p = b("PageHeader"),
                    T = b("TextMuted"),
                    u = b("BaseDataView"),
                    f = b("BaseButton"),
                    d = b("ShowButton"),
                    w = b("BaseCard"),
                    t = b("ShowItem"),
                    n = b("ParentTransition");
                return g(), A(j, null, [r(p, {
                    title: a.$trans(s(k).meta.trans, {
                        attribute: a.$trans(s(k).meta.label)
                    }),
                    navs: [{
                        label: a.$trans("team.team"),
                        path: "TeamList"
                    }]
                }, {
                    default: e(() => [r($, {
                        name: "Team",
                        title: a.$trans("team.team"),
                        actions: ["list"]
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["title", "navs"]), r(n, {
                    appear: "",
                    visibility: !0
                }, {
                    default: e(() => [r(t, {
                        "init-url": P,
                        uuid: s(k).params.uuid,
                        onSetItem: U,
                        onRedirectTo: m[1] || (m[1] = o => s(V).push({
                            name: "Team"
                        }))
                    }, {
                        default: e(() => [i.uuid ? (g(), B(w, {
                            key: 0
                        }, {
                            title: e(() => [v(c(i.name) + " ", 1), i.code ? (g(), B(T, {
                                key: 0,
                                class: "text-xs"
                            }, {
                                default: e(() => [v(c(i.code), 1)]),
                                _: 1
                            })) : y("", !0)]),
                            footer: e(() => [r(d, null, {
                                default: e(() => [r(f, {
                                    design: "primary",
                                    onClick: m[0] || (m[0] = o => s(V).push({
                                        name: "TeamEdit",
                                        params: {
                                            uuid: i.uuid
                                        }
                                    }))
                                }, {
                                    default: e(() => [v(c(a.$trans("general.edit")), 1)]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            default: e(() => [S("dl", ae, [r(u, {
                                label: a.$trans("organization.organization"),
                                class: "col-span-1 sm:col-span-2"
                            }, {
                                default: e(() => [v(c(i.organization?.name || "-"), 1)]),
                                _: 1
                            }, 8, ["label"]), r(u, {
                                label: a.$trans("user.user"),
                                class: "col-span-1 sm:col-span-2"
                            }, {
                                default: e(() => [(g(!0), A(j, null, L(i.users, o => (g(), A("div", {
                                    key: o.uuid
                                }, [v(c(o.profile.name) + " ", 1), r(T, null, {
                                    default: e(() => [v("(" + c(o.email) + ")", 1)]),
                                    _: 2
                                }, 1024), r(T, {
                                    block: ""
                                }, {
                                    default: e(() => [v(c(o.asAdmin ? a.$trans("team.config.role.admin") : a.$trans("team.config.role.observer")), 1)]),
                                    _: 2
                                }, 1024)]))), 128))]),
                                _: 1
                            }, 8, ["label"]), r(u, {
                                label: a.$trans("general.created_at")
                            }, {
                                default: e(() => [v(c(i.createdAt.formatted), 1)]),
                                _: 1
                            }, 8, ["label"]), r(u, {
                                label: a.$trans("general.updated_at")
                            }, {
                                default: e(() => [v(c(i.updatedAt.formatted), 1)]),
                                _: 1
                            }, 8, ["label"])])]),
                            _: 1
                        })) : y("", !0)]),
                        _: 1
                    }, 8, ["uuid"])]),
                    _: 1
                }), s(q)("admin") ? (g(), B(n, {
                    key: 0,
                    appear: "",
                    visibility: !0
                }, {
                    default: e(() => [i.uuid ? (g(), B(w, {
                        key: 0
                    }, {
                        title: e(() => [v(c(a.$trans("general.sync")), 1)]),
                        default: e(() => [r(Q, {
                            onCompleted: m[2] || (m[2] = o => a.emitter.emit("refreshItem"))
                        })]),
                        _: 1
                    })) : y("", !0)]),
                    _: 1
                })) : y("", !0), s(q)("admin") ? (g(), B(n, {
                    key: 1,
                    appear: "",
                    visibility: !0
                }, {
                    default: e(() => [i.uuid ? (g(), B(w, {
                        key: 0
                    }, {
                        title: e(() => [v(c(a.$trans("general.import")), 1)]),
                        default: e(() => [r(oe, {
                            onCompleted: m[3] || (m[3] = o => a.emitter.emit("refreshItem"))
                        })]),
                        _: 1
                    })) : y("", !0)]),
                    _: 1
                })) : y("", !0)], 64)
            }
        }
    });
export {
    re as
    default
};