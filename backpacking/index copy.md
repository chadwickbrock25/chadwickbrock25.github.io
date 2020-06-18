<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Backpacking</title>
</head>
<body>
    <h1>The Perfect Date</h1>
    <div class="container">
        <form action="/action_page.php">
            <label for="Location">Location:</label>
            <input type="text" id="location" name="location">
            <h5>ex. Atlanta,US (city, country initial)</h5>
            <input type="submit" value="Check Weather">
            <!-- button to submit location & dates to weather api// -->
            <!-- <label for="date">Date:</label>//Not working on this API// -->
            <!-- <input type="date" id="date" name="trip-start"
                value="2020-04-25"
                min="2020-01-01" max="2021-12-31"><br><br> -->
          </form>
    </div>
    
    <div id="container"></div>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" charset="utf-8"></script>
<script src="js/app.js" charset="utf-8"></script>
</html>