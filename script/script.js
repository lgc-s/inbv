document.getElementById('box').addEventListener('click', () => {
    const boxButton = document.querySelector('.box-open');
    let contentDiv = document.querySelector('.open-box');

    if (!contentDiv) {
        contentDiv = document.createElement('div');
        contentDiv.classList.add('open-box');
        contentDiv.innerHTML = `
        <div class="open-box">
            <div class="menu-tab-mobile">
                    <a href="index.html"></a><button class="albert animate button white"><b>Início</b></button>
                    <a href="page1.html"></a><button class="albert animate button white"><b>Página 1</b></button>
                    <a href="page2.html"></a><button class="albert animate button white"><b>Página 2</b></button>
                    <a href="page3.html"></a><button class="albert animate button white"><b>Página 3</b></button>
                    <a href="page4.html"></a><button class="albert animate button white"><b>Página 4</b></button>
                    <a href="page5.html"></a><button class="albert animate button white"><b>Página 5</b></button>
            </div>
            <div class="animate social-mobile-tab">
                <div class="social-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path class="animate svg-hover" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </div>
                <div class="animate social-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28.57 20">
                        <path class="animate svg-hover" d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"/>
                        <path class="animate svg-hover-invert" d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" />
                    </svg>
                </div>
                <div class="animate social-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                        <path class="animate svg-hover" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        <path class="animate svg-hover" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                    </svg>                      
                </div>
            </div>
        </div>`;

        contentDiv.style.opacity = "0";
        contentDiv.style.transition = "opacity 0.5s ease";

        boxButton.appendChild(contentDiv);

        const buttons = contentDiv.querySelectorAll("box");
        buttons.forEach((button) => {
            button.style.pointerEvents = "none";
        });

        requestAnimationFrame(() => {
            contentDiv.style.opacity = "1";

            setTimeout(() => {
                buttons.forEach((button) => {
                    button.style.pointerEvents = "auto";
                });
            }, 500);

            const handleOutsideClick = (event) => {
                if (contentDiv && !contentDiv.contains(event.target) && event.target.id !== 'box') {
                    buttons.forEach((button) => {
                        button.style.pointerEvents = "none";
                    });

                    contentDiv.style.opacity = "0";

                    setTimeout(() => {
                        if (contentDiv && contentDiv.parentNode) {
                            contentDiv.remove();
                        }
                        document.removeEventListener('click', handleOutsideClick);
                    }, 500);
                }
            };
            document.addEventListener('click', handleOutsideClick);
        });
    }
});