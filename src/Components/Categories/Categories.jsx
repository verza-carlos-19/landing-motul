import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import {
  CategoriesTitle,
  ContainerCategories,
  ContainerCategoriesCard,
} from "./CategoriesStyles";

function Categories() {
  return (
    <>
      <ContainerCategories>
        <CategoriesTitle>Categorias</CategoriesTitle>
        <ContainerCategoriesCard>
          <CategoryCard name={"todos"} category={null} />
          <CategoryCard name={"aceites"} category={"aceite"} />
          <CategoryCard name={"refrigerantes"} category={"refrigerante"} />
          <CategoryCard name={"aerosoles"} category={"aerosol"} />
        </ContainerCategoriesCard>
      </ContainerCategories>
    </>
  );
}

export default Categories;
