import {FC} from "react";
import dynamic from "next/dynamic";

const AdminCreateServiceComponent = dynamic(() => import("components/Admin/AdminEditorComponent"), {
    ssr: false
});
const AdminAuthProvider = dynamic(() => import("@hoc/AdminAuthProvider"), {
    ssr: false
});
const AdminLayout = dynamic(() => import("@layouts/AdminLayout"), {
    ssr: false
});

const AdminEditorPage: FC = () => {
    return (
        <AdminAuthProvider>
            <AdminLayout>
                <AdminCreateServiceComponent/>
            </AdminLayout>
        </AdminAuthProvider>
    )
}

export default AdminEditorPage;