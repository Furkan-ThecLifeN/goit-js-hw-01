function getElementWidth(content,padding,border) {
    const contentValue = parseFloat(content);
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);

    const totalValue = contentValue + 2 * paddingValue + 2 * borderValue ;
    
    return totalValue
    
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));