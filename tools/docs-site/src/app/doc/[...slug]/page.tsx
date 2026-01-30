import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocsIndex, getDocBySlug } from "@/lib/docs";
import { Markdown } from "@/components/markdown";

export default async function DocPage(props: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await props.params;
  const doc = await getDocBySlug(slug);
  if (!doc) return notFound();

  const index = await getDocsIndex();

  return (
    <div className="layout">
      <aside className="sidebar">
        <div style={{ fontWeight: 700 }}>
          <Link href="/">TFW Help</Link>
        </div>
        <div className="navSection">
          {index.map((item) => (
            <Link key={item.href} className="navItem" href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>
      </aside>
      <main className="content">
        <h1 style={{ marginTop: 0 }}>{doc.title}</h1>
        <Markdown markdown={doc.markdown} />
      </main>
    </div>
  );
}

