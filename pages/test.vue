<template>
<div>
<button @click="onClick">
    Кнопка
</button>
    <NuxtErrorBoundary @error="someErrorLogger">
        <!-- You use the default slot to render your content -->
        <template #error="{ error, clearError }">
            You can display the error locally here: {{ error }}
            <button @click="clearError">
                This will clear the error.
            </button>
        </template>
    </NuxtErrorBoundary>
</div>
</template>

<script>

import {reloadNuxtApp} from "#app";

export default {
    name: "test",
    methods: {
        onClick() {
            useMain().counter++


        },
        someErrorLogger() {

        }
    },
    computed: {
        counter() {
            return useMain().counter
        }

    },
    watch: {
        counter(v) {
                if (v ===2) reloadNuxtApp({force:true, persistState: false})

        }
    },
    mounted() {
        const headers = useRequestHeaders(['cookie'])
        console.log(headers)
    }
}
</script>

<style scoped>

</style>