import { toUpperCamelCase } from '../helper/toUpperCamelCase.js'

export const getCreateEntityFileContent = (
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
import type { ${entityCreateTypeName} } from "../../${outputSchemaFolderName}/${entityName}/${entityName}Types.js";

export const create${entityNameFirstUpper} = async function (db: Surreal, ${entityName}: ${entityCreateTypeName}) {
  const payload = ${entitySchemaName}.parse(${entityName});

  const result = await db.create<${entityCreateTypeName}>("${tableName}", payload);
  
  return result[0]
};
`
}
