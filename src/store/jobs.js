import { defineStore } from "pinia";
import {useFetchApi} from '@/composables/useFetchApi';
import {getJobs} from '@/services/api';

const {
    data,
    loading,
    error,
    fetchData
} = useFetchApi(()=>getJobs())

export const useJobsStore = defineStore('jobs',{
    state:()=>({
        jobs:[],
        loading:loading,
        error:error
    }),
    getters: {
        Jobs:state=>state.jobs,
        getJobById: (state) => (id) => {
            return state.jobs.find(job => job.id.toString() === id.toString());
          }
    },
    actions:{
        async getJobs(){
            if(this.jobs.length === 0){
                try{
                     this.loading = loading;
                     await fetchData();
                     this.jobs = data.value;
                }catch(err){
                     this.error = error;
                     console.log(err);
                }finally{
                     this.loading = loading;
                }
            }
        },
        clearError(){
            this.error = null;
        },
        
    },
    // persist: {
    //     enabled: true,
    //     strategies:[{
    //         storage: localStorage,
    //         key: 'jobs',
    //     }],
    //   }
})