import { Link } from "react-router-dom";

const Sidebar = ({ sort, save, search}) => {
    return ( 
        <div className="sidebar">
            <div className="search-box">
                <Link to='/'><button className='btn-sidebar'>List</button></Link>
            </div>
            <div className="search-box">
                <input type="text" name="" id="search" />
            </div>
            <div className="search-box">
                <button className="btn-sidebar" onClick={() => search(document.getElementById('search').value)}>Search</button>
            </div>
            <div className="search-box">
                <button className="btn-sidebar" onClick={() => sort()}>Sort by price</button>
            </div>
            <div className="search-box">
            <Link to='/saved'><button className='btn-sidebar'>Saved</button></Link>
            </div>
            <div className="search-box">
            <Link to='/aboutUs'><button className='btn-sidebar'>About us</button></Link>
            </div>
        </div>
     );
}
 
export default Sidebar;