## **Lunch.ly Reservation System**

Lunchly: An Express-based application for booking lunch reservations, designed as a learning project to implement object-oriented principles in a custom ORM.

## ****Part One: Setting Up****

1. Create a project folder, Git repository, and ***package.json***.
2. Create a database,  ***lunchly.***
3. Read in the sample data in ***data.sql***
    
4. Install the required node modules:
*`$ **npm install**`*
5. Start the server with ***nodemon***


## **Part Two: Get Familiar With The Code**

**app.js :** Application object; can be imported from other files/tests

**models/ :** Model objects as as classes, to “abstract away” database handling

**routes.js :** Routes for the web interface

**server.js :** Functionality to start the server

**templates/ :** Jinja templates, rendered with the JS “Nunjucks” library

## **Part Three: Full Names**

Add a function, `fullName`, to the Customer class. This should return first and last names joined by a space. Change the templates to refer directly to this.

## **Part Four: Saving Reservations**

Add a function to save reservations. Like the customers save function

## **Part Five: Add Search Functionality**

Add a way to search for a customer by name, rather than having to find them in a list. Add a quick search form to the bootstrap navigation bar to search for a customer by name.

## **Part Six: Best Customers**

Add a new route that finds our top 10 customers ordered by most reservations.

## **Part Seven: Practice using Setters & Getters**

Use getters and setters in this codebase. Here are some examples of ways you could use them:

- For notes on a customer or reservation, use a hidden ***_notes*** property to ensure that if someone tries to assign a falsey value to a customer’s notes, the value instead gets assigned to an empty string.
- Turn ***fullName*** into a getter.
- Use the getter/setter pattern with ***numGuests*** on a reservation, such that the setter throws an error if you try to make a reservation for fewer than 1 person.
- Use the getter/setter pattern with ***startAt*** on a reservation, so that you must set the start date to a value that is a ***Date*** object.
- Use the getter/setter pattern with ***customerId*** on a reservation, such that once a reservation is assigned a ***customerId***, that key can never be assigned to a new value (attempts should throw an error).

## **Extras**
- Add a feature to edit existing reservations. Make sure to keep SQL out of the routes themselves.
- On the customer listing page, show the most recent reservation for each. Make sure when you do this that you continue to list all customers, even those without any reservations!
- Add a new field for middle name, which can be optional, but should appear in the full name displays