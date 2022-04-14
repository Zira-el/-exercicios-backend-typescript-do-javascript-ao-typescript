const cities: string[] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const filterCities = ((arrayCities: string[]): string[] => {
    const filteredCities: string[] = arrayCities.filter(city => city.length <= 8);
    return filteredCities;
})

console.log(filterCities(cities));