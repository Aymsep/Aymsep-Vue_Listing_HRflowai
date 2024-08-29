import axios from 'axios';


const api  = axios.create({
    baseURL:`https://api.hrflow.ai/v1/jobs/searching?board_keys=${import.meta.env['VITE_BOARD_KEY']}`,
    headers: {
        accept: 'application/json',
        ['X-API-KEY']: import.meta.env['VITE_X-API-KEY'],
        ['X-USER-EMAIL']: import.meta.env['VITE_X-USER-EMAIL'],
      }
})

export const getJobs = ()=>{
    return api.get('',{
        params: {
            page:1,
            limit:30,
            order_by:'desc'
        }
    })
}



export default api;