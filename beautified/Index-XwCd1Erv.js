import {
    u as R,
    m as w,
    q as S,
    r as l,
    t as y,
    o as f,
    w as e,
    d as b,
    e as t,
    i as U,
    k as j,
    p as N,
    f as u,
    a as T,
    F as B,
    y as D,
    v as i,
    x as r
} from "./app-BYBn2zfx.js";
const E = {
        class: "grid grid-cols-3 gap-6"
    },
    O = {
        class: "col-span-3 sm:col-span-1"
    },
    q = {
        class: "col-span-3 sm:col-span-1"
    },
    z = {
        class: "col-span-3 sm:col-span-1"
    },
    G = {
        __name: "Filter",
        emits: ["hide"],
        setup(I, {
            emit: p
        }) {
            R();
            const _ = p,
                g = {
                    name: "",
                    code: "",
                    rate: ""
                },
                d = w({
                    ...g
                }),
                k = w({
                    isLoaded: !0
                });
            return S(async () => {
                k.isLoaded = !0
            }), (c, o) => {
                const v = l("BaseInput"),
                    s = l("FilterForm");
                return f(), y(s, {
                    "init-form": g,
                    form: d,
                    multiple: [],
                    onHide: o[3] || (o[3] = a => _("hide"))
                }, {
                    default: e(() => [b("div", E, [b("div", O, [t(v, {
                        type: "text",
                        modelValue: d.name,
                        "onUpdate:modelValue": o[0] || (o[0] = a => d.name = a),
                        name: "name",
                        label: c.$trans("finance.tax.props.name")
                    }, null, 8, ["modelValue", "label"])]), b("div", q, [t(v, {
                        type: "text",
                        modelValue: d.code,
                        "onUpdate:modelValue": o[1] || (o[1] = a => d.code = a),
                        name: "code",
                        label: c.$trans("finance.tax.props.code")
                    }, null, 8, ["modelValue", "label"])]), b("div", z, [t(v, {
                        type: "text",
                        modelValue: d.rate,
                        "onUpdate:modelValue": o[2] || (o[2] = a => d.rate = a),
                        name: "rate",
                        label: c.$trans("finance.tax.props.rate")
                    }, null, 8, ["modelValue", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    J = {
        name: "FinanceTaxList"
    },
    Q = Object.assign(J, {
        setup(I) {
            const p = U(),
                _ = j("emitter");
            let g = ["create", "filter"],
                d = ["print", "pdf", "excel"];
            const k = "finance/tax/",
                c = N(!1),
                o = w({}),
                v = s => {
                    Object.assign(o, s)
                };
            return (s, a) => {
                const h = l("PageHeaderAction"),
                    x = l("PageHeader"),
                    V = l("ParentTransition"),
                    C = l("TextMuted"),
                    $ = l("DataCell"),
                    F = l("FloatingMenuItem"),
                    M = l("FloatingMenu"),
                    A = l("DataRow"),
                    H = l("BaseButton"),
                    L = l("DataTable"),
                    P = l("ListItem");
                return f(), y(P, {
                    "init-url": k,
                    onSetItems: v
                }, {
                    header: e(() => [t(x, {
                        title: s.$trans("finance.tax.tax"),
                        navs: [{
                            label: s.$trans("finance.finance"),
                            path: "Finance"
                        }]
                    }, {
                        default: e(() => [t(h, {
                            url: "finance/taxes/",
                            name: "FinanceTax",
                            title: s.$trans("finance.tax.tax"),
                            actions: u(g),
                            "dropdown-actions": u(d),
                            onToggleFilter: a[0] || (a[0] = n => c.value = !c.value)
                        }, null, 8, ["title", "actions", "dropdown-actions"])]),
                        _: 1
                    }, 8, ["title", "navs"])]),
                    filter: e(() => [t(V, {
                        appear: "",
                        visibility: c.value
                    }, {
                        default: e(() => [t(G, {
                            onRefresh: a[1] || (a[1] = n => u(_).emit("listItems")),
                            onHide: a[2] || (a[2] = n => c.value = !1)
                        })]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: e(() => [t(V, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: e(() => [t(L, {
                            header: o.headers,
                            meta: o.meta,
                            module: "finance.tax",
                            onRefresh: a[4] || (a[4] = n => u(_).emit("listItems"))
                        }, {
                            actionButton: e(() => [t(H, {
                                onClick: a[3] || (a[3] = n => u(p).push({
                                    name: "FinanceTaxCreate"
                                }))
                            }, {
                                default: e(() => [i(r(s.$trans("global.add", {
                                    attribute: s.$trans("finance.tax.tax")
                                })), 1)]),
                                _: 1
                            })]),
                            default: e(() => [(f(!0), T(B, null, D(o.data, n => (f(), y(A, {
                                key: n.uuid,
                                onDoubleClick: m => u(p).push({
                                    name: "FinanceTaxShow",
                                    params: {
                                        uuid: n.uuid
                                    }
                                })
                            }, {
                                default: e(() => [t($, {
                                    name: "name"
                                }, {
                                    default: e(() => [i(r(n.name) + " ", 1), t(C, {
                                        block: ""
                                    }, {
                                        default: e(() => [i(r(n.code), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), t($, {
                                    name: "rate"
                                }, {
                                    default: e(() => [i(r(n.rate.formatted), 1)]),
                                    _: 2
                                }, 1024), t($, {
                                    name: "components"
                                }, {
                                    default: e(() => [(f(!0), T(B, null, D(n.components, m => (f(), T("div", {
                                        key: m.uuid
                                    }, [i(r(m.name) + " ", 1), t(C, null, {
                                        default: e(() => [i(r(m.code), 1)]),
                                        _: 2
                                    }, 1024), t(C, {
                                        class: "ml-1"
                                    }, {
                                        default: e(() => [i(r(m.rate?.formatted), 1)]),
                                        _: 2
                                    }, 1024)]))), 128))]),
                                    _: 2
                                }, 1024), t($, {
                                    name: "createdAt"
                                }, {
                                    default: e(() => [i(r(n.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), t($, {
                                    name: "action"
                                }, {
                                    default: e(() => [t(M, null, {
                                        default: e(() => [t(F, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: m => u(p).push({
                                                name: "FinanceTaxShow",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [i(r(s.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), t(F, {
                                            icon: "fas fa-edit",
                                            onClick: m => u(p).push({
                                                name: "FinanceTaxEdit",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [i(r(s.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), t(F, {
                                            icon: "fas fa-copy",
                                            onClick: m => u(p).push({
                                                name: "FinanceTaxDuplicate",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [i(r(s.$trans("general.duplicate")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), t(F, {
                                            icon: "fas fa-trash",
                                            onClick: m => u(_).emit("deleteItem", {
                                                uuid: n.uuid
                                            })
                                        }, {
                                            default: e(() => [i(r(s.$trans("general.delete")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1032, ["onDoubleClick"]))), 128))]),
                            _: 1
                        }, 8, ["header", "meta"])]),
                        _: 1
                    })]),
                    _: 1
                })
            }
        }
    });
export {
    Q as
    default
};