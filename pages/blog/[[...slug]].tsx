import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();
  const { slug } = router.query;

  const path = typeof slug === 'string' ? '/' + slug : Array.isArray(slug) ? '/' + slug.join('/') : '';

  return (
    <div>
      <h1>Bạn đang xem blog với đường dẫn: {path}</h1>
    </div>
  );
}