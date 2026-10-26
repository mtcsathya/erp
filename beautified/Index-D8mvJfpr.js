import {
    u as M,
    m as I,
    q as N,
    r as l,
    t as v,
    o as g,
    w as e,
    d as k,
    b as w,
    v as r,
    x as s,
    e as a,
    i as H,
    k as O,
    p as P,
    f as p,
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
        setup(F, {
            emit: _
        }) {
            const u = M(),
                C = _,
                b = {
                    departments: [],
                    employees: [],
                    startDate: "",
                    endDate: ""
                },
                c = I({
                    ...b
                }),
                m = I({
                    departments: [],
                    employees: [],
                    isLoaded: !(u.query.departments || u.query.employees)
                });
            return N(async () => {
                m.departments = u.query.departments ? u.query.departments.split(",") : [], m.employees = u.query.employees ? u.query.employees.split(",") : [], m.isLoaded = !0
            }), (f, d) => {
                const n = l("BaseSelectSearch"),
                    i = l("DatePicker"),
                    $ = l("FilterForm");
                return g(), v($, {
                    "init-form": b,
                    form: c,
                    multiple: ["departments", "employees"],
                    onHide: d[4] || (d[4] = t => C("hide"))
                }, {
                    default: e(() => [k("div", E, [k("div", z, [m.isLoaded ? (g(), v(n, {
                        key: 0,
                        multiple: "",
                        name: "departments",
                        label: f.$trans("global.select", {
                            attribute: f.$trans("academic.department.department")
                        }),
                        modelValue: c.departments,
                        "onUpdate:modelValue": d[0] || (d[0] = t => c.departments = t),
                        "value-prop": "uuid",
                        "init-search": m.departments,
                        "search-key": "course_department",
                        "search-action": "academic/department/list"
                    }, {
                        selectedOption: e(t => [r(s(t.value.name), 1)]),
                        listOption: e(t => [r(s(t.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : w("", !0)]), k("div", G, [m.isLoaded ? (g(), v(n, {
                        key: 0,
                        multiple: "",
                        name: "employees",
                        label: f.$trans("global.select", {
                            attribute: f.$trans("employee.employee")
                        }),
                        modelValue: c.employees,
                        "onUpdate:modelValue": d[1] || (d[1] = t => c.employees = t),
                        "value-prop": "uuid",
                        "init-search": m.employees,
                        "search-key": "name",
                        "search-action": "employee/list"
                    }, {
                        selectedOption: e(t => [r(s(t.value.name) + " (" + s(t.value.codeNumber) + ") ", 1)]),
                        listOption: e(t => [r(s(t.option.name) + " (" + s(t.option.codeNumber) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : w("", !0)]), k("div", J, [a(i, {
                        start: c.startDate,
                        "onUpdate:start": d[2] || (d[2] = t => c.startDate = t),
                        end: c.endDate,
                        "onUpdate:end": d[3] || (d[3] = t => c.endDate = t),
                        name: "dateBetween",
                        as: "range",
                        label: f.$trans("general.date_between")
                    }, null, 8, ["start", "end", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    Q = {
        name: "AcademicDepartmentInchargeList"
    },
    X = Object.assign(Q, {
        setup(F) {
            const _ = H(),
                u = O("emitter");
            let C = ["create", "filter"],
                b = ["print", "pdf", "excel"];
            const c = "academic/departmentIncharge/",
                m = P(!1),
                f = I({}),
                d = n => {
                    Object.assign(f, n)
                };
            return (n, i) => {
                const $ = l("BaseButton"),
                    t = l("PageHeaderAction"),
                    B = l("PageHeader"),
                    A = l("ParentTransition"),
                    y = l("DataCell"),
                    V = l("TextMuted"),
                    h = l("FloatingMenuItem"),
                    L = l("FloatingMenu"),
                    S = l("DataRow"),
                    T = l("DataTable"),
                    q = l("ListItem");
                return g(), v(q, {
                    "init-url": c,
                    onSetItems: d
                }, {
                    header: e(() => [a(B, {
                        title: n.$trans("academic.department_incharge.department_incharge"),
                        navs: [{
                            label: n.$trans("academic.academic"),
                            path: "Academic"
                        }, {
                            label: n.$trans("academic.department.department"),
                            path: "AcademicDepartment"
                        }]
                    }, {
                        default: e(() => [a(t, {
                            url: "academic/department-incharges/",
                            name: "AcademicDepartmentIncharge",
                            title: n.$trans("academic.department_incharge.department_incharge"),
                            actions: p(C),
                            "dropdown-actions": p(b),
                            onToggleFilter: i[1] || (i[1] = o => m.value = !m.value)
                        }, {
                            default: e(() => [a($, {
                                design: "white",
                                onClick: i[0] || (i[0] = o => p(_).push({
                                    name: "AcademicDepartmentInchargeAssign"
                                }))
                            }, {
                                default: e(() => [r(s(n.$trans("global.assign", {
                                    attribute: n.$trans("academic.department_incharge.department_incharge")
                                })), 1)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["title", "actions", "dropdown-actions"])]),
                        _: 1
                    }, 8, ["title", "navs"])]),
                    filter: e(() => [a(A, {
                        appear: "",
                        visibility: m.value
                    }, {
                        default: e(() => [a(K, {
                            onRefresh: i[2] || (i[2] = o => p(u).emit("listItems")),
                            onHide: i[3] || (i[3] = o => m.value = !1)
                        })]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: e(() => [a(A, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: e(() => [a(T, {
                            header: f.headers,
                            meta: f.meta,
                            module: "academic.department_incharge",
                            onRefresh: i[5] || (i[5] = o => p(u).emit("listItems"))
                        }, {
                            actionButton: e(() => [a($, {
                                onClick: i[4] || (i[4] = o => p(_).push({
                                    name: "AcademicDepartmentInchargeCreate"
                                }))
                            }, {
                                default: e(() => [r(s(n.$trans("global.add", {
                                    attribute: n.$trans("academic.department_incharge.department_incharge")
                                })), 1)]),
                                _: 1
                            })]),
                            default: e(() => [(g(!0), R(U, null, j(f.data, o => (g(), v(S, {
                                key: o.uuid,
                                onDoubleClick: D => p(_).push({
                                    name: "AcademicDepartmentInchargeShow",
                                    params: {
                                        uuid: o.uuid
                                    }
                                })
                            }, {
                                default: e(() => [a(y, {
                                    name: "department"
                                }, {
                                    default: e(() => [r(s(o.department.name), 1)]),
                                    _: 2
                                }, 1024), a(y, {
                                    name: "employee"
                                }, {
                                    default: e(() => [r(s(o.employee.name) + " ", 1), a(V, {
                                        block: ""
                                    }, {
                                        default: e(() => [r(s(o.employee.codeNumber), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), a(y, {
                                    name: "period"
                                }, {
                                    default: e(() => [r(s(o.period), 1)]),
                                    _: 2
                                }, 1024), a(y, {
                                    name: "createdAt"
                                }, {
                                    default: e(() => [r(s(o.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), a(y, {
                                    name: "action"
                                }, {
                                    default: e(() => [a(L, null, {
                                        default: e(() => [a(h, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: D => p(_).push({
                                                name: "AcademicDepartmentInchargeShow",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [r(s(n.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), a(h, {
                                            icon: "fas fa-edit",
                                            onClick: D => p(_).push({
                                                name: "AcademicDepartmentInchargeEdit",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [r(s(n.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), a(h, {
                                            icon: "fas fa-copy",
                                            onClick: D => p(_).push({
                                                name: "AcademicDepartmentInchargeDuplicate",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [r(s(n.$trans("general.duplicate")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), a(h, {
                                            icon: "fas fa-trash",
                                            onClick: D => p(u).emit("deleteItem", {
                                                uuid: o.uuid
                                            })
                                        }, {
                                            default: e(() => [r(s(n.$trans("general.delete")), 1)]),
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