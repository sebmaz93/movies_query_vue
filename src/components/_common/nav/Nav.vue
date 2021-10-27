<script setup lang="ts">
</script>

<template>
    <nav class="nav">
        <h1 class="logo">MOVIE DB</h1>
        <div class="nav-items">
            <div class="nav-item">Home</div>
            <div class="nav-item">Movies</div>
            <div class="nav-item">About</div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    height: 80px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    margin: 0 16px;
}

.logo {
    user-select: none;
    text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
        #2474ff 0px 0px 20px, #2474ff 0px 0px 30px, #2474ff 0px 0px 40px,
        #2474ff 0px 0px 50px, #2474ff 0px 0px 75px,
        2px 2px 3px rgba(42, 123, 206, 0);
}

.nav-items {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0 24px;
}

.nav-item {
    cursor: pointer;
    transition: color 100ms ease-in-out;

    &:hover {
        color: #5780c7;
    }
}
</style>
