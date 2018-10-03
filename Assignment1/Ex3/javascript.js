(function () {

    const item = {
        "name": "Biscuits",
        "type": "regular",
        "category": "food",
        "price": 2.0
    };

    var applyCoupon = (cate) => (discount) => (ite) => -(parseFloat(ite.price) * parseFloat(discount)) + ite.price ;
        
    
    console.log(applyCoupon("food")(0.1)(item));

})();