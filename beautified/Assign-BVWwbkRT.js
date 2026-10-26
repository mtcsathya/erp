import {
    k as i,
    r as c,
    a as t,
    o as g,
    e as n,
    f as a,
    F as m
} from "./app-BYBn2zfx.js";
const h = {
    __name: "Assign",
    setup(u) {
        const e = i("$trans"),
            r = {
                entityName: "course",
                responseKey: "courses",
                assignTitle: e("global.assign", {
                    attribute: e("academic.course_incharge.course_incharge")
                }),
                entityLabel: e("academic.course.course"),
                inchargeLabel: e("academic.course_incharge.course_incharge"),
                apiActions: {
                    fetchData: "academic/courseIncharge/assignPreRequisite",
                    assign: "academic/courseIncharge/assign"
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
                o = c("AssignIncharge");
            return g(), t(m, null, [n(s, {
                title: a(e)("academic.course_incharge.course_incharge"),
                navs: [{
                    label: a(e)("academic.academic"),
                    path: "Academic"
                }, {
                    label: a(e)("academic.course.course"),
                    path: "AcademicCourse"
                }]
            }, null, 8, ["title", "navs"]), n(o, {
                config: r
            })], 64)
        }
    }
};
export {
    h as
    default
};