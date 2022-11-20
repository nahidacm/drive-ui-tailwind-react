import React from 'react'
import RightContentHeader from "../components/RightContent/RightContentHeader";
import Suggested from "../components/RightContent/Suggested";

export default function MyDrive() {
  return (
    <div className="flex-grow">
        <RightContentHeader/>
        <Suggested/>
    </div>
  )
}
