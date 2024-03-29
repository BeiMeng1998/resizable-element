const createResizableElements = () => {
    const resizeBoxRight = document.getElementsByClassName('resize-right')
    for (let i = 0; i < resizeBoxRight.length; i++) {
        const position = window.getComputedStyle(resizeBoxRight[i]).position
        if (!position || position === 'static') {
            resizeBoxRight[i].style.position = 'relative'
        }
        const rightHotArea = document.createElement('div')
        rightHotArea.style.position = 'absolute'
        rightHotArea.style.top = '0px'
        rightHotArea.style.right = '-5px'
        rightHotArea.style.zIndex = 999999999999
        rightHotArea.style.width = '10px'
        rightHotArea.style.height = '100%'
        rightHotArea.style.cursor = 'col-resize'
        rightHotArea.onmousedown = e => {
            const startX = e.x
            let tempX
            document.onmousemove = e => {
                const endX = e.x
                let xLength
                if (!tempX) {
                    xLength = endX - startX
                } else {
                    xLength = endX - tempX
                }
                if (Math.abs(xLength) >= 1) {
                    rightHotArea.parentNode.style.width = rightHotArea.parentNode.clientWidth + xLength + 'px'
                    tempX = endX
                }
                return false
            }
            return false
        }
        document.onmouseup = () => {
            document.onmousemove = null
            return false
        }
        resizeBoxRight[i].appendChild(rightHotArea)
    }

    const resizeBoxLeft = document.getElementsByClassName('resize-left')
    for (let i = 0; i < resizeBoxLeft.length; i++) {
        const position = window.getComputedStyle(resizeBoxLeft[i]).position
        if (!position || position === 'static') {
            resizeBoxLeft[i].style.position = 'relative' 
        }
        const leftHotArea = document.createElement('div')
        leftHotArea.style.position = 'absolute'
        leftHotArea.style.top = '0px'
        leftHotArea.style.left = '-5px'
        leftHotArea.style.zIndex = 999999999999
        leftHotArea.style.width = '10px'
        leftHotArea.style.height = '100%'
        leftHotArea.style.cursor = 'col-resize'
        leftHotArea.onmousedown = e => {
            const startX = e.x
            let tempX
            document.onmousemove = e => {
                const endX = e.x
                let xLength
                if (!tempX) {
                    xLength = startX - endX
                } else {
                    xLength = tempX - endX
                }
                if (Math.abs(xLength) >= 1) {
                    leftHotArea.parentNode.style.width = leftHotArea.parentNode.clientWidth + xLength + 'px'
                    tempX = endX
                }
                return false
            }
            return false
        }
        document.onmouseup = () => {
            document.onmousemove = null
            return false
        }
        resizeBoxLeft[i].appendChild(leftHotArea)
    }

    const resizeBoxTop = document.getElementsByClassName('resize-top')
    for (let i = 0; i < resizeBoxTop.length; i++) {
        const position = window.getComputedStyle(resizeBoxTop[i]).position
        if (!position || position === 'static') {
            resizeBoxTop[i].style.position = 'relative'
        }
        const topHotArea = document.createElement('div')
        topHotArea.style.position = 'absolute'
        topHotArea.style.top = '-5px'
        topHotArea.style.zIndex = 999999999999
        topHotArea.style.width = '100%'
        topHotArea.style.height = '10px'
        topHotArea.style.cursor = 'row-resize'
        topHotArea.onmousedown = e => {
            const startY = e.y
            let tempY
            document.onmousemove = e => {
                const endY = e.y
                let yLength
                if (!tempY) {
                    yLength =  startY - endY
                } else {
                    yLength = tempY - endY 
                }
                if (Math.abs(yLength) >= 1) {
                    topHotArea.parentNode.style.height = topHotArea.parentNode.clientHeight + yLength + 'px'
                    tempY = endY
                }
                return false
            }
            return false
        }
        document.onmouseup = () => {
            document.onmousemove = null
            return false
        }
        resizeBoxTop[i].appendChild(topHotArea)
    }

    const resizeBoxBottom = document.getElementsByClassName('resize-bottom')
    for (let i = 0; i < resizeBoxBottom.length; i++) {
        const position = window.getComputedStyle(resizeBoxBottom[i]).position
        if (!position || position === 'static') {
            resizeBoxBottom[i].style.position = 'relative'
        }
        const bottomHotArea = document.createElement('div')
        bottomHotArea.style.position = 'absolute'
        bottomHotArea.style.bottom = '-5px'
        bottomHotArea.style.zIndex = 999999999999
        bottomHotArea.style.width = '100%'
        bottomHotArea.style.height = '10px'
        bottomHotArea.style.cursor = 'row-resize'
        bottomHotArea.onmousedown = e => {
            const startY = e.y
            let tempY
            document.onmousemove = e => {
                const endY = e.y
                let yLength
                if (!tempY) {
                    yLength = endY - startY 
                } else {
                    yLength = endY - tempY
                }
                if (Math.abs(yLength) >= 1) {
                    bottomHotArea.parentNode.style.height = bottomHotArea.parentNode.clientHeight + yLength + 'px'
                    tempY = endY
                }
                return false
            }
            return false
        }
        document.onmouseup = () => {
            document.onmousemove = null
            return false
        }
        resizeBoxBottom[i].appendChild(bottomHotArea)
    }
}
module.exports = createResizableElements