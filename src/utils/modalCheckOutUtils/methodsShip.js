import { formatPrice } from "../formatPrice";

export const percentageCalculator = (items, percent) => {
  const itemsPrice = items.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  const priceTotal = formatPrice(itemsPrice + (itemsPrice * percent) / 100);
  return priceTotal;
};

export const handleCheckboxChange = (event) => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    if (checkbox !== event.target && checkbox.checked) {
      checkbox.checked = false;
    }
  });
};
