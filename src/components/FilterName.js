const FilterName = (props) =>{
    
    const handleSubmit = (ev) =>{
        ev.preventDefault()
        props.handleFilterName(ev);
    };
    return (
        <>
         <label >Filtar por Nombre:</label>
            <input 
                type="text" 
                name="name"
                id= "name"
                value={props.filterName}
                onChange = {handleSubmit}
            
          />
        </>

    )
};

export default FilterName;