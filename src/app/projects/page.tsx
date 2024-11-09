import ShowProjects from './showprojects';

function PortFolio() {
  return (
    <section
      className="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <h1 className="ml-3 text-4xl font-sans mb-2 pb-8 font-bold hover:text-blue-950 text-cyan-600  hover:uppercase">
              <span className="text-cyan-600 text-5xl hover:text-blue-900">P</span>rojects
            </h1>
      {/* Render the client-side project listing logic */}
      <ShowProjects />
    </section>
  );
}

export default PortFolio;