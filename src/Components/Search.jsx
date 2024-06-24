import 'boxicons';


export const Search = ({onLocationChange,onLocationSubmit}) => {
   return(
    
    <>
    
    <form onSubmit={onLocationSubmit}>
<div className="input-group mb-3">
    <input onChange={onLocationChange} type="text" className="form-control" placeholder="Search for your City" aria-label="City" aria-describedby="basic-addon2" />
    <span className="input-group-text" id="basic-addon2">
        <button className='search-btn' type='submit'>
        <box-icon name='search' color='#002B99'></box-icon>
        </button>
    </span>
    </div>
    </form>
    </>
   ); 
}