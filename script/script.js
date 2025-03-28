document.getElementById('box').addEventListener('click', () => {
    const boxButton = document.querySelector('.box-open');
    let contentDiv = document.querySelector('.open-box');
    
    if (!contentDiv) {
        contentDiv = document.createElement('div');
        contentDiv.classList.add('open-box');
        contentDiv.innerHTML = `
        <div class="menu-tab-temp-mobile">
            <button class="button-temp">Início</button>
            <button class="button-temp">Botão 2</button>
            <button class="button-temp">Botão 3</button>
            <button class="button-temp">Botão 4</button>
            <button class="button-temp">Botão 5</button>
            <button class="button-temp">Botão 6</button>
        </div>`;

        contentDiv.style.opacity = "0";
        contentDiv.style.transition = "opacity 0.5s ease";
        
        boxButton.appendChild(contentDiv);
        
            const links = contentDiv.querySelectorAll("a");
            links.forEach((link) => {
                link.style.pointerEvents = "none";
            });
            
            requestAnimationFrame(() => {
                contentDiv.style.opacity = "1";
                
                setTimeout(() => {
                    links.forEach((link) => {
                        link.style.pointerEvents = "auto";
                    });
                }, 500);
            });
            
            const handleOutsideClick = (event) => {
                if (!contentDiv.contains(event.target) && event.target.id !== 'box') {
                        links.forEach((link) => {
                            link.style.pointerEvents = "none";
                        });
                        
                        contentDiv.style.opacity = "0";
                        
                        setTimeout(() => {
                            contentDiv.remove();
                            document.removeEventListener('click', handleOutsideClick);
                        }, 500);
                    }
                };
                document.addEventListener('click', handleOutsideClick);
            }
        });