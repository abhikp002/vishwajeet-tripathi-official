import { NextResponse } from 'next/server';
import { ASSETS_NEWS_DATA, NewsClippingItem } from '@/app/data/newsData';

export const dynamic = 'auto';

export type NewsItem = NewsClippingItem;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q');

  let items = [...ASSETS_NEWS_DATA];

  if (category && category !== 'All') {
    items = items.filter(
      (item) =>
        item.category.toLowerCase() === category.toLowerCase() ||
        item.categoryKey.toLowerCase() === category.toLowerCase()
    );
  }

  if (query) {
    const q = query.toLowerCase();
    items = items.filter(
      (item) =>
        item.cleanTitle.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.snippetEn.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    success: true,
    total: items.length,
    items,
  });
}
