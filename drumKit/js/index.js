const keyBoard = document.querySelectorAll(".key");
keyBoard.forEach((key => {
    key.addEventListener("click", () => {
        if (key.innerHTML === "<span>a</span>") {
            let audio = document.querySelector(`audio[data-key="65"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>w</span>") {
            let audio = document.querySelector(`audio[data-key="87"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>s</span>") {
            let audio = document.querySelector(`audio[data-key="83"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>e</span>") {
            let audio = document.querySelector(`audio[data-key="69"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>d</span>") {
            let audio = document.querySelector(`audio[data-key="68"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>f</span>") {
            let audio = document.querySelector(`audio[data-key="70"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>t</span>") {
            let audio = document.querySelector(`audio[data-key="84"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>g</span>") {
            let audio = document.querySelector(`audio[data-key="71"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>y</span>") {
            let audio = document.querySelector(`audio[data-key="89"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>h</span>") {
            let audio = document.querySelector(`audio[data-key="72"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>u</span>") {
            let audio = document.querySelector(`audio[data-key="85"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>j</span>") {
            let audio = document.querySelector(`audio[data-key="74"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>k</span>") {
            let audio = document.querySelector(`audio[data-key="75"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>o</span>") {
            let audio = document.querySelector(`audio[data-key="79"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>l</span>") {
            let audio = document.querySelector(`audio[data-key="76"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>p</span>") {
            let audio = document.querySelector(`audio[data-key="80"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
        else if (key.innerHTML === "<span>;</span>") {
            let audio = document.querySelector(`audio[data-key="186"]`);
            audio.currentTime = 0;
            audio.play();
            key.classList.add("active");

            setTimeout(() => {
                keyBoard.forEach((key => {
                    key.classList.remove("active")
                }));
            }, 1000);
        }
    });
}));


window.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`),
        keys = document.querySelectorAll(".key");

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");

    setTimeout(() => {
        keys.forEach((key => {
            key.classList.remove("active")
        }));
    }, 1000);
});






