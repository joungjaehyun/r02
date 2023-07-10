import { useEffect, useState } from "react";
import { deleteReply, getReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer:''
}


const ReplyRead = ({rno,cancelRead,refreshPage}) => {
    
    console.log("ReplyRead............... " + rno)

    const [reply, setReply] =useState(initState)

    useEffect(()=>{

        getReply(rno).then(data =>{
            console.log(data)
            setReply(data)
        })


    },[rno])

    const handleClickDelete =  () =>{

        deleteReply(rno).then(data =>{
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage()
        })
    }

    
    return (  
        <div className="m-8 bg-blue-200 border-4 ">
            <div>Reply Read {rno}</div>

            <div>
                <div>{rno}</div>
                <div>{reply.replyText}</div>
                <div>{reply.replyer}</div>
            </div>

            <div>
                <button>MODIFY</button>
                <button onClick={handleClickDelete}>DELETE</button>
                <button onClick={cancelRead}>CANCEL</button>
            </div>
        
        </div>
    );
}
 
export default ReplyRead;