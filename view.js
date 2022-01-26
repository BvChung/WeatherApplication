export default class WeatherView {
	_dataCurrent;
	_dataWeekly;
	_units;
	_currentIconContainer = document.querySelector(".info-logo");
	_errEl = document.querySelector(".error");

	render(dataCurrent, dataWeekly, units) {
		this._dataCurrent = dataCurrent;
		this._dataWeekly = dataWeekly;
		this._units = units;
		console.log(this._dataCurrent, this._dataWeekly, this._units);

		// this._displayLocation();
		this.displayTime();
		const markup = this.generateMarkup();
		this._clearHTML();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	addHandlerSearch(handler) {
		// Add to parent element so that event occurs when enter is pressed or button is clicked
		this._inputParentEl.addEventListener("submit", function (e) {
			e.preventDefault();
			handler();
		});
	}

	_clear() {
		this._inputParentEl.querySelector(".input-text-search").value = "";
	}

	_clearHTML() {
		this._parentElement.innerHTML = "";
	}

	renderError() {
		document.querySelector(".error").classList.remove("hidden");
		// const markup = `
		// <div class="error">
		// 				<div class="error-icon">
		// 					<ion-icon name="warning-outline"></ion-icon>
		// 				</div>
		// 				<div class="error-text">
		// 					<p >${message}</p>
		// 				</div>
		// 				<button class="exit-btn"><ion-icon class="error-exit "name="close-outline"></ion-icon></button>
		// 			</div>
		// `;
		// this._errParentEl.insertAdjacentHTML("beforeend", markup);
	}
}
