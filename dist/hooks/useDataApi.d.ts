export declare const useDataApi: (initialUrl: string, initialData: any) => {
    data: any;
    isLoading: boolean;
    isError: boolean;
    doFetch: (string: any) => void;
};
