export const addToCart = (item) => {
    localStorage.setItem(`item${item.id}`, JSON.stringify(item))
}