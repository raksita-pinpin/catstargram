export async function getServerSideProps() {
    const res = await fetch('https://catstagram.amornnan.xyz/api/public/posts/recent');
    const data = await res.json();
  
    return {
      props: {
        posts: data,
      },
    };
  }
  