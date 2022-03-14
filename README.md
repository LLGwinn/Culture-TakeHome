# CULTURE BIOSCIENCES TAKE-HOME PROJECT

This app allows users to view a set of images from a reactor run and mark each image as "foaming" as needed.

Data persists in the `culture_biosciences` database, `pictures` table.

Users can choose to view Foaming, Not-Foaming, or All images.

## Demo Video
Click to see the app in action: https://www.loom.com/share/ff17ae496812477483d08c0547ea0d95

## Tech Stack
<b>Database:</b> Postgresql `culture_biosciences`<br>
<b>Backend:</b> Node.js/Express<br>
<b>Frontend:</b> React

### `npm start`

Runs the frontend in the development mode.<br>
Open [http://localhost:3001](http://localhost:3000) to view it in the browser.

### `nodemon run server.js`

Runs the backend in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `node seed.js`
To seed my postgresql database with data provided, I created the `seed.js` file. 

## Development Notes
Seeding the database turned out to be more difficult than I anticipated. I know, that's the easy part. I was not familiar with bringing JSON data into Postgresql, and I struggled with it for awhile until I finally decided to just write a Javascript file to handle the process.

Writing the backend code was a fairly smooth process. No issues there.

The biggest time killer for me on the frontend was CORS errors (so...actually backend I suppose). Just when I thought I had it resolved, my PATCH route wouldn't work. After some fiddling with CORS and changing the route to PUT, it works!

## Things I would improve if I had more time:
- Definitely needs some styling.
- Add a 'Back' button to the pagination.
- Add page number button functionality so user can skip ahead (or back) by multiple pages.
- Get those radio buttons to reflect the current foaming status of the images when they render.
- Remove 'Next Page' button when there are no more images to show.
  

<b>Thank you for this learning experience! Regardless of the outcome for me, I am grateful for everything I learned as a result of going through this exercise!


