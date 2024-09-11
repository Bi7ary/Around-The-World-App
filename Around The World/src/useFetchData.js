import { useEffect, useState } from "react";

export const useFetchData = (country) => {
    const [result, setResult] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Start as true for initial fetch
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (country) {
            fetchDataFromAPI();
        } else {
            fetchDataFromLocalStorage();
        }
    }, [country]);

    const fetchDataFromAPI = () => {
        let url = "https://restcountries.com/v3.1/all";

        setIsLoading(true);
        setIsError(false); // Reset error state

        if (country) {
            url = `https://restcountries.com/v3.1/name/${country}`;
        }

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (country) {
                    setResult(data[0]);
                    setFilteredCountries([data[0]]);
                } else {
                    setResult(data);
                    setFilteredCountries(data);
                    localStorage.setItem("countries", JSON.stringify(data));
                }
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false); // Set loading to false after fetching
            });
    };

    const fetchDataFromLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem("countries"));

        if (data) {
            setResult(data);
            setFilteredCountries(data);
        } else {
            // If no data in local storage, fetch from API
            fetchDataFromAPI();
        }

        // Set loading to false since we're done trying to fetch from local storage
        setIsLoading(false); 
    };

    return {
        result,
        filteredCountries,
        setFilteredCountries,
        isLoading,
        isError,
    };
};