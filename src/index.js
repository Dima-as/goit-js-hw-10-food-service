import template from "./templatew/template-cards.hbs";
import menu from "./js/menu.json";
import temsSwitch from "./js/switch";
import refs from "./js/refs";

const { list } = refs;
list.insertAdjacentHTML("afterbegin", template({ menu }));

