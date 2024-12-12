const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme: 'dark',        // dark | light
    neutral: 'gray',        // sand | gray | slate
    brand: 'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: 'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: 'contrast',    // color | contrast
    solidStyle: 'flat',        // flat | plastic
    border: 'playful',     // rounded | playful | conservative
    surface: 'translucent', // filled | translucent
    transition: 'all',         // all | micro | macro
    scaling: '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'MaHDi - The Cyborg',
    description: 'Electronic profile website'
}


// default open graph data
const og = {
    title: 'MaHDi Profile',
    description: 'Backend and AI engineer',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Mahdi',
    description: 'Mahdi Alagab',
    email: 'elmahdi.alagab@gmail.com'
}

// social links
const social = {
    x: 'https://x.com/CodexMadai',
    linkedin: 'https://www.linkedin.com/in/mahdi-alagab/',
    discord: ''
}

export { baseURL, style, meta, og, schema, social };