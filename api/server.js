const express = require('express');
const {Web3} = require("web3")
const ABI = require("./ABI.json")
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const web3 = new Web3("https://fluent-soft-frost.ethereum-sepolia.discover.quiknode.pro/7f7be73e63232062940361a6dc6f46e8f61b39a6/")
const contractAddress = "0x5b35D947024d069DB3ca6cc9Ade77114D4490397"

const contract = new web3.eth.Contract(ABI,contractAddress);

// console.log(contract);

const fetchNFTs = async(account)=> {
    try{
      const nftBalance = await contract.methods.balanceOf(account).call()
    //   console.log(Number(nftBalance))

      return {userNFTs:Number(nftBalance)}

    }catch(error){
        console.error("error in fatching nft", error)
    }
      
}
// fetchNFTs()
app.post('/members', async(req,res)=>{
    try{
      const account = req.body.from;
      const numNFTs = await fetchNFTs(account)
    //   console.log(numNFTs)
    if(numNFTs.userNFTs>0) {
        res.status(200).json({status:200,numNFTs})
    }else {
        res.status(400).json({status:400,message:"you have 0 nft"})
    }
    }catch(error){
        res.status(500).json({error:'internal server error'})
    }
})

app.post('/webhook',async(req,res)=>{
  console.log("hi there")
})













const PORT = 3000;
 app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
 })