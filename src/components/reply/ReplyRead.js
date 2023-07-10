import { useEffect, useState } from "react";
import { getReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer:''
}


const ReplyRead = ({rno,cancelRead}) => {
    
    console.log("ReplyRead............... " + rno)

    const [reply, setReply] =useState(initState)

    useEffect(()=>{

        getReply(rno).then(data =>{
            console.log(data)
            setReply(data)
        })


    },[rno])

    
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
                <button>DELETE</button>
                <button onClick={cancelRead}>CANCEL</button>
            </div>
        
        </div>
    );
}
 
export default ReplyRead;