import { Client } from '@notionhq/client'

const auth = process.env.NOTION_AUTH!
const database = process.env.NOTION_DATABASE_ID!

export class NotionDatabase {
  private client: Client

  constructor() {
    this.client = new Client({ auth })
  }
  async query() {
    const response = await this.client.databases.query({
      database_id: database,
    })

    return response.results
  }
}
