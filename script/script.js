document.getElementById('box').addEventListener('click', () => {
    const boxButton = document.querySelector('.box-open');
    let contentDiv = document.querySelector('.open-box');

    if (!contentDiv) {
        contentDiv = document.createElement('div');
        contentDiv.classList.add('open-box');
        contentDiv.innerHTML = `
        <div class="menu-tab-mobile">
            <button class="button-mobile"><b>Início</b></button>
            <button class="button-mobile"><b>Sobre</b></button>
            <button class="button-mobile"><b>Ministérios</b></button>
            <button class="button-mobile"><b>Ação Social</b></button>
            <button class="button-mobile"><b>NED</b></button>
            <button class="button-mobile"><b>Programação</b></button>
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