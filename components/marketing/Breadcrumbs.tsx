import Link from "next/link";

interface Crumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-slate-50 border-b border-slate-100 py-3">
      <div className="mx-auto max-w-4xl px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={item.href}>
                {isLast ? (
                  <span className="text-slate-700 font-medium">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:text-brand-600">
                    {item.name}
                  </Link>
                )}
                {!isLast && <span className="mx-2 text-slate-300">/</span>}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
