import { Header3 } from "./styles/typo";
import { SpecialBadge } from "./";
import { Tag } from "./styles/";

export default function CardExtended({ title, tags, snippet, special, image, slug }) {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl relative ">
      <figure className="md:w-1/4 max-md:max-h-52">
        <img src={image} alt="Movie" className="w-full" />
      </figure>
      <div className="card-body">
        {special && <SpecialBadge>{special}</SpecialBadge>}
        <a href={`/posts/${slug}`} className="link link-hover">
          <Header3 extraClasses="card-title">{title}</Header3>
        </a>
        <p>{snippet}</p>
        <div className="mt-3 flex gap-2">
          {tags.map((tag) => (
            <Tag tag={tag.title} color={tag.color} />
          ))}
        </div>
      </div>
    </div>
  );
}
