import { useNavigate }  from "react-router-dom";
const Wallet =()=>{
    const navigateTo = useNavigate()
    const connectWallet = async ()=> {
        try {
            if(window.ethereum){
                const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
                navigateTo("./Home",{state:{address:accounts[0]}})
                // console.log(accounts[0])
            }else{
                alert("please install metamask")
            }
        } catch (error) {
           console.error(error); 
        }
    }
return <><button onClick={connectWallet}>Connect wallet</button></>
}
export default Wallet;