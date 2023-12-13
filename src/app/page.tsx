import { OtherPost } from "@/components/otherPost/OtherPost";
import { Title } from "@/components/title/Title";

export default async function Home() {
  const CardListPost = () => {
    return (
      <>
        <div
          className="sk-ww-medium-publication-feed w-full"
          data-embed-id="240203"
        ></div>

        <script
          src="https://widgets.sociablekit.com/medium-publication-feed/widget.js"
          async
          defer
        ></script>
      </>
    );
  };

  const bannerPost = () => {
    return (
      <>
        <div
          className="sk-ww-medium-post w-[90%] self-center md:self-start "
          data-embed-id="240819"
        ></div>
        <script
          src="https://widgets.sociablekit.com/medium-post/widget.js"
          async
          defer
        ></script>
      </>
    );
  };

  return (
    <main>
      <Title title="New Posts " className="font-semibold text-2xl pl-3" />
      <section className="flex flex-col md:flex-row px-2  gap-1">
        {bannerPost()}

        <aside className="w-full">
          {CardListPost()}
          <div>
            <Title title="Other Post" className="mt-4 mb-1 font-semibold" />
            <OtherPost title="My favori post" link="/mypost" target="_self" />

            <OtherPost
              title="Rails and Next.js: the perfect combination for modern web development (Part 1)"
              link="https://medium.com/@raphox/rails-and-next-js-the-perfect-combination-for-modern-web-development-part-1-d2daf9f8d71d"
              target="_blank"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
