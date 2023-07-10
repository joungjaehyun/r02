import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";

// 상태값 초기화
const initState = {
    bno: 0,
    page: 1,
    last: false
}

// bno 1개가 propertities로 내려온다
const ReplyWrapper = ({bno}) => {
   
    // 상태 함수 설정
    const [data,setData] = useState(initState)

    // bno가 props니까 바뀔수있게사용
    // bno 및 last를 변경해준다.
    useEffect(()=>{

        data.bno = bno
        data.last =  true
        data.page = 1
        setData({...data})

    },[bno])

    // page를 바꿔주는 기능 설정 num 을 받아서 변경
    const movePage =  (num) => {
        console.log(num)
        data.page = num
        // 변경이 안된다. why? last가 true값으로 고정되있기때문에 last를 false로 변경해 줘야된다.
        data.last = false
        setData({...data})
    }
   
    return (  
        <div>

            <ReplyList {...data} movePage={movePage}></ReplyList>
        </div>
    );
}
 
export default ReplyWrapper;