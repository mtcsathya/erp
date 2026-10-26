import {
    u as te,
    j as oe,
    k as ae,
    m as T,
    p as x,
    L as se,
    q as ne,
    r as p,
    t as C,
    o as c,
    w as a,
    d as v,
    b as y,
    f as r,
    v as i,
    x as l,
    e as s,
    i as _e,
    H as Se,
    a as k,
    A as j,
    F as W,
    y as Z,
    ag as Ce,
    P as Fe,
    N as $e
} from "./app-BYBn2zfx.js";
import {
    i as ee,
    t as he,
    a as Ve
} from "./table-FwhM-Z75.js";
const ke = {
        class: "grid grid-cols-3 gap-6"
    },
    we = {
        class: "col-span-3 sm:col-span-1"
    },
    Be = {
        class: "col-span-3 sm:col-span-1"
    },
    Te = {
        class: "col-span-3 sm:col-span-1"
    },
    qe = {
        class: "col-span-3 sm:col-span-1"
    },
    He = {
        __name: "Filter",
        props: {
            initUrl: {
                type: String,
                default: ""
            },
            preRequisites: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["hide"],
        setup(P, {
            emit: _
        }) {
            const S = te(),
                U = oe(),
                w = _,
                d = ae("$trans"),
                q = P,
                B = {
                    name: "",
                    batch: "",
                    groups: [],
                    action: "assign",
                    existingFeeStructure: "",
                    showDetail: !0
                },
                u = T({
                    ...B
                }),
                g = T({
                    availableFeeStructures: [{
                        label: d("general.unassigned"),
                        value: "unassigned"
                    }]
                }),
                F = x(!1),
                n = se(q.initUrl),
                h = T({
                    batch: "",
                    isLoaded: !(S.query.batch || S.query.groups || S.query.existingFeeStructure)
                }),
                m = async I => {
                    let b = "studying";
                    u.existingFeeStructure = "", u.showAllStudent && (b = "all"), g.availableFeeStructures = [{
                        label: d("general.unassigned"),
                        value: "unassigned"
                    }], I && (F.value = !0, await U.dispatch("student/listAll", {
                        params: {
                            batch: I,
                            status: b,
                            withFeeStructure: !0
                        }
                    }).then(A => {
                        let O = A.filter($ => $.feeStructure).filter(($, D, f) => D === f.findIndex(E => E.feeStructure?.uuid === $.feeStructure?.uuid)).map($ => ({
                            label: $.feeStructure?.name,
                            value: $.feeStructure?.uuid
                        }));
                        g.availableFeeStructures.push(...O), F.value = !1
                    }).catch(A => {
                        F.value = !1
                    }))
                };
            return ne(async () => {
                h.batch = S.query.batch, S.query.batch && await m(S.query.batch), u.existingFeeStructure = S.query.existingFeeStructure || "", h.groups = S.query.groups ? S.query.groups.split(",") : [], h.isLoaded = !0
            }), (I, b) => {
                const A = p("BaseSelectSearch"),
                    O = p("BaseInput"),
                    $ = p("BaseSelect"),
                    D = p("FilterForm");
                return c(), C(D, {
                    "init-form": B,
                    form: u,
                    multiple: ["groups"],
                    onHide: b[5] || (b[5] = f => w("hide"))
                }, {
                    default: a(() => [v("div", ke, [v("div", we, [h.isLoaded ? (c(), C(A, {
                        key: 0,
                        name: "batch",
                        label: r(d)("global.select", {
                            attribute: r(d)("academic.batch.batch")
                        }),
                        modelValue: u.batch,
                        "onUpdate:modelValue": b[0] || (b[0] = f => u.batch = f),
                        error: r(n).batch,
                        "onUpdate:error": b[1] || (b[1] = f => r(n).batch = f),
                        "value-prop": "uuid",
                        "init-search": h.batch,
                        "search-key": "course_batch",
                        "search-action": "academic/batch/list",
                        onChange: m
                    }, {
                        selectedOption: a(f => [i(l(f.value.course.name) + " " + l(f.value.name), 1)]),
                        listOption: a(f => [i(l(f.option.course.nameWithTerm) + " " + l(f.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "error", "init-search"])) : y("", !0)]), v("div", Be, [s(O, {
                        type: "text",
                        modelValue: u.name,
                        "onUpdate:modelValue": b[2] || (b[2] = f => u.name = f),
                        name: "name",
                        label: r(d)("student.props.name")
                    }, null, 8, ["modelValue", "label"])]), v("div", Te, [s($, {
                        multiple: "",
                        modelValue: u.groups,
                        "onUpdate:modelValue": b[3] || (b[3] = f => u.groups = f),
                        name: "groups",
                        "label-prop": "name",
                        "value-prop": "uuid",
                        label: r(d)("student.group.group"),
                        options: P.preRequisites.groups
                    }, null, 8, ["modelValue", "label", "options"])]), v("div", qe, [h.isLoaded ? (c(), C($, {
                        key: 0,
                        modelValue: u.existingFeeStructure,
                        "onUpdate:modelValue": b[4] || (b[4] = f => u.existingFeeStructure = f),
                        name: "existingFeeStructure",
                        label: r(d)("finance.fee_structure.fee_structure"),
                        options: g.availableFeeStructures
                    }, null, 8, ["modelValue", "label", "options"])) : y("", !0)])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    Ue = {
        class: "w-48"
    },
    Ae = {
        class: "p-2"
    },
    Ne = {
        key: 0,
        class: "far fa-circle-check fa-lg text-success"
    },
    Ie = {
        key: 0
    },
    Oe = {
        key: 0,
        class: "grid grid-cols-3 gap-6"
    },
    De = {
        key: 0,
        class: "col-span-3 sm:col-span-1"
    },
    Re = {
        class: "col-span-3 sm:col-span-1"
    },
    Le = {
        class: "col-span-3 sm:col-span-1"
    },
    je = {
        class: "mt-4 grid grid-cols-3 gap-6"
    },
    xe = {
        class: "col-span-3 sm:col-span-1"
    },
    Pe = {
        key: 0,
        class: "col-span-3 sm:col-span-2"
    },
    Ee = {
        class: "mt-4 grid grid-cols-3 gap-6"
    },
    Ge = {
        class: "col-span-3 space-y-2"
    },
    ze = {
        class: "flex gap-2"
    },
    Me = {
        class: "flex flex-wrap gap-y-2"
    },
    We = {
        class: "grid grid-cols-3 gap-6"
    },
    Je = {
        class: "col-span-3 sm:col-span-1"
    },
    Ke = {
        class: "col-span-3 sm:col-span-1"
    },
    Qe = {
        key: 0,
        class: "col-span-3"
    },
    Xe = {
        name: "StudentFeeAllocation"
    },
    et = Object.assign(Xe, {
        setup(P) {
            const _ = te();
            _e();
            const S = oe();
            ae("emitter");
            const U = {
                    batch: "",
                    name: "",
                    selectAll: !1,
                    students: [],
                    feeConcession: "",
                    feeConcessionType: "",
                    transportCircle: "",
                    direction: "",
                    studentType: "",
                    optedFeeHeads: [],
                    removeConcession: !1,
                    action: ""
                },
                w = "student/feeAllocation/",
                d = x(!1),
                q = x(!1),
                B = x(!1),
                u = T({
                    feeStructures: [],
                    feeConcessions: [],
                    feeConcessionTypes: [],
                    transportCircles: [],
                    directions: [],
                    feeHeads: [],
                    groups: [],
                    studentTypes: []
                }),
                g = se(w),
                F = T({
                    data: []
                }),
                n = T({
                    ...U
                }),
                h = T({
                    importType: "installment_wise"
                }),
                m = T({
                    ...ee
                }),
                I = async () => {
                    d.value = !0, await S.dispatch(w + "preRequisite").then(o => {
                        d.value = !1, Object.assign(u, o)
                    }).catch(o => {
                        d.value = !1
                    })
                }, b = async () => {
                    d.value = !0, f(), await S.dispatch(w + "fetch", {
                        params: _.query,
                        feeStructure: _.query.existingFeeStructure
                    }).then(o => {
                        d.value = !1, n.batch = _.query.batch, n.name = _.query.name, Object.assign(F, o), m.pageItems = o.data.map(e => e.uuid), _.query.existingFeeStructure && _.query.existingFeeStructure !== "unassigned" ? $() : A()
                    }).catch(o => {
                        d.value = !1
                    })
                }, A = async () => {
                    d.value = !0, S.dispatch("academic/batch/getOptionalFeeHeads", {
                        uuid: n.batch
                    }).then(o => {
                        u.feeHeads = o
                    }).finally(() => {
                        d.value = !1
                    })
                }, O = async () => {
                    d.value = !0, S.dispatch("finance/feeStructure/getOptionalFeeHeads", {
                        uuid: n.feeStructure
                    }).then(o => {
                        u.feeHeads = o
                    }).finally(() => {
                        d.value = !1
                    })
                }, $ = async () => {
                    d.value = !0, S.dispatch("finance/feeStructure/getOptionalFeeHeads", {
                        uuid: _.query.existingFeeStructure
                    }).then(o => {
                        u.feeHeads = o
                    }).finally(() => {
                        d.value = !1
                    })
                }, D = () => {
                    Object.assign(n, $e(U))
                }, f = () => {
                    n.selectAll = !1, Object.assign(m, {
                        ...ee,
                        items: []
                    })
                }, E = () => {
                    m.global = !m.global, n.selectAll = m.global
                }, le = () => {
                    n.optedFeeHeads = u.feeHeads.map(o => o.uuid)
                }, re = () => {
                    n.optedFeeHeads = []
                }, ie = async () => {
                    await Fe() && (d.value = !0, await S.dispatch(w + "remove", {
                        form: n
                    }).then(o => {
                        d.value = !1, G()
                    }).catch(o => {
                        d.value = !1
                    }))
                }, ue = () => {
                    n.existingFeeStructure = _.query.existingFeeStructure
                }, G = async () => {
                    f(), D(), await b()
                };
            return Se(() => [m.items, m.pageItems], ([o, e], [z, J]) => {
                n.students = o, m.all = Ve(m)
            }), ne(async () => {
                await I(), _.query.batch && await b()
            }), (o, e) => {
                const z = p("DropdownItem"),
                    J = p("PageHeaderAction"),
                    de = p("PageHeader"),
                    K = p("BaseImport"),
                    R = p("ParentTransition"),
                    H = p("BaseSelect"),
                    ce = p("BaseAlert"),
                    M = p("BaseCard"),
                    Q = p("BaseArrayCheckbox"),
                    pe = p("BaseCheckbox"),
                    V = p("DataCell"),
                    N = p("TextMuted"),
                    me = p("DataRow"),
                    fe = p("DataTable"),
                    ge = p("BaseButton"),
                    X = p("BaseLabel"),
                    be = p("BaseRadioGroup"),
                    Y = p("FormAction"),
                    ve = p("BaseSwitch"),
                    ye = p("HelperText");
                return c(), k(W, null, [s(de, {
                    title: o.$trans(r(_).meta.label),
                    navs: [{
                        label: o.$trans("student.student"),
                        path: "Student"
                    }]
                }, {
                    default: a(() => [s(J, {
                        url: "students/",
                        name: "Student",
                        title: o.$trans(r(_).meta.label),
                        actions: [],
                        headers: []
                    }, {
                        dropdown: a(() => [r(j)("fee:set") ? (c(), C(z, {
                            key: 0,
                            icon: "fas fa-upload",
                            onClick: e[0] || (e[0] = t => q.value = !q.value)
                        }, {
                            default: a(() => [i(l(o.$trans("global.import", {
                                attribute: o.$trans("finance.fee_head.custom_fee")
                            })), 1)]),
                            _: 1
                        })) : y("", !0), r(j)("fee-payment:import") ? (c(), C(z, {
                            key: 1,
                            icon: "fas fa-upload",
                            onClick: e[1] || (e[1] = t => B.value = !B.value)
                        }, {
                            default: a(() => [i(l(o.$trans("global.import", {
                                attribute: o.$trans("finance.payment.payment")
                            })), 1)]),
                            _: 1
                        })) : y("", !0)]),
                        _: 1
                    }, 8, ["title"])]),
                    _: 1
                }, 8, ["title", "navs"]), r(j)("fee:set") ? (c(), C(R, {
                    key: 0,
                    appear: "",
                    visibility: q.value
                }, {
                    default: a(() => [s(K, {
                        path: "students/custom-fee-import",
                        onCancelled: e[2] || (e[2] = t => q.value = !1),
                        onHide: e[3] || (e[3] = t => q.value = !1),
                        onCompleted: e[4] || (e[4] = () => {})
                    }, {
                        title: a(() => [i(l(o.$trans("global.import", {
                            attribute: o.$trans("finance.fee_head.custom_fee")
                        })), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["visibility"])) : y("", !0), r(j)("fee-payment:import") ? (c(), C(R, {
                    key: 1,
                    appear: "",
                    visibility: B.value
                }, {
                    default: a(() => [s(K, {
                        path: "students/fee-payment-import",
                        "additional-option": {
                            importType: h.importType
                        },
                        onCancelled: e[6] || (e[6] = t => B.value = !1),
                        onHide: e[7] || (e[7] = t => B.value = !1),
                        onCompleted: e[8] || (e[8] = () => {})
                    }, {
                        title: a(() => [i(l(o.$trans("global.import", {
                            attribute: o.$trans("finance.payment.payment")
                        })), 1)]),
                        option: a(() => [v("div", Ue, [s(H, {
                            placeholder: o.$trans("general.type"),
                            modelValue: h.importType,
                            "onUpdate:modelValue": e[5] || (e[5] = t => h.importType = t),
                            name: "importType",
                            options: [{
                                value: "installment_wise",
                                label: o.$trans("student.fee.installment_wise")
                            }, {
                                value: "group_wise",
                                label: o.$trans("student.fee.group_wise")
                            }]
                        }, null, 8, ["placeholder", "modelValue", "options"])])]),
                        _: 1
                    }, 8, ["additional-option"])]),
                    _: 1
                }, 8, ["visibility"])) : y("", !0), s(R, {
                    appear: "",
                    visibility: !0
                }, {
                    default: a(() => [s(He, {
                        onAfterFilter: b,
                        "init-url": w,
                        "pre-requisites": u
                    }, null, 8, ["pre-requisites"])]),
                    _: 1
                }), F.data.length == 0 ? (c(), C(M, {
                    key: 2,
                    "no-padding": "",
                    "no-content-padding": "",
                    "is-loading": d.value
                }, {
                    title: a(() => [i(l(o.$trans("student.fee_allocation.fee_allocation")), 1)]),
                    default: a(() => [v("div", Ae, [s(ce, {
                        size: "xs",
                        design: "error"
                    }, {
                        default: a(() => [i(l(o.$trans("general.errors.record_not_found")), 1)]),
                        _: 1
                    })])]),
                    _: 1
                }, 8, ["is-loading"])) : y("", !0), F.data.length > 0 ? (c(), C(R, {
                    key: 3,
                    appear: "",
                    visibility: !0
                }, {
                    default: a(() => [s(fe, {
                        onToggleSelectAll: e[11] || (e[11] = t => m.items = r(he)(t, m)),
                        onToggleGlobalSelect: E,
                        selected: m,
                        header: F.headers,
                        meta: F.meta,
                        module: "student.fee_allocation",
                        onRefresh: b
                    }, {
                        actionButton: a(() => [...e[30] || (e[30] = [])]),
                        default: a(() => [(c(!0), k(W, null, Z(F.data, t => (c(), C(me, {
                            key: t.uuid
                        }, {
                            default: a(() => [s(V, {
                                name: "selectAll"
                            }, {
                                default: a(() => [m.global ? y("", !0) : (c(), C(Q, {
                                    key: 0,
                                    items: m.items,
                                    "onUpdate:items": e[9] || (e[9] = L => m.items = L),
                                    value: t.uuid
                                }, null, 8, ["items", "value"])), m.global ? (c(), C(pe, {
                                    key: 1,
                                    modelValue: m.global,
                                    "onUpdate:modelValue": e[10] || (e[10] = L => m.global = L)
                                }, null, 8, ["modelValue"])) : y("", !0)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "codeNumber"
                            }, {
                                default: a(() => [i(l(t.codeNumber) + " ", 1), t.feesCount ? (c(), k("i", Ne)) : y("", !0), s(N, {
                                    block: ""
                                }, {
                                    default: a(() => [i(l(t.joiningDate.formatted), 1)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "name"
                            }, {
                                default: a(() => [i(l(t.name) + " ", 1), s(N, {
                                    block: ""
                                }, {
                                    default: a(() => [i(l(t.gender.label), 1)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "course"
                            }, {
                                default: a(() => [i(l(t.courseName) + " ", 1), s(N, {
                                    block: ""
                                }, {
                                    default: a(() => [i(l(t.batchName), 1)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "installmentCount"
                            }, {
                                default: a(() => [i(l(t.feeStructureName ?? "-") + " ", 1), t.feesCount > 0 ? (c(), k("span", Ie, " (" + l(t.feesCount) + ") ", 1)) : y("", !0), s(N, {
                                    block: ""
                                }, {
                                    default: a(() => [i(l(t.feeConcessionType?.name || ""), 1)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "transport"
                            }, {
                                default: a(() => [i(l(t.transportCircleName ?? "-"), 1)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "feeConcession"
                            }, {
                                default: a(() => [i(l(t.feeConcessionName ?? "-"), 1)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "contactNumber"
                            }, {
                                default: a(() => [i(l(t.contactNumber) + " ", 1), s(N, {
                                    block: ""
                                }, {
                                    default: a(() => [i(l(t.email), 1)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "parent"
                            }, {
                                default: a(() => [i(l(t.fatherName) + " ", 1), s(N, {
                                    block: ""
                                }, {
                                    default: a(() => [i(l(t.motherName), 1)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024), s(V, {
                                name: "address"
                            }, {
                                default: a(() => [i(l(t.shortAddress), 1)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024))), 128))]),
                        _: 1
                    }, 8, ["selected", "header", "meta"])]),
                    _: 1
                })) : y("", !0), m.items.length > 0 && r(_).query.existingFeeStructure ? (c(), C(R, {
                    key: 4,
                    appear: "",
                    visibility: !0
                }, {
                    default: a(() => [s(M, {
                        "is-loading": d.value
                    }, {
                        title: a(() => [i(l(o.$trans("student.fee_allocation.fee_allocation")), 1)]),
                        action: a(() => [s(ge, {
                            onClick: ie,
                            size: "xs",
                            design: "error"
                        }, {
                            default: a(() => [i(l(o.$trans("global.remove", {
                                attribute: o.$trans("student.fee.fee")
                            })), 1)]),
                            _: 1
                        })]),
                        default: a(() => [s(Y, {
                            "no-card": "",
                            "keep-adding": !1,
                            "init-url": w,
                            action: "allocate",
                            "init-form": U,
                            form: n,
                            "before-submit": ue,
                            "after-submit": G
                        }, {
                            default: a(() => [r(_).query.existingFeeStructure == "unassigned" ? (c(), k("div", Oe, [F.meta.hasBatchFeeAllocation ? y("", !0) : (c(), k("div", De, [s(H, {
                                modelValue: n.feeStructure,
                                "onUpdate:modelValue": e[12] || (e[12] = t => n.feeStructure = t),
                                name: "feeStructure",
                                label: o.$trans("finance.fee_structure.fee_structure"),
                                options: u.feeStructures,
                                "label-prop": "name",
                                "value-prop": "uuid",
                                error: r(g).feeStructure,
                                "onUpdate:error": e[13] || (e[13] = t => r(g).feeStructure = t),
                                onSelected: O,
                                onRemoved: e[14] || (e[14] = t => u.feeHeads = [])
                            }, null, 8, ["modelValue", "label", "options", "error"])])), v("div", Re, [s(H, {
                                modelValue: n.studentType,
                                "onUpdate:modelValue": e[15] || (e[15] = t => n.studentType = t),
                                name: "studentType",
                                label: o.$trans("student.props.type"),
                                options: u.studentTypes,
                                error: r(g).studentType,
                                "onUpdate:error": e[16] || (e[16] = t => r(g).studentType = t)
                            }, null, 8, ["modelValue", "label", "options", "error"])]), v("div", Le, [s(H, {
                                modelValue: n.feeConcession,
                                "onUpdate:modelValue": e[17] || (e[17] = t => n.feeConcession = t),
                                name: "feeConcession",
                                label: o.$trans("finance.fee_concession.fee_concession"),
                                options: u.feeConcessions,
                                "label-prop": "name",
                                "value-prop": "uuid",
                                error: r(g).feeConcession,
                                "onUpdate:error": e[18] || (e[18] = t => r(g).feeConcession = t)
                            }, null, 8, ["modelValue", "label", "options", "error"])])])) : y("", !0), v("div", je, [v("div", xe, [s(H, {
                                modelValue: n.transportCircle,
                                "onUpdate:modelValue": e[19] || (e[19] = t => n.transportCircle = t),
                                name: "transportCircle",
                                label: o.$trans("transport.circle.circle"),
                                options: u.transportCircles,
                                "label-prop": "name",
                                "value-prop": "uuid",
                                error: r(g).transportCircle,
                                "onUpdate:error": e[20] || (e[20] = t => r(g).transportCircle = t)
                            }, null, 8, ["modelValue", "label", "options", "error"])]), n.transportCircle ? (c(), k("div", Pe, [s(X, null, {
                                default: a(() => [i(l(o.$trans("transport.circle.direction")), 1)]),
                                _: 1
                            }), s(be, {
                                "top-margin": "",
                                options: u.directions,
                                name: "direction",
                                modelValue: n.direction,
                                "onUpdate:modelValue": e[21] || (e[21] = t => n.direction = t),
                                error: r(g).direction,
                                "onUpdate:error": e[22] || (e[22] = t => r(g).direction = t),
                                horizontal: ""
                            }, null, 8, ["options", "modelValue", "error"])])) : y("", !0)]), v("div", Ee, [v("div", Ge, [s(X, null, {
                                default: a(() => [i(l(o.$trans("student.fee.opted_fee")) + " ", 1), v("div", ze, [v("span", {
                                    onClick: le,
                                    class: "cursor-pointer"
                                }, l(o.$trans("general.select_all")), 1), v("span", {
                                    onClick: re,
                                    class: "cursor-pointer"
                                }, l(o.$trans("general.unselect_all")), 1)])]),
                                _: 1
                            }), v("div", Me, [(c(!0), k(W, null, Z(u.feeHeads, t => (c(), k("div", {
                                class: "w-1/3",
                                key: t.uuid
                            }, [s(Q, {
                                items: n.optedFeeHeads,
                                "onUpdate:items": e[23] || (e[23] = L => n.optedFeeHeads = L),
                                value: t.uuid,
                                label: t.name
                            }, null, 8, ["items", "value", "label"])]))), 128))])])])]),
                            _: 1
                        }, 8, ["form"])]),
                        _: 1
                    }, 8, ["is-loading"]), r(_).query.existingFeeStructure != "unassigned" ? (c(), C(M, {
                        key: 0,
                        class: "mt-4",
                        "is-loading": d.value
                    }, {
                        title: a(() => [i(l(o.$trans("finance.fee_concession.fee_concession")), 1)]),
                        action: a(() => [...e[31] || (e[31] = [])]),
                        default: a(() => [s(Y, {
                            "no-card": "",
                            "keep-adding": !1,
                            "init-url": w,
                            action: "allocateFeeConcession",
                            "init-form": U,
                            form: n,
                            "after-submit": G,
                            confirmation: !n.removeConcession,
                            "confirmation-with-password": !!n.removeConcession
                        }, {
                            default: a(() => [v("div", We, [v("div", Je, [s(H, {
                                modelValue: n.feeConcession,
                                "onUpdate:modelValue": e[24] || (e[24] = t => n.feeConcession = t),
                                name: "feeConcession",
                                label: o.$trans("finance.fee_concession.fee_concession"),
                                options: u.feeConcessions,
                                "label-prop": "name",
                                "value-prop": "uuid",
                                error: r(g).feeConcession,
                                "onUpdate:error": e[25] || (e[25] = t => r(g).feeConcession = t)
                            }, null, 8, ["modelValue", "label", "options", "error"])]), v("div", Ke, [s(H, {
                                modelValue: n.feeConcessionType,
                                "onUpdate:modelValue": e[26] || (e[26] = t => n.feeConcessionType = t),
                                name: "feeConcessionType",
                                label: o.$trans("finance.fee_concession.type.type"),
                                options: u.feeConcessionTypes,
                                "label-prop": "name",
                                "value-prop": "uuid",
                                error: r(g).feeConcessionType,
                                "onUpdate:error": e[27] || (e[27] = t => r(g).feeConcessionType = t)
                            }, null, 8, ["modelValue", "label", "options", "error"])]), r(Ce) ? (c(), k("div", Qe, [s(ve, {
                                vertical: "",
                                modelValue: n.removeConcession,
                                "onUpdate:modelValue": e[28] || (e[28] = t => n.removeConcession = t),
                                name: "removeConcession",
                                label: o.$trans("student.fee_allocation.props.remove_concession"),
                                error: r(g).removeConcession,
                                "onUpdate:error": e[29] || (e[29] = t => r(g).removeConcession = t)
                            }, null, 8, ["modelValue", "label", "error"]), s(ye, {
                                class: "dark:text-gray-400"
                            }, {
                                default: a(() => [i(l(o.$trans("student.fee_allocation.remove_concession_info")), 1)]),
                                _: 1
                            })])) : y("", !0)])]),
                            _: 1
                        }, 8, ["form", "confirmation", "confirmation-with-password"])]),
                        _: 1
                    }, 8, ["is-loading"])) : y("", !0)]),
                    _: 1
                })) : y("", !0)], 64)
            }
        }
    });
export {
    et as
    default
};