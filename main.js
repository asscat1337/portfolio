window.onscroll=function showheader()
{
	let header = document.querySelector('.header');
	if (window.pageYOffset>600) 
	{
		header.classList.add('header__main__fixed');

	}else
	{
		header.classList.remove('header__main__fixed');
	}

}