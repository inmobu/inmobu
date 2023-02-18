import PropertyCard from '../../components/listings/PropertyCard';
import PropertyCardSkeleton from  '../../components/listings/PropertyCardSkeleton';
import PropertyCardEmpty from '../../components/listings/PropertyCardEmpty';

const Results = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-4 px-8 gap-x-4 gap-y-6 ">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCardSkeleton/>  
        <PropertyCardEmpty/>
        <PropertyCardEmpty/>
        <PropertyCardEmpty/>
    </div>
    )
}

export default Results;