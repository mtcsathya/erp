import {
    u as q,
    m as I,
    q as M,
    r as l,
    t as v,
    o as _,
    w as e,
    d as D,
    b as w,
    v as s,
    x as r,
    e as t,
    i as N,
    k as H,
    p as O,
    f as u,
    a as R,
    F as U,
    y as j
} from "./app-BYBn2zfx.js";
const E = {
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
        setup(P, {
            emit: f
        }) {
            const p = q(),
                C = f,
                b = {
                    programs: [],
                    employees: [],
                    startDate: "",
                    endDate: ""
                },
                c = I({
                    ...b
                }),
                m = I({
                    programs: [],
                    employees: [],
                    isLoaded: !(p.query.programs || p.query.employees)
                });
            return M(async () => {
                m.programs = p.query.programs ? p.query.programs.split(",") : [], m.employees = p.query.employees ? p.query.employees.split(",") : [], m.isLoaded = !0
            }), (g, d) => {
                const o = l("BaseSelectSearch"),
                    i = l("DatePicker"),
                    $ = l("FilterForm");
                return _(), v($, {
                    "init-form": b,
                    form: c,
                    multiple: ["programs", "employees"],
                    onHide: d[4] || (d[4] = a => C("hide"))
                }, {
                    default: e(() => [D("div", E, [D("div", z, [m.isLoaded ? (_(), v(o, {
                        key: 0,
                        multiple: "",
                        name: "programs",
                        label: g.$trans("global.select", {
                            attribute: g.$trans("academic.program.program")
                        }),
                        modelValue: c.programs,
                        "onUpdate:modelValue": d[0] || (d[0] = a => c.programs = a),
                        "value-prop": "uuid",
                        "init-search": m.programs,
                        "search-key": "course_program",
                        "search-action": "academic/program/list"
                    }, {
                        selectedOption: e(a => [s(r(a.value.name), 1)]),
                        listOption: e(a => [s(r(a.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : w("", !0)]), D("div", G, [m.isLoaded ? (_(), v(o, {
                        key: 0,
                        multiple: "",
                        name: "employees",
                        label: g.$trans("global.select", {
                            attribute: g.$trans("employee.employee")
                        }),
                        modelValue: c.employees,
                        "onUpdate:modelValue": d[1] || (d[1] = a => c.employees = a),
                        "value-prop": "uuid",
                        "init-search": m.employees,
                        "search-key": "name",
                        "search-action": "employee/list"
                    }, {
                        selectedOption: e(a => [s(r(a.value.name) + " (" + r(a.value.codeNumber) + ") ", 1)]),
                        listOption: e(a => [s(r(a.option.name) + " (" + r(a.option.codeNumber) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : w("", !0)]), D("div", J, [t(i, {
                        start: c.startDate,
                        "onUpdate:start": d[2] || (d[2] = a => c.startDate = a),
                        end: c.endDate,
                        "onUpdate:end": d[3] || (d[3] = a => c.endDate = a),
                        name: "dateBetween",
                        as: "range",
                        label: g.$trans("general.date_between")
                    }, null, 8, ["start", "end", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    Q = {
        name: "AcademicProgramInchargeList"
    },
    X = Object.assign(Q, {
        setup(P) {
            const f = N(),
                p = H("emitter");
            let C = ["create", "filter"],
                b = ["print", "pdf", "excel"];
            const c = "academic/programIncharge/",
                m = O(!1),
                g = I({}),
                d = o => {
                    Object.assign(g, o)
                };
            return (o, i) => {
                const $ = l("BaseButton"),
                    a = l("PageHeaderAction"),
                    F = l("PageHeader"),
                    A = l("ParentTransition"),
                    y = l("DataCell"),
                    B = l("TextMuted"),
                    h = l("FloatingMenuItem"),
                    V = l("FloatingMenu"),
                    L = l("DataRow"),
                    S = l("DataTable"),
                    T = l("ListItem");
                return _(), v(T, {
                    "init-url": c,
                    onSetItems: d
                }, {
                    header: e(() => [t(F, {
                        title: o.$trans("academic.program_incharge.program_incharge"),
                        navs: [{
                            label: o.$trans("academic.academic"),
                            path: "Academic"
                        }, {
                            label: o.$trans("academic.program.program"),
                            path: "AcademicProgram"
                        }]
                    }, {
                        default: e(() => [t(a, {
                            url: "academic/program-incharges/",
                            name: "AcademicProgramIncharge",
                            title: o.$trans("academic.program_incharge.program_incharge"),
                            actions: u(C),
                            "dropdown-actions": u(b),
                            onToggleFilter: i[1] || (i[1] = n => m.value = !m.value)
                        }, {
                            default: e(() => [t($, {
                                design: "white",
                                onClick: i[0] || (i[0] = n => u(f).push({
                                    name: "AcademicProgramInchargeAssign"
                                }))
                            }, {
                                default: e(() => [s(r(o.$trans("global.assign", {
                                    attribute: o.$trans("academic.program_incharge.program_incharge")
                                })), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["title", "actions", "dropdown-actions"])]),
                        _: 1
                    }, 8, ["title", "navs"])]),
                    filter: e(() => [t(A, {
                        appear: "",
                        visibility: m.value
                    }, {
                        default: e(() => [t(K, {
                            onRefresh: i[2] || (i[2] = n => u(p).emit("listItems")),
                            onHide: i[3] || (i[3] = n => m.value = !1)
                        })]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: e(() => [t(A, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: e(() => [t(S, {
                            header: g.headers,
                            meta: g.meta,
                            module: "academic.program_incharge",
                            onRefresh: i[5] || (i[5] = n => u(p).emit("listItems"))
                        }, {
                            actionButton: e(() => [t($, {
                                onClick: i[4] || (i[4] = n => u(f).push({
                                    name: "AcademicProgramInchargeCreate"
                                }))
                            }, {
                                default: e(() => [s(r(o.$trans("global.add", {
                                    attribute: o.$trans("academic.program_incharge.program_incharge")
                                })), 1)]),
                                _: 1
                            })]),
                            default: e(() => [(_(!0), R(U, null, j(g.data, n => (_(), v(L, {
                                key: n.uuid,
                                onDoubleClick: k => u(f).push({
                                    name: "AcademicProgramInchargeShow",
                                    params: {
                                        uuid: n.uuid
                                    }
                                })
                            }, {
                                default: e(() => [t(y, {
                                    name: "program"
                                }, {
                                    default: e(() => [s(r(n.program.name), 1)]),
                                    _: 2
                                }, 1024), t(y, {
                                    name: "employee"
                                }, {
                                    default: e(() => [s(r(n.employee.name) + " ", 1), t(B, {
                                        block: ""
                                    }, {
                                        default: e(() => [s(r(n.employee.codeNumber), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), t(y, {
                                    name: "period"
                                }, {
                                    default: e(() => [s(r(n.period), 1)]),
                                    _: 2
                                }, 1024), t(y, {
                                    name: "createdAt"
                                }, {
                                    default: e(() => [s(r(n.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), t(y, {
                                    name: "action"
                                }, {
                                    default: e(() => [t(V, null, {
                                        default: e(() => [t(h, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: k => u(f).push({
                                                name: "AcademicProgramInchargeShow",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [s(r(o.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), t(h, {
                                            icon: "fas fa-edit",
                                            onClick: k => u(f).push({
                                                name: "AcademicProgramInchargeEdit",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [s(r(o.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), t(h, {
                                            icon: "fas fa-copy",
                                            onClick: k => u(f).push({
                                                name: "AcademicProgramInchargeDuplicate",
                                                params: {
                                                    uuid: n.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [s(r(o.$trans("general.duplicate")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), t(h, {
                                            icon: "fas fa-trash",
                                            onClick: k => u(p).emit("deleteItem", {
                                                uuid: n.uuid
                                            })
                                        }, {
                                            default: e(() => [s(r(o.$trans("general.delete")), 1)]),
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
    X as
    default
};