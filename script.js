
// Question 1
for (i = 1; i < 8; i++){
    console.log(i);
}

// Question 2
for (i = 5; i < 26; i += 4){
    console.log(i);
}

// Question 3A
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"]

// Question 3B
for (name of wizards){
    console.log(name)
}

// Question 4A
let harryPotterMovies = 0

// Question 4b
while (harryPotterMovies != 8) {
    harryPotterMovies += 1
}

// Question 4C
console.log(harryPotterMovies)

// BONUS

// Question 5A
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

// Question 5B
for (name of hogwartsHouses) {
    for (letter of name){
        console.log(letter)
    }
}

// Question 6A
const quote = ["Yer", "A", "Wizard", "Harry"]

// Question 6B
let text = ""
for (word of quote) {
    text += word
    text += " "
}
console.log(text.trim())
