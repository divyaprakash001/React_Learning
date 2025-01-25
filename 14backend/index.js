import express from 'express'

const app = express()

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'table wooden',
      price: 200,
      image: 'https://img.freepik.com/free-photo/wooden-table-with-tree-landscape-background_1048-10279.jpg?ga=GA1.1.100293656.1737015490&semt=ais_hybrid'
    },
    {
      id: 2,
      name: 'table iron',
      price: 700,
      image: ''
    },
    {
      id: 3,
      name: 'chair wooden',
      price: 400,
      image: ''
    },
    {
      id: 4,
      name: 'desk wooden',
      price: 300,
      image: ''
    },
    {
      id: 5,
      name: 'remote wooden',
      price: 300,
      image: ''
    },
    {
      id: 6,
      name: 'fan dulex',
      price: 2200,
      image: ''
    },
  ]

  // /api/products?search=wooden

  if (req.query.search) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search))
    res.send(filteredProducts)
    return;
  }

  setTimeout(() => {
    res.send(products)
  }, 3000);
})



const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`);

})