import { defineStore } from "pinia";
import { useFetchApi } from '@/composables/useFetchApi';
import { getJobs } from '@/services/api';

// Move useFetchApi inside the action to properly manage its lifecycle
export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
    allJobs: [],
    loading: false,
    error: null
  }),
  getters: {
    Jobs: state => state.jobs,
    getJobById: state => id => {
      return state.jobs.find(job => job.id.toString() === id.toString());
    },
  },
  actions: {
    async getJobs() {
      const { data, fetchData } = useFetchApi(getJobs);
      this.loading = true;
      try {
        await fetchData();
        this.allJobs = data.value;
        this.jobs = data.value;
      } catch (err) {
        this.error = err.message || 'Failed to fetch jobs';
      } finally {
        this.loading = false;
      }
    },
    clearError() {
      this.error = null;
    },
    filterJobs(query) {
        if (query) {
          this.jobs = this.allJobs.filter(job => job.name.toLowerCase().includes(query.toLowerCase()));
        } else {
          this.jobs = [...this.allJobs];
        }
      }
  },
  persist: {
    enabled: true,
    strategies: [{
      storage: localStorage,
      key: 'jobs',
    }],
  }
});
