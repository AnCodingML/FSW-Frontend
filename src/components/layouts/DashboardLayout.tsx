import { useState } from "react"
import Navbar from "../fragments/Dashboard/Navbar"
import SideBar from "../fragments/Dashboard/Sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false)
  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen)
  }
  const closeAside = () => {
    setIsAsideOpen(false)
  }
  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <Navbar toggleAside={toggleAside} />
      <div className="flex flex-row flex-grow w-full mt-40 md:mt-20">
        {/* Sidebar */}
        <SideBar isAsideOpen={isAsideOpen} closeAside={closeAside} />
        {/* Main */}
        <main className="flex flex-grow ml-[10px] lg:ml-[240px] pt-5 lg:pt-10">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
