import React from "react";

const Countercomponent = () => {
    const [count,setCount] = useState(0);

    return (
        <div>
            <p>hahhah</p>


            <button onClick ={() => setCount(count+1)}></button>
            
        </div>
    )
}
export default UserProfile;