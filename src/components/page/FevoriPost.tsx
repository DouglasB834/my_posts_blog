import { Title } from "../title/Title";

export const MyFevoriPost = () => {
  return (
    <article aria-label="post sobre falar com o seu eu do futuro e toda as vantagens que pode ter com isso ">
      <Title title="MY first Post" className="font-semibold" />
      <div className="sk-ww-medium-post" data-embed-id="241300"></div>
      <script
        src="https://widgets.sociablekit.com/medium-post/widget.js"
        async
        defer
      ></script>
    </article>
  );
};
