router.post("/products", passport.authenticate("current", { session: false }), isAdmin, createProduct);

router.post("/carts/:cid/products/:pid",
    passport.authenticate("current", { session: false }),
    isUser,
    addProductToCart
);