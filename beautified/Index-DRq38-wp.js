import {
    u as N,
    m as I,
    q as H,
    r,
    t as f,
    o as p,
    w as e,
    d as C,
    b as y,
    v as c,
    x as a,
    e as i,
    i as O,
    k as R,
    A as g,
    p as U,
    f as s,
    a as P,
    F as j,
    y as E
} from "./app-BYBn2zfx.js";
const W = {
        class: "grid grid-cols-3 gap-6"
    },
    z = {
        class: "col-span-3 sm:col-span-1"
    },
    G = {
        class: "col-span-3 sm:col-span-1"
    },
    J = {
        class: "col-span-3 sm:col-span-1"
    },
    K = {
        __name: "Filter",
        emits: ["hide"],
        setup(V, {
            emit: _
        }) {
            const h = N(),
                $ = _,
                v = {
                    batches: [],
                    employees: [],
                    startDate: "",
                    endDate: ""
                },
                u = I({
                    ...v
                }),
                d = I({
                    batches: [],
                    employees: [],
                    isLoaded: !(h.query.batches || h.query.employees)
                });
            return H(async () => {
                d.batches = h.query.batches ? h.query.batches.split(",") : [], d.employees = h.query.employees ? h.query.employees.split(",") : [], d.isLoaded = !0
            }), (b, m) => {
                const o = r("BaseSelectSearch"),
                    l = r("DatePicker"),
                    B = r("FilterForm");
                return p(), f(B, {
                    "init-form": v,
                    form: u,
                    multiple: ["batches", "employees"],
                    onHide: m[4] || (m[4] = t => $("hide"))
                }, {
                    default: e(() => [C("div", W, [C("div", z, [d.isLoaded ? (p(), f(o, {
                        key: 0,
                        multiple: "",
                        name: "batches",
                        label: b.$trans("global.select", {
                            attribute: b.$trans("academic.batch.batch")
                        }),
                        modelValue: u.batches,
                        "onUpdate:modelValue": m[0] || (m[0] = t => u.batches = t),
                        "value-prop": "uuid",
                        "init-search": d.batches,
                        "search-key": "course_batch",
                        "search-action": "academic/batch/list"
                    }, {
                        selectedOption: e(t => [c(a(t.value.course.name) + " " + a(t.value.name), 1)]),
                        listOption: e(t => [c(a(t.option.course.nameWithTerm) + " " + a(t.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : y("", !0)]), C("div", G, [d.isLoaded ? (p(), f(o, {
                        key: 0,
                        multiple: "",
                        name: "employees",
                        label: b.$trans("global.select", {
                            attribute: b.$trans("employee.employee")
                        }),
                        modelValue: u.employees,
                        "onUpdate:modelValue": m[1] || (m[1] = t => u.employees = t),
                        "value-prop": "uuid",
                        "init-search": d.employees,
                        "search-key": "name",
                        "search-action": "employee/list"
                    }, {
                        selectedOption: e(t => [c(a(t.value.name) + " (" + a(t.value.codeNumber) + ") ", 1)]),
                        listOption: e(t => [c(a(t.option.name) + " (" + a(t.option.codeNumber) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : y("", !0)]), C("div", J, [i(l, {
                        start: u.startDate,
                        "onUpdate:start": m[2] || (m[2] = t => u.startDate = t),
                        end: u.endDate,
                        "onUpdate:end": m[3] || (m[3] = t => u.endDate = t),
                        name: "dateBetween",
                        as: "range",
                        label: b.$trans("general.date_between")
                    }, null, 8, ["start", "end", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    Q = {
        name: "AcademicBatchInchargeList"
    },
    Y = Object.assign(Q, {
        setup(V) {
            const _ = O(),
                h = R("emitter");
            let $ = ["filter"];
            g("batch-incharge:create") && $.unshift("create");
            let v = [];
            g("batch-incharge:export") && (v = ["print", "pdf", "excel"]);
            const u = "academic/batchIncharge/",
                d = U(!1),
                b = I({}),
                m = o => {
                    Object.assign(b, o)
                };
            return (o, l) => {
                const B = r("BaseButton"),
                    t = r("PageHeaderAction"),
                    T = r("PageHeader"),
                    w = r("ParentTransition"),
                    F = r("TextMuted"),
                    k = r("DataCell"),
                    D = r("FloatingMenuItem"),
                    L = r("FloatingMenu"),
                    S = r("DataRow"),
                    q = r("DataTable"),
                    M = r("ListItem");
                return p(), f(M, {
                    "init-url": u,
                    onSetItems: m
                }, {
                    header: e(() => [i(T, {
                        title: o.$trans("academic.batch_incharge.batch_incharge"),
                        navs: [{
                            label: o.$trans("academic.academic"),
                            path: "Academic"
                        }, {
                            label: o.$trans("academic.batch.batch"),
                            path: "AcademicBatch"
                        }]
                    }, {
                        default: e(() => [i(t, {
                            url: "academic/batch-incharges/",
                            name: "AcademicBatchIncharge",
                            title: o.$trans("academic.batch_incharge.batch_incharge"),
                            actions: s($),
                            "dropdown-actions": s(v),
                            onToggleFilter: l[1] || (l[1] = n => d.value = !d.value)
                        }, {
                            default: e(() => [s(g)("batch-incharge:create") ? (p(), f(B, {
                                key: 0,
                                design: "white",
                                onClick: l[0] || (l[0] = n => s(_).push({
                                    name: "AcademicBatchInchargeAssign"
                                }))
                            }, {
                                default: e(() => [c(a(o.$trans("global.assign", {
                                    attribute: o.$trans("academic.batch_incharge.batch_incharge")
                                })), 1)]),
                                _: 1
                            })) : y("", !0)]),
                            _: 1
                        }, 8, ["title", "actions", "dropdown-actions"])]),
                        _: 1
                    }, 8, ["title", "navs"])]),
                    filter: e(() => [i(w, {
                        appear: "",
                        visibility: d.value
                    }, {
                        default: e(() => [i(K, {
                            onRefresh: l[2] || (l[2] = n => s(h).emit("listItems")),
                            onHide: l[3] || (l[3] = n => d.value = !1)
                        })]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: e(() => [i(w, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: e(() => [i(q, {
                            header: b.headers,
                            meta: b.meta,
                            module: "academic.batch_incharge",
                            onRefresh: l[5] || (l[5] = n => s(h).emit("listItems"))
                        }, {
                            actionButton: e(() => [s(g)("batch-incharge:create") ? (p(), f(B, {
                                key: 0,
                                onClick: l[4] || (l[4] = n => s(_).push({
                                    name: "AcademicBatchInchargeCreate"
                                }))
                            }, {
                                default: e(() => [c(a(o.$trans("global.add", {
                                    attribute: o.$trans("academic.batch_incharge.batch_incharge")
                                })), 1)]),
                                _: 1
                            })) : y("", !0)]),
                            default: e(() => [(p(!0), P(j, null, E(b.data, n => (p(), f(S, {
                                key: n.uuid,
                                onDoubleClick: A => s(_).push({
                                    name: "AcademicBatchInchargeShow",
                                    params: {
                                        uuid: n.uuid
                                    }
                                })
                            }, {
                                default: e(() => [i(k, {
                                    name: "batch"
                                }, {
                                    default: e(() => [c(a(n.batch.course.name) + " ", 1), i(F, {
                                        block: ""
                                    }, {
                                        default: e(() => [c(a(n.batch.name), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), i(k, {
                                    name: "employee"
                                }, {
                                    default: e(() => [c(a(n.employee.name) + " ", 1), i(F, {
                                        block: ""
                                    }, {
                                        default: e(() => [c(a(n.employee.codeNumber), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), i(k, {
                                    name: "period"
                                }, {
                                    default: e(() => [c(a(n.period), 1)]),
                                    _: 2
                                }, 1024), i(k, {
                                    name: "createdAt"
                                }, {
                                    default: e(() => [c(a(n.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), i(k, {
                                    name: "action"
                                }, {
                                    default: e(() => [i(L, null, {
                                        default: e(() => [i(D, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: A => s(_).push({
                                                name: "AcademicBatchInchargeShow",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [c(a(o.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), s(g)("batch-incharge:edit") ? (p(), f(D, {
                                            key: 0,
                                            icon: "fas fa-edit",
                                            onClick: A => s(_).push({
                                                name: "AcademicBatchInchargeEdit",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [c(a(o.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : y("", !0), s(g)("batch-incharge:create") ? (p(), f(D, {
                                            key: 1,
                                            icon: "fas fa-copy",
                                            onClick: A => s(_).push({
                                                name: "AcademicBatchInchargeDuplicate",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [c(a(o.$trans("general.duplicate")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : y("", !0), s(g)("batch-incharge:delete") ? (p(), f(D, {
                                            key: 2,
                                            icon: "fas fa-trash",
                                            onClick: A => s(h).emit("deleteItem", {
                                                uuid: n.uuid
                                            })
                                        }, {
                                            default: e(() => [c(a(o.$trans("general.delete")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : y("", !0)]),
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
    Y as
    default
};