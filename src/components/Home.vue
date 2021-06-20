<template>
    <div class="home flex justify-center w-screen">
        <div
            id="parallax-container"
            class="
                relative
                overflow-hidden
                h-[320px]
                2xs:w-[200px]
                xs:w-[400px]
                md:w-[800px]
                xl:w-[1200px]
                2xl:w-[1600px]
            "
        >
            <layer v-for="layer in layers" :key="layer" :data="layer" />
        </div>
    </div>
</template>

<script>
import Layer from "./Layer";

export default {
    name: "Home",
    components: { Layer },
    setup() {
        var layers = [];
        function importAll(r) {
            r.keys().forEach((key) => {
                console.log(key.split("/")[2].split("-")[0]);
                let str = key.split("/")[2];
                if (str.includes("-") && Number(str.split("-")[0]))
                    layers.push({ name: key.split("/")[2], image: r(key) });
            });
        }
        importAll(require.context("../assets/", true, /\.png$/));
        console.log(layers);

        return {
            layers,
        };
    },
};
</script>

<style scoped>
.home {
    text-align: center;
    user-select: none;
}
</style>
