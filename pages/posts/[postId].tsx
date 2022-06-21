import { useRouter } from 'next/router';
import * as React from 'react';


// Priority routes
// 1 - Pre-defined routes : pages/posts/create.tsx
// 2 - Dynamic routes : pages/posts/[postId].tsx
// 2 - Catch all routes : pages/posts/[...slug].tsx

export interface PostDetailPageProps {
}

export default function PostDetailPage (props: PostDetailPageProps) {
    const router = useRouter()
  return (
    <div>
      PostDetail Page

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
