export default function cookie() {
    const modal = document.querySelector('.cookie-consent');
    if (document.cookie) modal.className = 'cookie-consent hide'
    modal.addEventListener('click', ({ target }) => {
        if (target.className === 'cookie-consent__button') {
            document.cookie = true;
            modal.className = 'cookie-consent hide';
        }
    })
};