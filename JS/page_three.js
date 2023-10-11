/*輪播圖 ===================================================================================================== RWD OK**/

// 显示的图片下标
let index = 2

//顯示圖片數量
let imageCount = document.querySelectorAll(
    ".featured_one .featured_bg img"
).length

const bottom = document.querySelector(".featured_one .bottom")
for (let i = 0; i < imageCount; i++) {
    const indicator = document.createElement("div")
    indicator.classList.add("indicator")
    indicator.onclick = () => setIndex(i)

    bottom.append(indicator)
}

function createAuto() {
    return setInterval(() => {
        index++
        refresh()
    }, 3000)
}

//自動滾動
let autoTimer = createAuto()

function refresh() {
    if (index < 0) {
        //下標小於0時 設置在最右邊
        index = imageCount - 1
    } else if (index >= imageCount) {
        //下標超過上限 設置在最左邊
        index = 0
    }

    //獲取輪播元素
    let carousel = document.querySelector('.featured_one')

    //獲取輪播框的寬度
    let width = getComputedStyle(carousel).width
    width = Number(width.slice(0, -2))

    carousel.querySelector(".featured_bg").style.left =
        index * width * -1 + "px"
}

let refreshWrapper = (func) => {
    //refresh 裝飾器
    return function (...args) {
        let result = func(...args)
        refresh()

        //重製自動滾動
        clearInterval(autoTimer)
        autoTimer = createAuto()
        return result
    }
}

let leftShift = refreshWrapper(() => {
    index--
})

let rightShift = refreshWrapper(() => {
    index++
})

let setIndex = refreshWrapper((idx) => {
    index = idx
})

refresh()



/*置頂按鈕 ===================================================================================================== RWD OK**/

document.querySelector('.sticky-icon').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});

