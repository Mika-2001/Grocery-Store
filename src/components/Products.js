import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "./Actions";

export default function Products() {
    const dispatch = useDispatch(); 

  // Array of product objects
  const products = [
    {
      id: 1,
      title: 'Milk',
      description: 'Fresh, full cream milk from local farms.',
      price: 19.99,
      image: 'https://www.clover.co.za/wp-content/uploads/2018/05/FC-uht-1L-2024.png',
    },
    {
      id: 2,
      title: 'Eggs',
      description: 'Grade A large eggs, perfect for breakfast.',
      price: 29.99,
      image: 'https://cdn11.bigcommerce.com/s-dhdy1goaa7/images/stencil/original/products/4074/7610/7610__73417.1683825804.jpg?c=1',
    },
    {
      id: 3,
      title: 'Sugar',
      description: '100% pure refined sugar for baking and cooking.',
      price: 39.99,
      image: 'https://www.deeliver.co.za/cdn/shop/files/huletts-white-sugar-1kg.jpg?v=1686754055',
    },
    {
      id: 4,
      title: 'Bread',
      description: 'Freshly baked bread from the local bakery.',
      price: 25.00,
      image: 'https://www.deeliver.co.za/cdn/shop/files/albany-superior-sliced-bread-white.jpg?v=1686322309',
    },
    {
      id: 5,
      title: 'Butter',
      description: 'Creamy butter made from farm-fresh cream.',
      price: 35.00,
      image: 'https://www.checkers.co.za/medias/checkers515Wx515H-medias-10124498EA-en-shopriteGlobalProductCatalog-20240909094624.png?context=bWFzdGVyfGltYWdlc3wxNjQ5MDN8aW1hZ2UvcG5nfGltYWdlcy9oN2UvaDk4LzExMjA4OTQ0MzIwNTQyLnBuZ3w3YTFmMWI1NGRiZGJmMjk5MzE2YTNiY2ZjMjYwNjg1YzVkNjRhNzNkYWJjNWFjYzJmMWEwMDEwYmEzMjFmNWY2',
    },
    {
      id: 6,
      title: 'Cheese',
      description: 'Aged cheddar cheese for sandwiches and snacks.',
      price: 45.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6qmnbYdh_QeOu48-aUsM9EFAxFxN-OLmmw&s',
    },
    {
      id: 7,
      title: 'Juice',
      description: 'Freshly squeezed orange juice, pure and natural.',
      price: 50.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8R0x2dAD1dqWVaRCZmQngBGKYd-FS72z2g&s',
    },
    {
      id: 8,
      title: 'Tomatoes',
      description: 'Fresh and ripe tomatoes, perfect for salads.',
      price: 15.00,
      image: 'https://assets.woolworthsstatic.co.za/Roma-Tomatoes-1-5-kg-6009173240828.jpg?V=Kkf6&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIyLTAxLTExLzYwMDkxNzMyNDA4MjhfaGVyby5qcGcifQ&q=75',
    },
    {
      id: 9,
      title: 'Potatoes',
      description: 'Locally grown potatoes, perfect for mashing.',
      price: 20.00,
      image: 'https://assets.woolworthsstatic.co.za/Up-To-Date-Potatoes-1-5-kg-6009211186521.jpg?V=LVo9&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTAyLTIwLzYwMDkyMTExODY1MjFfaGVyby5qcGcifQ&',
    },
    {
      id: 10,
      title: 'Onions',
      description: 'Fresh onions, great for cooking and seasoning.',
      price: 12.00,
      image: 'https://www.checkers.co.za/medias/10144919EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wxOTY3MjF8aW1hZ2UvcG5nfGltYWdlcy9oYzUvaDk3LzEwMzk2NTExOTYxMTE4LnBuZ3w1NThkYjMwNDk4YmRmNTliMGJlMGYyZTVhODZlYjU5NjhhNTU5NzcxZTQwM2FkZDY2MWNiMzZiODZjMjlhYzk1',
    },
  ];

  const handleBuy = (product) => {
    // Dispatch the action to add the product to the cart
    const productWithQuantity = { ...product, quantity: 1 };
    dispatch(addToCart(productWithQuantity));
  };

  return (
    <div className="container mt-4">
      <h1>Products Page</h1>
      <Row>
        {products.map((product) => (
          <Col xs={12} md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <h5>R{product.price.toFixed(2)}</h5>
                <Button variant="primary" className="mb-2" onClick={() => handleBuy(product)}>
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}