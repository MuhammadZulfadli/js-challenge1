	for(var tahun = 1996; tahun <= 2020; tahun++){
		if( (0 == tahun % 4) && (0 != tahun % 100) || (0 == tahun % 400) ){
			console.log( ` ${tahun} Kabisat` );  
        } 
	}
	