var quotes = ["And a step backward, after making a wrong turn, is a step in the right direction. <br/>- Kurt Vonnegut", "Positivity, like any skill, you get better at by practicing it. <br/>- Jackson Bliton", 
"All we have to decide is what to do with the time that is given us. <br/>- J.R.R. Tolkien", "More is lost by indecision than wrong decision. <br/>- Cicero", "A ship is safe in harbor, but that's not what ships are for. <br/>- William Shedd",
"We are what we repeatedly do. Excellence, then, is not an act, but a habit. <br/>- Anonymous", "Not all those who wander are lost. <br/>- J.R.R. Tolkien", "Calm seas make poor sailors. <br/>- Anonymous", 
"There is nothing noble in being superior to your fellow men, true nobility is being superior to your former self. <br/>- Ernest Hemingway", 
"Everyone you meet is fighting a battle that you know nothing about. <br/>- Various", "Kindness is the language which the deaf can hear and the blind can see. <br/>- Mark Twain", 
"To strive, to seek, to find, and not to yield. <br/>- Tennyson", "Be the change you wish to see in the world. <br/>- Ghandi", "Do or do not. There is no try. <br/>- Yoda", 
"Would I rather be feared or loved? Easy - both. I want people to be afraid of how much they love me. <br/>- Michael Scott", "Hodor. <br/>- Hodor",
"Don't ask for a lighter load, ask for a stronger back. <br/>- Phillips Brooks", "Good judgement comes from experience and experience comes from bad judgement. <br/>- Anonymous",
"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. <br/>- Albert Einstein"]

    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

    document.getElementById('quote').innerHTML = randomQuote;