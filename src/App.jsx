import { ViewPackageSize } from "./pages/ViewPackageSize";
import { FirstView } from "./pages/FirstView";
import { ViewDeliveryAcces } from "./pages/ViewDeliveryAcces";
import { ViewUserAcces } from "./pages/ViewUserAcces";
import { PackageSizeCard } from "./components/PackageSizeCard";
import { PackageSizeGroup } from "./components/PackageSizeGroup";
import { ViewDeliveryMan } from "./pages/ViewDeliveryMan";
import  { PendingPackages } from "./pages/PendingPackages";
import "./styles/styles.css";

export default function App() {
  return (
    <>
     <FirstView />
     <ViewDeliveryAcces />
     <ViewPackageSize /> 
      <ViewDeliveryMan />
      <ViewUserAcces />
      <PendingPackages />
      <ViewPackageSize />
    </>
  )
}
