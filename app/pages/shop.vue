<script setup>
import { onMounted } from 'vue';
import { useCart } from '~/composables/useCart';

// Use global cart state
const { isCartDrawerOpen, closeCartDrawer } = useCart();

// Remove item from cart with animation
const removeItem = (event) => {
    const btn = event.target.closest('.cart-item');
    if (btn) {
        btn.classList.add('removing');
        setTimeout(() => {
            btn.remove();
        }, 300);
    }
};

// Setup event listeners on mount
onMounted(() => {
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartDrawer);
    }
});
</script>
<template>
    <div>
        <!-- HERO -->
        <section class="hero d-flex align-items-center justify-content-center text-center">
            <div class="hero-content">
                <p>HOME / SHOP</p>
                <h1 class="font-weight-bold">Shop</h1>
            </div>
        </section>

        <!-- MAIN -->
        <div class="container py-5">
            <div class="row">
                <!-- PRODUCTS -->
                <div class="col-lg-9">
                    <div class="d-flex justify-content-between mb-4">
                        <p>Showing 1–12 of 14 results</p>
                        <select class="form-control w-auto">
                            <option>Default Sorting</option>
                        </select>
                    </div>

                    <div class="row">
                        <!-- PRODUCT -->
                        <div class="col-md-4 mb-5">
                            <div class="product-card text-center">
                                <div class="product-img position-relative">
                                    <img src="/assets/images/products/p2.jpg" alt="Product" />
                                    <span class="badge-sale">Sale</span>
                                    <span class="badge-discount">13%</span>
                                </div>

                                <div class="pt-3">
                                    <h6 class="product-title">Fresh Banana</h6>
                                    <div>
                                        <span class="old-price">$12.00</span>
                                        <span class="new-price">$10.99</span>
                                    </div>
                                    <div class="product-rating">★★★★★</div>
                                    <div class="product-icons mt-2">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="product-card text-center">
                                <div class="product-img position-relative">
                                    <img src="/assets/images/products/p3.jpg" alt="Product" />
                                    <span class="badge-sale">Sale</span>
                                    <span class="badge-discount">13%</span>
                                </div>

                                <div class="pt-3">
                                    <h6 class="product-title">Fresh Banana</h6>
                                    <div>
                                        <span class="old-price">$12.00</span>
                                        <span class="new-price">$10.99</span>
                                    </div>
                                    <div class="product-rating">★★★★★</div>
                                    <div class="product-icons mt-2">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mb-5">
                            <div class="product-card text-center">
                                <div class="product-img position-relative">
                                    <img src="/assets/images/products/p4.jpg" alt="Product" />
                                    <span class="badge-sale">Sale</span>
                                    <span class="badge-discount">13%</span>
                                </div>

                                <div class="pt-3">
                                    <h6 class="product-title">Fresh Banana</h6>
                                    <div>
                                        <span class="old-price">$12.00</span>
                                        <span class="new-price">$10.99</span>
                                    </div>
                                    <div class="product-rating">★★★★★</div>
                                    <div class="product-icons mt-2">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mb-5">
                            <div class="product-card text-center">
                                <div class="product-img position-relative">
                                    <img src="/assets/images/products/p5.jpg" alt="Product" />
                                    <span class="badge-sale">Sale</span>
                                    <span class="badge-discount">13%</span>
                                </div>

                                <div class="pt-3">
                                    <h6 class="product-title">Fresh Banana</h6>
                                    <div>
                                        <span class="old-price">$12.00</span>
                                        <span class="new-price">$10.99</span>
                                    </div>
                                    <div class="product-rating">★★★★★</div>
                                    <div class="product-icons mt-2">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="product-card text-center">
                                <div class="product-img position-relative">
                                    <img src="/assets/images/products/p6.jpg" alt="Product" />
                                    <span class="badge-sale">Sale</span>
                                    <span class="badge-discount">13%</span>
                                </div>

                                <div class="pt-3">
                                    <h6 class="product-title">Fresh Banana</h6>
                                    <div>
                                        <span class="old-price">$12.00</span>
                                        <span class="new-price">$10.99</span>
                                    </div>
                                    <div class="product-rating">★★★★★</div>
                                    <div class="product-icons mt-2">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mb-5">
                            <div class="product-card text-center">
                                <div class="product-img position-relative">
                                    <img src="/assets/images/products/p7.jpg" alt="Product" />
                                    <span class="badge-sale">Sale</span>
                                    <span class="badge-discount">13%</span>
                                </div>

                                <div class="pt-3">
                                    <h6 class="product-title">Fresh Banana</h6>
                                    <div>
                                        <span class="old-price">$12.00</span>
                                        <span class="new-price">$10.99</span>
                                    </div>
                                    <div class="product-rating">★★★★★</div>
                                    <div class="product-icons mt-2">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- COPY THIS BLOCK FOR MORE PRODUCTS -->
                    </div>

                    <div class="text-center">
                        <button class="btn btn-warning px-4">Load More</button>
                    </div>
                </div>

                <!-- SIDEBAR -->
                <div class="col-lg-3">
                    <div class="sidebar-box">
                        <div class="filter-header">
                            <h6>Filter by Price</h6>
                        </div>
                        <input type="range" class="w-100" />
                        <div class="filter-footer">
                            <button class="btn btn-success btn-sm">Filter</button>
                            <div class="price-display">Price: $10 — $20</div>
                        </div>
                    </div>

                    <div class="sidebar-box">
                        <h6>Categories</h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#"><i class="fas fa-apple-alt"></i> Fruits</a>
                            </li>
                            <li>
                                <a href="#"><i class="fas fa-carrot"></i> Vegetables</a>
                            </li>
                            <li>
                                <a href="#"><i class="fas fa-leaf"></i> Organic</a>
                            </li>
                        </ul>
                    </div>

                    <div class="sidebar-box">
                        <h6>Average rating</h6>
                        <div class="average-rating">
                            <div class="stars">★★★★★ (3)</div>
                        </div>
                    </div>

                    <div class="sidebar-box">
                        <h6>Featured Products</h6>
                        <div class="featured-product">
                            <div class="featured-product-img">
                                <img src="/assets/images/products/p2.jpg" alt="Strawberry" />
                            </div>
                            <div class="featured-product-info">
                                <div class="featured-product-name">
                                    <a href="#">Strawberry</a>
                                </div>
                                <div class="featured-product-price">
                                    <del>$2.10</del> <span>$1.99</span>
                                </div>
                            </div>
                        </div>
                        <div class="featured-product">
                            <div class="featured-product-img">
                                <img src="/assets/images/products/p3.jpg" alt="Red Apple" />
                            </div>
                            <div class="featured-product-info">
                                <div class="featured-product-name">
                                    <a href="#">Red Apple</a>
                                </div>
                                <div class="featured-product-price">
                                    <del>$4.00</del> <span>$2.99</span>
                                </div>
                            </div>
                        </div>
                        <div class="featured-product">
                            <div class="featured-product-img">
                                <img src="/assets/images/products/p4.jpg" alt="Green Bell Pepper" />
                            </div>
                            <div class="featured-product-info">
                                <div class="featured-product-name">
                                    <a href="#">Green Bell Pepper</a>
                                </div>
                                <div class="featured-product-price">
                                    <del>$3.40</del> <span>$2.40</span>
                                </div>
                            </div>
                        </div>
                        <div class="featured-product">
                            <div class="featured-product-img">
                                <img src="/assets/images/products/p5.jpg" alt="Organic Carrot" />
                            </div>
                            <div class="featured-product-info">
                                <div class="featured-product-name">
                                    <a href="#">Organic Carrot</a>
                                </div>
                                <div class="featured-product-price">
                                    <del>$1.12</del> <span>$0.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CART DRAWER -->
        <div class="cart-drawer" :class="{ active: isCartDrawerOpen }" id="cartDrawer">
            <!-- Overlay -->
            <div class="cart-overlay" id="cartOverlay"></div>

            <!-- Drawer Panel -->
            <div class="cart-drawer-panel">
                <!-- Header -->
                <div class="cart-drawer-header">
                    <h4 class="mb-0">Shopping Cart</h4>
                    <button class="btn-close" id="closeCartBtn" @click="closeCartDrawer">
                        <i class="fa fa-times"></i>
                    </button>
                </div>

                <!-- Items -->
                <div class="cart-drawer-body">
                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="/assets/images/products/p2.jpg" alt="Product" />
                        </div>
                        <div class="cart-item-info">
                            <h6 class="cart-item-title">Fresh Banana</h6>
                            <p class="cart-item-price">$10.99 × 2</p>
                            <p class="cart-item-total">$21.98</p>
                        </div>
                        <button class="btn-remove" @click="removeItem">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>

                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="/assets/images/products/p3.jpg" alt="Product" />
                        </div>
                        <div class="cart-item-info">
                            <h6 class="cart-item-title">Fresh Apple</h6>
                            <p class="cart-item-price">$8.99 × 1</p>
                            <p class="cart-item-total">$8.99</p>
                        </div>
                        <button class="btn-remove" @click="removeItem">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>

                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="/assets/images/products/p4.jpg" alt="Product" />
                        </div>
                        <div class="cart-item-info">
                            <h6 class="cart-item-title">Organic Carrot</h6>
                            <p class="cart-item-price">$4.99 × 1</p>
                            <p class="cart-item-total">$4.99</p>
                        </div>
                        <button class="btn-remove" @click="removeItem">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </div>

                <!-- Footer -->
                <div class="cart-drawer-footer">
                    <div class="cart-summary">
                        <div class="cart-summary-row">
                            <span>Subtotal:</span>
                            <span class="font-weight-bold">$45.96</span>
                        </div>
                        <div class="cart-summary-row">
                            <span>Shipping:</span>
                            <span class="font-weight-bold text-success">Free</span>
                        </div>
                        <div class="cart-summary-total">
                            <span>Total:</span>
                            <span class="font-weight-bold">$45.96</span>
                        </div>
                    </div>

                    <a href="checkout.html" class="btn btn-checkout btn-block">
                        <i class="fa fa-arrow-right"></i> Proceed to Checkout
                    </a>
                    <button class="btn btn-secondary btn-block" @click="closeCartDrawer">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>