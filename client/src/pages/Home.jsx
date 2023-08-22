import {useNavigate, useLocation } from "react-router-dom";

const Home =()=>{
       const location = useLocation();
    const navigateTo = useNavigate();
    const revealMsg= async() =>{
        try {
            const account = location.state.address;
            const res = await fetch('http://localhost:3000/members',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({from:account})
            })
            const data = await res.json();
            if(data.status ===200){
                navigateTo("/members")
            }else{
                window.alert("You do not have any nft from 0x5b35D947024d069DB3ca6cc9Ade77114D4490397 contract address")
            }
            console.log(data)
            // console.log(account)
        } catch (error) {
            console.log(error)
        }
    }
    return <>
    <span className="beautiful-sentence">i have a secret message for my nft holders</span>
    <br></br>
    <br></br>
    <button onClick={revealMsg}>Reveal message</button>
    </>
}
export default Home;