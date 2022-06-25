import PropTypes from "prop-types";

function ItemList({ name, description, images }) {
  return (
    <>
      <h4>{name}</h4>
      <p>{description}</p>
      <img src={images.icon} alt={""} style={{ height: "100px" }} />
    </>
  );
}

ItemList.propType = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  images: PropTypes.object,
};

export default ItemList;
