export const lightBgPixel = {
  backgroundColor: '#ffffff',
  backgroundImage: `
    linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)
  `,
  backgroundSize: '20px 20px',
  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
}

export const darkBgPixel = {
  backgroundColor: '#2a2a2a',
  backgroundImage: `
    linear-gradient(45deg, #505050 25%, transparent 25%),
    linear-gradient(-45deg, #505050 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #505050 75%),
    linear-gradient(-45deg, transparent 75%, #505050 75%)
  `,
  backgroundSize: '20px 20px',
  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
}
