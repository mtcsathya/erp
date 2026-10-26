import {
    j as B,
    u as w,
    i as S,
    m as v,
    r as o,
    a as P,
    o as m,
    e as t,
    w as a,
    f as i,
    t as V,
    b as k,
    d as y,
    v as s,
    x as l,
    F as A
} from "./app-BYBn2zfx.js";
const H = {
        class: "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"
    },
    I = {
        name: "FinanceFeeComponentShow"
    },
    j = Object.assign(I, {
        setup(N) {
            B();
            const c = w(),
                p = S(),
                u = {},
                f = "finance/feeComponent/",
                n = v({
                    ...u
                }),
                _ = e => {
                    Object.assign(n, e)
                };
            return (e, d) => {
                const b = o("PageHeaderAction"),
                    g = o("PageHeader"),
                    r = o("BaseDataView"),
                    h = o("ShowButton"),
                    C = o("BaseCard"),
                    F = o("ShowItem"),
                    $ = o("ParentTransition");
                return m(), P(A, null, [t(g, {
                    title: e.$trans(i(c).meta.trans, {
                        attribute: e.$trans(i(c).meta.label)
                    }),
                    navs: [{
                        label: e.$trans("finance.finance"),
                        path: "Finance"
                    }, {
                        label: e.$trans("finance.fee_component.fee_component"),
                        path: "FinanceFeeComponentList"
                    }]
                }, {
                    default: a(() => [t(b, {
                        name: "FinanceFeeComponent",
                        title: e.$trans("finance.fee_component.fee_component"),
                        actions: ["list"]
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["title", "navs"]), t($, {
                    appear: "",
                    visibility: !0
                }, {
                    default: a(() => [t(F, {
                        "init-url": f,
                        uuid: i(c).params.uuid,
                        onSetItem: _,
                        onRedirectTo: d[0] || (d[0] = R => i(p).push({
                            name: "FinanceFeeComponent"
                        }))
                    }, {
                        default: a(() => [n.uuid ? (m(), V(C, {
                            key: 0
                        }, {
                            title: a(() => [s(l(n.name), 1)]),
                            footer: a(() => [t(h)]),
                            default: a(() => [y("dl", H, [t(r, {
                                label: e.$trans("finance.fee_component.props.name")
                            }, {
                                default: a(() => [s(l(n.name), 1)]),
                                _: 1
                            }, 8, ["label"]), t(r, {
                                label: e.$trans("finance.fee_head.fee_head")
                            }, {
                                default: a(() => [s(l(n.head?.name || "-"), 1)]),
                                _: 1
                            }, 8, ["label"]), t(r, {
                                label: e.$trans("finance.tax.tax")
                            }, {
                                default: a(() => [s(l(n.tax?.codeWithRate || "-"), 1)]),
                                _: 1
                            }, 8, ["label"]), t(r, {
                                class: "col-span-1 sm:col-span-2",
                                label: e.$trans("finance.fee_component.props.description")
                            }, {
                                default: a(() => [s(l(n.description), 1)]),
                                _: 1
                            }, 8, ["label"]), t(r, {
                                label: e.$trans("general.created_at")
                            }, {
                                default: a(() => [s(l(n.createdAt.formatted), 1)]),
                                _: 1
                            }, 8, ["label"]), t(r, {
                                label: e.$trans("general.updated_at")
                            }, {
                                default: a(() => [s(l(n.updatedAt.formatted), 1)]),
                                _: 1
                            }, 8, ["label"])])]),
                            _: 1
                        })) : k("", !0)]),
                        _: 1
                    }, 8, ["uuid"])]),
                    _: 1
                })], 64)
            }
        }
    });
export {
    j as
    default
};