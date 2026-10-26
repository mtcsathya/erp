import {
    u as N,
    m as w,
    q as H,
    r,
    t as _,
    o as p,
    w as e,
    d as I,
    b as h,
    v as l,
    x as n,
    e as s,
    i as O,
    k as P,
    A as y,
    p as R,
    f as o,
    a as U,
    F as j,
    y as E
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
        __name: "Filter",
        emits: ["hide"],
        setup(B, {
            emit: g
        }) {
            const v = N(),
                k = g,
                b = {
                    divisions: [],
                    employees: [],
                    startDate: "",
                    endDate: ""
                },
                u = w({
                    ...b
                }),
                c = w({
                    divisions: [],
                    employees: [],
                    isLoaded: !(v.query.divisions || v.query.employees)
                });
            return H(async () => {
                c.divisions = v.query.divisions ? v.query.divisions.split(",") : [], c.employees = v.query.employees ? v.query.employees.split(",") : [], c.isLoaded = !0
            }), (f, m) => {
                const t = r("BaseSelectSearch"),
                    d = r("DatePicker"),
                    D = r("FilterForm");
                return p(), _(D, {
                    "init-form": b,
                    form: u,
                    multiple: ["divisions", "employees"],
                    onHide: m[4] || (m[4] = i => k("hide"))
                }, {
                    default: e(() => [I("div", z, [I("div", G, [c.isLoaded ? (p(), _(t, {
                        key: 0,
                        multiple: "",
                        name: "divisions",
                        label: f.$trans("global.select", {
                            attribute: f.$trans("academic.division.division")
                        }),
                        modelValue: u.divisions,
                        "onUpdate:modelValue": m[0] || (m[0] = i => u.divisions = i),
                        "value-prop": "uuid",
                        "init-search": c.divisions,
                        "search-key": "course_division",
                        "search-action": "academic/division/list"
                    }, {
                        selectedOption: e(i => [l(n(i.value.name), 1)]),
                        listOption: e(i => [l(n(i.option.name), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : h("", !0)]), I("div", J, [c.isLoaded ? (p(), _(t, {
                        key: 0,
                        multiple: "",
                        name: "employees",
                        label: f.$trans("global.select", {
                            attribute: f.$trans("employee.employee")
                        }),
                        modelValue: u.employees,
                        "onUpdate:modelValue": m[1] || (m[1] = i => u.employees = i),
                        "value-prop": "uuid",
                        "init-search": c.employees,
                        "search-key": "name",
                        "search-action": "employee/list"
                    }, {
                        selectedOption: e(i => [l(n(i.value.name) + " (" + n(i.value.codeNumber) + ") ", 1)]),
                        listOption: e(i => [l(n(i.option.name) + " (" + n(i.option.codeNumber) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : h("", !0)]), I("div", K, [s(d, {
                        start: u.startDate,
                        "onUpdate:start": m[2] || (m[2] = i => u.startDate = i),
                        end: u.endDate,
                        "onUpdate:end": m[3] || (m[3] = i => u.endDate = i),
                        name: "dateBetween",
                        as: "range",
                        label: f.$trans("general.date_between")
                    }, null, 8, ["start", "end", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    W = {
        name: "AcademicDivisionInchargeList"
    },
    Y = Object.assign(W, {
        setup(B) {
            const g = O(),
                v = P("emitter");
            let k = ["filter"];
            y("division-incharge:create") && k.unshift("create");
            let b = [];
            y("division-incharge:export") && (b = ["print", "pdf", "excel"]);
            const u = "academic/divisionIncharge/",
                c = R(!1),
                f = w({}),
                m = t => {
                    Object.assign(f, t)
                };
            return (t, d) => {
                const D = r("BaseButton"),
                    i = r("PageHeaderAction"),
                    V = r("PageHeader"),
                    F = r("ParentTransition"),
                    $ = r("DataCell"),
                    L = r("TextMuted"),
                    A = r("FloatingMenuItem"),
                    S = r("FloatingMenu"),
                    T = r("DataRow"),
                    q = r("DataTable"),
                    M = r("ListItem");
                return p(), _(M, {
                    "init-url": u,
                    onSetItems: m
                }, {
                    header: e(() => [s(V, {
                        title: t.$trans("academic.division_incharge.division_incharge"),
                        navs: [{
                            label: t.$trans("academic.academic"),
                            path: "Academic"
                        }, {
                            label: t.$trans("academic.division.division"),
                            path: "AcademicDivision"
                        }]
                    }, {
                        default: e(() => [s(i, {
                            url: "academic/division-incharges/",
                            name: "AcademicDivisionIncharge",
                            title: t.$trans("academic.division_incharge.division_incharge"),
                            actions: o(k),
                            "dropdown-actions": o(b),
                            onToggleFilter: d[1] || (d[1] = a => c.value = !c.value)
                        }, {
                            default: e(() => [o(y)("division-incharge:create") ? (p(), _(D, {
                                key: 0,
                                design: "white",
                                onClick: d[0] || (d[0] = a => o(g).push({
                                    name: "AcademicDivisionInchargeAssign"
                                }))
                            }, {
                                default: e(() => [l(n(t.$trans("global.assign", {
                                    attribute: t.$trans("academic.division_incharge.division_incharge")
                                })), 1)]),
                                _: 1
                            })) : h("", !0)]),
                            _: 1
                        }, 8, ["title", "actions", "dropdown-actions"])]),
                        _: 1
                    }, 8, ["title", "navs"])]),
                    filter: e(() => [s(F, {
                        appear: "",
                        visibility: c.value
                    }, {
                        default: e(() => [s(Q, {
                            onRefresh: d[2] || (d[2] = a => o(v).emit("listItems")),
                            onHide: d[3] || (d[3] = a => c.value = !1)
                        })]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: e(() => [s(F, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: e(() => [s(q, {
                            header: f.headers,
                            meta: f.meta,
                            module: "academic.division_incharge",
                            onRefresh: d[5] || (d[5] = a => o(v).emit("listItems"))
                        }, {
                            actionButton: e(() => [o(y)("division-incharge:create") ? (p(), _(D, {
                                key: 0,
                                onClick: d[4] || (d[4] = a => o(g).push({
                                    name: "AcademicDivisionInchargeCreate"
                                }))
                            }, {
                                default: e(() => [l(n(t.$trans("global.add", {
                                    attribute: t.$trans("academic.division_incharge.division_incharge")
                                })), 1)]),
                                _: 1
                            })) : h("", !0)]),
                            default: e(() => [(p(!0), U(j, null, E(f.data, a => (p(), _(T, {
                                key: a.uuid,
                                onDoubleClick: C => o(g).push({
                                    name: "AcademicDivisionInchargeShow",
                                    params: {
                                        uuid: a.uuid
                                    }
                                })
                            }, {
                                default: e(() => [s($, {
                                    name: "division"
                                }, {
                                    default: e(() => [l(n(a.division.name), 1)]),
                                    _: 2
                                }, 1024), s($, {
                                    name: "employee"
                                }, {
                                    default: e(() => [l(n(a.employee.name) + " ", 1), s(L, {
                                        block: ""
                                    }, {
                                        default: e(() => [l(n(a.employee.codeNumber), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), s($, {
                                    name: "period"
                                }, {
                                    default: e(() => [l(n(a.period), 1)]),
                                    _: 2
                                }, 1024), s($, {
                                    name: "createdAt"
                                }, {
                                    default: e(() => [l(n(a.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), s($, {
                                    name: "action"
                                }, {
                                    default: e(() => [s(S, null, {
                                        default: e(() => [s(A, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: C => o(g).push({
                                                name: "AcademicDivisionInchargeShow",
                                                params: {
                                                    uuid: a.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [l(n(t.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), o(y)("division-incharge:edit") ? (p(), _(A, {
                                            key: 0,
                                            icon: "fas fa-edit",
                                            onClick: C => o(g).push({
                                                name: "AcademicDivisionInchargeEdit",
                                                params: {
                                                    uuid: a.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [l(n(t.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : h("", !0), o(y)("division-incharge:create") ? (p(), _(A, {
                                            key: 1,
                                            icon: "fas fa-copy",
                                            onClick: C => o(g).push({
                                                name: "AcademicDivisionInchargeDuplicate",
                                                params: {
                                                    uuid: a.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [l(n(t.$trans("general.duplicate")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : h("", !0), o(y)("division-incharge:delete") ? (p(), _(A, {
                                            key: 2,
                                            icon: "fas fa-trash",
                                            onClick: C => o(v).emit("deleteItem", {
                                                uuid: a.uuid
                                            })
                                        }, {
                                            default: e(() => [l(n(t.$trans("general.delete")), 1)]),
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
    Y as
    default
};