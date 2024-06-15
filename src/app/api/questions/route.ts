import { NotionDatabase } from '@/lib/notion'
import { Result } from '@/utils/result'
import { NextRequest } from 'next/server'

const notionService = new NotionDatabase()

export async function POST(request: NextRequest) {
  try {
    const data = await notionService.query()
    return Result.success(data)
  } catch (error: any) {
    console.error('Error:', error)
    return Result.error(`错误: ${error.message}`)
  }
}
