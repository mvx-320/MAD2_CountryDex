import { useEffect, useState } from 'react';
import { ListState } from '../types/ListState';
import { Country } from '../types/Country';
import { CountryDTO } from '../types/CountryDTO';
import { mapCountry } from '@/utils/mapCountry';
import { COUNTRIES_API_FULL_URL } from '@/constants/api';

export function useCountries() {
    const [listState, setListState] = useState<ListState>({ status: 'idle' });

    const fetchCountries = async () => {
        setListState({ status: 'loading' });
        
        try {
            const response = await fetch (
                COUNTRIES_API_FULL_URL
            );
            if (!response.ok) throw new Error('HTTP error ' + response.status);
            const data: CountryDTO[] = await response.json();
            setListState({ status: 'success', countries: data.map(mapCountry) });
        } catch (err) {
            const err_message = err instanceof Error ? err.message : 'Unknown error';
            setListState({status: 'error', message: err_message});
        } 
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return { listState, refetch: fetchCountries };
}