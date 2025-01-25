import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A Joke',
      content: 'This is one joke'
    },
    {
      id: 2,
      title: 'A Joke',
      content: 'This is one joke'
    },
    {
      id: 3,
      title: 'A Joke',
      content: 'This is one joke'
    },
    {
      id: 4,
      title: 'A Joke',
      content: 'This is one joke'
    },
    {
      id: 5,
      title: 'A Joke',
      content: 'This is one joke'
    },
    {
      id: 6,
      title: 'A Joke',
      content: 'This is one joke'
    },
    {
      id: 7,
      title: 'A Joke',
      content: 'This is one joke'
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at https://localhost:${port}`);
});