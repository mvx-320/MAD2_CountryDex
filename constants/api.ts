const COUNTRIES_API_URL = 'https://countries.dev';
const COUNTRIES_API_ENDPOINT = '/region/Europe';

const COUNTRIES_API_FIELDS = [
    'alpha3Code',
    'name',
    'capital',
    'population',
    'region',
    'flag'
];
const COUNTRIES_API_QUERY = `?fields=${COUNTRIES_API_FIELDS.join(',')}`;

export const COUNTRIES_API_FULL_URL = `${COUNTRIES_API_URL}${COUNTRIES_API_ENDPOINT}${COUNTRIES_API_QUERY}`;

export function GET_COUNTRY_API_URL(countryId: string): string {
    return `${COUNTRIES_API_URL}/alpha/${countryId}`;
}