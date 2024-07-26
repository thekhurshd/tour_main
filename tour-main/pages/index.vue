<template>
    <section class="w-full">
        <div class="overflow-hidden iframe-div min-w-[100dvw] min-h-[100dvh] mb-36 relative">
        <iframe width="100%" class="z-30" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7cJv1?logo=-1&card=1&autorotate=0.16&autop=10&thumbs=1"></iframe>
    </div>
    <Imagination />
    </section>
    
</template>

<script setup>

</script>

<style lang="scss">
.iframe-div {
    iframe {
        min-height: 100dvh;
    }
}

.main-container {
    background-image: url('../assets/img/Section.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height: 70dvh;
    min-width: 100dvw;
    animation: zoomin 20s linear;
    animation-fill-mode: forwards;
}

@keyframes zoomin {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }
}
</style>