module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'untitled': ['Untitledserif'],
        'sohemono': ['Söhnemono kräftig', 'sans-serif'],
        'sohemono-buch': ['Söhnemono buch', 'sans-serif'],
        'italianplate': ['Italianplateno1expanded', 'sans-serif'],
        'sohne-buch': ['Söhne buch', 'sans-serif'],
      },
      backgroundPosition: {
        'input-search': '20px 50%',
      },
      backgroundImage: {
        'icon-search': "url('https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f46c0373f1d4c23583f5ed3_search-grey.svg')",
        'img-hero-1': "url('https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/623a2135eacc3830adea99d9_Brian-Scudamore_Thumbnail.jpg')",
        'img-slide-1': "url('https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/623a2135eacc3830adea99d9_Brian-Scudamore_Thumbnail.jpg')",
      },
      colors: {
        'body': '#121212',
      },
    },
  },
  plugins: [],
}