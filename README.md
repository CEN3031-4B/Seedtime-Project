This is the overall repo for the CEN3031 Group 4B project. Seed Time Harvest Farms was our client, who "has been serving the North Florida area with fresh food delivery services, gathering produce from local farmers and vendors since May 2012. We offer great customer services bringing fresh food to your table and creative ways to use produce in new ways."

## Link to deployed site https://seed-times.herokuapp.com/produce

## Features Implemented:
- Landing page which displays currently-added produce from database
![Produce](produce.png?raw=true "Produce")

- About us page showing information about the client
![About](about.png?raw=true "About")

- Sign-In/Registration pages for users - this includes user authentication
![SignIn](signin.png?raw=true "SignIn")

- Add Produce page for users to add produce items to the database
![Add Produce](add_produce.png?raw=true "Add Produce")

- Add to cart feature - can click on the “add to cart” button and the associated item will be added to the cart
![Cart](cart.png?raw=true "Cart")

- Cart page with ability to “checkout”
![Checkout](checkout.png?raw=true "Checkout")

- Search feature to search for produce by item or farm name
![Search](search.png?raw=true "Search")

- Navbar with navigation links
## Run this repo locally:

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

## How to update database and server connections:
- Refresh the page, or restart the server using above commands