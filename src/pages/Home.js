import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Grid, Row } from 'rsuite';
import categories from '../database/categories.json';

const Home = () => {
  return (
    <Grid>
      <h1>Categories</h1>
      <Row className="show-grid">
        {categories.map(ctg => (
          <Col key={ctg.id} sm={24} md={8}>
            <Link to={`/category/${ctg.id}`}>
              {' '}
              <h2>{ctg.name}</h2>{' '}
            </Link>
          </Col>
        ))}
      </Row>
    </Grid>
  );
};

export default Home;
