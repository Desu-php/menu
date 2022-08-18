import {createComponent} from 'vue-loading-overlay/src/js/helpers';
import LoadingComponent from "vue-loading-overlay/src/js/Component.vue";

export function useLoading(globalProps = {}, globalSlots = {}) {

    return {
        show(props = globalProps, slots = globalSlots) {
            const forceProps = {
                programmatic: true,
                lockScroll: true,
                isFullPage: false,
                active: true,
            }

            const propsData = Object.assign({}, globalProps, props, forceProps);
            let container = propsData.container;

            if (!propsData.container) {
                container = document.body;
                propsData.isFullPage = true;
            }

            const mergedSlots = Object.assign({}, globalSlots, slots);
            const instance = createComponent(LoadingComponent, propsData, container, mergedSlots);

            return instance.ctx
        },
    }
}
