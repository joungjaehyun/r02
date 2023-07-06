import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";

const ListPage = () => {

    // Query String 처리
    const [search, setSearch]= useSearchParams()
    
    console.log(search)
    // page size 값은 없다면 초기값 설정
    const page = search.get("page")|| 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    // object로  묶어주기
    const queryObj = {page,size,type,keyword}


    console.log("queryObj---------------- " )
    console.log(queryObj)

    console.log("Board List go")
    return ( 
            <div>
                {/* queryobj를 전달 해준다.  */}
                Board List Page
                <ListComponent queryObj={queryObj}></ListComponent>
            </div>
     );
}
 
export default ListPage;