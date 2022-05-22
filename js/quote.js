const AAA = [
  {
    quote: "The journey of a thousand miles begins with one step",
    author: "Lao Tzu",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsch",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "When the going gets tough, the tough get going.",
    author: "Joe Kennedy",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

const Text = document.querySelector("#quotes span:first-child");
const Content = document.querySelector("#quotes span:last-child");

const savedQuote = AAA[Math.floor(Math.random() * AAA.length)];

Text.innerText = savedQuote.quote;
Content.innerText = savedQuote.author;
