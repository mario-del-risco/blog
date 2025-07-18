import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mario
      </h1>
      <p className="mb-4">
        {`I'm a generalist. Embracing anything from photography to jiujitsu. Here you will find the things I like to share. I hope they can help you in your own journey`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
