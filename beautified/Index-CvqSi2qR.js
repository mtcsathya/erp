import {
    u as N,
    m as w,
    q as H,
    r as c,
    t as g,
    o as p,
    w as e,
    d as I,
    b as v,
    v as i,
    x as s,
    e as r,
    i as O,
    k as P,
    A as y,
    p as R,
    f as n,
    a as U,
    F as j,
    y as W
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
        setup(B, {
            emit: h
        }) {
            const f = N(),
                k = h,
                b = {
                    courses: [],
                    employees: [],
                    startDate: "",
                    endDate: ""
                },
                m = w({
                    ...b
                }),
                u = w({
                    courses: [],
                    employees: [],
                    isLoaded: !(f.query.courses || f.query.employees)
                });
            return H(async () => {
                u.courses = f.query.courses ? f.query.courses.split(",") : [], u.employees = f.query.employees ? f.query.employees.split(",") : [], u.isLoaded = !0
            }), (_, d) => {
                const a = c("BaseSelectSearch"),
                    l = c("DatePicker"),
                    C = c("FilterForm");
                return p(), g(C, {
                    "init-form": b,
                    form: m,
                    multiple: ["courses", "employees"],
                    onHide: d[4] || (d[4] = t => k("hide"))
                }, {
                    default: e(() => [I("div", E, [I("div", z, [u.isLoaded ? (p(), g(a, {
                        key: 0,
                        multiple: "",
                        name: "courses",
                        label: _.$trans("global.select", {
                            attribute: _.$trans("academic.course.course")
                        }),
                        modelValue: m.courses,
                        "onUpdate:modelValue": d[0] || (d[0] = t => m.courses = t),
                        "value-prop": "uuid",
                        "init-search": u.courses,
                        "search-key": "course_course",
                        "search-action": "academic/course/list"
                    }, {
                        selectedOption: e(t => [i(s(t.value.nameWithTerm), 1)]),
                        listOption: e(t => [i(s(t.option.nameWithTerm), 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : v("", !0)]), I("div", G, [u.isLoaded ? (p(), g(a, {
                        key: 0,
                        multiple: "",
                        name: "employees",
                        label: _.$trans("global.select", {
                            attribute: _.$trans("employee.employee")
                        }),
                        modelValue: m.employees,
                        "onUpdate:modelValue": d[1] || (d[1] = t => m.employees = t),
                        "value-prop": "uuid",
                        "init-search": u.employees,
                        "search-key": "name",
                        "search-action": "employee/list"
                    }, {
                        selectedOption: e(t => [i(s(t.value.name) + " (" + s(t.value.codeNumber) + ") ", 1)]),
                        listOption: e(t => [i(s(t.option.name) + " (" + s(t.option.codeNumber) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : v("", !0)]), I("div", J, [r(l, {
                        start: m.startDate,
                        "onUpdate:start": d[2] || (d[2] = t => m.startDate = t),
                        end: m.endDate,
                        "onUpdate:end": d[3] || (d[3] = t => m.endDate = t),
                        name: "dateBetween",
                        as: "range",
                        label: _.$trans("general.date_between")
                    }, null, 8, ["start", "end", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    Q = {
        name: "AcademicCourseInchargeList"
    },
    Y = Object.assign(Q, {
        setup(B) {
            const h = O(),
                f = P("emitter");
            let k = ["filter"];
            y("course-incharge:create") && k.unshift("create");
            let b = [];
            y("course-incharge:export") && (b = ["print", "pdf", "excel"]);
            const m = "academic/courseIncharge/",
                u = R(!1),
                _ = w({}),
                d = a => {
                    Object.assign(_, a)
                };
            return (a, l) => {
                const C = c("BaseButton"),
                    t = c("PageHeaderAction"),
                    T = c("PageHeader"),
                    F = c("ParentTransition"),
                    $ = c("DataCell"),
                    V = c("TextMuted"),
                    D = c("FloatingMenuItem"),
                    L = c("FloatingMenu"),
                    S = c("DataRow"),
                    q = c("DataTable"),
                    M = c("ListItem");
                return p(), g(M, {
                    "init-url": m,
                    onSetItems: d
                }, {
                    header: e(() => [r(T, {
                        title: a.$trans("academic.course_incharge.course_incharge"),
                        navs: [{
                            label: a.$trans("academic.academic"),
                            path: "Academic"
                        }, {
                            label: a.$trans("academic.course.course"),
                            path: "AcademicCourse"
                        }]
                    }, {
                        default: e(() => [r(t, {
                            url: "academic/course-incharges/",
                            name: "AcademicCourseIncharge",
                            title: a.$trans("academic.course_incharge.course_incharge"),
                            actions: n(k),
                            "dropdown-actions": n(b),
                            onToggleFilter: l[1] || (l[1] = o => u.value = !u.value)
                        }, {
                            default: e(() => [n(y)("course-incharge:create") ? (p(), g(C, {
                                key: 0,
                                design: "white",
                                onClick: l[0] || (l[0] = o => n(h).push({
                                    name: "AcademicCourseInchargeAssign"
                                }))
                            }, {
                                default: e(() => [i(s(a.$trans("global.assign", {
                                    attribute: a.$trans("academic.course_incharge.course_incharge")
                                })), 1)]),
                                _: 1
                            })) : v("", !0)]),
                            _: 1
                        }, 8, ["title", "actions", "dropdown-actions"])]),
                        _: 1
                    }, 8, ["title", "navs"])]),
                    filter: e(() => [r(F, {
                        appear: "",
                        visibility: u.value
                    }, {
                        default: e(() => [r(K, {
                            onRefresh: l[2] || (l[2] = o => n(f).emit("listItems")),
                            onHide: l[3] || (l[3] = o => u.value = !1)
                        })]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: e(() => [r(F, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: e(() => [r(q, {
                            header: _.headers,
                            meta: _.meta,
                            module: "academic.course_incharge",
                            onRefresh: l[5] || (l[5] = o => n(f).emit("listItems"))
                        }, {
                            actionButton: e(() => [n(y)("course-incharge:create") ? (p(), g(C, {
                                key: 0,
                                onClick: l[4] || (l[4] = o => n(h).push({
                                    name: "AcademicCourseInchargeCreate"
                                }))
                            }, {
                                default: e(() => [i(s(a.$trans("global.add", {
                                    attribute: a.$trans("academic.course_incharge.course_incharge")
                                })), 1)]),
                                _: 1
                            })) : v("", !0)]),
                            default: e(() => [(p(!0), U(j, null, W(_.data, o => (p(), g(S, {
                                key: o.uuid,
                                onDoubleClick: A => n(h).push({
                                    name: "AcademicCourseInchargeShow",
                                    params: {
                                        uuid: o.uuid
                                    }
                                })
                            }, {
                                default: e(() => [r($, {
                                    name: "course"
                                }, {
                                    default: e(() => [i(s(o.course.nameWithTerm), 1)]),
                                    _: 2
                                }, 1024), r($, {
                                    name: "employee"
                                }, {
                                    default: e(() => [i(s(o.employee.name) + " ", 1), r(V, {
                                        block: ""
                                    }, {
                                        default: e(() => [i(s(o.employee.codeNumber), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024), r($, {
                                    name: "period"
                                }, {
                                    default: e(() => [i(s(o.period), 1)]),
                                    _: 2
                                }, 1024), r($, {
                                    name: "createdAt"
                                }, {
                                    default: e(() => [i(s(o.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), r($, {
                                    name: "action"
                                }, {
                                    default: e(() => [r(L, null, {
                                        default: e(() => [r(D, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: A => n(h).push({
                                                name: "AcademicCourseInchargeShow",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [i(s(a.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), n(y)("course-incharge:edit") ? (p(), g(D, {
                                            key: 0,
                                            icon: "fas fa-edit",
                                            onClick: A => n(h).push({
                                                name: "AcademicCourseInchargeEdit",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [i(s(a.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : v("", !0), n(y)("course-incharge:create") ? (p(), g(D, {
                                            key: 1,
                                            icon: "fas fa-copy",
                                            onClick: A => n(h).push({
                                                name: "AcademicCourseInchargeDuplicate",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: e(() => [i(s(a.$trans("general.duplicate")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : v("", !0), n(y)("course-incharge:delete") ? (p(), g(D, {
                                            key: 2,
                                            icon: "fas fa-trash",
                                            onClick: A => n(f).emit("deleteItem", {
                                                uuid: o.uuid
                                            })
                                        }, {
                                            default: e(() => [i(s(a.$trans("general.delete")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : v("", !0)]),
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