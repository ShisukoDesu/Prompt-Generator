var quotes = 
[
	"\"Our children would rather keep their noses stuck in books than go out and experience the world and meet other people.  They discourage interpersonal communication and will herald the end of social interactions as we know them.\"",
	"Japan takes its revenge.",
	"The sun has turned purple and no one knows why.",
	"Wars are settled no longer with military warfare but through the countries' performances in the International Mathematics Olympiad.",
	"\"I didn't break her heart.  I stole it and will never give it back.\"",
	"All the water in the world spontaneously begins boiling.",
	"Rats have gained sentience and sapience but remain small and lacking opposable thumbs.",
	"Your childhood heroes are drunk and cussing each other out in a bar fight.",
	"\"Velvet is the new black.\"",
	"Information burns.",
	"Tennis is my new favorite sport.",
	"\"I know this sounds like a cliche Wattpad story, but I promise you it\'s not.\"",
	"One Direction visits your house.",
	"People become as heavy as their hearts.",
	"You picked a fight with a deity.",
	"Your superpower is the ability to give anyone within a 10-ft. radius spontaneous Cardiac Arrest.",
	"People are melting.",
	"Stop.",
	"The wind is cool today."
]
function getCookie(sVal)
{
	
	var searchVal = sVal + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var cookieArray = decodedCookie.split(';');
	
	for(var i = 0; i < cookieArray.length; i++)
	{
		var c = cookieArray[i];
		while(c.charAt(0) == ' ') //trim leading whitespaces
		{
			c = c.substring(1); 
		}
		if( c.indexOf(searchVal) == 0)
		{
			return c.substring(searchVal.length, c.length);
		}
	}
	return "";
}
function setCookie(pval)
{
	var d = new Date();
	d.setTime( d.getTime() + 36*60*60*1000 ); //expires after 36 hours
	var expires = "expires="+d.toUTCString();
	document.cookie = "promptNumber=" + pval + ";" + expires + ";path=/";
}
function deleteCookie()
{
	document.cookie = "promptNumber=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}
function generate() 
{
	var promptNumber = getCookie("promptNumber");
	if(promptNumber=="")
	{
		var rand = Math.floor(Math.random()*quotes.length);
		document.getElementById("demo").innerHTML = quotes[rand];
		setCookie(rand);
	}
	else
	{
		document.getElementById("demo").innerHTML = quotes[parseInt(promptNumber)];
	}
}