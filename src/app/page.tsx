import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getData } from '@/lib/functions/data';

export default async function Home() {
  const data = await getData();

  // I wanted to maintain this functionality in server components as far as possible, so avoided using media query hooks etc.
  const getMainImagePath = (breakpoint: string, path: string) => {
    switch (breakpoint) {
      case 'desktop':
        return path.replace('main-image', 'main-image-desktop');
      case 'mobile':
        return path.replace('main-image', 'main-image-mobile');

      default:
        return path.replace('main-image', 'main-image-desktop');
    }
  };

  return (
    <main className="pt-12">
      <div className="grid w-full grid-cols-1 grid-rows-2 gap-y-16 lg:grid-cols-3 lg:gap-0">
        {/* Main Article */}
        <section
          id="main-article"
          className="col-span-2 row-span-2 flex flex-col lg:mr-8"
        >
          {/* One of these two image components will always be hidden, depending on the breakpoint */}
          <Image
            src={getMainImagePath('desktop', data.mainArticle.imageUrl)}
            alt="Main article image"
            width={1460}
            height={600}
            className="hidden w-full md:flex"
            priority
          />
          <Image
            src={getMainImagePath('mobile', data.mainArticle.imageUrl)}
            alt="Main article image"
            width={668}
            height={600}
            className="w-full md:hidden"
            priority
          />
          <div
            id="Main article content"
            className="flex w-full flex-col pt-8 xl:flex-row"
          >
            <h1 className="w-full pb-6 text-6xl font-bold lg:pb-3 xl:w-1/2 xl:pr-12">
              {data.mainArticle.title}
            </h1>
            <div className="flex w-full flex-col justify-between xl:w-1/2 xl:pl-5">
              <p className="pb-6 text-base leading-[1.6rem] tracking-wide text-neutral-dark-grayish-blue xl:pb-0">
                {data.mainArticle.description}
              </p>
              <Link href={data.mainArticle.ctaButton.url}>
                {/* Not sure about the border on this button, from the design it seemed like there might be one so I included it */}
                <button className="border border-primary-soft-orange bg-primary-soft-red px-8 py-3 text-base font-bold leading-normal tracking-[0.2em] duration-200 hover:border-neutral-very-dark-blue hover:bg-neutral-very-dark-blue hover:text-neutral-off-white">
                  {data.mainArticle.ctaButton.name}
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Side Bar */}
        <section
          id="sidebar"
          className="col-span-1 row-span-2 h-full w-full bg-neutral-very-dark-blue px-6 py-8"
        >
          <div className="flex h-full flex-col">
            <h2 className="text-4xl font-bold text-primary-soft-orange">
              {data.sidebar.title}
            </h2>

            <ul className="mt-8 flex h-full flex-col justify-between">
              {data.sidebar.articles.map((article, index) => (
                <Fragment key={article.title}>
                  <li className="flex flex-col">
                    <Link href={article.url} className="group flex flex-col">
                      <span className="text-lg font-bold text-white duration-75 group-hover:text-primary-soft-orange">
                        {article.title}
                      </span>
                      <span className="mt-2 text-base text-neutral-grayish-blue">
                        {article.description}
                      </span>
                    </Link>
                  </li>
                  {index !== data.sidebar.articles.length - 1 && (
                    <div className="my-6 h-[1px] w-full bg-neutral-grayish-blue" />
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </section>
      </div>
      {/* Articles */}
      <section
        id="articles"
        className="grid gap-8 pt-16 xl:grid-cols-3 xl:gap-0"
      >
        {data.articles.map((article, index) => (
          <div key={article.title} className="flex lg:mr-4">
            <Image
              src={article.imageUrl}
              alt={`${article.title} image`}
              width={200}
              height={254}
              className="h-32 w-auto"
            />
            <div className="flex flex-col pl-4 md:pl-6">
              <h2 className="text-3xl font-bold text-primary-soft-red">
                {`${index + 1}`.padStart(2, '0')}
              </h2>
              {/* I presume there should be url for these links? */}
              <Link href="/" className="hover:text-primary-soft-red">
                <h3 className="mt-2 text-lg font-bold">{article.title}</h3>
              </Link>
              <p className="mt-2 text-base text-neutral-dark-grayish-blue">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
