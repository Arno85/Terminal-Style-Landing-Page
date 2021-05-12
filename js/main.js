const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-content');
const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');

const createBox = (title, content, positionX, positionY) => {
    return new WinBox({
        title: title,
        width: '500px',
        height: '500px',
        x: positionX,
        y: positionY,
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: content,
        onfocus: function() {
            this.setBackground('#00aa00');
        },
        onblur: function() {
            this.setBackground('#555');
        },
    })
};

about.addEventListener('click', () => {
    createBox('About Me', aboutContent, 0, 0);
});

contact.addEventListener('click', () => {
    createBox('Contact Me', contactContent, window.innerWidth - 550, window.innerHeight - 550);
});
