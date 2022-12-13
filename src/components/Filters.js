import Rick from "./Rick";
import FilterName from "./FilterName";
import FiltersSpecies from "./FilterSpecies";

const Filters =(props) =>{
    const handleSubmit = (event) => {    //para impedir que en el input de filtrado, al darle a intro, la página refresque
        event.preventDefault();
    }
    return(
        <section className="sectionFilters">
            <form className='containerFilters' onSubmit ={handleSubmit} > 
                <FilterName filterName={props.filterName} handleFilterName = {props.handleFilterName}/>
                <FiltersSpecies filterSpecie={props.filterSpecie} handleFilterSpecie={props.handleFilterSpecie}/>
            </form>
            <Rick/>
        </section>
)

};

export default Filters;