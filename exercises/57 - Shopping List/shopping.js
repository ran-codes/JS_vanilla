const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
// We need an array to hold our state
const items = [];

function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.item.value;
        const item = {
                name,
                id: Date.now(),
                complete: false,
        };
        // Push item to state
        items.push(item);
        console.log(items);
        // Clear Form
        e.currentTarget.reset();
        // fire off a custom event that will tell anyone else who cares that the items have been updated!
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
        const html = items
                .map(
                        (item) => `<li class = "shopping-item">
                        <input type = "checkbox">
                        <span class = "itemName">${item.name}</span>
                        <button>&times</button>
                        </li>`
                )
                .join('');
        console.log(html);
        list.innerHTML = html;
}

function mirrorToLocalStorage() {
        console.info('Saving items to localstorage');
        localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
        console.info('Restoring from LS');
        // pull the items from LS
        const lsItems = JSON.parse(localStorage.getItem('items'));
        if (lsItems.length) {
                // items = lsItems;
                // lsItems.forEach(item => items.push(item));
                // items.push(lsItems[0], lsItems[1]);
                items.push(...lsItems);
                list.dispatchEvent(new CustomEvent('itemsUpdated'));
        }
}
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
restoreFromLocalStorage();
