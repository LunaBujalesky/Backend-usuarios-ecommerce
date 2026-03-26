const purchase = async (req, res) => {
    const cart = await CartModel.findById(req.params.cid).populate("products.product");

    let total = 0;

    cart.products.forEach(p => {
        if (p.product.stock >= p.quantity) {
            total += p.product.price * p.quantity;
        }
    });

    const ticket = await TicketModel.create({
        amount: total,
        purchaser: req.user.email
    });

    res.send(ticket);
};