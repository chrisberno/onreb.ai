export default function Home() {
  const products = [
    {
      name: "boardroom.bot",
      description: "AI governance and deliberation engine",
      href: "https://boardroom.bot",
    },
    {
      name: "PeoplePerson",
      description: "Multi-tenant SaaS CRM",
      href: "https://peopleperson.cc",
    },
    {
      name: "HeadVRoom",
      description: "Knowledge graph platform",
      href: "https://headvroom.com",
    },
    {
      name: "BeaverDam",
      description: "Content management layer",
      href: "https://beaverdam.cc",
    },
    {
      name: "deepspok",
      description: "Persistent memory and reasoning layer",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-32 px-8 sm:px-16 bg-white dark:bg-black">
        <div className="flex flex-col gap-2 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            ONREB
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            AI-native holding company
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-16 max-w-lg">
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            We build and operate a portfolio of agent-powered products — each
            with its own market, customers, and revenue, unified by a shared
            executive layer and common operating platform.
          </p>
        </div>

        <div className="w-full mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
            Portfolio
          </h2>
          <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className="flex items-baseline justify-between py-4 group transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 -mx-4 px-4 rounded"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-base font-medium text-black dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                    {product.name}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {product.description}
                  </span>
                </div>
                <span className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 transition-colors">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>

        <footer className="text-sm text-zinc-400 dark:text-zinc-600">
          <a href="mailto:chris@onreb.ai" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
            chris@onreb.ai
          </a>
        </footer>
      </main>
    </div>
  );
}
