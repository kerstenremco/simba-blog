
import { Header3 } from "./styles/typo";
import SpecialBadge from "./SpecialBadge"

  export default function Heading2(props) {
    return (
    <div className="card card-side bg-base-100 shadow-xl relative ">
    <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" className="hidden xl:block"/></figure>
    <div className="card-body">
        <SpecialBadge>Category</SpecialBadge>
        <a className="link link-hover"><Header3 extraClasses="card-title">Crafting Engaging CSS Animations step by step guide</Header3></a>
      <p>In the realm of technology blogging, captivating your audience goes beyond just the written word. Incorporating eye-catching CSS animations can elevate your content and provide a dynamic...</p>
      <div className="mt-3">
        <div className="badge badge-outline">default</div>
        <div className="badge badge-primary badge-outline">primary</div>
        <div className="badge badge-secondary badge-outline">secondary</div>
        <div className="badge badge-accent badge-outline">accent</div>
      </div>
    </div>
  </div>
    )
  }