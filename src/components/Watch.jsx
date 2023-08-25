const Watch = ({ watch: watch, save }) => {
    return ( 
        <div className="Container">
            <div className="watch">
            <div className="image"/>
            <div className="details">
                Model: {watch.model} <br />
                Price: {watch.price} $ <br />
                Manufacturer: {watch.make}
            </div> 
            <button className="btn" onClick={() => save(watch)}>Save</button>
            </div>
        </div>
        
     );
}
 
export default Watch;