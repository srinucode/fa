export default class Animations {
    static animations = new Animations();
    fadeInScreen = (screen_name) => {
        const screen = document.getElementById(screen_name);
        if (!screen) return;
        screen.style.opacity = "5";
        screen.style.transform = "translateY(1px)";
    }

}
