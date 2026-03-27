import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Extract token from query parameter
  const token = req.nextUrl.searchParams.get('token');
  const secret = process.env.REVALIDATE_SECRET;

  // Verify token
  if (!token || !secret || token !== secret) {
    return NextResponse.json(
      { error: 'Unauthorized: invalid or missing token' },
      { status: 401 }
    );
  }

  try {
    revalidatePath('/tin-tuc', 'page');
    revalidatePath('/tin-tuc/[slug]', 'page');
    revalidatePath('/sitemap.xml');

    return NextResponse.json(
      {
        success: true,
        message: 'Articles cache revalidated successfully',
        revalidatedAt: new Date().toISOString(),
        paths: ['/tin-tuc', '/tin-tuc/[slug]', '/sitemap.xml'],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Revalidation failed', message: String(error) },
      { status: 500 }
    );
  }
}
