 
const Home = () => {
 

  return (
    <div>
      home
      <button
                                onClick={() => window.location.href = 'http://localhost:3000/'}
                                    // onClick={() => window.open('http://localhost:5173/', '_blank')}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Go to Website
                                </button>
    </div>
  );
};

export default Home;
