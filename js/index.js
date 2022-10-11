/*let itemArray = document.getElementsByClassName('blog-user-list-content')[0].children
// console.log(bulc)
for (item of itemArray) {
    console.log(item)
}
*/

// 入口函数
$(function () {
    $('.blog-user-list-item').on('click', this, function () {
        if ($(this).hasClass("blog-user-list-item-active")) {
            // $(this).removeClass("blog-user-list-item-active");
        } else {
            $(".blog-user-list-item").each(function () {
                $(this).removeClass("blog-user-list-item-active");
            })
            $(this).addClass("blog-user-list-item-active");
        }
    })
})


