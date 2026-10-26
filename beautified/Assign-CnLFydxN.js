import {
    k as r,
    r as c,
    a as o,
    o as g,
    e as n,
    f as a,
    F as u
} from "./app-BYBn2zfx.js";
const b = {
    __name: "Assign",
    setup(m) {
        const e = r("$trans"),
            t = {
                entityName: "subject",
                responseKey: "subjects",
                assignTitle: e("global.assign", {
                    attribute: e("academic.subject_incharge.subject_incharge")
                }),
                entityLabel: e("academic.subject.subject"),
                inchargeLabel: e("academic.subject_incharge.subject_incharge"),
                apiActions: {
                    fetchData: "academic/subjectIncharge/assignPreRequisite",
                    assign: "academic/subjectIncharge/assign"
                },
                entityNameField: "name",
                showDatePicker: !0,
                dragDropInfo: e("incharge.drag_and_drop_info"),
                employeeDragInfo: e("incharge.drag_info"),
                releaseInfo: e("incharge.release_info"),
                dropInfo: e("incharge.drop_info"),
                dragFromInfo: e("incharge.drag_from_info")
            };
        return (_, d) => {
            const s = c("PageHeader"),
                i = c("AssignIncharge");
            return g(), o(u, null, [n(s, {
                title: a(e)("academic.subject_incharge.subject_incharge"),
                navs: [{
                    label: a(e)("academic.academic"),
                    path: "Academic"
                }, {
                    label: a(e)("academic.subject.subject"),
                    path: "AcademicSubject"
                }]
            }, null, 8, ["title", "navs"]), n(i, {
                config: t,
                "batch-input": !0
            })], 64)
        }
    }
};
export {
    b as
    default
};