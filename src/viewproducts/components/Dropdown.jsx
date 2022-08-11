import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="products">All product</Dropdown.Item>
        <Dropdown.Item href="products/wine">Wine</Dropdown.Item>
        <Dropdown.Item href="products/beer">Beer</Dropdown.Item>
        <Dropdown.Item href="products/Tequilla">Tequilla</Dropdown.Item>
        <Dropdown.Item href="products/Sparkling Wine">Sparkling Wine</Dropdown.Item>
        <Dropdown.Item href="products/Sake">Sake</Dropdown.Item>
        <Dropdown.Item href="products/Scotch Whisky">Scotch Whisky</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;