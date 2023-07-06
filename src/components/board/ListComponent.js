
//실제 axios에  전달하고 responseDTO를 받아서 처리해주는 Component

import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null
}


const ListComponent = ({queryObj,movePage}) => {
    // rendering시 에러방지
    const [listData, setListData] = useState(initState)

    // use가 붙으면 component 에서만 쓸수있다.
    // 그외는 자체적으로 제공하는 함수라 생각한다.
    useEffect(()=>{

        getList(queryObj).then(data =>{
            console.log(data)
            setListData(data)
        })

    },[queryObj])

    const handleClickPage = (pageNum) =>{
        movePage(pageNum)
    }
    
    return (  
        <div>
            <div>List Component</div>
            <div>
                <ul>
                    {listData.dtoList.map(
                     ({bno,title,replyCount})   => <li key={bno}>{bno} - {title}
                    - [{replyCount}]</li>)}
                </ul>
            </div>
            <div className="m-4 p-2">
                {/* 페이지클릭시 movePage 호출이 되는지 || 파라미터 갯수들이 얼마나 필요한지  */}
                <ul className="flex">
                    {listData.prev ? <li className="m-2 p-2 bg-blue-500 border-2 text-white font-bold rounded-lg"
                    onClick={()=> handleClickPage(listData.start-1)}
                    >PREV</li>:<></>}
                    {listData.pageNums.map(num => <li 
                    className="m-2 p-2 bg-blue-500 border-2 text-white font-bold rounded-lg"
                      key={num}
                      onClick={()=>handleClickPage(num)}
                      >{num}</li>)}
                    {listData.next ? <li className="m-2 p-2 bg-blue-500 border-2 text-white font-bold rounded-lg"
                    onClick={()=> handleClickPage(listData.end+1)}
                    >NEXT</li>:<></>}     
                </ul>
            </div>
        </div>
    );
}
 
export default ListComponent;