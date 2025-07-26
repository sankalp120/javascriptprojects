const quotes = [
"With great power there must also come great responsibility.",
"Hulk is the strongest one there is!",
"Avengers Assemble!",
"I am Groot.",
"Imperius Rex!",
"By the hoary hosts of Hoggoth!",
"Face front, true believer!",
"To me, my X-Men!",
"Flame on!",
"I can do this all day.",
"I am Iron Man.",
"Hulk smash!",
"Wakanda forever!",
"We are Groot.",
"Whatever happens tomorrow, you must promise me one thing. That you will stay who you are.",
"That's my secret, Captain. I'm always angry.",
"I have nothing to prove to you.",
"On your left.",
"Whosoever holds this hammer, if he be worthy, shall possess the power of Thor.",
"Mutants are the future, Charles, not them! They no longer matter.",
"I am vengeance! I am the night! I am... wait, wrong universe! (Just kidding!)",
"Life's too short to be anything but happy.",
"I don't want to kill anyone. I just don't like bullies; I don't care where they're from.",
"I'm the best there is at what I do, but what I do isn't very nice.",
"It's clobberin' time!",
"Nothing goes over my head. My reflexes are too fast. I would catch it.",
"Heroes are made by the path they choose, not the powers they are graced with.",
"I survived because the fire inside me burned brighter than the fire around me.",
"Vengeance has consumed you. It’s consuming them. I’m done letting it consume me.",
"Even in the darkest times, hope cuts through. Hope is the light that lifts us out of darkness."

]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}