const stockPickPanel = document.querySelector('.stockPickPanel');
const stockPickButton = document.querySelector('.stockPickButton');

stockPickButton.onclick = () => {

    stockPickPanel.style.position = 'relative';
    stockPickPanel.style.height = '100%';
    stockPickPanel.style.opacity = '1';
    stockPickPanel.style.transform = 'translateY(0em)';
    
};