<template>
    <TemplateContainer :templateData="sakaiData">
        <template #separator>
            <SakaiSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import SakaiLogo from '@/components/template/logo/SakaiLogo.vue';

export default {
    data() {
        return {
            sakaiData: {
                components: [
                    {
                        name: TemplateHero,
                        props: {
                            templateHeroData: {
                                logo: SakaiLogo,
                                pattern: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-hero-pattern.png',
                                dashboard1: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-hero-dashboard1.png',
                                dashboard2: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-hero-dashboard2.png',
                                description: 'Sakai is a free application template for Vue based on Vite and Nuxt.',
                                liveHref: 'https://sakai.wangsvue.org/',
                                docHref: 'https://sakai.wangsvue.org/documentation',
                                free: true,
                                storeHref: 'https://github.com/wangsfaces/sakai-vue',
                                supportHref: 'https://github.com/wangsfaces/sakai-vue/issues',
                                pattern: {
                                    className: 'select-none absolute z-[6] opacity-60 w-[50rem] h-[18rem] md:w-[52rem] md:h-[20rem] lg:w-[64rem] lg:h-[28rem] bottom-[26rem] md:bottom-0 left-0',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
                                {
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-github.png',
                                    title: 'Open Source and Free to Use',
                                    description: "Explore Sakai, our versatile, open-source Vue application template. It's free for your every innovation."
                                },
                                {
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-ready.png',
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, login and error pages are provided as template pages to get started with building your app in no time.'
                                }
                            ],
                            displayType: 'horizontal'
                        }
                    },
                    {
                        name: TemplateFeaturesAnimation,
                        props: {
                            title: 'Features',
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'Various Free Themes',
                                    description: 'Sakai has various free themes to choose from; wangsOne Design, Bootstrap, Material Design with light and dark options.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: '2 Menu Orientations',
                                    description: 'Sakai has 2 menu modes; Static and Overlay',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/atlantis/features-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/Static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Overlay',
                                            src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/Overlay.png'
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
                                title: 'Vue based on Vite and Nuxt',
                                description: 'Sakai is powered by Vite and Nuxt to get started in no time following the best practices.'
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
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/features-animation-utilities.png'
                                },
                                {
                                    id: 2,
                                    title: 'wangsBlocks',
                                    slotType: 'description2',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/features-animation-blocks.png'
                                },
                                {
                                    id: 3,
                                    title: 'wangsIcons',
                                    description: "Atlantis ships with wangsIcons, wangsTek's modern icon library including a wide range of icons for your applications.",
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/features-animation-icons.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://blocks.wangsvue.org/">wangsBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.wangsvue.org/">wangsBlocks</a> is not included in the
                template and requires a separate purchase.`
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Sakai is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-features2-responsive.png'
                                },
                                {
                                    title: 'Cross Browser Compatible',
                                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-features2-compatible.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-features2-compatible-dark.png'
                                },
                                {
                                    title: 'Full SaSS Support',
                                    description: 'Sass is utilized for both the application and components to provide simplicity and flexibility.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-features2-customizable.png',
                                    darkSrc: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-features2-customizable-dark.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://wangsfaces.org/cdn/wangsvue/images/templates/sakai/sakai-features2-mobile.png'
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
