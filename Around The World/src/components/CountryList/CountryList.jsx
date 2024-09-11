import React from 'react';
import CountryCard from '../CountryCard/CounrtyCard';
import EmptySearch from '../Emptysearch/EmptySearch';


export default function CountryList({ data, isLoading }) {
    console.log(isLoading);
    
    return (
        <div className='mt-8 mx-4 md:mx-8 lg:mx-12'>
            <div className='grid gap-y-12 gap-x-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4 overflow-hidden'>
                {isLoading ? (
                    <div className="flex items-center justify-center min-h-screen">
                        <span className="loader"></span>
                    </div>
                ) : data && data.length ? (
                    data.map((country) => (
                        <CountryCard
                            key={country.name.official}
                            name={country.name.common}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flags.svg}
                        />
                    ))
                ) : (
                    <EmptySearch />
                )}
            </div>
        </div>
    );
}