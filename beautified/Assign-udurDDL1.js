import {
    k as g,
    r,
    a as s,
    o as t,
    e as n,
    f as e,
    F as m
} from "./app-BYBn2zfx.js";
const h = {
    __name: "Assign",
    setup(p) {
        const a = g("$trans"),
            o = {
                entityName: "program",
                responseKey: "programs",
                assignTitle: a("global.assign", {
                    attribute: a("academic.program_incharge.program_incharge")
                }),
                entityLabel: a("academic.program.program"),
                inchargeLabel: a("academic.program_incharge.program_incharge"),
                apiActions: {
                    fetchData: "academic/programIncharge/assignPreRequisite",
                    assign: "academic/programIncharge/assign"
                },
                entityNameField: "name",
                showDatePicker: !0,
                dragDropInfo: a("incharge.drag_and_drop_info"),
                employeeDragInfo: a("incharge.drag_info"),
                releaseInfo: a("incharge.release_info"),
                dropInfo: a("incharge.drop_info"),
                dragFromInfo: a("incharge.drag_from_info")
            };
        return (_, d) => {
            const c = r("PageHeader"),
                i = r("AssignIncharge");
            return t(), s(m, null, [n(c, {
                title: e(a)("academic.program_incharge.program_incharge"),
                navs: [{
                    label: e(a)("academic.academic"),
                    path: "Academic"
                }, {
                    label: e(a)("academic.program.program"),
                    path: "AcademicProgram"
                }]
            }, null, 8, ["title", "navs"]), n(i, {
                config: o
            })], 64)
        }
    }
};
export {
    h as
    default
};