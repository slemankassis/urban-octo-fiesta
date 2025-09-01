// Given an array of user objects, write a function that groups them by 'role'.


// Analyze this code and explain the issue: `for (var i = 0; i < 5; i++) { setTimeout(() => console.log(i), 1000); }`
// use let instead of var
0
0
0
0
0

for (let i = 0; i < 5; i++) { setTimeout(() => console.log(i), 1000); }

// Fetch and display data with loading and error states.
import axios from 'axios';
const Home =()=>{
  const [loading, setLoading]=useState(false)
  const [data, setData]=useState([])
  const [error, setError] = useState('')

  useEffect(()=>{
    (async ()=>{
      setLoading(true)
      try{
        const { datam } = axios('__URL__', {})
        if(data) setData(data) else setError()

      } catch (e){
        console.error('Error: ', e)
        setError(e)

      }
    })()
  },[])

  return
    error ? (<>`Error: ${error}`</>) : <>{data}</>

}

// What's wrong with this? : useEffect(() => fetchData(), []);
useEffect(() => {
  try{
    async fetchData()
  } catch(e){
    throw new Error(e)
  }
}, [])

// Create a custom hook that toggles a boolean value.

const useToggle = ()=>{
  const [on, setOn] =useState(false)

 return (prev=>setOn(!prev))

}

// Write a simple Express.js route to create a new user.
server.on('/user', POST, {
  name, email, job
})

// Write a basic GraphQL query that retrieves a list of users and their posts.
gql.

// Given a products and categories table, write a query to get each product with its category name.
SELECT *, name from categories AS nameCategory FROM products left join categories WHERE products.category EQUALS TO nameCategory

// Write a middleware that logs the method and URL of each incoming request.
server.on('*', ((req, res, err)=>console.log(req.url))())