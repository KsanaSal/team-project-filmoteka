!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("lJO36"),d=a("kvC6y"),i=(n=a("lJO36"),{watchedBtn:document.querySelector('button[data-library="watched"]'),queueBtn:document.querySelector('button[data-library="queue"]'),libBtnsContainer:document.querySelector(".library__btn-list")});function l(e){"BUTTON"===e.target.nodeName&&"watched"===e.target.dataset.library?(i.watchedBtn.classList.add("active__btn"),i.queueBtn.classList.remove("active__btn"),n.Film.renderWatchedFilms("watchedFilms","watched")):"BUTTON"===e.target.nodeName&&"queue"===e.target.dataset.library&&(i.watchedBtn.classList.remove("active__btn"),i.queueBtn.classList.add("active__btn"),n.Film.renderWatchedFilms("queueFilms","scheduled"))}a("kgvtT");var s=a("3dbg1");a("gbcVY");var c=a("dmvdd"),o={libBtnsContainer:document.querySelector(".library__btn-list")};(0,d.showLoader)(),window.addEventListener("load",(function(){o.libBtnsContainer.addEventListener("click",l),null!==localStorage.getItem("userData")?(n.Film.setCurrentUserFilmList(JSON.parse(localStorage.getItem("userData")).userName),document.querySelector(".library__btn").classList.contains("active__btn")?n.Film.renderWatchedFilms("watchedFilms","watched"):n.Film.renderWatchedFilms("queueFilms","scheduled"),(0,s.renderCurrentUserName)(),(0,s.addEventListenerOnExitBtn)()):n.Film.renderWatchedFilms("watchedFilms","watched"),(0,d.hideLoader)(),(0,c.default)()}))}();
//# sourceMappingURL=library.e159c9d7.js.map
