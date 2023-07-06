import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";


const checkNull = (obj) => {

    const result = {}

    for (const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if (attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result
}



const ListPage = () => {

    // Query String 처리
    const [search, setSearch] = useSearchParams()

    console.log(search)
    // page size 값은 없다면 초기값 설정
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    // object로  묶어주기
    const queryObj = checkNull({ page, size, type, keyword })


    console.log("queryObj---------------- ")
    console.log(queryObj)

    console.log("Board List go")

    const movePage = (num) => {
        console.log("NUM---------------------------- " + num)
        // URL 변경시 useNavigate, setSearch 
        queryObj.page = num
        setSearch({ ...queryObj })
    }

    return (
        <div>
            {/* queryobj를 전달 해준다.  */}
            Board List
            <ListComponent queryObj={queryObj} movePage={movePage}></ListComponent>
        </div>
    );
}

export default ListPage;