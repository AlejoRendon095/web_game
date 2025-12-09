import { menuManager } from "./menuManager.js";



document.addEventListener('DOMContentLoaded', () => {
    const menu = new menuManager();
    document.getElementById("mainMenu").onclick = () => {
   
    menu.init();
};
});

