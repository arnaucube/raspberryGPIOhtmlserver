exports.isit= function(listPinsON, nPin){
	for(var i=0; i<listPinsON.length; i++)
	{
		if(listPinsON[i]==nPin)
		{
			return(true);
		}
	}
	return(false);
}
