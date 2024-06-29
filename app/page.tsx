"use client";
import { useState } from "react";
import ListTable from "./List";
import { ViewDetails } from "./ViewDetails";


export default function Home() {
  const [showList,setShowList] = useState(true)
  const [viewData,setViewData] = useState({})
  return(
    <>
      <div style={{padding: '20px'}} >
        {showList && <ListTable setShowList={setShowList} setViewData={setViewData} />}
        {!showList && <ViewDetails setShowList={setShowList} viewData={viewData} />}
      </div>
    </>
  )
}
