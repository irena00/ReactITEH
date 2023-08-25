import Watch from "./Watch";

const List = ({ watches, save }) => {
    return ( 
        <div className="list">
            {watches && watches.map((watch) => (
                <Watch watch={watch} key={watch.id} save={save}/>
            ))}
        </div>
     );
}
 
export default List;