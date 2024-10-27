import { toUpperCamelCase } from '../helper/toUpperCamelCase.js'

export const getCreateManyEntityFileContent = (
	lib: string,
	entityName: string,
	outputSchemaFolderName: string,
	tableName: string,
) => {
	const entitySchemaName = `${entityName}CreateSchema`
	const entityNameFirstUpper = `${toUpperCamelCase(entityName)}`
	const entityCreateTypeName = `${toUpperCamelCase(entityName)}Create`

	return `
import type { Surreal } from "${lib}";

import { ${entitySchemaName} } from "../../${outputSchemaFolderName}/${entityName}/${entityName}Schema.js";
import type {  ${entityCreateTypeName} } from "../../${outputSchemaFolderName}/${entityName}/${entityName}Types.js";

export const createMany${entityNameFirstUpper} = async function (db: Surreal, ${entityName}: ${entityCreateTypeName}[]) {
  const payload = ${entityName}.map(entry=>${entitySchemaName}.parse(entry));

  const result = await db.insert<${entityCreateTypeName}>("${tableName}", payload);
  
  return result
};
`
}
