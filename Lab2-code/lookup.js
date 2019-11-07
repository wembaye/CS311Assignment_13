

function checkForSum(a, c) {
    let product = new Map();
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            product.set(a[i] + a[j], 1)
        }
    }
    if(product.has(c)){
        return true;
    }
    else {
        return false; 
    }
        
    
}