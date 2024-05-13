import Image from "next/image";

export default function HomePage() {
  return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">src/app/page.tsx</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
              <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                By{" "}
                <svg fill="#000000" version="1.1"
                     width="200px" height="200px" viewBox="0 0 487.811 487.81">
<g>
	<g id="_x33_6_24_">
		<g>
			<path d="M150.463,109.521h150.512c3.955,0,7.16-3.206,7.16-7.161c0-3.955-3.205-7.161-7.16-7.161H150.463
				c-3.955,0-7.161,3.206-7.161,7.161C143.302,106.315,146.508,109.521,150.463,109.521z"/>
          <path d="M15.853,179.537h150.511c3.955,0,7.161-3.206,7.161-7.161s-3.206-7.16-7.161-7.16H15.853
				c-3.955,0-7.161,3.205-7.161,7.16S11.898,179.537,15.853,179.537z"/>
          <path d="M56.258,253.214c0,3.955,3.206,7.162,7.161,7.162H213.93c3.955,0,7.161-3.207,7.161-7.162s-3.206-7.16-7.161-7.16H63.419
				C59.464,246.054,56.258,249.259,56.258,253.214z"/>
          <path d="M142.396,336.44H7.161C3.206,336.44,0,339.645,0,343.6s3.206,7.161,7.161,7.161h135.235c3.955,0,7.161-3.206,7.161-7.161
				S146.351,336.44,142.396,336.44z"/>
          <path d="M385.729,154.418c21.6,0,39.111-17.513,39.111-39.114s-17.512-39.113-39.111-39.113
				c-21.605,0-39.119,17.513-39.119,39.113C346.609,136.905,364.123,154.418,385.729,154.418z"/>
          <path d="M450.066,143.155c-22.459,31.459-52.533,35.102-84.895,15.89c-2.203-1.306-11.977-6.691-14.141-7.977
				c-52.061-30.906-104.061-18.786-138.934,30.05c-14.819,20.771,19.455,40.459,34.108,19.93
				c18.018-25.232,40.929-32.533,65.986-24.541c-12.83,22.27-24.047,44.405-39.875,75.853
				c-15.832,31.448-50.787,56.562-84.374,36.92c-24.235-14.165-46.09,20.651-21.928,34.772
				c45.854,26.799,99.619,10.343,127.066-24.493c0.952,0.509,1.958,0.968,3.062,1.354c22.422,7.812,51.814,28.61,60.77,35.981
				c8.953,7.371,24.336,44.921,33.471,63.788c11.082,22.893,46.871,6.219,35.748-16.771c-10.355-21.406-27.736-64.129-41.293-74.938
				c-10.875-8.669-31.988-24.803-49.895-33.956c12.115-23.466,24.729-46.679,38.008-69.491
				c42.328,12.969,82.561-2.308,111.215-42.446C498.996,142.312,464.73,122.624,450.066,143.155z"/>
		</g>
	</g>
</g>
</svg>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                />
              </a>
            </div>
          </div>

          <div
              className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Learn{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>
            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Deploy{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>
        </main>
  )
}