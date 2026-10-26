import {
    k as r,
    r as a,
    a as t,
    o as d,
    e as n,
    f as e,
    F as g
} from "./app-BYBn2zfx.js";
const f = {
    __name: "Assign",
    setup(m) {
        const i = r("$trans"),
            s = {
                entityName: "division",
                responseKey: "divisions",
                assignTitle: i("global.assign", {
                    attribute: i("academic.division_incharge.division_incharge")
                }),
                entityLabel: i("academic.division.division"),
                inchargeLabel: i("academic.division_incharge.division_incharge"),
                apiActions: {
                    fetchData: "academic/divisionIncharge/assignPreRequisite",
                    assign: "academic/divisionIncharge/assign"
                },
                entityNameField: "name",
                showDatePicker: !0,
                dragDropInfo: i("incharge.drag_and_drop_info"),
                employeeDragInfo: i("incharge.drag_info"),
                releaseInfo: i("incharge.release_info"),
                dropInfo: i("incharge.drop_info"),
                dragFromInfo: i("incharge.drag_from_info")
            };
        return (_, l) => {
            const o = a("PageHeader"),
                c = a("AssignIncharge");
            return d(), t(g, null, [n(o, {
                title: e(i)("academic.division_incharge.division_incharge"),
                navs: [{
                    label: e(i)("academic.academic"),
                    path: "Academic"
                }, {
                    label: e(i)("academic.division.division"),
                    path: "AcademicDivision"
                }]
            }, null, 8, ["title", "navs"]), n(c, {
                config: s
            })], 64)
        }
    }
};
export {
    f as
    default
};