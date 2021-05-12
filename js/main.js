const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-content');
const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');

const createBox = (title, content, topLeftBuffer) => {
    return new WinBox({
        title: title,
        width: '400px',
        height: '400px',
        top: topLeftBuffer,
        right: 50,
        bottom: 50,
        left: topLeftBuffer,
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
    createBox('About Me', aboutContent, 50);
});

contact.addEventListener('click', () => {
    createBox('Contact Me', contactContent, 150);
});
