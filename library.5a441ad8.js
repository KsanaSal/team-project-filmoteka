!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("lJO36"),i=(n=a("lJO36"),{watchedBtn:document.querySelector('button[data-library="watched"]'),queueBtn:document.querySelector('button[data-library="queue"]'),libBtnsContainer:document.querySelector(".library__btn-list")});function l(e){"BUTTON"===e.target.nodeName&&"watched"===e.target.dataset.library?(i.watchedBtn.classList.add("active__btn"),i.queueBtn.classList.remove("active__btn"),n.Film.renderWatchedFilms("watchedFilms","просмотренных")):"BUTTON"===e.target.nodeName&&"queue"===e.target.dataset.library&&(i.watchedBtn.classList.remove("active__btn"),i.queueBtn.classList.add("active__btn"),n.Film.renderWatchedFilms("queueFilms","запланированных"))}a("kgvtT");var d=a("3dbg1");a("gbcVY");var s=a("dmvdd"),o={libBtnsContainer:document.querySelector(".library__btn-list")};window.addEventListener("load",(function(){o.libBtnsContainer.addEventListener("click",l),null!==localStorage.getItem("userData")?(n.Film.setCurrentUserFilmList(JSON.parse(localStorage.getItem("userData")).userName),document.querySelector(".library__btn").classList.contains("active__btn")?n.Film.renderWatchedFilms("watchedFilms","просмотренных"):n.Film.renderWatchedFilms("queueFilms","запланированных"),(0,d.renderCurrentUserName)(),(0,d.addEventListenerOnExitBtn)()):n.Film.renderWatchedFilms("watchedFilms","просмотренных")})),(0,s.default)()}();
//# sourceMappingURL=library.5a441ad8.js.map
