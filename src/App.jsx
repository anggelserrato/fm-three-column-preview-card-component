import luxuryIcon from './images/icon-luxury.svg';
import sedansIcon from './images/icon-sedans.svg';
import suvsIcon from './images/icon-suvs.svg';

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="mx-card-300 my-card-1000 flex w-[90%] max-w-[608px] flex-col text-white xl:grid xl:max-w-[921px] xl:grid-cols-3">
        <article className="rounded-t-lg bg-gold-500 p-card-600 md:px-card-1000 xl:rounded-t-none xl:rounded-l-lg xl:px-card-600">
          <div className="flex flex-col gap-card-400 xl:gap-card-500">
            <img src={sedansIcon} alt="Sedans icon" className="w-16" />
            <div className="flex flex-col gap-card-300">
              <h2 className="text-preset-1">Sedans</h2>
              <p className="text-preset-2 opacity-[0.75] xl:mb-card-1000">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
              <button
                type="button"
                className="w-fit cursor-pointer rounded-3xl border-2 border-transparent bg-white px-card-400 py-card-100 text-preset-2 text-gold-500 transition-all duration-200 hover:border-white hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </article>

        <article className="bg-cyan-800 p-card-600 md:px-card-1000 xl:px-card-600">
          <div className="flex flex-col gap-card-400 xl:gap-card-500">
            <img src={suvsIcon} alt="Suvs icon" className="w-16" />
            <div className="flex flex-col gap-card-300">
              <h2 className="text-preset-1">SUVs</h2>
              <p className="text-preset-2 opacity-[0.75] xl:mb-card-1000">
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
              <button
                type="button"
                className="w-fit cursor-pointer rounded-3xl border-2 border-transparent bg-white px-card-400 py-card-100 text-preset-2 text-cyan-800 transition-all duration-200 hover:border-white hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </article>

        <article className="rounded-b-lg bg-green-950 p-card-600 md:px-card-1000 xl:rounded-tr-lg xl:rounded-b-none xl:rounded-br-lg xl:px-card-600">
          <div className="flex flex-col gap-card-400 xl:gap-card-500">
            <img src={luxuryIcon} alt="Luxury icon" className="w-16" />
            <div className="flex flex-col gap-card-300">
              <h2 className="text-preset-1">Luxury</h2>
              <p className="text-preset-2 opacity-[0.75] xl:mb-card-1000">
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>
              <button
                type="button"
                className="w-fit cursor-pointer rounded-3xl border-2 border-transparent bg-white px-card-400 py-card-100 text-preset-2 text-green-950 transition-all duration-200 hover:border-white hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
