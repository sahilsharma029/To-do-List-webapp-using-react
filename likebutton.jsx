import { useState } from 'react';
import './App.css'
function LikeButton()
{
    let [like,setlike] = useState(false);
    function LikeChanges()
    {
        setlike(!like);
    }
    return(
        <div>
            <p onClick={LikeChanges}>
                {
                    like ? (<i class="fa-solid fa-heart"></i>) : (<i class="fa-regular fa-heart"></i>)
                }
            </p>
        </div>
    )
}

export default LikeButton;