import {
    u as T,
    L as S,
    m as g,
    q as E,
    r as d,
    t as C,
    o as b,
    w as u,
    d as r,
    a as v,
    b as D,
    e as l,
    f as s,
    x as V,
    F as B,
    y as I,
    v as h,
    P as M,
    N as y
} from "./app-BYBn2zfx.js";
const z = {
        class: "grid grid-cols-3 gap-6"
    },
    G = {
        class: "col-span-3 sm:col-span-1"
    },
    J = {
        class: "col-span-3 sm:col-span-1"
    },
    K = {
        class: "col-span-3 sm:col-span-1"
    },
    Q = {
        class: "col-span-3"
    },
    W = {
        class: "mt-4 grid grid-cols-3 gap-6"
    },
    X = {
        class: "col-span-3 sm:col-span-1"
    },
    Y = {
        class: "dark:text-gray-400"
    },
    Z = ["onClick"],
    ee = {
        class: "mt-4 grid grid-cols-3 gap-4"
    },
    ae = {
        class: "col-span-3 sm:col-span-1"
    },
    oe = {
        class: "col-span-3 sm:col-span-1"
    },
    ne = {
        class: "col-span-3 sm:col-span-1"
    },
    te = {
        class: "mt-4"
    },
    se = {
        name: "FinanceTaxForm"
    },
    re = Object.assign(se, {
        setup(k) {
            const f = T(),
                p = {
                    hasComponents: !1,
                    name: "",
                    code: "",
                    rate: "",
                    components: [],
                    description: ""
                },
                $ = {
                    name: "",
                    code: "",
                    rate: ""
                },
                _ = "finance/tax/",
                t = S(_),
                U = g({});
            g({});
            const n = g({
                    ...p
                }),
                P = g({
                    isLoaded: !f.params.uuid
                }),
                w = o => {
                    Object.assign(U, o), Object.assign(n, y(p))
                },
                x = o => {
                    let a = [];
                    o.components.forEach(c => {
                        a.push({
                            ...c,
                            rate: c.rate.value
                        })
                    }), Object.assign(p, {
                        ...o,
                        rate: o.rate.value,
                        components: a
                    }), Object.assign(n, y(p)), P.isLoaded = !0
                },
                F = () => {
                    n.components.push({
                        ...$
                    })
                },
                j = async o => {
                    await M() && (n.components.length == 1 ? n.components = [$] : n.components.splice(o, 1))
                }, A = () => {};
            return E(() => {
                f.params.uuid || F()
            }), (o, a) => {
                const c = d("BaseInput"),
                    H = d("BaseTextarea"),
                    O = d("BaseSwitch"),
                    R = d("HelperText"),
                    q = d("BaseFieldset"),
                    L = d("BaseBadge"),
                    N = d("FormAction");
                return b(), C(N, {
                    "pre-requisites": !1,
                    onSetPreRequisites: w,
                    "init-url": _,
                    "init-form": p,
                    form: n,
                    "set-form": x,
                    onSubmitted: A,
                    redirect: "FinanceTax"
                }, {
                    default: u(() => [r("div", z, [r("div", G, [l(c, {
                        type: "text",
                        modelValue: n.name,
                        "onUpdate:modelValue": a[0] || (a[0] = e => n.name = e),
                        name: "name",
                        label: o.$trans("finance.tax.props.name"),
                        error: s(t).name,
                        "onUpdate:error": a[1] || (a[1] = e => s(t).name = e),
                        autofocus: ""
                    }, null, 8, ["modelValue", "label", "error"])]), r("div", J, [l(c, {
                        type: "text",
                        modelValue: n.code,
                        "onUpdate:modelValue": a[2] || (a[2] = e => n.code = e),
                        name: "code",
                        label: o.$trans("finance.tax.props.code"),
                        error: s(t).code,
                        "onUpdate:error": a[3] || (a[3] = e => s(t).code = e)
                    }, null, 8, ["modelValue", "label", "error"])]), r("div", K, [l(c, {
                        type: "number",
                        modelValue: n.rate,
                        "onUpdate:modelValue": a[4] || (a[4] = e => n.rate = e),
                        name: "rate",
                        label: o.$trans("finance.tax.props.rate"),
                        error: s(t).rate,
                        "onUpdate:error": a[5] || (a[5] = e => s(t).rate = e)
                    }, null, 8, ["modelValue", "label", "error"])]), r("div", Q, [l(H, {
                        modelValue: n.description,
                        "onUpdate:modelValue": a[6] || (a[6] = e => n.description = e),
                        name: "description",
                        label: o.$trans("finance.tax.props.description"),
                        error: s(t).description,
                        "onUpdate:error": a[7] || (a[7] = e => s(t).description = e)
                    }, null, 8, ["modelValue", "label", "error"])])]), r("div", W, [r("div", X, [l(O, {
                        modelValue: n.hasComponents,
                        "onUpdate:modelValue": a[8] || (a[8] = e => n.hasComponents = e),
                        name: "hasComponents",
                        label: o.$trans("global.has_attribute", {
                            attribute: o.$trans("finance.tax.props.components")
                        }),
                        error: s(t).hasComponents,
                        "onUpdate:error": a[9] || (a[9] = e => s(t).hasComponents = e)
                    }, null, 8, ["modelValue", "label", "error"]), l(R, null, {
                        default: u(() => [r("span", Y, V(o.$trans("finance.tax.has_components_info")), 1)]),
                        _: 1
                    })])]), n.hasComponents ? (b(), v(B, {
                        key: 0
                    }, [(b(!0), v(B, null, I(n.components, (e, m) => (b(), C(q, {
                        class: "mt-4",
                        key: e.uuid
                    }, {
                        legend: u(() => [h(V(o.$trans("finance.tax.props.components")) + " " + V(m + 1) + ". ", 1), r("span", {
                            class: "text-danger ml-2 cursor-pointer",
                            onClick: i => j(m)
                        }, [...a[10] || (a[10] = [r("i", {
                            class: "fas fa-times-circle"
                        }, null, -1)])], 8, Z)]),
                        default: u(() => [r("div", ee, [r("div", ae, [l(c, {
                            modelValue: e.name,
                            "onUpdate:modelValue": i => e.name = i,
                            name: `components.${m}.name`,
                            label: o.$trans("finance.tax.props.name"),
                            error: s(t)[`components.${m}.name`],
                            "onUpdate:error": i => s(t)[`components.${m}.name`] = i
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "label", "error", "onUpdate:error"])]), r("div", oe, [l(c, {
                            modelValue: e.code,
                            "onUpdate:modelValue": i => e.code = i,
                            name: `components.${m}.code`,
                            label: o.$trans("finance.tax.props.code"),
                            error: s(t)[`components.${m}.code`],
                            "onUpdate:error": i => s(t)[`components.${m}.code`] = i
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "label", "error", "onUpdate:error"])]), r("div", ne, [l(c, {
                            type: "number",
                            step: .01,
                            modelValue: e.rate,
                            "onUpdate:modelValue": i => e.rate = i,
                            name: `components.${m}.rate`,
                            label: o.$trans("finance.tax.props.rate"),
                            error: s(t)[`components.${m}.rate`],
                            "onUpdate:error": i => s(t)[`components.${m}.rate`] = i
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "label", "error", "onUpdate:error"])])])]),
                        _: 2
                    }, 1024))), 128)), r("div", te, [l(L, {
                        design: "primary",
                        onClick: F,
                        class: "cursor-pointer"
                    }, {
                        default: u(() => [h(V(o.$trans("global.add", {
                            attribute: o.$trans("finance.tax.props.components")
                        })), 1)]),
                        _: 1
                    })])], 64)) : D("", !0)]),
                    _: 1
                }, 8, ["form"])
            }
        }
    }),
    le = {
        name: "FinanceTaxAction"
    },
    pe = Object.assign(le, {
        setup(k) {
            const f = T();
            return (p, $) => {
                const _ = d("PageHeaderAction"),
                    t = d("PageHeader"),
                    U = d("ParentTransition");
                return b(), v(B, null, [l(t, {
                    title: p.$trans(s(f).meta.trans, {
                        attribute: p.$trans(s(f).meta.label)
                    }),
                    navs: [{
                        label: p.$trans("finance.finance"),
                        path: "Finance"
                    }, {
                        label: p.$trans("finance.tax.tax"),
                        path: "FinanceTaxList"
                    }]
                }, {
                    default: u(() => [l(_, {
                        name: "FinanceTax",
                        title: p.$trans("finance.tax.tax"),
                        actions: ["list"]
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["title", "navs"]), l(U, {
                    appear: "",
                    visibility: !0
                }, {
                    default: u(() => [l(re)]),
                    _: 1
                })], 64)
            }
        }
    });
export {
    pe as
    default
};