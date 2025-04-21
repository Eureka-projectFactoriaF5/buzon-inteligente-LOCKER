
import React from "react";
import { ViewPackageSize } from "./pages/ViewPackageSize";
import PackageSizeCard from "./components/PackageSizeCard";
import PackageSizeGroup from "./components/PackageSizeGroup";
import PendingPackages from "./pages/PendingPackages";
import "./styles/styles.css";

export default function App() {
  return (
    <>
      <PendingPackages />
      <ViewPackageSize />
    </>
  )
}
