const myColors = ['#138A36', '#D1495B', '#00798C', '#30638E', '#003D5B'];
const quotesList = [
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela',
    },
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney',
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: 'Steve Jobs',
    },
    {
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        author: 'Eleanor Roosevelt',
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: 'Oprah Winfrey',
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: 'James Cameron',
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon',
    },
    {
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        author: 'Mother Teresa',
    },
    {
        quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
        author: 'Franklin D. Roosevelt',
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        author: 'Margaret Mead',
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: 'Robert Louis Stevenson',
    },
    {
        quote: 'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt',
    },
    {
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        author: 'Benjamin Franklin',
    },
    {
        quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
        author: 'Helen Keller',
    },
    {
        quote: 'It is during our darkest moments that we must focus to see the light.',
        author: 'Aristotle',
    },
    {
        quote: 'Whoever is happy will make others happy too.',
        author: 'Anne Frank',
    },
    {
        quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        author: 'Ralph Waldo Emerson',
    },
];

const container = document.getElementById('main-container');
const quote = document.getElementsByClassName('quote')[0];
const author = document.querySelector('.author');
const newQuoteBtn = document.getElementById('new-quote');

const selectColorHandler = (maxValue) => {
    const randomPosition = Math.floor(Math.random() * maxValue);
    return myColors[randomPosition];
};

const selectQuoteHandler = (maxValue) => {
    const randomPosition = Math.floor(Math.random() * maxValue);
    return quotesList[randomPosition];
};

const changeQuoteHandler = () => {
    const color = selectColorHandler(myColors.length);
    const choseQuote = selectQuoteHandler(quotesList.length);

    container.style.backgroundColor = color;
    quote.innerHTML = choseQuote.quote;
    author.innerHTML = choseQuote.author;
};

newQuoteBtn.addEventListener('click', changeQuoteHandler);
