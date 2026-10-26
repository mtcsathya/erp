import {
    u as C,
    L as B,
    m as F,
    r as p,
    B as U,
    t as k,
    o as u,
    w as c,
    d as l,
    e as i,
    f as o,
    C as g,
    a as _,
    N as P,
    F as T
} from "./app-BYBn2zfx.js";
const h = {
        class: "grid grid-cols-3 gap-6"
    },
    j = {
        class: "col-span-3 sm:col-span-1"
    },
    w = {
        class: "col-span-3 sm:col-span-1"
    },
    A = {
        class: "col-span-3 sm:col-span-1"
    },
    O = {
        class: "space-x-2"
    },
    q = {
        key: 0
    },
    R = {
        key: 1
    },
    D = {
        class: "col-span-3 sm:col-span-1"
    },
    E = {
        name: "FinanceFeeComponentForm"
    },
    N = Object.assign(E, {
        setup(y) {
            const m = C(),
                s = {
                    name: "",
                    feeHead: "",
                    tax: "",
                    taxType: "inclusive",
                    hsnCode: ""
                },
                f = "finance/feeComponent/",
                r = B(f),
                d = F({}),
                t = F({
                    ...s
                }),
                V = a => {
                    Object.assign(d, a)
                },
                $ = a => {
                    Object.assign(s, {
                        ...a,
                        feeHead: a.head?.uuid,
                        tax: a.tax?.uuid,
                        taxType: a.taxType?.value,
                        hsnCode: a.hsnCode
                    }), Object.assign(t, P(s))
                };
            return (a, e) => {
                const v = p("BaseInput"),
                    b = p("BaseSelect"),
                    H = p("FormAction"),
                    x = U("tooltip");
                return u(), k(H, {
                    "pre-requisites": !0,
                    onSetPreRequisites: V,
                    "init-url": f,
                    "init-form": s,
                    form: t,
                    setForm: $,
                    redirect: "FinanceFeeComponent"
                }, {
                    default: c(() => [l("div", h, [l("div", j, [i(v, {
                        type: "text",
                        modelValue: t.name,
                        "onUpdate:modelValue": e[0] || (e[0] = n => t.name = n),
                        name: "name",
                        label: a.$trans("finance.fee_component.props.name"),
                        error: o(r).name,
                        "onUpdate:error": e[1] || (e[1] = n => o(r).name = n),
                        autofocus: ""
                    }, null, 8, ["modelValue", "label", "error"])]), l("div", w, [i(b, {
                        disabled: !!o(m).params.uuid,
                        modelValue: t.feeHead,
                        "onUpdate:modelValue": e[2] || (e[2] = n => t.feeHead = n),
                        name: "feeHead",
                        label: a.$trans("finance.fee_head.fee_head"),
                        "label-prop": "name",
                        "value-prop": "uuid",
                        options: d.feeHeads,
                        error: o(r).feeHead,
                        "onUpdate:error": e[3] || (e[3] = n => o(r).feeHead = n)
                    }, null, 8, ["disabled", "modelValue", "label", "options", "error"])]), l("div", A, [i(b, {
                        modelValue: t.tax,
                        "onUpdate:modelValue": e[5] || (e[5] = n => t.tax = n),
                        name: "tax",
                        label: a.$trans("finance.tax.tax"),
                        "label-prop": "name",
                        "value-prop": "uuid",
                        options: d.taxes,
                        error: o(r).tax,
                        "onUpdate:error": e[6] || (e[6] = n => o(r).tax = n)
                    }, {
                        "additional-label": c(() => [l("div", O, [l("span", {
                            class: "cursor-pointer",
                            onClick: e[4] || (e[4] = n => t.taxType = t.taxType === "inclusive" ? "exclusive" : "inclusive")
                        }, [t.taxType === "inclusive" ? g((u(), _("span", q, [...e[9] || (e[9] = [l("i", {
                            class: "fas fa-arrow-circle-left text-gray-900 dark:text-gray-300"
                        }, null, -1)])])), [
                            [x, a.$trans("finance.tax.types.inclusive")]
                        ]) : g((u(), _("span", R, [...e[10] || (e[10] = [l("i", {
                            class: "fas fa-arrow-circle-right text-gray-900 dark:text-gray-300"
                        }, null, -1)])])), [
                            [x, a.$trans("finance.tax.props.exclusive")]
                        ])])])]),
                        _: 1
                    }, 8, ["modelValue", "label", "options", "error"])]), l("div", D, [i(v, {
                        type: "text",
                        modelValue: t.hsnCode,
                        "onUpdate:modelValue": e[7] || (e[7] = n => t.hsnCode = n),
                        name: "hsnCode",
                        label: a.$trans("finance.tax.props.hsn_code"),
                        error: o(r).hsnCode,
                        "onUpdate:error": e[8] || (e[8] = n => o(r).hsnCode = n)
                    }, null, 8, ["modelValue", "label", "error"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    }),
    S = {
        name: "FinanceFeeComponentAction"
    },
    L = Object.assign(S, {
        setup(y) {
            const m = C();
            return (s, f) => {
                const r = p("PageHeaderAction"),
                    d = p("PageHeader"),
                    t = p("ParentTransition");
                return u(), _(T, null, [i(d, {
                    title: s.$trans(o(m).meta.trans, {
                        attribute: s.$trans(o(m).meta.label)
                    }),
                    navs: [{
                        label: s.$trans("finance.finance"),
                        path: "Finance"
                    }, {
                        label: s.$trans("finance.fee_component.fee_component"),
                        path: "FinanceFeeComponentList"
                    }]
                }, {
                    default: c(() => [i(r, {
                        name: "FinanceFeeComponent",
                        title: s.$trans("finance.fee_component.fee_component"),
                        actions: ["list"]
                    }, null, 8, ["title"])]),
                    _: 1
                }, 8, ["title", "navs"]), i(t, {
                    appear: "",
                    visibility: !0
                }, {
                    default: c(() => [i(N)]),
                    _: 1
                })], 64)
            }
        }
    });
export {
    L as
    default
};