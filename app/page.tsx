import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <p className="mb-4">I&apos;'m a technology and outdoors enthusiast who is passionate about fishing, artwork and sharing knowledge with others.</p>
        <p>I have a few projects that are really important to me:</p>
        <ul className="mb-4">
          <li className="mt-2 ml-8">robotdrawsyou - Pen plotter artwork</li>
          <li className="mt-2 ml-8">verticaltubejig - Handmade lures for targeting Lake Trout in Champlain</li>
          <li className="mt-2 ml-8">VT2U - Videos about adventures in and around Vermont</li>
       </ul>      
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
