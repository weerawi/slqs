 
const Home = () => {
 

  return (
    <div 
     className="flex flex-col items-center justify-center mx-auto ">

      <div className="p-5 rounded-lg shadow-xl bg-gray-400">

        <div className="flex justify-center text-gray-100 font-bold capitalize">
          home
        </div>
        
        <button
          onClick={() => window.location.href = 'http://localhost:3000/'}
              // onClick={() => window.open('http://localhost:5173/', '_blank')}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
              Go to Website
          </button>
      </div>
    </div>
  );
};

export default Home;
