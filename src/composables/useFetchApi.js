import {ref , onMounted , watch, watchEffect }  from 'vue'


export const useFetchApi = (callback)=>{
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null);
    async function fetchData(){
        loading.value = true;
        error.value = null;
        try{
            const response = await callback();
            console.log('id',response.data.data.jobs[0].id);
            data.value = await response.data.data.jobs;
        }catch(err){
            error.value = err.message;
        }finally{
            loading.value = false;
        }
    }
    watchEffect(fetchData)
    return {
        data,
        loading,
        error,
        fetchData,
    }
}
