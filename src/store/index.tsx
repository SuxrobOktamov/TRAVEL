import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';
import { data } from '../data/data';
import { TourismState } from '../interface/TourismState';

const TourismStore = create<TourismState>()(
  devtools(
    persist(
      (set) => ({
        destination: data.destinations,
        datas: [],
        paramsOne: '',
        sandParamsHandle: (id:string) => set((state) => ({paramsOne: id})),
        filterHandle: (name:string) => set((state) => ({datas: state.destination.filter((item:any) => item.name === name)})),
      }),
      {
        name: 'tourism-storage',
      }
    )
  )
);



const TourismStoretwo = create<TourismState>()(
  devtools(
    persist(
      (set) => ({
        crew: data.crew,
        datas: [],
        paramsTwo: '',
        sandParamsHandle: (id:string) => set((state) => ({paramsTwo: id})),
        filterHandle: (id:string) => set((state) => ({datas: state.crew.filter((item:any) => item.id === +id)})),
      }),
      {
        name: 'tourism-storage',
      }
    )
  )
);

const TourismStoreThree = create<TourismState>()(
  devtools(
    persist(
      (set) => ({
        technology: data.technology,
        datas: [],
        paramsThree: '',
        sandParamsHandle: (id:string) => set((state) => ({paramsThree: id})),
        filterHandle: (id:string) => set((state) => ({datas: state.technology.filter((item:any) => item?.id === +id)})),
      }),
      {
        name: 'tourism-storage',
      }
    )
  )
);

export {TourismStore, TourismStoretwo, TourismStoreThree };

