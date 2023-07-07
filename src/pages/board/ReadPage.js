import { useParams } from "react-router-dom";

const ReadPage = () => {

    const {bno} = useParams()

    console.log(bno)

    return (  
        <div>
            Board Read  Page
        </div>
    );
}
 
export default ReadPage;