import {
    u as T,
    j as V,
    p as g,
    L as N,
    m as b,
    q as k,
    r as i,
    t as q,
    o as f,
    w as r,
    a as L,
    b as w,
    d as A,
    v as h,
    x as d,
    e as l,
    i as R,
    f as y,
    F as U
} from "./app-BYBn2zfx.js";
const P = {
        key: 0,
        class: "grid grid-cols-3 gap-6"
    },
    O = {
        class: "col-span-3 sm:col-span-1"
    },
    j = {
        class: "col-span-3 sm:col-span-1"
    },
    D = {
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
        setup(B, {
            emit: u
        }) {
            const c = T();
            V();
            const v = u,
                _ = B,
                p = {
                    employees: [],
                    layout: "default"
                };
            g(!1), g(!1), N(_.initUrl);
            const a = b({
                ...p
            });
            b({});
            const o = b({
                employees: [],
                isLoaded: !c.query.employees
            });
            return k(async () => {
                o.employees = c.query.employees ? c.query.employees.split(",") : [], o.isLoaded = !0
            }), (t, s) => {
                const m = i("BaseSelectSearch"),
                    n = i("BaseSelect"),
                    $ = i("FilterForm");
                return f(), q($, {
                    "init-form": p,
                    multiple: ["employees"],
                    form: a,
                    onHide: s[2] || (s[2] = e => v("hide"))
                }, {
                    default: r(() => [o.isLoaded ? (f(), L("div", P, [A("div", O, [o.isLoaded ? (f(), q(m, {
                        key: 0,
                        multiple: "",
                        name: "employees",
                        label: t.$trans("global.select", {
                            attribute: t.$trans("employee.employee")
                        }),
                        modelValue: a.employees,
                        "onUpdate:modelValue": s[0] || (s[0] = e => a.employees = e),
                        "value-prop": "uuid",
                        "init-search": o.employees,
                        "search-key": "search",
                        "search-action": "employee/list"
                    }, {
                        selectedOption: r(e => [h(d(e.value.name) + " (" + d(e.value.codeNumber) + ") ", 1)]),
                        listOption: r(e => [h(d(e.option.name) + " (" + d(e.option.codeNumber) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "init-search"])) : w("", !0)]), A("div", j, [l(n, {
                        name: "layout",
                        label: t.$trans("global.select", {
                            attribute: t.$trans("general.layout")
                        }),
                        modelValue: a.layout,
                        "onUpdate:modelValue": s[1] || (s[1] = e => a.layout = e),
                        "label-prop": "name",
                        "value-prop": "value",
                        options: [{
                            value: "default",
                            name: t.$trans("academic.timetable.layouts.default")
                        }, {
                            value: "uniform",
                            name: t.$trans("academic.timetable.layouts.uniform")
                        }, {
                            value: "merged",
                            name: t.$trans("academic.timetable.layouts.merged")
                        }, {
                            value: "grouped",
                            name: t.$trans("academic.timetable.layouts.grouped")
                        }]
                    }, null, 8, ["label", "modelValue", "options"])])])) : w("", !0)]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    E = {
        name: "AcademicTeacherTimetable"
    },
    M = Object.assign(E, {
        setup(B) {
            const u = T(),
                c = R();
            V();
            let v = [],
                _ = [];
            const p = "academic/timetable/",
                a = g(!0),
                o = g(!1),
                t = b({
                    templates: []
                }),
                s = async () => {
                    u.query.employees && window.open("/app/academic/timetable/teacher/export?" + new URLSearchParams(u.query).toString(), "_blank")
                };
            return k(async () => {}), (m, n) => {
                const $ = i("BaseButton"),
                    e = i("PageHeaderAction"),
                    C = i("PageHeader"),
                    F = i("ParentTransition"),
                    H = i("BaseCard");
                return f(), L(U, null, [l(C, {
                    title: m.$trans(y(u).meta.label),
                    navs: [{
                        label: m.$trans("academic.academic"),
                        path: "Academic"
                    }, {
                        label: m.$trans("academic.timetable.timetable"),
                        path: "AcademicTimetable"
                    }]
                }, {
                    default: r(() => [l(e, {
                        name: "AcademicTeacherTimetable",
                        title: m.$trans("academic.timetable.teacher_timetable"),
                        actions: y(v),
                        "dropdown-actions": y(_),
                        onToggleFilter: n[1] || (n[1] = S => a.value = !a.value)
                    }, {
                        default: r(() => [l($, {
                            design: "white",
                            onClick: n[0] || (n[0] = S => y(c).push({
                                name: "AcademicTimetableIndex"
                            }))
                        }, {
                            default: r(() => [h(d(m.$trans("academic.timetable.timetable")), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["title", "actions", "dropdown-actions"])]),
                    _: 1
                }, 8, ["title", "navs"]), l(F, {
                    appear: "",
                    visibility: a.value
                }, {
                    default: r(() => [l(D, {
                        "is-loading": o.value,
                        onAfterFilter: s,
                        "init-url": p,
                        "pre-requisites": t,
                        onHide: n[2] || (n[2] = S => a.value = !1)
                    }, null, 8, ["is-loading", "pre-requisites"])]),
                    _: 1
                }, 8, ["visibility"]), l(F, {
                    appear: "",
                    visibility: !0
                }, {
                    default: r(() => [l(H, {
                        "no-padding": "",
                        "no-content-padding": "",
                        "is-loading": o.value
                    }, null, 8, ["is-loading"])]),
                    _: 1
                })], 64)
            }
        }
    });
export {
    M as
    default
};