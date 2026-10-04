import { useState } from 'react';
import { Country } from './Country';

export type ListState = 
    | { status: 'idle' }  
    | { status: 'loading' }  
    | { status: 'success'; countries: Country[] } 
    | { status: 'error'; message: string };