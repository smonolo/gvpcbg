import { AnnouncementBanner } from '@/components/announcements/AnnouncementBanner'
import { getAnnouncements } from '@/sanity/lib/content'

export async function AnnouncementsSlot() {
  const announcements = await getAnnouncements()
  return <AnnouncementBanner announcements={announcements} />
}
