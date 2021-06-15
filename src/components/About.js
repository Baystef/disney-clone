import CaptainMarvelBG from '../assets/captain-marvel-bg.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${CaptainMarvelBG})` }}>
      <div className="pt-32 pl-8 mb-2" style={{ width: '40rem' }}>
        <img src="../assets/captain-marvel-logo.png" alt="logo" className="w-full" />
      </div>

      <div className="pl-16 mb-4">
        <button className="px-6 py-2 bg-white text-black font-bold uppercase rounded flex items-center hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
          <span className="pl-1">Play</span>
        </button>
      </div>

      <div className="pl-16 text-gray-500 mb-8">
        PG-13 &middot; 2019 &middot; 2h 4m &middot; Action, Adventure, Science Fiction
      </div>

      <div className="w-96 xl:w-1/3 pl-16 leading-loose">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugit tenetur velit quasi soluta sunt suscipit, eveniet dolorum. Tenetur architecto voluptatum quis, vitae autem, vero tempora libero impedit culpa debitis, quisquam nam nemo quidem modi sunt illo consequuntur maiores magni.
      </div>
    </div>
  )
}

export default About
