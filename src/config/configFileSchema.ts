import { z } from 'zod'

export const configFileSchema = z.object({
	schemaFile: z.string().optional(),
	surreal: z.string().default('memory'),
	db: z.string().default('test'),
	ns: z.string().default('test'),
	username: z.string().default('root'),
	password: z.string().default('root'),
	outputFolder: z.string().default('client_generated'),
	outputGenFolder: z.string().default('_generated'),
	outputClientFolderName: z.string().default('client'),
	outputSchemaFolderName: z.string().default('schema'),
	generateClient: z.boolean().default(true),
	surrealImage: z.string().default('surrealdb/surrealdb:latest'),
})
