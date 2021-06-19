<template>
    <div class="home flex justify-center w-screen">
        <div
            class="
                relative
                overflow-hidden
                h-[400px]
                sm:w-[400px]
                md:w-[800px]
                xl:w-[1200px]
                2xl:w-[1600px]
            "
        >
            <div
                class="
                    images
                    distance-3
                    lg:animate-p-35
                    md:animate-p-25
                    animate-p-15
                "
                alt=""
            />
            <div
                class="
                    images
                    midground-2
                    lg:animate-p-15
                    md:animate-p-10
                    animate-p-6
                "
                alt=""
            />
            <div
                class="
                    images
                    foreground-1
                    lg:animate-p-8
                    md:animate-p-4
                    animate-p-3
                "
                alt=""
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    setup() {},
};
</script>

<style scoped>
.home {
    text-align: center;
    user-select: none;
}
.foreground-1 {
    background: url(../assets/1-foreground.png);
    z-index: 10;
}
.midground-2 {
    background: url(../assets/2-midground.png);

    z-index: 5;
}
.distance-3 {
    background: url(../assets/3-distance.png);
    z-index: -10;
}
.images {
    position: absolute;
    top: 0;
    height: 100%;
    width: 300%;
}
/* @keyframes parallax {
    0% {
        left: 0;
    }
    100% {
        left: -200%;
    }
} */
</style>
