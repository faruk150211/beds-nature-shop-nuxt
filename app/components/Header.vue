<template>
    <header class="main-header">
        <div class="topbar">
            <div class="container">
                <div class="topbar__left">
                    <div class="topbar__social">
                        <a href="#" class="fab fa-facebook-square"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-pinterest-p"></a>
                        <a href="#" class="fab fa-instagram"></a>
                    </div><!-- /.topbar__social -->
                    <p>Welcome to Agriculture HTML Template</p>
                </div><!-- /.topbar__left -->
                <div class="topbar__right">
                    <a href="#"><i class="agrikon-icon-email"></i>needhelp@company.com</a>
                    <a href="#"><i class="agrikon-icon-clock"></i>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</a>
                </div><!-- /.topbar__right -->
            </div><!-- /.container -->
        </div><!-- /.topbar -->
        <nav class="main-menu">
            <div class="container">
                <div class="logo-box">
                    <a href="index.html" aria-label="logo image"><img src="/assets/images/logo-dark.png" width="153"
                            alt=""></a>
                    <span class="fa fa-bars mobile-nav__toggler"></span>
                </div><!-- /.logo-box -->
                <ul class="main-menu__list">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop">Shop</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>

                </ul>
                <!-- /.main-menu__list -->

                <div class="main-header__info">
                    <a href="#" class="search-toggler main-header__search-btn"><i
                            class="agrikon-icon-magnifying-glass"></i></a>
                    <button class="main-header__cart-btn" @click="toggleCartDrawer"
                        style="background: none; border: none; cursor: pointer;"><i
                            class="agrikon-icon-shopping-cart"></i></button>
                    <a href="tel:92-666-888-0000" class="main-header__info-phone">
                        <i class="agrikon-icon-phone-call"></i>
                        <span class="main-header__info-phone-content">
                            <span class="main-header__info-phone-text">Call Anytime</span>
                            <span class="main-header__info-phone-title">92 666 888 0000</span>
                        </span><!-- /.main-header__info-phone-content -->
                    </a><!-- /.main-header__info-phone -->
                </div><!-- /.main-header__info -->
            </div><!-- /.container -->
        </nav>
        <!-- /.main-menu -->
    </header>
</template>

<script setup>
import { useCart } from '~/composables/useCart'

const { toggleCartDrawer } = useCart()
</script>