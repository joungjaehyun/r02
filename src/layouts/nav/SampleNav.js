import { Link } from "react-router-dom";

const SampleNav = () => {
    return (
        <div className="flex m-6 p-6 text-white font-extrabold ">
          
            <div className="m-5 text-4xl border-1">
                <Link to="/">Main</Link>
            </div>
            <div className="m-5 text-4xl border-1">
                <Link to="/about">About</Link>
            </div>
            <div className="m-5 text-4xl border-1">
                <Link to="/board/list">Board</Link>
            </div>
        </div>
    );
}

export default SampleNav;