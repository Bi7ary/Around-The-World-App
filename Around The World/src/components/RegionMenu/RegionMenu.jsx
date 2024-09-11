import React from 'react';
import Select from 'react-select';

export default function RegionMenu({ countriesList, filterCountriesList }) {
  const handleRegionChange = (selectedOption) => {
    const region = selectedOption.value;

    const filteredCountries =
      region === "all regions" ?
      countriesList :
      countriesList.filter((country) => country.region.toLowerCase() === region);

    filterCountriesList(filteredCountries);
  };

  const options = [
    { value: 'all regions', label: 'All Regions' },
    { value: 'africa', label: 'Africa' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' }
  ];

  return (
    <Select
      defaultValue={options[0]}
      onChange={handleRegionChange}
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }} 
    />
  );
}
