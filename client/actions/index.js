/*
 * action types
 */

export const EDIT_VENUE = 'EDIT_VENUE'

/*
 * action creators
 */

export function editVenue(index) {
  return { type: EDIT_VENUE, index }
}