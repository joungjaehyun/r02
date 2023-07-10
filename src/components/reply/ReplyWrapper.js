import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";

// 상태값 초기화
const initState = {
    bno: 0,
    page: 1,
    last: false,
    // 상태를 계속 바꾸게하기 위한 변수
    refresh: false
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
        data.refresh = ! data.refresh
        setData({...data})
    }
    
    const refreshLast = () =>{
        
        data.last =true
        data.refresh = !data.refresh
        setData({...data})
    }
   
    return (  
        <div>
            <ReplyInput bno={bno} refreshLast={refreshLast}></ReplyInput>
            <ReplyList {...data} movePage={movePage}></ReplyList>
        </div>
    );
}
 
export default ReplyWrapper;