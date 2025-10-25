const categoriesElLi = document.querySelectorAll(`.item`);
const count = arr => {
    return `Number of categories: ${arr.length}`
}
console.log(count(categoriesElLi));

categoriesElLi.forEach(el => {
    const title = el.querySelector(`h2`)
    console.log(`Category: ${title.textContent}`); 
    
    const elements = el.querySelectorAll((`ul li`));
    console.log(`Elements ${elements.length}`);    
})


