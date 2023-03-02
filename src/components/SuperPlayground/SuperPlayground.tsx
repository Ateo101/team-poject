import SuperButton from "../../super-components/SuperButton/SuperButton";
import SuperCheckbox from "../../super-components/SuperCheckbox/SuperCheckbox";
import SuperDebouncedInput from "../../super-components/SuperDebouncedInput/SuperDebouncedInput";
import SuperEditableSpan from "../../super-components/SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../../super-components/SuperInputText/SuperInputText";
import SuperPagination from "../../super-components/SuperPagination/SuperPagination";
import SuperRadio from "../../super-components/SuperRadio/SuperRadio";
import SuperRange from "../../super-components/SuperRange/SuperRange";
import SuperSelect from "../../super-components/SuperSelect/SuperSelect";
import SuperSort from "../../super-components/SuperSort/SuperSort";

const SuperPlayground = () => {
    return (
        <div>
            <div>Super Component Test Playground</div>
            <SuperButton/>
            <SuperCheckbox/>
            <SuperDebouncedInput/>
            <SuperEditableSpan/>
            <SuperInputText/>
            <SuperPagination page={1} onChange={()=>{}} totalCount={100} itemsCountForPage={10}/>
            <SuperRadio/>
            <SuperRange/>
            <SuperSelect/>
            <SuperSort sort={''} value={''} onChange={()=>{}}/>
        </div>
    )
}

export default SuperPlayground;