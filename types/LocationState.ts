export type LocationState = 
    | { status: 'idle'}
    | { status: 'loading' }
    | { status: 'denied'; canAskAgain: boolean }
    | { status: 'success'; latitude: number; longitude: number }
    | { status: 'error'; message: string };