import { GET_COUNTRY_API_URL } from "@/constants/api";
import { CountryDTO } from "@/types/CountryDTO";
import { DetailState } from "@/types/DetailState";
import { mapCountry } from "@/utils/mapCountry";
import { useEffect, useState } from "react";

export function useCountry(id: string) {
    const [detailState, setDetailState] = useState<DetailState>({ status: 'idle' });

    const fetchCountry = async () => {
        setDetailState({ status: 'loading' });
        try {
            const response = await fetch(GET_COUNTRY_API_URL(id));
            if (!response.ok) throw new Error(`HTTP error ' + response.status`);
            const dto: CountryDTO = await response.json();
            setDetailState({ status: 'success', country: mapCountry(dto) });
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Unknown error';
            setDetailState({ status: 'error', message });
        }
    };

    useEffect(() => {
        fetchCountry();
    }, [id]);

    return { detailState, refetch: fetchCountry };
}