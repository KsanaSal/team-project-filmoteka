!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("lJO36"),i=(a=n("lJO36"),{watchedBtn:document.querySelector('button[data-library="watched"]'),queueBtn:document.querySelector('button[data-library="queue"]'),libBtnsContainer:document.querySelector(".library__btn-list")});function l(e){"BUTTON"===e.target.nodeName&&"watched"===e.target.dataset.library?(i.watchedBtn.classList.add("active__btn"),i.queueBtn.classList.remove("active__btn"),a.Film.renderWatchedFilms("watchedFilms","просмотренных")):"BUTTON"===e.target.nodeName&&"queue"===e.target.dataset.library&&(i.watchedBtn.classList.remove("active__btn"),i.queueBtn.classList.add("active__btn"),a.Film.renderWatchedFilms("queueFilms","запланированных"))}n("kgvtT");var d=n("3dbg1");n("gbcVY");var s={libBtnsContainer:document.querySelector(".library__btn-list")};window.addEventListener("load",(function(){s.libBtnsContainer.addEventListener("click",l),null!==sessionStorage.getItem("userData")?(a.Film.setCurrentUserFilmList(JSON.parse(sessionStorage.getItem("userData")).userName),document.querySelector(".library__btn").classList.contains("active__btn")?a.Film.renderWatchedFilms("watchedFilms","просмотренных"):a.Film.renderWatchedFilms("queueFilms","запланированных"),(0,d.renderCurrentUserName)(),(0,d.addEventListenerOnExitBtn)()):a.Film.renderWatchedFilms("watchedFilms","просмотренных")}))}();
//# sourceMappingURL=library.5f9b7369.js.map