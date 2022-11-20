import React from 'react'
import ProfileMenu from "./ProfileMenu";

export default function TopRow() {
  return (
    <div className="flex h-16 border-b-2 border-b-slate-200 py-2 mb-5">
        <div className="flex">
          <img className="" src="/images/logo.svg" alt="Logo" />
        </div>
        <input
          type="text"
          className="flex-grow rounded mx-16 my-2 px-2 border border-x-gray-100 focus:outline-0"
        />
        <ProfileMenu/>
      </div>
  )
}
