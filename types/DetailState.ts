import { Country } from './Country';

export type DetailState = 
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; country: Country }
    | { status: 'error'; message: string };