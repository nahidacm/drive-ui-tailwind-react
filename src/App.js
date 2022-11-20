import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightContentHeader from "./components/RightContent/RightContentHeader";
import Suggested from "./components/RightContent/Suggested";
import TopRow from "./components/TopRow/TopRow";

function App() {
  return (
    <div className="container mx-auto">
      <TopRow/>
      <div className="flex">
        <LeftColumn/>
        <div className="flex-grow">
          <RightContentHeader/>
          <Suggested/>
        </div>
      </div>
    </div>
  );
}

export default App;
