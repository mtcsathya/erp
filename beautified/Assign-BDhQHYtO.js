import {
    k as s,
    r as n,
    a as o,
    o as m,
    e as t,
    f as a,
    F as d
} from "./app-BYBn2zfx.js";
const h = {
    __name: "Assign",
    setup(g) {
        const e = s("$trans"),
            r = {
                entityName: "department",
                responseKey: "departments",
                assignTitle: e("global.assign", {
                    attribute: e("academic.department_incharge.department_incharge")
                }),
                entityLabel: e("academic.department.department"),
                inchargeLabel: e("academic.department_incharge.department_incharge"),
                apiActions: {
                    fetchData: "academic/departmentIncharge/assignPreRequisite",
                    assign: "academic/departmentIncharge/assign"
                },
                entityNameField: "name",
                showDatePicker: !0,
                dragDropInfo: e("incharge.drag_and_drop_info"),
                employeeDragInfo: e("incharge.drag_info"),
                releaseInfo: e("incharge.release_info"),
                dropInfo: e("incharge.drop_info"),
                dragFromInfo: e("incharge.drag_from_info")
            };
        return (p, _) => {
            const c = n("PageHeader"),
                i = n("AssignIncharge");
            return m(), o(d, null, [t(c, {
                title: a(e)("academic.department_incharge.department_incharge"),
                navs: [{
                    label: a(e)("academic.academic"),
                    path: "Academic"
                }, {
                    label: a(e)("academic.department.department"),
                    path: "AcademicDepartment"
                }]
            }, null, 8, ["title", "navs"]), t(i, {
                config: r
            })], 64)
        }
    }
};
export {
    h as
    default
};