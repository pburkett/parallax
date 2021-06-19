<template>
    <div class="home flex">
        <div
            style="
                position: relative;
                overflow: hidden;
                height: 400px;
                width: 100%;
            "
        >
            <div class="images foreground-1" alt="" />
            <div class="images midground-2" alt="" />
            <div class="images distance-3" alt="" />
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
    animation: parallax 8s linear infinite;
    z-index: 10;
}
.midground-2 {
    background: url(../assets/2-midground.png);
    animation: parallax 16s linear infinite;
    z-index: 5;
}
.distance-3 {
    background: url(../assets/3-distance.png);
    animation: parallax 40s linear infinite;
    z-index: -10;
}
.images {
    position: absolute;
    top: 0;
    height: 100%;
    width: 300%;
}
@keyframes parallax {
    0% {
        left: 0;
    }
    100% {
        left: -200%;
    }
}
</style>
