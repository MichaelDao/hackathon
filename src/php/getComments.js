function get_commnets()
{
	var comments = document.getElementById('comments');


	var xhttp = new XMLHttpRequest();
	// Call ourself with seed set, get the images and append them to the big container
	xhttp.open("GET", "get_comments.php", true);
	xhttp.onreadystatechange = function()
	{
		if (xhttp.readyState == 4 && xhttp.status == 200)
			comments.innerHTML = xhttp.responseText;
	}
	xhttp.send();
}


window.onload = function() { 
	setInterval("get_comments()", 10);
}