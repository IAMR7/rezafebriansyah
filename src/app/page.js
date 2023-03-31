export default function Home() {
  return (
    <div className="content">
      <div className="hero h-screen">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <p className="text-3xl py-6 font-semibold">
              Hello, my name is Reza Febriansyah 👋
            </p>
            <h1 className="lg:text-7xl text-5xl font-bold lg:leading-snug">
              FRONTEND DEVELOPER <br /> UI UX DESIGNER
            </h1>
            <p className="m-auto w-9/12 py-6 mb-5 text-2xl">
              I&apos;m a Developer and Designer too with specializing building
              web apps exceptional best experience. Currently, i&apos;m focused
              on Frontend & UI UX job in 2 companies.
            </p>
            <div className="flex justify-center items-center gap-x-3">
              <div className="w-auto bg-base-300 rounded-3xl px-2 py-4">
                <a className="text-base-content hover:text-primary">
                  <i className="bx bx-fw bx-md bxl-github"></i>
                </a>
              </div>
              <div className="w-auto bg-base-300 rounded-3xl px-2 py-4">
                <a className="text-base-content hover:text-primary">
                  <i className="bx bx-fw bx-md bxl-instagram"></i>
                </a>
              </div>
              <div className="w-auto bg-base-300 rounded-3xl px-2 py-4">
                <a className="text-base-content hover:text-primary">
                  <i className="bx bx-fw bx-md bxl-medium"></i>
                </a>
              </div>
              <div className="w-auto bg-base-300 rounded-3xl px-2 py-4">
                <a className="text-base-content hover:text-primary">
                  <i className="bx bx-fw bx-md bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
