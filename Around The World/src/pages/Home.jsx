
import CountryList from "../components/CountryList/CountryList";
import EmptySearch from "../components/Emptysearch/EmptySearch";
import RegionMenu from "../components/RegionMenu/RegionMenu";
import SearchInput from "../components/SearchInput/SearchInput"; // Corrected casing
 // Corrected casing
import { useFetchData } from "../useFetchData";

export default function Home() {
    const {
        result,
        filteredCountries,
        isError,
        isLoading,
        setFilteredCountries,
    } = useFetchData();
console.log(isLoading);

    return (
        <>
            {isError && <EmptySearch />}
            {isLoading && (
                <div className="flex items-center justify-center min-h-screen">
                    <span className="loader"></span>
                </div>
            )}
            {!isError && !isLoading && (
                <>
                    <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
                        <SearchInput
                            countriesList={result}
                            filterCountriesList={setFilteredCountries}
                        />
                        <RegionMenu
                            countriesList={result}
                            filterCountriesList={setFilteredCountries}
                        />
                    </div>
                    <CountryList data={filteredCountries} isLoading={isLoading} />
                </>
            )}
        </>
    );
}


