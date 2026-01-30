import Link from "next/link";
import { getDocsIndex } from "@/lib/docs";

export default async function HomePage() {
  const index = await getDocsIndex();

  return (
    <div className="layout">
      <aside className="sidebar">
        <div style={{ fontWeight: 700 }}>TFW Help</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Docs from <code>docs/</code>
        </div>
        <div className="navSection">
          {index.map((doc) => (
            <Link key={doc.href} className="navItem" href={doc.href}>
              {doc.title}
            </Link>
          ))}
        </div>
      </aside>
      <main className="content">
        <h1>TFW Boilerplate</h1>
        <p className="muted">
          Отвори документ отляво или директно URL към <code>/doc/...</code>.
        </p>
        <ul>
          {index.map((doc) => (
            <li key={doc.href}>
              <Link href={doc.href}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

