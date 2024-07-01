document.addEventListener('DOMContentLoaded', function() {
    // 底部菜單交互
    const bottomMenuItems = document.querySelectorAll('.bottom-menu .menu-item');
    bottomMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            bottomMenuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 側邊菜單按鈕效果
    const sideMenuItems = document.querySelectorAll('.side-menu .menu-item');
    sideMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 主菜單六角形按鈕效果
    const hexButtons = document.querySelectorAll('.hex-button');
    hexButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 模擬資源增加
    const addButtons = document.querySelectorAll('.add');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const resourceElement = this.parentElement;
            const currentValue = parseInt(resourceElement.textContent);
            resourceElement.textContent = currentValue + 1 + ' ';
            resourceElement.appendChild(this);
        });
    });
});