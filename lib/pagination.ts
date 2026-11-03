export const PHOTO_PAGE_SIZE = 9
export const ARTICLE_PAGE_SIZE = 9

export type PaginationState = {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
  startIndex: number
  endIndex: number
}

export function parsePageParam(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value
  const parsed = Number.parseInt(raw ?? '1', 10)
  if (!Number.isFinite(parsed) || parsed < 1) return 1
  return parsed
}

export function getPaginationState(
  totalItems: number,
  requestedPage: number,
  pageSize: number
): PaginationState {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const page = Math.min(Math.max(1, requestedPage), totalPages)
  const startIndex = totalItems === 0 ? 0 : (page - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, totalItems)

  return {
    page,
    pageSize,
    totalItems,
    totalPages,
    startIndex,
    endIndex,
  }
}

export function paginateItems<T>(
  items: readonly T[],
  requestedPage: number,
  pageSize: number
) {
  const state = getPaginationState(items.length, requestedPage, pageSize)
  return {
    ...state,
    items: items.slice(state.startIndex, state.endIndex),
  }
}

export function buildPageHref(
  pathname: string,
  page: number,
  query: Record<string, string | undefined> = {}
) {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(query)) {
    if (value) params.set(key, value)
  }

  if (page > 1) params.set('pagina', String(page))

  const qs = params.toString()
  return qs ? `${pathname}?${qs}` : pathname
}

export function visiblePageNumbers(current: number, total: number) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1)
  }

  const pages = new Set([1, total, current, current - 1, current + 1])
  if (current <= 3) {
    pages.add(2)
    pages.add(3)
    pages.add(4)
  }
  if (current >= total - 2) {
    pages.add(total - 1)
    pages.add(total - 2)
    pages.add(total - 3)
  }

  return [...pages]
    .filter(page => page >= 1 && page <= total)
    .sort((a, b) => a - b)
}
