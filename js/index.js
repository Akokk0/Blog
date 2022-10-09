let bulc = document.getElementsByClassName('blog-user-list-content')[0].children
// console.log(bulc)
for (item of bulc) {
    console.log(item)
    item.onclick = function () {
        item.className = 'blog-user-list-item blog-user-list-item-active'
    }
}
