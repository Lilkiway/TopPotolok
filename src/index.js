import "./css/sass/style.scss";
import tabs from "./modules/tabs";
import gallery from "./modules/gallery";
import modal from "./modules/modal"
import select from "./modules/select";
import burgerMenu from "./modules/burger";
import form from "./modules/form";

window.addEventListener('DOMContentLoaded', function() {

    tabs('.types__select', '.types__item', '.types__category');
    tabs('.types__option', '.types__item', '.types__options');
    gallery('.gallery__big_img', '.gallery__next', '.gallery__prev', '.gallery__mini_img', '.gallery__select', '.gallery__category', '.gallery__block-img img', '.gallery__item-mini img', '.gallery__option', '.gallery__options');
    modal('.popup_trigger', '.types__btn', '.popup', '.popup__close', '.menu__list');
    select('.types__option', '.types__options', '.types__option-select', '.types__option-desc', '.types__option-arr');
    select('.gallery__option', '.gallery__options', '.gallery__option-select', '.gallery__option-desc', '.gallery__option-arr');
    burgerMenu('.burger', '.menu__list');
    form('.form', '.phone', '.form__alert_message');
});