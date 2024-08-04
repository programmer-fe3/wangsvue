<template>
    <TemplateContainer :templateData="apolloData">
        <template #separator>
            <ApolloSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import ApolloLogo from '@/components/template/logo/ApolloLogo.vue';

export default {
    data() {
        return {
            apolloData: {
                components: [
                    {
                        name: TemplateHero,
                        props: {
                            templateHeroData: {
                                logo: ApolloLogo,
                                pattern: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-hero-pattern.png',
                                dashboard1: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-hero-dashboard1.png',
                                dashboard2: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-hero-dashboard2.png',
                                description: 'Application template for Vue based on Vite with light-dim-dark modes, four menu layouts, various menu themes, sample apps, ready to use template pages and 24 wangsVue themes.',
                                liveHref: 'https://apollo.wangsvue.org',
                                docHref: 'https://apollo.wangsvue.org/documentation',
                                pattern: {
                                    className: 'select-none absolute md:bottom-0 bottom-80 left-0 z-[6] md:w-[95rem] h-auto w-[90rem] opacity-60',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: TemplateLicense,
                        props: {
                            license: {
                                documentLink: 'https://apollo.wangsvue.org/documentation/',
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
                                    title: 'Light / Dark / Dim Modes',
                                    description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: 'Component Themes',
                                    description: 'Apollo offers 24 built-in component themes and creating your own theme is a matter of defining couple of sass variables.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-component-themes.png'
                                },
                                {
                                    id: 3,
                                    title: '7 Menu Orientations',
                                    description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/Static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Slim',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/Slim.png'
                                        },
                                        {
                                            id: 3,
                                            title: 'Reveal',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/Reveal.png'
                                        },
                                        {
                                            id: 4,
                                            title: 'Horizontal',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/Horizontal.png'
                                        },
                                        {
                                            id: 5,
                                            title: 'Overlay',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/Overlay.png'
                                        },
                                        {
                                            id: 6,
                                            title: 'Slim+',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/Slim+.png'
                                        },
                                        {
                                            id: 7,
                                            title: 'Drawer',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/Drawer.png'
                                        }
                                    ]
                                },
                                {
                                    id: 4,
                                    title: 'Menu Themes',
                                    description: 'Stunning theming for the main menu with 3 alternatives; Color Scheme, Primary Color and Transparent.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-menu-themes.png'
                                }
                            ]
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
                                {
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features1-feature1.png',
                                    title: 'Ready to Use Applications',
                                    description: 'Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.'
                                },
                                {
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features1-feature2.png',
                                    title: 'E-Commerce Pages',
                                    description: 'Apollo offers E-commerce pages to kickstart your e-commerce project powered by wangsBlocks.'
                                },
                                {
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features1-feature3.png',
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.'
                                }
                            ],
                            displayType: 'horizontal'
                        }
                    },
                    {
                        name: TemplateConfiguration,
                        props: {
                            configurationData: {
                                title: 'Vue based on Vite and Nuxt',
                                description: 'Apollo is powered by Vite and Nuxt to get started in no time following the best practices.'
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
                                    description: 'Apollo ships with wangsIcons, wangsTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/features-animation-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://blocks.wangsvue.org/">wangsBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.wangsvue.org/">wangsBlocks</a> is not included in the
                    template and requires a separate purchase.`,
                            description4: `
                    Apollo uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                    <a href="https://www.figma.com/file/zQOW0XBXdCTqODzEOqwBtt/Preview-%7C-Apollo-2022?node-id=335%3A21768&t=urYI89V3PLNAZEJG-1/">preview the Figma file</a>
                    before the purchase. Note that wangsVue UI components are excluded from the Apollo Figma file as they are available in
                    <WangsVueNuxtLink to="/uikit">wangsOne for Figma</WangsVueNuxtLink> only.`
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Apollo is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-responsive.png'
                                },
                                {
                                    title: 'Support',
                                    description: `wangsTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                                        can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY">Discord</a> and
                                        <a href="https://github.com/orgs/wangsfaces/discussions/categories/wangsvue-templates" class="doc-link">Forum</a>.`,
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-lifetime.png'
                                },
                                {
                                    title: 'Top Notch Quality',
                                    description: 'Superior standards with 100% compatibility for strict mode and linting tools.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-quality.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-quality-dark.png'
                                },
                                {
                                    title: 'Cross Browser Compatible',
                                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-compatible.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-compatible-dark.png'
                                },
                                {
                                    title: 'Customizable Design',
                                    description: 'Fully customizable with a mixture of Sass and CSS variables.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-customizable.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-customizable-dark.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/apollo/apollo-features2-mobile.png'
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
