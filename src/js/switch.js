import refs from "./refs"
const{input,bodyTheme}=refs
const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
 };
  
 themeLocalStorage (inputChange)

  input.addEventListener('change',inputChange);
  function inputChange(evt){
	const checkedInput = evt.target.checked
	console.log(checkedInput);
	  if (checkedInput) {
		  bodyTheme.classList = Theme.DARK
		}else
		bodyTheme.classList =Theme.LIGHT
		localStorage.setItem('theme', bodyTheme.classList)
		
  }
  function themeLocalStorage (evt){
	  const saveTheme = localStorage.getItem('theme')
	  console.log(saveTheme);
	  if (saveTheme === Theme.DARK ) {
		 input.checked = true
		 bodyTheme.classList = saveTheme
	  }else
	  input.checked = false
	  
  }



