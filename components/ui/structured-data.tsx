export function StructuredData({ data }: { data: Record<string, unknown>; type?: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}











