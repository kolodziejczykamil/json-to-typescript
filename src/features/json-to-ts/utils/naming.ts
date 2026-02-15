export function toPascalCase(input: string): string {
  if (!input || input.trim().length === 0) {
    return 'Item'
  }

  return (
    input
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('') || 'Item'
  )
}

export function generateInterfaceName(key: string, parentName?: string): string {
  const baseName = toPascalCase(key)
  if (parentName) {
    return `${parentName}${baseName}`
  }
  return baseName
}
