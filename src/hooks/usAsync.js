import {ref} from "vue";

export const useAsync = (fn, initialLoading = null) => {

  const loading = ref(false)
  const error = ref(false)
  const data = ref(initialLoading)
  const validation = ref({})

  const run = async (args = null) => {
    try {
      loading.value = true;
      error.value = null;
      validation.value = {}
      data.value = null

      data.value = await fn(args);

    } catch (e) {
      data.value = null
      console.log('e', e)
      const {response} = e
      console.log('response', response)
      error.value = true
      if (response) {
        if (response.status === 422) {
          validation.value = response.data.errors
        } else {
          error.value = e.response
        }
      }

    } finally {
      loading.value = false
    }
  };

  return {
    loading,
    error,
    data,
    run,
    validation
  };
};
