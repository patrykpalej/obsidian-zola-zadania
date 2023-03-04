// Set darkmode
function isDark() {
	return document.body.classList.contains("dark");
}

const contactImageLightMode = "https://cloud.patrykpalej.com/index.php/s/D4DFADTZkXnyDxm/preview";
const contactImageDarkMode = "https://cloud.patrykpalej.com/index.php/s/PMcQXKXFMAPQW7b/preview";
localStorage.setItem("theme", isDark() ? "dark" : "dark");

// document.getElementById("mode").addEventListener("click", () => {
// 	document.body.classList.toggle("dark");
//
// 	localStorage.setItem("theme", isDark() ? "dark" : "light");
//
// 	// -----
// 	const contactImage = document.getElementById("contact")
// 	if (localStorage.getItem("theme") == "light") {
// 		contactImage.src = contactImageLightMode
// 	} else {
// 		contactImage.src = contactImageDarkMode
// 	}
// 	// -----
//
//
// 	// Update graph colors if exists
// 	if (graph) {
// 		graph.setOptions({
// 			nodes: {
// 				color: isDark() ? "#8c8e91" : "#dee2e6",
// 				font: {
// 					color: isDark() ? "#c9cdd1" : "#616469",
// 					strokeColor: isDark() ? "#c9cdd1" : "#616469",
// 				},
// 			},
// 		});
// 	}
// });

// -----------------------------------
(async () => {
    async function get_config(configJson) {
  const data = await fetch(configJson);
  const txt = await data.text()
  return await JSON.parse(txt);
}

const configJson = "https://raw.githubusercontent.com/patrykpalej/python-szkolenia/master/config.json";
const config = await get_config(configJson);
const trainings = Object.keys(config).sort()

let htmlContent = ""
for (let t of trainings) {
	const new_t = t.slice().replace('|todo', '')
	const trainingUrl = config[t]
	htmlContent += `<a style="width: 16rem; ${t.includes('|todo') ? 'opacity: 0.3' : ''}" class="btn btn-primary btn-lg px-4 mb-2" href="${trainingUrl}" role="button">${new_t}</a>
    <br> <br>
 `
}

try {
document.getElementById("tematy-szkolen").innerHTML = htmlContent
} catch (e) {}


})();


const trainings = ["Analiza danych|todo", "Python od podstaw"]
// let htmlContent = ""
// for (let t of trainings) {
// 	let new_t = t.replace('|todo', '')
// 	htmlContent += `<a style="width: 16rem; ${t.includes('|todo') ? 'opacity: 0.3' : ''}" class="btn btn-primary btn-lg px-4 mb-2" href="https://patrykpalej.dev/docs/oferta-szkolen/#python-od-podstaw-spis-tresci" role="button">${new_t}</a>
//     <br> <br>
//  `
// }
//
// try {
// document.getElementById("tematy-szkolen").innerHTML = htmlContent
// } catch (e) {}


//
// `
// 				<a style="width: 16rem" class="btn btn-primary btn-lg px-4 mb-2" href="https://patrykpalej.dev/docs/oferta-szkolen/#python-spis-tresci" role="button">Python</a>
//                   <br>
//                   <br>
//                   <a style="width: 16rem; opacity: 0.5;" class="btn btn-primary btn-lg px-4 mb-2" href="https://patrykpalej.dev/docs/oferta-szkolen/#data-science-spis-tresci" role="button">Data Science</a>
//                   <br>
//                   <br>
//                   <a style="width: 16rem" class="btn btn-primary btn-lg px-4 mb-2" href="https://patrykpalej.dev/docs/o-mnie" role="button">Machine Learning</a>`;
//

// ----------------------------------------------------------------

//                   <br>
//                   <br>
//                   <a style="width: 16rem" class="btn btn-primary btn-lg px-4 mb-2" href="https://patrykpalej.dev/docs/o-mnie" role="button">Bazy danych</a>
//                   <br>
//                   <br>
//                   <a style="width: 16rem; opacity: 0.5;" class="btn btn-primary btn-lg px-4 mb-2" href="https://patrykpalej.dev/docs/oferta-szkolen/#python-spis-tresci" role="button">Pozyskiwanie danych</a>
//                   <br>
//                   <br>
//                   <a style="width: 16rem; opacity: 0.5;" class="btn btn-primary btn-lg px-4 mb-2" href="https://patrykpalej.dev/docs/oferta-szkolen/#python-spis-tresci" role="button">Git</a>`;
//

// -----------------------------------


// Collapsible sidebar code (it's ugly but I don't care)
var sections = $(".collapsible-section");
if (!sidebar_collapsed) {
	sections.addClass("open");
}

// Add click listener to all collapsible sections
for (let i = 0; i < sections.length; i++) {
	// Initial setup
	let wrapper = $(sections[i].nextElementSibling);
	let wrapper_children = wrapper.find("> ul");

	if (wrapper_children.length > 0) {
		let page_list = $(wrapper_children[0]);
		if (sidebar_collapsed) {
			wrapper.height(0);
		} else {
			wrapper.addClass("open");
			wrapper.height(page_list.outerHeight(true));
		}
	}

	// Click listener
	sections[i].addEventListener("click", function () {
		// Toggle class
		this.classList.toggle("open");

		// Change wrapper height and class
		let wrapper = $(sections[i].nextElementSibling);
		let wrapper_children = wrapper.find("> ul");

		if (wrapper_children.length > 0) {
			let page_list = $(wrapper_children[0]);
			if (wrapper.hasClass("open")) {
				wrapper.removeClass("open");
				wrapper.height(0);
			} else {
				wrapper.addClass("open");
				wrapper.height(page_list.outerHeight(true));
			}
		}
	});

}

