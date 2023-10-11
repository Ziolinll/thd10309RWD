/*置頂按鈕 ===================================================================================================== RWD OK**/

document.querySelector('.sticky-icon').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});
