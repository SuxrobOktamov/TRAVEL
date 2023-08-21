export interface TourismState {
    destination?: any; 
    crew?: any; 
    technology?: any;
    datas: [];
    paramsOne?: string;
    paramsTwo?: string;
    paramsThree?: string;
    sandParamsHandle: (id: string) => void;
    filterHandle: (name: string) => void;
};