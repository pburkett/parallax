<template>
    <div
        class="layer parallax"
        :style="{
            'z-index': 100 - depth,
            animationDuration: depth / 2 + 's',
            backgroundImage: 'url(' + image + ')',
        }"
    />
</template>

<script>
import { computed } from "vue";
export default {
    name: "Layer",
    props: {
        data: { type: Object, required: true },
    },
    setup(props) {
        return {
            file: computed(() => props.data),
            name: computed(() => props.data.name.split("-")[1]),
            depth: computed(() => props.data.name.split("-")[0]),
            image: computed(() => props.data.image),
        };
    },
};
</script>

<style lang="scss" scoped>
.layer {
    position: absolute;
    top: 0;
    height: 100%;
    width: 300%;
    transform: translate3d(0, 0, 0);
}
@keyframes p {
    0% {
        // left: 0%;
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-66.6666%);
        // left: -200%;
    }
}
.parallax {
    animation: p linear infinite 500ms;
}
</style>

