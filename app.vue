<template>
    <transition v-bind="transitionLayout">
        <NuxtLayout :name="layoutName">
            <NuxtPage :transition="transitionPage" :page-key="layoutName"/>
        </NuxtLayout>
    </transition>
</template>
<script>

import {initFlowbite} from 'flowbite'

export default {
    computed: {
        ...mapGetters(useMain, ["GET_LAYOUT_NAME"]),
        layoutName() {
            return this.GET_LAYOUT_NAME
        },
        transitionLayout() {
            return {
                onBeforeEnter: () => this.SET_TRANSITION_LAYOUT(false)
            }
        },
        transitionPage() {
            return {
                name: 'page',
                mode: 'out-in',
                onBeforeLeave: () => this.SET_TRANSITION_PAGE(true),
                onBeforeEnter: () => this.SET_TRANSITION_PAGE(false),
            }
        }
    },
    methods: {
        ...mapActions(useMain, ["SET_TRANSITION_PAGE", "SET_TRANSITION_LAYOUT"]),
    },
    mounted() {
        initFlowbite();

    }
}
</script>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
    transition: all 0.3s;
}

.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
