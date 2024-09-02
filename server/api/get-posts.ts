export default defineEventHandler(event => {
  const posts = [
    {
      id: '1',
      publishedAt: '2021-08-01T00:00:00Z',
      author: 'John Doe',
      title: 'Cat Diet You Need to Know',
      slug: 'cat-diet-you-need-to-know',
      thumbnail: '/post-1.png',
      category: 'Cats',
      descriptions:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: `
        <p>Cats are obligate carnivores, which means their diet must be primarily composed of meat. A balanced diet is crucial for their health.</p>
        <ul>
          <li>High-quality protein from meat or fish.</li>
          <li>Essential fatty acids, like omega-3 and omega-6.</li>
          <li>Limited carbohydrates.</li>
        </ul>
        <p>Feeding your cat the right diet will help ensure they live a long and healthy life.</p>
      `,
    },
    {
      id: '2',
      publishedAt: '2021-08-01T00:00:00Z',
      author: 'Jane Smith',
      title: 'Dog Training Tips',
      slug: 'dog-training-tips',
      thumbnail: '/post-2.png',
      category: 'Dogs',
      descriptions:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: `
        <p>Training your dog is essential for a harmonious life together. Consistency, patience, and positive reinforcement are key.</p>
        <blockquote>
          "The bond with a true dog is as lasting as the ties of this earth will ever be." - Konrad Lorenz
        </blockquote>
        <p>Start with basic commands like <em>sit</em>, <em>stay</em>, and <em>come</em>. Reward your dog for good behavior and avoid punishment.</p>
      `,
    },
    {
      id: '3',
      publishedAt: '2021-08-01T00:00:00Z',
      author: 'Alice Johnson',
      title: 'Pet Grooming Guide',
      slug: 'pet-grooming-guide',
      thumbnail: '/post-3.png',
      category: 'Grooming',
      descriptions:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: `
        <p>Grooming is more than just keeping your pet looking good—it's crucial for their overall health.</p>
        <img src="/grooming-tools.jpg" alt="Grooming Tools" />
        <p>Here are some grooming tips:</p>
        <ol>
          <li>Brush your pet regularly to prevent mats and tangles.</li>
          <li>Trim their nails to avoid overgrowth and discomfort.</li>
          <li>Check their ears for signs of infection.</li>
        </ol>
        <p>Regular grooming sessions will help keep your pet happy and healthy.</p>
      `,
    },
  ]
  return posts
})
