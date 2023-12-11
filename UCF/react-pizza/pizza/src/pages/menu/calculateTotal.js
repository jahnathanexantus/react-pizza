// calculateTotal.js

export const calculateTotal = (prices) => {
    if (prices.length === 0) {
      return 0;
    }
  
    const total = prices.reduce((accumulator, currentPrice) => {
      return accumulator + currentPrice;
    }, 0);
  
    return total;
  };
  