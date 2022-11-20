import { Outlet } from "react-router-dom";
import LeftColumn from "../components/LeftColumn/LeftColumn";
import TopRow from "../components/TopRow/TopRow";

export default function Layout() {
  return (
    <div className="container mx-auto">
      <TopRow/>
      <div className="flex">
        <LeftColumn/>
        <Outlet />
      </div>
    </div>
  )
}
