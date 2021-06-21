<template>
    <div class="flex justify-center w-screen home">
        <div
            class="
                absolute
                flex
                justify-center
                w-screen
                bg-fixed bg-center bg-no-repeat
                cus
            "
        >
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
                    frameShadow
                "
            >
                <img
                    class="absolute w-full h-full z-[100] insetShadow"
                    src="../assets/frame/frame-middle.png"
                />
                <img
                    class="absolute left-0 h-full z-[100] insetShadow"
                    src="../assets/frame/frame-left.png"
                />
                <img
                    class="absolute right-0 h-full z-[100] insetShadow"
                    src="../assets/frame/frame-right.png"
                />
                <layer v-for="layer in layers" :key="layer" :data="layer" />
            </div>
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
.cus {
    background: url(../assets/frame/wallpaper.png);
}
.frameShadow {
    box-shadow: -10px 0px 20px -5px rgba(0, 0, 0, 0.7),
        10px 0px 20px -5px rgba(0, 0, 0, 0.7);
}
.frameShadow > div:first-of-type {
    box-shadow: inset 0px -8px 80px -10px rgba(0, 0, 0, 1);
}
</style>
