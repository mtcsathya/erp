import {
    u as j,
    m as y,
    L as w,
    q as C,
    r as c,
    t as q,
    o as m,
    w as b,
    d as s,
    b as V,
    f as v,
    e as u,
    i as H,
    j as I,
    k as O,
    p as D,
    a as P,
    v as F,
    x as f,
    F as S,
    y as E,
    n as T,
    N as z
} from "./app-BYBn2zfx.js";
const M = {
        class: "grid grid-cols-3 gap-6"
    },
    J = {
        class: "col-span-3 sm:col-span-1"
    },
    K = {
        class: "col-span-3 sm:col-span-1"
    },
    Q = {
        class: "col-span-3 sm:col-span-1"
    },
    W = {
        class: "col-span-3 sm:col-span-1"
    },
    X = {
        __name: "Filter",
        props: {
            initUrl: {
                type: String,
                default: ""
            },
            preRequisites: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        emits: ["hide"],
        setup(U, {
            emit: g
        }) {
            const R = j(),
                _ = g,
                $ = U,
                i = {
                    name: "",
                    batch: ""
                },
                r = y({
                    ...i
                }),
                l = w($.initUrl);
            y({
                selectedBatch: null
            });
            const B = y({
                batch: "",
                isLoaded: !R.query.batch
            });
            return C(async () => {
                B.batch = R.query.batch, B.isLoaded = !0
            }), (p, o) => {
                const h = c("BaseSelect"),
                    e = c("BaseInput"),
                    n = c("FilterForm");
                return m(), q(n, {
                    "init-form": i,
                    form: r,
                    onHide: o[7] || (o[7] = t => _("hide"))
                }, {
                    default: b(() => [s("div", M, [s("div", J, [B.isLoaded ? (m(), q(h, {
                        key: 0,
                        name: "batch",
                        label: p.$trans("global.select", {
                            attribute: p.$trans("academic.batch.batch")
                        }),
                        modelValue: r.batch,
                        "onUpdate:modelValue": o[0] || (o[0] = t => r.batch = t),
                        error: v(l).batch,
                        "onUpdate:error": o[1] || (o[1] = t => v(l).batch = t),
                        "value-prop": "uuid",
                        "label-prop": "name",
                        options: U.preRequisites.batches,
                        onSelected: p.onBatchSelect,
                        onRemoved: p.onBatchRemove
                    }, null, 8, ["label", "modelValue", "error", "options", "onSelected", "onRemoved"])) : V("", !0)]), s("div", K, [u(e, {
                        type: "text",
                        modelValue: r.name,
                        "onUpdate:modelValue": o[2] || (o[2] = t => r.name = t),
                        name: "name",
                        label: p.$trans("student.props.name")
                    }, null, 8, ["modelValue", "label"])]), s("div", Q, [u(h, {
                        name: "sort",
                        label: p.$trans("general.sort"),
                        modelValue: r.sort,
                        "onUpdate:modelValue": o[3] || (o[3] = t => r.sort = t),
                        error: v(l).sort,
                        "onUpdate:error": o[4] || (o[4] = t => v(l).sort = t),
                        options: U.preRequisites.sortBy
                    }, null, 8, ["label", "modelValue", "error", "options"])]), s("div", W, [u(h, {
                        name: "order",
                        label: p.$trans("general.order"),
                        modelValue: r.order,
                        "onUpdate:modelValue": o[5] || (o[5] = t => r.order = t),
                        error: v(l).order,
                        "onUpdate:error": o[6] || (o[6] = t => v(l).order = t),
                        options: U.preRequisites.orderBy
                    }, null, 8, ["label", "modelValue", "error", "options"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    Y = {
        class: "p-2"
    },
    Z = {
        class: "col-span-3 text-center"
    },
    ee = {
        class: "text-sm font-bold dark:text-gray-300"
    },
    te = {
        class: "col-span-3 sm:col-span-1"
    },
    oe = {
        class: "text-xs font-bold text-center dark:text-gray-300"
    },
    ae = {
        class: "col-span-3 sm:col-span-1"
    },
    se = {
        class: "text-xs font-bold text-center dark:text-gray-300"
    },
    re = {
        class: "col-span-3 sm:col-span-1"
    },
    ne = {
        class: "text-xs font-bold text-center dark:text-gray-300"
    },
    le = {
        name: "StudentPhoto"
    },
    ie = Object.assign(le, {
        setup(U) {
            const g = j();
            H();
            const R = I();
            O("emitter");
            const _ = {
                    batch: "",
                    students: []
                },
                $ = "student/photo/",
                i = D(!1),
                r = y({
                    batches: []
                });
            w($);
            const l = y({
                ..._
            });
            y({});
            const B = async () => {
                i.value = !0, await R.dispatch($ + "preRequisite").then(e => {
                    i.value = !1, Object.assign(r, e)
                }).catch(e => {
                    i.value = !1
                })
            }, p = async () => {
                i.value = !0, await R.dispatch($ + "fetch", {
                    params: g.query
                }).then(e => {
                    i.value = !1, _.batch = g.query.batch, _.students = e.data, Object.assign(l, z(_))
                }).catch(e => {
                    i.value = !1
                })
            }, o = (e, n, t) => {
                t == "student" ? e.photo = n : t == "father" ? e.fatherPhoto = n : t == "mother" && (e.motherPhoto = n)
            }, h = (e, n, t) => {
                t == "student" ? e.photo = n : t == "father" ? e.fatherPhoto = n : t == "mother" && (e.motherPhoto = n)
            };
            return C(async () => {
                await B(), g.query.batch && await p()
            }), (e, n) => {
                const t = c("PageHeaderAction"),
                    G = c("PageHeader"),
                    L = c("ParentTransition"),
                    N = c("BaseAlert"),
                    k = c("ImageUpload"),
                    x = c("BaseCard");
                return m(), P(S, null, [u(G, {
                    title: e.$trans(v(g).meta.label),
                    navs: [{
                        label: e.$trans("student.student"),
                        path: "Student"
                    }]
                }, {
                    default: b(() => [u(t)]),
                    _: 1
                }, 8, ["title", "navs"]), u(L, {
                    appear: "",
                    visibility: !0
                }, {
                    default: b(() => [u(X, {
                        onAfterFilter: p,
                        "pre-requisites": r,
                        "init-url": $
                    }, null, 8, ["pre-requisites"])]),
                    _: 1
                }), u(x, {
                    "no-padding": "",
                    "no-content-padding": "",
                    "is-loading": i.value
                }, {
                    title: b(() => [F(f(e.$trans("global.update", {
                        attribute: e.$trans("contact.props.photo")
                    })), 1)]),
                    action: b(() => [...n[0] || (n[0] = [])]),
                    default: b(() => [s("div", Y, [l.students.length == 0 ? (m(), q(N, {
                        key: 0,
                        size: "xs",
                        design: "error"
                    }, {
                        default: b(() => [F(f(e.$trans("general.errors.record_not_found")), 1)]),
                        _: 1
                    })) : V("", !0)]), l.students.length > 0 ? (m(!0), P(S, {
                        key: 0
                    }, E(l.students, (a, A) => (m(), P("div", {
                        class: T(["grid grid-cols-3 gap-6", {
                            "mt-4": A > 0
                        }]),
                        key: a.uuid
                    }, [s("div", Z, [s("div", ee, f(a.name) + " (" + f(a.codeNumber) + ") ", 1)]), s("div", te, [s("p", oe, f(e.$trans("student.student")), 1), u(k, {
                        label: e.$trans("contact.props.photo"),
                        src: a.photo,
                        "upload-path": `students/${a.uuid}/photo`,
                        "remove-path": `students/${a.uuid}/photo`,
                        onUploaded: d => o(a, d, "student"),
                        onRemoved: d => h(a, d, "student")
                    }, null, 8, ["label", "src", "upload-path", "remove-path", "onUploaded", "onRemoved"])]), s("div", ae, [s("p", se, f(e.$trans("list.family_relations.father")), 1), a.fatherGuardianUuid ? (m(), q(k, {
                        key: 0,
                        label: e.$trans("contact.props.photo"),
                        src: a.fatherPhoto,
                        "upload-path": `guardians/${a.fatherGuardianUuid}/photo`,
                        "remove-path": `guardians/${a.fatherGuardianUuid}/photo`,
                        onUploaded: d => o(a, d, "father"),
                        onRemoved: d => h(a, d, "father")
                    }, null, 8, ["label", "src", "upload-path", "remove-path", "onUploaded", "onRemoved"])) : V("", !0)]), s("div", re, [s("p", ne, f(e.$trans("list.family_relations.mother")), 1), a.motherGuardianUuid ? (m(), q(k, {
                        key: 0,
                        label: e.$trans("contact.props.photo"),
                        src: a.motherPhoto,
                        "upload-path": `guardians/${a.motherGuardianUuid}/photo`,
                        "remove-path": `guardians/${a.motherGuardianUuid}/photo`,
                        onUploaded: d => o(a, d, "mother"),
                        onRemoved: d => h(a, d, "mother")
                    }, null, 8, ["label", "src", "upload-path", "remove-path", "onUploaded", "onRemoved"])) : V("", !0)])], 2))), 128)) : V("", !0)]),
                    _: 1
                }, 8, ["is-loading"])], 64)
            }
        }
    });
export {
    ie as
    default
};