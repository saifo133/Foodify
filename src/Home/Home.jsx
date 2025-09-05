import Introduction from "../Introduction/Introduction";
import CustomerSay from "../CustomerSay/CustomerSay";
import Suggest from "../Suggest/Suggest";
import Highlights from "../Highlights/Highlights";
export default function Home()
{
    return(
        <>
    <Introduction/>
    <h1 style={{textAlign:'center' , marginTop:'60px'}}>What Our Users Say</h1>
    <CustomerSay/>
    <Suggest/>
    <Highlights/>
        </>
    );
}