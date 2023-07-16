## shopazon react

Shopazon is deployed at this site: [https://shopazon-1a591.web.app/](https://shopazon-1a591.web.app/)

## About this Project
- Online shopping portal
- Shopping cart can add and remove items
- Authentication (Registration and Sign In, Sign Out)
- Notifications for shopping cart and authentication

<img src="src/images/shop1.png" height="350">

You can click "Add to Cart" and a green notification will appear showing the item that you added.  In the top right corner there is a counter that shows how many items are in your shopping cart.  **If you try to purchase as a guest, the site will remind you to login.**

<img src="src/images/shop2.png" height="350">

Checkout is simulated with anaddress and credit card (these are not real).  When you "Place your order" it will notify you of the completed order and reset the shopping cart to empty.

<img src="src/images/shop3.png" height="350">

### Stack

| Dependencies  | Description |
| ------------- | ------------- |
|  React / React Router | Library |
|  Firebase | Database & Deployment |
|  [https://www.npmjs.com/package/react-notifications-component](https://www.npmjs.com/package/react-notifications-component)  | Notifications Component |
|  [https://www.npmjs.com/package/react-currency-format](https://www.npmjs.com/package/react-currency-format)  | Formats the numbers on the calculated total |
 