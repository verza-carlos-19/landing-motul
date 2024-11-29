import React from "react";
import { CardCategoryBox, CardCategoryText } from "./CategoryCardStyls";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategory,
  // getAllProducts,
} from "../../../Redux/Categories/CategorySlice";
function CategoryCard({ name, category }) {
  const dispatch = useDispatch();
  const { productsFiltered } = useSelector((state) => state.categories);

  return (
    <>
      <CardCategoryBox
        onClick={() => {
          console.log(category);
          dispatch(filterCategory(category));
          console.log(productsFiltered);
        }}
      >
        <CardCategoryText>{name}</CardCategoryText>
      </CardCategoryBox>
    </>
  );
}

export default CategoryCard;
