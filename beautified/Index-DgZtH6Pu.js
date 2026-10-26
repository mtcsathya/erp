import {
    u as U,
    m as I,
    q as R,
    r as c,
    t as f,
    o as b,
    w as t,
    d as $,
    b as h,
    v as o,
    x as n,
    e as s,
    i as P,
    k as W,
    A as j,
    p as V,
    f as u,
    a as z,
    F as G,
    y as J
} from "./app-BYBn2zfx.js";
const K = {
        class: "grid grid-cols-3 gap-6"
    },
    Q = {
        class: "col-span-3 sm:col-span-1"
    },
    X = {
        class: "col-span-3 sm:col-span-1"
    },
    Y = {
        class: "col-span-3 sm:col-span-1"
    },
    Z = {
        class: "col-span-3 sm:col-span-1"
    },
    x = {
        __name: "Filter",
        emits: ["hide"],
        setup(F, {
            emit: y
        }) {
            const d = U(),
                k = y,
                v = {
                    batches: [],
                    subjects: [],
                    employees: [],
                    startDate: "",
                    endDate: ""
                },
                m = I({
                    ...v
                }),
                r = I({
                    batches: [],
                    subjects: [],
                    employees: [],
                    isLoaded: !(d.query.batches || d.query.subjects || d.query.employees)
                });
            return R(async () => {
                r.batches = d.query.batches ? d.query.batches.split(",") : [], r.subjects = d.query.subjects ? d.query.subjects.split(",") : [], r.employees = d.query.employees ? d.query.employees.split(",") : [], r.isLoaded = !0
            }), (p, i) => {
                const g = c("BaseSelectSearch"),
                    D = c("DatePicker"),
                    l = c("FilterForm");
                return b(), f(l, {
                    "init-form": v,
                    form: m,
                    multiple: ["batches", "subjects", "employees"],
                    onHide: i[5] || (i[5] = e => k("hide"))
                }, {
                    default: t(() => [$("div", K, [$("div", Q, [r.isLoaded ? (b(), f(g, {
                        key: 0,
                        multiple: "",
                        name: "batches",
                        label: p.$trans("global.select", {
                            attribute: p.$trans("academic.batch.batch")
                        }),
                        modelValue: m.batches,
                        "onUpdate:modelValue": i[0] || (i[0] = e => m.batches = e),
                        "value-prop": "uuid",
                        "init-search": r.batches,
                        "search-key": "course_batch",
                        "search-action": "academic/batch/list"
                    }, {
                        selectedOption: t(e => [o(n(e.value.course.name) + " " + n(e.value.name), 1)]),
                        listOption: t(e => [o(n(e.option.course.nameWithTerm) + " " + n(e.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : h("", !0)]), $("div", X, [r.isLoaded ? (b(), f(g, {
                        key: 0,
                        multiple: "",
                        name: "subjects",
                        label: p.$trans("global.select", {
                            attribute: p.$trans("academic.subject.subject")
                        }),
                        modelValue: m.subjects,
                        "onUpdate:modelValue": i[1] || (i[1] = e => m.subjects = e),
                        "value-prop": "uuid",
                        "init-search": r.subjects,
                        "search-action": "academic/subject/list"
                    }, {
                        selectedOption: t(e => [o(n(e.value.name) + " (" + n(e.value.code) + ") ", 1)]),
                        listOption: t(e => [o(n(e.option.name) + " (" + n(e.option.code) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : h("", !0)]), $("div", Y, [r.isLoaded ? (b(), f(g, {
                        key: 0,
                        multiple: "",
                        name: "employees",
                        label: p.$trans("global.select", {
                            attribute: p.$trans("employee.employee")
                        }),
                        modelValue: m.employees,
                        "onUpdate:modelValue": i[2] || (i[2] = e => m.employees = e),
                        "value-prop": "uuid",
                        "init-search": r.employees,
                        "search-key": "name",
                        "search-action": "employee/list"
                    }, {
                        selectedOption: t(e => [o(n(e.value.name) + " (" + n(e.value.codeNumber) + ") ", 1)]),
                        listOption: t(e => [o(n(e.option.name) + " (" + n(e.option.codeNumber) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : h("", !0)]), $("div", Z, [s(D, {
                        start: m.startDate,
                        "onUpdate:start": i[3] || (i[3] = e => m.startDate = e),
                        end: m.endDate,
                        "onUpdate:end": i[4] || (i[4] = e => m.endDate = e),
                        name: "dateBetween",
                        as: "range",
                        label: p.$trans("general.date_between")
                    }, null, 8, ["start", "end", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    ee = {
        name: "AcademicSubjectInchargeList"
    },
    ae = Object.assign(ee, {
        setup(F) {
            const y = P(),
                d = W("emitter");
            let k = ["filter"];
            j("subject-incharge:create") && k.unshift("create");
            let v = [];
            j("subject-incharge:export") && (v = ["print", "pdf", "excel"]), j("subject-incharge:create") && v.unshift("import");
            const m = "academic/subjectIncharge/",
                r = V(!1),
                p = V(!1),
                i = I({}),
                g = I({
                    withEmployeeCode: !1
                }),
                D = l => {
                    Object.assign(i, l)
                };
            return (l, e) => {
                const B = c("BaseButton"),
                    q = c("PageHeaderAction"),
                    T = c("PageHeader"),
                    L = c("BaseCheckbox"),
                    E = c("BaseImport"),
                    A = c("ParentTransition"),
                    S = c("TextMuted"),
                    _ = c("DataCell"),
                    C = c("FloatingMenuItem"),
                    O = c("FloatingMenu"),
                    H = c("DataRow"),
                    M = c("DataTable"),
                    N = c("ListItem");
                return b(), f(N, {
                    "init-url": m,
                    onSetItems: D
                }, {
                    header: t(() => [s(T, {
                        title: l.$trans("academic.subject_incharge.subject_incharge"),
                        navs: [{
                            label: l.$trans("academic.academic"),
                            path: "Academic"
                        }, {
                            label: l.$trans("academic.subject.subject"),
                            path: "AcademicSubject"
                        }]
                    }, {
                        default: t(() => [s(q, {
                            url: "academic/subject-incharges/",
                            name: "AcademicSubjectIncharge",
                            title: l.$trans("academic.subject_incharge.subject_incharge"),
                            actions: u(k),
                            "dropdown-actions": u(v),
                            onToggleFilter: e[1] || (e[1] = a => r.value = !r.value),
                            onToggleImport: e[2] || (e[2] = a => p.value = !p.value)
                        }, {
                            default: t(() => [u(j)("subject-incharge:create") ? (b(), f(B, {
                                key: 0,
                                design: "white",
                                onClick: e[0] || (e[0] = a => u(y).push({
                                    name: "AcademicSubjectInchargeAssign"
                                }))
                            }, {
                                default: t(() => [o(n(l.$trans("global.assign", {
                                    attribute: l.$trans("academic.subject_incharge.subject_incharge")
                                })), 1)]),
                                _: 1
                            })) : h("", !0)]),
                            _: 1
                        }, 8, ["title", "actions", "dropdown-actions"])]),
                        _: 1
                    }, 8, ["title", "navs"])]),
                    import: t(() => [s(A, {
                        appear: "",
                        visibility: p.value
                    }, {
                        default: t(() => [s(E, {
                            path: "academic/subject-incharges/import",
                            "additional-option": {
                                withEmployeeCode: g.withEmployeeCode
                            },
                            onCancelled: e[4] || (e[4] = a => p.value = !1),
                            onHide: e[5] || (e[5] = a => p.value = !1),
                            onCompleted: e[6] || (e[6] = a => u(d).emit("listItems"))
                        }, {
                            option: t(() => [s(L, {
                                modelValue: g.withEmployeeCode,
                                "onUpdate:modelValue": e[3] || (e[3] = a => g.withEmployeeCode = a),
                                name: "withEmployeeCode",
                                label: l.$trans("global.with", {
                                    attribute: l.$trans("employee.props.code_number")
                                })
                            }, null, 8, ["modelValue", "label"])]),
                            _: 1
                        }, 8, ["additional-option"])]),
                        _: 1
                    }, 8, ["visibility"])]),
                    filter: t(() => [s(A, {
                        appear: "",
                        visibility: r.value
                    }, {
                        default: t(() => [s(x, {
                            onRefresh: e[7] || (e[7] = a => u(d).emit("listItems")),
                            onHide: e[8] || (e[8] = a => r.value = !1)
                        })]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: t(() => [s(A, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: t(() => [s(M, {
                            header: i.headers,
                            meta: i.meta,
                            module: "academic.subject_incharge",
                            onRefresh: e[10] || (e[10] = a => u(d).emit("listItems"))
                        }, {
                            actionButton: t(() => [u(j)("subject-incharge:create") ? (b(), f(B, {
                                key: 0,
                                onClick: e[9] || (e[9] = a => u(y).push({
                                    name: "AcademicSubjectInchargeCreate"
                                }))
                            }, {
                                default: t(() => [o(n(l.$trans("global.add", {
                                    attribute: l.$trans("academic.subject_incharge.subject_incharge")
                                })), 1)]),
                                _: 1
                            })) : h("", !0)]),
                            default: t(() => [(b(!0), z(G, null, J(i.data, a => (b(), f(H, {
                                key: a.uuid,
                                onDoubleClick: w => u(y).push({
                                    name: "AcademicSubjectInchargeShow",
                                    params: {
                                        uuid: a.uuid
                                    }
                                })
                            }, {
                                default: t(() => [s(_, {
                                    name: "subject"
                                }, {
                                    default: t(() => [o(n(a.subject.name) + " ", 1), s(S, {
                                        block: ""
                                    }, {
                                        default: t(() => [o(n(a.subject.code), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), s(_, {
                                    name: "batch"
                                }, {
                                    default: t(() => [o(n(a?.batch?.course?.name || "-") + " ", 1), a?.batch?.name ? (b(), f(S, {
                                        key: 0,
                                        block: ""
                                    }, {
                                        default: t(() => [o(n(a?.batch?.name), 1)]),
                                        _: 2
                                    }, 1024)) : h("", !0)]),
                                    _: 2
                                }, 1024), s(_, {
                                    name: "employee"
                                }, {
                                    default: t(() => [o(n(a.employee.name) + " ", 1), s(S, {
                                        block: ""
                                    }, {
                                        default: t(() => [o(n(a.employee.codeNumber), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), s(_, {
                                    name: "period"
                                }, {
                                    default: t(() => [o(n(a.period), 1)]),
                                    _: 2
                                }, 1024), s(_, {
                                    name: "createdAt"
                                }, {
                                    default: t(() => [o(n(a.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), s(_, {
                                    name: "action"
                                }, {
                                    default: t(() => [s(O, null, {
                                        default: t(() => [s(C, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: w => u(y).push({
                                                name: "AcademicSubjectInchargeShow",
                                                params: {
                                                    uuid: a.uuid
                                                }
                                            })
                                        }, {
                                            default: t(() => [o(n(l.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), u(j)("subject-incharge:edit") ? (b(), f(C, {
                                            key: 0,
                                            icon: "fas fa-edit",
                                            onClick: w => u(y).push({
                                                name: "AcademicSubjectInchargeEdit",
                                                params: {
                                                    uuid: a.uuid
                                                }
                                            })
                                        }, {
                                            default: t(() => [o(n(l.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : h("", !0), u(j)("subject-incharge:create") ? (b(), f(C, {
                                            key: 1,
                                            icon: "fas fa-copy",
                                            onClick: w => u(y).push({
                                                name: "AcademicSubjectInchargeDuplicate",
                                                params: {
                                                    uuid: a.uuid
                                                }
                                            })
                                        }, {
                                            default: t(() => [o(n(l.$trans("general.duplicate")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : h("", !0), u(j)("subject-incharge:delete") ? (b(), f(C, {
                                            key: 2,
                                            icon: "fas fa-trash",
                                            onClick: w => u(d).emit("deleteItem", {
                                                uuid: a.uuid
                                            })
                                        }, {
                                            default: t(() => [o(n(l.$trans("general.delete")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : h("", !0)]),
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
    ae as
    default
};