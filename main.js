// @ts-nocheck
let newText = document.querySelector("#newText");
let newImage = document.querySelector("#newImage");

function changeContentItem1() {
	let html = `
    <h3>Dr. Sarah Anderson</h3>

<p>Dr. Sarah Anderson is an esteemed professor of Psychometrics with extensive experience in teaching and research. She holds a Ph.D. in Psychology from a renowned university and has been actively involved in the field of psychometrics for over two decades.</p>

<p> Dr. Anderson's research interests lie in measurement theory, test development, and validation. Her expertise in statistical analysis and psychometric methods makes her a valuable asset in the classroom. Students appreciate her engaging teaching style, depth of knowledge, and commitment to fostering a deep understanding of psychometrics.</p>

  `;

	newImage.setAttribute("src", "./img/faculties/sarahanderson.jpg");

	// @ts-ignore
	newText.innerHTML = html;
}

function changeContentItem2() {
	let html = `
    <h3>Dr. James Williams</h3>
  
  <p>Dr. James Williams is an experienced educator with a strong background in psychometrics and measurement. He holds a Ph.D. in Psychometrics and has worked on various research projects focusing on test development and validation.</p>
  
  <p> Dr. Williams' expertise extends to computerized adaptive testing, test equating, and latent variable modeling. His dynamic teaching style and ability to relate complex concepts to real-world applications create an engaging learning environment for students. Driven by his passion for psychometrics, Dr. Williams strives to inspire students to excel in the field.</p>
  `;
	// @ts-ignore
	newImage.setAttribute("src", "./img/faculties/James Williams.jpg");

	// @ts-ignore
	newText.innerHTML = html;
}
function changeContentItem3() {
	let html = `
    <h3>Prof. Elizabeth Thompson</h3>
  
  <p>Prof. Elizabeth Thompson is a highly accomplished professor renowned for her expertise in psychometrics and educational assessment. With a distinguished career spanning over three decades, she has made significant contributions to the field through her research and consultancy work.</p>
  
  <p> Prof. Thompson's vast knowledge encompasses areas such as classical test theory, factor analysis, and measurement invariance. Her engaging teaching style and ability to simplify complex concepts have made her a sought-after instructor. Students appreciate her dedication to fostering a deep understanding of psychometrics and its practical applications.</p>
  `;
	// @ts-ignore
	newImage.setAttribute("src", "./img/faculties/Catherine Thompson.jpg");

	// @ts-ignore
	newText.innerHTML = html;
}
function changeContentItem4() {
	let html = `
    <h3>Dr. Michael Johnson</h3>
  
  <p>Dr. Michael Johnson is a dedicated scholar with a specialization in psychometrics. He earned his Ph.D. in Educational Measurement and Statistics and has published numerous research articles in reputable journals. </p>
  
  <p> Dr. Johnson's research focuses on item response theory, equating methods, and test fairness. He brings a wealth of practical experience in test construction and analysis, ensuring students gain a comprehensive understanding of the subject matter. His enthusiasm for teaching and passion for psychometrics make his classes engaging and thought-provoking.</p>
  `;

	// @ts-ignore
	newImage.setAttribute("src", "./img/faculties/Michael Johnson.jpg");

	// @ts-ignore
	newText.innerHTML = html;
}

function changeContentItem5() {
	let html = `
    <h3>Prof. Catherine Reed</h3>
  
  <p>Prof. Catherine Reed is a respected scholar in the field of psychometrics, known for her exceptional research contributions and expertise in measurement theory. With a background in quantitative psychology,</p>
  
  <p> Prof. Reed holds a Ph.D. from a prestigious university and has published extensively on psychometric modeling and scaling techniques. Her research interests also include item response theory and differential item functioning. Prof. Reed's teaching approach emphasizes critical thinking and analytical skills, fostering a deep understanding of psychometrics among her students.</p>
  `;
	// @ts-ignore
	newImage.setAttribute("src", "./img/faculties/catherinereeds.jpg");

	// @ts-ignore
	newText.innerHTML = html;
}
