import style from './Blog.module.scss';
import { Link, Portfolio, Nav, Center, Footer } from '~/components';

function sort(from: string[], data: any) {
  const s: string[] = [];
  from
    .sort((a, b) => {
      return new Date(data[a].timestamp).getTime() - new Date(data[b].timestamp).getTime();
    })
    .forEach((path) => s.unshift(path));
  return s;
}

export function Blog({ pages, data }: { pages: string[]; data: any }) {
  return (
    <Portfolio>
      <Nav />
      <Center>
        <div className={style.section}>
          <h2>Blog</h2>
          <div className={style.content}>
            {sort(pages, data).map((page) => (
              <Link key={page} href={page} className={style.Card}>
                <img src={data[page]?.preview} alt="Preview image" />
                <p>{data[page]?.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </Center>
      <Footer />
    </Portfolio>
  );
}
