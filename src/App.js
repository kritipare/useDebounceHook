import { useState } from "react";
import { useDebounce } from "./useDebounce";

export default function App() {
    const saveData = () => {
        console.log("Save....");
    };

    const debouncedSave = useDebounce(saveData, 2000);
    const [search, setSearch] = useState("");

    const handler = (e) => {
        setSearch(e.target.value);
        debouncedSave();
    };

    return (
        <div className='App'>
            <input type='text' value={search} onChange={handler} />
        </div>
    );
}
