# Shopping cart exercise

Quick shopping cart coding exercise.

The shopping cart calculates the total price of the cart depending on certain offers that can be associated to certain items.
The outcome of this exercise is not supposed to be a flawless and tested implementation but just a simple design idea.

Have a good day!

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Instructions ##

We want to run a physical store which sells 3 products (by now):

```
Code         | Name         |  Price
--------------------------------------
VOUCHER      | Voucher      |   5.00€
TSHIRT       | T-Shirt      |  20.00€
MUG          | Coffee Mug   |   7.50€
```

We would like to apply the following discounts:

- 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on `VOUCHER` and `MUG` items.
- Bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€.

Items should be able to be scanned or added to the cart in any order, and the cart should be able to return the total amount to be paid. 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
