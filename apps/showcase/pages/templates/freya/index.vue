<template>
    <TemplateContainer :templateData="freyaData">
        <template #separator>
            <FreyaSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import FreyaLogo from '@/components/template/logo/FreyaLogo.vue';

export default {
    data() {
        return {
            freyaData: {
                components: [
                    {
                        name: TemplateHero,
                        props: {
                            templateHeroData: {
                                logo: FreyaLogo,
                                pattern: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/freya-hero-pattern.png',
                                dashboard1: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/freya-hero-dashboard1.png',
                                dashboard2: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/freya-hero-dashboard2.png',
                                description: 'Freya is a modern admin template for developers and IT professionals. It comes with a huge collection of reusable UI components and dozens of built-in layouts for various purposes.',
                                liveHref: 'https://www.wangsfaces.org/freya-vue/',
                                docHref: 'https://freya.wangsvue.org/documentation',
                                pattern: {
                                    className: 'select-none absolute z-[6] w-[58rem] md:w-[50rem] h-auto top-12 md:top-32 -left-24 md:-left-12 opacity-75',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/freya-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: TemplateLicense,
                        props: {
                            license: {
                                documentLink: 'https://freya.wangsvue.org/documentation',
                                description: 'The download package is a Vite-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
                                showDiscount: false,
                                licenseDetails: [
                                    {
                                        title: 'Basic License',
                                        price: '$59',
                                        discount: '',
                                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', '1 Year Free Updates']
                                    },
                                    {
                                        title: 'Extended License',
                                        price: '$590',
                                        discount: '',
                                        included: ['Commercial Usage', 'Multiple End Products', '1 Year Free Updates']
                                    }
                                ]
                            }
                        }
                    },
                    {
                        name: TemplateFeaturesAnimation,
                        props: {
                            title: 'Features',
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'Light and Dark Modes',
                                    description: 'Impress your users with the Light and Dark modes.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: 'Component Themes',
                                    description: 'Freya offers 16 built-in component themes with dark and light options. Also if you wanna create your own theme you can do it by just defining couple SASS variables.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/features-animation-component-themes.png'
                                },
                                {
                                    id: 3,
                                    title: '7 Menu Orientations',
                                    description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/features-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/Static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Slim',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/Slim.png'
                                        },
                                        {
                                            id: 3,
                                            title: 'Reveal',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/Reveal.png'
                                        },
                                        {
                                            id: 4,
                                            title: 'Horizontal',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/Horizontal.png'
                                        },
                                        {
                                            id: 5,
                                            title: 'Overlay',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/Overlay.png'
                                        },
                                        {
                                            id: 6,
                                            title: 'Slim+',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/Slim+.png'
                                        },
                                        {
                                            id: 7,
                                            title: 'Drawer',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/Drawer.png'
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        name: TemplateConfiguration,
                        props: {
                            configurationData: {
                                title: 'Vue based on Vite',
                                description: 'Freya is powered by Vite to get started in no time following the best practices.'
                            }
                        }
                    },
                    {
                        name: TemplateFeaturesAnimation,
                        props: {
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'wangsFlex CSS Utilities',
                                    description: 'wangsFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-utilities.png'
                                },
                                {
                                    id: 2,
                                    title: 'wangsBlocks',
                                    slotType: 'description2',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-blocks.png'
                                },
                                {
                                    id: 3,
                                    title: 'wangsIcons',
                                    description: 'Freya ships with wangsIcons, wangsTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/features-animation-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://blocks.wangsvue.org/">wangsBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.wangsvue.org/">wangsBlocks</a> is not included in the
                template and requires a separate purchase.`,
                            description4: `
                                    Freya uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/eYBoRNff6GPTlrgYZaMStp/Preview-%7C-Freya-2022?node-id=0%3A1&t=MGAABDlOnz4QBcEk-1">preview the Figma file</a> before the purchase. Note that wangsVue UI components are excluded from the Freya Figma
                file as they are available in <WangsVueNuxtLink to="/uikit">wangsOne for Figma</WangsVueNuxtLink> only.`
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Freya is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/freya-features2-responsive.png'
                                },
                                {
                                    title: 'Cross Browser Compatible',
                                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-compatible.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-compatible-dark.png'
                                },
                                {
                                    title: 'Support',
                                    description: `wangsTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                                        can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY">Discord</a> and
                                        <a href="https://github.com/orgs/wangsfaces/discussions/categories/wangsvue-templates" class="doc-link">Forum</a>.`,
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-lifetime.png'
                                },
                                {
                                    title: 'Customizable Design',
                                    description: 'Fully customizable with a mixture of Sass and CSS variables.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-customizable.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-customizable-dark.png'
                                },
                                {
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/freya-features2-ready.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/freya/freya-features2-mobile.png'
                                }
                            ],
                            displayType: 'vertical'
                        }
                    }
                ]
            }
        };
    }
};
</script>
