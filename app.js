//selecting the form by id
var form = document.getElementById('searchRecipe');
//add event listener for the button click
form.addEventListener('submit', function(e) {
//prevent reset
	e.preventDefault();
//establish URL formula
		var apiKey = "8o1XFas85tGOxv6Bf6hO8cj5aYTbOZwC";
    var titleKeyword = document.getElementById('one');
		var itemContent = titleKeyword.value;
			// console.log(itemContent);
    var url = "http://api2.bigoven.com/recipes?pg=1&rpp=200&any_kw=" + itemContent + "&api_key=" + apiKey;
//fetch the API and return json
fetch(url)
.then(function(response) {
    return response.json()
    .then(function(allRecipeData) {
		var recipeArray = allRecipeData.Results;
		//define a variable to DOM element
		var rand1 = ((Math.random() * 10) + 3);
		var rand2 = (Math.random() * 10) + 1;
		var i = Math.floor(rand1 * rand2);
			var title0 = recipeArray[i].Title;
		//define a variable for doc element
				var content = document.getElementById('title0');
		//append the DOM element to doc
					content.innerHTML = '';
					content.append(title0);
		//define a variable for DOM image
			var img0 = recipeArray[i].PhotoUrl;
		//define a variable for image src
				var imgHtml = document.getElementById('img0');
		//attach the url to src
					imgHtml.setAttribute('src', img0);
		//do it nine more times
			var title1 = recipeArray[1 + i].Title;
				var content = document.getElementById('title1');
					content.innerHTML = '';
					content.append(title1);
			var img1 = recipeArray[1 + i].PhotoUrl
				var imgHtml = document.getElementById('img1');
					imgHtml.setAttribute('src', img1);
			var title2 = recipeArray[2 + i].Title;
				var content = document.getElementById('title2');
					content.innerHTML = '';
					content.append(title2);
			var img2 = recipeArray[2 + i].PhotoUrl
				var imgHtml = document.getElementById('img2');
					imgHtml.setAttribute('src', img2);
			var title3 = recipeArray[3 * i].Title;
				var content = document.getElementById('title3');
					content.innerHTML = '';
					content.append(title3);
			var img3 = recipeArray[3 * i].PhotoUrl
				var imgHtml = document.getElementById('img3');
					imgHtml.setAttribute('src', img3);
			var title4 = recipeArray[4 + i].Title;
				var content = document.getElementById('title4');
					content.innerHTML = '';
					content.append(title4);
			var img4 = recipeArray[4 + i].PhotoUrl
				var imgHtml = document.getElementById('img4');
					imgHtml.setAttribute('src', img4);
			var title5 = recipeArray[5 + i].Title;
				var content = document.getElementById('title5');
					content.innerHTML = '';
					content.append(title5);
			var img5 = recipeArray[5 + i].PhotoUrl
				var imgHtml = document.getElementById('img5');
					imgHtml.setAttribute('src', img5);
			var title6 = recipeArray[6 + i].Title;
				var content = document.getElementById('title6');
					content.innerHTML = '';
					content.append(title6);
			var img6 = recipeArray[6 + i].PhotoUrl
				var imgHtml = document.getElementById('img6');
					imgHtml.setAttribute('src', img6);
			var title7 = recipeArray[7 + i].Title;
				var content = document.getElementById('title7');
					content.innerHTML = '';
					content.append(title7);
			var img7 = recipeArray[7 + i].PhotoUrl
				var imgHtml = document.getElementById('img7');
					imgHtml.setAttribute('src', img7);
			var title8 = recipeArray[8 + i].Title;
				var content = document.getElementById('title8');
					content.innerHTML = '';
					content.append(title8);
			var img8 = recipeArray[8 + i].PhotoUrl
				var imgHtml = document.getElementById('img8');
					imgHtml.setAttribute('src', img8);
			var title9 = recipeArray[9 + i].Title;
				var content = document.getElementById('title9');
					content.innerHTML = '';
					content.append(title9);
			var img9 = recipeArray[9 + i].PhotoUrl
				var imgHtml = document.getElementById('img9');
					imgHtml.setAttribute('src', img9);
	var nav = document.getElementsByClassName('clickSelect');
	console.log(nav);

})
})
})
