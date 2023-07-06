
//실제 axios에  전달하고 responseDTO를 받아서 처리해주는 Component

import { useEffect } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";

const ListComponent = ({queryObj}) => {

    // use가 붙으면 component 에서만 쓸수있다.
    // 그외는 자체적으로 제공하는 함수라 생각한다.
    useEffect(()=>{

        getList(queryObj).then(data =>{
            console.log(data)
        })

    },[{...queryObj}])
    
    return (  
        <div>
            <div>List Component</div>
        </div>
    );
}
 
export default ListComponent;