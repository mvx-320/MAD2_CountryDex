import { CountryDTO } from '../types/CountryDTO';
import { Country } from '../types/Country';

export function mapCountry(dto: CountryDTO): Country {
    return {
        id: dto.alpha3Code,
        name: dto.name,
        capital: dto.capital,
        population: dto.population,
        region: dto.region,
        flag: dto.flag,
    };
}