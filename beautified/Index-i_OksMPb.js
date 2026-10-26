import {
    u as P,
    j as W,
    p as E,
    L as G,
    m as A,
    q as J,
    r as c,
    t as j,
    o as n,
    w as o,
    d as g,
    b as _,
    f,
    v,
    a as w,
    x as l,
    e as m,
    i as ee,
    k as te,
    F as D,
    y as T,
    af as ae,
    N as I,
    P as se
} from "./app-BYBn2zfx.js";
import {
    _ as oe
} from "./ModuleDropdown-C8cyNPyi.js";
const ne = {
        class: "grid grid-cols-3 gap-6"
    },
    re = {
        class: "col-span-3 sm:col-span-1"
    },
    le = {
        key: 0,
        class: "ml-1"
    },
    ie = {
        key: 0,
        class: "ml-1"
    },
    ue = {
        class: "col-span-3 sm:col-span-1"
    },
    me = {
        class: "col-span-3 sm:col-span-1"
    },
    ce = {
        class: "col-span-3 sm:col-span-1"
    },
    de = {
        class: "col-span-3 sm:col-span-1"
    },
    pe = {
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
        emits: ["hide", "cancel"],
        setup(C, {
            emit: h
        }) {
            const i = P(),
                r = W(),
                V = h,
                S = C,
                q = {
                    exam: "",
                    attempt: "first",
                    batch: "",
                    subject: "",
                    showAllStudent: !1
                },
                d = E(!1),
                y = G(S.initUrl),
                a = A({
                    ...q
                }),
                p = A({
                    exams: S.preRequisites.exams,
                    subjects: []
                }),
                $ = A({
                    exam: "",
                    batch: "",
                    subject: "",
                    isLoaded: !(i.query.exam && i.query.batch && i.query.subject)
                }),
                N = () => {
                    V("cancel")
                },
                x = async u => {
                    if (!u) {
                        a.batch = "", a.subject = "", p.subjects = [];
                        return
                    }
                    a.batch = u || "", p.subjects = [], a.subject = "", d.value = !0, await r.dispatch("academic/batch/listSubjects", {
                        uuid: u || ""
                    }).then(s => {
                        p.subjects = s, d.value = !1
                    }).catch(s => {
                        d.value = !1
                    })
                };
            return J(async () => {
                $.exam = i.query.exam, a.exam = i.query.exam, $.batch = i.query.batch, a.batch = i.query.batch, i.query.batch && (await x(i.query.batch), $.subject = i.query.subject, a.subject = i.query.subject), $.isLoaded = !0
            }), (u, s) => {
                const t = c("BaseSelect"),
                    B = c("BaseSelectSearch"),
                    F = c("BaseSwitch"),
                    O = c("FilterForm");
                return n(), j(O, {
                    "init-form": q,
                    form: a,
                    onCancel: N,
                    onHide: s[9] || (s[9] = e => V("hide"))
                }, {
                    default: o(() => [g("div", ne, [g("div", re, [$.isLoaded ? (n(), j(t, {
                        key: 0,
                        modelValue: a.exam,
                        "onUpdate:modelValue": s[0] || (s[0] = e => a.exam = e),
                        name: "exam",
                        label: u.$trans("exam.exam"),
                        "value-prop": "uuid",
                        options: C.preRequisites.exams,
                        error: f(y).exam,
                        "onUpdate:error": s[1] || (s[1] = e => f(y).exam = e)
                    }, {
                        selectedOption: o(e => [v(l(e.value.name) + " ", 1), e.value.term ? (n(), w("span", le, "(" + l(e.value.term?.division?.name || u.$trans("general.all")) + ")", 1)) : _("", !0)]),
                        listOption: o(e => [v(l(e.option.name) + " ", 1), e.option.term ? (n(), w("span", ie, "(" + l(e.option.term?.division?.name || u.$trans("general.all")) + ")", 1)) : _("", !0)]),
                        _: 1
                    }, 8, ["modelValue", "label", "options", "error"])) : _("", !0)]), g("div", ue, [$.isLoaded ? (n(), j(t, {
                        key: 0,
                        modelValue: a.attempt,
                        "onUpdate:modelValue": s[2] || (s[2] = e => a.attempt = e),
                        name: "attempt",
                        label: u.$trans("exam.schedule.props.attempt"),
                        options: C.preRequisites.attempts,
                        error: f(y).attempt,
                        "onUpdate:error": s[3] || (s[3] = e => f(y).attempt = e)
                    }, null, 8, ["modelValue", "label", "options", "error"])) : _("", !0)]), g("div", me, [$.isLoaded ? (n(), j(B, {
                        key: 0,
                        name: "batch",
                        label: u.$trans("global.select", {
                            attribute: u.$trans("academic.batch.batch")
                        }),
                        modelValue: a.batch,
                        "onUpdate:modelValue": s[4] || (s[4] = e => a.batch = e),
                        error: f(y).batch,
                        "onUpdate:error": s[5] || (s[5] = e => f(y).batch = e),
                        "value-prop": "uuid",
                        "init-search": $.batch,
                        "search-key": "course_batch",
                        "search-action": "academic/batch/list",
                        onChange: x
                    }, {
                        selectedOption: o(e => [v(l(e.value.course.name) + " " + l(e.value.name), 1)]),
                        listOption: o(e => [v(l(e.option.course.nameWithTerm) + " " + l(e.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "error", "init-search"])) : _("", !0)]), g("div", ce, [m(t, {
                        modelValue: a.subject,
                        "onUpdate:modelValue": s[6] || (s[6] = e => a.subject = e),
                        name: "subject",
                        label: u.$trans("academic.subject.subject"),
                        "label-prop": "name",
                        "value-prop": "uuid",
                        options: p.subjects,
                        error: f(y).subject,
                        "onUpdate:error": s[7] || (s[7] = e => f(y).subject = e)
                    }, null, 8, ["modelValue", "label", "options", "error"])]), g("div", de, [m(F, {
                        vertical: "",
                        modelValue: a.showAllStudent,
                        "onUpdate:modelValue": s[8] || (s[8] = e => a.showAllStudent = e),
                        name: "showAllStudent",
                        label: u.$trans("global.list_all", {
                            attribute: u.$trans("student.student")
                        })
                    }, null, 8, ["modelValue", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    be = {
        class: "p-2 space-y-2"
    },
    fe = {
        class: "divide-y divide-gray-200 dark:divide-gray-700"
    },
    he = {
        class: "col-span-4 sm:col-span-1"
    },
    ve = {
        class: "mt-1"
    },
    _e = {
        key: 0,
        class: "col-span-4 sm:col-span-3"
    },
    ye = {
        class: "flex flex-col sm:flex-row gap-2"
    },
    ge = {
        key: 0,
        class: "mt-2"
    },
    $e = {
        name: "ExamMark"
    },
    Ve = Object.assign($e, {
        setup(C) {
            const h = P();
            ee();
            const i = W();
            te("emitter");
            const r = {
                    exam: "",
                    batch: "",
                    subject: "",
                    students: [],
                    attempt: "first",
                    showAllStudent: !1
                },
                V = "exam/mark/",
                S = G(V),
                q = E(!1),
                d = E(!1),
                y = A({
                    attempts: [],
                    exams: []
                }),
                a = A({
                    ...r
                }),
                p = A({
                    meta: {},
                    showComment: !0
                }),
                $ = async () => {
                    d.value = !0, await i.dispatch(V + "preRequisite").then(t => {
                        d.value = !1, Object.assign(y, t)
                    }).catch(t => {
                        d.value = !1
                    })
                }, N = () => {
                    r.exam = "", r.batch = "", r.subject = "", r.students = [], r.attempt = "first", Object.assign(a, I(r))
                }, x = async () => {
                    !h.query.batch || !h.query.subject || (d.value = !0, await i.dispatch(V + "fetch", {
                        params: h.query
                    }).then(t => {
                        d.value = !1, r.exam = h.query.exam, r.batch = h.query.batch, r.subject = h.query.subject, r.students = t.data, r.attempt = h.query.attempt, r.showAllStudent = ae(h.query.showAllStudent), p.meta = t.meta, Object.assign(a, I(r))
                    }).catch(t => {
                        d.value = !1
                    }))
                }, u = async () => {
                    await se() && (d.value = !0, await i.dispatch(V + "remove", {
                        form: h.query
                    }).then(t => {
                        d.value = !1, p.meta.marksheetStatus = "pending", x()
                    }).catch(t => {
                        d.value = !1
                    }))
                }, s = t => {
                    p.meta.marksheetStatus = "pending"
                };
            return J(async () => {
                await $(), await x()
            }), (t, B) => {
                const F = c("BaseButton"),
                    O = c("PageHeaderAction"),
                    e = c("PageHeader"),
                    L = c("BaseAlert"),
                    K = c("BaseImport"),
                    H = c("ParentTransition"),
                    Q = c("BaseCheckbox"),
                    X = c("BaseDataView"),
                    z = c("BaseInput"),
                    Y = c("FormAction"),
                    Z = c("BaseCard");
                return n(), w(D, null, [m(e, {
                    title: t.$trans(f(h).meta.label),
                    navs: [{
                        label: t.$trans("exam.exam"),
                        path: "Exam"
                    }]
                }, {
                    default: o(() => [m(O, null, {
                        moduleOption: o(() => [m(oe)]),
                        default: o(() => [m(F, {
                            design: "white",
                            onClick: B[0] || (B[0] = b => q.value = !q.value)
                        }, {
                            default: o(() => [v(l(t.$trans("general.import")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["title", "navs"]), m(H, {
                    appear: "",
                    visibility: q.value
                }, {
                    default: o(() => [m(K, {
                        path: "exam/mark/import",
                        "additional-option": {},
                        "has-validation": !1,
                        onCancelled: B[1] || (B[1] = b => q.value = !1),
                        onHide: B[2] || (B[2] = b => q.value = !1),
                        onCompleted: x
                    }, {
                        header: o(() => [m(L, {
                            size: "xs",
                            design: "info"
                        }, {
                            default: o(() => [v(l(t.$trans("general.import_info")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["visibility"]), m(H, {
                    appear: "",
                    visibility: !0
                }, {
                    default: o(() => [m(pe, {
                        onAfterFilter: x,
                        onCancel: N,
                        "init-url": V,
                        "pre-requisites": y
                    }, null, 8, ["pre-requisites"])]),
                    _: 1
                }), m(Z, {
                    "no-padding": "",
                    "no-content-padding": "",
                    "is-loading": d.value
                }, {
                    title: o(() => [v(l(t.$trans("exam.record")), 1)]),
                    action: o(() => [p.meta.markRecorded ? (n(), j(F, {
                        key: 0,
                        design: "error",
                        onClick: u
                    }, {
                        default: o(() => [v(l(t.$trans("global.remove", {
                            attribute: t.$trans("exam.assessment.props.mark")
                        })), 1)]),
                        _: 1
                    })) : _("", !0)]),
                    default: o(() => [g("div", be, [a.students.length == 0 ? (n(), j(L, {
                        key: 0,
                        size: "xs",
                        design: "error"
                    }, {
                        default: o(() => [v(l(t.$trans("general.errors.record_not_found")), 1)]),
                        _: 1
                    })) : _("", !0), p.meta.autoLockDate ? (n(), j(L, {
                        key: 1,
                        size: "xs",
                        design: p.meta.isLocked ? "error" : "info"
                    }, {
                        default: o(() => [v(l(t.$trans("exam.schedule.auto_lock_marks_period_info", {
                            attribute: p.meta.autoLockDate
                        })), 1)]),
                        _: 1
                    }, 8, ["design"])) : _("", !0), p.meta.marksheetStatus == "processed" ? (n(), j(L, {
                        key: 2,
                        size: "xs",
                        design: "info"
                    }, {
                        default: o(() => [v(l(t.$trans("exam.schedule.marksheet_processed_info")), 1)]),
                        _: 1
                    })) : _("", !0)]), a.students.length ? (n(), j(Y, {
                        key: 0,
                        "no-card": "",
                        "button-padding": "",
                        "keep-adding": !1,
                        "stay-on": !0,
                        "init-url": V,
                        action: "store",
                        "init-form": r,
                        form: a,
                        "after-submit": s
                    }, {
                        default: o(() => [g("div", fe, [(n(!0), w(D, null, T(a.students, (b, U) => (n(), w("div", {
                            class: "grid grid-cols-4 gap-6 px-4 py-2",
                            key: b.uuid
                        }, [g("div", he, [m(X, null, {
                            default: o(() => [v(l(b.name) + " (" + l(b.rollNumber || b.codeNumber) + ") ", 1), g("div", ve, [m(Q, {
                                modelValue: b.isNotApplicable,
                                "onUpdate:modelValue": k => b.isNotApplicable = k,
                                name: `students.${U}.isNotApplicable`,
                                label: t.$trans("global.is_not", {
                                    attribute: t.$trans("exam.schedule.props.applicable")
                                })
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "label"])])]),
                            _: 2
                        }, 1024)]), b.isNotApplicable ? _("", !0) : (n(), w("div", _e, [g("div", ye, [(n(!0), w(D, null, T(b.marks, (k, R) => (n(), j(z, {
                            type: "text",
                            modelValue: k.obtainedMark,
                            "onUpdate:modelValue": M => k.obtainedMark = M,
                            name: `students.${U}.marks.${R}.obtainedMark`,
                            label: k.name + " (" + k.maxMark + ")",
                            error: f(S)[`students.${U}.marks.${R}.obtainedMark`],
                            "onUpdate:error": M => f(S)[`students.${U}.marks.${R}.obtainedMark`] = M
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "label", "error", "onUpdate:error"]))), 256))]), p.showComment ? (n(), w("div", ge, [m(z, {
                            type: "text",
                            modelValue: b.comment,
                            "onUpdate:modelValue": k => b.comment = k,
                            name: `students.${U}.comment`,
                            placeholder: t.$trans("exam.comment"),
                            error: f(S)[`students.${U}.comment`],
                            "onUpdate:error": k => f(S)[`students.${U}.comment`] = k
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "placeholder", "error", "onUpdate:error"])])) : _("", !0)]))]))), 128))])]),
                        _: 1
                    }, 8, ["form"])) : _("", !0)]),
                    _: 1
                }, 8, ["is-loading"])], 64)
            }
        }
    });
export {
    Ve as
    default
};