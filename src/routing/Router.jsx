import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FirstView } from "../pages/FirstView";
import { ViewDeliveryAcces } from "../pages/ViewDeliveryAcces";
import { ViewUserAcces } from "../pages/ViewUserAcces";
import { ViewPackageSize } from "../pages/ViewPackageSize";
import { PendingPackages } from "../pages/PendingPackages";
import { ViewDeliveryMan } from "../pages/ViewDeliveryMan";

const AppRouter = () => (
        <Routes>
            <Route path="/" element={<FirstView />} />
            <Route path="/delivery-access" element={<ViewDeliveryAcces />} />
            <Route path="/delivery" element={<ViewDeliveryMan />} />
            <Route path="/user-access" element={<ViewUserAcces />} />
            <Route path="/package-size" element={<ViewPackageSize />} />
            <Route path="/pending-packages" element={<PendingPackages />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
);

export default AppRouter;