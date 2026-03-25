import './globals.css';

export const metadata = {
  title: 'Ayush Bharti | AI/ML Engineer Portfolio',
  description: 'Portfolio of Ayush Bharti - B.Tech CSE student specializing in AI/ML, Deep Learning, NLP, and Computer Vision. Built with Next.js.',
  keywords: ['AI', 'ML', 'Machine Learning', 'Deep Learning', 'Portfolio', 'Ayush Bharti', 'NLP', 'Computer Vision'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
