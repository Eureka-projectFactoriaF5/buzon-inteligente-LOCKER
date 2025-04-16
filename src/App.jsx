import PackageSizeCard from './components/PackageSizeCard'
import PackageSizeGroup from './components/PackageSizeGroup'
import PendingPackages from './pages/PendingPackages'
import ViewPackageSize from './pages/ViewPackageSize'
import './styles/styles.css'

export default function App() {

  return (
    <>
    {/* comenté la otra vista para probar, queda pendiente hacer las rutas */}
      <PendingPackages />
      {/* <ViewPackageSize /> */}
    </>
  )
}