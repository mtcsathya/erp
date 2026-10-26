import {
    k as s,
    r as c,
    a as o,
    o as h,
    e as n,
    f as e,
    F as g
} from "./app-BYBn2zfx.js";
const b = {
    __name: "Assign",
    setup(m) {
        const a = s("$trans"),
            t = {
                entityName: "batch",
                responseKey: "batches",
                assignTitle: a("global.assign", {
                    attribute: a("academic.batch_incharge.batch_incharge")
                }),
                entityLabel: a("academic.batch.batch"),
                inchargeLabel: a("academic.batch_incharge.batch_incharge"),
                apiActions: {
                    fetchData: "academic/batchIncharge/assignPreRequisite",
                    assign: "academic/batchIncharge/assign"
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
            const i = c("PageHeader"),
                r = c("AssignIncharge");
            return h(), o(g, null, [n(i, {
                title: e(a)("academic.batch_incharge.batch_incharge"),
                navs: [{
                    label: e(a)("academic.academic"),
                    path: "Academic"
                }, {
                    label: e(a)("academic.batch.batch"),
                    path: "AcademicBatch"
                }]
            }, null, 8, ["title", "navs"]), n(r, {
                config: t
            })], 64)
        }
    }
};
export {
    b as
    default
};