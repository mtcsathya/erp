import {
    m as I,
    r as l,
    t as f,
    o as i,
    w as a,
    d as y,
    e as n,
    k as G,
    p as N,
    L as ae,
    H as E,
    f as m,
    b as g,
    v as d,
    x as u,
    i as se,
    j as oe,
    c as P,
    a as h,
    F as H,
    y as M
} from "./app-BYBn2zfx.js";
import {
    i as ne,
    t as le,
    a as re
} from "./table-FwhM-Z75.js";
const ie = {
        class: "grid grid-cols-3 gap-6"
    },
    ue = {
        class: "col-span-3 sm:col-span-1"
    },
    de = {
        __name: "Filter",
        emits: ["hide"],
        setup(V, {
            emit: k
        }) {
            const C = k,
                A = {
                    name: ""
                },
                _ = I({
                    ...A
                });
            return ($, b) => {
                const v = l("BaseInput"),
                    r = l("FilterForm");
                return i(), f(r, {
                    "init-form": A,
                    form: _,
                    onHide: b[1] || (b[1] = T => C("hide"))
                }, {
                    default: a(() => [y("div", ie, [y("div", ue, [n(v, {
                        type: "text",
                        modelValue: _.name,
                        "onUpdate:modelValue": b[0] || (b[0] = T => _.name = T),
                        name: "name",
                        label: $.$trans("team.props.name")
                    }, null, 8, ["modelValue", "label"])])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    },
    me = {
        class: "grid grid-cols-3 gap-6"
    },
    ce = {
        class: "col-span-3 sm:col-span-1"
    },
    pe = {
        class: "mt-4 grid grid-cols-3 gap-6"
    },
    fe = {
        class: "col-span-3 sm:col-span-1"
    },
    ge = {
        class: "col-span-3 sm:col-span-1"
    },
    _e = {
        name: "TeamUpdateUserAccess"
    },
    be = Object.assign(_e, {
        props: {
            selected: {
                type: Object,
                required: !0
            },
            selectAll: {
                type: Boolean,
                required: !0
            },
            selectedTeams: {
                type: Array,
                required: !0
            },
            preRequisites: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["completed"],
        setup(V, {
            emit: k
        }) {
            const C = G("emitter"),
                A = k,
                _ = V,
                $ = {
                    action: "assign",
                    role: "",
                    users: [],
                    selectAll: !1,
                    teams: []
                },
                b = "team/";
            N(!1);
            const v = ae(b),
                r = I({
                    ...$
                }),
                T = I({
                    isLoaded: !0
                }),
                B = async () => {
                    r.selectAll = !1, C.emit("listItems"), A("completed")
                };
            return E([() => _.selectAll, () => _.selectedTeams], ([c, t]) => {
                r.selectAll = c, r.teams = t
            }, {
                immediate: !0
            }), (c, t) => {
                const F = l("BaseRadioGroup"),
                    w = l("BaseSelectSearch"),
                    q = l("BaseSelect"),
                    R = l("FormAction");
                return i(), f(R, {
                    "no-card": "",
                    "keep-adding": !1,
                    "init-url": b,
                    action: "updateUsers",
                    "init-form": $,
                    form: r,
                    "after-submit": B
                }, {
                    default: a(() => [y("div", me, [y("div", ce, [n(F, {
                        options: [{
                            label: c.$trans("general.assign"),
                            value: "assign"
                        }, {
                            label: c.$trans("general.revoke"),
                            value: "revoke"
                        }],
                        name: "action",
                        modelValue: r.action,
                        "onUpdate:modelValue": t[0] || (t[0] = e => r.action = e),
                        error: m(v).action,
                        "onUpdate:error": t[1] || (t[1] = e => m(v).action = e),
                        horizontal: ""
                    }, null, 8, ["options", "modelValue", "error"])])]), y("div", pe, [y("div", fe, [T.isLoaded ? (i(), f(w, {
                        key: 0,
                        multiple: "",
                        name: "users",
                        label: c.$trans("global.select", {
                            attribute: c.$trans("user.user")
                        }),
                        modelValue: r.users,
                        "onUpdate:modelValue": t[2] || (t[2] = e => r.users = e),
                        error: m(v).users,
                        "onUpdate:error": t[3] || (t[3] = e => m(v).users = e),
                        "init-search": r.users,
                        "search-action": "user/list"
                    }, {
                        selectedOption: a(e => [d(u(e.value.profile.name) + " (" + u(e.value.email) + ") ", 1)]),
                        listOption: a(e => [d(u(e.option.profile.name) + " (" + u(e.option.email) + ") ", 1)]),
                        _: 1
                    }, 8, ["label", "modelValue", "error", "init-search"])) : g("", !0)]), y("div", ge, [T.isLoaded ? (i(), f(q, {
                        key: 0,
                        name: "role",
                        label: c.$trans("global.select", {
                            attribute: c.$trans("team.config.role.role")
                        }),
                        modelValue: r.role,
                        "onUpdate:modelValue": t[4] || (t[4] = e => r.role = e),
                        error: m(v).role,
                        "onUpdate:error": t[5] || (t[5] = e => m(v).role = e),
                        options: V.preRequisites.roles
                    }, null, 8, ["label", "modelValue", "error", "options"])) : g("", !0)])])]),
                    _: 1
                }, 8, ["form"])
            }
        }
    }),
    ve = {
        key: 0
    },
    ke = {
        class: "mt-8 px-4 pb-4"
    },
    $e = {
        name: "TeamList"
    },
    Ce = Object.assign($e, {
        setup(V) {
            const k = se(),
                C = oe(),
                A = G("emitter"),
                _ = P(() => C.getters["auth/user/currentTeamId"]),
                $ = P(() => C.getters["auth/user/isSuperAdmin"]);
            let b = ["filter"];
            $.value && b.unshift("create");
            const v = "team/",
                r = N(!1),
                T = I({}),
                B = I({
                    selectAll: !1,
                    selectedTeams: [],
                    activeTab: "updateUserAccess"
                }),
                c = I({}),
                t = I({
                    ...ne
                }),
                F = e => {
                    Object.assign(c, e), t.pageItems = c.data.map(s => s.uuid)
                },
                w = () => {
                    t.items = [], t.pageItems = [], t.all = !1
                },
                q = e => {
                    Object.assign(T, e)
                },
                R = async e => {
                    e.id != _.value && await C.dispatch("team/select", {
                        uuid: e.uuid
                    }).then(async s => {
                        await C.dispatch("auth/user/fetch"), location.reload()
                    }).catch(s => {})
                };
            return E(() => [t.items, t.pageItems], ([e, s], [L, O]) => {
                B.selectedTeams = e, t.all = re(t)
            }), (e, s) => {
                const L = l("PageHeaderAction"),
                    O = l("PageHeader"),
                    D = l("ParentTransition"),
                    z = l("BaseArrayCheckbox"),
                    x = l("BaseCheckbox"),
                    S = l("DataCell"),
                    j = l("TextMuted"),
                    U = l("FloatingMenuItem"),
                    J = l("FloatingMenu"),
                    K = l("DataRow"),
                    Q = l("BaseButton"),
                    W = l("DataTable"),
                    X = l("TabItem"),
                    Y = l("TabGroup"),
                    Z = l("BaseCard"),
                    ee = l("ListItem");
                return i(), f(ee, {
                    "init-url": v,
                    "pre-requisites": !0,
                    onSetPreRequisites: q,
                    onSetItems: F
                }, {
                    header: a(() => [n(O, {
                        title: e.$trans("team.team")
                    }, {
                        default: a(() => [n(L, {
                            url: "teams/",
                            name: "Team",
                            title: e.$trans("team.team"),
                            actions: m(b),
                            "dropdown-actions": ["print", "pdf", "excel"],
                            onToggleFilter: s[0] || (s[0] = o => r.value = !r.value)
                        }, null, 8, ["title", "actions"])]),
                        _: 1
                    }, 8, ["title"])]),
                    filter: a(() => [n(D, {
                        appear: "",
                        visibility: r.value
                    }, {
                        default: a(() => [n(de, {
                            onRefresh: s[1] || (s[1] = o => m(A).emit("listItems")),
                            "pre-requisites": T,
                            onHide: s[2] || (s[2] = o => r.value = !1)
                        }, null, 8, ["pre-requisites"])]),
                        _: 1
                    }, 8, ["visibility"])]),
                    default: a(() => [n(D, {
                        appear: "",
                        visibility: !0
                    }, {
                        default: a(() => [n(W, {
                            onToggleSelectAll: s[6] || (s[6] = o => t.items = m(le)(o, t)),
                            onToggleGlobalSelect: s[7] || (s[7] = o => t.global = !t.global),
                            selected: t,
                            header: c.headers,
                            meta: c.meta,
                            module: "team",
                            onRefresh: s[8] || (s[8] = o => m(A).emit("listItems"))
                        }, {
                            actionButton: a(() => [$.value ? (i(), f(Q, {
                                key: 0,
                                onClick: s[5] || (s[5] = o => m(k).push({
                                    name: "TeamCreate"
                                }))
                            }, {
                                default: a(() => [d(u(e.$trans("global.add", {
                                    attribute: e.$trans("team.team")
                                })), 1)]),
                                _: 1
                            })) : g("", !0)]),
                            default: a(() => [(i(!0), h(H, null, M(c.data, o => (i(), f(K, {
                                key: o.uuid,
                                onDoubleClick: p => m(k).push({
                                    name: "TeamShow",
                                    params: {
                                        uuid: o.uuid
                                    }
                                })
                            }, {
                                default: a(() => [$.value ? (i(), f(S, {
                                    key: 0,
                                    name: "selectAll"
                                }, {
                                    default: a(() => [t.global ? g("", !0) : (i(), f(z, {
                                        key: 0,
                                        items: t.items,
                                        "onUpdate:items": s[3] || (s[3] = p => t.items = p),
                                        value: o.uuid
                                    }, null, 8, ["items", "value"])), t.global ? (i(), f(x, {
                                        key: 1,
                                        modelValue: t.global,
                                        "onUpdate:modelValue": s[4] || (s[4] = p => t.global = p)
                                    }, null, 8, ["modelValue"])) : g("", !0)]),
                                    _: 2
                                }, 1024)) : g("", !0), n(S, {
                                    name: "name"
                                }, {
                                    default: a(() => [d(u(o.name) + " ", 1), o.id == _.value ? (i(), h("span", ve, [...s[10] || (s[10] = [y("i", {
                                        class: "fas fa-check-circle fa-lg text-success cursor-pointer"
                                    }, null, -1)])])) : g("", !0), o.code ? (i(), f(j, {
                                        key: 1,
                                        block: "",
                                        class: "text-xs"
                                    }, {
                                        default: a(() => [d(u(o.code), 1)]),
                                        _: 2
                                    }, 1024)) : g("", !0)]),
                                    _: 2
                                }, 1024), n(S, {
                                    name: "organization"
                                }, {
                                    default: a(() => [d(u(o.organization?.name || "-"), 1)]),
                                    _: 2
                                }, 1024), n(S, {
                                    name: "users"
                                }, {
                                    default: a(() => [(i(!0), h(H, null, M(o.users, p => (i(), h("div", {
                                        key: p.uuid
                                    }, [d(u(p.profile.name) + " ", 1), n(j, null, {
                                        default: a(() => [d("(" + u(p.email) + ")", 1)]),
                                        _: 2
                                    }, 1024), n(j, {
                                        block: ""
                                    }, {
                                        default: a(() => [d(u(p.roleNames.map(te => te.toUpperCase()).join(", ")), 1)]),
                                        _: 2
                                    }, 1024)]))), 128))]),
                                    _: 2
                                }, 1024), n(S, {
                                    name: "createdAt"
                                }, {
                                    default: a(() => [d(u(o.createdAt.formatted), 1)]),
                                    _: 2
                                }, 1024), n(S, {
                                    name: "action"
                                }, {
                                    default: a(() => [n(J, null, {
                                        default: a(() => [n(U, {
                                            icon: "fas fa-arrow-circle-right",
                                            onClick: p => m(k).push({
                                                name: "TeamShow",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: a(() => [d(u(e.$trans("general.show")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), o.id != _.value ? (i(), f(U, {
                                            key: 0,
                                            icon: "fas fa-check-circle",
                                            onClick: p => R(o)
                                        }, {
                                            default: a(() => [d(u(e.$trans("global.select", {
                                                attribute: e.$trans("team.team")
                                            })), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])) : g("", !0), n(U, {
                                            icon: "fas fa-cog",
                                            onClick: p => m(k).push({
                                                name: "TeamConfig",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: a(() => [d(u(e.$trans("team.config.config")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), n(U, {
                                            icon: "fas fa-edit",
                                            onClick: p => m(k).push({
                                                name: "TeamEdit",
                                                params: {
                                                    uuid: o.uuid
                                                }
                                            })
                                        }, {
                                            default: a(() => [d(u(e.$trans("general.edit")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"]), n(U, {
                                            icon: "fas fa-trash",
                                            onClick: p => m(A).emit("deleteItem", {
                                                uuid: o.uuid
                                            })
                                        }, {
                                            default: a(() => [d(u(e.$trans("general.delete")), 1)]),
                                            _: 1
                                        }, 8, ["onClick"])]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1032, ["onDoubleClick"]))), 128))]),
                            _: 1
                        }, 8, ["selected", "header", "meta"])]),
                        _: 1
                    }), t.items.length > 0 && $.value ? (i(), f(D, {
                        key: 0,
                        appear: "",
                        visibility: !0
                    }, {
                        default: a(() => [n(Z, {
                            class: "mt-4",
                            "no-padding": "",
                            "no-content-padding": ""
                        }, {
                            title: a(() => [d(u(e.$trans("general.action")), 1)]),
                            default: a(() => [n(Y, null, {
                                default: a(() => [n(X, {
                                    first: "",
                                    label: e.$trans("team.config.user_access"),
                                    onClick: s[9] || (s[9] = o => B.activeTab = "updateUserAccess"),
                                    "is-active": B.activeTab == "updateUserAccess"
                                }, null, 8, ["label", "is-active"])]),
                                _: 1
                            }), y("div", ke, [B.activeTab == "updateUserAccess" ? (i(), f(be, {
                                key: 0,
                                selected: t,
                                "select-all": B.selectAll,
                                "selected-teams": B.selectedTeams,
                                onCompleted: w,
                                "pre-requisites": T
                            }, null, 8, ["selected", "select-all", "selected-teams", "pre-requisites"])) : g("", !0)])]),
                            _: 1
                        })]),
                        _: 1
                    })) : g("", !0)]),
                    _: 1
                })
            }
        }
    });
export {
    Ce as
    default
};