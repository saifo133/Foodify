import './CustomerSay.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import userOne from './User_One.jpeg';
import userTwo from './User_Two.jpeg';
import userThree from './User_Three.jpeg';
import userFour from './UserFour.jpg';
import userFive from './UserFive.jpg';
import userSix from './UserSix.jpg';
import CustomerSayBackground from './CustomerSayBackground.jpg';

export default function CustomerSay() {

  const comments = [
    {
      text: "Foodify completely changed the way I cook. The recipes are easy to follow and always delicious. It's my go-to site for meal planning!",
      name: "Layla Hassan",
      img: userOne
    },
    {
      text: "I love how Foodify makes cooking so fun! The variety of recipes keeps my family excited for every meal.",
      name: "Omar Khalid",
      img: userTwo
    },
    {
      text: "I love how Foodify makes cooking so fun! The variety of recipes keeps my family excited for every meal.",
      name: "Omar Khalid",
      img: userThree
    },
    {
      text: "I love how Foodify makes cooking so fun! The variety of recipes keeps my family excited for every meal.",
      name: "Omar Khalid",
      img: userFour
    },
    {
      text: "I love how Foodify makes cooking so fun! The variety of recipes keeps my family excited for every meal.",
      name: "Omar Khalid",
      img: userFive
    },
    {
      text: "Foodify's recipes are easy to follow and always turn out amazing. Highly recommended!",
      name: "Sara Ahmed",
      img: userSix
    }
  ];

  return (
    <div className="customer-say" style={{backgroundImage: `url(${CustomerSayBackground})`}}>

      <div className='customer-say-title'>
        <h1>You Can Know About Us From Our Customer</h1>
        <p>
          Our customers are at the heart of everything we do. Their honest feedback, heartfelt stories, 
          and genuine experiences showcase the true value and dedication behind our services.
        </p>
      </div>

      <div className='customer-say-comments'>
        {comments.map((comment, index) => (
          <div className='customer-say-comment' key={index}>
            <FormatQuoteIcon className='quote-icon'/>
            <p>"{comment.text}"</p>
            <div className='User'>
              <img className='user-img' src={comment.img} alt={comment.name} />
              <h5>{comment.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
