<template>
    <div class="w-full">
      <div class="max-w-[1600px] w-full flex items-center gap-[4rem] m-auto">
        <div class="flex flex-col w-fit">
            <span class="text-5xl w-fit h-auto border-b-2 border-pink-500 pb-6">Go beyond your<br> imagination</span>
            <span class="mt-8 text-[var(--previewthemeforestnet---shark)] text-2xl">Discover your ideal experience with us</span>
        </div>
        <div class="grid grid-cols-3 flex-1 gap-3">
            <div class="relative min-h-[65dvh] overflow-hidden rounded-2xl" v-for="item in 3">
                <img class="min-w-full min-h-full absolute hover:scale-110 transition-all" src="https://www.welgrowgroup.com/img.php?file=welgrowgroupuploadsNew/interests/images/cnt_156784340313_woman-spacail-5.jpg" alt="tour">
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">

</style>