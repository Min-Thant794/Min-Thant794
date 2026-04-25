const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-5 pt-28 sm:px-6 md:pt-32 lg:px-8">
      <p className="mb-3 font-headline text-sm uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="font-headline text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-on-surface-variant">
        The page you are looking for is not available.
      </p>
    </div>
  )
}

export default NotFound
