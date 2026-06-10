import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nearmeservice.org'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ac-repair-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ac-maintenance-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ac-installation-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fridge-repair-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/washing-machine-repair-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dishwasher-repair-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dryer-repair-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/oven-repair-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cooking-range-repair-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/home-appliance-repair-dubai`,
      lastModified: new Date(),
    },
  ]
}
