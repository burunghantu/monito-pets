export default defineEventHandler(() => {
  const menus = [
    {
      title: "Work",
      slug: '/work',
      children: [
        {
          title: "Industries",
          slug: '/industries',
          children: [
            {
              title: "Automotive",
              slug: '/automotive',
              children: []
            },
            {
              title: "Consumer Goods",
              slug: '/consumer-goods',
              children: []
            }
          ]
        },
        {
          title: "Industries",
          slug: '/industries',
          children: [
            {
              title: "Automotive",
              slug: '/automotive',
              children: []
            },
            {
              title: "Consumer Goods",
              slug: '/consumer-goods',
              children: []
            }
          ]
        },
        {
          title: "Industries",
          slug: '/industries',
          children: [
            {
              title: "Automotive",
              slug: '/automotive',
              children: []
            },
            {
              title: "Consumer Goods",
              slug: '/consumer-goods',
              children: []
            }
          ]
        },
        {
          title: "Industries",
          slug: '/industries',
          children: [
            {
              title: "Automotive",
              slug: '/automotive',
              children: []
            },
            {
              title: "Consumer Goods",
              slug: '/consumer-goods',
              children: []
            }
          ]
        },
        {
          title: "Case Studies",
          slug: '/case-studies',
          children: []
        },
      ]
    },
    {
      title: "About",
      slug: '/about-us',
      children: []
    },
    {
      title: "Products",
      slug: '/products',
      children: []
    },
    {
      title: "Insight",
      slug: '/insight',
      children: [
        {
          title: "Ideas",
          slug: '/ideas',
          children: []
        },
        {
          title: "Videos",
          slug: '/videos',
          children: []
        },
      ]
    },
    {
      title: "Career",
      slug: '/career',
      children: []
    }
  ]
  
  return menus
})