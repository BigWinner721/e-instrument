// // 最原始能响
// const soundFiles = [
//     'sound1.wav',
//     'sound2.wav',
//     // 添加更多声音文件路径
// ];

// // 创建音频对象
// const audioObjects = soundFiles.map(file => new Audio(file));

// // 监听方格点击事件
// const gridItems = document.querySelectorAll('.grid-item');
// gridItems.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         playSound(index); // 播放对应索引的声音
//     });
// });

// // 播放声音函数
// function playSound(index) {
//     if (index >= 0 && index < audioObjects.length) {
//         const audio = audioObjects[index];
//         audio.currentTime = 0; // 重置音频时间
//         audio.play(); // 播放音频
//     }
// }


// 声音文件路径
const soundFiles = [
    'sound1.wav',
    'sound2.wav',
    'sound3.wav',
    'sound4.wav',
    'sound5.wav',
    'sound6.wav',
    'sound7.wav',
    'sound8.wav',
    // 添加更多声音文件路径
];

// 创建音频对象
const audioObjects = soundFiles.map(file => new Audio(file));

// 创建一个数组来存储当前按下的按钮索引
const activeButtons = [];

// 监听方格按钮的触摸事件
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {

    item.addEventListener('click', () => {
        if (!isMobileDevice()) {
            playSound(index); // 激活按钮
        }
    });

    item.addEventListener('touchstart', (event) => {
        event.preventDefault(); // 阻止默认触摸事件
        if (isMobileDevice()) {
            activateButton(index); // 激活按钮
        }
    });

    item.addEventListener('touchend', () => {
        deactivateButton(index); // 取消激活按钮
    });

});

// 判断是否为移动设备
function isMobileDevice() {
    return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}

// 激活按钮函数
function activateButton(index) {
    if (!activeButtons.includes(index)) {
        activeButtons.push(index);
        playSound(index);
    }
}

// 取消激活按钮函数
function deactivateButton(index) {
    const buttonIndex = activeButtons.indexOf(index);
    if (buttonIndex !== -1) {
        activeButtons.splice(buttonIndex, 1);
    }
}


// 播放声音函数
function playSound(index) {
    if (index >= 0 && index < audioObjects.length) {
        const audio = audioObjects[index];
        audio.currentTime = 0;
        audio.play();
    }
}