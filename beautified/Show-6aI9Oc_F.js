import {
    j as S,
    u as k,
    i as C,
    m as P,
    r as s,
    a as p,
    o as c,
    e as t,
    w as e,
    f as u,
    t as V,
    b as A,
    d as H,
    v as o,
    x as r,
    F as b,
    y as I
} from "./app-BYBn2zfx.js";
const N = {
        class: "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"
    },
    j = {
        name: "FinanceTaxShow"
    },
    E = Object.assign(j, {
        setup(D) {
            S();
            const m = k(),
                f = C(),
                g = {},
                B = "finance/tax/",
                n = P({
                    ...g
                }),
                $ = a => {
                    Object.assign(n, a)
                };
            return (a, d) => {
                const x = s("PageHeaderAction"),
                    T = s("PageHeader"),
                    i = s("BaseDataView"),
                    _ = s("TextMuted"),
                    v = s("BaseButton"),
                    w = s("ShowButton"),
                    h = s("BaseCard"),
                    y = s("ShowItem"),
                    F = s("ParentTransition");
                return c(), p(b, null, [t(T, {
                    title: a.$trans(u(m).meta.trans, {
                        attribute: a.$trans(u(m).meta.label)
                    }),
                    navs: [{
                        label: a.$trans("finance.finance"),
                        path: "Finance"
                    }, {
                        label: a.$trans("finance.tax.tax"),
                        path: "FinanceTaxList"
                    }]
                }, {
                    default: e(() => [t(x, {
                        name: "FinanceTax",
                        title: a.$trans("finance.tax.tax"),
                        actions: ["list"]
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["title", "navs"]), t(F, {
                    appear: "",
                    visibility: !0
                }, {
                    default: e(() => [t(y, {
                        "init-url": B,
                        uuid: u(m).params.uuid,
                        onSetItem: $,
                        onRedirectTo: d[1] || (d[1] = l => u(f).push({
                            name: "FinanceTax"
                        }))
                    }, {
                        default: e(() => [n.uuid ? (c(), V(h, {
                            key: 0
                        }, {
                            title: e(() => [o(r(n.name), 1)]),
                            footer: e(() => [t(w, null, {
                                default: e(() => [t(v, {
                                    design: "primary",
                                    onClick: d[0] || (d[0] = l => u(f).push({
                                        name: "FinanceTaxEdit",
                                        params: {
                                            uuid: n.uuid
                                        }
                                    }))
                                }, {
                                    default: e(() => [o(r(a.$trans("general.edit")), 1)]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            default: e(() => [H("dl", N, [t(i, {
                                label: a.$trans("finance.tax.props.code")
                            }, {
                                default: e(() => [o(r(n.code || "-"), 1)]),
                                _: 1
                            }, 8, ["label"]), t(i, {
                                label: a.$trans("finance.tax.props.components"),
                                dynamic: ""
                            }, {
                                default: e(() => [(c(!0), p(b, null, I(n.components, l => (c(), p("div", {
                                    key: l.uuid
                                }, [o(r(l.name) + " ", 1), t(_, null, {
                                    default: e(() => [o(r(l.code), 1)]),
                                    _: 2
                                }, 1024), t(_, {
                                    class: "ml-1"
                                }, {
                                    default: e(() => [o(r(l.rate?.formatted), 1)]),
                                    _: 2
                                }, 1024)]))), 128))]),
                                _: 1
                            }, 8, ["label"]), t(i, {
                                class: "col-span-1 sm:col-span-2",
                                label: a.$trans("finance.tax.props.description")
                            }, {
                                default: e(() => [o(r(n.description), 1)]),
                                _: 1
                            }, 8, ["label"]), t(i, {
                                label: a.$trans("general.created_at")
                            }, {
                                default: e(() => [o(r(n.createdAt.formatted), 1)]),
                                _: 1
                            }, 8, ["label"]), t(i, {
                                label: a.$trans("general.updated_at")
                            }, {
                                default: e(() => [o(r(n.updatedAt.formatted), 1)]),
                                _: 1
                            }, 8, ["label"])])]),
                            _: 1
                        })) : A("", !0)]),
                        _: 1
                    }, 8, ["uuid"])]),
                    _: 1
                })], 64)
            }
        }
    });
export {
    E as
    default
};