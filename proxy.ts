import { notFound } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
	notFound()
}
