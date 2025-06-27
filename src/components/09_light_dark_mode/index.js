import useLocalStorage from "./hooks/useLocalStorage"
import "./theme.css"

export default function Practice(){

    const[theme,setTheme] = useLocalStorage('theme','dark');

    function handleThemeToggle(){
        setTheme(theme==="light"?"dark":"light");
    }

    console.log(theme);

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container" >
            <p>{theme==="light"?"Black lives matter":"White lives matter"}</p>
            <button onClick={handleThemeToggle} >Change Theme</button>
        </div>
    </div>
}