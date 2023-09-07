// Iteration 1: Names and Input
const driver = "Eug";

console.log("The drivers name is" , driver );

const navigator = "Euge";

console.log("The navigator's name is" , navigator );

// // Iteration 2: Conditionals

if ( driver.length > navigator.length) {
    console.log("The driver has the longest name, it has " + driver.length + " characters.");
} else if (navigator.length === driver.length) {
    console.log("Wow, you both have equally long names, " + driver.length +  " characters!");
} else {
    console.log("It seems that the navigator has the longest name, it has " + navigator.length + " characters.");
}

// Iteration 3: Loops

for (let i = 0; i < driver.length; i+=1) {
    console.log(driver[i].toUpperCase())
}

for (let i = navigator.length -1 ; i >= 0 ; i-=1) {
    console.log(navigator[i])
}

if (driver < navigator) {
    console.log("The driver's name goes first.");
} else if (navigator < driver) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

let n = 0;

let numString = 0;

if( driver.length < navigator.length) {
    numString = driver.length
} else {
    numString = navigator.length
}

while (n < numString) {

    if( driver == navigator) {
        console.log("What?! You both have the same name?");
        break;
    }

    if(driver[n] < navigator[n]) {
        console.log("The driver's name goes first.");
        break;
    } else if (driver[n] > navigator[n]) {
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }

    console.log(n)
    n+=1;
}

//Bonus

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna magna, semper eget ornare in, auctor ut leo. In ut pulvinar urna, quis consequat turpis. Nam rutrum dapibus laoreet. Vivamus quam neque, suscipit nec metus id, sagittis aliquam purus. Phasellus commodo dapibus metus ac fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras fringilla eget lorem nec accumsan. Integer sed elit et tortor feugiat bibendum. Maecenas et arcu justo. Nullam ut luctus ipsum, eu maximus felis. Pellentesque non nunc magna. Nam mattis interdum ex sed pharetra. Nulla mollis pretium blandit. Integer eget ex quis ligula ullamcorper dignissim a non ligula. Aenean vel dolor mollis, volutpat eros sed, aliquam dolor. Pellentesque nec volutpat nisl, ultrices feugiat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sodales enim. In pharetra congue lacus, sed ornare ipsum consequat a. Nulla non sodales lectus, at ultrices lorem. Maecenas pharetra elementum sem id tincidunt. Nullam fermentum euismod felis, eget luctus eros congue eu. Curabitur et orci nec purus pretium cursus. Aenean ut ante ut tellus ultrices vestibulum. In nec mauris interdum, lobortis nisl non, varius turpis. Integer mattis congue dui. Integer varius, turpis non vulputate faucibus, turpis augue porttitor augue, eget consectetur sapien risus sed magna. Curabitur eu purus eget ex faucibus consectetur. Sed dapibus quis ipsum nec elementum. Aenean pulvinar consectetur ex. Curabitur eget venenatis tellus, id malesuada turpis. Integer commodo rhoncus arcu suscipit iaculis."

function countWords (text) {
    return longText.split(" ").length;
}

console.log(countWords(longText));

function countWordsEd (text) {
    let count = 0;
    const splitArray = longText.split(" ");
    for (const word of splitArray) {
        if (word === "et") {
            count += 1;
        }
    }
    return count;
}

console.log(countWordsEd(longText));