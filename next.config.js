/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `
        @import "~@styles/base/colors.scss";
        @import "~@styles/base/mixins.scss";
        `,
    },
    // async rewrites() {
    //     return [
    //         // Inscrição
    //         {
    //             source: '/inscricao',
    //             destination: '/subscribe',
    //         },
    //     ]
    // },
}

module.exports = nextConfig
