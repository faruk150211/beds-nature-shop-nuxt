<template>
<div>
    <div class="preloader">
        <img class="preloader__image" width="55" src="/assets/images/loader.png" alt="">
    </div>

    <div class="page-wrapper">
        <Header></Header>
        <StrickyHeader></StrickyHeader>
        <main>
            <slot></slot>
        </main>
        <Footer></Footer>
    </div>
</div>
</template>
