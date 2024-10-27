import { toUpperCamelCase } from '../helper/toUpperCamelCase.js'

export const getAllEntityFileContent = (
	lib: string,
	entityName: string,
	tableName: string,
	outputSchemaFolderName: string,
) => {
	const entityNameFirstUpper = `${toUpperCamelCase(entityName)}`
	const entityTypeName = `${toUpperCamelCase(entityName)}`

	return `
import type { Surreal } from "${lib}";

import type { ${entityTypeName} } from "../../${outputSchemaFolderName}/${entityName}/${entityName}Types.js";

export const getAll${entityNameFirstUpper}s = async function (db: Surreal) {
  return db.select<${entityTypeName}>("${tableName}")
};
`
}
